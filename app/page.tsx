import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SignatureJourneys from "@/components/home/SignatureJourneys";
import GolfSpotlight from "@/components/home/GolfSpotlight";
import LuxuryExperiences from "@/components/home/LuxuryExperiences";
import DreamDestinations from "@/components/home/DreamDestinations";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CustomJourneyCTA from "@/components/home/CustomJourneyCTA";
import QuickContactSection from "@/components/home/QuickContactSection";
import TextMarquee from "@/components/ui/TextMarquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#081A33] text-white">
      {/* 1. Full-Screen Hero Section */}
      <HeroSection />

      {/* 2. Introduction Section (Cream background) */}
      <IntroSection />

      {/* 3. Why Travel with Lanka Luxe Journeys */}
      <WhyChooseUs />

      <TextMarquee speed={35} />

      {/* 4. Signature Journeys (Featured Packages) */}
      <SignatureJourneys />

      {/* 5. Dedicated Golf Holidays Section */}
      <GolfSpotlight />

      {/* 6. Immersive Luxury Experiences */}
      <LuxuryExperiences />

      {/* 7. Dream Destinations (Sticky Side Scroll) */}
      <DreamDestinations />

      {/* 8. Discerning Guest Reviews / Testimonials */}
      <TestimonialsSlider />

      {/* 9. Custom Journey Parallax CTA Banner */}
      <CustomJourneyCTA />

      {/* 10. Split Contact & Instant Messenger Desks */}
      <QuickContactSection />
    </div>
  );
}
