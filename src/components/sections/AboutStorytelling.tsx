"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      desc: "Computational Fluid Dynamics (CFD) aerodynamic optimization for high static efficiency.",
    },
    {
      title: "Reliable Performance",
      desc: "ISO 1940 Grade G2.5 precision dynamic balancing and certified emergency fire endurance.",
    },
    {
      title: "Customer-Focused Solutions",
      desc: "Turnkey application engineering, custom metallurgy, and on-site testing support.",
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
    <section ref={sectionRef} id="about-preview" className="relative py-14 sm:py-18 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Image with clip-path reveal */}
          <div className="relative order-2 lg:order-1">
            <div
              ref={imageWrapRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl will-change-[clip-path]"
              style={{ clipPath: "inset(50% 50% 50% 50%)" }}
            >
              <div className="relative h-[400px] sm:h-[520px] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 flex items-center justify-center p-6 border border-slate-200">
                {/* Tech grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[length:16px_16px] opacity-60 pointer-events-none" />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imageRef}
                  src="/images/products/fan-section.png"
                  alt="Eurocon High-Precision Modular Fan Section"
                  className="w-full h-full object-contain filter drop-shadow-2xl will-change-transform transform hover:scale-105 transition-transform duration-700 relative z-10"
                />

                {/* Bottom overlay card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white flex items-center justify-between z-20 shadow-xl">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold">
                      PRECISION AIR MANAGEMENT
                    </span>
                    <p className="text-xs font-semibold text-slate-200">
                      Modular Fan Section & Dynamic Balancing (ISO 1940 G2.5)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600 opacity-0"
            >
              <span className="w-8 h-[2px] bg-red-500" />
              <span>THE EUROCON PHILOSOPHY</span>
            </div>

            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] opacity-0"
            >
              ENGINEERING AIRFLOW.
              <br />
              <span className="text-red-600">CREATING COMFORT.</span>
            </h2>

            <div ref={bodyRef} className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed opacity-0">
              <p>
                <strong className="text-slate-900 font-bold">EUROCON SYSTEM LLP</strong> delivers advanced air management, ventilation and industrial HVAC engineering solutions designed for demanding environmental, thermal and life-safety applications.
              </p>
              <p className="text-sm sm:text-base text-slate-500">
                From subterranean metro transit smoke routing and sterile cleanrooms to expansive manufacturing shopfloors, our systems guarantee aerodynamic precision, acoustic comfort, and lifelong durability.
              </p>
            </div>

            <div ref={ctaLinkRef} className="pt-2 opacity-0">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-600 transition-colors"
              >
                <span>Discover Eurocon</span>
                <ArrowRight className="w-4 h-4 text-red-600 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                <h3 className="font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-7.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
