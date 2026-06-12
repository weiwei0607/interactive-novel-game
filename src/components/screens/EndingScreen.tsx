import { useState, useEffect, useRef } from 'react';
import { Trophy, HelpCircle, Skull, CloudFog, RotateCcw, BookOpen, AlertCircle, Swords, CheckCircle2, Award } from 'lucide-react';
import type { Story, Character } from '../../types/game';
import { useAI } from '../../hooks/useAI';
import { useSound } from '../../hooks/useSound';
import { useGameStore } from '../../store/gameStore';
import { checkAchievements, getAchievementDefinition } from '../../utils/achievements';
import PortraitAvatar from '../gameplay/PortraitAvatar';

interface Props {
  story: Story;
  playerCharacter: Character;
  accusedId: string;
  apiKey: string;
  onRestart: () => void;
  onMenu: () => void;
}

export default function EndingScreen({ story, playerCharacter, accusedId, apiKey, onRestart, onMenu }: Props) {
  const [ending, setEnding] = useState<{ isCorrect: boolean; ending: string; endingTier: 'perfect' | 'correct_but_blind' | 'wrong_with_evidence' | 'wrong_and_blind' | 'struck_down' | 'killer_escaped' | 'agenda_complete' } | null>(null);
  const [showSecrets, setShowSecrets] = useState(false);
  const [error, setError] = useState(false);
  const [newAchievements, setNewAchievements] = useState<string[]>([]);
  const { generateEnding, loading } = useAI({ apiKey });
  const { play } = useSound();
  const { collectedClues, resetGame, specialFlags, completeStory, plantedEvidence, destroyedClues, awardAchievement, recordGame } = useGameStore();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let mounted = true;
    timeoutRef.current = setTimeout(() => {
      if (mounted && !ending && loading) {
        setError(true);
        const isCorrect = accusedId === story.truth.murdererId;
        const evidenceRatio = collectedClues.length / Math.max(1, story.clues.length);
        let tier: 'perfect' | 'correct_but_blind' | 'wrong_with_evidence' | 'wrong_and_blind' | 'struck_down' | 'killer_escaped' | 'agenda_complete' = isCorrect
          ? (evidenceRatio >= 0.7 ? 'perfect' : 'correct_but_blind')
          : (evidenceRatio >= 0.5 ? 'wrong_with_evidence' : 'wrong_and_blind');
        if (specialFlags.endingCause === 'struck_down') tier = 'struck_down';
        else if (specialFlags.endingCause === 'killer_escaped') tier = 'killer_escaped';
        setEnding({
          isCorrect,
          ending: story.truth.fullExplanation,
          endingTier: tier,
        });
      }
    }, 12000);

    generateEnding(story, accusedId, playerCharacter, collectedClues, specialFlags, plantedEvidence, destroyedClues).then((result) => {
      if (mounted) {
        clearTimeout(timeoutRef.current);
        setEnding(result);
        completeStory(story.id);
        // Check and award achievements
        const store = useGameStore.getState();
        // Record game stats
        const timeSpent = Math.max(0, Date.now() - store.gameStartTime);
        recordGame({
          storyId: story.id,
          storyTitle: story.title,
          characterName: playerCharacter.name,
          endingTier: result.endingTier,
          cluesCollected: collectedClues.length,
          totalClues: story.clues.length,
          timeSpentMinutes: Math.round(timeSpent / 60000),
          timestamp: Date.now(),
          agendaCompleted: specialFlags.agendaDone === 'true',
        });
        const earned = checkAchievements(store, result.endingTier, story);
        const newlyEarned = earned.filter((id) => !store.hasAchievement(id));
        for (const id of newlyEarned) {
          awardAchievement(id);
        }
        if (newlyEarned.length > 0) {
          setNewAchievements(newlyEarned);
        }
      }
    });

    return () => {
      mounted = false;
      clearTimeout(timeoutRef.current);
    };
  }, [generateEnding, story, accusedId, playerCharacter, collectedClues, specialFlags, plantedEvidence, destroyedClues, loading, ending, completeStory, awardAchievement, recordGame]);

  const accused = story.characters.find((c) => c.id === accusedId);
  const murderer = story.characters.find((c) => c.id === story.truth.murdererId);

  useEffect(() => {
    if (ending) {
      play(ending.isCorrect ? 'win' : 'lose');
    }
  }, [ending, play]);

  if (loading || !ending) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
        <div className="w-10 h-10 border-4 border-cinnabar-2/30 border-t-cinnabar-2 rounded-full animate-spin mb-4" />
        <p className="text-ink-4 text-sm">AI 正在撰寫結局...</p>
        <p className="text-xs text-ink-3 mt-2">約需 5-10 秒</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-6 animate-fade-in">
      <div className="text-center mb-6">
        {ending.endingTier === 'perfect' && (
          <>
            <div className="w-16 h-16 rounded-full bg-cinnabar-deep/30 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-8 h-8 text-cinnabar-2" />
            </div>
            <h2 className="text-2xl font-bold text-cinnabar-3 mb-1">完美破案</h2>
            <p className="text-sm text-cinnabar-2/80">你確實證明了這一切</p>
          </>
        )}
        {ending.endingTier === 'correct_but_blind' && (
          <>
            <div className="w-16 h-16 rounded-full bg-yellow-900/20 flex items-center justify-center mx-auto mb-3">
              <HelpCircle className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-200 mb-1">矇對了</h2>
            <p className="text-sm text-yellow-500/70">真相是對的，但你並不完全明白為什麼</p>
          </>
        )}
        {ending.endingTier === 'wrong_with_evidence' && (
          <>
            <div className="w-16 h-16 rounded-full bg-purple-900/20 flex items-center justify-center mx-auto mb-3">
              <Skull className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-purple-300 mb-1">冤枉好人</h2>
            <p className="text-sm text-purple-400/70">
              你指控了 {accused?.name}，但真正的兇手是 {murderer?.name}
            </p>
          </>
        )}
        {ending.endingTier === 'wrong_and_blind' && (
          <>
            <div className="w-16 h-16 rounded-full bg-night-3/50 flex items-center justify-center mx-auto mb-3">
              <CloudFog className="w-8 h-8 text-ink-4" />
            </div>
            <h2 className="text-2xl font-bold text-paper-3 mb-1">全盤皆錯</h2>
            <p className="text-sm text-ink-4">
              你指控了 {accused?.name}，但真正的兇手是 {murderer?.name}
            </p>
          </>
        )}
        {ending.endingTier === 'struck_down' && (
          <>
            <div className="w-16 h-16 rounded-full bg-red-950/40 flex items-center justify-center mx-auto mb-3">
              <Swords className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-red-300 mb-1">被滅口</h2>
            <p className="text-sm text-red-400/70">你知道得太多了</p>
          </>
        )}
        {ending.endingTier === 'killer_escaped' && (
          <>
            <div className="w-16 h-16 rounded-full bg-verdigris-deep/30 flex items-center justify-center mx-auto mb-3">
              <Skull className="w-8 h-8 text-verdigris-2" />
            </div>
            <h2 className="text-2xl font-bold text-verdigris-2 mb-1">逍遙法外</h2>
            <p className="text-sm text-verdigris-2/70">你成功栽贓給了 {accused?.name}</p>
          </>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-cinnabar-deep/30 border border-cinnabar/30 text-cinnabar-2/80 text-xs mb-5">
          <AlertCircle className="w-4 h-4 shrink-0" />
          AI 生成超時，已顯示預設結局
        </div>
      )}

      {newAchievements.length > 0 && (
        <div className="mb-5 animate-slide-up">
          <h3 className="font-bold text-sm text-cinnabar-2 mb-3 flex items-center gap-2">
            <Award className="w-4 h-4" />
            獲得成就
          </h3>
          <div className="space-y-2">
            {newAchievements.map((id) => {
              const def = getAchievementDefinition(id);
              if (!def) return null;
              return (
                <div
                  key={id}
                  className="night-card p-3 border border-cinnabar/30 bg-cinnabar-deep/20 flex items-center gap-3"
                >
                  <span className="text-xl">{def.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-cinnabar-3">{def.title}</p>
                    <p className="text-xs text-ink-4">{def.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="night-card p-5 mb-5">
        <h3 className="font-bold text-sm text-cinnabar-2 mb-3">結局</h3>
        <p className="text-sm text-paper-3 leading-relaxed whitespace-pre-wrap">{ending.ending}</p>
        {specialFlags.agendaDone === 'true' && playerCharacter.hiddenAgenda && (
          <div className="mt-4 pt-4 border-t border-ink-3/50">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-verdigris-2" />
              <span className="text-sm font-bold text-verdigris-2">隱藏任務完成</span>
            </div>
            <p className="text-sm text-ink-4">{playerCharacter.hiddenAgenda}</p>
          </div>
        )}
      </div>

      <div className="night-card p-5 mb-5">
        <h3 className="font-bold text-sm text-ink-4 mb-3">案件真相</h3>
        <div className="space-y-2.5 text-sm">
          <div className="flex gap-2">
            <span className="text-ink-4 shrink-0 w-12">兇手</span>
            <span className="text-red-300 font-medium">{murderer?.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink-4 shrink-0 w-12">手法</span>
            <span className="text-paper-3">{story.truth.method}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink-4 shrink-0 w-12">動機</span>
            <span className="text-paper-3">{story.truth.motive}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink-4 shrink-0 w-12">時間軸</span>
            <span className="text-paper-3">{story.truth.timeline}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowSecrets(!showSecrets)}
        className="w-full py-3 rounded-xl night-card text-sm font-medium mb-5 hover:bg-night-3/80 transition-colors flex items-center justify-center gap-2"
      >
        <BookOpen className="w-4 h-4 text-ink-4" />
        {showSecrets ? '隱藏' : '查看'}每個人的秘密
      </button>

      {showSecrets && (
        <div className="space-y-3 mb-6 animate-slide-up">
          {Object.entries(story.truth.eachCharacterSecret).map(([charId, secret]) => {
            const char = story.characters.find((c) => c.id === charId);
            const isPlayer = charId === playerCharacter.id;
            return (
              <div
                key={charId}
                className={`night-card p-4 border-l-2 ${
                  isPlayer ? 'border-cinnabar-2/50 bg-cinnabar-deep/20' : 'border-ink-3/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <PortraitAvatar target={char!} size="sm" era={story.era} />
                  <span className="font-bold text-sm">{char?.name}</span>
                  {isPlayer && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-cinnabar-deep/40 text-cinnabar-2 rounded-full">
                      你
                    </span>
                  )}
                </div>
                <p className="text-sm text-paper-3">{secret}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={() => { resetGame(); onRestart(); }}
          className="w-full py-3.5 rounded-2xl night-card flex items-center justify-center gap-2 text-sm font-medium hover:bg-night-3/80 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          再玩一次
        </button>
        <button
          onClick={() => { resetGame(); onMenu(); }}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cinnabar to-cinnabar-2 text-white flex items-center justify-center gap-2 text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <BookOpen className="w-4 h-4" />
          選擇其他案件
        </button>
      </div>
    </div>
  );
}
