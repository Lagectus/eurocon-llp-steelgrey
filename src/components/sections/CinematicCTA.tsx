"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import AirflowCanvas from "../ui/AirflowCanvas";
import MagneticButton from "../ui/MagneticButton";

interface CinematicCTAProps {
  onOpenQuoteModal: () => void;
}

export default function CinematicCTA({ onOpenQuoteModal }: CinematicCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (containerRef.current) gsap.set(containerRef.current, { opacity: 1, y: 0 });
      if (eyebrowRef.current) gsap.set(eyebrowRef.current, { opacity: 1, scale: 1 });
      if (headingRef.current) gsap.set(headingRef.current, { opacity: 1, y: 0 });
      if (bodyRef.current) gsap.set(bodyRef.current, { opacity: 1, y: 0 });
      if (buttonsRef.current) gsap.set(buttonsRef.current.children, { opacity: 1, y: 0 });
      if (badgesRef.current) gsap.set(badgesRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // If already in viewport on mount, display immediately
      if (sectionRef.current && ScrollTrigger.isInViewport(sectionRef.current)) {
        gsap.set([containerRef.current, eyebrowRef.current, headingRef.current, bodyRef.current, badgesRef.current], { opacity: 1, y: 0 });
        if (buttonsRef.current) gsap.set(buttonsRef.current.children, { opacity: 1, y: 0 });
        return;
      }

      // Section reveal
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Content reveals
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      )
      .fromTo(headingRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.3"
      )
      .fromTo(bodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(buttonsRef.current?.children ? Array.from(buttonsRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(badgesRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        1.0
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden bg-[#e5e7eb] border-t border-slate-300/40">
      {/* Background Banner Image - Clean, no dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/bg-banner.png"
          alt="Eurocon Industrial Ventilation Systems"
          className="w-full h-full object-cover object-center lg:object-right select-none"
        />
      </div>

      {/* Subtle airflow particle canvas */}
      <AirflowCanvas particleCount={15} color="rgba(1, 10, 109, 0.12)" />

      <div
        ref={containerRef}
        className="relative z-10 py-10 sm:py-12 lg:py-14 text-slate-900 overflow-hidden will-change-transform"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start">
          <div className="max-w-xl xl:max-w-2xl w-full space-y-4 text-center lg:text-left">
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/10 border border-blue-900/20 text-[#010A6D] text-xs font-mono font-bold shadow-2xs backdrop-blur-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#010A6D]" />
              <span>DIRECT APPLICATION ENGINEERING</span>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-[1.12] text-slate-950"
            >
              LET&apos;S ENGINEER YOUR NEXT{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#010A6D]">
                AIRFLOW SOLUTION.
              </span>
            </h2>

            {/* Body */}
            <p
              ref={bodyRef}
              className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Have a project, airflow requirement or HVAC challenge? Talk to our engineering team for sizing, static pressure curves and custom fabrication.
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <MagneticButton>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#010A6D] hover:bg-blue-950 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-950/25 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/70 hover:bg-white text-slate-900 font-bold text-sm tracking-wide border border-slate-300 hover:border-slate-400 transition-all shadow-2xs backdrop-blur-xs"
                >
                  <span>Contact Us</span>
                </Link>
              </MagneticButton>
            </div>

            {/* Trust Badges */}
            <div
              ref={badgesRef}
              className="pt-4 border-t border-slate-300/60 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-mono text-slate-900 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#010A6D]" />
                <span>AMCA 210 / 300 & EN 12101-3 F400 Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Response within 24 Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
