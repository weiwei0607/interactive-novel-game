import { BookOpen, Settings, Sparkles, Volume2, VolumeX, Moon, Sun, Trophy, X, History, CheckCircle2, XCircle, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useSound } from '../../hooks/useSound';
import { useGameStore } from '../../store/gameStore';
import { ACHIEVEMENT_DEFINITIONS } from '../../utils/achievements';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface Props {
  onStart: () => void;
  onLoad: () => void;
  onSettings: () => void;
}

function AchievementGallery({ onClose }: { onClose: () => void }) {
  const achievements = useGameStore((s) => s.achievements);
  const gameHistory = useGameStore((s) => s.gameHistory);
  const earnedIds = new Set(achievements.map((a) => a.id));

  const totalGames = gameHistory.length;
  const correctGames = gameHistory.filter(
    (g) => g.endingTier === 'perfect' || g.endingTier === 'correct_but_blind' || g.endingTier === 'agenda_complete'
  ).length;
  const solveRate = totalGames > 0 ? Math.round((correctGames / totalGames) * 100) : 0;
  const avgClueRate =
    totalGames > 0
      ? Math.round(
          (gameHistory.reduce((sum, g) => sum + (g.totalClues > 0 ? g.cluesCollected / g.totalClues : 0), 0) / totalGames) * 100
        )
      : 0;

  const storyCount: Record<string, number> = {};
  const charCount: Record<string, number> = {};
  let fastest = Infinity;
  for (const g of gameHistory) {
    storyCount[g.storyTitle] = (storyCount[g.storyTitle] || 0) + 1;
    charCount[g.characterName] = (charCount[g.characterName] || 0) + 1;
    if (g.timeSpentMinutes > 0 && g.timeSpentMinutes < fastest) fastest = g.timeSpentMinutes;
  }
  const favStory = Object.entries(storyCount).sort((a, b) => b[1] - a[1])[0];
  const favChar = Object.entries(charCount).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md max-h-[80vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 p-5 animate-fade-in">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            成就畫廊
          </h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {totalGames > 0 && (
          <>
            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-amber-300">{totalGames}</p>
                <p className="text-[10px] text-slate-400">總遊玩次數</p>
              </div>
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-emerald-300">{solveRate}%</p>
                <p className="text-[10px] text-slate-400">破案率</p>
              </div>
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-sky-300">{avgClueRate}%</p>
                <p className="text-[10px] text-slate-400">平均線索收集</p>
              </div>
              <div className="glass-card p-3 text-center">
                <p className="text-xl font-bold text-purple-300">{fastest === Infinity ? '-' : `${fastest}分`}</p>
                <p className="text-[10px] text-slate-400">最快破案</p>
              </div>
              {favStory && (
                <div className="glass-card p-3 text-center">
                  <p className="text-sm font-bold text-amber-300 truncate">{favStory[0]}</p>
                  <p className="text-[10px] text-slate-400">最愛的故事 · {favStory[1]} 次</p>
                </div>
              )}
              {favChar && (
                <div className="glass-card p-3 text-center">
                  <p className="text-sm font-bold text-rose-300 truncate">{favChar[0]}</p>
                  <p className="text-[10px] text-slate-400">最愛的角色 · {favChar[1]} 次</p>
                </div>
              )}
            </div>

            <h3 className="font-bold text-sm text-slate-300 mb-3 flex items-center gap-2">
              <History className="w-4 h-4" />
              最近遊玩
            </h3>
            <div className="space-y-2 mb-5">
              {gameHistory.slice(-5).reverse().map((g, i) => {
                const isCorrect = g.endingTier === 'perfect' || g.endingTier === 'correct_but_blind' || g.endingTier === 'agenda_complete';
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl glass-card">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-200 truncate">{g.storyTitle}</p>
                      <p className="text-xs text-slate-500">
                        {g.characterName} · {g.cluesCollected}/{g.totalClues} 線索 · {g.timeSpentMinutes}分鐘
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-600 shrink-0">
                      {new Date(g.timestamp).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div className="space-y-2.5">
          {ACHIEVEMENT_DEFINITIONS.map((def) => {
            const earned = earnedIds.has(def.id);
            const date = earned
              ? new Date(achievements.find((a) => a.id === def.id)!.earnedAt).toLocaleDateString('zh-TW')
              : null;
            return (
              <div
                key={def.id}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-opacity ${
                  earned
                    ? 'bg-amber-950/20 border-amber-700/30'
                    : 'bg-slate-800/30 border-slate-700/20 opacity-50'
                }`}
              >
                <span className="text-2xl">{def.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold ${earned ? 'text-amber-300' : 'text-slate-500'}`}>
                    {def.title}
                  </p>
                  <p className="text-xs text-slate-400">{def.description}</p>
                </div>
                {earned && date && (
                  <span className="text-[10px] text-amber-500/60 shrink-0">{date}</span>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          已獲得 {earnedIds.size} / {ACHIEVEMENT_DEFINITIONS.length} 個成就
        </p>
      </div>
    </div>
  );
}

export default function MenuScreen({ onStart, onLoad, onSettings }: Props) {
  const [muted, setMuted] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const { setTheme, isDark } = useTheme();
  const { setMuted: setSoundMuted } = useSound();
  const completedStories = useGameStore((s) => s.completedStories);
  const achievements = useGameStore((s) => s.achievements);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-slate-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-sm w-full animate-fade-in">
        <div className="mb-2">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-4" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-shadow">
          霧中真相
        </h1>
        <p className="text-slate-400 text-sm mb-10 tracking-widest">
          INTERACTIVE MYSTERY
        </p>

        <div className="space-y-3">
          <button
            onClick={onStart}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-700 to-amber-600 text-white font-semibold text-lg shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span className="flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              開始調查
            </span>
          </button>

          <button
            onClick={onLoad}
            className="w-full py-3.5 rounded-2xl glass-card text-slate-200 font-medium hover:bg-slate-800/80 active:scale-[0.98] transition-all"
          >
            讀取存檔
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => {
              const next = !muted;
              setMuted(next);
              setSoundMuted(next);
            }}
            className="p-3 rounded-xl glass-card hover:bg-slate-800/80 transition-colors"
          >
            {muted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-slate-300" />}
          </button>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-3 rounded-xl glass-card hover:bg-slate-800/80 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-slate-300" />}
          </button>
          <button
            onClick={() => setShowAchievements(true)}
            className="p-3 rounded-xl glass-card hover:bg-slate-800/80 transition-colors relative"
          >
            <Trophy className="w-5 h-5 text-amber-400" />
            {achievements.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                {achievements.length}
              </span>
            )}
          </button>
          <button
            onClick={onSettings}
            className="p-3 rounded-xl glass-card hover:bg-slate-800/80 transition-colors"
          >
            <Settings className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {installPrompt && (
          <button
            onClick={async () => {
              if (!installPrompt) return;
              await installPrompt.prompt();
              setInstallPrompt(null);
            }}
            className="mt-4 w-full py-2.5 rounded-xl glass-card text-xs text-slate-300 flex items-center justify-center gap-2 hover:bg-slate-800/80 transition-colors"
          >
            <Download className="w-4 h-4" />
            添加到主畫面
          </button>
        )}

        {showAchievements && <AchievementGallery onClose={() => setShowAchievements(false)} />}

        {completedStories.length > 0 && (
          <p className="mt-6 text-xs text-amber-500/60">
            已解鎖 {completedStories.length} / 20 個故事
          </p>
        )}
        <p className="mt-4 text-xs text-slate-600">
          選擇角色 · 探索場景 · 詢問證人 · 找出真相
        </p>
      </div>
    </div>
  );
}
