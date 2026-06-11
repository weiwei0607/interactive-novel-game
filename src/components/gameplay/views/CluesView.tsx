import { useState } from 'react';
import { Package, Search, Bookmark, ChevronDown, ChevronUp, Trash2, UserX, Target, X } from 'lucide-react';
import type { Story, Character, NPC } from '../../../types/game';
import { useGameStore } from '../../../store/gameStore';

interface Props {
  story: Story;
  playerCharacter?: Character;
  onBack: () => void;
}

export default function CluesView({ story, playerCharacter, onBack }: Props) {
  const collectedClues = useGameStore((s) => s.collectedClues);
  const questionsRemaining = useGameStore((s) => s.questionsRemaining);
  const spendQuestion = useGameStore((s) => s.spendQuestion);
  const destroyClue = useGameStore((s) => s.destroyClue);
  const plantEvidence = useGameStore((s) => s.plantEvidence);
  const plantedEvidence = useGameStore((s) => s.plantedEvidence);
  const myClues = story.clues.filter((c) => collectedClues.includes(c.id));
  const isPlayerKiller = playerCharacter && story.specialMechanic?.type === 'player_is_killer' && playerCharacter.id === story.truth.murdererId;
  const [expandedClue, setExpandedClue] = useState<string | null>(null);
  const [warnToast, setWarnToast] = useState<string | null>(null);
  const [framingClueId, setFramingClueId] = useState<string | null>(null);

  // Find which NPC a clue is currently planted on
  const getFramedTarget = (clueId: string): NPC | undefined => {
    for (const [npcId, clueIds] of Object.entries(plantedEvidence)) {
      if (clueIds.includes(clueId)) {
        return story.npcs.find((n) => n.id === npcId);
      }
    }
    return undefined;
  };

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-slate-400 text-sm hover:text-slate-200"
          >
            <span>←</span>
            返回
          </button>
          <span className="text-xs text-slate-500">{myClues.length} / {story.clues.length}</span>
        </div>
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Package className="w-5 h-5 text-amber-400" />
          線索背包
        </h2>
      </div>

      <div className="flex-1 px-5 pb-24 overflow-y-auto scrollbar-hide">
        {myClues.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="text-sm">還沒有收集到任何線索</p>
            <p className="text-xs mt-1 opacity-60">前往各個地點進行調查</p>
          </div>
        ) : (
          <div className="space-y-3">
            {myClues.map((clue) => {
              const isExpanded = expandedClue === clue.id;
              return (
                <div
                  key={clue.id}
                  className="glass-card p-4 border-l-2 border-amber-600/50"
                >
                  <button
                    onClick={() => {
                      if (isExpanded) {
                        setExpandedClue(null);
                      } else {
                        if (clue.details && clue.details.length > 0 && questionsRemaining <= 0) {
                          setWarnToast('⚠️ 行動次數不足，無法深入調查');
                          setTimeout(() => setWarnToast(null), 1500);
                          return;
                        }
                        if (clue.details && clue.details.length > 0) {
                          spendQuestion();
                        }
                        setExpandedClue(clue.id);
                      }
                    }}
                    className="w-full text-left"
                  >
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Bookmark className="w-3.5 h-3.5 text-amber-500" />
                      <h4 className="font-bold text-sm">{clue.name}</h4>
                      <span className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-500 rounded-full capitalize">
                        {clue.type === 'physical' ? '物證' : clue.type === 'testimony' ? '證詞' : clue.type === 'document' ? '文件' : '秘密'}
                      </span>
                      {clue.tags?.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                            tag === '兇器' || tag === '死者相關'
                              ? 'bg-red-950/60 text-red-400 border border-red-800/40'
                              : 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {clue.details && clue.details.length > 0 && (
                        <span className="ml-auto text-[10px] text-slate-500 flex items-center gap-0.5">
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          {clue.details.length} 處細節
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{clue.description}</p>
                    <p className="text-xs text-slate-500 mt-2">發現地點：{story.locations.find((l) => l.id === clue.locationId)?.name}</p>
                  </button>

                  {/* 殺手模式操作 */}
                  {isPlayerKiller && (
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      {clue.destroyable !== false && (
                        <button
                          onClick={() => {
                            if (confirm(`確定要銷毀「${clue.name}」？這個行動無法挽回。`)) {
                              destroyClue(clue.id);
                            }
                          }}
                          className="flex items-center gap-1 text-xs text-red-400/70 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-950/30"
                        >
                          <Trash2 className="w-3 h-3" />
                          銷毀證據
                        </button>
                      )}
                      <button
                        onClick={() => setFramingClueId(clue.id)}
                        className="flex items-center gap-1 text-xs text-emerald-400/70 hover:text-emerald-400 transition-colors px-2 py-1 rounded-lg hover:bg-emerald-950/30"
                      >
                        <Target className="w-3 h-3" />
                        栽贓給…
                      </button>
                      {getFramedTarget(clue.id) && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 rounded-full flex items-center gap-1">
                          <UserX className="w-2.5 h-2.5" />
                          已栽贓給 {getFramedTarget(clue.id)?.name}
                        </span>
                      )}
                    </div>
                  )}

                  {/* 展開的細節 */}
                  {isExpanded && clue.details && clue.details.length > 0 && (
                    <div className="mt-3 space-y-2 pt-3 border-t border-slate-800/50 animate-slide-up">
                      {clue.details.map((detail, idx) => (
                        <div key={idx} className="bg-slate-900/40 rounded-lg p-3">
                          <h5 className="text-xs font-bold text-amber-400 mb-1">{detail.label}</h5>
                          <p className="text-xs text-slate-300 leading-relaxed">{detail.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 警告 Toast */}
      {warnToast && (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-red-950/90 border border-red-700/50 text-red-200 text-sm">
            {warnToast}
          </div>
        </div>
      )}

      {/* 栽贓 Modal */}
      {framingClueId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setFramingClueId(null)} />
          <div className="relative z-10 w-full max-w-sm glass rounded-2xl p-5 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-200">選擇栽贓對象</h3>
              <button onClick={() => setFramingClueId(null)} className="p-1.5 rounded-lg hover:bg-slate-800/60">
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              將「{story.clues.find((c) => c.id === framingClueId)?.name}」栽贓給誰？
            </p>
            <div className="space-y-2">
              {story.npcs.map((npc) => (
                <button
                  key={npc.id}
                  onClick={() => {
                    plantEvidence(framingClueId, npc.id);
                    setFramingClueId(null);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/30 transition-all text-left"
                >
                  <span className="text-lg">{npc.avatar}</span>
                  <div>
                    <p className="text-sm font-medium text-slate-200">{npc.name}</p>
                    <p className="text-xs text-slate-500">{npc.role}</p>
                  </div>
                  <span className="ml-auto text-xs text-emerald-500/70">
                    {(plantedEvidence[npc.id] || []).length > 0 ? `已栽贓 ${(plantedEvidence[npc.id] || []).length} 個` : ''}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
