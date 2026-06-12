/**
 * 手刻角色立繪 — 《鎏金喜堂》民國・1930 上海喜堂
 * 純數學 SVG 向量插畫，針對角色性格與時代服裝手繪。
 */
import type { JSX } from 'react';
import { Frame } from './handcrafted';

type Render = (uid: number, speaking: boolean) => JSX.Element;

/* ── 攝影師（你，男）— 長衫、抱相機、隱痛 ─────────────────── */
const photographer: Render = (uid, sp) => (
  <Frame uid={uid} accent="#9a7b3a">
    <g>
      <defs>
        <linearGradient id={`psk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#e6c49a" /><stop offset="60%" stopColor="#cda072" /><stop offset="100%" stopColor="#956a44" />
        </linearGradient>
      </defs>
      {/* 肩 / 灰藍長衫 */}
      <path d="M26 240 Q30 176 68 164 Q100 156 132 164 Q170 176 174 240 Z" fill="#33414f" />
      <path d="M100 164 L100 240" stroke="#222d38" strokeWidth="2" />
      <path d="M100 168 Q116 172 120 188" stroke="#3f4f5e" strokeWidth="3" fill="none" />
      {/* 後髮（旁分，文氣） */}
      <path d="M62 90 Q62 46 100 42 Q138 46 138 90 Q130 68 100 72 Q70 70 62 90 Z" fill="#1d150d" />
      {/* 脖 */}
      <path d="M89 148 L88 168 L112 168 L111 148 Z" fill="#b07e52" />
      {/* 臉 */}
      <path d="M64 92 Q64 58 100 56 Q136 58 136 92 Q136 120 119 142 Q100 156 81 142 Q64 120 64 92 Z" fill={`url(#psk${uid})`} />
      <rect x="100" y="54" width="40" height="104" fill="#000" opacity="0.12" />
      {/* 旁分瀏海 */}
      <path d="M62 94 Q62 56 100 54 Q138 56 138 94 Q126 76 96 80 Q90 66 82 80 Q70 78 62 94 Z" fill="#1d150d" />
      {/* 眉、眼（對焦遠方，憂） */}
      <path d="M75 97 Q84 93 93 96" stroke="#1a130b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M107 96 Q116 93 125 97" stroke="#1a130b" strokeWidth="3" strokeLinecap="round" fill="none" />
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 7} 104 Q${x} 101 ${x + 7} 104 Q${x} 108 ${x - 7} 104 Z`} fill="#f6f1e6" />
          <circle cx={x - 1.5} cy={104.5} r={sp ? 3.2 : 2.9} fill="#3a2a1a" />
          <circle cx={x - 2.2} cy={103.7} r="0.8" fill="#fff" />
          <path d={`M${x - 7} 103 Q${x} 99.5 ${x + 7} 103`} fill="none" stroke="#1a130b" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      ))}
      <path d="M98 106 Q95 117 100 121 Q104 121 104 118" fill="none" stroke="#7d5333" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M90 132 Q100 130 110 132" fill="none" stroke="#8a4a36" strokeWidth="2.1" strokeLinecap="round" />
      {/* 懷抱的相機（過片扳手） */}
      <g>
        <rect x="120" y="186" width="52" height="40" rx="5" fill="#1b1712" />
        <rect x="120" y="186" width="52" height="11" rx="3" fill="#2a241b" />
        <circle cx="146" cy="208" r="13" fill="#0c0a07" stroke="#5a4a30" strokeWidth="3" />
        <circle cx="146" cy="208" r="6" fill="#23314a" opacity="0.7" />
        <circle cx="143" cy="205" r="2" fill="#9ab" opacity="0.6" />
        <rect x="163" y="183" width="9" height="7" rx="2" fill="#c9a24a" />
      </g>
    </g>
  </Frame>
);

/* ── 新娘 沈婉容（女）— 鳳冠、慘白臉、強顏 ─────────────────── */
const bride: Render = (uid, sp) => (
  <Frame uid={uid} accent="#c0392b">
    <g>
      <defs>
        <linearGradient id={`bsk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#f6ecdf" /><stop offset="62%" stopColor="#ecdcc9" /><stop offset="100%" stopColor="#c9ad92" />
        </linearGradient>
      </defs>
      {/* 肩 / 大紅蘇繡嫁衣 */}
      <path d="M24 240 Q30 174 66 162 Q100 154 134 162 Q170 174 176 240 Z" fill="#9a1f17" />
      <path d="M52 200 Q60 188 70 198 M130 198 Q140 188 148 200" stroke="#e6b84a" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M86 164 Q100 176 114 164 L110 206 L90 206 Z" fill="#7a140e" />
      {/* 黑髮 */}
      <path d="M60 90 Q62 44 100 40 Q138 44 140 90 Q140 120 130 140 L128 112 Q116 92 100 90 Q84 92 72 112 L70 140 Q60 120 60 90 Z" fill="#16110c" />
      {/* 鳳冠（金紅珠翠） */}
      <g>
        <path d="M60 70 Q100 38 140 70 Q140 56 100 50 Q60 56 60 70 Z" fill="#caa23a" />
        <path d="M64 64 Q100 44 136 64" stroke="#e8c24a" strokeWidth="3" fill="none" />
        {[72, 86, 100, 114, 128].map((x, i) => <circle key={i} cx={x} cy={i % 2 ? 52 : 58} r="3.4" fill={i % 2 ? '#b8302a' : '#e8c24a'} />)}
        <circle cx="100" cy="46" r="4.5" fill="#d83b30" stroke="#e8c24a" strokeWidth="1.5" />
        {/* 垂珠 */}
        <line x1="66" y1="70" x2="66" y2="86" stroke="#e8c24a" strokeWidth="1.4" /><circle cx="66" cy="88" r="2.4" fill="#d83b30" />
        <line x1="134" y1="70" x2="134" y2="86" stroke="#e8c24a" strokeWidth="1.4" /><circle cx="134" cy="88" r="2.4" fill="#d83b30" />
      </g>
      {/* 脖 */}
      <path d="M90 150 L89 168 L111 168 L110 150 Z" fill="#d9bda0" />
      {/* 臉（蒼白） */}
      <path d="M66 94 Q66 64 100 62 Q134 64 134 94 Q134 120 117 140 Q100 154 83 140 Q66 120 66 94 Z" fill={`url(#bsk${uid})`} />
      <rect x="100" y="60" width="40" height="100" fill="#000" opacity="0.08" />
      {/* 眉、含淚眼（垂） */}
      <path d="M76 100 Q84 97 92 99" stroke="#241812" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M108 99 Q116 97 124 100" stroke="#241812" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 7} 105 Q${x} 109 ${x + 7} 105 Q${x} 108 ${x - 7} 105 Z`} fill="#f8f3ea" />
          <circle cx={x} cy={106} r={sp ? 3 : 2.7} fill="#2c1d14" />
          <circle cx={x - 0.7} cy={105.3} r="0.8" fill="#fff" />
          <path d={`M${x - 7} 104 Q${x} 101.5 ${x + 7} 104`} fill="none" stroke="#241812" strokeWidth="1.3" strokeLinecap="round" />
        </g>
      ))}
      {/* 一滴將墜的淚 */}
      <path d="M118 113 q1.5 4 0 6 q-1.5 -2 0 -6Z" fill="#bcd" opacity="0.7" />
      {/* 鼻 + 過紅胭脂唇（強畫的微笑） */}
      <path d="M98 109 Q96 118 100 121" fill="none" stroke="#b08a6a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M90 131 Q100 135 110 131 Q100 133 90 131Z" fill="#c0392b" />
      <path d="M90 131 Q100 128 110 131" stroke="#962b22" strokeWidth="1" fill="none" />
    </g>
  </Frame>
);

