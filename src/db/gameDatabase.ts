import Dexie, { type Table } from 'dexie';
import type { GameState, SaveSlot } from '../types/game';

export class GameDatabase extends Dexie {
  saves!: Table<SaveSlot & { state: GameState }>;
  settings!: Table<{ key: string; value: unknown }>;

  constructor() {
    super('InteractiveNovelDB');
    this.version(1).stores({
      saves: 'id, savedAt',
      settings: 'key',
    });
  }
}

export const db = new GameDatabase();

export async function saveGame(slotId: string, name: string, state: GameState, meta: Omit<SaveSlot, 'id' | 'savedAt' | 'name'>): Promise<void> {
  await db.saves.put({
    id: slotId,
    name,
    savedAt: Date.now(),
    state,
    ...meta,
  });
}

export async function loadGame(slotId: string): Promise<{ state: GameState; meta: SaveSlot } | null> {
  const save = await db.saves.get(slotId);
  if (!save) return null;
  const { state, ...meta } = save;
  return { state, meta: meta as unknown as SaveSlot };
}

export async function listSaves(): Promise<SaveSlot[]> {
  const saves = await db.saves.toArray();
  return saves.map((s) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { state, ...meta } = s;
    return meta as unknown as SaveSlot;
  }).sort((a, b) => b.savedAt - a.savedAt);
}

export async function deleteSave(slotId: string): Promise<void> {
  await db.saves.delete(slotId);
}

export async function getSetting<T>(key: string, defaultValue: T): Promise<T> {
  const row = await db.settings.get(key);
  return row ? (row.value as T) : defaultValue;
}

export async function setSetting<T>(key: string, value: T): Promise<void> {
  await db.settings.put({ key, value });
}
