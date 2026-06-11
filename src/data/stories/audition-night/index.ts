import type { Story } from '../../../types/game';

export const auditionNightStory: Story = {
  id: 'audition-night',
  title: '試鏡之夜',
  subtitle: '影帝讀著「太真實」的劇本後猝死',
  era: '現代',
  setting: '影視公司試鏡現場，封閉的排練廳',
  synopsis:
    '周牧野是這個時代最會演戲的人。他演過帝王、殺手、失意的父親、癡情的浪子——每個角色都讓觀眾相信，那個人真的存在過。但今晚，他要演的是他自己。\n\n為了新片《最後的證詞》，周牧野親自挑選了五位競爭主角的演員，要求他們各寫一場「最能打動人」的對手戲。他說，誰的劇本最讓他「入戲」，誰就能得到這個角色。\n\n當晚，周牧野讀到了一份「特別準備」的劇本。那份劇本裡的台詞，句句都是他的真實罪孽——拋棄、剽竊、背叛、貪婪。他讀到最後一頁時，突然捂住胸口，從導演椅上滑落在地。他的表情不是驚訝，是認命。\n\n劇場的門在試鏡開始時已經鎖死。五位競爭者面面相覷——兇手就在他們之中，而那份劇本，就是兇器本身。',
  hasPrologue: true,
  prologueSynopsis:
    `劇場的燈還沒全暗。周牧野站在舞台中央，聚光燈把他的影子拉得很長，像一個正在自我加冕的國王。他穿著那件著名的駝色大衣——他在所有首映禮上都穿這一件，媒體說那是他的「戰袍」。

五個競爭者分散在觀眾席的不同角落，誰也沒有和誰坐得太近。化妝間的門開著，鏡子前面擺著五份劇本，紙張還帶著列印機的溫度。周牧野說，今晚誰的「對手戲」最能打動他，誰就能得到《最後的證詞》的主角。

「我不需要演技。」周牧野說，聲音在空曠的劇場裡迴盪，「我要的是真實。讓我相信你說的每一個字都是真的。」

沒有人知道，其中一份劇本不是寫給角色的，是寫給周牧野本人的。而寫那份劇本的人，此刻就坐在第三排，手指在膝蓋上敲著某種只有她自己聽得見的節拍。`,
  victim: '周牧野（影帝，52歲）',
  characters: [
    { id: 'actor-a', name: '你（演員A）', role: '競爭主角的演員', avatar: '🎭', description: '你的妝容精緻得像是戴著一張面具，但眼線下的黑眼圈出賣了你。你說話時聲音平穩，像是一台調整過音量的機器——但當你獨自面對鏡子時，嘴唇會無聲地蠕動，像是在與某個看不見的人對話。', secret: '你的母親叫林素芬，二十年前是周牧野的助理。她懷孕後被周牧野解雇，獨自把你生下來，在你十歲那年鬱鬱而終。臨終前她把你叫到床邊，說：「妳的父親，是電影裡那個最好看的人。」那個人，從未承認過你的存在。',
      secretPrologue: '你母親臨終前說的那些話，像是一盤被水泡壞的錄音帶——你能聽見聲音，但拼不出完整的句子。她提到了一個名字，一個你應該認識的人。你記得自己來這裡是為了一個角色，但為什麼心跳得這麼快？', motive: '你不只是要一個角色。你要的是周牧野在看著你的眼睛時，承認他曾經看過另一雙與你一模一樣的眼睛——但他連這個都拒絕了。上個月的試鏡後，他在後台對你說：「妳長得有點眼熟，但這圈子裡想攀關係的人太多了。」', alibi: '說在化妝間準備', hiddenAgenda: '找到周牧野年輕時與母親的合照',
      isPlayable: true,
      tool: { name: '劇本修改液', description: '可以塗改劇本上的字跡，讓證據指向別人' } },
    { id: 'writer', name: '編劇老吳', role: '劇本編劇', avatar: '✍️', description: '他的眼鏡滑到鼻尖上，從不推上去。他說話時聲音沙啞，像是一台缺油的打字機。他的手指上佈滿了菸漬，但今晚他沒有抽菸——他的打火機在掌心裡開合，發出規律的咔噠聲，像某種倒計時。', secret: '十年前，他寫了一個劇本大綱，叫《證人》。他把它寄給了當時還不是影帝的周牧野，希望得到一個機會。三個月後，周牧野的新片開機，片名是《最後的證人》——故事框架、人物設定、甚至那句核心台詞，都與老吳的大綱一模一樣。署名欄裡沒有他的名字。', motive: '周牧野在上週的製片會議上宣佈，這部新片的編劇署名將給「一個更有市場號召力的名字」。老吳十年的心血，將變成別人履歷上的一行金字。', alibi: '說在會議室修改劇本', hiddenAgenda: '在周牧野的辦公室找到《證人》劇本的原稿',
      isPlayable: true },
    { id: 'producer', name: '王製片', role: '電影製片', avatar: '💰', description: '他的西裝是義大利訂製的，袖扣上鑲著真正的藍寶石。他說話時喜歡用食指輕敲桌面，每敲一下就是一個無形的感嘆號。但他的左手總是插在口袋裡，握著一張被汗水浸濕的紙條。', secret: '過去五年，他通過周牧野的電影公司洗錢，金額高達上億。每一筆都包裝成「海外發行權購買」或「特效外包費用」，而周牧野的簽字讓這些錢變得合法。', motive: '周牧野上個月對記者說：「我正在寫自傳，裡面會有很多你們從未聽過的故事。」王製片知道，那本山雨欲來的自傳裡，有一整章是關於他的。', alibi: '說在辦公室打電話', hiddenAgenda: '銷毀周牧野自傳中關於洗錢的章節手稿',
      isPlayable: true },
    { id: 'wife', name: '周太太', role: '影帝妻子', avatar: '👸', description: '她的珍珠項鍊在燈光下泛著過分圓潤的光澤，像是一串被精心打磨過的謊言。她說話時聲音輕柔，每個句子都帶著一種練習過的優雅。但當她獨自坐在角落時，手指會無意識地絞著項鍊，像是在勒死什麼東西。', secret: '她與周牧野的經紀人李維持了兩年的私情。他們在每個周牧野宣稱「要閉關讀劇本」的夜晚見面。上個月，她終於簽好了離婚協議，只等周牧野簽字——但他把協議扔進了垃圾桶。', motive: '三天前，周牧野修改了遺囑。律師打電話告訴她：「周先生表示，所有財產將留給前妻的兒子。您名下的房產和帳戶，將在離婚生效後凍結。」她花了十五年經營的婚姻，到頭來連一個零頭都沒有。', alibi: '說在休息區與粉絲合影', hiddenAgenda: '找到並帶走那份已經簽好的離婚協議',
      isPlayable: true },
    { id: 'manager', name: '李經紀', role: '經紀人', avatar: '📋', description: '他的西裝永遠一塵不染，領帶的配色與周牧野今天的穿搭永遠呼應。他說話時像一台設定好程序的答錄機，每個句子都經過公關團隊的審核。但當他獨自面對鏡子時，會用一種只有他自己能聽見的聲音咒罵。', secret: '過去五年，他利用職務之便，將周牧野三分之一的演出費分批轉入開曼群島的離岸帳戶。每一筆轉帳都偽裝成「稅務規劃」或「海外投資」，而周牧野從未仔細查過帳。', motive: '上週，周牧野的會計師發現了帳目上的異常。周牧野給他發了一條簡訊：「明天去警局，你準備好律師。」十五年的主僕關係，在十二個字裡灰飛煙滅。', alibi: '說在停車場等司機', hiddenAgenda: '從周牧野的保險箱取回海外帳戶的轉帳紀錄',
      isPlayable: true },
    { id: 'zhou-v', name: '周牧野', role: '受害者', avatar: '💀', description: '影帝。', secret: '同時傷害了多人的利益', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'rehearsal', name: '排練廳', icon: '🎬', description: '排練廳的燈光還亮著，周牧野倒下的導演椅歪在一邊。劇本散落一地，紙頁在空調風中輕輕翻動，像是一群想要飛走的白色鳥類。空氣裡飄著舞台灰塵與某人香水的混合氣味。', clues: ['script-poison','death-photo'], npcs: [], imagePrompt: '現代排練廳，劇本，燈光' },
    { id: 'makeup', name: '化妝間', icon: '💄', description: '演員們的化妝間裡，鏡子上貼滿了便條和劇照。bulb燈的熱度讓空氣變得黏稠，粉底與卸妝油的氣味在這裡發酵。某個梳妝台上放著一杯已經冷透的咖啡，杯沿有一枚淡淡的唇印。', clues: ['birth-certificate','makeup-stain-a'], npcs: ['actor-a'], imagePrompt: '影視化妝間，鏡子，便條' },
    { id: 'meeting', name: '會議室', icon: '📑', description: '編劇老吳的臨時工作間裡，電腦還開著，螢幕上是寫到一半的劇本。菸灰缸裡堆滿了菸蒂，空氣裡的焦油味濃得幾乎可以觸摸。窗外的城市燈光透過百葉窗，在牆上投下條紋狀的陰影。', clues: ['original-outline','plagiarism-proof'], npcs: ['writer'], imagePrompt: '會議室，電腦，劇本' },
    { id: 'office', name: '製片辦公室', icon: '🏢', description: '王製片的辦公室裡，保險櫃開著，裡面的文件被翻得亂七八糟。真皮沙發上有一個凹陷的坐痕，顯示有人剛剛在這裡坐了很久。空氣裡飄著昂貴雪茄的甜膩尾韻與冷汗的鹹味。', clues: ['money-laundry','will-draft'], npcs: ['producer'], imagePrompt: '製片辦公室，保險櫃' },
    { id: 'lounge', name: '休息區', icon: '🛋️', description: '貴賓休息區的沙發上還留著體溫，周太太與粉絲合影時站過的位置，地毯上有一枚掉落的珍珠耳環。空氣裡飄著她常用的香水味——一種過分甜美的晚香玉，甜到近乎腐敗。', clues: ['affair-photo','divorce-paper'], npcs: ['wife'], imagePrompt: '貴賓休息區，沙發' },
    { id: 'parking', name: '停車場', icon: '🚙', description: '地下停車場的日光燈管嗡嗡作響，幾盞已經開始閃爍。李經紀的車還停在VIP車位上，引擎蓋還殘留著發動機的餘溫。水泥地面上的油漬在燈光下泛著虹彩，像是某種變質的顏料。', clues: ['offshore-account','transfer-record'], npcs: ['manager'], imagePrompt: '地下停車場' },
  ],
  npcs: [
    { id: 'writer', name: '編劇老吳', avatar: '✍️', portraits: {
      normal: '/characters/audition-night/writer-normal.png',
      angry: '/characters/audition-night/writer-angry.png',
      surprised: '/characters/audition-night/writer-surprised.png',
      worried: '/characters/audition-night/writer-worried.png',
      nervous: '/characters/audition-night/writer-nervous.png',
      calm: '/characters/audition-night/writer-calm.png',
    }, role: '劇本編劇', personality: '說話時聲音沙啞，像一台缺油的打字機。被質疑時不會激動，只會緩緩摘下眼鏡，用衣角擦拭，然後露出一種近乎憐憫的微笑——彷彿他早就知道一切會如何結束。', secret: '周牧野剽竊了他的劇本大綱', liesAbout: ['與周牧野的合作關係','劇本的創作過程'], tellsTruthAbout: ['劇本中的細節','他觀察到的異常'], defaultLocation: 'meeting', schedule: [
      { startHour: 2, endHour: 4, locationId: 'meeting', activity: '在會議室整理劇本' },
      { startHour: 4, endHour: 6, locationId: 'office', activity: '在辦公室抽菸' },
    ], aiPrompt: '你是編劇，溫和偏執。你的作品被剽竊了十年，今晚終於有機會討回公道。你比任何人都清楚台詞的力量——因為你用十年時間，把恨意寫成了藝術。' },
    { id: 'producer', name: '王製片', avatar: '💰', role: '電影製片', personality: '說話像打算盤一樣快，每個數字都精確到小數點後兩位。被質疑時不會提高音量，只會微微眯起眼睛，像是在重新計算對方的價值。他的笑容從不觸及眼角。', secret: '用周牧野洗錢上億', liesAbout: ['電影的預算','與周牧野的財務關係'], tellsTruthAbout: ['電影圈的潛規則','他注意到的人際關係'], defaultLocation: 'office', schedule: [
      { startHour: 2, endHour: 5, locationId: 'office', activity: '在辦公室打電話' },
      { startHour: 5, endHour: 8, locationId: 'lounge', activity: '在休息室喝咖啡' },
    ], aiPrompt: '你是製片人，圓滑陰冷。你與周牧野有著見不得光的金錢往來。你習慣用數字衡量一切，但今晚你發現，有些帳目是無法用錢來平衡的。' },
    { id: 'wife', name: '周太太', avatar: '👸', role: '影帝妻子', personality: '說話輕柔得像在朗誦台詞，每個句子都帶著練習過的優雅。被質疑時不會慌張，只會微微揚起下巴，像是在面對鏡頭。但她的左手會下意識地摸向珍珠項鍊——那裡有一道新鮮的裂痕。', secret: '與經紀人有私情，計畫離婚', liesAbout: ['與周牧野的感情','她的真實意圖'], tellsTruthAbout: ['周牧野的性格弱點','她聽到的傳聞'], defaultLocation: 'lounge', schedule: [
      { startHour: 0, endHour: 3, locationId: 'lounge', activity: '在休息室獨坐' },
      { startHour: 3, endHour: 5, locationId: 'makeup', activity: '在化妝間補妝' },
      { startHour: 5, endHour: 8, locationId: 'lounge', activity: '在休息室喝咖啡' },
    ], aiPrompt: '你是影帝的妻子，優雅高貴但內心空虛。你的婚姻早已名存實亡。你花了十五年學習如何做一個「影帝夫人」，但今晚，你發現那個角色已經沒有觀眾了。' },
    { id: 'manager', name: '李經紀', avatar: '📋', role: '經紀人', personality: '說話像一台設定好程序的答錄機，每個句子都經過公關團隊的審核。被質疑時會下意識地整理領帶，領帶結總是打得過緊，像是在勒住什麼東西。', secret: '偷偷轉移了周牧野三分之一資產', liesAbout: ['財務狀況','與周太太的關係'], tellsTruthAbout: ['周牧野的工作安排','他注意到的異常'], defaultLocation: 'parking', schedule: [
      { startHour: 0, endHour: 3, locationId: 'parking', activity: '在停車場打電話' },
      { startHour: 3, endHour: 5, locationId: 'office', activity: '在製片辦公室翻閱文件' },
      { startHour: 5, endHour: 8, locationId: 'parking', activity: '在停車場抽菸' },
    ], aiPrompt: '你是經紀人，精明幹練。你伺候了這個人十五年，但你在為自己打算。你知道他所有的秘密，因為你幫他掩蓋了其中一半。而今晚，你發現他知道你的秘密。' },
  ],
  clues: [
    { id: 'script-poison', name: '有毒的劇本', description: '劇本的紙張上檢測出劇毒——蓖麻毒素。這種毒需要長時間皮膚接觸才會發作，而周牧野為了「入戲」，用手指反覆摩挲那些台詞長達四十分鐘。', locationId: 'rehearsal', type: 'physical', isHidden: false, relevance: '兇手提前在劇本上塗毒',
      unlocksMemory: 'memory-weapon', destroyable: false ,
    details: [
      { label: '紙張質地', content: '劇本用紙是進口的手工宣紙，表面有細微的纖維紋理。毒藦就藏在這些纖維縫隙裡，肉眼幾乎無法分辨。' },
      { label: '台詞劃痕', content: '某些台詞旁邊有指甲劃過的痕跡，劃痕很深，像是有人在朗讀時用力掐住了紙頁。那些被劃過的台詞，全是關於「拋棄」與「背叛」的段落。' },
      { label: '氣味殘留', content: '紙張散發著一股極淡的苦杏仁味，混在印刷油墨的氣味裡，幾乎被完全掩蓋。只有靠近鼻尖五公分以內，才能察覺那絲不屬於紙張的異樣。' },
    ],
  },
    { id: 'death-photo', name: '死亡瞬間照片', description: '試鏡現場的攝影機拍到了周牧野倒下的瞬間。他的表情不是驚訝，不是恐懼，而是一種奇怪的平靜——像是終於等到了某個遲到多年的結局。他的嘴唇微微張開，似乎想說什麼，但永遠沒有機會了。', locationId: 'rehearsal', type: 'document', isHidden: false, relevance: '周牧野似乎知道這一天會來' ,
    details: [
      { label: '拍攝角度', content: '照片是從攝影機的固定機位拍攝的，但畫面有輕微的晃動——攝影機不是自動錄製，而是被人手動啟動的。啟動時間比周牧野倒下早了整整十五秒。' },
      { label: '背景細節', content: '照片背景的幕布上有一道細微的反光，反光的形狀顯示，幕布後面站著一個人。那個人的輪廓被燈光投射在幕布上，像一個沉默的幽靈。' },
      { label: '時間戳', content: '照片檔案的時間戳顯示，拍攝時間是晚上十點零三分。但周牧野的手錶停在九點五十七分——手錶被人為調慢，或者，他在七分鐘前就已經死了。' },
    ],
  },
    { id: 'birth-certificate', name: '出生證明', description: '化妝間抽屜中的出生證明，顯示你是周牧野的私生女。父親欄的字跡是周牧野的親筆簽名，但簽名後面跟著一個括號：「否認親子關係。」', locationId: 'makeup', type: 'document', isHidden: true, relevance: '你確實是周牧野的女兒' },
    { id: 'makeup-stain-a', name: '淚痕', description: '化妝間鏡子上的淚痕，被粉底和睫毛膏暈染成詭異的灰色。淚痕的形狀顯示，有人在這裡哭了很久，然後又花了很長時間重新補妝——像是要把某種情緒重新塞回面具底下。', locationId: 'makeup', type: 'physical', isHidden: false, relevance: '有人在試鏡前情緒崩潰',
      unlocksMemory: 'memory-argue' },
    { id: 'original-outline', name: '原始大綱', description: '老吳電腦中的原始劇本大綱，創建日期是十年前，署名是他。文件屬性顯示，這份大綱從未被修改過——而周牧野的《最後的證人》，與它相似度高達87%。', locationId: 'meeting', type: 'document', isHidden: false, relevance: '老吳確實是原創作者' },
    { id: 'plagiarism-proof', name: '剽竊證據', description: '周牧野與另一家製片公司的郵件往來，明確提到「用老吳的大綱改編，不用給他署名。他只是一個沒沒無聞的編劇，鬧不起來。」發件時間是十年前的一個深夜。', locationId: 'meeting', type: 'document', isHidden: true, relevance: '周牧野確實剽竊了老吳的作品' },
    { id: 'money-laundry', name: '洗錢帳本', description: '王製片保險櫃中的帳本，顯示大量資金通過周牧野的電影公司流轉。每一筆都包裝成「海外發行權」或「特效外包」，而周牧野的簽字讓這些錢變得合法。', locationId: 'office', type: 'document', isHidden: true, relevance: '王製片確實用周牧野洗錢' },
    { id: 'will-draft', name: '遺囑草稿', description: '周牧野三天前修改的遺囑，把所有財產留給前妻的兒子，現任妻子一分沒有。草稿的邊緣有周太太的指甲痕跡——她顯然看過這份文件，而且看得很用力。', locationId: 'office', type: 'document', isHidden: false, relevance: '周太太有強烈的動機' },
    { id: 'cigarette-butt', name: '特殊菸蒂', description: '辦公室菸灰缸裡有一根沒抽完的菸，濾嘴上沾著一點口紅——不是周太太慣用的顏色，而是偏橘的珊瑚色。這種色號，化妝間裡只有一個人在用。', locationId: 'office', type: 'physical', isHidden: false, relevance: '有人曾在凌晨時分來過辦公室', timeWindow: { startHour: 4, endHour: 6, reason: '凌晨四點後，老吳會來辦公室抽菸，菸灰缸裡才會出現這根特殊的菸蒂' } },
    { id: 'affair-photo', name: '親密照片', description: '周太太手機中的照片，顯示她與李經紀在酒店房間裡。照片的角度是自拍，兩個人的臉貼得很近，背景裡的窗簾是周牧野家同款——這是一個刻意的、帶著惡意的構圖。', locationId: 'lounge', type: 'document', isHidden: true, relevance: '周太太與李經紀有私情', timeWindow: { startHour: 22, endHour: 24, reason: '晚上十點後，休息室只剩下一盞檯燈，手機螢幕的光才會顯得特別刺眼' } },
    { id: 'divorce-paper', name: '離婚協議', description: '周太太包中的離婚協議，已經簽好了她的名字，但周牧野的簽名欄是空的。紙張被揉皺又展平，邊緣有淚水的痕跡——或者，是憤怒的口水。', locationId: 'lounge', type: 'document', isHidden: false, relevance: '周太太準備離婚' },
    { id: 'offshore-account', name: '海外帳戶', description: '李經紀車中的文件，顯示他在開曼群島開設了多個帳戶，資金來源都是周牧野的演出費。每一筆轉帳都經過精心設計，總額恰好是周牧野收入的三分之一。', locationId: 'parking', type: 'document', isHidden: true, relevance: '李經紀確實轉移了資產' },
    { id: 'transfer-record', name: '轉帳紀錄', description: '李經紀的手機簡訊，周牧野發來：「明天去警局，你準備好律師。」發送時間是試鏡前四小時。十五個字，終結了十五年的主僕關係。', locationId: 'parking', type: 'document', isHidden: false, relevance: '周牧野準備報警' },
  ],
  truth: {
    murdererId: 'actor-a',
    method: '你在劇本紙張上塗抹了慢性毒藥，當周牧野讀到那些關於「拋棄」與「背叛」的台詞時，毒藥通過皮膚滲入，引發心臟病。',
    motive: '周牧野是你的親生父親，但他否認你的身份還封殺你的演藝事業',
    timeline: '試鏡前三天：你在劇本上塗毒。試鏡當晚：周牧野讀到那份特別準備的劇本，情緒激動加上毒藥發作，心臟病猝死。',
    fullExplanation: '你是周牧野年輕時與一名女演員的私生女。你的母親因為周牧野的不承認而鬱鬱而終。你繼承了母親的演藝夢想，進入影視圈，卻發現周牧野不僅否認你的身份，還利用他的影響力封殺你的機會。你花了三年時間接近他，終於在這個試鏡之夜，用一份「特別準備」的劇本——每一句台詞都是他的真實罪孽——讓他在讀到自己的罪孽時，死於你精心準備的毒藥與心魔。',
    eachCharacterSecret: {
      'actor-a': '周牧野當年拋棄的私生女',
      'writer': '周牧野剽竊了他十年前的劇本大綱',
      'producer': '用周牧野洗錢上億',
      'wife': '與經紀人有私情，計畫離婚',
      'manager': '偷偷轉移了周牧野三分之一資產',
    },
  },
  disruption: {
    name: '舞台監督巡場',
    interval: 4,
    locations: ['rehearsal', 'makeup', 'meeting', 'office', 'lounge', 'parking'],
    hitMessage: '舞台監督推開{location}的門，對講機裡傳來導演的聲音。「下一個試鏡的準備了！」你被趕出了這個房間。',
    missMessage: '對講機的雜音從{location}傳來，舞台監督正在巡場',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演「演員A」，你就是兇手。你的目標不是破案，而是成功栽贓給別人。',
    'config': {
      'choices': [
        {
          'id': 'an-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'script-poison'
          },
          'question': '你低頭看著自己的手——那雙手剛剛在劇本上塗了毒。周牧野正在隔壁房間朗讀那些台詞，他的聲音透過牆壁傳來，像一首你從小聽到大的搖籃曲。你還有時間改變主意。你會怎麼做？',
          'options': [
            { 'label': '衝進去，打掉他手裡的劇本', 'value': 'stop' },
            { 'label': '轉身離開，讓命運自己走完', 'value': 'leave' },
            { 'label': '去找老吳，讓他知道真相', 'value': 'tell' }
          ]
        },
        {
          'id': 'an-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'office'
          },
          'question': '你在製片辦公室發現了洗錢帳本和遺囑草稿——王製片的金錢遊戲，周太太破碎的婚姻。這些紙張足以毀掉兩個人。你會怎麼做？',
          'options': [
            { 'label': '把帳本交給警方，讓真相大白', 'value': 'expose' },
            { 'label': '用這些證據為自己換取籌碼', 'value': 'bargain' },
            { 'label': '燒掉它們，讓死者帶走所有秘密', 'value': 'burn' }
          ]
        }
      ]
    }
  }};
