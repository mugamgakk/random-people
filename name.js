
var 연예인 = ['강호동', '이수근', '설현', '이순재', '현아', '김민우','지민', '이동준', '이효리','손나은',
'전혜성', '최여진', '연우', '강민경','성시경','박효신','닐로','나윤권', '임창정', '장범준', '조정석',
'브레이브 걸스','윤종신', '류승범', '유재석', '지효', '윤아', '태연', '프리지아', '게리', '조이', '윈터', '카리나',
'아이유','RM', '타노스', '황철순', '철구' ,'하하','이유진', '정찬성', '짱구', '볼카노프스키', '김필', '정인', '나연',
'싸이','박재범', '송가인']


let a = ['Beenzino',
'B-Free' ,
'B.I(前 iKON)' ,
'BILL STAX' ,
'Big Marvel' ,
'Bizzy(MFBTY)' ,
'BLSSD(前 Rphabet)' ,
'BM(KARD)' ,
'BMK' ,
'BOBBY(iKON)' ,
'Bon(BZ-BOYS)' ,
'BOYHOOD' ,
'BX(CIX)' ,
'CL(2NE1)' ,
'Crom' ,
'Crown J' ,
'Crucial Star' ,
'CyA(원위)' ,
'DEAN' ,
'Deepflow' ,
'DEMIAN' ,
'DK(디셈버)' ,
'Dok2(78 Blocks)' ,
'Double.D(BZ-BOYS)' ,
'Double K' ,
'DPR LIVE' ,
'Dumbfoundead' ,
'EK(MBA)' ,
'Electronic Boutique(쏜애플)' ,
'E SENS(前 슈프림팀)' ,
'E-TRIBE' ,
'ESTi' ,
'G-DRAGON(BIGBANG)' ,
'G.NA' ,
'GRAY' ,
'G.고릴라(前 이브)' ,
'HAON' ,
'Hash Swan' ,
'HEYNE' ,
'HYNN' ,
'I.M(몬스타엑스)' ,
'IMLAY' ,
'J.ae' ,
'Jae' ,
'Ja Mezz' ,
'Jay(대국남아)' ,
'Jay Lee' ,
'JAY B(JJ Project, GOT7)' ,
'J.D(Apeace)' ,
'J.DON(엔플라잉)' ,
'JEROME(TO1)' ,
'JiMMie' ,
'JIN(러블리즈)' ,
'JJK' ,
'JK김동욱' ,
'Jolly V' ,
'JOO' ,
'JR(뉴이스트)' ,
'J.Seph(KARD)' ,
'Jun.K(2PM)' ,
'Junoflo' ,
'JUSTHIS' ,
'J.YOU(TO1)' ,
'K' ,
'K2' ,
'KCM' ,
'Kei(러블리즈)' ,
'Keith Ape' ,
'KENZIE' ,
'Kevin(제국의아이들)' ,
'Key(SHINee)' ,
'Kid Milli' ,
'KISUM' ,
'K.WILL' ,
'LE(EXID)' ,
'Leeds' ,
'LeeZu' ,
'LEW(TEMPEST)' ,
'Lola Fair(前 베이비복스, LFBJ)' ,
'M2U' ,
'Mad Clown' ,
'MC그리' ,
'MC몽(피플크루)' ,
'MC 성천' ,
'MC 스나이퍼' ,
'MC 한새' ,
'Misfit' ,
'Mithra 眞(에픽하이)' ,
'MJ' ,
'MJ(ASTRO)' ,
'MK(온앤오프)' ,
'Mokyo' ,
'Mowg' ,
'Nauts' ,
'NC.A' ,
'ND Lee(Sweetune)' ,
'Nine9(디어클라우드)' ,
'NO:EL' ,
'NS윤지' ,
'Ori' ,
'PD대정령' ,
'PEEJAY' ,
'pH-1' ,
'P-Type' ,
'Queen WA$ABII' ,
'Ra.D' ,
'RAVN(원어스)' ,
'Razer(前 Rphabet, Stardust)' ,
'RM(방탄소년단)' ,
'ROMEO(SS501)' ,
'Sandy' ,
'Sean2slow' ,
'SE7EN' ,
'SHORRY J(마이티 마우스)' ,
'sogumm' ,
'SOLE' ,
'SUGARBOWL' ,
'SURAN' ,
'TAG(골든차일드)' ,
'TAK' ,
'T.O.P(BIGBANG)' ,
'TRIPPY DOG' ,
'Tukutz(에픽하이)' ,
'UL' ,
'UMC/UW' ,
'V.One' ,
'wan9u(1Piece)' ,
'wigen' ,
'WOODZ(前 UNIQ)' ,
'XIA' ,
'Y(골든차일드)' ,
'Yawah' ,
'Young K(DAY6)' ,
'YUE(Sweetune)' ,
'YUNHWAY' ,
'Zion.T' ,
]

