export interface GolfCourse {
  id: string;
  name: string;
  location: { en: string; ko: string };
  region: string;
  established: number;
  designer: string;
  holes: number;
  par: number;
  yardage: number;
  elevation: string;
  image: string;
  gallery: string[];
  signatureHole: {
    number: number;
    par: number;
    description: { en: string; ko: string };
  };
  description: { en: string; ko: string };
  features: { en: string[]; ko: string[] };
  caddieAvailable: boolean;
  cartAvailable: boolean;
  dressCode: { en: string; ko: string };
}

export interface GolfPackage {
  id: string;
  slug: string;
  name: { en: string; ko: string };
  duration: { en: string; ko: string };
  rounds: number;
  courses: string[];
  priceUSD: number;
  highlight: { en: string; ko: string };
  image: string;
  description: { en: string; ko: string };
  itinerarySummary: string[];
}

export const golfCourses: GolfCourse[] = [
  {
    id: "royal-colombo",
    name: "Royal Colombo Golf Club",
    location: { en: "Colombo", ko: "콜롬보" },
    region: "Western Province",
    established: 1879,
    designer: "Colonial British Masters",
    holes: 18,
    par: 71,
    yardage: 6560,
    elevation: "Sea level",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
    ],
    signatureHole: {
      number: 8,
      par: 4,
      description: {
        en: "Crosses the historic Kelani Valley railway line that runs straight through the course.",
        ko: "골프 코스를 관통하는 유서 깊은 켈라니 철도를 가로지르는 흥미진진한 시그니처 파4 홀.",
      },
    },
    description: {
      en: "The second oldest Royal Golf Club outside the British Isles. Founded in 1879, this prestigious oasis in the heart of Colombo features immaculate tree-lined fairways, water hazards, and a working historic steam railway cutting through the course.",
      ko: "영국 본토 외 지역에서 두 번째로 오래된 '로열(Royal)' 칭호를 받은 1879년 설립 명문 골프장입니다. 콜롬보 도심 속 울창한 열대 수목과 워터 해저드, 그리고 실제 기차가 지나가는 철로가 코스를 관통하는 독보적인 헤리티지를 자랑합니다.",
    },
    features: {
      en: [
        "140+ Years of Royal Heritage",
        "Historic Colonial Clubhouse with fine dining",
        "Challenging water hazards on 9 holes",
        "Pro shop with international equipment",
      ],
      ko: [
        "140년 이상의 유서 깊은 로열 헤리티지",
        "영국 식민지풍 클래식 클럽하우스 & 파인다이닝",
        "9개 홀에 걸친 전략적 워터 해저드",
        "최신 골프 장비 구비 프로샵",
      ],
    },
    caddieAvailable: true,
    cartAvailable: true,
    dressCode: {
      en: "Traditional soft spikes & collared golf polo shirts required",
      ko: "단정한 칼라 골프웨어 및 소프트 스파이크 골프화 착용",
    },
  },
  {
    id: "victoria-golf-resort",
    name: "Victoria Golf Resort",
    location: { en: "Digana / Kandy", ko: "캔디 디가나" },
    region: "Central Province",
    established: 1999,
    designer: "Donald Steel",
    holes: 18,
    par: 73,
    yardage: 6945,
    elevation: "1,600 ft / 500m",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=800&q=80",
    ],
    signatureHole: {
      number: 6,
      par: 4,
      description: {
        en: "Dramatic 100ft elevated tee shot dropping towards the edge of Victoria Reservoir with panoramic mountain views.",
        ko: "100피트 높이의 절벽 티박스에서 빅토리아 호수를 향해 호쾌하게 내리꽂는 환상적인 파4 시그니처 홀.",
      },
    },
    description: {
      en: "Voted multiple times among the 'Top 100 Most Beautiful Golf Courses in the World' by Golf Digest. Designed by legendary course architect Donald Steel, Victoria is sculpted across 500 acres of rolling hills beside the Victoria Lake with majestic Knuckles Mountain vistas.",
      ko: "골프 다이제스트가 선정한 '세계에서 가장 아름다운 100대 골프 코스'에 빛나는 걸작입니다. 세계적인 코스 디자이너 도널드 스틸이 빅토리아 호수와 너클스 산맥의 수려한 능선을 따라 500에이커 규모로 완벽하게 조화시킨 아시아 최고의 챔피언십 리조트 코스입니다.",
    },
    features: {
      en: [
        "Ranked Top 100 in the World for sheer natural beauty",
        "Panoramic views of Victoria Reservoir and mountains",
        "Championship standard Par 73 layout",
        "Chalet accommodations and wellness spa on site",
      ],
      ko: [
        "세계 100대 절경 골프장 선정",
        "빅토리아 호수와 산맥의 360도 파노라마 뷰",
        "파 73 정규 챔피언십 난이도",
        "리조트 내 럭셔리 샬레 숙소 및 스파 완비",
      ],
    },
    caddieAvailable: true,
    cartAvailable: true,
    dressCode: {
      en: "Standard championship golf attire",
      ko: "정규 챔피언십 골프 복장",
    },
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya Golf Club",
    location: { en: "Nuwara Eliya", ko: "누와라엘리야" },
    region: "Central Highlands",
    established: 1889,
    designer: "British Highland Officers",
    holes: 18,
    par: 70,
    yardage: 6070,
    elevation: "6,000 ft / 1,830m",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    ],
    signatureHole: {
      number: 14,
      par: 3,
      description: {
        en: "Surrounded by century-old cypress and eucalyptus trees with mountain fog rolling in.",
        ko: "100년 된 삼나무와 유칼립투스 숲 사이에 안개가 피어오르는 몽환적인 파3 시그니처 홀.",
      },
    },
    description: {
      en: "Perched at 6,000 feet in the cool mountain resort of Nuwara Eliya ('Little England'), this 1889 gem offers crisp cool mountain air (15°C–20°C), tight tree-lined fairways, winding streams, and pure colonial Scottish nostalgia.",
      ko: "해발 1,830m '리틀 잉글랜드' 누와라엘리야에 위치한 1889년 창립 아시아 최정상급 고원 골프장입니다. 연중 15~20°C의 쾌적하고 서늘한 기후 속에서 울창한 침엽수림과 맑은 시냇물을 끼고 스코틀랜드 하이랜드 감성의 라운드를 즐길 수 있습니다.",
    },
    features: {
      en: [
        "Cool mountain climate (15°C–20°C year-round)",
        "Historic 1889 clubhouse with open fireplaces",
        "Unique high-altitude ball flight dynamics",
        "Adjacent to 5-star The Grand Hotel",
      ],
      ko: [
        "연중 15~20°C 서늘하고 쾌적한 피서 골프",
        "벽난로가 타오르는 1889년 전통 영국풍 클럽하우스",
        "고지대 특유의 긴 비거리와 정교한 샷 메이킹",
        "5성급 더 그랜드 호텔 바로 인접",
      ],
    },
    caddieAvailable: true,
    cartAvailable: true,
    dressCode: {
      en: "Smart golf wear; light sweater recommended for morning tee times",
      ko: "골프웨어 (아침 티타임 시 얇은 바람막이나 가디건 권장)",
    },
  },
  {
    id: "shangri-la-hambantota",
    name: "Shangri-La Hambantota Golf Resort",
    location: { en: "Hambantota", ko: "함반토타" },
    region: "Southern Province",
    established: 2016,
    designer: "Rodney Wright",
    holes: 18,
    par: 70,
    yardage: 6107,
    elevation: "Sea level",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
    ],
    signatureHole: {
      number: 16,
      par: 4,
      description: {
        en: "Coastal links hole running directly alongside the turquoise waves of the Indian Ocean.",
        ko: "인도양의 에메랄드빛 파도와 해변을 따라 펼쳐지는 드라마틱한 링크스 파4 시그니처 홀.",
      },
    },
    description: {
      en: "Sri Lanka's only 18-hole resort golf course, set within the 5-star Shangri-La resort on the sun-drenched southern coast. Designed by Rodney Wright across three distinct zones: The Coconut Plantation, The Dune Section, and The Sapphire Mine.",
      ko: "스리랑카 유일의 5성급 특급 호텔 전용 18홀 리조트 골프 코스입니다. 코코넛 플랜테이션, 백사구, 사파이어 광산 3가지 테마 존으로 구성되어 있으며, 인도양 해안 바람을 맞으며 쾌적하고 럭셔리한 라운드를 즐길 수 있습니다.",
    },
    features: {
      en: [
        "Direct beachfront resort golf course",
        "Three distinct ecological landscape zones",
        "Chi Ayurveda Spa for post-round recovery",
        "GPS-equipped luxury electric golf carts",
      ],
      ko: [
        "해변과 바로 맞닿은 오션프론트 리조트 코스",
        "3개 테마별 독창적인 지형 설계",
        "라운드 후 CHI 스파 전신 피로회복 케어",
        "최신형 GPS 탑재 전동 카트 완비",
      ],
    },
    caddieAvailable: true,
    cartAvailable: true,
    dressCode: {
      en: "Modern resort golf attire",
      ko: "리조트 골프 복장",
    },
  },
  {
    id: "eagles-catalina",
    name: "Eagles' Catalina Golf Course",
    location: { en: "Koggala / Galle", ko: "코갈라 / 갈레" },
    region: "Southern Coast",
    established: 2012,
    designer: "Sri Lanka Air Force Engineers",
    holes: 9,
    par: 36,
    yardage: 3120,
    elevation: "Sea level",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80"],
    signatureHole: {
      number: 4,
      par: 3,
      description: {
        en: "Water carry over Koggala Lake cove with sea breeze challenges.",
        ko: "코갈라 호수의 만을 가로질러 온그린을 노리는 매력적인 파3 홀.",
      },
    },
    description: {
      en: "A boutique coastal links course on the scenic shores of Koggala Lake and the Indian Ocean. A delightful addition for golfers staying in Galle Fort and Weligama wanting an intimate coastal round.",
      ko: "코갈라 호수와 인도양 해안선을 따라 조성된 이국적인 9홀 부티크 골프 코스입니다. 갈레 요새나 웰리가마 럭셔리 리조트에 머무르며 가벼운 해변 라운드를 즐기기에 최적입니다.",
    },
    features: {
      en: [
        "Charming lake and coastal breezes",
        "Convenient to Galle Fort luxury villas",
        "Relaxed intimate setting",
      ],
      ko: [
        "호수와 바다의 시원한 해풍",
        "갈레 요새 럭셔리 빌라에서 차량 20분 거리",
        "여유롭고 프라이빗한 분위기",
      ],
    },
    caddieAvailable: true,
    cartAvailable: true,
    dressCode: {
      en: "Smart casual golf attire",
      ko: "스마트 캐주얼 골프웨어",
    },
  },
];

