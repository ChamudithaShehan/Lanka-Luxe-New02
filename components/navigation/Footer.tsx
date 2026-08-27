"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1546708973-c646b95b871c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1625736300986-f2b3e8392131?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1588614959060-4d144f28b2ea?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <footer className="relative bg-[#112444] text-[#A7B0BE] pt-24 pb-8 overflow-hidden font-sans">
      {/* 1. Newsletter Section */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-16 relative z-10">
        <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-4 block">
          SUBSCRIBE TO TRAVEL
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif-luxury text-white mb-8">
          Travel deals to your inbox<span className="text-[#38BDF8]">!</span>
        </h2>
        
        <form 
          onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
          className="relative w-full max-w-[600px] mx-auto bg-white rounded-full p-1.5 flex items-center shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none outline-none text-[#081A33] px-4 sm:px-6 py-2 sm:py-3 placeholder:text-gray-500 font-medium w-full min-w-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex items-center gap-2 pr-1">
            {/* Purple Icon Button (like Tumblr in reference) */}
            <div className="w-10 h-10 bg-[#593E83] rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-[#4a336e] transition-colors">
              <span className="font-serif italic font-bold text-lg">t</span>
            </div>
            {/* Submit Arrow Button */}
            <button
              type="submit"
              className="w-10 h-10 bg-[#38BDF8] rounded-full flex items-center justify-center text-white hover:bg-[#0284C7] transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-[#A7B0BE]">
          We are committed to protecting your <Link href="/privacy" className="text-white hover:text-[#38BDF8] underline decoration-white/30 underline-offset-4 transition-colors">privacy policy</Link>.
        </p>
      </div>

      {/* 2. Gallery Banner */}
      <div className="max-w-6xl mx-auto px-4 mb-20 relative z-10">
        <div className="relative w-full h-[180px] sm:h-[220px] rounded-[32px] overflow-hidden flex">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative flex-1 h-full border-r border-white/10 last:border-r-0 group overflow-hidden">
               <Image
                 src={src}
                 alt={`Gallery image ${index + 1}`}
                 fill
                 sizes="(max-width: 768px) 16vw, 16vw"
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
               />
            </div>
          ))}
          
          {/* Center Instagram Badge */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#081A33] px-6 py-2.5 rounded-full flex items-center gap-2 font-bold text-sm shadow-xl hover:scale-105 transition-transform"
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#38BDF8] flex items-center justify-center text-[#38BDF8]">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            / LANKALUXE
          </a>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 relative">
          
          {/* Copyright */}
          <p className="text-sm">
            © All Rights Reserved <Link href="/" className="text-white font-semibold underline decoration-white/30 hover:text-[#38BDF8] transition-colors">LankaLuxe</Link>
          </p>
          
          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link href="/" className="text-white font-medium hover:text-[#38BDF8] text-sm transition-colors">Home</Link>
            <Link href="/tours" className="text-white font-medium hover:text-[#38BDF8] text-sm transition-colors">Tours</Link>
            <Link href="/destinations" className="text-white font-medium hover:text-[#38BDF8] text-sm transition-colors">Destinations</Link>
            <Link href="/blog" className="text-white font-medium hover:text-[#38BDF8] text-sm transition-colors">Blog</Link>
            <Link href="/contact" className="text-white font-medium hover:text-[#38BDF8] text-sm transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-[#38BDF8] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#38BDF8] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#38BDF8] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            
            <button 
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#A7B0BE] hover:text-white hover:border-white/40 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute -bottom-10 right-0 text-[180px] font-black text-white/[0.03] select-none pointer-events-none leading-none uppercase overflow-hidden whitespace-nowrap">
        LANKA LUXE
      </div>
    </footer>
  );
}
