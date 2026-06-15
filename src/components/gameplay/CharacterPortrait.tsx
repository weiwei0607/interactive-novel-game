/**
 * CharacterPortrait — 程式化 SVG 人物立繪生成器（水墨白描版）
 *
 * 不依賴任何外部圖檔：依角色 id / role / avatar 以決定性方式
 * 生成一張水墨白描風（墨線勾形、留白臉、淡墨染髮、礦物淡彩衣、硃砂點唇）半身像。
 * 同一角色每次渲染都一致，不同角色彼此區別明顯。
 */

import { HANDCRAFTED } from './portraits/handcrafted';
import { GOLDEN_HALL } from './portraits/golden-hall';

const PORTRAITS = { ...HANDCRAFTED, ...GOLDEN_HALL };

interface Props {
  seed: string;            // 通常用角色 id，保證決定性
  name: string;
  role?: string;
  avatar?: string;         // 原本的 emoji，用來推測角色原型
  size?: number;           // px
  speaking?: boolean;
  era?: string;            // 故事年代，決定服飾配件
}

/* ---------- 年代判別 ---------- */
type EraKind = 'qing' | 'minguo' | 'medieval' | 'future' | 'modern';
function eraOf(era = ''): EraKind {
  if (/清/.test(era)) return 'qing';
  if (/民國/.test(era)) return 'minguo';
  if (/中世紀/.test(era)) return 'medieval';
  if (/未來/.test(era)) return 'future';
  return 'modern';
}

/* ---------- 決定性雜湊 ---------- */
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}
const pick = <T,>(r: () => number, arr: T[]): T => arr[Math.floor(r() * arr.length) % arr.length];

/* ---------- 水墨調色盤 ---------- */
const INK = '#22262a';        // 勾線濃墨
const INK_LIGHT = '#565b60';  // 淡墨
const CINNABAR = '#a83227';   // 硃砂
const PAPER_FACE = ['#f7f3e8', '#f5efe2', '#f3ece0'];                       // 留白臉
const HAIR_INK = ['#16181b', '#22262a', '#2e3338', '#3c434a', '#6b7076', '#9aa0a6']; // 濃墨→灰白
// 衣著礦物淡彩：胭脂、花青、赭石、石綠、黛紫、藤黃
const ACCENTS = ['#9c4a42', '#3d5a6b', '#8a5a3c', '#5a7a5e', '#5c4a66', '#b8923a'];

type Archetype = 'hat' | 'glasses' | 'hood' | 'bun' | 'cap' | 'plain' | 'beard' | 'victim';

/** 從 role / avatar 關鍵字推測原型，讓配件貼合角色 */
function archetypeOf(role = '', avatar = ''): Archetype {
  const s = role + ' ' + avatar;
  if (/💀|死|受害|victim/i.test(s)) return 'victim';
  if (/👨‍🍳|🍳|🍲|廚|chef|料理/i.test(s)) return 'cap';
  if (/🎩|🕵|偵探|商|紳|律|detective|官|長/i.test(s)) return 'hat';
  if (/👓|👨‍🏫|🎓|📚|📜|研究|教|生|學|博士|醫|⚕️|scholar|student/i.test(s)) return 'glasses';
  if (/🧥|🕯️|遺孀|修女|⛪|🧕|hood|nun|寡/i.test(s)) return 'hood';
  if (/👒|👘|👛|女|妻|姐|花|💃|👩/i.test(s)) return 'bun';
  if (/🧔|👴|⚙️|工|匠|船|🎣/i.test(s)) return 'beard';
  return 'plain';
}

const KAI_FONT = "'Xingkai TC','Xingkai SC','Kaiti TC','STKaiti','DFKai-SB','BiauKai','Kaiti SC',serif";

