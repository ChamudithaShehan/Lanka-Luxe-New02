"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { testimonialsData } from "@/lib/data/testimonialsData";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export default function TestimonialsSlider() {
  const { language, t } = useLanguage();
  const isKorean = language === "ko";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));
  };

  const review    = testimonialsData[currentIndex];
  const quoteText = review.quote[language] || review.quote.en;
  const tourText  = review.tourTaken[language] || review.tourTaken.en;

  return (
    <section className="relative bg-section-white text-[#081A33] py-16 sm:py-24 lg:py-36 overflow-hidden font-sans">
      {/* Top hairline */}
      <div className="gold-divider absolute top-0 left-0 right-0" />

      {/* Soft cream glow in centre */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#C9A86A]/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <MotionFadeIn direction="up">
          <div className="text-center mb-14">
            <span className="section-label-light mx-auto">{t.reviews.label}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#081A33] leading-tight">
              {t.reviews.title}
            </h2>
          </div>
        </MotionFadeIn>

        {/* Review Card */}
        <div className="white-card p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* Decorative giant quote mark */}
          <div className="absolute top-6 right-8 text-[80px] sm:text-[120px] font-serif-luxury text-[#F0EBE3] leading-none select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="space-y-7">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-xl sm:text-2xl font-serif-luxury text-[#081A33] italic leading-relaxed">
                  &ldquo;{quoteText}&rdquo;
                </p>

                {/* Tour pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F3EE] border border-[#E8E2D9] text-xs text-[#A08047] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
                  {tourText}
                </div>

                {/* Author row */}
                <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                  <div>
                    <p className="font-serif-luxury text-lg text-[#081A33] font-medium">{review.name}</p>
                    <p className="text-xs text-[#A7B0BE] font-sans">{review.country}</p>
                  </div>
                  {review.flag && (
                    <span className="text-3xl" aria-hidden="true">{review.flag}</span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white border border-[#E8E2D9] text-[#4A5568] hover:border-[#C9A86A] hover:text-[#A08047] hover:bg-[#F6F3EE] flex items-center justify-center transition-all shadow-sm cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? "bg-[#C9A86A] w-6" : "bg-[#E8E2D9] w-1.5 hover:bg-[#C9A86A]/50"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white border border-[#E8E2D9] text-[#4A5568] hover:border-[#C9A86A] hover:text-[#A08047] hover:bg-[#F6F3EE] flex items-center justify-center transition-all shadow-sm cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
