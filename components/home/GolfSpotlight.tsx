"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Flag, Sparkles, MapPin, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { golfCourses } from "@/lib/data/golfData";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function GolfSpotlight() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeCourse = golfCourses[selectedCourseIndex] || golfCourses[0];
  const courseDesc = activeCourse.description[language] || activeCourse.description.en;
  const courseLoc  = activeCourse.location[language]    || activeCourse.location.en;

  return (
    <section className="relative bg-section-snow text-[#081A33] py-24 lg:py-36 overflow-hidden font-sans">
      {/* Dot pattern backdrop */}
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
          <div className="text-center mb-12">
            <span className="section-label-light mx-auto">{t.golf.label}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
              {t.golf.title}
            </h2>
            <p className="mt-4 text-sm text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              {t.golf.subtitle}
            </p>
          </div>
        </MotionFadeIn>

        {/* Korean Golfer Banner */}
        <MotionFadeIn direction="right" delay={0.18}>
          <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#081A33] text-white border border-[#C9A86A]/30 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="tag-gold-light">🇰🇷 VIP Concierge for Korean Golfers</span>
                <h3 className="text-xl sm:text-2xl font-serif-luxury text-white font-medium">
                  {t.golf.koreanTitle}
                </h3>
                <p className="text-sm text-[#CBD5E1] max-w-2xl leading-relaxed">{t.golf.koreanDesc}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-[#C9A86A] hover:bg-[#E5C98B] text-[#081A33] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  {isKorean ? "골프 전용 일정 신청" : "Custom Golf Itinerary"}
                </button>
                <Link
                  href="/golf"
                  className="px-5 py-3 border border-[#C9A86A]/60 text-[#E5C98B] hover:bg-[#C9A86A]/10 text-xs uppercase tracking-widest font-semibold transition-all"
                >
                  {isKorean ? "5대 코스 안내" : "All 5 Courses"}
                </Link>
              </div>
            </div>
          </div>
        </MotionFadeIn>

        {/* Interactive Course Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: course list */}
          <MotionFadeIn direction="right" className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A08047] font-bold mb-1 block">
              {isKorean ? "스리랑카 5대 명문 코스 선택" : "Select Championship Course"}
            </span>
            {golfCourses.map((course, idx) => {
              const isSelected  = selectedCourseIndex === idx;
              const locationTxt = course.location[language] || course.location.en;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourseIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? "bg-[#081A33] border-[#081A33] shadow-lg text-white translate-x-1.5"
                      : "bg-white border-[#E8E2D9] hover:border-[#C9A86A]/50 hover:shadow-sm"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#E5C98B]" : "text-[#A7B0BE]"}`}>
                        0{idx + 1}
                      </span>
                      <h4 className={`text-sm sm:text-base font-serif-luxury font-medium ${isSelected ? "text-white" : "text-[#081A33]"}`}>
                        {course.name}
                      </h4>
                    </div>
                    <div className={`text-[11px] flex items-center gap-2 pl-6 ${isSelected ? "text-[#CBD5E1]" : "text-[#A7B0BE]"}`}>
                      <MapPin className="w-3 h-3 text-[#C9A86A]" />
                      <span>{locationTxt}</span>
                      <span>•</span>
                      <span>Par {course.par} / {course.holes}H</span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#E5C98B] translate-x-1" : "text-[#A7B0BE]"
                    }`}
                  />
                </button>
              );
            })}
          </MotionFadeIn>

          {/* Right: course detail */}
          <MotionFadeIn direction="left" className="lg:col-span-7 white-card overflow-hidden flex flex-col shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col h-full"
              >
                {/* Course image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#F8FAFC] rounded-t-[1.25rem]">
                  <Image
                    src={activeCourse.image}
                    alt={activeCourse.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-white/90 border border-[#E8E2D9] text-xs text-[#081A33] font-semibold shadow-sm">
                      Est. {activeCourse.established}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 border border-[#E8E2D9] text-xs text-[#081A33] shadow-sm">
                      {activeCourse.designer}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#081A33]/80 border border-[#C9A86A]/40 text-xs text-[#E5C98B] font-mono">
                      {activeCourse.elevation}
                    </span>
                  </div>
                </div>

                {/* Detail content */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col">
                  {/* Name row with par stats */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#F0EBE3] pb-5">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#A08047] font-bold block">{courseLoc}</span>
                      <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#081A33]">{activeCourse.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-center shrink-0">
                      {[
                        { label: "Par",     value: activeCourse.par },
                        { label: "Yards",   value: `${activeCourse.yardage}` },
                        { label: "Holes",   value: activeCourse.holes },
                      ].map((s) => (
                        <div key={s.label} className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E8E2D9] shadow-sm">
                          <span className="text-[10px] text-[#A7B0BE] block">{s.label}</span>
                          <span className="text-base font-serif-luxury font-bold text-[#A08047]">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed">{courseDesc}</p>

                  {/* Signature hole */}
                  <div className="p-4 rounded-xl bg-[#F6F3EE] border border-[#E8E2D9] flex items-start gap-3">
                    <Flag className="w-4 h-4 text-[#A08047] mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#081A33] block mb-0.5">
                        {isKorean
                          ? `시그니처 홀: ${activeCourse.signatureHole.number}번 홀 (Par ${activeCourse.signatureHole.par})`
                          : `Signature Hole #${activeCourse.signatureHole.number} (Par ${activeCourse.signatureHole.par})`}
                      </strong>
                      <span className="text-[#4A5568] leading-relaxed">
                        {activeCourse.signatureHole.description[language] || activeCourse.signatureHole.description.en}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                    <LuxuryButton href="/golf" variant="primary" size="sm" withArrow>
                      {t.golf.exploreBtn}
                    </LuxuryButton>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-xs text-[#A08047] hover:text-[#081A33] underline-offset-4 hover:underline cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.golf.requestBtn}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </MotionFadeIn>
        </div>
      </div>

      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialInterest="golf" />
    </section>
  );
}
