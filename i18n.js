// 소개 사이트 문구 (순서: ko, en, tw 번체, cn 간체, ja)
var LANGS = ['ko', 'en', 'tw', 'cn', 'ja'];
var HTML_LANG = { ko: 'ko', en: 'en', tw: 'zh-Hant', cn: 'zh-Hans', ja: 'ja' };

var T = {
  docTitle: ['부산미인 · 부산·경남 피부과·성형외과 가격과 후기', 'Busanmiin · Clinic prices and reviews in Busan', '釜山美人 · 釜山皮膚科・整形外科價格與評價', '釜山美人 · 釜山皮肤科・整形外科价格与评价', '釜山美人 · 釜山の皮膚科・美容外科の価格と口コミ'],
  brand: ['부산미인', 'Busanmiin', '釜山美人', '釜山美人', '釜山美人'],
  navFeatures: ['서비스', 'Features', '服務', '服务', 'サービス'],
  navHow: ['이용 방법', 'How it works', '使用方式', '使用方法', 'ご利用の流れ'],
  navPartner: ['병원 입점', 'For clinics', '診所入駐', '诊所入驻', 'クリニック掲載'],

  heroEyebrow: ['부산·경남 피부과 · 성형외과', 'Dermatology & plastic surgery in Busan', '釜山・慶南 皮膚科・整形外科', '釜山・庆南 皮肤科・整形外科', '釜山・慶南の皮膚科・美容外科'],
  heroTitle: [
    '부산에서 받는 피부 시술,<br>가격과 진짜 후기부터 확인하세요',
    'Skin treatments in Busan,<br>real prices and reviews first',
    '在釜山做皮膚療程，<br>先看價格與真實評價',
    '在釜山做皮肤项目，<br>先看价格和真实评价',
    '釜山の肌施術、<br>まずは価格と口コミから',
  ],
  heroLead: [
    '부산·경남 피부과와 성형외과의 시술별 가격, 회복 기간, 검수한 후기를 한곳에서 비교하고 마음에 드는 병원에 바로 상담을 신청해요. 한국어, English, 中文, 日本語로 쓸 수 있어요.',
    'Compare treatment prices, recovery time and moderated reviews from dermatology and plastic surgery clinics across Busan and Gyeongnam, then request a consultation in a few taps. Available in Korean, English, Chinese and Japanese.',
    '一次比較釜山・慶南皮膚科與整形外科的療程價格、恢復期和經審核的評價，並直接向喜歡的診所申請諮詢。支援韓文、英文、中文和日文。',
    '一次比较釜山・庆南皮肤科和整形外科的项目价格、恢复期和经过审核的评价，并直接向心仪的诊所申请咨询。支持韩语、英语、中文和日语。',
    '釜山・慶南の皮膚科・美容外科の施術価格、ダウンタイム、審査済みの口コミをまとめて比較し、気になるクリニックにそのまま相談を申し込めます。韓国語・英語・中国語・日本語に対応しています。',
  ],
  heroCta: ['병원 입점 문의', 'Clinic partnership', '診所入駐洽詢', '诊所入驻咨询', 'クリニック掲載のご相談'],
  heroSoon: ['App Store · Google Play 출시 준비 중', 'Coming soon to the App Store and Google Play', '即將上架 App Store・Google Play', '即将上架 App Store 和 Google Play', 'App Store・Google Play で公開予定'],
  mockCaption: ['앱 화면 예시', 'App preview (sample)', 'App 畫面示意', 'App 界面示意', 'アプリ画面のイメージ'],

  featKicker: ['부산미인은 이런 앱이에요', 'What Busanmiin does', '釜山美人能做什麼', '釜山美人能做什么', '釜山美人でできること'],
  featTitle: ['병원 고르기 전에 필요한 정보를 한 화면에', 'Everything you need before choosing a clinic', '選診所前需要的資訊，一次看完', '选诊所前需要的信息，一次看完', 'クリニック選びに必要な情報をひとつに'],
  featLead: [
    '한국인도, 부산을 찾은 여행자도 같은 정보를 보고 같은 기준으로 고를 수 있게 만들었어요.',
    'Locals and visitors see the same information and choose by the same standard.',
    '讓韓國人和來釜山的旅客看到同樣的資訊，用同樣的標準選擇。',
    '让韩国人和来釜山的游客看到同样的信息，用同样的标准选择。',
    '地元の方も旅行者も、同じ情報・同じ基準で選べるようにしました。',
  ],
  f1t: ['시술별 가격 비교', 'Compare prices by treatment', '依療程比較價格', '按项目比较价格', '施術ごとの価格比較'],
  f1d: [
    '같은 시술의 병원별 가격과 회복 기간(다운타임)을 나란히 보여줘요.',
    "See each clinic's price and downtime for the same treatment side by side.",
    '同一療程，各診所的價格與恢復期一目了然。',
    '同一项目，各诊所的价格和恢复期一目了然。',
    '同じ施術のクリニック別価格とダウンタイムを並べて比較できます。',
  ],
  f2t: ['검수한 진짜 후기', 'Moderated, real reviews', '經審核的真實評價', '经审核的真实评价', '審査済みのリアルな口コミ'],
  f2d: [
    '모든 후기는 공개 전에 확인하고, 영수증을 올린 후기에는 인증 표시가 붙어요. 나라별로 골라 볼 수도 있어요.',
    'Every review is checked before it goes live, receipt-backed reviews get a badge, and you can filter by country.',
    '所有評價發布前皆經審核，附收據的評價會有認證標章，也能依國家篩選。',
    '所有评价发布前都经过审核，附收据的评价带有认证标志，也可以按国家筛选。',
    'すべての口コミは公開前に確認し、領収書付きの口コミには認証マークが付きます。国別に絞り込むこともできます。',
  ],
  f3t: ['내 언어로 상담 신청', 'Ask in your own language', '用母語諮詢', '用母语咨询', '自分の言語で相談'],
  f3d: [
    '영어·중국어·일본어로 고민을 남기면 부산미인이 번역해서 병원에 전달해요. 외국어 상담이 되는 병원도 따로 표시해요.',
    'Write in English, Chinese or Japanese. We translate your request for the clinic, and clinics with foreign-language staff are marked.',
    '用中文、英文或日文留下需求，我們會翻譯後轉給診所。可外語諮詢的診所也會特別標示。',
    '用中文、英文或日文留下需求，我们会翻译后转给诊所。可外语咨询的诊所也会特别标示。',
    '日本語・英語・中国語で相談内容を送ると、翻訳してクリニックに伝えます。外国語対応のクリニックも表示します。',
  ],
  f4t: ['내외국인 같은 가격', 'Same price for everyone', '內外國人同價', '内外国人同价', '韓国人と同じ料金'],
  f4d: [
    '외국인에게도 한국인과 같은 가격을 받는 병원을 따로 표시해요.',
    'Clinics that charge visitors the same price as locals are clearly marked.',
    '特別標示對外國人收取與韓國人相同價格的診所。',
    '特别标示对外国人收取与韩国人相同价格的诊所。',
    '外国人にも韓国人と同じ料金で施術するクリニックを表示します。',
  ],
  areasLabel: ['부산 · 경남 주요 지역', 'Main areas in Busan and Gyeongnam', '釜山・慶南主要地區', '釜山・庆南主要地区', '釜山・慶南の主なエリア'],
  a1: ['서면', 'Seomyeon', '西面', '西面', '西面'],
  a2: ['해운대', 'Haeundae', '海雲台', '海云台', '海雲台'],
  a3: ['센텀시티', 'Centum City', 'Centum City', 'Centum City', 'センタムシティ'],
  a4: ['광안리', 'Gwangalli', '廣安里', '广安里', '広安里'],
  a5: ['남포동', 'Nampo-dong', '南浦洞', '南浦洞', '南浦洞'],
  a6: ['연산동', 'Yeonsan-dong', '蓮山洞', '莲山洞', '蓮山洞'],
  a7: ['창원', 'Changwon', '昌原', '昌原', '昌原'],
  a8: ['김해', 'Gimhae', '金海', '金海', '金海'],

  howKicker: ['이용 방법', 'How it works', '使用方式', '使用方法', 'ご利用の流れ'],
  howTitle: ['세 단계면 충분해요', 'Three simple steps', '三個步驟就完成', '三个步骤就完成', '3ステップでかんたん'],
  s1: [
    '<b>비교하기</b><br>지역·시술·가격·회복 기간으로 병원을 골라요.',
    '<b>Compare</b><br>Filter clinics by area, treatment, price and downtime.',
    '<b>比較</b><br>依地區、療程、價格和恢復期篩選診所。',
    '<b>比较</b><br>按地区、项目、价格和恢复期筛选诊所。',
    '<b>比べる</b><br>エリア・施術・価格・ダウンタイムで絞り込みます。',
  ],
  s2: [
    '<b>상담 신청</b><br>일정과 고민을 남기면 병원에서 연락을 받아요.',
    '<b>Ask</b><br>Share your dates and concerns and hear back from the clinic.',
    '<b>諮詢</b><br>留下行程與需求，診所會與您聯繫。',
    '<b>咨询</b><br>留下行程和需求，诊所会联系您。',
    '<b>相談する</b><br>日程と相談内容を送ると、クリニックから連絡が届きます。',
  ],
  s3: [
    '<b>후기 남기기</b><br>다녀온 뒤 후기를 쓰면 다음 사람에게 큰 도움이 돼요.',
    '<b>Review</b><br>After your visit, leave a review to help the next person.',
    '<b>留下評價</b><br>療程後留下評價，幫助下一位使用者。',
    '<b>留下评价</b><br>做完后留下评价，帮助下一位用户。',
    '<b>口コミを書く</b><br>来院後に口コミを書くと、次の人の役に立ちます。',
  ],

  pKicker: ['병원 관계자분께', 'For clinics', '致診所', '致诊所', 'クリニックの皆さまへ'],
  pTitle: [
    '부산을 찾는 외국인 환자를<br>부산미인에서 만나세요',
    'Meet patients visiting Busan<br>from around the world',
    '在釜山美人<br>遇見來自海外的患者',
    '在釜山美人<br>遇见来自海外的患者',
    '釜山を訪れる海外の患者さまと<br>釜山美人で出会う',
  ],
  pLead: [
    '부산·경남 피부과와 성형외과는 공공데이터로 기본 정보가 먼저 등록돼요. 병원이 직접 관리하면 가격표와 소개를 정확하게 보여줄 수 있어요.',
    'Clinics in Busan and Gyeongnam are listed with basic information from public data. Clinics that manage their own page can show accurate prices and introductions.',
    '釜山・慶南的皮膚科與整形外科會先以公開資料登錄基本資訊。診所自行管理頁面，就能正確呈現價格與介紹。',
    '釜山・庆南的皮肤科和整形外科会先以公共数据登记基本信息。诊所自行管理页面，就能准确展示价格和介绍。',
    '釜山・慶南の皮膚科・美容外科は公的データで基本情報が先に登録されます。クリニックがページを管理すると、正確な価格や紹介を掲載できます。',
  ],
  p1t: ['기본 등록은 무료', 'Free basic listing', '基本登錄免費', '基本登记免费', '基本掲載は無料'],
  p1d: [
    '병원 관리자 화면에서 소개, 진료시간, 가격표를 직접 고치고 상담 신청을 확인해요.',
    'Edit your introduction, hours and price list and check consultation requests from the clinic dashboard.',
    '在診所後台直接修改介紹、營業時間和價目表，並查看諮詢申請。',
    '在诊所后台直接修改介绍、营业时间和价目表，并查看咨询申请。',
    '管理画面から紹介文・診療時間・料金表を編集し、相談の申し込みを確認できます。',
  ],
  p2t: ['외국어 상담 지원', 'Foreign-language support', '外語諮詢支援', '外语咨询支持', '外国語相談のサポート'],
  p2d: [
    '외국어로 들어온 상담을 한국어로 번역해서 전달해요. 통역 직원이 없어도 시작할 수 있어요.',
    'Requests in other languages reach you translated into Korean, so you can start without interpreters on staff.',
    '外語諮詢會翻譯成韓文轉給診所，沒有翻譯人員也能開始。',
    '外语咨询会翻译成韩语转给诊所，没有翻译人员也能开始。',
    '外国語の相談は韓国語に翻訳してお届けするので、通訳スタッフがいなくても始められます。',
  ],
  p3t: ['프리미엄 (월 정액)', 'Premium (monthly plan)', '進階方案（月費）', '高级方案（月费）', 'プレミアム（月額）'],
  p3d: [
    '검색 상단 노출, 사진·이벤트 소개, 조회·상담 통계를 제공해요.',
    'Top placement in search, photo and event pages, and view and consultation stats.',
    '搜尋結果置頂、照片與活動介紹、瀏覽與諮詢統計。',
    '搜索结果置顶、照片与活动介绍、浏览与咨询统计。',
    '検索上位表示、写真・イベント紹介、閲覧・相談の統計を提供します。',
  ],
  p4t: ['광고 기준을 지켜요', 'Compliant listings', '遵守廣告規範', '遵守广告规范', '広告ルールを順守'],
  p4d: [
    '가격·이벤트·소개 문구는 의료광고 기준에 맞는지 확인한 뒤 공개해요.',
    'Prices, events and descriptions are reviewed against Korean medical advertising rules before going live.',
    '價格、活動與介紹文字會先確認符合韓國醫療廣告規範後才公開。',
    '价格、活动与介绍文字会先确认符合韩国医疗广告规范后才公开。',
    '価格・イベント・紹介文は韓国の医療広告基準に沿っているか確認してから公開します。',
  ],
  contactLead: [
    '입점과 프리미엄 문의는 이메일로 보내 주세요. 담당자가 연락드려요.',
    'For listings and premium plans, email us and we will get back to you.',
    '入駐與進階方案請來信洽詢，我們會盡快與您聯繫。',
    '入驻与高级方案请发邮件咨询，我们会尽快联系您。',
    '掲載・プレミアムのご相談はメールでお送りください。担当者よりご連絡します。',
  ],
  disclaimer: [
    '부산미인은 병원 정보와 이용 후기를 보여주는 정보 서비스예요. 직접 진료나 시술을 하지 않으며, 표시된 가격은 병원이 제공한 정보로 실제 비용은 상담 후 달라질 수 있어요. 모든 시술에는 부작용이 생길 수 있으니 전문의와 충분히 상담하세요.',
    'Busanmiin is an information service that shows clinic details and patient reviews. We do not provide medical treatment. Prices are supplied by clinics and the final cost may change after consultation. Every procedure carries risks, so consult a specialist before deciding.',
    '釜山美人是提供診所資訊與使用評價的資訊服務，本身不進行任何診療或療程。標示的價格由診所提供，實際費用可能於諮詢後有所不同。所有療程皆可能產生副作用，請先與專科醫師充分諮詢。',
    '釜山美人是提供诊所信息和用户评价的信息服务，本身不进行任何诊疗或项目。标示的价格由诊所提供，实际费用可能在咨询后有所不同。所有项目都可能产生副作用，请先与专科医生充分咨询。',
    '釜山美人はクリニック情報と利用者の口コミを掲載する情報サービスで、診療や施術は行いません。表示価格はクリニックが提供した情報で、実際の費用は相談後に変わる場合があります。すべての施術には副作用の可能性があるため、専門医と十分にご相談ください。',
  ],
  fCompany: ['운영', 'Operated by', '營運', '运营', '運営'],
  fContact: ['문의', 'Contact', '聯絡我們', '联系我们', 'お問い合わせ'],
  fPrivacy: ['개인정보처리방침', 'Privacy Policy', '隱私權政策', '隐私政策', 'プライバシーポリシー'],
  fHome: ['홈', 'Home', '首頁', '首页', 'ホーム'],
};

