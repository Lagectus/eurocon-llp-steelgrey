"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES_DATA } from "@/data/euroconData";
import { Industry } from "@/types";
import SectionHeading from "../ui/SectionHeading";
import {
  Building2,
  Factory,
  Car,
  TrainFront,
  Server,
  Hospital,
  Warehouse,
  Plane,
  ArrowRight,
} from "lucide-react";

interface IndustriesSectionProps {
  onOpenQuoteModal: (product?: string) => void;
}

export default function IndustriesSection({ onOpenQuoteModal }: IndustriesSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(INDUSTRIES_DATA[0]);

  const getIndustryIcon = (code: string) => {
    switch (code) {
      case "COM-01":
        return <Building2 className="w-5 h-5" />;
      case "MFG-02":
        return <Factory className="w-5 h-5" />;
      case "AUTO-03":
        return <Car className="w-5 h-5" />;
      case "TUN-04":
        return <TrainFront className="w-5 h-5" />;
      case "DATA-05":
        return <Server className="w-5 h-5" />;
      case "PHA-06":
        return <Hospital className="w-5 h-5" />;
      case "LOG-07":
        return <Warehouse className="w-5 h-5" />;
      case "AVN-08":
        return <Plane className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-white text-[#334155] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="INDUSTRIES WE SERVE"
          title="CUSTOM AIR MANAGEMENT FOR CRITICAL SECTORS"
          subtitle="From high-containment sterile cleanrooms and multi-level metro tunnels to massive automated logistics hubs, we engineer tailored HVAC ventilation solutions."
        />

        {/* Dynamic Interactive Split Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Industry Selector (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {INDUSTRIES_DATA.map((industry) => {
              const isSelected = selectedIndustry.id === industry.id;
              return (
                <div
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-500 shadow-lg translate-x-1"
                      : "bg-white text-[#334155] border-slate-200 hover:border-blue-400 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isSelected
                          ? "bg-blue-800 text-white"
                          : "bg-blue-50 text-blue-600 border border-blue-200"
                      }`}
                    >
                      {getIndustryIcon(industry.code)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider block opacity-70">
                        {industry.code}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base leading-tight">
                        {industry.name}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-white translate-x-1" : "text-slate-400"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Full-Bleed Industry Image Showcase (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-slate-900 h-[500px] sm:h-[560px] lg:h-[620px] xl:h-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                {/* Full-Bleed High-Definition Sector Image */}
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover object-center select-none"
                />

                {/* Top Subtle Vignette Gradient */}
                <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between gap-3 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold tracking-wider shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#EB0311] animate-pulse" />
                    <span>{selectedIndustry.code}</span>
                    <span className="text-white/40">•</span>
                    <span>SECTOR APPLICATION</span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-[#010A6D]/85 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold shadow-lg">
                    <span>{selectedIndustry.stats.label}: <strong>{selectedIndustry.stats.value}</strong></span>
                  </div>
                </div>

                {/* Bottom Gradient Overlay & Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent pt-28 pb-6 sm:pb-8 px-6 sm:px-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {selectedIndustry.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed mt-2 max-w-xl line-clamp-2">
                    {selectedIndustry.description}
                  </p>

                  {/* Recommended Equipment & Quick RFQ Action */}
                  <div className="pt-4 mt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-300 uppercase font-semibold mr-1">
                        Systems:
                      </span>
                      {selectedIndustry.recommendedProducts.map((p, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenQuoteModal(`Industry Solution: ${selectedIndustry.name}`)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
                    >
                      <span>Request Sector RFQ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
