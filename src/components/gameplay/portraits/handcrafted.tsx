/**
 * 手刻角色立繪 — Pulp Noir 編輯插畫風
 *
 * 每一張都是針對角色性格「純數學」手繪的 SVG 向量插畫（無外部圖檔）。
 * key = 角色 id，CharacterPortrait 會優先採用這裡的版本，找不到才退回程式生成。
 *
 * 故事：last-page《最後一頁》— 書店謀殺案
 */
import type { JSX } from 'react';

type Render = (uid: number, speaking: boolean) => JSX.Element;

/* 共用：紙感暈影 + 油墨網點 + 邊框 */
export function Frame({ uid, accent, children }: { uid: number; accent: string; children: JSX.Element }) {
  return (
    <>
      <defs>
        <radialGradient id={`bg${uid}`} cx="50%" cy="36%" r="78%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
          <stop offset="52%" stopColor={accent} stopOpacity="0.14" />
          <stop offset="100%" stopColor="#0c0a08" />
        </radialGradient>
        <pattern id={`dot${uid}`} width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.65" fill="#000" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="240" fill="#100d0b" />
      <rect width="200" height="240" fill={`url(#bg${uid})`} />
      {children}
      <rect width="200" height="240" fill={`url(#dot${uid})`} opacity="0.06" />
      <rect x="2" y="2" width="196" height="236" rx="14" fill="none" stroke={accent} strokeWidth="2" opacity="0.55" />
      <rect x="2" y="2" width="196" height="236" rx="14" fill="none" stroke="#000" strokeWidth="6" opacity="0.22" />
    </>
  );
}

