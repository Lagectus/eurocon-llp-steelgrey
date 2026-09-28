"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Cpu, Factory, ShieldCheck, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function EngineeringShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      num: "01",
      title: "Precision Engineering",
      desc: "Designing heating, ventilation, and air conditioning systems with exact tolerances to maximize energy efficiency.",
      icon: Cpu,
      direction: "left" as const,
    },
    {
      num: "02",
      title: "Advanced Manufacturing",
      desc: "Manufacturing high-performance HVAC equipment built with exact tolerances to eliminate energy loss.",
      icon: Factory,
      direction: "right" as const,
    },
    {
      num: "03",
      title: "Quality Focus",
      desc: "Executing rigorous quality and performance testing to reliably control environments and thermal comfort.",
      icon: ShieldCheck,
      direction: "left" as const,
    },
    {
      num: "04",
      title: "Project Support",
      desc: "Comprehensive engineering assistance and execution support to ensure long-term reliability and peak lifecycle performance.",
      icon: Headphones,
      direction: "right" as const,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards with alternating directions
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children) as HTMLElement[];
        cards.forEach((card, i) => {
          const dir = capabilities[i].direction;
          gsap.fromTo(card,
            {
              opacity: 0,
              x: dir === "left" ? -80 : 80,
              scale: 0.92,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // CTA reveal
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="engineering" className="relative py-14 sm:py-18 bg-[#7B8290] text-white border-b border-white/10 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-400 mb-4">
            <span className="w-8 h-[2px] bg-blue-400" />
            <span>THE EUROCON ADVANTAGE</span>
            <span className="w-8 h-[2px] bg-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
            PRECISION ENGINEERING.
            <br />
            MEASURABLE PERFORMANCE.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Designing, manufacturing, and executing HVAC systems with exact tolerances to maximize energy efficiency, control environments, and ensure long-term reliability.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#4B5563] border border-white/12 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background number watermark */}
                <span className="absolute -right-4 -bottom-6 text-[140px] font-black text-white/5 leading-none pointer-events-none select-none group-hover:text-blue-500/8 transition-colors duration-500">
                  {cap.num}
                </span>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/15 group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors duration-300 border border-blue-500/30 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-black text-blue-400">
                      {cap.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-8 sm:mt-10 text-center opacity-0">
          <Link
            href="/quality"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
          >
            <span>Explore Quality & Testing Standards</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
