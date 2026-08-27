"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Sun,
  Clock,
  Sparkles,
  Hotel,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Send,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { destinationsData, Destination } from "@/lib/data/destinationsData";
import { toursData } from "@/lib/data/toursData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DestinationDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dest = destinationsData.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  const name = dest.name[language] || dest.name.en;
  const tagline = dest.tagline[language] || dest.tagline.en;
  const desc = dest.description[language] || dest.description.en;
  const bestMonths = dest.bestMonths[language] || dest.bestMonths.en;
  const duration = dest.recommendedDuration[language] || dest.recommendedDuration.en;
  const highlights = dest.highlights[language] || dest.highlights.en;
  const curated = dest.curatedExperiences[language] || dest.curatedExperiences.en;

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* 1. Destination Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src={dest.heroImage}
            alt={name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/70 to-black/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A86A] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isKorean ? "모든 여행지 가이드로 돌아가기" : "Back to All Destinations"}</span>
          </Link>

          <div className="space-y-3 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A] text-xs text-[#E5C98B] font-semibold uppercase tracking-wider inline-block">
              {dest.region[language] || dest.region.en}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white">
              {name}
            </h1>
            <p className="text-base sm:text-lg text-[#E5C98B] font-serif-luxury italic">
              {tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Destination Details Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-[#102A4C]/60 border border-[#C9A86A]/30 text-center">
              <div>
                <span className="text-[10px] text-[#A7B0BE] uppercase tracking-wider block">
                  {t.destinations.bestTimeToVisit}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#E5C98B] mt-1 block">
                  {bestMonths}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#A7B0BE] uppercase tracking-wider block">
                  Climate & Temp
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#E5C98B] mt-1 block">
                  {dest.avgTemp}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#A7B0BE] uppercase tracking-wider block">
                  Ideal Duration
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#E5C98B] mt-1 block">
                  {duration}
                </span>
              </div>
            </div>

            {/* Narrative Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                {isKorean ? `${name} 여행 가이드` : `About ${name}`}
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {desc}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif-luxury text-white">
                {t.destinations.highlights}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#CBD5E1]">
                {highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#102A4C]/40 border border-[#C9A86A]/20 flex items-start gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Luxury Stays */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif-luxury text-white">
                {t.destinations.luxuryStays}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dest.luxuryStays.map((stay, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden glass-luxury-card border border-[#C9A86A]/25 p-5 space-y-3"
                  >
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#081A33]">
                      <Image
                        src={stay.image}
                        alt={stay.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#C9A86A] uppercase tracking-wider block font-semibold">
                        {stay.tier}
                      </span>
                      <h4 className="text-base font-serif-luxury text-white font-medium">
                        {stay.name}
                      </h4>
                      <p className="text-xs text-[#A7B0BE] mt-1">
                        {stay.description[language] || stay.description.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-2xl glass-luxury-card border border-[#C9A86A]/50 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs text-[#C9A86A] uppercase tracking-widest block font-semibold">
                  Bespoke Trip Planning
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury text-white mt-1">
                  {isKorean ? `${name} 포함 맞춤 여행` : `Include ${name} in Your Journey`}
                </h3>
                <p className="text-xs text-[#A7B0BE] mt-2 leading-relaxed">
                  {isKorean
                    ? "전용 벤츠 리무진과 최고급 릴레앤샤토/아만 리조트로 구성된 맞춤 일정을 설계해 드립니다."
                    : "Connect with our Senior Concierge to build a personalized private itinerary including this destination."}
                </p>
              </div>

              <div className="space-y-3">
                <LuxuryButton
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  withArrow
                >
                  {isKorean ? "맞춤 일정 신청하기" : "PLAN THIS DESTINATION"}
                </LuxuryButton>

                <a
                  href={`https://wa.me/94771234567?text=Hello%20Lanka%20Luxe!%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(dest.name.en)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-[#081A33] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>{isKorean ? "왓츠앱 빠른 문의" : "Instant WhatsApp Quote"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
