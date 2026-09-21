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
    <section ref={sectionRef} id="cta" className="relative overflow-hidden bg-slate-900 border-t border-white/10">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/bg-banner.png"
          alt="Eurocon Industrial Ventilation Systems"
          className="w-full h-full object-cover object-center lg:object-right select-none"
        />
        {/* Directional gradient: darker on left behind card, bright and clear on right for HVAC unit */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/30 to-slate-950/10 pointer-events-none" />
      </div>

      {/* Background effects */}
      <AirflowCanvas particleCount={15} color="rgba(255, 255, 255, 0.25)" />
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      {/* Decorative glow behind card */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={containerRef}
        className="relative z-10 py-16 sm:py-20 lg:py-24 text-white overflow-hidden will-change-transform"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start">
          <div className="max-w-xl xl:max-w-2xl w-full rounded-3xl bg-slate-900/65 backdrop-blur-md border border-white/25 shadow-[0_16px_48px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] p-6 sm:p-9 lg:p-11 space-y-6 relative overflow-hidden text-center lg:text-left">
            {/* Top glass reflection highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>DIRECT APPLICATION ENGINEERING</span>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] font-black tracking-tight leading-[1.12] text-white"
            >
              LET&apos;S ENGINEER YOUR NEXT{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-white">
                AIRFLOW SOLUTION.
              </span>
            </h2>

            {/* Body */}
            <p
              ref={bodyRef}
              className="text-base sm:text-lg text-white/90 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0"
            >
              Have a project, airflow requirement or HVAC challenge? Talk to our engineering team for sizing, static pressure curves and custom fabrication.
            </p>

            {/* Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <MagneticButton>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/35 hover:shadow-blue-600/55 hover:-translate-y-0.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-wide border border-white/30 hover:border-white transition-all shadow-xs"
                >
                  <span>Contact Us</span>
                </Link>
              </MagneticButton>
            </div>

            {/* Trust Badges */}
            <div
              ref={badgesRef}
              className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-mono text-white/90"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>AMCA 210 / 300 & EN 12101-3 F400 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response within 24 Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