function pickLang() {
  try {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) >= 0) return q;
  } catch (e) {}
  try {
    var saved = localStorage.getItem('bm-lang');
    if (saved && LANGS.indexOf(saved) >= 0) return saved;
  } catch (e) {}
  var list = navigator.languages || [navigator.language || 'ko'];
  for (var i = 0; i < list.length; i++) {
    var l = String(list[i]).toLowerCase();
    if (l.indexOf('ko') === 0) return 'ko';
    if (l.indexOf('ja') === 0) return 'ja';
    if (l.indexOf('zh') === 0) return /tw|hk|mo|hant/.test(l) ? 'tw' : 'cn';
    if (l.indexOf('en') === 0) return 'en';
  }
  return 'en';
}

function applyLang(lang) {
  var i = LANGS.indexOf(lang);
  if (i < 0) return;
  document.documentElement.lang = HTML_LANG[lang];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var row = T[el.getAttribute('data-i18n')];
    if (row) el.textContent = row[i];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var row = T[el.getAttribute('data-i18n-html')];
    if (row) el.innerHTML = row[i];
  });
  if (document.body.hasAttribute('data-title') && T.docTitle) document.title = T.docTitle[i];
  var sel = document.getElementById('lang');
  if (sel) sel.value = lang;
  try {
    localStorage.setItem('bm-lang', lang);
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', function () {
  var sel = document.getElementById('lang');
  if (sel) sel.addEventListener('change', function () { applyLang(sel.value); });
  applyLang(pickLang());
});
