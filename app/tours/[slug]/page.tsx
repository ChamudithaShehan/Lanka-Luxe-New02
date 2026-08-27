"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  XCircle,
  Hotel,
  Car,
  Shield,
  Send,
  Calendar,
  Users,
  ChevronDown,
  ChevronUp,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { toursData, TourPackage } from "@/lib/data/toursData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";
import { formatCurrency } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function TourDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [activeDay, setActiveDay] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tour = toursData.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  const title = tour.title[language] || tour.title.en;
  const subtitle = tour.subtitle[language] || tour.subtitle.en;
  const overview = tour.overview[language] || tour.overview.en;
  const highlights = tour.highlights[language] || tour.highlights.en;
  const included = tour.included[language] || tour.included.en;
  const notIncluded = tour.notIncluded[language] || tour.notIncluded.en;

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* 1. Full-Width Hero Section */}
      <section className="relative min-h-[65vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src={tour.heroImage}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/70 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A86A] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isKorean ? "모든 투어 목록으로 돌아가기" : "Back to All Tours"}</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A] text-xs text-[#E5C98B] font-semibold uppercase tracking-wider">
                {tour.categoryLabel[language] || tour.categoryLabel.en}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#081A33]/85 border border-[#C9A86A]/40 text-xs text-white">
                <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>
                  {tour.durationDays} Days / {tour.durationNights} Nights
                </span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Sticky Booking Card Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Itinerary, Inclusions, Stays (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                {isKorean ? "여정 개요 (Overview)" : "Journey Overview"}
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {overview}
              </p>

              {/* Key Highlights Box */}
              <div className="p-6 rounded-2xl bg-[#102A4C]/60 border border-[#C9A86A]/30 space-y-4">
                <h3 className="text-sm uppercase tracking-wider text-[#E5C98B] font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A86A]" />
                  <span>{isKorean ? "시그니처 하이라이트" : "Signature Tour Highlights"}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#CBD5E1]">
                  {highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Interactive Itinerary Accordion */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
                    {isKorean ? "상세 일정" : "DAY-BY-DAY SCHEDULE"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                    {isKorean ? "일자별 프라이빗 일정" : "Daily Itinerary"}
                  </h2>
                </div>
                <span className="text-xs text-[#A7B0BE]">
                  Total {tour.itinerary.length} Days
                </span>
              </div>

              <div className="space-y-4">
                {tour.itinerary.map((dayItem) => {
                  const isOpen = activeDay === dayItem.day;
                  const dayTitle = dayItem.title[language] || dayItem.title.en;
                  const dayLoc = dayItem.location[language] || dayItem.location.en;
                  const dayDesc = dayItem.description[language] || dayItem.description.en;

                  return (
                    <div
                      key={dayItem.day}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-[#102A4C]/80 border-[#C9A86A] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                          : "bg-[#081A33]/70 border-[#C9A86A]/20 hover:border-[#C9A86A]/50"
                      }`}
                    >
                      <button
                        onClick={() => setActiveDay(isOpen ? 0 : dayItem.day)}
                        className="w-full p-5 text-left flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif-luxury font-bold text-sm ${
                              isOpen
                                ? "bg-[#C9A86A] text-[#081A33]"
                                : "bg-[#081A33] text-[#E5C98B] border border-[#C9A86A]/30"
                            }`}
                          >
                            D{dayItem.day}
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-[#C9A86A] block">
                              {dayLoc}
                            </span>
                            <h3 className="text-base sm:text-lg font-serif-luxury text-white">
                              {dayTitle}
                            </h3>
                          </div>
                        </div>

                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#E5C98B]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#7E8B9F]" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 pt-2 space-y-4 border-t border-[#102A4C] animate-in fade-in">
                          {/* Image preview */}
                          {dayItem.image && (
                            <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] rounded-xl overflow-hidden bg-[#081A33] border border-[#C9A86A]/20">
                              <Image
                                src={dayItem.image}
                                alt={dayTitle}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                              />
                            </div>
                          )}

                          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                            {dayDesc}
                          </p>

                          {/* Hotel and Activities */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                            <div className="p-3 rounded-lg bg-[#081A33]/80 border border-[#C9A86A]/20 flex items-center gap-2">
                              <Hotel className="w-4 h-4 text-[#C9A86A] shrink-0" />
                              <div>
                                <span className="text-[10px] text-[#A7B0BE] block">Stay</span>
                                <span className="text-white font-medium">{dayItem.hotel}</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-lg bg-[#081A33]/80 border border-[#C9A86A]/20 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-[#C9A86A] shrink-0" />
                              <div>
                                <span className="text-[10px] text-[#A7B0BE] block">Highlights</span>
                                <span className="text-white font-medium truncate">
                                  {dayItem.activities.join(", ")}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Featured Luxury Hotels */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                {isKorean ? "엄선된 최고급 숙소" : "Handpicked Luxury Stays"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.featuredHotels.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl overflow-hidden bg-[#102A4C]/60 border border-[#C9A86A]/25 p-4 flex gap-4 items-center"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#081A33]">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#C9A86A] uppercase tracking-wider block">
                        {hotel.location}
                      </span>
                      <h4 className="text-sm font-serif-luxury text-white font-medium group-hover:text-[#E5C98B]">
                        {hotel.name}
                      </h4>
                      <span className="text-[11px] text-[#A7B0BE] block">{hotel.tier}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions vs Exclusions */}
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                {isKorean ? "포함 및 불포함 내역" : "Inclusions & Disclaimers"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Included */}
                <div className="p-6 rounded-2xl bg-[#102A4C]/40 border border-[#C9A86A]/30 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#25D366] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isKorean ? "포함 사항" : "Included Services"}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#CBD5E1]">
                    {included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#25D366] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                <div className="p-6 rounded-2xl bg-[#102A4C]/40 border border-white/10 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#A7B0BE] font-semibold flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#A7B0BE]" />
                    <span>{isKorean ? "불포함 사항" : "Not Included"}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#A7B0BE]">
                    {notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Concierge Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-2xl glass-luxury-card border border-[#C9A86A]/50 p-6 sm:p-8 space-y-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <div>
                <span className="text-xs text-[#A7B0BE] uppercase tracking-wider block">
                  {t.featured.startingFrom}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#E5C98B]">
                    {formatCurrency(tour.startingPriceUSD)}
                  </span>
                  <span className="text-xs text-[#A7B0BE]">/ guest</span>
                </div>
                <span className="text-[11px] text-[#C9A86A] block mt-1">
                  All-Inclusive 5-Star Private Chauffeur Tour
                </span>
              </div>

              {/* Quick Specs */}
              <div className="space-y-2.5 py-4 border-y border-[#102A4C] text-xs text-[#CBD5E1]">
                <div className="flex justify-between">
                  <span className="text-[#A7B0BE]">Duration:</span>
                  <span className="font-semibold">{tour.durationDays} Days / {tour.durationNights} Nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A7B0BE]">Style:</span>
                  <span className="font-semibold">100% Bespoke Private</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A7B0BE]">Transport:</span>
                  <span className="font-semibold">Private Luxury Chauffeur</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A7B0BE]">Pace:</span>
                  <span className="font-semibold">Relaxed Luxury</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <LuxuryButton
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  withArrow
                >
                  {isKorean ? "이 일정으로 맞춤 견적 신청" : "PLAN THIS JOURNEY"}
                </LuxuryButton>

                <a
                  href={`https://wa.me/94771234567?text=Hello%20Lanka%20Luxe!%20I%20am%20interested%20in%20the%20${encodeURIComponent(tour.title.en)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-none bg-[#25D366] hover:bg-[#20bd5a] text-[#081A33] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{isKorean ? "왓츠앱으로 즉시 문의" : "Instant WhatsApp Quote"}</span>
                </a>
              </div>

              {/* Concierge Guarantee */}
              <div className="pt-2 text-center text-[11px] text-[#A7B0BE] space-y-1">
                <p>100% Customisable to your dates & pace.</p>
                <p className="text-[#C9A86A]">No booking deposit required for initial proposal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CustomTripModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialInterest={tour.category}
      />
    </div>
  );
}
