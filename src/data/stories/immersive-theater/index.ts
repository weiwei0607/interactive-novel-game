import type { Story } from '../../../types/game';

export const immersiveTheaterStory: Story = {
  id: 'immersive-theater',
  title: '入戲太深',
  subtitle: '戲中謀殺變成真實謀殺，演員與觀眾都不知道界線',
  era: '現代',
  setting: '城市中心的沉浸式劇場《謀殺之夜》',
  hasPrologue: true,
  prologueSynopsis:
    `開演前兩小時，劇場裡只有後台的燈亮著。林導演站在控台後面，對著對講機反覆確認每個環節的時間節點；葉子晴坐在化妝間裡，對著鏡子補口紅，手有點抖；陳小寶在道具室裡檢查最後一批機關，左手的手套在燈光下顯得格外黑；周評論家站在觀眾席最後一排，用食指輕敲著椅背；范小美的媽媽在後台入口處，粉紅色的連身裙在黑色基調的劇場裡顯得刺眼。\n\n唐文遠從化妝間走出來，戲服還沒穿好，露出裡面的白襯衫。他環視後台，目光在每個人臉上停留了一秒，最後停在葉子晴的鏡子裡。他說：「今晚，我們會創造歷史。」沒有人回答，但每個人都在心裡點了頭——或者搖了頭。`,
  synopsis:
    '前衛劇場《謀殺之夜》的宣傳冊上寫著：「觀眾將不再旁觀，而是成為謀殺的一部分。」沒有人想到，這句話會在今晚被如此殘酷地兌現。\n\n晚上九點十五分，舞台上的「謀殺場景」準時開始。男一號唐文遠按照劇本，在聚光燈下被刺中心臟，緩緩倒下。觀眾鼓掌，以為這是精心設計的表演。直到鮮血從他的戲服裡滲出來，在舞台地板上暈開一片真正的紅。\n\n劇本裡的道具匕首，變成了真正的兇器。劇場的大門在演出開始時已經鎖死，五位與唐文遠命運交纏的人被困在這座燈光構築的迷宮裡。沒有人知道，這場戲的結局，在開演前就已經被某個人寫好了。',
  victim: '唐文遠（男一號，35歲）',
  characters: [
    { id: 'director-lin', name: '林導演', role: '劇場導演', avatar: '🎬', description: '黑眼圈深得像是被人打過兩拳，手裡永遠捏著一卷皺巴巴的劇本。他看演員時的目光不像在看人，像是在看一組需要重新調整的燈光參數。', secret: '《謀殺之夜》的第三幕幾乎逐字抄襲了百老匯一部從未在亞洲上演的實驗劇。唐文遠在上週的彩排中發現了這個秘密，他說：「導演，我的片酬漲三倍，或者紐約時報的劇評版您選一個。」', motive: '那不是普通的敲詐。那是要在他畢生心血上澆一桶汽油，然後點燃。', alibi: '說在控台監控全場', hiddenAgenda: '銷毀抄襲劇本的證據',
      isPlayable: true },
    { id: 'actress-ye', name: '葉子晴', role: '女一號', avatar: '👩‍🎤', description: '她的妝濃得像是戴著一張面具，但睫毛膏下的淚痕出賣了她。她說話時喜歡用手背遮住嘴巴，彷彿在害怕自己的聲音會洩漏什麼。', secret: '化妝間垃圾桶裡的驗孕棒顯示陽性。三周前，她告訴唐文遠這個消息時，他說：「妳確定是我的？這圈子裡的規矩妳懂，別鬧。」然後把門關上。', motive: '她不要錢，不要名分。她要的是唐文遠在看著她的眼睛時，承認那個孩子曾經存在過——但他連這個都拒絕了。', alibi: '說在化妝間準備下一場', hiddenAgenda: '確保驗孕棒不被任何人發現',
      isPlayable: true },
    { id: 'stagehand-chen', name: '陳小寶', role: '舞台監督', avatar: '🔧', description: '他總是低著頭，帽檐壓得很低。左手戴著一只永不脫下的黑色手套，即使室內溫度已經很高。他說話時聲音沙啞，像是嗓子被煙燻壞了。', secret: '三年前的爆炸戲中，他按照劇本衝進火場去救唐文遠。唐文遠被安全氣墊接住，他被倒塌的燈架壓在下面。二度燒傷，左臉毀容，聲帶受損。唐文遠出院後的第一件事，是召開記者會感謝「劇組的專業團隊」——沒有提到他的名字。',
      secretPrologue: '左手的手套從不脫下。你知道下面是什麼——或者說，你知道曾經發生過什麼。三年前的那場事故，記憶像曝光過度的照片，只剩下強光和噪音。你記得自己恨過一個人，但恨到什麼程度？有沒有做過什麼不能挽回的事？', motive: '唐文遠不僅從未探望過他，還在他康復申請復出時說：「小寶的形象……不符合現在的市場需求。」然後搶走了陳小寶為之準備了五年的角色。', alibi: '說在道具室檢查機關', hiddenAgenda: '找到唐文遠當年感謝「劇組專業團隊」的記者會錄音',
      isPlayable: true,
      tool: { name: '舞台膠帶', description: '可以把東西粘到別人身上或物品上' } },
    { id: 'critic-zhou', name: '周評論家', role: '戲劇評論家', avatar: '📝', description: '他的西裝總是一塵不染，領帶的結打得像是用尺子量過的。說話時喜歡用食指輕敲桌面，每敲一下就是一個重音。但當他獨自面對舞台時，眼神會變得迷茫，像一個找不到座位的觀眾。', secret: '他的評論不是寫出來的，是買出來的。過去三年，唐文遠的經紀公司每月固定匯入一筆「顧問費」到他的海外帳戶。作為交換，無論唐文遠演得多爛，周評論家的稿子裡永遠有「突破性」三個字。', motive: '唐文遠上個月換了新的經紀公司，新經紀說：「周老師，以後我們走專業路線，不需要那些了。」這句話的意思是——唐文遠握有的證據，從籌碼變成了炸彈。', alibi: '說在觀眾席拍照', hiddenAgenda: '銷毀海外帳戶的收款紀錄',
      isPlayable: true },
    { id: 'fan-xiaomei', name: '范小美的媽媽', role: '狂熱粉絲', avatar: '🙋‍♀️', description: '她穿著不合時宜的粉紅色連身裙，在這個以黑色為基調的劇場裡顯得刺眼。她的笑容太過燦爛，嘴角幾乎要裂到耳根，但眼睛沒有在笑。', secret: '二十年前，她叫林美華，是唐文遠的初戀。他們在小縣城的戲曲班子裡一起跑龍套，一起分食一個饅頭。後來唐文遠考上了電影學院，走的那天說：「等我出名了，就來接妳。」她等了十五年，等到的是他在電視上牽著另一個女人的手說「這是我此生的唯一」。', motive: '她變賣了房子，花了三年時間「成為」范小美的媽媽——一個可以名正言順接近他的粉絲。今晚，她終於抽中了「互動觀眾」的資格。', alibi: '說在後台等簽名', hiddenAgenda: '找到唐文遠當年承諾「等我出名就來接妳」的信',
      isPlayable: true },
    { id: 'tang-v', name: '唐文遠', role: '受害者', avatar: '💀', description: '男一號。', secret: '同時與劇組三名女性有染', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'stage', name: '主舞台', icon: '🎭', description: '燈光璀璨的圓形舞台上，血跡在聚光燈下呈現出一種過分鮮豔的紅。空氣裡飄著舞台煙霧的甜味與血腥味混合的怪異氣息，地板還沒來得及清理，踩上去有輕微的黏膩感。', clues: ['fake-blood-real','prop-dagger'], npcs: [], imagePrompt: '現代劇場舞台，血跡，聚光燈' },
    { id: 'backstage', name: '後台通道', icon: '🚪', description: '昏暗的後台通道像一條血管，牆上貼滿了被反覆修改的排練表。空氣裡飄著廉價咖啡與發膠的氣味，某處傳來冷氣機的滴水聲，規律得像倒計時。', clues: ['rehearsal-schedule','broken-mirror'], npcs: ['fan-xiaomei'], imagePrompt: '劇場後台，昏暗通道' },
    { id: 'dressing', name: '化妝間', icon: '💄', description: '男女共用的化妝間裡，鏡子周圍貼滿了劇照和便條。 bulb燈的熱度讓空氣變得黏稠，粉底與卸妝油的氣味在這裡發酵成一種令人眩暈的甜膩。', clues: ['pregnancy-test','threat-letter'], npcs: ['actress-ye'], imagePrompt: '劇場化妝間，鏡子，照片' },
    { id: 'prop', name: '道具室', icon: '📦', description: '堆滿道具的房間裡，每一把刀劍都掛著「仿真」的標籤。橡膠與金屬油漆的氣味在這裡沉澱，角落裡的軍刀架上空了一個位置，積灰的形狀像是一道傷口。', clues: ['real-dagger','accident-report'], npcs: ['stagehand-chen'], imagePrompt: '劇場道具室，刀劍，標籤' },
    { id: 'control', name: '控台', icon: '🎚️', description: '燈光與音效的控台是劇場的神經中樞。數百個按鈕在黑暗中發著微光，所有操作都有時間戳記錄。螢幕的藍光映在林導演的臉上，把他的黑眼圈照得像兩個空洞。', clues: ['lighting-log','script-change'], npcs: ['director-lin'], imagePrompt: '劇場控台，螢幕，按鈕' },
    { id: 'audience', name: '觀眾席', icon: '👥', description: '環形觀眾席上的座椅還留著體溫，每個座位都有互動設備。散場後的寂靜格外沉重，像是剛剛結束的掌聲還在空氣裡迴盪，而某種更古老的聲音正在取而代之。', clues: ['fan-camera','bribe-receipt'], npcs: ['critic-zhou'], imagePrompt: '劇場觀眾席，環形' },
  ],
  npcs: [
    { id: 'director-lin', name: '林導演', avatar: '🎬', role: '劇場導演', personality: '說話時雙手在空中比劃，像是在指揮一場無形的交響樂。被質疑時會突然安靜，盯著對方的眉心，然後用一種過分平靜的聲音反問：「你懂什麼叫藝術？」', secret: '抄襲國外劇本', liesAbout: ['劇本原創性','與唐文遠的衝突'], tellsTruthAbout: ['劇場的技術細節','他看到的異常'], defaultLocation: 'control',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'control', activity: '在控台監控全場' },
      { startHour: 20, endHour: 22, locationId: 'stage', activity: '到舞台指導' },
      { startHour: 22, endHour: 24, locationId: 'control', activity: '回到控台' },
    ],
    aiPrompt: '你是偏執的導演，控制慾強。你的名聲岌岌可危，而你知道，在這個圈子裡，名聲就是氧氣。你習慣用「藝術」當盾牌，但今晚，你發現盾牌後面空無一物。' },
    { id: 'actress-ye', name: '葉子晴', avatar: '👩‍🎤', role: '女一號', personality: '情緒像水銀一樣不可預測，這一秒還在笑，下一秒就可能落淚。她習慣用戲劇化的手勢強調每一個字，但當話題觸及唐文遠時，她的聲音會突然乾澀，像一台缺油的機器。', secret: '懷了唐文遠的孩子', liesAbout: ['與唐文遠的關係','她的身體狀況'], tellsTruthAbout: ['唐文遠的為人','她聽到的傳聞'], defaultLocation: 'dressing',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'dressing', activity: '在化妝間準備' },
      { startHour: 20, endHour: 22, locationId: 'stage', activity: '到舞台表演' },
      { startHour: 22, endHour: 24, locationId: 'dressing', activity: '回到化妝間' },
    ],
    aiPrompt: '你是女一號，情緒化戲劇性強。你愛過也恨過舞台上的這個男人。你現在不是一個人在化妝間裡發抖——你的身體裡還有另一個心跳，而它的父親剛剛死在了舞台上。' },
    { id: 'stagehand-chen', name: '陳小寶', avatar: '🔧', role: '舞台監督', personality: '回答問題時總是遲疑兩秒，像是在把話翻譯成另一種語言。他從不與人對視，左手的手套從不脫下。獨處時會用右手摩挲左手的手腕，動作機械而重複。', secret: '曾是唐文遠替身，因事故毀容', liesAbout: ['與唐文遠的過去','對他的真實感受'], tellsTruthAbout: ['道具的細節','舞台機關的運作'], defaultLocation: 'prop',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'prop', activity: '在道具室檢查道具' },
      { startHour: 20, endHour: 22, locationId: 'backstage', activity: '到後台通道巡視' },
      { startHour: 22, endHour: 24, locationId: 'prop', activity: '回到道具室' },
    ],
    aiPrompt: '你是舞台監督，沉默的技術宅。你對這個奪走你一切的男人懷有複雜感情——不是單純的恨，是被背叛的信任。你比任何人都熟悉這座舞台的每一條電線、每一個暗門，包括哪一把刀是真的。' },
    { id: 'critic-zhou', name: '周評論家', avatar: '📝', role: '戲劇評論家', personality: '每個句子都帶著評判的語調，習慣用「客觀地說」開頭，然後說出最主觀的話。他推眼鏡的動作太過頻繁，像是在藉此確認自己的臉還在。', secret: '收賄寫好評', liesAbout: ['與唐文遠的交易','他的真實評價'], tellsTruthAbout: ['對劇場的專業分析','他觀察到的細節'], defaultLocation: 'audience',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'audience', activity: '在觀眾席拍照' },
      { startHour: 20, endHour: 22, locationId: 'audience', activity: '在觀眾席看戲' },
      { startHour: 22, endHour: 24, locationId: 'backstage', activity: '到後台通道' },
    ],
    aiPrompt: '你是毒舌評論家，傲慢刻薄。你有一個不可告人的把柄在死者手中。你習慣用專業術語築起一道牆，但今晚，你發現牆上的每一塊磚都刻著你的名字。' },
    { id: 'fan-xiaomei', name: '范小美的媽媽', avatar: '🙋‍♀️', role: '狂熱粉絲', personality: '說話時聲音過高，像是隨時準備尖叫。她的熱情太過濃烈，幾乎帶著攻擊性。但當唐文遠的名字出現時，她的瞳孔會縮小，嘴角會輕微抽搐——那不是崇拜，是某種更古老的東西。', secret: '唐文遠拋棄的初戀', liesAbout: ['與唐文遠的關係','她的真實年齡'], tellsTruthAbout: ['她對唐文遠的了解','她看到的異常'], defaultLocation: 'backstage',
    schedule: [
      { startHour: 18, endHour: 20, locationId: 'backstage', activity: '在後台等簽名' },
      { startHour: 20, endHour: 22, locationId: 'audience', activity: '到觀眾席看戲' },
      { startHour: 22, endHour: 24, locationId: 'backstage', activity: '回到後台' },
    ],
    aiPrompt: '你是狂熱粉絲，表面熱情內心偏執。你與這個明星有過不為人知的過去。你花了三年時間編織一個身份，只為了在今晚，離他近一點——或者，讓他永遠屬於你。' },
  ],
  clues: [
    { id: 'fake-blood-real', name: '假血變真血', description: '舞台上原本應該是假血的位置，混入了一種質地不同的液體。道具組的配方是玉米糖漿加紅色素，而現在這灘血跡已經開始氧化發黑，散發著鐵鏽味。', locationId: 'stage', type: 'physical', isHidden: false, relevance: '兇手利用舞台效果掩蓋真實殺人' ,
    details: [
      { label: '血袋成分', content: '血袋裡的液體分為兩層：上層是劇組慣用的玉米糖漿假血，下層卻是真的人血，AB型。假血和真血之間有一層薄薄的隔離膜，膜被人為刺破。' },
      { label: '針孔', content: '血袋底部有一個極細的針孔，直徑約0.3毫米，像是用醫用注射器刺入的。針孔周圍的假血已經氧化變色，但真血的部分還是鮮紅的。' },
      { label: '標籤', content: '血袋的標籤被撕掉了一半，殘留的紙屑上能辨認出「市立血庫」的字樣。這袋血不是劇組的道具，而是從醫院流出的真血。' },
    ],
  },
    { id: 'prop-dagger', name: '道具匕首', description: '原本應該是伸縮的道具匕首，刀身被整根替換成精鋼。刀柄的纏繞紋路與劇組統一採購的版本略有不同——這是手工重新纏繞的，為了掩蓋替換的痕跡。', locationId: 'stage', type: 'physical', isHidden: false, relevance: '兇器被提前替換', timeWindow: { startHour: 20, endHour: 22, reason: '演出進行時，道具匕首才會出現在舞台上' } ,
    details: [
      { label: '刀刃紋理', content: '刀刃的紋理顯示，這不是精鋼，而是醫療手術刀常用的不鏽鋼。這種鋼材更硬、更薄，切割時阻力更小——兇手選擇了手術刀材質，是為了確保一擊致命。' },
      { label: '刀柄纏繞', content: '刀柄的纏繞紋路是逆時針的，而劇組統一採購的版本是順時針。這個細節說明，纏繞者是左撇子——在劇組裡，左撇子只有陳小寶和范小美的媽媽。' },
      { label: '血槽', content: '刀身上有一道細微的血槽，血槽裡殘留著乾涸的血跡。這不是道具該有的設計——真正的道具匕首不會有血槽，因為血槽會讓伸縮機關卡住。' },
    ],
  },
    { id: 'rehearsal-schedule', name: '排練表', description: '後台牆上的排練表被修改過。原本的「謀殺場景」標註在21:30，現在被人用紅筆劃掉，改成了21:15。修改的筆跡是陳小寶的。', locationId: 'backstage', type: 'document', isHidden: false, relevance: '有人故意調整了時間' },
    { id: 'broken-mirror', name: '破碎的鏡子', description: '後台的化妝鏡被打碎，碎片散落在地面上，像一場小型的銀色爆炸。其中一塊碎片上沾著血跡和口紅印——口紅的色號，與葉子晴用的是同一支。', locationId: 'backstage', type: 'physical', isHidden: false, relevance: '有人在後台發生過爭執', timeWindow: { startHour: 22, endHour: 24, reason: '演出結束後，後台的鏡子才會被發現破裂' } },
    { id: 'pregnancy-test', name: '驗孕棒', description: '化妝間垃圾桶深處，一支被衛生紙包裹的驗孕棒顯示兩道紅線。包裝盒上的簽名是葉子晴的，筆跡因為用力過猛而劃破了紙張。', locationId: 'dressing', type: 'physical', isHidden: true, relevance: '葉子晴懷孕了' },
    { id: 'threat-letter', name: '恐嚇信', description: '化妝間抽屜裡的信，字跡是從報紙上剪下來拼貼的：「若不離開唐文遠，妳的秘密將人盡皆知。」抽屜的邊緣有指甲掐過的痕跡。', locationId: 'dressing', type: 'document', isHidden: true, relevance: '有人在威脅葉子晴' },
    { id: 'real-dagger', name: '真正的匕首', description: '道具室的出入登記簿顯示，開演前兩小時有人借走了「仿真匕首B-7」。但架上實際缺少的，是另一把沒有登記過的真匕首——它從未被編入道具清單，因為它是某人的私人物品。', locationId: 'prop', type: 'physical', isHidden: false, relevance: '兇手從道具室偷走了真匕首',
      unlocksMemory: 'memory-weapon', destroyable: false },
    { id: 'accident-report', name: '事故報告', description: '道具室鐵櫃底層的事故報告，紙張已經泛黃。三年前的特技爆炸戲中，陳小寶為救唐文遠衝入火場，造成全身35%燒傷、左臉毀容、聲帶永久性損傷。報告最後一頁的「後續關懷」欄是空白的。', locationId: 'prop', type: 'document', isHidden: true, relevance: '陳小寶有強烈的怨恨',
      unlocksMemory: 'memory-argue' },
    { id: 'lighting-log', name: '燈光紀錄', description: '控台電腦的紀錄顯示，謀殺場景的聚光燈比預定時間早亮了30秒。而提前觸發指令的帳號，是陳小寶的舞台監督權限。', locationId: 'control', type: 'document', isHidden: false, relevance: '有人提前觸發了燈光' },
    { id: 'script-change', name: '劇本修改', description: '導演在開演前臨時修改了結局，讓「受害者」真的被刺殺——但這份修改稿的紙張是開演前兩天才列印的，而導演聲稱修改是在昨晚決定的。', locationId: 'control', type: 'document', isHidden: false, relevance: '導演是否預謀了真實謀殺' },
    { id: 'fan-camera', name: '粉絲相機', description: '范小美的相機拍到了後台的畫面。其中一張照片的時間戳顯示，開演前四十分鐘，有人戴著黑色手套進入道具室，停留了七分鐘。那人的背影，與陳小寶的工裝一致。', locationId: 'audience', type: 'document', isHidden: false, relevance: '有人提前準備了兇器' },
    { id: 'bribe-receipt', name: '收賄收據', description: '周評論家西裝內袋裡的收據，顯示唐文遠的經紀公司每月固定匯入一筆「顧問費」到開曼群島的帳戶。最後一筆入帳是三天前，附言只有一個字母：「Z」。', locationId: 'audience', type: 'document', isHidden: true, relevance: '周評論家有把柄在唐文遠手中' },
  ],
  truth: {
    murdererId: 'stagehand-chen',
    method: '陳小寶提前將道具匕首換成真匕首，並調整了舞台機關讓謀殺場景提前。當唐文遠按照劇本「被刺」時，真正的匕首刺入了他的心臟。',
    motive: '三年前為救唐文遠毀容，唐文遠從未探望還搶走了他的角色',
    timeline: '開演前1小時：陳小寶進入道具室替換匕首。開演後30分鐘：調整燈光時間讓謀殺場景提前。謀殺場景：唐文遠按照劇本倒下，但再也沒有起來。',
    fullExplanation: '陳小寶曾是唐文遠的特技替身，三年前一場爆炸戲中，他為了保護唐文遠重度燒傷毀容。但唐文遠從未去醫院探望過他，康復後還以「形象不符」為由搶走了陳小寶夢寐以求的角色。陳小寶在劇場工作了三年，每天看著唐文遠光彩照人，內心的恨意逐漸吞噬了他。他利用對舞台的熟悉，製造了一場「完美的戲中戲」。',
    eachCharacterSecret: {
      'director-lin': '抄襲國外劇本',
      'actress-ye': '懷了唐文遠的孩子',
      'stagehand-chen': '曾是唐文遠替身，因事故毀容',
      'critic-zhou': '收賄寫好評',
      'fan-xiaomei': '唐文遠拋棄的初戀情人',
    },
  },

  disruption: {
    name: '燈光師調試',
    interval: 4,
    locations: ['stage', 'backstage', 'control', 'dressing', 'prop', 'audience'],
    hitMessage: '燈光師推著器材車進入{location}，「這裡待會要排練，請離開。」你被請出了房間。',
    missMessage: '燈光設備的嗡鳴聲從{location}傳來，有人在調試聚光燈',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家即兇手。沉浸式劇場裡，戲假情真。你可能是唯一知道劇本結局的人。',
    'config': {
      'choices': [
        {
          'id': 'it-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'fake-blood-real'
          },
          'question': '血袋裡的假血和真血之間，隔著一層薄薄的膜。你手裡的針正對著那層膜——刺破它，或者轉身離開，都只需要一秒。你會怎麼做？',
          'options': [
            { 'label': '刺破隔離膜，讓一切順其自然', 'value': 'pierce' },
            { 'label': '換掉血袋，阻止悲劇發生', 'value': 'replace' },
            { 'label': '去告訴唐文遠，讓他自己選擇', 'value': 'warn' }
          ]
        },
        {
          'id': 'it-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'prop'
          },
          'question': '道具室裡，軍刀架上空了一個位置，積灰的形狀像是一道傷口。角落裡的陳小寶正在整理機關，左手的手套在燈光下顯得格外黑。你想起三年前那場爆炸戲——他為救唐文遠衝入火場，卻再也沒有以真面目示人。你會怎麼做？',
          'options': [
            { 'label': '詢問他為何左手永遠戴著手套', 'value': 'ask' },
            { 'label': '檢查他手邊的道具登記簿', 'value': 'check' },
            { 'label': '默默記下，不驚動他', 'value': 'observe' }
          ]
        }
      ]
    }
  }};
