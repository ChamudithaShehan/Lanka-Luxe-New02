"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Compass, CheckCircle2, Clock, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { experiencesData, Experience } from "@/lib/data/experiencesData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";

export default function ExperiencesPage() {
  const { language } = useLanguage();
  const isKorean = language === "ko";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<string>("private-wildlife-safaris");

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#C9A86A]/20">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85"
            alt="Sri Lanka Bespoke Experiences"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/40 text-[#E5C98B] text-xs uppercase tracking-[0.3em] font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKorean ? "독보적인 프라이빗 체험" : "EXCLUSIVE MOMENTS"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white">
            {isKorean ? "스리랑카 럭셔리 익스피리언스" : "Bespoke Ceylon Experiences"}
          </h1>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            {isKorean
              ? "수석 생물학자 동행 표범 사파리부터 1등석 하일랜드 레트로 기차, 릴레앤샤토 차밭 프라이빗 버틀러 방갈로까지 인생 최고의 순간을 선사합니다."
              : "Immersive private encounters curated to connect discerning travelers with the authentic soul and natural majesty of Sri Lanka."}
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {experiencesData.map((exp, idx) => {
          const isEven = idx % 2 === 1;
          const title = exp.title[language] || exp.title.en;
          const desc = exp.description[language] || exp.description.en;
          const loc = exp.location[language] || exp.location.en;
          const features = exp.features[language] || exp.features.en;

          return (
            <div
              key={exp.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl glass-luxury-card border border-[#C9A86A]/30 ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo Column */}
              <div
                className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#081A33] border border-[#C9A86A]/20 shadow-2xl ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={exp.image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A] text-xs text-[#E5C98B] font-semibold">
                    {exp.category}
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#C9A86A] uppercase tracking-wider font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {loc}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                    {title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {desc}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#102A4C]">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#E5C98B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <LuxuryButton
                    onClick={() => setIsModalOpen(true)}
                    variant="primary"
                    size="sm"
                    withArrow
                  >
                    {isKorean ? "이 체험 포함 일정 설계" : "Include in Bespoke Itinerary"}
                  </LuxuryButton>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Modal */}
      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
