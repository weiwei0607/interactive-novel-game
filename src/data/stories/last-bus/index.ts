import type { Story } from '../../../types/game';

export const lastBusStory: Story = {
  id: 'last-bus',
  title: '最後一班公車',
  subtitle: '末班車上七個乘客，終點站發現司機死在駕駛座',
  era: '現代',
  setting: '深夜末班公車，從市區開往郊區的 307 路',
  hasPrologue: true,
  prologueSynopsis:
    `深夜十點四十五分，307路公車的站牌下已經沒有多少候車的人。市區的霓虹在雨後的地面上映出斑斕的色塊，像一條被踩碎的彩虹。\n\n老李坐在駕駛座上，手指輕敲方向盤，嘴裡哼著一首八十年代的老歌。他對每個上車的乘客點頭——對護士說「下班啦」，對大學生說「又這麼晚」，對拾荒阿婆說「慢慢來，不趕」。他的聲音沙啞但溫和，像一台用了多年的舊收音機。\n\n車廂裡的七個人各自佔據著自己的位置：護士靠在窗邊閉目養神；大學生塞著耳機；醉漢老張縮在角落裡，手裡攥著一個空酒瓶；王經理對著手機壓低聲音說話；駐唱歌手對著小鏡子補口紅；拾荒阿婆把撿到的瓶子一個一個數進麻袋。沒有人說話，但每個人都有自己的目的地。\n\n車門關上時發出一聲沉悶的響動。老李踩下油門，307路緩緩駛出站台，像一尾疲憊的魚，游向郊區墨色的終點。`,
  synopsis: '深夜十一時，307路末班車像一尾疲憊的魚，緩緩游出市區的霓虹叢林，駛向郊區墨色的終點。車內七盞昏黃的燈下，七張面孔各懷心事。當車輪終於停轉，終點站的冷風灌入車廂，乘客們才發現——司機老李趴在方向盤上，後腦的傷口早已凝結成紫黑色的沉默。車門從內部鎖死，這一路上沒有人下車。兇手，就在這七人之中。',
  victim: '司機老李（公車司機，52歲）',
  characters: [
    { id: 'nurse', name: '你（護士）', role: '夜班護士', avatar: '👩‍⚕️', description: '眼下泛著青黑，護士鞋輕敲地板的節奏像秒針。白袍口袋裡永遠插著一支筆。', secret: '你是老李前妻的女兒。母親吞藥那夜，最後一句話是「妳爸不要我們了」。', motive: '老李拋棄母親導致她自殺，而你在事隔十年後終於認出這個每天開末班車的陌生父親', alibi: '說在車尾打瞌睡', secretPrologue: '車廂的燈光閃爍了一下，老李的後腦勺在後視鏡裡一閃而過。我捏緊了包裡的安眠藥瓶——不，今晚不需要這個。我只需要一個答案：他還記不記得那個名字？那個他在手術室外說了「對不起」之後，就再也沒有提過的名字。如果他不記得了，我來幫他記起來。',
    hiddenAgenda: '確認老李是否還記得母親的名字',
      isPlayable: true },
    { id: 'student', name: '大學生阿明', role: '大學生', avatar: '🎒', description: '耳機掛在頸上，拇指機械地滑著手機螢幕，肩頭微微前傾，像隨時準備起身。', secret: '姐姐失蹤前最後一通電話說「307路司機知道我住在哪裡」。之後，人間蒸發。', motive: '懷疑老李與姐姐失蹤有關，這趟車是他調查三個月後的正面交鋒', alibi: '說在聽音樂', hiddenAgenda: '找到姐姐失蹤前最後的通話紀錄',
      isPlayable: true },
    { id: 'drunk', name: '醉漢老張', role: '無業遊民', avatar: '🍺', description: '縮在座位上，酒氣混著發酵的酸腐味，眼皮半垂，右手卻緊抓扶手，指節泛白。', secret: '二十年前那場車禍根本不是他的錯。老李把煞車失靈的報告簽成他酒駕，他失去了一切。', motive: '毀掉的人生無法重來，而老李每天仍準點發車，彷彿什麼都沒發生過', alibi: '說醉到不省人事', hiddenAgenda: '找到當年煞車失靈的真實報告',
      isPlayable: true },
    { id: 'businessman', name: '王經理', role: '保險業務', avatar: '💼', description: '西裝領帶一絲不苟，拇指不斷轉動婚戒，螢幕藍光映得臉色發青。', secret: '他把老李的保單受益人偷偷改成自己，正要東窗事發。', motive: '老李準備投訴他詐騙保險金，一旦調查開始，他經營十年的信譽將化為灰燼', alibi: '說在打電話', hiddenAgenda: '銷毀老李保單受益人被篡改的證據',
      isPlayable: true },
    { id: 'singer', name: '駐唱歌手', role: '酒吧駐唱', avatar: '🎤', description: '濃妝下的眼尾微微泛紅，高跟鞋在地板上輕點，像還在數拍子。', secret: '她以為這段見不得光的感情會有結果，直到老李說「我老婆發現了」。', motive: '她用青春換一場空，既然得不到，那就誰也別想擁有完整的他', alibi: '說在化妝', hiddenAgenda: '找到老李準備留給妻子的財產文件',
      isPlayable: true },
    { id: 'old-lady', name: '拾荒阿婆', role: '拾荒老人', avatar: '👵', description: '駝背像一張被揉皺又攤開的紙，指甲縫嵌著洗不掉的污漬，目光卻異常清明。', secret: '她是老李的親生母親。三十年前兒子說「我沒有家人」那天的廣播，她到現在都記得。', motive: '三十年來每天坐這班車遠遠看著兒子，直到前幾天他對乘客說「沒有家人拖累是我這輩子最慶幸的事」', alibi: '說在數撿到的瓶子', hiddenAgenda: '讓老李在臨死前叫一聲「媽」', tool: { name: '心臟藥瓶', description: '可以將藥物殘留塗抹到任何飲料或食物上' }, secretPrologue: '那個方向盤後面的男人，我認了三十年。他說「我沒有家人」那天，我失去了兒子；但他不知道，我早就知道——三年前那場車禍，真正撞死我女兒的司機，就是他。今晚，這班末班車不會再開了。',
      isPlayable: true },
    { id: 'driver-v', name: '老李', role: '受害者', avatar: '💀', description: '公車司機。', secret: '傷害了多人的利益', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'front', name: '車頭', icon: '🚌', description: '駕駛座上的老李像一件被丟棄的外套癱軟著，方向盤上乾涸的血跡在儀表燈下泛著褐紅光澤，車內殘留著皮革與鐵鏽混雜的氣味。', clues: ['steering-blood','ticket-machine'], npcs: [], imagePrompt: '公車車頭，駕駛座，血跡' },
    { id: 'rear', name: '車尾', icon: '🪑', description: '車尾最後一排的塑膠座椅裂了口，冷氣出風口發出類似嗚咽的嗡嗡聲，護士的圍巾還搭在椅背上。', clues: ['pill-bottle','mother-photo'], npcs: ['nurse'], imagePrompt: '公車車尾，座位' },
    { id: 'middle', name: '車廂中段', icon: '🎧', description: '中段座位旁的金屬扶手上纏著白色耳機線，像一條勒進肉裡的繃帶，手機螢幕還亮著。', clues: ['phone-search','sister-missing'], npcs: ['student'], imagePrompt: '公車中段，座位' },
    { id: 'side', name: '側門座位', icon: '🍾', description: '側門座位下方有一灘穢物，酸腐氣味裡卻夾著一絲不該存在的清澈——像是水，不是酒。', clues: ['fake-drunk','accident-paper'], npcs: ['drunk'], imagePrompt: '公車座位，酒瓶' },
    { id: 'priority', name: '優先座位', icon: '📱', description: '優先座位的藍色椅墊還留著坐過的凹陷，腳邊黑色公文包的拉鍊開了一道縫，像一張欲言又止的嘴。', clues: ['insurance-paper','complaint-letter'], npcs: ['businessman'], imagePrompt: '公車優先座，公文包' },
    { id: 'front-row', name: '前排座位', icon: '💄', description: '前排座位上的化妝鏡還開著，鏡面映出駕駛座的死角，口紅滾落椅縫，像一滴凝固的血。', clues: ['love-message','breakup-text'], npcs: ['singer'], imagePrompt: '公車前排座位' },
    { id: 'door', name: '前門附近', icon: '♿', description: '前門踏板旁堆著幾個鼓鼓的塑膠袋，瓶子碰撞發出空洞的聲響，門縫漏進的風讓袋口微微顫動。', clues: ['birth-record','abandon-letter'], npcs: ['old-lady'], imagePrompt: '公車前門，袋子' },
  ],
  npcs: [
    { id: 'student', name: '大學生阿明', avatar: '🎒', role: '大學生', personality: '內向寡言，說話前會先抿一下嘴唇，眼神卻像釘子一樣精準', secret: '老李婚外情對象的弟弟', liesAbout: ['與老李的關係','來這條路線的目的'], tellsTruthAbout: ['他觀察到的細節','他聽到的對話'], defaultLocation: 'middle',
    schedule: [
      { startHour: 22, endHour: 24, locationId: 'middle', activity: '在車廂中段聽音樂' },
      { startHour: 0, endHour: 2, locationId: 'side', activity: '到車廂後側觀察' },
      { startHour: 2, endHour: 4, locationId: 'middle', activity: '回到車廂中段' },
    ],
    aiPrompt: '你是大學生阿明，內向沉默，但內心有一團燒了四年的火。你在尋找姐姐失蹤的真相，而這個司機是唯一的線索。你說話簡短，經常低頭看手機，但會在不經意間露出異常敏銳的觀察力。' },
    { id: 'drunk', name: '醉漢老張', avatar: '🍺', role: '無業遊民', personality: '說話含糊卻總在關鍵處停頓，像一頭裝睡的獅子', secret: '被老李陷害開除的前同事', liesAbout: ['他的真實身份','醉酒的狀態'], tellsTruthAbout: ['對老李的了解','他看到的異常'], defaultLocation: 'side',
    schedule: [
      { startHour: 22, endHour: 24, locationId: 'side', activity: '在車廂後側裝睡' },
      { startHour: 0, endHour: 2, locationId: 'middle', activity: '到車廂中段走動' },
      { startHour: 2, endHour: 4, locationId: 'side', activity: '回到車廂後側' },
    ],
    aiPrompt: '你是偽裝成醉漢的前同事老張。你渾身酒氣，但每句醉話都經過算計。你在等待復仇的機會已經等了二十年，你的眼睛在醉意下依然清醒。' },
    { id: 'businessman', name: '王經理', avatar: '💼', role: '保險業務', personality: '見人先笑，但笑意從不抵達眼角，握手時掌心乾燥冰涼', secret: '老李準備投訴他詐騙', liesAbout: ['與老李的業務關係','他的真實意圖'], tellsTruthAbout: ['對保險的專業分析','他注意到的異常'], defaultLocation: 'priority',
    schedule: [
      { startHour: 22, endHour: 24, locationId: 'priority', activity: '在優先座位打電話' },
      { startHour: 0, endHour: 2, locationId: 'front-row', activity: '到前排觀察' },
      { startHour: 2, endHour: 4, locationId: 'priority', activity: '回到優先座位' },
    ],
    aiPrompt: '你是保險業務王經理，圓滑精明，壓力大時會不自覺轉動婚戒。你的一個大客戶準備毀掉你的事業，而你在想盡辦法挽救。你說話滴水不漏，但會在無意中流露焦慮。' },
    { id: 'singer', name: '駐唱歌手', avatar: '🎤', role: '酒吧駐唱', personality: '笑聲很大，卻在笑完後迅速沉下臉，像切換開關', secret: '與老李有不倫戀情', liesAbout: ['與老李的關係','她的真實感受'], tellsTruthAbout: ['她對老李的了解','她聽到的傳聞'], defaultLocation: 'front-row',
    schedule: [
      { startHour: 22, endHour: 24, locationId: 'front-row', activity: '在前排化妝' },
      { startHour: 0, endHour: 2, locationId: 'priority', activity: '到優先座位休息' },
      { startHour: 2, endHour: 4, locationId: 'front-row', activity: '回到前排' },
    ],
    aiPrompt: '你是駐唱歌手，熱情奔放但內心脆弱。你愛過一個不願承認你的男人，這份愛變成了恨。你說話帶著表演性的誇張，但在提到感情時聲音會突然變輕。' },
    { id: 'old-lady', name: '拾荒阿婆', avatar: '👵', role: '拾荒老人', personality: '說話慢而輕，像風吹過空瓶子，目光總是飄向車頭', secret: '老李的母親', liesAbout: ['與老李的關係','她的真實身份'], tellsTruthAbout: ['她對老李的了解','她看到的異常'], defaultLocation: 'door',
    schedule: [
      { startHour: 22, endHour: 24, locationId: 'door', activity: '在車門附近數瓶子' },
      { startHour: 0, endHour: 2, locationId: 'middle', activity: '到車廂中段走動' },
      { startHour: 2, endHour: 4, locationId: 'door', activity: '回到車門附近' },
    ],
    aiPrompt: '你是拾荒阿婆，沉默寡言，駝背，說話像自言自語。這個不認你的兒子，是你一生的痛。你總是看著車頭的方向，手指無意識地摩挲塑膠袋裡的瓶子。你不願多談自己，但對老李的習慣瞭若指掌。' },
  ],
  clues: [
    { id: 'steering-blood', name: '方向盤血跡', description: '方向盤上的血跡呈噴濺狀，但老李的傷口在後腦勺——他不可能正面趴在這裡流血。有人移動過屍體，或偽裝了現場。', locationId: 'front', type: 'physical', isHidden: false, relevance: '有人在正面攻擊老李後，又偽裝了現場', unlocksMemory: 'memory-bloody-hands', timeWindow: { startHour: 0, endHour: 2, reason: '午夜過後，方向盤上的血跡才會乾涸發黑' } ,
    details: [
      { label: '血跡形狀', content: '方向盤上的血跡呈放射狀噴濺，中心點在十點鐘方向。這意味著老李被攻擊時，左手還握著方向盤，而他的右手——慣用手——來不及反抗。' },
      { label: '指甲縫', content: '方向盤的皮套縫隙裡卡著幾片指甲碎屑，碎屑上還帶著粉色的指甲油。老李不可能塗指甲油，這是攻擊者留下的。' },
      { label: '鑰匙', content: '車鑰匙還插在啟動孔裡，但引擎是熄火的。鑰匙上有新的刮痕，像是有人試圖拔下鑰匙但沒成功——或者，有人故意讓車子停在這裡。' },
    ],
  },
    { id: 'ticket-machine', name: '售票機紀錄', description: '售票機螢幕的冷光還亮著，上車人數顯示七人。你數了數車上的面孔——只有六張。', locationId: 'front', type: 'document', isHidden: false, relevance: '有人上車後又下車了，或者根本沒有上車', unlocksMemory: 'memory-extra-passenger', timeWindow: { startHour: 22, endHour: 24, reason: '末班車發車後兩小時內，售票機的記錄才會顯示異常' } ,
    details: [
      { label: '紀錄修改', content: '售票機的後台紀錄顯示，上車人數在發車後曾被修改過。原始紀錄是七人，修改後變成六人——有人在行駛途中刪除了一筆記錄。' },
      { label: '票根', content: '售票機的出票口卡著一張皺巴巴的票根，票根上的日期是昨天的。這輛公車昨天也走過同樣的路線，但司機老李的排班表上沒有昨天的記錄。' },
      { label: '監視器', content: '售票機上方的監視器鏡頭被人用口香糖黏住了一角，黏住的角度剛好擋住前門的視野。口香糖的口味是薄荷——車上只有一個人在嚼薄荷口香糖。' },
    ],
  },
    { id: 'pill-bottle', name: '安眠藥瓶', description: '護士包中的白色藥瓶，標籤上的數字與實際剩餘的藥片不符——少了三顆。', locationId: 'rear', type: 'physical', isHidden: false, relevance: '護士可能有讓人昏睡的藥物' },
    { id: 'mother-photo', name: '母親照片', description: '護士錢包夾層裡藏著一張泛黃的照片，年輕女人抱著嬰兒，背面用褪色的筆跡寫著「媽媽，我會為你討回公道」。', locationId: 'rear', type: 'document', isHidden: true, relevance: '護士與老李有私人恩怨' },
    { id: 'phone-search', name: '手機搜尋紀錄', description: '大學生手機的搜尋欄裡躺著一串冰冷的關鍵字：「307路公車司機」「失蹤人口」「姐姐」。', locationId: 'middle', type: 'document', isHidden: false, relevance: '大學生在調查老李' },
    { id: 'sister-missing', name: '姐姐失蹤案', description: '手機螢幕上是一則三年前的舊新聞：「女子深夜搭公車後失蹤，最後監視畫面顯示上了307路」。配圖裡的女子，眉眼與阿明如出一轍。', locationId: 'middle', type: 'document', isHidden: false, relevance: '大學生的姐姐可能與老李有關' },
    { id: 'fake-drunk', name: '假酒', description: '老張腳邊的酒瓶傾斜著，液體灑出一灘——沒有酒味，只有自來水的清冽。', locationId: 'side', type: 'physical', isHidden: false, relevance: '老張在假裝醉酒' },
    { id: 'accident-paper', name: '事故報告', description: '老張內袋裡的舊報紙已經發脆，頭條照片裡的年輕司機正是老李，標題寫著「公車司機老李因操作失誤導致事故，同事老張被開除」。', locationId: 'side', type: 'document', isHidden: false, relevance: '老張與老李有舊怨' },
    { id: 'insurance-paper', name: '保單', description: '公文包最深處的保單上，受益人一欄填著「王經理」三個字，而被保險人簽名處的字跡明顯是偽造的。', locationId: 'priority', type: 'document', isHidden: true, relevance: '王經理在詐騙老李的保險金' },
    { id: 'complaint-letter', name: '投訴信', description: '公文包側袋裡有一封已貼好郵票的信，收件人是保險公司稽核部，內容詳列了王經理詐騙保險金的每一筆帳。', locationId: 'priority', type: 'document', isHidden: false, relevance: '老李準備舉報王經理' },
    { id: 'love-message', name: '情話語音', description: '駐唱歌手手機裡有一條未刪除的語音，男人的聲音帶著倦意：「我們結束吧，我老婆發現了。」發送時間是三天前。', locationId: 'front-row', type: 'document', isHidden: false, relevance: '老李要與駐唱歌手分手' },
    { id: 'breakup-text', name: '分手簡訊', description: '歌手發給閨蜜的簡訊還留在輸入框裡：「如果他不要我，誰也別想得到他。」時間戳顯示是今晚發車前。', locationId: 'front-row', type: 'document', isHidden: true, relevance: '駐唱歌手因愛生恨' },
    { id: 'birth-record', name: '出生證明', description: '阿婆袋子最底層的塑膠袋裡，一張泛黃的出生證明被摺成四折，父親欄寫著老李的本名，母親欄是她年輕時的名字。', locationId: 'door', type: 'document', isHidden: false, relevance: '拾荒阿婆確實是老李的母親', destroyable: true },
    { id: 'abandon-letter', name: '遺棄信', description: '出生證明下面壓著一封信，紙張已經脆化，少年的筆跡潦草而決絕：「媽，別再來找我了，我丟不起這個人。」', locationId: 'door', type: 'document', isHidden: false, relevance: '老李遺棄了母親', destroyable: true },
  ],
  truth: {
    murdererId: 'old-lady',
    method: '拾荒阿婆用撿到的鐵管從背後重擊老李後腦，然後將鐵管藏入裝瓶子的袋子中。',
    motive: '老李遺棄了她這個母親三十年，還在廣播中說「我沒有家人」',
    timeline: '公車行駛途中：阿婆走到車頭，用鐵管重擊老李後腦。然後回到座位，將鐵管藏入袋子。公車自動駛到終點站。',
    fullExplanation: '拾荒阿婆是老李的親生母親。三十年前，老李因為覺得母親撿回收「丟人」，與她斷絕關係，甚至在結婚時對妻子說自己「沒有家人」。三十年來，阿婆每天坐這班末班車，看著兒子開車，從未與他相認。直到前幾天，她聽到老李在車上對乘客說「我這輩子最慶幸的就是沒有家人拖累」——這句話徹底擊碎了母親最後一絲希望。在這個深夜的末班車上，她用撿來的鐵管，結束了這個不認她的兒子的生命。',
    eachCharacterSecret: {
      'nurse': '老李前妻的女兒',
      'student': '老李婚外情對象的弟弟',
      'drunk': '被老李陷害開除的前同事',
      'businessman': '老李準備投訴他詐騙',
      'singer': '與老李有不倫戀情',
      'old-lady': '老李的母親',
    },
  },
  disruption: {
    name: '車輛顛簸',
    interval: 4,
    locations: ['front', 'rear', 'middle', 'priority', 'front-row', 'side', 'door'],
    hitMessage: '公車突然一個急剎車，你差點摔倒。屍體從駕駛座滑下來，所有人尖叫著湧向{location}的出口。',
    missMessage: '車燈閃爍，引擎發出異響，{location}的氣氛越來越緊繃',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：你是兇手。你需要掩飾罪行、銷毀指向自己的線索，並在不被識破的情況下完成目標。',
    'config': {
      'choices': [
        {
          'id': 'bus-choice-1',
          'condition': {
            'type': 'location',
            'locationId': 'front'
          },
          'question': '你發現司機的屍體還有體溫——兇手可能還在車上。你會怎麼做？',
          'options': [
            {
              'label': '立刻按警報器，讓全車人知道',
              'value': 'alarm'
            },
            {
              'label': '悄悄檢查其他乘客的反應',
              'value': 'observe'
            },
            {
              'label': '假裝沒事，繼續坐在原位',
              'value': 'pretend'
            }
          ]
        },

        {
          'id': 'bus-choice-2',
          'condition': {
            'type': 'clue',
            'clueId': 'accident-paper'
          },
          'question': '你在醉漢老張的內袋裡發現了一份發脆的舊報紙，頭條照片裡的年輕司機正是老李，標題寫著「公車司機老李因操作失誤導致事故，同事老張被開除」。老張二十年的人生被這篇報導毀了。你會怎麼做？',
          'options': [
            {
              'label': '把報紙交給老張，讓他自己決定',
              'value': 'return'
            },
            {
              'label': '當眾朗讀，幫老張討回公道',
              'value': 'expose'
            },
            {
              'label': '把報紙收起來，不讓往事重演',
              'value': 'hide'
            }
          ]
        }
      ]
    }
  }};
