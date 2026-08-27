"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Clock, Sun, Hotel, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { destinationsData, Destination } from "@/lib/data/destinationsData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function DestinationsPage() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const regions = [
    { id: "all", label: isKorean ? "전체 지역" : "All Regions" },
    { id: "culture", label: isKorean ? "문화 삼각지대" : "Cultural Triangle" },
    { id: "highlands", label: isKorean ? "센트럴 하일랜드 (차밭/골프)" : "Highlands & Tea" },
    { id: "south", label: isKorean ? "남부 해안 & 갈레 요새" : "Southern Coast" },
    { id: "wildlife", label: isKorean ? "야생 국립공원 (사파리)" : "Wildlife Sanctuaries" },
  ];

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#C9A86A]/20">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85"
            alt="Sri Lanka Destinations"
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
            <span>{isKorean ? "스리랑카 주요 여행지" : "DESTINATION DIRECTORY"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white">
            {isKorean ? "인도양의 눈부신 보석, 스리랑카 탐험" : "Explore The Wonders of Sri Lanka"}
          </h1>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            {isKorean
              ? "유네스코 고대 요새 시기리야부터 해발 1,800m 누와라엘리야 차밭, 얄라 국립공원의 야생 표범 서식지까지 각 지역의 고유한 매력을 만나보세요."
              : "Discover the breathtaking diversity of Sri Lanka through our curated luxury destination guides."}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => {
            const name = dest.name[language] || dest.name.en;
            const tagline = dest.tagline[language] || dest.tagline.en;
            const desc = dest.description[language] || dest.description.en;
            const duration = dest.recommendedDuration[language] || dest.recommendedDuration.en;

            return (
              <div
                key={dest.id}
                className="group rounded-2xl overflow-hidden glass-luxury-card border border-[#C9A86A]/25 flex flex-col justify-between transition-all duration-500 hover:border-[#E5C98B] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(201,168,106,0.2)]"
              >
                <div>
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#081A33]">
                    <Image
                      src={dest.thumbnail}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-transparent to-black/30" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A]/50 text-[11px] text-[#E5C98B] font-medium backdrop-blur-md">
                        {dest.region[language] || dest.region.en}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A]/40 text-[10px] text-white backdrop-blur-md">
                        <Clock className="w-3 h-3 text-[#C9A86A]" />
                        <span>{duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-white group-hover:text-[#E5C98B] transition-colors leading-snug">
                      {name}
                    </h3>
                    <p className="text-xs text-[#E5C98B] font-medium leading-snug">
                      {tagline}
                    </p>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Stays snippet */}
                    <div className="pt-2 border-t border-[#102A4C] space-y-1">
                      <span className="text-[10px] uppercase text-[#A7B0BE] font-semibold block">
                        Featured Stays:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {dest.luxuryStays.map((stay, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#102A4C] text-[10px] text-[#E5C98B]"
                          >
                            {stay.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#102A4C] flex items-center justify-between">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E5C98B] hover:text-white transition-colors"
                  >
                    <span>{t.destinations.viewGuide}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A86A]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
