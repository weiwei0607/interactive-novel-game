import type { Story } from '../../../types/game';

export const trainCarriageStory: Story = {
  id: 'train-carriage',
  title: '第十三節車廂',
  subtitle: '夜行的滬昆鐵路，密閉空間裡的生死局',
  era: '民國',
  setting: '滬昆鐵路夜車，第十三節臥鋪車廂',
  synopsis:
    '民國二十三年，滬昆線的夜車像一條鐵灰色的巨蟒，在江南的冬霧中無聲穿行。第十三節臥鋪車廂的六位乘客，各自懷揣著不能見光的身份與秘密。車輪與鐵軌的撞擊聲像是某種古老咒語的節拍，催著人入夢，也催著人醒來。\n\n凌晨三點，列車穿越一段隧道時，燈光突然熄滅。黑暗中傳來一聲悶響，像是什麼重物傾倒。燈再亮起時，列車長老趙已經仰面倒在行李房裡，喉結處有一道紫紅的勒痕。行李房的門從內部反鎖，唯一的氣窗玻璃碎裂，寒風從缺口灌入，吹得煤油燈的火焰瘋狂搖曳。\n\n車還在行駛。下一站是六小時後的鷹潭。在這節搖晃的鐵皮盒子裡，五個乘客面面相覷——殺手就在他們中間，而每個人都有讓老趙永遠閉嘴的理由。',
  hasPrologue: true,
  prologueSynopsis:
    `民國二十三年的冬夜，滬昆線像一條疲倦的蛇，在江南的霧氣中緩緩爬行。第十三節臥鋪車廂裡，六盞煤油燈在頂棚上輕輕搖晃，把每個人的臉都照成明暗不定的地圖。

列車長老趙推開車廂門，手裡的查票夾啪地一聲合上。「各位，還有三站就到鷹潭。」他的聲音沙啞但洪亮，像一台保養良好的蒸汽機，「需要熱水的舉手，我讓餐車送來。」

六個乘客各自佔據著車廂的一角。有人在看書，有人在打牌，有人望著窗外飛逝的黑暗。車輪與鐵軌的撞擊聲是一種催眠的節奏，讓人放鬆警惕，讓人忘記自己身處一個無法逃離的移動鐵盒裡。

老趙關上門，腳步聲漸漸遠去。車廂裡又只剩下六個人，和六盞搖晃的燈。沒有人知道，再過兩個隧道，這節車廂裡將只剩下五個活人。`,
  victim: '老趙（列車長，55歲）',
  characters: [
    { id: 'miss-su', name: '蘇小姐', role: '女乘務員', avatar: '👩‍✈️', description: '制服帽檐壓得很低，但遮不住她觀察車廂時的目光。她端茶時手腕穩定，指甲縫裡卻有洗不淨的墨漬。', secret: '她的車票是假的，她的身份也是假的。蘇小姐是地下黨「白鷺小組」的聯絡員，這節車廂是她傳遞情報的固定航線。', motive: '老趙在昨晚查票時發現了她座椅夾層裡的密信。他說：「鷹潭站有我的朋友，妳長得這麼標緻，想必他們會很有興趣。」', alibi: '說在餐車整理餐具', secretPrologue: '車廂的燈光在顛簸中忽明忽暗，我把制服帽檐又壓低了一些。座椅夾層裡那封密信還在，但老趙的眼神已經告訴我——鷹潭站有人正等著「請」我下車。我是地下黨「白鷺小組」的聯絡員，這節車廂是我的航線，而老趙是必須被沉默的哨兵。', tool: { name: '鎮靜劑粉末', description: '可以混入任何飲料中讓目標昏睡' },
    hiddenAgenda: '找到並銷毀座椅夾層裡的密信',
      isPlayable: true },
    { id: 'mr-qian', name: '錢老闆', role: '絲綢商人', avatar: '💼', description: '絲綢馬褂在燈光下流動著水波般的光澤，但他的手指關節粗大，不像只摸過綢緞。上鎖的皮箱從不離身，睡覺時也抱在懷裡。', secret: '皮箱夾層裡不是綢緞，是三十塊用蠟紙包好的雲土。從雲南到上海的這條線，他已經走了十七次。', motive: '老趙昨晚在車廂連接處攔住他，手指敲了敲皮箱：「錢老闆，這箱子裡的貨，稅我看至少得這個數。」他伸出五根手指。', alibi: '說在臥鋪睡覺', hiddenAgenda: '確保皮箱裡的鴉片不被老趙的朋友發現',
      isPlayable: true },
    { id: 'prof-wang', name: '王教授', role: '大學教授', avatar: '📖', description: '圓框眼鏡後的目光溫和而疏離，像是在看一群吵鬧的學生。他總是抱著一本線裝書，但書頁從未被真正翻動過。', secret: '他姓王，但戶籍簿上的名字不是這個。他是國民黨調查統計局的特務，奉命監視這節車廂裡的「目標人物」。', motive: '老趙在查驗車票時盯著他的證件看了很久，然後笑了：「王教授，民國十二年您在南京用的名字，好像不是這個吧？」', alibi: '說在閱讀室看書', hiddenAgenda: '找到車廂裡的「目標人物」並確認其身份',
      isPlayable: true },
    { id: 'mrs-chen', name: '陳太太', role: '寡婦', avatar: '👒', description: '黑色喪服的蕾絲邊遮住了半張臉，只露出蒼白的下巴。她走路時幾乎沒有聲音，像是一道移動的影子。但當她獨自坐在窗邊時，會把喪服攥得死緊。', secret: '她從未結過婚。三天前，她的情人在上海碼頭被槍殺，而她被列入通緝名單。這身喪服是她最好的偽裝，也是最沉重的枷鎖。', motive: '老趙在檢查行李時翻出了她的報紙——上面有她的照片。他什麼都沒說，只是把它折好放進了自己的口袋。', alibi: '說在廁所整理儀容', hiddenAgenda: '找到老趙口袋裡那張印有自己照片的報紙',
      isPlayable: true },
    { id: 'soldier-li', name: '李排長', role: '退伍軍人', avatar: '🎖️', description: '軍裝的銅扣擦得錚亮，但袖口磨出了毛邊。他的右手總是握成拳頭，指節上的疤痕在燈光下泛白。眼神空洞，像是看著某個不存在於車廂裡的東西。', secret: '兩年前的台兒莊戰役，他的排負責斷後。混亂中，他的一顆手榴彈沒有扔向敵人，而是滾進了戰壕。那個戰壕裡有老趙的兒子。', motive: '老趙在車廂連接處攔住他，遞過一支菸：「李排長，我兒子臨死前喊的是什麼？我聽說是您把他從掩體裡拖出來的。」他的眼神不像在問問題。', alibi: '說在車廂連接處抽菸', hiddenAgenda: '確保老趙不會把兒子死亡的真相告訴任何人',
      isPlayable: true },
    { id: 'conductor-v', name: '老趙', role: '受害者', avatar: '💀', description: '經驗豐富的列車長。', secret: '收受賄賂為走私犯提供便利', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'compartment', name: '臥鋪區', icon: '🛏️', description: '六個臥鋪床位在狹窄的車廂裡排成兩列。床單散發著肥皂與陌生人體溫混合的氣味。車輪撞擊鐵軌的節奏讓枕頭微微震動，像是某種不可抗拒的催眠。', clues: ['locked-trunk','train-record'], npcs: ['mr-qian'], imagePrompt: '民國火車臥鋪車廂' },
    { id: 'luggage', name: '行李房', icon: '🧳', description: '行李房狹小得像是棺材，牆上的煤油燈把影子拉長成怪獸的形狀。老趙仰面倒在行李箱之間，臉色青紫。門從內部反鎖，唯一的氣窗玻璃碎裂，寒風帶著煤煙味灌入。', clues: ['body-position','broken-window','conductor-key'], npcs: [], imagePrompt: '火車行李房，昏暗' },
    { id: 'dining', name: '餐車', icon: '🍽️', description: '深夜的餐車已經打烊，桌上還留著沒收走的茶杯。茶漬在桌布上暈開深褐色的花。車窗外的黑暗飛速後退，偶爾有路燈的光掃過，像是一只眨動的眼睛。', clues: ['tea-residue','note-under-plate'], npcs: ['miss-su'], imagePrompt: '民國火車餐車' },
    { id: 'reading', name: '閱讀室', icon: '📚', description: '車廂末端的小閱讀室只有四個座位，煤氣燈的光暈搖曳不定。王教授翻閱的雜誌還攤在膝上，頁面微微捲曲，像被手指反覆摩挲過。', clues: ['secret-file','burned-paper'], npcs: ['prof-wang'], imagePrompt: '火車閱讀室，煤氣燈' },
    { id: 'corridor', name: '走廊', icon: '🚶', description: '連接各車廂的狹窄走廊，隨著車輪的節奏左右搖晃。地板縫隙裡嵌著陳年的菸灰與灰塵，扶手被無數手掌磨得發亮，帶著一種油膩的觸感。', clues: ['cigarette-butt','blood-drop'], npcs: ['soldier-li'], imagePrompt: '火車走廊，搖晃' },
    { id: 'toilet', name: '廁所', icon: '🚽', description: '狹小的火車廁所裡，鏡子上的水霧還沒散盡，像是剛有人在此吐息過久。馬桶裡殘留的消毒水氣味蓋不住另一種東西——恐懼，或者香水。', clues: ['lipstick-mark','fake-mourning'], npcs: ['mrs-chen'], imagePrompt: '民國火車廁所' },
  ],
  npcs: [
    { id: 'mr-qian', name: '錢老闆', avatar: '💼', role: '絲綢商人', personality: '說話像打算盤一樣快，每個數字都精確到分。被質疑時會下意識地摸皮箱的鎖，拇指在鎖釦上來回滑動。笑聲乾澀，像是從嗓子眼裡擠出來的。', secret: '皮箱裡是走私鴉片', liesAbout: ['皮箱內容','貨物來源'], tellsTruthAbout: ['對老趙的評價','車上異常'], defaultLocation: 'compartment',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'compartment', activity: '在臥鋪看管皮箱' },
      { startHour: 22, endHour: 24, locationId: 'dining', activity: '到餐車吃飯' },
      { startHour: 0, endHour: 2, locationId: 'compartment', activity: '回到臥鋪' },
      { startHour: 2, endHour: 4, locationId: 'corridor', activity: '在車廂連接處' },
    ],
    aiPrompt: '你是圓滑商人，皮箱裡有見不得光的東西。你走了十七次這條線，從未失手。但今晚，你發現那個握著你命脈的人，比你的貨更危險。' },
    { id: 'miss-su', name: '蘇小姐', avatar: '👩‍✈️', role: '女乘務員', personality: '說話輕柔，動作俐落，總是能在乘客開口前就遞上需要的東西。但當話題觸及「鷹潭」時，她的手指會下意識地摸向制服內袋——那裡有一張車票，和一個可能引爆一切的地址。', secret: '地下黨成員', liesAbout: ['真實身份','昨晚行蹤'], tellsTruthAbout: ['看到的異常','老趙最後行蹤'], defaultLocation: 'dining',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'dining', activity: '在餐車整理餐具' },
      { startHour: 22, endHour: 24, locationId: 'compartment', activity: '到臥鋪查票' },
      { startHour: 0, endHour: 2, locationId: 'dining', activity: '回到餐車' },
      { startHour: 2, endHour: 4, locationId: 'corridor', activity: '在車廂連接處' },
    ],
    aiPrompt: '你是地下黨乘務員，機靈警覺。你發現了屍體，必須小心不暴露身份。你的每一次微笑都是計算過的，每一句話都是雙重密碼。' },
    { id: 'prof-wang', name: '王教授', avatar: '📖', role: '大學教授', personality: '說話慢條斯理，每個句子都像論文註釋一樣嚴謹。推眼鏡的動作太過頻繁，像是在藉此爭取思考時間。獨處時會從書頁間抽出一張照片凝視，然後迅速塞回。', secret: '國民黨特務', liesAbout: ['真實身份','來昆明目的'], tellsTruthAbout: ['對案件的分析','觀察到的細節'], defaultLocation: 'reading',
    schedule: [
      { startHour: 20, endHour: 24, locationId: 'reading', activity: '在閱讀室看書' },
      { startHour: 0, endHour: 2, locationId: 'reading', activity: '繼續看書' },
      { startHour: 2, endHour: 4, locationId: 'compartment', activity: '到臥鋪' },
    ],
    aiPrompt: '你是偽裝成教授的特務，溫文爾雅但內心算計。你習慣用學術術語包裝最殘酷的判斷，因為這樣聽起來更像「真相」。' },
    { id: 'mrs-chen', name: '陳太太', avatar: '👒', role: '寡婦', personality: '說話時聲音壓得極低，像怕驚擾了什麼。走路幾乎沒有聲音，但當她獨處時，會把喪服攥得死緊，指節發白。她的悲傷看起來太過完美，像是一件量身定做的戲服。', secret: '通緝犯，死者是她的情人', liesAbout: ['寡婦身份','與死者關係'], tellsTruthAbout: ['對封閉空間的恐懼','聽到的動靜'], defaultLocation: 'toilet',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'toilet', activity: '在廁所整理儀容' },
      { startHour: 22, endHour: 24, locationId: 'compartment', activity: '到臥鋪休息' },
      { startHour: 0, endHour: 2, locationId: 'toilet', activity: '回到廁所' },
      { startHour: 2, endHour: 4, locationId: 'corridor', activity: '在車廂連接處' },
    ],
    aiPrompt: '你是偽裝成寡婦的通緝犯，柔弱外表下藏著秘密。你剛剛失去愛人，現在可能連自己都保不住。你在每個人的目光裡尋找「認出你」的跡象。' },
    { id: 'soldier-li', name: '李排長', avatar: '🎖️', role: '退伍軍人', personality: '極少說話，開口時每個字都像從牙縫裡擠出來的。右手總是握成拳頭，手臂的傷口在陰天會隱隱作痛——但他從不承認。當有人提到「台兒莊」時，他的瞳孔會縮小。', secret: '戰場上誤殺老趙的兒子', liesAbout: ['創傷來源','與老趙關係'], tellsTruthAbout: ['軍人的觀察','看到的異常'], defaultLocation: 'corridor',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'corridor', activity: '在車廂連接處抽菸' },
      { startHour: 22, endHour: 24, locationId: 'corridor', activity: '在走廊巡邏' },
      { startHour: 0, endHour: 2, locationId: 'compartment', activity: '到臥鋪' },
      { startHour: 2, endHour: 4, locationId: 'corridor', activity: '回到走廊' },
    ],
    aiPrompt: '你是創傷退伍軍人，沉默寡言，背負著無法說出口的罪惡。你殺過敵人，也殺過戰友——雖然後者是意外。你抽菸不是為了放鬆，是為了讓嗆咳掩蓋你的顫抖。' },
  ],
  clues: [
    { id: 'body-position', name: '屍體姿勢', description: '老趙仰面倒在行李房中央，雙手緊握拳頭擺在身側，像是僵硬的士兵。表情不是恐懼，而是驚訝——一種「怎麼會是你」的錯愕。', locationId: 'luggage', type: 'physical', isHidden: false, relevance: '死者認識兇手，沒有防備' ,
    details: [
      { label: '屍僵程度', content: '老趙的屍體已經出現全身性屍僵，手指和腳踝關節無法彎曲。根據屍僵的發展程度，死亡時間大約在三到四個小時前。' },
      { label: '瞳孔反應', content: '瞳孔對光沒有反應，已經完全放大。但右眼瞳孔比左眼略大，這是腦部受創的特徵——老趙在死前頭部遭受過重擊。' },
      { label: '衣物皺褶', content: '制服的上衣下擺有明顯的拉扯皺褶，皺褶的方向顯示，有人從正面抓住了他的衣領，把他拽起來——或者，把他推倒。' },
    ],
  },
    { id: 'broken-window', name: '破損的氣窗', description: '氣窗的玻璃從內部碎裂，碎片散落在行李房的地板上，在煤油燈下閃著寒光。缺口太小，一個成年人無法通過——但一隻手臂可以。', locationId: 'luggage', type: 'physical', isHidden: false, relevance: '兇手計畫從氣窗逃脫但體型不允許' ,
    details: [
      { label: '玻璃碎片', content: '氣窗的玻璃碎片散落在地板上，但最大的一片落在窗台上。這意味著玻璃是從內部向外碎的——有人從裡面打破了氣窗。' },
      { label: '敲擊點', content: '玻璃的敲擊點在右下角，高度約一百二十公分。這是蹲著或坐著的人的高度——老趙被攻擊時可能是坐著的，或者，兇手是個矮個子。' },
      { label: '窗框血跡', content: '窗框的內側有一滴乾涸的血跡，血跡的形狀顯示，有人在打破窗戶時割傷了手。這滴血是AB型——而老趙是O型。兇手受傷了。' },
    ],
    unlocksMemory: 'memory-escape-window',
  },
    { id: 'conductor-key', name: '列車長鑰匙串', description: '老趙腰間的鑰匙串散落在地上，銅鑰匙在燈光中泛著暗紅。仔細數來，少了一把行李房門鑰匙——上面留有陌生人的指紋，被體溫焐得發熱。', locationId: 'luggage', type: 'physical', isHidden: false, relevance: '兇手拿走了行李房鑰匙', timeWindow: { startHour: 0, endHour: 2, reason: '午夜後，列車長才會獨自到行李房巡檢' } },
    { id: 'locked-trunk', name: '上鎖的皮箱', description: '錢老闆床鋪下的皮箱擦得錚亮，銅鎖上有多道新鮮的刮痕。蘇小姐說，昨晚她看見老趙蹲在皮箱前，手裡拿著一根細鐵絲。', locationId: 'compartment', type: 'physical', isHidden: false, relevance: '錢老闆與老趙有利益衝突' },
    { id: 'train-record', name: '乘務記錄', description: '乘務記錄簿攤開在蘇小姐的鋪位上，記載每位乘客的上車地點。錢老闆和陳太太都從上海上車，中間隔了三個車廂——但他們的行李牌是同一個百貨公司的。', locationId: 'compartment', type: 'document', isHidden: false, relevance: '兩人可能有關聯', timeWindow: { startHour: 22, endHour: 24, reason: '晚上十點後，臥鋪區的記錄才會更新' } },
    { id: 'tea-residue', name: '茶杯殘液', description: '餐車桌上的白瓷茶杯裡，殘液表面浮著一層細微的油光。化驗顯示含有鎮靜劑成分——而這杯茶，是蘇小姐親手端給老趙的。', locationId: 'dining', type: 'physical', isHidden: false, relevance: '蘇小姐可能試圖讓老趙昏睡', destroyable: true, unlocksMemory: 'memory-sedative' },
    { id: 'note-under-plate', name: '盤底紙條', description: '瓷盤底下的紙條，字跡工整得像印刷體：「別多管閒事，否則你的秘密也會曝光。」紙張是書店的便條紙，邊緣有指甲掐過的痕跡。', locationId: 'dining', type: 'document', isHidden: true, relevance: '有人在威脅老趙', destroyable: true },
    { id: 'secret-file', name: '機密檔案', description: '閱讀室雜誌架後方的夾層裡，一份牛皮紙袋檔案被火漆封住。拆開後，是車上所有人的背景調查，王教授的照片旁用紅筆標註：「調查局，代號『鷹眼』。」', locationId: 'reading', type: 'document', isHidden: true, relevance: '王教授確實是特務' },
    { id: 'burned-paper', name: '燒毀的信紙', description: '閱讀室的菸灰缸裡，紙灰還沒完全冷透。殘留的字跡像垂死掙扎的蟲：「昆明接頭」與「代號：白鷺」。', locationId: 'reading', type: 'document', isHidden: false, relevance: '王教授在執行任務', destroyable: true },
    { id: 'cigarette-butt', name: '特殊香菸', description: '走廊扶手的縫隙裡，卡著半截尚未燃盡的香菸。過濾嘴上印著軍隊特供的編號——這個牌子，在民間市場上根本買不到。', locationId: 'corridor', type: 'physical', isHidden: false, relevance: '李排長在走廊停留時間可能比所說更長' },
    { id: 'blood-drop', name: '血滴', description: '走廊地板的縫隙中，幾滴乾涸的血跡在燈光下呈現暗褐色。它們像一串省略號，斷斷續續地通往廁所方向。', locationId: 'corridor', type: 'physical', isHidden: false, relevance: '兇手可能受傷了' },
    { id: 'lipstick-mark', name: '鏡上口紅印', description: '鏡子上的口紅印，顏色與陳太太唇上的一致——但那不是普通的補妝痕跡。口紅被匆忙寫成了字，又被更匆忙地抹去，只留下幾道猩紅的殘跡。', locationId: 'toilet', type: 'physical', isHidden: false, relevance: '陳太太在鏡子上留下了什麼' },
    { id: 'fake-mourning', name: '假喪服', description: '陳太太行李中的喪服，標籤顯示是三天前才從南京路的百貨公司買的。而報紙上刊登的「亡夫」死訊，日期是一週前。', locationId: 'toilet', type: 'physical', isHidden: true, relevance: '陳太太的寡婦身份是假的' },
  ],
  truth: {
    murdererId: 'miss-su',
    method: '蘇小姐在茶中下鎮靜劑，等老趙昏睡後拖入行李房，用繩索勒斃，反鎖房門，從氣窗逃出。',
    motive: '老趙發現了她的地下黨身份，準備在下一站舉報',
    timeline: '凌晨1:00 蘇小姐在茶中下藥。1:30 老趙昏睡，被拖入行李房。2:00 用繩索勒斃，偽裝成密室。2:30 從氣窗爬出。3:00 「發現」屍體。',
    fullExplanation: '蘇小姐是地下黨成員，利用乘務員身份傳遞情報。老趙是貪婪的列車長，長期收受賄賂。昨晚他發現了蘇小姐藏情報的地方，威脅要在下一站將她交給特務。蘇小姐別無選擇，利用對列車的熟悉製造了完美的密室殺人現場。',
    eachCharacterSecret: {
      'miss-su': '地下黨成員，利用乘務員身份傳遞情報',
      'mr-qian': '皮箱裡裝的是走私鴉片',
      'prof-wang': '國民黨特務，奉命監視車上某人',
      'mrs-chen': '通緝犯，死者是她的情人',
      'soldier-li': '戰場上誤殺了老趙的兒子',
    },
  },
  disruption: {
    name: '列車長查票',
    interval: 4,
    locations: ['compartment', 'luggage', 'dining', 'reading', 'corridor', 'toilet'],
    hitMessage: '列車長推開{location}的門，手裡的查票夾啪地一聲合上。「這節車廂不該有人。」他狐疑地打量你，你只好先回自己的包廂。',
    missMessage: '列車長的腳步聲和查票夾的啪嗒聲從{location}傳來',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。你是蘇小姐，親手讓老趙永遠閉上了嘴。你必須在調查過程中銷毀指向自己的線索，並利用「鎮靜劑粉末」誤導他人，才能平安抵達鷹潭。',
    'config': {
      'choices': [
        {
          'id': 'train-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'note-under-plate'
          },
          'question': '你在蘇小姐的制服口袋裡發現了一張地下黨的聯絡紙條。你會怎麼做？',
          'options': [
            {
              'label': '將紙條交給王教授（國民黨特務）',
              'value': 'betray'
            },
            {
              'label': '默默放回原處，當作沒看見',
              'value': 'ignore'
            },
            {
              'label': '悄悄提醒蘇小姐小心',
              'value': 'warn'
            }
          ]
        },
        {
          'id': 'train-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'luggage'
          },
          'question': '你站在行李房門口，老趙仰面倒在行李箱之間，臉色青紫。門從內部反鎖，氣窗的玻璃碎了一地，寒風帶著煤煙味灌入。這是一個完美的密室，而你就站在謎題的入口。你會怎麼做？',
          'options': [
            { 'label': '仔細檢查氣窗的碎片和窗框血跡', 'value': 'inspect' },
            { 'label': '翻找老趙的口袋，尋找被他拿走的東西', 'value': 'search' },
            { 'label': '先不破壞現場，去問其他乘客最後見到他的時間', 'value': 'ask' }
          ]
        }
      ]
    }
  }};