/* ── 新郎 趙世凱（男）— 西式禮服、冷眼、整袖扣 ───────────────── */
const groom: Render = (uid, sp) => (
  <Frame uid={uid} accent="#2c3e7b">
    <g>
      <defs>
        <linearGradient id={`gsk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#e6bf96" /><stop offset="60%" stopColor="#cf9e6f" /><stop offset="100%" stopColor="#956a44" />
        </linearGradient>
      </defs>
      {/* 肩 / 黑燕尾禮服 */}
      <path d="M24 240 Q28 172 66 160 Q100 152 134 160 Q172 172 176 240 Z" fill="#15171f" />
      <path d="M86 160 L100 184 L114 160 L108 240 L92 240 Z" fill="#f0ebe0" />
      {/* 領結 */}
      <path d="M92 168 L100 174 L108 168 L106 180 L94 180 Z" fill="#1c2435" />
      <path d="M88 166 L100 174 L88 180 Z M112 166 L100 174 L112 180 Z" fill="#28324a" />
      {/* 西裝翻領 */}
      <path d="M86 160 L80 200 L92 182 Z" fill="#0c0d12" /><path d="M114 160 L120 200 L108 182 Z" fill="#0c0d12" />
      {/* 油亮旁分 */}
      <path d="M62 88 Q62 44 100 40 Q138 44 138 88 Q130 66 98 70 Q70 68 62 88 Z" fill="#120e09" />
      <path d="M66 82 Q84 68 102 72" stroke="#2e2517" strokeWidth="1.3" fill="none" opacity="0.7" />
      {/* 脖 */}
      <path d="M89 146 L88 166 L112 166 L111 146 Z" fill="#a8784e" />
      {/* 臉 */}
      <path d="M64 92 Q64 58 100 56 Q136 58 136 92 Q136 120 119 140 Q100 154 81 140 Q64 120 64 92 Z" fill={`url(#gsk${uid})`} />
      <rect x="100" y="54" width="40" height="104" fill="#000" opacity="0.13" />
      {/* 眉、細眼（冷，眯起重新評估） */}
      <path d="M75 96 L93 94" stroke="#120e09" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M107 94 L125 96" stroke="#120e09" strokeWidth="3.2" strokeLinecap="round" />
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 8} 104 Q${x} 102 ${x + 8} 104 Q${x} 106 ${x - 8} 104 Z`} fill="#f4efe2" />
          <circle cx={x + 1} cy={104} r={sp ? 2.7 : 2.4} fill="#1c2433" />
        </g>
      ))}
      <path d="M99 106 Q95 119 100 123 Q105 123 105 119" fill="none" stroke="#7d5333" strokeWidth="1.8" strokeLinecap="round" />
      {/* 嘴（一條直線，笑不達眼） */}
      <path d="M89 134 L111 134" stroke="#6e3b2a" strokeWidth="2.2" strokeLinecap="round" />
      {/* 整理袖扣的手 */}
      <g transform="translate(0 4)">
        <ellipse cx="150" cy="208" rx="14" ry="10" fill="#cf9e6f" />
        <rect x="132" y="200" width="22" height="16" rx="3" fill="#0c0d12" />
        <circle cx="138" cy="208" r="2.6" fill="#caa23a" />
      </g>
    </g>
  </Frame>
);

/* ── 三姨太（女）— 桃紅旗袍、嫵媚卻警覺 ─────────────────────── */
const concubine: Render = (uid, sp) => (
  <Frame uid={uid} accent="#c2407a">
    <g>
      <defs>
        <linearGradient id={`xsk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#f3dcc4" /><stop offset="62%" stopColor="#e7c3a4" /><stop offset="100%" stopColor="#bf926e" />
        </linearGradient>
      </defs>
      {/* 肩 / 桃紅旗袍 + 盤扣 */}
      <path d="M26 240 Q30 176 68 164 Q100 156 132 164 Q170 176 174 240 Z" fill="#d4568c" />
      <path d="M100 166 Q86 172 84 190 L100 184 Z" fill="#b83f73" />
      {[192, 206, 220].map((y, i) => <circle key={i} cx="92" cy={y} r="2.6" fill="#7a224a" />)}
      {/* 波浪鬈髮（marcel wave） */}
      <path d="M58 92 Q60 44 100 40 Q140 44 142 92 Q146 122 132 142 Q138 120 128 110 Q120 92 100 90 Q80 92 72 110 Q62 120 68 142 Q54 122 58 92 Z" fill="#1a120c" />
      <path d="M66 70 Q78 76 72 86 M134 70 Q122 76 128 86" stroke="#2c1d12" strokeWidth="2" fill="none" opacity="0.6" />
      {/* 脖 */}
      <path d="M90 150 L89 168 L111 168 L110 150 Z" fill="#cf9e76" />
      {/* 臉 */}
      <path d="M66 94 Q66 62 100 60 Q134 62 134 94 Q134 120 117 140 Q100 154 83 140 Q66 120 66 94 Z" fill={`url(#xsk${uid})`} />
      <ellipse cx="124" cy="108" rx="12" ry="18" fill="#000" opacity="0.10" />
      <ellipse cx="78" cy="118" rx="11" ry="7" fill="#d8567f" opacity="0.22" />
      {/* 細眉 + 嫵媚卻冷的眼（眼線上挑） */}
      <path d="M75 98 Q84 94 93 98" stroke="#1a120c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M107 98 Q116 94 125 98" stroke="#1a120c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 8} 105 Q${x} 102 ${x + 7} 104 Q${x} 108 ${x - 8} 105 Z`} fill="#f7f1e6" />
          <circle cx={x} cy={105} r={sp ? 3 : 2.7} fill="#241910" />
          <circle cx={x - 0.7} cy={104.2} r="0.8" fill="#fff" />
          <path d={`M${x + 6} 104 q5 -2 7 -5`} stroke="#1a120c" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </g>
      ))}
      <path d="M98 108 Q95 118 100 122" fill="none" stroke="#a8754a" strokeWidth="1.5" strokeLinecap="round" />
      {/* 桃紅唇（嫵媚弧度） */}
      <path d="M89 132 Q100 138 111 132 Q100 134 89 132Z" fill="#c2407a" />
      <path d="M89 132 Q100 129 111 132" stroke="#992f5e" strokeWidth="1" fill="none" />
      {/* 耳墜 */}
      <line x1="68" y1="120" x2="68" y2="128" stroke="#caa23a" strokeWidth="1.2" /><circle cx="68" cy="130" r="2.2" fill="#d83b66" />
    </g>
  </Frame>
);

