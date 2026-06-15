import { useState, useCallback } from 'react';
import { MapPin, MessageCircle, Moon, ChevronRight, Clock } from 'lucide-react';
import type { Story, Character, NPC, Location } from '../../types/game';
import { useGameStore } from '../../store/gameStore';
import { computeGameTime } from '../../utils/gameTime';
import DialogView from '../gameplay/views/DialogView';
import PortraitAvatar from '../gameplay/PortraitAvatar';

interface Props {
  story: Story;
  playerCharacter: Character;
  apiKey: string;
  onEndPrologue: () => void;
}

export default function PrologueScreen({ story, playerCharacter, apiKey, onEndPrologue }: Props) {
  const [view, setView] = useState<'main' | 'dialog' | 'location'>('main');
  const [selectedNpc, setSelectedNpc] = useState<NPC | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const prologueActionsRemaining = useGameStore((s) => s.prologueActionsRemaining);

  const elapsedMinutes = useGameStore((s) => s.elapsedMinutes);

  const gameTime = computeGameTime(elapsedMinutes, true);

  // 序幕階段：受害者也是可互動 NPC
  const victimChar = story.characters.find((c) => c.id === story.truth.murdererId);
  const prologueNpcs = [...story.npcs];
  // 如果受害者不在 npcs 中，暫時添加（僅序幕階段）
  if (victimChar && !prologueNpcs.find((n) => n.id === victimChar.id)) {
    prologueNpcs.push({
      id: victimChar.id,
      name: victimChar.name,
      avatar: victimChar.avatar,
      role: victimChar.role,
      personality: victimChar.description.slice(0, 100) || '有所保留',
      secret: victimChar.secret,
      liesAbout: [],
      tellsTruthAbout: [],
      defaultLocation: story.locations[0]?.id || '',
      aiPrompt: `你是「${story.title}」中的「${victimChar.name}」，身份是${victimChar.role}。\n\n【你的角色設定】\n${victimChar.description}\n\n【你的秘密】\n${victimChar.secret}\n\n【當前情境】\n這是一個聚會/重逢場合，氣氛表面輕鬆但暗流湧動。你還活著，對於即將發生的事一無所知。你可能是這場聚會的主辦者，也可能是被邀請來的客人。\n\n【扮演規則】\n1. 用第一人稱「我」回答，每次40-80字\n2. 根據你的角色設定調整語氣——如果你是富商，談吐自信帶有壓迫感；如果你是僕人，謙卑但眼神閃爍\n3. 對於涉及你秘密的話題，選擇隱瞞、轉移話題或半真半假地回答\n4. 每次回答帶一點情緒細節（眼神、動作、語氣停頓）\n5. 你不知道自己是受害者，所以不會提到「死亡」「謀殺」等詞\n6. 你可以談論聚會、其他客人、過去的回憶、未來的計畫`,
    });
  }

  const handleTalk = useCallback((npc: NPC) => {
    if (prologueActionsRemaining <= 0) return;
    setSelectedNpc(npc);
    setView('dialog');
  }, [prologueActionsRemaining]);

  const handleEnterLocation = useCallback((loc: Location) => {
    if (prologueActionsRemaining <= 0) return;
    setSelectedLocation(loc);
    setView('location');
  }, [prologueActionsRemaining]);

  const handleBack = useCallback(() => {
    setView('main');
    setSelectedNpc(null);
    setSelectedLocation(null);
  }, []);

  const handleTrustChange = useCallback(() => {}, []);

  if (view === 'dialog' && selectedNpc) {
    return (
      <DialogView
        story={story}
        playerCharacter={playerCharacter}
        selectedNpc={selectedNpc}
        apiKey={apiKey}
        onBack={handleBack}
        onGoMap={handleBack}
        onTrustChange={handleTrustChange}
        questionsRemaining={prologueActionsRemaining}
        isPrologue
      />
    );
  }

  if (view === 'location' && selectedLocation) {
    return (
      <div className="min-h-screen px-5 py-6 animate-fade-in">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 text-ink-4 text-sm mb-4 hover:text-paper transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          返回
        </button>
        <h2 className="text-xl font-bold mb-2">{selectedLocation.name}</h2>
        <p className="text-sm text-ink-4 mb-6 leading-relaxed">{selectedLocation.description}</p>
        {selectedLocation.npcs.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xs text-ink-4 uppercase tracking-wider mb-2">在場的人</h3>
            <div className="space-y-2">
              {selectedLocation.npcs.map((npcId) => {
                if (npcId === playerCharacter.id) return null; // 不顯示玩家自己（不能跟自己對話）
                const npc = prologueNpcs.find((n) => n.id === npcId);
                if (!npc) return null;
                return (
                  <button
                    key={npc.id}
                    onClick={() => handleTalk(npc)}
                    disabled={prologueActionsRemaining <= 0}
                    className="w-full flex items-center gap-3 p-3 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left disabled:opacity-50"
                  >
                    <PortraitAvatar target={npc} size="sm" era={story.era} />
                    <div>
                      <span className="text-sm font-medium">{npc.name}</span>
                      <span className="text-xs text-ink-4 ml-2">{npc.role}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <p className="text-xs text-ink-3 mt-4">序幕階段不會找到與謀殺相關的線索。你只是在感受這個場合的氛圍。</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-6 animate-fade-in flex flex-col">
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-verdigris-2/80 bg-verdigris-deep/40 px-2 py-0.5 rounded-full">
            序幕
          </span>
          <span className="text-xs text-ink-4">
            剩餘行動：{prologueActionsRemaining}
          </span>
        </div>
        {/* 時間顯示 */}
        <div className="flex items-center gap-1.5 mb-2 text-[11px] text-ink-4">
          <Clock className="w-3 h-3" />
          <span className="font-medium text-paper-3">{gameTime.periodLabel} {gameTime.label}</span>
          <Moon className="w-3 h-3 text-ink-4" />
          <span className="text-ink-4 italic">聚會進行中</span>
        </div>
        <h2 className="text-xl font-bold">{story.title}</h2>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        <div className="night-card p-5 mb-5">
          <p className="text-sm text-paper-3 leading-relaxed whitespace-pre-wrap">
            {story.prologueSynopsis || story.synopsis}
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-xs text-ink-4 uppercase tracking-wider mb-2">在場的人</h3>
          <div className="space-y-2">
            {prologueNpcs.filter((npc) => npc.id !== playerCharacter.id).map((npc) => (
              <button
                key={npc.id}
                onClick={() => handleTalk(npc)}
                disabled={prologueActionsRemaining <= 0}
                className="w-full flex items-center gap-3 p-3 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left disabled:opacity-50"
              >
                <PortraitAvatar target={npc} size="sm" era={story.era} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{npc.name}</span>
                    <span className="text-xs text-ink-4">{npc.role}</span>
                  </div>
                </div>
                <MessageCircle className="w-4 h-4 text-ink-3 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-xs text-ink-4 uppercase tracking-wider mb-2">地點</h3>
          <div className="space-y-2">
            {story.locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleEnterLocation(loc)}
                disabled={prologueActionsRemaining <= 0}
                className="w-full flex items-center gap-3 p-3 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left disabled:opacity-50"
              >
                <span className="text-lg">{loc.icon}</span>
                <span className="text-sm font-medium">{loc.name}</span>
                <MapPin className="w-4 h-4 text-ink-3 ml-auto shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 safe-bottom-4">
        <button
          onClick={onEndPrologue}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-800 to-indigo-700 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Moon className="w-5 h-5" />
          結束今晚，回房休息
        </button>
        <p className="text-xs text-ink-3 text-center mt-2">
          點擊後將進入睡眠/離開，醒來後可能會發現事情變了
        </p>
      </div>
    </div>
  );
}
