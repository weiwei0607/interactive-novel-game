import type { Story } from '../../../types/game';

export const lighthouseStory: Story = {
  id: 'lighthouse',
  title: '霧中燈塔',
  subtitle: '漁村裡的燈塔管理員失蹤了，郵差發現的不只是信',
  era: '1950年代',
  setting: '台灣東北角漁村，濃霧籠罩的燈塔',
  hasPrologue: true,
  prologueSynopsis:
    `颱風來襲前的霧角島，天空是一種過分乾淨的灰藍。漁村的三十戶人家各自忙著加固門窗，空氣裡飄著鹹腥的海風和剛出爐的魚乾氣味。\n\n老林坐在燈塔底層的小屋裡，窗戶開著，手邊一杯溫熱的米酒。他看著阿海騎著腳踏車從蜿蜒的小路穿過來，後座綁著一摞報紙和幾封信。阿土伯在港口修補漁網，動作粗魯而精準；林老師牽著幾個孩子的手從學校走出來，藍布長衫在風裡飄動；雜貨店老闆的算盤聲隔著半條街都能聽見；阿霞蹲在自家門口補網，頭幾乎埋進了網眼裡。\n\n老林舉杯向阿海致意，說：「颱風過後，燈塔還是會亮的。」這句話像是一個承諾，也像是一個詛咒。`,
  synopsis: '霧角島的燈塔在颱風夜後沉默了三日。當濃霧終於裂開一道縫，郵差阿海騎著腳踏車抵達燈塔時，發現門虛掩著，門縫下滲出的暗紅血跡已被海風吹得發黑。燈塔管理員老林不見蹤影，只有螺旋樓梯上的血跡一路盤旋向上，像一條被擰乾的紅色絲帶。這個只有三十戶人家的漁村裡，每個人似乎都與老林有過節。',
  victim: '老林（燈塔管理員，58歲）',
  characters: [
    { id: 'postman', name: '你（阿海）', role: '郵差', avatar: '📮', description: '腳踏車的鏈條聲是這條路上唯一的節奏，雨帽下的臉被海風刻滿細紋。', secret: '老林年輕時拋棄的戀人的兒子。母親至死都望著燈塔的方向。', motive: '老林害死了你的母親——不是用刀，而是用一輩子的等待', alibi: '說在村裡送信', secretPrologue: '郵包的重量今天格外沉重。我數了數裡面的信，十七封，其中有一封是給老林的。信封上的字跡我太熟悉了——那是我母親的字。三十年前，她每天寫一封信，寄給這個燈塔裡的男人。大部分信都石沉大海，但這一封回來了。老林手裡一定還藏著其他的。我今天必須找到。',
    hiddenAgenda: '找到老林年輕時寫給母親的信',
      isPlayable: true },
    { id: 'fisherman', name: '阿土伯', role: '老漁夫', avatar: '🎣', description: '指節粗大如老樹根，漁網的氣味滲進了皮膚紋理，說話時總望向海面。', secret: '那片暗礁漁場是他用三十年命換來的座標，老林連夜抄了送進城，申請了專利。', motive: '漁場被搶，生計斷絕，而他的漁船最近莫名其妙破了洞', alibi: '說在港口修船', hiddenAgenda: '從燈塔取回被老林抄走的漁場地圖原件',
      isPlayable: true },
    { id: 'teacher', name: '林老師', role: '村小老師', avatar: '👩‍', description: '藍布長衫洗得發白，發髻梳得一絲不苟，握粉筆的手指關節泛紅。', secret: '她被領養時四歲，隱約記得母親說「妳爸在燈塔」。老林每週來學校講故事，從未認出她。', motive: '恨他的冷漠，更恨自己竟然還在等他認出來', alibi: '說在學校備課', hiddenAgenda: '讓老林在生前（或死後）承認自己是他的女兒',
      isPlayable: true },
    { id: 'merchant', name: '雜貨店老闆', role: '雜貨店老闆', avatar: '🏪', description: '打算盤的聲音永遠比說話聲響，圓框眼鏡後的眼睛像兩粒算珠。', secret: '老林欠了他三年的賒帳，還抓到他私賣米酒，揚言要告發。', motive: '債務糾纏之外，他更怕老林那張嘴——一旦開口，他連雜貨店都保不住', alibi: '說在店裡盤點', hiddenAgenda: '找到老林簽的賒帳本，銷毀私賣米酒的證據',
      isPlayable: true },
    { id: 'widow', name: '阿霞', role: '漁村寡婦', avatar: '🧕', description: '總是低著頭補漁網，動作快而準，像把什麼東西縫進網眼裡藏起來。', secret: '五年來每個月圓夜，燈塔裡有兩個人的影子。老林說「等我退休」，直到她發現他在城裡還有一個「女兒」。', motive: '她以為自己是唯一，卻連替代都不算。愛變成了最後一件能緊抓的東西', alibi: '說在家裡織網', hiddenAgenda: '找到老林承諾娶她的字據', tool: { name: '魚鉤繩索', description: '可以將血跡和纖維轉移到任何衣物上' }, secretPrologue: '霧從海面升上來的時候，我在燈塔下等了很久。老林說颱風夜不要出門，但我要他親口告訴我，城裡那個「女兒」是什麼意思。我握著織網的魚鉤，繩索纏在手腕上，比他的承諾還緊。' ,
      isPlayable: true },
    { id: 'lin-v', name: '老林', role: '受害者', avatar: '💀', description: '燈塔管理員。', secret: '年輕時傷害了多人', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'lighthouse', name: '燈塔', icon: '🔦', description: '螺旋樓梯的血跡一階一階向上爬，燈室的光還在轉，像一隻永不疲倦的眼睛。空氣裡混著鹽、黴菌和鐵鏽的味道。', clues: ['blood-stair','broken-lantern'], npcs: [], imagePrompt: '台灣燈塔內部，螺旋樓梯，血跡' },
    { id: 'village', name: '村莊', icon: '🏘️', description: '三十戶人家的漁村，屋簷下掛著的魚乾在風中輕輕碰撞，像風鈴，也像骨頭。', clues: ['gossip-record','love-letter-post'], npcs: ['postman'], imagePrompt: '台灣漁村，五十年年代' },
    { id: 'harbor', name: '港口', icon: '⚓', description: '小漁港的水面浮著油膜，幾艘漁船像疲倦的水鳥縮在岸邊，纜繩在木樁上磨出深溝。', clues: ['fishing-ground-map','boat-damage'], npcs: ['fisherman'], imagePrompt: '台灣漁港，漁船' },
    { id: 'school', name: '村小', icon: '🏫', description: '只有兩間教室的村小，黑板上的粉筆字已經被潮氣暈開，但還能認出老林上週講的故事結尾。', clues: ['student-drawing','adoption-paper'], npcs: ['teacher'], imagePrompt: '台灣村小，教室，黑板' },
    { id: 'store', name: '雜貨店', icon: '🛒', description: '村裡唯一的雜貨店，門檻被踩得凹陷，貨架上的醬油瓶蒙著一層油膩的灰。', clues: ['debt-book','rice-wine-hidden'], npcs: ['merchant'], imagePrompt: '台灣雜貨店，貨架' },
    { id: 'cottage', name: '阿霞家', icon: '🏠', description: '海邊的小屋，門前曬著的漁網還滴著水，窗框上的油漆剝落得像是被海浪啃過。', clues: ['love-gift','net-blood'], npcs: ['widow'], imagePrompt: '台灣海邊小屋，漁網' },
  ],
  npcs: [
    { id: 'fisherman', name: '阿土伯', avatar: '🎣', role: '老漁夫', personality: '說話像海浪拍打礁石，豪爽裡帶著鹹澀，酒後會突然安靜', secret: '老林搶走了他的漁場', liesAbout: ['與老林的關係','漁場的歸屬'], tellsTruthAbout: ['村裡的傳聞','他看到的異常'], defaultLocation: 'harbor',
    schedule: [
      { startHour: 6, endHour: 9, locationId: 'harbor', activity: '修補漁網' },
      { startHour: 9, endHour: 11, locationId: 'village', activity: '在村裡走動' },
      { startHour: 11, endHour: 12, locationId: 'harbor', activity: '繼續修船' },
    ],
    aiPrompt: '你是老漁夫阿土伯，豪爽直率，愛喝酒，酒後話多。你的老友搶走了你發現的漁場。你說話時常望著海面，提到老林時聲音會變沉。' },
    { id: 'teacher', name: '林老師', avatar: '👩‍🏫', role: '村小老師', personality: '聲音輕而清晰，像讀課文，但提到父親二字時會有一瞬間的斷電', secret: '老林失散多年的女兒', liesAbout: ['與老林的關係','她的真實身世'], tellsTruthAbout: ['老林來學校時的言行','她注意到的細節'], defaultLocation: 'school',
    schedule: [
      { startHour: 6, endHour: 8, locationId: 'school', activity: '在學校備課' },
      { startHour: 8, endHour: 10, locationId: 'village', activity: '買東西' },
      { startHour: 10, endHour: 12, locationId: 'school', activity: '給學生上課' },
    ],
    aiPrompt: '你是村小林老師，溫柔善良。這個每週來講故事的老人，其實是你的父親，但他拒絕承認。你說話輕柔，但內心壓抑著巨大的痛苦。你不輕易表露情緒，但在提到家庭時會異常沉默。' },
    { id: 'merchant', name: '雜貨店老闆', avatar: '🏪', role: '雜貨店老闆', personality: '打算盤的聲音永遠在背景響著，笑時嘴角只動一邊', secret: '老林欠債不還還威脅他', liesAbout: ['老林的債務','私賣米酒的事'], tellsTruthAbout: ['老林的購物習慣','他看到的異常'], defaultLocation: 'store',
    schedule: [
      { startHour: 6, endHour: 12, locationId: 'store', activity: '看店' },
    ],
    aiPrompt: '你是雜貨店老闆，精明小氣。老林欠了你三年的錢，還威脅要舉報你。你總是在打算盤，說話時像在做生意一樣權衡得失。' },
    { id: 'widow', name: '阿霞', avatar: '🧕', role: '漁村寡婦', personality: '低著頭說話，但補網的動作出賣了她的情緒——針腳越亂，心越慌', secret: '與老林有過不倫戀情', liesAbout: ['與老林的關係','她的真實感受'], tellsTruthAbout: ['老林的性格','她聽到的傳聞'], defaultLocation: 'cottage',
    schedule: [
      { startHour: 6, endHour: 9, locationId: 'cottage', activity: '織漁網' },
      { startHour: 9, endHour: 11, locationId: 'village', activity: '買東西' },
      { startHour: 11, endHour: 12, locationId: 'cottage', activity: '回家休息' },
    ],
    aiPrompt: '你是漁村寡婦阿霞，堅韌獨立。你愛過一個不願娶你的男人，這份愛變成了恨。你總是低著頭，說話輕聲細語，但在提到感情時手指會絞緊漁網。' },
  ],
  clues: [
    { id: 'blood-stair', name: '樓梯血跡', description: '螺旋樓梯的每一階都落著暗紅的印記，像有人拖著受傷的腳一步步往上爬，又像是被什麼東西從上面拽下來。', locationId: 'lighthouse', type: 'physical', isHidden: false, relevance: '老林可能從燈室墜落或被推下', unlocksMemory: 'memory-blood-stairs' ,
    details: [
      { label: '血滴形狀', content: '樓梯上的血滴呈橢圓形，長軸指向下方。這意味著血是從上面滴落下來的，而且滴血者在移動——靜止的血滴會是圓形的。' },
      { label: '腳印疊壓', content: '血跡上有幾個腳印，腳印的順序顯示：有人先走上去，然後又走下來。走上去的腳印乾淨，走下來的腳印帶著血。' },
      { label: '欄杆抓痕', content: '木質欄杆上有五道平行的抓痕，抓痕裡嵌著皮膚組織和血跡。抓痕的深度顯示，這個人在墜落時曾經試圖抓住什麼。' },
    ],
  },
    { id: 'broken-lantern', name: '破碎的燈罩', description: '燈室的燈罩碎了一地，最大的一片上沾著血和半枚模糊的指紋，像一枚被打碎的月亮。', locationId: 'lighthouse', type: 'physical', isHidden: false, relevance: '打鬥發生在燈室', unlocksMemory: 'memory-lantern-fight' ,
    details: [
      { label: '燈罩材質', content: '燈罩的玻璃是進口的強化玻璃，通常用於航海燈塔，抗風壓能力極強。這種玻璃不會被風吹碎——它是被人為擊碎的，擊打點在玻璃的內側。' },
      { label: '血跡噴濺', content: '最大的一片玻璃上的血跡呈放射狀，中心點在玻璃的上緣。這意味著老林被擊中時是站著的，而且擊打者比他高——或者，老林是跪著的。' },
      { label: '指紋', content: '玻璃碎片上有一枚完整的指紋，指紋的紋路裡嵌著燈油。這個人在打碎燈罩後，沒有立刻離開，而是停留了足夠長的時間，讓燈油滲入了指紋的縫隙。' },
    ],
  },
    { id: 'gossip-record', name: '村裡流言', description: '郵袋裡的信還沒送完，但村婦們的閒話已經先到：「颱風夜啊，燈塔那邊有女人的哭聲，還有東西摔碎的聲音。」', locationId: 'village', type: 'testimony', isHidden: false, relevance: '老林最近與人有衝突' },
    { id: 'love-letter-post', name: '未寄出的信', description: '郵袋底部有一封沒貼郵票的信，收信人寫著「阿霞」，字跡是老林的，信紙被揉過又攤平。', locationId: 'village', type: 'document', isHidden: false, relevance: '老林對阿霞有感情', destroyable: true, timeWindow: { startHour: 8, endHour: 10, reason: '早上八點後，郵差來送信時才會發現這封未寄出的信' } },
    { id: 'fishing-ground-map', name: '漁場地圖', description: '阿土伯船艙裡的手繪地圖被海水浸得發皺，暗礁的座標旁原本該簽他名字的地方，被人用新墨水蓋上了「林」字。', locationId: 'harbor', type: 'document', isHidden: false, relevance: '老林確實搶走了漁場' },
    { id: 'boat-damage', name: '漁船損壞', description: '船底的裂痕不像颱風的傑作——太直了，太乾淨了，像是被人用斧頭從內側劈開的。', locationId: 'harbor', type: 'physical', isHidden: false, relevance: '阿土伯有破壞自己船的嫌疑' },
    { id: 'student-drawing', name: '兒童畫', description: '黑板上的蠟筆畫已經被潮氣暈開，但還能看見一個小女孩牽著老人的手，署名「林老師的爸爸」。', locationId: 'school', type: 'document', isHidden: false, relevance: '林老師與老林的關係' },
    { id: 'adoption-paper', name: '領養文件', description: '林老師抽屜最深處的文件顯示她是被領養的，親生父親欄寫著「林大海」——老林從未對人提起的本名。', locationId: 'school', type: 'document', isHidden: true, relevance: '林老師確實是老林的女兒' },
    { id: 'debt-book', name: '賒帳本', description: '賒帳本上的「林」字出現了四十七次，最後一筆是颱風夜——一瓶米酒，旁邊用紅筆畫了個圈。', locationId: 'store', type: 'document', isHidden: false, relevance: '老林最後一次出現在雜貨店' },
    { id: 'rice-wine-hidden', name: '私釀米酒', description: '後倉的米酒罈子後面藏著沒貼標籤的瓶子，液體混濁，這正是老林威脅要舉報的「證據」。', locationId: 'store', type: 'physical', isHidden: false, relevance: '老林與雜貨店老闆有矛盾' },
    { id: 'love-gift', name: '定情物', description: '床頭的貝殼項鍊已經褪色，打開裡面的小紙條：「等我退休就娶你。」署名老林，日期是五年前。', locationId: 'cottage', type: 'physical', isHidden: false, relevance: '老林對阿霞有承諾', destroyable: true },
    { id: 'net-blood', name: '血漬漁網', description: '門前曬著的漁網上有一灘深褐色的漬，形狀不規則，不像魚血——阿霞說是昨天修補時割傷了手。', locationId: 'cottage', type: 'physical', isHidden: false, relevance: '血漬是否屬於老林', destroyable: true, timeWindow: { startHour: 6, endHour: 9, reason: '清晨六點到九點，阿霞在門前織網時，這灘血漬才會被陽光照得特別明顯' } },
  ],
  truth: {
    murdererId: 'widow',
    method: '阿霞在颱風夜來到燈塔，與老林發生爭執。在拉扯中，老林從燈室墜落，她沒有呼救，而是離開了現場。',
    motive: '老林始終不願娶她，還準備與另一個女人結婚',
    timeline: '颱風夜：阿霞帶著米酒來到燈塔，與老林對質。爭執中老林失足從燈室墜落。阿霞驚慌失措，沒有呼救就離開了。',
    fullExplanation: '阿霞與老林保持了五年的秘密戀情。老林承諾退休後會娶她，但最近她發現老林與另一個女人（其實是他的女兒林老師）頻繁見面，誤以為老林變心了。颱風夜，她帶著老林最後一次在雜貨店賒的米酒來到燈塔，想最後一次確認他的心意。當老林再次推託時，兩人發生激烈爭執，老林在拉扯中失足從燈室墜落。阿霞因恐懼而沒有呼救，獨自離開了現場。',
    eachCharacterSecret: {
      'postman': '老林年輕時拋棄的戀人的兒子',
      'fisherman': '老林搶走了他發現的漁場',
      'teacher': '老林失散多年的女兒',
      'merchant': '老林欠債不還還威脅他',
      'widow': '與老林有過不倫戀情',
    },
  },

  disruption: {
    name: '颱風餘波',
    interval: 4,
    locations: ['lighthouse', 'village', 'harbor', 'school', 'store', 'cottage'],
    hitMessage: '一陣狂風吹開{location}的門，雨水橫掃而入。你不得不找地方躲避。',
    missMessage: '風聲在{location}外呼嘯，像有什麼東西在繞著房子走',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。你是阿霞，颱風夜裡與老林在燈塔發生爭執。你必須在調查過程中銷毀對自己不利的線索，並利用「魚鉤繩索」將血跡和纖維轉移到他人衣物上，以掩蓋真相。',
    'config': {
      'strikeThreshold': 4,
      'sensitiveKeywords': [
        '燈塔',
        '燈',
        '墜落',
        '海',
        '暴風雨',
        '推'
      ],
      'choices': [
        {
          'id': 'lh-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'blood-stair'
          },
          'question': '樓梯上的血跡一階一階往上，像有人在拖著受傷的腳往上爬。老林的手電筒還亮著，光束指著燈室的方向。你會怎麼做？',
          'options': [
            { 'label': '順著血跡往上，看看燈室裡有什麼', 'value': 'climb' },
            { 'label': '先回村裡叫人幫忙', 'value': 'help' },
            { 'label': '檢查樓梯欄杆上的抓痕，尋找更多線索', 'value': 'investigate' }
          ],
        },
        {
          'id': 'lh-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'cottage'
          },
          'question': '你來到阿霞家，海風從窗縫鑽進來。床頭的貝殼項鍊裡有一張褪色的紙條：「等我退休就娶你。」署名老林，日期是五年前。門前的漁網上還有一灘深褐色的血漬。你會怎麼做？',
          'options': [
            { 'label': '把紙條交給阿霞，讓她知道真相', 'value': 'confront' },
            { 'label': '把紙條燒了，讓老林的謊言隨風而去', 'value': 'burn' },
            { 'label': '帶著紙條去找林老師，看看她怎麼說', 'value': 'investigate' }
          ]
        }
      ],
    }
  }};
