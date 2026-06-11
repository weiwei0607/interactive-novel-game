import type { Story } from '../../../types/game';

export const coffeeStory: Story = {
  id: 'coffee',
  title: '咖啡冷掉之前',
  subtitle: '咖啡師每天為一個不存在的客人做咖啡',
  era: '現代',
  setting: '台北東區的一家獨立咖啡館',
  hasPrologue: true,
  prologueSynopsis:
    `咖啡館還沒開門，晨光從百葉窗的縫隙裡漏進來，在地板上切出一道一道金黃色的條紋。空氣裡飄著昨晚殘留的咖啡香，和剛磨好的新豆氣味混合成一種讓人想深呼吸的味道。\n\n陳老闆站在吧台後面，擦拭那只用了十五年的手沖壺。小林在靠窗的第二張桌子上放了一杯拿鐵，奶泡上的拉花是一顆心——這是今天的第一次練習。陳浩從倉庫搬出一箱新到的杯子，眼鏡上沾了一點灰塵；陳太太推門進來，珍珠項鍊在晨光裡閃了一下，她說「老樣子」；阿龍扛著一袋豆子進門，T恤上的字被汗水暈開了一點；房東站在門口，公文包夾在腋下，看著菜單板說「考慮漲租的事，我們改天談」。\n\n陳老闆舉起那杯練習用的拿鐵，對著光看了看拉花的形狀，說：「心要再小一點。太大了，容易碎。」`,
  synopsis: '每天上午十點，小林會在靠窗的第二張桌子放一杯拿鐵。奶泡上的拉花永遠是一顆心，但這個座位從來沒有人來過。老闆陳先生總是在這時走到桌邊，放下一张摺成方塊的紙條，然後離開。直到這天，十點的咖啡還在冒熱氣，陳先生卻倒在吧台後面，手裡握著那杯永遠喝不完的咖啡。五位常客各懷秘密，而紙條上的秘密，比死亡更燙手。',
  victim: '陳老闆（咖啡館老闆，55歲）',
  characters: [
    { id: 'barista', name: '你（小林）', role: '咖啡師', avatar: '☕', description: '圍裙上別著「小林」的銅牌，磨豆機的聲音蓋過了她的嘆息，沖咖啡時手腕翻轉的角度像某種儀式。', secret: '她從未見過母親，但母親留下的懷錶裡刻著一個地址——這家咖啡館。她來這裡工作了五年，等一個從未出現的相認。', motive: '陳老闆終於認出了那枚懷錶，卻對她說「妳母親是我這輩子最大的錯誤」，然後準備把店留給養子', alibi: '說在吧台做咖啡', secretPrologue: '這間咖啡館的磨豆機聲音變了。以前師傅在的時候，機器會發出一種特定的節奏，像心跳。今天這個節奏不對——有人動過機器內部的零件，就像有人動過我母親留在這裡的那只懷錶。我已經找了十年。',
    hiddenAgenda: '找到母親當年留在咖啡館的懷錶',
      isPlayable: true },
    { id: 'adopted', name: '陳浩', role: '老闆養子', avatar: '🧑', description: '眼鏡永遠擦得一塵不染，說話前會先推一下鏡框，像在調整某種焦距。', secret: '他三個月前就看到了那份親子鑑定報告，也看到了陳老闆修改遺囑的草稿。他把報告燒了，但遺囑還在律師那裡。', motive: '陳老闆最近改變主意，想把店留給小林——那個突然出現的「女兒」，而他這個養了二十五年的兒子將一無所有', alibi: '說在倉庫盤點', hiddenAgenda: '銷毀那份親子鑑定報告的副本', tool: { name: '藥瓶殘液', description: '可以塗抹到任何杯具或食物上，讓目標成為下毒嫌疑犯' }, secretPrologue: '咖啡的苦味在舌尖停留的時間變長了。你記得自己調整過磨豆機的刻度，但今天的粉細得不正常——細到會讓萃取時間多兩秒，多兩秒的苦。你站在預訂座位旁，看著那杯永遠不會有人來喝的拿鐵，心裡有一個聲音說：這是最後一次了。',
      isPlayable: true },
    { id: 'ex-wife-cf', name: '陳太太', role: '老闆前妻', avatar: '👩', description: '珍珠項鍊的扣環總是轉到頸後，塗著深色口紅，說話時像在教育一個不成器的學生。', secret: '他們離婚時她簽了保密協議，因為陳老闆發現她從公司帳戶轉走了兩百萬——而她以為那筆錢早已成為歷史。', motive: '陳老闆上個月說「我準備報警了」，而她已經沒有兩百萬可以還了', alibi: '說在附近的百貨公司逛街', hiddenAgenda: '找到並銷毀挪用公款的所有證據',
      isPlayable: true },
    { id: 'supplier', name: '阿龍', role: '咖啡豆供應商', avatar: '📦', description: 'T恤上印著「人生苦短，咖啡要濃」，送貨時總是哼著走調的老歌，但算帳時眼睛變得異常清醒。', secret: '同一批豆子，他用三成的廉價豆替換，差價養活了他兒子的補習班——而陳老闆是唯一會做杯測的人。', motive: '陳老闆上週的杯測結果寫著「風味異常，疑似混豆」，而新供應商的合約已經放在櫃檯上了', alibi: '說在送貨去別家', hiddenAgenda: '確保杯測報告不會被公開',
      isPlayable: true },
    { id: 'landlord-cf', name: '房東', role: '房東', avatar: '🏠', description: '公文包的皮革亮得能照見人影，說話時喜歡用「從商業角度來看」開頭，像在為所有事情標價。', secret: '對街連鎖咖啡品牌的加盟意向書已經簽了字，只差這個店面騰出來——而租約還有三年。', motive: '陳老闆拒絕搬遷，還說「我會告你違約」，如果官司拖下去，連鎖品牌的獨家代理權就沒了', alibi: '說在家裡看電視', hiddenAgenda: '找到陳老闆同意提前解約的書面文件',
      isPlayable: true },
  ],
  locations: [
    { id: 'counter', name: '吧台', icon: '☕', description: '吧台的木紋被十五年來的咖啡漬滲透成琥珀色，陳老闆倒下的位置旁，那杯未喝完的咖啡還冒著最後一縷熱氣。', clues: ['last-coffee','poison-test'], npcs: [], imagePrompt: '咖啡館吧台，咖啡杯' },
    { id: 'reserved', name: '預訂座位', icon: '🪑', description: '靠窗第二張桌子，晨光從百葉窗漏進來，在桌面上切出一道道明暗相間的條紋，杯子裡的拉花已經開始塌陷。', clues: ['note-tradition','empty-cup'], npcs: ['barista'], imagePrompt: '咖啡館座位，咖啡杯，空蕩蕩' },
    { id: 'storage', name: '倉庫', icon: '📦', description: '倉庫裡的麻布袋堆成小山，每一袋都標著產地，但最底層的幾袋標籤被撕掉了，只留下膠水的痕跡。', clues: ['fake-beans','contract-change'], npcs: ['adopted'], imagePrompt: '咖啡館倉庫，咖啡豆袋' },
    { id: 'mall', name: '百貨公司', icon: '🛍️', description: '百貨公司的化妝品專櫃飄著甜膩的香氣，電扶梯的機械聲像某種催眠，收銀台的小票還留著陳太太的指紋。', clues: ['receipt-cf','cctv-cf'], npcs: ['ex-wife-cf'], imagePrompt: '台北百貨公司' },
    { id: 'delivery', name: '送貨路線', icon: '🚚', description: '咖啡館後巷的地面濕漉漉的，貨車的排氣管還在滴水，車廂裡混雜著咖啡香和柴油味。', clues: ['delivery-log','fake-invoice'], npcs: ['supplier'], imagePrompt: '台北後巷，貨車' },
    { id: 'office-cf', name: '房東辦公室', icon: '📋', description: '房東的辦公室裡，冷氣開得太強，租約文件在桌面上攤開像一張張投降書，窗外正對著咖啡館的招牌。', clues: ['new-contract','eviction-notice'], npcs: ['landlord-cf'], imagePrompt: '房東辦公室，文件' },
  ],
  npcs: [
    { id: 'adopted', name: '陳浩', avatar: '🧑', role: '老闆養子', personality: '推眼鏡的動作像某種防禦機制，說話溫和但每個字都經過秤量；提到「繼承」時嘴角會微微顫動', secret: '知道小林是私生女，故意詆毀她', liesAbout: ['與小林的關係','陳老闆的最後決定'], tellsTruthAbout: ['他對咖啡館的感情','他注意到的異常'], defaultLocation: 'storage',
    schedule: [
      { startHour: 8, endHour: 10, locationId: 'storage', activity: '在倉庫盤點' },
      { startHour: 10, endHour: 12, locationId: 'counter', activity: '到吧台幫忙' },
      { startHour: 12, endHour: 14, locationId: 'storage', activity: '回到倉庫' },
    ],
    aiPrompt: '你是老闆養子陳浩，溫和但自卑。你即將繼承的東西可能不再屬於你。你說話有禮貌，但內心充滿不安，提到繼承和遺囑時會變得異常緊張。' },
    { id: 'ex-wife-cf', name: '陳太太', avatar: '👩', role: '老闆前妻', personality: '優雅從容，但捏著咖啡杯柄的手指關節發白；提到「錢」時會下意識摸向手提包', secret: '挪用公款被陳老闆發現', liesAbout: ['與陳老闆的關係','她的財務狀況'], tellsTruthAbout: ['她對咖啡館的感情','她聽到的傳聞'], defaultLocation: 'mall',
    schedule: [
      { startHour: 8, endHour: 10, locationId: 'mall', activity: '在百貨公司逛街' },
      { startHour: 10, endHour: 12, locationId: 'reserved', activity: '到預訂座位喝咖啡' },
      { startHour: 12, endHour: 14, locationId: 'mall', activity: '回到百貨公司' },
    ],
    aiPrompt: '你是前妻陳太太，優雅但怨恨。你們離婚的原因是見不得光的。你維持著體面，但內心深處充滿恐懼，提到財務問題時會變得防衛。' },
    { id: 'supplier', name: '阿龍', avatar: '📦', role: '咖啡豆供應商', personality: '笑聲很大，但笑完後會迅速觀察對方反應；被問到豆子來源時會不自覺摸向貨車方向', secret: '在咖啡豆中摻假', liesAbout: ['咖啡豆的品質','與陳老闆的合約'], tellsTruthAbout: ['咖啡行業的內幕','他看到的異常'], defaultLocation: 'delivery',
    schedule: [
      { startHour: 8, endHour: 10, locationId: 'delivery', activity: '在送貨' },
      { startHour: 10, endHour: 12, locationId: 'counter', activity: '到吧台聊天' },
      { startHour: 12, endHour: 14, locationId: 'delivery', activity: '繼續送貨' },
    ],
    aiPrompt: '你是供應商阿龍，豪爽但膽小。你的貨有問題，而你的客戶發現了。你習慣用笑聲掩飾緊張，在提到咖啡豆品質時會變得閃爍其詞。' },
    { id: 'landlord-cf', name: '房東', avatar: '🏠', role: '房東', personality: '說話像念合約條款，沒有贅字；提到「商業價值」時眼睛會發亮，像看到獵物', secret: '計畫收回店面開連鎖店', liesAbout: ['與陳老闆的租約','他的真正計畫'], tellsTruthAbout: ['商業上的觀察','他注意到的異常'], defaultLocation: 'office-cf',
    schedule: [
      { startHour: 8, endHour: 12, locationId: 'office-cf', activity: '在辦公室處理文件' },
      { startHour: 12, endHour: 14, locationId: 'counter', activity: '到吧台談判' },
    ],
    aiPrompt: '你是房東，圓滑計算。這個店面即將到期，你有更大的計畫。你說話精確冷靜，像在做商業簡報，對情感話題毫無耐心。' },
  ],
  clues: [
    { id: 'last-coffee', name: '最後的咖啡', description: '陳老闆手中的咖啡杯還留著唇印，杯底的殘液經過檢測含有過量的心得安——一種會讓心臟漸漸停止跳動的藥物。', locationId: 'counter', type: 'physical', isHidden: false, relevance: '咖啡被下毒了' , destroyable: true,
    details: [
      { label: '咖啡油脂', content: '咖啡表面的油脂層有一圈不規則的裂痕，像是攪拌後又重新凝固的。這杯咖啡被放了很久，久到表面的油脂膜已經開始氧化變色。' },
      { label: '杯底沉澱', content: '杯底有一層極細的白色粉末，混在咖啡渣裡幾乎看不見。粉末不溶於水，沉在杯底像一層薄薄的霜。' },
      { label: '指紋', content: '瓷杯外壁有兩組指紋：一組是完整的，屬於經常端杯子的人；另一組只有指尖部分，像是有人戴著手套拿起了這個杯子，又放下。' },
    ],
  },
    { id: 'poison-test', name: '毒物檢測', description: '吧台的每一個奶缸、糖罐和咖啡壺都檢測出了微量毒物——但只有陳老闆那杯濃度足以致命。兇手知道他一定會喝那一杯。', locationId: 'counter', type: 'physical', isHidden: false, relevance: '兇手知道陳老闆一定會喝某一杯咖啡', destroyable: true, timeWindow: { startHour: 10, endHour: 12, reason: '上午十點到十二點，吧台最忙碌的時候，毒藥才會被混入咖啡' } ,
    details: [
      { label: '檢測試紙', content: '吧台上的檢測試紙有兩組：一組顯示陽性反應，另一組是對照組。對照組的試紙被人為浸泡過純水——有人提前準備了「乾淨」的對照組，以備不時之需。' },
      { label: '毒物濃度', content: '各杯咖啡的毒物濃度呈梯度分布：陳老闆那杯最高，吧台左側的次之，右側的幾乎沒有。兇手知道陳老闆固定坐在左側第一個位置。' },
      { label: '奶缸', content: '奶缸的內壁有一圈淡淡的油漬，油漬裡檢測出微量毒物。有人把毒藥先溶在奶精裡，再讓陳老闆自己「選擇」加奶——但他每次都會加。' },
    ],
  },
    { id: 'note-tradition', name: '紙條傳統', description: '預訂座位上的紙條摺成方塊，已經成為一種儀式。這張寫著「給永遠的十點」，落款「A」——陳老闆亡妻的名字。', locationId: 'reserved', type: 'document', isHidden: false, relevance: 'A可能是陳老闆的某個重要的人', destroyable: true },
    { id: 'empty-cup', name: '空杯子', description: '預訂座位上的咖啡從來沒有人喝過，但杯子總是乾淨的。有人每天來清走冷掉的咖啡，卻從不露面——像是某種贖罪。', locationId: 'reserved', type: 'physical', isHidden: false, relevance: '有人每天來清理，但從不露面', unlocksMemory: 'memory-ritual', timeWindow: { startHour: 8, endHour: 10, reason: '早上八點到十點，靠窗座位還沒有客人，空杯才會顯得特別刺眼' } },
    { id: 'fake-beans', name: '摻假咖啡豆', description: '倉庫裡的豆子袋一開，上層是衣索比亞的耶加雪菲，底下卻混著廉價的越南羅布斯塔，比例剛好三成。', locationId: 'storage', type: 'physical', isHidden: false, relevance: '阿龍確實在摻假', unlocksMemory: 'memory-warehouse' },
    { id: 'contract-change', name: '合約變更', description: '陳老闆桌上一份已簽字的終止合約，準備與新的供應商合作，生效日是明天。', locationId: 'storage', type: 'document', isHidden: false, relevance: '阿龍有強烈的動機', unlocksMemory: 'memory-betrayal' },
    { id: 'receipt-cf', name: '購物發票', description: '發票顯示陳太太在百貨公司買了一支口紅，時間是九點五十五分。從百貨公司到咖啡館，步行只需要五分鐘。', locationId: 'mall', type: 'document', isHidden: false, relevance: '陳太太不在場的證明很短' },
    { id: 'cctv-cf', name: '監視器畫面', description: '百貨公司的監視器顯示，陳太太十點零五分已經離開商場，之後的畫面裡沒有她的身影。', locationId: 'mall', type: 'physical', isHidden: false, relevance: '陳太太有不在場證明' },
    { id: 'delivery-log', name: '送貨紀錄', description: '送貨紀錄顯示，案發當天阿龍比平常多送了一趟咖啡館——理由是「補送忘記的發票」。', locationId: 'delivery', type: 'document', isHidden: false, relevance: '阿龍案發時在咖啡館附近' },
    { id: 'fake-invoice', name: '假發票', description: '貨車儀表板下的發票顯示，同樣數量的豆子，他開給陳老闆的價格比開給其他客戶高出四成。', locationId: 'delivery', type: 'document', isHidden: true, relevance: '阿龍的財務狀況有問題' },
    { id: 'new-contract', name: '新租約', description: '房東辦公室裡的新租約已經簽好，承租方是連鎖咖啡品牌，起租日寫著下個月一號。', locationId: 'office-cf', type: 'document', isHidden: false, relevance: '房東計畫把店面收回' },
    { id: 'eviction-notice', name: '搬遷通知', description: '電腦裡的搬遷通知還沒打印出來，草稿上的遣詞用句卻已經精確到法律條文的級別。', locationId: 'office-cf', type: 'document', isHidden: false, relevance: '房東還沒正式通知陳老闆' },
  ],
  truth: {
    murdererId: 'adopted',
    method: '陳浩知道陳老闆每天上午十點會喝預訂座位上的那杯咖啡（那是為他過世的妻子準備的，陳老闆總是在妻子「來」的時候一起喝）。他在那杯咖啡中下了心臟藥物，因為他知道陳老闆一定會喝。',
    motive: '陳老闆最近發現小林是他的私生女，準備改遺囑把店留給她',
    timeline: '上午十點前：陳浩在預訂座位的咖啡中下了毒。十點：陳老闆喝下咖啡，心臟病發。十點十五分：陳老闆倒在吧台前。',
    fullExplanation: '陳浩是陳老闆收養的兒子，一直以為自己會繼承咖啡館。但最近陳老闆發現了小林是自己的私生女，並且準備改遺囑。陳浩從醫務室偷了心臟藥物，知道陳老闆每天上午十點都會為亡妻做一杯咖啡並一起喝——這是他們的秘密儀式。陳浩在那杯咖啡中下了毒，因為他知道陳老闆一定會喝。陳老闆倒在吧台前時，手裡還握著那杯咖啡。',
    eachCharacterSecret: {
      'barista': '陳老闆的私生女',
      'adopted': '知道小林是私生女，故意詆毀她',
      'ex-wife-cf': '挪用公款被陳老闆發現',
      'supplier': '在咖啡豆中摻假',
      'landlord-cf': '計畫收回店面開連鎖店',
    },
  },
  disruption: {
    name: '老闆娘過來收杯子',
    interval: 4,
    locations: ['counter', 'reserved', 'storage', 'mall', 'delivery', 'office-cf'],
    hitMessage: '老闆娘端著托盤走進{location}，看見你時愣了一下。「這裡還沒打掃呢，你怎麼進來的？」她狐疑地問。你只好尷尬地退出去。',
    missMessage: '老闆娘的腳步聲和杯盤碰撞聲從{location}傳來',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。你是陳浩，親手下了毒。你必須在調查過程中銷毀對自己不利的線索，並利用「藥瓶殘液」將嫌疑轉嫁給他人。若關鍵證據被發現，真相將無法掩蓋。',
    'config': {
      'choices': [
        {
          'id': 'cf-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'last-coffee'
          },
          'question': '你發現了母親的懷錶，藏在咖啡機的夾層裡。這隻錶已經停了二十年，指針停在凌晨三點十七分——正是她離開這個世界的時間。你會怎麼做？',
          'options': [
            { 'label': '把懷錶拿出來，當眾質問房東', 'value': 'confront' },
            { 'label': '默默收好，帶著它離開這裡', 'value': 'leave' },
            { 'label': '把懷錶放回原處，假裝沒看見', 'value': 'ignore' }
          ]
        },
        {
          'id': 'cf-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'storage'
          },
          'question': '倉庫深處的豆子袋下層混著廉價的越南羅布斯塔，陳浩的眼鏡在昏暗裡反著光。這家咖啡館的靈魂正在被販賣，而你聞得出來。你會怎麼做？',
          'options': [
            { 'label': '當眾揭發摻假，捍衛咖啡館的誠信', 'value': 'expose' },
            { 'label': '私下告訴陳老闆，讓他自己裁決', 'value': 'whisper' },
            { 'label': '什麼都不說，這不是你的戰爭', 'value': 'silent' }
          ]
        }
      ]
    }
  }};
