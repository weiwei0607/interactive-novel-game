import { BookOpen, Settings, Volume2, VolumeX, Moon, Sun, Trophy, X, History, CheckCircle2, XCircle, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import InkCover from '../common/InkCover';
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
      <div className="relative w-full max-w-md max-h-[80vh] overflow-y-auto rounded-2xl bg-night-2 border border-ink-3 p-5 animate-fade-in">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-cinnabar-2 flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            成就畫廊
          </h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-night-3 transition-colors">
            <X className="w-5 h-5 text-ink-4" />
          </button>
        </div>

        {totalGames > 0 && (
          <>
            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="night-card p-3 text-center">
                <p className="text-xl font-bold text-cinnabar-3">{totalGames}</p>
                <p className="text-[10px] text-ink-4">總遊玩次數</p>
              </div>
              <div className="night-card p-3 text-center">
                <p className="text-xl font-bold text-verdigris-2">{solveRate}%</p>
                <p className="text-[10px] text-ink-4">破案率</p>
              </div>
              <div className="night-card p-3 text-center">
                <p className="text-xl font-bold text-paper-3">{avgClueRate}%</p>
                <p className="text-[10px] text-ink-4">平均線索收集</p>
              </div>
              <div className="night-card p-3 text-center">
                <p className="text-xl font-bold text-cinnabar-3">{fastest === Infinity ? '-' : `${fastest}分`}</p>
                <p className="text-[10px] text-ink-4">最快破案</p>
              </div>
              {favStory && (
                <div className="night-card p-3 text-center">
                  <p className="text-sm font-bold text-cinnabar-3 truncate">{favStory[0]}</p>
                  <p className="text-[10px] text-ink-4">最愛的故事 · {favStory[1]} 次</p>
                </div>
              )}
              {favChar && (
                <div className="night-card p-3 text-center">
                  <p className="text-sm font-bold text-cinnabar-3 truncate">{favChar[0]}</p>
                  <p className="text-[10px] text-ink-4">最愛的角色 · {favChar[1]} 次</p>
                </div>
              )}
            </div>

            <h3 className="font-bold text-sm text-paper-3 mb-3 flex items-center gap-2">
              <History className="w-4 h-4" />
              最近遊玩
            </h3>
            <div className="space-y-2 mb-5">
              {gameHistory.slice(-5).reverse().map((g, i) => {
                const isCorrect = g.endingTier === 'perfect' || g.endingTier === 'correct_but_blind' || g.endingTier === 'agenda_complete';
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl night-card">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-verdigris-2 shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-paper truncate">{g.storyTitle}</p>
                      <p className="text-xs text-ink-4">
                        {g.characterName} · {g.cluesCollected}/{g.totalClues} 線索 · {g.timeSpentMinutes}分鐘
                      </p>
                    </div>
                    <span className="text-[10px] text-ink-3 shrink-0">
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
                    ? 'bg-cinnabar-deep/20 border-cinnabar/30'
                    : 'bg-night-3/30 border-ink-3/20 opacity-50'
                }`}
              >
                <span className="text-2xl">{def.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold ${earned ? 'text-cinnabar-3' : 'text-ink-4'}`}>
                    {def.title}
                  </p>
                  <p className="text-xs text-ink-4">{def.description}</p>
                </div>
                {earned && date && (
                  <span className="text-[10px] text-cinnabar-3/60 shrink-0">{date}</span>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-xs text-ink-4">
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
    <div className="min-h-screen relative overflow-hidden">
      {/* 水墨封面（含墨水流體互動層） */}
      <InkCover />

      {/* 直書題字 + 硃印 */}
      <div className="absolute top-12 right-7 z-10 flex items-start gap-4 pointer-events-none select-none safe-top">
        <p
          className="font-kai text-[15px] text-[#565b60] pt-1"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.45em' }}
        >
          迷霧散處・真相自現
        </p>
        <div className="flex flex-col items-center">
          <h1 className="font-kai text-[60px] leading-[1.06] text-[#1b1e21]" style={{ writingMode: 'vertical-rl' }}>
            霧中真相
          </h1>
          <div
            className="ink-seal mt-4 w-[46px] h-[52px] rounded-[5px] bg-[#a83227] flex flex-col items-center justify-center"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(236,220,200,0.6), 0 1px 4px rgba(34,38,42,0.25)' }}
          >
            <span className="font-kai text-[17px] leading-[1.15] text-[#f2e8d8]">探</span>
            <span className="font-kai text-[17px] leading-[1.15] text-[#f2e8d8]">案</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end px-6 pb-safe">
        <div className="w-full max-w-sm animate-fade-in pb-4 text-center">
          <div className="space-y-3">
            <button
              onClick={onStart}
              className="w-full py-4 rounded-2xl bg-[#22262a] text-[#f0e9da] font-semibold text-lg shadow-lg shadow-[#22262a]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                開始調查
              </span>
            </button>

            <button
              onClick={onLoad}
              className="w-full py-3.5 rounded-2xl bg-[#f3efe4]/70 backdrop-blur-sm border border-[#22262a]/15 text-[#2b2f33] font-medium hover:bg-[#e9e3d2]/80 active:scale-[0.98] transition-all"
            >
              讀取存檔
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => {
                const next = !muted;
                setMuted(next);
                setSoundMuted(next);
              }}
              className="p-3 rounded-xl bg-[#f3efe4]/70 backdrop-blur-sm border border-[#22262a]/15 hover:bg-[#e9e3d2]/80 transition-colors"
            >
              {muted ? <VolumeX className="w-5 h-5 text-[#8a9098]" /> : <Volume2 className="w-5 h-5 text-[#3c434a]" />}
            </button>
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-3 rounded-xl bg-[#f3efe4]/70 backdrop-blur-sm border border-[#22262a]/15 hover:bg-[#e9e3d2]/80 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-[#a83227]" /> : <Moon className="w-5 h-5 text-[#3c434a]" />}
            </button>
            <button
              onClick={() => setShowAchievements(true)}
              className="p-3 rounded-xl bg-[#f3efe4]/70 backdrop-blur-sm border border-[#22262a]/15 hover:bg-[#e9e3d2]/80 transition-colors relative"
            >
              <Trophy className="w-5 h-5 text-[#a83227]" />
              {achievements.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#a83227] rounded-full text-[10px] text-[#f2e8d8] flex items-center justify-center font-bold">
                  {achievements.length}
                </span>
              )}
            </button>
            <button
              onClick={onSettings}
              className="p-3 rounded-xl bg-[#f3efe4]/70 backdrop-blur-sm border border-[#22262a]/15 hover:bg-[#e9e3d2]/80 transition-colors"
            >
              <Settings className="w-5 h-5 text-[#3c434a]" />
            </button>
          </div>

          {installPrompt && (
            <button
              onClick={async () => {
                if (!installPrompt) return;
                await installPrompt.prompt();
                setInstallPrompt(null);
              }}
              className="mt-4 w-full py-2.5 rounded-xl bg-[#f3efe4]/70 backdrop-blur-sm border border-[#22262a]/15 text-xs text-[#3c434a] flex items-center justify-center gap-2 hover:bg-[#e9e3d2]/80 transition-colors"
            >
              <Download className="w-4 h-4" />
              添加到主畫面
            </button>
          )}

          {showAchievements && <AchievementGallery onClose={() => setShowAchievements(false)} />}

          {completedStories.length > 0 && (
            <p className="mt-5 text-xs text-[#a83227]/75">
              已解鎖 {completedStories.length} / 20 個故事
            </p>
          )}
          <p className="mt-3 mb-2 text-xs text-[#878d93]">
            選擇角色 · 探索場景 · 詢問證人 · 找出真相
          </p>
        </div>
      </div>
    </div>
  );
}
