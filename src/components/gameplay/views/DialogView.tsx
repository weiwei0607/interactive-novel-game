import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { MessageCircle, Send, MapPin, ChevronRight, AlertTriangle, Clock, Moon, Sun } from 'lucide-react';
import type { Story, Character, NPC } from '../../../types/game';
import { useGameStore } from '../../../store/gameStore';
import { computeGameTime } from '../../../utils/gameTime';
import { useAI } from '../../../hooks/useAI';
import PortraitAvatar from '../PortraitAvatar';

interface Props {
  story: Story;
  playerCharacter: Character;
  selectedNpc: NPC;
  apiKey: string;
  onBack: () => void;
  onGoMap: () => void;
  onTrustChange: (npc: string, delta: number) => void;
  questionsRemaining: number;
  isPrologue?: boolean;
}

export default function DialogView({
  story, playerCharacter, selectedNpc, apiKey, onBack, onGoMap, onTrustChange,
  isPrologue = false,
}: Props) {
  const [input, setInput] = useState('');
  const dialogEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const npcDialogHistory = useGameStore((s) => s.npcDialogHistory);
  const npcTrustLevel = useGameStore((s) => s.npcTrustLevel);
  const addDialogMessage = useGameStore((s) => s.addDialogMessage);
  const questionsRemaining = useGameStore((s) => s.questionsRemaining);
  const prologueActionsRemaining = useGameStore((s) => s.prologueActionsRemaining);
  const spendQuestion = useGameStore((s) => s.spendQuestion);
  const spendPrologueAction = useGameStore((s) => s.spendPrologueAction);
  const setSpecialFlag = useGameStore((s) => s.setSpecialFlag);
  const setPhase = useGameStore((s) => s.setPhase);
  const specialFlags = useGameStore((s) => s.specialFlags);
  const elapsedMinutes = useGameStore((s) => s.elapsedMinutes);

  const gameTime = computeGameTime(elapsedMinutes, isPrologue);
  const timeIcon = gameTime.period === 'night' || gameTime.period === 'pre-dawn'
    ? <Moon className="w-3 h-3 text-ink-4" />
    : <Sun className="w-3 h-3 text-cinnabar-2" />;

  const actionRemaining = isPrologue ? prologueActionsRemaining : questionsRemaining;

  const history = useMemo(() => npcDialogHistory[selectedNpc.id] || [], [npcDialogHistory, selectedNpc.id]);
  const trust = npcTrustLevel[selectedNpc.id] || 50;

  // 打字機效果
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const lastMsgRef = useRef('');

  useEffect(() => {
    const lastMsg = history[history.length - 1];
    if (lastMsg?.role === 'npc' && lastMsg.content !== lastMsgRef.current) {
      lastMsgRef.current = lastMsg.content;
      setIsTyping(true);
      setTypedText('');
      let i = 0;
      const content = lastMsg.content;
      const timer = setInterval(() => {
        i++;
        setTypedText(content.slice(0, i));
        if (i >= content.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 22);
      return () => clearInterval(timer);
    }
  }, [history]);

  useEffect(() => {
    dialogEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, typedText, selectedNpc.id]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [selectedNpc.id]);

  const isSendingRef = useRef(false);

  const { generateNPCResponse, loading, error } = useAI({ apiKey });
  const isNpcSpeaking = isTyping || loading;

  // 分析情緒
  const lastNpcMsg = [...history].reverse().find((m) => m.role === 'npc');
  const npcMood = (() => {
    if (!lastNpcMsg || isTyping) return null;
    const t = lastNpcMsg.content;
    if (/驚恐|害怕|恐懼|嚇|慌|退|躲|避/.test(t)) return 'dodge';
    if (/憤怒|生氣|恨|怒|吼|火大|不爽|該死/.test(t)) return 'angry';
    if (/驚訝|震驚|嚇到|不可能/.test(t)) return 'panic';
    if (/說謊|假裝|裝|騙|掩飾|心虛/.test(t)) return 'lie';
    if (/冷靜|平靜|安靜|沉著/.test(t)) return 'float';
    return null;
  })();

  const moodColor = npcMood === 'angry' ? 'from-red-600/30 to-red-950/30 border-red-500/40'
    : npcMood === 'dodge' ? 'from-ink-3/20 to-night-2/30 border-ink-4/30'
    : npcMood === 'panic' ? 'from-red-500/20 to-red-900/20 border-red-500/30'
    : npcMood === 'lie' ? 'from-purple-500/20 to-purple-900/20 border-purple-500/30'
    : npcMood === 'float' ? 'from-verdigris-2/20 to-verdigris/20 border-verdigris-2/30'
    : 'from-cinnabar-2/10 to-night-2/20 border-cinnabar-2/20';

  const handleSend = useCallback(async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading || isSendingRef.current || actionRemaining <= 0) return;
    isSendingRef.current = true;
    setInput('');
    if (isPrologue) {
      spendPrologueAction();
    } else {
      spendQuestion();
    }
    addDialogMessage(selectedNpc.id, { role: 'user', content: text });

    try {
      const response = await generateNPCResponse(
        selectedNpc, story, playerCharacter, history, text, trust, isPrologue
      );
      addDialogMessage(selectedNpc.id, { role: 'npc', content: response });

      const lower = text.toLowerCase();
      let delta = 0;
      if (lower.includes('謝謝') || lower.includes('相信')) delta += 5;
      if (lower.includes('說謊') || lower.includes('騙')) delta -= 10;
      if (delta !== 0) {
        onTrustChange(selectedNpc.name, delta);
      }

      // killer_may_strike 檢測（序幕階段不觸發）
      const sm = story.specialMechanic;
      if (!isPrologue && sm?.type === 'killer_may_strike' && selectedNpc.id === story.truth.murdererId) {
        const keywords = (sm.config.sensitiveKeywords as string[]) || ['兇器', '刀', '殺', '血', '動機', '不在場', '指紋', '證據', '兇手'];
        const isSensitive = keywords.some((k) => lower.includes(k));
        if (isSensitive) {
          const currentCount = parseInt(specialFlags.strikeCount || '0', 10);
          const newCount = currentCount + 1;
          const threshold = (sm.config.strikeThreshold as number) || 4;
          setSpecialFlag('strikeCount', String(newCount));
          if (newCount >= threshold) {
            setSpecialFlag('endingCause', 'struck_down');
            setPhase('ending');
          }
        }
      }
    } finally {
      isSendingRef.current = false;
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [input, loading, selectedNpc, story, playerCharacter, history, trust, generateNPCResponse, addDialogMessage, onTrustChange, actionRemaining, isPrologue, setPhase, setSpecialFlag, specialFlags, spendPrologueAction, spendQuestion]);

  const quickQuestions = [
    '案發時你在哪裡？',
    '你認識死者嗎？',
    '你有看到什麼可疑的事嗎？',
    '你覺得誰最可疑？',
  ];

  // NPC 是否剛問了問題？（複用上面分析的 lastNpcMsg）
  const npcIsAsking = lastNpcMsg && /[？?]$/.test(lastNpcMsg.content.trim()) && !isTyping && !loading;

  // NPC 反問時的快速回答選項
  const quickReplies = npcIsAsking
    ? [
        { label: '否認', text: '不是我，你搞錯了。' },
        { label: '反問', text: '你為什麼這樣問？' },
        { label: '迴避', text: '這個問題我現在不想回答。' },
        { label: '反擊', text: '與其問我，不如問問你自己？' },
      ]
    : null;

  // 根據當前地點決定背景色調
  const currentLoc = story.locations.find((l) =>
    story.npcs.find((n) => n.id === selectedNpc.id)?.defaultLocation === l.id
  );
  const bgGradient = currentLoc?.id.includes('night') || currentLoc?.id.includes('dark')
    ? 'from-night via-night-2 to-indigo-950'
    : currentLoc?.id.includes('fire') || currentLoc?.id.includes('blood')
    ? 'from-night via-red-950/30 to-night-2'
    : 'from-night via-night-2 to-cinnabar-deep/20';

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 場景背景 — 漸層 + 飄浮粒子 */}
      <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient} transition-colors duration-1000`} />

      {/* 飄浮粒子 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cinnabar-3/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `floatParticle ${8 + i * 2}s ease-in-out ${i * 1.5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* 頂部導航 */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5 pb-2">
        <button
          onClick={onBack}
          className="p-2 rounded-full bg-night-2/40 backdrop-blur-sm border border-ink-3/30 hover:bg-night-3/60 transition-colors"
        >
          <ChevronRight className="w-5 h-5 rotate-180 text-paper-3" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-night-2/40 backdrop-blur-sm border border-ink-3/30">
            <div className={`w-2 h-2 rounded-full ${trust > 70 ? 'bg-verdigris-2' : trust > 40 ? 'bg-cinnabar-2' : 'bg-red-400'} ${isNpcSpeaking ? 'animate-pulse' : ''}`} />
            <span className="text-xs text-ink-4">信任度 {trust}%</span>
          </div>
          {!isPrologue && story.specialMechanic?.type === 'killer_may_strike' && selectedNpc.id === story.truth.murdererId && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-950/40 backdrop-blur-sm border border-red-800/30">
              <AlertTriangle className="w-3 h-3 text-red-400" />
              <span className="text-xs text-red-400">
                殺意 {specialFlags.strikeCount || '0'}/{(story.specialMechanic.config.strikeThreshold as number) || 4}
              </span>
            </div>
          )}
          {isPrologue && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-verdigris-deep/30 backdrop-blur-sm border border-verdigris/30">
              <span className="text-xs text-verdigris-2">序幕</span>
            </div>
          )}
        </div>
        <button
          onClick={onGoMap}
          className="p-2 rounded-full bg-night-2/40 backdrop-blur-sm border border-ink-3/30 hover:bg-night-3/60 transition-colors"
        >
          <MapPin className="w-5 h-5 text-paper-3" />
        </button>
      </div>

      {/* 時間顯示 */}
      <div className="relative z-10 flex items-center justify-center gap-1.5 mb-1 text-[11px] text-ink-4">
        <Clock className="w-3 h-3" />
        <span className="font-medium text-paper-3">{gameTime.periodLabel} {gameTime.label}</span>
        {timeIcon}
      </div>

      {/* 角色立繪區 — 佔畫面上半部 */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-4 px-5">
        {/* 角色名標籤 */}
        <div className="mb-3 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${moodColor} border backdrop-blur-sm text-paper`}>
            {selectedNpc.name}
          </span>
          <span className="text-xs text-ink-4">{selectedNpc.role}</span>
        </div>

        {/* 大頭像區域 */}
        <div className="relative">
          {/* 外圍光環 */}
          <div
            className={`absolute inset-0 rounded-full transition-opacity duration-500 ${isNpcSpeaking ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
              transform: 'scale(1.8)',
            }}
          />
          {/* 脈衝環 */}
          {isNpcSpeaking && (
            <span
              className="absolute inset-0 rounded-full border border-cinnabar-2/30"
              style={{ animation: 'pulseRing 1.5s ease-out infinite' }}
            />
          )}

          {/* 頭像本體 */}
          <div className="relative">
            <PortraitAvatar
              target={selectedNpc}
              era={story.era}
              mood={npcMood}
              isSpeaking={isNpcSpeaking}
              size="lg"
            />
            {/* 情緒指示 */}
            {npcMood && (
              <span className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-night-2 flex items-center justify-center text-[10px] ${
                npcMood === 'angry' ? 'bg-red-500' : npcMood === 'dodge' ? 'bg-ink-3' : npcMood === 'panic' ? 'bg-red-400' : npcMood === 'lie' ? 'bg-purple-500' : 'bg-verdigris-2'
              }`}>
                {npcMood === 'angry' ? '💢' : npcMood === 'dodge' ? '💨' : npcMood === 'panic' ? '❗' : npcMood === 'lie' ? '👀' : '✨'}
              </span>
            )}
          </div>
        </div>

        {/* 說話中的指示器 */}
        {isNpcSpeaking && (
          <div className="mt-3 flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cinnabar-2 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-cinnabar-2 animate-bounce" style={{ animationDelay: '0.15s' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-cinnabar-2 animate-bounce" style={{ animationDelay: '0.3s' }} />
          </div>
        )}
      </div>

      {/* 對話框區域 — 下半部 */}
      <div className="relative z-10 bg-gradient-to-t from-night via-night/95 to-transparent pt-6 pb-4">
        {/* 對話內容 */}
        <div className="px-5 h-40 overflow-y-auto scrollbar-hide mb-3">
          {history.length === 0 ? (
            <div className="text-center py-8 text-ink-4">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-xs">開始與 {selectedNpc.name} 對話</p>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((msg, i) => {
                const isLastNpc = msg.role === 'npc' && i === history.length - 1 && isTyping;
                const isNew = i >= history.length - 2;
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={i}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                    style={isNew ? {
                      animation: isUser ? 'slideInRight 0.3s ease-out' : 'slideInLeft 0.3s ease-out',
                    } : undefined}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed backdrop-blur-sm ${
                        isUser
                          ? 'bg-cinnabar/30 text-paper-2 rounded-br-md border border-cinnabar-2/20'
                          : 'bg-night-3/60 text-paper rounded-bl-md border border-ink-3/30'
                      }`}
                      style={isNew ? { animation: 'bubblePop 0.3s ease-out' } : undefined}
                    >
                      {isLastNpc ? (
                        <span>
                          {typedText}
                          <span className="inline-block w-0.5 h-4 bg-cinnabar-2 ml-0.5 animate-pulse" />
                        </span>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={dialogEndRef} />
            </div>
          )}
          {error && (
            <div className="flex justify-center mt-2">
              <div className="bg-red-950/60 border border-red-800/40 px-4 py-2 rounded-xl text-xs text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                {error} — NPC 使用預設回應
              </div>
            </div>
          )}
        </div>

        {/* NPC 反問時的快速回答 */}
        {quickReplies && (
          <div className="px-5 mb-3">
            <p className="text-[10px] text-cinnabar-2/70 mb-1.5">{selectedNpc.name} 在等你的回答...</p>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {quickReplies.map((r) => (
                <button
                  key={r.label}
                  onClick={() => handleSend(r.text)}
                  disabled={loading}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-red-950/30 border border-red-800/30 text-xs text-red-300 hover:bg-red-900/40 hover:border-red-700/50 transition-colors disabled:opacity-40"
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 快捷問題（NPC 沒反問時顯示） */}
        {!quickReplies && (
          <div className="flex gap-2 px-5 mb-3 overflow-x-auto scrollbar-hide">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                disabled={loading}
                className="shrink-0 px-3 py-1.5 rounded-full bg-night-3/40 border border-ink-3/30 text-xs text-ink-4 hover:text-paper hover:border-ink-3 transition-colors disabled:opacity-40"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* 輸入框 */}
        <div className="px-5">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && !loading && handleSend()}
              placeholder={`對 ${selectedNpc.name} 說話...`}
              disabled={loading}
              className="flex-1 px-4 py-3 bg-night-2/60 border border-ink-3/50 rounded-xl text-sm focus:outline-none focus:border-cinnabar-2/50 disabled:opacity-50 backdrop-blur-sm"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-3 rounded-xl bg-gradient-to-r from-cinnabar to-cinnabar-2 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:from-cinnabar-2 hover:to-cinnabar-2 transition-all shadow-lg shadow-cinnabar/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