export default function CharacterPortrait({
  seed, name, role, avatar, size = 112, speaking = false, era,
}: Props) {
  const uid = hash(seed) % 100000; // 唯一 id 避免 SVG defs 衝突

  // 優先採用手刻立繪（套輕微墨色濾鏡統一色調）
  const hand = PORTRAITS[seed];
  if (hand) {
    return (
      <svg width={size} height={size} viewBox="0 0 200 240"
        style={{ display: 'block', borderRadius: '14%', overflow: 'hidden', filter: 'sepia(0.12) saturate(0.82)' }}
        role="img" aria-label={name}>
        {hand(uid, speaking)}
      </svg>
    );
  }

  const r = rng(hash(seed + '|' + name));
  const arch = archetypeOf(role, avatar);
  const lookDark = arch === 'victim';

  const skin = lookDark ? '#e9e5d7' : pick(r, PAPER_FACE);
  // 只有身分明顯年長的角色才可能抽到灰白髮，否則一律深色（避免年輕角色被畫成老人）
  const elderly = /老|伯|爺|婆|嬤|奶|翁|退休|管家|長者/.test((role || '') + '|' + (name || ''));
  const hair = lookDark ? '#2e3338' : pick(r, elderly ? HAIR_INK : HAIR_INK.slice(0, 4));
  const accent = pick(r, ACCENTS);

  // 臉部參數
  const faceW = 52 + Math.floor(r() * 10);      // 臉寬
  const jaw = 0.7 + r() * 0.5;                   // 下巴尖銳度
  const browAngle = (r() - 0.5) * 10;            // 眉毛角度（情緒）
  const eyeGap = 20 + r() * 4;
  const mouthCurve = (r() - 0.5) * 6;            // 嘴角
  const noseLen = 10 + r() * 6;

  const cx = 100;
  const faceTop = 78;
  const faceBot = faceTop + 70 * jaw;

  const sealChar = name ? name.charAt(0) : '人';
  const eraKind = eraOf(era);
  const noHeadgear = arch !== 'hat' && arch !== 'cap' && arch !== 'hood' && arch !== 'bun' && !lookDark;

  return (
    <svg
      width={size} height={size} viewBox="0 0 200 220"
      style={{ display: 'block', borderRadius: '14%', overflow: 'hidden' }}
      role="img" aria-label={name}
    >
      <defs>
        {/* 宣紙暈影 */}
        <radialGradient id={`bg-${uid}`} cx="50%" cy="38%" r="80%">
          <stop offset="0%" stopColor="#f4f0e5" />
          <stop offset="68%" stopColor="#ece7da" />
          <stop offset="100%" stopColor="#ddd6c2" />
        </radialGradient>
        <clipPath id={`face-${uid}`}>
          <path d={facePath(cx, faceTop, faceBot, faceW, jaw)} />
        </clipPath>
      </defs>

      {/* 宣紙背景 + 頭後淡彩暈 */}
      <rect width="200" height="220" fill={`url(#bg-${uid})`} />
      <ellipse cx={cx} cy={faceTop + 18} rx="78" ry="62" fill={accent} opacity={lookDark ? 0.05 : 0.1} />

      {/* 肩膀 / 半身：礦物淡彩 + 墨線 */}
      <path
        d="M30 220 Q34 168 64 156 Q100 148 136 156 Q166 168 170 220 Z"
        fill={lookDark ? '#b9bfc4' : accent} opacity={lookDark ? 0.35 : 0.5}
      />
      <path
        d="M30 220 Q34 168 64 156 Q100 148 136 156 Q166 168 170 220 Z"
        fill="none" stroke={INK} strokeWidth="2.2"
      />
      {/* 衣領 */}
      <path d="M84 158 L100 178 L116 158 L110 200 L90 200 Z" fill={INK} opacity="0.78" />

      {/* 年代服飾 */}
      {eraKind === 'qing' && !lookDark && (
        <g>
          {/* 斜襟 + 盤扣 */}
          <path d={`M${cx} 168 Q${cx + 18} 174 ${cx + 30} 192`} fill="none" stroke={INK} strokeWidth="1.8" opacity="0.85" />
          {[0, 1, 2].map((i) => (
            <circle key={i} cx={cx + 8 + i * 9} cy={172 + i * 7} r="1.7" fill={INK} opacity="0.85" />
          ))}
        </g>
      )}
      {eraKind === 'minguo' && !lookDark && (
        /* 立領（中山裝/旗袍領） */
        <path d={`M${cx - 16} 160 Q${cx} 152 ${cx + 16} 160 L${cx + 13} 172 Q${cx} 165 ${cx - 13} 172 Z`}
          fill={accent} opacity="0.75" stroke={INK} strokeWidth="1.4" />
      )}
      {eraKind === 'medieval' && !lookDark && (
        <g>
          {/* 長袍襟線 + 腰繩 */}
          <path d={`M${cx - 26} 220 L${cx - 8} 166 M${cx + 26} 220 L${cx + 8} 166`} stroke={INK} strokeWidth="1.6" fill="none" opacity="0.55" />
          <path d={`M${cx - 14} 202 Q${cx} 208 ${cx + 14} 202`} stroke="#8a5a3c" strokeWidth="3" fill="none" opacity="0.9" />
        </g>
      )}
      {eraKind === 'future' && !lookDark && (
        <g>
          {/* 制服縫線 + 指示燈 */}
          <path d={`M${cx - 30} 178 H${cx + 30}`} stroke="#3d5a6b" strokeWidth="2" opacity="0.8" />
          <circle cx={cx + 24} cy={170} r="2.2" fill="#3d5a6b" />
        </g>
      )}

      {/* 後方頭髮 / 兜帽：淡墨染 */}
      {arch === 'hood' ? (
        <>
          <path d={`M${cx - faceW - 14} ${faceTop + 6} Q${cx} ${faceTop - 70} ${cx + faceW + 14} ${faceTop + 6} Q${cx + faceW + 4} ${faceBot - 6} ${cx + faceW - 10} ${faceBot + 8} L${cx - faceW + 10} ${faceBot + 8} Q${cx - faceW - 4} ${faceBot - 6} ${cx - faceW - 14} ${faceTop + 6} Z`}
            fill={accent} opacity="0.55" />
          <path d={`M${cx - faceW - 14} ${faceTop + 6} Q${cx} ${faceTop - 70} ${cx + faceW + 14} ${faceTop + 6} Q${cx + faceW + 4} ${faceBot - 6} ${cx + faceW - 10} ${faceBot + 8} L${cx - faceW + 10} ${faceBot + 8} Q${cx - faceW - 4} ${faceBot - 6} ${cx - faceW - 14} ${faceTop + 6} Z`}
            fill="none" stroke={INK} strokeWidth="1.8" />
        </>
      ) : (
        <>
          <path d={hairBackPath(cx, faceTop, faceBot, faceW, arch, r)} fill={hair} opacity="0.9" />
          <path d={hairBackPath(cx, faceTop, faceBot, faceW, arch, r)} fill="none" stroke={INK} strokeWidth="1.4" opacity="0.7" />
        </>
      )}

      {/* 脖子 */}
      <path d={`M${cx - 14} ${faceBot - 8} L${cx - 12} ${faceBot + 18} L${cx + 12} ${faceBot + 18} L${cx + 14} ${faceBot - 8} Z`}
        fill={skin} stroke={INK} strokeWidth="1.4" />

      {/* 臉：留白 + 墨線勾形 */}
      <path d={facePath(cx, faceTop, faceBot, faceW, jaw)} fill={skin} stroke={INK} strokeWidth="2" />
      {/* 淡墨側影 + 硃砂腮紅 */}
      <g clipPath={`url(#face-${uid})`}>
        <ellipse cx={cx + faceW * 0.5} cy={faceTop + 38} rx="16" ry="28" fill={INK_LIGHT} opacity="0.07" />
        <ellipse cx={cx - faceW * 0.42} cy={faceBot - 28} rx="11" ry="7" fill={CINNABAR} opacity={lookDark ? 0 : 0.12} />
        <ellipse cx={cx + faceW * 0.42} cy={faceBot - 28} rx="11" ry="7" fill={CINNABAR} opacity={lookDark ? 0 : 0.1} />
      </g>

      {/* 耳朵 */}
      <ellipse cx={cx - faceW + 4} cy={faceTop + 38} rx="6" ry="9" fill={skin} stroke={INK} strokeWidth="1.3" />
      <ellipse cx={cx + faceW - 4} cy={faceTop + 38} rx="6" ry="9" fill={skin} stroke={INK} strokeWidth="1.3" />

      {/* 眉毛 */}
      <g stroke={INK} strokeWidth="3" strokeLinecap="round">
        <line x1={cx - eyeGap - 9} y1={faceTop + 26 + browAngle} x2={cx - eyeGap + 8} y2={faceTop + 25} />
        <line x1={cx + eyeGap - 8} y1={faceTop + 25} x2={cx + eyeGap + 9} y2={faceTop + 26 + browAngle} />
      </g>

      {/* 眼睛：墨點瞳 + 留白 */}
      {!lookDark && [-1, 1].map((d) => (
        <g key={d}>
          <ellipse cx={cx + d * eyeGap} cy={faceTop + 34} rx="6.2" ry={speaking ? 4.4 : 4.0} fill="#fdfaf2" stroke={INK} strokeWidth="1" />
          <circle cx={cx + d * eyeGap + d * 0.6} cy={faceTop + 34.5} r="2.7" fill="#16181b" />
          <circle cx={cx + d * eyeGap + d * 0.6 - 0.8} cy={faceTop + 33.5} r="0.8" fill="#fdfaf2" />
          <path d={`M${cx + d * eyeGap - 6.4} ${faceTop + 31} Q${cx + d * eyeGap} ${faceTop + 28.5} ${cx + d * eyeGap + 6.4} ${faceTop + 31}`}
            fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}

      {/* 鼻：淡墨一筆 */}
      <path d={`M${cx - 2} ${faceTop + 36} Q${cx - 5} ${faceTop + 36 + noseLen} ${cx} ${faceTop + 38 + noseLen} Q${cx + 4} ${faceTop + 38 + noseLen} ${cx + 4} ${faceTop + 36 + noseLen - 2}`}
        fill="none" stroke={INK_LIGHT} strokeWidth="1.8" strokeLinecap="round" />

      {/* 嘴：硃砂點唇 */}
      <path d={`M${cx - 11} ${faceBot - 16} Q${cx} ${faceBot - 16 + mouthCurve} ${cx + 11} ${faceBot - 16}`}
        fill="none" stroke={lookDark ? INK_LIGHT : CINNABAR} strokeWidth="2.4" strokeLinecap="round" />
      {mouthCurve > 1 && !lookDark && (
        <path d={`M${cx - 9} ${faceBot - 15} Q${cx} ${faceBot - 11} ${cx + 9} ${faceBot - 15}`}
          fill={CINNABAR} opacity="0.35" />
      )}

      {/* 鬍子：淡墨染 */}
      {arch === 'beard' && (
        <path d={`M${cx - faceW + 14} ${faceTop + 40} Q${cx} ${faceBot + 16} ${cx + faceW - 14} ${faceTop + 40} Q${cx + 18} ${faceBot - 6} ${cx} ${faceBot - 4} Q${cx - 18} ${faceBot - 6} ${cx - faceW + 14} ${faceTop + 40} Z`}
          fill={hair} opacity="0.88" stroke={INK} strokeWidth="1.2" />
      )}

      {/* 前髮瀏海（非兜帽/帽子時） */}
      {arch !== 'hood' && arch !== 'hat' && arch !== 'cap' && (
        <path d={hairFrontPath(cx, faceTop, faceW, arch, r)} fill={hair} stroke={INK} strokeWidth="1.2" />
      )}

      {/* 眼鏡（圓框墨線） */}
      {arch === 'glasses' && (
        <g fill="none" stroke="#16181b" strokeWidth="2.4" opacity="0.92">
          <circle cx={cx - eyeGap} cy={faceTop + 34} r="11" fill="#3d5a6b" fillOpacity="0.08" />
          <circle cx={cx + eyeGap} cy={faceTop + 34} r="11" fill="#3d5a6b" fillOpacity="0.08" />
          <line x1={cx - eyeGap + 11} y1={faceTop + 33} x2={cx + eyeGap - 11} y2={faceTop + 33} />
          <line x1={cx - eyeGap - 11} y1={faceTop + 33} x2={cx - faceW + 4} y2={faceTop + 36} />
          <line x1={cx + eyeGap + 11} y1={faceTop + 33} x2={cx + faceW - 4} y2={faceTop + 36} />
        </g>
      )}

      {/* 清代：瓜皮帽 + 辮子 */}
      {eraKind === 'qing' && noHeadgear && (
        <g>
          <path d={`M${cx + faceW - 8} ${faceTop + 20} Q${cx + faceW + 14} ${faceTop + 60} ${cx + faceW + 4} ${faceBot + 30}`}
            fill="none" stroke={hair} strokeWidth="5" strokeLinecap="round" />
          <path d={`M${cx + faceW - 8} ${faceTop + 20} Q${cx + faceW + 14} ${faceTop + 60} ${cx + faceW + 4} ${faceBot + 30}`}
            fill="none" stroke={INK} strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
          <path d={`M${cx - faceW + 4} ${faceTop + 12} Q${cx} ${faceTop - 26} ${cx + faceW - 4} ${faceTop + 12} Z`}
            fill="#2e3338" stroke={INK} strokeWidth="1.6" />
          <circle cx={cx} cy={faceTop - 18} r="3" fill={CINNABAR} />
        </g>
      )}
      {/* 清代女子：金簪 */}
      {eraKind === 'qing' && arch === 'bun' && (
        <line x1={cx - 28} y1={faceTop - 36} x2={cx + 2} y2={faceTop - 18} stroke="#b8923a" strokeWidth="2.4" strokeLinecap="round" />
      )}

      {/* 帽子（紳士/偵探 fedora，墨染） */}
      {arch === 'hat' && (
        <g>
          <ellipse cx={cx} cy={faceTop + 14} rx={faceW + 26} ry="13" fill="#2a2e33" />
          <ellipse cx={cx} cy={faceTop + 11} rx={faceW + 26} ry="11" fill="#3c434a" />
          <ellipse cx={cx} cy={faceTop + 11} rx={faceW + 26} ry="11" fill="none" stroke={INK} strokeWidth="1.6" />
          <path d={`M${cx - faceW + 2} ${faceTop + 12} Q${cx - faceW - 2} ${faceTop - 34} ${cx} ${faceTop - 37} Q${cx + faceW + 2} ${faceTop - 34} ${cx + faceW - 2} ${faceTop + 12} Q${cx} ${faceTop + 2} ${cx - faceW + 2} ${faceTop + 12} Z`}
            fill="#2e3338" stroke={INK} strokeWidth="1.6" />
          <path d={`M${cx - faceW * 0.5} ${faceTop - 18} Q${cx} ${faceTop - 30} ${cx + faceW * 0.5} ${faceTop - 18}`}
            stroke="#565b60" strokeWidth="2.6" fill="none" opacity="0.8" />
          <path d={`M${cx - faceW + 4} ${faceTop + 6} Q${cx} ${faceTop - 2} ${cx + faceW - 4} ${faceTop + 6}`}
            stroke={accent} strokeWidth="6" fill="none" opacity="0.85" />
        </g>
      )}

      {/* 廚師帽：留白 + 墨線 */}
      {arch === 'cap' && (
        <g fill="#f6f2e7" stroke={INK} strokeWidth="1.6">
          <rect x={cx - faceW + 8} y={faceTop - 4} width={(faceW - 8) * 2} height="20" rx="3" />
          <ellipse cx={cx} cy={faceTop - 12} rx={faceW - 6} ry="18" />
          <ellipse cx={cx - 18} cy={faceTop - 16} rx="16" ry="14" />
          <ellipse cx={cx + 18} cy={faceTop - 16} rx="16" ry="14" />
        </g>
      )}

      {/* 受害者：X 眼 */}
      {arch === 'victim' && (
        <g stroke={INK} strokeWidth="2.6" strokeLinecap="round">
          {[-1, 1].map((d) => (
            <g key={d}>
              <line x1={cx + d * eyeGap - 5} y1={faceTop + 30} x2={cx + d * eyeGap + 5} y2={faceTop + 38} />
              <line x1={cx + d * eyeGap + 5} y1={faceTop + 30} x2={cx + d * eyeGap - 5} y2={faceTop + 38} />
            </g>
          ))}
        </g>
      )}

      {/* 墨線雙框 + 硃砂名印 */}
      <rect x="2" y="2" width="196" height="216" rx="14" fill="none"
        stroke={INK} strokeWidth="1.2" opacity="0.5" />
      <rect x="6" y="6" width="188" height="208" rx="11" fill="none"
        stroke={INK} strokeWidth="0.5" opacity="0.35" />
      <g transform="rotate(-3 174 24)">
        <rect x="162" y="10" width="24" height="26" rx="3" fill={CINNABAR} />
        <text x="174" y="29" fontSize="15" fill="#f2e8d8" textAnchor="middle"
          style={{ fontFamily: KAI_FONT }}>{sealChar}</text>
      </g>
    </svg>
  );
}

/* ---------- 幾何路徑工具 ---------- */
function facePath(cx: number, top: number, bot: number, w: number, jaw: number) {
  const chin = bot + 6 * jaw;
  return `M${cx - w} ${top + 18}
    Q${cx - w} ${top - 10} ${cx} ${top - 10}
    Q${cx + w} ${top - 10} ${cx + w} ${top + 18}
    Q${cx + w} ${top + 44} ${cx + w * 0.62} ${bot}
    Q${cx} ${chin} ${cx - w * 0.62} ${bot}
    Q${cx - w} ${top + 44} ${cx - w} ${top + 18} Z`;
}
function hairBackPath(cx: number, top: number, bot: number, w: number, arch: Archetype, r: () => number) {
  if (arch === 'bun') {
    return `M${cx - w - 8} ${top + 20} Q${cx} ${top - 40} ${cx + w + 8} ${top + 20}
      Q${cx + w + 10} ${bot - 10} ${cx + w - 6} ${bot + 6}
      L${cx - w + 6} ${bot + 6} Q${cx - w - 10} ${bot - 10} ${cx - w - 8} ${top + 20}
      M${cx} ${top - 26} a18 18 0 1 0 0.1 0 Z`;
  }
  const flare = 6 + r() * 8;
  return `M${cx - w - flare} ${top + 18} Q${cx} ${top - 40} ${cx + w + flare} ${top + 18}
    Q${cx + w + 2} ${top + 50} ${cx + w - 4} ${top + 60}
    Q${cx + w - 10} ${top + 30} ${cx} ${top + 22}
    Q${cx - w + 10} ${top + 30} ${cx - w + 4} ${top + 60}
    Q${cx - w - 2} ${top + 50} ${cx - w - flare} ${top + 18} Z`;
}
function hairFrontPath(cx: number, top: number, w: number, arch: Archetype, r: () => number) {
  // 偏分位置：往左或往右側分，避免「髮箍」對稱感
  const side = r() < 0.5 ? -1 : 1;
  const part = cx + side * (w * 0.45);
  if (arch === 'bun') {
    // 中分貼面瀏海
    return `M${cx - w + 1} ${top + 22}
      Q${cx - w + 2} ${top - 8} ${cx} ${top - 9}
      Q${cx + w - 2} ${top - 8} ${cx + w - 1} ${top + 22}
      Q${cx + w - 6} ${top + 10} ${cx + 2} ${top + 12}
      L${cx} ${top + 30} L${cx - 2} ${top + 12}
      Q${cx - w + 6} ${top + 10} ${cx - w + 1} ${top + 22} Z`;
  }
  // 側分：一側瀏海掃過額頭，露出另一側髮際線
  return `M${cx - w} ${top + 24}
    Q${cx - w + 2} ${top - 9} ${cx} ${top - 10}
    Q${cx + w - 2} ${top - 9} ${cx + w} ${top + 24}
    Q${cx + w - 8} ${top + 14} ${cx + side * (w - 10)} ${top + 16}
    Q${part} ${top + 30} ${part - side * 8} ${top + 12}
    Q${cx - side * (w * 0.2)} ${top + 4} ${cx - side * (w - 12)} ${top + 10}
    Q${cx - w + 8} ${top + 16} ${cx - w} ${top + 24} Z`;
}
