"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function AboutStorytelling() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaLinkRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      title: "Engineering Excellence",
      desc: "Focuses on maximizing energy efficiency, achieving maximum indoor air quality and thermal comfort while minimizing energy consumption and noise.",
    },
    {
      title: "Reliable Performance",
      desc: "Delivers steady airflow, exact temperature control, and clean indoor air with minimal breakdowns and low energy use.",
    },
    {
      title: "Customer-Focused Solutions",
      desc: "Combine smart automation, energy efficiency, and tailored indoor air quality (IAQ) management to meet specific residential, commercial, or industrial needs.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image clip-path reveal from center
      gsap.fromTo(imageWrapRef.current,
        { clipPath: "inset(50% 50% 50% 50%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Parallax on image
      gsap.to(imageRef.current, {
        yPercent: -12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text reveals
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      textTimeline
        .fromTo(eyebrowRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" })
        .fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2)
        .fromTo(bodyRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.5)
        .fromTo(ctaLinkRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.7);

      // Highlight cards stagger
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about-preview" className="relative py-16 sm:py-24 bg-[#7B8290] border-b border-white/10 overflow-hidden text-white">
      {/* Background technical grid and soft blue ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Image with clip-path reveal */}
          <div className="relative order-2 lg:order-1">
            <div
              ref={imageWrapRef}
              className="relative rounded-3xl overflow-hidden shadow-xl border border-white/15 bg-[#4B5563] will-change-[clip-path]"
              style={{ clipPath: "inset(50% 50% 50% 50%)" }}
            >
              <div className="relative h-[400px] sm:h-[520px] overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center p-6 border border-white/10">
                {/* Tech grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[length:16px_16px] opacity-60 pointer-events-none" />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imageRef}
                  src="/images/products/fan-section.png"
                  alt="Eurocon High-Precision Modular Fan Section"
                  className="w-full h-full object-contain filter drop-shadow-md will-change-transform transform hover:scale-105 transition-transform duration-700 relative z-10"
                />

                {/* Bottom overlay card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 text-slate-900 flex items-center justify-between z-20 shadow-lg">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-blue-600 uppercase font-bold tracking-wider">
                      PRECISION AIR MANAGEMENT
                    </span>
                    <p className="text-xs font-bold text-slate-900">
                      Modular Fan Section & Dynamic Balancing
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-400 opacity-0 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>THE EUROCON PHILOSOPHY</span>
            </div>

            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] opacity-0"
            >
              ENGINEERING AIRFLOW.
              <br />
              <span className="text-blue-400">CREATING COMFORT.</span>
            </h2>

            <div ref={bodyRef} className="space-y-4 text-white text-base sm:text-lg leading-relaxed opacity-0">
              <p>
                <strong className="text-white font-bold">EUROCON SYSTEM LLP</strong> delivers advanced air management, ventilation and industrial HVAC engineering solutions designed for demanding environmental, thermal and life-safety applications.
              </p>
              <p className="text-sm sm:text-base text-white/90">
                From subterranean metro transit smoke routing and sterile cleanrooms to expansive manufacturing shopfloors, our systems guarantee aerodynamic precision, acoustic comfort, and lifelong durability.
              </p>
            </div>

            <div ref={ctaLinkRef} className="pt-2 flex flex-wrap items-center gap-4 opacity-0">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-lg"
              >
                <span>Discover Eurocon</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/20 hover:border-blue-500 hover:text-blue-400 transition-all shadow-xs"
              >
                <span>Quality Standards</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-[#4B5563] border border-white/12 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white leading-relaxed mt-1.5 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