/* ── 福伯（男）— 駝背老管家、白手套、垂簾低眉 ─────────────────── */
const butler: Render = (uid) => (
  <Frame uid={uid} accent="#5a5048">
    <g>
      <defs>
        <linearGradient id={`fsk${uid}`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#dcc1a4" /><stop offset="60%" stopColor="#c4a384" /><stop offset="100%" stopColor="#8e6c52" />
        </linearGradient>
      </defs>
      {/* 駝背 / 深褐長衫，肩線偏一側 */}
      <path d="M28 240 Q40 182 74 170 Q100 162 126 168 Q160 180 172 240 Z" fill="#2e2620" />
      <path d="M100 170 Q112 176 116 190" stroke="#3c332a" strokeWidth="3" fill="none" />
      {/* 灰白稀髮 */}
      <path d="M66 96 Q68 56 100 53 Q132 56 134 96 Q128 78 100 80 Q72 78 66 96 Z" fill="#8c857c" />
      <path d="M70 92 Q86 82 102 84" stroke="#a39c92" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* 脖（瘦） */}
      <path d="M90 152 L89 170 L111 170 L110 152 Z" fill="#a07a5a" />
      {/* 臉（清臒、紋路） */}
      <path d="M68 96 Q68 66 100 64 Q132 66 132 96 Q132 122 116 140 Q100 152 84 140 Q68 122 68 96 Z" fill={`url(#fsk${uid})`} />
      <rect x="100" y="62" width="40" height="100" fill="#000" opacity="0.13" />
      {/* 抬頭紋 / 法令紋 */}
      <path d="M80 86 Q100 82 120 86" stroke="#7a5a40" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M90 124 Q86 134 84 142 M110 124 Q114 134 116 142" stroke="#8a6648" strokeWidth="1" fill="none" opacity="0.5" />
      {/* 眉、垂簾低目 */}
      <path d="M76 100 Q84 97 92 99" stroke="#6b645b" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M108 99 Q116 97 124 100" stroke="#6b645b" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {[84, 116].map((x, i) => (
        <g key={i}>
          <path d={`M${x - 7} 107 Q${x} 110 ${x + 7} 107`} fill="none" stroke="#3a2c20" strokeWidth="2" strokeLinecap="round" />
          <path d={`M${x - 6} 105 Q${x} 103 ${x + 6} 105`} fill="none" stroke="#7a604a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        </g>
      ))}
      <path d="M98 110 Q96 120 100 123" fill="none" stroke="#7d5838" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M90 134 L110 134" stroke="#6e4632" strokeWidth="2" strokeLinecap="round" />
      {/* 端茶盤的白手套 */}
      <g>
        <rect x="58" y="206" width="84" height="7" rx="3" fill="#1b1610" />
        <ellipse cx="100" cy="205" rx="30" ry="6" fill="#23211a" />
        <path d="M120 206 Q138 206 146 196 Q154 190 162 194 L162 210 Q150 218 132 218 Q122 216 118 208 Z" fill="#f0ebe0" />
        <path d="M146 196 Q152 192 159 195" stroke="#cfc7b6" strokeWidth="1.3" fill="none" />
      </g>
    </g>
  </Frame>
);

export const GOLDEN_HALL: Record<string, Render> = {
  photographer,
  bride,
  groom,
  concubine,
  butler,
};
