import type { Story } from '../../../types/game';

export const deepSeaStory: Story = {
  id: 'deep-sea',
  title: '深海站 7 號',
  subtitle: '通訊中斷的海底研究站，八個科學家中有一個殺手',
  era: '近未來',
  setting: '太平洋海底 3000 公尺研究站',
  synopsis:
    '深海站7號是人類在太平洋底最深的前哨。三千公尺的海水把這裡與世界隔絕成兩個宇宙——上面的宇宙有陽光、有家人、有新鮮的空氣；這裡的宇宙只有鋼鐵、壓力、與無盡的黑暗。\n\n三天前，站內與外界的通訊突然中斷。不是故障，是被人為切斷。補給潛艇抵達時，發現站長馬克博士死於減壓艙——他的肺部被急速灌入的海水撐裂，雙眼圓睜，像是在死前看到了某種不應存在於海底的東西。\n\n剩下的七名科學家被困在三百個大氣壓的深淵裡。潛艇無法立刻接走所有人，而氧氣循環系統開始出現異常。更可怕的是，他們知道——殺手就在這七個人之中，而那人切斷通訊的目的，就是要讓這座鋼鐵棺材成為所有人的墳墓。',
  hasPrologue: true,
  prologueSynopsis:
    `深海站7號的燈光永遠是同一種顏色——那種介於日光燈和月光之間的蒼白。三千公尺的海水在鋼鐵外殼上施加著無聲的壓力，像一隻巨手緩緩收緊。在這裡，時間不是用日出日落來計算的，是用氧氣循環系統的嗡鳴聲來計算的。

站長馬克博士正在實驗室裡記錄數據。他的鬍子比上個月又長了一些，眼鏡片後面的眼睛因為長期缺乏自然光而顯得過分明亮。他對著對講機說：「所有系統正常。告訴上面，我們的發現會讓他們重新思考整個深海生態模型。」

廚房裡，老陳正在準備晚餐。他的菜刀在砧板上發出規律的聲響，像是某種倒計時。實驗室裡，生物學家盯著顯微鏡，工程師在檢查電路，心理醫生在寫報告，地質學家在整理岩芯樣本。一切正常。通訊系統亮著綠燈。補給潛艇預計三天後抵達。

沒有人知道，這將是他們最後一頓正常的晚餐。`,
  victim: '站長馬克博士（海洋生物學家，48歲）',
  characters: [
    { id: 'biologist', name: '你（生物學家）', role: '深海生物學家', avatar: '🧬', description: '你的實驗室白袍上總是沾著培養液的痕跡，指甲縫裡有洗不淨的螢光顏料。你說話時習慣用試管輕敲桌面，節奏像某種密碼。你的眼睛在提到「專利」這個詞時會突然發亮。', secret: '三個月前，你在熱泉噴口附近發現了一種會發光的深海細菌。它的基因序列裡藏著一種全新的蛋白質合成路徑——市值估算，五十億美元。你沒有上報站方，而是用自己的名字提交了專利申請。', motive: '馬克博士三天前闖入你的實驗室，把你鎖在保險櫃裡的專利申請書拍了照片。他說：「這是站方的財產。要麼你撤銷申請，要麼我讓你永遠上不了岸。」', alibi: '說在實驗室觀察樣本', secretPrologue: '三千公尺深的海底，沒有人聽得見謊言。我看著培養皿裡的細菌在顯微鏡下分裂，它們比我誠實——它們只會分裂，不會背叛。那份專利申請書鎖在我的抽屜裡，馬克博士今天第四次經過我的實驗台，他的影子在玻璃上停留了兩秒。兩秒，足夠一個人決定偷看。',
    hiddenAgenda: '確保專利申請書不被馬克博士發現',
      isPlayable: true },
    { id: 'engineer', name: '小林', role: '工程師', avatar: '🔧', description: '他的工裝上掛滿了各種型號的螺絲刀，走起路來像一個移動的工具箱。他說話極少，但一旦開口，每個句子都像技術手冊一樣精確。他的目光總是飄向通訊設備，像是在確認什麼。', secret: '他的護照上寫著「林建國」，但那不是他出生時的名字。他是某國國防部派來的技術間諜，任務是竊取深海熱泉採礦技術——那項技術可以讓一個國家在稀有金屬儲備上領先三十年。', motive: '馬克博士上週在例行檢查中發現了他的加密通訊記錄。他沒有揭發，而是開出了條件：「幫我拿到生物學家的專利文件，我就當作沒看見。」小林知道，這是一個永遠不會結束的勒索。', alibi: '說在機房檢修通訊設備', hiddenAgenda: '銷毀加密通訊記錄的備份',
      isPlayable: true },
    { id: 'psychologist', name: '艾倫', role: '心理醫生', avatar: '🧠', description: '他的白袍總是乾淨得過分，口袋裡插著一支銀色的鋼筆。他說話時聲音輕柔得像在進行催眠導入，每個句子都帶著一種令人不安的同理心。但當他獨自坐在角落時，眼神會變得冰冷而計算。', secret: '過去兩年，他以「心理評估」為名，對馬克博士進行了一場秘密的精神控制實驗。催眠、藥物、睡眠剝奪——他記錄了馬克博士在極限狀態下的每一個反應，準備以此為基礎發表一篇震驚學術界的論文。', motive: '馬克博士在三天前的深夜闖入醫務室，發現了催眠紀錄和藥物使用清單。他說：「艾倫，等補給艇一到，你就會以反人類罪被逮捕。這是我給你的最後禮物。」', alibi: '說在醫務室整理病歷', hiddenAgenda: '銷毀醫務室裡的催眠紀錄和藥物清單',
      isPlayable: true },
    { id: 'geologist', name: '索菲亞', role: '地質學家', avatar: '🪨', description: '她的頭髮總是隨意地綁在腦後，幾縷碎髮垂在額前，像是沒時間打理。她說話時手勢很大，像是在比劃岩層的走向。但當話題觸及「商業價值」時，她的聲音會突然變低，像怕隔牆有耳。', secret: '六個月前，她的探測數據顯示，距離研究站二十海里的海底山脈中，蘊藏著價值數百億美元的稀土礦藏。她沒有上報國際海底管理局，而是與一家私人採礦公司簽訂了秘密協議——分成比例，她占百分之三十。', motive: '馬克博士拒絕讓她公開礦藏位置。他說：「這是科學研究站，不是妳的私人金庫。」但索菲亞知道，一旦數據被站方上報，那三十億美元就會變成一堆永遠無法觸及的數字。', alibi: '說在探測艙分析數據', hiddenAgenda: '確保稀土礦藏的探測數據不會被上報',
      isPlayable: true },
    { id: 'chef', name: '老陳', role: '廚師', avatar: '👨‍🍳', description: '他的圍裙上永遠有洗不淨的油漬，手指關節粗大，像是曾經握過比鍋鏟更沉重的東西。他總是笑呵呵的，會在端上菜餚時說一句「趁熱吃」——但當他獨自面對窗外漆黑的深海時，笑容會像退潮一樣消失。', secret: '五年前，他與馬克博士（當時還不是博士，只是個野心勃勃的研究員）一起進行過一次深海探測任務。設備故障時，馬克選擇了獨自逃生，把受傷的他留在了三千公尺的海底。他最終被救出，但雙腿終生殘疾——雖然他在輪椅上裝了義肢，勉強可以行走，但每一次邁步都是一場酷刑。', motive: '馬克博士不僅從未道歉，還在事故報告中把責任全部推給了他。五年來，老陳每天在廚房為這個人做飯，每一次切菜，都像是在切斷什麼東西。', alibi: '說在廚房準備晚餐', hiddenAgenda: '找到並銷毀五年前事故報告中對自己不利的部分', tool: { name: '毒魚肝油', description: '可以將毒素殘留轉移到任何食物或餐具上' }, secretPrologue: '三千公尺深的海底，沒有人聽得見謊言。我看著馬克博士把那份報告鎖進抽屜，知道他下一步就要揭穿那個秘密。只有讓他永遠閉嘴，那件事才不會隨著補給艇浮上水面。毒魚肝油藏在調味罐底層，無色無味，足夠讓一個人在減壓艙裡永遠沉睡。',
      isPlayable: true },
    { id: 'doctor-v', name: '馬克博士', role: '受害者', avatar: '💀', description: '研究站站長。', secret: '計畫將所有研究成果據為己有', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'decompression', name: '減壓艙', icon: '⚡', description: '減壓艙的門被強行打開，金屬邊緣扭曲變形。海水在地板上留下一道鹽白的痕跡，空氣裡飄著臭氧與海水的鹹腥混合的氣味。馬克博士的遺體已被移走，但牆上的抓痕還在——那是他臨死前最後的掙扎。', clues: ['broken-door','pressure-log'], npcs: [], imagePrompt: '海底研究站減壓艙，海水，昏暗' },
    { id: 'lab', name: '實驗室', icon: '🧪', description: '各種深海樣本和實驗設備在這裡擁擠地排列，顯微鏡還開著，載物台上是一片尚未觀察完的細菌塗片。培養箱的嗡鳴聲與冷氣機的滴水聲交織成一種令人不安的節奏，空氣裡飄著培養基的甜味與消毒水的刺鼻。', clues: ['bacteria-sample','patent-paper'], npcs: ['biologist'], imagePrompt: '海底研究站實驗室，設備' },
    { id: 'engine', name: '機房', icon: '⚙️', description: '研究站的心臟。所有設備在這裡運轉，伺服器的風扇發出持續的嗡鳴，像是一群永遠不會疲倦的昆蟲。空氣乾燥而灼熱，電線的絕緣層散發著一種令人頭暈的塑膠味。', clues: ['comm-device','spy-tool'], npcs: ['engineer'], imagePrompt: '海底研究站機房，螢幕' },
    { id: 'medical', name: '醫務室', icon: '💊', description: '簡陋的醫務室裡，心理評估的設備與急救器材並排擺放，像是一種諷刺。空氣裡飄著藥品的苦澀與消毒酒精的揮發氣味，床單上的折痕顯示有人剛剛在這裡躺過。', clues: ['hypnosis-record','drug-inventory'], npcs: ['psychologist'], imagePrompt: '海底研究站醫務室' },
    { id: 'probe', name: '探測艙', icon: '📡', description: '控制深海探測器的艙室裡，窗外是純粹的漆黑。偶爾有深海生物的發光器官從窗外飄過，像是一顆顆墜落的流星。螢幕上的地質數據還在跳動，像是一個尚未停止的心跳。', clues: ['mineral-data','mining-contract'], npcs: ['geologist'], imagePrompt: '海底研究站探測艙，窗外漆黑' },
    { id: 'kitchen', name: '廚房', icon: '🍳', description: '研究站的廚房是唯一的「人間氣息」。牆上貼著每個人的飲食禁忌表，鍋裡還燉著沒來得及盛出的湯。蒸汽在天花板上凝結成水珠，滴落在不鏽鋼檯面上，發出規律的滴答聲，像一座倒置的鐘。', clues: ['food-poison','accident-photo'], npcs: ['chef'], imagePrompt: '海底研究站廚房' },
  ],
  npcs: [
    { id: 'engineer', name: '小林', avatar: '🔧', role: '工程師', personality: '說話像朗讀技術手冊，每個句子都精確到標點。被質疑時會下意識地摸向工裝口袋裡的螺絲刀——那不是威脅，是一種自我安撫。他的目光從不與人對視超過三秒。', secret: '某國派來的間諜', liesAbout: ['他的真實身份','通訊中斷的原因'], tellsTruthAbout: ['設備的技術細節','他注意到的異常'], defaultLocation: 'engine',
    schedule: [
      { startHour: 20, endHour: 24, locationId: 'engine', activity: '在機房檢修設備' },
      { startHour: 0, endHour: 2, locationId: 'lab', activity: '到實驗室檢查' },
      { startHour: 2, endHour: 4, locationId: 'engine', activity: '回到機房' },
    ],
    aiPrompt: '你是工程師，沉默的技術宅。你隱瞞著一個可能危及國家安全的秘密。你習慣用數據和邏輯築起一道牆，但今晚，你發現牆的對面站著一個比你更擅長隱藏的人。' },
    { id: 'psychologist', name: '艾倫', avatar: '🧠', role: '心理醫生', personality: '說話輕柔得像在進行催眠導入，每個句子都帶著令人不安的同理心。被質疑時不會激動，只會微微歪頭，像是在進行某種臨床觀察。他的鋼筆從不離手，筆帽開合的聲音是他緊張時的標誌。', secret: '對站長進行秘密精神控制實驗', liesAbout: ['他的實驗','與站長的關係'], tellsTruthAbout: ['對其他人心理狀態的分析','他觀察到的細節'], defaultLocation: 'medical',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'medical', activity: '在醫務室整理病歷' },
      { startHour: 22, endHour: 24, locationId: 'engine', activity: '到機房巡視' },
      { startHour: 0, endHour: 2, locationId: 'medical', activity: '回到醫務室' },
      { startHour: 2, endHour: 4, locationId: 'decompression', activity: '到減壓艙' },
    ],
    aiPrompt: '你是心理醫生，溫和友善。你在進行一個不道德的實驗，而你的實驗對象死了。你比任何人都清楚恐懼如何在密閉空間裡傳播——因為你是那個最擅長播種恐懼的人。' },
    { id: 'geologist', name: '索菲亞', avatar: '🪨', role: '地質學家', personality: '說話時手勢很大，像是在比劃岩層的走向。被質疑時會下意識地抱起雙臂，像在保護自己的胸腔。她的目光總是飄向探測艙的螢幕——那裡有她的礦藏，也有她的牢籠。', secret: '與採礦公司簽訂了秘密協議', liesAbout: ['礦藏的真實價值','她的商業計畫'], tellsTruthAbout: ['地質數據的專業分析','她注意到的異常'], defaultLocation: 'probe',
    schedule: [
      { startHour: 20, endHour: 24, locationId: 'probe', activity: '在探測艙分析數據' },
      { startHour: 0, endHour: 2, locationId: 'lab', activity: '到實驗室討論' },
      { startHour: 2, endHour: 4, locationId: 'probe', activity: '回到探測艙' },
    ],
    aiPrompt: '你是地質學家，熱情洋溢。你在科學與金錢之間走鋼索。你發現了一座金山，但這座金山被困在三千公尺的海底——而你知道，一旦秘密洩漏，你將一無所有。' },
    { id: 'chef', name: '老陳', avatar: '👨‍🍳', role: '廚師', personality: '總是笑呵呵的，會在端上菜餚時說一句「趁熱吃」。但當話題觸及「馬克博士」或「五年前」時，他的笑容會像退潮一樣消失，握鍋鏟的手指會突然發白。', secret: '站長的前合夥人，因事故被拋棄', liesAbout: ['與站長的過去','他的真實感受'], tellsTruthAbout: ['每個人的飲食習慣','他看到的異常'], defaultLocation: 'kitchen',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'kitchen', activity: '在廚房準備晚餐' },
      { startHour: 22, endHour: 24, locationId: 'kitchen', activity: '在廚房收拾' },
      { startHour: 0, endHour: 2, locationId: 'medical', activity: '到醫務室送藥' },
      { startHour: 2, endHour: 4, locationId: 'kitchen', activity: '回到廚房' },
    ],
    aiPrompt: '你是研究站廚師，和藹可親。你曾經與站長有過不為人知的過去。你每天為八個人做飯，其中一個是你恨了五年的人。你的廚房裡有刀，有毒藥，也有無數個可以讓一個人永遠閉嘴的機會——但你一直沒有動手，直到今天。' },
  ],
  clues: [
    { id: 'broken-door', name: '強行打開的門', description: '減壓艙的門被從內部強行打開，金屬邊緣扭曲成詭異的弧度。門把手上有一道血跡，是從內側握上去的——顯示馬克博士在被追殺時，試圖逃入減壓艙，但失敗了。', locationId: 'decompression', type: 'physical', isHidden: false, relevance: '站長在被追殺時試圖逃入減壓艙', destroyable: true,
    details: [
      { label: '撬痕角度', content: '門框上的撬痕呈四十五度角向下，這是左慣用手的人才會留下的角度。研究站裡左撇子只有兩個人——生物學家和廚師。' },
      { label: '金屬碎屑', content: '撬痕裡嵌著幾片不鏽鋼碎屑，成分與廚房的手術刀一致。但廚師說他從來沒有離開過廚房。' },
      { label: '壓力讀數', content: '門邊的壓力感應器在最後一次開門時記錄到異常數值——外部壓力比內部高出0.3個大氣壓。這意味著門被打開時，有人在艙外。' },
    ],
  },
    { id: 'pressure-log', name: '壓力紀錄', description: '減壓艙的壓力紀錄顯示，案發前半小時，艙內壓力被人為從正常值驟降到與外部海水壓力相等。這不是故障——是有人在控制台上輸入了精確的指令。', locationId: 'decompression', type: 'document', isHidden: false, relevance: '兇手故意讓減壓艙失效', unlocksMemory: 'memory-pressure-trap', timeWindow: { startHour: 0, endHour: 2, reason: '午夜後，減壓艙的壓力記錄才會自動歸檔' } ,
    details: [
      { label: '指令來源', content: '壓力調整指令是從主控台發出的，但主控台的登入紀錄顯示，當時沒有人登入。這是一個預設的自動程序——有人在幾天前就設定了這個指令。' },
      { label: '時間精確度', content: '壓力驟降的時間精確到秒：凌晨兩點十七分三十三秒。這不是隨機時間，而是馬克博士每天固定檢查減壓艙的時間——兇手知道他的習慣。' },
      { label: '備份紀錄', content: '系統的備份紀錄顯示，壓力控制程序在三天前被修改過。修改者的帳號是「admin」——但研究站只有站長馬克博士擁有admin權限。' },
    ],
  },
    { id: 'bacteria-sample', name: '細菌樣本', description: '實驗室的深海細菌樣本，培養皿上貼著「專利申請中」的標籤，署名是你。標籤的邊緣被手指反覆摩挲，已經起了毛邊——顯示有人經常來查看它。', locationId: 'lab', type: 'physical', isHidden: true, relevance: '你確實計畫私下申請專利' },
    { id: 'patent-paper', name: '專利申請書', description: '垃圾桶中的專利申請書草稿，申請人是馬克博士，內容是你的細菌研究成果。紙張被揉皺又展平，上面有你憤怒的指甲痕跡——或者，是馬克博士得意的手印。', locationId: 'lab', type: 'document', isHidden: false, relevance: '站長準備搶走你的研究成果' },
    { id: 'comm-device', name: '通訊設備', description: '機房中被破壞的通訊設備，線路被精準地切斷了特定的頻段——不是外行人能做到的粗魯破壞，而是專業的、有選擇性的癱瘓。破壞者顯然知道如何讓這裡與世隔絕，同時不觸發警報。', locationId: 'engine', type: 'physical', isHidden: false, relevance: '兇手有專業的工程知識', timeWindow: { startHour: 20, endHour: 22, reason: '晚上八點到十點，機房通訊設備的維護窗口期' } },
    { id: 'spy-tool', name: '間諜工具', description: '機房角落的隱藏式硬碟，外殼被偽裝成普通的備份設備。裡面是研究站的機密技術資料，檔案的創建時間顯示，資料傳輸在通訊中斷前一小時還在進行。硬碟上有小林的指紋。', locationId: 'engine', type: 'physical', isHidden: true, relevance: '小林確實是間諜' },
    { id: 'hypnosis-record', name: '催眠紀錄', description: '醫務室的催眠治療紀錄，顯示艾倫對馬克博士進行了長達三個月的秘密催眠。紀錄中的「治療目標」一欄寫著：「誘導受試者在極限壓力下做出極端決策。」最後一次的日期是三天前。', locationId: 'medical', type: 'document', isHidden: true, relevance: '艾倫在對站長進行精神控制實驗' },
    { id: 'drug-inventory', name: '藥品清單', description: '醫務室的鎮靜劑少了大量，但沒有任何醫療紀錄顯示這些藥被使用過。藥品名稱是「氟硝西泮」——一種會讓人在半小時內陷入深度昏睡的藥物。', locationId: 'medical', type: 'document', isHidden: false, relevance: '有人偷走了大量鎮靜劑' },
    { id: 'mineral-data', name: '礦藏數據', description: '探測艙的數據顯示附近海底有價值數十億美元的稀有礦藏。螢幕上的礦脈圖像像是一條金色的血管，蜿蜒在漆黑的海底山脈之中。', locationId: 'probe', type: 'document', isHidden: false, relevance: '礦藏的存在讓多人有動機' },
    { id: 'mining-contract', name: '採礦協議', description: '索菲亞的抽屜中有一份與採礦公司的秘密協議，分成比例高達30%。協議的最後一頁附著一張便條，是馬克博士的字跡：「妳以為這裡沒有法律嗎？」', locationId: 'probe', type: 'document', isHidden: true, relevance: '索菲亞與採礦公司有利益關係' },
    { id: 'food-poison', name: '有毒食材', description: '廚房垃圾桶中的食材殘留顯示含有劇毒——河豚毒素。但這些食材從未上桌，它們被小心地包裹在錫紙裡，藏在垃圾桶的最底層，像是一個被中途放棄的計畫。', locationId: 'kitchen', type: 'physical', isHidden: false, relevance: '有人計畫下毒但未成功', destroyable: true, unlocksMemory: 'memory-poisoned-dinner' },
    { id: 'accident-photo', name: '事故照片', description: '老陳的床頭櫃中有一張舊照片，邊緣被手指摩挲得發毛。照片顯示五年前的一次海底事故，兩個年輕人站在潛水器前——一個是年輕的馬克博士，另一個是雙腿完好的老陳。他們在笑，手臂搭在彼此的肩膀上。', locationId: 'kitchen', type: 'document', isHidden: false, relevance: '老陳與站長有舊怨', destroyable: true },
  ],
  truth: {
    murdererId: 'chef',
    method: '老陳在晚餐中放入大量鎮靜劑，等站長昏睡後將他拖入減壓艙，破壞壓力系統，讓海水湧入淹死站長。',
    motive: '五年前站長在一次海底事故中拋棄了他，導致他終生殘疾',
    timeline: '晚餐時間：老陳在站長的餐點中放入鎮靜劑。兩小時後：站長昏睡，被拖入減壓艙。老陳破壞壓力系統，海水湧入。',
    fullExplanation: '五年前，老陳和站長（當時還是合夥人）一起進行一次深海探測任務。設備故障時，站長選擇了獨自逃生，將受傷的老陳留在了海底。雖然老陳最終被救出，但雙腿終生殘疾，只能坐輪椅。站長不僅沒有道歉，還將事故責任全部推給老陳，讓他背負了職業生涯的污點。五年來，老陳每天在廚房為這個人做飯，內心的恨意逐漸發酵成殺意。',
    eachCharacterSecret: {
      'biologist': '發現了具有巨大商業價值的深海細菌',
      'engineer': '某國派來的間諜',
      'psychologist': '對站長進行秘密精神控制實驗',
      'geologist': '與採礦公司簽訂了秘密協議',
      'chef': '站長的前合夥人，因事故被拋棄',
    },
  },

  disruption: {
    name: '緊急警報',
    interval: 4,
    locations: ['decompression', 'lab', 'engine', 'medical', 'probe', 'kitchen'],
    hitMessage: '警報聲在{location}炸響，廣播裡傳來「所有人返回指定區域」的指令。你被迫離開。',
    missMessage: '警報燈在{location}閃爍，廣播聲斷斷續續',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：你就是兇手。在三千公尺深的海底，沒有人聽得見你的尖叫。努力回憶犯案過程，並銷毀對你不利的線索。',
    'config': {
      'strikeThreshold': 4,
      'sensitiveKeywords': [
        '減壓艙',
        '鎮靜劑',
        '晚餐',
        '壓力',
        '海水',
        '艙門'
      ],
      'choices': [
        {
          'id': 'ds-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'broken-door'
          },
          'question': '減壓艙的門被強行打開，門把手上有一道從內側握上去的血跡。馬克博士試圖逃進來，但失敗了。你會怎麼做？',
          'options': [
            { 'label': '封鎖現場，不讓任何人靠近', 'value': 'seal' },
            { 'label': '檢查壓力紀錄，確認兇手如何操作的', 'value': 'investigate' },
            { 'label': '先銷毀你抽屜裡的專利申請書', 'value': 'hide' }
          ],
        },
        {
          'id': 'ds-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'kitchen'
          },
          'question': '廚房裡還燉著沒來得及盛出的湯，老陳的笑容在蒸汽中若隱若現。通訊中斷，殺手就在這七個人之中。在三千公尺的深海裡，你願意相信誰？',
          'options': [
            { 'label': '相信老陳，他是這裡唯一還有溫度的人', 'value': 'trust_chef' },
            { 'label': '不相信任何人，包括你自己', 'value': 'trust_none' },
            { 'label': '去找艾倫，心理醫生能看透謊言', 'value': 'trust_psych' }
          ],
        }
      ],    }
  }};
