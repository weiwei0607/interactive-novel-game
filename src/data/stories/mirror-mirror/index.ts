import type { Story } from '../../../types/game';

export const mirrorMirrorStory: Story = {
  id: 'mirror-mirror',
  title: '鏡中鏡',
  subtitle: '魔術師在「消失術」中真的消失了，只剩一灘血跡',
  era: '現代',
  setting: '城市中心的魔術劇場，週末晚間演出',
  hasPrologue: true,
  prologueSynopsis:
    `演出前三小時，後台一片混亂卻有條不紊。鏡子從天花板垂掛下來，每一面都擦得發亮，像無數隻眼睛等待著觀眾入場。\n\n「鏡中人」站在化妝間中央，任由妻子為他整理領結。助手在檢查魔術箱的暗門，動作輕柔得像在撫摸嬰兒；劉大師靠在門邊，口袋裡露出一張王牌的一角；金老闆的腕錶在燈光下閃爍，他低聲對魔術師說著什麼，魔術師點了點頭。機關師獨自坐在機關室裡，指縫裡的機油在黑暗裡幾乎看不見。\n\n魔術師對著鏡子裡的自己說：「今晚，我會讓全世界記住我的名字。」鏡子裡的他點頭同意，但嘴角似乎比本人揚得更高了一點。`,
  synopsis: '帷幕落下，掌聲還在劇場的穹頂下迴盪。觀眾以為這只是「鏡中人」最精彩的一次演出——他的招牌節目「鏡中消失術」向來無人能解。但當助手顫抖著打開魔術箱，裡面沒有魔術師，只有一灘還在擴散的血跡，和一張字條：「這次是真的消失了。」五位劇場成員各懷鬼胎，而鏡子從不說謊。',
  victim: '「鏡中人」魔術師（42歲）',
  characters: [
    { id: 'assistant-you', name: '你（助手）', role: '魔術師助手', avatar: '🎩', description: '燕尾服下襬還沾著舞台上的金粉，候場時總是數到三十秒才深呼吸，像某種儀式。', secret: '姐姐的日記最後一頁寫著「鏡中人的箱子裡有秘密」。三個月後，姐姐失蹤了。', motive: '懷疑魔術師與姐姐失蹤有關，這五年蟄伏在他身邊，只為找到打開那口箱子的鑰匙', alibi: '說在後台準備道具', hiddenAgenda: '找到打開魔術師那口箱子的鑰匙',
      isPlayable: true },
    { id: 'rival', name: '劉大師', role: '競爭對手', avatar: '🃏', description: '西裝口袋裡永遠插著一張王牌，說話時嘴角先揚左邊，像在對空氣發牌。', secret: '他的「鏡花水月」和「鏡中人」的「鏡中消失術」連機關破綻的位置都一模一樣。', motive: '「鏡中人」今晚原本要在謝幕時揭露他的抄襲，整個魔術圈都會看著他身敗名裂', alibi: '說在觀眾席看表演', hiddenAgenda: '確保「鏡中人」無法在謝幕時揭露抄襲',
      isPlayable: true },
    { id: 'investor', name: '金老闆', role: '劇場投資人', avatar: '💰', description: '腕錶的鑽石錶圈在後台燈光下一閃一閃，像某種計時器的倒數。笑容永遠只露出上排牙齒。', secret: '劇場的票房數字從來不對。錢從觀眾的口袋流進票務系統，再流進他在海外的戶頭。', motive: '「鏡中人」發現了洗錢證據，準備明天報警，而明天是星期一——稅務局上班的日子', alibi: '說在貴賓室接待客人', hiddenAgenda: '銷毀劇場洗錢的帳目證據',
      isPlayable: true },
    { id: 'wife', name: '現任妻子', role: '魔術師妻子', avatar: '👸', description: '珍珠耳環隨著頭部的轉動輕輕搖晃，像兩顆被懸吊的眼淚，紅唇抿成一道不再期待的線。', secret: '行李箱已經收拾好了。機票在助手那裡。一切只差最後一場演出結束。', motive: '「鏡中人」三天前發現了私情，當著她的面說「妳永遠別想從我這裡帶走一分錢」', alibi: '說在化妝間補妝', hiddenAgenda: '確保行李箱和機票不被發現',
      isPlayable: true },
    { id: 'engineer-m', name: '機關師', role: '魔術機關設計師', avatar: '⚙️', description: '指縫裡嵌著洗不乾淨的機油，看舞台的角度總是斜四十五度——他在看機關，不是表演。', secret: '他在機關的夾層裡加裝了隱藏裝置，讓魔術師在表演中「意外」受傷，以此勒索。',
      secretPrologue: '你記得自己在機關室裡待了很長時間。手指上有機油的味道，還有一種說不上來的金屬氣味。你好像在做什麼重要的事情，但具體是什麼？腦袋裡有一塊空白，像是有人用橡皮擦擦掉了什麼。', motive: '「鏡中人」不僅拒絕支付勒索金，還冷笑著說「明天我會帶警察去參觀你的機關室」', alibi: '說在機關室檢修設備', hiddenAgenda: '銷毀機關夾層裡的隱藏裝置',
      isPlayable: true,
      tool: { name: '機關潤滑油', description: '可以擦除金屬表面的指紋與痕跡' } },
    { id: 'magician-v', name: '「鏡中人」', role: '受害者', avatar: '💀', description: '魔術師。', secret: '傷害了多人的利益', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'stage-m', name: '舞台', icon: '🎭', description: '魔術箱還立在舞台中央，血跡從箱底的縫隙滲出，在聚光燈下像一條緩慢爬行的蛇。空氣裡有鐵鏽和舞台煙霧的甜味。', clues: ['magic-box','blood-trail'], npcs: [], imagePrompt: '魔術劇場舞台，魔術箱，血跡' },
    { id: 'prop-room', name: '道具室', icon: '🎩', description: '帽子、撲克牌和鏡子堆疊成沉默的建築，每一面鏡子都可能藏著暗門，每一頂帽子都可能是陷阱。', clues: ['trap-device','sister-photo'], npcs: ['assistant-you'], imagePrompt: '魔術道具室，帽子，卡牌' },
    { id: 'audience-m', name: '觀眾席', icon: '👥', description: '演出結束後的觀眾席像一片被潮水退去的沙灘，座位上殘留著體溫和爆米花桶，還有一隻遺落的高跟鞋。', clues: ['ticket-stub','rival-note'], npcs: ['rival'], imagePrompt: '劇場觀眾席，空蕩蕩' },
    { id: 'vip', name: '貴賓室', icon: '🥂', description: '天鵝絨沙發的凹陷裡還留著坐過的痕跡，香檳杯的杯沿有一枚口紅印，空氣裡殘留著香水與雪茄的纏綿。', clues: ['money-book','blackmail-letter'], npcs: ['investor'], imagePrompt: '劇場貴賓室，沙發' },
    { id: 'dressing-m', name: '化妝間', icon: '💄', description: '化妝鏡周圍的燈泡還亮著，鏡面上貼滿的報導剪報像一層繭，把這個房間裹成一個自戀的棺材。', clues: ['affair-text','will-change'], npcs: ['wife'], imagePrompt: '魔術師化妝間，鏡子，剪報' },
    { id: 'machine', name: '機關室', icon: '⚙️', description: '滑輪、鋼索和暗門的森林，金屬摩擦的氣味嗆鼻，某處傳來液壓系統規律的嘶嘶聲，像一條機械蛇在吐信。', clues: ['broken-trap','ransom-demand'], npcs: ['engineer-m'], imagePrompt: '舞台機關室，滑輪，暗門' },
  ],
  npcs: [
    { id: 'rival', name: '劉大師', avatar: '🃏', role: '競爭對手', personality: '說話像發牌，一張一張甩出來，永遠不正眼看人，卻在對方轉身時盯著背影', secret: '招牌節目是偷來的', liesAbout: ['他的節目原創性','與「鏡中人」的關係'], tellsTruthAbout: ['魔術圈的潛規則','他觀察到的異常'], defaultLocation: 'audience-m',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'audience-m', activity: '在觀眾席看表演' },
      { startHour: 20, endHour: 22, locationId: 'vip', activity: '到貴賓室聊天' },
      { startHour: 22, endHour: 24, locationId: 'audience-m', activity: '回到觀眾席' },
    ],
    aiPrompt: '你是競爭對手劉大師，傲慢自大，愛炫耀，但內心自卑。你的招牌節目來路不正，而你知道這個秘密的人死了。你說話像發牌，喜歡用魔術術語，在提到「鏡中人」時會不自覺地提高音量。' },
    { id: 'investor', name: '金老闆', avatar: '💰', role: '劇場投資人', personality: '握手時力道剛好三秒，笑時露上排牙齒，轉身時表情會瞬間卸妝', secret: '用劇場洗錢千萬', liesAbout: ['劇場的財務狀況','與「鏡中人」的關係'], tellsTruthAbout: ['商業上的觀察','他注意到的人際關係'], defaultLocation: 'vip',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'vip', activity: '在貴賓室接待客人' },
      { startHour: 20, endHour: 22, locationId: 'machine', activity: '到機關室檢查' },
      { startHour: 22, endHour: 24, locationId: 'vip', activity: '回到貴賓室' },
    ],
    aiPrompt: '你是投資人金老闆，圓滑陰冷。你與魔術師有著見不得光的金錢往來。你說話像做簡報，條理分明，但對細節異常警覺。' },
    { id: 'wife', name: '現任妻子', avatar: '👸', role: '魔術師妻子', personality: '補妝的動作優雅而機械，像在完成某種日程表上的待辦事項；提到丈夫時用「他」，不用名字', secret: '與助手有私情，計畫私奔', liesAbout: ['與「鏡中人」的感情','她的真實意圖'], tellsTruthAbout: ['「鏡中人」的性格弱點','她聽到的傳聞'], defaultLocation: 'dressing-m',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'dressing-m', activity: '在化妝間補妝' },
      { startHour: 20, endHour: 22, locationId: 'stage-m', activity: '到舞台觀禮' },
      { startHour: 22, endHour: 24, locationId: 'dressing-m', activity: '回到化妝間' },
    ],
    aiPrompt: '你是魔術師的妻子，美豔冷漠。你的婚姻早已名存實亡，你在為私奔做準備。你說話帶著貴婦式的慵懶，但每個回答都經過計算，從不流露真實情緒。' },
    { id: 'engineer-m', name: '機關師', avatar: '⚙️', role: '魔術機關設計師', personality: '對話時目光總是越過對方肩膀，看向某個不存在於這間房間的機械結構；手指永遠在比畫著什麼', secret: '在機關中做手腳勒索魔術師', liesAbout: ['機關的運作','勒索的事實'], tellsTruthAbout: ['技術細節','他注意到的異常'], defaultLocation: 'machine',
    schedule: [
      { startHour: 18, endHour: 22, locationId: 'machine', activity: '在機關室檢修設備' },
      { startHour: 22, endHour: 24, locationId: 'prop-room', activity: '到道具室整理' },
    ],
    aiPrompt: '你是機關師，嚴謹偏執。你掌握了讓魔術師受傷的秘密，但對方拒絕付錢。你不擅長社交，說話充滿技術術語，提到機關時眼睛會發光。' },
  ],
  clues: [
    { id: 'magic-box', name: '魔術箱', description: '魔術箱的內壁還留著噴濺的血點，箱底的逃生翻板被人從內側焊死——有人不想讓裡面的人出來。', locationId: 'stage-m', type: 'physical', isHidden: false, relevance: '兇手破壞了逃生機關', timeWindow: { startHour: 20, endHour: 22, reason: '演出進行時，魔術箱才會被搬到舞台上' } ,
    details: [
      { label: '機關結構', content: '魔術箱的夾層比設計圖紙上多了一層，多出的空間恰好能容納一個成年人蜷縮其中。夾層內壁有抓痕，抓痕裡嵌著幾縷頭髮——是棕色的，和魔術師的髮色不同。' },
      { label: '血跡反應', content: '用魯米諾試劑噴灑後，夾層內壁浮現出大面積的血跡反應，呈噴濺狀。這裡曾經發生過劇烈掙扎，而且有人試圖擦拭乾淨。' },
      { label: '機關潤滑油', content: '滑軌上的潤滑油是新換的，但油裡混著一種特殊的金屬粉末。這種粉末只出現在劇場的機關室——而機關師今晚一直都在那裡。' },
    ],
  },
    { id: 'blood-trail', name: '血跡痕跡', description: '血跡從魔術箱延伸到舞台側翼的暗門，斷斷續續，像有人在黑暗中拖著什麼沉重的東西。', locationId: 'stage-m', type: 'physical', isHidden: false, relevance: '屍體被移動過' },
    { id: 'trap-device', name: '機關陷阱', description: '道具室的備用機關上，有一處改裝的痕跡——夾層裡藏著鋒利的金屬片，足以在合攏時切斷喉嚨。', locationId: 'prop-room', type: 'physical', isHidden: false, relevance: '有人計畫讓魔術師在表演中受傷', timeWindow: { startHour: 18, endHour: 20, reason: '演出前兩小時，機關師才會在道具室做最後調試' },
      unlocksMemory: 'memory-weapon',
    details: [
      { label: '改裝痕跡', content: '機關的夾層裡藏著鋒利的金屬片，金屬片的邊緣有手工打磨的痕跡。打磨的紋路顯示，這是一個左撇子做的——劇場裡左撇子只有機關師和現任妻子。' },
      { label: '觸發機制', content: '機關的觸發裝置被改接到了舞台燈光的控制線路上。當聚光燈亮起時，機關就會啟動——兇手知道魔術師出場時一定會有聚光燈。' },
      { label: '潤滑油', content: '滑軌上的潤滑油與機關室的庫存不同，這是一種低溫專用潤滑油，通常用於冷凍設備。劇場裡沒有冷凍設備，但後台有一台老舊的冰櫃——那是范小美的媽媽放便當的地方。' },
    ],
  },
    { id: 'sister-photo', name: '姐姐照片', description: '抽屜深處的照片裡，姐姐穿著和「鏡中人」同台的演出服，背面寫著「最後一次表演，他說要教我真正的消失術」。', locationId: 'prop-room', type: 'document', isHidden: true, relevance: '你確實在調查姐姐失蹤案' },
    { id: 'ticket-stub', name: '票根', description: '第一排正中央的票根還夾在座位縫裡，視角正對魔術箱的正面——這裡看得見表演，也看得見破綻。', locationId: 'audience-m', type: 'document', isHidden: false, relevance: '劉大師有最佳視角觀察表演' },
    { id: 'rival-note', name: '挑戰書', description: '西裝內袋裡的紙條摺成撲克牌形狀，上面只有一句話：「今晚，我會讓所有人知道誰才是真正的鏡中人。」', locationId: 'audience-m', type: 'document', isHidden: false, relevance: '劉大師計畫在今晚揭露什麼' },
    { id: 'money-book', name: '洗錢帳本', description: '貴賓室的保險箱裡，帳本上的數字像一條條寄生蟲，把觀眾的票錢一點一點吸進海外的黑洞。', locationId: 'vip', type: 'document', isHidden: true, relevance: '金老闆確實在洗錢' },
    { id: 'blackmail-letter', name: '勒索信', description: '「鏡中人」的親筆信攤在菸灰缸旁：「明天之前準備好五百萬，否則證據會出現在稅務局。」字跡潦草，像憤怒時寫的。', locationId: 'vip', type: 'document', isHidden: false, relevance: '「鏡中人」在勒索金老闆' },
    { id: 'affair-text', name: '私情簡訊', description: '手機螢幕還亮著，簡訊對話裡「他」和「我」的計畫詳盡得像一份逃脫魔術的腳本：「演出結束，後門，車在等。」', locationId: 'dressing-m', type: 'document', isHidden: true, relevance: '妻子與助手有私情' },
    { id: 'will-change', name: '遺囑修改', description: '律師樓的檔案顯示，三天前「鏡中人」修改了遺囑——所有財產捐給魔術學院，妻子名下只剩債務。', locationId: 'dressing-m', type: 'document', isHidden: false, relevance: '妻子有強烈的動機' },
    { id: 'broken-trap', name: '破壞的機關', description: '機關室裡，通往舞台的鋼索被人為切斷了一截，斷口整齊，用的正是機關師專用的工具。', locationId: 'machine', type: 'physical', isHidden: false, relevance: '兇手從機關室破壞了舞台裝置', destroyable: false },
    { id: 'ransom-demand', name: '勒索要求', description: '釘在佈告板上的勒索信像一份維修報價單：「每月十萬，否則下次表演就是你最後一次。」署名是一個齒輪符號。', locationId: 'machine', type: 'document', isHidden: false, relevance: '機關師在勒索「鏡中人」',
      unlocksMemory: 'memory-argue' },
  ],
  truth: {
    murdererId: 'engineer-m',
    method: '機關師在魔術箱的逃生機關中安裝了刀片，當「鏡中人」按照慣例進入箱中時，刀片切斷了他的頸動脈。',
    motive: '「鏡中人」拒絕支付勒索金，還威脅要報警',
    timeline: '表演前：機關師破壞了逃生機關並安裝刀片。表演中：「鏡中人」進入箱中，被刀片割傷。表演後：機關師將屍體移動到預定位置。',
    fullExplanation: '機關師是「鏡中人」最信任的人，但也是最有機會殺他的人。一年前，機關師在機關中做了手腳，讓「鏡中人」在一次表演中受傷，然後以此勒索。但「鏡中人」不僅拒絕支付，還威脅要報警。機關師決定一不做二不休，在「鏡中人」最信任的機關中安裝了致命的刀片。當「鏡中人」在觀眾的歡呼聲中進入魔術箱時，他永遠無法再出來了。',
    eachCharacterSecret: {
      'assistant-you': '「鏡中人」前妻的弟弟，調查姐姐失蹤',
      'rival': '招牌節目是從「鏡中人」那裡偷來的',
      'investor': '用劇場洗錢千萬',
      'wife': '與助手有私情，計畫私奔',
      'engineer-m': '在機關中做手腳勒索魔術師',
    },
  },

  disruption: {
    name: '舞台監督檢查',
    interval: 4,
    locations: ['stage-m', 'prop-room', 'audience-m', 'vip', 'dressing-m', 'machine'],
    hitMessage: '舞台監督拿著對講機走進{location}，「下一場馬上開始，請所有人離開後台。」你被趕了出去。',
    missMessage: '對講機的雜音從{location}傳來，有人在清點道具',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。如果你選擇扮演「魔術師」或「機關師」，你可能是兇手。',
    'config': {
      'choices': [
        {
          'id': 'mm-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'magic-box'
          },
          'question': '魔術箱的夾層裡，逃生翻板還在原位。你手裡的焊槍還熱著——焊死它，或者放他一馬，都是一瞬間的事。你會怎麼做？',
          'options': [
            { 'label': '焊死翻板，讓他永遠留在箱子裡', 'value': 'weld' },
            { 'label': '關掉焊槍，把翻板恢復原狀', 'value': 'release' },
            { 'label': '去找姐姐的照片，讓記憶替你決定', 'value': 'remember' }
          ]
        },

        {
          'id': 'mm-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'dressing-m'
          },
          'question': '化妝間的鏡子周圍燈泡還亮著，鏡面上貼滿了「鏡中人」的報導剪報。抽屜裡有一張機票和收拾好的行李箱——他的妻子正計畫與助手私奔。你還發現了律師樓的遺囑修改檔案，三天前魔術師把所有財產捐給了魔術學院，妻子名下只剩債務。你會怎麼做？',
          'options': [
            {
              'label': '把機票和遺囑一起交給妻子',
              'value': 'tell-wife'
            },
            {
              'label': '把機票藏起來，讓她留下來面對一切',
              'value': 'hide-ticket'
            },
            {
              'label': '把遺囑交給警方，讓法律來裁決',
              'value': 'police'
            }
          ]
        }
      ]
    }
  }};
