/* 인도 · 스리랑카 · 네팔 · 아프리카 · 서아시아 · 동남아 · 기타 지역의 차나무 차 */
(function () {
  const T = DAROK.T;

  /* ── 인도 ── */
  const IN = '인도';
  T('in-darjeeling', '다즐링', 'Darjeeling', 'Darjeeling Tea', 'black', IN, '서벵골주 다르질링 구릉지', 'darj-ff', {
    kind: 'family', al: ['다질링', 'Darjeeling', '다르질링'], cv: '중국 소엽종 계통이 많고 클론 품종(AV2 등)도 쓰임',
    d: '히말라야 구릉지인 다르질링에서 나는 차로, 인도에서 처음으로 지리적 표시(GI)를 받은 상품입니다. 고지대의 서늘한 기후와 중국 소엽종 계통 차나무 덕분에 가볍고 향이 섬세해 "홍차의 샴페인"이라는 별명이 있습니다. 수확 시기(플러시)에 따라 맛이 크게 달라 퍼스트·세컨드·오텀널로 나누어 판매합니다.',
    h: '19세기 중반 영국 동인도회사가 중국에서 들여온 차나무를 심으며 차 산업이 시작되었습니다. 현재 80여 개의 차 농원(에스테이트)이 있습니다.',
    vs: '같은 인도의 아삼은 저지대 대엽종 차라 진하고 묵직합니다.',
    warn: '다르질링 이름을 붙인 블렌드 중에는 다른 지역 차가 섞인 것도 있습니다. GI 로고와 농원 이름을 확인하십시오.' });
  T('in-darj-ff', '다즐링 퍼스트 플러시', 'Darjeeling First Flush', 'Darjeeling First Flush', 'black', IN, '서벵골주 다르질링', 'darj-ff', {
    kind: 'harvest', par: 'in-darjeeling', al: ['다즐링 FF', 'First Flush', '첫물 다즐링', 'Darjeeling 1st Flush'],
    d: '겨울잠에서 깬 차나무가 봄(대략 3~4월)에 처음 내는 싹으로 만든 다즐링입니다. 산화를 가볍게 하는 경우가 많아 잎에 녹색이 섞여 있고, 찻물이 밝은 금빛이며 꽃·풋과일 같은 상큼한 향과 경쾌한 떫은맛이 있습니다.',
    lf: '녹색·은색·갈색이 섞인 가벼운 잎', lq: '밝은 연금색', ar: ['꽃', '풋사과', '싱그러운 잎'], ts: ['경쾌한 떫은맛', '산뜻함'], fp: 's2b2a3y1f3r3g3',
    tip: '우유를 넣지 않고 마시는 것이 일반적입니다. 떫으면 시간을 30초 줄이거나 물을 90℃로 낮추십시오.' });
  T('in-darj-sf', '다즐링 세컨드 플러시', 'Darjeeling Second Flush', 'Darjeeling Second Flush', 'black', IN, '서벵골주 다르질링', 'black-ortho', {
    kind: 'harvest', par: 'in-darjeeling', al: ['다즐링 SF', 'Second Flush', '머스캣 다즐링', 'Darjeeling 2nd Flush'],
    d: '늦봄~초여름(대략 5~6월)에 수확한 다즐링입니다. 퍼스트 플러시보다 산화가 깊어 찻물이 진한 호박색이고, "머스캣텔(Muscatel)"이라 불리는 청포도·머스캣 같은 향으로 유명합니다. 이 향은 매미충류가 잎을 빨아먹는 것과 관련이 있다는 설명이 있습니다.',
    lf: '갈색에 금빛 싹이 섞인 잎', lq: '맑은 호박색', ar: ['머스캣', '익은 과일', '견과'], ts: ['둥근 단맛', '중간 바디'], fp: 's3b2a2y3f2r4n1',
    b: { w: { t: [95, 100], g: 2.5, ml: 200, s: [180, 240, 0], r: 2 } } });
  T('in-darj-autumnal', '다즐링 오텀널', 'Darjeeling Autumnal', 'Darjeeling Autumn Flush', 'black', IN, '서벵골주 다르질링', 'black-ortho', {
    kind: 'harvest', par: 'in-darjeeling', al: ['오텀널', 'Autumnal Flush', '가을 다즐링', 'Autumn Flush'], d: '몬순(우기)이 끝난 가을(대략 10~11월)에 수확한 다즐링입니다. 향은 세컨드 플러시보다 덜 화려하지만 맛이 부드럽고 둥글며, 구운 견과·나무 같은 향이 납니다.', fp: 's3b2a2y3r2n2w2' });
  T('in-assam', '아삼', 'Assam', 'Assam Tea', 'black', IN, '아삼주 브라마푸트라강 유역', 'black-ortho', {
    kind: 'family', al: ['앗삼', 'Assam', '아쌈'], cv: '아삼종(Camellia sinensis var. assamica)',
    d: '인도 북동부 아삼주의 저지대 평원에서 나는 차입니다. 1820~30년대 영국인들이 이 지역에 자생하던 대엽종 차나무(아삼종)를 확인한 것이 인도 차 산업의 출발점이 되었습니다. 덥고 습한 기후의 대엽종 차라 맛이 진하고 몰티(맥아 같은)한 풍미가 강해, 우유와 잘 어울립니다. 생산 방식에 따라 오소독스와 CTC로 나뉩니다.',
    ar: ['맥아', '꿀', '말린 과일'], ts: ['진함', '묵직한 바디'], fp: 's3b3a3y5r1o1w1' });
  T('in-assam-ortho', '아삼 오소독스', 'Assam Orthodox', 'Assam Orthodox', 'black', IN, '아삼주', 'black-ortho', {
    par: 'in-assam', kind: 'style', al: ['아삼 홀리프', 'Assam TGFOP', 'Assam Orthodox'], d: '잎을 시들리고 비비는 전통 방식(오소독스)으로 만든 아삼입니다. 잎 형태가 살아 있고, 금색 싹(팁)이 많을수록 꿀과 맥아 같은 단맛이 강합니다. 여름(세컨드 플러시) 아삼이 가장 높이 평가됩니다.', fp: 's3b2a3y4r1o1' });
  T('in-assam-ctc', '아삼 CTC', 'Assam CTC', 'Assam CTC', 'black', IN, '아삼주', 'black-ctc', {
    par: 'in-assam', kind: 'style', al: ['CTC', 'Crush Tear Curl', '아삼 알갱이차'], d: '시들린 잎을 기계로 부수고(Crush) 찢고(Tear) 말아(Curl) 작은 알갱이로 만든 아삼입니다. 1930년대에 개발된 방식으로, 진하고 빠르게 우러나 티백과 인도의 짜이에 널리 쓰입니다.', lf: '작고 둥근 갈색 알갱이', lq: '짙은 적갈색', fp: 's2b3a4y5o1', tip: '우유와 설탕을 넣거나 짜이로 끓이는 용도에 잘 맞습니다.' });
  T('in-nilgiri', '닐기리 홍차', 'Nilgiri', 'Nilgiri Tea', 'black', IN, '타밀나두주 닐기리 구릉', 'black-ortho', {
    al: ['닐기리', 'Nilgiri', 'Blue Mountains'], d: '남인도 서고츠 산맥의 닐기리("푸른 산") 구릉에서 나는 차입니다. 일 년 내내 수확이 가능하며, 맑은 찻물과 부드러운 과일·꽃향을 가진 가벼운 홍차로 아이스티와 블렌드에 많이 쓰입니다.', ar: ['꽃', '과일'], fp: 's3b1a2y2f2r2' });
  T('in-sikkim', '시킴 홍차', 'Sikkim', 'Sikkim Tea (Temi)', 'black', IN, '시킴주 남시킴 테미', 'darj-ff', {
    al: ['시킴', 'Temi', '테미 다원'], d: '다르질링과 이웃한 시킴주의 차로, 테미(Temi) 다원이 대표적입니다. 다즐링과 비슷한 고지대 차로 꽃향과 산뜻한 맛이 있습니다.', fp: 's3b2a2y2f3r2' });
  T('in-kangra', '캉그라 홍차', 'Kangra', 'Kangra Tea', 'black', IN, '히마찰프라데시주 캉그라 계곡', 'black-ortho', {
    al: ['캉그라', 'Kangra'], d: '히말라야 서쪽의 캉그라 계곡에서 나는 차로, 지리적 표시를 받았습니다. 녹차와 홍차를 함께 생산하며 생산량이 적습니다.', fp: 's3b2a2y2r2' });
  T('in-dooars', '두아르 홍차', 'Dooars', 'Dooars Tea', 'black', IN, '서벵골주 두아르 평원', 'black-ctc', {
    al: ['두아르', 'Dooars', 'Duars'], d: '다르질링 남쪽 히말라야 기슭 평원의 차 산지입니다. CTC 생산이 많고, 아삼보다 부드러운 진한 맛으로 블렌드에 많이 쓰입니다.', fp: 's2b2a3y4' });
  T('in-terai', '테라이 홍차', 'Terai', 'Terai Tea', 'black', IN, '서벵골주 테라이 평원', 'black-ctc', {
    al: ['테라이', 'Terai'], d: '다르질링 구릉 바로 아래 평지 지대의 차 산지로, 주로 CTC 홍차를 생산합니다.', fp: 's2b2a3y4' });
  T('in-munnar', '문나르 홍차', 'Munnar', 'Munnar Tea', 'black', IN, '케랄라주 문나르', 'black-ortho', {
    al: ['문나르', 'Munnar'], d: '남인도 케랄라주 서고츠 산맥의 고원 차 산지입니다. 맑은 찻물과 은은한 향의 홍차를 생산합니다.', fp: 's3b2a2y3' });

  /* ── 스리랑카 ── */
  const LK = '스리랑카';
  T('lk-ceylon', '실론 홍차', 'Ceylon Tea', 'Ceylon Tea', 'black', LK, '스리랑카 중남부 고원 등', 'black-ortho', {
    kind: 'family', al: ['실론티', 'Ceylon', '세일론', '스리랑카 홍차'],
    d: '스리랑카(옛 이름 실론)에서 생산되는 차입니다. 19세기 커피 녹병으로 커피 농장이 무너진 뒤 차로 전환하면서 세계적인 차 산지가 되었습니다. 스리랑카 차 위원회는 고도와 기후에 따라 7개 주요 산지(우바·누와라엘리야·딤불라·우다푸셀라와·캔디·루후나·사바라가무와)로 나누어 소개합니다. 고도에 따라 고지대·중지대·저지대 차로도 구분합니다.',
    h: '1867년 제임스 테일러가 캔디 근교 룰레콘데라 농원에서 상업적 차 재배를 시작한 것이 실론 차 산업의 출발로 꼽힙니다.' });
  const lk = (id, ko, en, region, al, d, fp, extra) => T(id, ko, en, en, 'black', LK, region, 'black-ortho', Object.assign({ kind: 'family', par: 'lk-ceylon', al, d, fp }, extra || {}));
  lk('lk-uva', '우바', 'Uva', '우바주 고지대', ['Uva', '우바 홍차'], '스리랑카 동쪽 고원의 산지로, 계절풍이 건조하게 불어오는 7~9월 무렵의 차가 특히 유명합니다. 이 시기에 "우바 플레이버"라 불리는 멘톨 같은 시원한 향이 난다고 알려져 있으며, 다즐링·기문과 함께 세계 3대 홍차로 소개되기도 합니다.', 's2b2a3y3f2w1', { ar: ['멘톨', '꽃'] });
  lk('lk-nuwara-eliya', '누와라엘리야', 'Nuwara Eliya', '중앙주 누와라엘리야(해발 약 1,800m 이상)', ['Nuwara Eliya', '누와라 엘리야'], '스리랑카에서 가장 높은 고도의 차 산지로, 찻물이 밝고 가벼우며 꽃향과 산뜻한 떫은맛이 있습니다. "실론의 샴페인"이라 불리기도 합니다.', 's2b2a3y1f3r2g2');
  lk('lk-dimbula', '딤불라', 'Dimbula', '중앙주 딤불라', ['Dimbula'], '중앙 고원 서쪽의 고지대 산지로, 남서 계절풍 영향으로 1~3월 무렵 품질이 좋은 것으로 알려져 있습니다. 상쾌한 떫은맛과 균형 잡힌 맛이 특징입니다.', 's2b2a3y3f2');
  lk('lk-kandy', '캔디', 'Kandy', '중앙주 캔디(중지대)', ['Kandy'], '실론 차 산업이 시작된 중지대 산지입니다. 맛이 진하고 무난해 블렌드와 밀크티에 잘 어울립니다.', 's2b2a3y3');
  lk('lk-ruhuna', '루후나', 'Ruhuna', '남부주(저지대)', ['Ruhuna'], '남부 저지대 산지로, 잎이 크고 검으며 맛이 진하고 단맛이 있습니다. 중동 지역으로 많이 수출됩니다.', 's3b2a2y4o1');
  lk('lk-sabaragamuwa', '사바라가무와', 'Sabaragamuwa', '사바라가무와주(저지대)', ['Sabaragamuwa'], '스리랑카에서 가장 넓은 저지대 산지 중 하나로, 루후나와 비슷하게 진하고 단맛이 있는 홍차를 생산합니다.', 's3b2a2y4');
  lk('lk-uda-pussellawa', '우다푸셀라와', 'Uda Pussellawa', '중앙주·우바주 경계 고지대', ['Uda Pussellawa'], '누와라엘리야와 우바 사이의 고지대 산지로, 두 지역의 특징이 섞인 섬세한 향의 차를 생산합니다.', 's2b2a3y2f2');
  T('lk-silver-tips', '실론 실버팁', 'Ceylon Silver Tips', 'Ceylon Silver Tips', 'white', LK, '스리랑카 고지대 등', 'white-needle', {
    al: ['실버팁', 'Silver Tips', '실론 백차'], d: '스리랑카에서 싹만 따서 시들려 말린 백차입니다. 생산량이 적고 맛이 가볍고 부드럽습니다.', fp: 's3b0a1y1f2g2' });

  /* ── 네팔·방글라데시 ── */
  T('np-ilam', '일람 홍차', 'Ilam Tea', 'Ilam Tea', 'black', '네팔', '코시 주 일람', 'darj-ff', {
    al: ['일람', 'Ilam', '네팔 일람'], d: '다르질링과 국경을 맞댄 네팔 동부 일람 지역의 차입니다. 지형과 기후가 다르질링과 비슷해 꽃향이 있는 가벼운 홍차를 만들며, 네팔 차 산업이 시작된 곳입니다.', fp: 's3b2a2y2f3r2' });
  T('np-himalaya', '네팔 히말라야 홍차', 'Nepal Himalayan Tea', 'Nepal Himalayan Tea', 'black', '네팔', '코시 주 단쿠타·테라툼 등', 'darj-ff', {
    al: ['네팔 홍차', 'Nepal Tea', 'Himalayan Tea'], d: '네팔 동부 고지대(단쿠타·테라툼 등)의 소규모 농가와 다원에서 생산하는 정통 방식 차입니다. 홍차뿐 아니라 백차·우롱 스타일도 만들어지고 있습니다.', fp: 's3b2a2y2f3r2' });
  T('bd-sylhet', '실렛 홍차', 'Sylhet Tea', 'Sylhet Tea', 'black', '방글라데시', '실렛 관구', 'black-ctc', {
    al: ['실렛', 'Sylhet', '방글라데시 홍차'], d: '방글라데시 북동부 실렛 지역의 차로, 남아시아에서 오래된 상업 차 산지 중 하나입니다. 주로 CTC 홍차를 생산합니다.', fp: 's2b2a3y4' });

  /* ── 아프리카 ── */
  T('ke-kenya', '케냐 홍차', 'Kenyan Tea', 'Kenyan Tea', 'black', '케냐', '리프트 밸리 동·서쪽 고지대(케리초 등)', 'black-ctc', {
    al: ['케냐', 'Kenya Tea'], d: '케냐는 세계 최대 수준의 홍차 수출국으로, 적도 부근 고지대에서 일 년 내내 차를 수확합니다. 대부분 CTC 방식이라 진하고 밝은 붉은색 찻물이 빠르게 우러나며, 영국식 블렌드와 티백에 널리 쓰입니다.', fp: 's2b2a3y4r1' });
  T('ke-purple', '케냐 퍼플티', 'Kenyan Purple Tea', 'Purple Tea', 'black', '케냐', '케냐 고지대', 'black-ortho', {
    al: ['퍼플티', 'Purple Tea', 'TRFK 306'], cv: 'TRFK 306 — 케냐 차연구소가 개발한 안토시아닌이 많은 자색 잎 품종',
    d: '케냐 차연구기관이 개발한 자색 잎 품종(TRFK 306)으로 만든 차입니다. 홍차뿐 아니라 녹차·백차 방식으로도 만들어 이 항목은 품종을 중심으로 한 차를 가리킵니다. 잎의 안토시아닌 때문에 우리면 보랏빛이 돌기도 합니다.',
    warn: '같은 품종이라도 가공 방식이 제품마다 다르니 포장을 확인하십시오.', fp: 's2b2a2y2r1g2' });
  T('rw-rwanda', '르완다 홍차', 'Rwandan Tea', 'Rwandan Tea', 'black', '르완다', '르완다 고지대', 'black-ctc', {
    al: ['르완다', 'Rwanda Tea'], d: '르완다의 고지대(해발 약 1,500m 이상)에서 생산되는 차로, CTC가 많지만 정통 방식의 고급 홍차와 녹차도 늘고 있습니다.', fp: 's2b2a3y3r1' });
  T('mw-malawi', '말라위 홍차', 'Malawian Tea', 'Malawian Tea', 'black', '말라위', '물란제·톨로 지역', 'black-ctc', {
    al: ['말라위', 'Malawi Tea'], d: '말라위는 아프리카에서 상업적 차 재배를 가장 일찍 시작한 나라 가운데 하나로, 19세기 후반 물란제 지역에 차가 심어졌습니다. 주로 블렌드용 CTC 홍차를 생산하며, 소규모 농원의 정통 차와 백차도 알려지고 있습니다.', fp: 's2b2a3y3' });
  T('tz-tanzania', '탄자니아 홍차', 'Tanzanian Tea', 'Tanzanian Tea', 'black', '탄자니아', '남부 고원(무핀디 등)·우삼바라 산지', 'black-ctc', {
    al: ['탄자니아', 'Tanzania Tea'], d: '탄자니아 남부 고원과 북동부 산지에서 생산되는 차로, 주로 블렌드용 CTC 홍차입니다.', fp: 's2b2a3y3' });
  T('ug-uganda', '우간다 홍차', 'Ugandan Tea', 'Ugandan Tea', 'black', '우간다', '서부(르웬조리 산지 주변 등)', 'black-ctc', {
    al: ['우간다', 'Uganda Tea'], d: '우간다 서부를 중심으로 생산되는 홍차로, 대부분 블렌드용 CTC입니다.', fp: 's2b2a3y3' });

  /* ── 서아시아·코카서스 ── */
  T('tr-rize', '튀르키예 리제 차', 'Rize Çayı', 'Turkish Rize Tea', 'black', '튀르키예', '흑해 연안 리제주', 'black-ortho', {
    al: ['터키 차', '튀르키예 차', 'Turkish Tea', 'Rize', 'Çay', '차이'], tg: ['이중 주전자'],
    d: '튀르키예 흑해 연안의 리제 지역에서 나는 홍차로, 튀르키예 국민이 하루에 여러 잔씩 마시는 일상 차입니다. 위아래 두 칸으로 된 주전자(차이단륵)의 위칸에 진하게 우린 차를 아래칸의 끓는 물로 희석해, 튤립 모양의 작은 유리잔에 마십니다.',
    h: '튀르키예의 상업 차 재배는 20세기 전반(1930~40년대) 리제 지역에서 본격화되었습니다.',
    b: { k: { g: 10, ml: 500, min: [10, 15] } }, tip: '위칸에 찻잎과 소량의 물을 넣고 아래칸 물이 끓는 증기로 10~15분 우린 뒤, 진한 차를 잔에 일부 붓고 아래칸 끓는 물로 원하는 농도까지 채웁니다.', fp: 's2b3a3y3o1' });
  T('ge-georgia', '조지아 홍차', 'Georgian Tea', 'Georgian Tea', 'black', '조지아', '서부 구리아·이메레티·아자리아 등', 'black-ortho', {
    al: ['조지아', 'Georgian Tea', '그루지야 차'], d: '흑해 연안 조지아 서부의 차로, 소련 시대에는 소련 최대의 차 공급지였습니다. 소련 해체 후 생산이 크게 줄었다가 근래 소규모 정통 차 생산이 되살아나고 있습니다. 부드럽고 단맛이 있는 홍차가 많습니다.', fp: 's3b1a2y2r2' });
  T('az-lankaran', '아제르바이잔 렌코란 차', 'Lənkəran çayı', 'Lankaran Tea', 'black', '아제르바이잔', '렌코란·아스타라 지역', 'black-ortho', {
    al: ['렌코란', 'Lankaran', '아제르바이잔 차'], d: '카스피해 남서 연안 렌코란 지역에서 나는 홍차로, 아제르바이잔의 차 문화(배 모양 유리잔 "아르무두"로 마시는 전통)를 뒷받침합니다.', fp: 's2b2a3y3' });
  T('ir-lahijan', '이란 라히잔 차', 'چای لاهیجان', 'Lahijan Tea', 'black', '이란', '길란주 라히잔', 'black-ortho', {
    al: ['라히잔', 'Lahijan', '이란 차', 'Persian Tea'], d: '카스피해 연안 길란주의 라히잔은 20세기 초 카셰프 오사타네(Kashef al-Saltaneh)가 인도에서 차를 들여와 심은 이란 차 산업의 발상지로 알려져 있습니다. 가볍고 부드러운 홍차가 많습니다.', fp: 's2b2a2y2' });
  T('ru-krasnodar', '크라스노다르 차', 'Краснодарский чай', 'Krasnodar Tea', 'black', '러시아', '크라스노다르 지방 소치 일대', 'black-ortho', {
    al: ['소치 차', 'Krasnodar Tea', 'Sochi Tea'], d: '흑해 연안 소치 일대에서 재배되는 차로, 세계에서 가장 북쪽에 있는 상업 차 산지 중 하나로 소개됩니다.', fp: 's2b2a2y2' });

  /* ── 동남아시아 ── */
  T('vn-thai-nguyen', '타이응우옌 녹차', 'Trà Thái Nguyên', 'Thai Nguyen Green Tea', 'green', '베트남', '타이응우옌성(떤끄엉 등)', 'green-bud', {
    al: ['떤끄엉 차', 'Tân Cương', 'Thai Nguyen', '베트남 녹차'], d: '베트남 북부 타이응우옌성의 녹차로, 특히 떤끄엉 지역이 유명합니다. 가늘게 꼬인 잎을 덖어 만들며 쌉쌀하고 진한 맛 뒤에 단맛이 남습니다. 베트남 사람들이 일상적으로 가장 많이 마시는 차 가운데 하나입니다.', fp: 's2b3a3u2y3g3' });
  T('vn-shan-tuyet', '산뜨옛 차', 'Chè Shan Tuyết', 'Shan Tuyet', 'green', '베트남', '하장성·옌바이성 등 북부 산악 지대', 'green-large', {
    al: ['Shan Tuyết', '산 뚜엣', 'Snow Shan'], cv: '산뜨옛(Shan Tuyết) — 고산 지대의 오래된 대엽 차나무', d: '베트남 북부 고산 지대에 자라는 오래된 대엽 차나무(산뜨옛)에서 딴 잎으로 만드는 차입니다. 싹에 흰 솜털이 많아 "눈(뚜옛)"이라는 이름이 붙었습니다. 녹차·백차·홍차 등 여러 방식으로 만들어지며, 이 항목은 대표적인 녹차 형태를 가리킵니다.', fp: 's3b2a2u2y3g3' });
  T('vn-tra-sen', '베트남 연꽃차', 'Trà Sen', 'Vietnamese Lotus Tea', 'green', '베트남', '하노이 서호(떠이호) 등', 'scented-green', {
    sc: ['scented'], al: ['짜센', 'Trà Sen', 'Lotus Tea', '연꽃향 녹차'], ing: ['차나무 (Camellia sinensis) — 녹차', '연꽃 (Nelumbo nucifera)'],
    d: '녹차에 연꽃의 향을 입힌 베트남 전통 가향차입니다. 가장 전통적인 하노이 서호 방식은 연꽃 안의 수술(꽃밥)을 모아 녹차와 함께 여러 차례 향을 입히는 것으로, 매우 많은 연꽃이 필요해 귀합니다. 연꽃 봉오리 속에 찻잎을 넣어 하룻밤 향을 배게 하는 간단한 방식도 있습니다.', ar: ['연꽃', '풀'], fp: 's3b2a2u2y2f5g2' });
  T('vn-black', '베트남 홍차', 'Vietnamese Black Tea', 'Vietnamese Black Tea', 'black', '베트남', '북부 산지·럼동성 등', 'black-ortho', {
    al: ['Vietnam Black Tea'], d: '베트남은 세계적인 차 생산국으로, 홍차의 상당량을 블렌드용으로 수출합니다. 북부 산악 지대의 산뜨옛 홍차처럼 정통 방식의 고급 홍차도 만들어지고 있습니다.', fp: 's3b2a2y3' });
  T('th-doi-mae-salong', '도이매살롱 우롱', 'Doi Mae Salong Oolong', 'Doi Mae Salong Oolong', 'oolong', '태국', '치앙라이주 도이매살롱', 'oolong-ball', {
    al: ['매살롱 우롱', 'Mae Salong', '태국 우롱차'], cv: '청심우롱, 금훤, 사계춘 등 대만 품종',
    d: '태국 북부 치앙라이의 도이매살롱 산지에서 대만 품종과 제법으로 만드는 반구형 우롱차입니다. 20세기 중반 이 지역에 정착한 중국계 주민들이 대만의 지원을 받아 차 재배를 시작했다고 알려져 있습니다.', fp: 's3b1a1y2f3' });
  T('th-cha-yen', '타이 밀크티', 'ชาเย็น', 'Thai Iced Tea (Cha Yen)', 'black', '태국', '태국', 'black-ctc', {
    sc: ['blend'], al: ['차옌', 'Cha Yen', 'Thai Tea', '태국 밀크티'], ing: ['홍차', '설탕', '연유·무가당연유 등(레시피마다 다름)'],
    d: '진하게 우린 홍차에 설탕과 연유(또는 우유)를 넣고 얼음에 부어 마시는 태국의 음료입니다. 시판 타이티 믹스에는 주황색을 내는 색소나 향신료(팔각 등)가 들어간 경우가 많습니다.',
    warn: '시판 제품의 원재료는 브랜드마다 크게 다릅니다. 원재료 표시를 확인하십시오.', b: { w: { t: [100, 100], g: 5, ml: 250, s: [300, 0, 0], r: 1 } }, fp: 's5b2a2y4' });
  T('mm-myanmar', '미얀마 샨 차', 'Shan Tea', 'Myanmar Shan Tea', 'green', '미얀마', '샨주', 'green-large', {
    al: ['샨 녹차', 'Myanmar Tea'], d: '미얀마 샨주는 오래된 차 재배지로, 녹차와 홍차를 생산합니다. 미얀마에서는 찻잎을 발효시켜 샐러드처럼 먹는 라펫(lahpet) 문화도 유명합니다(이 항목은 마시는 녹차를 뜻합니다).', fp: 's2b3a3y3g3' });
  T('id-java', '인도네시아 자바 홍차', 'Java Tea', 'Java Black Tea', 'black', '인도네시아', '자와바랏(서자바) 고지대', 'black-ortho', {
    al: ['자바 홍차', 'Java Tea', '인도네시아 홍차'], d: '인도네시아 서자바 고지대에서 생산되는 홍차로, 네덜란드 식민 시대에 시작된 차 산업의 전통을 잇습니다. 맛이 부드럽고 무난해 블렌드에 많이 쓰입니다.', fp: 's3b2a2y3' });
  T('my-cameron', '카메론하이랜드 홍차', 'Cameron Highlands Tea', 'Cameron Highlands Tea', 'black', '말레이시아', '파항주 카메론하이랜드', 'black-ortho', {
    al: ['말레이시아 홍차', 'Cameron Highlands'], d: '말레이시아 반도의 고원 휴양지 카메론하이랜드에서 1920~30년대부터 재배된 차입니다. 가벼운 맛의 홍차가 주를 이룹니다.', fp: 's2b2a2y2' });

  /* ── 유럽·남미 ── */
  T('pt-azores', '아조레스 차', 'Chá dos Açores', 'Azores Tea', 'black', '포르투갈', '아조레스 제도 상미겔섬', 'black-ortho', {
    al: ['아조레스', 'Gorreana', 'Azores Tea'], d: '대서양의 포르투갈령 아조레스 제도 상미겔섬에서 19세기부터 재배된 차입니다. 유럽에서 오랫동안 상업적으로 차를 생산해 온 드문 곳으로 꼽힙니다.', fp: 's2b2a2y2' });
  T('uk-cornwall', '영국 콘월 차', 'Cornish Tea', 'Cornish Tea (Tregothnan)', 'black', '영국', '잉글랜드 콘월', 'black-ortho', {
    al: ['콘월 차', 'Tregothnan'], d: '영국 콘월의 트레고스난 영지에서 2000년대부터 상업적으로 재배하는 차입니다. 영국 본토에서 기른 드문 차로 알려져 있습니다.', fp: 's2b2a2y2' });
  T('ar-misiones', '아르헨티나 미시오네스 차', 'Té de Misiones', 'Argentine Black Tea', 'black', '아르헨티나', '미시오네스주·코리엔테스주', 'black-ctc', {
    al: ['아르헨티나 홍차', 'Argentine Tea'], d: '아르헨티나 북동부에서 대규모로 생산되는 홍차로, 상당량이 아이스티와 블렌드용으로 수출됩니다.', fp: 's2b2a3y3' });
})();
