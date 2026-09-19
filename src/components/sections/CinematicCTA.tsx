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
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content reveals
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
      )
      .fromTo(headingRef.current,
        { opacity: 0, y: 30 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#6B7280]">
      <div
        ref={containerRef}
        className="relative py-16 sm:py-20 bg-gradient-to-br from-[#4B5563] via-[#6B7280] to-[#4B5563] text-white overflow-hidden will-change-transform opacity-0 border-t border-white/10"
      >
        {/* Background effects */}
        <AirflowCanvas particleCount={25} color="rgba(80, 162, 255, 0.15)" />
        <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold opacity-0 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT APPLICATION ENGINEERING</span>
          </div>

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white opacity-0"
          >
            LET&apos;S ENGINEER YOUR NEXT{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-white">
              AIRFLOW SOLUTION.
            </span>
          </h2>

          <p
            ref={bodyRef}
            className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto font-normal leading-relaxed opacity-0"
          >
            Have a project, airflow requirement or HVAC challenge? Talk to our engineering team for sizing, static pressure curves and custom fabrication.
          </p>

          {/* Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <MagneticButton>
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 hover:border-blue-500 hover:text-blue-400 transition-all shadow-xs"
              >
                <span>Contact Us</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Trust Badges */}
          <div
            ref={badgesRef}
            className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400 opacity-0"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>AMCA 210 / 300 & EN 12101-3 F400 Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Response within 24 Business Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
