import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { GameState, GamePhase, Story, Character } from '../types/game';

import { saveGame } from '../db/gameDatabase';
import { getNpcLocation as computeNpcLocation, getNpcsAtLocation as computeNpcsAtLocation } from '../utils/npcMovement';

interface GameStore extends GameState {
  // Actions
  setPhase: (phase: GamePhase) => void;
  selectStory: (storyId: string) => void;
  selectCharacter: (characterId: string) => void;
  setLocation: (locationId: string) => void;
  collectClue: (clueId: string) => void;
  examineClue: (clueId: string) => void;
  addDialogMessage: (npcId: string, message: { role: 'user' | 'npc'; content: string }) => void;
  spendQuestion: () => { triggered: boolean; location: string | null; hitPlayer: boolean } | null;
  spendPrologueAction: () => boolean;
  adjustTrust: (npcId: string, delta: number) => void;
  triggerDisruption: (locations: string[]) => { location: string; hitPlayer: boolean };
  makeChoice: (choiceId: string) => void;
  addSuspicion: (characterId: string) => void;
  removeSuspicion: (characterId: string) => void;
  setSpecialFlag: (key: string, value: string) => void;
  unlockMemory: (fragmentId: string) => void;
  destroyClue: (clueId: string) => void;
  resetGame: () => void;
  currentStory: Story | null;
  setCurrentStory: (story: Story | null) => void;
  getCurrentStory: () => Story | null;
  getCurrentCharacter: () => Character | null;
  getProgress: () => number;
  awardAchievement: (achievementId: string) => void;
  hasAchievement: (achievementId: string) => boolean;
  recordGame: (record: import('../types/game').GameRecord) => void;
  loadState: (state: Partial<GameState>) => void;
  saveToSlot: () => void;
  saveToNamedSlot: (name: string) => void;
  completeStory: (storyId: string) => void;
  getNpcLocation: (npcId: string) => string;
  getNpcsAtLocation: (locationId: string) => import('../types/game').NPC[];
  plantEvidence: (clueId: string, targetNpcId: string) => void;
}

const initialState: GameState = {
  storyId: null,
  playerCharacterId: null,
  phase: 'menu',
  currentLocationId: null,
  visitedLocations: [],
  collectedClues: [],
  examinedClues: [],
  npcDialogHistory: {},
  npcTrustLevel: {},
  choicesMade: [],
  suspicionTargets: [],
  gameStartTime: 0,
  lastSaveTime: 0,
  questionsRemaining: 20,
  lastDisruptionEvent: null,
  specialFlags: {},
  incidentTriggered: false,
  incidentDescription: '',
  prologueActionsRemaining: 10,
  unlockedMemories: [],
  destroyedClues: [],
  elapsedMinutes: 0,
  completedStories: [],
  plantedEvidence: {},
  achievements: [],
  gameHistory: [],
};

