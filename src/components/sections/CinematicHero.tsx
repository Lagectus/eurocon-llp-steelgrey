"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, Wind } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";

interface CinematicHeroProps {
  onOpenQuoteModal: () => void;
}

export default function CinematicHero({ onOpenQuoteModal }: CinematicHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      [cardRef, eyebrowRef, headingLine1Ref, headingLine2Ref, paragraphRef, ctaRef, badgesRef, scrollIndicatorRef].forEach(ref => {
        if (ref.current) {
          gsap.set(ref.current, { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" });
        }
      });
      if (bgRef.current) gsap.set(bgRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" })
        .fromTo(cardRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          0.2
        )
        .fromTo(eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.4
        )
        .fromTo(headingLine1Ref.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.9, ease: "power4.inOut" },
          0.8
        )
        .fromTo(headingLine2Ref.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.9, ease: "power4.inOut" },
          1.1
        )
        .fromTo(paragraphRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          1.3
        )
        .fromTo(ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          1.5
        )
        .fromTo(badgesRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          1.8
        )
        .fromTo(scrollIndicatorRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          2.0
        );

      // Subtle parallax on scroll without scaling to prevent any edge clipping
      gsap.to(bgRef.current, {
        yPercent: 12,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Decorative element parallax
      if (decorRef.current) {
        gsap.to(decorRef.current, {
          yPercent: -30,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    // Mouse parallax for decorative elements
    const handleMouseMove = (e: MouseEvent) => {
      if (!decorRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(decorRef.current, {
        x: x * 30,
        y: y * 20,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[750px] lg:h-screen lg:min-h-[800px] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#FEFEFE]"
    >
      {/* Background Banner Image with Full Visibility & Containment */}
      <div ref={bgRef} className="absolute inset-0 bg-[#FEFEFE] opacity-0 will-change-transform flex items-end justify-center pointer-events-none">
        <img
          src="/images/bg-banner.png"
          alt="Eurocon Industrial HVAC Systems"
          className="w-full h-full object-contain object-bottom select-none pointer-events-none"
        />
      </div>

      {/* Decorative floating accent */}
      <div ref={decorRef} className="absolute top-1/4 right-[15%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none hidden lg:block" />

      {/* Main Content inside Translucent Glass Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4 mb-auto">
        <div
          ref={cardRef}
          className="max-w-xl lg:max-w-2xl rounded-2xl sm:rounded-3xl bg-white/25 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(15,23,42,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.9)] p-6 sm:p-8 lg:p-9 opacity-0 transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle top glass reflection highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-blue-950 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase mb-4 opacity-0 shadow-2xs max-w-full"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
            <span className="truncate">PRECISION HVAC & INDUSTRIAL VENTILATION</span>
          </div>

          {/* Main Heading with clip-path reveal */}
          <h1 className="mb-3 sm:mb-4">
            <span
              ref={headingLine1Ref}
              className="block text-2xl sm:text-4xl md:text-5xl lg:text-[3rem] font-black tracking-tight leading-[1.08] text-slate-900 opacity-0"
            >
              ENGINEERED
              <span className="text-[#010A6D]"> AIRFLOW.</span>
            </span>
            <span
              ref={headingLine2Ref}
              className="block text-2xl sm:text-4xl md:text-5xl lg:text-[3rem] font-black tracking-tight leading-[1.08] text-slate-900 mt-1 opacity-0"
            >
              BUILT FOR
              <span className="text-[#010A6D]"> PERFORMANCE.</span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            ref={paragraphRef}
            className="text-xs sm:text-sm md:text-base text-slate-950 max-w-lg font-medium leading-relaxed mb-5 sm:mb-6 opacity-0"
          >
            Advanced air management, ventilation and industrial HVAC solutions engineered for efficiency, reliability and total environmental comfort.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <MagneticButton>
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#010A6D] hover:bg-[#010645] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/35 hover:-translate-y-0.5 text-center"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/50 hover:bg-white/80 backdrop-blur-md text-slate-950 font-bold text-xs sm:text-sm tracking-wide border border-white/80 hover:border-[#010A6D] hover:text-[#010A6D] transition-all shadow-2xs cursor-pointer text-center"
              >
                <span>Talk to Our Experts</span>
              </button>
            </MagneticButton>
          </div>

          {/* Trust Badges */}
          <div
            ref={badgesRef}
            className="flex flex-wrap items-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-slate-950 font-mono font-medium opacity-0 pt-2 border-t border-slate-300/80"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#010A6D] shrink-0" />
              <span>Aerodynamically Tested</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Heavy-Duty Fire Rated Design</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#010A6D] shrink-0" />
              <span>Dual-Plane Dynamic Balancing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 flex flex-col items-center gap-1.5 opacity-0 mt-4 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white font-semibold">
          SCROLL TO EXPLORE
        </span>
        <div className="w-4 h-7 rounded-full border border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
