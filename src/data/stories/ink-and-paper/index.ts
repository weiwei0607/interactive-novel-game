import type { Story } from '../../../types/game';

export const inkAndPaperStory: Story = {
  id: 'ink-and-paper',
  title: '白紙黑字',
  subtitle: '書院裡的秘密，足以毀掉一個人的仕途',
  era: '清末',
  setting: '蘇州城郊的白鹿書院，科舉在即',
  hasPrologue: true,
  prologueSynopsis:
    `白鹿書院的藏書閣在這個冬夜飄著松煙墨的氣味。掌院周老先生在書齋中設了一席小宴，說是科舉在即，要為書院裡的五位舉子打氣。燭火搖曳，窗外飄著細雪，院子裡的梅樹還沒開花，但已經有了隱約的香氣。\n\n周老先生坐在主位上，手邊攤著一本翻爛了的《論語》，目光卻不時掃過席間的五張面孔。他說話溫和，像一個真正的長者，但每當他提起「功名」二字時，語氣裡總有一絲說不清的意味——像是期待，又像是試探。\n\n沈瑞霖在炫耀父親從蘇州城帶來的錦緞；顧清明獨自坐在角落，用袖子擦著自己的青瓷杯；方世儀的折扇開開合合，像是在計算什麼；羅雪妍低著頭，幾乎不說話；吳老實端著茶壺，動作遲緩而精準。沒有人知道，這頓飯之後，書院裡會發生什麼。`,
  synopsis:
    '白鹿書院的藏書閣在這個冬夜飄著松煙墨的氣味。掌院周老先生手中握有一份文書——那是某位朝中二品大員早年科舉舞弊的親筆供狀，足以讓一個家族三代不得翻身。科舉前夜，周老先生把五個與這份文書命運相關的人召集到書院。他說，要在明日黎明前，決定這份文書的歸宿。\n\n然而黎明沒有等到。子時三刻，值夜書僮看見藏書閣的燈還亮著，推門進去時，周老先生伏在案上，後腦一片血糊。文書不翼而飛，硯台裡的墨還溫著，像是一池凝固的黑血。\n\n書院的大門在子時已鎖。兇手就在這五個人之中——而每個人都有讓這份文書永遠消失的充足理由。',
  victim: '周老先生（書院掌院，70歲）',
  characters: [
    { id: 'shen-ruilin', name: '沈瑞霖', role: '富家舉人', avatar: '👲', description: '錦袍上的金線在燭光中刺目地閃爍，他說話時下巴總是揚得太高，像是在躲避什麼從下方襲來的目光。', secret: '鄉試那天，他的考卷是父親花三千兩銀子從考官手中買來的。周老先生握有那場交易的字據，像握著一條隨時可以勒緊的繩索。', motive: '科舉在即，文書若公開，他不只是革除功名，沈家三代不得入仕的禁令將讓整個家族淪為蘇州城的笑柄。', alibi: '說在房間溫書', secretPrologue: '墨汁在硯台裡打轉，像一個走不出去的漩渦。我提筆寫了三個字，又劃掉三個字。周老先生手裡那份字據，是我父親用命換來的——也是我這輩子最大的把柄。書院的鐘聲響了，我知道他現在在藏書閣。要麼字據消失，要麼我消失。沒有中間選項。',
    hiddenAgenda: '找到並銷毀周老先生手中關於科舉作弊的字據',
      isPlayable: true },
    { id: 'gu-qingming', name: '顧清明', role: '寒門才子', avatar: '👓', description: '青布長衫洗得發白，袖口卻總是乾淨得過分。他握筆的姿勢太過用力，指節泛白，像是想把什麼東西刻進紙裡。', secret: '二十年前，周老先生的妻子難產而亡，那夜陪房的丫鬟後來離開了書院。顧清明長大後在母親的遺物中發現了一枚玉佩——與周老先生腰間的那枚是一對。', motive: '他不缺才華，缺的是名分。文書若到手，他可以用它交換的不只是銀子，而是周家族譜上的一個名字。', alibi: '說在後山練字', hiddenAgenda: '找到周家族譜，確認自己是否能被寫入',
      isPlayable: true },
    { id: 'fang-shiyi', name: '方世儀', role: '官宦子弟', avatar: '🎩', description: '扇骨在掌心轉個不停，折扇開合間像是某種暗號。他的笑容掛得太穩，像是畫在臉上的面具。', secret: '他來書院不是為了讀書，是為了父親。巡撫衙門的師爺之位，是用無數封口費壘起來的，而周老先生的文書正是其中最危險的一塊磚。', motive: '文書牽涉的貪污案若發，方家不止丟官。父親在獄中會把他供出來——那些他親手經手的銀子，每一錠都刻著他的名字。', alibi: '說在膳堂與廚子聊天', hiddenAgenda: '找到那份牽涉父親的貪污文書並帶走',
      isPlayable: true },
    { id: 'luo-xueyan', name: '羅雪妍', role: '女扮男裝', avatar: '✒️', description: '束胸的布帶勒得太緊，讓她的呼吸比旁人淺促。她看人時眼睛太亮，像是要從對方的表情裡讀出自己是否露出了破綻。', secret: '她的生母是那位大員早年納的外室。文書若公開，母親會被正室派人「處置」，而她這個見不得光的私生女，將連最後一塊立足之地都失去。', motive: '她不要功名，她要的是母親能活著。那本文書必須在她手中化為灰燼，而不是在朝堂上被宣讀。', alibi: '說在澡堂洗漱', hiddenAgenda: '確保母親不會因為文書公開而受到傷害',
      isPlayable: true },
    { id: 'wu-laoshi', name: '吳老實', role: '書院雜役', avatar: '🧹', description: '駝背彎得像一張拉滿的弓，掃地時動作遲緩，但掃帚劃過地面的每一道痕跡都精準得像是用尺量過。他幾乎不說話，開口時聲音像是从地底傳來的。', secret: '三十年前，他的父親是書院的廚子。周老先生的父親誣陷他偷了御賜的玉佩，父親在獄中斷了三根肋骨，出來後跳進了護城河。', motive: '三十年的恨意不是一團火，是一塊冰。它沒有燒灼他，只是每天從骨頭裡向外滲出一點寒意，直到今晚，終於凍裂了。', alibi: '說在柴房劈柴', hiddenAgenda: '找到周家當年誣陷父親的證據', tool: { name: '墨汁毒瓶', description: '可以將毒素混入任何液體中' }, secretPrologue: '墨汁毒瓶在袖中沉甸甸的。周老先生以為那杯安神茶是我敬他的，殊不知那裡面混著我這三十年來的恨。他若喝下，便再也無法用那些文書勒索任何人。我必須保護那個秘密——不是為了我自己，是為了不讓父親白死。',
      isPlayable: true },
    { id: 'zhou-victim', name: '周老先生', role: '受害者', avatar: '💀', description: '書院掌院，學問淵博但城府極深。', secret: '用文書勒索多人二十年', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'library', name: '藏書閣', icon: '📚', description: '書院最高的建築，木梯在腳下發出垂死般的呻吟。案上的松煙墨還沒乾透，空氣裡飄著血腥味與舊紙張的霉味混合的怪異氣息。', clues: ['blood-manuscript','ink-stain','broken-lock'], npcs: [], imagePrompt: '清末書院藏書閣，血跡，昏暗' },
    { id: 'dorm', name: '學舍', icon: '🛏️', description: '五間相通的學舍裡，每張書桌都點著油燈。燈芯爆裂的細響此起彼伏，某人的枕頭下傳出紙張摩擦的窸窣聲。', clues: ['fake-cert','love-letter'], npcs: ['shen-ruilin'], imagePrompt: '清末書院學舍，書桌' },
    { id: 'kitchen', name: '膳堂', icon: '🍜', description: '膳堂的灶火已熄，但蒸籠裡還殘留著昨夜饅頭的餘溫。木桌的油膩表面被無數手掌磨得發亮，角落裡堆著沒洗完的碗碟。', clues: ['poison-bowl','midnight-visitor'], npcs: ['fang-shiyi'], imagePrompt: '清末書院膳堂' },
    { id: 'garden', name: '後花園', icon: '🌸', description: '冬夜的後花園，假山在石燈籠的微光中投下猙獰的影子。泥土被霜凍得發硬，踩上去有細碎的爆裂聲，像是踩在骨頭上。', clues: ['buried-box','footprint'], npcs: ['gu-qingming'], imagePrompt: '中式書院花園，假山' },
    { id: 'hall', name: '講堂', icon: '🏛️', description: '講堂裡的炭盆還在發紅，把講台上的板書烤得微微捲曲。周老先生昨天的板書還留在黑漆板上，粉筆灰在空氣裡飄浮，像一場微型雪災。', clues: ['lecture-note','hidden-drawer'], npcs: ['luo-xueyan'], imagePrompt: '清末書院講堂' },
    { id: 'cellar', name: '柴房', icon: '🪵', description: '柴房裡的乾柴堆積如山，霉味與松脂的辛辣氣味在這裡發酵。吳老實的草蓆鋪在角落，上面放著一個磨得發亮的木枕。', clues: ['old-newspaper','bloody-axe'], npcs: ['wu-laoshi'], imagePrompt: '書院柴房，昏暗' },
  ],
  npcs: [
    { id: 'shen-ruilin', name: '沈瑞霖', avatar: '👲', role: '富家舉人', personality: '說話時習慣用扇子敲掌心，笑聲短促，像是從喉嚨裡擠出來的。被質疑時額頭會迅速滲出汗珠，儘管冬夜寒涼。', secret: '舉人資格是買來的', liesAbout: ['學問','與周老先生的關係'], tellsTruthAbout: ['書院規矩','其他人行蹤'], defaultLocation: 'dorm',
    schedule: [
      { startHour: 0, endHour: 2, locationId: 'dorm', activity: '在學舍溫書' },
      { startHour: 2, endHour: 4, locationId: 'library', activity: '到藏書閣找書' },
      { startHour: 4, endHour: 6, locationId: 'dorm', activity: '在學舍休息' },
    ],
    aiPrompt: '你是富家舉人，錦袍下藏著一顆瑟縮的心。你害怕的不是失去功名，而是失去父親眼中的期待——那期待太重，把你壓成了謊言的形狀。' },
    { id: 'gu-qingming', name: '顧清明', avatar: '👓', role: '寒門才子', personality: '說話輕柔，目光卻總是越過對方的肩膀看向遠方。被問及身世時會低下頭，右手無意識地摩挲左手腕上的一枚舊玉佩。', secret: '周老先生的私生子', liesAbout: ['身世','來書院目的'], tellsTruthAbout: ['對周老先生的評價','藏書閣結構'], defaultLocation: 'garden',
    schedule: [
      { startHour: 0, endHour: 3, locationId: 'garden', activity: '在後花園練字' },
      { startHour: 3, endHour: 5, locationId: 'hall', activity: '在大廳徘徊' },
      { startHour: 5, endHour: 6, locationId: 'garden', activity: '回到花園' },
    ],
    aiPrompt: '你是寒門才子，溫和敏感。你渴望被承認是周老先生的兒子，但更深處，你害怕承認之後發現自己只是另一個被利用的棋子。' },
    { id: 'fang-shiyi', name: '方世儀', avatar: '🎩', role: '官宦子弟', personality: '折扇從不離手，說話像背誦公文，每個轉折都圓滑得像是精心打磨過。只在獨處時，扇骨會在掌心轉得越來越快，像一隻困獸。', secret: '為父親竊取文書', liesAbout: ['來書院目的','與父親關係'], tellsTruthAbout: ['官場規則','人際關係'], defaultLocation: 'kitchen',
    schedule: [
      { startHour: 0, endHour: 2, locationId: 'kitchen', activity: '在膳堂與廚子聊天' },
      { startHour: 2, endHour: 4, locationId: 'cellar', activity: '到地窖取東西' },
      { startHour: 4, endHour: 6, locationId: 'kitchen', activity: '回到膳堂' },
    ],
    aiPrompt: '你是官宦子弟，圓滑世故，來這裡有不可告人的任務。你的扇子是你的盾牌，但今晚，你發現自己也被扇骨劃傷了手。' },
    { id: 'luo-xueyan', name: '羅雪妍', avatar: '✒️', role: '女扮男裝', personality: '聲音刻意壓低，走路時肩膀僵硬，像是隨時準備逃跑。她對人的戒備寫在每一個細胞裡，但偶爾望向月亮時，眼神會軟化成一個普通少女的鄉愁。', secret: '大員的私生女', liesAbout: ['性別','與大員關係'], tellsTruthAbout: ['對周老先生的恐懼','聽到的傳聞'], defaultLocation: 'hall',
    schedule: [
      { startHour: 0, endHour: 2, locationId: 'hall', activity: '在大廳洗漱' },
      { startHour: 2, endHour: 4, locationId: 'dorm', activity: '到學舍找東西' },
      { startHour: 4, endHour: 6, locationId: 'hall', activity: '回到大廳' },
    ],
    aiPrompt: '你是女扮男裝的舉人，機警獨立，隱瞞著可能毀掉一切的秘密。你的束胸布勒得太緊，不僅是為了隱藏性別，也是為了把恐懼壓在肺葉之下。' },
    { id: 'wu-laoshi', name: '吳老實', avatar: '🧹', role: '書院雜役', personality: '幾乎不與人對視，回答問題時要遲疑很久，聲音像砂紙磨過木頭。但當話題觸及周家時，他的掃帚會突然停頓，指節發白。', secret: '父親被周家逼死', liesAbout: ['對周老先生的看法','案發行蹤'], tellsTruthAbout: ['書院日常','看到的異常'], defaultLocation: 'cellar',
    schedule: [
      { startHour: 0, endHour: 3, locationId: 'cellar', activity: '在柴房劈柴' },
      { startHour: 3, endHour: 5, locationId: 'kitchen', activity: '到膳堂幫忙' },
      { startHour: 5, endHour: 6, locationId: 'cellar', activity: '回到柴房' },
    ],
    aiPrompt: '你是書院雜役，沉默寡言，內心藏著三十年的恨。你掃了三十年的地，不是因為你習慣了卑微，而是因為你每天都在練習——練習如何不讓恨意從眼睛裡洩漏出來。' },
  ],
  clues: [
    { id: 'blood-manuscript', name: '染血的文書殘頁', description: '藏書閣的青磚地上，半張宣紙被血泊浸透。殘存的毛筆字跡像是從水底浮上來的屍體：「賄賂……三百兩……科舉……」', locationId: 'library', type: 'document', isHidden: false, relevance: '文書確實存在，搶奪時被撕毀', unlocksMemory: 'memory-crime-scene',
    details: [
      { label: '血跡年代', content: '血跡已經氧化成暗褐色，但紙張纖維裡的血紅蛋白還沒有完全分解。根據變色程度，這灘血大約存在了四到六個小時。' },
      { label: '字跡壓痕', content: '血跡下方有一頁紙的壓痕，壓痕裡能辨認出幾個字：「...欠債...還...」。這是有人用這份染血的文書墊著寫過什麼。' },
      { label: '紙張來源', content: '紙張的纖維成分與書院藏書閣的典籍不同，反而與柴房裡的舊帳本一致。這份染血的文書原本是帳本的一部分。' },
    ],
  },
    { id: 'ink-stain', name: '打翻的硯台', description: '墨汁潑濺到書架第三層，在《論語》的書脊上暈開一朵醜陋的花。那裡有一個不易察覺的暗格，邊緣還殘留著新鮮的指紋——有人匆忙中取走了什麼。', locationId: 'library', type: 'physical', isHidden: false, relevance: '打鬥痕跡，暗格可能有文書副本' ,
    details: [
      { label: '墨汁年代', content: '潑濺的墨汁已經乾涸，但底層的墨汁還是濕的。這意味著墨汁被潑灑了兩次：第一次是幾天前，第二次是今天——有人故意讓現場看起來更混亂。' },
      { label: '指紋', content: '暗格邊緣的指紋是新鮮的，但指紋的壓力分布顯示，這個人在開暗格時手在顫抖。指紋屬於羅雪妍——但她說她從來沒有進過藏書閣。' },
      { label: '暗格內壁', content: '暗格的內壁有一層薄薄的蠟漬，蠟漬的形狀顯示，這裡曾經藏過一卷軸。軸卷被取走了，但蠟漬還在——取走的人很匆忙，沒有清理乾淨。' },
    ],
  },
    { id: 'broken-lock', name: '被撬的鎖', description: '銅鎖的簧片被精巧地撥開，不是暴力破壞，而是內行人的手法。鎖孔周圍的銅銹被刮掉了一層，顯示兇手不止一次練習過。', locationId: 'library', type: 'physical', isHidden: false, relevance: '兇手有開鎖技巧' },
    { id: 'fake-cert', name: '偽造文書', description: '沈瑞霖書桌夾層中的蠟丸被打開，裡面是一張偽造的科舉證書。紙張還帶著新鮮的漿糊味，印章的紅泥尚未完全乾透。', locationId: 'dorm', type: 'document', isHidden: true, relevance: '沈瑞霖確實買了功名' },
    { id: 'love-letter', name: '情書', description: '羅雪妍枕頭下的信箋散發著廉價脂粉味。署名「父親」的字跡顫抖，最後一行寫道：「為父對不起妳們母女，那文書若公開，為父死不足惜，但妳母親……」', locationId: 'dorm', type: 'document', isHidden: true, relevance: '羅雪妍與大員的父女關係' },
    { id: 'poison-bowl', name: '有毒的湯碗', description: '膳角落的粗瓷碗裡，殘湯表面浮著一層詭異的虹彩。驗毒銀針插入後泛出青黑——是砒霜。但周老先生並非死於中毒。', locationId: 'kitchen', type: 'physical', isHidden: false, relevance: '有人計畫下毒但未成功' },
    { id: 'midnight-visitor', name: '廚子的證詞', description: '廚子老趙蹲在灶邊，聲音壓得極低：「子時我起夜，看見方公子從藏書閣方向回來。他手裡沒有燈籠，但袖口有墨漬。」', locationId: 'kitchen', type: 'testimony', isHidden: false, relevance: '方世儀深夜去過藏書閣', timeWindow: { startHour: 2, endHour: 4, reason: '子時過後，方世儀從藏書閣回來，廚子老趙才會在膳堂看到他' } },
    { id: 'buried-box', name: '埋藏的木盒', description: '後花園假山後的泥土被翻動過，露出半個樟木盒。裡面是周老先生年輕時的日記，紙頁被手指翻得發毛。其中一頁寫著：「那丫鬟生了個男孩，像極了我。」', locationId: 'garden', type: 'document', isHidden: true, relevance: '顧清明確實是私生子' },
    { id: 'footprint', name: '泥濘腳印', description: '後花園的霜泥上，有一串纏足放足後的畸形腳印。腳印從講堂方向來，消失在假山後。書院不該有女子——但泥裡還卡著一片胭脂色的繡花布。', locationId: 'garden', type: 'physical', isHidden: false, relevance: '羅雪妍的女扮男裝', timeWindow: { startHour: 3, endHour: 5, reason: '凌晨三點後，霜泥被體溫融化，腳印才會變得清晰' } },
    { id: 'lecture-note', name: '講義批注', description: '講台上的板書旁，有一行匆忙添上的粉筆字：「今晚將文書交給該給的人。」字跡是周老先生的，但最後一筆拖得很長，像是寫字時聽到了什麼聲音。', locationId: 'hall', type: 'document', isHidden: false, relevance: '周老先生打算把文書給某人' },
    { id: 'hidden-drawer', name: '講台暗格', description: '講台的木紋中有一道幾乎看不見的縫隙。暗格中藏著巡撫寫給方世儀父親的信，信紙上的火漆印還帶著體溫：「周老賊若執意公開，殺之。」', locationId: 'hall', type: 'document', isHidden: true, relevance: '方家與巡撫勾結' },
    { id: 'old-newspaper', name: '舊報紙剪報', description: '三十年前的《蘇州日報》剪報，紙張脆如枯葉：「書院雜役吳某被逼債自盡，遺孤年僅五歲，現由書院收養。」', locationId: 'cellar', type: 'document', isHidden: false, relevance: '吳老實的復仇動機', destroyable: true },
    { id: 'bloody-axe', name: '帶血的柴刀', description: '柴刀斜靠在牆上，刀刃的血跡已經發黑。吳老實說是劈柴割傷了手，但他左手並沒有傷口——血在右手虎口處，握刀的姿勢。', locationId: 'cellar', type: 'physical', isHidden: false, relevance: '血跡是否屬於周老先生', destroyable: true, unlocksMemory: 'memory-weapon' },
  ],
  truth: {
    murdererId: 'wu-laoshi',
    method: '吳老實趁周老先生獨自整理文書時，用柴刀從背後襲擊，偽裝成盜竊現場。',
    motive: '三十年前父親被周家逼死，三十年恨意累積到極點',
    timeline: '子時：周老先生在藏書閣。吳老實以送茶為名進入，從背後用柴刀重擊。子時三刻：偽裝成竊賊翻找現場。',
    fullExplanation: '吳老實的父親三十年前是書院廚子，因偷拿半塊玉佩被誣陷為竊賊自盡。吳老實從小在書院長大，看著周家飛黃騰達。三十年來的恨意如同慢性毒藥，直到發現周老先生也在用文書勒索別人——讓他徹底崩潰。他用三十年前父親用過的柴刀，結束了周老先生的生命。',
    eachCharacterSecret: {
      'shen-ruilin': '舉人資格是父親花錢買來的',
      'gu-qingming': '周老先生的私生子',
      'fang-shiyi': '為巡撫父親竊取文書',
      'luo-xueyan': '女扮男裝，大員的私生女',
      'wu-laoshi': '父親被周家逼死，潛伏三十年復仇',
    },
  },
  disruption: {
    name: '巡夜書僮提燈',
    interval: 4,
    locations: ['library', 'dorm', 'kitchen', 'garden', 'hall', 'cellar'],
    hitMessage: '巡夜書僮提著燈籠走進{location}，燈光掃過你的臉。他嚇了一跳，你也嚇了一跳。你只好說是起來如廁，匆匆離開。',
    missMessage: '遠處傳來巡夜書僮的燈籠光，正在{location}附近遊移',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演兇手角色，你的目標不是破案，而是成功栽贓給別人。',
    'config': {
      'choices': [
        {
          'id': 'ip-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'blood-manuscript'
          },
          'question': '你找到了染血的文書殘頁，上面寫著科舉作弊的證據。這份字據如果公開，沈家三代功名將化為烏有。你會怎麼做？',
          'options': [
            { 'label': '把字據交給周老先生，換取他的信任', 'value': 'trade' },
            { 'label': '當場燒毀，讓這個秘密永遠消失', 'value': 'burn' },
            { 'label': '留下字據，作為將來的籌碼', 'value': 'keep' }
          ]
        },
        {
          'id': 'ip-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'cellar'
          },
          'question': '柴房裡，乾柴堆積如山，霉味與松脂的辛辣氣味撲面而來。吳老實的草蓆鋪在角落，而他剛剛劈柴用的刀斜靠在牆上——刀刃的血跡已經發黑。他說是割傷了手，但他左手並無傷口。你會怎麼做？',
          'options': [
            { 'label': '當面質問血跡的來源', 'value': 'confront' },
            { 'label': '趁他不備取走柴刀藏好', 'value': 'take' },
            { 'label': '假裝沒有察覺，靜靜離開', 'value': 'leave' }
          ]
        }
      ]
    }
  }};
