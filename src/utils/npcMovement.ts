import type { NPC, Clue } from '../types/game';
import { computeGameTime } from './gameTime';

/**
 * 計算 NPC 在當前遊戲時間的位置
 * 如果 NPC 有 schedule，尋找匹配的時間段；否則 fallback 到 defaultLocation
 */
export function getNpcLocation(
  npc: NPC,
  elapsedMinutes: number,
  isPrologue = false
): string {
  if (!npc.schedule || npc.schedule.length === 0) {
    return npc.defaultLocation;
  }

  const { hour } = computeGameTime(elapsedMinutes, isPrologue);

  for (const slot of npc.schedule) {
    if (hour >= slot.startHour && hour < slot.endHour) {
      return slot.locationId;
    }
  }

  // 沒有匹配的時間段，fallback 到 defaultLocation
  return npc.defaultLocation;
}

/**
 * 獲取在指定位置的所有 NPC
 */
export function getNpcsAtLocation(
  locationId: string,
  npcs: NPC[],
  elapsedMinutes: number,
  isPrologue = false
): NPC[] {
  return npcs.filter((n) => getNpcLocation(n, elapsedMinutes, isPrologue) === locationId);
}

/**
 * 獲取 NPC 當前的活動描述（如果有 schedule 匹配）
 */
export function getNpcActivity(
  npc: NPC,
  elapsedMinutes: number,
  isPrologue = false
): string | undefined {
  if (!npc.schedule || npc.schedule.length === 0) return undefined;

  const { hour } = computeGameTime(elapsedMinutes, isPrologue);

  for (const slot of npc.schedule) {
    if (hour >= slot.startHour && hour < slot.endHour) {
      return slot.activity;
    }
  }

  return undefined;
}

/**
 * 檢查線索在當前時間是否可見
 * 如果 clue 沒有 timeWindow，永遠可見
 */
export function isClueVisible(
  clue: Clue,
  elapsedMinutes: number,
  isPrologue = false
): boolean {
  if (!clue.timeWindow) return true;

  const { hour } = computeGameTime(elapsedMinutes, isPrologue);
  return hour >= clue.timeWindow.startHour && hour < clue.timeWindow.endHour;
}
