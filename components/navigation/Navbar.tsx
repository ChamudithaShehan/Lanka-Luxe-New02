"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Sparkles, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import CustomTripModal from "@/components/ui/CustomTripModal";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isKorean = language === "ko";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/tours", label: t.nav.tours },
    { href: "/golf", label: t.nav.golf },
    { href: "/destinations", label: t.nav.destinations },
    { href: "/experiences", label: t.nav.experiences },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-white py-3.5 shadow-sm border-b border-[#E8E2D9]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#38BDF8] flex items-center justify-center text-white">
                <svg className="w-4 h-4 fill-current rotate-45" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-serif-luxury tracking-[0.18em] text-[#081A33] font-bold group-hover:text-[#38BDF8] transition-colors">
                LANKA LUXE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-xs uppercase tracking-[0.16em] font-sans font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1.5 transition-colors duration-200 group ${
                    isActive ? "text-[#38BDF8]" : "text-[#081A33] hover:text-[#38BDF8]"
                  }`}
                >
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    {link.label}
                  </span>
                  {/* Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#38BDF8] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E8E2D9] text-[#081A33] flex items-center justify-center cursor-pointer hover:bg-white hover:border-[#38BDF8]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#081A33] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-300 overflow-y-auto">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-[#C9A86A]/20 pb-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-xl font-serif-luxury tracking-widest text-white">
                LANKA LUXE
              </span>
              <span className="block text-[9px] tracking-[0.3em] text-[#C9A86A]">
                JOURNEYS • SRI LANKA
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-[#102A4C] border border-[#C9A86A]/40 text-[#E5C98B] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="my-8 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg sm:text-xl font-serif-luxury flex items-center justify-between py-2 border-b border-[#102A4C] transition-colors ${
                    isActive ? "text-[#E5C98B] pl-2 border-[#C9A86A]" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer & Actions */}
          <div className="space-y-4 pt-4 border-t border-[#C9A86A]/20">
            {/* Language Switch */}
            <div className="flex items-center justify-between bg-[#102A4C] p-3 rounded-xl border border-[#C9A86A]/30">
              <span className="text-xs text-[#A7B0BE] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C9A86A]" /> {isKorean ? "언어 선택" : "Language"}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded text-xs ${
                    language === "en" ? "bg-[#C9A86A] text-[#081A33] font-bold" : "text-[#A7B0BE]"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ko")}
                  className={`px-3 py-1 rounded text-xs ${
                    language === "ko" ? "bg-[#C9A86A] text-[#081A33] font-bold" : "text-[#A7B0BE]"
                  }`}
                >
                  한국어
                </button>
              </div>
            </div>

            {/* Mobile Plan Button */}
            <LuxuryButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              variant="primary"
              size="lg"
              className="w-full"
              withArrow
            >
              {t.nav.planJourney}
            </LuxuryButton>
          </div>
        </div>
      )}

      {/* Bespoke Journey Modal */}
      <CustomTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
