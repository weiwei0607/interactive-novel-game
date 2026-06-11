import type { Story } from '../../../types/game';

export const goldenHallStory: Story = {
  id: 'golden-hall',
  title: '鎏金喜堂',
  subtitle: '大喜之日，新娘父親死於新房',
  era: '民國',
  setting: '上海灘顯赫大家族沈公館',
  hasPrologue: true,
  prologueSynopsis:
    `民國二十六年臘月，沈公館的紅燈籠從門口掛到了後巷。今晚是婚禮前夜的家族晚宴，大小姐沈婉容穿著一身藕荷色的旗袍，坐在父親沈老爺身邊，臉上掛著練習過無數次的微笑。賓客不多，都是至親和幾位與沈家生意往來密切的友人。\n\n沈老爺舉杯時，手腕上的翡翠鐲子在燈光下晃出一道綠光。他說：「婉容的婚事，是沈家今年最大的喜事。」沒有人注意到，新娘的笑容在觸及趙世凱的目光時，微微僵硬了一瞬。三姨太坐在末席，桃紅色的旗袍在滿堂大紅中顯得格格不入；福伯端著酒壺，像一尊被擦得發亮的古董家具，在賓客間穿梭。\n\n攝影師你在花園的暗房裡沖洗著白天拍的照片，聽著前廳傳來的碰杯聲和笑語。紅燭搖曳，喜字貼滿了每一扇門。這是一個應該被記錄下來的夜晚——每個人都這麼想。`,
  synopsis:
    '民國二十六年臘月，沈公館的紅燈籠從門口掛到了後巷。大小姐沈婉容的婚禮是這個冬天上海灘最熱鬧的盛事，賓客名單上的名字加起來，足夠買下半個租界。然而當鑼鼓聲漸漸散去，當最後一批醉客被扶上黃包車，有人發現新娘的父親沈老爺沒有出來送客。\n\n新房裡的紅燭還在燃燒，燭淚堆積成奇異的形狀。沈老爺仰面倒在鋪滿紅綢的婚床上，胸口插著一把水果刀。他還穿著那身量身訂製的壽字圖案長袍，嘴角甚至還掛著方才舉杯時的笑意——彷彿死亡來得太快，他的表情還來不及換。\n\n婚禮攝影師的相機，記錄下了每個人的表情。但在最後一張照片裡，沈老爺的瞳孔中倒映著一個模糊的身影——那個身影，此刻就站在喜堂之中。',
  victim: '沈老爺（沈公館主人，60歲）',
  characters: [
    { id: 'photographer', name: '你（攝影師）', role: '婚禮攝影師', avatar: '📷', description: '你的手指總是無意識地摩挲相機的過片扳手，像是一種無法戒掉的抽搐。當你看著沈老爺時，目光不像在看一個僱主，而像是在對焦一個遙遠的幻影。', secret: '你母親是沈老爺年輕時在蘇州納的外室。她臨終前把一張照片塞進你手裡，上面的男人穿著長衫，懷裡抱著一個嬰兒——那個嬰兒的左肩有一塊胎記，與你的一模一樣。', motive: '三個月前，你在暗房裡沖洗完最後一組照片，鼓起勇氣給沈公館寫了一封信。回信只有八個字：「外室之子，不得入譜。」', alibi: '說在花園暗房洗照片', secretPrologue: '暗房的紅燈像一顆停滯的心臟。我把顯影液倒進瓷盤，看著沈婉容的臉從白色中浮現出來——她笑得太美了，美到讓我想起另一張照片。那張照片裡，沈老爺年輕時站在蘇州的橋上，身邊是一個不該存在的人。今晚，我要找到那張照片的底片。',
    hiddenAgenda: '找到沈老爺年輕時在蘇州的照片',
      isPlayable: true },
    { id: 'bride', name: '沈婉容', role: '新娘', avatar: '👰', description: '鳳冠下的臉色蒼白得像一張漂洗過度的底片，唇上的胭脂紅得過分，像是一個被強行畫上去的微笑。她的手指一直絞著嫁衣的袖口，把那匹價值連城的蘇繡揉得發皺。', secret: '她枕頭下的情書上寫著：「婉容，今晚子時，後門見。我帶你走。」署名「明」。那個「明」是她青梅竹馬的戲班琴師，而她今晚要嫁的，是一個她只見過三次的男人。', motive: '父親在三天前把那份「婚前協議」放在她面前時說：「妳的婚事，換來的是趙家銀行的三千萬貸款擔保。這是妳的價值，也是妳的義務。」', alibi: '說在閨房與伴娘說話', hiddenAgenda: '找到琴師「明」寫給她的情書並帶走',
      isPlayable: true },
    { id: 'groom', name: '趙世凱', role: '新郎', avatar: '🤵', description: '禮服的領結打得一絲不苟，但他的目光從未在新娘身上停留超過三秒。他說話時習慣用右手整理袖扣，那動作太過頻繁，像是在確認某種束縛還在。', secret: '他與沈老爺之間有一份沒有簽字的口頭協議：趙家銀行為沈家的紡織廠提供貸款，條件是這場婚姻，以及沈老爺手中那塊黃浦江邊的地皮。', motive: '沈老爺昨天深夜把他叫到書房，遞過一份文件：「這是婚前協議的補充條款，簽了它，否則婚禮取消，貸款也取消。」那份條款裡有一條：若沈老爺去世，地皮歸趙家，但沈婉容有權隨時撤銷這筆交易。', alibi: '說在前廳招待賓客', hiddenAgenda: '確保婚前協議的補充條款對自己有利',
      isPlayable: true },
    { id: 'concubine', name: '三姨太', role: '沈老爺的妾', avatar: '💋', description: '她穿著不合時宜的桃紅色旗袍，在滿堂的大紅色中顯得刺眼。她的笑容太過嫵媚，嘴角彎曲的弧度像是用尺量過的，但眼睛裡沒有溫度，只有一種被長期囚禁的動物才有的警覺。', secret: '她與趙世凱的私情始於三個月前的一次牌局。趙世凱的手在桌下握住她的膝蓋時，她沒有躲開——不是因為心動，是因為她認出了那雙眼睛裡的東西：與她自己一模一樣的絕望。', motive: '沈老爺昨天早上在她梳妝台的抽屜裡發現了一枚袖扣——趙世凱的。他什麼都沒說，只是讓管家福伯傳話：「婚禮結束後，三姨太搬去蘇州的別墅『靜養』。」那棟別墅，上個月剛剛發生過一場「意外」火災。', alibi: '說在廚房監督喜宴', hiddenAgenda: '找到趙世凱遺失在梳妝台的那枚袖扣',
      isPlayable: true },
    { id: 'butler', name: '福伯', role: '管家', avatar: '🧤', description: '他在沈家四十年，駝背彎得像一張被歲月拉滿的弓。他端茶時手不會抖，說話時眼簾低垂，像是一尊被擦得發亮的古董家具。但當他獨自站在走廊盡頭時，目光會穿過窗戶，望向某個不存在於上海灘的方向。', secret: '他原名叫周福，二十年前是上海灘實業家周明遠的父親。周明遠的工廠被沈老爺用卑劣手段吞併後，從百樂門的頂樓一躍而下。福伯花了三年時間接近沈家，又花了十七年時間成為「福伯」——一個沈老爺連正眼都不會看的影子。', motive: '沈老爺昨天在書房裡對趙世凱說：「福伯這條老狗，知道太多事了。婚禮結束後，找個由頭把他送到蘇州『養老』。」福伯站在門外，端著茶盤，聽得一清二楚。', alibi: '說在酒窖取酒', hiddenAgenda: '找到沈老爺當年吞併周家工廠的證據',
      secretPrologue: `你記得自己站在新房裡，手裡握著某種冰冷的東西。紅燭的光在沈老爺臉上搖晃，他的壽字長袍已經被染成了另一種紅色。你不確定那是不是你，但鏡子裡的影子正低頭看著他——那個影子，已經等了二十年。`,
      tool: { name: '銀製餐具', description: '可以將指紋轉移到任何光滑表面' },
      isPlayable: true },
    { id: 'shen-master', name: '沈老爺', role: '受害者', avatar: '💀', description: '沈公館主人。', secret: '用女兒的婚姻換取商業利益，同時壓迫多人', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'new-room', name: '新房', icon: '🛏️', description: '紅燭高照的新房裡，燭火將喜字剪紙的影子投射在帳幔上，像是一場無聲的皮影戲。沈老爺倒在婚床上，身上的壽字長袍被血浸透，暗紅與大紅交織成一種說不出的詭異色調。空氣裡飄著燭蠟的甜膩與血的鐵鏽味。', clues: ['red-candle','wedding-wine'], npcs: [], imagePrompt: '民國新房，紅燭，婚床，喜服' },
    { id: 'garden', name: '花園暗房', icon: '🌹', description: '花園角落的臨時暗房裡，紅燈泡發出曖昧的光。顯影液的氣味酸澀刺鼻，掛著的底片在微風中輕輕晃動，像是一排排等待宣判的幽靈。你的相機還架在三腳架上，鏡頭裡還殘留著最後一張照片的餘溫。', clues: ['photo-negative','developing-tray'], npcs: ['photographer'], imagePrompt: '民國花園，暗房，底片' },
    { id: 'boudoir', name: '閨房', icon: '🪞', description: '新娘的閨房裡，梳妝台上還放著沒來得及戴的翡翠頭飾。胭脂盒敞開著，粉撲上殘留著半個指印。空氣裡飄著桂花頭油與淚水的鹹味混合的氣息，那是所有被迫出嫁的女子都熟悉的氣味。', clues: ['love-letter-bride','makeup-stain'], npcs: ['bride'], imagePrompt: '民國閨房，梳妝台，頭飾' },
    { id: 'hall', name: '前廳', icon: '🏛️', description: '賓客散去的前廳裡，滿地紅紙屑和摔碎的酒杯。炭火盆還在發出細微的爆裂聲，把空氣烤得乾燥而灼熱。某個角落裡，一支尚未燃盡的喜煙在菸灰缸裡默默自燃，煙霧筆直升起，像是一根灰色的手指。', clues: ['business-contract','guest-list'], npcs: ['groom'], imagePrompt: '民國大廳，紅紙屑，酒杯' },
    { id: 'kitchen', name: '廚房', icon: '🍲', description: '喜宴後的廚房像是剛剛經歷過一場戰役。還沒收拾的碗盤堆積如山，油膩的湯汁在地面結成一層薄膜。灶火已熄，但蒸籠裡還殘留著紅燒肉的甜膩與紹興酒的酸腐混合的氣息。', clues: ['poison-bottle-wine','kitchen-witness'], npcs: ['concubine'], imagePrompt: '民國廚房，喜宴殘渣' },
    { id: 'cellar', name: '酒窖', icon: '🍾', description: '陰涼的酒窖裡，茅台的醬香與潮濕的石灰味在這裡沉澱。沈老爺珍藏的「賴茅」少了一瓶，空出的位置積著薄灰，像是一顆被拔掉的牙齒留下的空洞。', clues: ['wine-bottle','old-newspaper-cellar'], npcs: ['butler'], imagePrompt: '民國酒窖，茅台，昏暗' },
  ],
  npcs: [
    { id: 'bride', name: '沈婉容', avatar: '👰', role: '新娘', personality: '說話輕柔得像在背誦台詞，每個句子都經過精心修飾。被問及父親時，她的手指會下意識地摸向嫁衣的袖口——那裡有一道新鮮的撕裂痕跡。', secret: '愛的是另一個人，婚姻是被迫的', liesAbout: ['對婚姻的真實感受','與另一個人的關係'], tellsTruthAbout: ['對父親的複雜感情','她看到的異常'], defaultLocation: 'boudoir',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'boudoir', activity: '在閨房化妝' },
      { startHour: 18, endHour: 20, locationId: 'new-room', activity: '在新房準備' },
      { startHour: 20, endHour: 22, locationId: 'boudoir', activity: '回到閨房' },
      { startHour: 22, endHour: 24, locationId: 'new-room', activity: '在新房' },
    ],
    aiPrompt: '你是被迫嫁人的新娘，溫柔憂鬱。你的父親用你換取了商業利益，而你甚至不知道那個將與你共度一生的男人，是否記得你的名字。' },
    { id: 'groom', name: '趙世凱', avatar: '🤵', role: '新郎', personality: '語速不快，每個字都像是經過算盤核算。被質疑時不會提高音量，只會微微眯起眼睛，像是在重新評估對方的價值。他的笑容從不觸及眼角。', secret: '與沈老爺有秘密商業協議', liesAbout: ['對新娘的感情','來沈家的真正目的'], tellsTruthAbout: ['商業上的觀察','他注意到的人際關係'], defaultLocation: 'hall',
    schedule: [
      { startHour: 16, endHour: 20, locationId: 'hall', activity: '在前廳招待賓客' },
      { startHour: 20, endHour: 22, locationId: 'cellar', activity: '到酒窖取酒' },
      { startHour: 22, endHour: 24, locationId: 'hall', activity: '回到前廳' },
    ],
    aiPrompt: '你是精明的新郎，婚姻是商業協議的一部分。你對這場鬧劇有自己的盤算，但你沒想到，盤算裡最重要的那枚棋子，會在婚禮當晚被從棋盤上抹去。' },
    { id: 'concubine', name: '三姨太', avatar: '💋', role: '沈老爺的妾', personality: '笑聲嬌媚，眼神卻像一把淬了毒的匕首。她說話時喜歡用手背輕觸對方的手臂，但那觸碰沒有溫度，像是在測量對方的脈搏。', secret: '與趙世凱有私情', liesAbout: ['與趙世凱的關係','她的真實意圖'], tellsTruthAbout: ['對沈老爺的評價','她聽到的傳聞'], defaultLocation: 'kitchen',
    schedule: [
      { startHour: 16, endHour: 19, locationId: 'kitchen', activity: '在廚房監督喜宴' },
      { startHour: 19, endHour: 21, locationId: 'hall', activity: '到前廳觀禮' },
      { startHour: 21, endHour: 24, locationId: 'kitchen', activity: '回到廚房' },
    ],
    aiPrompt: '你是年輕的姨太，嬌媚但孤獨。你與新郎有著不可告人的秘密。你習慣用自己的身體當籌碼，但今晚你發現，這個賭桌上有人已經掀了桌。' },
    { id: 'butler', name: '福伯', avatar: '🧤', role: '管家', personality: '說話時眼簾低垂，聲音平穩得像一潭死水。但當話題觸及沈家的「舊事」時，他的手指會在背後交握，指節發白。他從不主動提起蘇州。', secret: '沈老爺害死的對手的父親', liesAbout: ['對沈老爺的忠誠','他的真實身份'], tellsTruthAbout: ['沈家的歷史','他看到的異常'], defaultLocation: 'cellar',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'cellar', activity: '在酒窖取酒' },
      { startHour: 18, endHour: 20, locationId: 'hall', activity: '到前廳招呼' },
      { startHour: 20, endHour: 22, locationId: 'cellar', activity: '回到酒窖' },
      { startHour: 22, endHour: 24, locationId: 'hall', activity: '在前廳收尾' },
    ],
    aiPrompt: '你是老管家，沉穩老練。你在沈家四十年，見證了所有的罪與罰。你端茶時手不會抖，因為你已經練習了四十年——練習如何在端茶的時候，不把茶水潑在仇人的臉上。' },
  ],
  clues: [
    { id: 'red-candle', name: '燃盡的紅燭', description: '新房案上的紅燭已經燃到底部，燭淚堆積成一座小小的紅色山丘。根據這種尺寸的蠟燭燃燒速度，兇手在此停留了至少兩個小時——或者，沈老爺在死前已經獨自在這裡等待了很久。', locationId: 'new-room', type: 'physical', isHidden: false, relevance: '兇手在新房停留了至少兩小時', unlocksMemory: 'memory-scene', timeWindow: { startHour: 18, endHour: 20, reason: '傍晚六點到八點，紅燭剛點燃，蠟油還沒有滴落太多' } ,
    details: [
      { label: '蠟燭芯', content: '蠟燭芯的燒灼端有兩種顏色：外層是正常燃燒的黑色，內芯卻是紅褐色的——那是被人為浸泡過某種油脂的痕跡。' },
      { label: '蠟油滴落', content: '蠟油在燭台上凝固成奇特的形狀，像是一隻張開的手。滴落的軌跡顯示，蠟燭曾被劇烈搖晃過——或者，有人拿著它追趕過什麼。' },
      { label: '氣味', content: '熄滅的蠟燭散發著一股極淡的苦杏仁味，混在婚禮用的檀香裡幾乎無法察覺。這不是普通蠟燭該有的氣味。' },
    ],
  },
    { id: 'wedding-wine', name: '交杯酒殘液', description: '新房桌上的合巹酒杯裡，殘液在燭光下泛著詭異的虹彩。銀針試毒後泛出青黑——是砒霜。但沈老爺並非死於中毒，他的死因是胸口的刀傷。', locationId: 'new-room', type: 'physical', isHidden: false, relevance: '有人計畫下毒但未成功', unlocksMemory: 'memory-poison', timeWindow: { startHour: 20, endHour: 22, reason: '晚上八點後，賓客散去，喜酒才被端到新房' } ,
    details: [
      { label: '酒杯指紋', content: '合巹酒杯的外壁只有一組指紋——沈老爺的。新娘的酒杯上沒有指紋，像是被人用布擦過，或者，新娘根本沒有碰過這杯酒。' },
      { label: '酒液分層', content: '酒杯裡的殘液分為兩層：上層是清澈的酒，下層是混濁的沉澱。砒霜被放在沉澱層——兇手知道沈老爺習慣一飲而盡，不會注意到杯底的異樣。' },
      { label: '杯底刻字', content: '酒杯底部刻著「百年好合」四個字，但刻字的筆劃裡嵌著一點暗紅色的污漬。這不是今天的酒漬——是幾天前的血跡，被人用酒精擦拭過，但沒有完全清除。' },
    ],
  },
    { id: 'photo-negative', name: '底片', description: '你的底片中有一張照片，拍攝於婚禮開始前一小時。畫面裡，三姨太與趙世凱在花園的假山後親密交談，趙世凱的手正放在她的腰上——那隻手剛剛還在為新娘整理頭紗。', locationId: 'garden', type: 'document', isHidden: false, relevance: '三姨太與新郎有私情' },
    { id: 'developing-tray', name: '顯影液', description: '暗房裡的顯影液被人動過手腳，酸度被人為提高。部分底片已經完全損毀，乳劑層剝落如蛻皮。損毀的底片恰好是婚禮前半小時拍攝的「後台花絮」。', locationId: 'garden', type: 'physical', isHidden: false, relevance: '有人想銷毀證據' },
    { id: 'love-letter-bride', name: '情書', description: '閨房枕頭下的信箋，字跡潦草得像是在顫抖中寫就：「婉容，今晚子時，後門見。我帶你走。」署名「明」。信紙的邊緣被淚水浸得發皺，像是被反覆讀過無數遍。', locationId: 'boudoir', type: 'document', isHidden: true, relevance: '新娘計畫私奔' },
    { id: 'makeup-stain', name: '妝容淚痕', description: '新娘的妝容有明顯的淚痕，睫毛膏暈開成兩道黑色的溪流，在蒼白的臉頰上劃出詭異的軌跡。但她說那是喜極而泣——沒有人喜極而泣時會咬破自己的嘴唇。', locationId: 'boudoir', type: 'physical', isHidden: false, relevance: '新娘在婚禮上哭過' },
    { id: 'business-contract', name: '商業協議', description: '前廳垃圾桶中的協議草稿，紙張被揉成團又展開。條款顯示沈老爺將半數家產作為嫁妝交給趙世凱，條件是趙家銀行提供三千萬貸款擔保，以及黃浦江邊那塊地皮的優先開發權。', locationId: 'hall', type: 'document', isHidden: false, relevance: '這場婚姻是一筆巨大的商業交易' },
    { id: 'guest-list', name: '賓客名單', description: '賓客名單上有一個被墨筆劃掉的名字：「周明遠」——新娘情書中的「明」。劃掉的筆跡是沈老爺的，力透紙背，像是要把這個名字從世界上抹去。', locationId: 'hall', type: 'document', isHidden: true, relevance: '新娘的情人原本在賓客名單上' },
    { id: 'poison-bottle-wine', name: '毒酒瓶', description: '廚房角落的茅台瓶中殘留砒霜，瓶身的標籤與酒窖裡失蹤的那瓶完全一致。但這瓶酒從未上桌——它原本是要被放進新房的交杯酒壺裡的。', locationId: 'kitchen', type: 'physical', isHidden: false, relevance: '有人準備了毒酒但未使用' },
    { id: 'kitchen-witness', name: '廚娘的證詞', description: '廚娘蹲在灶邊，手裡還攥著一把蔥：「開席前我回來取蒸籠，看見三姨太獨自進了酒窖。她出來時，手裡拿著一瓶茅台，袖子裡還掉出一片紙屑。」', locationId: 'kitchen', type: 'testimony', isHidden: false, relevance: '三姨太有機會接觸酒' },
    { id: 'wine-bottle', name: '少了一瓶茅台', description: '酒窖的出入簿上記載，沈老爺珍藏的民國十五年「賴茅」少了一瓶。但無論如何翻找，都看不見那個應該存在的空瓶——它像是憑空消失了。', locationId: 'cellar', type: 'physical', isHidden: false, relevance: '那瓶酒去了哪裡', destroyable: true },
    { id: 'old-newspaper-cellar', name: '舊報紙', description: '二十年前的《申報》剪報，藏在酒窖的一個破木箱裡：「實業家周明遠被沈某逼破產自盡，遺孤下落不明。」報紙的邊緣有人用指甲掐出了一排月牙形的痕跡。', locationId: 'cellar', type: 'document', isHidden: false, relevance: '福伯的真實身份與動機', destroyable: true },
  ],
  truth: {
    murdererId: 'butler',
    method: '福伯趁沈老爺獨自在新房檢查嫁妝時，用藏在袖中的匕首刺殺，然後將現場佈置成新娘與情人私奔的假象。',
    motive: '沈老爺二十年前逼死了他的兒子',
    timeline: '婚禮結束後：沈老爺獨自到新房檢查嫁妝。福伯以「有要事稟報」為名進入，用匕首刺殺。然後將一封偽造的情書放在桌上，製造新娘私奔的假象。',
    fullExplanation: '福伯原名周福，二十年前他的兒子周明遠是上海的實業家，因為與沈老爺商業競爭被對方用卑劣手段逼破產，最終自盡。福伯為了接近沈老爺，化名進入沈家當管家，一待就是二十年。他看著沈老爺作惡多端，用女兒換取利益，終於在這個大喜之日動手。他精心佈置了現場，意圖讓新娘背黑鍋。',
    eachCharacterSecret: {
      'photographer': '沈老爺流落在外的私生子',
      'bride': '愛的是另一個人，婚姻是被迫的',
      'groom': '與沈老爺有秘密商業協議',
      'concubine': '與趙世凱有私情',
      'butler': '沈老爺害死的對手的父親',
    },
  },

  disruption: {
    name: '福伯巡視',
    interval: 4,
    locations: ['new-room', 'garden', 'boudoir', 'hall', 'kitchen', 'cellar'],
    hitMessage: '福伯推開{location}的門，手裡端著茶盤。「這裡不該有人。」他的目光像一把舊刀。你只好退出去。',
    missMessage: '福伯的腳步聲從{location}傳來，茶盤上的瓷杯輕輕碰撞',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演福伯，你就是殺害沈老爺的兇手。',
    'config': {
      'choices': [
        {
          'id': 'gh-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'photo-negative'
          },
          'question': '你在暗房裡找到了那張底片。顯影後，你看到了沈老爺年輕時在蘇州橋上的照片——他身邊站著一個女人，那個女人長得和你母親一模一樣。你會怎麼做？',
          'options': [
            { 'label': '把照片公開，讓所有人知道真相', 'value': 'reveal' },
            { 'label': '燒掉底片，保護母親的名譽', 'value': 'burn' },
            { 'label': '拿著照片去找沈婉容談判', 'value': 'negotiate' }
          ]
        },
        {
          'id': 'gh-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'cellar'
          },
          'question': '酒窖的陰涼裡，茅台的醬香與潮濕的石灰味混雜。你發現沈老爺珍藏的「賴茅」少了一瓶，而福伯就站在空出的位置旁邊，背影在昏暗中微微發顫。這裡還藏著二十年前的報紙剪報——關於一個叫周明遠的人。你會怎麼做？',
          'options': [
            { 'label': '當面質問福伯與周明遠的關係', 'value': 'confront' },
            { 'label': '悄悄取走舊報紙，留作後用', 'value': 'take' },
            { 'label': '裝作不經意地離開', 'value': 'leave' }
          ]
        }
      ]
    }
  }};
