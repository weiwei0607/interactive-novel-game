import { ArrowLeft, Eye, EyeOff, Lock, UserCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { Story } from '../../types/game';
import PortraitAvatar from '../gameplay/PortraitAvatar';

interface Props {
  story: Story;
  onSelect: (characterId: string) => void;
  onBack: () => void;
}

export default function CharacterSelectScreen({ story, onSelect, onBack }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showSecret, setShowSecret] = useState(false);

  const playable = story.characters.filter((c) => c.isPlayable);
  const selected = playable.find((c) => c.id === selectedId);

  return (
    <div className="min-h-screen px-5 py-6 animate-fade-in flex flex-col">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-slate-400 text-sm mb-4 hover:text-slate-200 transition-colors py-2 -ml-1"
      >
        <ArrowLeft className="w-4 h-4" />
        返回案件選擇
      </button>

      <div className="mb-5">
        <span className="text-xs font-medium text-amber-500/80 bg-amber-950/40 px-2 py-0.5 rounded-full">
          {story.era}
        </span>
        <h2 className="text-2xl font-bold mt-2">{story.title}</h2>
        <p className="text-slate-400 text-sm mt-1">選擇你的身份進入故事</p>
        {story.specialMechanic && story.specialMechanic.type !== 'none' && (
          <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-950/20 border border-purple-800/20">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-xs text-purple-300">{story.specialMechanic.description}</span>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        <div className="space-y-3 mb-4">
          {playable.map((char) => (
            <button
              key={char.id}
              onClick={() => { setSelectedId(char.id); setShowSecret(false); }}
              className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden ${
                selectedId === char.id
                  ? 'bg-amber-950/40 border-amber-600/50 ring-1 ring-amber-600/20'
                  : 'glass-card border-slate-700/40 hover:bg-slate-800/80'
              }`}
            >
              {selectedId === char.id && (
                <div className="absolute top-3 right-3">
                  <UserCheck className="w-5 h-5 text-amber-400" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedId === char.id ? 'bg-amber-900/40' : 'bg-slate-800/60'
                }`}>
                  <PortraitAvatar target={char} size="sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold">{char.name}</h3>
                    <span className="text-xs text-slate-500">{char.role}</span>
                    {char.hiddenAgenda && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-purple-900/40 text-purple-400 rounded-full">
                        隱藏任務
                      </span>
                    )}
                    {char.tool && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-900/40 text-amber-400 rounded-full">
                        {char.tool.name}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mt-0.5 line-clamp-2">{char.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selected && (
          <div className="glass-card p-5 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-amber-400 flex items-center gap-2 text-sm">
                <Lock className="w-4 h-4" />
                角色機密檔案
              </h4>
              <button
                onClick={() => setShowSecret(!showSecret)}
                className="text-xs text-slate-400 flex items-center gap-1 hover:text-slate-200 transition-colors px-2 py-1 rounded-lg hover:bg-slate-800/60"
              >
                {showSecret ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showSecret ? '隱藏' : '查看'}
              </button>
            </div>
            {showSecret ? (
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/50">
                  {story.specialMechanic?.type === 'player_is_killer' && selected.id === story.truth.murdererId && selected.secretPrologue ? (
                    <>
                      <span className="text-xs text-amber-500 uppercase tracking-wider">模糊記憶</span>
                      <p className="text-slate-200 mt-1 italic">{selected.secretPrologue}</p>
                      <p className="text-xs text-slate-600 mt-2">你隱約覺得自己遺漏了什麼，但一時想不起來。</p>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">秘密</span>
                      <p className="text-slate-200 mt-1">{selected.secret}</p>
                    </>
                  )}
                </div>
                {selected.hiddenAgenda && (
                  <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-800/30">
                    <span className="text-xs text-purple-400 uppercase tracking-wider">隱藏任務</span>
                    <p className="text-slate-200 mt-1">{selected.hiddenAgenda}</p>
                  </div>
                )}
                <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/20">
                  <span className="text-xs text-red-500/70 uppercase tracking-wider">動機</span>
                  <p className="text-slate-200 mt-1">{selected.motive}</p>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/20">
                  <span className="text-xs text-emerald-500/70 uppercase tracking-wider">不在場證明</span>
                  <p className="text-slate-200 mt-1">{selected.alibi}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-slate-500 py-2">
                <Eye className="w-4 h-4 opacity-50" />
                點擊「查看」閱讀角色的秘密、動機與不在場證明
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 safe-bottom-4">
        <button
          onClick={() => selectedId && onSelect(selectedId)}
          disabled={!selectedId}
          className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all ${
            selectedId
              ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-white shadow-lg shadow-amber-900/30 hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {selectedId ? '確認身份，開始調查' : '請選擇一個角色'}
        </button>
      </div>
    </div>
  );
}
