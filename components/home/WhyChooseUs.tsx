"use client";

import React from "react";
import { Compass, Sparkles, Flag, Hotel, Car, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const icons = [Compass, Sparkles, Flag, Hotel, Car, ShieldCheck];

  return (
    <section className="relative bg-section-snow text-[#081A33] py-16 sm:py-24 lg:py-36 overflow-hidden font-sans">
      {/* Very subtle grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#C9A86A22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <MotionFadeIn direction="up">
          <div className="text-center mb-16">
            <span className="section-label-light mx-auto">{t.whyUs.label}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
              {t.whyUs.title}
            </h2>
            <p className="mt-4 text-sm text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              {t.whyUs.subtitle}
            </p>
            {/* Gold ornament under heading */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] bg-[#C9A86A]/60" />
              <span className="w-2 h-2 rotate-45 border border-[#C9A86A] bg-[#F8FAFC]" />
              <span className="w-12 h-[1px] bg-[#C9A86A]/60" />
            </div>
          </div>
        </MotionFadeIn>

        {/* 6 cards grid */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {t.whyUs.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <MotionStaggerItem key={item.num} direction={index % 2 === 0 ? "right" : "left"}>
                <div className="white-card group p-8 h-full flex flex-col justify-between overflow-hidden">
                  {/* Top row */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-serif-luxury font-light text-[#E8E2D9] group-hover:text-[#C9A86A]/30 transition-colors">
                        {item.num}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#F6F3EE] border border-[#E8E2D9] text-[#A08047] flex items-center justify-center group-hover:bg-[#C9A86A] group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif-luxury text-[#081A33] mb-3 group-hover:text-[#A08047] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#4A5568] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#C9A86A]/70 group-hover:text-[#A08047] font-semibold transition-colors">
                      Lanka Luxe Standard
                    </span>
                    <span className="w-1.5 h-1.5 rotate-45 border border-[#C9A86A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
