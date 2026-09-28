"use client";

import React from "react";

const RUNNING_PHRASES = [
  "PURE AIR — ENGINEERING COMFORT",
  "SMART AIR SOLUTION",
  "UNCOMPROMISING AIR PERFORMANCE",
  "100% PAN INDIA SUPPORT",
];

export default function MetricsMarquee() {
  // Duplicate phrases to build two identical halves for a 100% seamless, infinite translateX(-50%) loop
  const half = [...RUNNING_PHRASES, ...RUNNING_PHRASES, ...RUNNING_PHRASES];
  const allItems = [...half, ...half];

  return (
    <section className="relative py-4 sm:py-5 bg-[#6A7380] border-y border-white/10 overflow-hidden select-none">
      {/* Edge gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#6A7380] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#6A7380] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
        {allItems.map((phrase, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-6 sm:px-10 text-xs sm:text-sm md:text-base font-extrabold tracking-[0.18em] uppercase text-white flex items-center gap-2">
              {phrase}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#EB0311] shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
