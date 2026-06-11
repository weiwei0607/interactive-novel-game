import type { Story } from '../../../types/game';

export const paintingFrameStory: Story = {
  id: 'painting-frame',
  title: '畫框裡的人',
  subtitle: '閉館後發現一幅新畫作，畫中人物與昨天死去的館長一模一樣',
  era: '現代',
  setting: '城市現代美術館',
  hasPrologue: true,
  prologueSynopsis:
    `美術館的開幕酒會在一個微雨的傍晚舉行。陳館長站在大廳中央，身後是他耗時三年籌備的「時代肖像」大展。來賓們手持香檳，在畫作間穿梭，相機的快門聲此起彼伏。\n\n林畫家被一群人圍著討論《寂靜的午後》的用色；老周穿著嶄新的制服，站在監控室門口，目光時不時飄向兒子生前最後一幅作品；趙夫人與陳館長並肩而立，珍珠項鍊在燈光下泛著圓潤的光澤；張修復師在角落裡與一位外國專家用極輕的聲音交談。你——策展人——在展冊的扉頁上寫下最後一段導言，抬頭時正好對上陳館長的目光。他舉杯向你致意，嘴角掛著一個你無法解讀的微笑。\n\n那是一個成功的夜晚。至少表面上如此。`,
  synopsis:
    '陳館長死於心臟病——至少法醫是這麼說的。他倒在美術館的辦公室裡，手邊還攤著自傳的草稿，咖啡杯裡的液體已經冷了。\n\n然而閉館後的深夜，保安老周巡邏時發現，展廳裡多了一幅從未見過的油畫。畫中是一個老人坐在輪椅上，面容與死去的陳館長一模一樣。畫作的簽名是「明天」——一個尚未到來的日期。而更詭異的是，畫中老人的姿勢、衣著，甚至領帶上的結，都與陳館長死亡當天的穿著完全一致。\n\n這幅畫不是預言，是宣告。某個人在陳館長死前就已經畫好了他的肖像，然後在館長死後，把它掛在了美術館最顯眼的位置——像是一枚血紅色的郵戳，蓋在一份死亡證明上。\n\n五位與陳館長命運交纏的人，被困在這座充滿謎團的建築裡。兇手就在他們之中，而那幅畫，就是兇手留給世界的簽名。',
  victim: '陳館長（美術館館長，68歲）',
  characters: [
    { id: 'curator-you', name: '你（策展人）', role: '美術館策展人', avatar: '🖼️', description: '你的西裝袖扣是莫內《睡蓮》的縮微複製品，但你從不承認那是贗品。你看畫時會不自覺地把頭歪向一邊，像是在確認某種只有你能看見的平衡。你的指甲縫裡有洗不淨的松節油味。', secret: '過去十年，你是陳館長最隱密的合作者。他負責把贗品畫作包裝成真品賣給富豪，你負責撰寫那些讓贗品變得「可信」的展覽論述。你們一起騙過了拍賣行、騙過了博物館、騙過了藝術史。', motive: '陳館長的自傳草稿裡有一章，標題是「我發現的贗品大師」。他計畫把你塑造成一個被他「識破」的騙子，以此提升自己傳奇收藏家的形象。你花了十年幫他騙人，他卻打算用你的名字，為自己的傳奇畫上最後一筆。', alibi: '說在辦公室整理展覽資料', secretPrologue: '修復室的化學藥劑瓶在燈光下閃爍著詭異的光澤。我取了少許「四亞甲基二砜四胺」，那個名字長得像一首詛咒。陳館長的茶杯還溫著，他習慣在深夜喝一口龍井再繼續寫自傳。我攪拌了三下，看著粉末溶解得無影無蹤。然後我回到畫室，開始畫那幅「明天」的肖像。顏料還沒乾，他就已經不會再睜開眼了。', tool: { name: '畫框釘錘', description: '可以將血跡和指紋轉移到任何表面' },
    hiddenAgenda: '找到陳館長自傳草稿中關於自己的章節',
      isPlayable: true },
    { id: 'artist', name: '林畫家', role: '參展畫家', avatar: '🎨', description: '他的頭髮亂得像鳥巢，顏料漬從袖口一直延伸到肘部。他說話時目光總是飄向遠方，像是在注視某個只存在於他腦海裡的風景。但他的手指——那雙握筆的手指——總是乾淨得過分，像是一種強迫症。', secret: '他的成名作《寂靜的午後》不是他畫的。十五年前，陳館長用權勢從一個無名畫家手中買下了那幅畫，然後把它「送」給了林畫家，條件是他必須成為陳館長的「專屬藝術家」。那個無名畫家後來自殺了。', motive: '陳館長上個月對他說：「我年紀大了，想在閉眼之前做一些『正確的事』。《寂靜的午後》的真相，是個不錯的開始。」', alibi: '說在畫室創作', hiddenAgenda: '找到《寂靜的午後》原畫家的身份證明',
      isPlayable: true },
    { id: 'security', name: '老周', role: '資深保安', avatar: '👮', description: '他在美術館工作了二十年，制服上的徽章磨得發亮。他說話時聲音沙啞，像是一台老舊的對講機。他的目光總是停留在監控螢幕上，但偶爾會飄向某幅特定的畫——那幅畫的作者是他的兒子。', secret: '二十年前，他的兒子周明遠是一位頗有才華的青年畫家。陳館長在一次聯展中「發現」了周明遠的作品，然後以「借展」為名取走了他所有的畫作。當周明遠要求歸還時，陳館長報警稱他「企圖盜竊館藏」。周明遠在拘留所裡待了四十七天，出來後精神崩潰，從美術館的頂樓一躍而下。', motive: '陳館長昨天在巡邏時對他說：「老周，你兒子的畫我打算在下一季展出。標題我都想好了——『一個失敗者的遺作』。」', alibi: '說在監控室值班', hiddenAgenda: '找到兒子周明遠被陳館長誣陷的原始文件',
      isPlayable: true },
    { id: 'donor', name: '趙夫人', role: '主要捐助者', avatar: '💎', description: '她的珍珠項鍊在燈光下泛著過分圓潤的光澤，像是一串被精心打磨過的謊言。她說話時聲音輕柔，每個句子都帶著一種練習過的優雅。但當她獨自面對某幅畫時，眼神會變得柔軟而悲傷——那是她唯一真實的時刻。', secret: '她與陳館長保持了五年的不倫關係。這段關係始於一次拍賣會後的晚餐，終於上個月陳館長對她說：「妳的年齡已經不適合出現在我的傳記裡了。」', motive: '陳館長不僅要與她斷絕關係，還打算在自傳中把她描述成一個「對藝術有狂熱執著但精神不穩定的捐助者」——一個為了接近他而編造愛情的瘋女人。', alibi: '說在咖啡廳與朋友聚會', hiddenAgenda: '找到陳館長自傳中關於自己的描述',
      isPlayable: true },
    { id: 'restorer', name: '張修復師', role: '畫作修復師', avatar: '🔬', description: '他的白袍上總是沾著各種顏色的化學藥劑漬，手指修長而蒼白，像是從未見過陽光。他說話時聲音極輕，像怕驚擾了畫布上的顏料。但他的目光在觸及某幅「真跡」時，會閃過一種近乎貪婪的光芒。', secret: '過去八年，他在修復過程中利用技術之便，用高精度複製品替換了六幅名畫的真跡。真跡被他藏在修復室的暗格裡，等待著某個「合適的時機」出售。陳館長上個月在例行檢查中發現了端倪。', motive: '陳館長給了他一個選擇：「要麼你主動辭職，把真跡還回來，我當作沒這回事。要麼我報警，讓你去監獄裡修復牆壁。」', alibi: '說在修復室工作', hiddenAgenda: '確保修復室暗格裡的真跡不被發現',
      isPlayable: true },
    { id: 'curator-v', name: '陳館長', role: '受害者', avatar: '💀', description: '美術館館長。', secret: '用權勢壓迫多人', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'gallery', name: '展廳', icon: '🖼️', description: '多了一幅神秘畫作的展廳裡，畫中的老人坐在輪椅上，目光穿過畫框凝視著每個觀眾。射燈在畫布上投下一圈慘白的光暈，顏料還沒有完全乾透，散發著淡淡的亞麻仁油氣味。', clues: ['mystery-painting','signature-analysis'], npcs: [], imagePrompt: '現代美術館展廳，神秘畫作' },
    { id: 'office-c', name: '館長辦公室', icon: '🏢', description: '陳館長的辦公室裡，書架上擺滿了藝術書籍，但書脊上的灰塵顯示它們從未被翻開過。辦公桌上的咖啡還溫著，杯沿有一枚淡淡的唇印——不是陳館長的。空氣裡飄著陳年雪茄與皮革混合的氣息。', clues: ['autobiography-draft','fake-collection'], npcs: [], imagePrompt: '美術館館長辦公室，書架' },
    { id: 'studio', name: '畫室', icon: '🎨', description: '林畫家的臨時畫室裡，顏料和畫布散落一地。松節油的氣味濃得幾乎令人眩暈，窗戶緊閉，空氣裡飄著某種焦慮的熱度。畫架上的半成品是一幅風景，但角落裡有一張被反覆塗改的人物素描。', clues: ['stolen-sketch','paint-analysis'], npcs: ['artist'], imagePrompt: '畫家工作室，顏料，畫布' },
    { id: 'control', name: '監控室', icon: '📹', description: '美術館的監控中心裡，數十塊螢幕同時閃爍，像是一面由光點構成的牆。老周坐在旋轉椅上，背影佝僂。螢幕的藍光在他的制服上投下條紋狀的陰影，像是一道無形的囚籠。', clues: ['cctv-gap','night-log'], npcs: ['security'], imagePrompt: '監控室，螢幕牆' },
    { id: 'cafe', name: '咖啡廳', icon: '☕', description: '美術館內的咖啡廳裡，趙夫人常坐的位置還留著一個杯印。空氣裡飄著過度萃取的咖啡苦味與她常用的晚香玉香水味——那種甜膩與苦澀的混合，像是一段變質的關係。', clues: ['coffee-receipt','lover-photo'], npcs: ['donor'], imagePrompt: '美術館咖啡廳' },
    { id: 'restore', name: '修復室', icon: '🔬', description: '專業的畫作修復室裡，化學藥劑的氣味濃烈到幾乎令人窒息。顯微鏡還開著，載物台上是一片被放大四百倍的顏料樣本。牆上的紫外線燈在黑暗中發出紫色的微光，像是一隻獨眼。', clues: ['chemical-poison','hidden-original'], npcs: ['restorer'], imagePrompt: '畫作修復室，顯微鏡' },
  ],
  npcs: [
    { id: 'artist', name: '林畫家', avatar: '🎨', role: '參展畫家', personality: '說話時目光飄向遠方，像是在注視某個只存在於他腦海裡的風景。被質疑時會突然激動，手指在空中比畫，像在捍衛某幅看不見的畫。但當話題觸及《寂靜的午後》時，他的聲音會突然乾澀，像一台缺油的機器。', secret: '成名作是搶來的', liesAbout: ['畫作的創作過程','與陳館長的關係'], tellsTruthAbout: ['對藝術的見解','他注意到的異常'], defaultLocation: 'studio',
    schedule: [
      { startHour: 10, endHour: 14, locationId: 'studio', activity: '在畫室創作' },
      { startHour: 14, endHour: 16, locationId: 'gallery', activity: '到展廳看展' },
      { startHour: 16, endHour: 18, locationId: 'studio', activity: '回到畫室' },
    ],
    aiPrompt: '你是前衛畫家，神經質敏感。你的成名作來路不正，而你知道這個秘密的人死了。你比任何人都清楚一幅畫可以承載多少謊言——因為你的整個人生，就是一幅被精心修復的贗品。' },
    { id: 'security', name: '老周', avatar: '👮', role: '資深保安', personality: '說話時聲音沙啞，像一台老舊的對講機。被質疑時不會激動，只會緩緩低下頭，盯著自己的鞋尖——那雙鞋已經穿了十年，鞋底的紋路磨得發平。他的手指總是無意識地摸向制服口袋裡的一張舊照片。', secret: '被陳館長陷害入獄的畫家的父親', liesAbout: ['對陳館長的看法','他的真實身份'], tellsTruthAbout: ['美術館的安全漏洞','他看到的異常'], defaultLocation: 'control',
    schedule: [
      { startHour: 10, endHour: 14, locationId: 'control', activity: '在監控室值班' },
      { startHour: 14, endHour: 16, locationId: 'gallery', activity: '到展廳巡邏' },
      { startHour: 16, endHour: 18, locationId: 'control', activity: '回到監控室' },
    ],
    aiPrompt: '你是老保安，沉穩寡言。你在這裡二十年，等的就是這一天。你巡邏時看著這些畫，不是因為你愛藝術，是因為你兒子的畫曾經掛在這裡——然後被摘了下來，連同他的名字一起。' },
    { id: 'donor', name: '趙夫人', avatar: '💎', role: '主要捐助者', personality: '說話輕柔得像在朗誦情詩，每個句子都帶著練習過的優雅。被質疑時會微微揚起下巴，像是在面對鏡頭。但她的左手會下意識地摸向珍珠項鍊——那裡有一道新鮮的裂痕，像是被某人用力扯過。', secret: '與陳館長有不倫戀情', liesAbout: ['與陳館長的關係','她的真實感受'], tellsTruthAbout: ['她對美術館的了解','她聽到的傳聞'], defaultLocation: 'cafe',
    schedule: [
      { startHour: 10, endHour: 12, locationId: 'cafe', activity: '在咖啡廳喝咖啡' },
      { startHour: 12, endHour: 14, locationId: 'gallery', activity: '到展廳看畫' },
      { startHour: 14, endHour: 18, locationId: 'cafe', activity: '回到咖啡廳' },
    ],
    aiPrompt: '你是優雅的捐助者，內心空虛。你與館長的關係即將結束，而你不甘心。你習慣用金錢購買一切，但今晚你發現，有些東西一旦失去，再多的錢也買不回來。' },
    { id: 'restorer', name: '張修復師', avatar: '🔬', role: '畫作修復師', personality: '說話極輕，像怕驚擾了畫布上的顏料。被質疑時會下意識地推眼鏡，然後用一種「你顯然不懂技術」的語調解釋。但他的右手總是插在白袍口袋裡，握著一張清單——上面列著六個編號。', secret: '偷換了多幅名畫的真跡', liesAbout: ['修復過程','真跡的下落'], tellsTruthAbout: ['技術細節','畫作的真偽'], defaultLocation: 'restore',
    schedule: [
      { startHour: 10, endHour: 14, locationId: 'restore', activity: '在修復室工作' },
      { startHour: 14, endHour: 16, locationId: 'office-c', activity: '到館長辦公室交談' },
      { startHour: 16, endHour: 18, locationId: 'restore', activity: '回到修復室' },
    ],
    aiPrompt: '你是修復師，嚴謹細緻。你利用技術之便，完成了藝術史上最大的偷竊。你比任何人都清楚真跡與贗品的區別——因為你親手製造了這些區別，又一一將它們抹平。' },
  ],
  clues: [
    { id: 'mystery-painting', name: '神秘畫作', description: '畫中的老人與死去的館長一模一樣，連領帶上的結都分毫不差。簽名日期是「明天」——一個尚未到來的日期。顏料還沒有完全乾透，顯示畫作是在館長死後才掛上的，但構圖和細節卻需要數週的觀察才能完成。', locationId: 'gallery', type: 'physical', isHidden: false, relevance: '有人預知了館長的死亡，或在死後完成了畫作', timeWindow: { startHour: 14, endHour: 16, reason: '下午兩點到四點，射燈角度讓畫作上的簽名最清晰' }, destroyable: true ,
    details: [
      { label: '畫布紋理', content: '畫布的編織紋理與畫家慣用的亞麻布不同，這是更便宜的棉質畫布。一個成名的畫家不會在自己的「遺作」上使用廉價材料。' },
      { label: '顏料層次', content: '顯微鏡下，顏料分為兩層：底層是畫家早期的典型用色，表層卻是近期才覆蓋上去的。有人在舊畫的基礎上重新繪製了這幅畫。' },
      { label: '簽名筆跡', content: '右下角的簽名放大後，筆觸的壓力分布與畫家已確認的真跡不同。真跡的簽名末尾有一個細微的上揚，這幅畫的簽名卻是平直的——是模仿者的習慣。' },
    ],
  },
    { id: 'signature-analysis', name: '簽名分析', description: '畫作簽名與林畫家的筆跡高度吻合，但顏料成分分析顯示，其中含有一種罕見的化學穩定劑——這種穩定劑只出現在張修復師的工作室裡。', locationId: 'gallery', type: 'document', isHidden: false, relevance: '畫作可能出自林畫家之手，但使用了特殊顏料', unlocksMemory: 'memory-mystery' },
    { id: 'autobiography-draft', name: '自傳草稿', description: '館長辦公室中的自傳草稿，其中一章標題是「我發現的贗品大師」。內容詳細描述了一個策展人如何偽造學歷、偽造展覽紀錄、偽造藝術史——而那個策展人的名字，就是你。', locationId: 'office-c', type: 'document', isHidden: false, relevance: '館長準備揭露你是贗品畫家', destroyable: true ,
    details: [
      { label: '墨水批次', content: '自傳草稿使用的墨水與畫家工作室的庫存不同。這種墨水含有特殊的化學穩定劑，只在張修復師的工作室裡使用。畫家的自傳，是用修復師的墨水寫的。' },
      { label: '紙張來源', content: '草稿紙的浮水印顯示，這是美術館辦公用紙，不是畫家工作室的用紙。畫家從來不用美術館的紙——他說那種紙「沒有靈魂」。' },
      { label: '字跡壓力', content: '草稿最後一頁的字跡壓力明顯加重，尤其是「遺產」和「背叛」這兩個詞。寫到這裡時，作者的情緒發生了劇烈波動——這不是平靜的回憶錄，是憤怒的控訴。' },
    ],
  },
    { id: 'fake-collection', name: '贗品清單', description: '館長私藏的贗品清單，顯示美術館有多幅名作其實是贗品。每一幅的作者欄都寫著同一個名字——你的名字。而買家的欄位裡，填滿了這座城市最有權勢的人。', locationId: 'office-c', type: 'document', isHidden: true, relevance: '你是這些贗品的作者', timeWindow: { startHour: 16, endHour: 18, reason: '傍晚時分，陳館長才會在辦公室獨自整理藏品' }, destroyable: true },
    { id: 'stolen-sketch', name: '被搶的素描', description: '林畫家畫室中的素描本，有一頁被粗暴地撕掉。殘留的紙屑上顯示，那是《寂靜的午後》的原始構思草圖——但簽名不是林畫家的，而是一個陌生的名字：「周明遠」。', locationId: 'studio', type: 'document', isHidden: false, relevance: '林畫家的成名作可能不是原創', destroyable: true },
    { id: 'paint-analysis', name: '顏料分析', description: '林畫家的顏料與神秘畫作上的顏料成分一致，但神秘畫作還含有一種罕見的化學物質——那種物質是張修復師獨家調配的畫布穩定劑，從未對外公開過配方。', locationId: 'studio', type: 'physical', isHidden: false, relevance: '畫作與林畫家有關，但加入了特殊成分', destroyable: true },
    { id: 'cctv-gap', name: '監視器空白', description: '監控紀錄顯示昨晚有一個小時的空白，時間是晚上十一點到凌晨十二點——正是法醫推斷的館長死亡時間。空白不是斷電造成的，而是被人為刪除的。', locationId: 'control', type: 'document', isHidden: false, relevance: '有人關閉了監視器', unlocksMemory: 'memory-night-visit' },
    { id: 'night-log', name: '巡邏紀錄', description: '老周的巡邏紀錄顯示他昨晚比平時多巡邏了三次，每次都經過館長辦公室。紀錄上的簽名筆跡顫抖，像是在極度緊張或極度憤怒中寫下的。', locationId: 'control', type: 'document', isHidden: false, relevance: '老周對館長辦公室有特別的關注' },
    { id: 'coffee-receipt', name: '咖啡收據', description: '趙夫人的咖啡收據顯示她昨天在閉館後還留在美術館——時間是晚上十點十五分，距離館長的推定死亡時間只有不到一小時。', locationId: 'cafe', type: 'document', isHidden: false, relevance: '趙夫人在閉館後還在館內' },
    { id: 'lover-photo', name: '親密照片', description: '咖啡廳垃圾桶中的照片，顯示趙夫人與陳館長在辦公室親密。照片的角度是監控攝影機拍攝的——顯示有人故意截取並列印了這段畫面。', locationId: 'cafe', type: 'document', isHidden: true, relevance: '趙夫人與館長有不倫關係' },
    { id: 'chemical-poison', name: '化學毒劑', description: '修復室的有毒化學藥劑少了一瓶，是「四亞甲基二砜四胺」——一種無色無味、少量即可引發心臟驟停的毒劑。更詭異的是，這種毒劑在尸檢中極難被檢測出來，常被誤診為心臟病。', locationId: 'restore', type: 'physical', isHidden: false, relevance: '有人可能用化學藥劑毒殺館長', unlocksMemory: 'memory-poison-preparation' },
    { id: 'hidden-original', name: '隱藏的真跡', description: '修復室的暗格中藏著六幅名畫的真跡，每幅畫的背面都有張修復師的簽名和日期。最新的一幅日期是上周——那正是陳館長開始調查贗品事件的時間。', locationId: 'restore', type: 'physical', isHidden: true, relevance: '張修復師確實偷換了真跡' },
  ],
  truth: {
    murdererId: 'curator-you',
    method: '你在館長的茶水中加入了修復室的化學毒劑，這種毒劑少量即可引發心臟病，且不留痕跡。同時你提前畫好了那幅「預言」畫作，在館長死後掛上。',
    motive: '陳館長準備在自傳中揭露你是贗品畫家，毀掉你的事業',
    timeline: '一週前：你得知館長的自傳內容。三天前：準備毒劑和畫作。昨晚：在館長的茶水中下毒。今天：掛上預言畫作。',
    fullExplanation: '你是美術界最出色的贗品畫家，十年來為陳館長製作了多幅足以亂真的贗品，讓美術館聲名大噪。但陳館長準備在自傳中將你作為「被發現的贗品大師」來提升自己的傳奇色彩。你花了一週時間準備了這場「藝術謀殺」——用化學毒劑讓館長死於「心臟病」，同時創作了一幅「預言」畫作，讓整個事件成為你最偉大的行為藝術作品。',
    eachCharacterSecret: {
      'curator-you': '陳館長私藏贗品的真正作者',
      'artist': '成名作是陳館長搶來的',
      'security': '被陳館長陷害入獄的畫家的父親',
      'donor': '與陳館長有不倫戀情',
      'restorer': '偷換了多幅名畫的真跡',
    },
  },

  disruption: {
    name: '夜間警衛巡邏',
    interval: 4,
    locations: ['gallery', 'office-c', 'studio', 'control', 'cafe', 'restore'],
    hitMessage: '警衛的手電筒光在{location}的牆上晃過，「閉館時間到了。」你被請出了展廳。',
    missMessage: '警衛的腳步聲和無線電雜音從{location}傳來',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演兇手角色，你的目標不是破案，而是成功栽贓給別人。',
    'config': {
      'choices': [
        {
          'id': 'pf-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'autobiography-draft'
          },
          'question': '你找到了陳館長的自傳草稿，裡面有一整章寫的是你——寫你如何幫他偽造贗品。他把這叫「最得意的學生」。你會怎麼做？',
          'options': [
            { 'label': '把草稿公開，揭露陳館長的真面目', 'value': 'expose' },
            { 'label': '銷毀草稿，保護自己的名聲', 'value': 'destroy' },
            { 'label': '用草稿要挾趙夫人，換取利益', 'value': 'blackmail' }
          ]
        },
        {
          'id': 'pf-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'restore'
          },
          'question': '你走進修復室，紫外線燈的紫光像一隻獨眼盯著你。架上的化學藥劑少了一瓶，而那瓶毒劑足以讓一個人在心臟病的假象中死去。這裡是謀殺的起點，也是藝術與死亡的交界。你會怎麼做？',
          'options': [
            { 'label': '檢查所有藥劑的庫存，找出少了什麼', 'value': 'inventory' },
            { 'label': '關掉紫外線燈，有些畫不該被看得太清楚', 'value': 'hide' },
            { 'label': '通知其他人修復室有危險藥劑遺失', 'value': 'warn' }
          ]
        }
      ]
    }
  }};
