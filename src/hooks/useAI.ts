import { useState, useCallback } from 'react';
import type { NPC, Story, Character, DialogMessage } from '../types/game';

const GEMINI_MODEL = 'gemini-2.5-flash';

interface UseAIOptions {
  apiKey: string;
}

interface GenerationConfig {
  temperature?: number;
  maxOutputTokens?: number;
  responseMimeType?: string;
}

/* ── 底層：統一呼叫 Gemini（含指數退避重試） ── */
async function callGemini(
  apiKey: string,
  prompt: string,
  config: GenerationConfig = {},
  timeoutMs = 20000,
  retries = 2
): Promise<string> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      if (!navigator.onLine) {
        throw new Error('目前處於離線狀態，無法連接 AI');
      }
      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: config.temperature ?? 0.7,
              maxOutputTokens: config.maxOutputTokens ?? 200,
              // 關掉 Gemini 2.5 Flash 的預設「思考」，否則思考會吃光 token、
              // 害真正的回應被砍到剩幾個字（NPC 講話斷句、邏輯怪的真兇）
              thinkingConfig: { thinkingBudget: 0 },
              ...(config.responseMimeType
                ? { responseMimeType: config.responseMimeType }
                : {}),
            },
          }),
          signal: controller.signal,
        }
      );
      clearTimeout(timeoutId);

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        const msg = err.error?.message ?? `API 錯誤 ${resp.status}`;
        // 4xx 客戶端錯誤不重試（金鑰無效、請求格式錯誤等）
        if (resp.status >= 400 && resp.status < 500) {
          throw new Error(msg);
        }
        lastError = new Error(msg);
        continue;
      }

      const data = await resp.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (!text) throw new Error('AI 未回傳有效內容');
      return text;
    } catch (e) {
      clearTimeout(timeoutId);
      if (e instanceof Error && e.name === 'AbortError') {
        lastError = new Error('AI 回應超時');
      } else if (e instanceof Error) {
        lastError = e;
        // 客戶端錯誤直接拋出，不再重試
        if (!e.message.includes('API 錯誤')) throw e;
      } else {
        lastError = new Error(String(e));
      }
    }
  }

  throw lastError ?? new Error('AI 呼叫失敗');
}

/* ── 回應快取（5 分鐘 TTL） ── */
interface CacheEntry {
  text: string;
  expiresAt: number;
}
const responseCache = new Map<string, CacheEntry>();
const CACHE_TTL = 5 * 60 * 1000;

function getCached(key: string): string | undefined {
  const entry = responseCache.get(key);
  if (!entry) return undefined;
  if (Date.now() > entry.expiresAt) {
    responseCache.delete(key);
    return undefined;
  }
  return entry.text;
}

function setCached(key: string, text: string): void {
  responseCache.set(key, { text, expiresAt: Date.now() + CACHE_TTL });
}

