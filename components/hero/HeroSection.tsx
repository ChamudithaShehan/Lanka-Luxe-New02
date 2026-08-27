"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import HeroFloatingCards from "./HeroFloatingCards";
import CustomTripModal from "@/components/ui/CustomTripModal";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function HeroSection() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#0C1E3C] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      
      {/* 🌍 World Map Silhouette Vector in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 overflow-hidden">
        <svg
          viewBox="0 0 1000 500"
          className="w-[140%] max-w-none h-auto fill-white"
        >
          {/* Simplified continents map paths */}
          <path d="M150,120 Q180,90 240,110 T320,160 Q280,240 220,260 T160,200 Z" />
          <path d="M220,280 Q270,300 280,380 T230,460 Q180,440 190,360 Z" />
          <path d="M480,90 Q560,70 600,120 T540,200 Q460,180 480,90 Z" />
          <path d="M500,210 Q580,200 620,280 T560,380 Q480,360 490,260 Z" />
          <path d="M640,100 Q780,80 880,140 T820,260 Q700,240 650,160 Z" />
          <path d="M720,300 Q840,290 860,370 T750,430 Q680,380 720,300 Z" />
        </svg>
      </div>

      {/* ✦ 4-point sparkle stars floating in background */}
      <div className="absolute top-28 left-16 text-white/40 text-sm animate-pulse pointer-events-none">
        ✦
      </div>
      <div className="absolute bottom-32 left-1/3 text-white/30 text-xs animate-pulse pointer-events-none">
        ✦
      </div>
      <div className="absolute top-1/4 right-20 text-white/30 text-xs animate-pulse pointer-events-none">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Modern Typography & Pill Button */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left relative">
            
            {/* Top Tracking Agency Label */}
            <MotionFadeIn direction="up" delay={0.1}>
              <div className="inline-block text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#38BDF8]">
                {isKorean ? "스리랑카 럭셔리 여행 에이전시" : "LANKA LUXE AGENCY"}
              </div>
            </MotionFadeIn>

            {/* Main Bold Headline with Compass Line Art */}
            <MotionFadeIn direction="up" delay={0.2} duration={0.85}>
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-black uppercase text-white tracking-tight leading-[1.04]">
                  {isKorean ? (
                    <>
                      DISCOVER THE <br />
                      SRI LANKA <br />
                      <span className="text-[#38BDF8] lowercase font-normal italic font-serif text-3xl sm:text-4xl md:text-5xl">
                        with our guide.
                      </span>
                    </>
                  ) : (
                    <>
                      DISCOVER THE <br />
                      WORLD{" "}
                      <span className="text-[#38BDF8] lowercase font-normal italic font-serif block sm:inline">
                        with our guide.
                      </span>
                    </>
                  )}
                </h1>

                {/* Fine line-art Compass Icon floating near the heading */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/20 hidden sm:flex items-center justify-center pointer-events-none opacity-40">
                  <div className="w-12 h-12 rounded-full border border-dashed border-white/30 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-white stroke-[1.2]" />
                  </div>
                </div>
              </div>
            </MotionFadeIn>

            {/* Supporting Description */}
            <MotionFadeIn direction="up" delay={0.35} duration={0.8}>
              <p className="text-sm sm:text-base font-sans text-[#CBD5E1] leading-relaxed max-w-lg font-normal">
                {isKorean
                  ? "꿈꿔왔던 여행을 최고의 가이드와 함께 현실로 만드세요. 스리랑카 5대 명문 골프 코스부터 릴레앤샤토 차밭 방갈로, 프라이빗 표범 사파리까지 오직 당신만을 위한 맞춤 일정을 설계합니다."
                  : "Turn your dream destinations into reality with our expert guidance. From hidden gems and championship golf to colonial tea estates, we create personalized journeys just for you."}
              </p>
            </MotionFadeIn>

            {/* View Tours Pill Button */}
            <MotionFadeIn direction="up" delay={0.5} duration={0.8}>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-4 pl-7 pr-2.5 py-2.5 rounded-full bg-white text-[#0C1E3C] font-sans font-bold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>{isKorean ? "투어 일정 보기" : "View tours"}</span>
                  <span className="w-9 h-9 rounded-full bg-[#0284C7] group-hover:bg-[#0369A1] text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#102A4C]/80 hover:bg-[#183861] text-[#E5C98B] border border-[#C9A86A]/40 text-xs uppercase tracking-widest font-semibold backdrop-blur-md transition-all cursor-pointer hover:scale-105"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>{isKorean ? "맞춤 여행 상담" : "Plan Custom Trip"}</span>
                </button>
              </div>
            </MotionFadeIn>

            {/* Micro Badge for Korean Golfers */}
            {isKorean && (
              <MotionFadeIn direction="up" delay={0.6}>
                <div className="pt-2 hidden sm:block">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A4C]/80 border border-[#38BDF8]/40 text-xs text-[#E0F2FE]">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                    <span>🇰🇷 한국인 골퍼 & VIP 전용 카카오톡 1:1 컨시어지 케어</span>
                  </span>
                </div>
              </MotionFadeIn>
            )}

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 3-Column Staggered Arch & Capsule Gallery */}
          {/* ======================================================== */}
          <div className="hidden lg:block lg:col-span-6 relative">
            <HeroFloatingCards />
          </div>

        </div>
      </div>

      {/* Modal */}
      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
