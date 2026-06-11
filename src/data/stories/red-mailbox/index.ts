import type { Story } from '../../../types/game';

export const redMailboxStory: Story = {
  id: 'red-mailbox',
  title: '紅色郵筒',
  subtitle: '郵差發現某個郵筒每天收到寄給死人的信',
  era: '1970年代',
  setting: '香港九龍城寨邊緣的老舊街區',
  hasPrologue: true,
  prologueSynopsis:
    `1970年代的九龍城寨邊緣，天還沒亮透，狹窄的街道就已經醒了。茶餐廳的鐵閘嘩啦啦拉起，樓上有人往街心潑了一盆水，水花濺在紅色郵筒的底座上。\n\n阿炳推著腳踏車從郵局出來，車筐裡的信件按門牌號碼排得整整齊齊。他經過雜貨店門口，包租公正和雜貨店老闆為一罐煤氣的價格爭吵；陳太太在菜市場買菜，黑色袖口挽到肘部；喪彪蹲在巷口，金項鍊在晨光裡一閃一閃；老中醫的診所門口掛著一排曬乾的藥材，氣味濃烈得讓路人皺眉。\n\n郵筒安安靜靜地立在街角，紅漆剝落得像結痂的傷口。阿炳投下最後一封信，抬頭看了看這條走了四十年的街，不知道為什麼，今天覺得郵筒的紅色比往常深了一點。`,
  synopsis: '老郵差阿炳在這條街走了四十年，閉著眼睛都能數出每一級台階。但這個月，轄區內那個掉漆的紅色郵筒開始吐出寄給「陳大文」的信——而陳大文三年前就死在一場唐樓大火裡。更詭異的是，信上的郵戳一天比一天新，像是某個從陰間寄出的包裹正在逼近。五個與陳大文有過節的人，每個人都在等待一個不該回來的人。',
  victim: '陳大文（已故，三年前死於火災，但郵筒持續收到他的信）',
  characters: [
    { id: 'postman-hk', name: '你（阿炳）', role: '老郵差', avatar: '📮', description: '雨帽壓得很低，布鞋磨平了後跟，送信時的手指關節粗大，像老樹的根。', secret: '他姓陳，叫陳二文。那年改姓離家時，大哥陳大文把祖產契約鎖進了保險箱。', motive: '陳大文搶走了家族的祖產，讓他淪落到當了四十年郵差，而大哥連葬禮都沒讓他參加', alibi: '說在郵局整理信件', secretPrologue: '郵筒的紅漆掉了一塊，露出底下的生鏽鐵皮。我每天開這個郵筒十七次，今天第十八次——因為昨天那封信不是寄給活人的。信封上的字跡是我大哥的，但他死了三年了。我知道是誰在搞鬼：陳家那個保險箱裡，鎖著我們兄弟的祖產契約。沒有那張紙，我就是個送信的。有了那張紙，我就是主人。',
    hiddenAgenda: '找到大哥鎖在保險箱裡的祖產契約',
      isPlayable: true },
    { id: 'landlord', name: '包租公', role: '房東', avatar: '🏠', description: '鑰匙串在腰間嘩啦作響，數錢時嘴唇無聲地動著，像在唸經，又像在詛咒。', secret: '火災保險金他領了五十萬，但沒人知道那場火為什麼燒得那麼巧。', motive: '陳大文「死後」保險金已經領了，但如果他還活著，保險公司會要回每一分錢，還有利息', alibi: '說在收租', hiddenAgenda: '銷毀唐樓火災保險的原始文件',
      isPlayable: true },
    { id: 'wife-hk', name: '陳太太', role: '遺孀', avatar: '👩', description: '總是穿著黑色，袖口卻有一圈洗不掉的油漬，煮飯時會多做一碗，然後默默倒掉。', secret: '她每週三下午會接到一個來自城寨的電話，對方不說話，只呼吸三分鐘。她知道他沒死。', motive: '陳大文最近威脅要「復活」，讓她歸還所有撫卹金——那筆錢早就變成了這間房子的牆磚', alibi: '說在家裡做飯', hiddenAgenda: '找到陳大文藏起來的「復活」證據', tool: { name: '毒藥膠囊', description: '可以將毒藥殘留轉移到任何杯具或食物上' }, secretPrologue: '他以為從火場爬出來就能重新擁有我。每天一封信、一個電話，每一筆勒索都在提醒我：死人是不會放過你的。但這一次，該結束的人是他。',
      isPlayable: true },
    { id: 'gangster-hk', name: '喪彪', role: '黑道打手', avatar: '🔪', description: '金項鍊在汗濕的胸口閃著光，說話時下巴往前頂，像隨時準備用頭撞碎什麼。', secret: '陳大文死前把一批走私手錶藏在城寨某處，只有他知道大概位置。但「死」讓一切變成了死無對證。', motive: '陳大文「復活」意味著贓物可能被別人找到，還有他瞞著老大私吞貨的事也可能曝光', alibi: '說在賭場', hiddenAgenda: '找到陳大文藏在城寨的那批走私手錶',
      isPlayable: true },
    { id: 'doctor-hk', name: '老中醫', role: '中醫師', avatar: '💊', description: '診脈時眼睛望著窗外，像是在看什麼更遠的東西，藥櫃的抽屜永遠留著一條縫。', secret: '那張死亡證明上的「心臟衰竭」四個字，是他用三十年信譽換來的。陳大文當時脈搏強健得很。', motive: '陳大文復活會讓他的假證明曝光，到時候他不只是失去執照，還要進監牢', alibi: '說在診所看病', hiddenAgenda: '銷毀自己開具的那張假死亡證明',
      isPlayable: true },
  ],
  locations: [
    { id: 'mailbox', name: '紅色郵筒', icon: '🔴', description: '郵筒的紅漆剝落得像是結痂的傷口，投信口裡每天定時吐出一封不該存在的信，筒身被海報和傳單覆蓋，像一座被遺忘的墓碑。', clues: ['dead-letter','new-stamp'], npcs: [], imagePrompt: '香港老郵筒，紅色，老舊' },
    { id: 'post-office', name: '郵局', icon: '📬', description: '狹小的郵局裡，漿糊和舊紙張的氣味混合成一種讓人想打盹的溫暖，阿炳的座位在窗邊，桌上有一盆從不開花的植物。', clues: ['address-list','brother-photo'], npcs: ['postman-hk'], imagePrompt: '香港老郵局，狹小' },
    { id: 'tenement', name: '唐樓', icon: '🏢', description: '陳大文生前住過的唐樓，樓梯間的燈壞了三年，牆上的火災焦痕像一張張抽象畫，腳踩上去會揚起細細的灰。', clues: ['fire-traces','insurance-paper-hk'], npcs: ['landlord'], imagePrompt: '香港唐樓，老舊' },
    { id: 'home-hk', name: '陳家', icon: '🏠', description: '用撫卹金買下的房子，客廳的電視永遠開著卻沒人看，沙發扶手上留著一個人坐了太久而凹陷的形狀。', clues: ['widow-phone-hk','hidden-letter'], npcs: ['wife-hk'], imagePrompt: '香港公屋，簡陋' },
    { id: 'casino', name: '地下賭場', icon: '🎲', description: '地下賭場的空氣是藍色的，煙霧讓人看不清對方的眼睛，骰子碰撞的聲音像骨頭在碗裡晃動。', clues: ['debt-book-hk','stolen-goods'], npcs: ['gangster-hk'], imagePrompt: '香港地下賭場，昏暗' },
    { id: 'clinic', name: '中醫診所', icon: '🌿', description: '老舊的中醫診所裡，藥櫃上的小抽屜像蜂窩一樣密密麻麻，煮沸的藥材味從後房飄出來，苦得讓舌頭發麻。', clues: ['fake-death-cert','poison-herb'], npcs: ['doctor-hk'], imagePrompt: '香港中醫診所，藥櫃' },
  ],
  npcs: [
    { id: 'landlord', name: '包租公', avatar: '🏠', role: '房東', personality: '數錢時嘴唇會動，笑時露出被煙燻黃的牙齒，提到火災時會不自覺摸腰間的鑰匙串', secret: '陳大文火災保險的受益人', liesAbout: ['與陳大文的關係','保險的事'], tellsTruthAbout: ['唐樓的狀況','他看到的異常'], defaultLocation: 'tenement',
    schedule: [
      { startHour: 8, endHour: 12, locationId: 'tenement', activity: '收租' },
      { startHour: 12, endHour: 14, locationId: 'home-hk', activity: '休息吃飯' },
      { startHour: 14, endHour: 16, locationId: 'tenement', activity: '繼續收租' },
    ],
    aiPrompt: '你是貪財的房東包租公，膽子小。陳大文的死讓你賺了一筆，但如果他還活著，你要連本帶利吐回去。你說話愛繞圈子，但一涉及錢就變得異常緊張。' },
    { id: 'wife-hk', name: '陳太太', avatar: '👩', role: '遺孀', personality: '說話輕得像怕驚動什麼，端茶時手不抖，但茶水總是灑出杯沿一滴', secret: '知道陳大文沒死，一直有聯繫', liesAbout: ['陳大文的死','她的真實感受'], tellsTruthAbout: ['她對陳大文的了解','她注意到的異常'], defaultLocation: 'home-hk',
    schedule: [
      { startHour: 8, endHour: 12, locationId: 'home-hk', activity: '做飯打掃' },
      { startHour: 12, endHour: 14, locationId: 'clinic', activity: '去診所看病' },
      { startHour: 14, endHour: 16, locationId: 'home-hk', activity: '在家休息' },
    ],
    aiPrompt: '你是遺孀陳太太，柔弱但堅韌。你知道丈夫沒死，而且他可能隨時回來。你說話輕柔，動作謹慎，但在提到「死人」時眼神會有一瞬間的閃爍。' },
    { id: 'gangster-hk', name: '喪彪', avatar: '🔪', role: '黑道打手', personality: '說話像扔石頭，又硬又響；但提到「貨」的位置時會突然壓低聲音，像怕被人聽見', secret: '陳大文藏了一批贓物', liesAbout: ['與陳大文的債務','贓物的下落'], tellsTruthAbout: ['城寨的規矩','他看到的異常'], defaultLocation: 'casino',
    schedule: [
      { startHour: 8, endHour: 12, locationId: 'casino', activity: '賭博' },
      { startHour: 12, endHour: 14, locationId: 'tenement', activity: '去找包租公' },
      { startHour: 14, endHour: 16, locationId: 'casino', activity: '繼續賭' },
    ],
    aiPrompt: '你是黑道打手喪彪，粗魯暴躁，但講義氣。陳大文欠你的不只是錢，還有一批貨。你說話大聲，動作粗魯，但一提到三年前的事就變得謹慎。' },
    { id: 'doctor-hk', name: '老中醫', avatar: '💊', role: '中醫師', personality: '診脈時眼睛望著窗外，開方時字跡優美如書法；提到「死亡」二字時會輕輕嘆氣', secret: '開了假死亡證明', liesAbout: ['與陳大文的關係','死亡證明的事'], tellsTruthAbout: ['中醫知識','他注意到的異常'], defaultLocation: 'clinic',
    schedule: [
      { startHour: 8, endHour: 12, locationId: 'clinic', activity: '看病開方' },
      { startHour: 12, endHour: 14, locationId: 'home-hk', activity: '去陳家送藥' },
      { startHour: 14, endHour: 16, locationId: 'clinic', activity: '繼續看診' },
    ],
    aiPrompt: '你是老中醫，慈祥溫和。你曾經幫一個人詐死，而這個人可能還活著。你說話慢條斯理，充滿智慧，但對三年前的火災話題異常敏感。' },
  ],
  clues: [
    { id: 'dead-letter', name: '寄給死人的信', description: '信封上的字跡歪斜而用力，像寫信人在發抖：「陳大文親啟」。拆開後，裡面只有一行字：「我回來了，準備好還債。」沒有寄件人地址。', locationId: 'mailbox', type: 'document', isHidden: false, relevance: '有人假裝陳大文還活著，或陳大文真的還活著', timeWindow: { startHour: 10, endHour: 12, reason: '上午十點後，郵差開筒取信時，這封信才會出現在郵筒裡' } ,
    details: [
      { label: '郵戳', content: '信封上的郵戳是三天前的，郵戳的墨水已經暈開，但還能辨認出「香港中環」的字樣。這封信不是從九龍城寨寄出的。' },
      { label: '信封材質', content: '信封是進口的重磅棉紙，邊緣有燙金的紋飾。這種信封在九龍城寨買不到，只有中環的幾家高級文具店才有。' },
      { label: '火漆印', content: '信封的火漆印是一朵玫瑰的圖案，印痕的邊緣有輕微的裂痕。這個火漆印被拆開過，又被人用蠟重新封上——但第二次封蠟的溫度不夠，印痕變形了。' },
    ],
  },
    { id: 'new-stamp', name: '新郵票', description: '信封上的郵票還散發著漿糊的濕氣，郵戳的日期是三天前，地點是「九龍城寨」——一個不該有郵政服務的地方。', locationId: 'mailbox', type: 'physical', isHidden: false, relevance: '信是最近才寄出的' ,
    details: [
      { label: '漿糊成分', content: '郵票背面的漿糊還沒有完全乾透，濕度顯示黏貼時間不超過四十八小時。但郵戳的日期是三天前——郵票是後來才被貼上去的，有人替換了原本的郵票。' },
      { label: '齒孔', content: '郵票的齒孔邊緣有輕微的磨損，這種磨損通常出現在從整版郵票上撕下時的暴力撕扯。但這張郵票的齒孔太整齊了——是用齒孔鉗人工製造的假齒孔。' },
      { label: '油墨', content: '郵票的油墨在紫外線下呈現異常的螢光反應。正常的郵票油墨不會螢光——這是一張偽造的郵票，用來掩蓋信件的真實寄出時間。' },
    ],
  },
    { id: 'address-list', name: '地址清單', description: '郵局的地址簿上，陳大文的欄位三年前就被紅筆劃掉了，旁邊註記「已停用，火災」。但有人一直在更新這個地址。', locationId: 'post-office', type: 'document', isHidden: false, relevance: '郵局知道陳大文已經死了' },
    { id: 'brother-photo', name: '兄弟合照', description: '阿炳抽屜最底層的照片裡，兩個年輕人站在祖宅前，一個笑著摟著另一個的肩膀，背面寫著「大文與二文，1960」。', locationId: 'post-office', type: 'document', isHidden: true, relevance: '阿炳確實是陳大文的弟弟' },
    { id: 'fire-traces', name: '火災痕跡', description: '唐樓三樓的牆面上，燒焦的痕跡從地面開始向上爬，不是從某個電器開始的——有人在地板上潑了東西。', locationId: 'tenement', type: 'physical', isHidden: false, relevance: '三年前的火災可能是人為縱火' },
    { id: 'insurance-paper-hk', name: '保險單', description: '包租公保險櫃裡的保險單已經發黃，受益人一欄只有他一個人的名字，保額五十萬，簽約日期是火災前一週。', locationId: 'tenement', type: 'document', isHidden: true, relevance: '包租公有動機製造假死' },
    { id: 'widow-phone-hk', name: '陳太太的電話', description: '電話機上的轉盤還留著油漬，通話紀錄顯示每週三下午三點，都有一通來自城寨公共電話的來電，通話時間總是三分鐘——不多不少。', locationId: 'home-hk', type: 'document', isHidden: false, relevance: '陳太太與某人有定期聯繫', timeWindow: { startHour: 14, endHour: 16, reason: '下午兩點後，陳太太從診所回來，電話鈴聲才會響起' }, destroyable: true },
    { id: 'hidden-letter', name: '藏起來的信', description: '床頭櫃最深處的信紙已經被揉得發軟：「再給我十萬，否則我就讓所有人知道我还活着。」字跡是陳大文的，沒有人比他更會威脅人。', locationId: 'home-hk', type: 'document', isHidden: true, relevance: '陳大文確實還活著，並在勒索陳太太', destroyable: true, unlocksMemory: 'memory-blackmail' },
    { id: 'debt-book-hk', name: '賭債帳本', description: '喪彪的帳本裡，「陳大文」那一頁被摺了角，金額三十萬，旁邊用紅筆寫著「已死，爛帳」，墨水已經滲透了紙背。', locationId: 'casino', type: 'document', isHidden: false, relevance: '喪彪以為陳大文死了，債務一筆勾銷' },
    { id: 'stolen-goods', name: '贓物清單', description: '保險櫃裡的清單上列著一批勞力士的型號和數量，備註欄寫著「城寨，C點，大文知道」。', locationId: 'casino', type: 'document', isHidden: true, relevance: '陳大文藏了一批贓物' },
    { id: 'fake-death-cert', name: '假死亡證明', description: '診所的檔案櫃裡，陳大文的死亡證明副本靜靜躺著，簽名確實是老中醫的，但死因欄的「心臟衰竭」四個字寫得特別輕，像怕驚動什麼。', locationId: 'clinic', type: 'document', isHidden: false, relevance: '老中醫開了假死亡證明' },
    { id: 'poison-herb', name: '毒草藥', description: '藥櫥最上層的抽屜裡，有一包沒有標籤的乾燥藥材，氣味刺鼻。老中醫說是「以毒攻毒」的偏方，但分量夠毒死一頭豬。', locationId: 'clinic', type: 'physical', isHidden: false, relevance: '老中醫可能用毒草藥殺人', unlocksMemory: 'memory-poison' },
  ],
  truth: {
    murdererId: 'wife-hk',
    method: '陳太太在三年前故意縱火，企圖殺死陳大文詐領保險金。陳大文僥倖逃生但毀容，三年來一直在勒索她。陳太太忍無可忍，用毒藥殺死了回來討債的陳大文，將屍體藏在郵筒附近的下水道中。',
    motive: '陳大文持續勒索，她已經沒有錢了',
    timeline: '三年前：陳太太縱火製造假死。三年來：陳大文不斷勒索。三天前：陳太太約陳大文在郵筒見面，用毒藥殺死了他。',
    fullExplanation: '陳太太三年前發現陳大文出軌，決心報復。她故意在唐樓縱火，企圖殺死陳大文並詐領保險金。沒想到陳大文僥倖逃生，但毀了容。三年來，陳大文不斷勒索她，她不得不一次次給錢。直到最近，陳大文要求她歸還所有撫卹金，否則就向警方自首「復活」。走投無路的陳太太約他在郵筒見面——那個每天收到他來信的郵筒——用老中醫開的毒藥，結束了這場噩夢。',
    eachCharacterSecret: {
      'postman-hk': '陳大文的親弟弟',
      'landlord': '陳大文火災保險的受益人',
      'wife-hk': '知道陳大文沒死，三年前縱火的是他',
      'gangster-hk': '陳大文藏了一批贓物',
      'doctor-hk': '開了假死亡證明',
    },
  },

  disruption: {
    name: '差佬巡邏',
    interval: 4,
    locations: ['mailbox', 'post-office', 'tenement', 'home-hk', 'casino', 'clinic'],
    hitMessage: '差佬的手電筒光掃進{location}，「做咩啊？唔該走開。」你被趕離了現場。',
    missMessage: '遠處傳來差佬的對講機聲，正在{location}附近巡邏',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：你就是兇手。你必須一邊調查一邊銷毀對自己不利的線索，並在記憶中拼湊出真正的犯罪經過。',
    'config': {
      'choices': [
        {
          'id': 'mailbox-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'dead-letter'
          },
          'question': '你發現了一封匿名信，裡面寫著郵局長的罪證。你會怎麼做？',
          'options': [
            {
              'label': '把信投進郵筒寄出去',
              'value': 'send'
            },
            {
              'label': '燒掉它，當作沒看過',
              'value': 'burn'
            },
            {
              'label': '拿著信去質問郵局長',
              'value': 'confront'
            }
          ]
        },
        {
          'id': 'mailbox-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'clinic'
          },
          'question': '你走進老中醫的診所，藥櫥的抽屜留著一條縫，像是一個欲言又止的秘密。你知道這裡開過一張死亡證明，也知道那包無標籤的毒草藥分量足以殺死一頭豬。當年有人用這裡的筆墨詐死，如今可能又有人用這裡的毒藥殺人。你會怎麼做？',
          'options': [
            { 'label': '搜查藥櫥，找出那包毒草藥', 'value': 'search' },
            { 'label': '質問老中醫關於假死亡證明的事', 'value': 'confront' },
            { 'label': '悄悄離開，不打草驚蛇', 'value': 'leave' }
          ]
        }
      ]
    }
  }};
