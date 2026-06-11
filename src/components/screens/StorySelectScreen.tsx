import { useState, useMemo } from 'react';
import { ArrowLeft, Clock, Users, MapPin, Search, X, Lock, CheckCircle2, Shuffle } from 'lucide-react';
import { storyMetas, type StoryMeta } from '../../data/stories/meta';
import { useGameStore } from '../../store/gameStore';

function estimatePlaytime(meta: StoryMeta): string {
  const minutes = Math.max(15, Math.round((meta.characterCount * 3 + meta.locationCount * 2 + meta.clueCount * 1.5)));
  if (minutes < 30) return '約 15-30 分鐘';
  if (minutes < 45) return '約 30-45 分鐘';
  return '約 45-60 分鐘';
}

const allEras = Array.from(new Set(storyMetas.map((s) => s.era)));

interface Props {
  onSelect: (storyId: string) => void;
  onBack: () => void;
}

export default function StorySelectScreen({ onSelect, onBack }: Props) {
  const [search, setSearch] = useState('');
  const [eraFilter, setEraFilter] = useState<string | null>(null);
  const completedStories = useGameStore((s) => s.completedStories);

  const filtered = useMemo(() => {
    const list = storyMetas.filter((s) => {
      const matchSearch =
        !search ||
        s.title.includes(search) ||
        s.subtitle.includes(search) ||
        s.setting.includes(search);
      const matchEra = !eraFilter || s.era === eraFilter;
      return matchSearch && matchEra;
    });
    // Sort: unlocked & incomplete first, then locked, then completed
    return list.sort((a, b) => {
      const aCompleted = completedStories.includes(a.id);
      const bCompleted = completedStories.includes(b.id);
      const aLocked = a.unlockRequirement && !completedStories.includes(a.unlockRequirement.storyId);
      const bLocked = b.unlockRequirement && !completedStories.includes(b.unlockRequirement.storyId);
      if (aLocked && !bLocked) return 1;
      if (!aLocked && bLocked) return -1;
      if (aCompleted && !bCompleted) return 1;
      if (!aCompleted && bCompleted) return -1;
      return 0;
    });
  }, [search, eraFilter, completedStories]);

  return (
    <div className="min-h-screen px-5 py-6 animate-fade-in flex flex-col">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-slate-400 text-sm mb-4 hover:text-slate-200 transition-colors py-2 -ml-1"
      >
        <ArrowLeft className="w-4 h-4" />
        返回主選單
      </button>

      <h2 className="text-2xl font-bold mb-1">選擇案件</h2>
      <p className="text-slate-400 text-sm mb-4">每個案件都是獨立的故事，選擇一個開始你的調查</p>

      {/* 搜索欄 */}
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索案件名稱、背景..."
          className="w-full pl-10 pr-9 py-2.5 bg-slate-900/60 border border-slate-700/50 rounded-xl text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 隨機選擇 + 年代過濾 */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 pb-1">
        <button
          onClick={() => {
            const unlocked = filtered.filter((s) => {
              const isLocked = s.unlockRequirement && !completedStories.includes(s.unlockRequirement.storyId);
              return !isLocked;
            });
            if (unlocked.length > 0) {
              const random = unlocked[Math.floor(Math.random() * unlocked.length)];
              onSelect(random.id);
            }
          }}
          className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-purple-800/40 text-purple-300 border border-purple-700/40 hover:bg-purple-800/60 transition-colors flex items-center gap-1.5"
        >
          <Shuffle className="w-3 h-3" />
          隨機選擇
        </button>
        <div className="w-px bg-slate-700/50 mx-1" />
        <button
          onClick={() => setEraFilter(null)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            !eraFilter
              ? 'bg-amber-700/60 text-amber-100 border border-amber-600/40'
              : 'bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:bg-slate-800'
          }`}
        >
          全部
        </button>
        {allEras.map((era) => (
          <button
            key={era}
            onClick={() => setEraFilter(eraFilter === era ? null : era)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              eraFilter === era
                ? 'bg-amber-700/60 text-amber-100 border border-amber-600/40'
                : 'bg-slate-800/60 text-slate-400 border border-slate-700/40 hover:bg-slate-800'
            }`}
          >
            {era}
          </button>
        ))}
      </div>

      {/* 案件列表 */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-500">
            <Search className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">沒有符合條件的案件</p>
            <button
              onClick={() => { setSearch(''); setEraFilter(null); }}
              className="text-xs text-amber-400 mt-2 hover:underline"
            >
              清除篩選
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((story) => {
              const isCompleted = completedStories.includes(story.id);
              const isLocked = story.unlockRequirement && !completedStories.includes(story.unlockRequirement.storyId);
              return (
                <button
                  key={story.id}
                  onClick={() => !isLocked && onSelect(story.id)}
                  disabled={!!isLocked}
                  className={`w-full text-left glass-card p-5 transition-all group ${
                    isLocked
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-slate-800/80 active:scale-[0.98]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-medium text-amber-500/80 bg-amber-950/40 px-2 py-0.5 rounded-full">
                          {story.era}
                        </span>
                        {isCompleted && (
                          <span className="text-xs font-medium text-emerald-500/80 bg-emerald-950/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            已通關
                          </span>
                        )}
                        {isLocked && (
                          <span className="text-xs font-medium text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            鎖定
                          </span>
                        )}
                      </div>
                      <h3 className={`text-lg font-bold mt-1.5 transition-colors ${isLocked ? 'text-slate-500' : 'group-hover:text-amber-300'}`}>
                        {story.title}
                      </h3>
                    </div>
                    <span className="text-2xl opacity-60 shrink-0">{story.firstAvatar || '🔍'}</span>
                  </div>
                  <p className={`text-sm mb-3 line-clamp-2 ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                    {isLocked && story.unlockRequirement
                      ? `🔒 解鎖條件：${story.unlockRequirement.label}`
                      : story.subtitle}
                  </p>
                  {!isLocked && (
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {story.characterCount} 個角色
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {story.locationCount} 個場景
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {estimatePlaytime(story)}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <p className="text-center text-xs text-slate-600 mt-2">
        共 {filtered.length} / {storyMetas.length} 個案件
      </p>
    </div>
  );
}
