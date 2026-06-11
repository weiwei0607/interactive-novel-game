import type { Story } from '../../../types/game';

export const nightAuctionStory: Story = {
  id: 'night-auction',
  title: '永夜拍賣',
  subtitle: '「早已燒毀」的名畫現身，持有者當晚死亡',
  era: '現代',
  setting: '私人藝術拍賣行，封閉式拍賣夜',
  hasPrologue: true,
  prologueSynopsis:
    `蘇州河畔的紡織廠改建空間裡，工業時代的鋼樑與當代藝術的燈光形成某種奇異的對話。今晚是拍賣前的預展酒會，陳收藏家穿著一身高級訂製的西裝，站在那幅傳說中的畫作旁邊，像一個守護神。\n\n畫框上的玻璃反射著吊燈的光芒，把梵谷的星空碎成無數個閃爍的點。五位獲邀的競標者分散在展廳的不同角落，各自拿著香檳，目光卻都時不時飄向那幅畫。李夫人與王館長在談論修復技術；老張獨自站在畫前，瞇起右眼，像是在鑑定，又像是在回憶；龍哥靠在鋼樑上，手裡的威士忌一口沒動。\n\n陳收藏家舉杯致詞時說：「這幅畫見證了七十五年的滄桑，今晚，它將找到新的歸宿。」沒有人知道，這句話背後藏著多少不能說的秘密。也沒有人知道，這將是他最後一次以主人的身份站在這幅畫旁邊。`,
  synopsis:
    '二戰的炮火中，梵谷的素描《星空下的農夫》與它的主人一起消失在鹿特丹的廢墟裡。七十五年來，藝術史將它標註為「已毀」。然而今晚，這幅傳說中的畫作突然出現在蘇州河畔一座改建的紡織廠裡——一場只有五位競標者獲邀的私人拍賣會。\n\n畫作持有者陳收藏家在保險庫裡守著這幅畫，像守著一個詛咒。拍賣開始前十五分鐘，工作人員發現保險庫的門虛掩著。陳收藏家倒在血泊中，後腦凹陷，而保險櫃裡空無一物。\n\n五位競標者被困在這座封閉的建築裡。每個人都與這幅畫有著血脈相連的過去——而現在，他們中的某一個人，為了讓這幅畫重新消失，不惜讓一個人永遠閉嘴。',
  victim: '陳收藏家（藝術品商人，65歲）',
  characters: [
    { id: 'art-dealer', name: '你（畫商）', role: '藝術品畫商', avatar: '🎨', description: '你的西裝是米蘭訂製的，但袖口磨出了毛邊。你看畫時會不自覺地瞇起右眼——那是長年在紫外線燈下鑑定贗品留下的後遺症。你的笑容太過熟練，像是某種職業病。', secret: '你的護照上有三個名字。過去八年，你以畫商身份遊走於歐洲各大拍賣行，為國際刑警組織追查一條橫跨三個大洲的贓畫走私網絡。這幅《星空下的農夫》，是你收網前的最後一塊拼圖。', motive: '陳收藏家在昨晚的預展酒會上把你拉到一邊，遞過一張照片：「這是你在鹿特丹臥底時的照片，如果我明天出事，這張照片會出現在各大媒體的頭版。」', alibi: '說在鑑定室檢查畫作', secretPrologue: '拍賣槌落下時的聲音像骨折。我舉了十七次牌，每次都輸給空氣——那些電話委託的買家不存在，價格是被人為炒上去的。陳收藏家知道我所有的秘密，包括那批臥底照片。他今晚看我的眼神不對，像是已經準備好了籠子。我要在他開口之前，確保那些照片永遠不會見光。',
    hiddenAgenda: '確保臥底照片不會洩漏',
      isPlayable: true },
    { id: 'rich-widow', name: '李夫人', role: '富商遺孀', avatar: '👛', description: '她穿著香奈兒的黑色套裝，珍珠項鍊的每一顆都圓潤得像是某種完美的謊言。她說話時聲音不高，但每個尾音都帶著一種習慣性的命令口吻——那是長期發號施令的人獨有的節奏。', secret: '她的丈夫死於三個月前的一場「意外」車禍。警方報告說是煞車失靈，但她知道不是——因為煞車油管是她親手剪斷的。而她這樣做的原因，與這幅畫有關。', motive: '這幅畫的來源證明裡，有一張她丈夫簽字的文件。文件顯示，這幅畫是二戰期間從猶太家族手中「徵收」的贓物。畫作若公開，她的丈夫將從「愛國收藏家」變成「戰犯幫兇」——而她，將失去所有繼承權。', alibi: '說在休息室補妝', hiddenAgenda: '銷毀畫作來源證明中丈夫簽字的文件',
      isPlayable: true },
    { id: 'forger', name: '老張', role: '贗品大師', avatar: '✏️', description: '他的手指修長而蒼白，指甲縫裡殘留著洗不淨的鉛白與赭石。他說話時目光總是落在對方的眉心上方，像是在評估一塊畫布的質地。他的西裝太過寬大，彷彿裡面住著一個比實際更瘦削的靈魂。', secret: '1989年的冬天，他在阿姆斯特丹的一間地下室裡，花了四個月時間臨摹了這幅《星空下的農夫》。他用的顏料是親手研磨的，畫布是從同期畫作上剝下來的舊布。那是他畢生最完美的作品——也是他最大的詛咒。', motive: '陳收藏家上個月請了三位專家同時鑑定這幅畫。老張知道，只要有一個專家用放大鏡多看兩秒鐘，就會發現右下角那片星空裡，藏著他習慣性的筆觸——一種連他自己都改不掉的簽名。', alibi: '說在洗手間', hiddenAgenda: '找到並修改畫作右下角藏有自己筆觸的部分', tool: { name: '顯微鏡底座', description: '可以將指紋和血跡轉移到任何物品表面' }, secretPrologue: '保險庫的銅門在你身後關上時，聲音像一聲嘆息。陳收藏家背對著你，正在檢查那幅畫的畫框。你手裡握著顯微鏡的底座——金屬的觸感比你想像中更冷。三十年前，你畫了這幅畫；三十年後，你站在這裡，準備抹去所有關於它的痕跡。',
      isPlayable: true },
    { id: 'curator', name: '王館長', role: '博物館館長', avatar: '🏛️', description: '他的西裝總是一塵不染，領帶的配色與博物館的館徽一致。他說話時喜歡引用藝術史，每個句子都像是在為某個展覽撰寫說明牌。但當他的目光觸及那幅畫時，瞳孔會縮小得像針尖。', secret: '十五年前，他在博物館的地下庫房裡發現了一幅「贗品」——梵谷的《星空下的農夫》。他沒有向上級報告，而是用自己的私房錢買通了庫管員，把真品換成了贗品，真品則被他藏在了某個連他妻子都不知道的地方。', motive: '陳收藏家上週給他發了一封電郵，附件是一張照片——照片裡，真品畫框的內側貼著一張泛黃的標籤，上面是王館長十五年前的親筆簽名。郵件正文只有一句話：「週五見。」', alibi: '說在閱覽室查資料', hiddenAgenda: '找到並銷毀十五年前自己貼在畫框內側的標籤',
      isPlayable: true },
    { id: 'gangster', name: '龍哥', role: '黑道老大', avatar: '🕶️', description: '他的西裝是阿瑪尼的，但穿在他身上像是某種不合身的盔甲。脖子上的刺青從領口探出來，是一條張牙舞爪的龍。他說話時聲音粗啞，每個字都像是从砂紙上磨過來的。', secret: '1997年的香港，他的幫派洗劫了一家私人博物館。那場行動裡，他最信任的兄弟死在了警槍下，而他抱著這幅畫跳窗逃生。這幅畫是他用兄弟的命換來的——它是他的聖杯，也是他的墓碑。', motive: '陳收藏家不僅拒絕歸還這幅畫，還要在明天的拍賣會上公開它的來源。龍哥知道，一旦來源公開，香港警方就會以「贓物」名義沒收這幅畫，而他兄弟的死，將變得毫無意義。', alibi: '說在停車場抽菸', hiddenAgenda: '確保畫作來源不會被公開',
      isPlayable: true },
    { id: 'chen-v', name: '陳收藏家', role: '受害者', avatar: '💀', description: '畫作持有者。', secret: '用這幅畫勒索了所有人', motive: '', alibi: '', isPlayable: false },
  ],
  locations: [
    { id: 'vault', name: '保險庫', icon: '🔒', description: '保險庫的銅門虛掩著，冷氣從門縫裡湧出，帶著金屬與血腥混合的冰冷氣息。陳收藏家倒在地上，後腦的傷口像一張微張的嘴。原本存放畫作的保險櫃被打開，內襯的絲絨上還留著畫框底部的壓痕。', clues: ['vault-record','fingerprints'], npcs: [], imagePrompt: '現代保險庫，打開的保險櫃' },
    { id: 'showroom', name: '展廳', icon: '🖼️', description: '展廳的射燈還亮著，在空畫框的周圍投下一圈慘白的光暈。畫框背面的絲絨有幾道新鮮的刮痕，像是畫作被匆忙取走時，釘腳劃過的痕跡。空氣裡飄著畫框清漆的酸澀味。', clues: ['empty-frame','security-tape'], npcs: [], imagePrompt: '拍賣展廳，空畫框' },
    { id: 'appraisal', name: '鑑定室', icon: '🔬', description: '專業的藝術品鑑定室裡，顯微鏡和光譜儀都還開著，螢幕上跳動著未完成的數據。紫外線燈的紫光在牆上投下詭異的陰影，空氣裡飄著酒精與化學藥劑混合的刺鼻氣味。', clues: ['forgery-report','uv-light-result'], npcs: ['art-dealer'], imagePrompt: '藝術品鑑定室，顯微鏡' },
    { id: 'lounge', name: '休息室', icon: '🛋️', description: '競標者的休息室鋪著波斯地毯，每個人的私人物品都在這裡。李夫人的香奈兒香水味與龍哥的雪茄煙味在空氣裡交戰，沙發的皮革還殘留著不同體溫的餘熱。', clues: ['widow-phone','burner-phone'], npcs: ['rich-widow'], imagePrompt: '貴賓休息室，沙發' },
    { id: 'archive', name: '閱覽室', icon: '📚', description: '拍賣行的資料室裡，書架上的拍賣目錄按年份排列，像是一排排墓碑。空氣乾燥得讓人喉嚨發緊，舊紙張的霉味與除濕機的嗡鳴聲在這裡達成了某種詭異的平衡。', clues: ['auction-history','provenance-papers'], npcs: ['curator'], imagePrompt: '資料閱覽室，書架' },
    { id: 'parking', name: '停車場', icon: '🚗', description: '地下停車場的日光燈管嗡嗡作響，幾盞已經開始閃爍。龍哥的黑色轎車還停在角落，排氣管還殘留著發動機的餘溫。水泥地面上的油漬在燈光下泛著虹彩，像是某種變質的顏料。', clues: ['car-trunk','surveillance-photo'], npcs: ['gangster'], imagePrompt: '地下停車場，黑色轎車' },
  ],
  npcs: [
    { id: 'rich-widow', name: '李夫人', avatar: '👛', role: '富商遺孀', personality: '說話時喜歡用指尖輕敲桌面，每敲一下就是一個無形的感嘆號。被質疑時不會慌張，只會微微揚起下巴，像是在重新評估對方的社會階級。但她的左手會下意識地摸向包裡的手機——那裡有一個她不敢接聽的號碼。', secret: '丈夫的死與這幅畫有關', liesAbout: ['對藝術的了解','她來這裡的真正目的'], tellsTruthAbout: ['她對畫作的執著','她注意到的異常'], defaultLocation: 'lounge',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'lounge', activity: '在休息室補妝' },
      { startHour: 22, endHour: 24, locationId: 'showroom', activity: '到展廳看畫' },
      { startHour: 0, endHour: 2, locationId: 'lounge', activity: '回到休息室' },
      { startHour: 2, endHour: 4, locationId: 'archive', activity: '到閱覽室查資料' },
    ],
    aiPrompt: '你是富商遺孀，優雅高傲但內心焦慮。你來這裡是為了銷毀一個秘密。你習慣用金錢解決問題，但今晚你發現，有些東西的價格，比你所有的錢加起來還要高。' },
    { id: 'forger', name: '老張', avatar: '✏️', role: '贗品大師', personality: '回答問題前總要沉默兩秒，像是在腦海裡先把話翻譯成另一種語言。他的目光從不直視人，而是落在對方的眉心上方，像是在評估一塊畫布的吸油性。當話題觸及「筆觸」或「顏料」時，他的手指會無意識地在空中比畫。', secret: '這幅畫是他三十年前仿的', liesAbout: ['他與這幅畫的關係','他的真實身份'], tellsTruthAbout: ['對畫作的專業分析','他觀察到的細節'], defaultLocation: 'showroom',
    schedule: [
      { startHour: 20, endHour: 24, locationId: 'showroom', activity: '在展廳檢查畫作' },
      { startHour: 0, endHour: 2, locationId: 'appraisal', activity: '到鑑定室' },
      { startHour: 2, endHour: 4, locationId: 'showroom', activity: '回到展廳' },
    ],
    aiPrompt: '你是贗品大師，沉穩內斂。這幅畫是你一生的傑作，也是你的致命弱點。你比任何人都清楚這幅畫的每一筆、每一個顏料顆粒——因為它們曾經從你的指尖流過。' },
    { id: 'curator', name: '王館長', avatar: '🏛️', role: '博物館館長', personality: '說話像朗誦展覽說明牌，每個句子都帶著學術的權威感。被質疑時會下意識地推眼鏡，然後用一種「你顯然不懂藝術」的語調反駁。但他的右手總是插在口袋裡，握著一張被他揉皺又展平無數次的照片。', secret: '真品早已被他私藏', liesAbout: ['館方的鑑定結果','他的真實意圖'], tellsTruthAbout: ['藝術史的專業知識','他觀察到的人際關係'], defaultLocation: 'archive',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'archive', activity: '在閱覽室查資料' },
      { startHour: 22, endHour: 24, locationId: 'lounge', activity: '到休息室交談' },
      { startHour: 0, endHour: 2, locationId: 'archive', activity: '回到閱覽室' },
      { startHour: 2, endHour: 4, locationId: 'parking', activity: '到停車場' },
    ],
    aiPrompt: '你是博物館館長，道貌岸然。你表面上為了國家，實際上在為自己謀利。你習慣用專業術語包裝最卑劣的私慾，但今晚，你發現那張包裝紙正在滲出血跡。' },
    { id: 'gangster', name: '龍哥', avatar: '🕶️', role: '黑道老大', personality: '說話粗魯直接，不耐煩時會用指節敲擊桌面，發出沉悶的咚咚聲。他不擅長隱藏情緒，憤怒時脖子上的青筋會凸起，像那條刺青龍在扭動。但當話題觸及「兄弟」時，他的聲音會突然變輕，像怕驚擾了什麼。', secret: '這幅畫是他幫派的贓物', liesAbout: ['他的真實身份','與陳收藏家的關係'], tellsTruthAbout: ['他對畫作來源的了解','他看到的異常'], defaultLocation: 'parking',
    schedule: [
      { startHour: 20, endHour: 22, locationId: 'parking', activity: '在停車場抽菸' },
      { startHour: 22, endHour: 24, locationId: 'lounge', activity: '到休息室閒逛' },
      { startHour: 0, endHour: 4, locationId: 'parking', activity: '回到停車場' },
    ],
    aiPrompt: '你是黑道老大，粗魯直接。這幅畫本來就該屬於你——你用兄弟的命換來的。你不懂藝術，但你懂什麼是代價。而今晚，你發現有人想讓你的代價變得一文不值。' },
  ],
  clues: [
    { id: 'vault-record', name: '保險庫進出紀錄', description: '保險庫的電子鎖紀錄顯示，陳收藏家在死亡前後只有一個人進入——時間是晚上八點四十七分，正是李夫人聲稱在休息室補妝的時段。紀錄上的指紋被刻意擦拭過，但留下了半枚殘缺的指甲油痕跡。', locationId: 'vault', type: 'document', isHidden: false, relevance: '李夫人有機會進入保險庫', unlocksMemory: 'memory-vault-record' ,
    details: [
      { label: '進出時間', content: '保險庫的電子鎖記錄顯示，案發前後共有三次開啟：第一次是下午三點，陳收藏家的指紋；第二次是晚上七點，王館長的指紋；第三次是晚上九點十五分，指紋記錄顯示「未知」。' },
      { label: '溫度變化', content: '保險庫內的溫度感應器在晚上九點二十分記錄到一次異常升溫，從攝氏十八度升到二十三度。這是人體體溫造成的——有人曾在保險庫內停留了至少十分鐘。' },
      { label: '空氣成分', content: '保險庫內的空氣採樣顯示二氧化碳濃度異常升高，而且混有一種昂貴的古龍水氣味。這款古龍水在場的只有兩個人使用——李夫人和龍哥。' },
    ],
  },
    { id: 'fingerprints', name: '保險櫃指紋', description: '保險櫃上有陳收藏家和另一組指紋。那組指紋與鑑定室光譜儀觸控螢幕上的指紋吻合——而在場使用過光譜儀的人，只有畫商和王館長。', locationId: 'vault', type: 'physical', isHidden: false, relevance: '兇手可能是畫商或館長', timeWindow: { startHour: 22, endHour: 24, reason: '晚上十點後，保險庫的溫度調低，指紋才會在金屬表面凝結成膜' }, unlocksMemory: 'memory-fingerprints' },
    { id: 'empty-frame', name: '空畫框', description: '畫框背面有細微的刮痕，絲絨內襯被釘腳劃破了一道口子。顯示畫作是被匆忙取走的——取走它的人不是專業的搬運工，而是一個在恐懼中動手的人。', locationId: 'showroom', type: 'physical', isHidden: false, relevance: '兇手匆忙取走畫作', unlocksMemory: 'memory-empty-frame' ,
    details: [
      { label: '畫框尺寸', content: '空畫框的內徑是六十乘以八十公分，這是標準的肖像畫尺寸。但陳收藏家收藏的畫作中，沒有一幅是這個尺寸的——這個畫框是為某幅特定的畫量身訂做的。' },
      { label: '畫框材質', content: '畫框的木材是百年胡桃木，邊緣有精細的浮雕紋飾。浮雕的風格與館內其他畫框不同，這是義大利文藝復興時期的風格——而陳收藏家最討厭的就是義大利畫作。' },
      { label: '背板痕跡', content: '畫框的背板上有四個新的釘孔，釘孔的位置顯示，原本固定的是一塊很薄的畫布。畫布被整張割下取走了，切口整齊，使用的是專業的美工刀。' },
    ],
  },
    { id: 'security-tape', name: '監視器畫面', description: '展廳監視器在案發時段被關閉了，但關閉前的最後一幀畫面顯示：老張站在空畫框前，手中拿著一個類似放大鏡的物件，對著畫布凝視了至少三十秒。', locationId: 'showroom', type: 'document', isHidden: false, relevance: '老張在案發前接近過畫作' },
    { id: 'forgery-report', name: '鑑定報告', description: '鑑定室的報告顯示這幅畫確實是贗品，但技術高超到足以亂真。報告最後一頁的署名是一個陌生的化名——但筆跡專家比對後確認，那是老張三十年前在阿姆斯特丹使用的假名。', locationId: 'appraisal', type: 'document', isHidden: true, relevance: '老張確實是贗品大師', destroyable: true },
    { id: 'uv-light-result', name: '紫外線檢測', description: '紫外線燈下，畫作背面顯示出一行隱形字跡，是用檸檬汁寫成的：「真品在國家博物館地下庫房，編號C-774。」字跡的筆觸顫抖，像是寫字的人在恐懼中完成。', locationId: 'appraisal', type: 'document', isHidden: true, relevance: '王館長私藏了真品' },
    { id: 'widow-phone', name: '李夫人的手機', description: '手機簡訊顯示她與一家瑞士保險公司聯繫，準備為這幅畫投保高額保險——保單條款裡有一條「不可抗力損毀」的附加條款，理賠金額是畫作估值的兩倍。', locationId: 'lounge', type: 'document', isHidden: true, relevance: '李夫人計畫銷毀畫作騙取保險金' },
    { id: 'burner-phone', name: '一次性手機', description: '休息室沙發縫隙中的一次性手機，最後一通電話撥給了陳收藏家，通話時間四分鐘。通話內容被錄了下來，是一段經過變聲處理的威脅：「把畫交出來，否則明天全國的報紙都會知道你的秘密。」', locationId: 'lounge', type: 'physical', isHidden: false, relevance: '有人用匿名手機聯繫過陳收藏家', timeWindow: { startHour: 0, endHour: 2, reason: '午夜過後，李夫人獨自在休息室時，那支手機才會響起' } },
    { id: 'auction-history', name: '拍賣紀錄', description: '三十年前這幅畫曾以「贗品」名義在阿姆斯特丹的一場小型拍賣會上出現，買家署名是一個假名——而那個假名，與老張在鑑定報告上使用的化名完全一致。', locationId: 'archive', type: 'document', isHidden: false, relevance: '老張與這幅畫的歷史淵源', destroyable: true },
    { id: 'provenance-papers', name: '來源證明', description: '陳收藏家提供的來源證明是偽造的，紙張的年份與墨水成分不匹配。但偽造的手法極其高明——筆跡專家確認，這種以假亂真的風格，與老張三十年前的作品如出一轍。', locationId: 'archive', type: 'document', isHidden: false, relevance: '老張可能幫陳收藏家偽造了來源證明', destroyable: true },
    { id: 'car-trunk', name: '轎車後車箱', description: '龍哥的轎車後車箱中有一捆繩索、幾個黑色塑膠袋，以及一張博物館地下庫房的平面圖。圖上有一個房間被紅筆圈了起來，旁邊寫著「C-774」。', locationId: 'parking', type: 'physical', isHidden: true, relevance: '龍哥計畫搶劫博物館' },
    { id: 'surveillance-photo', name: '監視照片', description: '停車場監視器拍到了龍哥與陳收藏家在案發前一晚激烈爭執的畫面。陳收藏家把一個牛皮紙袋摔在龍哥臉上，紙袋裡的文件散落一地——其中一張是龍哥當年兄弟的死亡證明。', locationId: 'parking', type: 'document', isHidden: false, relevance: '龍哥與陳收藏家有過衝突' },
  ],
  truth: {
    murdererId: 'forger',
    method: '老張趁陳收藏家獨自在保險庫時，用鑑定室的顯微鏡底座重擊頭部致死，取走畫作。',
    motive: '這幅畫是他三十年前仿的，陳收藏家準備公開鑑定結果毀掉他的名聲',
    timeline: '拍賣前2小時：老張進入保險庫與陳收藏家對質。爭執中老張用顯微鏡底座重擊陳收藏家頭部。取走畫作後逃離。',
    fullExplanation: '老張是傳說中的贗品大師，三十年前他仿作了這幅《星空下的農夫》，本以為會被當成贗品默默無聞。沒想到陳收藏家發現了它，並準備將其作為真品高價拍賣。更糟的是，陳收藏家還威脅要公開鑑定結果，讓老張這個「贗品大師」的名聲徹底毀滅。老張別無選擇，必須在拍賣開始前讓陳收藏家永遠閉嘴，並取回這幅毀掉他一生的畫作。',
    eachCharacterSecret: {
      'art-dealer': '國際刑警臥底',
      'rich-widow': '丈夫的死與這幅畫有關',
      'forger': '這幅畫是他三十年前仿的',
      'curator': '真品早已被他私藏',
      'gangster': '這幅畫是他幫派的贓物',
    },
  },

  disruption: {
    name: '保安巡邏',
    interval: 4,
    locations: ['vault', 'showroom', 'appraisal', 'lounge', 'archive', 'parking'],
    hitMessage: '保安的手電筒光掃進{location}，「這裡已經封鎖了，請離開。」你被帶出了房間。',
    missMessage: '無線電的雜音從{location}傳來，保安正在巡邏',
    forceLeave: true,
  },

  specialMechanic: {
    'type': 'player_is_killer',
    'description': '本故事特殊機制：玩家扮演兇手。你必須在調查過程中銷毀指向自己的關鍵線索，並將證據栽贓給其他嫌疑人。同時，某些線索能幫助你回想起案發當晚的細節。小心行事——一旦有人發現你的破綻，遊戲就結束了。',
    'config': {
      'choices': [
        {
          'id': 'na-choice-1',
          'condition': {
            'type': 'clue',
            'clueId': 'empty-frame'
          },
          'question': '你發現了空畫框，尺寸和陳收藏家失踪的那幅畫完全吻合。畫框的背板上有新的釘孔——畫布被人整張割下取走了。你會怎麼做？',
          'options': [
            { 'label': '報警，讓警方介入調查', 'value': 'police' },
            { 'label': '先通知陳收藏家的家屬', 'value': 'family' },
            { 'label': '自己追查那幅畫的下落', 'value': 'track' }
          ]
        },

        {
          'id': 'na-choice-2',
          'condition': {
            'type': 'location',
            'locationId': 'archive'
          },
          'question': '你走進閱覽室，書架上的拍賣目錄按年份排列。你翻開三十年前阿姆斯特丹的拍賣紀錄，發現這幅《星空下的農夫》曾以「贗品」名義出現，買家署名與老張的假名一致。而陳收藏家提供的來源證明，筆跡專家確認與老張的偽造風格如出一轍。你會怎麼做？',
          'options': [
            {
              'label': '當眾揭露這幅畫和老張的秘密',
              'value': 'expose'
            },
            {
              'label': '私下找老張談判，看看他能給你什麼',
              'value': 'negotiate'
            },
            {
              'label': '把紀錄放回原處，假裝什麼都不知道',
              'value': 'ignore'
            }
          ]
        }
      ]
    }
  }};
