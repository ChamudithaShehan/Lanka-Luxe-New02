"use client";

import React, { useState } from "react";
import { MessageCircle, X, ExternalLink, Sparkles, Send, Phone } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function WhatsAppFloating() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"whatsapp" | "kakao">("whatsapp");
  const [customMsg, setCustomMsg] = useState("");

  const isKorean = language === "ko";

  const handleWhatsAppSend = () => {
    const defaultText = isKorean
      ? "안녕하세요! 스리랑카 럭셔리 여행 및 골프 투어 맞춤 견적 문의드립니다."
      : "Hello Lanka Luxe Journeys! I would like to inquire about a bespoke luxury itinerary in Sri Lanka.";
    const textToSend = customMsg.trim() ? customMsg.trim() : defaultText;
    const url = `https://wa.me/94771234567?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank");
  };

  const handleKakaoOpen = () => {
    // Open KakaoTalk channel / consultation link
    window.open("https://open.kakao.com/o/sLankaLuxe", "_blank");
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating Mini Tooltip Badge */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A4C]/95 border border-[#C9A86A]/40 text-[#E5C98B] text-xs font-sans shadow-xl backdrop-blur-md hover:border-[#C9A86A] transition-all duration-300 animate-pulse hover:animate-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isKorean ? "VIP 컨시어지 실시간 상담" : "24/7 VIP Concierge Online"}</span>
          </button>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Concierge Chat"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#081A33] via-[#102A4C] to-[#183861] border border-[#C9A86A] text-[#E5C98B] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(201,168,106,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-[#C9A86A]/20 blur-md group-hover:bg-[#C9A86A]/40 transition-colors" />
          {isOpen ? (
            <X className="w-6 h-6 text-[#E5C98B] relative z-10" />
          ) : (
            <MessageCircle className="w-6 h-6 text-[#E5C98B] relative z-10" />
          )}
        </button>
      </div>

      {/* Concierge Pop-up Modal Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[92vw] max-w-sm rounded-2xl bg-[#081A33]/95 border border-[#C9A86A]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(201,168,106,0.2)] backdrop-blur-2xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#102A4C] to-[#081A33] p-4 border-b border-[#C9A86A]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C9A86A]/20 border border-[#C9A86A] flex items-center justify-center text-[#E5C98B]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-serif-luxury text-white font-medium">
                  {isKorean ? "랑카 럭스 VIP 컨시어지" : "Lanka Luxe VIP Concierge"}
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#A7B0BE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{isKorean ? "실시간 상담 가능 (평균 10분 내 답변)" : "Online • Replies within minutes"}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#A7B0BE] hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Channel Tabs */}
          <div className="flex border-b border-[#C9A86A]/20 bg-[#061427]">
            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`flex-1 py-2.5 text-xs font-sans font-medium flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === "whatsapp"
                  ? "border-[#25D366] text-[#25D366] bg-[#25D366]/5"
                  : "border-transparent text-[#A7B0BE] hover:text-white"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              WhatsApp (Global)
            </button>
            <button
              onClick={() => setActiveTab("kakao")}
              className={`flex-1 py-2.5 text-xs font-sans font-medium flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === "kakao"
                  ? "border-[#FEE500] text-[#FEE500] bg-[#FEE500]/5"
                  : "border-transparent text-[#A7B0BE] hover:text-white"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#FEE500]" />
              카카오톡 (한국어)
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 space-y-3.5">
            {activeTab === "whatsapp" ? (
              <>
                <p className="text-xs text-[#A7B0BE] leading-relaxed">
                  {isKorean
                    ? "콜롬보 본사 VIP 데스크와 왓츠앱으로 즉시 1:1 대화를 시작하세요. (영어 및 번역 지원)"
                    : "Chat directly with our Senior Travel Curators in Colombo via WhatsApp for quick quotes and instant villa availability."}
                </p>

                <div className="bg-[#102A4C]/60 rounded-lg p-2.5 border border-[#C9A86A]/20">
                  <textarea
                    rows={2}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder={
                      isKorean
                        ? "문의 내용을 입력해 주세요 (예: 10월 4인 골프 투어 견적)"
                        : "Type your message or travel dates (e.g. 10-day golf tour in Nov)..."
                    }
                    className="w-full bg-transparent text-xs text-white placeholder-[#A7B0BE]/60 focus:outline-none resize-none"
                  />
                </div>

                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#081A33] font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isKorean ? "왓츠앱으로 상담 시작" : "Start WhatsApp Chat"}</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-[#FEE500]/10 border border-[#FEE500]/30 rounded-lg p-3 space-y-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#FEE500]">카카오톡 1:1 전용 채널</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FEE500]/20 text-[#FEE500]">한국인 전담</span>
                  </div>
                  <p className="text-xs text-[#E5C98B]">
                    카카오톡 채널 ID: <strong className="text-white">LankaLuxeJourneys</strong>
                  </p>
                  <p className="text-[11px] text-[#A7B0BE]">
                    한국인 골퍼 및 허니문 고객님을 위한 실시간 1:1 맞춤 견적 및 상담 채널입니다.
                  </p>
                </div>

                <button
                  onClick={handleKakaoOpen}
                  className="w-full py-2.5 rounded-lg bg-[#FEE500] hover:bg-[#edd400] text-[#3C1E1E] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>카카오톡 1:1 채팅 바로 연결</span>
                </button>
              </>
            )}

            {/* Direct Phone / Desk */}
            <div className="pt-2 border-t border-[#C9A86A]/20 flex items-center justify-between text-[11px] text-[#A7B0BE]">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#C9A86A]" /> +94 77 123 4567
              </span>
              <span>concierge@lankaluxe.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
