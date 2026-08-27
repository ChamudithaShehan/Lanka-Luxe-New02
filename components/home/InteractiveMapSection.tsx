"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Hotel, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { destinationsData } from "@/lib/data/destinationsData";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function InteractiveMapSection() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [selectedDestId, setSelectedDestId] = useState("sigiriya");

  const activeDest = destinationsData.find((d) => d.id === selectedDestId) || destinationsData[0];
  const name       = activeDest.name[language]                    || activeDest.name.en;
  const desc       = activeDest.description[language]             || activeDest.description.en;
  const bestMonths = activeDest.bestMonths[language]              || activeDest.bestMonths.en;
  const duration   = activeDest.recommendedDuration[language]     || activeDest.recommendedDuration.en;
  const regionName = activeDest.region[language]                  || activeDest.region.en;

  return (
    <section className="relative bg-section-snow text-[#081A33] py-24 lg:py-36 overflow-hidden font-sans">
      {/* Subtle dot backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(#C9A86A22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <MotionFadeIn direction="up">
          <div className="text-center mb-14">
            <span className="section-label-light mx-auto">{t.destinations.label}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
              {t.destinations.title}
            </h2>
            <p className="mt-4 text-sm text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              {t.destinations.subtitle}
            </p>
          </div>
        </MotionFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: SVG Map + destination pills */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* Map container */}
            <div className="relative w-full max-w-[340px] aspect-[3/4] p-4 white-card shadow-md flex items-center justify-center">
              {/* Sri Lanka contour */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M52,14 C62,20 68,28 66,38 C65,48 70,60 67,72 C64,82 52,90 44,88 C36,86 32,76 34,65 C35,55 36,45 42,30 C46,20 48,15 52,14 Z"
                  fill="#F8FAFC"
                  stroke="#C9A86A"
                  strokeWidth="1.2"
                />
                {/* Ocean dots */}
                <path d="M20,40 Q25,45 30,40" stroke="#C9A86A" strokeWidth="0.4" strokeDasharray="2,2" fill="none" opacity="0.5"/>
                <path d="M70,65 Q75,70 80,65" stroke="#C9A86A" strokeWidth="0.4" strokeDasharray="2,2" fill="none" opacity="0.5"/>
              </svg>

              {/* Clickable pins */}
              {destinationsData.map((dest) => {
                const isSelected = dest.id === selectedDestId;
                return (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDestId(dest.id)}
                    style={{ left: `${dest.mapCoords.x}%`, top: `${dest.mapCoords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-7 h-7 rounded-full bg-[#A08047]/30 animate-ping" />
                      )}
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#A08047] border-white scale-125 shadow-[0_0_10px_rgba(160,128,71,0.5)]"
                            : "bg-white border-[#C9A86A] group-hover:scale-125 group-hover:bg-[#F6F3EE]"
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-[#C9A86A]"}`} />
                      </div>
                      {/* Pin label */}
                      <span
                        className={`absolute left-5 whitespace-nowrap px-2 py-1 rounded text-[10px] font-semibold shadow-md transition-all ${
                          isSelected
                            ? "bg-[#081A33] text-white opacity-100"
                            : "bg-white text-[#081A33] border border-[#E8E2D9] opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {dest.name[language] || dest.name.en}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-sm">
              {destinationsData.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestId(dest.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    dest.id === selectedDestId
                      ? "bg-[#081A33] text-white shadow-sm"
                      : "bg-white text-[#4A5568] border border-[#E8E2D9] hover:border-[#C9A86A]/50 hover:text-[#081A33]"
                  }`}
                >
                  {dest.name[language] || dest.name.en}
                </button>
              ))}
            </div>
          </div>

          {/* Right: destination detail card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="white-card overflow-hidden shadow-md"
              >
                {/* Destination photo */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F8FAFC] rounded-t-[1.25rem]">
                  <Image
                    src={activeDest.heroImage}
                    alt={name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-5">
                    <span className="text-[10px] uppercase tracking-widest text-[#E5C98B] font-bold block">{regionName}</span>
                    <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">{name}</h3>
                  </div>
                </div>

                {/* Detail body */}
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Quick metrics */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#F0EBE3] text-center text-xs">
                    {[
                      { lbl: t.destinations.bestTimeToVisit, val: bestMonths },
                      { lbl: "Avg Temp", val: activeDest.avgTemp },
                      { lbl: "Recommended Stay", val: duration },
                    ].map((m) => (
                      <div key={m.lbl}>
                        <span className="text-[10px] text-[#A7B0BE] uppercase tracking-wider block">{m.lbl}</span>
                        <span className="text-xs font-semibold text-[#A08047] mt-0.5 block">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed">{desc}</p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#A08047] font-bold mb-2">
                      {t.destinations.highlights}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {(activeDest.highlights[language] || activeDest.highlights.en).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                          <Sparkles className="w-3 h-3 text-[#C9A86A] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stays */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#A08047] font-bold mb-2">
                      {t.destinations.luxuryStays}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDest.luxuryStays.map((stay, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E8E2D9] text-xs text-[#081A33] flex items-center gap-1.5 shadow-sm">
                          <Hotel className="w-3 h-3 text-[#C9A86A]" />
                          <span>{stay.name}</span>
                          <span className="text-[#A7B0BE]">({stay.tier})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#F0EBE3]">
                    <LuxuryButton href={`/destinations/${activeDest.slug}`} variant="primary" size="sm" withArrow>
                      {t.destinations.viewGuide}
                    </LuxuryButton>
                    <Link href="/destinations" className="text-xs text-[#A08047] hover:text-[#081A33] underline-offset-4 hover:underline">
                      {isKorean ? "전체 9개 여행지 →" : "All 9 Destinations →"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
