"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Factory, Car, TrainFront, Server, Hospital } from "lucide-react";
import Link from "next/link";

export default function CompactIndustries() {
  const industries = [
    {
      id: "ind-com",
      num: "01",
      name: "Commercial & Corporate",
      tagline: "Acoustic comfort, NC-35 noise criteria and energy-efficient climate distribution.",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ind-mfg",
      num: "02",
      name: "Manufacturing & Heavy Industry",
      tagline: "Robust process exhaust, continuous air turnover, and severe-duty thermal clearance.",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ind-auto",
      num: "03",
      name: "Automotive & Paint Booths",
      tagline: "Laminar cleanroom airflow and spark-proof VOC chemical mist scrubbing.",
      icon: Car,
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ind-metro",
      num: "04",
      name: "Metro & Infrastructure",
      tagline: "High-thrust reversible tunnel jet ventilation and station emergency smoke exhaust.",
      icon: TrainFront,
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ind-data",
      num: "05",
      name: "Mission-Critical Data Centers",
      tagline: "High static pressure, underfloor air containment, and 99.999% uptime cooling.",
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "ind-pharma",
      num: "06",
      name: "Pharma & Cleanrooms",
      tagline: "Sterile suite HEPA filtration and positive pressure cascade control.",
      icon: Hospital,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#334155] tracking-tight leading-[1.12]">
              SOLUTIONS FOR CRITICAL ENVIRONMENTS.
            </h2>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#64748B] hover:text-blue-600 group transition-colors self-start md:self-end whitespace-nowrap"
          >
            <span>Explore Industries</span>
            <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Interactive Grid with Dynamic Image Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive 6 Industry Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((ind) => {
              const isSelected = activeIndustry.id === ind.id;
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveIndustry(ind)}
                  onClick={() => setActiveIndustry(ind)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-500 shadow-xl -translate-y-1"
                      : "bg-white text-[#334155] border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {ind.num}
                      </span>
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600 border border-blue-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className={`font-bold text-base mb-1.5 leading-snug ${isSelected ? "text-white" : "text-[#334155]"}`}>
                      {ind.name}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed line-clamp-2 ${
                        isSelected ? "text-blue-100" : "text-[#64748B]"
                      }`}
                    >
                      {ind.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? "text-white" : "text-blue-600"}>
                      Sector Overview
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? "text-white translate-x-1" : "text-blue-600"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Spotlight Visual (5 Cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white min-h-[380px] lg:min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Info Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#334155] space-y-2 shadow-xl">
                  <div className="flex items-center justify-between text-[11px] font-mono text-blue-600">
                    <span>SECTOR SPOTLIGHT</span>
                    <span>EUROCON ENGINEERED</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#334155]">
                    {activeIndustry.name}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {activeIndustry.tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/industries"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>Explore Sector Engineering</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
