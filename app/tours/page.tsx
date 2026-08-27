"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Clock, ArrowRight, Filter, Search, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { toursData, TourPackage } from "@/lib/data/toursData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";
import { formatCurrency } from "@/lib/utils";

export default function ToursPage() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", label: isKorean ? "전체 투어" : "All Journeys" },
    { id: "luxury", label: isKorean ? "울트라 럭셔리" : "Ultra Luxury" },
    { id: "golf", label: isKorean ? "골프 홀리데이" : "Golf Holidays" },
    { id: "wildlife", label: isKorean ? "야생 & 사파리" : "Wildlife & Safari" },
    { id: "honeymoon", label: isKorean ? "허니문 & 로맨스" : "Honeymoon & Romance" },
  ];

  const filteredTours = toursData.filter((tour) => {
    const matchesCategory =
      selectedCategory === "all" || tour.category === selectedCategory;
    const title = tour.title[language] || tour.title.en;
    const desc = tour.subtitle[language] || tour.subtitle.en;
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-[#C9A86A]/20">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2000&q=85"
            alt="Sri Lanka Tour Catalog"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/40 text-[#E5C98B] text-xs uppercase tracking-[0.3em] font-sans font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKorean ? "스리랑카 시그니처 컬렉션" : "CURATED SIGNATURE ITINERARIES"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white">
            {isKorean ? "스리랑카 럭셔리 투어 패키지" : "Bespoke Journey Collections"}
          </h1>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            {isKorean
              ? "챔피언십 골프, 고대 유네스코 유적, 릴레앤샤토 티 방갈로 및 인도양 오션 빌라를 아우르는 최고급 프라이빗 투어입니다."
              : "Hand-crafted private itineraries paired with dedicated luxury chauffeur guides, 5-star Relais & Châteaux boutique hotels, and VIP access."}
          </p>

          {/* Search & Filter Bar */}
          <div className="max-w-2xl mx-auto pt-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#C9A86A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isKorean
                    ? "투어 이름, 관심사(골프, 사파리 등) 검색..."
                    : "Search tours by keyword (golf, safari, tea, honeymoon)..."
                }
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#102A4C]/80 border border-[#C9A86A]/30 text-xs text-white placeholder-[#A7B0BE]/60 focus:outline-none focus:border-[#C9A86A] backdrop-blur-md"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-full bg-[#C9A86A] hover:bg-[#E5C98B] text-[#081A33] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md hover:scale-105 shrink-0"
            >
              {isKorean ? "1:1 맞춤 일정 설계" : "Custom Request"}
            </button>
          </div>
        </div>
      </section>

      {/* Main Tour Directory Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#E5C98B] to-[#C9A86A] text-[#081A33] font-bold shadow-[0_0_15px_rgba(201,168,106,0.35)]"
                    : "bg-[#102A4C]/60 text-[#A7B0BE] border border-[#C9A86A]/20 hover:border-[#C9A86A]/50 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredTours.map((tour) => {
            const title = tour.title[language] || tour.title.en;
            const subtitle = tour.subtitle[language] || tour.subtitle.en;
            const catLabel = tour.categoryLabel[language] || tour.categoryLabel.en;

            return (
              <div
                key={tour.id}
                className="group rounded-2xl overflow-hidden glass-luxury-card border border-[#C9A86A]/25 flex flex-col justify-between transition-all duration-500 hover:border-[#E5C98B] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(201,168,106,0.25)]"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#081A33]">
                  <Image
                    src={tour.cardImage}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061427] via-transparent to-black/40 opacity-85" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A]/50 text-[11px] text-[#E5C98B] uppercase tracking-wider backdrop-blur-md font-medium">
                      {catLabel}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A]/50 text-[11px] text-white backdrop-blur-md font-sans">
                      <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
                      <span>
                        {tour.durationDays} {t.featured.days} / {tour.durationNights}{" "}
                        {isKorean ? "박" : "Nights"}
                      </span>
                    </span>
                  </div>

                  {/* Price Pill */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="px-3.5 py-1.5 rounded-lg bg-[#081A33]/85 border border-[#C9A86A]/40 backdrop-blur-md">
                      <span className="text-[10px] text-[#A7B0BE] block uppercase tracking-wider">
                        {t.featured.startingFrom}
                      </span>
                      <span className="text-base font-serif-luxury font-bold text-[#E5C98B]">
                        {formatCurrency(tour.startingPriceUSD)}
                      </span>
                      <span className="text-[10px] text-[#A7B0BE] ml-1">/ person</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-white group-hover:text-[#E5C98B] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed line-clamp-3">
                      {subtitle}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-[#102A4C]">
                    {(tour.highlights[language] || tour.highlights.en).slice(0, 3).map((hl, i) => (
                      <div
                        key={i}
                        className="text-xs text-[#A7B0BE] flex items-center gap-2 truncate"
                      >
                        <Sparkles className="w-3 h-3 text-[#C9A86A] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="pt-4 border-t border-[#102A4C] flex items-center justify-between">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#E5C98B] hover:text-white transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>{t.featured.exploreTour}</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A86A]" />
                    </Link>

                    <span className="text-[11px] text-[#7E8B9F]">
                      {isKorean ? "VIP 전용 차량 포함" : "100% Bespoke Fleet"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTours.length === 0 && (
          <div className="py-16 text-center text-[#A7B0BE] space-y-4">
            <p>검색 조건에 맞는 일정이 없습니다.</p>
            <LuxuryButton onClick={() => setSelectedCategory("all")} variant="outline-gold" size="sm">
              모든 투어 보기
            </LuxuryButton>
          </div>
        )}
      </section>

      {/* Custom Trip Modal */}
      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
