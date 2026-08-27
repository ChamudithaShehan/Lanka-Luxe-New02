"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextMarqueeProps {
  text?: string;
  className?: string;
  speed?: number; // duration in seconds for one loop
}

export default function TextMarquee({
  text = "LUXURY TRAVEL ✻ PRIVATE GOLF ✻ EXCLUSIVE EXPERIENCES ✻ VIP CONCIERGE ✻ WILDLIFE SAFARIS ✻ TAILORED JOURNEYS ✻ ",
  className = "",
  speed = 40,
}: TextMarqueeProps) {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center bg-[#F8FAFC] py-8 sm:py-12 border-y border-[#E8E2D9]/50 ${className}`}
    >
      <div
        className="flex w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex whitespace-nowrap">
          {/* We use two instances of the text for a seamless loop */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: speed,
            }}
            className="flex whitespace-nowrap text-5xl sm:text-6xl md:text-7xl font-sans font-bold uppercase tracking-widest text-[#081A33]/5 select-none will-change-transform transform-gpu"
          >
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
            <span className="mr-8">{text}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
