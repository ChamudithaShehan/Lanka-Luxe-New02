import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline-gold" | "ghost" | "cream" | "outline-navy";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  arrowType?: "arrow" | "chevron";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type LuxuryButtonProps = ButtonAsButton | ButtonAsLink;

export default function LuxuryButton({
  variant = "primary",
  size = "md",
  withArrow = false,
  arrowType = "arrow",
  icon,
  children,
  className,
  ...props
}: LuxuryButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3 text-sm tracking-widest",
    lg: "px-8 py-4 text-base tracking-widest",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#E5C98B] via-[#C9A86A] to-[#A08047] text-[#081A33] font-semibold hover:shadow-[0_0_25px_rgba(201,168,106,0.45)] hover:scale-[1.02] active:scale-[0.98] btn-gold-shimmer border border-[#E5C98B]/50",
    secondary:
      "bg-[#102A4C]/80 hover:bg-[#183861] text-[#E5C98B] border border-[#C9A86A]/40 hover:border-[#C9A86A] backdrop-blur-md hover:shadow-[0_0_20px_rgba(201,168,106,0.25)] hover:scale-[1.02] active:scale-[0.98]",
    "outline-gold":
      "bg-transparent text-[#E5C98B] border border-[#C9A86A]/70 hover:bg-[#C9A86A]/10 hover:border-[#E5C98B] hover:shadow-[0_0_15px_rgba(201,168,106,0.3)]",
    ghost:
      "bg-transparent text-[#E5C98B] hover:text-[#FFFFFF] underline-offset-8 hover:underline p-0 tracking-widest",
    cream:
      "bg-white text-[#081A33] border border-[#E8E2D9] font-semibold hover:border-[#C9A86A] hover:shadow-[0_6px_20px_rgba(8,26,51,0.10)] active:scale-[0.98]",
    "outline-navy":
      "bg-transparent text-[#081A33] border border-[#081A33] font-semibold hover:bg-[#081A33] hover:text-white active:scale-[0.98] transition-all",
  };

  const commonClasses = cn(
    "relative inline-flex items-center justify-center rounded-none uppercase transition-all duration-300 font-sans cursor-pointer select-none group",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <>
      {icon && <span className="mr-2 transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5 inline-flex items-center">
          {arrowType === "arrow" ? <ArrowRight className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={commonClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={commonClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
