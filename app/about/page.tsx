"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Shield, Award, Users, Compass, Globe, Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function AboutPage() {
  const { language } = useLanguage();
  const isKorean = language === "ko";

  const teamMembers = [
    {
      name: "Roshan Wickramasinghe",
      role: isKorean ? "공동 창립자 & 매니징 디렉터" : "Co-Founder & Managing Director",
      bio: isKorean
        ? "20년 이상의 스리랑카 럭셔리 호스피탈리티 경력을 바탕으로 글로벌 VIP 고객을 위한 맞춤형 프라이빗 여정을 총괄합니다."
        : "Over 20 years pioneering high-end private travel and boutique hotel curation across Sri Lanka.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Samantha Wickramasinghe",
      role: isKorean ? "공동 창립자 & 수석 큐레이터" : "Co-Founder & Head of Curation",
      bio: isKorean
        ? "영국 릴레앤샤토 및 헤리티지 호텔 감각을 접목하여 스리랑카 최고급 빌라와 미식 체험을 디자인합니다."
        : "Specializes in bespoke gastronomy, Relais & Châteaux villa partnerships, and exclusive cultural access.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kim Min-Seok",
      role: isKorean ? "한국인 고객 & 골프 총괄 이사" : "Director of Korean Market & Golf Services",
      bio: isKorean
        ? "KPGA 프로 출신으로 한국인 골퍼들의 니즈를 완벽히 이해하며, 스리랑카 5대 골프장 전용 VIP 서비스를 직접 지휘합니다."
        : "Directs specialized golf operations, priority tee times, and tailored concierge for discerning Korean travelers.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Anura Senanayake",
      role: isKorean ? "수석 자연 생태학자 & 사파리 자문위원" : "Chief Naturalist & Wildlife Advisor",
      bio: isKorean
        ? "30년 경력의 스리랑카 국립공원 수석 생물학자로 얄라와 윌파투의 비공개 표범 사파리 루트를 설계합니다."
        : "Renowned leopard specialist and conservation biologist leading Lanka Luxe's master naturalist teams.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24">
      {/* 1. Cinematic Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85"
            alt="Sigiriya Landscape"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/70 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/40 text-[#E5C98B] text-xs uppercase tracking-[0.3em] font-sans font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKorean ? "LANKA LUXE 이야기" : "OUR PHILOSOPHY"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal leading-tight text-white">
            {isKorean
              ? "여행은 단순히 목적지를 방문하는 것 이상의 가치입니다."
              : "Travel is more than visiting a destination."}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#CBD5E1] font-sans max-w-2xl mx-auto leading-relaxed">
            {isKorean
              ? "랑카 럭스 저니(Lanka Luxe Journeys)는 스리랑카의 고결한 역사와 천혜의 자연을 가장 우아하고 품격 있는 방식으로 전 세계 여행자에게 소개합니다."
              : "Lanka Luxe Journeys was born out of a profound passion for Ceylon’s timeless grace—curating extraordinary, private journeys that redefine luxury travel in South Asia."}
          </p>
        </div>
      </section>

      {/* 2. Our Story Section (Cream Background Accent) */}
      <section className="py-20 lg:py-28 bg-[#F6F3EE] text-[#081A33] font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#C9A86A]/40">
                <Image
                  src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                  alt="Ceylon Tea Country"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#081A33] text-white border border-[#C9A86A]/50 shadow-xl hidden sm:block">
                <span className="text-3xl font-serif-luxury text-[#E5C98B] font-bold block">
                  16+
                </span>
                <span className="text-xs text-[#A7B0BE] uppercase tracking-wider">
                  Years of Curated Excellence
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A08047] font-semibold">
                <span>{isKorean ? "창립 스토리" : "OUR ORIGIN STORY"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#081A33] font-normal leading-snug">
                {isKorean
                  ? "스리랑카 고유의 품격을 세상에 알리다"
                  : "Crafting Ceylon’s Most Prestigious Odysseys"}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                <p>
                  {isKorean
                    ? "스리랑카는 면적 대비 세계에서 가장 다채로운 매력을 지닌 섬입니다. 수천 년의 역사를 품은 바위 요새, 19세기 영국 식민지풍 티 방갈로, 세계적인 챔피언십 골프장, 그리고 아시아 최고 밀도의 야생 표범까지—이 모든 경이로움이 콤팩트하게 응축되어 있습니다."
                    : "Sri Lanka is an island of sublime contrasts. Within just a few hours' drive, one transitions from colonial tea bungalows draped in mountain mist to dry savannah leopard sanctuaries and ancient golden citadels."}
                </p>
                <p>
                  {isKorean
                    ? "우리는 규격화된 단체 패키지의 한계를 넘어, 오직 한 분 한 분의 취향에 맞춘 100% 프라이빗 비스포크 투어만을 고집합니다. 전용 벤츠 리무진, 5성급 릴레앤샤토 호텔, 그리고 검증된 베테랑 전담 가이드가 함께합니다."
                    : "Rejecting impersonal mass-tourism templates, Lanka Luxe Journeys was established to deliver ultra-private, peerlessly tailored itineraries paired with dedicated luxury chauffeur guides, VIP fast-track clearance, and exclusive villa access."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white border border-[#C9A86A]/20">
                  <h4 className="font-serif-luxury text-[#081A33] font-bold text-base mb-1">
                    {isKorean ? "우리의 사명 (Mission)" : "Our Mission"}
                  </h4>
                  <p className="text-xs text-[#718096]">
                    {isKorean
                      ? "철저한 프라이버시와 디테일한 맞춤 설계로 인생 최고의 여행을 선사합니다."
                      : "To orchestrate seamless, transformative Sri Lankan odysseys with unmatched discretion and artistry."}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#C9A86A]/20">
                  <h4 className="font-serif-luxury text-[#081A33] font-bold text-base mb-1">
                    {isKorean ? "우리의 비전 (Vision)" : "Our Vision"}
                  </h4>
                  <p className="text-xs text-[#718096]">
                    {isKorean
                      ? "남아시아를 대표하는 최고의 럭셔리 트래블 큐레이터로 자리매김합니다."
                      : "To remain South Asia’s benchmark for bespoke luxury, heritage travel, and championship golf."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Concierge Team */}
      <section className="py-24 lg:py-32 bg-[#081A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={isKorean ? "전담 큐레이터" : "CURATORS OF LUXURY"}
            title={isKorean ? "랑카 럭스 리더십 & 컨시어지 팀" : "Meet Our Leadership & Concierge Team"}
            subtitle={
              isKorean
                ? "스리랑카 현지와 한국에서 고객님의 여정을 완벽하게 보필하는 각 분야 최고의 전문가들입니다."
                : "A seasoned collective of hospitality directors, golf specialists, and master naturalists."
            }
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-2xl glass-luxury-card border border-[#C9A86A]/20 overflow-hidden flex flex-col justify-between p-6 transition-all duration-500 hover:border-[#E5C98B] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(201,168,106,0.2)]"
              >
                <div className="space-y-4">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#102A4C]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-serif-luxury text-white font-medium group-hover:text-[#E5C98B] transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-xs text-[#C9A86A] block mt-0.5 font-medium">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-xs text-[#A7B0BE] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <LuxuryButton href="/contact" variant="primary" size="lg" withArrow>
              {isKorean ? "전담 컨시어지와 여행 상담하기" : "Speak with Our Concierge"}
            </LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
