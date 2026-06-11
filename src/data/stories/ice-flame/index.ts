import type { Story } from '../../../types/game';

export const iceFlameStory: Story = {
  id: 'ice-flame',
  title: '冰原上的火',
  subtitle: '南極考察站科學家死於火災，但南極不可能有火災',
  era: '現代',
  setting: '南極洲內陸考察站，極夜季節',
  hasPrologue: true,
  prologueSynopsis:
    `南極的極夜已經持續了三週，考察站的窗外是無邊無際的黑色，偶爾有綠色的極光在遠處跳動，像某種巨大生物的呼吸。室內恆溫二十二度，讓人幾乎忘記外面是零下六十度的世界。\n\n晚餐時間，六個人圍坐在長桌旁。趙博士正在講一個關於龍捲風的笑話，沒人覺得好笑，但大家都配合地笑了；地質學家低頭扒飯，護目鏡還推在額頭上；孫醫生翻閱病歷，聽診器在脖子上閃著微光；老周講了一個發電機的故障，用手勢比劃螺旋槳的形狀；林博士盯著湯裡的油花，目光空洞；大廚端上最後一道菜，圍裙上的卡通企鵝已經褪色得只剩下輪廓。\n\n趙博士舉起水杯說：「再過兩個月，極夜結束，我們就能回家了。」大廚的刀在廚房裡停了一秒，沒有人注意到。`,
  synopsis: '「極光號」考察站在極夜的黑暗中沉默了十七天。當補給隊的頭燈終於刺破風雪，他們發現氣象學家趙博士死於宿舍——一場在零下六十度環境中「不可能發生」的火災。他的床鋪被燒成焦炭，而房間的其他部分幾乎完好無損。六位科考隊員被困在這片白色荒漠中，其中一人用南極唯一的易燃液體，製造了一場完美的「意外」。',
  victim: '趙博士（氣象學家，45歲）',
  characters: [
    { id: 'geologist-ice', name: '你（地質學家）', role: '地質學家', avatar: '🪨', description: '護目鏡推到額頭上，冰碴在眉毛上結成霜，說話時呼出的白氣像一小團一小團的謊言。', secret: '冰芯樣本裡的不僅是氣泡，還有價值連城的稀土元素含量數據——足以讓一個人退休十次。', motive: '趙博士在報告會上突然問起「礦藏歸屬」的問題，而他的眼神裡沒有好奇，只有確認', alibi: '說在實驗室分析樣本', secretPrologue: '冰芯樣本在顯微鏡下閃著幽藍色的光，像凍結的謊言。趙博士今天開了三次會，每次都在強調「數據透明度」。我知道他指的是什麼——那些稀土含量數據一旦上報，我這輩子的研究就變成了別人的功勳。南極的冰不會說話，但我必須確保它永遠沉默。',
    hiddenAgenda: '確保冰芯樣本裡的稀土數據不會被趙博士上報',
      isPlayable: true },
    { id: 'doctor-ice', name: '孫醫生', role: '駐站醫生', avatar: '💉', description: '聽診器永遠掛在頸上，即使吃飯時也不摘下，白袍的下襬有洗不掉的淡黃色藥漬。', secret: '他給失眠隊員開的「維生素」裡，混著未經核准的精神藥物——這是一場關於「人類極限」的論文素材。', motive: '趙博士翻看了藥櫃，還問了那個不該問的問題：「這些人的幻覺，是不是你給的？」', alibi: '說在醫務室值班', hiddenAgenda: '銷毀藥櫃裡未經核准的精神藥物',
      isPlayable: true },
    { id: 'engineer-ice', name: '老周', role: '機械工程師', avatar: '🔧', description: '工裝褲上掛著七種不同規格的扳手，說話時嘴裡的熱氣讓鬍子上結霜，眼神卻總是飄向衛星天線的方向。', secret: '他的工具箱裡有一台不需要經過站內通訊系統的衛星電話，每週二凌晨兩點準時響起。', motive: '趙博士在機房撞見了他接電話的場景，而趙博士的下一個研究項目正好涉及「極地通訊安全」', alibi: '說在機房檢修發電機', hiddenAgenda: '找到並銷毀自己私藏衛星電話的證據',
      isPlayable: true },
    { id: 'biologist-ice', name: '林博士', role: '生物學家', avatar: '🧬', description: '培養皿的藍光讓她的臉色發青，說話時總是看著顯微鏡而不是對方的眼睛，像怕在現實裡被認出來。', secret: '極夜漫長，培養室的恆溫箱不只養細菌。趙博士的結婚戒指在這裡停留過太多個晚上。', motive: '趙博士上個月說「我們結束吧，我無法繼續這樣了」，而她還沒學會如何在沒有他的地方呼吸', alibi: '說在培養室觀察樣本', hiddenAgenda: '取回趙博士留在培養室恆溫箱裡的結婚戒指',
      isPlayable: true },
    { id: 'cook-ice', name: '大廚', role: '考察站廚師', avatar: '👨‍🍳', description: '圍裙上印著褪色的卡通企鵝，切洋蔥時會大聲唱歌，但每當衛星電話響起，他的刀會停在半空中一秒。', secret: '他的妻子在電話那頭說「他又打來了」時，聲音裡的恐懼比南極的風還冷。那個「他」，就是趙博士。', secretPrologue: '電熱毯在黑暗中泛著暗沉的紅光。你蹲在趙博士的床邊，把易燃液體沿床沿緩緩倒下，看著它滲入纖維。三小時後，這張床將成為他的葬禮。而你知道，南極不會有人聽見火焰裡的告別。', tool: { name: '易燃液體瓶', description: '可以將可燃物質殘留轉移到任何衣物或表面上' }, motive: '趙博士離婚後從未停止騷擾前妻，上週他甚至說「極夜結束後我會去找妳談談」——而大廚不能讓這件事發生', alibi: '說在廚房準備晚餐', hiddenAgenda: '確保趙博士無法在極夜結束後去找前妻',
      isPlayable: true },
    { id: 'zhao-v', name: '趙博士', role: '受害者', avatar: '💀', description: '氣象學家。', secret: '發現了隊員們的多個秘密', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'dorm', name: '宿舍', icon: '🛏️', description: '趙博士的宿舍裡，燒焦的床架像一具黑色的骨架，空氣裡殘留著油煙和蛋白質燒焦的刺鼻氣味，牆上的溫度計顯示零下四十度——火從何而來？', clues: ['burn-pattern','accelerant-traces'], npcs: [], imagePrompt: '南極考察站宿舍，燒毀的床鋪' },
    { id: 'lab-ice', name: '實驗室', icon: '🧪', description: '顯微鏡還開著，載玻片上的冰晶在燈光下閃爍，儀器的低鳴聲在這裡形成一種恆定的背景，像冰箱的壓縮機永不停歇。', clues: ['mineral-report','secret-patent'], npcs: ['geologist-ice'], imagePrompt: '南極考察站實驗室' },
    { id: 'medical-ice', name: '醫務室', icon: '💊', description: '醫務室的藥櫃上貼滿了手寫標籤，碘酒的氣味讓人鼻酸，血壓計的袖帶還纏在椅背上，像一條被遺棄的止血帶。', clues: ['drug-log','experiment-notes'], npcs: ['doctor-ice'], imagePrompt: '南極考察站醫務室' },
    { id: 'engine-ice', name: '機房', icon: '⚙️', description: '發電機的轟鳴聲在這裡達到頂點，柴油和潤滑油的氣味濃得化不開，紅綠相間的指示燈在黑暗中明明滅滅，像某種失控的心跳。', clues: ['power-log','spy-equipment'], npcs: ['engineer-ice'], imagePrompt: '南極考察站機房' },
    { id: 'greenhouse', name: '培養室', icon: '🌱', description: '恆溫箱的藍光讓這個房間像一座海底墳墓，培養皿裡的菌落正在無聲地繁衍，溫度計顯示攝氏二十五度——這裡是南極唯一溫暖的地方。', clues: ['love-letter-ice','microscope-photo'], npcs: ['biologist-ice'], imagePrompt: '南極考察站培養室' },
    { id: 'kitchen-ice', name: '廚房', icon: '🍳', description: '廚房永遠飄著洋蔥和奶油湯的氣味，牆上貼著每個人的飲食禁忌，冰箱的壓縮機發出類似嘆息的聲響。', clues: ['cooking-oil','ex-wife-photo'], npcs: ['cook-ice'], imagePrompt: '南極考察站廚房' },
  ],
  npcs: [
    { id: 'doctor-ice', name: '孫醫生', avatar: '💉', role: '駐站醫生', personality: '說話像讀病歷，精確但缺乏溫度；被質疑時會下意識摸向聽診器', secret: '對隊員進行未經同意的藥物實驗', liesAbout: ['他的實驗','藥物的用途'], tellsTruthAbout: ['醫學知識','他注意到的異常'], schedule: [
      { startHour: 8, endHour: 12, locationId: 'medical-ice', activity: '在醫務室整理藥物' },
      { startHour: 12, endHour: 14, locationId: 'kitchen-ice', activity: '在廚房吃午餐' },
      { startHour: 14, endHour: 18, locationId: 'lab-ice', activity: '在實驗室進行秘密實驗' },
      { startHour: 18, endHour: 22, locationId: 'medical-ice', activity: '在醫務室寫報告' },
    ], defaultLocation: 'medical-ice', aiPrompt: '你是駐站醫生孫醫生，冷靜專業，但有控制慾。你在進行一個秘密實驗，而你的實驗對象發現了。你說話精確，像讀病歷，被質疑時會變得防衛。' },
    { id: 'engineer-ice', name: '老周', avatar: '🔧', role: '機械工程師', personality: '回答問題前會停頓兩秒，像在翻譯成另一種語言；提到設備時眼睛會發光', secret: '某國派來的間諜', liesAbout: ['他的真實身份','與外界的聯繫'], tellsTruthAbout: ['設備的技術細節','他注意到的異常'], schedule: [
      { startHour: 8, endHour: 12, locationId: 'engine-ice', activity: '在機房檢修設備' },
      { startHour: 12, endHour: 14, locationId: 'kitchen-ice', activity: '在廚房吃午餐' },
      { startHour: 14, endHour: 18, locationId: 'engine-ice', activity: '在機房監控電力' },
      { startHour: 20, endHour: 24, locationId: 'dorm', activity: '在宿舍休息' },
    ], defaultLocation: 'engine-ice', aiPrompt: '你是工程師老周，沉默寡言，技術宅。你隱瞞著一個可能危及國家安全的秘密。你不擅長閒聊，但提到機械時會滔滔不絕。' },
    { id: 'biologist-ice', name: '林博士', avatar: '🧬', role: '生物學家', personality: '對話時目光總是飄向培養皿，像在尋找某個比對話更真實的世界；提到感情時會突然沉默', secret: '與趙博士有過婚外情', liesAbout: ['與趙博士的關係','她的真實感受'], tellsTruthAbout: ['她對趙博士的了解','她注意到的異常'], schedule: [
      { startHour: 8, endHour: 12, locationId: 'greenhouse', activity: '在培養室觀察樣本' },
      { startHour: 12, endHour: 14, locationId: 'kitchen-ice', activity: '在廚房吃午餐' },
      { startHour: 14, endHour: 18, locationId: 'lab-ice', activity: '在實驗室分析數據' },
      { startHour: 20, endHour: 24, locationId: 'greenhouse', activity: '在培養室獨處' },
    ], defaultLocation: 'greenhouse', aiPrompt: '你是生物學家林博士，溫柔知性，但內心脆弱。你與死者有過一段不為人知的感情。你不擅長直視對方眼睛，但在提到趙博士時會流露異常的情緒。' },
    { id: 'cook-ice', name: '大廚', avatar: '👨‍🍳', role: '考察站廚師', personality: '笑聲洪亮，但笑完後會有一瞬間的走神；提到「家」時會下意識看向日曆', secret: '趙博士前妻的現任丈夫', liesAbout: ['與趙博士的關係','來考察站的目的'], tellsTruthAbout: ['他看到的異常','考察站的日常'], schedule: [
      { startHour: 6, endHour: 10, locationId: 'kitchen-ice', activity: '在廚房準備早餐' },
      { startHour: 10, endHour: 14, locationId: 'kitchen-ice', activity: '在廚房準備午餐' },
      { startHour: 14, endHour: 18, locationId: 'kitchen-ice', activity: '在廚房準備晚餐' },
      { startHour: 18, endHour: 22, locationId: 'dorm', activity: '在宿舍休息' },
    ], defaultLocation: 'kitchen-ice', aiPrompt: '你是考察站廚師，樂觀開朗，愛開玩笑。你來這裡是為了保護你的妻子不受前夫騷擾。你總是用笑聲填補沉默，但提到家庭時會變得異常認真。' },
  ],
  clues: [
    { id: 'burn-pattern', name: '燒毀模式', description: '火災的範圍精準得可怕——只吞噬了床鋪，連床頭櫃上的紙張都沒有捲邊。這不是意外，這是手術。', locationId: 'dorm', type: 'physical', isHidden: false, relevance: '火災是人為縱火，且使用了助燃劑', unlocksMemory: 'memory-dorm-fire' ,
    timeWindow: { startHour: 0, endHour: 2, reason: '午夜到凌晨兩點，宿舍區的溫度最低，電熱毯處於高功率運轉，此時切斷電力最容易引發火災' },
    details: [
      { label: '燃燒溫度', content: '根據殘留物的碳化程度，起火點的溫度高達攝氏八百五十度。這不是普通起火能達到的溫度——有人在現場使用了助燃劑。' },
      { label: '燒灼層次', content: '地板上的燒灼痕跡分為三層：最底層是實驗室地板的漆面，中間層是一種未知的有機物，最上層是趙博士的工作服纖維。起火點在趙博士腳下。' },
      { label: '腳印', content: '燒灼區邊緣有一個半融化的腳印，鞋底紋路與研究站統一發配的防寒靴不同。這個腳印比四十三號大，比四十五號小——剛好是四十四號。' },
    ],
  },
    { id: 'accelerant-traces', name: '助燃劑痕跡', description: '床架殘留物的氣味讓人想起廚房——那是食用油被加熱到燃點後的獨特氣味，在南極，這是唯一可能的易燃液體。', locationId: 'dorm', type: 'physical', isHidden: false, relevance: '兇手使用了廚房的烹飪油作為助燃劑', destroyable: true,
    details: [
      { label: '油種鑑定', content: '助燃劑的氣味與廚房的烹飪油不同，但成分一致。這不是普通的炒菜油——是經過提煉的純植物油，燃點比平常食用油低二十度。有人刻意選擇了最容易燃燒的品種。' },
      { label: '噴灑模式', content: '助燃劑在床鋪周圍的噴灑呈環狀，噴灑高度約三十公分。這是蹲著噴灑的高度——兇手在縱火時是蹲著的，像是在祈禱，又像是在確認什麼。' },
      { label: '容器殘留', content: '床底發現一個被燒毀的塑膠瓶殘片，殘片上有一組指紋的壓痕。指紋屬於趙博士——但趙博士不可能自己縱火燒死自己。這個瓶子是被人栽贓的。' },
    ],
  },
    { id: 'mineral-report', name: '礦藏報告', description: '地質報告上的數字讓人眩暈——考察站下方的冰層裡，稀有金屬的儲量足以買下整個南極洲。', locationId: 'lab-ice', type: 'document', isHidden: false, relevance: '礦藏的發現讓多人有動機' },
    { id: 'secret-patent', name: '秘密專利申請', description: '電腦螢幕還亮著，申請書上的申請人只有一個名字，而開採技術的圖紙與趙博士上個月借走的報告驚人地相似。', locationId: 'lab-ice', type: 'document', isHidden: true, relevance: '你確實計畫私下申請開採權' },
    { id: 'drug-log', name: '藥物紀錄', description: '藥物紀錄上有大片空白——某些藥品的領用簽名欄裡，病人欄寫的是全體隊員的名字，但醫療紀錄裡找不到對應的病歷。', locationId: 'medical-ice', type: 'document', isHidden: false, relevance: '孫醫生可能在進行未經同意的實驗' },
    { id: 'experiment-notes', name: '實驗筆記', description: '上鎖的抽屜裡，筆記本記載著每個隊員的「極限環境下藥物反應」——包括幻覺、情緒波動、和攻擊性傾向。', locationId: 'medical-ice', type: 'document', isHidden: true, relevance: '孫醫生確實在進行秘密實驗' },
    { id: 'power-log', name: '電力紀錄', description: '電力紀錄顯示，案發時段宿舍的電力被切斷了三分鐘——剛好夠讓電熱毯的恆溫裝置失效，又不至於引起警報。', locationId: 'engine-ice', type: 'document', isHidden: false, relevance: '有人切斷了電力，可能是為了讓趙博士無法求救', unlocksMemory: 'memory-cut-power', timeWindow: { startHour: 22, endHour: 24, reason: '晚上十點後，發電機進入低功率模式，電力紀錄的細微波動才會被系統標記為異常' } },
    { id: 'spy-equipment', name: '間諜設備', description: '機房角落的配電箱後面，一台衛星電話的充電燈還在閃爍，通訊紀錄顯示每週二凌晨的通話，對象區碼不屬於任何科考組織。', locationId: 'engine-ice', type: 'physical', isHidden: true, relevance: '老周確實是間諜' },
    { id: 'love-letter-ice', name: '情書', description: '恆溫箱的縫隙裡夾著一張紙，上面是趙博士的字跡：「我們結束吧，我無法繼續這樣了。」紙的邊緣有被揉過的痕跡。', locationId: 'greenhouse', type: 'document', isHidden: false, relevance: '趙博士要與林博士分手' },
    { id: 'microscope-photo', name: '顯微鏡照片', description: '培養室的監視器截圖裡，兩個人影在藍光中擁抱，時間是凌晨三點——而趙博士的結婚戒指還戴在左手無名指上。', locationId: 'greenhouse', type: 'document', isHidden: false, relevance: '趙博士與林博士確實有過婚外情' },
    { id: 'cooking-oil', name: '烹飪油', description: '廚房儲藏室的油桶上，刻度線顯示少了一大半。大廚說是正常消耗，但上週的菜單裡沒有一樣需要油炸。', locationId: 'kitchen-ice', type: 'physical', isHidden: false, relevance: '烹飪油可能被用來縱火', destroyable: true },
    { id: 'ex-wife-photo', name: '前妻照片', description: '大廚床頭櫃裡的照片被壓在聖經下面，是他與一個女人的合照，背面寫著「永遠愛你」。而這個女人，趙博士也曾經這樣寫過。', locationId: 'kitchen-ice', type: 'document', isHidden: true, relevance: '大廚確實是趙博士前妻的現任丈夫', destroyable: true },
  ],
  truth: {
    murdererId: 'cook-ice',
    method: '大廚在趙博士的床鋪中倒入大量烹飪油，然後用發熱的電熱毯引燃。火災看起來像電器故障，但實際上是精心設計的縱火。',
    motive: '趙博士一直在騷擾他的前妻，大廚無法忍受',
    timeline: '案發當晚：大廚在趙博士的床鋪中倒入烹飪油，然後調高電熱毯溫度。三小時後：電熱毯引燃了浸滿油的床鋪。大廚切斷了宿舍電力，讓趙博士無法求救。',
    fullExplanation: '大廚是趙博士前妻的現任丈夫。趙博士離婚後一直騷擾前妻，甚至威脅要來南極「找她談談」。大廚為了保護妻子，主動申請來南極考察站工作。他沒想到趙博士會在極夜季節來到考察站。當趙博士再次開始騷擾前妻（通過衛星電話），大廚決定結束這一切。他用南極唯一的易燃液體——烹飪油——製造了一場「意外火災」。',
    eachCharacterSecret: {
      'geologist-ice': '發現了價值連城的礦藏，計畫私下開採',
      'doctor-ice': '對隊員進行未經同意的藥物實驗',
      'engineer-ice': '某國派來的間諜',
      'biologist-ice': '與趙博士有過婚外情',
      'cook-ice': '趙博士前妻的現任丈夫',
    },
  },

  disruption: {
    name: '暴風雪警報',
    interval: 4,
    locations: ['dorm', 'lab-ice', 'engine-ice', 'medical-ice', 'greenhouse', 'kitchen-ice'],
    hitMessage: '暴風雪警報在{location}響起，廣播命令所有人返回宿舍。風雪從門縫灌入，你被迫撤離。',
    missMessage: '風雪拍打{location}的窗戶，像無數隻手在敲門',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。你是大廚，親手點燃了趙博士的床鋪。你必須在調查過程中銷毀指向自己的線索，並利用「易燃液體瓶」誤導他人，才能逃過極夜後的審判。',
    'config': {
      'strikeThreshold': 3,
      'sensitiveKeywords': [
        '儀式',
        '獻祭',
        '火',
        '冰',
        '祭司',
        '神器'
      ],
      'choices': [
        {
          'id': 'if-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'burn-pattern'
          },
          'question': '火災的範圍精準得可怕——只吞噬了趙博士的床鋪，連床頭櫃上的紙張都沒有捲邊。這不是意外，這是手術。你會怎麼做？',
          'options': [
            { 'label': '立刻報告站長，啟動緊急調查', 'value': 'report' },
            { 'label': '先檢查減壓艙的門鎖，確認兇手是否還在站內', 'value': 'check' },
            { 'label': '銷毀你抽屜裡的專利申請書，以防被發現', 'value': 'hide' }
          ]
        },
        {
          'id': 'if-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'kitchen-ice'
          },
          'question': '廚房裡，油桶的刻度顯示少了一大半烹飪油。大廚說是正常消耗，但上週的菜單裡沒有一樣需要油炸。而在南極，這是唯一可能的易燃液體。你會怎麼做？',
          'options': [
            { 'label': '直接質問大廚油的去向', 'value': 'confront' },
            { 'label': '暗中檢查大廚的宿舍', 'value': 'search' },
            { 'label': '暫時不動聲色，繼續觀察', 'value': 'wait' }
          ]
        }
      ]
    }
  }};
