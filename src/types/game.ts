// ── 核心類型定義 ──

export interface DisruptionConfig {
  name: string;              // 干擾名稱，如「警察巡邏」「三姑六婆八卦」
  interval: number;          // 每幾次提問觸發一次（如 4）
  locations: string[];       // 可能出現的地點 ID 列表
  hitMessage: string;        // 擊中玩家時的訊息，可用 {location} 佔位
  missMessage: string;       // 未擊中時的警告訊息，可用 {location} 佔位
  forceLeave: boolean;       // 是否強制玩家離開當前地點
}

export interface SpecialMechanicConfig {
  type: 'killer_may_strike' | 'hidden_agenda' | 'key_choice' | 'player_is_killer' | 'none';
  description: string;
  config: Record<string, unknown>;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  setting: string;
  synopsis: string;
  victim: string;
  characters: Character[];
  locations: Location[];
  npcs: NPC[];
  clues: Clue[];
  truth: Truth;
  disruption?: DisruptionConfig;
  specialMechanic?: SpecialMechanicConfig;
  hasPrologue?: boolean;
  prologueSynopsis?: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  avatar: string;
  portraits?: Record<string, string>;
  description: string;
  secret: string;
  secretPrologue?: string;  // 序幕階段顯示的模糊記憶版本（用於 player_is_killer 故事）
  motive: string;
  alibi: string;
  isPlayable: boolean;
  hiddenAgenda?: string;
  tool?: { name: string; description: string };
}

export interface Location {
  id: string;
  name: string;
  icon: string;
  description: string;
  clues: string[];
  npcs: string[];
  imagePrompt: string;
}

export interface NPCSchedule {
  startHour: number;   // 0-24, inclusive
  endHour: number;     // exclusive
  locationId: string;
  activity?: string;   // e.g. "在廚房做早餐"
}

export interface NPC {
  id: string;
  name: string;
  avatar: string;
  portraits?: Record<string, string>;
  role: string;
  personality: string;
  secret: string;
  liesAbout: string[];
  tellsTruthAbout: string[];
  defaultLocation: string;
  aiPrompt: string;
  schedule?: NPCSchedule[];
}

export interface ClueDetail {
  label: string;
  content: string;
}

export interface Clue {
  id: string;
  name: string;
  description: string;
  locationId: string;
  type: 'physical' | 'testimony' | 'document' | 'secret';
  isHidden: boolean;
  relevance: string;
  tags?: string[];
  details?: ClueDetail[];
  unlocksMemory?: string;  // 收集此線索後解鎖的記憶碎片ID
  timeWindow?: { startHour: number; endHour: number; reason: string };
  destroyable?: boolean;
}

export interface Truth {
  murdererId: string;
  method: string;
  motive: string;
  timeline: string;
  fullExplanation: string;
  eachCharacterSecret: Record<string, string>;
}

// ── 遊戲狀態 ──

export type GamePhase =
  | 'menu'
  | 'story-select'
  | 'character-select'
  | 'case-intro'
  | 'prologue'
  | 'discovery'
  | 'gameplay'
  | 'final-accusation'
  | 'ending';

export interface GameState {
  storyId: string | null;
  playerCharacterId: string | null;
  phase: GamePhase;
  currentLocationId: string | null;
  visitedLocations: string[];
  collectedClues: string[];
  examinedClues: string[];
  npcDialogHistory: Record<string, DialogMessage[]>;
  npcTrustLevel: Record<string, number>;
  choicesMade: string[];
  suspicionTargets: string[];
  gameStartTime: number;
  lastSaveTime: number;
  questionsRemaining: number;
  lastDisruptionEvent: { location: string; hitPlayer: boolean; timestamp: number; name: string } | null;
  specialFlags: Record<string, string>;
  incidentTriggered: boolean;
  incidentDescription: string;
  prologueActionsRemaining: number;
  unlockedMemories: string[];
  destroyedClues: string[];
  elapsedMinutes: number;
  completedStories: string[];
  plantedEvidence: Record<string, string[]>;
  achievements: Achievement[];
  gameHistory: GameRecord[];
}

export interface DialogMessage {
  role: 'user' | 'npc';
  content: string;
  timestamp: number;
}

export interface SaveSlot {
  id: string;
  name: string;
  storyId: string;
  storyTitle: string;
  characterName: string;
  phase: GamePhase;
  progressPercent: number;
  savedAt: number;
  thumbnail: string;
}

export interface AchievementDefinition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  id: string;
  earnedAt: number; // timestamp
}

export interface GameRecord {
  storyId: string;
  storyTitle: string;
  characterName: string;
  endingTier: string;
  cluesCollected: number;
  totalClues: number;
  timeSpentMinutes: number;
  timestamp: number;
  agendaCompleted: boolean;
}