let 기억 = [
    '가람(대국남아) ',
'가린(엘리스) ',
'가영(스텔라) ',
'가은(前 달샤벳) ',
'가은(애프터스쿨) ',
'가을(IVE) ',
'가인(브라운 아이드 걸스) ',
'가현(드림캐쳐) ',
'가희(前 애프터스쿨) ',
'각별 ',
'감스트 ',
'강말금 ',
'강민(VERIVERY) ',
'강민정 ',
'강민주 ',
'강별 ',
'강산에 ',
'강석 ',
'강석우 ',
'강성 ',
'강소리 ',
'강예빈 ',
'강예솔 ',
'강예원 ',
'강우진 ',
'강은비 ',
'강인',
'강지섭 ',
'강지환 ',
'강진 ',
'강타(H.O.T.) ',
'강태강 ',
'강태오(서프라이즈) ',
'강하늘 ',
'강호이 ',
'강현(원위) ',
'개리(리쌍) ',
'개코(다이나믹 듀오) ',
'거룡 ',
'거미 ',
'건우(T1419) ',
'건일(슈퍼노바) ',
'건희(前 퍼펄즈, 써니힐) ',
'건희(원어스) ',
'경리(나인뮤지스) ',
'경원(HINAPIA) ',
'경호(TO1) ',
'계피(가을방학) ',
'계현(VERIVERY) ',
'고결(업텐션) ',
'고운(베리굿) ',
'고원(이달의 소녀) ',
'고원희 ',
'고윤 ',
'고은미 ',
'고은아 ',
'고은아 ',
'고준 ',
'고준희 ',
'공명(서프라이즈) ',
'공승연 ',
'공유 ',
'공찬(B1A4) ',
'곽도원 ',
'곽시양 ',
'곽지민 ',
'광민(보이프렌드) ',
'광수(슈퍼노바) ',
'구재이 ',
'권민정(前 오로라) ',
'권다현 ',
'권율 ',
'권해성 ',
'규진(업텐션) ',
'규진(NMIXX) ',
'규현(SUPER JUNIOR) ',
'그냥노창 ',
'그레이스 박 ',
'그믐달 ',
'금단비 ',
'금미(크레용팝) ',
'금보라 ',
'금비(거북이) ',
'금사향 ',
'금윤아 ',
'금잔디(前 막내자매) ',
'금조(나인뮤지스) ',
'기린(벅와일즈) ',
'기리보이 ',
'기미티 ',
'기범(前 SUPER JUNIOR) ',
'기섭(前 유키스) ',
'기은세 ',
'기태영 ',
'기현(몬스타엑스) ',
'기호(P1Harmony) ',
'길(리쌍) ',
'길미(클로버) ',
'길옥윤 ',
'김C(뜨거운 감자) ',
'김가연 ',
'김거지 ',
'김경민 ',
'김구(前 코요태, 現 베일) ',
'김구라 ',
'김규리 ',
'김규리 ',
'김기무 ',
'김기수 ',
'김기조 ',
'김나영 ',
'김동현 ',
'김다나 ',
'김다현 ',
'김단율 ',
'김디지 ',
'김뜻돌 ',
'김립(이달의 소녀) ',
'김민 ',
'김민우 ',
'김민정 ',
'김바다(前 시나위) ',
'김범 ',
'김보성 ',
'김보연 ',
'김부선 ',
'김부용 ',
'김비닐 ',
'김빈우 ',
'김서라 ',
'김설 ',
'김성민 ',
'김수로 ',
'김수미 ',
'김수희 ',
'김시후 ',
'김소유 ',
'김양 ',
'김연우 ',
'김영민(태사자) ',
'김예령 ',
'김예원 ',
'김완선 ',
'김우빈 ',
'김이안 ',
'김이지(베이비복스) ',
'김인문 ',
'김재이(FIESTAR) ',
'김정난 ',
'김정민 ',
'김정애 ',
'김정태 ',
'김정호 ',
'김종환 ',
'김준(티맥스) ',
'김지미 ',
'김지석 ',
'김지수 ',
'김지영 ',
'김지우 ',
'김진 ',
'김청 ',
'김태춘 ',
'김태희 ',
'김희원 ',
]

let 니은 = [
    '나광훈',
'나나(애프터스쿨)',
'나도야',
'나들(일기예보)',
'나라(헬로비너스)',
'나라',
'나르샤(브라운 아이드 걸스)',
'나무',
'나문희',
'나미',
'나미애',
'나비',
'나서라',
'나얼(브라운 아이즈)',
'나연(TWICE)',
'나연(파이브돌스)',
'나영(구구단)',
'나영(LIGHTSUM)',
'나영(前 아이오아이, PRISTIN)',
'나영희',
'나유(ILY:1)',
'나윤(모모랜드)',
'나윤권',
'나찰(가리온)',
'나플라',
'나훈아',
'나현(소나무)',
'남경',
'남궁원',
'남규리(씨야)',
'남보원',
'남성남',
'남성진',
'남인수',
'남일우',
'남진',
'남철',
'낸시(모모랜드)',
'넉살',
'넋업샨(소울 다이브)',
'노아(T1419)',
'노영국',
'노유민(NRG)',
'노주현',
'눈꽃',
'뉴썬(소나무)',
'뉴 (더보이즈)',
'늘해랑',
'니은',
'니엘(틴탑)',
'니콜(前 카라)',
]

let 디긋 = [
    '다나(천상지희 The Grace)',
'다미(드림캐쳐)',
'다빈크(1Piece)',
'다솜(씨스타)',
'다영(우주소녀)',
'다예(베리굿)',
'다원(우주소녀)',
'다원(ARIAZ)',
'다원(SF9)',
'다주',
'다현(TWICE)',
'다현(로켓펀치)',
'다혜(베스티)',
'달님',
'대도서관',
'대륙남',
'대성(BIGBANG)',
'대현(B.A.P)',
'더블디(BZ-BOYS)',
'더원',
'더 콰이엇',
'데니 안(god)',
'데드피',
'데이비드 오',
'데이지(前 모모랜드)',
'데프콘(형돈이와 대준이)',
'뎁',
'도겸(세븐틴)',
'도시(퍼플키스)',
'도영(NCT)',
'도영(TREASURE)',
'도운(DAY6)',
'도원경',
'도티',
'도하(BAE173)',
'도현(BAE173)',
'도현아',
'도환(싸이퍼)',
'도희(타이니지)',
'독고성',
'독고영재',
'독고진',
'돈 스파이크',
'동건(TO1)',
'동경소녀(동동주라떼)',
'동명(원위)',
'동해(SUPER JUNIOR)',
'동헌(VERIVERY)',
'동현(보이프렌드)',
'동후(前 피노키오)',
'두리',
'디노(세븐틴)',
'디애나(소나무)',
'디액션(언터쳐블)',
'디오(EXO-K, EXO)',
'딘딘',
'땡깡',
]