export const golfPackages: GolfPackage[] = [
  {
    id: "island-championship-golf-tour",
    slug: "island-championship-golf-tour",
    name: {
      en: "The Ceylon Masters: Island Championship Tour 10 Days",
      ko: "실론 마스터스: 스리랑카 4대 명문 골프 투어 10일",
    },
    duration: { en: "10 Days / 9 Nights", ko: "10일 / 9박" },
    rounds: 6,
    courses: ["Royal Colombo", "Victoria Golf Resort", "Nuwara Eliya GC", "Shangri-La Hambantota"],
    priceUSD: 4650,
    highlight: {
      en: "6 Championship rounds across colonial heritage, mountain cloud fairways, and ocean links with luxury transfers.",
      ko: "콜롬보 로열, 캔디 빅토리아, 해발 1,800m 누와라엘리야, 샹그릴라 오션 코스에서 즐기는 6회 챔피언십 라운드.",
    },
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "The definitive Sri Lanka golf odyssey. Play all 4 premier championship courses while enjoying 5-star colonial hotels, private Mercedes sprinter with golf luggage capacity, top caddies, and post-round spa indulgence.",
      ko: "스리랑카를 대표하는 4대 명문 코스를 완벽하게 섭렵하는 10일간의 VIP 골프 여행입니다. 벤츠 골프 전용 스프린터, 최상급 캐디, VIP 티타임 100% 보장 및 골퍼 맞춤형 아유르베다 마사지가 제공됩니다.",
    },
    itinerarySummary: [
      "Day 1-2: Royal Colombo Golf Club & Luxury City Stay",
      "Day 3-4: Victoria Golf Resort 2 Rounds & Kandy Cultural Tour",
      "Day 5-6: Nuwara Eliya Highland Golf Club at 6,000ft & Grand Hotel High Tea",
      "Day 7-9: Shangri-La Hambantota Ocean Golf & Beach Relaxation",
      "Day 10: VIP Highway Transfer & Departure",
    ],
  },
  {
    id: "mountain-mist-golf-break",
    slug: "mountain-mist-golf-break",
    name: {
      en: "Highland Greens & Tea Country 7 Days",
      ko: "구름 위의 티샷: 캔디 & 누와라엘리야 고원 골프 7일",
    },
    duration: { en: "7 Days / 6 Nights", ko: "7일 / 6박" },
    rounds: 4,
    courses: ["Victoria Golf Resort", "Nuwara Eliya GC"],
    priceUSD: 3300,
    highlight: {
      en: "Focused hill country retreat combining world-ranked Victoria Golf and 1889 colonial Nuwara Eliya GC.",
      ko: "세계 100대 절경 빅토리아 골프장과 130년 역사의 서늘한 누와라엘리야 고원 코스에 집중하는 7일 힐링 골프.",
    },
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "Ideal for golfers seeking pure climate comfort and scenic splendor. Play in the crisp mountain air of Nuwara Eliya and the lakeside beauty of Victoria Golf Resort.",
      ko: "서늘하고 쾌적한 피서 골프를 선호하시는 분들을 위한 7일 코스입니다. 안개 자욱한 차밭과 호수를 배경으로 4회 라운드를 즐기며 릴레앤샤토 티 방갈로의 품격을 느낍니다.",
    },
    itinerarySummary: [
      "Day 1: VIP Arrival & Transfer to Kandy",
      "Day 2-3: Victoria Golf Resort 2 Rounds",
      "Day 4-5: Nuwara Eliya GC Highland Rounds & Colonial Grand Hotel",
      "Day 6: Tea Factory Visit & Scenic Relaxation",
      "Day 7: VIP Departure",
    ],
  },
  {
    id: "tropical-swing-ocean-safari",
    slug: "tropical-swing-ocean-safari",
    name: {
      en: "Ocean Greens & Leopard Safari 8 Days",
      ko: "인도양 오션 골프 & 얄라 표범 사파리 8일",
    },
    duration: { en: "8 Days / 7 Nights", ko: "8일 / 7박" },
    rounds: 4,
    courses: ["Shangri-La Hambantota", "Eagles' Catalina"],
    priceUSD: 3850,
    highlight: {
      en: "Oceanfront links golf at 5-star Shangri-La paired with private luxury leopard safaris in Yala.",
      ko: "5성급 샹그릴라 해변 골프 리조트 라운드와 얄라 국립공원 프라이빗 표범 사파리를 결합한 럭셔리 휴양 투어.",
    },
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "A sensational blend of championship coastal golf, private leopard safaris in Yala, and romantic sunset yachting off Galle Fort.",
      ko: "인도양의 파도를 바라보며 즐기는 샹그릴라 해변 골프와 정글 속 야생 표범 사파리, 그리고 유네스코 갈레 요새 해안 휴양을 한 번에 만나는 최고급 융합 코스입니다.",
    },
    itinerarySummary: [
      "Day 1: VIP Arrival & Southern Highway Transfer",
      "Day 2-3: Shangri-La Hambantota Ocean Golf Rounds",
      "Day 4-5: Wild Coast Tented Lodge & Private Yala Safari",
      "Day 6-7: Galle Fort Luxury Stay & Coastal Golf",
      "Day 8: Airport VIP Departure",
    ],
  },
];
