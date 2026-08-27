"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { toursData } from "@/lib/data/toursData";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { formatCurrency } from "@/lib/utils";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function SignatureJourneys() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [activeCategory, setActiveCategory] = useState("all");

  const filterTabs = [
    { id: "all",       label: t.featured.filterAll },
    { id: "luxury",    label: t.featured.filterLuxury },
    { id: "golf",      label: t.featured.filterGolf },
    { id: "wildlife",  label: t.featured.filterWildlife },
    { id: "honeymoon", label: t.featured.filterHoneymoon },
  ];

  const filteredTours =
    activeCategory === "all"
      ? toursData
      : toursData.filter((t) => t.category === activeCategory);

  return (
    <section className="relative bg-section-white text-[#081A33] py-24 lg:py-36 overflow-hidden font-sans">
      {/* Top hairline */}
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <MotionFadeIn direction="right">
            <div>
              <span className="section-label-light">{t.featured.label}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
                {t.featured.title}
              </h2>
              <p className="mt-3 text-sm text-[#4A5568] max-w-xl leading-relaxed">
                {t.featured.subtitle}
              </p>
            </div>
          </MotionFadeIn>
          <MotionFadeIn direction="left" className="shrink-0">
            <div>
              <LuxuryButton href="/tours" variant="cream" size="sm" withArrow>
                {t.featured.viewAll}
              </LuxuryButton>
            </div>
          </MotionFadeIn>
        </div>

        {/* Filter pills */}
        <MotionFadeIn direction="up" delay={0.12}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#081A33] text-white shadow-md"
                      : "bg-[#F8FAFC] text-[#4A5568] border border-[#E8E2D9] hover:border-[#C9A86A]/50 hover:text-[#081A33]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </MotionFadeIn>

        {/* Tour cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour, index) => {
              const title    = tour.title[language]         || tour.title.en;
              const subtitle = tour.subtitle[language]      || tour.subtitle.en;
              const catLabel = tour.categoryLabel[language] || tour.categoryLabel.en;

              return (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
                  className="white-card group overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F8FAFC] rounded-t-[1.25rem]">
                    <Image
                      src={tour.cardImage}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {/* Subtle gradient only at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 border border-[#E8E2D9] text-[10px] font-semibold uppercase tracking-wider text-[#081A33] shadow-sm">
                        {catLabel}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E8E2D9] text-[10px] font-semibold text-[#081A33] shadow-sm">
                        <Clock className="w-3 h-3 text-[#A08047]" />
                        {tour.durationDays}D / {tour.durationNights}N
                      </span>
                    </div>

                    {/* Price pill bottom-left */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-4 py-2 rounded-xl bg-white/95 border border-[#E8E2D9] shadow-md">
                        <span className="text-[10px] text-[#A7B0BE] block">{t.featured.startingFrom}</span>
                        <span className="text-lg font-serif-luxury font-bold text-[#A08047]">
                          {formatCurrency(tour.startingPriceUSD)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#081A33] group-hover:text-[#A08047] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-2">{subtitle}</p>
                    </div>

                    {/* Two highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-[#F0EBE3]">
                      {(tour.highlights[language] || tour.highlights.en).slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4A5568]">
                          <Sparkles className="w-3 h-3 text-[#C9A86A] shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-auto pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#081A33] hover:text-[#A08047] transition-colors group-hover:gap-3 duration-300"
                      >
                        <span>{t.featured.exploreTour}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-[#A7B0BE]">
                        {isKorean ? "전용 의전" : "Private Chauffeur"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
