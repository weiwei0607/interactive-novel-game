import type { Story } from '../../../types/game';

export const lastPageStory: Story = {
  id: 'last-page',
  title: '最後一頁',
  subtitle: '書店老闆死在書架間，手裡握著一本寫著他自己死亡場景的小說',
  era: '現代',
  setting: '台北舊城區的一間獨立書店「迷宮書房」',
  hasPrologue: true,
  prologueSynopsis:
    `迷宮書房的黃昏是一天中最美的時刻。夕陽從二樓的窗戶斜射進來，穿過書架間的縫隙，在地板上投下一格格金色的光斑。空氣裡飄著舊紙張和木地板的味道，還有一點點從隔壁茶館飄來的烏龍茶香。\n\n老周站在櫃檯後面，用一塊絨布擦拭那只祖傳的放大鏡。小說家在靠窗的專座上寫作，鉛筆在紙上沙沙作響；古籍商蹲在地下室門口，白色手套在昏暗中顯得格外乾淨；研究生在參考書區查資料，帆布包上印著小眾出版社的logo；遺孀在整理新到的書，動作輕柔得像在撫摸嬰兒；連鎖店長站在對街的櫥窗前，西裝筆挺，目光飄向這間他無法複製的書店。\n\n老周放下放大鏡，對著空蕩蕩的書店說：「每一本書都有最後一頁，但書店沒有。」沒有人回應，但小說家的鉛筆停了一秒。`,
  synopsis: '「迷宮書房」的燈還亮著，但老周已經不會再為最後一位客人留門了。他被發現死在書架迷宮的最深處，那些高聳的書架像一座紙做的陵墓，將他圍在中間。他的手緊緊握著一本絕版推理小說《書店謀殺案》，書頁翻開的那一頁，描述的正是「書店老闆死於書架迷宮」的場景。五位與書店有深厚淵源的常客，每個人都曾在那本書的借閱紀錄上簽名。而這一次，故事從紙頁上走了出來。',
  victim: '老周（書店老闆，62歲）',
  characters: [
    { id: 'writer', name: '你（小說家）', role: '推理小說家', avatar: '✍️', description: '靠窗的專座上還留著一個坐過的凹陷，指節因為常年握筆而微微變形，說話時會不自覺望向窗外的同一個方向。', secret: '《書店謀殺案》的每一個字都是她寫的，但出版時作者欄印的是老周的名字。版稅打進了他的帳戶，而她的帳戶只剩下透支。', motive: '老周準備出版她的新書《迷宮》，但署名要改成他自己——他說「讀者只認識我的名字」', alibi: '說在二樓寫作', secretPrologue: '書架上的灰塵有兩種厚度。老周死的這個位置，書脊上的灰塵被擦掉了一條痕跡——有人在他死前不久抽走了什麼。我認得那個書架空位，那是《書店謀殺案》原稿的位置。我寫了三年，他說幫我出版，結果署上了他的名字。今晚，我要拿回屬於我的最後一頁。',
    hiddenAgenda: '找到《書店謀殺案》的原稿',
      isPlayable: true },
    { id: 'rare-book', name: '古籍商', role: '珍本書商', avatar: '📜', description: '手套永遠是白色的，翻書的動作像在進行某種外科手術，眼睛在評估書脊時會發出某種獵人發現獵物時的光。', secret: '他在地下室看到了那批古籍——宋版的《資治通鑑》，明版的《金瓶梅》插圖本——任何一本都夠買下這間書店十次。而老周打算把它們捐給博物館。', motive: '老周拒絕出售那批古籍，還準備報警告發他盜竊文物——儘管是他幫老周鑑定的', alibi: '說在地下室看書', hiddenAgenda: '確保地下室的珍本古籍不被捐給博物館',
      isPlayable: true },
    { id: 'student-lp', name: '研究生', role: '文學研究生', avatar: '📚', description: '帆布包上印著某個小眾出版社的logo，眼鏡片後面的眼睛總是瞇著，像在讀一本字號太小的書。', secret: '她的論文大綱是老周寫的，田野調查是她做的，但提交前的最後一夜，老周把作者欄改成了「周牧野」。', motive: '學術成果被盜用，而她需要這篇論文拿到獎學金——母親的化療費還差三個月', alibi: '說在參考書區查資料', hiddenAgenda: '找到論文原稿，證明自己是真正的作者',
      isPlayable: true },
    { id: 'widow-lp', name: '遺孀', role: '老闆前妻', avatar: '🕯️', description: '總是穿著深灰色的衣服，整理書架時的動作輕柔得像在撫摸什麼，髮髻梳得一絲不苟，像某種拒絕散亂的意志。', secret: '他們從未在戶政事務所登記離婚。老周給她看的那份「離婚協議」上，印章是假的。三十年來，她仍然是法律上的妻子，而他早已另組家庭。', motive: '老周的新妻子準備繼承書店，而她將一無所有——連那個「前妻」的頭銜都是假的', alibi: '說在整理新書', hiddenAgenda: '找到並公開那份假的離婚協議',
      isPlayable: true },
    { id: 'competitor-lp', name: '連鎖店長', role: '連鎖書店店長', avatar: '🏢', description: '西裝是連鎖品牌的制服，笑容是標準的八顆牙，但在這間舊書店裡，他的目光總是飄向那些他無法複製的東西。', secret: '1995年，他和老周在這間書店裡喝過同一瓶酒，說過「我們要讓這條街變成書店街」。二十年後，老周設計讓他簽下了退股協議，代價是「不要再出現在這條街上」。', motive: '老周準備把書店賣給連鎖集團——賣給他的競爭對手，而當年的退股協議讓他連一分錢都分不到', alibi: '說在對街看店', hiddenAgenda: '找到當年退股協議的原件',
      secretPrologue: '那疊手稿藏在書架迷宮最深處。我抽走它時，老周正好轉過身來。二十年前的合夥人，如今只剩下一具倒在書架間的軀體。我拿起那本《書店謀殺案》，翻到第187頁，塞進他僵硬的手中。', tool: { name: '裁紙刀', description: '可以將血跡和紙屑轉移到任何表面' },
      isPlayable: true },
    { id: 'zhou-v', name: '老周', role: '受害者', avatar: '💀', description: '書店老闆。', secret: '盜用多人成果，私藏文物', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'maze', name: '書架迷宮', icon: '📖', description: '書架迷宮的最深處，光線被層層疊疊的書脊過濾成昏黃的霧。老周倒在兩排書架之間，像被一本巨大的書夾在某一頁裡，手裡的《書店謀殺案》翻到第187頁。', clues: ['novel-page','blood-fingerprint'], npcs: [], imagePrompt: '書店書架迷宮，昏暗燈光' },
    { id: 'window-seat', name: '靠窗專座', icon: '🪟', description: '靠窗的位置被午後的陽光曬得發暖，桌上的稿紙還留著咖啡杯墊的圓形水印，像一個個未完成的句號。', clues: ['manuscript-contract','royalty-statement'], npcs: ['writer'], imagePrompt: '書店靠窗座位，稿紙，咖啡杯' },
    { id: 'basement', name: '地下室', icon: '🕳️', description: '地下室的樓梯會發出某種類似嘆息的聲響，空氣裡的黴味濃得讓人想咳嗽，絕版書的書脊在黑暗中排列成某種古老的密碼。', clues: ['rare-collection','theft-photo'], npcs: ['rare-book'], imagePrompt: '書店地下室，古籍，昏暗' },
    { id: 'reference', name: '參考書區', icon: '📑', description: '學術參考書區的書架特別高，需要踮腳才能拿到最上層，空氣裡飄著舊紙張和膠水的氣味，像一間被遺忘的圖書館。', clues: ['thesis-draft','coauthor-agreement'], npcs: ['student-lp'], imagePrompt: '書店參考書區，學術書籍' },
    { id: 'counter-lp', name: '櫃檯', icon: '☕', description: '櫃檯後方的牆上掛著「迷宮書房」的開幕照片，照片裡的兩個年輕人笑得像擁有全世界，而現在只剩一個人還在櫃檯後面。', clues: ['marriage-cert','divorce-fake'], npcs: ['widow-lp'], imagePrompt: '書店櫃檯，舊帳本' },
    { id: 'across', name: '對街書店', icon: '🏪', description: '對街的連鎖書店明亮得像手術室，每一本書都包著塑膠膜，收銀機的聲音像某種規律的心跳，與迷宮書房的雜亂形成殘酷的對比。', clues: ['partnership-deed','sale-offer'], npcs: ['competitor-lp'], imagePrompt: '連鎖書店，明亮現代' },
  ],
  npcs: [
    { id: 'rare-book', name: '古籍商', avatar: '📜', role: '珍本書商', personality: '翻書的動作像在觸摸皮膚，膽小到不敢直視屍體，但提到古籍時會突然忘記恐懼', secret: '發現老周私藏價值連城的古籍', liesAbout: ['與老周的關係','古籍的事'], tellsTruthAbout: ['書籍的知識','他注意到的異常'], defaultLocation: 'basement',
    schedule: [
      { startHour: 14, endHour: 18, locationId: 'basement', activity: '在地下室看書' },
      { startHour: 18, endHour: 20, locationId: 'maze', activity: '到書架迷宮巡視' },
      { startHour: 20, endHour: 22, locationId: 'basement', activity: '回到地下室' },
    ],
    aiPrompt: '你是古籍商，精明但膽小。你發現了一批價值連城的古籍，而擁有者現在死了。你對書的狂熱超過對人的關心，說話時充滿專業術語，但對暴力場面異常恐懼。' },
    { id: 'student-lp', name: '研究生', avatar: '📚', role: '文學研究生', personality: '說話時會引用理論，但引用到一半會突然沉默，像在後悔暴露了自己；提到論文時會下意識摸向帆布包', secret: '論文與老周合寫，但老周準備獨自發表', liesAbout: ['論文的真實進度','與老周的合作'], tellsTruthAbout: ['她對書店的感情','她注意到的異常'], defaultLocation: 'reference',
    schedule: [
      { startHour: 14, endHour: 16, locationId: 'reference', activity: '在參考書區查資料' },
      { startHour: 16, endHour: 18, locationId: 'window-seat', activity: '到靠窗專座寫作' },
      { startHour: 18, endHour: 20, locationId: 'reference', activity: '回到參考書區' },
    ],
    aiPrompt: '你是研究生，認真執著，有學術潔癖。你的學術成果即將被盜用，而盜用者現在死了。你說話謹慎，習慣引用理論，但內心深處充滿憤怒和無助。' },
    { id: 'widow-lp', name: '遺孀', avatar: '🕯️', role: '老闆前妻', personality: '說話輕得像翻書的聲音，整理東西時有一種殉道者般的專注；提到「離婚」時會有一瞬間的失神', secret: '與老周從未正式離婚，老周重婚了', liesAbout: ['與老周的關係','離婚的事'], tellsTruthAbout: ['她對書店的了解','她注意到的異常'], defaultLocation: 'counter-lp',
    schedule: [
      { startHour: 14, endHour: 16, locationId: 'counter-lp', activity: '在櫃檯整理' },
      { startHour: 16, endHour: 18, locationId: 'maze', activity: '到書架迷宮巡視' },
      { startHour: 18, endHour: 20, locationId: 'counter-lp', activity: '回到櫃檯' },
    ],
    aiPrompt: '你是前妻，溫柔沉默，內心堅韌。你們從未真正離婚，而他的新妻子即將繼承一切。你說話輕柔，動作優雅，但內心深處藏著三十年的委屈和不甘。' },
    { id: 'competitor-lp', name: '連鎖店長', avatar: '🏢', role: '連鎖書店店長', personality: '笑容標準得像印出來的，但眼神在提到「迷宮書房」時會突然變冷；雙手插在西裝口袋裡，像在克制什麼', secret: '曾經是老周的合夥人，被設計趕出', liesAbout: ['與老周的過去','收購的事'], tellsTruthAbout: ['商業上的觀察','他注意到的異常'], defaultLocation: 'across',
    schedule: [
      { startHour: 14, endHour: 16, locationId: 'across', activity: '在對街看店' },
      { startHour: 16, endHour: 18, locationId: 'counter-lp', activity: '到櫃檯交談' },
      { startHour: 18, endHour: 20, locationId: 'across', activity: '回到對街' },
    ],
    aiPrompt: '你是連鎖店長，表面友善。你曾經是這家書店的一半主人，但被設計趕出。現在你回來了。你維持著職業性的微笑，但內心的怨恨像一本被燒掉一半的書，隨時可能重燃。' },
  ],
  clues: [
    { id: 'novel-page', name: '小說那一頁', description: '第187頁的段落像一個預言：「書店老闆被自己的合夥人推入書架迷宮，書架倒塌將他壓死，手中的書翻到了最後一頁。」——這不是巧合，這是兇手的簽名。', locationId: 'maze', type: 'document', isHidden: false, relevance: '兇手可能是老周的合夥人', unlocksMemory: 'memory-novel-scene', timeWindow: { startHour: 16, endHour: 18, reason: '下午四點到六點，夕陽從窗戶照進來，書頁上的字跡才會變得特別清晰' } ,
    details: [
      { label: '紙張纖維', content: '這一頁的紙張與小說其他頁面不同，纖維更粗糙，邊緣有手工裁切的痕跡。這一頁是後來插入的，不是原版印刷。' },
      { label: '墨水成分', content: '頁面上的墨水與小說正文的印刷油墨不同，含有更高的鐵質含量。這是鋼筆墨水的特徵——有人親手寫下了這一頁。' },
      { label: '頁碼', content: '頁碼的數字「217」與前後頁的頁碼字體略有不同，數字「7」的橫筆比正常的長了一毫米。這是刻意模仿的筆跡，但模仿者沒注意到細節。' },
    ],
  },
    { id: 'blood-fingerprint', name: '血指紋', description: '書架的邊緣留著半枚血指紋，紋路在褐色的血跡中清晰可見——這不是推倒書架時意外留下的，這是某種故意的標記。', locationId: 'maze', type: 'physical', isHidden: false, relevance: '連鎖店長的指紋出現在兇案現場', destroyable: true, unlocksMemory: 'memory-scene', timeWindow: { startHour: 18, endHour: 20, reason: '傍晚六點後，書架迷宮的光線變暗，血指紋才會在燈光下顯現' } ,
    details: [
      { label: '指紋紋路', content: '半枚指紋的紋路顯示，這是一個經常做粗活的人——指紋的脊線磨損嚴重，尤其是拇指和食指的接觸面。連鎖店長的手是細嫩的，但這枚指紋屬於一個勞動者。' },
      { label: '血跡乾涸程度', content: '指紋上的血跡已經完全乾涸，但書架邊緣的血跡還是濕的。這枚指紋是幾個小時前留下的，而書架倒塌是最近才發生的——有人在事前就來過現場。' },
      { label: '指紋方向', content: '指紋的朝向顯示，這個人是用右手推書架的。但連鎖店長是左撇子，他的所有文件簽名都是用左手。這枚指紋不可能是他的。' },
    ],
  },
    { id: 'manuscript-contract', name: '稿件合約', description: '稿紙上的合約草稿還留著咖啡漬，甲方是老周的名字，乙方是空白——或者說，乙方被塗掉了，像一個被橡皮擦去的幽靈。', locationId: 'window-seat', type: 'document', isHidden: false, relevance: '老周準備盜用你的作品', unlocksMemory: 'memory-writer-ghost' },
    { id: 'royalty-statement', name: '版稅單', description: '版稅單上的數字讓人眩暈——《書店謀殺案》出版了十七年，每一筆版稅都打入了老周的帳戶。作者欄從來沒有出現過她的名字。', locationId: 'window-seat', type: 'document', isHidden: true, relevance: '老周確實盜用了你的稿費' },
    { id: 'rare-collection', name: '古籍珍藏', description: '地下室最深處的樟木箱裡，宋版書的紙張已經脆化，但墨香猶存。任何一本都夠買下這條街，而老周把它們當作私人收藏鎖在這裡。', locationId: 'basement', type: 'physical', isHidden: false, relevance: '老周私藏國家級文物' },
    { id: 'theft-photo', name: '盜竊照片', description: '手機相簿裡的照片顯示，老周深夜獨自將一個樟木箱搬入地下室——那個箱子的形狀，與某個博物館失竊案的通報描述驚人地吻合。', locationId: 'basement', type: 'document', isHidden: true, relevance: '古籍商掌握了老周盜竊文物的證據' },
    { id: 'thesis-draft', name: '論文草稿', description: '論文草稿的致謝頁寫著「感謝老周老師的指導」，但翻開作者頁，只有一個名字——老周。她的田野筆記被標註為「參考資料」。', locationId: 'reference', type: 'document', isHidden: false, relevance: '老周準備獨自發表合寫的論文' },
    { id: 'coauthor-agreement', name: '合著協議', description: '抽屜深處的協議上寫著「共同研究成果」，但老周的簽名上方蓋著一個陌生的印章——那不是學術機構的章，是某個出版社的編輯章。', locationId: 'reference', type: 'document', isHidden: true, relevance: '老周違反了合著協議' },
    { id: 'marriage-cert', name: '結婚證書', description: '櫃檯抽屜裡的結婚證書顯示，老周與遺孀的結婚日期是1985年。而戶政事務所的系統裡，沒有他們的離婚紀錄。', locationId: 'counter-lp', type: 'document', isHidden: false, relevance: '老周與前妻從未離婚' },
    { id: 'divorce-fake', name: '假離婚協議', description: '老周給遺孀看的那份「離婚協議」上，印章的紋路與任何官方登記都不符。這是一份精心偽造的文件，偽造了三十年。', locationId: 'counter-lp', type: 'document', isHidden: false, relevance: '老周用假離婚騙了遺孀三十年' },
    { id: 'partnership-deed', name: '合夥契約', description: '契約上的簽名已經褪色，但還能認出兩個年輕人的名字——老周，和連鎖店長。日期是1995年，股份各佔一半。', locationId: 'across', type: 'document', isHidden: false, relevance: '連鎖店長確實是老周的合夥人', destroyable: true },
    { id: 'sale-offer', name: '出售報價', description: '出售報價上的金額是市價的三倍，但受益人欄只有一個名字。連鎖店長那百分之五十的股份，在這份報價裡像從未存在過。', locationId: 'across', type: 'document', isHidden: false, relevance: '老周準備把書店賣給連鎖集團，但打算私吞所有款項', destroyable: true },
  ],
  truth: {
    murdererId: 'competitor-lp',
    method: '連鎖店長在老周獨自整理書架迷宮時，與他發生爭執，然後推倒書架將他壓住，再用一本厚重的古籍砸向他的頭部。',
    motive: '老周準備把共同創立的書店賣給連鎖集團，卻不打算分給他一分錢',
    timeline: '案發當晚：老周在書架迷宮整理新書。連鎖店長來找他談判，兩人發生激烈爭執。連鎖店長推倒書架壓住老周，然後用古籍砸死他。最後，他把那本《書店謀殺案》放在老周手中，翻到描述「書店老闆被合夥人殺死」的那一頁。',
    fullExplanation: '連鎖店長與老周在1995年共同創立了迷宮書房。二十年前，老周設計趕走了他，獨佔了書店。最近，老周準備把書店以高價賣給連鎖集團，卻完全不打算分給他這位創始合夥人任何款項。連鎖店長忍無可忍，來書店找老周理論。爭執中，他推倒了書架迷宮中的書架，將老周壓在下面，然後用一本厚重的古籍結束了他的生命。他刻意把《書店謀殺案》翻到第187頁放在老周手中——那一頁描述的正是一位書店老闆被自己的合夥人殺死的場景。這是連鎖店長的復仇宣言：「這個故事，我們一起寫了開頭，現在，我來寫結局。」',
    eachCharacterSecret: {
      'writer': '《書店謀殺案》的真正作者，老周盜用了稿費',
      'rare-book': '發現老周私藏國家級古籍',
      'student-lp': '論文與老周合寫，但老周準備獨自發表',
      'widow-lp': '與老周從未正式離婚，老周重婚了',
      'competitor-lp': '老周的創始合夥人，被設計趕出書店',
    },
  },

  disruption: {
    name: '打烊鈴聲',
    interval: 4,
    locations: ['maze', 'window-seat', 'basement', 'reference', 'counter-lp', 'across'],
    hitMessage: '打烊的鈴聲在{location}響起，遺孀走進來說「該關門了。」你被她溫柔但堅定地請了出去。',
    missMessage: '風鈴在{location}輕輕響動，有人推門進來又出去',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演兇手角色，你的目標不是破案，而是成功栽贓給別人。',
    'config': {
      'choices': [
        {
          'id': 'lp-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'novel-page'
          },
          'question': '你找到了《書店謀殺案》的原稿，上面確確實實是你的筆跡。老周說這本書是他寫的，但他連標點符號的習慣都和你不同。你會怎麼做？',
          'options': [
            { 'label': '當眾翻開原稿，讓所有人看見真相', 'value': 'reveal' },
            { 'label': '把原稿帶走，留著以後再說', 'value': 'take' },
            { 'label': '把原稿燒了，讓這件事永遠結束', 'value': 'burn' }
          ]
        },

        {
          'id': 'lp-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'across'
          },
          'question': '你來到對街的連鎖書店，明亮得像手術室。在店長的辦公室抽屜裡，你發現了1995年的合夥契約——老周和連鎖店長當年各佔一半股份。原來這間迷宮書房，從來不屬於老周一個人。你會怎麼做？',
          'options': [
            {
              'label': '把契約帶回迷宮書房公開',
              'value': 'reveal'
            },
            {
              'label': '把契約還給連鎖店長',
              'value': 'return'
            },
            {
              'label': '銷毀契約，讓書房的歸屬永遠成謎',
              'value': 'burn'
            }
          ]
        }
      ]
    }
  }};
