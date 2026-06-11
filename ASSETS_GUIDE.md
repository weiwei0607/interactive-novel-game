# 🎨 角色立繪素材指南

本專案已支援**多表情角色立繪**系統。當你為 NPC 或玩家角色配置 `portraits` 欄位後，對話介面會自動根據 AI 回覆的情緒切換對應的表情圖片。

---

## 目錄結構

```
public/
└── characters/
    ├── audition-night/
    │   ├── writer-normal.png
    │   ├── writer-angry.png
    │   ├── writer-surprised.png
    │   ├── writer-worried.png
    │   ├── writer-nervous.png
    │   └── writer-calm.png
    ├── island-will/
    │   ├── butler-normal.png
    │   └── ...
    └── ...
```

> **關鍵規則**：放在 `public/` 下的檔案會自動被 Vite 服務，路徑以 `/` 開頭引用，如 `/characters/audition-night/writer-normal.png`。

---

## 支援的表情鍵值

| 鍵值 | 觸發情緒 | 說明 |
|------|---------|------|
| `normal` | 預設 | 無特殊情緒時顯示 |
| `angry` | 憤怒 | 文字含「憤怒、生氣、恨、怒、吼」等 |
| `surprised` | 驚訝 | 文字含「驚訝、震驚、嚇到、不可能」等 |
| `worried` | 擔憂/退縮 | 文字含「驚恐、害怕、恐懼、慌、退、躲」等 |
| `nervous` | 緊張/說謊 | 文字含「說謊、假裝、裝、騙、掩飾」等 |
| `calm` | 平靜 | 文字含「冷靜、平靜、安靜、沉著」等 |

**最少只需要 `normal` 一張**，其餘缺失時會自動回退到 `normal`。

---

## 在故事資料中配置

打開任意故事的 `index.ts`，在 NPC 或 Character 物件中加入 `portraits`：

```ts
{
  id: 'writer',
  name: '編劇老吳',
  avatar: '✍️',        // ← 沒有圖片時的 Emoji 回退
  portraits: {
    normal: '/characters/audition-night/writer-normal.png',
    angry: '/characters/audition-night/writer-angry.png',
    surprised: '/characters/audition-night/writer-surprised.png',
    worried: '/characters/audition-night/writer-worried.png',
    nervous: '/characters/audition-night/writer-nervous.png',
    calm: '/characters/audition-night/writer-calm.png',
  },
  role: '劇本編劇',
  // ...
}
```

> `avatar` 欄位請**保留**。當圖片載入失敗或沒有配置 `portraits` 時，會自動顯示 Emoji。

---

## 圖片規格建議

| 項目 | 建議值 |
|------|--------|
| 格式 | PNG（透明背景） |
| 尺寸 | 512×512 至 1024×1024 px |
| 比例 | 1:1（頭像裁切為圓形） |
| 風格 | 統一畫風，建議半身或胸像 |
| 檔案大小 | 單張 < 500KB，避免影響 PWA 快取 |

---

## 推薦免費素材來源

### 🌟 最推薦（日系 VN 風格）

| 網站 | 說明 | 授權 |
|------|------|------|
| **[Noraneko Games](https://noranekogames.itch.io/)** | 專門做免費 VN 素材，角色立繪品質高 | CC BY 或個人/商用免費（需標註） |
| **[OpenGameArt.org](https://opengameart.org/)** | 搜尋 `visual novel sprite` 有大量結果 | 多為 CC0 / CC-BY |
| **[Itch.io](https://itch.io/game-assets/free)** | 篩選 Free + Visual Novel，素材極多 | 依各作者不同 |

### 搜尋關鍵詞

- 英文：`free visual novel character sprites`, `VN portrait pack`, `free anime sprites transparent`
- 日文：`フリー立ち絵`, `フリー素材 立ち絵`, `VN 素材 無料`

### ⚠️ 使用注意

1. **授權確認**：下載前務必查看作者規定的使用條款（商用？改作？標註？）
2. **風格統一**：同一故事的角色建議使用同一畫師/同一素材包的立繪
3. **透明背景**：PNG 透明背景效果最佳，白色背景需要自行去背
4. **PWA 快取**：`public/` 下的圖片會被 Service Worker 快取，總量建議控制在 3MB 以內

---

## 快速測試

1. 將一張圖片放入 `public/characters/test-normal.png`
2. 在任一故事的 NPC 中加入：`portraits: { normal: '/characters/test-normal.png' }`
3. 運行 `npm run dev`，進入遊戲對話，應該看到圖片取代 Emoji

---

## 故障排除

| 問題 | 解決方法 |
|------|---------|
| 圖片顯示為 Emoji | 檢查路徑是否正確（必須以 `/` 開頭）、檔案是否確實在 `public/` 下 |
| 情緒沒有切換 | 確認 `portraits` 中有對應鍵值，否則會回退到 `normal` |
| 圖片載入慢 | 壓縮圖片至 < 300KB，或使用 WebP 格式 |
| 畫風不統一 | 同一故事盡量使用同一素材包 |
