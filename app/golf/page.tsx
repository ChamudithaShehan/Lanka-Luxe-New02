"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flag,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Phone,
  Shield,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { golfCourses, golfPackages, GolfCourse, GolfPackage } from "@/lib/data/golfData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";
import { formatCurrency } from "@/lib/utils";

export default function GolfPage() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [selectedCourse, setSelectedCourse] = useState<GolfCourse>(golfCourses[1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* 1. Cinematic Golf Hero */}
      <section className="relative min-h-[70vh] flex items-center py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=85"
            alt="Sri Lanka Championship Golf Course"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/70 to-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D362C]/90 border border-[#25D366]/40 text-[#E5C98B] text-xs uppercase tracking-[0.25em] font-semibold backdrop-blur-md">
            <Flag className="w-3.5 h-3.5 text-[#25D366]" />
            <span>{isKorean ? "스리랑카 명문 골프 투어" : "CHAMPIONSHIP GOLF RETREATS"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white max-w-4xl leading-tight">
            {isKorean ? (
              <>
                스리랑카 궁극의 <br />
                <span className="text-gold-gradient italic">챔피언십 럭셔리 골프</span> 이스케이프.
              </>
            ) : (
              <>
                SRI LANKA&apos;S ULTIMATE <br />
                <span className="text-gold-gradient italic">CHAMPIONSHIP GOLF</span> ESCAPE.
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#CBD5E1] max-w-2xl leading-relaxed">
            {isKorean
              ? "130년 역사의 해발 1,800m 누와라엘리야, 세계 100대 절경 빅토리아, 인도양 오션 코스 샹그릴라까지—한국인 골퍼 전담 VIP 서비스와 함께하는 프리미엄 골프 여행."
              : "Tee off amidst 19th-century colonial mountain mists at 6,000 feet, lakeside fairways, and ocean-facing greens with guaranteed priority tee times and private luxury chauffeured sprinters."}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <LuxuryButton
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              size="lg"
              withArrow
            >
              {isKorean ? "골프 전용 맞춤 일정 신청" : "REQUEST A GOLF ITINERARY"}
            </LuxuryButton>

            <a
              href="https://open.kakao.com/o/sLankaLuxe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-none bg-[#FEE500] hover:bg-[#edd400] text-[#3C1E1E] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:scale-105"
            >
              <span>카카오톡 1:1 골프 빠른 상담</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Dedicated Korean Golfer Concierge Hub */}
      <section className="py-12 bg-gradient-to-r from-[#102A4C] via-[#08221D] to-[#102A4C] border-y border-[#C9A86A]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C98B] uppercase tracking-wider">
                <span className="text-base">🇰🇷</span>
                <span>한국인 여행객 및 골퍼를 위한 특별 VIP 케어</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                Luxury Golf Travel for Discerning Korean Visitors
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                스리랑카는 쫓기지 않는 여유로운 플레이와 온화한 기후(누와라엘리야 18°C), 세계적인 명문 코스를 두루 갖추고 있습니다. 랑카 럭스 저니는 한국인 골퍼분들의 눈높이에 맞춰 전 일정 전용 리무진 밴, 한국어 전담 컨시어지, 황금 시간대 티타임 및 최고급 5성급 리조트 연박을 보장합니다.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {[
                "오전 08:00~09:30 황금 VIP 티타임 100% 보장",
                "골프백 전용 수납 벤츠 스프린터 / 전용 SUV",
                "베테랑 싱글 핸디캡 전담 캐디 배정",
                "라운드 후 전신 아유르베다 피로회복 스파",
                "24시간 실시간 카카오톡 한국어 전담 상담",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#E5C98B]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Golf Packages */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={isKorean ? "추천 골프 패키지" : "GOLF COLLECTIONS"}
          title={isKorean ? "스리랑카 럭셔리 골프 패키지" : "Featured Golf Packages"}
          subtitle={
            isKorean
              ? "숙박, 전 라운드 그린피/카트/캐디, 전용 리무진 및 VIP 의전이 모두 포함된 올인클루시브 패키지입니다."
              : "Complete golf journeys featuring green fees, carts, caddies, 5-star resort stays, and chauffeured transit."
          }
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {golfPackages.map((pkg) => {
            const name = pkg.name[language] || pkg.name.en;
            const desc = pkg.description[language] || pkg.description.en;
            const highlight = pkg.highlight[language] || pkg.highlight.en;
            const duration = pkg.duration[language] || pkg.duration.en;

            return (
              <div
                key={pkg.id}
                className="group rounded-2xl overflow-hidden glass-luxury-card border border-[#C9A86A]/30 flex flex-col justify-between transition-all duration-500 hover:border-[#E5C98B] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(201,168,106,0.25)]"
              >
                <div>
                  {/* Photo */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#081A33]">
                    <Image
                      src={pkg.image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-transparent to-black/30" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#0D362C]/90 border border-[#25D366]/40 text-xs text-[#E5C98B] font-semibold">
                        {pkg.rounds} Rounds Included
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className="px-3 py-1.5 rounded-lg bg-[#081A33]/90 border border-[#C9A86A]/40">
                        <span className="text-[10px] text-[#A7B0BE] block uppercase">From</span>
                        <span className="text-lg font-serif-luxury font-bold text-[#E5C98B]">
                          {formatCurrency(pkg.priceUSD)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#C9A86A] block">
                        {duration}
                      </span>
                      <h3 className="text-xl font-serif-luxury text-white group-hover:text-[#E5C98B] transition-colors leading-snug">
                        {name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#CBD5E1] leading-relaxed">
                      {highlight}
                    </p>

                    {/* Courses included */}
                    <div className="space-y-1 pt-2 border-t border-[#102A4C]">
                      <span className="text-[10px] uppercase text-[#A7B0BE] tracking-wider block font-semibold">
                        Included Championship Courses:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.courses.map((c, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#102A4C]/80 text-[10px] text-[#E5C98B]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#102A4C]/60 flex items-center justify-between">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 bg-[#E5C98B] hover:bg-[#C9A86A] text-[#081A33] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    {isKorean ? "이 패키지 견적 요청" : "Request Quote"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Deep Dive into All 5 Championship Courses */}
      <section className="py-20 lg:py-28 bg-[#061427] border-t border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={isKorean ? "코스 가이드" : "COURSE DIRECTORY"}
            title={isKorean ? "스리랑카 5대 명문 골프장 심층 탐방" : "The 5 Championship Courses"}
            subtitle={
              isKorean
                ? "각 골프장별 역사, 설계자, 야디지, 시그니처 홀 및 드레스코드 안내입니다."
                : "Explore the distinct architectural character and elevation of each championship course."
            }
            align="center"
            theme="dark"
          />

          {/* Interactive Course Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {golfCourses.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCourse(c)}
                className={`px-4 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCourse.id === c.id
                    ? "bg-[#C9A86A] text-[#081A33] font-bold shadow-lg"
                    : "bg-[#102A4C]/60 text-[#A7B0BE] border border-[#C9A86A]/20 hover:text-white"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Detailed Course Profile View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 rounded-3xl glass-luxury-card border border-[#C9A86A]/40 p-6 sm:p-10 items-center">
            {/* Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#081A33] border border-[#C9A86A]/30 shadow-2xl">
                <Image
                  src={selectedCourse.image}
                  alt={selectedCourse.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A] text-xs text-[#E5C98B] font-semibold">
                    Est. {selectedCourse.established}
                  </span>
                </div>
              </div>
            </div>

            {/* Course Specs & Description */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9A86A] font-semibold block">
                  {selectedCourse.region} • {selectedCourse.elevation}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif-luxury text-white mt-1">
                  {selectedCourse.name}
                </h3>
                <p className="text-xs text-[#A7B0BE] mt-1">
                  Course Designer: <strong className="text-white">{selectedCourse.designer}</strong>
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#102A4C] text-center">
                <div className="bg-[#081A33] p-2.5 rounded-lg border border-[#C9A86A]/20">
                  <span className="text-[10px] text-[#A7B0BE] block">Holes</span>
                  <span className="text-xl font-serif-luxury font-bold text-[#E5C98B]">
                    {selectedCourse.holes}
                  </span>
                </div>
                <div className="bg-[#081A33] p-2.5 rounded-lg border border-[#C9A86A]/20">
                  <span className="text-[10px] text-[#A7B0BE] block">Par</span>
                  <span className="text-xl font-serif-luxury font-bold text-[#E5C98B]">
                    {selectedCourse.par}
                  </span>
                </div>
                <div className="bg-[#081A33] p-2.5 rounded-lg border border-[#C9A86A]/20">
                  <span className="text-[10px] text-[#A7B0BE] block">Total Yardage</span>
                  <span className="text-xl font-serif-luxury font-bold text-[#E5C98B]">
                    {selectedCourse.yardage} yds
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {selectedCourse.description[language] || selectedCourse.description.en}
              </p>

              {/* Signature Hole */}
              <div className="p-4 rounded-xl bg-[#0D362C]/60 border border-[#25D366]/30 space-y-1">
                <span className="text-xs font-semibold text-[#25D366] flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5" />
                  {isKorean
                    ? `시그니처 홀 #${selectedCourse.signatureHole.number} (Par ${selectedCourse.signatureHole.par})`
                    : `Signature Hole #${selectedCourse.signatureHole.number} (Par ${selectedCourse.signatureHole.par})`}
                </span>
                <p className="text-xs text-[#CBD5E1]">
                  {selectedCourse.signatureHole.description[language] ||
                    selectedCourse.signatureHole.description.en}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <LuxuryButton
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="sm"
                  withArrow
                >
                  {isKorean ? "이 코스 포함 일정 문의" : "Include in Custom Itinerary"}
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CustomTripModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialInterest="golf"
      />
    </div>
  );
}
