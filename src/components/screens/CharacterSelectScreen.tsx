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
    <div className="min-h-screen px-5 py-6 animate-fade-in flex flex-col bg-paper text-ink">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-ink-3 text-sm mb-4 hover:text-ink transition-colors py-2 -ml-1"
      >
        <ArrowLeft className="w-4 h-4" />
        返回案件選擇
      </button>

      <div className="mb-5">
        <span className="text-xs font-medium text-cinnabar bg-cinnabar/10 px-2 py-0.5 rounded-full">
          {story.era}
        </span>
        <h2 className="font-kai text-3xl mt-2">{story.title}</h2>
        <p className="text-ink-3 text-sm mt-1">選擇你的身份進入故事</p>
        {story.specialMechanic && story.specialMechanic.type !== 'none' && (
          <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-ink/5 border border-ink/15">
            <Sparkles className="w-4 h-4 text-cinnabar shrink-0" />
            <span className="text-xs text-ink-2">{story.specialMechanic.description}</span>
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
                  ? 'bg-cinnabar/10 border-cinnabar/40 ring-1 ring-cinnabar/20'
                  : 'paper-card hover:bg-paper-3/70'
              }`}
            >
              {selectedId === char.id && (
                <div className="absolute top-3 right-3">
                  <UserCheck className="w-5 h-5 text-cinnabar" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  selectedId === char.id ? 'bg-cinnabar/15' : 'bg-ink/8'
                }`}>
                  <PortraitAvatar target={char} size="sm" era={story.era} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-ink">{char.name}</h3>
                    <span className="text-xs text-ink-4">{char.role}</span>
                    {char.hiddenAgenda && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-ink/10 text-ink-2 rounded-full">
                        隱藏任務
                      </span>
                    )}
                    {char.tool && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-cinnabar/10 text-cinnabar rounded-full">
                        {char.tool.name}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-3 mt-0.5 line-clamp-2">{char.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selected && (
          <div className="paper-card p-5 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-cinnabar flex items-center gap-2 text-sm">
                <Lock className="w-4 h-4" />
                角色機密檔案
              </h4>
              <button
                onClick={() => setShowSecret(!showSecret)}
                className="text-xs text-ink-3 flex items-center gap-1 hover:text-ink transition-colors px-2 py-1 rounded-lg hover:bg-paper-3/70"
              >
                {showSecret ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showSecret ? '隱藏' : '查看'}
              </button>
            </div>
            {showSecret ? (
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-paper-3/50 border border-ink/10">
                  {story.specialMechanic?.type === 'player_is_killer' && selected.id === story.truth.murdererId && selected.secretPrologue ? (
                    <>
                      <span className="text-xs text-cinnabar uppercase tracking-wider">模糊記憶</span>
                      <p className="text-ink mt-1 italic">{selected.secretPrologue}</p>
                      <p className="text-xs text-ink-4 mt-2">你隱約覺得自己遺漏了什麼，但一時想不起來。</p>
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-ink-4 uppercase tracking-wider">秘密</span>
                      <p className="text-ink mt-1">{selected.secret}</p>
                    </>
                  )}
                </div>
                {selected.hiddenAgenda && (
                  <div className="p-3 rounded-lg bg-ink/8 border border-ink/15">
                    <span className="text-xs text-ink-2 uppercase tracking-wider">隱藏任務</span>
                    <p className="text-ink mt-1">{selected.hiddenAgenda}</p>
                  </div>
                )}
                <div className="p-3 rounded-lg bg-cinnabar/8 border border-cinnabar/20">
                  <span className="text-xs text-cinnabar/80 uppercase tracking-wider">動機</span>
                  <p className="text-ink mt-1">{selected.motive}</p>
                </div>
                <div className="p-3 rounded-lg bg-verdigris/10 border border-verdigris/20">
                  <span className="text-xs text-verdigris uppercase tracking-wider">不在場證明</span>
                  <p className="text-ink mt-1">{selected.alibi}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-ink-4 py-2">
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
              ? 'bg-ink text-paper-2 shadow-lg shadow-ink/30 hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-ink/10 text-ink-4 cursor-not-allowed'
          }`}
        >
          {selectedId ? '確認身份，開始調查' : '請選擇一個角色'}
        </button>
      </div>
    </div>
  );
}
