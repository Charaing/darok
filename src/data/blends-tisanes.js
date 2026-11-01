/* 가향차 · 블렌딩 티 · 허브차 · 꽃차 · 과일차 · 곡물차 · 전통 대용차
   식용 원료만 수록했습니다. 임신·수유 중이거나 약을 복용 중이면 허브차를 마시기 전에 전문가와 상의하십시오. */
(function () {
  const T = DAROK.T;
  const CS = '차나무 (Camellia sinensis)';
  const noCaf = '원료 식물에 카페인이 없어 카페인이 없는 음료입니다. (차나무 잎이 섞인 블렌드는 예외)';

  /* ── 가향차 ── */
  T('sc-jasmine-green', '자스민 녹차', '茉莉花茶', 'Jasmine Green Tea', 'green', '중국', '푸젠성 푸저우, 광시 헝저우 등', 'scented-green', {
    sc: ['scented'], al: ['말리화차', '茉莉花茶', 'Jasmine Tea', '쟈스민차', 'Molihua Cha'], ing: [CS + ' — 주로 홍청 녹차', '자스민 꽃 (Jasminum sambac)'],
    d: '녹차(주로 홍청 녹차)에 갓 핀 자스민(말리화) 꽃을 섞어 두어 꽃향을 찻잎에 배게 한 가향차입니다. 꽃을 섞었다 걸러 내는 음제(窨製)를 여러 번 반복할수록 향이 진해지며, 고급품은 다 쓴 꽃을 걸러 내 찻잎에 꽃잎이 거의 남지 않습니다. 중국 북부에서 특히 사랑받는 차입니다.',
    h: '푸저우의 자스민차 문화 체계는 2014년 FAO 세계중요농업유산으로 지정되었습니다. 오늘날에는 광시 헝저우(횡현)가 자스민 꽃의 최대 생산지입니다.',
    p: '바탕차 준비 → 저녁에 피기 시작하는 꽃과 찻잎을 섞어 쌓아 둠 → 꽃 걸러 내기 → 건조. 이 과정을 여러 번(고급품은 5~9회) 반복합니다.',
    ar: ['자스민', '풀'], ts: ['부드러운 단맛'], fp: 's3b1a2u1y2f5g2', why: '중국에서 가장 많이 소비되는 가향차입니다.',
    vs: '향료를 뿌린 저가 자스민차는 꽃으로 음제한 차와 향이 다릅니다. 원재료에 "향료"가 있는지 확인하십시오.' });
  T('sc-jasmine-pearl', '자스민 진주', '茉莉龍珠', 'Jasmine Pearl', 'green', '중국', '푸젠성 푸저우 등', 'scented-green', {
    sc: ['scented'], par: 'sc-jasmine-green', al: ['자스민 펄', 'Jasmine Pearls', '茉莉龙珠', '용주', 'Dragon Pearl'], ing: [CS, '자스민 꽃 (Jasminum sambac)'],
    d: '싹과 잎을 손으로 작은 구슬 모양으로 말아 만든 녹차에 자스민 꽃으로 향을 입힌 차입니다. 물에 넣으면 구슬이 천천히 풀리며 잎이 펼쳐집니다.', fp: 's3b1a1u2y2f5g2',
    b: { w: { t: [80, 85], g: 3, ml: 250, s: [150, 180, 210], r: 3 }, g: { t: [85, 90], g: 5, ml: 100, s: [20, 25, 30], inc: 10, r: 6 } } });
  T('sc-jasmine-maofeng', '자스민 모봉', '茉莉毛峰', 'Jasmine Maofeng', 'green', '중국', '푸젠성·광시 등', 'scented-green', {
    sc: ['scented'], par: 'sc-jasmine-green', al: ['茉莉毛峰', 'Jasmine Mao Feng'], ing: [CS, '자스민 꽃 (Jasminum sambac)'], d: '모봉(싹 하나에 잎 하나 정도의 곧은 잎) 형태의 녹차에 자스민 향을 입힌 차입니다. 진주형보다 빨리 우러납니다.', fp: 's3b1a2u1y2f5g2' });
  T('sc-jasmine-yinhao', '자스민 은호', '茉莉銀毫', 'Jasmine Silver Tip', 'green', '중국', '푸젠성 푸저우 등', 'scented-green', {
    sc: ['scented'], par: 'sc-jasmine-green', al: ['茉莉银毫', 'Jasmine Yin Hao'], ing: [CS, '자스민 꽃 (Jasminum sambac)'], d: '솜털이 많은 싹 위주의 녹차로 만든 고급 자스민차입니다.', fp: 's3b1a1u2y2f5g2' });
  T('sc-guihua-oolong', '계화우롱', '桂花烏龍', 'Osmanthus Oolong', 'oolong', '중국', '푸젠성·광시 등', 'oolong-ball', {
    sc: ['scented'], al: ['桂花乌龙', 'Osmanthus Oolong', '계화 우롱차'], ing: [CS + ' — 우롱차', '계화 (Osmanthus fragrans)'], d: '반구형 우롱차에 계수나무 꽃(계화)의 향을 입히거나 말린 꽃을 섞은 가향차입니다. 살구 같은 달콤한 꽃향이 납니다.', fp: 's4b1a1y2f5r2',
    vs: '황금계·계화향 단총은 꽃을 넣지 않은 차 자체의 향입니다.' });
  T('sc-rose-black', '장미 홍차', '玫瑰紅茶', 'Rose Black Tea', 'black', '중국', '광둥·푸젠·윈난 등', 'scented-black', {
    sc: ['scented'], al: ['玫瑰红茶', 'Rose Congou', '로즈 홍차'], ing: [CS + ' — 홍차', '식용 장미 꽃잎'], d: '홍차에 장미 꽃잎을 섞거나 장미 향을 입힌 가향차입니다.', fp: 's3b1a2y3f5', warn: '향료를 쓴 제품도 많습니다. 원재료를 확인하십시오.' });
  T('bl-earl-grey', '얼그레이', 'Earl Grey', 'Earl Grey', 'black', '영국(블렌드)', '영국에서 유래한 블렌드 스타일', 'scented-black', {
    sc: ['scented', 'blend'], al: ['Earl Grey', '얼 그레이', '백작 차'], ing: [CS + ' — 홍차(중국·인도·스리랑카 등, 제품마다 다름)', '베르가모트 (Citrus bergamia) 오일 또는 향료'],
    d: '홍차에 베르가모트(감귤류의 일종) 향을 입힌 가향차입니다. 시트러스의 상큼한 향이 특징이며, 바탕 홍차의 종류와 향의 세기는 제품마다 크게 다릅니다.',
    h: '이름은 19세기 영국 총리였던 2대 그레이 백작에서 왔다고 하지만, 그가 이 블렌드를 직접 만들었다거나 중국에서 선물받았다는 이야기는 근거가 확실하지 않습니다.',
    ar: ['베르가모트', '시트러스', '꽃'], fp: 's2b2a3y3f2r4', tip: '우유를 넣어도 좋고, 레몬 대신 그대로 마셔도 향이 충분합니다.' });
  T('bl-lady-grey', '레이디 그레이', 'Lady Grey', 'Lady Grey', 'black', '영국(블렌드)', '상표 블렌드', 'scented-black', {
    kind: 'brand', sc: ['scented', 'blend'], par: 'bl-earl-grey', brand: 'Twinings(트와이닝스)의 등록 상표', al: ['Lady Grey'], ing: [CS + ' — 홍차', '베르가모트', '그 밖의 시트러스(구성은 제조사 표기 참조)'],
    d: '얼그레이에 다른 시트러스 향을 더해 부드럽게 만든 블렌드로, 영국 트와이닝스사의 상표 제품입니다. 일반적인 차 종류가 아니라 특정 회사의 고유 블렌드이므로 세부 원재료는 제품 포장을 따르십시오.', fp: 's3b1a2y2r4' });
  T('bl-english-breakfast', '잉글리시 브렉퍼스트', 'English Breakfast', 'English Breakfast', 'black', '영국(블렌드)', '블렌드 스타일', 'breakfast', {
    sc: ['blend'], al: ['English Breakfast', '브렉퍼스트 티'], ing: [CS + ' — 홍차(아삼·실론·케냐 등이 흔하며 제조사마다 다름)'],
    d: '아침 식사와 함께 우유를 넣어 마시기 좋도록 진하게 블렌딩한 홍차 스타일입니다. 정해진 배합은 없으며, 아삼·실론·케냐 등의 홍차를 섞는 경우가 많습니다.', fp: 's2b3a3y4o1', tip: '우유를 넣는다면 4~5분 충분히 우리십시오.' });
  T('bl-irish-breakfast', '아이리시 브렉퍼스트', 'Irish Breakfast', 'Irish Breakfast', 'black', '아일랜드(블렌드)', '블렌드 스타일', 'breakfast', {
    sc: ['blend'], al: ['Irish Breakfast'], ing: [CS + ' — 홍차(아삼 비중이 높은 경우가 많음)'], d: '아삼 비중을 높여 잉글리시 브렉퍼스트보다 더 진하고 몰티하게 만드는 경우가 많은 블렌드 스타일입니다. 배합은 제조사마다 다릅니다.', fp: 's2b3a3y5' });
  T('bl-scottish-breakfast', '스코티시 브렉퍼스트', 'Scottish Breakfast', 'Scottish Breakfast', 'black', '영국(블렌드)', '블렌드 스타일', 'breakfast', {
    sc: ['blend'], al: ['Scottish Breakfast'], ing: [CS + ' — 홍차(구성은 제조사마다 다름)'], d: '스코틀랜드의 연수(軟水)에서도 진하게 우러나도록 강한 홍차를 섞은 블렌드 스타일이라는 설명이 흔합니다. 배합은 제조사마다 다릅니다.', fp: 's2b3a3y5' });
  T('bl-russian-caravan', '러시안 캐러밴', 'Russian Caravan', 'Russian Caravan', 'black', '블렌드', '블렌드 스타일', 'black-smoked', {
    sc: ['blend'], al: ['Russian Caravan'], ing: [CS + ' — 홍차(기문·정산소종 등이 흔하나 제조사마다 다르고 우롱차를 섞기도 함)'],
    d: '17~19세기 중국에서 러시아까지 낙타 대상(캐러밴)으로 차를 운반하던 역사에서 이름을 딴 블렌드입니다. 모닥불 연기가 배었다는 이야기를 떠올리게 하듯 훈연 홍차를 섞어 은은한 연기 향을 내는 경우가 많지만, 정해진 배합은 없습니다.', fp: 's3b2a2y3o3w2' });
  T('bl-masala-chai', '마살라 차이', 'मसाला चाय', 'Masala Chai', 'black', '인도', '인도 전역', 'chai', {
    sc: ['blend'], al: ['짜이', '차이', 'Masala Chai', 'Chai', '마살라 짜이'], ing: [CS + ' — 주로 아삼 CTC', '우유', '설탕', '생강·카다멈·계피·정향·후추 등(집마다 다름)'],
    d: '홍차(주로 CTC)에 생강, 카다멈 등 향신료와 우유, 설탕을 넣고 함께 끓인 인도의 음료입니다. "차이"는 힌디어로 차를 뜻하고, "마살라"는 향신료 혼합을 뜻합니다. 거리의 차이왈라(차 상인)가 작은 잔에 따라 파는 모습으로 유명합니다.',
    b: { k: { g: 5, ml: 300, min: [4, 6] } }, tip: '물 150ml에 으깬 생강·카다멈과 찻잎을 넣고 2~3분 끓인 뒤 우유 150ml와 설탕을 넣고 다시 끓어오르면 걸러 냅니다.', fp: 's4b2a2y5w1' });
  T('bl-moroccan-mint', '모로칸 민트 티', 'أتاي', 'Moroccan Mint Tea', 'green', '모로코', '마그레브 지역', 'green-pellet', {
    sc: ['blend'], al: ['아타이', 'Atay', 'Maghrebi Mint Tea', '모로코 민트차'], ing: [CS + ' — 주로 건파우더 녹차', '스피어민트 (Mentha spicata)', '설탕'],
    d: '중국산 건파우더 녹차에 신선한 스피어민트와 설탕을 넣어 진하게 우린 북아프리카의 차입니다. 주전자를 높이 들어 잔에 따라 거품을 내는 것이 특징이며, 손님 환대의 상징입니다.',
    b: { w: { t: [95, 100], g: 5, ml: 500, s: [180, 0, 0], r: 1 } }, tip: '찻잎을 끓는 물로 한 번 헹군 뒤 민트·설탕과 함께 우리고, 잔에 따랐다 다시 주전자에 붓기를 반복해 섞습니다.', fp: 's5b2a2y3g4' });
  T('bl-kashmiri-kahwa', '카슈미르 카와', 'قہوہ', 'Kashmiri Kahwa', 'green', '인도·파키스탄', '카슈미르 지역', 'green-flat', {
    sc: ['blend'], al: ['카와', 'Kahwa', 'Kehwa', 'Qehwa'], ing: [CS + ' — 녹차', '사프란', '카다멈', '계피', '아몬드 등(레시피마다 다름)'],
    d: '녹차에 사프란·카다멈·계피 등을 넣고 우려 아몬드 조각을 띄워 마시는 카슈미르의 전통 차입니다. 전통적으로 사모바르로 끓입니다.', b: { k: { g: 3, ml: 300, min: [3, 5] } }, fp: 's4b1a1y2f2w2' });
  T('bl-noon-chai', '눈 차이(카슈미르 핑크 티)', 'نون چائے', 'Noon Chai (Kashmiri Pink Tea)', 'green', '인도·파키스탄', '카슈미르 지역', 'chai', {
    sc: ['blend'], al: ['핑크 티', 'Pink Tea', 'Noon Chai', '시르 차이'], ing: [CS + ' — 녹차(특정 품종)', '우유', '소금', '베이킹소다'],
    d: '녹차 잎을 베이킹소다와 함께 오래 끓인 뒤 찬물을 더해 휘저으면 진한 붉은빛 농축액이 되고, 여기에 우유와 소금을 넣으면 분홍색이 됩니다. "눈(noon)"은 카슈미르어로 소금을 뜻합니다.', fp: 's1b1a1y4' });
  T('bl-po-cha', '티베트 버터차', 'བོད་ཇ', 'Tibetan Butter Tea (Po Cha)', 'dark', '중국(티베트)·네팔·부탄 등', '히말라야 고원', 'dark-brick', {
    sc: ['blend'], al: ['수유차', '酥油茶', 'Po Cha', 'Butter Tea', '보차'], ing: [CS + ' — 주로 벽돌 흑차(장차 등)', '야크 버터 또는 버터', '소금'],
    d: '벽돌 흑차를 오래 끓여 진한 차를 만든 뒤, 버터와 소금을 넣고 긴 원통(동모)에서 휘저어 섞은 히말라야 고원의 음료입니다. 높고 추운 지역에서 열량과 수분을 보충하는 일상 음료입니다.', b: { k: { g: 10, ml: 1000, min: [20, 30] } }, fp: 's1b1a1y5' });
  T('bl-suutei-tsai', '몽골 수태차', 'сүүтэй цай', 'Mongolian Milk Tea', 'dark', '몽골', '몽골 전역', 'dark-brick', {
    sc: ['blend'], al: ['수테차', 'Suutei Tsai', '몽골 밀크티'], ing: [CS + ' — 주로 벽돌차', '우유', '소금', '물'], d: '벽돌차를 물에 끓인 뒤 우유와 소금을 넣고 국자로 떠올렸다 붓기를 반복해 만드는 몽골의 짭짤한 밀크티입니다.', b: { k: { g: 8, ml: 1000, min: [5, 10] } }, fp: 's1b1a1y4' });
  T('bl-hk-milk-tea', '홍콩 밀크티', '港式奶茶', 'Hong Kong Milk Tea', 'black', '중국(홍콩)', '홍콩', 'chai', {
    sc: ['blend'], al: ['실크스타킹 밀크티', '絲襪奶茶', 'Hong Kong Style Milk Tea'], ing: [CS + ' — 여러 홍차 블렌드', '무가당 연유 또는 연유', '설탕'],
    d: '여러 홍차를 섞어 진하게 끓인 뒤 천 거름망(스타킹을 닮아 "실크스타킹"이라 부름)으로 여러 번 걸러 내고 무가당 연유를 넣어 만드는 홍콩의 밀크티입니다. 홍콩 차찬텡(茶餐廳) 문화를 대표합니다.', b: { k: { g: 10, ml: 400, min: [8, 12] } }, fp: 's3b3a3y5' });

  /* ── 허브차 ── */
  const H = (id, ko, orig, en, bp, ing, d, o) => T(id, ko, orig, en, 'herbal', o.country || '여러 지역', o.region || '', bp, Object.assign({ ing, d, cf: noCaf }, o));
  H('hb-chamomile', '캐모마일', 'Chamomile', 'Chamomile', 'herbal-flower', ['저먼 캐모마일 꽃 (Matricaria chamomilla)'],
    '데이지를 닮은 작은 꽃을 말려 우리는 허브차로, 사과를 떠올리게 하는 달콤한 꽃향이 있습니다. 유럽에서 오래전부터 잠자리에 들기 전에 마시는 차로 사랑받아 왔습니다. 시판품의 대부분은 저먼 캐모마일이며, 로만 캐모마일(Chamaemelum nobile)도 쓰입니다.',
    { al: ['카모마일', '캐머마일', 'Chamomile', '국화과 캐모마일'], country: '유럽·이집트 등', fp: 's3b1a0y1f4r2', warn: '국화과 식물에 알레르기가 있으면 피하십시오.', ar: ['사과', '꿀', '꽃'] });
  H('hb-peppermint', '페퍼민트', 'Peppermint', 'Peppermint', 'herbal-leaf', ['페퍼민트 잎 (Mentha × piperita)'],
    '워터민트와 스피어민트의 교잡종인 페퍼민트의 잎을 말린 허브차입니다. 멘톨이 많아 시원하고 강한 박하향이 납니다.', { al: ['박하차', 'Peppermint', '페파민트'], fp: 's1b1a0y1g3', ar: ['멘톨', '박하'], warn: '위식도 역류가 있으면 증상이 심해질 수 있다는 보고가 있습니다.' });
  H('hb-spearmint', '스피어민트', 'Spearmint', 'Spearmint', 'herbal-leaf', ['스피어민트 잎 (Mentha spicata)'],
    '페퍼민트보다 멘톨이 적어 부드럽고 단 박하향이 나는 허브입니다. 모로코식 민트 티에 쓰이는 민트가 이것입니다.', { al: ['Spearmint', '녹양박하'], fp: 's2b0a0y1g3' });
  H('hb-rooibos', '루이보스', 'Rooibos', 'Rooibos', 'rooibos', ['루이보스 (Aspalathus linearis)'],
    '남아프리카공화국 서케이프주 세더버그 산지 일대에서만 자라는 콩과 관목의 잎과 줄기를 잘게 썰어 발효(산화)시킨 허브차입니다. 붉은 찻물과 달콤하고 나무 같은 향이 있고 타닌이 적어 오래 우려도 떫지 않습니다. "레드부시"라고도 부르며, 지리적 표시로 보호받습니다.',
    { al: ['루이보스티', 'Rooibos', 'Red Bush', '레드부시', 'Rooibosch'], country: '남아프리카공화국', region: '서케이프주 세더버그 일대', fp: 's4b0a1y2r2n1w3', ar: ['꿀', '나무', '바닐라'], lc: '#B8502C' });
  H('hb-green-rooibos', '그린 루이보스', 'Green Rooibos', 'Green Rooibos', 'rooibos', ['루이보스 (Aspalathus linearis)'],
    '루이보스를 산화시키지 않고 바로 말려 만든 것으로, 찻물이 노랗고 풀·꿀 같은 향이 납니다.', { par: 'hb-rooibos', kind: 'style', al: ['Green Rooibos', '비발효 루이보스'], country: '남아프리카공화국', fp: 's3b1a1y1g2w1' });
  H('hb-honeybush', '허니부시', 'Honeybush', 'Honeybush', 'rooibos', ['허니부시 (Cyclopia 속)'],
    '남아프리카공화국 남부 해안 산지에 자라는 콩과 식물로, 꽃에서 꿀 향이 난다고 해서 이름이 붙었습니다. 루이보스와 비슷하게 산화시켜 만들며 더 달고 부드럽습니다.', { al: ['Honeybush', '하니부시'], country: '남아프리카공화국', fp: 's4b0a0y2r2w2' });
  H('hb-hibiscus', '히비스커스', 'Hibiscus', 'Hibiscus (Roselle)', 'hibiscus', ['로젤 꽃받침 (Hibiscus sabdariffa)'],
    '관상용 하와이무궁화가 아니라 식용 로젤(Hibiscus sabdariffa)의 두툼한 꽃받침을 말린 것입니다. 진한 루비색과 강한 신맛이 특징이며, 이집트·수단의 카르카데, 멕시코의 아과 데 하마이카처럼 여러 나라에서 차갑게도 마십니다.',
    { al: ['로젤', 'Roselle', '카르카데', 'Karkadé', 'Agua de Jamaica', '히비스커스티'], fp: 's1b0a2y1r4', lc: '#9E1F2C', warn: '혈압약을 복용 중이라면 많이 마시기 전에 상담하십시오.' });
  H('hb-rosehip', '로즈힙', 'Rosehip', 'Rosehip', 'hibiscus', ['들장미 열매 (Rosa canina 등)'],
    '장미의 열매를 말려 씨와 털을 제거하고 잘게 부순 것입니다. 새콤한 과일 맛이 있어 히비스커스와 함께 블렌드에 자주 쓰입니다.', { al: ['Rosehip', '로즈힙티', '들장미 열매'], fp: 's2b0a1y1r4', lc: '#C0503A' });
  H('hb-lavender', '식용 라벤더차', 'Lavender', 'Lavender', 'herbal-flower', ['잉글리시 라벤더 꽃 (Lavandula angustifolia)'],
    '식용으로 재배·가공한 라벤더 꽃봉오리를 우리는 허브차입니다. 향이 매우 강해 소량만 쓰거나 다른 차와 섞어 씁니다.', { al: ['라벤더', 'Lavender'], fp: 's1b2a0y1f5', b: { w: { t: [95, 100], g: 1, ml: 250, s: [300, 0, 0], r: 1 } }, warn: '향료·방향용 라벤더나 정유(에센셜 오일)는 식용이 아닙니다. 식품용으로 표시된 꽃만 쓰십시오.' });
  H('hb-lemon-balm', '레몬밤', 'Lemon Balm', 'Lemon Balm', 'herbal-leaf', ['레몬밤 잎 (Melissa officinalis)'],
    '꿀풀과 허브로, 잎을 비비면 레몬 같은 향이 납니다. 부드러운 레몬향 허브차로 마십니다.', { al: ['Lemon Balm', '멜리사', 'Melissa'], fp: 's2b0a0y1r2g3' });
  H('hb-lemongrass', '레몬그라스', 'Lemongrass', 'Lemongrass', 'herbal-leaf', ['레몬그라스 (Cymbopogon citratus)'],
    '동남아 요리에 쓰이는 볏과 허브로, 줄기와 잎에서 레몬 같은 상큼한 향이 납니다.', { al: ['Lemongrass', '레몬글라스'], fp: 's1b0a0y1r2g3' });
  H('hb-lemon-verbena', '레몬버베나', 'Lemon Verbena', 'Lemon Verbena', 'herbal-leaf', ['레몬버베나 잎 (Aloysia citrodora)'],
    '남미 원산의 관목으로, 잎에서 강한 레몬향이 납니다. 프랑스에서는 베르벤(verveine)이라 부르며 식후에 즐겨 마십니다.', { al: ['Lemon Verbena', '베르벤', 'Verveine'], fp: 's2b0a0y1r3g2' });
  H('hb-ginger', '생강차', '生薑茶', 'Ginger Tea', 'herbal-root', ['생강 뿌리줄기 (Zingiber officinale)'],
    '생강을 얇게 썰어 끓이거나 말린 생강을 우려 마시는 차입니다. 한국에서는 생강을 꿀·설탕에 재운 생강청을 물에 타 마시기도 하며, 생강과 대추를 함께 끓이기도 합니다. 알싸하고 따뜻한 매운맛이 특징입니다.',
    { al: ['Ginger Tea', '생강청', '진저티', '강차'], country: '한국·중국·인도 등', fp: 's1b1a0y2w1', tg: ['침출형', '끓이는 형', '청 형태'], tip: '생강청을 쓸 때는 따뜻한 물 200ml에 청 1~2큰술을 풀어 드십시오.', b: { k: { g: 20, ml: 1000, min: [15, 20] }, x: { g: 25, ml: 200, t: [70, 90] } } });
  H('hb-cinnamon', '시나몬차(계피차)', '桂皮茶', 'Cinnamon Tea', 'herbal-root', ['계피 (Cinnamomum cassia) 또는 실론 시나몬 (Cinnamomum verum)'],
    '계피 껍질을 끓이거나 우려 마시는 차입니다. 한국에서 흔히 쓰는 계피는 대개 카시아 계열이며, 실론 시나몬은 향이 더 부드럽습니다.',
    { al: ['계피차', 'Cinnamon Tea', '시나몬'], fp: 's3b1a1y2w4', warn: '카시아 계피에는 쿠마린이 많아 매일 많은 양을 장기간 섭취하는 것은 권장되지 않습니다.' });
  H('hb-fennel', '펜넬차', 'Fennel', 'Fennel Tea', 'herbal-root', ['펜넬 씨 (Foeniculum vulgare)'],
    '회향(펜넬) 씨앗을 살짝 으깨 우린 차로, 감초나 아니스를 닮은 달콤한 향이 있습니다.', { al: ['회향차', 'Fennel Tea', '펜넬'], fp: 's3b1a0y1w1', tip: '씨앗을 절구에 살짝 으깨면 향이 잘 나옵니다.', b: { w: { t: [100, 100], g: 2, ml: 250, s: [600, 0, 0], r: 1 } } });
  H('hb-elderflower', '엘더플라워차', 'Elderflower', 'Elderflower Tea', 'herbal-flower', ['서양딱총나무 꽃 (Sambucus nigra)'],
    '유럽의 서양딱총나무 꽃을 말려 우리는 허브차로, 머스캣을 떠올리는 꽃향이 있습니다. 코디얼(시럽)로도 많이 만듭니다.',
    { al: ['엘더플라워', 'Elderflower', '딱총나무꽃'], country: '유럽', fp: 's3b0a0y1f4r2', warn: '꽃만 식용으로 씁니다. 잎·줄기·덜 익은 열매·날열매는 독성 성분이 있어 차로 쓰지 마십시오.' });
  H('hb-butterfly-pea', '버터플라이피차', 'Butterfly Pea', 'Butterfly Pea Flower Tea', 'herbal-flower', ['나비완두 꽃 (Clitoria ternatea)'],
    '동남아시아에서 음식 색을 내는 데 쓰는 나비완두 꽃을 말린 것으로, 진한 파란색 찻물이 납니다. 레몬즙을 넣으면 산성이 되어 보라색으로 변합니다. 맛과 향은 아주 약합니다.', { al: ['나비콩꽃', 'Butterfly Pea', '블루티', '안찬'], country: '태국·말레이시아 등', fp: 's1b0a0y1g1', lc: '#2D3F9A' });
  H('hb-tulsi', '툴시차', 'तुलसी', 'Tulsi (Holy Basil)', 'herbal-leaf', ['홀리 바질 잎 (Ocimum tenuiflorum)'],
    '인도에서 신성하게 여기는 홀리 바질(툴시)의 잎을 말린 허브차로, 정향과 후추를 떠올리는 매콤한 향이 있습니다.', { al: ['홀리바질', 'Holy Basil', 'Tulsi', '툴라시'], country: '인도', fp: 's1b1a0y1g2w1' });
  H('hb-linden', '린든차', 'Linden', 'Linden (Lime Blossom)', 'herbal-flower', ['피나무 꽃과 포엽 (Tilia 속)'],
    '유럽 피나무(린덴)의 꽃과 꽃받침잎을 말린 허브차로, 꿀 같은 은은한 향이 납니다. 프랑스에서는 티욀(tilleul)이라 부릅니다.', { al: ['피나무꽃차', 'Linden', 'Lime Blossom', '티욀', 'Tilleul'], country: '유럽', fp: 's3b0a0y1f3' });
  H('hb-nettle', '쐐기풀차', 'Nettle', 'Nettle Tea', 'herbal-leaf', ['서양쐐기풀 잎 (Urtica dioica)'],
    '서양쐐기풀의 잎을 말려 우린 허브차로, 풀과 시금치 같은 맛이 납니다. 말리면 가시털의 따끔거리는 성분이 사라집니다.', { al: ['Nettle', '네틀'], country: '유럽', fp: 's1b1a1y1g4' });
  H('hb-sage', '세이지차', 'Sage', 'Sage Tea', 'herbal-leaf', ['커먼 세이지 잎 (Salvia officinalis)'],
    '요리용 허브인 세이지의 잎을 우린 차로, 향이 강하고 약간 쌉쌀합니다.', { al: ['Sage', '샐비어차'], fp: 's1b2a1y1g3w1', warn: '투존 성분이 있어 많은 양을 장기간 마시는 것은 피하십시오. 임신 중에는 피하십시오.' });
  H('hb-mate', '예르바 마테', 'Yerba Mate', 'Yerba Mate', 'mate', ['마테 잎 (Ilex paraguariensis)'],
    '남미(아르헨티나·파라과이·우루과이·브라질 남부)에서 즐기는 감탕나무과 식물의 잎으로 만든 음료입니다. 전통적으로 조롱박 그릇(마테)에 잎을 가득 넣고 금속 빨대(봄비야)로 물을 계속 부어 마십니다. 차나무가 아니지만 카페인이 들어 있습니다.',
    { al: ['마테차', 'Mate', 'Yerba Mate', '마테'], country: '아르헨티나·파라과이·우루과이·브라질', cf: '카페인이 들어 있습니다. 차나무 잎이 아니지만 카페인 음료입니다.', fp: 's1b3a2y3g4w2', warn: '매우 뜨거운 음료를 자주 마시면 식도에 부담이 될 수 있다는 연구가 있습니다. 너무 뜨겁지 않게 드십시오.' });
  H('hb-guayusa', '과유사', 'Guayusa', 'Guayusa', 'mate', ['과유사 잎 (Ilex guayusa)'],
    '에콰도르 아마존 지역에서 전통적으로 마셔 온 감탕나무과 식물의 잎입니다. 카페인이 들어 있으며, 마테보다 쓴맛이 적고 부드럽습니다.', { al: ['Guayusa', '구아유사'], country: '에콰도르', cf: '카페인이 들어 있습니다.', fp: 's2b1a1y2g3' });
  H('hb-yaupon', '야우폰', 'Yaupon', 'Yaupon Holly', 'mate', ['야우폰 홀리 잎 (Ilex vomitoria)'],
    '북미 남동부 원산의 감탕나무과 식물로, 북미에서 자생하는 카페인 식물입니다. 원주민이 의례용 음료로 썼으며 근래 차로 다시 생산되고 있습니다. 학명과 달리 일반적인 음용량에서 구토를 일으키지 않습니다.', { al: ['Yaupon', '야우폰 홀리'], country: '미국', cf: '카페인이 들어 있습니다.', fp: 's2b1a1y2g3w1' });
  H('hb-kuding', '고정차', '苦丁茶', 'Kuding Tea', 'mate', ['대엽동청 (Ilex kudingcha) 또는 소엽 고정(Ligustrum 속) — 제품마다 다름'],
    '중국 남부에서 마시는 매우 쓴 잎차입니다. 감탕나무속(대엽종)과 쥐똥나무속(소엽종) 등 서로 다른 식물이 같은 이름으로 유통됩니다. 한두 장만 넣어도 쓴맛 뒤에 단맛이 남습니다.', { al: ['쿠딩차', 'Kuding', '苦丁茶'], country: '중국', fp: 's1b5a2y2g2', b: { w: { t: [85, 95], g: 1, ml: 250, s: [120, 180, 0], r: 2 } }, warn: '원료 식물이 제품마다 달라 원재료 표시를 확인하십시오.' });
  H('hb-moringa', '모링가차', 'Moringa', 'Moringa Tea', 'herbal-leaf', ['모링가 잎 (Moringa oleifera)'],
    '열대 지방에서 채소로 먹는 모링가 나무의 잎을 말린 차로, 풀과 시금치 같은 맛이 납니다.', { al: ['Moringa', '드럼스틱 나무'], country: '인도·필리핀 등', fp: 's1b1a1y1g4' });
  H('hb-artichoke', '아티초크차', 'Trà Atisô', 'Artichoke Tea', 'herbal-root', ['아티초크 (Cynara cardunculus var. scolymus)의 꽃·잎·뿌리'],
    '베트남 달랏 지역에서 특히 많이 만드는 차로, 아티초크의 꽃봉오리·잎·뿌리를 말려 우리거나 농축합니다. 약간 달고 쌉쌀합니다.', { al: ['Trà Atisô', 'Artichoke Tea'], country: '베트남', fp: 's2b2a0y1g2w1' });
  H('hb-cacao-husk', '카카오닙스차', 'Cacao Husk', 'Cacao Husk / Nib Tea', 'herbal-root', ['카카오 열매 껍질 또는 닙스 (Theobroma cacao)'],
    '카카오 콩을 볶은 뒤 나온 껍질이나 닙스를 우린 차로, 은은한 초콜릿 향이 납니다.', { al: ['카카오차', 'Cacao Husk Tea', '카카오 껍질차'], cf: '카카오에는 테오브로민과 소량의 카페인이 들어 있습니다.', fp: 's2b2a1y2n2o3' });
  H('hb-mallow', '블루멜로우', 'Malva', 'Blue Mallow', 'herbal-flower', ['당아욱 꽃 (Malva sylvestris)'],
    '당아욱 꽃을 말린 차로, 우리면 푸른색을 띠고 산을 넣으면 분홍빛으로 변합니다. 맛은 순합니다.', { al: ['당아욱꽃차', 'Blue Mallow', '멜로우'], fp: 's1b0a0y1g1', lc: '#3B4F9A' });

  /* ── 꽃차 ── */
  const F = (id, ko, orig, en, ing, d, o) => T(id, ko, orig, en, 'flower', o.country || '여러 지역', o.region || '', o.bp || 'flower-cn', Object.assign({ ing, d, cf: noCaf }, o));
  F('fl-hangbaiju', '항백국', '杭白菊', 'Hangbaiju (Chrysanthemum)', ['국화 꽃 (Chrysanthemum morifolium)'],
    '저장성 퉁샹 일대에서 나는 식용 국화로, 중국에서 가장 대중적인 국화차입니다. 말린 꽃송이를 우리면 노란 찻물에 은은한 꽃향과 단맛이 납니다. 보이차와 섞어 마시는 국보(菊普)도 흔합니다.',
    { al: ['국화차', 'Chrysanthemum Tea', '杭白菊', '항국'], country: '중국', region: '저장성 퉁샹', fp: 's3b1a0y1f4', warn: '국화과 알레르기가 있으면 피하십시오.' });
  F('fl-gongju', '공국', '貢菊', 'Gongju (Huangshan Chrysanthemum)', ['국화 꽃 (Chrysanthemum morifolium)'], '안후이성 황산 일대의 식용 국화로, 예로부터 공물로 바쳐졌다고 해서 공국이라 부릅니다. 꽃이 작고 희며 향이 맑습니다.', { al: ['贡菊', '황산공국'], country: '중국', region: '안후이성 황산', fp: 's3b1a0y1f4' });
  F('kr-gamguk', '감국차', '甘菊茶', 'Gamguk (Korean Chrysanthemum)', ['감국 꽃 (Chrysanthemum indicum)'],
    '한국에서 가을에 피는 작은 노란 들국화인 감국의 꽃을 덖거나 쪄서 말린 꽃차입니다. 한국에서 "국화차"라고 하면 대개 이 차를 가리킵니다. 향이 진하고 약간 쌉쌀합니다.', { al: ['국화차', '한국 국화차', 'Gamguk'], country: '한국', fp: 's2b2a0y1f4', warn: '들국화 중에는 비슷한 종이 많으니 식품용으로 가공된 제품을 쓰십시오.' });
  F('fl-jasmine', '식용 자스민꽃차', '茉莉花', 'Jasmine Flower', ['자스민 꽃 (Jasminum sambac)'], '자스민(말리화) 꽃봉오리만 말려 우린 꽃차입니다. 찻잎이 없어 카페인이 없으며, 자스민 녹차보다 향이 직접적입니다.', { al: ['말리화', 'Jasmine Flower', '자스민꽃'], country: '중국', fp: 's2b1a0y1f5' });
  F('fl-osmanthus', '식용 계화차', '桂花茶', 'Osmanthus Flower', ['금목서 꽃 (Osmanthus fragrans)'], '계수나무 꽃(금목서)을 말린 꽃차로, 살구 같은 달콤한 향이 진합니다. 다른 차에 조금 섞어 향을 더하기도 합니다.', { al: ['계화', '오스만투스', 'Osmanthus', '금목서'], country: '중국', fp: 's3b0a0y1f5r2', b: { w: { t: [90, 95], g: 1, ml: 250, s: [180, 240, 0], r: 2 } } });
  F('fl-rose', '식용 장미차', '玫瑰花茶', 'Rose Bud Tea', ['식용 장미 꽃봉오리 (Rosa rugosa, Rosa damascena 등 식용 품종)'], '식용으로 재배한 장미 꽃봉오리를 말린 꽃차입니다. 은은한 장미향이 있으며, 다른 차와 섞어 마시기도 합니다.', { al: ['장미꽃차', 'Rose Tea', '玫瑰花', '매괴화'], country: '중국·이란·불가리아 등', fp: 's2b1a1y1f5', warn: '꽃집·관상용 장미는 농약 처리되어 있을 수 있어 식용으로 쓰면 안 됩니다.' });
  F('fl-honeysuckle', '금은화차', '金銀花茶', 'Honeysuckle Flower Tea', ['인동덩굴 꽃 (Lonicera japonica)'], '인동덩굴의 꽃봉오리를 말린 차로, 꽃이 흰색에서 노란색으로 변해 금은화라 부릅니다. 중국 남부에서 여름에 즐겨 마십니다.', { al: ['인동꽃차', 'Honeysuckle', '金银花'], country: '중국', fp: 's2b2a0y1f3' });
  F('kr-maehwa', '매화차', '梅花茶', 'Plum Blossom Tea', ['매화 꽃 (Prunus mume)'], '이른 봄 매화 꽃봉오리를 따서 말린 꽃차로, 찻잔에 띄우면 꽃이 피어나며 맑고 은은한 향이 납니다.', { al: ['매화꽃차', 'Plum Blossom'], country: '한국·중국', fp: 's2b0a0y1f4', bp: 'herbal-flower' });
  F('kr-yeonkkot', '연꽃차', '蓮花茶', 'Lotus Flower Tea', ['연꽃 (Nelumbo nucifera)'], '연꽃 한 송이를 통째로 말리거나, 큰 그릇에 연꽃을 띄워 뜨거운 물을 부어 우리는 차입니다. 찻잎과 함께 향을 입힌 연꽃 녹차와 달리 이 항목은 꽃만 쓰는 꽃차입니다.', { al: ['백련차', 'Lotus Flower'], country: '한국·베트남·중국', fp: 's2b1a0y1f4', b: { w: { t: [85, 95], g: 3, ml: 1000, s: [300, 300, 0], r: 2 } }, tip: '꽃 한 송이를 큰 볼에 넣고 물을 부어 꽃잎이 펼쳐지면 국자로 떠 마십니다.' });
  F('kr-marigold', '메리골드차', 'Marigold', 'Marigold Flower Tea', ['식용 메리골드 꽃 (Tagetes erecta)'], '식용으로 재배한 아프리칸 메리골드 꽃을 덖어 말린 꽃차로, 한국에서 많이 마십니다. 노란 찻물에 약간 쌉쌀하고 구수한 맛이 납니다.', { al: ['금잔화차', '마리골드', 'Marigold'], country: '한국', fp: 's2b2a0y1f3', warn: '금잔화(카렌듈라, Calendula officinalis)와 혼동되어 불리기도 합니다. 식품용으로 표시된 제품을 쓰십시오.' });

  /* ── 과일차 ── */
  const FR = (id, ko, orig, en, bp, ing, d, o) => T(id, ko, orig, en, 'fruit', o.country || '여러 지역', o.region || '', bp, Object.assign({ ing, d, cf: noCaf }, o));
  FR('fr-mixed', '과일 블렌딩 티', 'Fruit Infusion', 'Fruit Infusion', 'fruit-dry', ['말린 과일 조각, 히비스커스, 로즈힙 등(제품마다 다름)'], '말린 사과·베리·과피 등을 섞어 만든 과일 침출차입니다. 대부분 히비스커스와 로즈힙이 바탕이라 새콤하고 붉은 찻물이 납니다. 원재료 구성은 제품마다 크게 다릅니다.', { kind: 'family', sc: ['blend'], al: ['과일차', 'Fruit Tea', '프루츠티'], fp: 's3b0a1y1r5', warn: '향료가 들어간 제품이 많습니다. 원재료를 확인하십시오.' });
  FR('fr-apple', '사과차', 'Apple Tea', 'Dried Apple Infusion', 'fruit-dry', ['말린 사과 (Malus domestica)'], '말린 사과 조각을 끓는 물에 우리거나 끓여 마시는 차입니다. 은은한 단맛과 새콤함이 있습니다. 튀르키예의 "엘마 차이"처럼 분말 음료를 뜻하는 경우도 있어 형태를 구별해야 합니다.', { al: ['Apple Tea', '사과칩차', '엘마 차이'], fp: 's4b0a0y1r4' });
  FR('fr-apple-cinnamon', '사과 시나몬 블렌드', 'Apple Cinnamon', 'Apple Cinnamon Blend', 'fruit-dry', ['말린 사과', '계피(제품마다 구성이 다름)'], '말린 사과와 계피를 섞은 블렌드로, 사과파이를 떠올리는 따뜻한 향이 납니다.', { sc: ['blend'], par: 'fr-mixed', al: ['Apple Cinnamon'], fp: 's4b0a0y1r4w2' });
  FR('fr-berry', '베리 블렌드', 'Berry Blend', 'Berry Blend', 'fruit-dry', ['말린 베리류', '히비스커스', '로즈힙 등(제품마다 다름)'], '블루베리·라즈베리·딸기 등 베리류와 히비스커스를 섞은 과일차로, 새콤한 맛과 진한 붉은색이 특징입니다.', { sc: ['blend'], par: 'fr-mixed', al: ['Berry Tea', 'Mixed Berry'], fp: 's3b0a1y1r5', lc: '#8E2236' });
  FR('fr-peach', '복숭아 과일차', 'Peach Fruit Tea', 'Peach Fruit Infusion', 'fruit-dry', ['말린 복숭아 또는 복숭아 향, 사과·히비스커스 등(제품마다 다름)'], '복숭아 조각이나 향을 바탕으로 한 과일차입니다. 복숭아만으로 만든 제품은 드물고 대개 사과·히비스커스와 섞습니다.', { sc: ['blend'], par: 'fr-mixed', al: ['Peach Tea'], fp: 's4b0a0y1r4' });
  FR('fr-lemon', '레몬 과일차', 'Lemon Fruit Tea', 'Lemon Infusion', 'fruit-dry', ['말린 레몬 조각 또는 레몬 껍질 (Citrus limon)'], '말린 레몬 조각이나 껍질을 우린 차입니다. 레몬청을 물에 타 마시는 형태도 흔합니다.', { al: ['레몬차', 'Lemon Tea', '레몬청'], fp: 's1b1a0y1r4', b: { w: { t: [95, 100], g: 3, ml: 250, s: [300, 0, 0], r: 1 }, x: { g: 25, ml: 200, t: [70, 90] } } });
  FR('kr-yuja', '유자차', '柚子茶', 'Yuja-cha (Citron Tea)', 'cheong', ['유자 (Citrus junos)', '설탕 또는 꿀'],
    '유자를 껍질째 얇게 썰어 설탕이나 꿀에 재운 유자청을 따뜻한 물에 타 마시는 한국의 전통 음료입니다. 고흥·거제·남해 등 남해안이 주산지입니다. 우려 마시는 차가 아니라 청을 타는 형태입니다.', { al: ['Yuja Tea', 'Citron Tea', '유자청'], country: '한국', region: '전남 고흥, 경남 거제·남해 등', fp: 's5b1a0y2r5', tg: ['청 형태'] });
  FR('kr-mogwa', '모과차', '木瓜茶', 'Mogwa-cha (Chinese Quince Tea)', 'cheong', ['모과 (Pseudocydonia sinensis)', '설탕 또는 꿀'], '모과를 얇게 썰어 설탕·꿀에 재운 모과청을 물에 타 마시는 차입니다. 모과는 생으로 먹기에는 단단하고 시어 주로 청이나 차로 씁니다.', { al: ['Quince Tea', '모과청'], country: '한국', fp: 's4b1a1y2r4', tg: ['청 형태'] });
  FR('kr-maesil', '매실차', '梅實茶', 'Maesil-cha (Green Plum Tea)', 'cheong', ['매실 (Prunus mume)', '설탕'], '매실을 설탕에 재워 숙성시킨 매실청을 물에 타 마시는 음료입니다. 새콤달콤한 맛이 특징이며 여름에는 찬물에 타 마십니다.', { al: ['매실청', 'Green Plum Tea'], country: '한국', fp: 's4b0a1y1r4', tg: ['청 형태'], warn: '덜 익은 매실의 씨에는 아미그달린이 있어 날로 먹지 말고, 청은 충분히 숙성한 뒤 과육을 건져 내는 것이 일반적입니다.', b: { x: { g: 30, ml: 200, t: [5, 90] } } });
  FR('kr-omija', '오미자차', '五味子茶', 'Omija-cha (Schisandra Tea)', 'cheong', ['오미자 열매 (Schisandra chinensis)'], '단맛·신맛·쓴맛·짠맛·매운맛의 다섯 가지 맛이 난다고 해서 이름 붙은 오미자 열매로 만든 음료입니다. 말린 오미자를 찬물에 하룻밤 우려 붉은 우림물을 만들거나, 오미자청을 물에 탑니다. 뜨거운 물로 우리면 쓴맛이 강해질 수 있어 찬물 우림을 많이 씁니다.',
    { al: ['Omija', 'Schisandra', '오미자청'], country: '한국', region: '경북 문경 등', fp: 's2b2a2y1r4', lc: '#B3263A', tg: ['냉침', '청 형태'], b: { c: { g: 30, ml: 1000, h: [8, 12] }, x: { g: 25, ml: 200, t: [5, 60] } } });
  FR('kr-gyulpi', '귤피차(진피차)', '橘皮茶', 'Dried Tangerine Peel Tea', 'herbal-root', ['귤 껍질 (Citrus unshiu, Citrus reticulata 등)'], '귤 껍질을 말려 우리거나 끓인 차입니다. 오래 묵힌 귤껍질을 진피(陳皮)라 하며, 중국 광둥성 신후이의 진피가 유명합니다. 상큼하고 쌉쌀한 향이 납니다.', { al: ['진피차', '陳皮', '陈皮', '귤껍질차', 'Chenpi'], country: '한국·중국', fp: 's2b2a1y1r4w1', warn: '농약을 친 과일 껍질을 말려 쓰지 마십시오. 식품용으로 가공된 제품을 권합니다.' });

  /* ── 곡물차 ── */
  const G = (id, ko, orig, en, ing, d, o) => T(id, ko, orig, en, 'grain', o.country || '한국', o.region || '', o.bp || 'grain-roast', Object.assign({ ing, d, cf: noCaf }, o));
  G('kr-boricha', '보리차', '麥茶', 'Boricha (Roasted Barley Tea)', ['볶은 겉보리 또는 쌀보리 (Hordeum vulgare)'],
    '볶은 보리를 물에 넣고 끓여 만드는 한국의 대표적인 일상 음료입니다. 구수한 맛과 향이 있고 카페인이 없어 식수 대용으로 많이 마십니다. 일본에서는 무기차(麦茶)라 부르며 여름에 차갑게 마십니다.', { al: ['Boricha', 'Barley Tea', '무기차', '麦茶', 'Mugicha'], country: '한국·일본·중국', fp: 's2b1a0y2n2o4', tg: ['볶은 원료형'] });
  G('kr-oksusucha', '옥수수차', '玉蜀黍茶', 'Oksusu-cha (Roasted Corn Tea)', ['볶은 옥수수 알곡 (Zea mays)'], '볶은 옥수수 알갱이를 끓여 만드는 차로, 보리차보다 단맛이 있고 구수합니다.', { al: ['Corn Tea', '옥수수 알곡차'], fp: 's3b0a0y2n2o4' });
  G('kr-oksusu-suyeom', '옥수수수염차', '玉米鬚茶', 'Corn Silk Tea', ['옥수수수염 (Zea mays)'], '옥수수수염을 말리거나 볶아 우린 차로, 은은한 단맛이 있습니다. 볶은 옥수수와 섞은 제품도 많습니다.', { al: ['Corn Silk Tea', '옥수수 수염차'], fp: 's2b0a0y1g2o2' });
  G('kr-hyeonmicha', '현미차', '玄米茶', 'Hyeonmi-cha (Roasted Brown Rice Tea)', ['볶은 현미 (Oryza sativa)'], '현미를 볶아 우리거나 끓인 차로, 누룽지 같은 고소한 맛이 납니다. 찻잎이 섞인 일본의 겐마이차와 달리 곡물만 써서 카페인이 없습니다.', { al: ['Brown Rice Tea', '볶은 현미차'], fp: 's2b0a0y2n2o4', vs: '일본 겐마이차(현미녹차)는 녹차 잎이 섞여 카페인이 있습니다.' });
  G('kr-memilcha', '메밀차', '蕎麥茶', 'Buckwheat Tea', ['볶은 메밀 또는 쓴메밀 (Fagopyrum esculentum / F. tataricum)'], '볶은 메밀 알곡을 우린 차로, 고소한 향이 진합니다. 쓴메밀(타타리메밀)로 만든 노란 알갱이 제품도 많으며, 일본에서는 소바차라고 부릅니다.', { al: ['Buckwheat Tea', '소바차', 'そば茶', '타타리메밀차', '쓴메밀차'], country: '한국·일본·중국', fp: 's2b1a0y2n3o3', warn: '메밀 알레르기가 있으면 마시지 마십시오.', b: { w: { t: [100, 100], g: 5, ml: 250, s: [180, 180, 0], r: 2 }, k: { g: 10, ml: 1000, min: [3, 5] } } });
  G('kr-yulmucha', '율무차', '薏苡茶', 'Yulmu-cha (Job\'s Tears Tea)', ['율무 (Coix lacryma-jobi var. ma-yuen)', '분말 제품에는 견과·설탕 등이 섞이는 경우가 많음'], '율무를 볶아 끓이기도 하지만, 한국에서는 율무 가루에 견과와 설탕을 섞은 분말을 뜨거운 물에 타 마시는 형태가 가장 흔합니다.', { al: ['Job\'s Tears Tea', '율무 분말차'], bp: 'powder-mix', fp: 's4b0a0y4n4', tg: ['분말 형태'], warn: '임신 중에는 율무 섭취를 피하라는 전통적 권고가 있습니다. 상담 후 드십시오.' });
  G('kr-jakdukong', '작두콩차', '刀豆茶', 'Sword Bean Tea', ['볶은 작두콩 꼬투리·콩 (Canavalia gladiata)'], '작두콩의 꼬투리와 콩을 썰어 볶은 뒤 끓이거나 우린 차로, 구수한 맛이 납니다.', { al: ['Sword Bean Tea', '도두차'], fp: 's2b1a0y2n2o3', warn: '작두콩은 날로 먹으면 안 되며, 충분히 볶거나 가열 가공된 제품을 쓰십시오.' });
  G('kr-gyeolmyeongja', '결명자차', '決明子茶', 'Cassia Seed Tea', ['볶은 결명자 (Senna obtusifolia 또는 S. tora 씨앗)'], '볶은 결명자 씨앗을 끓인 차로, 커피를 떠올리게 하는 볶은 향과 진한 갈색이 납니다. 한국에서 보리차처럼 끓여 마시는 경우가 많습니다.', { al: ['Cassia Seed Tea', '초결명차'], fp: 's1b2a0y2o4', warn: '결명자에는 장을 자극하는 성분(안트라퀴논류)이 있어 많은 양을 계속 마시면 설사를 일으킬 수 있습니다.' });

  /* ── 전통 대용차 ── */
  const S = (id, ko, orig, en, bp, ing, d, o) => T(id, ko, orig, en, 'substitute', o.country || '한국', o.region || '', bp, Object.assign({ ing, d, cf: noCaf }, o));
  S('kr-dunggulle', '둥굴레차', '玉竹茶', 'Dunggulle-cha (Solomon\'s Seal Tea)', 'grain-roast', ['볶은 둥굴레 뿌리줄기 (Polygonatum odoratum)'], '둥굴레의 뿌리줄기를 쪄서 말리고 볶은 뒤 끓이거나 우린 차로, 구수하고 은은한 단맛이 있어 보리차처럼 일상적으로 마십니다.', { al: ['Solomon\'s Seal Tea', '옥죽차'], fp: 's3b0a0y2n2o3', tg: ['볶은 원료형'] });
  S('kr-ueongcha', '우엉차', '牛蒡茶', 'Burdock Root Tea', 'grain-roast', ['우엉 뿌리 (Arctium lappa)'], '우엉을 얇게 썰어 말리고 볶은 뒤 우리거나 끓인 차로, 구수하고 흙 같은 단맛이 납니다.', { al: ['Burdock Tea', '고보차', 'ごぼう茶'], fp: 's2b1a1y2e2o3', tg: ['볶은 원료형'] });
  S('kr-doraji', '도라지차', '桔梗茶', 'Bellflower Root Tea', 'simmer-herb', ['도라지 뿌리 (Platycodon grandiflorus)'], '도라지 뿌리를 말려 끓이거나, 도라지를 꿀·설탕에 재운 도라지청을 물에 타 마십니다. 쌉쌀한 맛이 특징입니다.', { al: ['Doraji Tea', '도라지청', '길경차'], fp: 's2b3a1y1e1', tg: ['끓이는 형', '청 형태'] });
  S('kr-daechu', '대추차', '大棗茶', 'Jujube Tea', 'simmer-herb', ['말린 대추 (Ziziphus jujuba)'], '말린 대추를 오래 끓여 걸쭉하게 만든 차로, 진한 단맛이 납니다. 생강을 함께 넣기도 하며, 대추를 곱게 갈아 꿀과 섞은 대추고를 물에 타기도 합니다.', { al: ['Jujube Tea', '대추고'], fp: 's5b0a0y4r3', b: { k: { g: 50, ml: 1000, min: [60, 120] } }, tip: '대추를 씨째 칼집 내어 약한 불에 1~2시간 끓이면 진하게 우러납니다.' });
  S('kr-gugija', '구기자차', '枸杞子茶', 'Goji Berry Tea', 'simmer-herb', ['구기자 열매 (Lycium chinense / Lycium barbarum)'], '말린 구기자 열매를 끓이거나 우려 마시는 차로, 은은한 단맛이 있습니다. 충남 청양 등이 산지로 알려져 있습니다.', { al: ['Goji Tea', '구기차', '枸杞茶'], fp: 's3b1a0y1r3', warn: '와파린 등 항응고제를 복용 중이면 상담 후 드십시오.' });
  S('kr-ssukcha', '쑥차', '艾茶', 'Mugwort Tea', 'herbal-leaf', ['쑥 잎 (Artemisia princeps 등 식용 쑥)'], '봄에 딴 어린 쑥을 덖거나 쪄서 말린 차로, 쌉쌀하고 향긋한 풀향이 있습니다.', { al: ['Mugwort Tea', '애엽차', '약쑥차'], fp: 's1b3a1y1g4w1', warn: '임신 중에는 피하는 것이 좋다는 전통적 권고가 있습니다.' });
  S('kr-gamnip', '감잎차', '柿葉茶', 'Persimmon Leaf Tea', 'herbal-leaf', ['감나무 잎 (Diospyros kaki)'], '초여름의 어린 감잎을 쪄서 말린 차로, 풋풋하고 순한 맛이 납니다.', { al: ['Persimmon Leaf Tea', '시엽차', '柿の葉茶'], country: '한국·일본', fp: 's1b1a2y1g3', b: { w: { t: [85, 95], g: 2, ml: 250, s: [180, 240, 0], r: 2 } } });
  S('kr-yeonip', '연잎차', '蓮葉茶', 'Lotus Leaf Tea', 'herbal-leaf', ['연잎 (Nelumbo nucifera)'], '연잎을 덖거나 쪄서 썰어 말린 차로, 구수하고 은은한 풀향이 납니다.', { al: ['Lotus Leaf Tea', '하엽차', '荷叶茶'], country: '한국·중국', fp: 's1b1a1y1g3w1' });
  S('kr-insam', '인삼차', '人蔘茶', 'Ginseng Tea', 'simmer-herb', ['인삼 또는 홍삼 (Panax ginseng)'], '인삼(또는 쪄서 말린 홍삼)을 썰어 끓이거나, 농축액·분말을 물에 타 마시는 차입니다. 쌉쌀하고 흙 같은 향이 납니다.', { al: ['Ginseng Tea', '홍삼차', '삼차'], fp: 's1b3a1y2e2w1', warn: '혈압약·혈당약·항응고제를 복용 중이면 상담 후 드십시오. 이 앱은 건강 효과를 보장하지 않습니다.' });
  S('kr-ssanghwa', '쌍화차', '雙和茶', 'Ssanghwa-cha', 'simmer-herb', ['숙지황·백작약·당귀·천궁·황기·계피·감초 등 약재(배합은 업소마다 다름)'], '여러 한약재를 달여 만든 진한 전통차로, 찻집에서는 대추·잣·밤·달걀노른자 등을 띄워 내기도 합니다. 배합은 정해져 있지 않습니다.', { al: ['쌍화탕차', 'Ssanghwa Tea'], fp: 's3b3a2y4w3', warn: '여러 약재가 들어 있으므로 복용 중인 약이 있으면 상담하십시오.' });
  S('kr-chik', '칡차', '葛根茶', 'Arrowroot (Kudzu) Tea', 'simmer-herb', ['칡뿌리 (Pueraria montana var. lobata)'], '칡뿌리를 썰어 말려 끓인 차로, 쌉쌀하면서 약간 단맛이 납니다.', { al: ['갈근차', 'Kudzu Tea'], fp: 's2b2a1y2e2' });
  S('kr-ppongnip', '뽕잎차', '桑葉茶', 'Mulberry Leaf Tea', 'herbal-leaf', ['뽕나무 잎 (Morus alba)'], '뽕잎을 덖거나 쪄서 말린 차로, 녹차와 비슷한 풀향이 있지만 카페인이 없습니다.', { al: ['상엽차', 'Mulberry Leaf Tea'], fp: 's1b1a1y1g4' });
  S('kr-dwaejigamja', '돼지감자차', '菊芋茶', 'Jerusalem Artichoke Tea', 'grain-roast', ['볶은 뚱딴지(돼지감자) 덩이줄기 (Helianthus tuberosus)'], '돼지감자(뚱딴지)를 얇게 썰어 말리고 볶은 뒤 끓인 차로, 구수하고 약간 단맛이 납니다.', { al: ['뚱딴지차', 'Jerusalem Artichoke Tea'], fp: 's2b1a0y2n2o3' });
  S('kr-heotgae', '헛개차', '枳椇茶', 'Oriental Raisin Tree Tea', 'simmer-herb', ['헛개나무 열매(열매자루)·가지 (Hovenia dulcis)'], '헛개나무의 열매자루와 가지를 달여 만든 차입니다. 은은한 단맛과 나무 향이 있습니다.', { al: ['Hovenia Tea', '지구자차'], fp: 's2b1a1y1w3', warn: '이 앱은 숙취 해소 등 건강 효과를 보장하지 않습니다.' });
})();
