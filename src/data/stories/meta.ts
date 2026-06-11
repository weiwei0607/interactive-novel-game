export interface StoryMeta {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  setting: string;
  characterCount: number;
  locationCount: number;
  clueCount: number;
  firstAvatar: string;
  unlockRequirement?: { type: 'complete_story'; storyId: string; label: string };
}

export const storyMetas: StoryMeta[] = [
  { id: 'island-will', title: '孤島遺囑', subtitle: '六封請柬，一場颱風，沒有人能離開這座島', era: '現代', setting: '颱風夜的孤島別墅，與外界完全斷絕聯繫', characterCount: 6, locationCount: 6, clueCount: 12, firstAvatar: '👩‍💼' },
  { id: 'onsen-hotel', title: '溫泉旅館的最後一夜', subtitle: '二十年前的舊案，五個人，一個被埋葬的真相', era: '現代', setting: '山中的日式溫泉旅館，積雪封山，無法離開', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '👨‍💼' },
  { id: 'ink-and-paper', title: '白紙黑字', subtitle: '書院裡的秘密，足以毀掉一個人的仕途', era: '清末', setting: '蘇州城郊的白鹿書院，科舉在即', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '👓' },
  { id: 'train-carriage', title: '第十三節車廂', subtitle: '夜行的滬昆鐵路，密閉空間裡的生死局', era: '民國', setting: '滬昆鐵路夜車，第十三節臥鋪車廂', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '💼' },
  { id: 'immersive-theater', title: '入戲太深', subtitle: '戲中謀殺變成真實謀殺，演員與觀眾都不知道界線', era: '現代', setting: '城市中心的沉浸式劇場《謀殺之夜》', characterCount: 5, locationCount: 6, clueCount: 12, firstAvatar: '👩‍🎤', unlockRequirement: { type: 'complete_story', storyId: 'audition-night', label: '通關「試鏡之夜」' } },
  { id: 'golden-hall', title: '鎏金喜堂', subtitle: '大喜之日，新娘父親死於新房', era: '民國', setting: '上海灘顯赫大家族沈公館', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '👰' },
  { id: 'night-auction', title: '永夜拍賣', subtitle: '「早已燒毀」的名畫現身，持有者當晚死亡', era: '現代', setting: '私人藝術拍賣行，封閉式拍賣夜', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '👛' },
  { id: 'deep-sea', title: '深海站 7 號', subtitle: '通訊中斷的海底研究站，八個科學家中有一個殺手', era: '近未來', setting: '太平洋海底 3000 公尺研究站', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '🔧', unlockRequirement: { type: 'complete_story', storyId: 'island-will', label: '通關「孤島遺囑」' } },
  { id: 'audition-night', title: '試鏡之夜', subtitle: '影帝讀著「太真實」的劇本後猝死', era: '現代', setting: '影視公司試鏡現場，封閉的排練廳', characterCount: 5, locationCount: 6, clueCount: 12, firstAvatar: '✍️' },
  { id: 'painting-frame', title: '畫框裡的人', subtitle: '閉館後發現一幅新畫作，畫中人物與昨天死去的館長一模一樣', era: '現代', setting: '城市現代美術館', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '🎨' },
  { id: 'last-bus', title: '最後一班公車', subtitle: '末班車上七個乘客，終點站發現司機死在駕駛座', era: '現代', setting: '深夜末班公車，從市區開往郊區的 307 路', characterCount: 6, locationCount: 7, clueCount: 10, firstAvatar: '🎒' },
  { id: 'lighthouse', title: '霧中燈塔', subtitle: '漁村裡的燈塔管理員失蹤了，郵差發現的不只是信', era: '1950年代', setting: '台灣東北角漁村，濃霧籠罩的燈塔', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '🎣' },
  { id: 'bell-tower', title: '鐘樓上的烏鴉', subtitle: '中世紀修道院，主教死於懺悔室，行腳僧發現了不該發現的', era: '中世紀', setting: '歐洲中世紀修道院，瘟疫蔓延的邊陲小鎮', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '📿' },
  { id: 'mirror-mirror', title: '鏡中鏡', subtitle: '魔術師在「消失術」中真的消失了，只剩一灘血跡', era: '現代', setting: '城市中心的魔術劇場，週末晚間演出', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '🃏' },
  { id: 'red-mailbox', title: '紅色郵筒', subtitle: '郵差發現某個郵筒每天收到寄給死人的信', era: '1970年代', setting: '香港九龍城寨邊緣的老舊街區', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '🏠' },
  { id: 'ice-flame', title: '冰原上的火', subtitle: '南極考察站科學家死於火災，但南極不可能有火災', era: '現代', setting: '南極洲內陸考察站，極夜季節', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '💉' },
  { id: 'coffee', title: '咖啡冷掉之前', subtitle: '咖啡師每天為一個不存在的客人做咖啡', era: '現代', setting: '台北東區的一家獨立咖啡館', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '🧑' },
  { id: 'welcome', title: '歡迎光臨', subtitle: '民宿老闆娘死後，她的民宿仍在自動發送確認信給客人', era: '現代', setting: '日本京都郊區的傳統民宿', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '👨‍🍳' },
  { id: 'countdown', title: '倒數計時', subtitle: '計時炸彈在公車上，六個乘客中只有一個知道密碼', era: '現代', setting: '台北市的某輛公車，晚高峰時段', characterCount: 5, locationCount: 6, clueCount: 12, firstAvatar: '💼' },
  { id: 'last-page', title: '最後一頁', subtitle: '書店老闆死在書架間，手裡握著一本寫著他自己死亡場景的小說', era: '現代', setting: '台北舊城區的一間獨立書店「迷宮書房」', characterCount: 5, locationCount: 6, clueCount: 11, firstAvatar: '📜' },
];
