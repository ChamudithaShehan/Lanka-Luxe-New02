"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageSquare, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import LuxuryButton from "@/components/ui/LuxuryButton";
import CustomTripModal from "@/components/ui/CustomTripModal";

export default function CustomJourneyCTA() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-16 sm:py-28 lg:py-36 overflow-hidden font-sans">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 bg-[#081A33]">
        <Image
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2000&q=85"
          alt="Ceylon Tea Country Landscape"
          fill
          sizes="100vw"
          className="object-cover scale-105"
        />
        {/* Dark Navy Atmospheric Overlays */}
        <div className="absolute inset-0 bg-[#081A33]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-transparent to-[#081A33]/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/50 text-[#E5C98B] text-xs uppercase tracking-[0.3em] font-semibold backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
          <span>{t.customCTA.tag}</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white tracking-tight leading-[1.1]">
          {t.customCTA.title}
        </h2>

        {/* Descriptive Text */}
        <p className="text-sm sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed font-normal">
          {t.customCTA.desc}
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <LuxuryButton
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="lg"
            withArrow
          >
            {t.customCTA.button}
          </LuxuryButton>

          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-none bg-[#102A4C]/80 hover:bg-[#183861] text-[#E5C98B] border border-[#C9A86A]/40 text-sm uppercase tracking-widest font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{isKorean ? "왓츠앱 빠른 문의" : "Instant WhatsApp"}</span>
          </a>
        </div>

        {/* Guarantee text */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A7B0BE]">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span>{t.customCTA.conciergeText}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span>100% Confidential & No Obligation</span>
          </span>
        </div>
      </div>

      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
