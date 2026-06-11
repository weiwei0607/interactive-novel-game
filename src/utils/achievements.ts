import type { GameState, AchievementDefinition, Story } from '../types/game';

export const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    id: 'perfect_detective',
    title: '完美神探',
    description: '指認正確且收集 80% 以上線索',
    icon: '🕵️',
  },
  {
    id: 'blind_detective',
    title: '盲探',
    description: '指認正確但只收集不到 30% 線索',
    icon: '🕶️',
  },
  {
    id: 'wrong_evidence',
    title: '被誤導的偵探',
    description: '指認錯誤但收集超過 50% 線索',
    icon: '📉',
  },
  {
    id: 'agenda_master',
    title: '隱藏任務達人',
    description: '完成角色的隱藏任務',
    icon: '🎯',
  },
  {
    id: 'choice_maker',
    title: '抉擇者',
    description: '在故事中做出關鍵抉擇',
    icon: '⚖️',
  },
  {
    id: 'survivor',
    title: '倖存者',
    description: '在殺手潛伏的故事中倖存',
    icon: '❤️',
  },
  {
    id: 'killer_escaped',
    title: '完美逃脫',
    description: '以殺手身份逃脫法律制裁',
    icon: '🗡️',
  },
  {
    id: 'framing_expert',
    title: '栽贓專家',
    description: '以殺手身份成功栽贓他人',
    icon: '🎭',
  },
  {
    id: 'all_stories',
    title: '故事收藏家',
    description: '完成所有 20 個故事',
    icon: '📚',
  },
  {
    id: 'all_agendas',
    title: '雙面臥底',
    description: '單一故事中同時完成隱藏任務並指認正確',
    icon: '🎖️',
  },
  {
    id: 'speed_solver',
    title: '閃電破案',
    description: '30 分鐘內完成一個故事',
    icon: '⚡',
  },
  {
    id: 'social_butterfly',
    title: '社交達人',
    description: '與所有 NPC 進行過對話',
    icon: '💬',
  },
];

export function getAchievementDefinition(id: string): AchievementDefinition | undefined {
  return ACHIEVEMENT_DEFINITIONS.find((a) => a.id === id);
}

export function checkAchievements(
  state: GameState,
  endingTier: string,
  story: Story
): string[] {
  const earned: string[] = [];
  const totalClues = story.clues.length;
  const collected = state.collectedClues.length;
  const ratio = totalClues > 0 ? collected / totalClues : 0;
  const correct =
    endingTier === 'perfect' ||
    endingTier === 'correct_but_blind' ||
    endingTier === 'agenda_complete';

  if (correct && ratio >= 0.8) earned.push('perfect_detective');
  if (correct && ratio <= 0.3) earned.push('blind_detective');
  if (!correct && ratio >= 0.5) earned.push('wrong_evidence');
  if (state.specialFlags.agendaDone === 'true') earned.push('agenda_master');
  if (Object.keys(state.specialFlags).some((k) => k.includes('-choice-'))) {
    earned.push('choice_maker');
  }
  if (
    endingTier !== 'struck_down' &&
    story.specialMechanic?.type === 'killer_may_strike'
  ) {
    earned.push('survivor');
  }
  if (endingTier === 'killer_escaped') earned.push('killer_escaped');
  if (endingTier === 'framing_expert') earned.push('framing_expert');
  if (state.completedStories.length >= 20) earned.push('all_stories');
  if (state.specialFlags.agendaDone === 'true' && correct) {
    earned.push('all_agendas');
  }
  const elapsed = Date.now() - state.gameStartTime;
  if (elapsed > 0 && elapsed <= 30 * 60 * 1000) {
    earned.push('speed_solver');
  }
  if (
    story.npcs.length > 0 &&
    Object.keys(state.npcDialogHistory).length >= story.npcs.length
  ) {
    earned.push('social_butterfly');
  }

  return earned;
}
