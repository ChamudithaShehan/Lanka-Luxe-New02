"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Send,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Check,
  Clock,
  Shield,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    travelDates: "",
    travelers: "2 Travelers",
    interest: "golf",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const faqs = [
    {
      q: isKorean
        ? "한국인 여행객 및 골퍼를 위한 전담 서비스가 있나요?"
        : "What dedicated services are available for international and Korean travelers?",
      a: isKorean
        ? "네, 전 일정 한국어 카카오톡 1:1 컨시어지 케어, 골프백 수납 전용 럭셔리 밴(벤츠 스프린터/고급 SUV), 빅토리아 및 누와라엘리야 골프장 VIP 티타임 100% 보장 및 한국어 맞춤 안내서가 제공됩니다."
        : "We provide 24/7 dedicated concierge care, English and Korean speaking senior private chauffeur guides, guaranteed priority tee times, luxury Mercedes sprinter vehicles with specialized golf-bag storage, and VIP airport fast-track clearance.",
    },
    {
      q: isKorean
        ? "스리랑카 골프 여행의 가장 좋은 시기는 언제인가요?"
        : "When is the ideal time to visit Sri Lanka for luxury travel and golf?",
      a: isKorean
        ? "해발 1,800m 누와라엘리야와 캔디 빅토리아는 연중 15~24°C의 쾌적한 봄 날씨로 사계절 내내 골프가 가능합니다. 특히 10월부터 이듬해 4월까지는 맑고 쾌청한 최적의 성수기입니다."
        : "Sri Lanka is a year-round destination. The central hill country (Nuwara Eliya & Kandy Victoria) enjoys crisp, pleasant weather (15°C–24°C) throughout the year, with December through April offering ideal sunshine across the south and cultural regions.",
    },
    {
      q: isKorean
        ? "공항 입국 시 VIP 패스트트랙 의전이 제공되나요?"
        : "Is VIP Fast-Track airport assistance included?",
      a: isKorean
        ? "네, 콜롬보 반다라나이케 국제공항(BIA) 도착 직후 전담 VIP 요원이 마중 나와 입국 심사 및 수하물 수취를 신속하게 대행하며, 전용 VIP 라운지 이용을 지원합니다."
        : "Yes, our luxury clients receive executive Meet & Assist directly upon stepping off the aircraft, expedited customs clearance, and seamless luggage handling straight to your private chauffeured vehicle.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 border-b border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/40 text-[#E5C98B] text-xs uppercase tracking-[0.3em] font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKorean ? "VIP 컨시어지 데스크" : "DIRECT CONCIERGE ACCESS"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white">
            {t.contact.title}
          </h1>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Comprehensive Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl glass-luxury-card border border-[#C9A86A]/30 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#C9A86A] font-semibold block">
                {isKorean ? "맞춤 견적 의뢰서" : "Bespoke Request Form"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white mt-1">
                {isKorean ? "여행 희망 일정 작성" : "Design Your Private Itinerary"}
              </h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#C9A86A]/20 border-2 border-[#C9A86A] text-[#E5C98B] mx-auto flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif-luxury text-white">
                  {isKorean ? "문의가 정상 접수되었습니다" : "Inquiry Successfully Sent"}
                </h3>
                <p className="text-sm text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                  {t.contact.success}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#102A4C] border border-[#C9A86A]/40 text-[#E5C98B] text-xs uppercase tracking-wider hover:bg-[#183861] transition-all cursor-pointer"
                >
                  {isKorean ? "새로운 문의 작성" : "Submit Another Request"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isKorean ? "김민준" : "Arthur Cavendish"}
                      className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#A7B0BE]/40 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vip@luxury.com"
                      className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#A7B0BE]/40 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.phone}
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isKorean ? "+82 10-1234-5678" : "+44 7700 900077"}
                      className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#A7B0BE]/40 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.country}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={isKorean ? "대한민국" : "United Kingdom"}
                      className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#A7B0BE]/40 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.dates}
                    </label>
                    <input
                      type="text"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      placeholder={isKorean ? "10월 중순" : "Oct 2026"}
                      className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#A7B0BE]/40 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.travelers}
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full bg-[#102A4C] border border-[#C9A86A]/30 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C9A86A]"
                    >
                      <option value="2 Guests (Couple)">2 {isKorean ? "명 (커플/허니문)" : "Guests (Couple)"}</option>
                      <option value="4 Guests (Golf Group)">4 {isKorean ? "명 (골프 4인)" : "Golfers (4-Ball)"}</option>
                      <option value="Family (3-6 Guests)">{isKorean ? "가족 여행 (3-6명)" : "Family (3-6 Guests)"}</option>
                      <option value="VIP Solo Traveller">{isKorean ? "프라이빗 1인 여행" : "VIP Solo Traveller"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                      {t.contact.interest}
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#102A4C] border border-[#C9A86A]/30 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C9A86A]"
                    >
                      <option value="golf">{isKorean ? "골프 홀리데이" : "Championship Golf"}</option>
                      <option value="luxury">{isKorean ? "울트라 럭셔리 투어" : "Ultra-Luxury Tour"}</option>
                      <option value="wildlife">{isKorean ? "야생 사파리 & 표범" : "Wildlife & Leopard Safari"}</option>
                      <option value="honeymoon">{isKorean ? "허니문 & 로맨스" : "Romantic Honeymoon"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C9A86A] mb-1.5 font-medium">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isKorean
                        ? "원하시는 여행 취향, 특별 요청사항(빅토리아 골프 리조트 라운드 수, 실론 티 트레일스 방갈로 숙박 등)을 자유롭게 적어주세요."
                        : "Describe your travel style, preferred pace, hotels (Aman, Relais & Châteaux), or golf courses..."
                    }
                    className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-4 py-2.5 text-xs text-white placeholder-[#A7B0BE]/40 focus:outline-none focus:border-[#C9A86A] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <LuxuryButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    withArrow
                  >
                    {isSubmitting ? t.contact.submitting : t.contact.submit}
                  </LuxuryButton>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Direct Desks & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Messenger Channels */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif-luxury text-white">
                {t.contact.directTitle}
              </h3>

              {/* Kakao Box */}
              <a
                href="https://open.kakao.com/o/sLankaLuxe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FEE500]/10 border border-[#FEE500]/40 flex items-start gap-4 hover:bg-[#FEE500]/20 transition-all block"
              >
                <div className="w-10 h-10 rounded-full bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center shrink-0 font-black text-sm">
                  TALK
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#FEE500]">
                      {t.contact.kakaoTitle}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-[#FEE500]" />
                  </div>
                  <p className="text-xs text-[#CBD5E1]">
                    {t.contact.kakaoDesc}
                  </p>
                  <span className="text-[11px] text-[#E5C98B] font-mono block">
                    ID: LankaLuxeJourneys
                  </span>
                </div>
              </a>

              {/* WhatsApp Box */}
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 flex items-start gap-4 hover:bg-[#25D366]/20 transition-all block"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-[#081A33] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#25D366]">
                      {t.contact.whatsappTitle}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
                  </div>
                  <p className="text-xs text-[#CBD5E1]">
                    {t.contact.whatsappDesc}
                  </p>
                  <span className="text-[11px] text-[#E5C98B] font-mono block">
                    +94 77 123 4567
                  </span>
                </div>
              </a>
            </div>

            {/* Concierge Desks Locations */}
            <div className="p-6 rounded-2xl bg-[#102A4C]/60 border border-[#C9A86A]/25 space-y-4 text-xs">
              <div className="flex items-center gap-2 text-[#E5C98B] font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#C9A86A]" />
                <span>Our Concierge Desks</span>
              </div>

              <div className="space-y-3 text-[#A7B0BE]">
                <div>
                  <strong className="text-white block">Colombo Flagship Concierge:</strong>
                  <span>Level 28, World Trade Center, Echelon Square, Colombo 01, Sri Lanka</span>
                </div>
                <div className="pt-2 border-t border-[#102A4C]">
                  <strong className="text-white block">Seoul Partner Desk (한국 지사):</strong>
                  <span>서울특별시 강남구 테헤란로 521 파르나스타워 18층 VIP 라운지</span>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="text-sm uppercase tracking-wider text-[#E5C98B] font-semibold flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#C9A86A]" />
                <span>{isKorean ? "자주 묻는 질문 (FAQ)" : "Frequently Asked Questions"}</span>
              </h4>

              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#102A4C]/40 border border-[#C9A86A]/20 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-3.5 text-left text-xs font-semibold text-white flex items-center justify-between cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#C9A86A]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#A7B0BE]" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-3.5 pt-0 text-xs text-[#CBD5E1] border-t border-[#102A4C] leading-relaxed animate-in fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
