# 霧中真相 — 待修 / Playtest 觀察清單

> 韡寧自己玩出來的觀察（2026-06-15）。**先別一條條修**——拿去給真人玩、收集他們的回饋後，再一次批次修。

## 真 bug（該修）
- [ ] **跟自己對話**：可對話 NPC 名單沒排除玩家角色。修法（韡寧的點子）：點自己 → 開「個人檔案」，不要進對話。
      - 位置：`src/components/screens/PrologueScreen.tsx`(~98 行 selectedLocation.npcs.map)、`LocationView.tsx` 同理；對話入口要判斷 `npcId === playerCharacter.id` → 改開 ProfileView。
- [ ] **信任度幾乎不變**：目前只在玩家打「謝謝/相信/說謊/騙」關鍵字時 ±5/-10（`DialogView.tsx` ~128 行）。太死。可改成由 AI 判斷對話後給 delta，或擴充關鍵字。

## 設計/UX（想清楚再改，可能進靈感停車場）
- [ ] 個人檔案入口只有右上角無標籤的 👤 icon → 玩家找不到自己角色故事。加「我」字標籤或開場先帶。
- [ ] 開場沒清楚說「你是誰、你的目標＝洗清自己嫌疑」的前提框架。
- [ ] 不同模式：玩家知不知道自己是兇手？知不知道死因？目前只有 player_is_killer 失憶模式。其他模式的「知識邊界」要設計。

- [ ] 個人檔案應把「角色對自己的全部了解」都列出來（description 外貌、secret、motive、alibi、hiddenAgenda、道具）——目前有列 secret/motive/alibi/道具，補 description 與隱藏目標。

## 原則
這些大多是 playtest 會自然抓到的東西。**下一步是 SHIP，不是繼續挖。**
