"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function HorizontalProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: "prod-fan-section",
      num: "01",
      name: "Fan Section",
      tagline: "Direct-drive fans and DIDW blower plenums dynamically balanced to ISO 1940 Grade G2.5.",
      badge: "ISO 1940 G2.5",
      href: "/products/fan-section",
      image: "/images/products/fan-section.png",
    },
    {
      id: "prod-airwashers",
      num: "02",
      name: "Air Washer",
      tagline: "High-saturation Celdek 5090 evaporative cooling air washer systems with heavy-duty SS304 sump.",
      badge: "90% Saturation",
      href: "/products/airwashers",
      image: "/images/products/industrial-airwashers.png",
    },
    {
      id: "prod-ahu",
      num: "03",
      name: "Air Handling Unit (AHU)",
      tagline: "Thermal-break double-skin modular AHUs with Eurovent & AHRI certified coils and plug fan efficiency.",
      badge: "Eurovent & AHRI",
      href: "/products/ahu",
      image: "/images/products/AHU.png",
    },
    {
      id: "prod-fcu",
      num: "04",
      name: "FCU (Fan Coil Unit)",
      tagline: "Ultra-slim 220mm ceiling concealed chilled water & DX fan coils with 28 dBA acoustic comfort.",
      badge: "220mm Slim Profile",
      href: "/products/fcu",
      image: "/images/products/FCU-(fancoilunit).png",
    },
    {
      id: "prod-tfa",
      num: "05",
      name: "TFA (Treated Fresh Air Unit)",
      tagline: "Energy recovery treated fresh air units with total enthalpy heat wheels and multi-stage filtration.",
      badge: "78% Heat Recovery",
      href: "/products/tfa",
      image: "/images/products/tfa-unit.png",
    },
    {
      id: "prod-cabinet-exhaust",
      num: "06",
      name: "Cabinet Exhaust Unit",
      tagline: "Whisper-quiet double-skin insulated in-line box fans for commercial kitchen and fume exhaust.",
      badge: "AMCA 210 Rated",
      href: "/products/cabinet-exhaust-unit",
      image: "/images/products/cabinet-exhaust.png",
    },
    {
      id: "prod-scrubber",
      num: "07",
      name: "Scrubber Dry & Wet",
      tagline: "High-efficiency packed-bed wet & activated carbon dry scrubbers for industrial fumes and VOCs.",
      badge: "98% Efficiency",
      href: "/products/scrubber-systems",
      image: "/images/products/wet-scrubber.png",
    },
    {
      id: "prod-cabinet-inline",
      num: "08",
      name: "Cabinet Inline Unit",
      tagline: "Galvanized double-skin acoustic in-line fans engineered for low-noise false ceiling duct ventilation.",
      badge: "Compact In-Line",
      href: "/products/cabinet-inline-unit",
      image: "/images/products/cabinet-inline-unit.png",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      const getScrollAmount = () => {
        if (!track) return 0;
        // Total track scrollWidth minus window.innerWidth + extra end padding so the last card scrolls completely into comfortable view
        return Math.max(0, track.scrollWidth - window.innerWidth + 120);
      };

      const scrollTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${getScrollAmount() + 250}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      // Ensure calculation updates dynamically once images have loaded
      const imgs = track.querySelectorAll("img");
      imgs.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", () => {
            ScrollTrigger.refresh();
          });
        }
      });

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      // Header reveal
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      return () => {
        clearTimeout(timer);
        scrollTween.kill();
      };
    });

    // Mobile: simple stagger reveal
    mm.add("(max-width: 1023px)", () => {
      if (trackRef.current) {
        gsap.fromTo(trackRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="relative bg-slate-50">
      {/* Section Header (above the pin area) */}
      <div className="pt-12 sm:pt-14 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
              <span className="w-8 h-[2px] bg-red-500" />
              <span>OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              AIR MANAGEMENT, ENGINEERED FOR EVERY CHALLENGE.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-600 group transition-colors self-start md:self-end whitespace-nowrap"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Area (desktop: full screen pin) / Vertical Grid (mobile) */}
      <div ref={triggerRef} className="relative lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden">
        {/* Progress bar */}
        <div className="hidden lg:block absolute top-[74px] left-0 right-0 h-[3px] bg-slate-200 z-20">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-red-600 to-[#1B2A6B] origin-left will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 pb-8 lg:flex lg:flex-nowrap lg:gap-8 lg:px-12 lg:pb-0 lg:pt-16 will-change-transform items-stretch"
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="product-card-hover group relative bg-white rounded-2xl border border-slate-200 overflow-hidden flex-shrink-0 lg:w-[380px] xl:w-[420px] flex flex-col shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image Area */}
              <div className="relative bg-white border-b border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px] opacity-40 pointer-events-none" />

                <div className="flex items-center justify-between p-4 relative z-10">
                  <span className="font-mono text-xs font-black text-red-600">
                    {product.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                    <ShieldCheck className="w-3 h-3 text-red-600" />
                    {product.badge}
                  </span>
                </div>

                <div className="h-52 sm:h-60 lg:h-64 flex items-center justify-center p-4 relative z-10 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-image w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 w-full bg-slate-100 relative">
                <div className="h-full bg-gradient-to-r from-red-500 to-[#1B2A6B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>
          ))}

          {/* 09 — Final Catalog Call-to-Action Card */}
          <div className="product-card-hover group relative bg-gradient-to-br from-slate-900 via-slate-950 to-[#0F1932] text-white rounded-2xl border border-slate-800 overflow-hidden flex-shrink-0 lg:w-[380px] xl:w-[420px] flex flex-col justify-between p-7 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-red-500">
                  09 // CATALOG
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400">
                  Complete Portfolio
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-2xl font-black text-white leading-tight">
                  Looking for Custom HVAC Solutions?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Explore our complete portfolio of 45+ specialized air handling units, smoke exhaust blowers, acoustic ventilation, and chemical scrubbing systems.
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AMCA 210 & EN 1886 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom CFD & Aerodynamic Sizing</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <Link
                href="/products"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wide transition-all shadow-lg shadow-red-600/30 hover:shadow-red-500/40"
              >
                <span>Explore Complete Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA (Mobile only since desktop features the 09 Catalog card) */}
      <div className="py-6 text-center lg:hidden">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg"
        >
          <span>View All Solutions & Technical Catalog</span>
          <ArrowRight className="w-4 h-4 text-red-400" />
        </Link>
      </div>
    </section>
  );
}
