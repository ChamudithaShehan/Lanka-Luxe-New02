"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroFloatingCards() {
  return (
    <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] flex items-center justify-center select-none overflow-visible">
      
      {/* ✈ Curved Flight Paths with Animated Airplanes */}
      {/* Flight Path 1: From bottom-center swooping upward */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 600 700"
        fill="none"
      >
        <path
          d="M 50 650 Q 180 620 220 540 T 260 420"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
        <path
          d="M 450 380 Q 560 300 520 200 T 560 100"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Airplane Icon 1 (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          rotate: [-20, -15, -20],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-6 sm:left-12 z-20 pointer-events-none"
      >
        <svg
          className="w-8 h-8 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </motion.div>

      {/* Airplane Icon 2 (Far Right Looping) */}
      <motion.div
        animate={{
          x: [0, -8, 0],
          y: [0, -12, 0],
          rotate: [-45, -40, -45],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -right-2 sm:right-4 z-20 pointer-events-none"
      >
        <svg
          className="w-7 h-7 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </motion.div>

      {/* 3-COLUMN STAGGERED ARCH & CAPSULE GALLERY */}
      <div className="relative w-full max-w-[560px] grid grid-cols-3 gap-3 sm:gap-4 items-center z-10">
        
        {/* ======================================================== */}
        {/* COLUMN 1 (LEFT) */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-3 sm:gap-4 -translate-y-4">
          
          {/* Card 1.1: Top Coastline Traveler (Capsule / Rounded pill) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[150px] sm:h-[175px] rounded-t-full rounded-b-[24px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=85"
              alt="Sri Lanka Coastal Explorer"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

          {/* Card 1.2: Middle Mountain & Traveler with Hat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[180px] sm:h-[210px] rounded-[30px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=85"
              alt="Ella Highlands Vista"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

          {/* Card 1.3: Bottom Travel Suitcase & Hat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[170px] sm:h-[195px] rounded-t-[24px] rounded-b-[36px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=600&q=85"
              alt="Luxury Travel Gear"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* COLUMN 2 (CENTER - ELEVATED ARCHES) */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-3 sm:gap-4 -translate-y-8">
          
          {/* Card 2.1: Top Round Disc Port (Round Circle/Disc) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ scale: 1.06, zIndex: 30 }}
            className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border border-white/15 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85"
              alt="Tropical Azure Bay"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Card 2.2: Center Featured Boat Travelers (Capsule Shape) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[180px] sm:h-[220px] rounded-[38px] overflow-hidden shadow-2xl border-2 border-white/20 group cursor-pointer ring-4 ring-cyan-400/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=85"
              alt="Happy Travelers on Catamaran"
              fill
              sizes="(max-width: 768px) 35vw, 18vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
          </motion.div>

          {/* Card 2.3: Bottom Majestic Arch (Rounded Top Arch) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[200px] sm:h-[235px] rounded-t-full rounded-b-[28px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=85"
              alt="Tea Country Turquoise Lake & Arch"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* COLUMN 3 (RIGHT) */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-3 sm:gap-4 translate-y-2">
          
          {/* Card 3.1: Top Safari Mirror / Road View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[150px] sm:h-[175px] rounded-t-[20px] rounded-b-[32px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=85"
              alt="Safari Road Trip"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

          {/* Card 3.2: Middle Overwater Boardwalk Couple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[180px] sm:h-[210px] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85"
              alt="Luxury Overwater Boardwalk"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

          {/* Card 3.3: Bottom Mountain Valley / Golf Lake */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.04, zIndex: 30 }}
            className="relative w-full h-[170px] sm:h-[195px] rounded-t-[32px] rounded-b-[24px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=85"
              alt="Victoria Mountain Golf Green"
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </motion.div>

        </div>

      </div>
    </div>
  );
}