let 리을 = [
    '라도(블랙아이드필승)',
'라라(드림노트)',
'라마',
'라마(요술당나귀)',
'라비(VIXX)',
'라이머',
'라이언 전',
'라임(헬로비너스)',
'라임어택(노이즈 맙)',
'라키(ASTRO)',
'랄랄',
'랍티미스트',
'래원',
'런(OPPA)',
'런민기',
'레나(공원소녀)',
'레오(VIXX)',
'레이나',
'레이나(애프터스쿨)',
'레이디 제인(前 아키버드, 現 티라미스)',
'레이 양',
'레이첼(에이프릴)',
'렉시',
'렌(뉴이스트)',
'려욱(SUPER JUNIOR)',
'려운',
'려원(샤크라)',
'로꼬',
'로봉순',
'로운(SF9)',
'로이 킴',
'로제(BLACKPINK)',
'로티플스카이',
'로하(NATURE)',
'루(NATURE)',
'루나(f(x))',
'루다(우주소녀)',
'루시(위키미키)',
'루아(위키미키)',
'루민(前 포커즈, 現 M.pire)',
'루시드폴',
'루이스',
'루태',
'류계영',
'류수영',
'류진',
'류진(ITZY)',
'리나(위키미키)',
'리노(Stray Kids)',
'리사',
'리아',
'리아',
'리아(비바)',
'리아(ITZY)',
'리아킴',
'리즈(IVE)',
'리치(이글파이브)',
'리키(틴탑)',
'리키 김',
'린',
'린아(워너비)',
'린아(천상지희 The Grace)',
'린지(FIESTAR)',
'릴리(NMIXX)',
'릴보이(긱스)',
'릴샴',
]

let 미음 = [
    '마동석',
'마루에몽',
'마르코',
'마르코',
'마리오',
'마블제이',
'마스타 우(YMGA)',
'마야',
'마이노스',
'마이크로닷',
'마이키(터보)',
'마이킹',
'마크(NCT)',
'말로',
'매드클라운',
'맹승지',
'머독',
'머쉬베놈',
'먼데이(Weeekly)',
'메이다니',
'메이비',
'메이제이 리',
'면도',
'명지(타이니지)',
'무릎',
'무진(BAE173)',
'문문',
'문별(마마무)',
'문풍지',
'문지인',
'문지후',
'문채령',
'문희',
'뮤(EPEX)',
'뮤지(하이사이드, UV)',
'미나',
'미나(前 아이오아이, 구구단)',
'미료(브라운 아이드 걸스)',
'미르(엠블랙)',
'미미(구구단)',
'미미(오마이걸)',
'미성(前 써니힐)',
'미소(드림노트)',
'미소라',
'미스터붐박스(왈와리)',
'미쓰라 진(에픽하이)',
'미아(EVERGLOW)',
'미연((여자)아이들)',
'미카(대국남아)',
'민(miss A)',
'민경(HINAPIA)',
'민규(세븐틴)',
'민기(ATEEZ)',
'민성',
'민수(TO1)',
'민아(前 AOA)',
'민아(걸스데이)',
'민영(브레이브걸스)',
'민영원',
'민우(보이프렌드)',
'민우혁',
'민지',
'민재(소나무)',
'민주(공원소녀)',
'민지영',
'민찬(VERIVERY)',
'민티',
'민하(前 나인뮤지스)',
'민해경',
'민혁(몬스타엑스)',
'민현(前 Wanna One, 뉴이스트)',
'민호(SHINee)',
'민효린',
'민희(스텔라)',
'민희(CRAVITY)',
'밀라논나',
'밍선하',
]

let 비읍 = [
    '바다(S.E.S.)',
'바로(B1A4)',
'바비 리',
'바비문',
'바비 킴(부가킹즈)',
'박군',
'박길라',
'박동빈',
'박상민',
'박서준',
'박수아(前 애프터스쿨)',
'박승화(유리상자)',
'박시연',
'박시은',
'박시현(스피카)',
'박시후',
'박영록',
'박은영',
'박일준',
'박재란',
'박정철',
'박지원',
'박지원',
'박진도',
'박진선',
'박진성',
'박진우',
'박해준',
'박현빈',
'박희본(밀크)',
'반가희',
'반효정',
'방미',
'방실이',
'배말랭',
'배삼룡',
'배수빈',
'배연정',
'배이(NMIXX)',
'배일집',
'배일호',
'배칠수',
'배호',
'백난아',
'백남봉',
'백년설',
'백다은(前 A-force, 前 달샤벳)',
'백설희',
'백승(EPEX)',
'백현(EXO, EXO-K)',
'백호(뉴이스트)',
'버나드 박',
'버논(세븐틴)',
'버벌진트',
'범규(투모로우바이투게더)',
'범키(트로이)',
'베이비소울(러블리즈)',
'베이식',
'베카(前 애프터스쿨)',
'벤(BeBe Mignon)',
'벨라(엘리스)',
'변희봉',
'별',
'보겸',
'보나(우주소녀)',
'보니',
'보니(드림노트)',
'보다',
'보라(씨스타)',
'보라(체리블렛)',
'보라미유',
'보람(티아라)',
'보아',
'보이비(리듬파워)',
'본(BZ-BOYS)',
'붐',
'뷔(방탄소년단)',
'브라이언(플라이 투 더 스카이)',
'브로',
'브린',
'블랙넛',
'비',
'비범(블락비)',
'비비',
'비비',
'비와이',
'비토(업텐션)',
'빅죠(홀라당)',
'빈지노',
'빛(BAE173)',
'빛나(써니힐)',
'빽가(코요태)',
]

