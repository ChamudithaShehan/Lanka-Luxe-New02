export interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; ko: string };
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  excerpt: { en: string; ko: string };
  content: { en: string; ko: string };
  featured?: boolean;
}

export const blogData: BlogPost[] = [
  {
    id: "korean-golf-guide-sri-lanka",
    slug: "korean-golf-guide-sri-lanka",
    title: {
      en: "The Definitive Guide to Golfing in Sri Lanka: Mountain Mists to Ocean Links",
      ko: "스리랑카 럭셔리 골프 완벽 가이드: 해발 1,800m 고원부터 인도양 오션 코스까지",
    },
    category: "Golf in Sri Lanka",
    readTime: "7 min read",
    date: "August 2026",
    author: "Kim Min-Seok (Senior Golf Travel Director)",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    excerpt: {
      en: "Why international and Korean golfers are falling in love with Sri Lanka's 19th-century colonial mountain courses, Donald Steel designs, and uncrowded luxury fairways.",
      ko: "한국인 골퍼들이 왜 스리랑카 골프에 열광할까요? 130년 전통의 서늘한 고원 코스 누와라엘리야부터 세계 100대 절경 빅토리아, 인도양 파도 앞 샹그릴라까지 스리랑카 골프 여행의 모든 것을 공개합니다.",
    },
    content: {
      en: `Sri Lanka is rapidly becoming the world's most enchanting undiscovered golf destination. While Southeast Asian courses can often feel overcrowded in high season, Sri Lanka offers unhurried championship fairways steeped in colonial heritage.

### 1. Nuwara Eliya Golf Club: 6,000 Feet Above Sea Level
Founded in 1889, playing golf in Nuwara Eliya feels like stepping straight into the Scottish Highlands. The temperature hovers between 15°C and 20°C year-round, offering an invigorating escape from the tropical heat. The crisp mountain air allows balls to travel noticeably farther.

### 2. Victoria Golf & Country Resort: Voted Top 100 in the World
Designed by legendary British course architect Donald Steel, Victoria is an 18-hole championship Par 73 marvel. Sculpted across rolling green hills alongside the Victoria Reservoir, every single hole offers breathtaking vistas of the Knuckles Mountain Range.

### 3. Shangri-La Hambantota: Oceanfront Luxury
For those seeking a tropical coastal swing, Shangri-La Hambantota features Sri Lanka's newest 18-hole championship resort course. The finishing holes run directly along the sparkling blue waters of the Indian Ocean.

### Dedicated Services for Korean Visitors
Lanka Luxe Journeys provides Korean-speaking concierge support, custom Mercedes-Benz vans built for golf bags, guaranteed priority tee times, and seamless luggage handling.`,
      ko: `스리랑카는 최근 프리미엄 해외 골프를 즐기는 한국인 골퍼들 사이에서 가장 뜨겁게 주목받는 '히든 럭셔리 골프 명소'입니다. 동남아 골프장의 번잡함과 쫓기는 플레이에서 벗어나, 여유롭고 품격 있는 18홀 라운드를 경험할 수 있습니다.

### 1. 해발 1,800m의 피서 골프: 누와라엘리야 골프 클럽 (1889년 창설)
130년이 넘는 역사를 지닌 아시아 최고(最古) 골프장 중 하나입니다. 연중 15~20도의 쾌적하고 서늘한 기후 속에서 울창한 침엽수림 사이로 시원한 샷을 날릴 수 있으며, 고지대 특성상 비거리가 1~2클럽 더 나가는 짜릿한 손맛을 경험할 수 있습니다.

### 2. 세계 100대 절경: 빅토리아 골프 & 컨트리 리조트
세계적인 코스 거장 도널드 스틸이 설계한 파 73 코스로, 빅토리아 호수와 너클스 산맥의 능선이 360도 파노라마로 펼쳐집니다. 6번 홀의 절벽 티샷은 골프 인생 최고의 순간으로 손꼽힙니다.

### 3. 인도양을 마주하는 샹그릴라 함반토타 오션 코스
5성급 샹그릴라 리조트 내에 위치한 18홀 오션 챔피언십 코스로, 야자수 백사구와 에메랄드빛 인도양 파도를 마주하며 럭셔리한 휴양 골프를 즐길 수 있습니다.

### 한국인 골퍼를 위한 랑카 럭스 저니만의 특별한 혜택
- 골프백 수납에 완벽한 전용 벤츠 스프린터 리무진 지원
- 24시간 실시간 카카오톡 한국어 컨시어지
- 오전 황금 VIP 티타임 100% 사전 확보
- 라운드 후 전신 아유르베다 피로회복 스파 코스 포함`,
    },
  },
  {
    id: "luxury-train-travel-sri-lanka",
    slug: "luxury-train-travel-sri-lanka",
    title: {
      en: "Riding the Clouds: The Ultimate Guide to Sri Lanka's Highland Train",
      ko: "구름 위를 달리는 열차: 스리랑카 하일랜드 1등석 기차 완벽 안내",
    },
    category: "Luxury Travel",
    readTime: "5 min read",
    date: "July 2026",
    author: "Elena Rostova (Travel Editor)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    excerpt: {
      en: "From private observation carriages to crossing the Demodara Nine Arch Bridge, discover how to experience Sri Lanka's iconic rail journey in supreme comfort.",
      ko: "복잡한 대중 열차가 아닌 1등석 전용 파노라마 전망석과 전담 수하물 도어투도어 서비스로 누리는 세계 최고의 기차 여행.",
    },
    content: {
      en: `The railway connecting Kandy to Ella is widely praised as one of the world's most breathtaking scenic journeys. Built in the late 19th century by British engineers to transport Ceylon tea down to Colombo's port, today it provides travelers with unmatched panoramas of emerald tea slopes, rushing waterfalls, and misty pine valleys.`,
      ko: `캔디에서 누와라엘리야를 지나 엘라로 이어지는 산악 철도는 내셔널 지오그래픽이 선정한 세계에서 가장 아름다운 기차 노선 중 하나입니다. 19세기 영국 식민지 시절 고원 지대의 홍차를 콜롬보 항구로 운송하기 위해 건설된 이 철도는 오늘날 전 세계 여행자들에게 잊지 못할 파노라마를 선사합니다.`,
    },
  },
  {
    id: "relais-chateaux-tea-bungalows",
    slug: "relais-chateaux-tea-bungalows",
    title: {
      en: "Living the Planter's Dream: Inside Ceylon Tea Trails",
      ko: "19세기 티 플랜터의 품격: 실론 티 트레일스 릴레앤샤토 심층 탐방",
    },
    category: "Luxury Hotels",
    readTime: "6 min read",
    date: "June 2026",
    author: "Samantha Wickramasinghe (Curator)",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    excerpt: {
      en: "Explore how five restored colonial bungalows in the Bogawantalawa Valley redefined luxury hospitality in South Asia.",
      ko: "캐슬레이 호수를 굽어보는 5채의 역사적인 영국풍 티 방갈로와 프라이빗 버틀러가 선사하는 궁극의 힐링.",
    },
    content: {
      en: `Perched at an altitude of 1,250 meters in Sri Lanka's panoramic Ceylon tea country, Ceylon Tea Trails is South Asia's first Relais & Châteaux property. Comprising five restored colonial planters' residences—Castlereagh, Summerville, Norwood, Tientsin, and Dunkeld—each bungalow exudes quintessential British country-house elegance.`,
      ko: `해발 1,250m 보가완탈라와 밸리에 위치한 실론 티 트레일스는 남아시아 최초의 릴레앤샤토(Relais & Châteaux) 회원사입니다. 캐슬레이, 서머빌, 노우드, 티엔친, 둔켈트 5채의 복원된 티 플랜터 방갈로는 100년 전 영국 귀족의 별장에 온 듯한 고풍스러운 우아함을 자랑합니다.`,
    },
  },
];
