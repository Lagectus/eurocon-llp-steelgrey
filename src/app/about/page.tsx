"use client";

import React, { useState, useEffect, useRef } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Factory, Cpu, CheckCircle2, ArrowRight, Wind } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const facilityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      [cardRef, eyebrowRef, headingLine1Ref, headingLine2Ref, paragraphRef, facilityRef].forEach(ref => {
        if (ref.current) {
          gsap.set(ref.current, { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" });
        }
      });
      if (bgRef.current) gsap.set(bgRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Entrance timeline matching homepage hero
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
          0.7
        )
        .fromTo(headingLine2Ref.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.9, ease: "power4.inOut" },
          0.9
        )
        .fromTo(paragraphRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          1.1
        )
        .fromTo(facilityRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.3
        );

      // Parallax scroll scrub on factory background image matching homepage
      gsap.to(bgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Subtle upward parallax on foreground card for 3D multi-plane depth
      gsap.to(cardRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <ScrollProgress />
      <div className="min-h-screen bg-[#7B8290] text-white flex flex-col justify-between">
        <Navbar
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
          onOpenMobileMenu={() => setIsMobileOpen(true)}
        />
        <MobileMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
        />

        <main className="pb-20">
          {/* Page Hero Banner with Parallax Scroll & Entrance Animations */}
          <section
            ref={heroRef}
            className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] flex items-end bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            {/* Background Factory Banner Image with Scroll Parallax - Framed to highlight company logo */}
            <div
              ref={bgRef}
              className="absolute -inset-x-0 -top-16 -bottom-32 z-0 will-change-transform opacity-0 pointer-events-none"
            >
              <img
                src="/aboutus.png"
                alt="Eurocon System LLP Manufacturing Plant & Facility"
                className="w-full h-full object-cover object-[center_18%] sm:object-[center_22%]"
              />
            </div>

            {/* Content Container - Positioned low so factory signboard remains unobstructed */}
            <div className="w-full max-w-7xl mr-auto ml-0 px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 pt-48 sm:pt-64 lg:pt-72 pb-6 sm:pb-8">
              <div
                ref={cardRef}
                className="max-w-lg lg:max-w-xl rounded-2xl sm:rounded-3xl bg-white/25 sm:bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(15,23,42,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.9)] p-5 sm:p-7 space-y-3.5 opacity-0 will-change-transform relative overflow-hidden"
              >
                {/* Subtle top glass reflection highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

                <div
                  ref={eyebrowRef}
                  className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-900 shadow-xs opacity-0"
                >
                  <span className="w-2 h-2 rounded-full bg-[#EB0311] animate-pulse" />
                  <span>ABOUT <span className="text-[#EB0311] font-black">EUR</span><span className="text-[#010A6D] font-black">OCON</span> SYSTEM LLP</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-[1.12]">
                  <span ref={headingLine1Ref} className="block opacity-0">
                    ENGINEERED AIRFLOW.
                  </span>
                  <span ref={headingLine2Ref} className="block text-[#010A6D] opacity-0">
                    BUILT FOR PERFORMANCE.
                  </span>
                </h1>
                <p
                  ref={paragraphRef}
                  className="text-xs sm:text-sm text-slate-950 leading-relaxed font-medium opacity-0"
                >
                  <strong className="font-black text-slate-950 tracking-wide"><span className="text-[#EB0311]">EUR</span><span className="text-[#010A6D]">OCON</span> SYSTEM LLP</strong> is an advanced industrial air management, ventilation, and HVAC engineering solutions provider dedicated to high aerodynamic efficiency, life-safety reliability, and multi-decade mechanical dependability.
                </p>

                <div
                  ref={facilityRef}
                  className="pt-1 flex flex-wrap items-center gap-3 text-[11px] sm:text-xs font-mono text-slate-900 opacity-0"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-md border border-white/60 shadow-2xs font-semibold">
                    <Factory className="w-3.5 h-3.5 text-[#010A6D]" />
                    Manufacturing Facility: Rohad, Bahadurgarh (Haryana)
                  </span>
                </div>
              </div>
            </div>
          </section>

        {/* Corporate Profile & Philosophy */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-white leading-relaxed font-normal">
              <SectionHeading
                eyebrow="CORPORATE PROFILE"
                title="HERITAGE OF AERODYNAMIC PRECISION"
              />
              <p>
                Operating across the national industrial corridors, Eurocon manufactures customized heavy-duty centrifugal blowers, adjustable-pitch axial flow fans, emergency smoke exhaust units, pre-fabricated precision ducts, and industrial wet scrubber systems.
              </p>
              <p>
                Our equipment is designed with exact engineering tolerances to maximize energy efficiency, ensure precise environmental control, and deliver dependable multi-decade lifecycle performance.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-white/15 bg-[#4B5563]">
              <img
                src="/aboutus.png"
                alt="Eurocon System LLP Plant in Rohad, Bahadurgarh (Haryana)"
                className="w-full h-96 object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* About Eurocon Strengths & Highlights */}
        <section className="py-20 bg-[#4B5563] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="WHY CHOOSE EUROCON"
              title="ADVANCED HVAC & VENTILATION SOLUTIONS"
              subtitle="From our modern manufacturing facility in Rohad, Bahadurgarh (Haryana) to critical installations across India, Eurocon System LLP delivers reliable, precision-engineered air management systems."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#374151] border border-white/12 shadow-sm hover:border-blue-400/40 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Manufacturing Facility
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    Our dedicated production hub in Rohad, Bahadurgarh (Haryana) is equipped with advanced machinery for double-skin casings, dynamic balancing, and stringent assembly tolerances.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#374151] border border-white/12 shadow-sm hover:border-blue-400/40 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform">
                    <Wind className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Complete HVAC Portfolio
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    From Air Handling Units (AHU) and Fan Coil Units (FCU) to Air Washers, TFAs, Fan Sections, and Industrial Scrubbers, we deliver complete engineered ventilation solutions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#374151] border border-white/12 shadow-sm hover:border-blue-400/40 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Engineering Excellence
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    Focused on maximizing energy efficiency and indoor air quality while minimizing power consumption and noise through aerodynamic design and thermal break construction.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#374151] border border-white/12 shadow-sm hover:border-blue-400/40 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    Client-Focused Support
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    Backed by Ashok Dhull and our experienced technical engineering team, offering rapid quotation, sizing consultation, pan-India delivery, and lifecycle service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Banner */}
        <section className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-[#4B5563] via-[#374151] to-[#4B5563] border border-white/12 text-white space-y-6 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Discuss Your Airflow Specification?
            </h3>
            <p className="text-white text-sm max-w-xl mx-auto font-normal">
              Our application engineering team is available to assist with fan curve selections, static resistance calculations, and customized fabrication drawings.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Request a Quote
              </button>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-colors border border-white/20 hover:border-blue-500 hover:text-blue-400 shadow-xs"
              >
                Contact Application Engineers
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  </SmoothScroll>
  );
}