let 시옷 = [
    '사무엘',
'사이먼 도미닉(슈프림팀)',
'산(ATEEZ)',
'산들(B1A4)',
'산이',
'산체스(팬텀)',
'살찐 고양이',
'삼식',
'삽자루',
'상민(크로스진)',
'상아(LIGHTSUM)',
'상아리',
'상추(마이티 마우스)',
'상연(더보이즈)',
'새봄(NATURE)',
'샘 김',
'샤넌',
'샤오(업텐션)',
'서강준(서프라이즈)',
'서경(공원소녀)',
'서넹',
'서령(공원소녀)',
'서문탁',
'서새봄',
'서연',
'서영(헬로비너스)',
'서우',
'서원',
'서유리',
'서율(베리굿)',
'서은수',
'서인아',
'서정아',
'서준영',
'서주경',
'서지석',
'서지오',
'서지원',
'서출구',
'서태지(서태지와 아이들)',
'서하',
'서하준',
'서현(소녀시대)',
'서호(원어스)',
'서후',
'선덕',
'선데이(천상지희 The Grace)',
'선동혁',
'선미(원더걸스)',
'선샤인(NATURE)',
'선예(前 원더걸스)',
'선우(더보이즈)',
'선우(ENHYPEN)',
'선율(업텐션)',
'선우선',
'선우용여',
'설리(前 f(x))',
'설아(우주소녀)',
'설운도',
'설윤(NMIXX)',
'설인아',
'설하수',
'설현(AOA)',
'성대현(R.ef)',
'성민(SUPER JUNIOR)',
'성민(CRAVITY)',
'성민(前 SPEED)',
'성아(나인뮤지스)',
'성연(PRISTIN)',
'성유빈',
'성은',
'성제(슈퍼노바)',
'성준',
'성진(DAY6)',
'성진우',
'성찬(NCT)',
'성태(포스트맨)',
'성화(ATEEZ)',
'성혁',
'성훈',
'성훈(ENHYPEN)',
'세글자',
'세라(前 나인뮤지스)',
'세리(달샤벳)',
'세리',
'세림(CRAVITY)',
'세야',
'세영(크로스진)',
'세은(STAYC)',
'세이(위키미키)',
'세정(前 아이오아이, 구구단)',
'세형(베리굿)',
'세훈(EXO-K, EXO)',
'센티멘탈 시너리',
'셔누(몬스타엑스)',
'션(지누션)',
'션(Billlie)',
'소냐',
'소미(前 아이오아이)',
'소야',
'소연(라붐)',
'소연((여자)아이들)',
'소연(티아라)',
'소울맨',
'소원',
'소유(씨스타)',
'소율(크레용팝)',
'소은(트라이비)',
'소이(前 티티마, 라즈베리필드)',
'소이(구구단)',
'소이현',
'소정(레이디스 코드)',
'소진(걸스데이)',
'소진(나인뮤지스)',
'소진(카라 프로젝트)',
'소찬휘',
'소향',
'소희(前 I.B.I, NATURE)',
'소희(엘리스)',
'소희(로켓펀치)',
'소희(前 원더걸스)',
'손스타(체리필터)',
'손여은',
'손예진',
'손우현',
'손은서',
'손지현(포미닛)',
'솔라(마마무)',
'솔비(타이푼)',
'솔빈(라붐)',
'솔지(EXID, 다소니)',
'솜이(DIA)',
'송가인',
'송선(트라이비)',
'송승헌',
'송영길',
'송재호',
'송지효',
'송채환',
'송하윤',
'송해',
'송희(BVNDIT)',
'수미(前 파이브돌스)',
'수민(드림노트)',
'수민(소나무)',
'수민(STAYC)',
'수빈(달샤벳)',
'수빈(우주소녀)',
'수빈(투모로우바이투게더)',
'수아(드림캐쳐)',
'수안(퍼플키스)',
'수애',
'수영(소녀시대)',
'수윤(로켓펀치)',
'수지(miss A)',
'수진((여자)아이들)',
'수현',
'수현(유키스)',
'수현(Billlie)',
'수호(EXO-K, EXO)',
'수퍼비',
'숙행',
'술제이',
'슈(S.E.S.)',
'슈가(방탄소년단)',
'슈카',
'스무살',
'스윙스',
'스컬(스토니 스컹크)',
'스테파니(천상지희 The Grace)',
'스테파니 리',
'스텔라장',
'스페이스 카우보이(1Piece)',
'슬기(Red Velvet)',
'슬리피(언터쳐블)',
'슬릭',
'슬지(라니아)',
'승관(세븐틴)',
'승리(前 BIGBANG)',
'승민(Stray Kids)',
'승은(BVNDIT)',
'승재',
'승호(엠블랙)',
'승훈(CIX)',
'승희(오마이걸)',
'시명(BVNDIT)',
'시안(bugAboo)',
'시안(T1419)',
'시연(드림캐쳐)',
'시연(PRISTIN)',
'시온(원어스)',
'시와',
'시우민(EXO-M, EXO)',
'시원(SUPER JUNIOR)',
'시윤(Billlie)',
'시은(STAYC)',
'시현(ARIAZ)',
'시현(EVERGLOW)',
'식케이',
'신(크로스진)',
'신구',
'신나린',
'신동(SUPER JUNIOR)',
'신동욱',
'신미래',
'신민아',
'신비',
'신사동 호랭이',
'신사임당',
'신성',
'신성우',
'신성일',
'신세영',
'신소율',
'신우(B1A4)',
'신원(펜타곤)',
'신유',
'신은성',
'신이',
'신지(코요태)',
'신카나리아',
'신태일',
'신해조',
'신현빈',
'신혜성(신화)',
'심수봉',
'심이영',
'심혜진',
'싸이',
'써니(소녀시대)',
'씨 없는 수박 김대중',
'씨잼',
]