// State that should persist across game sessions (achievements, completed stories)
const persistentStateKeys: (keyof GameState)[] = ['completedStories', 'achievements'];

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      setPhase: (phase) => set({ phase }),

      selectStory: (storyId) =>
        set({
          storyId,
          phase: 'character-select',
          gameStartTime: Date.now(),
        }),

      selectCharacter: (characterId) =>
        set({
          playerCharacterId: characterId,
          phase: 'case-intro',
        }),

      setLocation: (locationId) =>
        set((state) => ({
          currentLocationId: locationId,
          visitedLocations: state.visitedLocations.includes(locationId)
            ? state.visitedLocations
            : [...state.visitedLocations, locationId],
          lastSaveTime: Date.now(),
        })),

      collectClue: (clueId) =>
        set((state) => ({
          collectedClues: state.collectedClues.includes(clueId)
            ? state.collectedClues
            : [...state.collectedClues, clueId],
          lastSaveTime: Date.now(),
        })),

      examineClue: (clueId) =>
        set((state) => ({
          examinedClues: state.examinedClues.includes(clueId)
            ? state.examinedClues
            : [...state.examinedClues, clueId],
          lastSaveTime: Date.now(),
        })),

      addDialogMessage: (npcId, message) =>
        set((state) => ({
          npcDialogHistory: {
            ...state.npcDialogHistory,
            [npcId]: [
              ...(state.npcDialogHistory[npcId] || []),
              { ...message, timestamp: Date.now() },
            ],
          },
          lastSaveTime: Date.now(),
        })),

      spendQuestion: () => {
        const state = get();
        if (state.questionsRemaining <= 0) return null;
        const newRemaining = state.questionsRemaining - 1;
        set({
          questionsRemaining: Math.max(0, newRemaining),
          elapsedMinutes: state.elapsedMinutes + 5,
          lastSaveTime: Date.now(),
        });
        // 干擾機制檢查
        const currentLoc = state.currentLocationId;
        const disruption = state.currentStory?.disruption;
        if (currentLoc && disruption && newRemaining > 0 && newRemaining % disruption.interval === 0) {
          const patrol = get().triggerDisruption(disruption.locations);
          return { triggered: true, location: patrol.location, hitPlayer: patrol.hitPlayer };
        }
        return { triggered: false, location: null, hitPlayer: false };
      },

      triggerDisruption: (locations) => {
        const state = get();
        const loc = locations[Math.floor(Math.random() * locations.length)];
        const hit = loc === state.currentLocationId;
        const name = state.currentStory?.disruption?.name || '干擾';
        const event = { location: loc, hitPlayer: hit, timestamp: Date.now(), name };
        if (hit) {
          set({
            currentLocationId: null,
            lastDisruptionEvent: event,
            lastSaveTime: Date.now(),
          });
        } else {
          set({ lastDisruptionEvent: event, lastSaveTime: Date.now() });
        }
        return { location: loc, hitPlayer: hit };
      },

      spendPrologueAction: () => {
        const state = get();
        if (state.prologueActionsRemaining <= 0) return false;
        set({
          prologueActionsRemaining: Math.max(0, state.prologueActionsRemaining - 1),
          elapsedMinutes: state.elapsedMinutes + 10,
          lastSaveTime: Date.now(),
        });
        return true;
      },

      adjustTrust: (npcId, delta) =>
        set((state) => ({
          npcTrustLevel: {
            ...state.npcTrustLevel,
            [npcId]: Math.max(0, Math.min(100, (state.npcTrustLevel[npcId] || 50) + delta)),
          },
          lastSaveTime: Date.now(),
        })),

      makeChoice: (choiceId) =>
        set((state) => ({
          choicesMade: [...state.choicesMade, choiceId],
        })),

      addSuspicion: (characterId) =>
        set((state) => ({
          suspicionTargets: state.suspicionTargets.includes(characterId)
            ? state.suspicionTargets
            : [...state.suspicionTargets, characterId],
        })),

      removeSuspicion: (characterId) =>
        set((state) => ({
          suspicionTargets: state.suspicionTargets.filter((id) => id !== characterId),
        })),

      setSpecialFlag: (key, value) =>
        set((state) => ({
          specialFlags: { ...state.specialFlags, [key]: value },
          lastSaveTime: Date.now(),
        })),

      unlockMemory: (fragmentId) =>
        set((state) => ({
          unlockedMemories: state.unlockedMemories.includes(fragmentId)
            ? state.unlockedMemories
            : [...state.unlockedMemories, fragmentId],
          lastSaveTime: Date.now(),
        })),

      destroyClue: (clueId) =>
        set((state) => ({
          collectedClues: state.collectedClues.filter((id) => id !== clueId),
          destroyedClues: state.destroyedClues.includes(clueId)
            ? state.destroyedClues
            : [...state.destroyedClues, clueId],
          lastSaveTime: Date.now(),
        })),

      resetGame: () =>
        set((state) => {
          const persistent: Partial<GameState> = {};
          for (const key of persistentStateKeys) {
            (persistent as Record<string, unknown>)[key] = state[key];
          }
          return { ...initialState, ...persistent };
        }),

      currentStory: null,

      setCurrentStory: (story) => set({ currentStory: story }),

      loadState: (state) => set((prev) => ({ ...prev, ...state })),

      getCurrentStory: () => {
        return get().currentStory;
      },

      getCurrentCharacter: () => {
        const story = get().getCurrentStory();
        const { playerCharacterId } = get();
        return story && playerCharacterId
          ? story.characters.find((c) => c.id === playerCharacterId) || null
          : null;
      },

      saveToSlot: () => {
        const state = get();
        const story = state.getCurrentStory();
        const char = state.getCurrentCharacter();
        if (!story || !char) return;
        const gameState: GameState = {
          storyId: state.storyId,
          playerCharacterId: state.playerCharacterId,
          phase: state.phase,
          currentLocationId: state.currentLocationId,
          visitedLocations: state.visitedLocations,
          collectedClues: state.collectedClues,
          examinedClues: state.examinedClues,
          npcDialogHistory: state.npcDialogHistory,
          npcTrustLevel: state.npcTrustLevel,
          choicesMade: state.choicesMade,
          suspicionTargets: state.suspicionTargets,
          gameStartTime: state.gameStartTime,
          lastSaveTime: Date.now(),
          questionsRemaining: state.questionsRemaining,
          lastDisruptionEvent: state.lastDisruptionEvent,
          specialFlags: state.specialFlags,
          incidentTriggered: state.incidentTriggered,
          incidentDescription: state.incidentDescription,
          prologueActionsRemaining: state.prologueActionsRemaining,
          unlockedMemories: state.unlockedMemories,
          destroyedClues: state.destroyedClues,
          elapsedMinutes: state.elapsedMinutes,
          completedStories: state.completedStories,
          plantedEvidence: state.plantedEvidence,
          achievements: state.achievements,
          gameHistory: state.gameHistory,
        };
        saveGame(
          `auto-${story.id}`,
          '自動存檔',
          gameState,
          {
            storyId: story.id,
            storyTitle: story.title,
            characterName: char.name,
            phase: state.phase,
            progressPercent: state.getProgress(),
            thumbnail: '',
          }
        );
      },

      awardAchievement: (achievementId: string) =>
        set((state) => ({
          achievements: state.achievements.find((a) => a.id === achievementId)
            ? state.achievements
            : [...state.achievements, { id: achievementId, earnedAt: Date.now() }],
          lastSaveTime: Date.now(),
        })),

      hasAchievement: (achievementId: string) => {
        return get().achievements.some((a) => a.id === achievementId);
      },

      recordGame: (record) =>
        set((state) => ({
          gameHistory: [...state.gameHistory, record].slice(-200),
          lastSaveTime: Date.now(),
        })),

      saveToNamedSlot: (name: string) => {
        const state = get();
        const story = state.getCurrentStory();
        const char = state.getCurrentCharacter();
        if (!story || !char) return;
        const gameState: GameState = {
          storyId: state.storyId,
          playerCharacterId: state.playerCharacterId,
          phase: state.phase,
          currentLocationId: state.currentLocationId,
          visitedLocations: state.visitedLocations,
          collectedClues: state.collectedClues,
          examinedClues: state.examinedClues,
          npcDialogHistory: state.npcDialogHistory,
          npcTrustLevel: state.npcTrustLevel,
          choicesMade: state.choicesMade,
          suspicionTargets: state.suspicionTargets,
          gameStartTime: state.gameStartTime,
          lastSaveTime: Date.now(),
          questionsRemaining: state.questionsRemaining,
          lastDisruptionEvent: state.lastDisruptionEvent,
          specialFlags: state.specialFlags,
          incidentTriggered: state.incidentTriggered,
          incidentDescription: state.incidentDescription,
          prologueActionsRemaining: state.prologueActionsRemaining,
          unlockedMemories: state.unlockedMemories,
          destroyedClues: state.destroyedClues,
          elapsedMinutes: state.elapsedMinutes,
          completedStories: state.completedStories,
          plantedEvidence: state.plantedEvidence,
          achievements: state.achievements,
          gameHistory: state.gameHistory,
        };
        saveGame(
          `manual-${story.id}-${Date.now()}`,
          name,
          gameState,
          {
            storyId: story.id,
            storyTitle: story.title,
            characterName: char.name,
            phase: state.phase,
            progressPercent: state.getProgress(),
            thumbnail: '',
          }
        );
      },

      completeStory: (storyId: string) =>
        set((state) => ({
          completedStories: state.completedStories.includes(storyId)
            ? state.completedStories
            : [...state.completedStories, storyId],
          lastSaveTime: Date.now(),
        })),

      getNpcLocation: (npcId: string) => {
        const state = get();
        const story = state.getCurrentStory();
        if (!story) return '';
        const npc = story.npcs.find((n) => n.id === npcId);
        if (!npc) return '';
        return computeNpcLocation(npc, state.elapsedMinutes, state.phase === 'prologue');
      },

      getNpcsAtLocation: (locationId: string) => {
        const state = get();
        const story = state.getCurrentStory();
        if (!story) return [];
        return computeNpcsAtLocation(locationId, story.npcs, state.elapsedMinutes, state.phase === 'prologue');
      },

      plantEvidence: (clueId: string, targetNpcId: string) =>
        set((state) => {
          if (!state.collectedClues.includes(clueId)) return state;
          const current = state.plantedEvidence[targetNpcId] || [];
          // Remove from any other target first (a clue can only be planted on one NPC)
          const cleaned: Record<string, string[]> = {};
          for (const [key, ids] of Object.entries(state.plantedEvidence)) {
            cleaned[key] = ids.filter((id) => id !== clueId);
          }
          return {
            plantedEvidence: {
              ...cleaned,
              [targetNpcId]: current.includes(clueId) ? current : [...current, clueId],
            },
            specialFlags: { ...state.specialFlags, framingTarget: targetNpcId },
            lastSaveTime: Date.now(),
          };
        }),

      getProgress: () => {
        const state = get();
        const story = state.getCurrentStory();
        if (!story) return 0;
        const totalClues = story.clues.length;
        const visitedRatio = story.locations.length > 0
          ? state.visitedLocations.length / story.locations.length
          : 0;
        const clueRatio = totalClues > 0 ? state.collectedClues.length / totalClues : 0;
        const talkedRatio = story.npcs.length > 0
          ? Object.keys(state.npcDialogHistory).length / story.npcs.length
          : 0;
        return Math.min(100, Math.round((visitedRatio * 0.3 + clueRatio * 0.4 + talkedRatio * 0.3) * 100));
      },
    }),
    {
      name: 'interactive-novel-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        storyId: state.storyId,
        playerCharacterId: state.playerCharacterId,
        phase: state.phase,
        currentLocationId: state.currentLocationId,
        visitedLocations: state.visitedLocations,
        collectedClues: state.collectedClues,
        examinedClues: state.examinedClues,
        npcDialogHistory: state.npcDialogHistory,
        npcTrustLevel: state.npcTrustLevel,
        choicesMade: state.choicesMade,
        suspicionTargets: state.suspicionTargets,
        gameStartTime: state.gameStartTime,
        lastSaveTime: state.lastSaveTime,
        lastDisruptionEvent: state.lastDisruptionEvent,
        specialFlags: state.specialFlags,
        incidentTriggered: state.incidentTriggered,
        incidentDescription: state.incidentDescription,
        prologueActionsRemaining: state.prologueActionsRemaining,
        unlockedMemories: state.unlockedMemories,
        destroyedClues: state.destroyedClues,
        elapsedMinutes: state.elapsedMinutes,
        completedStories: state.completedStories,
        plantedEvidence: state.plantedEvidence,
        achievements: state.achievements,
        gameHistory: state.gameHistory,
        // currentStory 不持久化（太大，且可從 storyId 重新載入）
      }),
    }
  )
);
