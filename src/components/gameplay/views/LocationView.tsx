import { useState, useCallback } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, User, MessageCircle, Search, Loader2, Sparkles, Clock } from 'lucide-react';
import type { Story, Location, NPC, Clue } from '../../../types/game';
import { useGameStore } from '../../../store/gameStore';
import PortraitAvatar from '../PortraitAvatar';
import { isClueVisible, getNpcActivity } from '../../../utils/npcMovement';

interface Props {
  story: Story;
  location: Location;
  locationDesc: string;
  descLoading: boolean;
  onBack: () => void;
  onTalk: (npc: NPC) => void;
  onCollectClue: (clue: Clue) => void;
}

export default function LocationView({
  story, location, locationDesc, descLoading, onBack, onTalk, onCollectClue,
}: Props) {
  const collectedClues = useGameStore((s) => s.collectedClues);
  const examinedClues = useGameStore((s) => s.examinedClues);
  const npcDialogHistory = useGameStore((s) => s.npcDialogHistory);
  const npcTrustLevel = useGameStore((s) => s.npcTrustLevel);
  const questionsRemaining = useGameStore((s) => s.questionsRemaining);
  const spendQuestion = useGameStore((s) => s.spendQuestion);
  const unlockMemory = useGameStore((s) => s.unlockMemory);
  const elapsedMinutes = useGameStore((s) => s.elapsedMinutes);
  const phase = useGameStore((s) => s.phase);
  const getNpcsAtLocation = useGameStore((s) => s.getNpcsAtLocation);

  const [collectingId, setCollectingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [expandedClue, setExpandedClue] = useState<string | null>(null);

  const handleCollect = useCallback((clue: Clue) => {
    if (collectedClues.includes(clue.id)) {
      onCollectClue(clue);
      return;
    }
    setCollectingId(clue.id);
    setTimeout(() => {
      onCollectClue(clue);
      if (clue.unlocksMemory) {
        unlockMemory(clue.unlocksMemory);
      }
      setCollectingId(null);
      setToast(`✨ 已收集「${clue.name}」`);
      setTimeout(() => setToast(null), 1800);
    }, 550);
  }, [collectedClues, onCollectClue, unlockMemory]);

  const isPrologue = phase === 'prologue';
  const locNpcs = getNpcsAtLocation(location.id);
  const locClues = story.clues.filter((c) => c.locationId === location.id && (collectedClues.includes(c.id) || isClueVisible(c, elapsedMinutes, isPrologue)));

  return (
    <div className="min-h-screen flex flex-col" style={{ animation: 'fogClear 0.7s ease-out' }}>
      <div className="px-5 pt-5 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-ink-4 text-sm mb-3 hover:text-paper"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          返回地圖
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{location.icon}</span>
          <div>
            <h2 className="text-xl font-bold">{location.name}</h2>
            <p className="text-xs text-ink-4">{story.title}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 pb-24 overflow-y-auto scrollbar-hide">
        {descLoading && (
          <div className="night-card p-4 mb-4 border-l-2 border-cinnabar-2/30 animate-pulse">
            <div className="flex items-center gap-2 text-sm text-ink-4">
              <Loader2 className="w-4 h-4 animate-spin" />
              正在描繪場景...
            </div>
          </div>
        )}
        {locationDesc && !descLoading && (
          <div className="night-card p-4 mb-4 border-l-2 border-cinnabar-2/50">
            <p className="text-sm text-paper-3 italic leading-relaxed">{locationDesc}</p>
          </div>
        )}

        <p className="text-sm text-paper-3 mb-5 leading-relaxed">{location.description}</p>

        {/* NPC 列表 */}
        {locNpcs.length === 0 && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-night-3/30 border border-night-3/50 text-ink-4 text-sm mb-5">
            <User className="w-4 h-4" />
            這裡沒有其他人
          </div>
        )}
        {locNpcs.length > 0 && (
          <div className="mb-5">
            <h3 className="text-sm font-bold text-ink-4 mb-3 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4" />
              在場的人
            </h3>
            <div className="space-y-2">
              {locNpcs.map((npc) => {
                const trust = npcTrustLevel[npc.id] || 50;
                const hasTalked = (npcDialogHistory[npc.id]?.length || 0) > 0;
                return (
                  <button
                    key={npc.id}
                    onClick={() => onTalk(npc)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl night-card hover:bg-night-3/80 text-left transition-all"
                  >
                    <PortraitAvatar target={npc} size="sm" era={story.era} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">{npc.name}</span>
                        <span className="text-xs text-ink-4">{npc.role}</span>
                      </div>
                      {getNpcActivity(npc, elapsedMinutes, isPrologue) && (
                        <span className="text-[10px] text-ink-4 flex items-center gap-1 mt-0.5">
                          <Clock className="w-2.5 h-2.5" />
                          {getNpcActivity(npc, elapsedMinutes, isPrologue)}
                        </span>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 bg-night-3 rounded-full overflow-hidden max-w-[80px]">
                          <div
                            className={`h-full rounded-full ${
                              trust > 70 ? 'bg-verdigris-2' : trust > 40 ? 'bg-cinnabar-2' : 'bg-red-500'
                            }`}
                            style={{ width: `${trust}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-ink-4">
                          {hasTalked ? `${trust}% 信任` : '尚未交談'}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-ink-3" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 線索列表 */}
        {locClues.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-ink-4 mb-3 flex items-center gap-1.5">
              <Search className="w-4 h-4" />
              可調查的線索
            </h3>
            <div className="space-y-2">
              {locClues.map((clue) => {
                const isCollected = collectedClues.includes(clue.id);
                const isExamined = examinedClues.includes(clue.id);
                const isAnimating = collectingId === clue.id;
                return (
                  <button
                    key={clue.id}
                    onClick={() => handleCollect(clue)}
                    disabled={isAnimating}
                    className={`w-full p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                      isCollected
                        ? 'bg-cinnabar-deep/30 border-cinnabar/40'
                        : 'night-card border-ink-3/40 hover:bg-night-3/80'
                    } ${isAnimating ? 'pointer-events-none' : ''}`}
                    style={isAnimating ? { animation: 'clueCollect 0.55s ease-in forwards' } : undefined}
                  >
                    {/* 粒子層 */}
                    {isAnimating && (
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        {Array.from({ length: 10 }).map((_, i) => {
                          const angle = (i / 10) * 360;
                          const dist = 30 + Math.random() * 20;
                          const tx = Math.cos((angle * Math.PI) / 180) * dist;
                          const ty = Math.sin((angle * Math.PI) / 180) * dist;
                          return (
                            <span
                              key={i}
                              className="absolute w-1.5 h-1.5 rounded-full bg-cinnabar-2"
                              style={{
                                '--tx': `${tx}px`,
                                '--ty': `${ty}px`,
                                animation: `particleBurst 0.4s ease-out ${i * 0.02}s forwards`,
                              } as React.CSSProperties}
                            />
                          );
                        })}
                      </div>
                    )}
                    <div className="flex items-start gap-3 relative z-10">
                      <span className="text-lg shrink-0">
                        {isCollected ? '✅' : '❓'}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className={`font-bold text-sm ${isCollected ? 'text-cinnabar-3' : ''}`}>
                            {clue.name}
                          </h4>
                          {clue.isHidden && isCollected && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-red-950/60 text-red-400 rounded-full">
                              隱藏
                            </span>
                          )}
                          {clue.tags?.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                                tag === '兇器' || tag === '死者相關'
                                  ? 'bg-red-950/60 text-red-400 border border-red-800/40'
                                  : 'bg-cinnabar-deep/60 text-cinnabar-2 border border-cinnabar/40'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {isExamined && (
                          <p className="text-sm text-paper-3 mt-1 leading-relaxed">{clue.description}</p>
                        )}
                        {!isExamined && (
                          <p className="text-sm text-ink-4 mt-1">點擊調查這個線索...</p>
                        )}
                        {/* 已調查線索的細節 */}
                        {isExamined && clue.details && clue.details.length > 0 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (expandedClue === clue.id) {
                                setExpandedClue(null);
                              } else {
                                if (questionsRemaining <= 0) {
                                  setToast('⚠️ 行動次數不足，無法深入調查');
                                  setTimeout(() => setToast(null), 1500);
                                  return;
                                }
                                spendQuestion();
                                setExpandedClue(clue.id);
                              }
                            }}
                            className="mt-2 flex items-center gap-1 text-[10px] text-cinnabar-2/80 hover:text-cinnabar-2 transition-colors"
                          >
                            {expandedClue === clue.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                            深入調查 ({clue.details.length}) {questionsRemaining <= 0 && expandedClue !== clue.id && '— 需要行動點數'}
                          </button>
                        )}
                        {isExamined && expandedClue === clue.id && clue.details && (
                          <div className="mt-2 space-y-2 animate-slide-up">
                            {clue.details.map((detail, idx) => (
                              <div key={idx} className="bg-night-2/40 rounded-lg p-2.5">
                                <h5 className="text-[10px] font-bold text-cinnabar-2 mb-0.5">{detail.label}</h5>
                                <p className="text-xs text-paper-3 leading-relaxed">{detail.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 收集成功 Toast */}
      {toast && (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-cinnabar-deep/90 border border-cinnabar/50 text-cinnabar-3 text-sm shadow-lg shadow-cinnabar-deep/30"
            style={{ animation: 'toastPop 0.35s ease-out' }}
          >
            <Sparkles className="w-4 h-4 text-cinnabar-2" />
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}