/* ── 1. 小說家（女）— 水墨白描樣板：沉思、持毛筆 ───────────────── */
const writer: Render = (uid, sp) => (
  <>
    <defs>
      <radialGradient id={`wbg${uid}`} cx="50%" cy="36%" r="80%">
        <stop offset="0%" stopColor="#f4f0e5" /><stop offset="70%" stopColor="#ece7da" /><stop offset="100%" stopColor="#dcd5c0" />
      </radialGradient>
    </defs>
    <rect width="200" height="240" fill={`url(#wbg${uid})`} />
    <ellipse cx="100" cy="92" rx="80" ry="66" fill="#b8923a" opacity="0.08" />
    {/* 肩 / 高領毛衣：淡赭染 + 墨線 */}
    <path d="M26 240 Q32 176 70 164 Q100 158 130 164 Q168 176 174 240 Z" fill="#8a5a3c" opacity="0.35" />
    <path d="M26 240 Q32 176 70 164 Q100 158 130 164 Q168 176 174 240 Z" fill="none" stroke="#22262a" strokeWidth="2.2" />
    <path d="M84 168 Q100 158 116 168 L114 196 Q100 188 86 196 Z" fill="#f1ead9" stroke="#22262a" strokeWidth="1.4" />
    {/* 後髮（低馬尾）淡墨染 */}
    <path d="M58 96 Q60 40 100 36 Q140 40 142 96 Q150 150 128 176 L130 150 Q120 118 100 114 Q80 118 70 150 L72 176 Q50 150 58 96 Z" fill="#2e3338" />
    <path d="M58 96 Q60 40 100 36 Q140 40 142 96" fill="none" stroke="#16181b" strokeWidth="1.6" />
    {/* 脖 / 臉：留白 + 墨線勾形 */}
    <path d="M88 150 L86 172 L114 172 L112 150 Z" fill="#f6f1e4" stroke="#22262a" strokeWidth="1.3" />
    <path d="M62 96 Q62 60 100 58 Q138 60 138 96 Q138 124 120 146 Q100 162 80 146 Q62 124 62 96 Z" fill="#f7f3e8" stroke="#22262a" strokeWidth="2" />
    {/* 淡墨側影 + 硃砂腮紅 */}
    <ellipse cx="126" cy="108" rx="12" ry="18" fill="#565b60" opacity="0.07" />
    <ellipse cx="78" cy="120" rx="9" ry="5" fill="#a83227" opacity="0.12" />
    <ellipse cx="122" cy="120" rx="9" ry="5" fill="#a83227" opacity="0.10" />
    {/* 瀏海側分：濃墨 */}
    <path d="M60 98 Q60 56 100 54 Q140 56 140 98 Q130 76 102 78 Q92 62 84 80 Q70 76 60 98 Z" fill="#22262a" />
    {/* 眉 */}
    <path d="M74 96 Q83 91 92 95" fill="none" stroke="#22262a" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M108 95 Q117 91 126 96" fill="none" stroke="#22262a" strokeWidth="2.8" strokeLinecap="round" />
    {/* 眼（望向窗外，視線偏左）：墨點瞳 */}
    {[83, 117].map((x, i) => (
      <g key={i}>
        <path d={`M${x - 7} 104 Q${x} 100 ${x + 7} 104 Q${x} 109 ${x - 7} 104 Z`} fill="#fdfaf2" stroke="#22262a" strokeWidth="0.8" />
        <circle cx={x - 1.5} cy={104.5} r={sp ? 3.4 : 3} fill="#16181b" />
        <circle cx={x - 2.3} cy={103.6} r="0.9" fill="#fdfaf2" />
        <path d={`M${x - 7} 103 Q${x} 98.5 ${x + 7} 103`} fill="none" stroke="#22262a" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ))}
    {/* 鼻（淡墨一筆）+ 硃砂唇 */}
    <path d="M98 106 Q95 116 100 120 Q104 120 104 117" fill="none" stroke="#565b60" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M89 132 Q100 130 111 132" fill="none" stroke="#a83227" strokeWidth="2.2" strokeLinecap="round" />
    {/* 持毛筆的手：竹桿 + 墨毫 */}
    <g transform="rotate(-18 150 200)">
      <rect x="150" y="148" width="5" height="58" rx="2.5" fill="#8a5a3c" stroke="#22262a" strokeWidth="0.8" />
      <path d="M149 206 Q152.5 220 156 206 Z" fill="#16181b" />
      <ellipse cx="152" cy="204" rx="12" ry="9" fill="#f6f1e4" stroke="#22262a" strokeWidth="1.3" />
    </g>
    {/* 墨線雙框 + 硃砂印 */}
    <rect x="2" y="2" width="196" height="236" rx="12" fill="none" stroke="#22262a" strokeWidth="1.2" opacity="0.5" />
    <rect x="6" y="6" width="188" height="228" rx="9" fill="none" stroke="#22262a" strokeWidth="0.5" opacity="0.35" />
    <g transform="rotate(-3 170 26)">
      <rect x="158" y="12" width="24" height="26" rx="3" fill="#a83227" />
      <text x="170" y="31" fontSize="15" fill="#f2e8d8" textAnchor="middle" style={{ fontFamily: "'Kaiti TC','STKaiti',serif" }}>筆</text>
    </g>
  </>
);

