"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { blogData, BlogPost } from "@/lib/data/blogData";
import LuxuryButton from "@/components/ui/LuxuryButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const { language } = useLanguage();
  const isKorean = language === "ko";

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const title = post.title[language] || post.title.en;
  const content = post.content[language] || post.content.en;

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* Header Banner */}
      <section className="relative min-h-[50vh] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#081A33]">
          <Image
            src={post.image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081A33] via-[#081A33]/80 to-black/40" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A86A] hover:text-white mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isKorean ? "매거진 목록으로" : "Back to Gazette"}</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-[#E5C98B]">
            <span className="px-3 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/40 font-semibold">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-white leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-[#A7B0BE]">
            <User className="w-3.5 h-3.5 text-[#C9A86A]" />
            <span>Written by {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-luxury-card border border-[#C9A86A]/30 p-8 sm:p-12 space-y-6">
          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#CBD5E1] leading-relaxed whitespace-pre-line font-sans space-y-4">
            {content}
          </div>

          <div className="pt-8 border-t border-[#102A4C] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A7B0BE]">
              Curated by <strong className="text-white">Lanka Luxe Journeys</strong>
            </div>

            <LuxuryButton href="/contact" variant="primary" size="sm" withArrow>
              {isKorean ? "맞춤 여행 상담 신청" : "Inquire About This Journey"}
            </LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