let 이응 = [
    '아라(ILY:1)',
'아론(뉴이스트)',
'아름(前 티아라)',
'아린(오마이걸)',
'아멍이',
'아민(EPEX)',
'아샤(EVERGLOW)',
'아영(달샤벳)',
'아웃사이더',
'아이',
'아이린(Red Velvet)',
'아이린 킴',
'아이비',
'아이사(STAYC)',
'아이언',
'아이엔(Stray Kids)',
'아이유',
'아이키',
'아인(모모랜드)',
'악어',
'안녕하신가영',
'안다미',
'안석환',
'안재환',
'안정애',
'알고보니 혼수상태',
'알렉산더(前 유키스)',
'알렉스(DRIPPIN)',
'알렉스(클래지콰이)',
'알렌기범(前 씽, 유키스)',
'알로직',
'알리',
'앙드레 김',
'앤(공원소녀)',
'앤덥',
'앤디(신화)',
'앨리스(헬로비너스)',
'앵지',
'야광토끼',
'야미',
'얀',
'양갱',
'양띵',
'양양',
'양파',
'양팡',
'엄앵란',
'엄영수',
'엄지',
'에디린',
'에디 킴',
'에릭(신화)',
'에릭(더보이즈)',
'에릭남',
'에반(前 클릭비)',
'에스쿱스(세븐틴)',
'에이든(EPEX)',
'에이미',
'에이제이(유키스)',
'에일리',
'엑시(우주소녀)',
'엔(VIXX)',
'엘(인피니트)',
'엘리(위키미키)',
'엘린(크레용팝)',
'엘바(ILY:1)',
'여름(우주소녀)',
'여름(헬로비너스)',
'여리(ARIAZ)',
'여민주',
'여상(ATEEZ)',
'여원(펜타곤)',
'여진(이달의 소녀)',
'연오(前 LPG)',
'연우(前 모모랜드)',
'연우진',
'연정(前 아이오아이, 우주소녀)',
'연준(투모로우바이투게더)',
'연진',
'연호(VERIVERY)',
'연희(로켓펀치)',
'영건',
'영기',
'영민(보이프렌드)',
'영빈(SF9)',
'영서(BAE173)',
'영재(前 포맨)',
'영재(B.A.P)',
'영재(GOT7)',
'영준(브라운 아이드 소울)',
'영탁',
'영훈(더보이즈)',
'예리(Red Velvet)',
'예린',
'예빈(DIA)',
'예성(SUPER JUNIOR)',
'예왕(EPEX)',
'예은(원더걸스) , 핫펠트(HA:TFELT',
'예지(FIESTAR)',
'예지(ITZY)',
'예지원',
'예하나(PRISTIN)',
'옌',
'오세정',
'오승아(레인보우)',
'오승은',
'오연서',
'오왠',
'오은주',
'오재미',
'오지명',
'오채이',
'옥소리',
'온(T1419)',
'온다(EVERGLOW)',
'온주완',
'올라이즈 밴드',
'올리비아 혜(이달의 소녀)',
'온유(SHINee)',
'올티',
'와이엇(온앤오프)',
'왕소연',
'왁스',
'왕희지',
'요시(TREASURE)',
'요아리',
'요요미',
'요조',
'용감한 형제',
'용석(크로스진)',
'용승(VERIVERY)',
'용준형(비스트)',
'용훈(원위)',
'용희(CIX)',
'우빈(CRAVITY)',
'우석(펜타곤)',
'우연이',
'우영(2PM)',
'우영(ATEEZ)',
'우지(세븐틴)',
'우태운(前 SPEED)',
'우효',
'우희(달샤벳, UNI.T)',
'웅기(TO1)',
'웅산(웅산밴드)',
'원(싸이퍼)',
'원빈',
'원슈타인',
'원영(前 IZ*ONE, IVE)',
'원우(세븐틴)',
'원진(CRAVITY)',
'원필(DAY6)',
'원흠(노라조)',
'웨이(크레용팝)',
'웬디(Red Velvet)',
'위시(EPEX)',
'윈터(aespa)',
'유건(OPPA)',
'유경(前 AOA)',
'유경(엘리스)',
'유권(블락비)',
'유나(브레이브걸스)',
'유나(AOA)',
'유나(ITZY)',
'유노윤호(동방신기)',
'유니',
'유니스(DIA)',
'유라(걸스데이)',
'유리',
'유리(소녀시대)',
'유리(쿨, 걸프렌즈)',
'유미',
'유미리',
'유빈(오마이걸)',
'유빈(원더걸스)',
'유선',
'유소영(前 애프터스쿨)',
'유아(오마이걸)',
'유아이(드림노트)',
'유아인',
'유연석',
'유열',
'유영(헬로비너스)',
'유영진',
'유이(前 애프터스쿨)',
'유인영',
'유일(서프라이즈)',
'유정(라붐)',
'유정(브레이브걸스)',
'유정(LIGHTSUM)',
'유주',
'유주(체리블렛)',
'유준(BAE173)',
'유지(베스티)',
'유지나',
'유지인',
'유진(前 IZ*ONE, IVE)',
'유진(S.E.S.)',
'유진(前 브레이브걸스)',
'유채(NATURE)',
'유채영(前 쿨)',
'유퉁',
'유현(드림캐쳐)',
'유혜디',
'유혜리',
'유호린',
'윤(STAYC)',
'윤건(브라운 아이즈)',
'윤경(로켓펀치)',
'윤다훈',
'윤상(1Piece)',
'윤수현',
'윤선우',
'윤세아',
'윤소이',
'윤승아',
'윤시윤',
'윤아(소녀시대)',
'윤정희',
'윤조(前 헬로비너스)',
'윤지(ARIAZ)',
'윤진서',
'윤진이',
'윤택',
'윤태윤',
'윤하',
'윤학(슈퍼노바)',
'윤혁(디셈버)',
'윤형빈',
'윤호(ATEEZ)',
'율희(前 라붐)',
'윰댕',
'은가은',
'은교(파이브돌스)',
'은서(우주소녀)',
'은우(HINAPIA)',
'은정(티아라)',
'은조(드림노트)',
'은주(써니힐)',
'은지(前 나인뮤지스)',
'은지(브레이브걸스)',
'은진(前 DIA)',
'은찬(TEMPEST)',
'은채(bugAboo)',
'은채(DIA)',
'은하',
'은혁(SUPER JUNIOR)',
'의진(소나무)',
'이가이(前 베이비복스, 세또래)',
'이걸',
'이경규',
'이금희',
'이난영',
'이남이(前 신중현과 엽전들, 前 사랑과 평화)',
'이니(前 샤크라)',
'이다해',
'이대로',
'이도(원어스)',
'이도현',
'이동건',
'이동우(틴틴파이브)',
'이레(퍼플키스)',
'이로',
'이루',
'이미도',
'이민(가수)(애즈원)',
'이민우',
'이박사',
'이병욱',
'이보희',
'이본',
'이브(이달의 소녀)',
'이빈',
'이상준',
'이상해',
'이샘(前 나인뮤지스)',
'이세미(前 LPG)',
'이서(루나솔라)',
'이서(IVE)',
'이션(온앤오프)',
'이솜',
'이수(M.C The Max)',
'이수진',
'이수영',
'이수혁',
'이숙',
'이시강',
'이시언',
'이시영',
'이신(GHOST9)',
'이애리수',
'이언',
'이엘',
'이연(BVNDIT)',
'이연두',
'이열음',
'이영(애프터스쿨)',
'이영자',
'이영유',
'이예린',
'이완',
'이오타(前 LPG)',
'이원승',
'이유(EVERGLOW)',
'이유비',
'이유애린(나인뮤지스)',
'이은하',
'이적',
'이정',
'이정현',
'이제나',
'이제이(엘리스)',
'이주노(서태지와 아이들)',
'이주일',
'이준(前 엠블랙)',
'이지',
'이지아',
'이지연',
'이진주',
'이찬',
'이창훈',
'이채영',
'이치현',
'이태성',
'이태임',
'이특(SUPER JUNIOR)',
'이하늘(DJ DOC)',
'이혁(노라조)',
'이현우',
'이휘재',
'인성(SF9)',
'인순이',
'인탁(P1Harmony)',
'일라이(前 유키스)',
'일락',
'일리닛',
'임동진',
'임라라',
'임성민',
'임성한',
'임아니',
'임예진',
'임요미',
'임하룡',
'임혁',
'입짧은햇님',
'의주 (&TEAM',
]