/* ── 2. 古籍商（男）— 白手套、獵人般的眼神 ─────────────────── */
const rareBook: Render = (uid, sp) => (
  <Frame uid={uid} accent="#1f7a6f">
    <g>
      <defs>
        <linearGradient id={`rsk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#dcb892" /><stop offset="60%" stopColor="#c69a6e" /><stop offset="100%" stopColor="#8f6442" />
        </linearGradient>
      </defs>
      {/* 肩 / 深綠西裝 */}
      <path d="M26 240 Q30 174 68 162 Q100 154 132 162 Q170 174 174 240 Z" fill="#173d38" />
      <path d="M88 162 L100 184 L112 162 L108 206 L92 206 Z" fill="#0c1f1c" />
      {/* 後梳油頭 */}
      <path d="M62 90 Q62 46 100 42 Q138 46 138 92 Q132 70 100 74 Q70 72 62 90 Z" fill="#15110c" />
      <path d="M68 84 Q86 70 104 74" stroke="#2c2316" strokeWidth="1.4" fill="none" opacity="0.7" />
      {/* 脖 */}
      <path d="M89 148 L88 168 L112 168 L111 148 Z" fill="#9c6e48" />
      {/* 臉（瘦長） */}
      <path d="M66 94 Q66 60 100 58 Q134 60 134 94 Q134 124 116 144 Q100 158 84 144 Q66 124 66 94 Z" fill={`url(#rsk${uid})`} />
      <rect x="100" y="56" width="40" height="110" fill="#000" opacity="0.13" />
      {/* 眉（壓低，銳利） */}
      <path d="M76 98 L92 95" stroke="#15110c" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M108 95 L124 98" stroke="#15110c" strokeWidth="3.4" strokeLinecap="round" />
      {/* 細長獵人眼 */}
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 8} 105 Q${x} 102 ${x + 8} 105 Q${x} 108 ${x - 8} 105 Z`} fill="#f4efe2" />
          <circle cx={x + 1} cy={105} r={sp ? 3 : 2.7} fill="#1c2a26" />
          <circle cx={x + 0.3} cy={104.2} r="0.8" fill="#bfe" opacity="0.8" />
        </g>
      ))}
      {/* 鼻（挺） */}
      <path d="M99 106 Q95 120 100 124 Q105 124 105 120" fill="none" stroke="#7d5333" strokeWidth="1.8" strokeLinecap="round" />
      {/* 嘴（一抹冷笑） */}
      <path d="M88 136 Q100 132 112 137" fill="none" stroke="#6e3b2a" strokeWidth="2.2" strokeLinecap="round" />
      {/* 白手套，撫過下巴（評估獵物） */}
      <path d="M104 150 Q124 150 132 138 Q140 130 150 134 L150 152 Q138 162 120 162 Q108 160 104 150 Z" fill="#f1ece1" />
      <path d="M132 138 Q138 134 146 137" stroke="#cfc7b6" strokeWidth="1.5" fill="none" />
      <path d="M118 152 Q124 156 132 153" stroke="#cfc7b6" strokeWidth="1.2" fill="none" />
    </g>
  </Frame>
);

/* ── 3. 研究生（女）— 圓框眼鏡、帆布包帶、瞇眼 ───────────────── */
const student: Render = (uid, sp) => (
  <Frame uid={uid} accent="#3f51b5">
    <g>
      <defs>
        <linearGradient id={`ssk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#f1d8bc" /><stop offset="62%" stopColor="#e6c19c" /><stop offset="100%" stopColor="#bd8e63" />
        </linearGradient>
      </defs>
      {/* 肩 / 卡其外套 + 帆布包帶 */}
      <path d="M26 240 Q32 176 70 164 Q100 158 130 164 Q168 176 174 240 Z" fill="#4a4636" />
      <path d="M70 168 L150 232" stroke="#7d6a44" strokeWidth="11" strokeLinecap="round" />
      <path d="M70 168 L150 232" stroke="#5e4f30" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* 後髮（半綁，碎髮） */}
      <path d="M60 94 Q62 44 100 40 Q138 44 140 94 Q146 132 126 158 L128 132 Q118 104 100 100 Q82 104 72 132 L74 158 Q54 132 60 94 Z" fill="#241712" />
      {/* 脖 */}
      <path d="M89 150 L88 170 L112 170 L111 150 Z" fill="#c1905f" />
      {/* 臉（圓） */}
      <path d="M64 96 Q64 62 100 60 Q136 62 136 96 Q136 124 118 144 Q100 160 82 144 Q64 124 64 96 Z" fill={`url(#ssk${uid})`} />
      <ellipse cx="124" cy="110" rx="12" ry="18" fill="#000" opacity="0.10" />
      <ellipse cx="78" cy="120" rx="11" ry="7" fill="#cf7b48" opacity="0.16" />
      {/* 瀏海 */}
      <path d="M62 98 Q62 60 100 58 Q138 60 138 98 Q126 80 100 82 Q74 80 62 98 Z" fill="#241712" />
      {/* 眉 */}
      <path d="M75 99 Q84 95 93 98" stroke="#1c120d" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M107 98 Q116 95 125 99" stroke="#1c120d" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      {/* 瞇眼（讀字過小） */}
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 7} 107 Q${x} 104 ${x + 7} 107`} fill="none" stroke="#2a1c10" strokeWidth="2.4" strokeLinecap="round" />
          {sp && <circle cx={x} cy={107} r="2" fill="#3a2a1c" />}
        </g>
      ))}
      {/* 圓框眼鏡 */}
      <g fill="none" stroke="#1c160f" strokeWidth="2.6">
        <circle cx="84" cy="106" r="12" fill="#cfe6ef" fillOpacity="0.18" />
        <circle cx="116" cy="106" r="12" fill="#cfe6ef" fillOpacity="0.18" />
        <line x1="96" y1="105" x2="104" y2="105" />
        <line x1="72" y1="105" x2="66" y2="108" />
        <line x1="128" y1="105" x2="134" y2="108" />
        <path d="M77 101 Q82 99 88 101" stroke="#fff" strokeWidth="1.4" opacity="0.5" />
      </g>
      {/* 鼻 + 嘴（緊張，抿） */}
      <path d="M98 110 Q95 120 100 124 Q104 124 104 121" fill="none" stroke="#a8754a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M90 134 Q100 132 110 134" fill="none" stroke="#9a5238" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  </Frame>
);

/* ── 4. 遺孀（女）— 灰衣、緊髻、垂目殉道者 ───────────────────── */
const widow: Render = (uid) => (
  <Frame uid={uid} accent="#6b5876">
    <g>
      <defs>
        <linearGradient id={`dsk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#e7d3c2" /><stop offset="62%" stopColor="#d2b6a2" /><stop offset="100%" stopColor="#a07e6c" />
        </linearGradient>
      </defs>
      {/* 肩 / 深灰高領 */}
      <path d="M28 240 Q34 178 72 166 Q100 160 128 166 Q166 178 172 240 Z" fill="#3a3640" />
      <path d="M86 168 Q100 178 114 168 L112 206 L88 206 Z" fill="#2a2730" />
      {/* 緊髻 */}
      <path d="M64 92 Q66 50 100 47 Q134 50 136 92 Q132 70 100 74 Q68 72 64 92 Z" fill="#5b5560" />
      <ellipse cx="100" cy="50" rx="15" ry="12" fill="#4f4954" />
      <path d="M88 50 Q100 44 112 50" stroke="#6b6470" strokeWidth="1.4" fill="none" />
      {/* 脖 */}
      <path d="M89 152 L88 170 L112 170 L111 152 Z" fill="#a8836f" />
      {/* 臉（清瘦） */}
      <path d="M66 94 Q66 62 100 60 Q134 62 134 94 Q134 122 117 142 Q100 156 83 142 Q66 122 66 94 Z" fill={`url(#dsk${uid})`} />
      <rect x="100" y="58" width="40" height="104" fill="#000" opacity="0.12" />
      {/* 眉（淡） */}
      <path d="M76 99 Q84 96 92 98" stroke="#5a5560" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M108 98 Q116 96 124 99" stroke="#5a5560" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* 垂目（哀） */}
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 7} 106 Q${x} 110 ${x + 7} 106`} fill="none" stroke="#3a2c28" strokeWidth="2.2" strokeLinecap="round" />
          <path d={`M${x - 6} 104 Q${x} 102 ${x + 6} 104`} fill="none" stroke="#7a6258" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
        </g>
      ))}
      {/* 鼻 + 嘴（抿成一線，隱忍） */}
      <path d="M98 110 Q96 120 100 123" fill="none" stroke="#8a6452" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M89 134 L111 134" stroke="#7d4a3c" strokeWidth="2.2" strokeLinecap="round" />
      {/* 衣領別針（守舊） */}
      <circle cx="100" cy="190" r="3.4" fill="#9a8aa6" />
      <circle cx="100" cy="190" r="1.4" fill="#5b4f66" />
    </g>
  </Frame>
);

/* ── 5. 連鎖店長（男）— 西裝、標準八齒笑、眼神冷 ───────────────── */
const competitor: Render = (uid, sp) => (
  <Frame uid={uid} accent="#2f6fa8">
    <g>
      <defs>
        <linearGradient id={`csk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#e8c19c" /><stop offset="60%" stopColor="#d2a274" /><stop offset="100%" stopColor="#9c6f48" />
        </linearGradient>
      </defs>
      {/* 肩 / 藏青西裝 + 領帶 */}
      <path d="M24 240 Q28 172 66 160 Q100 152 134 160 Q172 172 176 240 Z" fill="#1c2f44" />
      <path d="M86 160 L100 182 L114 160 L110 240 L90 240 Z" fill="#e8e2d6" />
      <path d="M94 184 L100 178 L106 184 L104 230 L96 230 Z" fill="#28557d" />
      {/* 油亮側分 */}
      <path d="M62 88 Q62 44 100 40 Q138 44 138 88 Q130 66 100 70 Q70 68 62 88 Z" fill="#1a140d" />
      <path d="M66 82 Q84 68 102 72" stroke="#33291a" strokeWidth="1.4" fill="none" opacity="0.7" />
      {/* 脖 */}
      <path d="M89 146 L88 166 L112 166 L111 146 Z" fill="#a8784e" />
      {/* 臉（方正） */}
      <path d="M64 92 Q64 58 100 56 Q136 58 136 92 Q136 120 120 140 Q100 154 80 140 Q64 120 64 92 Z" fill={`url(#csk${uid})`} />
      <rect x="100" y="54" width="40" height="104" fill="#000" opacity="0.12" />
      {/* 眉 */}
      <path d="M75 95 Q84 92 93 95" stroke="#1a140d" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M107 95 Q116 92 125 95" stroke="#1a140d" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      {/* 冷眼（笑不達眼） */}
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 7} 103 Q${x} 100 ${x + 7} 103 Q${x} 106 ${x - 7} 103 Z`} fill="#f4efe2" />
          <circle cx={x} cy={103} r={sp ? 2.8 : 2.6} fill="#243a4a" />
          <circle cx={x - 0.7} cy={102.3} r="0.7" fill="#fff" />
          <path d={`M${x - 7} 102 Q${x} 99 ${x + 7} 102`} fill="none" stroke="#1a140d" strokeWidth="1.3" strokeLinecap="round" />
        </g>
      ))}
      {/* 鼻 */}
      <path d="M98 106 Q95 118 100 122 Q105 122 105 118" fill="none" stroke="#85593a" strokeWidth="1.8" strokeLinecap="round" />
      {/* 標準八齒商業笑 */}
      <path d="M82 130 Q100 126 118 130 Q108 142 100 142 Q92 142 82 130 Z" fill="#3a2622" />
      <path d="M85 130 Q100 127 115 130 Q108 134 100 134 Q92 134 85 130 Z" fill="#f4f0e6" />
      <line x1="93" y1="129" x2="92.5" y2="133" stroke="#b8b0a0" strokeWidth="0.6" />
      <line x1="100" y1="128.5" x2="100" y2="134" stroke="#b8b0a0" strokeWidth="0.6" />
      <line x1="107" y1="129" x2="107.5" y2="133" stroke="#b8b0a0" strokeWidth="0.6" />
    </g>
  </Frame>
);

export const HANDCRAFTED: Record<string, Render> = {
  writer,
  'rare-book': rareBook,
  'student-lp': student,
  'widow-lp': widow,
  'competitor-lp': competitor,
};
