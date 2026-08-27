export interface Experience {
  id: string;
  title: { en: string; ko: string };
  category: string;
  duration: string;
  location: { en: string; ko: string };
  image: string;
  description: { en: string; ko: string };
  features: { en: string[]; ko: string[] };
}

export const experiencesData: Experience[] = [
  {
    id: "private-wildlife-safaris",
    title: { en: "Private Wildlife Safaris & Leopard Tracking", ko: "프라이빗 4x4 야생 표범 & 코끼리 사파리" },
    category: "Wildlife & Nature",
    duration: "Full or Half Day",
    location: { en: "Yala & Wilpattu National Parks", ko: "얄라 & 윌파투 국립공원" },
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "Customized luxury open-top 4x4 vehicles with senior naturalists, high-resolution Swarovski binoculars, cold refreshments, and access to private game corridors.",
      ko: "최고급 맞춤형 오픈탑 사파리 지프, 수석 야생 생물학자 동행, 스와로브스키 프리미엄 쌍안경 제공 및 프라이빗 트레일 탐사.",
    },
    features: {
      en: ["Senior Wildlife Biologist Guide", "High-End Optics Provided", "Bush Breakfast & Cold Champagne", "Custom Open-Side 4x4 Cruiser"],
      ko: ["수석 야생 생물학자 전담 가이드", "최고급 망원경/쌍안경 무료 대여", "정글 속 프라이빗 샴페인 조식", "편안한 가죽 시트 커스텀 4x4 지프"],
    },
  },
  {
    id: "luxury-train-journeys",
    title: { en: "Highland Luxury Scenic Train Journeys", ko: "구름 속 파노라마 하일랜드 럭셔리 기차 여행" },
    category: "Scenic & Heritage",
    duration: "3 - 4 Hours",
    location: { en: "Kandy to Nuwara Eliya & Ella", ko: "캔디 - 누와라엘리야 - 엘라" },
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "First-class vintage observation saloon reservations winding through tea-covered mountains, cascading waterfalls, and crossing the iconic Nine Arch Bridge.",
      ko: "안개 자욱한 차밭과 폭포, 나인 아치 브리지를 통과하는 세계에서 가장 아름다운 1등석 레트로 관광 열차 전용 좌석 예약.",
    },
    features: {
      en: ["Guaranteed 1st Class Saloon Seats", "Chauffeured Luggage Transfer Between Stations", "Curated Highland Picnic Hamper", "Station VIP Meet & Assist"],
      ko: ["1등석 파노라마 전망 좌석 100% 확보", "역 간 무거운 수하물 전용 차량 이동", "실론 수제 피크닉 런치 박스 제공", "기차역 전담 VIP 승하차 의전"],
    },
  },
  {
    id: "tea-country-escapes",
    title: { en: "Relais & Châteaux Tea Country Escapes", ko: "릴레앤샤토 티 플랜터 헤리티지 이스케이프" },
    category: "Heritage & Living",
    duration: "Multi-Day Retreat",
    location: { en: "Ceylon Tea Trails, Hatton", ko: "실론 티 트레일스, 하튼" },
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "Stay in restored 19th-century colonial tea bungalows with private butlers, open fireplaces, infinity pools, and master tea maker tastings.",
      ko: "19세기 영국 식민지풍 티 방갈로에서 즐기는 프라이빗 버틀러 서비스, 벽난로 다이닝, 호수 전망 인피니티 풀 및 마스터 티 테이스팅.",
    },
    features: {
      en: ["Private Planter's Bungalow & Butler", "Artisanal Tea Factory Masterclass", "Lakeside Kayaking & Croquet", "Chef's Five-Course Wine Dinners"],
      ko: ["전용 버틀러가 상주하는 독채 방갈로", "홍차 마스터의 프라이빗 티 클래스", "호수 카약 및 잔디 크로케", "5코스 셰프 특선 와인 페어링 디너"],
    },
  },
  {
    id: "private-beach-retreats",
    title: { en: "Exclusive Indian Ocean Beach & Cliff Retreats", ko: "인도양 프라이빗 오션 & 절벽 풀빌라 휴양" },
    category: "Ocean & Coastal",
    duration: "Multi-Day Leisure",
    location: { en: "Cape Weligama, Tangalle & Bentota", ko: "케이프 웰리가마, 탕골, 벤토타" },
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "Cliffside ocean villas, private infinity pools, secluded turquoise coves, and direct yacht charters along Sri Lanka's sun-drenched south coast.",
      ko: "인도양이 270도 펼쳐지는 절벽 위 프라이빗 풀빌라, 한적한 에메랄드빛 프라이빗 코브 해변 및 전용 요트 세일링.",
    },
    features: {
      en: ["Cliffside Ocean View Private Villas", "Dedicated 24/7 Villa Butler", "Private Sunset Catamaran Sailing", "Oceanfront Candlelight Dining"],
      ko: ["절벽 위 파노라마 오션뷰 풀빌라", "24시간 전담 빌라 버틀러", "프라이빗 선셋 카타마란 요트", "해변가 단독 캔들라이트 디너"],
    },
  },
  {
    id: "cultural-experiences",
    title: { en: "Private Archaeologist-Led Cultural Expeditions", ko: "전문 고고학자와 함께하는 역사 유적 탐방" },
    category: "Culture & History",
    duration: "Half or Full Day",
    location: { en: "Sigiriya, Polonnaruwa & Anuradhapura", ko: "시기리야, 폴론나루와, 아누라다푸라" },
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "Skip the queues with VIP private access to ancient royal citadels, sacred temples, and secluded ruins guided by leading Sri Lankan historians.",
      ko: "줄 서지 않는 VIP 패스로 유네스코 고대 유적지, 천년 사원, 비공개 발굴지를 스리랑카 최고 역사학자의 해설과 함께 탐방합니다.",
    },
    features: {
      en: ["Leading University Archaeologist Guide", "VIP Access to Restricted Temple Zones", "Ancient Monastery Meditation Session", "Curated Heritage Audio & Reading Kits"],
      ko: ["스리랑카 국립대 고고학 교수 해설", "사원 비공개 구역 특별 VIP 입장", "천년 고찰 프라이빗 스님 명상 세션", "한국어/영어 큐레이션 가이드북"],
    },
  },
  {
    id: "ayurveda-wellness",
    title: { en: "Holistic Ayurveda & Bespoke Wellness Retreats", ko: "정통 아유르베다 & 홀리스틱 웰니스 리트릿" },
    category: "Wellness & Spa",
    duration: "3 to 14 Days",
    location: { en: "Amangalla, Santani & Bentota", ko: "아만갈라, 산타니, 벤토타" },
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
    description: {
      en: "Consultations with resident Ayurvedic physicians, tailor-made herbal remedies, yoga pavilions with mountain vistas, and pure organic nutrition.",
      ko: "전담 아유르베다 한의사의 맞춤 체질 진단(도샤), 100% 천연 약초 오일 트리트먼트, 산맥을 바라보는 일출 요가 및 오가닉 디톡스 식단.",
    },
    features: {
      en: ["Resident Ayurvedic Doctor Diagnosis", "Custom Daily Herbal Oil Therapies", "Sunrise Yoga & Pranayama Breathing", "Personalized Ayurvedic Cuisine"],
      ko: ["전문 아유르베다 닥터 1:1 체질 진단", "맞춤 천연 허브 오일 마사지", "일출 요가 및 프라나야마 호흡 수련", "체질별 맞춤형 오가닉 힐링 다이닝"],
    },
  },
];