/* ── Hook ── */
export function useAI({ apiKey }: UseAIOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateNPCResponse = useCallback(
    async (
      npc: NPC,
      story: Story,
      playerCharacter: Character,
      history: DialogMessage[],
      userMessage: string,
      trustLevel?: number,
      isPrologue?: boolean
    ): Promise<string> => {
      setLoading(true);
      setError(null);

      try {
        if (!apiKey) throw new Error('尚未設定 Gemini API Key');
        const systemPrompt = buildNPCSystemPrompt(npc, story, playerCharacter, trustLevel ?? 50, isPrologue);
        const historyText = history
          .slice(-8)
          .map((h) => `${h.role === 'user' ? '玩家' : npc.name}：${h.content}`)
          .join('\n');

        const prompt = `${systemPrompt}\n\n【對話紀錄】\n${historyText}\n\n玩家：${userMessage}\n\n${npc.name}：（請以第一人稱回應，80字內，符合角色性格與秘密設定）`;

        const cacheKey = `${npc.id}|${userMessage}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        const result = await callGemini(apiKey, prompt, { temperature: 0.85, maxOutputTokens: 400 });
        setCached(cacheKey, result);
        return result;
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'AI 對話失敗';
        setError(message);
        return generateFallbackResponse(npc, userMessage);
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );

  const generateSceneDescription = useCallback(
    async (locationName: string, story: Story): Promise<string> => {
      const staticDesc = story.locations.find((l) => l.name === locationName)?.description ?? '';
      if (!apiKey) return staticDesc;
      setLoading(true);
      try {
        const prompt = `你是一位懸疑小說場景描寫助手。請用繁體中文，以第二人稱「你」描寫玩家進入「${locationName}」的場景，50字內，帶有懸疑氛圍。案件背景：${story.synopsis}`;
        return await callGemini(apiKey, prompt, { temperature: 0.7, maxOutputTokens: 150 }, 15000);
      } catch {
        return staticDesc;
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );

  const generateEnding = useCallback(
    async (
      story: Story,
      accusedId: string,
      playerCharacter: Character,
      collectedClues: string[],
      specialFlags?: Record<string, string>,
      plantedEvidence?: Record<string, string[]>,
      destroyedClues?: string[]
    ): Promise<{ isCorrect: boolean; ending: string; endingTier: 'perfect' | 'correct_but_blind' | 'wrong_with_evidence' | 'wrong_and_blind' | 'struck_down' | 'killer_escaped' | 'agenda_complete' }> => {
      const isCorrect = accusedId === story.truth.murdererId;
      const evidenceRatio = collectedClues.length / Math.max(1, story.clues.length);
      let fallbackTier: 'perfect' | 'correct_but_blind' | 'wrong_with_evidence' | 'wrong_and_blind' | 'struck_down' | 'killer_escaped' | 'agenda_complete' = isCorrect
        ? (evidenceRatio >= 0.7 ? 'perfect' : 'correct_but_blind')
        : (evidenceRatio >= 0.5 ? 'wrong_with_evidence' : 'wrong_and_blind');

      // 特殊機制覆蓋結局等級
      if (specialFlags?.endingCause === 'struck_down') {
        fallbackTier = 'struck_down';
      } else if (specialFlags?.endingCause === 'killer_escaped') {
        fallbackTier = 'killer_escaped';
      } else if (specialFlags?.agendaDone === 'true') {
        // agenda complete 是附加標記，不改變基礎 tier，但 AI prompt 會提到
      }
      const fallback = {
        isCorrect,
        ending: story.truth.fullExplanation,
        endingTier: fallbackTier,
      };
      if (!apiKey) return fallback;

      setLoading(true);
      try {
        const cluesText = story.clues
          .filter((c) => collectedClues.includes(c.id))
          .map((c) => `- ${c.name}：${c.description}`)
          .join('\n');

        let tierInstruction = '';
        if (fallbackTier === 'perfect') {
          tierInstruction = '結局等級：完美破案。玩家不只指認正確，還掌握了充分的證據鏈。結局要讓玩家感到「我確實證明了這一切」，揭露完整真相與每個人的秘密，像一部完整的懸疑小說收尾。';
        } else if (fallbackTier === 'correct_but_blind') {
          tierInstruction = '結局等級：蒙對了。玩家指認正確，但證據不足，像是靠直覺或運氣猜中的。結局要呈現一種「雖然猜對了，但其實我不完全懂為什麼」的微妙感，真凶承認時帶有一絲嘲諷或憐憫。';
        } else if (fallbackTier === 'wrong_with_evidence') {
          tierInstruction = '結局等級：證據充足但推理錯誤。玩家收集了夠多線索，但解讀錯了方向，冤枉了無辜的人。結局要呈現一種悲劇感——真凶逍遙法外，被冤枉的人絕望，玩家意識到「我離真相那麼近，卻走向了反方向」。';
        } else {
          tierInstruction = '結局等級：全盤皆錯。玩家證據不足，推理也錯了。結局要呈現一種迷霧般的無力感，真凶冷笑著離開，被冤枉的人無法辯駁，玩家只知道「我搞錯了」，卻不知道錯在哪裡。';
        }

        const specialFlagsText = specialFlags && Object.keys(specialFlags).length > 0
          ? '\n特殊狀態標記：' + Object.entries(specialFlags).map(([k, v]) => `${k}=${v}`).join(', ')
          : '';

        // 解析玩家的關鍵抉擇
        const keyChoices = specialFlags
          ? Object.entries(specialFlags)
              .filter(([k]) => k.includes('-choice-'))
              .map(([k, v]) => {
                const smConfig = story.specialMechanic?.config as { choices?: Array<{ id: string; question: string; options: Array<{ label: string; value: string }> }> } | undefined;
                const choice = smConfig?.choices?.find((c) => c.id === k);
                if (!choice) return null;
                const opt = choice.options.find((o) => o.value === v);
                return opt ? `「${choice.question}」→ 玩家選擇了「${opt.label}」` : null;
              })
              .filter(Boolean)
          : [];
        const keyChoicesText = keyChoices.length > 0
          ? '\n玩家在遊戲中的關鍵抉擇：\n' + keyChoices.join('\n')
          : '';

        // 玩家的秘密序幕與隱藏任務
        const secretPrologueText = playerCharacter.secretPrologue
          ? `\n玩家的秘密序幕：${playerCharacter.secretPrologue}`
          : '';
        const hiddenAgendaText = playerCharacter.hiddenAgenda
          ? `\n玩家的隱藏任務：${playerCharacter.hiddenAgenda}${specialFlags?.agendaDone === 'true' ? '（已完成）' : '（未完成）'}`
          : '';

        let extraInstruction = '';
        if (fallbackTier === 'struck_down') {
          extraInstruction = '結局等級：被滅口。玩家在調查過程中被真兇發現並殺害。結局要呈現一種突如其來的黑暗——話還沒說完，燈就滅了。不要寫得太血腥，但要讓人感到寒意。';
        } else if (fallbackTier === 'killer_escaped') {
          const plantedCount = (plantedEvidence?.[accusedId] || []).length;
          const destroyedCount = destroyedClues?.length || 0;
          if (plantedCount >= 3 && destroyedCount >= 2) {
            extraInstruction = '結局等級：完美栽贓。玩家是兇手，不僅銷毀了自己的關鍵痕跡，還精心構建了指向無辜者的證據鏈。結局要呈現一種令人不寒而慄的精密感——每一個「巧合」都是你安排的，而被栽贓的人甚至不知道自己為什麼會被懷疑。讓讀者感到：這是一場完美的犯罪。';
          } else if (plantedCount >= 1) {
            extraInstruction = '結局等級：勉強栽贓。玩家是兇手，嘗試栽贓給別人，但證據不夠充分，銷毀也不夠徹底。結局要呈現一種懸而未決的緊張感——被栽贓的人雖然被帶走了，但人群中有人露出懷疑的眼神，讓玩家知道「也許遲早會被發現」。';
          } else {
            extraInstruction = '結局等級：盲目栽贓。玩家是兇手，卻幾乎沒有做任何準備就隨便指認了一個人。結局要呈現一種魯莽與僥倖交織的荒謬感——你居然真的矇混過關了，但你自己心裡清楚，這只是運氣，不是計謀。';
          }
        } else if (specialFlags?.agendaDone === 'true') {
          extraInstruction = '此外，玩家完成了自己的隱藏任務。結局最後一段要簡短提及這個隱藏任務的後續——像是小說的尾聲，讓人回味。';
        }

        const prompt = `【GM 專用】這是劇本殺遊戲的結局判定。\n\n案件：${story.title}\n真相：兇手是 ${story.characters.find((c) => c.id === story.truth.murdererId)?.name}。\n手法：${story.truth.method}\n動機：${story.truth.motive}\n\n玩家扮演：${playerCharacter.name}\n玩家收集的線索（共 ${collectedClues.length}/${story.clues.length} 個）：\n${cluesText || '（無）'}\n\n玩家指認的兇手：${story.characters.find((c) => c.id === accusedId)?.name}${secretPrologueText}${hiddenAgendaText}${keyChoicesText}${specialFlagsText}\n\n${tierInstruction}\n${extraInstruction}\n\n請產生 JSON：\n{\n  "isCorrect": ${isCorrect},\n  "endingTier": "${fallbackTier}",\n  "ending": "結局旁白，250字內。用文學筆調書寫，像小說的最後一章。要有畫面感、情緒餘韻，不要像遊戲說明書。"\n}`;

        const raw = await callGemini(apiKey, prompt, { responseMimeType: 'application/json', temperature: 0.6, maxOutputTokens: 1000 }, 25000);
        const parsed = JSON.parse(raw);
        return {
          isCorrect: parsed.isCorrect ?? fallback.isCorrect,
          endingTier: parsed.endingTier ?? fallback.endingTier,
          ending: parsed.ending || fallback.ending,
        };
      } catch {
        return fallback;
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );

  return { generateNPCResponse, generateSceneDescription, generateEnding, loading, error };
}

/* ── 私有輔助函數 ── */

function buildNPCSystemPrompt(npc: NPC, story: Story, player: Character, trust: number, isPrologue?: boolean): string {
  if (isPrologue) {
    const trustDesc =
      trust >= 70
        ? '（玩家與你關係很好，你願意多說一些）'
        : trust <= 30
        ? '（玩家與你關係冷淡，你有所保留）'
        : '（玩家與你關係普通，禮貌但謹慎）';
    return `【角色扮演設定 - 序幕階段】\n你是「${story.title}」中的「${npc.name}」，身份是${npc.role}。\n\n【你的角色設定】\n性格：${npc.personality}\n你的秘密：${npc.secret}\n\n【當前情境】\n這是一個聚會/重逢場合，氣氛表面輕鬆但暗流湧動。你還活著，對於即將發生的事一無所知。不要提到任何與「死亡」「謀殺」「調查」相關的內容。\n\n【玩家資訊】\n玩家扮演：${player.name}，${player.role}\n\n【扮演規則 - 序幕階段】\n1. 用第一人稱「我」回答，每次40-80字\n2. 根據信任度調整坦誠程度${trustDesc}\n3. 對於涉及你秘密的話題，選擇隱瞞、轉移話題或半真半假地回答\n4. 每次回答帶一點情緒細節（眼神、動作、語氣停頓）\n5. 可以談論聚會、其他客人、過去的回憶、未來的計畫\n6. 不要主動提及「誰是兇手」「有人死了」等內容——因為此刻還沒有人死\n7. **重要：如果玩家問的問題與案件、死者、現場完全無關（例如天氣、吃飯、閒聊），你應該正常回答，因為這是聚會場合**`;
  }
  const truth = story.truth;
  const trustDesc =
    trust >= 70
      ? '（玩家信任度高，你願意多說一些，甚至透露平時不說的細節）'
      : trust <= 30
      ? '（玩家信任度低，你戒心很重，話少，甚至會反問）'
      : '（玩家信任度普通，謹慎但不至於敵意）';
  return `【角色扮演設定】\n你是「${story.title}」中的 NPC「${npc.name}」，身份是${npc.role}。\n\n【案件真相 - GM 專用，你知道但不一定說】\n兇手：${story.characters.find((c) => c.id === truth.murdererId)?.name}\n手法：${truth.method}\n\n【你的角色設定】\n性格：${npc.personality}\n你的秘密：${npc.secret}\n你會說謊的話題：${npc.liesAbout.join('、') || '無'}\n你會說實話的話題：${npc.tellsTruthAbout.join('、') || '無'}\n\n【當前信任度：${trust}/100】${trustDesc}\n\n【玩家資訊】\n玩家扮演：${player.name}，${player.role}\n\n【扮演規則 - 劇本殺沉浸模式】\n1. 你是真人，不是 AI。用第一人稱「我」回答，每次 40-80 字，要有情緒起伏\n2. 根據信任度調整坦誠程度——信任高時可以嘆氣、流露脆弱；信任低時冷笑、反問、沉默\n3. 對於「說謊的話題」，選擇隱瞞、說謊或轉移話題，不要全部否認\n4. 對於「說實話的話題」，可以選擇性透露，甚至反過來試探玩家知道多少\n5. 永遠不要直接說出「誰是兇手」，但可以暗示、懷疑、指控別人\n6. 每次回答都要帶一點情緒細節（眼神、動作、語氣停頓），讓對話像真人對質
7. **重要：你有三分之一到二分之一的機率，在回答完玩家問題後，反過來質問玩家。尤其是當玩家問到敏感話題、你的秘密、或者你的不在場證明時，你必須反問回去。反問要簡短有力，像真人被戳到痛處時的反射動作。**\n8. **關鍵：如果玩家問的問題與案件、死者、現場、你的行蹤完全無關（例如天氣、吃飯、閒聊、網路梗），你必須表現出困惑或不耐煩，簡短地把話題拉回案件。不要認真回答無關問題。**`;
}

const offTopicPatterns = [
  '天氣', '吃什麼', '吃飯', '好吃', '喜歡吃', '最愛吃',
  '你好', '哈囉', '嗨', '在嗎', '在幹嘛',
  '幾歲', '生日', '星座', '血型',
  '好看', '電影', '音樂', '遊戲', '手機',
  '特朗普', '拜登', '政治', '股票', '比特幣',
  '笑死', '哈哈哈', '666', 'yyds', 'omg',
  'chatgpt', 'ai', '人工智慧', '機器人',
  '1+1', '數學', '物理', '化學',
  '耶穌', '佛祖', '上帝', '宗教',
];

function isOffTopic(message: string): boolean {
  const lower = message.toLowerCase();
  return offTopicPatterns.some((p) => lower.includes(p));
}

function generateOffTopicResponse(npc: NPC): string {
  const responses = [
    `現在是說這個的時候嗎？我正煩著呢。`,
    `你…是不是搞錯重點了？我們在查命案。`,
    `我沒心情聊這個。你還有別的問題嗎？`,
    `這跟案件有什麼關係？你是在浪費時間。`,
    `（皺眉）你認真一點好嗎？`,
    `算了，你還是問點有用的吧。`,
  ];
  if (npc.personality.includes('冷') || npc.personality.includes('暴躁')) {
    return responses[2];
  }
  if (npc.personality.includes('溫') || npc.personality.includes('善')) {
    return `呃…這個嘛…（勉強微笑）我們還是先談正事吧？`;
  }
  return responses[Math.floor(Math.random() * responses.length)];
}

function generateFallbackResponse(npc: NPC, userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (isOffTopic(userMessage)) {
    return generateOffTopicResponse(npc);
  }
  if (lower.includes('兇手') || lower.includes('誰殺')) {
    const evasions = [
      '這件事…我也不敢亂說。你覺得呢？',
      '我當時不在場，真的不清楚。',
      '這種話可不能隨便說，你有證據嗎？',
    ];
    return evasions[Math.floor(Math.random() * evasions.length)];
  }
  if (lower.includes('知道') || lower.includes('看到') || lower.includes('聽到')) {
    return '我確實知道一些事…但現在還不是說的時候。';
  }
  return '嗯…讓我想想。你為什麼會這麼問？';
}
