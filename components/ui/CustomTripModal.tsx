"use client";

import React, { useState, useEffect } from "react";
import { X, Check, Sparkles, Calendar, Users, Hotel, Flag, Send, Compass } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import LuxuryButton from "./LuxuryButton";

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function CustomTripModal({
  isOpen,
  onClose,
  initialInterest,
}: CustomTripModalProps) {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    interest: initialInterest || "golf",
    duration: "10-14-days",
    hotelTier: "relais-aman",
    golfRounds: "4-6-rounds",
    partySize: "2-guests",
    travelDates: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialInterest) {
      setFormData((prev) => ({ ...prev, interest: initialInterest }));
    }
  }, [initialInterest]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
      setStep(1);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const travelInterests = [
    { id: "golf", label: isKorean ? "챔피언십 골프 & 리조트" : "Championship Golf & Resorts", icon: Flag },
    { id: "luxury", label: isKorean ? "울트라 럭셔리 & 프라이빗 빌라" : "Ultra-Luxury & Private Villas", icon: Hotel },
    { id: "wildlife", label: isKorean ? "야생 표범 & 코끼리 사파리" : "Wildlife Safaris & Leopards", icon: Compass },
    { id: "honeymoon", label: isKorean ? "허니문 & 프라이빗 로맨스" : "Honeymoon & Romantic Escape", icon: Sparkles },
    { id: "culture", label: isKorean ? "역사 유적 & 고대 문화 탐방" : "Ancient Heritage & Culture", icon: Compass },
    { id: "wellness", label: isKorean ? "아유르베다 & 힐링 웰니스" : "Ayurveda & Holistic Wellness", icon: Sparkles },
  ];

  const durationOptions = [
    { id: "5-7-days", label: isKorean ? "5 - 7일 (쇼트 이스케이프)" : "5 - 7 Days (Short Escape)" },
    { id: "8-11-days", label: isKorean ? "8 - 11일 (클래식 시그니처)" : "8 - 11 Days (Classic Signature)" },
    { id: "12-16-days", label: isKorean ? "12 - 16일 (그랜드 일주)" : "12 - 16 Days (Grand Odyssey)" },
    { id: "custom-days", label: isKorean ? "17일 이상 맞춤 일정" : "17+ Days (Extended Bespoke)" },
  ];

  const hotelTiers = [
    {
      id: "relais-aman",
      label: isKorean ? "최상급 릴레앤샤토 & 아만 리조트" : "Relais & Châteaux / Aman Exclusive",
      desc: isKorean ? "Ceylon Tea Trails, Wild Coast Tented Lodge, Amangalla" : "Ultra-luxury colonial bungalows & cliffside villas",
    },
    {
      id: "five-star-luxury",
      label: isKorean ? "5성급 프리미엄 럭셔리 호텔" : "5-Star Premium Luxury Resorts",
      desc: isKorean ? "Shangri-La, Water Garden Sigiriya, Grand Hotel" : "Championship golf resorts & heritage grand dames",
    },
    {
      id: "boutique-heritage",
      label: isKorean ? "부티크 헤리티지 & 웰니스 빌라" : "Boutique Heritage & Wellness Villas",
      desc: isKorean ? "프라이빗 독채 빌라 및 친환경 럭셔리 샬레" : "Exclusive secluded nature & tea chalets",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop with blur */}
      <div
        className="fixed inset-0 bg-[#040D1A]/85 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#102A4C] via-[#081A33] to-[#040D1A] border border-[#C9A86A]/40 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(201,168,106,0.25)] z-10 overflow-hidden text-white my-8">
        {/* Decorative Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C9A86A] via-[#E5C98B] to-[#C9A86A]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#081A33]/80 border border-[#C9A86A]/30 text-[#A7B0BE] hover:text-[#E5C98B] hover:border-[#C9A86A] flex items-center justify-center transition-all cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-[#C9A86A]/20 border-2 border-[#C9A86A] text-[#E5C98B] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(201,168,106,0.4)]">
              <Check className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#C9A86A]">
                {isKorean ? "맞춤 여행 상담 접수 완료" : "Inquiry Received"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                {isKorean ? "스리랑카 럭셔리 여정이 시작됩니다" : "Your Ceylon Odyssey Awaits"}
              </h3>
              <p className="text-sm text-[#A7B0BE] max-w-md mx-auto leading-relaxed">
                {isKorean
                  ? `감사합니다, ${formData.name || "고객"}님! 작성해 주신 내용을 바탕으로 Lanka Luxe 수석 컨시어지가 12시간 이내에 1:1 맞춤 견적서와 세부 일정을 보내드립니다.`
                  : `Thank you, ${formData.name || "valued traveler"}! Our Senior Luxury Concierge is curating your personalized Sri Lankan travel proposal and will contact you within 12 hours.`}
              </p>
            </div>

            {/* Quick messenger actions */}
            <div className="pt-4 border-t border-[#C9A86A]/20 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/94771234567?text=Hello%20Lanka%20Luxe!%20I%20just%20submitted%20a%20trip%20inquiry%20for%20${encodeURIComponent(formData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-none bg-[#25D366] text-[#081A33] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isKorean ? "왓츠앱으로 즉시 대화하기" : "Connect via WhatsApp"}</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-none bg-[#102A4C] border border-[#C9A86A]/50 text-[#E5C98B] font-semibold text-xs uppercase tracking-wider hover:bg-[#183861] transition-all cursor-pointer"
              >
                {isKorean ? "닫기" : "Close"}
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A86A] mb-2 font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.modal.title}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                {step === 1 && (isKorean ? "1단계: 원하시는 여행 테마" : "Step 1: Your Travel Style")}
                {step === 2 && (isKorean ? "2단계: 기간 및 호텔 등급" : "Step 2: Duration & Hotel Tier")}
                {step === 3 && (isKorean ? "3단계: 고객 정보 입력" : "Step 3: Guest Details")}
              </h3>
              <p className="text-xs text-[#A7B0BE] mt-1">{t.modal.subtitle}</p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      step >= s ? "bg-[#C9A86A]" : "bg-[#102A4C]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Travel Style / Interests */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <label className="block text-xs uppercase tracking-wider text-[#C9A86A] font-sans font-semibold">
                    {isKorean ? "여행의 주요 목적과 관심사를 선택해 주세요:" : "Select your primary travel passions:"}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {travelInterests.map((item) => {
                      const Icon = item.icon;
                      const isSelected = formData.interest === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, interest: item.id })}
                          className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#C9A86A]/20 border-[#C9A86A] text-[#E5C98B] shadow-[0_0_15px_rgba(201,168,106,0.2)]"
                              : "bg-[#102A4C]/40 border-[#C9A86A]/20 text-[#A7B0BE] hover:border-[#C9A86A]/50 hover:text-white"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected ? "bg-[#C9A86A] text-[#081A33]" : "bg-[#081A33] text-[#C9A86A]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-sans font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Duration, Hotel Tier, Golf */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in">
                  {/* Duration */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] font-sans font-semibold mb-2">
                      {isKorean ? "희망 여행 기간:" : "Preferred Trip Duration:"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {durationOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, duration: opt.id })}
                          className={`p-2.5 rounded-lg border text-center text-xs transition-all cursor-pointer ${
                            formData.duration === opt.id
                              ? "bg-[#C9A86A]/20 border-[#C9A86A] text-[#E5C98B]"
                              : "bg-[#102A4C]/40 border-[#C9A86A]/20 text-[#A7B0BE] hover:text-white"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hotel Tier */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] font-sans font-semibold mb-2">
                      {isKorean ? "선호 숙소 등급:" : "Preferred Accommodation Grade:"}
                    </label>
                    <div className="space-y-2">
                      {hotelTiers.map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, hotelTier: tier.id })}
                          className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                            formData.hotelTier === tier.id
                              ? "bg-[#C9A86A]/20 border-[#C9A86A] text-[#E5C98B]"
                              : "bg-[#102A4C]/40 border-[#C9A86A]/20 text-[#A7B0BE] hover:text-white"
                          }`}
                        >
                          <div>
                            <div className="text-xs font-semibold text-white">{tier.label}</div>
                            <div className="text-[11px] text-[#A7B0BE] mt-0.5">{tier.desc}</div>
                          </div>
                          {formData.hotelTier === tier.id && <Check className="w-4 h-4 text-[#C9A86A]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Golf rounds question */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9A86A] font-sans font-semibold mb-2">
                      {isKorean ? "골프 라운드 포함 여부:" : "Golf Rounds Desired:"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "no-golf", label: isKorean ? "골프 없음" : "No Golf" },
                        { id: "2-3-rounds", label: isKorean ? "2 - 3 라운드" : "2 - 3 Rounds" },
                        { id: "4-6-rounds", label: isKorean ? "4 - 6 라운드" : "4 - 6 Rounds" },
                        { id: "daily-golf", label: isKorean ? "매일 라운드" : "Daily Golf" },
                      ].map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, golfRounds: g.id })}
                          className={`p-2 rounded-lg border text-center text-xs transition-all cursor-pointer ${
                            formData.golfRounds === g.id
                              ? "bg-[#C9A86A]/20 border-[#C9A86A] text-[#E5C98B]"
                              : "bg-[#102A4C]/40 border-[#C9A86A]/20 text-[#A7B0BE] hover:text-white"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Guest Information */}
              {step === 3 && (
                <div className="space-y-3.5 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                        {isKorean ? "성함 (영문/한글) *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isKorean ? "홍길동 (Hong Gil Dong)" : "Lord Harrison Vance"}
                        className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                        {isKorean ? "이메일 주소 *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vip@example.com"
                        className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                        {isKorean ? "연락처 / 카카오톡 ID *" : "Phone / WhatsApp / Kakao *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+82 10-1234-5678"
                        className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                        {isKorean ? "거주 국가" : "Country of Residence"}
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder={isKorean ? "대한민국 (South Korea)" : "United Kingdom / USA"}
                        className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                        {isKorean ? "예상 출발 시기" : "Estimated Travel Dates"}
                      </label>
                      <input
                        type="text"
                        value={formData.travelDates}
                        onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                        placeholder={isKorean ? "예: 2026년 10월 초" : "e.g. October 2026"}
                        className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                        {isKorean ? "여행 인원 수" : "Total Guests"}
                      </label>
                      <input
                        type="text"
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        placeholder={isKorean ? "성인 4명 (골프 4인)" : "2 Adults / 4 Golfers"}
                        className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#A7B0BE] mb-1 font-sans">
                      {isKorean ? "특별 요청 사항 / 선호 코스" : "Special Desires / Specific Courses"}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder={
                        isKorean
                          ? "예: 빅토리아 골프 리조트 2회 라운드, 실론 티 트레일스 방갈로 숙박 희망..."
                          : "e.g. Include Victoria Golf Resort, private helicopter transfer..."
                      }
                      className="w-full bg-[#102A4C]/60 border border-[#C9A86A]/30 rounded-lg px-3.5 py-2 text-xs text-white placeholder-[#A7B0BE]/50 focus:outline-none focus:border-[#C9A86A] resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-[#C9A86A]/20 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 text-xs text-[#A7B0BE] hover:text-white uppercase tracking-wider font-sans cursor-pointer transition-colors"
                  >
                    {t.modal.back}
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <LuxuryButton
                    type="button"
                    onClick={() => setStep(step + 1)}
                    variant="primary"
                    size="sm"
                    withArrow
                  >
                    {t.modal.next}
                  </LuxuryButton>
                ) : (
                  <LuxuryButton
                    type="submit"
                    variant="primary"
                    size="md"
                    withArrow
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? isKorean
                        ? "전송 중..."
                        : "Submitting..."
                      : t.modal.finish}
                  </LuxuryButton>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
