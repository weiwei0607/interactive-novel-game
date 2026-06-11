import type { Story } from '../../../types/game';

export const welcomeStory: Story = {
  id: 'welcome',
  title: '歡迎光臨',
  subtitle: '民宿老闆娘死後，她的民宿仍在自動發送確認信給客人',
  era: '現代',
  setting: '日本京都郊區的傳統民宿',
  hasPrologue: true,
  prologueSynopsis:
    `清晨的櫻花屋，庭院裡的楓樹還掛著露珠。榻榻米被擦得發亮，走廊的木板在腳下發出輕微的吱呀聲，像某種古老的問候。\n\n美咲站在辦公室裡，對著電腦確認今天的預訂。料理長在廚房裡切菜，節奏穩定如心跳；女將跪坐在客房裡整理床鋪，動作快而無聲；投資人站在玄關處，西裝革履在傳統建築裡顯得格格不入，他手裡拿著一份文件；鄰居在門口修剪盆栽，藍色作務衣在晨光裡顯得格外乾淨；房客在庭院裡拍那棵楓樹，復古相機的快門聲輕輕響起。\n\n美咲走出辦公室，對著庭院裡的楓樹說：「再過一個月，這裡就會變成紅色的海。」沒有人回答，但料理長的刀在砧板上停了一秒，女將的手在棉被上頓了一下。`,
  synopsis: '櫻花屋的門簾還在風中輕輕擺動，但老闆娘美咲已經不會再掀開它了。她死在二樓的辦公室裡，電腦還開著，確認信一封一封自動發送給未來的客人——「歡迎光臨櫻花屋」。這個系統是三天前設定的。六位與民宿有關的人各懷心思，而設定了自動回信的人，或許比兇手更清楚死亡的溫度。',
  victim: '美咲（民宿老闆娘，48歲）',
  characters: [
    { id: 'guest', name: '你（房客）', role: '民宿房客', avatar: '🎒', description: '背包上掛著一架復古相機，說日語時帶著明顯的外國口音，總是在庭院裡拍同一棵楓樹。', secret: '她的護照上寫著另一個名字，而出生證明上的母親欄，寫著美咲年輕時用過的藝名。', motive: '美咲在門口攔住她，說「妳長得像我年輕時犯的一個錯」，然後下達了逐客令', alibi: '說在房間裡休息', secretPrologue: '旅館的拉門發出一種特定的吱嘎聲，像是有人在我耳邊嘆氣。美咲跪坐在玄關，說「歡迎光臨」，但她的眼睛在看我的行李箱——那個貼著東京標籤的舊箱子。她不知道我為什麼來。我也不知道她還記不記得那個藝名。三十年前，東京的小劇場裡，有個叫「白鷺」的舞孃。那個舞孃，是我的母親。',
    hiddenAgenda: '找到美咲年輕時的藝名和身份證明',
      isPlayable: true },
    { id: 'chef-jp', name: '料理長', role: '民宿廚師', avatar: '👨‍🍳', description: '和服袖口的油漬已經洗到發白，切菜時的節奏像某種古老的咒語，但端出料理時會微微低下頭。', secret: '二十年前的一個颱風夜，他在這間廚房裡對美咲說「跟我走吧」。她說「對不起，我選擇了民宿」。', motive: '美咲準備把民宿賣給連鎖酒店，而買家的第一個條件就是「更換廚師團隊」', alibi: '說在廚房準備晚餐', hiddenAgenda: '找到美咲當年拒絕他的那封信',
      isPlayable: true },
    { id: 'maid', name: '女將', role: '民宿管家', avatar: '👘', description: '跪坐時背脊挺直如尺，整理床鋪時的動作快而無聲，像一道影子在房間裡移動。', secret: '她整理舊帳簿時發現了一張嬰兒照片，背後寫著「美琴，送養」。那是她的名字。美咲是她從未相認的親姐姐。', motive: '美咲發現了她調查家族歷史的事實，準備以「偷竊商業機密」為由解僱她，還要把承載她所有回憶的民宿賣掉', alibi: '說在打掃客房', hiddenAgenda: '找到並保存那張寫著「美琴，送養」的嬰兒照片', tool: { name: '料理刀鞘', description: '可以將刀鞘上的血跡轉移到任何衣物或物品上' }, secretPrologue: '廚房的高湯還在爐上嗚咽，你跪坐在辦公室的榻榻米上，聽著美咲敲鍵盤的聲音。那個聲音和你小時候聽過的一樣——姐姐總是在深夜寫功課，而你蜷在被窩裡假裝睡著。你從懷裡取出料理刀，刀刃反射著電腦螢幕的藍光。你不記得自己是什麼時候站起來的，但當你回過神時，美咲已經不動了。',
      isPlayable: true },
    { id: 'investor-jp', name: '投資人', role: '酒店投資人', avatar: '💼', description: '西裝革履在這間傳統民宿裡顯得格格不入，說話時喜歡用「從資產角度來看」，像在給每一件東西貼上價籤。', secret: '三十年前他在這間民宿門口向美咲求婚，她說「等櫻花屋穩定下來」。三個月後他收到了喜帖，新郎不是他。', motive: '美咲臨時反悔，拒絕出售民宿，而為了這筆收購，他已經抵押了自己的房子', alibi: '說在附近的神社參拜', hiddenAgenda: '確保收購合約不會被毀掉',
      isPlayable: true },
    { id: 'neighbor', name: '鄰居', role: '民宿鄰居', avatar: '👴', description: '總是穿著同一件藍色作務衣，門前的盆栽修剪得像他的個性——整齊，但沒有一寸多餘的生長空間。', secret: '他的祖先墳地在這塊地下面，而美咲擴建民宿時，把那塊地「買」走了——簽約時他根本不知道自己簽的是什麼。', motive: '美咲拒絕歸還土地，還說「法律上這是我的」，而他只剩那塊地可以留給孫子了', alibi: '說在家裡看電視', hiddenAgenda: '找到並證明祖先墳地的地契',
      isPlayable: true },
    { id: 'misaki-v', name: '美咲', role: '受害者', avatar: '💀', description: '民宿老闆娘。', secret: '傷害了多人的利益', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'office-jp', name: '辦公室', icon: '🏮', description: '美咲倒在榻榻米上，電腦螢幕的冷光還在跳動，確認信一封一封自動寄出，像一個不知主人已死的幽靈在重複生前的工作。', clues: ['auto-email','sale-contract'], npcs: [], imagePrompt: '日本民宿辦公室，電腦' },
    { id: 'room-204', name: '204號房', icon: '🛏️', description: '和室的拉門半開著，窗外的楓樹在暮色中像一團燃燒的火，被褥上還留著房客尚未消散的體溫。', clues: ['old-photo','birth-cert'], npcs: ['guest'], imagePrompt: '日式民宿房間，榻榻米' },
    { id: 'kitchen-jp', name: '廚房', icon: '🍱', description: '傳統的日式廚房裡，高湯的鮮味和味醂的甜味在空氣中纏綿，灶上的鍋子還在發出細細的嗚咽聲。', clues: ['knife-missing','love-letter-jp'], npcs: ['chef-jp'], imagePrompt: '日式廚房，料理' },
    { id: 'corridor', name: '走廊', icon: '🏯', description: '連接各個房間的走廊上，女將剛擦過的木地板還留著水痕，壁龕裡的花已經換成了白菊。', clues: ['cleaning-log','sister-evidence'], npcs: ['maid'], imagePrompt: '日式民宿走廊，榻榻米' },
    { id: 'shrine', name: '神社', icon: '⛩️', description: '附近的神社在暮色中顯得格外寂靜，鳥居的紅漆剝落得像是歲月的傷疤，繪馬在風中輕輕碰撞。', clues: ['prayer-tablet','meeting-photo'], npcs: ['investor-jp'], imagePrompt: '日本神社，鳥居' },
    { id: 'neighbor-house', name: '鄰居家', icon: '🏡', description: '老人的家簡陋但整潔，茶室裡的茶具擺放得像儀式陳列，牆上掛著一張泛黃的土地所有權狀。', clues: ['land-deed','complaint-letter'], npcs: ['neighbor'], imagePrompt: '日本鄉村房屋，老舊' },
  ],
  npcs: [
    { id: 'chef-jp', name: '料理長', avatar: '👨‍🍳', role: '民宿廚師', personality: '說話時目光總是落在料理上，像在與食材對話；提到美咲時會突然停下手中的刀', secret: '與美咲有過感情', liesAbout: ['與美咲的關係','對民宿出售的看法'], tellsTruthAbout: ['料理的細節','他注意到的異常'], defaultLocation: 'kitchen-jp',
    schedule: [
      { startHour: 16, endHour: 19, locationId: 'kitchen-jp', activity: '準備晚餐' },
      { startHour: 19, endHour: 21, locationId: 'corridor', activity: '送餐到客房' },
      { startHour: 21, endHour: 24, locationId: 'kitchen-jp', activity: '收拾廚房' },
    ],
    aiPrompt: '你是料理長，沉穩內斂，對料理有執著。你與老闆娘有過一段往事，而她現在要結束一切。你不擅長表達情感，但提到美咲時會流露壓抑的痛苦。' },
    { id: 'maid', name: '女將', avatar: '👘', role: '民宿管家', personality: '動作精準如鐘錶，說話輕得像怕驚動灰塵；獨處時會盯著某個虛空的方向發呆', secret: '美咲的妹妹，被送養', liesAbout: ['她的真實身份','與美咲的關係'], tellsTruthAbout: ['民宿的運作','她注意到的異常'], defaultLocation: 'corridor',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'corridor', activity: '打掃走廊' },
      { startHour: 18, endHour: 20, locationId: 'room-204', activity: '整理客房' },
      { startHour: 20, endHour: 22, locationId: 'office-jp', activity: '協助老闆娘' },
      { startHour: 22, endHour: 24, locationId: 'corridor', activity: '巡視民宿' },
    ],
    aiPrompt: '你是女將，一絲不苟，完美主義。你是老闆娘的親妹妹，但這個秘密可能讓你失去一切。你動作精準，說話輕柔，但內心深處藏著巨大的孤獨。' },
    { id: 'investor-jp', name: '投資人', avatar: '💼', role: '酒店投資人', personality: '西裝筆挺，言辭謹慎，但提到「櫻花屋」時會有一瞬間的失神，像被什麼東西刺了一下', secret: '與美咲有過婚約', liesAbout: ['與美咲的過去','收購的真實目的'], tellsTruthAbout: ['商業上的觀察','他注意到的異常'], defaultLocation: 'shrine',
    schedule: [
      { startHour: 16, endHour: 18, locationId: 'shrine', activity: '在神社參拜' },
      { startHour: 18, endHour: 20, locationId: 'office-jp', activity: '與老闆娘談判' },
      { startHour: 20, endHour: 24, locationId: 'shrine', activity: '在神社散步' },
    ],
    aiPrompt: '你是投資人，言辭謹慎，西裝革履。你曾經與老闆娘有過婚約，而她悔婚了。現在你回來了，說話像在做商業評估，但提到美咲時聲音會變低。' },
    { id: 'neighbor', name: '鄰居', avatar: '👴', role: '民宿鄰居', personality: '和善慈祥，但提到土地時會下意識握緊茶杯；泡茶的手藝極好，像在進行某種補償性的儀式', secret: '土地被美咲強行徵收', liesAbout: ['與美咲的關係','對民宿的看法'], tellsTruthAbout: ['他看到的異常','村裡的傳聞'], defaultLocation: 'neighbor-house',
    schedule: [
      { startHour: 16, endHour: 20, locationId: 'neighbor-house', activity: '喝茶修剪盆栽' },
      { startHour: 20, endHour: 22, locationId: 'corridor', activity: '拜訪民宿' },
      { startHour: 22, endHour: 24, locationId: 'neighbor-house', activity: '在家休息' },
    ],
    aiPrompt: '你是鄰居，和善但怨恨。你的土地被強行徵收，而徵收者現在死了。你說話溫和，但提到土地時會流露壓抑的憤怒。你習慣用泡茶來填補沉默。' },
  ],
  clues: [
    { id: 'auto-email', name: '自動郵件', description: '電腦螢幕上，Outlook的視窗還開著，自動發送規則顯示設定時間是三天前——那時美咲還活著，還是有人已經知道她不會再親自回信了？', locationId: 'office-jp', type: 'physical', isHidden: false, relevance: '有人提前設置了自動發送，以防美咲死後民宿無人管理', unlocksMemory: 'memory-auto-email' ,
    details: [
      { label: '發送時間', content: '郵件的時間戳顯示發送於凌晨三點十七分，但郵件伺服器的登入紀錄顯示，發送者的IP是旅館內部網路。有人在旅館裡親手發送了這封「自動郵件」。' },
      { label: '郵件草稿', content: '郵件伺服器的回收站裡有一封未發送的草稿，內容與已發送的郵件幾乎相同，但收件人欄是空的。有人在最後一刻修改了收件人。' },
      { label: '附件', content: '郵件附件是一份PDF文件，文件的元數據顯示創建者是「M.Takahashi」。創建時間是兩天前，但文件的最後修改時間是今天凌晨兩點五十分。' },
    ],
  },
    { id: 'sale-contract', name: '出售合約', description: '電腦桌面上的合約顯示，美咲準備以市價的六成把民宿賣給連鎖酒店——這個價格低得不合理，像急著擺脫什麼。', locationId: 'office-jp', type: 'document', isHidden: false, relevance: '民宿即將被出售，多人將失業或失去住所', unlocksMemory: 'memory-sale-contract' ,
    details: [
      { label: '簽名筆跡', content: '合約上的買方簽名是「山田建設」，但簽名的筆跡與美咲的筆跡高度相似。美咲用左手寫字，而這個簽名也是左手筆跡——但「山田建設」的社長是右撇子。' },
      { label: '價格計算', content: '市價六成的價格是經過精確計算的，剛好等於美咲剩下的房貸餘額加上三個月的營運成本。這不是隨便開的價——有人知道美咲的確切財務狀況。' },
      { label: '附件', content: '合約的附件是一份土地測量圖，測量圖上標註了民宿地下有一條溫泉脈。這條溫泉脈從未在公開文件上出現過——只有美咲和她的鄰居知道。' },
    ],
  },
    { id: 'old-photo', name: '老照片', description: '房客行李箱夾層裡的照片已經發黃，年輕的美咲抱著嬰兒站在櫻花樹下，背面寫著「給我的女兒，媽媽永遠愛你」。', locationId: 'room-204', type: 'document', isHidden: true, relevance: '你確實是美咲的私生女' },
    { id: 'birth-cert', name: '出生證明', description: '出生證明上的母親欄寫著「美咲」，但名字被黑色麥克筆塗掉了——塗得很用力，紙都快破了，卻還是看得出來。', locationId: 'room-204', type: 'document', isHidden: true, relevance: '你確實是美咲的女兒' },
    { id: 'knife-missing', name: '不見的刀', description: '刀架上的柳刃不見了，留下一個乾淨的矩形缺口。料理長說是拿去磨了，但磨刀石的表面是乾的。', locationId: 'kitchen-jp', type: 'physical', isHidden: false, relevance: '料理刀可能被用來殺人', destroyable: true, timeWindow: { startHour: 19, endHour: 21, reason: '晚上七點後，料理長送餐到客房時，刀架上的缺口才會被人注意到' } },
    { id: 'love-letter-jp', name: '情書', description: '料理長的抽屜裡壓著一封信，紙張已經脆化，美咲二十年前的筆跡：「對不起，我選擇了民宿。」沒有抬頭，沒有署名。', locationId: 'kitchen-jp', type: 'document', isHidden: true, relevance: '料理長與美咲確實有過感情' },
    { id: 'cleaning-log', name: '打掃紀錄', description: '女將的打掃紀錄顯示，案發時她正在打掃204號房——房客的房間。時間精確到分鐘，像某種不在場證明的備忘錄。', locationId: 'corridor', type: 'document', isHidden: false, relevance: '女將在案發時不在辦公室', destroyable: true },
    { id: 'sister-evidence', name: '姐妹證據', description: '女將房間裡的收養文件顯示，她原名「美琴」，生母欄的名字與美咲母親完全相同。出生日期比美咲晚了整整七年。', locationId: 'corridor', type: 'document', isHidden: true, relevance: '女將確實是美咲的妹妹', destroyable: true },
    { id: 'prayer-tablet', name: '繪馬', description: '神社的繪馬上寫著「願美咲改變主意」，字跡工整得像是反覆練習過，署名是投資人的名字——一個不該出現在繪馬上的西裝男人。', locationId: 'shrine', type: 'document', isHidden: false, relevance: '投資人希望美咲改變主意', timeWindow: { startHour: 16, endHour: 18, reason: '傍晚四點到六點，夕陽照在繪馬上，字跡才會變得特別清晰' } },
    { id: 'meeting-photo', name: '會議照片', description: '神社附近便利店的監視器畫面顯示，投資人在案發時間確實在參道上的自動販賣機前買了一罐咖啡。', locationId: 'shrine', type: 'document', isHidden: false, relevance: '投資人有不在場證明' },
    { id: 'land-deed', name: '地契', description: '老人家中保存的地契已經發脆，上面的土地範圍與現在的民宿後院完全重疊——簽名欄裡，老人的名字歪歪扭扭，像被人握著手寫的。', locationId: 'neighbor-house', type: 'document', isHidden: false, relevance: '美咲確實強行徵收了鄰居的土地' },
    { id: 'complaint-letter', name: '投訴信', description: '老人寫給區公所的投訴信已經積了七封，每一封都被原封不動地退回了，信封上寫著「證據不足」。', locationId: 'neighbor-house', type: 'document', isHidden: false, relevance: '老人一直在為土地的事奔走' },
  ],
  truth: {
    murdererId: 'maid',
    method: '女將趁美咲在辦公室獨自工作時，用廚房的料理刀刺入她的後背，然後將現場佈置成強盜入侵的樣子。',
    motive: '美咲發現了她的真實身份，準備解僱她，還要把民宿賣掉',
    timeline: '案發當晚：女將借打掃之名進入辦公室，用料理刀刺殺美咲。然後拿走貴重物品，偽裝成強盜入侵。最後，她設置了自動郵件功能，以防美咲死後民宿無人管理。',
    fullExplanation: '女將是美咲的親妹妹，小時候因為家貧被送養。多年後，她輾轉來到這家民宿工作，漸漸發現了老闆娘就是自己的親姐姐。她沒有相認，只是默默在民宿工作，期待有一天姐姐能認出她。但美咲不僅沒有認出她，還發現了她私自調查家族歷史的事實，準備以「偷竊商業機密」為由解僱她。更讓女將絕望的是，美咲準備把民宿賣給連鎖酒店——這個承載著她所有回憶的地方。走投無路的女將決定結束這一切，用廚房的料理刀，在姐姐最信任的辦公室裡，結束了姐姐的生命。她設置了自動郵件，是因為她希望民宿能繼續運營——以另一種方式延續家族的傳承。',
    eachCharacterSecret: {
      'guest': '美咲年輕時拋棄的私生女',
      'chef-jp': '與美咲有過感情',
      'maid': '美咲的妹妹，被送養',
      'investor-jp': '與美咲有過婚約',
      'neighbor': '土地被美咲強行徵收',
    },
  },

  disruption: {
    name: '女將整理客房',
    interval: 4,
    locations: ['office-jp', 'room-204', 'kitchen-jp', 'corridor', 'shrine', 'neighbor-house'],
    hitMessage: '女將跪坐在{location}門口，輕輕敲門。「要打掃了，請稍後再來。」你被禮貌地請了出去。',
    missMessage: '女將的腳步聲和擦拭聲從{location}傳來',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：你是兇手。你必須銷毀指向自己的線索、栽贓證據到他人身上，並在對話中誤導調查方向，才能逃脫制裁。',
    'config': {
      'choices': [
        {
          'id': 'welcome-choice-1',
          'condition': {
            'type': 'location',
            'locationId': 'office-jp'
          },
          'question': '櫃檯後面的登記簿顯示，昨晚有一個不該出現的名字。你會怎麼做？',
          'options': [
            {
              'label': '報警',
              'value': 'police'
            },
            {
              'label': '先告訴旅館老闆',
              'value': 'tell_owner'
            },
            {
              'label': '自己先調查這個人',
              'value': 'investigate'
            }
          ]
        },
        {
          'id': 'welcome-choice-2',
          'condition': {
            'type': 'clue',
            'clueId': 'knife-missing'
          },
          'question': '你在廚房發現刀架上少了那把柳刃，磨刀石是乾的。料理長說是拿去磨了，但你知道這把刀可能就在某個人的背後插著——或者正要插進某個人的背後。這間民宿裡，連料理都藏著殺意。你會怎麼做？',
          'options': [
            { 'label': '直接質問料理長刀的下落', 'value': 'confront' },
            { 'label': '搜查廚房每個角落，找出藏起來的刀', 'value': 'search' },
            { 'label': '假裝沒發現，暗中觀察料理長的行動', 'value': 'observe' }
          ]
        }
      ]
    }
  }};
