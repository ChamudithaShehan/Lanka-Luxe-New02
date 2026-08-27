"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Clock, Calendar, ArrowRight, User } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { blogData, BlogPost } from "@/lib/data/blogData";
import SectionHeader from "@/components/ui/SectionHeader";
import LuxuryButton from "@/components/ui/LuxuryButton";

export default function BlogPage() {
  const { language } = useLanguage();
  const isKorean = language === "ko";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const featuredPost = blogData.find((p) => p.featured) || blogData[0];
  const regularPosts = blogData.filter((p) => p.id !== featuredPost.id);

  const categories = [
    { id: "all", label: isKorean ? "전체 아티클" : "All Articles" },
    { id: "Golf in Sri Lanka", label: isKorean ? "스리랑카 골프 가이드" : "Golf in Sri Lanka" },
    { id: "Luxury Travel", label: isKorean ? "럭셔리 여행 트렌드" : "Luxury Travel" },
    { id: "Luxury Hotels", label: isKorean ? "명품 호텔 & 롯지" : "Luxury Hotels & Lodges" },
  ];

  return (
    <div className="min-h-screen bg-[#081A33] text-white pt-24 font-sans">
      {/* Header */}
      <section className="relative py-20 lg:py-24 border-b border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102A4C]/90 border border-[#C9A86A]/40 text-[#E5C98B] text-xs uppercase tracking-[0.3em] font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isKorean ? "럭셔리 트래블 저널" : "THE CEYLON GAZETTE"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white">
            {isKorean ? "스리랑카 에디토리얼 매거진" : "Editorial Travel Journal"}
          </h1>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            {isKorean
              ? "고원 골프장 공략법, 릴레앤샤토 티 방갈로의 역사, 아시아 최고 야생 사파리 노하우 등 엄선된 여행 칼럼을 전해드립니다."
              : "Curated stories, golf insider guides, and luxury dispatches from Ceylon’s most captivating landscapes."}
          </p>
        </div>
      </section>

      {/* Featured Main Article */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden glass-luxury-card border border-[#C9A86A]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 shadow-2xl">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#081A33] border border-[#C9A86A]/20">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title[language] || featuredPost.title.en}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#C9A86A] text-[#081A33] text-xs font-bold uppercase tracking-wider">
                Featured Editorial
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#C9A86A] uppercase tracking-wider">
              <span>{featuredPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-white leading-snug">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="hover:text-[#E5C98B] transition-colors"
              >
                {featuredPost.title[language] || featuredPost.title.en}
              </Link>
            </h2>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              {featuredPost.excerpt[language] || featuredPost.excerpt.en}
            </p>

            <div className="pt-2 border-t border-[#102A4C] flex items-center justify-between">
              <span className="text-xs text-[#A7B0BE]">{featuredPost.author}</span>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#E5C98B] hover:text-white"
              >
                <span>{isKorean ? "칼럼 읽기" : "Read Article"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h3 className="text-2xl font-serif-luxury text-white">
          {isKorean ? "최신 매거진 아티클" : "Latest Editorial Stories"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => {
            const title = post.title[language] || post.title.en;
            const excerpt = post.excerpt[language] || post.excerpt.en;

            return (
              <div
                key={post.id}
                className="group rounded-2xl overflow-hidden glass-luxury-card border border-[#C9A86A]/25 flex flex-col justify-between transition-all duration-500 hover:border-[#E5C98B]"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#081A33]">
                    <Image
                      src={post.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-[#081A33]/90 border border-[#C9A86A]/40 text-[10px] text-[#E5C98B] font-medium backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-[#A7B0BE]">
                      <Calendar className="w-3 h-3 text-[#C9A86A]" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-lg font-serif-luxury text-white group-hover:text-[#E5C98B] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{title}</Link>
                    </h4>

                    <p className="text-xs text-[#CBD5E1] leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#102A4C] flex items-center justify-between">
                  <span className="text-[11px] text-[#A7B0BE]">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-[#E5C98B] hover:text-white font-semibold"
                  >
                    <span>{isKorean ? "자세히 보기" : "Read Story"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