let 지읏 = [
    '자니 윤',
'자두(The Jadu)',
'자이로',
'자이언트 핑크',
'잠뜰',
'장동휘',
'장민호(유비스)',
'장미화(前 에드 포)',
'장서영',
'장신영',
'장승조',
'장용',
'장욱제',
'장웅',
'장항선',
'장혁',
'장현(더 맨)',
'장현(前 써니힐)',
'장혜리(前 걸스데이, 비밥)',
'장혜진',
'장호일(015B)',
'재민(NCT)',
'재윤(SF9)',
'재윤(TO1)',
'재이(STAYC)',
'재재',
'재현(NCT)',
'재효(블락비)',
'재희',
'쟈니(NCT)',
'적우',
'적재',
'전노민',
'전승희',
'전민혁(M.C The Max)',
'전양자',
'전율(스텔라)',
'전지현',
'전진(신화)',
'정가은',
'정국(방탄소년단)',
'정기고',
'정다경',
'정다빈',
'정동하(前 부활)',
'정모(CRAVITY)',
'정민(보이프렌드)',
'정배우',
'정부미',
'정선경',
'정소민',
'정수라',
'정시아',
'정아(前 애프터스쿨)',
'정애란',
'정애리',
'정연(TWICE)',
'정엽(브라운 아이드 소울)',
'정우',
'정우(BVNDIT)',
'정우(NCT)',
'정우연(前 파이브돌스)',
'정욱',
'정원(ENHYPEN)',
'정은우',
'정은채',
'정이랑',
'정인',
'정정아',
'정재영',
'정재환',
'정지소',
'정하나',
'정한(세븐틴)',
'정해진',
'정혜선',
'정혜성',
'정화(EXID)',
'제노(NCT)',
'제니(BLACKPINK)',
'제니(前 DIA)',
'제리케이',
'제시(럭키제이)',
'제시카(前 소녀시대)',
'제아(브라운 아이드 걸스)',
'제이(ENHYPEN)',
'제이(TraxX)',
'제이니(GP Basic)',
'제이미',
'제이민',
'제이민(타이니지)',
'제이민(BAE173)',
'제이스',
'제이쓴',
'제이어스(온앤오프)',
'제이윤(M.C The Max)',
'제이콥(더보이즈)',
'제이크(ENHYPEN)',
'제이크 케이',
'제이통',
'제이홉(방탄소년단)',
'제인(모모랜드)',
'제프(EPEX)',
'젤로(B.A.P)',
'조PD',
'조관우',
'조민기',
'조보아',
'조빈(노라조)',
'조상구',
'조수미',
'조슈아(세븐틴)',
'조승구',
'조아(Weeekly)',
'조연우',
'죠앤',
'조은새(파파야)',
'조이(Red Velvet)',
'조이현(前 파이브돌스, 前 DIA)',
'조진웅',
'조춘',
'조항조',
'조현(베리굿)',
'존박',
'종섭(P1Harmony)',
'종업(B.A.P)',
'종현(SHINee)',
'종호(ATEEZ)',
'주니엘',
'주다영',
'주미',
'주민준',
'주비(前 써니힐)',
'주석',
'주연(前 애프터스쿨)',
'주연(더보이즈)',
'주원(프리즈)',
'주은(DIA)',
'주이(모모랜드)',
'주지훈',
'주진모',
'주헌(몬스타엑스)',
'주현',
'주현(LIGHTSUM)',
'주호(SF9)',
'주호성',
'주희(8eight)',
'준(유키스)',
'준규(TREASURE)',
'준다이(레이지본)',
'준서(BAE173)',
'준혁(前 DAY6)',
'준호(2PM)',
'줄라이',
'중대장',
'쥬시(이블)',
'쥬짱',
'지구인(리듬파워)',
'지나유(前 배드키즈)',
'지누(前 롤러코스터)',
'지누(지누션)',
'지니',
'지니(NMIXX)',
'지민(AOA)',
'지민(방탄소년단)',
'지박',
'지삐',
'지선(前 걸스데이, 샤플라)',
'지선(前 러브홀릭)',
'지성',
'지성(NCT)',
'지소울',
'지수(BLACKPINK)',
'지수(TO1)',
'지아',
'지안(루나솔라)',
'지안(LIGHTSUM)',
'지연(티아라)',
'지오(엠블랙)',
'지우',
'지우(NMIXX)',
'지웅(P1Harmony)',
'지원(체리블렛)',
'지유(드림캐쳐)',
'지율(前 달샤벳)',
'지이(거북이)',
'지인(bugAboo)',
'지코(블락비)',
'지한(Weeekly)',
'지해(前 걸스데이)',
'지혁(슈퍼노바)',
'지현성(Apeace)',
'지현우(더 넛츠)',
'지호(오마이걸)',
'지효(TWICE)',
'지훈(TREASURE)',
'진(방탄소년단)',
'진미령',
'진서연',
'진성',
'진세연',
'진솔(이달의 소녀)',
'진영',
'진영(B1A4)',
'진영(JJ Project, GOT7)',
'진예(라붐)',
'진이(前 오마이걸)',
'진이한',
'진절미',
'진주',
'진진(ASTRO)',
'진태현',
'진하(트라이비)',
'진호(펜타곤)',
'진후(업텐션)',
'쯔양',
]

