"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  Car,
  TrainFront,
  Server,
  Hospital,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Cpu,
  Layers
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function PinnedIndustries() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentPanelsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = [
    {
      id: "ind-com",
      code: "COM-01",
      num: "01",
      name: "Commercial & Corporate Towers",
      shortTitle: "Commercial",
      systemLabel: "Modular Double-Skin AHU System",
      tagline: "Acoustic comfort, NC-35 noise criteria, and high-efficiency climate distribution for modern workplaces.",
      statValue: "Up to 28%",
      statLabel: "Energy Reduction",
      secondaryStat: "NC-35",
      secondaryStatLabel: "Max Noise Criteria",
      highlights: [
        { title: "Whisper-Quiet Acoustics", desc: "Internal sound-absorbing perforated casing meets strict tenant NC-35 sound levels." },
        { title: "DOAS Fresh Air Delivery", desc: "Dedicated outdoor air delivery with heat recovery wheels for continuous high IAQ." },
        { title: "Life-Safety Pressurization", desc: "Automatic stairwell & elevator shaft smoke containment blowers." }
      ],
      equipment: ["Modular AHU", "Cabinet Inline Units", "Acoustic Exhaust"],
      icon: Building2,
      image: "/images/products/AHU.png",
      compliance: "Indoor Air Quality (IAQ) & Acoustic Standards"
    },
    {
      id: "ind-mfg",
      code: "MFG-02",
      num: "02",
      name: "Heavy Manufacturing & Assembly",
      shortTitle: "Manufacturing",
      systemLabel: "Direct-Drive Modular Fan Section",
      tagline: "High-volume air turnover, thermal dissipation, and severe-duty particulate capture for factory shopfloors.",
      statValue: "18+ ACH",
      statLabel: "Shopfloor Air Turnover",
      secondaryStat: "65°C",
      secondaryStatLabel: "Continuous Ambient",
      highlights: [
        { title: "Process Fume Scrubbing", desc: "Multi-stage wet scrubbers capturing acid mist and welding byproduct gases." },
        { title: "Heavy-Gauge Impellers", desc: "Wear-resistant, dynamically balanced backward-curved fan wheels." },
        { title: "Thermal Destratification", desc: "Large evaporative cooling units clearing intense machine heat pockets." }
      ],
      equipment: ["Industrial Fan Section", "Industrial Air Washer", "Wet Scrubbers"],
      icon: Factory,
      image: "/images/products/fan-section.png",
      compliance: "Industrial Safety Standards • Heavy Duty Cycle • Aerodynamically Tested"
    },
    {
      id: "ind-auto",
      code: "AUTO-03",
      num: "03",
      name: "Automotive Plants & Paint Booths",
      shortTitle: "Automotive",
      systemLabel: "Treated Fresh Air (TFA) DOAS Unit",
      tagline: "Laminar cleanroom airflow and explosion-proof VOC mist capture for robotic paint & assembly lines.",
      statValue: "Class 1,000",
      statLabel: "Paint Shop Air Purity",
      secondaryStat: "0.3 m/s",
      secondaryStatLabel: "Uniform Downward Velocity",
      highlights: [
        { title: "Zero-Particulate Downdraft", desc: "Diffusion ceiling plenums guarantee flawless paint adhesion on vehicle bodies." },
        { title: "Spark-Resistant Blowers", desc: "Non-sparking brass-lined housings prevent ignition of volatile solvent fumes." },
        { title: "Exhaust Heat Recovery", desc: "Cross-flow plate exchangers reclaim energy from hot curing oven exhaust streams." }
      ],
      equipment: ["Treated Fresh Air (TFA)", "Direct-Drive Plug Fans", "Chemical Scrubbers"],
      icon: Car,
      image: "/images/products/tfa-unit.png",
      compliance: "Spark-Resistant Construction • Explosion-Safe Industrial Design"
    },
    {
      id: "ind-metro",
      code: "METRO-04",
      num: "04",
      name: "Metro Transit & Underground Infrastructure",
      shortTitle: "Metro & Tunnels",
      systemLabel: "High-Temp Acoustic Cabinet Exhaust Unit",
      tagline: "High-thrust reversible tunnel ventilation and emergency smoke purge systems rated for extreme temperatures.",
      statValue: "400°C / 2h",
      statLabel: "Emergency Fire Rating",
      secondaryStat: "100%",
      secondaryStatLabel: "Aerodynamic Reversibility",
      highlights: [
        { title: "Bi-Directional Jet Fans", desc: "Reversible pitch impellers deliver 100% full aerodynamic thrust in both forward & reverse." },
        { title: "Emergency Smoke Extraction", desc: "Rapid smoke clearance during train emergencies keeping evacuation routes open." },
        { title: "Under-Platform Exhaust (UPE)", desc: "Continuous heat evacuation from train braking resistors and undercarriages." }
      ],
      equipment: ["Tunnel Jet Fans", "High-Temp Axial Fans", "Fire Damper Actuators"],
      icon: TrainFront,
      image: "/images/products/cabinet-exhaust.png",
      compliance: "High-Temperature Smoke Extraction Standards"
    },
    {
      id: "ind-data",
      code: "DATA-05",
      num: "05",
      name: "Mission-Critical Data Centers",
      shortTitle: "Data Centers",
      systemLabel: "Direct-Drive Backward Curved Plug Fan Assembly",
      tagline: "High-density thermal extraction, underfloor static pressure management, and redundant 99.999% uptime airflow.",
      statValue: "99.999%",
      statLabel: "Cooling Availability",
      secondaryStat: "< 1.25",
      secondaryStatLabel: "Target Facility PUE",
      highlights: [
        { title: "EC Fan Wall Redundancy", desc: "N+1 brushless direct-drive fan arrays dynamically adjust CFM per server load." },
        { title: "Containment Pressurization", desc: "High static pressure blowers eliminate hot air recirculation across server racks." },
        { title: "Acoustic Boundary Dampers", desc: "Prevents hard drive vibrations and acoustic interference in high-density halls." }
      ],
      equipment: ["Fan Wall Plenums", "Precision AHUs", "In-Row Inline Boosters"],
      icon: Server,
      image: "/images/products/fan-sections.png",
      compliance: "High-Density Thermal Management • EC Efficiency"
    },
    {
      id: "ind-pharma",
      code: "PHARMA-06",
      num: "06",
      name: "Pharmaceutical & Sterile Cleanrooms",
      shortTitle: "Pharma",
      systemLabel: "Precision Evaporative Air Washer Unit",
      tagline: "Aseptic cascade air pressurization, zero-microbial accumulation, and terminal HEPA filtration integration.",
      statValue: "Class 100",
      statLabel: "Cleanliness Standard (Aseptic Grade)",
      secondaryStat: "15 Pa",
      secondaryStatLabel: "Room Pressure Cascade",
      highlights: [
        { title: "Crevice-Free SS316 Casing", desc: "Smooth internal geometry prevents microbial growth and withstands sanitization." },
        { title: "Cascade Differential Pressure", desc: "Automated damper regulation prevents contaminated air backflow between zones." },
        { title: "Multi-Tier HEPA Sealing", desc: "Gel-seal and mechanical gasket tracks engineered for zero particulate bypass." }
      ],
      equipment: ["Hygienic Double-Skin AHU", "TFA Cleanroom Units", "Safe-Change Filter Boxes"],
      icon: Hospital,
      image: "/images/products/industrial-airwashers.png",
      compliance: "Aseptic Cleanroom & Controlled Atmosphere Protocols"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const panels = contentPanelsRef.current;
      if (!panels || !pinContainerRef.current) return;

      const panelElements = Array.from(panels.children) as HTMLElement[];
      const totalPanels = panelElements.length;

      // Pin the entire container while we scroll through panels
      ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top top",
        end: () => `+=${totalPanels * 100}%`,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const idx = Math.min(Math.floor(progress * totalPanels), totalPanels - 1);
          setActiveIndex(idx);

          // Animate panel visibility
          panelElements.forEach((panel, i) => {
            if (i === idx) {
              gsap.to(panel, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            } else {
              gsap.to(panel, { opacity: 0, y: i < idx ? -25 : 25, duration: 0.3, ease: "power2.out" });
            }
          });
        },
      });
    });

    // Mobile: simple card stagger
    mm.add("(max-width: 1023px)", () => {
      if (contentPanelsRef.current) {
        gsap.fromTo(contentPanelsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentPanelsRef.current,
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
    <section ref={sectionRef} className="relative bg-[#7B8290] border-y border-white/10">
      {/* Section Header */}
      <div className="pt-12 sm:pt-14 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-400">
              <span className="w-8 h-[2px] bg-blue-400" />
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              SOLUTIONS FOR CRITICAL ENVIRONMENTS.
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-300 group transition-colors self-start md:self-end whitespace-nowrap"
          >
            <span>Explore All Sectors</span>
            <ArrowRight className="w-4 h-4 text-blue-400 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Desktop: Pinned Split Layout */}
      <div ref={pinContainerRef} className="hidden lg:block relative h-screen">
        <div className="absolute inset-x-0 bottom-0 top-[74px] grid grid-cols-12 gap-8 px-6 lg:px-12 items-center">
          {/* Left Column: Real Equipment Visual that transitions (5 of 12 cols) */}
          <div className="col-span-5 h-[calc(100vh-120px)] relative rounded-3xl overflow-hidden border border-white/15 shadow-xl bg-gradient-to-br from-gray-100 via-white to-gray-50">
            <div ref={imageContainerRef} className="absolute inset-0">
              {industries.map((ind, i) => (
                <div
                  key={ind.id}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center p-8"
                  style={{ opacity: activeIndex === i ? 1 : 0 }}
                >
                  {/* Subtle Tech grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[length:18px_18px] opacity-60 pointer-events-none" />

                  {/* Ambient Glow */}
                  <div className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

                  {/* Machine Product Image with 3D Float */}
                  <div className="relative w-full h-[62%] flex items-center justify-center mb-16 z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Live Spec Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 text-slate-900 space-y-1.5 shadow-lg z-20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                          ENGINEERED SYSTEM
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-blue-600 font-bold">
                        {ind.code}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {ind.systemLabel}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-900 font-mono font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{ind.compliance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical Progress Dots Indicator */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
              {industries.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "h-8 bg-blue-600 shadow-md shadow-blue-500/30" : "h-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Rich Information Dashboard (7 of 12 cols) */}
          <div className="col-span-7 relative h-[calc(100vh-120px)] flex items-center pr-4">
            <div ref={contentPanelsRef} className="relative w-full">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.id}
                    className={`${i === 0 ? "" : "absolute inset-0"} flex items-center`}
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <div className="space-y-6 w-full max-w-2xl">
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-xs">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono font-bold tracking-wider text-blue-400 uppercase block">
                              SECTOR {ind.num} // {ind.code}
                            </span>
                            <span className="text-xs text-white/90 font-mono">
                              Industrial Airflow Application
                            </span>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono text-white shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>Industrial Grade</span>
                        </span>
                      </div>

                      {/* Main Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-2xl xl:text-3xl font-black text-white tracking-tight leading-snug">
                          {ind.name}
                        </h3>
                        <p className="text-sm text-white leading-relaxed font-normal">
                          {ind.tagline}
                        </p>
                      </div>

                      {/* Key Performance Stats Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-[#4B5563] border border-white/12 shadow-xs">
                          <div className="flex items-center gap-2 mb-1">
                            <Gauge className="w-4 h-4 text-blue-400" />
                            <span className="text-[11px] font-mono text-white/90 uppercase font-semibold">
                              {ind.statLabel}
                            </span>
                          </div>
                          <span className="text-2xl xl:text-3xl font-black text-white tracking-tight">
                            {ind.statValue}
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#4B5563] border border-white/12 shadow-xs">
                          <div className="flex items-center gap-2 mb-1">
                            <Cpu className="w-4 h-4 text-blue-400" />
                            <span className="text-[11px] font-mono text-white/90 uppercase font-semibold">
                              {ind.secondaryStatLabel}
                            </span>
                          </div>
                          <span className="text-2xl xl:text-3xl font-black text-white tracking-tight">
                            {ind.secondaryStat}
                          </span>
                        </div>
                      </div>

                      {/* 3 Technical Capability Highlights */}
                      <div className="space-y-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/90 font-bold block">
                          Engineered Capabilities & Safeguards
                        </span>
                        <div className="space-y-2">
                          {ind.highlights.map((item, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-3 p-3 rounded-xl bg-[#4B5563]/80 border border-white/10 hover:border-blue-500/40 transition-colors"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                              <div className="space-y-0.5">
                                <span className="text-xs font-bold text-white block">
                                  {item.title}
                                </span>
                                <span className="text-[11px] text-white/90 leading-normal block font-normal">
                                  {item.desc}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applied Equipment & CTA Footer */}
                      <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-white/80" />
                          <div className="flex flex-wrap gap-1.5">
                            {ind.equipment.map((eq, eqIdx) => (
                              <span
                                key={eqIdx}
                                className="px-2.5 py-0.5 rounded-md bg-white/10 text-white border border-white/20 text-[10px] font-mono font-semibold"
                              >
                                {eq}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Link
                          href="/industries"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-xs tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
                        >
                          <span>Explore Solutions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Cards with Full Technical Data */}
      <div className="lg:hidden px-4 sm:px-6 pb-8">
        <div ref={!pinContainerRef.current ? contentPanelsRef : undefined} className="space-y-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="relative rounded-2xl overflow-hidden border border-white/12 bg-[#4B5563] shadow-lg"
              >
                {/* Header Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ind.image} alt={ind.name} className="h-full object-contain filter drop-shadow-sm z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-600">{ind.num} // {ind.code}</span>
                  </div>

                  <div className="absolute bottom-2 left-4 right-4 z-20">
                    <span className="text-[11px] font-mono text-slate-900 font-semibold block">{ind.systemLabel}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-white leading-relaxed">{ind.tagline}</p>

                  {/* Mobile Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#374151] border border-white/10">
                      <span className="text-[10px] font-mono text-white/90 block">{ind.statLabel}</span>
                      <span className="text-lg font-black text-white">{ind.statValue}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#374151] border border-white/10">
                      <span className="text-[10px] font-mono text-white/90 block">{ind.secondaryStatLabel}</span>
                      <span className="text-lg font-black text-white">{ind.secondaryStat}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {ind.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">{h.title}:</strong> {h.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Equipment */}
                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                    {ind.equipment.map((eq, eqIdx) => (
                      <span key={eqIdx} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white border border-white/20">
                        {eq}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/industries"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-xs transition-colors"
                  >
                    <span>Explore {ind.shortTitle} Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
