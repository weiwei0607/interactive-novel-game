import type { Story } from '../../../types/game';

export const bellTowerStory: Story = {
  id: 'bell-tower',
  title: '鐘樓上的烏鴉',
  subtitle: '中世紀修道院，主教死於懺悔室，行腳僧發現了不該發現的',
  era: '中世紀',
  setting: '歐洲中世紀修道院，瘟疫蔓延的邊陲小鎮',
  hasPrologue: true,
  prologueSynopsis:
    `中世紀的修道院，石牆在黃昏中變成深褐色。禱告鐘聲迴盪在迴廊間，驚起鐘樓上幾隻烏鴉，牠們黑色的翅膀劃過玫瑰色的天際。\n\n安東尼主教在晚餐時分走到長桌盡頭，銀杯裡的葡萄酒映著燭光。行腳僧坐在角落，低頭攪動碗裡的濃湯；馬可院長翻閱一本羊皮經書，指尖停留在某一頁已經很久；瑪利亞修女端著藥盤穿過走廊，藥草味在空氣裡留下淡淡的痕跡；托馬斯修士在圖書館高處的梯子上，灰白的眉毛垂落下來，像兩片翅膀；彼得廚子在廚房裡剁骨頭，咚、咚、咚，節奏穩定如心跳。\n\n主教舉杯說：「願主保守我們度過這個冬天。」所有人都應和了，但沒有人抬頭看別人的眼睛。`,
  synopsis: '鐘樓的晨禱鐘聲沒有響起。當第一縷慘白的光爬進修道院，有人在懺悔室發現了安東尼主教——他仰面倒在撕破的簾子下，胸口插著那柄平時供奉在祭壇上的銀製十字架，像一座被自己的信仰釘死的雕像。六位修道院成員各懷鬼胎：有人覬覦主教的權位，有人隱瞞著異端信仰，有人則是為了保護一個古老的秘密。',
  victim: '安東尼主教（修道院主教，60歲）',
  characters: [
    { id: 'monk-you', name: '你（行腳僧）', role: '行腳僧', avatar: '⛪', description: '草鞋上的泥還沒乾，目光在修道院的拱頂間游移，像一隻誤入籠子的鳥。', secret: '母親臨終前塞給他一塊燒焦的布，上面繡著修道院的紋章和「A」字。他走了三個月，終於找到這個「A」。', motive: '安東尼拒絕承認他的身份，甚至當著他的面說「我沒有子嗣」', alibi: '說在禱告室冥想', secretPrologue: '母親臨終前塞給我一塊燒焦的布，說那上面繡著我的來處。我走了三個月，草鞋換了七雙，終於站在這座修道院的拱頂下。鐘聲響起時，我聞到了熟悉的焚香味——和母親棺木前的那炷香，是同一種氣味。',
    hiddenAgenda: '找到母親臨終前提到的那塊繡有「A」字的燒焦布料',
      isPlayable: true },
    { id: 'prior', name: '馬可院長', role: '修道院院長', avatar: '📿', description: '雙手總是交疊在袍前，謙遜的姿態像一座訓練有名的雕塑，唯有眼神偶爾洩漏爐火。', secret: '他等待這個位置已經二十年。羅馬的密信就藏在聖經的挖空書脊裡。', motive: '安東尼發現了他與對立派勾結的證據，準備在三天後的樞機會議上揭發', alibi: '說在圖書館抄寫經文', secretPrologue: '安東尼在懺悔室裡的背影，看起來比平時小了許多。我握著那本挖空了書脊的聖經，裡面的銀十字架在燭光下閃爍。二十年來，我等待這個位置。他發現了羅馬密信，三天後就要揭發我。主啊，原諒我——但這個位置，本來就該是我的。', tool: { name: '聖經書脊刀', description: '可以將血跡轉移到任何布料或紙張上' }, hiddenAgenda: '從安東尼的書房取回藏在聖經書脊裡的羅馬密信',
      isPlayable: true },
    { id: 'sister', name: '瑪利亞修女', role: '醫務修女', avatar: '⚕️', description: '藥草味從袖口散發出來，動作輕得像怕驚動什麼，但為病人換繃帶時手絕不顫抖。', secret: '她的禱告不是向著十字架，而是向著地窖深處那塊被石灰遮住的異教石刻。', motive: '安東尼發現了她的異端身份，準備將她交給宗教裁判所，而「女巫」的結局是火刑', alibi: '說在病房照顧瘟疫病人', hiddenAgenda: '找到並保護地窖深處的異教石刻',
      isPlayable: true },
    { id: 'librarian', name: '托馬斯修士', role: '圖書管理員', avatar: '📚', description: '鼻尖幾乎要埋進羊皮卷裡，灰白的眉毛在燭光下投出翅膀般的陰影，咳嗽聲像風穿過迴廊。', secret: '他在整理古籍時，發現地窖牆後是空的——後面是一整座異教神殿的遺跡。', motive: '安東尼準備銷毀這些「異教邪物」，而那是他畢生所見最完整的古文明遺存', alibi: '說在整理古籍', hiddenAgenda: '繪製並帶走地窖牆後異教神殿的地圖',
      isPlayable: true },
    { id: 'cook', name: '彼得廚子', role: '修道院廚師', avatar: '🍲', description: '圍裙上永遠沾著麵粉，說話像剁骨頭，咚、咚、咚，但切聖餐麵包時動作會突然變輕。', secret: '他的父親是這座修道院的前任守衛，因為「瀆職」被安東尼驅逐，死在去羅馬的荒路上。', motive: '父親的屍骨至今沒有十字架，他來這裡是為了讓安東尼付出代價', alibi: '說在廚房準備聖餐', hiddenAgenda: '為父親的墳墓找到並帶回一個十字架',
      isPlayable: true },
    { id: 'bishop-v', name: '安東尼主教', role: '受害者', avatar: '💀', description: '修道院主教。', secret: '用權力壓迫多人', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'confessional', name: '懺悔室', icon: '✝️', description: '懺悔室的簾子像一片被撕裂的翅翼垂掛著，蠟燭的油脂味蓋不住血腥味，地上有一小灘已經變黑的血。', clues: ['silver-cross','torn-veil'], npcs: [], imagePrompt: '中世紀懺悔室，血跡，蠟燭' },
    { id: 'prayer', name: '禱告室', icon: '🕯️', description: '禱告室的石牆吸走了所有聲音，只有蠟燭的火星爆裂時才會驚動這裡的寂靜，空氣冷得像在井底。', clues: ['prayer-book','hidden-letter'], npcs: ['monk-you'], imagePrompt: '中世紀禱告室，蠟燭' },
    { id: 'library', name: '圖書館', icon: '📖', description: '羊皮卷的黴味在這裡堆積了數百年，陽光從彩繪玻璃濾進來，把空氣染成紫紅和暗金。', clues: ['heresy-book','secret-map'], npcs: ['prior','librarian'], imagePrompt: '中世紀圖書館，羊皮卷' },
    { id: 'infirmary', name: '病房', icon: '🏥', description: '草藥與腐肉的味道在這裡達成某種恐怖的平衡，病人的呻吟聲低而連續，像遠處的禱告。', clues: ['herb-poison','healing-miracle'], npcs: ['sister'], imagePrompt: '中世紀病房，草藥' },
    { id: 'kitchen', name: '廚房', icon: '🍞', description: '麵包還在爐子裡膨脹，熱氣與煙霧讓視線變得模糊，木柴爆裂的聲音像細小的骨頭折斷。', clues: ['communion-wine','kitchen-knife'], npcs: ['cook'], imagePrompt: '中世紀廚房，烤爐' },
    { id: 'cellar', name: '地窖', icon: '🕳️', description: '地窖的石階濕滑，越往下走，十字架的氣味越淡，取而代之的是某種更古老的、泥土與石頭混合的氣息。', clues: ['pagan-altar','old-bones'], npcs: [], imagePrompt: '中世紀地窖，昏暗' },
  ],
  npcs: [
    { id: 'prior', name: '馬可院長', avatar: '📿', role: '修道院院長', personality: '說話總是微微低頭，像在禱告，但每句話都經過秤量；右手拇指不停摩挲念珠', secret: '計畫篡奪主教之位', liesAbout: ['他的野心','與羅馬的關係'], tellsTruthAbout: ['修道院的規矩','他觀察到的人際關係'], defaultLocation: 'library',
    schedule: [
      { startHour: 0, endHour: 2, locationId: 'library', activity: '抄寫經文' },
      { startHour: 2, endHour: 4, locationId: 'confessional', activity: '與主教會面' },
      { startHour: 4, endHour: 6, locationId: 'library', activity: '整理文件' },
      { startHour: 6, endHour: 8, locationId: 'prayer', activity: '禱告' },
    ],
    aiPrompt: '你是修道院院長馬可，謙遜有禮但野心勃勃。你等待這個位置已經太久了。你說話溫和，但每個字都經過計算。你習慣低頭說話，像在禱告，但眼睛總是觀察對方的反應。' },
    { id: 'sister', name: '瑪利亞修女', avatar: '⚕️', role: '醫務修女', personality: '聲音像紗一樣輕，但換藥時的動作果斷如刀；提到火刑時會無意識地摸手腕', secret: '異端教派成員', liesAbout: ['她的信仰','她在修道院的真正目的'], tellsTruthAbout: ['她對病人的關懷','她注意到的異常'], defaultLocation: 'infirmary',
    schedule: [
      { startHour: 0, endHour: 3, locationId: 'infirmary', activity: '照顧瘟疫病人' },
      { startHour: 3, endHour: 5, locationId: 'cellar', activity: '到地窖取藥草' },
      { startHour: 5, endHour: 8, locationId: 'infirmary', activity: '調配藥劑' },
    ],
    aiPrompt: '你是醫務修女瑪利亞，溫柔善良，但內心堅定如殉道者。你隱瞞著一個可能讓你送命的信仰。你說話輕柔，動作優雅，但眼神深處藏著不容置疑的決絕。' },
    { id: 'librarian', name: '托馬斯修士', avatar: '📚', role: '圖書管理員', personality: '目光在對話時總是飄向書架，像在確認什麼東西還在原位；咳嗽時會用手帕遮住整張臉', secret: '發現了異教神殿遺跡', liesAbout: ['地窖的秘密','古籍的內容'], tellsTruthAbout: ['歷史知識','他觀察到的細節'], defaultLocation: 'library',
    schedule: [
      { startHour: 0, endHour: 4, locationId: 'library', activity: '整理古籍' },
      { startHour: 4, endHour: 6, locationId: 'cellar', activity: '調查異教遺跡' },
      { startHour: 6, endHour: 8, locationId: 'library', activity: '繼續整理' },
    ],
    aiPrompt: '你是圖書管理員托馬斯，對知識狂熱，沉默內斂。你發現了一個足以顛覆信仰的秘密。你不擅長與人對視，說話時常引用古籍，對地窖的话题尤其敏感。' },
    { id: 'cook', name: '彼得廚子', avatar: '🍲', role: '修道院廚師', personality: '說話像扔石頭，又硬又響；但切麵包時會突然安靜下來，像在舉行某種儀式', secret: '被安東尼驅逐的守衛的兒子', liesAbout: ['他的真實身份','對安東尼的看法'], tellsTruthAbout: ['他看到的異常','修道院的日常'], defaultLocation: 'kitchen',
    schedule: [
      { startHour: 0, endHour: 4, locationId: 'kitchen', activity: '準備聖餐' },
      { startHour: 4, endHour: 6, locationId: 'kitchen', activity: '烘焙麵包' },
      { startHour: 6, endHour: 8, locationId: 'prayer', activity: '禱告' },
    ],
    aiPrompt: '你是修道院廚師彼得，粗魯直率，不擅長說謊。你的父親被這個人驅逐，你來這裡是為了討回公道。你說話粗魯，聲音洪亮，但提到父親時會突然沉默。' },
  ],
  clues: [
    { id: 'silver-cross', name: '銀製十字架', description: '銀製十字架深深插進主教的胸膛，聖物的表面反射著燭光，像一隻嘲弄的眼睛——用信仰殺死信仰，這是兇手的宣告。', locationId: 'confessional', type: 'physical', isHidden: false, relevance: '兇手用聖物殺人，帶有象徵意義', destroyable: true ,
    details: [
      { label: '十字架背面', content: '十字架背面刻著一行小字：「A.M.D.G. 1542」。這是耶穌會的格言縮寫，但這座修道院屬於本篤會——這個十字架不屬於這裡。' },
      { label: '血跡分布', content: '血跡集中在十字架的下端橫木，呈現噴濺狀而非流淌狀。這意味著安東尼被刺時是站著的，而且兇手比他矮——或者，兇手是跪著的。' },
      { label: '握痕', content: '十字架的握柄處有乾涸的汗液殘留，指紋模糊不清，但能看出握持者用了很大的力氣，像是在祈禱，又像是在詛咒。' },
    ],
  },
    { id: 'torn-veil', name: '撕破的簾子', description: '懺悔室的簾子從內側被撕開一道大口子，邊緣抓皺的亞麻布上沾著血，像有人試圖逃離什麼。', locationId: 'confessional', type: 'physical', isHidden: false, relevance: '兇手與主教有過肢體衝突', destroyable: true },
    { id: 'prayer-book', name: '禱告書', description: '禱告書的頁邊夾著一張折成十字形的紙條：「來找我，我會告訴你真相。」署名「A」。', locationId: 'prayer', type: 'document', isHidden: false, relevance: '安東尼似乎知道你的身份', unlocksMemory: 'memory-prayer' },
    { id: 'hidden-letter', name: '密信', description: '牆縫中抽出的羊皮紙已經發脆，上面是年輕安東尼的筆跡：「她生了，是個男孩。我必須送走他們，為了主的事業。」', locationId: 'prayer', type: 'document', isHidden: true, relevance: '你確實是安東尼的私生子', unlocksMemory: 'memory-letter' },
    { id: 'heresy-book', name: '異端書籍', description: '禁書區最深處的羊皮卷上，有人用紅墨水寫滿了批注，字跡娟秀而堅決——與瑪利亞修女開藥方時的字一模一樣。', locationId: 'library', type: 'document', isHidden: true, relevance: '瑪利亞確實是異端' },
    { id: 'secret-map', name: '秘密地圖', description: '一本《聖徒行傳》的書脊裂開了，掉出一張地圖——修道院的輪廓下，畫著另一座建築的輪廓，像一具屍體的骨架藏在皮囊下。', locationId: 'library', type: 'document', isHidden: false, relevance: '地窖確實有秘密', destroyable: true },
    { id: 'herb-poison', name: '毒草藥', description: '瑪利亞修女的藥草籃裡，有一株植物的葉子形狀與其他草藥不同——那是顛茄，一滴汁液就能讓人停止呼吸。', locationId: 'infirmary', type: 'physical', isHidden: false, relevance: '瑪利亞可能用毒草藥殺人' },
    { id: 'healing-miracle', name: '治癒紀錄', description: '病房牆上的紀錄顯示，瑪利亞修女治癒了七名被其他修士判為「必死」的瘟疫病人，但有人在旁邊用炭筆寫了「巫術」。', locationId: 'infirmary', type: 'document', isHidden: false, relevance: '瑪利亞的醫術被懷疑是巫術' },
    { id: 'communion-wine', name: '聖餐酒', description: '聖餐酒的陶甕還沒有封蓋，酒面上浮著一層奇怪的油脂，入口的苦澀之後，喉嚨會感到一陣麻木。', locationId: 'kitchen', type: 'physical', isHidden: false, relevance: '有人計畫在聖餐中下毒', timeWindow: { startHour: 4, endHour: 6, reason: '凌晨四點後，彼得廚子開始準備聖餐，這時酒甕還沒封蓋' } ,
    details: [
      { label: '酒液殘留', content: '聖餐杯底部有一層極薄的沉澱物，呈灰白色。這不是葡萄酒的沉澱——這是砒霜的特徵，無色無味，但在杯底會留下微量結晶。' },
      { label: '杯緣唇印', content: '杯緣有一枚淡淡的唇印，口紅的顏色是深紅色——瑪利亞修女的口紅是玫瑰色，而院長的嘴唇從不上妝。這枚唇印屬於一個不在場的人。' },
      { label: '氣味', content: '酒杯散發著一股極淡的苦杏仁味，混在葡萄酒的酸澀裡幾乎無法察覺。這是砒霜被稀釋後的特徵氣味——有人試圖在聖餐中下毒。' },
    ],
  },
    { id: 'kitchen-knife', name: '廚刀', description: '刀架上最長的那把廚刀不見了，留下一個乾淨的矩形缺口，像一顆被拔掉的牙。', locationId: 'kitchen', type: 'physical', isHidden: false, relevance: '彼得可能用廚刀做過什麼' },
    { id: 'pagan-altar', name: '異教祭壇', description: '地窖最深處的石台上，擺放著與十字架完全不同的符號——圓環、羊角、新月，石灰的覆蓋層被人為剝落了一角。', locationId: 'cellar', type: 'physical', isHidden: false, relevance: '修道院確實建立在異教遺址上', timeWindow: { startHour: 3, endHour: 5, reason: '凌晨三點到五點，瑪利亞修女下地窖取藥草時，燈籠的光才會照到祭壇' }, unlocksMemory: 'memory-pagan-framing' },
    { id: 'old-bones', name: '古老骸骨', description: '石台後方的骨骸穿著異教祭司的殘破服飾，指骨間緊緊攥著一封羊皮信，像是死前想傳遞某個警告。', locationId: 'cellar', type: 'physical', isHidden: false, relevance: '古老的秘密與現在的謀殺有關' },
  ],
  truth: {
    murdererId: 'prior',
    method: '馬可院長趁安東尼在懺悔室獨自祈禱時，用銀製十字架刺入他的胸口，偽裝成宗教狂熱者所為。',
    motive: '安東尼發現了他與羅馬對立派勾結的證據，準備將他革職',
    timeline: '懺悔時間：安東尼獨自在懺悔室。馬可院長進入，用聖物刺殺。然後將現場佈置成異端襲擊的樣子。',
    fullExplanation: '馬可院長等待主教之位已經二十年。他與羅馬的對立派勾結，計畫在安東尼死後接管修道院，並將其變成對立派的據點。安東尼最近發現了他的陰謀，準備向羅馬告發。馬可別無選擇，必須在安東尼送出密信之前讓他永遠閉嘴。他用聖物殺人，是為了讓案件看起來像異端所為，轉移調查方向。',
    eachCharacterSecret: {
      'monk-you': '安東尼主教的私生子',
      'prior': '計畫篡奪主教之位，與對立派勾結',
      'sister': '異端教派成員',
      'librarian': '發現了異教神殿遺跡',
      'cook': '被安東尼驅逐的守衛的兒子',
    },
  },
  disruption: {
    name: '修女巡夜',
    interval: 4,
    locations: ['confessional', 'prayer', 'library', 'infirmary', 'kitchen', 'cellar'],
    hitMessage: '修女提著燈籠走進{location}，看見你時在胸口畫了個十字。「這個時辰你該在寢室禱告。」她的語氣不容置疑，你只好低頭退下。',
    missMessage: '遠處傳來修女誦經的聲音，她正在{location}附近巡夜',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演兇手角色，你的目標不是破案，而是成功栽贓給別人。',
    'config': {
      'choices': [
        {
          'id': 'bt-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'silver-cross'
          },
          'question': '你找到了銀製十字架，背面刻著耶穌會的格言。這個十字架不屬於本篤會——它可能是安東尼主教身世的證據。你會怎麼做？',
          'options': [
            { 'label': '把十字架交給馬可院長，讓他主持公道', 'value': 'give_prior' },
            { 'label': '藏起來，這是我母親留給我的線索', 'value': 'hide' },
            { 'label': '拿去質問安東尼本人', 'value': 'confront' }
          ]
        },
        {
          'id': 'bt-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'cellar'
          },
          'question': '地窖最深處的石台上，異教符號在燈籠光中若隱若現。這座修道院建立在另一座信仰的遺骸之上——一個足以顛覆一切的秘密。你會怎麼做？',
          'options': [
            { 'label': '用石灰重新掩蓋，讓秘密繼續沉睡', 'value': 'cover' },
            { 'label': '告訴馬可院長，讓教會決定命運', 'value': 'report' },
            { 'label': '保護這個遺跡，歷史不該被抹殺', 'value': 'protect' }
          ]
        }
      ]
    }
  }};
