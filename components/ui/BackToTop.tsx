"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#102A4C]/80 border border-[#C9A86A]/40 text-[#E5C98B] flex items-center justify-center backdrop-blur-md shadow-lg hover:border-[#C9A86A] hover:bg-[#183861] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
    >
      <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 text-[#E5C98B]" />
    </button>
  );
}
