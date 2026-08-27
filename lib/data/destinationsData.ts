export interface Destination {
  id: string;
  slug: string;
  name: { en: string; ko: string };
  region: { en: string; ko: string };
  tagline: { en: string; ko: string };
  mapCoords: { x: number; y: number }; // percentage on Sri Lanka SVG map
  heroImage: string;
  thumbnail: string;
  gallery: string[];
  bestMonths: { en: string; ko: string };
  avgTemp: string;
  recommendedDuration: { en: string; ko: string };
  description: { en: string; ko: string };
  highlights: { en: string[]; ko: string[] };
  luxuryStays: Array<{
    name: string;
    tier: string;
    description: { en: string; ko: string };
    image: string;
  }>;
  curatedExperiences: { en: string[]; ko: string[] };
}

export const destinationsData: Destination[] = [
  {
    id: "sigiriya",
    slug: "sigiriya",
    name: { en: "Sigiriya & Cultural Triangle", ko: "시기리야 & 문화 삼각지대" },
    region: { en: "Central North", ko: "중북부 문화권" },
    tagline: { en: "Ancient 5th-Century Sky Fortress & Forest Ruins", ko: "5세기 카샤파 왕의 공중 요새 & 신비로운 밀림 유적" },
    mapCoords: { x: 50, y: 38 },
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "December to April & July to September", ko: "12월 ~ 4월 및 7월 ~ 9월" },
    avgTemp: "28°C - 32°C",
    recommendedDuration: { en: "2 - 3 Nights", ko: "2박 - 3박" },
    description: {
      en: "Rising nearly 200 meters above the jungle floor, Sigiriya is an engineering masterpiece and UNESCO World Heritage site. Marvel at ancient water gardens, 1,500-year-old celestial maiden frescoes, and the dramatic Lion Gate summit overlooking boundless emerald canopies.",
      ko: "밀림 한가운데 200m 높이로 솟아오른 5세기 고대 요새 시기리야 라이온 록은 유네스코 세계유산이자 인류 건축의 불가사의입니다. 정교한 고대 수로 정원, 1,500년 된 천상의 여인 벽화, 그리고 거대한 사자 발톱 계단을 지나 정상에 오르면 끝없이 펼쳐지는 정글 파노라마가 감탄을 자아냅니다.",
    },
    highlights: {
      en: [
        "Dawn climb of the 5th-century Sigiriya Sky Citadel",
        "Dambulla Golden Rock Temple caves with 150+ Buddha statues",
        "Minneriya National Park Asian elephant gathering safari",
        "Private sunrise hot-air balloon flight over the jungle",
      ],
      ko: [
        "이른 아침 인파를 피한 시기리야 공중 요새 프라이빗 등반",
        "150여 구의 불상이 모셔진 담불라 황금 석굴사원 탐방",
        "미네리야 국립공원 수백 마리 야생 코끼리 집결 사파리",
        "정글 위를 유영하는 일출 열기구 프라이빗 투어",
      ],
    },
    luxuryStays: [
      {
        name: "Water Garden Sigiriya",
        tier: "5-Star Luxury Villa Sanctuary",
        description: {
          en: "Contemporary private pool villas set amidst historic water garden canals with direct Sigiriya Rock vistas.",
          ko: "시기리야 바위 요새를 정면으로 조망하는 고대 수로 정원 콘셉트의 최고급 프라이빗 풀빌라.",
        },
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Jetwing Vil Uyana",
        tier: "Eco-Luxury Wetland Chalets",
        description: {
          en: "Secluded paddy and water dwellings integrated seamlessly into wildlife-rich private nature reserves.",
          ko: "논과 연꽃 호수 위에 지어진 친환경 럭셔리 샬레로 희귀 야생 동물 서식지.",
        },
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Archaeologist-guided VIP walk", "Private champagne sunset at Pidurangala", "Village cooking with village elders"],
      ko: ["수석 고고학자 동행 VIP 해설 투어", "피두랑갈라 바위 일몰 샴페인 피크닉", "전통 유기농 스리랑카 쿠킹 클래스"],
    },
  },
  {
    id: "kandy",
    slug: "kandy",
    name: { en: "Kandy & Victoria Valley", ko: "캔디 & 빅토리아 밸리" },
    region: { en: "Central Hills", ko: "중부 산악권" },
    tagline: { en: "Royal Citadel, Sacred Relics & Championship Golf", ko: "최후의 왕도, 부처님 치아사리와 세계 100대 명문 골프" },
    mapCoords: { x: 48, y: 52 },
    heroImage: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "December to April", ko: "12월 ~ 4월" },
    avgTemp: "22°C - 27°C",
    recommendedDuration: { en: "2 Nights", ko: "2박" },
    description: {
      en: "The last royal capital of ancient Ceylon, surrounded by forested hills and the serene Kandy Lake. Home to the sacred Temple of the Tooth and world-ranked Victoria Golf & Country Resort.",
      ko: "스리랑카의 마지막 독립 왕국 수도로 푸른 산림과 캔디 호수가 어우러진 문화의 성지입니다. 부처님의 성스러운 치아 사리가 모셔진 불치사와 도널드 스틸이 설계한 세계 100대 절경 빅토리아 골프 리조트가 위치해 있습니다.",
    },
    highlights: {
      en: [
        "VIP private entrance to Temple of the Sacred Tooth ceremonies",
        "18-Hole championship golf at Victoria Golf Resort",
        "Strolling the royal palm avenues of Peradeniya Botanical Gardens",
        "Kandyan royal drummers and fire dancing performances",
      ],
      ko: [
        "불치사(Temple of the Tooth) 특별 VIP 프라이빗 참배",
        "세계 100대 절경 빅토리아 골프 & 컨트리 리조트 라운드",
        "1370년 창설된 페라데니야 왕립 식물원 산책",
        "캔디언 전통 왕실 드럼 및 파이어 댄스 관람",
      ],
    },
    luxuryStays: [
      {
        name: "W15 Hanthana Estate Kandy",
        tier: "Colonial Luxury Tea Estate",
        description: {
          en: "Restored 1950s tea bungalow nestled in the Hanthana mountain range with private chef services.",
          ko: "한타나 산맥 품에 안긴 1950년대 클래식 티 플랜터 방갈로 부티크 호텔.",
        },
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Victoria Golf Resort Chalets",
        tier: "Championship Golf Chalets",
        description: {
          en: "Lakeview chalets overlooking the Donald Steel golf course and Victoria Reservoir.",
          ko: "빅토리아 호수와 페어웨이가 한눈에 내려다보이는 프리미엄 골프 샬레.",
        },
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private blessings by chief monks", "Lake Victoria sunset kayaking", "Helicopter transfer from Colombo"],
      ko: ["사원 최고 주지스님의 프라이빗 축복 의식", "빅토리아 호수 선셋 카약", "콜롬보-캔디 프라이빗 헬기 이동"],
    },
  },
  {
    id: "nuwara-eliya",
    slug: "nuwara-eliya",
    name: { en: "Nuwara Eliya & Tea Country", ko: "누와라엘리야 & 센트럴 하일랜드" },
    region: { en: "Highlands (6,000 ft)", ko: "해발 1,800m 고원 지대" },
    tagline: { en: "Misty Valleys, Colonial Nostalgia & High-Altitude Golf", ko: "안개 낀 차밭, 영국 빅토리아풍 헤리티지 & 해발 1,800m 골프" },
    mapCoords: { x: 52, y: 62 },
    heroImage: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "January to April & July to September", ko: "1월 ~ 4월 및 7월 ~ 9월" },
    avgTemp: "14°C - 20°C (Crisp & Cool)",
    recommendedDuration: { en: "2 - 3 Nights", ko: "2박 - 3박" },
    description: {
      en: "Affectionately called 'Little England', Nuwara Eliya is perched at 6,000 feet amidst rolling carpet-like tea estates. Featuring tudor-style mansions, an 1889 golf club, and crisp mountain climate reminiscent of the Scottish highlands.",
      ko: "'리틀 잉글랜드'로 불리는 누와라엘리야는 해발 1,800m 고지에 위치해 1년 내내 15~20°C의 서늘한 봄 날씨를 자랑합니다. 영국 빅토리아 양식의 헤리티지 맨션, 1889년 창설된 고원 골프장, 그리고 세계 최고급 실론 홍차 밭이 끝없이 이어집니다.",
    },
    highlights: {
      en: [
        "Playing 18 holes at the 1889 historic Nuwara Eliya Golf Club",
        "Staying at Ceylon Tea Trails Relais & Châteaux with private butler",
        "Artisanal tea master tasting and factory heritage tour",
        "High Tea on the rose gardens of the colonial Grand Hotel",
      ],
      ko: [
        "1889년에 설립된 아시아 최고(最古) 누와라엘리야 골프장 18홀 라운드",
        "세계 최고 릴레앤샤토 '실론 티 트레일스' 프라이빗 버틀러 방갈로 연박",
        "수석 티 마스터와 함께하는 100년 전통 홍차 테이스팅",
        "역사적인 더 그랜드 호텔 장미 정원에서 즐기는 정통 영국식 하이티",
      ],
    },
    luxuryStays: [
      {
        name: "Ceylon Tea Trails",
        tier: "Relais & Châteaux Iconic Bungalows",
        description: {
          en: "5 restored colonial planter bungalows with infinity pools overlooking Castlereagh Reservoir.",
          ko: "캐슬레이 호수가 내려다보이는 5개의 클래식 티 플랜터 방갈로와 프라이빗 셰프.",
        },
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "The Grand Hotel",
        tier: "Colonial Heritage 5-Star",
        description: {
          en: "130-year-old former residence of the British Governor with award-winning manicured gardens.",
          ko: "130년 역사의 영국 총독 관저를 개조한 헤리티지 5성급 호텔.",
        },
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private vintage train saloon booking", "Mountain mountain-biking through tea trails", "Whiskey tasting by the log fire"],
      ko: ["1등석 레트로 산악 기차 단독 예약", "차밭 사이 프라이빗 E-바이크 투어", "벽난로 앞 싱글몰트 위스키 테이스팅"],
    },
  },
  {
    id: "ella",
    slug: "ella",
    name: { en: "Ella & The High Peaks", ko: "엘라 & 하이랜드 피크" },
    region: { en: "Central Highlands", ko: "중부 고원" },
    tagline: { en: "Nine Arch Viaduct, Dramatic Gorges & Cloud Forests", ko: "나인 아치 브리지, 장엄한 협곡과 구름 숲" },
    mapCoords: { x: 57, y: 66 },
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "January to May", ko: "1월 ~ 5월" },
    avgTemp: "20°C - 26°C",
    recommendedDuration: { en: "2 Nights", ko: "2박" },
    description: {
      en: "A picturesque mountain village nestled in the southern edge of the highlands, famed for the colonial Nine Arch Bridge, breathtaking waterfalls, and exhilarating hikes up Little Adam's Peak.",
      ko: "남부 고원 자락에 위치한 그림 같은 산골 마을로, 울창한 숲속을 가로지르는 9개 아치의 석조 철교 '나인 아치 브리지'와 시원한 라바나 폭포, 리틀 아담스 피크 트레킹으로 유명합니다.",
    },
    highlights: {
      en: [
        "Crossing the iconic Demodara Nine Arch Bridge",
        "Sunrise hike to Little Adam's Peak with panoramic gorge views",
        "Flying Ravana mega zip-line over tea plantations",
      ],
      ko: [
        "영화 같은 데모다라 나인 아치 브리지 기차 건너는 장면 관람",
        "일출 리틀 아담스 피크 가벼운 트레킹 및 협곡 조망",
        "차밭 위를 가로지르는 플라잉 라바나 메가 짚라인",
      ],
    },
    luxuryStays: [
      {
        name: "98 Acres Resort & Spa",
        tier: "Luxury Eco-Cliff Resort",
        description: {
          en: "Chic chalets constructed from recycled railway sleepers with infinity views across Ella Gap.",
          ko: "엘라 협곡이 시원하게 내려다보이는 친환경 최고급 절벽 리조트.",
        },
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private helicopter aerial tour of Ella Gap", "Sunset cocktails at Ravana Pool Club"],
      ko: ["엘라 협곡 상공 프라이빗 헬기 투어", "라바나 풀 클럽 VIP 카바나 선셋 디너"],
    },
  },
  {
    id: "yala",
    slug: "yala",
    name: { en: "Yala National Park", ko: "얄라 국립공원" },
    region: { en: "Southern Wildlife Belt", ko: "남동부 야생 보호구역" },
    tagline: { en: "World's Highest Leopard Density & Coastal Savannah", ko: "세계 최고 표범 서식 밀도 & 인도양 해안 사바나" },
    mapCoords: { x: 65, y: 76 },
    heroImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "February to July (Peak Leopard Sightings)", ko: "2월 ~ 7월 (표범 관찰 최적기)" },
    avgTemp: "27°C - 33°C",
    recommendedDuration: { en: "2 Nights", ko: "2박" },
    description: {
      en: "Spanning nearly 1,000 square kilometers where dry thorn scrub meets the roaring Indian Ocean, Yala boasts the highest concentration of leopards on earth, alongside sloth bears, saltwater crocodiles, and hundreds of bird species.",
      ko: "건조 사바나 밀림과 거친 인도양이 만나는 얄라 국립공원은 전 세계에서 표범을 가장 높은 확률로 만날 수 있는 성지입니다. 아시아 코끼리, 느림보곰, 악어, 그리고 수백 종의 희귀 조류가 공존하는 생태계의 보고입니다.",
    },
    highlights: {
      en: [
        "Tracking Sri Lankan leopards (Panthera pardus kotiya) with expert naturalists",
        "Staying in futuristic cocoon suites at Wild Coast Tented Lodge",
        "Spotting elusive sloth bears during palu berry fruiting season",
        "Beach dinners under the southern constellation skies",
      ],
      ko: [
        "전문 야생 생물학자와 함께하는 스리랑카 야생 표범 추적",
        "릴레앤샤토 와일드 코스트 텐티드 롯지 프라이빗 코쿤 숙박",
        "팔루 열매 시즌 귀여운 야생 느림보곰 관찰",
        "남십자성이 빛나는 밤하늘 아래 인도양 해변 디너",
      ],
    },
    luxuryStays: [
      {
        name: "Wild Coast Tented Lodge",
        tier: "Relais & Châteaux Safari Lodge",
        description: {
          en: "Iconic cocoon-shaped luxury tents with copper bathtubs and private plunge pools.",
          ko: "구리 욕조와 프라이빗 플런지 풀을 갖춘 세계적인 코쿤 럭셔리 텐티드 롯지.",
        },
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private safari vehicle with high-end optics", "Bush breakfast inside the reserve"],
      ko: ["최고급 망원경 구비 프라이빗 사파리 전용 지프", "정글 속 프라이빗 부시 샴페인 조식"],
    },
  },
  {
    id: "galle",
    slug: "galle",
    name: { en: "Galle Fort & Weligama Bay", ko: "갈레 요새 & 웰리가마 베이" },
    region: { en: "Southern Coast", ko: "남서부 해안" },
    tagline: { en: "17th-Century Dutch Fort, Ocean Villas & Whale Sanctuaries", ko: "17세기 네덜란드 요새, 절벽 위 오션 빌라 & 대왕고래" },
    mapCoords: { x: 38, y: 84 },
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "November to April", ko: "11월 ~ 4월" },
    avgTemp: "28°C - 31°C",
    recommendedDuration: { en: "2 - 3 Nights", ko: "2박 - 3박" },
    description: {
      en: "A living 17th-century UNESCO World Heritage fortress built by the Portuguese and fortified by the Dutch. Wander through cobbled alleys lined with jewellery boutiques, colonial villas, and watch sunsets from the ocean ramparts.",
      ko: "포르투갈과 네덜란드 식민지 시대의 성벽과 고풍스러운 석조 건축물이 완벽하게 보존된 유네스코 세계유산입니다. 자갈길 골목 사이로 실론 사파이어 보석 숍, 앤티크 갤러리, 카페가 늘어서 있으며 요새 성벽 너머로 인도양의 환상적인 노을이 펼쳐집니다.",
    },
    highlights: {
      en: [
        "Walking the ancient ramparts of UNESCO Galle Fort at sunset",
        "Amangalla luxury heritage stay and ayurvedic hydrotherapy",
        "Private luxury catamaran cruise for Blue Whale watching in Mirissa",
        "Experiencing traditional stilt fishermen along the southern coast",
      ],
      ko: [
        "선셋 무렵 유네스코 갈레 요새 성벽 산책 및 칵테일",
        "전통의 아만갈라(Amangalla) 헤리티지 투숙 및 스파",
        "미리사 앞바다 프라이빗 카타마란 요트 대왕고래 와칭",
        "남부 해안 전통 장대 낚시(Stilt Fishing) 포토제닉 체험",
      ],
    },
    luxuryStays: [
      {
        name: "Amangalla",
        tier: "Aman Luxury Heritage",
        description: {
          en: "300-year-old colonial grand dame with antique four-poster beds and serene hydrotherapy baths.",
          ko: "300년 역사의 우아함과 최고급 프라이빗 버틀러 서비스를 자랑하는 아만 리조트.",
        },
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Cape Weligama",
        tier: "Relais & Châteaux Cliffside Villas",
        description: {
          en: "Perched 40 meters above the Indian Ocean with iconic crescent moon infinity pool.",
          ko: "인도양 절벽 위 40m에 위치한 반달 모양 인피니티 풀과 럭셔리 풀빌라.",
        },
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private sunset catamaran yacht charter", "Sapphire gem consultation with master gemmologist"],
      ko: ["프라이빗 럭셔리 카타마란 요트 선셋 세일링", "수석 보석학자와 함께하는 실론 사파이어 프라이빗 큐레이션"],
    },
  },
  {
    id: "colombo",
    slug: "colombo",
    name: { en: "Colombo", ko: "콜롬보" },
    region: { en: "Western Capital", ko: "서부 수도권" },
    tagline: { en: "Cosmopolitan Capital, Michelin-Calibre Dining & Historic Golf", ko: "코스모폴리탄 수도, 미식 레스토랑 & 140년 역사의 골프" },
    mapCoords: { x: 33, y: 60 },
    heroImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "Year-Round (Best January to March)", ko: "연중 내내 (1월 ~ 3월 최적)" },
    avgTemp: "28°C - 31°C",
    recommendedDuration: { en: "1 - 2 Nights", ko: "1박 - 2박" },
    description: {
      en: "A vibrant oceanfront metropolis blending Dutch and British colonial architecture with glass skyscrapers, chic rooftop lounges, world-renowned dining at Ministry of Crab, and the prestigious 1879 Royal Colombo Golf Club.",
      ko: "식민지풍 건축물과 현대적인 고층 빌딩, 세련된 루프탑 라운지, 세계 50대 레스토랑 '미니스트리 오브 크랩', 그리고 1879년에 창설된 로열 콜롬보 골프 클럽이 공존하는 매력적인 해변 수도입니다.",
    },
    highlights: {
      en: [
        "18-Hole round at the historic Royal Colombo Golf Club",
        "Curated dining at Asia's 50 Best Ministry of Crab",
        "Geoffrey Bawa architectural heritage tour",
        "Exclusive shopping at Paradise Road and Barefoot",
      ],
      ko: [
        "1879년 설립 로열 콜롬보 골프 클럽 18홀 라운드",
        "아시아 50대 레스토랑 '미니스트리 오브 크랩' VIP 예약 디너",
        "세계적인 건축 거장 제프리 바와(Geoffrey Bawa) 건축 투어",
        "파라다이스 로드 갤러리 및 명품 부티크 쇼핑",
      ],
    },
    luxuryStays: [
      {
        name: "Galle Face Hotel",
        tier: "Iconic 1864 Oceanfront Legend",
        description: {
          en: "Asia's oldest grand hotel right on the ocean with sunset chequerboard terrace.",
          ko: "1864년 문을 연 아시아에서 가장 오래된 전설적인 해변 특급 호텔.",
        },
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private art gallery access with curator", "Sunset helicopter flight over Colombo skyline"],
      ko: ["수석 큐레이터 동행 프라이빗 아트 갤러리 투어", "콜롬보 해안 스카이라인 선셋 헬기 투어"],
    },
  },
  {
    id: "bentota",
    slug: "bentota",
    name: { en: "Bentota & Golden Coast", ko: "벤토타 & 골든 코스트" },
    region: { en: "South-West Coast", ko: "남서부 해양 휴양지" },
    tagline: { en: "Golden Sands, Water Villas & Geoffrey Bawa Estates", ko: "황금빛 백사장, 럭셔리 워터 빌라 & 제프리 바와 정원" },
    mapCoords: { x: 34, y: 72 },
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "November to April", ko: "11월 ~ 4월" },
    avgTemp: "28°C - 32°C",
    recommendedDuration: { en: "2 Nights", ko: "2박" },
    description: {
      en: "Sri Lanka's premier gold-sand resort haven, where wide ocean beaches meet the tranquil Bentota River lagoon. World-class water sports, tranquil Ayurvedic wellness resorts, and the iconic country estates of Geoffrey Bawa.",
      ko: "넓은 인도양 황금 해변과 고요한 벤토타 강 라군이 만나는 스리랑카 최고의 해양 휴양지입니다. 최고급 아유르베다 힐링 리조트와 제프리 바와의 걸작 건축물 루누강가(Lunuganga)가 위치해 있습니다.",
    },
    highlights: {
      en: [
        "Private tour of Geoffrey Bawa's country estate Lunuganga",
        "Madu River mangrove safari with cinnamon island visit",
        "Luxury wellness & authentic panchakarma therapies",
      ],
      ko: [
        "건축 거장 제프리 바와의 별장 '루누강가' 프라이빗 정원 투어",
        "마두 강 맹그로브 숲 보트 사파리 및 시나몬 아일랜드 방문",
        "정통 아유르베다 판차카르마 맞춤형 힐링 프로그램",
      ],
    },
    luxuryStays: [
      {
        name: "Saman Villas",
        tier: "Cliffside Boutique Luxury",
        description: {
          en: "Romantic headland cliff suites with private pools and crashing ocean wave sounds.",
          ko: "파도 소리가 들리는 곶 절벽 위에 자리한 로맨틱 프라이빗 풀빌라.",
        },
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private river cruise champagne breakfast", "Sea turtle sanctuary release experience"],
      ko: ["벤토타 강 프라이빗 보트 샴페인 조식", "아기 바다거북 자연 방류 프라이빗 체험"],
    },
  },
  {
    id: "trincomalee",
    slug: "trincomalee",
    name: { en: "Trincomalee & East Coast", ko: "트링코말리 & 동부 해안" },
    region: { en: "Eastern Province", ko: "동부 해안권" },
    tagline: { en: "Pristine Turquoise Bays, Cliff Temples & Whale Watching", ko: "투명한 에메랄드빛 바다, 절벽 사원 & 고래 관찰" },
    mapCoords: { x: 62, y: 32 },
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    ],
    bestMonths: { en: "May to October (Sunshine Season)", ko: "5월 ~ 10월 (동부 해안 최고 성수기)" },
    avgTemp: "29°C - 34°C",
    recommendedDuration: { en: "2 - 3 Nights", ko: "2박 - 3박" },
    description: {
      en: "Home to one of the finest natural deep-water harbours in the world, Trincomalee features powdery white beaches at Nilaveli, vibrant coral reefs around Pigeon Island, and the cliffside Hindu temple of Koneswaram.",
      ko: "세계 5대 천연 항구 중 하나로, 5월부터 10월까지 잔잔하고 투명한 에메랄드빛 바다가 펼쳐집니다. 닐라벨리의 순백 백사장, 피죤 아일랜드의 산호초 스노클링, 절벽 위 코네스와람 힌두 사원이 장관을 이룹니다.",
    },
    highlights: {
      en: [
        "Snorkelling with blacktip reef sharks around Pigeon Island National Park",
        "Koneswaram Temple perched high on Swami Rock cliff",
        "Summer blue whale watching expeditions in the deep trench",
      ],
      ko: [
        "피죤 아일랜드 국립공원 청정 산호초 및 아기 상어 스노클링",
        "인도양 절벽 위 스와미 록에 자리한 코네스와람 사원 탐방",
        "여름철 트링코말리 심해 대왕고래 보트 탐사",
      ],
    },
    luxuryStays: [
      {
        name: "Uga Jungle Beach",
        tier: "Eco-Luxury Beach Chalets",
        description: {
          en: "Chic luxury tree chalets and beach cabins hidden inside tropical coastal forest.",
          ko: "열대 해안림 속에 숨겨진 럭셔리 트리 샬레와 프라이빗 비치 카바나.",
        },
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      },
    ],
    curatedExperiences: {
      en: ["Private catamaran reef cruise", "Sunrise yoga on private beach"],
      ko: ["프라이빗 카타마란 산호초 세일링", "프라이빗 비치 일출 요가 & 명상"],
    },
  },
];
