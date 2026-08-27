export interface DayItinerary {
  day: number;
  title: { en: string; ko: string };
  location: { en: string; ko: string };
  description: { en: string; ko: string };
  hotel: string;
  activities: string[];
  image: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
  category: "luxury" | "golf" | "wildlife" | "honeymoon" | "culture" | "wellness" | "family";
  categoryLabel: { en: string; ko: string };
  durationDays: number;
  durationNights: number;
  startingPriceUSD: number;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  overview: { en: string; ko: string };
  highlights: { en: string[]; ko: string[] };
  included: { en: string[]; ko: string[] };
  notIncluded: { en: string[]; ko: string[] };
  featuredHotels: Array<{
    name: string;
    location: string;
    tier: string;
    image: string;
  }>;
  itinerary: DayItinerary[];
}

export const toursData: TourPackage[] = [
  {
    id: "luxury-sri-lanka-discovery",
    slug: "luxury-sri-lanka-discovery",
    title: {
      en: "Luxury Sri Lanka Discovery Odyssey",
      ko: "스리랑카 럭셔리 그랜드 디스커버리 12일",
    },
    subtitle: {
      en: "The quintessential Ceylon grand tour: Sigiriya citadel, tea hills, leopard safaris, and private coastal villas.",
      ko: "시기리야 바위요새, 구름 속 홍차 플랜테이션, 얄라 사파리 및 갈레 요새 해안 빌라를 아우르는 최고급 시그니처 코스.",
    },
    category: "luxury",
    categoryLabel: { en: "Ultra Luxury", ko: "울트라 럭셔리" },
    durationDays: 12,
    durationNights: 11,
    startingPriceUSD: 5400,
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85",
    cardImage: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: {
      en: "Experience the timeless grandeur of Sri Lanka with our signature 12-day private odyssey. From the ancient UNESCO sky fortress of Sigiriya to the cool emerald hills of Ceylon Tea Trails and the wild leopard territories of Yala, culminating in the serene colonial charm of Amangalla in Galle Fort. Enjoy dedicated chauffeured luxury transport, Relais & Châteaux accommodations, and VIP curated access.",
      ko: "스리랑카의 찬란한 역사와 천혜의 대자연을 가장 품격 있게 경험하는 12일간의 프라이빗 여정입니다. 유네스코 세계유산 시기리야 고대 요새부터 해발 1,500m 실론 티 트레일스의 유서 깊은 티 플랜터 방갈로, 야생 표범을 찾아 떠나는 얄라 사파리 텐티드 롯지, 갈레 아만갈라(Amangalla)의 프라이빗 오션 빌라까지 최고급 릴레앤샤토 호텔과 전용 벤츠 리무진 서비스로 모십니다.",
    },
    highlights: {
      en: [
        "Private sunrise helicopter or hot-air balloon flight over Sigiriya Rock",
        "Stay at Ceylon Tea Trails Relais & Châteaux colonial bungalows with private butler",
        "Exclusive 4x4 private game drives in Yala National Park with master naturalists",
        "First-class scenic colonial observation train through the misty hill country",
        "Sunset yacht cruise along the historic ramparts of UNESCO Galle Fort",
      ],
      ko: [
        "시기리야 바위 요새 프라이빗 일출 열기구/헬리콥터 조망",
        "실론 티 트레일스(Ceylon Tea Trails) 릴레앤샤토 프라이빗 버틀러 방갈로 연박",
        "얄라 국립공원 전문 야생 생물학자 동행 프라이빗 4x4 지프 사파리",
        "안개 낀 구름 속 하일랜드 1등석 파노라마 관광 열차 탑승",
        "유네스코 갈레 요새 해안 프라이빗 선셋 요트 세일링",
      ],
    },
    included: {
      en: [
        "11 nights luxury accommodations (Relais & Châteaux, Aman, Jetwing Vil Uyana)",
        "VIP Airport Meet & Assist with fast-track immigration at Colombo BIA",
        "Dedicated private luxury Mercedes-Benz Sprinter / luxury SUV with senior chauffeur guide",
        "All gourmet breakfasts and curated multi-course dinners",
        "All private entrance fees, national park permits, and VIP experiences",
        "24/7 Senior Concierge & dedicated on-trip assistance",
      ],
      ko: [
        "11박 최고급 5성급 & 릴레앤샤토 부티크 호텔 숙박 (아만갈라, 티 트레일스 등)",
        "콜롬보 국제공항 VIP 공항 패스트트랙 입국 수속 의전",
        "전 일정 프라이빗 럭셔리 전용 차량(벤츠 스프린터/고급 SUV) 및 전문 가이드",
        "전 일정 조식 및 셰프 추천 특선 디너 코스 포함",
        "전 일정 국립공원 입장료, 프라이빗 지프 대여료, 주요 유적지 VIP 패스",
        "24시간 한국어 컨시어지 케어 & 실시간 일정 조율",
      ],
    },
    notIncluded: {
      en: [
        "International round-trip flights to Colombo",
        "Sri Lanka Electronic Travel Authorization (ETA) visa fees",
        "Personal alcoholic beverages & discretionary gratuities",
      ],
      ko: [
        "인천-콜롬보 국제선 왕복 항공권",
        "스리랑카 전자여행허가(ETA) 비자 발급비",
        "개인 음료/주류 및 매너 팁",
      ],
    },
    featuredHotels: [
      {
        name: "Water Garden Sigiriya",
        location: "Sigiriya",
        tier: "5-Star Luxury Villa Resort",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Ceylon Tea Trails",
        location: "Hatton / Central Highlands",
        tier: "Relais & Châteaux Heritage Bungalow",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Wild Coast Tented Lodge",
        location: "Yala National Park",
        tier: "Relais & Châteaux Safari Lodge",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Amangalla",
        location: "Galle Fort",
        tier: "Aman Luxury Heritage",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: { en: "Arrival in Colombo & Coastal Relaxation", ko: "콜롬보 도착 및 니곰보 프라이빗 휴식" },
        location: { en: "Colombo / Negombo", ko: "콜롬보 / 니곰보" },
        description: {
          en: "VIP arrival at Bandaranaike International Airport with fast-track clearance. Transfer to The Wallawwa, an 18th-century boutique manor house set in tropical gardens.",
          ko: "콜롬보 국제공항 도착 후 VIP 패스트트랙 입국 의전. 18세기 영국 식민지풍 헤리티지 부티크 매너 호텔 '더 왈라와'로 이동하여 여독을 풀고 프라이빗 웰컴 디너를 즐깁니다.",
        },
        hotel: "The Wallawwa (Boutique Luxury)",
        activities: ["VIP Airport Fast-Track", "Welcome Champagne Dinner", "Ayurvedic Spa Treatment"],
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: { en: "Journey to the Cultural Triangle & Dambulla Caves", ko: "문화 삼각지대로 이동 및 담불라 석굴사원" },
        location: { en: "Dambulla & Sigiriya", ko: "담불라 및 시기리야" },
        description: {
          en: "Chauffeured drive to the Cultural Triangle. Private exploration of the UNESCO Dambulla Cave Temple with a distinguished archaeologist.",
          ko: "전용 리무진으로 고대 문화 삼각지대로 이동. 전문 고고학자와 함께 유네스코 세계유산 담불라 황금 석굴사원의 2천 년 벽화와 불상을 둘러봅니다.",
        },
        hotel: "Water Garden Sigiriya",
        activities: ["Dambulla UNESCO Caves", "Private Archaeologist Guide", "Lakeside Sunset Cocktails"],
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: { en: "Sigiriya Lion Rock Sky Fortress & Minneriya Elephants", ko: "시기리야 바위 요새 등반 및 미네리야 야생 코끼리" },
        location: { en: "Sigiriya", ko: "시기리야" },
        description: {
          en: "Early morning private ascent of the magnificent 5th-century Sigiriya Citadel before the crowds. Afternoon private open-top jeep safari to witness the wild elephant gathering at Minneriya.",
          ko: "이른 아침 인파가 몰리기 전 5세기 카샤파 왕의 공중 요새 시기리야 라이온 록을 등반합니다. 오후에는 미네리야 국립공원에서 수백 마리의 야생 코끼리 무리를 만나는 프라이빗 지프 사파리를 진행합니다.",
        },
        hotel: "Water Garden Sigiriya",
        activities: ["Sigiriya Sky Citadel Ascent", "Frescoes Viewing", "Minneriya Wild Elephant Safari"],
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: { en: "Royal City of Kandy & Temple of the Sacred Tooth", ko: "고대 왕도 캔디 및 불치사 프라이빗 참배" },
        location: { en: "Kandy", ko: "캔디" },
        description: {
          en: "Scenic drive into the central hills of Kandy. Visit the Royal Botanical Gardens at Peradeniya and receive VIP private access to the evening ceremony at Sri Dalada Maligawa (Temple of the Sacred Tooth Relic).",
          ko: "산악 왕국 캔디로 이동. 페라데니야 왕립 식물원 산책 후, 부처님의 치아 사리가 모셔진 불치사(Temple of the Tooth)의 장엄한 저녁 푸자 의식을 VIP 프라이빗 구역에서 관람합니다.",
        },
        hotel: "W15 Hanthana Estate Kandy",
        activities: ["Royal Botanical Gardens", "VIP Temple of the Tooth Entry", "Private Kandyan Cultural Performance"],
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: { en: "Ascent to Ceylon Tea Trails in Hatton", ko: "실론 티 트레일스 하일랜드 입성" },
        location: { en: "Hatton / Dickoya", ko: "하튼 / 센트럴 하일랜드" },
        description: {
          en: "Ascend through cascading waterfalls to the world's most acclaimed tea retreat: Ceylon Tea Trails. Settle into your restored colonial bungalow with personal master chef and butler.",
          ko: "에메랄드빛 차밭과 폭포가 펼쳐지는 하튼 고원 지대로 이동. 세계 최고 수준의 릴레앤샤토 티 방갈로 '실론 티 트레일스'에 체크인하여 전담 버틀러의 극진한 서비스를 받습니다.",
        },
        hotel: "Ceylon Tea Trails (Castlereagh Bungalow)",
        activities: ["Castlereagh Lake Kayaking", "Traditional English High Tea", "Bespoke Chef's Five-Course Dinner"],
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 6,
        title: { en: "Master Tea Planter Experience & Misty Mountain Walks", ko: "마스터 티 플랜터 프라이빗 투어 & 산책" },
        location: { en: "Hatton", ko: "하튼" },
        description: {
          en: "Join the resident Tea Master for a private walk through century-old tea bushes, followed by an artisanal tea tasting in a historic factory. Afternoon relaxation by the panoramic mountain infinity pool.",
          ko: "수석 마스터 티 플랜터와 함께 최고급 실론 홍차 찻잎을 따보고, 100년 역사의 가공 공장에서 특별한 테이스팅 세션을 가집니다. 오후에는 호수가 내려다보이는 인피니티 풀에서 여유를 만끽합니다.",
        },
        hotel: "Ceylon Tea Trails (Castlereagh Bungalow)",
        activities: ["Private Tea Factory Experience", "Scenic Hill Country Walk", "Fireplace Wine & Whiskey Tasting"],
        image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 7,
        title: { en: "Iconic Hill Country Train Ride & Ella Gap", ko: "세계에서 가장 아름다운 산악 기차 & 엘라" },
        location: { en: "Nanu Oya to Ella", ko: "나누오야 - 엘라" },
        description: {
          en: "Board the vintage observation saloon train from Nanu Oya to Demodara, crossing the famous Nine Arch Bridge surrounded by misty pine forests. Sunset cocktails overlooking the breathtaking Ella Gap.",
          ko: "나누오야역에서 레트로 관광 열차의 1등석에 탑승하여 나인 아치 브리지(Nine Arch Bridge)를 건너며 장관을 감상합니다. 저녁에는 엘라 갭의 협곡 노을을 바라보며 시그니처 칵테일을 즐깁니다.",
        },
        hotel: "98 Acres Resort & Spa (Executive Suite)",
        activities: ["First-Class Highland Train Journey", "Nine Arch Bridge Photography", "Little Adam's Peak Sunset Hike"],
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 8,
        title: { en: "Descent to Yala National Park & Luxury Cocoon Tents", ko: "야생의 얄라 국립공원 & 와일드 코스트 텐티드 롯지" },
        location: { en: "Yala National Park", ko: "얄라 국립공원" },
        description: {
          en: "Descend from the highlands to the wild coastal savannah of Yala. Check in to the futuristic luxury cocoon suites at Wild Coast Tented Lodge where the jungle meets the Indian Ocean.",
          ko: "해안 사바나 얄라 국립공원으로 이동. 인도양 파도와 밀림이 맞닿은 세계적인 럭셔리 글램핑 롯지 '와일드 코스트 텐티드 롯지'의 코쿤 스위트에 체크인합니다.",
        },
        hotel: "Wild Coast Tented Lodge",
        activities: ["Afternoon Safari in Yala Block 1", "Leopard & Sloth Bear Tracking", "Beach Bonfire Dinner under Stars"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 9,
        title: { en: "Dawn Leopard Safari & Wild Coast Wilderness", ko: "새벽 표범 추적 사파리 & 정글 힐링" },
        location: { en: "Yala", ko: "얄라" },
        description: {
          en: "Dawn safari drive into Yala's premier leopard habitats before sunrise. Afternoon leisure at the bamboo-domed swimming pavilion followed by a private bush dinner.",
          ko: "새벽녘 표범의 활동 시간에 맞춰 전문 사파리 트래커와 함께 심층 사파리를 떠납니다. 오후에는 대나무 돔 수영장에서 휴식을 취하고 밤에는 정글 속 프라이빗 디너를 즐깁니다.",
        },
        hotel: "Wild Coast Tented Lodge",
        activities: ["Dawn Game Drive", "Bird Watching in Palatupana Lagoons", "Wilderness Spa Treatment"],
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 10,
        title: { en: "Southern Coast Drive & Historic Galle Fort", ko: "남부 해안 드라이브 & 유네스코 갈레 요새" },
        location: { en: "Galle & Weligama", ko: "갈레 & 웰리가마" },
        description: {
          en: "Drive along the palm-fringed southern coast past traditional stilt fishermen. Arrive at Galle Fort and check into Amangalla, a legendary sanctuary of colonial elegance.",
          ko: "전통 장대 낚시꾼들이 서 있는 황금빛 남부 해안 도로를 따라 유네스코 세계유산 갈레 요새로 이동. 300년 역사의 최고급 럭셔리 안식처 '아만갈라(Amangalla)'에 투숙합니다.",
        },
        hotel: "Amangalla / Cape Weligama",
        activities: ["Stilt Fishermen Encounter", "Private Galle Fort Architectural Walk", "Sunset Gin & Tonic on the Verandah"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 11,
        title: { en: "Private Yacht Charter & Ayurvedic Indulgence", ko: "프라이빗 요트 세일링 & 전통 아유르베다 테라피" },
        location: { en: "Galle & Mirissa", ko: "갈레 & 미리사" },
        description: {
          en: "Morning private catamaran cruise for blue whale and dolphin spotting. Afternoon holistic rejuvenation at the Amangalla Hydrotherapy Baths and private farewell dinner.",
          ko: "오전 프라이빗 카타마란 요트를 타고 푸른 인도양으로 나가 대왕고래와 돌고래 떼를 관찰합니다. 오후에는 아만갈라 전통 아유르베다 하이드로테라피와 특별한 페어웰 갈라 디너를 즐깁니다.",
        },
        hotel: "Amangalla",
        activities: ["Private Catamaran Whale Cruise", "The Baths at Amangalla Spa", "Private 7-Course Seafood Dinner"],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 12,
        title: { en: "Scenic Highway to Colombo & VIP Departure", ko: "콜롬보 시티 투어 및 VIP 귀국 의전" },
        location: { en: "Colombo", ko: "콜롬보" },
        description: {
          en: "Express private highway drive to Colombo. Curated shopping at luxury gem boutiques, Paradise Road, and Barefoot. Private transfer to BIA with VIP lounge departure.",
          ko: "고속도로를 통해 수도 콜롬보로 이동. 최고급 실론 사파이어 보석 부티크와 파라다이스 로드 갤러리 쇼핑 후, 공항 VIP 라운지 의전과 함께 편안하게 귀국길에 오릅니다.",
        },
        hotel: "Departure",
        activities: ["Colombo Luxury City & Gem Tour", "VIP Lounge Access", "Airport Fast-Track Departure"],
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "ultimate-sri-lanka-golf-escape",
    slug: "ultimate-sri-lanka-golf-escape",
    title: {
      en: "Ultimate Sri Lanka Golf & Luxury Escape",
      ko: "스리랑카 궁극의 챔피언십 럭셔리 골프 투어 10일",
    },
    subtitle: {
      en: "Championship golf amidst 6,000ft mountain mist, lakeside fairways, and ocean greens paired with 5-star colonial indulgence.",
      ko: "해발 1,800m 누와라엘리야, 빅토리아 호수 골프 리조트, 샹그릴라 함반토타 오션 코스를 아우르는 한국인 골퍼 맞춤형 최고급 투어.",
    },
    category: "golf",
    categoryLabel: { en: "Golf Holidays", ko: "골프 홀리데이" },
    durationDays: 10,
    durationNights: 9,
    startingPriceUSD: 4650,
    heroImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=85",
    cardImage: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: {
      en: "Designed for discerning international golfers and avid Korean golf travelers, this 10-day luxury itinerary unlocks Sri Lanka's four iconic championship courses: Royal Colombo Golf Club (est. 1879), Victoria Golf & Country Resort in Kandy (designed by Donald Steel), the highland Nuwara Eliya Golf Club at 6,000 feet, and the championship ocean course at Shangri-La Hambantota. Includes guaranteed tee times, VIP clubhouse privileges, dedicated golf vans, top caddies, and bespoke luxury spa recovery.",
      ko: "한국인 골퍼분들의 높은 안목에 맞춘 10일간의 스리랑카 챔피언십 럭셔리 골프 투어입니다. 1879년에 창립된 콜롬보 로열 골프 클럽, 도널드 스틸이 설계한 세계 100대 절경 빅토리아 골프 리조트, 해발 1,800m 피서지 누와라엘리야 골프 클럽, 그리고 인도양 파도를 마주하는 샹그릴라 함반토타 골프 리조트까지 5개 명문 코스에서 5~7회 라운드를 즐깁니다. 전용 골프 스프린터 차량, VIP 티타임 100% 보장, 최고급 캐디, 라운드 후 전신 아유르베다 마사지가 포함됩니다.",
    },
    highlights: {
      en: [
        "Play 5 championship rounds across Royal Colombo, Victoria Golf Resort, Nuwara Eliya, and Shangri-La",
        "Guaranteed priority morning tee times and top-rated experienced caddies",
        "Luxury golf transportation with custom golf-bag storage and refreshment bar",
        "Stay at luxury golf resorts including Shangri-La Golf Resort and Grand Hotel Nuwara Eliya",
        "Post-round golfer spa therapies and private whiskey tasting sessions",
      ],
      ko: [
        "스리랑카 4대 명문 코스 (콜롬보, 빅토리아, 누와라엘리야, 샹그릴라) 5~6회 라운드",
        "최적의 오전 VIP 티타임 100% 사전 확보 및 베테랑 싱글 캐디 배정",
        "골프백 전용 수납공간과 냉음료 바가 구비된 전용 벤츠 골프 리무진",
        "샹그릴라 골프 리조트 및 130년 전통 그랜드 호텔 프레스티지 스위트 숙박",
        "라운드 후 골퍼 전용 피로회복 딥티슈 아유르베다 스파 및 프리미엄 위스키 테이스팅",
      ],
    },
    included: {
      en: [
        "9 nights 5-star golf resort and heritage hotel stays",
        "5 Championship 18-hole green fees, caddie fees, and motorized golf carts",
        "Dedicated luxury Mercedes golf van with private chauffeur guide",
        "Daily lavish golfer breakfasts and curated gourmet dinners",
        "VIP airport fast-track service and golf bag handling",
        "KakaoTalk / WhatsApp Korean Concierge support 24/7",
      ],
      ko: [
        "9박 5성급 럭셔리 골프 리조트 및 헤리티지 스위트 숙박",
        "총 5회 18홀 그린피, 전동 카트비, 개인 캐디피 일체 포함",
        "골프 전용 럭셔리 밴(벤츠 스프린터) 및 전담 기사 겸 가이드",
        "전 일정 호텔 특식 조식 및 골퍼 맞춤형 프리미엄 석식",
        "공항 VIP 패스트트랙 및 골프백 전문 도어투도어 핸들링",
        "한국인 전담 24시간 카카오톡 실시간 컨시어지 지원",
      ],
    },
    notIncluded: {
      en: [
        "International flights to/from Colombo",
        "Personal golf club rentals (available on request)",
        "Gratuities for caddies and driver",
      ],
      ko: [
        "인천-콜롬보 국제선 항공권",
        "개인 골프 클럽 렌탈비 (현지 최신 클럽 대여 가능)",
        "캐디 및 기사 매너 팁",
      ],
    },
    featuredHotels: [
      {
        name: "Victoria Golf Resort Chalets",
        location: "Digana / Kandy",
        tier: "Luxury Golf Resort",
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "The Grand Hotel",
        location: "Nuwara Eliya",
        tier: "Colonial Luxury Heritage",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Shangri-La Hambantota Golf Resort",
        location: "Hambantota",
        tier: "5-Star Oceanfront Golf Resort",
        image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=600&q=80",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: { en: "Arrival & Royal Colombo Golf Club Warm-Up", ko: "콜롬보 도착 & 로열 콜롬보 골프 클럽 워밍업" },
        location: { en: "Colombo", ko: "콜롬보" },
        description: {
          en: "VIP arrival assistance at Colombo. Transfer to luxury hotel. Afternoon twilight 9-hole warm-up at the historic Royal Colombo Golf Club (founded 1879).",
          ko: "공항 VIP 패스트트랙 입국 후 콜롬보 호텔 체크인. 1879년에 지어진 140년 역사의 로열 콜롬보 골프 클럽에서 가벼운 9홀 일몰 워밍업 라운드를 진행합니다.",
        },
        hotel: "Cinnamon Grand Colombo (Executive Floor)",
        activities: ["VIP Airport Fast-Track", "Royal Colombo Golf Club Round", "Welcome Seafood Dinner at Ministry of Crab"],
        image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: { en: "Full 18-Hole Championship at Royal Colombo", ko: "로열 콜롬보 GC 18홀 정규 챔피언십 라운드" },
        location: { en: "Colombo", ko: "콜롬보" },
        description: {
          en: "Morning 18-hole championship round at Royal Colombo GC with premier caddies. Afternoon relaxation and transfer towards the misty foothills of Kandy.",
          ko: "오전 로열 콜롬보 정규 18홀 라운드. 도심 속 철도가 페어웨이를 가로지르는 독특한 명문 코스를 즐긴 후, 캔디 힐스로 이동합니다.",
        },
        hotel: "Victoria Golf Resort Luxury Chalets",
        activities: ["18-Hole Royal Colombo Round", "Clubhouse Lunch", "Scenic Drive to Kandy Victoria Valley"],
        image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: { en: "Championship Round at Victoria Golf Resort", ko: "빅토리아 골프 & 컨트리 리조트 1차 라운드" },
        location: { en: "Digana / Kandy", ko: "캔디 디가나" },
        description: {
          en: "Tee off on one of the 100 most scenic golf courses in the world, sculpted around Victoria Reservoir and majestic coconut hills. Designed by Donald Steel.",
          ko: "도널드 스틸이 설계하고 빅토리아 호수를 둘러싼 세계에서 가장 아름다운 코스 중 하나인 빅토리아 골프 리조트에서 전반 18홀 라운드를 즐깁니다.",
        },
        hotel: "Victoria Golf Resort Luxury Chalets",
        activities: ["18-Hole Victoria Golf Round", "Lake View Clubhouse Drinks", "Ayurvedic Sports Recovery Massage"],
        image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: { en: "Second Round at Victoria Golf & Kandy Highlights", ko: "빅토리아 골프 리조트 2차 라운드 & 캔디 관광" },
        location: { en: "Kandy", ko: "캔디" },
        description: {
          en: "Second morning round at Victoria Golf to master the challenging lakeside undulations. Afternoon visit to the Temple of the Sacred Tooth Relic.",
          ko: "코스를 완벽히 공략하기 위한 빅토리아 골프 2차 18홀 라운드. 오후에는 유네스코 세계유산 캔디 불치사를 방문하여 문화 탐방을 겸합니다.",
        },
        hotel: "Victoria Golf Resort Luxury Chalets",
        activities: ["18-Hole Victoria Golf Round 2", "Temple of the Tooth Visit", "Private Lakeside BBQ"],
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: { en: "Highland Drive to Nuwara Eliya (Little England)", ko: "해발 1,800m 누와라엘리야 '리틀 잉글랜드' 이동" },
        location: { en: "Nuwara Eliya", ko: "누와라엘리야" },
        description: {
          en: "Scenic climb through waterfalls and tea plantations to 6,000 feet altitude. Check in to the iconic colonial Grand Hotel and enjoy high tea on the lawn.",
          ko: "폭포와 차밭을 지나 해발 1,800m 고원 도시 누와라엘리야로 이동. 130년 역사의 영국 빅토리아풍 '더 그랜드 호텔'에 투숙하고 잔디 정원 하이티를 즐깁니다.",
        },
        hotel: "The Grand Hotel Nuwara Eliya (Presidential Wing)",
        activities: ["Tea Factory Tour", "High Tea on Colonial Lawn", "Nuwara Eliya Golf Club Clubhouse Dinner"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 6,
        title: { en: "Nuwara Eliya Golf Club at 6,000ft Altitude", ko: "해발 1,800m 구름 속 누와라엘리야 GC 18홀 라운드" },
        location: { en: "Nuwara Eliya", ko: "누와라엘리야" },
        description: {
          en: "Play the historic 1889 Nuwara Eliya Golf Club where crisp mountain air and pine-tree lined fairways create a truly unique Asian golfing experience.",
          ko: "1889년 개장한 아시아에서 가장 유서 깊은 고원 골프장 누와라엘리야 GC에서 18홀 라운드. 서늘하고 쾌적한 피서 기후와 편백나무 숲 사이를 가르는 짜릿한 티샷을 경험합니다.",
        },
        hotel: "The Grand Hotel Nuwara Eliya",
        activities: ["18-Hole Nuwara Eliya GC Round", "Billiards & Cigar Lounge", "Fireplace Multi-Course Dinner"],
        image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 7,
        title: { en: "Drive to the Southern Coast: Shangri-La Hambantota", ko: "남부 해안 샹그릴라 함반토타 골프 리조트 이동" },
        location: { en: "Hambantota", ko: "함반토타" },
        description: {
          en: "Descend from the mountains towards the sunny southern coast. Check in to the 5-star Shangri-La Golf Resort & Spa set along a pristine ocean bay.",
          ko: "산악 지대를 내려와 눈부신 인도양이 펼쳐진 남부 해안으로 이동. 18홀 전용 챔피언십 코스를 품은 5성급 특급 리조트 샹그릴라 함반토타에 체크인합니다.",
        },
        hotel: "Shangri-La Hambantota Golf Resort & Spa",
        activities: ["Sunset Beach Cocktails", "Chi Ayurvedic Spa Session", "Oceanfront Seafood Grill"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 8,
        title: { en: "Shangri-La Ocean Golf Course Championship Round", ko: "샹그릴라 함반토타 오션 코스 18홀 라운드" },
        location: { en: "Hambantota", ko: "함반토타" },
        description: {
          en: "18-hole round at Shangri-La Hambantota Golf Course, featuring coconut plantation dunes, salt pans, and stunning Indian Ocean views on the signature holes.",
          ko: "코코넛 야자수와 백사구, 인도양 파도가 넘실거리는 샹그릴라 함반토타 18홀 오션 챔피언십 코스에서 환상적인 라운드를 즐깁니다.",
        },
        hotel: "Shangri-La Hambantota Golf Resort & Spa",
        activities: ["18-Hole Shangri-La Golf Round", "Resort Lagoon Pool Relaxation", "Private Beachfront Dining"],
        image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 9,
        title: { en: "Optional Final Round or Luxury Coastal Tour in Galle", ko: "최종 파이널 라운드 또는 갈레 요새 관광" },
        location: { en: "Hambantota / Galle", ko: "함반토타 / 갈레" },
        description: {
          en: "Enjoy an optional sunrise 18-hole replay at Shangri-La or a scenic private tour to UNESCO Galle Fort. Afternoon transfer to coastal luxury villa.",
          ko: "샹그릴라에서 일출 18홀 파이널 라운드를 즐기거나 유네스코 세계유산 갈레 요새를 프라이빗 투어합니다. 저녁에는 갈레 해안 빌라에서 축하 파티를 엽니다.",
        },
        hotel: "Amangalla / Cape Weligama",
        activities: ["Optional 18-Hole Final Round", "Galle Fort Tour", "Farewell Golfer's Banquet"],
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 10,
        title: { en: "VIP Highway Transfer to Colombo & Farewell", ko: "VIP 고속도로 이동 및 인천행 귀국 의전" },
        location: { en: "Colombo", ko: "콜롬보" },
        description: {
          en: "Private chauffeured transfer along the Southern Expressway to Colombo BIA with fast-track check-in and VIP lounge access.",
          ko: "남부 고속도로를 통해 콜롬보 국제공항으로 편안하게 이동. VIP 패스트트랙과 라운지 의전을 받으며 귀국길에 오릅니다.",
        },
        hotel: "Departure",
        activities: ["VIP Airport Fast-Track", "Golf Luggage Assistance", "VIP Departure Lounge Access"],
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "wildlife-luxury-adventure",
    slug: "wildlife-luxury-adventure",
    title: {
      en: "Wild Ceylon: Leopards, Elephants & Coast 8 Days",
      ko: "와일드 실론: 야생 표범 & 코끼리 럭셔리 사파리 8일",
    },
    subtitle: {
      en: "The greatest biodiversity in Asia: private game drives in Yala and Wilpattu with master naturalists and Relais & Châteaux tented suites.",
      ko: "아시아 최고의 야생 밀집지 얄라와 윌파투 국립공원을 전문 생물학자와 탐험하는 하이엔드 글램핑 사파리.",
    },
    category: "wildlife",
    categoryLabel: { en: "Wildlife & Safari", ko: "사파리 & 자연" },
    durationDays: 8,
    durationNights: 7,
    startingPriceUSD: 3900,
    heroImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=2000&q=85",
    cardImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: {
      en: "Embark on an extraordinary wildlife odyssey through Sri Lanka's most pristine wilderness reserves. Track the elusive Sri Lankan leopard in Yala, witness the gathering of wild elephant herds in Minneriya, and explore the ancient ruins swallowed by dense jungles in Wilpattu. Stay in exclusive Relais & Châteaux tented lodges featuring plunge pools and gourmet open-fire dining.",
      ko: "스리랑카의 장엄한 야생을 가장 럭셔리하게 경험하는 8일간의 프라이빗 사파리 투어입니다. 얄라 국립공원에서 전 세계 최고 밀도의 스리랑카 표범과 느림보곰을 추적하고, 미네리야 호숫가에 모여드는 코끼리 떼를 만납니다. 릴레앤샤토 와일드 코스트 텐티드 롯지의 프라이빗 풀 코쿤 룸에서 머물며 정글 속 미식의 향연을 즐깁니다.",
    },
    highlights: {
      en: [
        "Private open-top 4x4 safaris with dedicated senior wildlife naturalists",
        "Overnight stays at Wild Coast Tented Lodge (Relais & Châteaux)",
        "Dawn leopard tracking in exclusive quieter zones of Yala & Lunugamvehera",
        "Minneriya National Park elephant gathering boat & jeep safari",
        "Blue whale watching cruise by private luxury catamaran off Mirissa",
      ],
      ko: [
        "수석 야생 생물학자 동행 프라이빗 4x4 오픈탑 지프 사파리",
        "세계적인 명성의 와일드 코스트 텐티드 롯지 코쿤 스위트 숙박",
        "얄라 및 루누감베헤라 비밀 구역 새벽 표범 추적",
        "미네리야 코끼리 집결지 호수 보트 & 지프 투어",
        "미리사 앞바다 프라이빗 카타마란 요트 대왕고래 탐사",
      ],
    },
    included: {
      en: [
        "7 nights luxury safari lodges and coastal boutique villas",
        "6 private 4x4 safari game drives with top trackers",
        "VIP airport fast-track and luxury 4WD chauffeured vehicle",
        "All meals, selected fine wines, and open-air bush dinners",
      ],
      ko: [
        "7박 최고급 사파리 롯지 및 해안 부티크 빌라 숙박",
        "총 6회 프라이빗 4x4 사파리 및 전문 트래커 전담",
        "공항 VIP 패스트트랙 및 전용 4WD 럭셔리 차량",
        "전 일정 식사, 하우스 와인 및 부시 다이닝 포함",
      ],
    },
    notIncluded: {
      en: ["International flights", "Visa fees", "Gratuities for safari trackers"],
      ko: ["국제선 항공권", "비자 발급비", "사파리 가이드 매너 팁"],
    },
    featuredHotels: [
      {
        name: "Wild Coast Tented Lodge",
        location: "Yala",
        tier: "Relais & Châteaux Luxury Lodge",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Jetwing Vil Uyana",
        location: "Sigiriya",
        tier: "Eco-Luxury Lake Chalets",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: { en: "Arrival & Transfer to Jetwing Vil Uyana", ko: "콜롬보 도착 및 제트윙 빌 우야나 이동" },
        location: { en: "Sigiriya", ko: "시기리야" },
        description: {
          en: "VIP arrival at Colombo. Scenic drive to the eco-luxury wetland villas of Jetwing Vil Uyana near Sigiriya.",
          ko: "공항 VIP 패스트트랙 통과 후 습지 생태계를 품은 럭셔리 리조트 제트윙 빌 우야나로 이동합니다.",
        },
        hotel: "Jetwing Vil Uyana",
        activities: ["VIP Meet & Assist", "Night Walk for Slender Loris"],
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: { en: "Minneriya Elephant Gathering Safari", ko: "미네리야 야생 코끼리 집결 사파리" },
        location: { en: "Minneriya", ko: "미네리야" },
        description: {
          en: "Private afternoon safari into Minneriya National Park to witness hundreds of Asian elephants grazing around the ancient reservoir.",
          ko: "미네리야 국립공원에서 수백 마리의 코끼리 가족이 물가로 모여드는 장관을 프라이빗 지프로 감상합니다.",
        },
        hotel: "Jetwing Vil Uyana",
        activities: ["Private 4x4 Elephant Safari", "Sunset Lake Drinks"],
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "romantic-sri-lanka-honeymoon",
    slug: "romantic-sri-lanka-honeymoon",
    title: {
      en: "Serenade in Serendib: Luxury Honeymoon 9 Days",
      ko: "세렌딥의 로맨스: 럭셔리 허니문 & 커플 여행 9일",
    },
    subtitle: {
      en: "Intimate cliffside plunge pools, candlelight tea estate dinners, scenic first-class train, and secluded private beaches.",
      ko: "절벽 위 프라이빗 풀빌라, 촛불 켜진 차밭 프라이빗 디너, 로맨틱 기차 여행과 청정 프라이빗 비치 휴양.",
    },
    category: "honeymoon",
    categoryLabel: { en: "Honeymoon & Romance", ko: "허니문 & 로맨스" },
    durationDays: 9,
    durationNights: 8,
    startingPriceUSD: 4200,
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    cardImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: {
      en: "Crafted exclusively for couples and honeymooners seeking sublime privacy, breathtaking natural beauty, and unmatched romance. Drift above the clouds at Ceylon Tea Trails, dine under the stars overlooking the Indian Ocean at Cape Weligama, and unwind in private spa pavilions with customized couples' wellness rituals.",
      ko: "최고의 프라이버시와 로맨스를 꿈꾸는 신혼부부 및 커플 여행객을 위한 9일간의 럭셔리 허니문입니다. 실론 티 트레일스의 구름 위 벽난로 방갈로부터 인도양이 270도 파노라마로 펼쳐지는 케이프 웰리가마(Cape Weligama) 오션 풀빌라까지, 둘만의 특별한 추억을 만들어 드립니다.",
    },
    highlights: {
      en: [
        "Private candlelight dinner in a colonial tea planter's garden",
        "Scenic helicopter transfer over Adam's Peak to the southern coast",
        "Cliffside Ocean Pool Villa stay at Cape Weligama",
        "Couples Ayurvedic rejuvenation at Amangalla hydrotherapy baths",
        "Private sunset champagne sailing on a luxury catamaran",
      ],
      ko: [
        "실론 티 플랜테이션 가든 프라이빗 촛불 디너",
        "아담스 피크와 차밭을 내려다보는 프라이빗 헬기 이동 (옵션)",
        "케이프 웰리가마 절벽 위 오션 풀빌라 숙박",
        "아만갈라 커플 아유르베다 스파 & 하이드로테라피",
        "프라이빗 럭셔리 카타마란 선셋 샴페인 크루즈",
      ],
    },
    included: {
      en: [
        "8 nights luxury pool villas and Relais & Châteaux suites",
        "Complimentary honeymoon champagne and tropical fruit baskets",
        "Private chauffeured luxury Mercedes vehicle throughout",
        "All gourmet breakfasts, couples massages, and private candlelit dinners",
      ],
      ko: [
        "8박 럭셔리 풀빌라 및 릴레앤샤토 스위트 숙박",
        "허니문 웰컴 샴페인 및 열대 과일 바스켓",
        "전 일정 프라이빗 전용 럭셔리 차량 및 가이드",
        "전 일정 조식, 커플 스파 마사지 2회, 프라이빗 캔들라이트 디너",
      ],
    },
    notIncluded: {
      en: ["International flights", "Personal expenses"],
      ko: ["국제선 항공료", "개인 경비"],
    },
    featuredHotels: [
      {
        name: "Ceylon Tea Trails",
        location: "Hatton",
        tier: "Relais & Châteaux Suite",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Cape Weligama",
        location: "Weligama",
        tier: "Relais & Châteaux Ocean Pool Villa",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: { en: "Arrival & Ceylon Tea Trails Retreat", ko: "콜롬보 도착 및 실론 티 트레일스 휴식" },
        location: { en: "Hatton", ko: "하튼" },
        description: {
          en: "VIP arrival and direct luxury transfer to the misty highlands of Ceylon Tea Trails.",
          ko: "공항 VIP 의전 후 구름 위의 지상낙원 실론 티 트레일스로 이동하여 프라이빗 버틀러의 환영을 받습니다.",
        },
        hotel: "Ceylon Tea Trails",
        activities: ["VIP Meet & Assist", "Welcome Champagne", "Private Fireplace Dinner"],
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];
