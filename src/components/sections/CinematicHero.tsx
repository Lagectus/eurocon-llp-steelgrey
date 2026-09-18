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
  const overlayRef = useRef<HTMLDivElement>(null);
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
      [eyebrowRef, headingLine1Ref, headingLine2Ref, paragraphRef, ctaRef, badgesRef, scrollIndicatorRef].forEach(ref => {
        if (ref.current) {
          gsap.set(ref.current, { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" });
        }
      });
      if (bgRef.current) gsap.set(bgRef.current, { scale: 1, opacity: 1 });
      if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 0.65 });
      return;
    }

    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(bgRef.current, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: "power2.out" })
        .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 0.65, duration: 1.2 }, 0.3)
        .fromTo(eyebrowRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.8
        )
        .fromTo(headingLine1Ref.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1, ease: "power4.inOut" },
          1.0
        )
        .fromTo(headingLine2Ref.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1, ease: "power4.inOut" },
          1.3
        )
        .fromTo(paragraphRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.6
        )
        .fromTo(ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          1.9
        )
        .fromTo(badgesRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          2.2
        )
        .fromTo(scrollIndicatorRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          2.5
        );

      // Parallax on scroll
      gsap.to(bgRef.current, {
        yPercent: 25,
        scale: 1.05,
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
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div ref={bgRef} className="absolute inset-0 opacity-0 will-change-transform">
        <img
          src="/images/facility.jpg"
          alt="Eurocon Manufacturing Facility"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark cinematic overlay to keep the industrial background visible while improving readability */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/45 to-slate-950/60 opacity-0"
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Decorative floating accent */}
      <div ref={decorRef} className="absolute top-1/4 right-[15%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold tracking-[0.2em] uppercase mb-6 opacity-0 shadow-[0_0_30px_rgba(15,23,42,0.4)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>PRECISION HVAC & INDUSTRIAL VENTILATION</span>
          </div>

          {/* Main Heading with clip-path reveal */}
          <h1 className="mb-6 sm:mb-8">
            <span
              ref={headingLine1Ref}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black tracking-tight leading-[1.08] text-white opacity-0 drop-shadow-[0_2px_18px_rgba(15,23,42,0.9)]"
            >
              ENGINEERED
              <span className="text-blue-500"> AIRFLOW.</span>
            </span>
            <span
              ref={headingLine2Ref}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black tracking-tight leading-[1.08] text-white mt-1.5 sm:mt-2 opacity-0 drop-shadow-[0_2px_18px_rgba(15,23,42,0.9)]"
            >
              BUILT FOR
              <span className="text-blue-500"> PERFORMANCE.</span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            ref={paragraphRef}
            className="text-base sm:text-lg text-white max-w-2xl font-light leading-relaxed mb-8 opacity-0 drop-shadow-[0_1px_12px_rgba(15,23,42,0.7)]"
          >
            Advanced air management, ventilation and industrial HVAC solutions engineered for efficiency, reliability and total environmental comfort.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-8">
            <MagneticButton>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 backdrop-blur-md text-[#334155] font-bold text-sm tracking-wide border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all shadow-xs"
              >
                <span>Talk to Our Experts</span>
              </button>
            </MagneticButton>
          </div>

          {/* Trust Badges */}
          <div
            ref={badgesRef}
            className="flex flex-wrap items-center gap-6 text-xs text-white font-mono opacity-0"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>AMCA 210 Lab Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>EN 12101-3 400°C/2h Fire Rated</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-blue-400" />
              <span>ISO 1940 G2.5 Dynamic Balancing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
