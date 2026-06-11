import type { Story } from '../../../types/game';

export const countdownStory: Story = {
  id: 'countdown',
  title: '倒數計時',
  subtitle: '計時炸彈在公車上，六個乘客中只有一個知道密碼',
  era: '現代',
  setting: '台北市的某輛公車，晚高峰時段',
  hasPrologue: true,
  prologueSynopsis:
    `下午五點十五分，307路公車的總站。夕陽把車體染成一種疲倦的金紅色，引擎還在散熱，發出輕微的嗡嗡聲。\n\n車長坐在駕駛座上，對著後視鏡整理領口。大學生第一個上車，耳機掛在頸上，目光穿過擋風玻璃望向遠方；會計師緊接著上車，公文包夾在雙腿之間，手指在手機上快速滑動；車長太太走上來時，車長沒有看她，但她也在車長旁邊的優先座位坐下；修車工上車時帶著一股機油味，他朝車長點了點頭，車長也點了點頭；記者最後一個上車，筆記本已經打開，鉛筆在紙上畫著什麼。\n\n車長按下關門鈕，廣播裡傳出標準的播報：「歡迎搭乘307路公車，本車開往……」引擎發動的震動從地板傳上來，沒有人說話，但每個人都在想著自己的心事。夕陽從車窗照進來，在每個人的臉上劃出一道明暗交界線。`,
  synopsis: '晚高峰的車流像一條發燒的河流，這輛公車是其中一片遲鈍的葉子。突然，廣播裡傳出一個經過變聲處理的聲音：「車上有炸彈，距離爆炸還有60分鐘。密碼在兇手心中。」乘客們的尖叫還沒落下，就有人發現——車長已經死在駕駛座上，胸口插著一把螺絲起子，血還是溫的。六位乘客被困在行駛的公車上，每個人都有殺死車長的動機。而計時器上的紅色數字，正在一分一秒吞噬他們的謊言。',
  victim: '車長（公車司機，50歲）',
  characters: [
    { id: 'student', name: '你（大學生）', role: '乘客', avatar: '🎓', description: '背包上掛著校園社團的徽章，耳機永遠掛在頸上，目光穿過窗戶望向遠方，像在數回家的路燈。', secret: '他的出生證明上父親欄寫著「不詳」，但母親臨終前塞給他一張舊照片，照片背後寫著「你爸開307路」。', motive: '車長拒絕承認他，還搶走了母親留下的遺產——那筆錢不多，但足夠讓她多活半年', alibi: '說在公車上聽音樂', secretPrologue: '車窗外的夕陽把每個人的臉都染成橘紅色，看起來像戴著面具。我盯著車長的背影看了很久——這個人的輪廓和照片上那個拋棄我母親的男人驚人地相似。如果他真的不記得了，那我今天的任務就是讓他想起來。以後也沒有機會了。',
    hiddenAgenda: '找到車長私藏的遺產文件',
      isPlayable: true },
    { id: 'accountant', name: '會計師', role: '乘客', avatar: '💼', description: '西裝領帶在擁擠的車廂裡依然筆挺，公文包夾在雙腿之間像護著什麼，手指在手機螢幕上滑動的速度越來越快。', secret: '他幫車長做了五年假帳，每一分錢的流向他都記得。但上個月車長說「如果出事，就說是你一個人乾的」。', motive: '車長準備向稅務局檢舉他，而假帳的金額夠他在牢裡待到退休', alibi: '說在看財經新聞', hiddenAgenda: '銷毀五年假帳的所有紀錄',
      isPlayable: true },
    { id: 'wife-bus', name: '車長太太', role: '乘客', avatar: '👩', description: '坐在優先座位上，雙手握著手提包的帶子，指節發白，化妝掩蓋不了眼袋，但口紅補得很仔細。', secret: '她和車長的徒弟已經在一起兩年了。他們計畫離婚後開一家小客運公司，車長的積蓄剛好夠買第一輛車。', motive: '車長發現了她的私情，準備讓她淨身出戶，還要把所有財產留給那個從未承認的私生子', alibi: '說在等車長下班', hiddenAgenda: '確保離婚協議對自己有利',
      tool: { name: '螺絲起子', description: '可以將指紋和血跡轉移到任何金屬表面' },
      secretPrologue: '我知道那個男人多年前拋棄了我們的兒子，就像拋棄一件舊外套。今晚，這輛公車會是他最後的歸宿。',
      isPlayable: true },
    { id: 'mechanic', name: '修車工', role: '乘客', avatar: '🔧', description: '工裝褲上沾著機油，指甲縫裡嵌著洗不掉的黑色，說話時聲音像引擎發動時的悶響。', secret: '三年前那輛公車的煞車系統，是他為了趕工省略了最後一道檢查程序。車長幫他壓下了報告，但從此每月來收「封口費」。', motive: '車長最近把封口費漲到了五萬，還說「如果不付，我就讓你再也摸不到扳手」', alibi: '說在下班回家的路上', hiddenAgenda: '銷毀當年煞車檢查的原始報告',
      isPlayable: true },
    { id: 'reporter', name: '記者', role: '乘客', avatar: '📰', description: '筆記本永遠開著，鉛筆在紙上快速滑動，目光像雷達一樣掃過每個乘客的臉，像在尋找下一個頭條。', secret: '她追查公車公司貪腐案已經兩年，車長是唯一能將副總經理送進監牢的活證人。但她不是唯一想要這個證人的人。', motive: '車長準備把證據交給她的競爭對手——對方出的價碼是「三倍」，而她的報社明天就要裁員', alibi: '說在趕稿', hiddenAgenda: '找到車長準備交給競爭對手的證據',
      isPlayable: true },
    { id: 'driver-v', name: '車長', role: '受害者', avatar: '💀', description: '公車司機。', secret: '掌握多人的把柄', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'front', name: '前門區', icon: '🚌', description: '車長歪倒在駕駛座上，像一件被隨意脫下的外套，方向盤上的倒數計時器紅光一閃一閃，數字每跳一下，車廂裡的呼吸就屏住一次。', clues: ['timer','driver-body'], npcs: [], imagePrompt: '公車前門，駕駛座，計時器' },
    { id: 'back', name: '後門區', icon: '🚪', description: '你坐的位置，耳機線像一條白色的蛇纏在扶手上，窗外閃過的城市燈光在玻璃上投下斑駁的倒影。', clues: ['headphones','adoption-paper'], npcs: ['student'], imagePrompt: '公車後門，座位' },
    { id: 'window', name: '靠窗座位', icon: '🪟', description: '會計師的靠窗座位上，報紙被折成四折，窗戶上的霧氣裡畫著一個問號，已經開始往下流水痕。', clues: ['fake-account','newspaper-clipping'], npcs: ['accountant'], imagePrompt: '公車靠窗座位' },
    { id: 'priority', name: '優先座位', icon: '♿', description: '優先座位的藍色椅墊上留著一個坐過的凹陷，旁邊的包包拉鍊開了一道縫，露出裡面一個裝著文件的信封。', clues: ['love-letter','insurance-policy'], npcs: ['wife-bus'], imagePrompt: '公車優先座位' },
    { id: 'middle', name: '中段座位', icon: '🪑', description: '中段座位旁的工具箱還沒關好，扳手從縫隙裡探出頭，像某種即將被使用的預告。', clues: ['repair-record','blackmail-sms'], npcs: ['mechanic'], imagePrompt: '公車中段座位' },
    { id: 'rear', name: '車尾', icon: '🔙', description: '車尾的座位上，記者的筆記本還開著，紙頁在冷氣口吹出的風中微微顫動，像一隻試圖起飛的鳥。', clues: ['investigation-notes','competitor-offer'], npcs: ['reporter'], imagePrompt: '公車車尾座位' },
  ],
  npcs: [
    { id: 'accountant', name: '會計師', avatar: '💼', role: '乘客', personality: '說話像背誦報表，精確到小数点後两位；被追問時會推眼鏡，推第三下時開始說謊', secret: '幫車長做假帳', liesAbout: ['與車長的關係','假帳的事'], tellsTruthAbout: ['他觀察到的異常','其他乘客的行為'], defaultLocation: 'window',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'window', activity: '靠窗看財經新聞' },
      { startHour: 18, endHour: 20, locationId: 'middle', activity: '到車廂中段走動' },
      { startHour: 20, endHour: 22, locationId: 'window', activity: '回到靠窗座位' },
    ],
    aiPrompt: '你是會計師，冷靜但恐慌。你幫死者做過見不得光的事，而他準備出賣你。你說話像背報表，被追問時會開始推眼鏡，這是你緊張時的習慣。' },
    { id: 'wife-bus', name: '車長太太', avatar: '👩', role: '乘客', personality: '努力維持端莊，但手提包的帶子被捏得變形；提到「財產」時會下意識挺直背脊', secret: '與車長的徒弟有私情', liesAbout: ['與車長的感情','她來公車的目的'], tellsTruthAbout: ['她對車長的了解','她注意到的異常'], defaultLocation: 'priority',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'priority', activity: '在優先座位等待' },
      { startHour: 18, endHour: 20, locationId: 'front', activity: '到前門區交談' },
      { startHour: 20, endHour: 22, locationId: 'priority', activity: '回到優先座位' },
    ],
    aiPrompt: '你是車長的妻子，慌亂但努力鎮定。你的婚姻早已破裂，你來這輛公車是為了談離婚。你試圖維持體面，但內心的愧疚和恐懼讓你不斷捏緊手提包帶子。' },
    { id: 'mechanic', name: '修車工', avatar: '🔧', role: '乘客', personality: '說話粗魯但短促，像在節省力氣；被問到工具時會下意識摸向腰間的扳手', secret: '偷工減料導致事故', liesAbout: ['與車長的關係','事故的事'], tellsTruthAbout: ['他看到的異常','公車的狀況'], defaultLocation: 'middle',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'middle', activity: '在車廂中段休息' },
      { startHour: 18, endHour: 20, locationId: 'rear', activity: '到後門區觀察' },
      { startHour: 20, endHour: 22, locationId: 'middle', activity: '回到車廂中段' },
    ],
    aiPrompt: '你是修車工，粗魯直率。你欠死者一個天大的人情，但他開始勒索你。你說話簡短有力，對工具有著職業性的敏感，提到車長時會變得暴躁。' },
    { id: 'reporter', name: '記者', avatar: '📰', role: '乘客', personality: '提問像機關槍，但會在得到答案前突然閉嘴——她在觀察對方鬆懈的那一瞬間', secret: '追查公車公司貪腐案', liesAbout: ['她的真實目的','她知道的內幕'], tellsTruthAbout: ['她觀察到的異常','其他乘客的可疑之處'], defaultLocation: 'rear',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'rear', activity: '在後門區趕稿' },
      { startHour: 18, endHour: 20, locationId: 'middle', activity: '到車廂中段觀察' },
      { startHour: 20, endHour: 22, locationId: 'rear', activity: '回到後門區' },
    ],
    aiPrompt: '你是記者，敏銳機警。你在追查一個大新聞，而死者是關鍵證人。你像獵人一樣觀察每個人，提問快速而精準，習慣在對方鬆懈時補上最後一擊。' },
  ],
  clues: [
    { id: 'timer', name: '倒數計時器', description: '計時器紅色的數字在車長的屍體前跳動，像一顆懸在所有人頭上的心臟。旁邊貼著一張便條：「密碼是兇手的名字。」——這是救命的線索，還是最後的嘲諷？', locationId: 'front', type: 'physical', isHidden: false, relevance: '兇手的名字就是解除炸彈的密碼', destroyable: true, unlocksMemory: 'memory-timer', timeWindow: { startHour: 16, endHour: 18, reason: '傍晚高峰時段，計時器才會被啟動' } ,
    details: [
      { label: '計時器型號', content: '這是一個軍用級的數位計時器，防水防震，通常用於炸彈引爆或潛水作業。這種型號在民間市場買不到——修車工怎麼會有軍用設備？' },
      { label: '電池接點', content: '計時器的電池接點有燒灼痕跡，痕跡很新，像是剛剛發生過短路。有人試圖強行停止計時器，但失敗了。' },
      { label: '背面字跡', content: '計時器背面用油性筆寫著一組數字：「0423」。這不是時間，是一個日期——四月二十三日，車長太太的生日。' },
    ],
  },
    { id: 'driver-body', name: '車長的遺體', description: '車長的胸口插著一把螺絲起子，刀柄上還留著機油的氣味——這不是普通的兇器，這是修車工每天都要握在手裡的工具。', locationId: 'front', type: 'physical', isHidden: false, relevance: '車長被螺絲起子刺死，兇手可能是修車工', unlocksMemory: 'memory-screwdriver' ,
    details: [
      { label: '傷口角度', content: '螺絲起子插入的角度是從上往下四十五度，這意味著兇手比車長高，或者是站著攻擊坐著的受害者。車長的座位上沒有掙扎痕跡——他沒有預料到這一擊。' },
      { label: '手握姿勢', content: '車長的右手還握著方向盤，但手指已經僵硬。指縫裡卡著一小片布料纖維，纖維的顏色是深藍色——這輛公車上沒有人穿深藍色的衣服。' },
      { label: '體溫', content: '屍體的體溫下降得異常緩慢，皮膚表面有一層薄薄的濕氣。車長在死前服用過某種藥物，這種藥物會減緩新陳代謝，也減緩了屍體冷卻的速度。' },
    ],
  },
    { id: 'headphones', name: '耳機', description: '耳機還在播放音樂，音量開到最大，顯示案發時你確實沉浸在另一個世界裡——但這個世界裡，有人正在死去。', locationId: 'back', type: 'physical', isHidden: false, relevance: '你似乎沒有聽到異常', timeWindow: { startHour: 20, endHour: 22, reason: '晚上八點後，後門區的噪音才會讓耳機顯得必要' } },
    { id: 'adoption-paper', name: '領養文件', description: '背包最深處的文件顯示，你的親生父親欄寫著車長的本名，而領養日期正是你母親確診癌症的那個月。', locationId: 'back', type: 'document', isHidden: true, relevance: '你確實是車長的兒子' },
    { id: 'fake-account', name: '假帳本', description: '公事包裡的帳本記載了五年來每一筆虛報的收入，每一頁都有車長的簽名——和會計師的。這是一本共犯的日記。', locationId: 'window', type: 'document', isHidden: false, relevance: '會計師幫車長做假帳' },
    { id: 'newspaper-clipping', name: '報紙剪報', description: '窗戶上貼著的剪報已經發黃：「公車公司會計師涉嫌做假帳，稅務局介入調查。」日期是三個月前，而調查至今沒有結果。', locationId: 'window', type: 'document', isHidden: false, relevance: '會計師面臨調查' },
    { id: 'repair-record', name: '維修紀錄', description: '工具箱裡的維修紀錄顯示，三年前的煞車系統檢查表上，最後一道程序被打上了勾——但那天的打卡紀錄顯示，他在那個時間已經下班了。', locationId: 'middle', type: 'document', isHidden: false, relevance: '修車工確實偷工減料' },
    { id: 'blackmail-sms', name: '勒索簡訊', description: '手機螢幕上是一連串來自車長的簡訊：「這個月五萬，下個月六萬。你不付，我就讓所有人都知道三年前那輛公車為什麼會衝進河裡。」', locationId: 'middle', type: 'document', isHidden: false, relevance: '車長在勒索修車工' },
    { id: 'investigation-notes', name: '調查筆記', description: '記者的筆記本裡，公車公司貪腐案的證據鏈已經畫到了車長這一環——他是唯一能指認副總經理的人。', locationId: 'rear', type: 'document', isHidden: false, relevance: '記者在追查公車公司貪腐案' },
    { id: 'competitor-offer', name: '競爭對手的報價', description: '手機裡的簡訊來自競爭對手：「把車長的證詞給我，價格三倍，外加一個專欄位置。」發送時間是昨天深夜。', locationId: 'rear', type: 'document', isHidden: false, relevance: '記者的競爭對手也想拿到證詞' },
    { id: 'love-letter', name: '情書', description: '包包裡的信封中有一封手寫情書，落款是「你的明」——車長徒弟的名字。信中寫著：「等這一切結束，我們就去台東開客運公司。」', locationId: 'priority', type: 'document', isHidden: true, relevance: '車長太太與徒弟計畫私奔', destroyable: true },
    { id: 'insurance-policy', name: '保險單', description: '包包裡的文件顯示，車長三個月前買了一份高額意外險，受益人欄寫著「周志豪」——那個學生的本名。沒有妻子的名字。', locationId: 'priority', type: 'document', isHidden: false, relevance: '車長準備把財產留給私生子', destroyable: true },
  ],
  truth: {
    murdererId: 'wife-bus',
    method: '車長太太趁車長在紅燈停車時，用修車工遺落的螺絲起子刺入車長胸口，然後啟動了預先安裝的炸彈。',
    motive: '車長發現了她的私情，準備讓她淨身出戶，還要把所有財產留給兒子',
    timeline: '案發前：車長太太在公車上安裝了炸彈。紅燈時：她趁車長不注意，用螺絲起子刺殺他。然後啟動計時器。',
    fullExplanation: '車長太太與車長的徒弟有私情，計畫離婚後一起開一家小客運公司。但車長發現了她的私情，不僅準備讓她淨身出戶，還要把所有財產留給從未承認的私生子。走投無路的車長太太決定一不做二不休——她在公車上安裝了炸彈，準備製造一場「意外」，讓車長和所有知情者一起消失。她選擇在公車上動手，是因為她知道車長每天都會在這個時間開這條路線。她用修車工遺落的螺絲起子刺死車長，是因為她知道這樣會讓修車工成為首要嫌疑人。計時器上的「密碼是兇手的名字」是一個陷阱——她希望有人為了保命而胡亂猜測，引爆炸彈。',
    eachCharacterSecret: {
      'student': '車長的私生子',
      'accountant': '幫車長做假帳',
      'wife-bus': '與車長的徒弟有私情',
      'mechanic': '偷工減料導致事故',
      'reporter': '追查公車公司貪腐案',
    },
  },

  disruption: {
    name: '計時器警報',
    interval: 4,
    locations: ['front', 'back', 'window', 'priority', 'middle', 'rear'],
    hitMessage: '計時器的紅光在{location}瘋狂閃爍，有人大喊「離開這裡！」你被推擠著離開了。',
    missMessage: '計時器的倒數聲從{location}傳來，每個數字都像一顆心跳',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家扮演兇手。你就是車長太太，必須銷毀指向自己的線索、將嫌疑轉嫁給其他乘客，並在計時器歸零前讓所有人相信你不是兇手。',
    'config': {
      'strikeThreshold': 3,
      'sensitiveKeywords': [
        '計時器',
        '炸彈',
        '倒數',
        '密碼',
        '定時'
      ],
      'choices': [
        {
          'id': 'cd-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'timer'
          },
          'question': '倒數計時器的數字還在跳動，旁邊的便條寫著「密碼是兇手的名字」。你還有七分鐘。你會怎麼做？',
          'options': [
            { 'label': '立刻輸入你懷疑的人的名字', 'value': 'guess' },
            { 'label': '先疏散車上所有人，再處理炸彈', 'value': 'evacuate' },
            { 'label': '拆開計時器，試圖手動解除', 'value': 'defuse' }
          ],
        },
        {
          'id': 'cd-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'priority'
          },
          'question': '優先座位的包包拉鍊開了一道縫，裡面的保險單寫著車長要把所有財產留給私生子。車長太太坐在旁邊，手指關節發白。炸彈還在倒數。你會怎麼做？',
          'options': [
            { 'label': '當眾念出保險單的內容', 'value': 'reveal' },
            { 'label': '把文件塞回包裡，假裝沒看見', 'value': 'ignore' },
            { 'label': '低聲告訴車長太太，試圖合作', 'value': 'ally' }
          ],
        }
      ],    }
  }};
