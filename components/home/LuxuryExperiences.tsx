"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { experiencesData } from "@/lib/data/experiencesData";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

export default function LuxuryExperiences() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";

  return (
    <section className="relative bg-section-white text-[#081A33] py-16 sm:py-24 lg:py-36 overflow-hidden font-sans">
      {/* Top gold hairline */}
      <div className="gold-divider absolute top-0 left-0 right-0" />

      {/* Subtle cream wash on right (hidden on mobile) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[#F6F3EE] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <MotionFadeIn direction="right">
            <div>
              <span className="section-label-light">{t.experiences.label}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
                {t.experiences.title}
              </h2>
              <p className="mt-3 text-sm text-[#4A5568] max-w-xl leading-relaxed">
                {t.experiences.subtitle}
              </p>
            </div>
          </MotionFadeIn>
          <MotionFadeIn direction="left" className="shrink-0">
            <div>
              <LuxuryButton href="/experiences" variant="cream" size="sm" withArrow>
                {isKorean ? "전체 익스피리언스 보기" : "All Experiences"}
              </LuxuryButton>
            </div>
          </MotionFadeIn>
        </div>

        {/* Experience cards — 3 column grid */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {experiencesData.slice(0, 6).map((exp, idx) => {
            const title    = exp.title[language]    || exp.title.en;
            const desc     = exp.description[language] || exp.description.en;
            const loc      = exp.location[language] || exp.location.en;
            const features = (exp.features[language] || exp.features.en).slice(0, 2);

            return (
              <MotionStaggerItem key={exp.id} direction={idx % 2 === 0 ? "right" : "left"}>
                <div className="white-card group overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F8FAFC] rounded-t-[1.25rem]">
                    <Image
                      src={exp.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    {/* Category pill */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-white/90 border border-[#E8E2D9] text-[10px] font-semibold uppercase tracking-wider text-[#081A33] shadow-sm">
                        {exp.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col gap-3">
                    {/* Location + duration */}
                    <div className="flex items-center gap-3 text-[11px] text-[#A7B0BE]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C9A86A]" />
                        {loc}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C9A86A]" />
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif-luxury text-[#081A33] group-hover:text-[#A08047] transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs text-[#4A5568] leading-relaxed line-clamp-2">{desc}</p>

                    {/* Feature bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-[#F0EBE3]">
                      {features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#4A5568]">
                          <Sparkles className="w-3 h-3 text-[#C9A86A] shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="mt-auto pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                      <Link
                        href="/experiences"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#081A33] hover:text-[#A08047] transition-colors group-hover:gap-2.5 duration-300"
                      >
                        <span>{isKorean ? "자세히 보기" : "Explore"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>
      </div>

      {/* Bottom gold hairline */}
      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
