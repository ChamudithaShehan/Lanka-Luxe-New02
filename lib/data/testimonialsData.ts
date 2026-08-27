export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  tourTaken: { en: string; ko: string };
  date: string;
  rating: number;
  avatar: string;
  quote: { en: string; ko: string };
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "Park Min-Jun & Lee Ji-Woo",
    country: "Seoul, South Korea",
    flag: "🇰🇷",
    tourTaken: {
      en: "Ultimate Sri Lanka Golf & Luxury Escape (10 Days)",
      ko: "스리랑카 챔피언십 럭셔리 골프 투어 10일",
    },
    date: "May 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: {
      en: "Every detail of our Sri Lanka journey was orchestrated beyond 5 stars. From our private Mercedes van with dedicated golf bag space to priority tee times at Victoria Golf and Nuwara Eliya, everything exceeded our wildest expectations. The 24/7 KakaoTalk concierge made communication effortless.",
      ko: "빅토리아 골프 리조트의 환상적인 풍경과 1,800m 누와라엘리야에서의 서늘한 라운드는 평생 잊지 못할 최고의 경험이었습니다. 전용 벤츠 스프린터에 골프백을 싣고 전담 기사님의 의전을 받으며 여행하니 피로감이 전혀 없었습니다. 카카오톡으로 실시간 소통해 주신 컨시어지 팀에 깊이 감사드립니다.",
    },
  },
  {
    id: "review-2",
    name: "Lord & Lady Arthur Cavendish",
    country: "London, United Kingdom",
    flag: "🇬🇧",
    tourTaken: {
      en: "Luxury Sri Lanka Discovery Odyssey (12 Days)",
      ko: "스리랑카 럭셔리 그랜드 디스커버리 12일",
    },
    date: "April 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: {
      en: "Ceylon Tea Trails combined with the dawn safaris at Wild Coast Tented Lodge was an absolute triumph. Our private naturalist spotted leopards on three consecutive game drives. Lanka Luxe Journeys represents the gold standard of bespoke travel.",
      ko: "실론 티 트레일스 방갈로에서의 버틀러 서비스와 얄라 국립공원 와일드 코스트 텐티드 롯지의 사파리는 완벽 그 자체였습니다. 3번의 사파리 모두에서 야생 표범을 가까이서 관찰할 수 있었습니다. 랑카 럭스 저니는 진정한 비스포크 럭셔리의 표본입니다.",
    },
  },
  {
    id: "review-3",
    name: "Dr. Marcus & Sophie Becker",
    country: "Munich, Germany",
    flag: "🇩🇪",
    tourTaken: {
      en: "Wild Ceylon: Leopards & Ocean 8 Days",
      ko: "와일드 실론 사파리 & 오션 8일",
    },
    date: "March 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: {
      en: "The combination of historical depth at Sigiriya, untouched nature in Yala, and pure serenity at Amangalla was sublime. Flawless punctuality, immaculate luxury vehicles, and supreme attention to our dietary preferences.",
      ko: "시기리야의 고대 역사와 얄라의 경이로운 대자연, 그리고 갈레 아만갈라의 고요함이 완벽한 조화를 이루었습니다. 완벽한 시간 약속, 철저한 전용 차량 관리, 세심한 식단 배려까지 모든 것이 만족스러웠습니다.",
    },
  },
  {
    id: "review-4",
    name: "Harrison & Claire Vance",
    country: "Sydney, Australia",
    flag: "🇦🇺",
    tourTaken: {
      en: "Romantic Sri Lanka Honeymoon (9 Days)",
      ko: "세렌딥의 로맨스 럭셔리 허니문 9일",
    },
    date: "February 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote: {
      en: "We could not have imagined a more magical honeymoon. The private candlelight dinner among the tea plantations in Hatton and the private catamaran whale cruise off Weligama were memories we will cherish forever.",
      ko: "상상했던 것 이상으로 로맨틱하고 환상적인 신혼여행이었습니다. 하튼 차밭 속 단독 캔들라이트 디너와 웰리가마 앞바다 프라이빗 카타마란 요트에서 바라본 대왕고래는 평생 잊지 못할 것입니다.",
    },
  },
];