let 치읏 = [
    '차예련',
'차은우(ASTRO)',
'차인하',
'차현우',
'차화연',
'찬(TO1)',
'찬미(AOA)',
'찬미(前 파이브돌스)',
'찬성(2PM)',
'찬열(EXO-K, EXO)',
'찬희(SF9)',
'찰스',
'창빈(Stray Kids)',
'창조(틴탑)',
'채동하(SG워너비)',
'채령(ITZY)',
'채리나(룰라, 걸프렌즈)',
'채린(체리블렛)',
'채림',
'채빈(NATURE)',
'채서진',
'채소연(비비)',
'채수빈',
'채연',
'채영(TWICE)',
'채영인',
'채윤',
'채은정(클레오)',
'채인(퍼플키스)',
'채정(엘리스)',
'채정안',
'천둥(前 엠블랙)',
'천지(틴탑)',
'청하(前 아이오아이)',
'체스카(前 FIESTAR)',
'첸(EXO-M, EXO)',
'초아(前 AOA)',
'초아(크레용팝)',
'초연(bugAboo)',
'초원(LIGHTSUM)',
'최강창민(동방신기)',
'철구',
'최군',
'최대철',
'최리(이달의 소녀)',
'최무룡',
'최불암',
'최수린',
'최성원',
'최연제',
'최영원(Apeace)',
'최원영',
'최유나',
'최은희',
'최자(다이나믹 듀오)',
'최제우',
'최준영(前 쿨)',
'최지우',
'최진혁',
'최진희',
'최필립',
'추가열',
'추자현',
'츄(이달의 소녀)',
'춘자',
'치타',
'치훈(TO1)',
]

let 키윽 = [
    '카더가든',
'카리나(aespa)',
'카이',
'카이(EXO-K, EXO)',
'카엘(미래소년)',
'카일라(PRISTIN)',
'칸토(트로이)',
'캐스퍼',
'캡(틴탑)',
'커피소년',
'케빈(더보이즈)',
'케빈(유키스)',
'케빈(T1419)',
'케이',
'케이시',
'켄(VIXX)',
'코드 쿤스트',
'코스믹 걸(前 라니아)',
'코타(써니힐)',
'콩콩',
'큐리(티아라)',
'쿤(업텐션)',
'큐(더보이즈)',
'크러쉬',
'크리스탈(f(x))',
'크리스탈(애즈원)',
'클라라',
'키노(펜타곤)',
'키비',
'킥킥이',
'킬라그램',
'키진',
]

