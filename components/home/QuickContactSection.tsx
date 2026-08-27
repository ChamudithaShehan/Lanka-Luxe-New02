"use client";

import React, { useState } from "react";
import {
  Send, Phone, Mail, MapPin, MessageCircle, ExternalLink, Check,
} from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function QuickContactSection() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";

  const [formData, setFormData] = useState({
    name: "", email: "", country: "", phone: "",
    travelDates: "", travelers: "2 Travelers", interest: "golf", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]       = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 900);
  };

  const inputCls = "w-full bg-[#F8FAFC] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-xs text-[#081A33] placeholder-[#A7B0BE] focus:outline-none focus:border-[#C9A86A] focus:ring-1 focus:ring-[#C9A86A]/30 transition-all";

  return (
    <section className="relative bg-section-snow text-[#081A33] py-16 sm:py-24 lg:py-36 overflow-hidden font-sans">
      {/* Top hairline */}
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <MotionFadeIn direction="up">
          <div className="text-center mb-14">
            <span className="section-label-light mx-auto">{isKorean ? "VIP 컨시어지 데스크" : "DIRECT CONCIERGE ACCESS"}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-sm text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </MotionFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT: Inquiry Form */}
          <MotionFadeIn direction="up" delay={0.15} className="lg:col-span-7">
            <div className="white-card p-7 sm:p-10 shadow-md">
              <h3 className="text-xl font-serif-luxury text-[#081A33] mb-6">
                {isKorean ? "맞춤 여행 의뢰서 작성" : "Design Your Private Itinerary"}
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F6F3EE] border-2 border-[#C9A86A] text-[#A08047] mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-serif-luxury text-[#081A33]">
                    {isKorean ? "문의가 정상 접수되었습니다" : "Inquiry Successfully Sent"}
                  </h4>
                  <p className="text-sm text-[#4A5568] max-w-sm mx-auto">{t.contact.success}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 bg-[#F8FAFC] border border-[#E8E2D9] text-xs text-[#4A5568] hover:border-[#C9A86A] hover:text-[#A08047] transition-all cursor-pointer rounded-lg"
                  >
                    {isKorean ? "새 문의 작성" : "Submit Another Request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.name} *</label>
                      <input type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isKorean ? "김민준" : "Arthur Cavendish"}
                        className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.email} *</label>
                      <input type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vip@luxury.com"
                        className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.phone}</label>
                      <input type="text" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isKorean ? "+82 10-1234-5678" : "+44 7700 900077"}
                        className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.country}</label>
                      <input type="text" value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder={isKorean ? "대한민국" : "United Kingdom"}
                        className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.dates}</label>
                      <input type="text" value={formData.travelDates}
                        onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                        placeholder={isKorean ? "10월 중순" : "Oct 2026"} className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.travelers}</label>
                      <select value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className={inputCls}>
                        <option>2 {isKorean ? "명 (커플)" : "Guests (Couple)"}</option>
                        <option>4 {isKorean ? "명 (골프 4인)" : "Golfers (4-Ball)"}</option>
                        <option>{isKorean ? "가족 여행 (3-6명)" : "Family (3-6 Guests)"}</option>
                        <option>{isKorean ? "프라이빗 1인" : "VIP Solo Traveller"}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.interest}</label>
                      <select value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className={inputCls}>
                        <option value="golf">{isKorean ? "골프 홀리데이" : "Championship Golf"}</option>
                        <option value="luxury">{isKorean ? "울트라 럭셔리" : "Ultra-Luxury Tour"}</option>
                        <option value="wildlife">{isKorean ? "야생 사파리" : "Wildlife Safari"}</option>
                        <option value="honeymoon">{isKorean ? "허니문" : "Romantic Honeymoon"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#A08047] mb-1.5 font-bold">{t.contact.message}</label>
                    <textarea rows={3} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isKorean ? "여행 스타일이나 특별 요청 사항을 적어주세요." : "Describe your travel style, preferred hotels or specific courses..."}
                      className={`${inputCls} resize-none`} />
                  </div>

                  <LuxuryButton type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting} withArrow>
                    {isSubmitting ? t.contact.submitting : t.contact.submit}
                  </LuxuryButton>
                </form>
              )}
            </div>
          </MotionFadeIn>

          {/* RIGHT: Channels + Office Info */}
          <MotionFadeIn direction="up" delay={0.28} className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-serif-luxury text-[#081A33]">{t.contact.directTitle}</h3>

            {/* KakaoTalk */}
            <a href="https://open.kakao.com/o/sLankaLuxe" target="_blank" rel="noopener noreferrer"
              className="white-card p-5 flex items-start gap-4 hover:shadow-md block">
              <div className="w-10 h-10 rounded-xl bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center shrink-0 font-black text-xs shadow-sm">
                TALK
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#081A33]">{t.contact.kakaoTitle}</h4>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A7B0BE]" />
                </div>
                <p className="text-xs text-[#4A5568]">{t.contact.kakaoDesc}</p>
                <span className="text-[11px] font-mono text-[#A08047]">ID: LankaLuxeJourneys</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer"
              className="white-card p-5 flex items-start gap-4 hover:shadow-md block">
              <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#081A33]">{t.contact.whatsappTitle}</h4>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A7B0BE]" />
                </div>
                <p className="text-xs text-[#4A5568]">{t.contact.whatsappDesc}</p>
                <span className="text-[11px] font-mono text-[#A08047]">+94 77 123 4567</span>
              </div>
            </a>

            {/* Office Details */}
            <div className="white-card p-5 shadow-sm space-y-4 text-xs text-[#4A5568]">
              <h4 className="text-[10px] uppercase tracking-widest text-[#A08047] font-bold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" /> Our Concierge Desks
              </h4>
              <div className="space-y-3">
                <div>
                  <strong className="text-[#081A33] block text-xs">Colombo Flagship:</strong>
                  <span className="leading-relaxed">Level 28, World Trade Center, Echelon Square, Colombo 01</span>
                </div>
                <div className="pt-3 border-t border-[#F0EBE3]">
                  <strong className="text-[#081A33] block text-xs">Seoul Partner Desk 🇰🇷:</strong>
                  <span className="leading-relaxed">서울특별시 강남구 테헤란로 521 파르나스타워 18층</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 pt-3 border-t border-[#F0EBE3]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>+94 77 123 4567 (Colombo HQ)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C9A86A]" />
                  <span>concierge@lankaluxe.com</span>
                </div>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}
