"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";

const mockDestinations = [
  {
    id: 1,
    location: "Sigiriya, Sri Lanka",
    title: "Cultural Triangle & Wildlife Safari",
    duration: "4 Days - 3 Nights",
    rating: "4.9",
    price: "$890",
    image: "https://images.unsplash.com/photo-1588614959060-4d144f28b2ea?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    location: "Galle, Sri Lanka",
    title: "Colonial Charm & Golden Shores",
    duration: "5 Days - 4 Nights",
    rating: "4.8",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1546708973-c646b95b871c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    location: "Nuwara Eliya, Sri Lanka",
    title: "Tea Estates & Misty Mountains",
    duration: "3 Days - 2 Nights",
    rating: "4.9",
    price: "$750",
    image: "https://images.unsplash.com/photo-1625736300986-f2b3e8392131?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function DreamDestinations() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col items-start"
          >
            <span className="text-[#38BDF8] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
              CHOOSE YOUR PLACE
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury text-[#081A33] leading-[1.1] mb-6">
              Discover dream <span className="text-[#38BDF8]">destinations</span>
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed mb-8">
              Turn your dream destinations into unforgettable experiences with guidance. From hidden gems to iconic landmarks, we craft personalized journeys for you.
            </p>
            <button className="flex items-center gap-3 bg-[#38BDF8] hover:bg-[#0284C7] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg shadow-[#38BDF8]/20">
              Read more
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </div>
            </button>
          </motion.div>

          {/* Right Scrollable Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {mockDestinations.map((dest, index) => (
              <motion.div 
                key={dest.id} 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E8E2D9]"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 md:h-[400px] w-full">
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
                
                {/* Info Bar */}
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  {/* Left Info */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[#38BDF8] text-xs font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.location}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#081A33]">
                      {dest.title}
                    </h3>
                  </div>

                  {/* Right Info Tags */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Duration Tag */}
                    <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E8E2D9] px-4 py-2.5 rounded-2xl">
                      <Calendar className="w-4 h-4 text-[#38BDF8]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#A7B0BE] uppercase font-bold tracking-wider">Duration</span>
                        <span className="text-xs text-[#081A33] font-semibold">{dest.duration}</span>
                      </div>
                    </div>

                    {/* Price & Rating */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 bg-[#F59E0B] text-white px-2 py-0.5 rounded-full text-xs font-bold mb-2">
                        <Star className="w-3 h-3 fill-white" />
                        {dest.rating}
                      </div>
                      <div className="text-right">
                        <span className="text-lg sm:text-xl font-bold text-[#38BDF8]">{dest.price}</span>
                        <span className="text-[10px] text-[#A7B0BE] ml-1">/ Traveler</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
