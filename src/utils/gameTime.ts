/**
 * 遊戲內時間計算工具
 * 前傳階段從晚上 20:00 開始
 * 調查階段從凌晨 02:00 開始
 */

export interface GameTime {
  hour: number;
  minute: number;
  label: string;      // 例如 "凌晨 02:35"
  period: 'night' | 'pre-dawn' | 'dawn' | 'morning';
  periodLabel: string; // 例如 "深夜"
  totalMinutes: number; // 從 00:00 開始的總分鐘數
}

const BASE_TIME_GAMEPLAY = 2 * 60; // 凌晨 02:00 = 120 分鐘
const BASE_TIME_PROLOGUE = 20 * 60; // 晚上 20:00 = 1200 分鐘

export function computeGameTime(elapsedMinutes: number, isPrologue = false): GameTime {
  const base = isPrologue ? BASE_TIME_PROLOGUE : BASE_TIME_GAMEPLAY;
  const total = base + elapsedMinutes;

  const hour = Math.floor(total / 60) % 24;
  const minute = total % 60;

  const label = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

  let period: GameTime['period'];
  let periodLabel: string;

  if (hour >= 5 && hour < 6) {
    period = 'dawn';
    periodLabel = '黎明';
  } else if (hour >= 4 && hour < 5) {
    period = 'pre-dawn';
    periodLabel = '凌晨';
  } else if (hour >= 6) {
    period = 'morning';
    periodLabel = '清晨';
  } else {
    period = 'night';
    periodLabel = '深夜';
  }

  return {
    hour,
    minute,
    label,
    period,
    periodLabel,
    totalMinutes: total,
  };
}

/** 根據時間段返回氛圍描述 */
export function getTimeAtmosphere(period: GameTime['period']): string {
  switch (period) {
    case 'night':
      return '夜色深沉，四周寂靜無聲';
    case 'pre-dawn':
      return '天邊泛起微弱的灰藍';
    case 'dawn':
      return '第一道曙光正穿透黑暗';
    case 'morning':
      return '晨光灑落，世界即將甦醒';
    default:
      return '';
  }
}

/** 檢查是否進入時間壓力區段 */
export function isTimePressured(elapsedMinutes: number, isPrologue = false): boolean {
  const { period } = computeGameTime(elapsedMinutes, isPrologue);
  return period === 'dawn' || period === 'morning';
}
