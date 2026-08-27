"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function IntroSection() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";

  return (
    <section
      id="intro-section"
      className="relative bg-section-white text-[#081A33] py-16 sm:py-24 lg:py-36 overflow-hidden font-sans"
    >
      {/* Top gold hairline */}
      <div className="gold-divider absolute top-0 left-0 right-0" />

      {/* Subtle cream radial at top-right (hidden on mobile to prevent overflow) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[440px] bg-gradient-to-bl from-[#C9A86A]/10 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute bottom-0 left-0 w-[400px] h-[350px] bg-gradient-to-tr from-[#F6F3EE] to-transparent pointer-events-none" />

      {/* Gold emblem ornament (centred on hairline) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 z-10">
        <span className="w-14 h-[1px] bg-[#C9A86A]/60" />
        <div className="w-5 h-5 rotate-45 border border-[#C9A86A] bg-white flex items-center justify-center shadow-sm">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C9A86A]" />
        </div>
        <span className="w-14 h-[1px] bg-[#C9A86A]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Heading + geo card + highlights */}
          <div className="lg:col-span-5 space-y-8">
            <MotionFadeIn direction="right" delay={0.1}>
              <span className="section-label-light">{t.intro.label}</span>
            </MotionFadeIn>

            <MotionFadeIn direction="right" delay={0.22}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif-luxury font-normal text-[#081A33] leading-[1.12] tracking-tight">
                {t.intro.title}
              </h2>
            </MotionFadeIn>

            {/* Geographic coordinates card */}
            <MotionFadeIn direction="right" delay={0.35}>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E8E2D9] shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#A08047] font-semibold mb-1">
                      Latitude &amp; Longitude
                    </span>
                    <span className="font-mono font-semibold text-[#081A33]">7.8731° N, 80.7718° E</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase tracking-widest text-[#A08047] font-semibold mb-1">
                      Island Capital
                    </span>
                    <span className="font-serif-luxury text-sm text-[#081A33]">Sri Jayawardenepura</span>
                  </div>
                </div>
              </div>
            </MotionFadeIn>

            {/* Service highlights */}
            <MotionFadeIn direction="right" delay={0.48}>
              <ul className="space-y-3">
                {[
                  isKorean
                    ? "모든 일정 전용 벤츠 리무진 / 프라이빗 SUV 단독 배정"
                    : "100% Private Chauffeured Mercedes & Luxury 4WD Fleet",
                  isKorean
                    ? "스리랑카 5대 명문 골프 코스 VIP 티타임 100% 보장"
                    : "Guaranteed Priority Tee Times at Victoria & Nuwara Eliya",
                  isKorean
                    ? "24시간 한국어 컨시어지 및 실시간 일정 케어"
                    : "24/7 Senior Concierge Care & VIP Fast-Track Airport Service",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4A5568]">
                    <CheckCircle2 className="w-4 h-4 text-[#A08047] mt-0.5 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </MotionFadeIn>
          </div>

          {/* Right: Italic quote, founders signature, stats grid */}
          <div className="lg:col-span-7 space-y-10">
            <MotionFadeIn direction="left" delay={0.2}>
              <div className="space-y-5">
                <p className="text-xl sm:text-2xl font-serif-luxury text-[#081A33] italic leading-relaxed">
                  &ldquo;{t.intro.p1}&rdquo;
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed">{t.intro.p2}</p>
              </div>
            </MotionFadeIn>

            {/* Founders block */}
            <MotionFadeIn direction="left" delay={0.38}>
              <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif-luxury text-lg text-[#081A33] font-medium">
                    {t.intro.signature}
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#A08047] font-sans font-semibold">
                    {t.intro.signatureRole}
                  </span>
                </div>
                <LuxuryButton href="/about" variant="cream" size="sm" withArrow>
                  {isKorean ? "브랜드 스토리 더보기" : "Our Heritage & Story"}
                </LuxuryButton>
              </div>
            </MotionFadeIn>

            {/* Four statistics pillars */}
            <MotionFadeIn direction="up" delay={0.52}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { val: t.intro.stat1Val, label: t.intro.stat1Label },
                  { val: t.intro.stat2Val, label: t.intro.stat2Label },
                  { val: t.intro.stat3Val, label: t.intro.stat3Label },
                  { val: t.intro.stat4Val, label: t.intro.stat4Label },
                ].map((st, i) => (
                  <div
                    key={i}
                    className="white-card p-5 text-center shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-serif-luxury text-[#A08047] font-semibold">
                      {st.val}
                    </div>
                    <div className="text-[11px] text-[#4A5568] mt-1 font-sans leading-tight">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </MotionFadeIn>
          </div>
        </div>
      </div>

      {/* Bottom gold hairline */}
      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
