"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { METRIC_HIGHLIGHTS } from "@/data/euroconData";

export default function MetricsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate numbers counting up on scroll
      numbersRef.current.forEach((el, i) => {
        if (!el) return;
        const metric = METRIC_HIGHLIGHTS[i % METRIC_HIGHLIGHTS.length];
        const target = metric.numericValue;

        gsap.fromTo(el,
          { innerText: "0" },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 40%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              if (el) {
                const val = Math.round(Number(gsap.getProperty(el, "innerText")));
                el.textContent = String(val);
              }
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Double the items for seamless infinite marquee
  const allItems = [...METRIC_HIGHLIGHTS, ...METRIC_HIGHLIGHTS, ...METRIC_HIGHLIGHTS, ...METRIC_HIGHLIGHTS];

  return (
    <section
      ref={sectionRef}
      className="relative py-6 sm:py-8 bg-slate-950 border-y border-slate-800 overflow-hidden"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center whitespace-nowrap will-change-transform">
        {allItems.map((metric, i) => (
          <div key={i} className="flex items-center shrink-0">
            {/* Metric Item */}
            <div className="flex items-center gap-3 px-8 sm:px-12">
              <span
                ref={(el) => { if (i < METRIC_HIGHLIGHTS.length) numbersRef.current[i] = el; }}
                className="text-3xl sm:text-4xl font-black text-white tabular-nums"
              >
                {metric.numericValue}
              </span>
              <span className="text-sm sm:text-base font-bold text-red-500 tracking-wide">
                {metric.suffix}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium max-w-[160px] leading-tight">
                {metric.label}
              </span>
            </div>

            {/* Separator */}
            <div className="w-1.5 h-1.5 rounded-full bg-red-600/60 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