let 티긋 = [
    '타루',
'타블로(에픽하이)',
'타이거 JK',
'타이미',
'탁(배치기)',
'탁재훈(컨츄리꼬꼬)',
'탄(싸이퍼)',
'탑',
'태군',
'태그(싸이퍼)',
'태래(TEMPEST)',
'태령(루나솔라)',
'태민(SHINee)',
'태양(BIGBANG)',
'태연(소녀시대)',
'태영(CRAVITY)',
'태용(NCT)',
'태일(블락비)',
'태일(NCT)',
'태진아',
'태하(前 모모랜드)',
'태현(투모로우바이투게더)',
'택연(2PM)',
'터틀맨(거북이)',
'테이크원',
'테디(원타임)',
'테오(P1Harmony)',
'테이(핸섬피플)',
'토니 안(H.O.T.)',
'토리',
'투컷(에픽하이)',
'트루디',
'티파니(소녀시대)',
]

let 피읍 = [
    '팔로알토',
'팝핀현준(A-force)',
'팡이요',
'패티김',
'팻두(DS Connexion)',
'펀치',
'펀치넬로',
'페노메코',
'페리',
'페이커',
'편승엽',
'폴킴',
'푸르',
'푸워',
'퓨어킴',
'프니엘(BTOB)',
'프라이머리',
'프롬',
'프리마비스타',
'플로우식(AZIATIX)',
'피오(블락비)',
'필릭스(Stray Kids)',
]

let 히읏 = [
    '하나(구구단)',
'하니(EXID, 다소니)',
'하도권',
'하람(Billlie)',
'하리수',
'하린(원위)',
'하림(신치림)',
'하명중',
'하슬(이달의 소녀)',
'하연',
'하연수',
'하유미',
'하윤(前 브레이브걸스)',
'하이디(소나무)',
'하일',
'하정우',
'하지원',
'하진',
'하하(지키리)',
'한(Stray Kids)',
'한가림',
'한가인',
'한결(BAE173)',
'한경일',
'한그루',
'한다감',
'한돌',
'한복남',
'한서경',
'한서진',
'한소희',
'한영(前 LPG)',
'한예리',
'한예슬',
'한윤서',
'한재석',
'한주현',
'한지나',
'한지우',
'한지혜',
'한채아',
'한채영',
'한해',
'한혜진',
'한효주',
'해령(베스티)',
'해빈(구구단)',
'해원(NMIXX)',
'해윤(체리블렛)',
'해인(라붐)',
'행주(리듬파워)',
'해찬(NCT)',
'허경환',
'허니제이',
'허윤아(前 LPG)',
'허정민',
'허클베리피',
'허팝',
'헤이즈',
'혁(TEMPEST)',
'혁(VIXX)',
'현경',
'현무',
'현미',
'현빈',
'현빈(싸이퍼)',
'현빈(트라이비)',
'현석',
'현석(CIX)',
'현성(보이프렌드)',
'현숙',
'현아(前 나인뮤지스)',
'현영',
'현우',
'현인',
'현주',
'현재(더보이즈)',
'현준(前 더보이즈)',
'현진(이달의 소녀)',
'현진(Stray Kids)',
'현진영',
'현진우',
'현철',
'형독',
'형섭(TEMPEST)',
'형원(몬스타엑스)',
'형준(CRAVITY)',
'혜란(前 브레이브걸스)',
'혜리(걸스데이)',
'혜린(EXID)',
'혜림(원더걸스)',
'혜미(나인뮤지스)',
'혜미(FIESTAR)',
'혜빈(모모랜드)',
'혜성(엘리스)',
'혜연(前 구구단)',
'혜연(베스티)',
'혜원(파이브돌스)',
'혜은이',
'혜정(AOA)',
'혜정이1',
'호구형',
'호란(클래지콰이)',
'호시(세븐틴)',
'호야(前 인피니트)',
'호영(VERIVERY)',
'홍경민',
'홍기훈',
'홍빈(前 VIXX)',
'홍석(펜타곤)',
'홍수아',
'홍자',
'홍주',
'홍중(ATEEZ)',
'화나',
'화랑(TEMPEST)',
'화사(마마무)',
'화영(前 티아라)',
'화요비',
'환웅(원어스)',
'환희(업텐션)',
'환희(플라이 투 더 스카이)',
'황금심',
'황동주',
'황룡갑',
'황보(샤크라)',
'황봉알',
'황신혜',
'황우슬혜',
'황정리',
'황정자',
'황해',
'효경(ARIAZ)',
'효린(씨스타)',
'효민(티아라)',
'효연(소녀시대)',
'효은(스텔라)',
'효정(오마이걸)',
'효진(온앤오프)',
'후니훈',
'후이(펜타곤)',
'후추',
'훈(유키스)',
'휴닝바히에(Kep1er)',
'휴닝카이(투모로우바이투게더)',
'휘(싸이퍼)',
'휘성',
'휘연(LIGHTSUM)',
'휘영(SF9)',
'휘인(마마무)',
'희승(ENHYPEN)',
'희진(이달의 소녀)',
'희철(SUPER JUNIOR)',
'힘찬(B.A.P)',
]

var 연예인이름 = [...연예인,...a,...기억,...니은,...디긋,...리을,...미음,...비읍,...시옷,...이응,...지읏,...치읏,...키윽,...티긋,...피읍,...히읏];