export type Language = "en" | "ko";

export interface Translations {
  nav: {
    home: string;
    about: string;
    tours: string;
    golf: string;
    destinations: string;
    experiences: string;
    blog: string;
    contact: string;
    planJourney: string;
    tagline: string;
  };
  hero: {
    tag: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    exploreBtn: string;
    customBtn: string;
    scrollHint: string;
    statsYears: string;
    statsBespoke: string;
    statsSatisfaction: string;
  };
  intro: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    signature: string;
    signatureRole: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    stat4Label: string;
    stat4Val: string;
  };
  whyUs: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  featured: {
    label: string;
    title: string;
    subtitle: string;
    viewAll: string;
    exploreTour: string;
    startingFrom: string;
    days: string;
    filterAll: string;
    filterLuxury: string;
    filterGolf: string;
    filterWildlife: string;
    filterHoneymoon: string;
  };
  golf: {
    label: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    koreanTitle: string;
    koreanDesc: string;
    coursesLabel: string;
    roundsLabel: string;
    nightsLabel: string;
    transportLabel: string;
    requestBtn: string;
  };
  experiences: {
    label: string;
    title: string;
    subtitle: string;
    exploreAll: string;
  };
  destinations: {
    label: string;
    title: string;
    subtitle: string;
    viewGuide: string;
    bestTimeToVisit: string;
    highlights: string;
    luxuryStays: string;
    filterAll: string;
  };
  reviews: {
    label: string;
    title: string;
    subtitle: string;
  };
  customCTA: {
    tag: string;
    title: string;
    desc: string;
    button: string;
    conciergeText: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    dates: string;
    travelers: string;
    interest: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    directTitle: string;
    directDesc: string;
    kakaoTitle: string;
    kakaoDesc: string;
    whatsappTitle: string;
    whatsappDesc: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    destinations: string;
    tourTypes: string;
    contactInfo: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterBtn: string;
    newsletterPlaceholder: string;
    copyright: string;
    allRightsReserved: string;
    privacy: string;
    terms: string;
  };
  modal: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    next: string;
    back: string;
    finish: string;
    selectInterest: string;
    selectDuration: string;
    selectHotel: string;
    selectGolfRounds: string;
    guestCount: string;
    approxDates: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      tours: "Signature Tours",
      golf: "Golf Holidays",
      destinations: "Destinations",
      experiences: "Experiences",
      blog: "Editorial Journal",
      contact: "Contact & Concierge",
      planJourney: "Plan Your Journey",
      tagline: "Discover Sri Lanka in Extraordinary Style",
    },
    hero: {
      tag: "LUXURY TRAVEL • SRI LANKA",
      title1: "DISCOVER SRI LANKA",
      title2: "IN EXTRAORDINARY",
      title3: "STYLE.",
      description:
        "From world-class golf championships and private wildlife safaris to secluded tea country estates and luxury ocean retreats, Lanka Luxe Journeys curates bespoke travel masterpieces designed exclusively for you.",
      exploreBtn: "Explore Signature Journeys",
      customBtn: "Plan a Custom Trip",
      scrollHint: "Scroll to Discover",
      statsYears: "Years of Luxury Travel Excellence",
      statsBespoke: "Private Chauffeur & VIP Access",
      statsSatisfaction: "Discerning Traveler Satisfaction",
    },
    intro: {
      label: "THE LANKA LUXE ESSENCE",
      title: "Sri Lanka, Curated Exclusively for You.",
      p1: "At Lanka Luxe Journeys, we believe genuine luxury lies in the art of seamless personalization. Sri Lanka is an island of timeless wonder—where mist-veiled colonial tea bungalows meet untouched wildlife reserves and tranquil turquoise bays.",
      p2: "Whether you seek to play on championship fairways sculpted into mountain clouds, witness the great elephant gathering from private luxury jeeps, or unwind in Relais & Châteaux heritage villas, our dedicated private concierges orchestrate every moment to perfection.",
      signature: "Roshan & Samantha Wickramasinghe",
      signatureRole: "Founders & Curators of Ceylon Luxury",
      stat1Label: "Guest Satisfaction Rate",
      stat1Val: "99.4%",
      stat2Label: "Years of High-End Hospitality",
      stat2Val: "16+",
      stat3Label: "Handpicked Luxury Boutique Lodges",
      stat3Val: "45+",
      stat4Label: "Private Dedicated Chauffeur Fleet",
      stat4Val: "100%",
    },
    whyUs: {
      label: "THE UNCOMPROMISING STANDARD",
      title: "WHY TRAVEL WITH LANKA LUXE JOURNEYS?",
      subtitle: "Every detail crafted with absolute discretion, peerless comfort, and deep local heritage.",
      items: [
        {
          num: "01",
          title: "Tailor-Made Journeys",
          desc: "No fixed templates. Every itinerary is individually hand-crafted around your rhythm, passions, and personal aesthetic.",
        },
        {
          num: "02",
          title: "Luxury Travel Expertise",
          desc: "Access to private estates, VIP airport fast-track, helipad transfers, and high-touch concierge care 24/7.",
        },
        {
          num: "03",
          title: "Golf Travel Specialists",
          desc: "Exclusive tee times, top-tier caddies, clubhouse privileges, and seamless transport for international golfers.",
        },
        {
          num: "04",
          title: "Handpicked 5-Star & Boutique Hotels",
          desc: "Relais & Châteaux tea bungalows, Aman luxury retreats, private safari tented suites, and cliffside ocean villas.",
        },
        {
          num: "05",
          title: "Private Luxury Transportation",
          desc: "Immaculate Mercedes sprinters, luxury SUVs, and English/Korean-fluent private chauffeur guides throughout.",
        },
        {
          num: "06",
          title: "Local Sri Lankan Insight",
          desc: "Private access to renowned archaeologists, master tea planters, wildlife naturalists, and celebrated culinary masters.",
        },
      ],
    },
    featured: {
      label: "CURATED ITINERARIES",
      title: "SIGNATURE JOURNEYS",
      subtitle: "Inspiring private travel masterworks crafted for discerning world travelers.",
      viewAll: "View All Tours",
      exploreTour: "Explore Journey",
      startingFrom: "Starting from",
      days: "Days",
      filterAll: "All Collections",
      filterLuxury: "Ultra Luxury",
      filterGolf: "Golf Holidays",
      filterWildlife: "Wildlife & Safari",
      filterHoneymoon: "Honeymoon & Romance",
    },
    golf: {
      label: "CHAMPIONSHIP FAIRWAYS & TROPICAL SPLENDOR",
      title: "PLAY THE WORLD'S MOST SCENIC GOLF JOURNEY.",
      subtitle:
        "Tee off amidst 19th-century colonial mountain mists at 6,000 feet, pristine lakeside fairways, and ocean-facing coastal greens with guaranteed VIP tee times and private luxury transfers.",
      exploreBtn: "Explore Golf Holidays",
      koreanTitle: "Luxury Golf Travel for Discerning Korean Visitors",
      koreanDesc:
        "한국인 골퍼를 위한 특별한 혜택: 전용 카카오톡 상담, 골프 백 맞춤형 럭셔리 전용 차량, 빅토리아 & 누와라엘리야 골프 클럽 VIP 티타임 보장 및 전용 한국어 가이드 지원.",
      coursesLabel: "Championship Courses",
      roundsLabel: "Custom Golf Rounds",
      nightsLabel: "Luxury Boutique Nights",
      transportLabel: "Chauffeured Sprinter / SUV",
      requestBtn: "Request a Golf Itinerary",
    },
    experiences: {
      label: "BESPOKE MOMENTS",
      title: "IMMERSIVE LUXURY EXPERIENCES",
      subtitle: "Unrivaled Sri Lankan moments that linger in memory for a lifetime.",
      exploreAll: "View All Experiences",
    },
    destinations: {
      label: "AN ENCHANTING ISLAND",
      title: "EXPLORE SRI LANKA",
      subtitle: "From ancient royal citadels and emerald tea valleys to golden southern shores and wild leopard sanctuaries.",
      viewGuide: "Explore Destination",
      bestTimeToVisit: "Best Time to Visit",
      highlights: "Key Highlights",
      luxuryStays: "Recommended Luxury Stays",
      filterAll: "All Regions",
    },
    reviews: {
      label: "GUEST VOICES",
      title: "WORDS FROM DISCERNING TRAVELERS",
      subtitle: "Memorable journeys curated for clients across Seoul, London, Sydney, Zurich, and beyond.",
    },
    customCTA: {
      tag: "YOUR BESPOKE ODYSSEY",
      title: "YOUR SRI LANKA. YOUR JOURNEY.",
      desc: "Tell us your travel dreams, preferred dates, and personal passions. Our private travel curators will design a personalized Sri Lankan itinerary exclusively for you.",
      button: "CREATE MY JOURNEY",
      conciergeText: "Direct consultation with our Senior Luxury Concierge within 12 hours.",
    },
    contact: {
      tag: "DIRECT CONCIERGE",
      title: "LET'S PLAN YOUR SRI LANKAN JOURNEY.",
      subtitle: "Connect directly with our luxury travel specialists for customized itineraries, VIP golf arrangements, and private villa bookings.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone / WhatsApp Number",
      country: "Country of Residence",
      dates: "Estimated Travel Dates",
      travelers: "Number of Travelers",
      interest: "Travel Style / Interest",
      message: "Tell us about your dream Sri Lanka journey...",
      submit: "SEND BESPOKE INQUIRY",
      submitting: "Sending Your Request...",
      success: "Thank you! Your luxury travel curator will contact you shortly.",
      directTitle: "Instant Direct Concierge",
      directDesc: "For urgent VIP arrangements or instant quotes, message us directly:",
      kakaoTitle: "KakaoTalk Concierge (한국어 전용)",
      kakaoDesc: "한국인 여행객 및 골퍼를 위한 실시간 1:1 카카오톡 상담 채널",
      whatsappTitle: "WhatsApp VIP Concierge",
      whatsappDesc: "Direct 24/7 WhatsApp chat with our Colombo Concierge Desk",
    },
    footer: {
      desc: "Lanka Luxe Journeys is Sri Lanka's premier bespoke luxury tour operator, specializing in private curated odysseys, championship golf holidays, high-end wildlife safaris, and exclusive Relais & Châteaux retreats.",
      quickLinks: "Quick Navigation",
      destinations: "Key Destinations",
      tourTypes: "Tour Collections",
      contactInfo: "Concierge Desks",
      newsletterTitle: "The Luxe Gazette",
      newsletterDesc: "Subscribe to receive curated Sri Lanka travel editorials, private villa openings, and exclusive golf offers.",
      newsletterBtn: "Subscribe",
      newsletterPlaceholder: "Your email address",
      copyright: "© 2026 Lanka Luxe Journeys. All Rights Reserved.",
      allRightsReserved: "Licensed Sri Lanka Tourism Development Authority (SLTDA) Luxury Operator.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    modal: {
      title: "Design Your Bespoke Journey",
      subtitle: "Share your preferences with our private travel curators",
      step1: "Travel Style & Experience",
      step2: "Trip Duration & Luxury Tier",
      step3: "Guest Information",
      next: "Next Step",
      back: "Previous",
      finish: "Submit Custom Journey Request",
      selectInterest: "What is your primary interest?",
      selectDuration: "Preferred Duration",
      selectHotel: "Preferred Hotel Grade",
      selectGolfRounds: "Do you plan to play golf?",
      guestCount: "Number of Guests",
      approxDates: "Approximate Travel Period",
    },
  },
  ko: {
    nav: {
      home: "홈",
      about: "회사 소개",
      tours: "시그니처 투어",
      golf: "골프 여행",
      destinations: "여행지",
      experiences: "특별한 경험",
      blog: "여행 매거진",
      contact: "문의 & 컨시어지",
      planJourney: "맞춤 여행 상담",
      tagline: "스리랑카를 만나는 가장 품격 있는 방법",
    },
    hero: {
      tag: "최고급 럭셔리 여행 • 스리랑카",
      title1: "스리랑카를 만나는",
      title2: "가장 품격 있고",
      title3: "특별한 여정.",
      description:
        "세계적인 챔피언십 골프 코스부터 야생 코끼리 프라이빗 사파리, 구름 위의 홍차 플랜테이션 헤리티지 빌라, 프라이빗 인도양 리조트까지—랑카 럭스 저니가 오직 당신만을 위한 최고의 맞춤 여행을 완성합니다.",
      exploreBtn: "시그니처 투어 둘러보기",
      customBtn: "1:1 맞춤 여행 설계",
      scrollHint: "아래로 스크롤하여 탐색",
      statsYears: "스리랑카 럭셔리 여행 전문",
      statsBespoke: "전 일정 프라이빗 전용 리무진 & VIP 의전",
      statsSatisfaction: "VIP 고객 만족도 99.4%",
    },
    intro: {
      label: "LANKA LUXE 철학",
      title: "오직 당신만을 위해 큐레이션된 스리랑카.",
      p1: "랑카 럭스 저니(Lanka Luxe Journeys)는 진정한 럭셔리가 '완벽한 맞춤형 서비스'에서 비롯된다고 믿습니다. 스리랑카는 100년 역사의 영국 식민지풍 티 방갈로, 광활한 국립공원의 야생 표범과 코끼리, 에메랄드빛 인도양이 공존하는 신비로운 낙원입니다.",
      p2: "산림 속 해발 1,800m에서 즐기는 안개 자욱한 골프 라운드, 5성급 릴레앤샤토(Relais & Châteaux) 프라이빗 빌라 휴식, 전용 전담 기사 겸 가이드의 프리미엄 의전까지—처음부터 끝까지 당신의 품격에 걸맞은 여행을 선사합니다.",
      signature: "로샨 & 사만다 위크라마싱헤",
      signatureRole: "Lanka Luxe Journeys 창립자 & 럭셔리 총괄 디렉터",
      stat1Label: "VIP 고객 만족도",
      stat1Val: "99.4%",
      stat2Label: "럭셔리 여행 경력",
      stat2Val: "16년+",
      stat3Label: "엄선된 5성급 & 부티크 호텔",
      stat3Val: "45곳+",
      stat4Label: "100% 프라이빗 전용 차량",
      stat4Val: "100%",
    },
    whyUs: {
      label: "타협하지 않는 럭셔리 기준",
      title: "왜 랑카 럭스 저니인가요?",
      subtitle: "철저한 프라이버시, 완벽한 편안함, 현지 최고 수준의 VIP 서비스를 약속합니다.",
      items: [
        {
          num: "01",
          title: "100% 맞춤형 개인 여행 (Tailor-Made)",
          desc: "정형화된 패키지가 아닌, 고객님의 취향과 일정에 맞춰 단 1명을 위한 독창적인 여정을 설계합니다.",
        },
        {
          num: "02",
          title: "하이엔드 럭셔리 여행 전문성",
          desc: "공항 VIP 패스트트랙, 프라이빗 헬기 이동, 24시간 한국어 전담 컨시어지 지원으로 빈틈없는 편안함을 제공합니다.",
        },
        {
          num: "03",
          title: "스리랑카 최고 골프 투어 전문가",
          desc: "빅토리아, 누와라엘리야, 콜롬보 등 스리랑카 5대 명문 골프장 보장 티타임, 전용 골프 스프린터 차량, 베스트 캐디 배정.",
        },
        {
          num: "04",
          title: "엄선된 5성급 & 럭셔리 부티크 호텔",
          desc: "실론 티 트레일스(Ceylon Tea Trails), 아만(Aman) 리조트, 와일드 코스트 럭셔리 텐티드 롯지 등 최상급 숙소만 선정.",
        },
        {
          num: "05",
          title: "프라이빗 럭셔리 전용 차량 & 가이드",
          desc: "벤츠 스프린터, 최신형 고급 SUV와 함께 숙련된 영어/한국어 가이드가 여행 내내 안전하고 품격 있게 모십니다.",
        },
        {
          num: "06",
          title: "현지 심층 네트워크 & 특별한 혜택",
          desc: "일반 여행객이 접근할 수 없는 비공개 역사 유적 프라이빗 투어, 전문 야생 생물학자 동행 사파리 등 독점 프로그램.",
        },
      ],
    },
    featured: {
      label: "엄선된 럭셔리 코스",
      title: "시그니처 여정 컬렉션",
      subtitle: "전 세계 여행 애호가들이 극찬한 스리랑카 최고의 프리미엄 투어 코스입니다.",
      viewAll: "모든 투어 보기",
      exploreTour: "일정 상세 보기",
      startingFrom: "시작 가격",
      days: "일",
      filterAll: "전체 컬렉션",
      filterLuxury: "울트라 럭셔리",
      filterGolf: "골프 & 휴양",
      filterWildlife: "사파리 & 자연",
      filterHoneymoon: "허니문 & 로맨스",
    },
    golf: {
      label: "구름 위의 챔피언십 페어웨이",
      title: "세계에서 가장 아름다운 스리랑카 골프 여행.",
      subtitle:
        "130년 역사의 해발 1,800m 누와라엘리야 골프장, 빅토리아 호수를 품은 빅토리아 골프 리조트, 인도양 바다를 조망하는 샹그릴라 함반토타까지—최상의 VIP 골프 투어를 경험하세요.",
      exploreBtn: "골프 여행 자세히 보기",
      koreanTitle: "한국인 여행객 및 골퍼를 위한 특별한 혜택",
      koreanDesc:
        "한국인 골퍼 전용 혜택: 카카오톡 실시간 1:1 빠른 상담, 골프백 수납에 완벽한 럭셔리 밴, 티타임 100% 사전 확보, 최고급 골프 리조트 숙박 및 한국어 안내 지원.",
      coursesLabel: "스리랑카 5대 명문 코스",
      roundsLabel: "맞춤형 골프 라운드",
      nightsLabel: "최고급 5성급 리조트 연박",
      transportLabel: "골프 전용 럭셔리 스프린터",
      requestBtn: "맞춤 골프 일정 문의하기",
    },
    experiences: {
      label: "독보적인 프라이빗 체험",
      title: "스리랑카 럭셔리 익스피리언스",
      subtitle: "평생 잊지 못할 벅찬 감동을 선사하는 Lanka Luxe만의 특별한 체험 컬렉션.",
      exploreAll: "모든 체험 보기",
    },
    destinations: {
      label: "인도양의 빛나는 보석",
      title: "스리랑카 명소 탐험",
      subtitle: "신비로운 바위 요새 시기리야부터 안개 낀 차밭, 갈레 요새, 야생의 얄라 국립공원까지.",
      viewGuide: "여행지 가이드 보기",
      bestTimeToVisit: "최적 여행 시기",
      highlights: "주요 하이라이트",
      luxuryStays: "추천 럭셔리 숙소",
      filterAll: "모든 지역",
    },
    reviews: {
      label: "고객 후기",
      title: "VIP 고객님들의 생생한 리뷰",
      subtitle: "서울, 런던, 시드니, 취리히 등 전 세계 프리미엄 고객들이 남겨주신 솔직한 평가입니다.",
    },
    customCTA: {
      tag: "오직 당신만을 위한 여정",
      title: "YOUR SRI LANKA. YOUR JOURNEY.",
      desc: "원하시는 일정, 여행 스타일, 관심사(골프, 사파리, 휴양 등)를 알려주시면 전담 럭셔리 여행 큐레이터가 가장 완벽한 맞춤 일정을 제안해 드립니다.",
      button: "맞춤 여행 상담 시작하기",
      conciergeText: "문의 접수 후 12시간 이내에 전담 시니어 컨시어지가 안내드립니다.",
    },
    contact: {
      tag: "VIP 전담 컨시어지",
      title: "스리랑카 럭셔리 여행을 시작하세요.",
      subtitle: "맞춤 여행 견적, 골프 패키지, 프라이빗 빌라 예약에 대해 언제든지 편안하게 문의해 주세요.",
      name: "성함 (영문 또는 한글)",
      email: "이메일 주소",
      phone: "연락처 / 카카오톡 ID",
      country: "거주 국가",
      dates: "예상 여행 시기 (예: 2026년 10월 중)",
      travelers: "인원 수 (성인 / 아동)",
      interest: "여행 테마 / 관심 분야",
      message: "원하시는 여행 스타일, 특별 요청 사항 등을 자유롭게 적어주세요...",
      submit: "맞춤 여행 견적 요청하기",
      submitting: "견적 요청 전송 중...",
      success: "감사합니다! 랑카 럭스 전담 큐레이터가 신속하게 연락드리겠습니다.",
      directTitle: "실시간 빠른 상담 채널",
      directDesc: "빠른 견적이나 실시간 상담이 필요하신 경우 아래 메신저로 바로 연락주세요:",
      kakaoTitle: "카카오톡 1:1 상담 (한국인 전담)",
      kakaoDesc: "한국인 여행객 및 골퍼를 위한 실시간 카카오톡 채널 (ID: LankaLuxeJourneys)",
      whatsappTitle: "왓츠앱 VIP 컨시어지 (24/7)",
      whatsappDesc: "콜롬보 본사 VIP 데스크 실시간 영어 왓츠앱 상담 (+94 77 123 4567)",
    },
    footer: {
      desc: "랑카 럭스 저니(Lanka Luxe Journeys)는 스리랑카 정부 관광청(SLTDA) 공식 인가 프리미엄 럭셔리 여행사로, 고품격 맞춤 여행, 명문 골프 투어, 릴레앤샤토 부티크 빌라 휴양을 전문으로 합니다.",
      quickLinks: "빠른 메뉴",
      destinations: "인기 여행지",
      tourTypes: "테마별 여행",
      contactInfo: "컨시어지 센터",
      newsletterTitle: "럭스 저널 뉴스레터",
      newsletterDesc: "스리랑카 럭셔리 여행 소식, 시크릿 빌라 오프닝, VIP 골프 특가 소식을 정기적으로 받아보세요.",
      newsletterBtn: "구독하기",
      newsletterPlaceholder: "이메일 주소를 입력하세요",
      copyright: "© 2026 Lanka Luxe Journeys. All Rights Reserved.",
      allRightsReserved: "스리랑카 관광개발청(SLTDA) 공식 허가 럭셔리 오퍼레이터.",
      privacy: "개인정보 처리방침",
      terms: "이용 약관",
    },
    modal: {
      title: "프라이빗 맞춤 여행 설계",
      subtitle: "원하시는 여행 취향을 선택하시면 최적의 일정을 제안해 드립니다.",
      step1: "여행 테마 및 취향",
      step2: "여행 기간 및 호텔 등급",
      step3: "신청자 정보 입력",
      next: "다음 단계",
      back: "이전 단계",
      finish: "맞춤 여정 설계 신청하기",
      selectInterest: "가장 관심 있는 여행 테마는 무엇인가요?",
      selectDuration: "희망 여행 기간",
      selectHotel: "선호 호텔 등급",
      selectGolfRounds: "골프 라운드를 포함하시겠습니까?",
      guestCount: "여행 인원",
      approxDates: "희망 출발 시기",
    },
  },
};
