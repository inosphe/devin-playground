const DATA={
 "DAYS": [
  {
   "date": "2026-10-01",
   "label": "10/1 (목) 하카타"
  },
  {
   "date": "2026-10-02",
   "label": "10/2 (금) 유후인"
  },
  {
   "date": "2026-10-03",
   "label": "10/3 (토) 유후인→하카타"
  },
  {
   "date": "2026-10-04",
   "label": "10/4 (일) 하카타·귀국"
  }
 ],
 "FIXED": [
  {
   "id": "f1",
   "date": "2026-10-01",
   "start": "07:15",
   "end": "08:45",
   "title": "진에어 LJ261 인천 → 후쿠오카",
   "kind": "flight",
   "mandatory": true,
   "note": "ICN T2 → FUK 국제선. 예약번호 S26SRY (2명)",
   "platform": "인천공항 T2 체크인 05:15까지(국제선 2시간 전 권장)",
   "transit": "FUK 국제선→무료연락버스→국내선→지하철 공항선 하카타역 5분 (도합 약 40분)",
   "links": [
    {
     "label": "후쿠오카공항 접근 안내",
     "url": "https://www.fukuoka-airport.jp/korea/access/"
    }
   ]
  },
  {
   "id": "f2",
   "date": "2026-10-01",
   "start": "15:00",
   "end": "24:00",
   "title": "도미 인 하카타 기온 체크인",
   "kind": "hotel",
   "note": "1박 2인. 체크인 15:00 / 아웃 11:00. 일정번호 73544443860002. 무료취소 ~9/30",
   "transit": "구시다 신사 바로 옆. 하카타역 도보 8~10분"
  },
  {
   "id": "f3",
   "date": "2026-10-01",
   "start": "18:00",
   "end": "20:00",
   "title": "하카타 스시 마츠모토 (오마카세)",
   "kind": "dinner",
   "mandatory": true,
   "note": "예약번호 RPZKER7YH3 · 2명 · 특상 오마카세 ¥17,800/인 당일결제 · Spazio 2F",
   "platform": "18:00 정시 예약 — 10분 전 도착 권장",
   "transit": "기온→니시나카스 도보 약 15~20분 또는 지하철 나카스카와바타역",
   "links": [
    {
     "label": "Tabelog 매장 페이지",
     "url": "https://tabelog.com/fukuoka/A4001/A400104/40043925/"
    }
   ],
   "phone": "092-401-1518"
  },
  {
   "id": "f4",
   "date": "2026-10-02",
   "start": "12:14",
   "end": "14:39",
   "title": "특급 유후 3호 하카타 → 유후인",
   "kind": "train",
   "mandatory": true,
   "note": "지정석 1호차 9AB · 예약 62842 / 인증 1531 · 발권 필수(실물 카드 지참). 차내판매 없음 — 에키벤은 역에서 미리",
   "platform": "하카타역 특급 홈 — 당일 안내판 확인(보통 3~8번선). 발권+승차 15분 전 도착 권장",
   "transit": "도미 인→하카타역 도보 8~10분. 유후인역→숙소 택시 약 5~10분 또는 도보 20~25분",
   "links": [
    {
     "label": "JR큐슈 티켓 수령 방법",
     "url": "https://www.jrkyushu.co.jp/korean/train_reservation/receive/"
    },
    {
     "label": "예약 내역 확인",
     "url": "https://www.jrkyushu.co.jp/korean/train_reservation/"
    }
   ]
  },
  {
   "id": "f5",
   "date": "2026-10-02",
   "start": "15:00",
   "end": "24:00",
   "title": "나나카와 료칸 체크인",
   "kind": "hotel",
   "mandatory": true,
   "note": "전용 노천탕. 체크인 15:00–18:00 / 아웃 11:00. 석식(가이세키)·조식 포함. 예약 1400828760413992",
   "platform": "체크인 마감 18:00 — 늦으면 사전 연락 필수",
   "transit": "유후인역→숙소 택시 5~10분 (역 앞 택시 승강장, 없으면 역 안내소에서 호출)",
   "phone": "+81-977-853508"
  },
  {
   "id": "f6",
   "date": "2026-10-02",
   "start": "18:00",
   "end": "19:30",
   "title": "료칸 석식 — 오이타 와규 가이세키",
   "kind": "dinner",
   "mandatory": true,
   "note": "포함 식사. 18:00/18:30 중 사전 선택 필요(미정)"
  },
  {
   "id": "f7",
   "date": "2026-10-03",
   "start": "08:00",
   "end": "09:00",
   "title": "료칸 조식",
   "kind": "meal",
   "note": "포함 식사. 08:00/08:30 중 선택(미정)"
  },
  {
   "id": "f8",
   "date": "2026-10-03",
   "start": "13:00",
   "end": "14:55",
   "title": "유후인호 버스 유후인 → 하카타",
   "kind": "train",
   "mandatory": true,
   "note": "니시테츠 48213 · 1호차 08AB · 예약 186728358 · 모바일 승차권(스크린샷 불가 — 결제 완료 메일에서 열기)",
   "platform": "유후인역앞 버스센터 10분 전 도착",
   "transit": "숙소→유후인역 택시 5~10분. 도착: 하카타 버스터미널 3층→미쓰이 가든 나카스 도보 10분",
   "links": [
    {
     "label": "예약 내역/모바일 승차권",
     "url": "https://www.highwaybus.com/gp/reference/refDetail?reserveNo=186728358"
    }
   ]
  },
  {
   "id": "f9",
   "date": "2026-10-03",
   "start": "15:00",
   "end": "24:00",
   "title": "미쓰이 가든 후쿠오카 나카스 체크인",
   "kind": "hotel",
   "note": "체크인 15:00 / 아웃 11:00. 일정번호 7354443639258. 숙박세 별도(인당 ¥200~500/박)",
   "transit": "하카타 버스터미널 도보 약 10분 · 지하철 나카스카와바타역 인근"
  },
  {
   "id": "f10",
   "date": "2026-10-04",
   "start": "19:40",
   "end": "21:00",
   "title": "진에어 LJ272 후쿠오카 → 인천",
   "kind": "flight",
   "mandatory": true,
   "note": "FUK 국제선 → ICN T2. 공항 17:30~18:00 도착 권장",
   "platform": "국제선 체크인은 19:40의 2시간 전인 17:40 마감 권장",
   "transit": "나카스→지하철 공항선 공항역 10분→국내선 셔틀버스 국제선 15분 (총 30~40분)",
   "links": [
    {
     "label": "후쿠오카공항 국제선 안내",
     "url": "https://www.fukuoka-airport.jp/korea/"
    }
   ]
  }
 ],
 "SLOTS": [
  {
   "id": "s1",
   "date": "2026-10-01",
   "start": "09:30",
   "end": "15:00",
   "label": "도착 후 ~ 체크인",
   "anchor": "hakata",
   "meal_hint": "lunch"
  },
  {
   "id": "s2",
   "date": "2026-10-01",
   "start": "20:00",
   "end": "23:00",
   "label": "저녁 식사 후",
   "anchor": "nakasu"
  },
  {
   "id": "s3",
   "date": "2026-10-02",
   "start": "09:30",
   "end": "12:14",
   "label": "아점 + 발권",
   "anchor": "hakata",
   "meal_hint": "brunch",
   "constraints": "Crosta 짐보관 + JR 발권 필요. 11:50까지 역 복귀"
  },
  {
   "id": "s4",
   "date": "2026-10-02",
   "start": "15:30",
   "end": "18:00",
   "label": "체크인 후 ~ 석식",
   "anchor": "yufuin"
  },
  {
   "id": "s5",
   "date": "2026-10-03",
   "start": "11:00",
   "end": "13:00",
   "label": "체크아웃 후 ~ 버스",
   "anchor": "yufuin",
   "meal_hint": "lunch"
  },
  {
   "id": "s6",
   "date": "2026-10-03",
   "start": "16:00",
   "end": "23:00",
   "label": "체크인 후 저녁",
   "anchor": "nakasu",
   "meal_hint": "dinner"
  },
  {
   "id": "s7",
   "date": "2026-10-04",
   "start": "09:00",
   "end": "17:30",
   "label": "체크아웃 후 ~ 공항",
   "anchor": "hakata",
   "meal_hint": "lunch"
  }
 ],
 "CANDIDATES": [
  {
   "id": "p_ebisuya",
   "name": "에비스야 우동 하카타스미요시",
   "area": "hakata",
   "tags": [
    "맛집",
    "우동",
    "점심"
   ],
   "minutes": 45,
   "open": "11:10",
   "close": "18:00",
   "note": "갈비우동 맛집. 오픈 전 대기줄, 평일 20~60분 웨이팅. 현금/PayPay만",
   "maps": "https://www.google.com/maps/search/?api=1&query=えびすやうどん+博多住吉店"
  },
  {
   "id": "p_ikkosha",
   "name": "하카타 잇코샤 본점",
   "area": "hakata",
   "tags": [
    "맛집",
    "라멘",
    "점심",
    "빠름"
   ],
   "minutes": 40,
   "open": "10:00",
   "close": "22:00",
   "note": "돈코츠 라멘 본점. 역 도보 8분, 회전 빠름",
   "maps": "https://www.google.com/maps/search/?api=1&query=博多一幸舎+本店"
  },
  {
   "id": "p_yamaya",
   "name": "야마야 하카타점 (명란 정식)",
   "area": "hakata",
   "tags": [
    "맛집",
    "점심",
    "빠름"
   ],
   "minutes": 40,
   "open": "11:00",
   "close": "22:00",
   "note": "하카타 명물 명란 정식",
   "maps": "https://www.google.com/maps/search/?api=1&query=やまや+博多店"
  },
  {
   "id": "p_ooyama",
   "name": "모츠나베 오오야마 카운터KITTE하카타",
   "area": "hakata",
   "tags": [
    "맛집",
    "모츠나베",
    "곱창",
    "점심"
   ],
   "minutes": 60,
   "open": "11:00",
   "close": "23:00",
   "note": "역 직결 B1 카운터 20석. 곱창이 주재료",
   "maps": "https://www.google.com/maps/search/?api=1&query=もつ鍋おおやま+カウンターKITTE博多"
  },
  {
   "id": "p_fuglen",
   "name": "후글렌 후쿠오카",
   "area": "hakata",
   "tags": [
    "카페",
    "브런치",
    "빠름"
   ],
   "minutes": 40,
   "open": "08:00",
   "close": "22:00",
   "note": "하카타역 에키마에, 가벼운 브런치",
   "maps": "https://www.google.com/maps/search/?api=1&query=Fuglen+Fukuoka"
  },
  {
   "id": "p_coffeecounty",
   "name": "커피카운티 후쿠오카점",
   "area": "hakata",
   "tags": [
    "카페",
    "브런치"
   ],
   "minutes": 40,
   "open": "10:00",
   "close": "18:00",
   "note": "구시다·기온 방면 스페셜티",
   "maps": "https://www.google.com/maps/search/?api=1&query=Coffee+County+Fukuoka"
  },
  {
   "id": "p_kurumi",
   "name": "Kurumi (디저트)",
   "area": "tenjin",
   "tags": [
    "카페",
    "디저트"
   ],
   "minutes": 45,
   "open": "11:00",
   "close": "19:00",
   "note": "텐진 디저트 전문점",
   "maps": "https://www.google.com/maps/search/?api=1&query=Kurumi+福岡+デザート"
  },
  {
   "id": "p_uoten",
   "name": "우오텐 (해산물 이자카야)",
   "area": "hakata",
   "tags": [
    "맛집",
    "해산물",
    "저녁"
   ],
   "minutes": 90,
   "open": "17:00",
   "close": "23:00",
   "note": "고마사바 등 어요리",
   "maps": "https://www.google.com/maps/search/?api=1&query=魚天+博多"
  },
  {
   "id": "p_uochu",
   "name": "우오츄 (일식)",
   "area": "hakata",
   "tags": [
    "맛집",
    "해산물",
    "저녁"
   ],
   "minutes": 90,
   "open": "17:00",
   "close": "23:00",
   "note": "후쿠오카 어요리",
   "maps": "https://www.google.com/maps/search/?api=1&query=魚忠+博多"
  },
  {
   "id": "p_gyukatsu",
   "name": "규카츠 모토무라 파르코점",
   "area": "tenjin",
   "tags": [
    "맛집",
    "점심",
    "빠름"
   ],
   "minutes": 50,
   "open": "11:00",
   "close": "22:00",
   "note": "텐진 파르코 내, 화로에 구워먹는 규카츠",
   "maps": "https://www.google.com/maps/search/?api=1&query=牛かつもと村+福岡パルコ店"
  },
  {
   "id": "p_shinshin",
   "name": "신신라멘 텐진본점",
   "area": "tenjin",
   "tags": [
    "맛집",
    "라멘",
    "저녁",
    "빠름"
   ],
   "minutes": 40,
   "open": "11:00",
   "close": "03:00",
   "note": "텐진 인기 라멘",
   "maps": "https://www.google.com/maps/search/?api=1&query=ShinShin+天神本店"
  },
  {
   "id": "p_kaneya",
   "name": "장어 카네야 유후인점",
   "area": "yufuin",
   "tags": [
    "맛집",
    "장어",
    "점심"
   ],
   "minutes": 60,
   "open": "11:00",
   "close": "16:00",
   "note": "유후인역 근처 우나기, 버스 시간 전 동선에 적합",
   "maps": "https://www.google.com/maps/search/?api=1&query=かねや+由布院+うなぎ"
  },
  {
   "id": "p_yatai",
   "name": "나카스 포장마차 거리",
   "area": "nakasu",
   "tags": [
    "맛집",
    "야타이",
    "저녁",
    "야경"
   ],
   "minutes": 90,
   "open": "18:00",
   "close": "25:00",
   "note": "호텔 바로 옆 야타이 밀집 지구",
   "maps": "https://www.google.com/maps/search/?api=1&query=中洲屋台街"
  },
  {
   "id": "p_kushida",
   "name": "구시다 신사 + 가와바타 상점가",
   "area": "hakata",
   "tags": [
    "관광",
    "신사",
    "빠름"
   ],
   "minutes": 60,
   "open": "09:00",
   "close": "17:00",
   "note": "도미 인 기온 바로 옆. 하카타 대표 신사",
   "maps": "https://www.google.com/maps/search/?api=1&query=櫛田神社+福岡"
  },
  {
   "id": "p_canal",
   "name": "캐널시티 하카타",
   "area": "hakata",
   "tags": [
    "쇼핑",
    "관광"
   ],
   "minutes": 120,
   "open": "10:00",
   "close": "21:00",
   "note": "분수쇼 쇼핑몰, 기온 도보 10분",
   "maps": "https://www.google.com/maps/search/?api=1&query=キャナルシティ博多"
  },
  {
   "id": "p_dazaifu",
   "name": "다자이후 텐만구",
   "area": "dazaifu",
   "tags": [
    "관광",
    "신사",
    "당일"
   ],
   "minutes": 180,
   "open": "06:30",
   "close": "19:00",
   "note": "후쿠오카 관광 1순위. 하카타 왕복+관광 약 3시간",
   "maps": "https://www.google.com/maps/search/?api=1&query=太宰府天満宮"
  },
  {
   "id": "p_ohori",
   "name": "오호리 공원 + 마이즈루 공원",
   "area": "ohori",
   "tags": [
    "공원",
    "자연",
    "산책"
   ],
   "minutes": 120,
   "open": "00:00",
   "close": "24:00",
   "note": "나카스에서 지하철 2정거장. 호수 산책 + 성터",
   "maps": "https://www.google.com/maps/search/?api=1&query=大濠公園"
  },
  {
   "id": "p_andlocals",
   "name": "앤드로컬스 오호리공원",
   "area": "ohori",
   "tags": [
    "카페",
    "공원"
   ],
   "minutes": 45,
   "open": "10:00",
   "close": "18:00",
   "note": "공원 내 뷰 카페",
   "maps": "https://www.google.com/maps/search/?api=1&query=and+locals+大濠公園"
  },
  {
   "id": "p_tower",
   "name": "후쿠오카 타워 + 모모치 해변",
   "area": "momochi",
   "tags": [
    "관광",
    "야경",
    "바다"
   ],
   "minutes": 120,
   "open": "09:30",
   "close": "22:00",
   "note": "노을 시간대 추천. 나카스에서 지하철+도보 25분",
   "maps": "https://www.google.com/maps/search/?api=1&query=福岡タワー"
  },
  {
   "id": "p_donki",
   "name": "돈키호테 텐진 본점",
   "area": "tenjin",
   "tags": [
    "쇼핑",
    "잡화"
   ],
   "minutes": 60,
   "open": "09:00",
   "close": "24:00",
   "note": "기념품·잡화 쇼핑",
   "maps": "https://www.google.com/maps/search/?api=1&query=ドン・キホーテ+福岡天神本店"
  },
  {
   "id": "p_tenjinsc",
   "name": "텐진 지하상가·파르코",
   "area": "tenjin",
   "tags": [
    "쇼핑"
   ],
   "minutes": 90,
   "open": "10:00",
   "close": "20:30",
   "note": "쇼핑 밀집 구역",
   "maps": "https://www.google.com/maps/search/?api=1&query=天神地下街"
  },
  {
   "id": "p_yunotsubo",
   "name": "유노츠보 거리 산책",
   "area": "yufuin",
   "tags": [
    "관광",
    "쇼핑",
    "디저트"
   ],
   "minutes": 90,
   "open": "09:00",
   "close": "17:00",
   "note": "유후인 메인 산책로, 잡화점·디저트",
   "maps": "https://www.google.com/maps/search/?api=1&query=湯の坪街道"
  },
  {
   "id": "p_kinrin",
   "name": "긴린코 호수",
   "area": "yufuin",
   "tags": [
    "관광",
    "자연",
    "산책"
   ],
   "minutes": 60,
   "open": "00:00",
   "close": "24:00",
   "note": "유노츠보 끝자락. 아침 안개가 유명",
   "maps": "https://www.google.com/maps/search/?api=1&query=金鱗湖"
  },
  {
   "id": "p_floral",
   "name": "유후인 플로랄 빌리지",
   "area": "yufuin",
   "tags": [
    "관광",
    "디저트"
   ],
   "minutes": 45,
   "open": "09:30",
   "close": "17:30",
   "note": "유럽풍 미니 테마 빌리지",
   "maps": "https://www.google.com/maps/search/?api=1&query=湯布院フローラルビレッジ"
  },
  {
   "id": "p_rotemburo",
   "name": "나나카와 전용 노천탕",
   "area": "yufuin",
   "tags": [
    "온천",
    "료칸"
   ],
   "minutes": 60,
   "open": "00:00",
   "close": "24:00",
   "note": "객실 전용 노천탕 — 석식 전후 자유롭게",
   "maps": "https://www.google.com/maps/search/?api=1&query=黒川野乃宿+ななかわ"
  },
  {
   "id": "p_dormy_onsen",
   "name": "도미 인 천연온천 대욕장",
   "area": "hakata",
   "tags": [
    "온천"
   ],
   "minutes": 60,
   "open": "15:00",
   "close": "26:00",
   "note": "숙박 포함. 야식 소바 무료 서비스 21:30~",
   "maps": "https://www.google.com/maps/search/?api=1&query=ドーミーイン博多祇園"
  },
  {
   "id": "p_mitsui_onsen",
   "name": "미쓰이 가든 대욕장",
   "area": "nakasu",
   "tags": [
    "온천"
   ],
   "minutes": 60,
   "open": "15:00",
   "close": "25:00",
   "note": "숙박 포함 대욕장",
   "maps": "https://www.google.com/maps/search/?api=1&query=三井ガーデンホテル福岡中洲"
  },
  {
   "id": "p_crosta",
   "name": "Crosta 하카타 짐보관",
   "area": "hakata",
   "tags": [
    "동선"
   ],
   "minutes": 20,
   "open": "09:00",
   "close": "20:00",
   "note": "역 2층 유인 보관소. 1개 1일 ¥1,000, 최대 30일",
   "maps": "https://www.google.com/maps/search/?api=1&query=クロスタ博多"
  },
  {
   "id": "p_hakata_st",
   "name": "하카타역 쇼핑(마이잉·한도)",
   "area": "hakata",
   "tags": [
    "쇼핑",
    "빠름"
   ],
   "minutes": 45,
   "open": "10:00",
   "close": "20:00",
   "note": "에키벤·기념품 구매 구역",
   "maps": "https://www.google.com/maps/search/?api=1&query=博多駅"
  }
 ],
 "TRAVEL": [
  {
   "a": "hakata",
   "b": "hakata",
   "m": 10
  },
  {
   "a": "hakata",
   "b": "nakasu",
   "m": 15
  },
  {
   "a": "hakata",
   "b": "tenjin",
   "m": 20
  },
  {
   "a": "hakata",
   "b": "ohori",
   "m": 25
  },
  {
   "a": "hakata",
   "b": "momochi",
   "m": 30
  },
  {
   "a": "hakata",
   "b": "dazaifu",
   "m": 40
  },
  {
   "a": "nakasu",
   "b": "nakasu",
   "m": 10
  },
  {
   "a": "nakasu",
   "b": "hakata",
   "m": 15
  },
  {
   "a": "nakasu",
   "b": "tenjin",
   "m": 15
  },
  {
   "a": "nakasu",
   "b": "ohori",
   "m": 20
  },
  {
   "a": "nakasu",
   "b": "momochi",
   "m": 30
  },
  {
   "a": "nakasu",
   "b": "dazaifu",
   "m": 45
  },
  {
   "a": "yufuin",
   "b": "yufuin",
   "m": 15
  },
  {
   "a": "tenjin",
   "b": "tenjin",
   "m": 10
  },
  {
   "a": "tenjin",
   "b": "ohori",
   "m": 15
  },
  {
   "a": "tenjin",
   "b": "momochi",
   "m": 20
  },
  {
   "a": "ohori",
   "b": "ohori",
   "m": 10
  },
  {
   "a": "ohori",
   "b": "momochi",
   "m": 20
  },
  {
   "a": "ohori",
   "b": "tenjin",
   "m": 15
  }
 ],
 "DEFAULT_PREFS": {
  "dislikes": [
   "곱창"
  ],
  "weights": {
   "맛집": 3,
   "쇼핑": 2,
   "카페": 2,
   "관광": 2,
   "자연": 1,
   "온천": 3
  },
  "pace": "relaxed"
 },
 "INFO": {
  "emergency": [
   {
    "name": "나나카와 료칸",
    "value": "+81-977-853508",
    "note": "체크인 지연·식사시간·알레르기 사전 연락"
   },
   {
    "name": "하카타 스시 마츠모토",
    "value": "092-401-1518",
    "note": "예약 지연 시 매장에 직접 연락"
   },
   {
    "name": "니시테츠 유후인호 예약",
    "value": "예약번호 186728358",
    "note": "모바일 승차권은 결제 메일 링크에서만 열림"
   },
   {
    "name": "JR큐슈 기차 예약",
    "value": "예약 62842 / 인증 1531",
    "note": "발권: 매표기 또는 미도리노마도구치, 결제 카드 지참"
   },
   {
    "name": "일본 긴급번호",
    "value": "경찰 110 / 소방·구급 119",
    "note": "여행자보험 연락처도 사전 저장 권장"
   }
  ],
  "taxi": [
   "후쿠오카 시내: GO 앱(일본 대표 택시 호출) 또는 Uber — 한국 카드 등록 가능",
   "유후인: 택시 대수가 적음 — 역 앞 승강장 이용, 없으면 유후인역 안내소나 숙소에 호출 부탁",
   "심야/긴급 시 숙소 프런트에 택시 호출 요청이 가장 확실"
  ],
  "tips": [
   "유후 3호는 차내판매 없음 — 점심/간식은 하카타역 에키벤 매점에서 미리 구매",
   "에비스야 우동·야타이 등 현금 전용 가게가 많음 — 엔화 소액 준비 (명란/캐널시티 기념품은 카드 OK)",
   "교통카드: Suica/ICOCA 모두 후쿠오카에서 사용 가능, SUGOCA는 현지 카드 — 지하철·버스·편의점 결제",
   "일본 도로엔 쓰레기통이 거의 없음 — 비닐봉지 소지, 편의점 앞에서만 폐기",
   "온천 에티켓: 수건은 탕 안에 넣지 않기, 입욕 전 샤워, 노천탕 수영복 착용 금지(전용탕도 동일)",
   "무료취소 마감: 나나카와 9/24, 미쓰이 9/29, 도미 인 9/30 — 일정 변경은 기한 전에",
   "숙박세: 미쓰이 가든에서 1인 1박 ¥200~500 현장 결제",
   "여권 상시 휴대 의무(일본), 면세는 ¥5,000 이상 구매 시 여권 제시",
   "료칸 석식/조식 시간(18:00·18:30 / 08:00·08:30)과 음식 알레르기는 출발 전 숙소에 전달"
  ]
 }
};
