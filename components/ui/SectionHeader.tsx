import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlightWords?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlightWords,
  subtitle,
  align = "center",
  theme = "dark",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isRight = align === "right";

  // Split title if highlightWords is specified
  let renderedTitle: React.ReactNode = title;
  if (highlightWords && title.includes(highlightWords)) {
    const parts = title.split(highlightWords);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-gold-gradient italic">{highlightWords}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        isCenter ? "mx-auto text-center" : isRight ? "ml-auto text-right" : "text-left",
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-sans font-semibold mb-3.5",
            theme === "dark" ? "text-[#C9A86A]" : "text-[#A08047]",
            isCenter && "justify-center"
          )}
        >
          <span className="w-6 h-[1px] bg-[#C9A86A]" />
          <span>{label}</span>
          <span className="w-6 h-[1px] bg-[#C9A86A]" />
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal tracking-tight leading-[1.15] mb-5",
          theme === "dark" ? "text-[#FFFFFF]" : "text-[#081A33]"
        )}
      >
        {renderedTitle}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg font-sans leading-relaxed",
            theme === "dark" ? "text-[#A7B0BE]" : "text-[#4A5568]"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle gold ornamental accent line */}
      <div
        className={cn(
          "flex items-center gap-2 mt-6",
          isCenter ? "justify-center" : isRight ? "justify-end" : "justify-start"
        )}
      >
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent opacity-60" />
        <span className={cn("w-1.5 h-1.5 rotate-45 border border-[#C9A86A]", theme === "dark" ? "bg-[#081A33]" : "bg-white")} />
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent opacity-60" />
      </div>
    </div>
  );
}
