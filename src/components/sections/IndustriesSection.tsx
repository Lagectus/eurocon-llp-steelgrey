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
  CheckCircle2,
  AlertTriangle,
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
    <section id="industries" className="relative py-24 sm:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
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
                      ? "bg-slate-900 text-white border-slate-800 shadow-lg translate-x-1"
                      : "bg-white text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isSelected
                          ? "bg-red-500 text-slate-950"
                          : "bg-slate-100 text-slate-700"
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
                      isSelected ? "text-red-400 translate-x-1" : "text-slate-400 opacity-40"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Feature Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Sector Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-red-100 text-[#1B2A6B] text-xs font-mono font-bold">
                        SECTOR: {selectedIndustry.code}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        EUROCON APPLICATION BLUEPRINT
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {selectedIndustry.name}
                    </h3>
                  </div>

                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 self-start sm:self-auto text-right">
                    <span className="block text-[10px] font-mono text-red-700 uppercase">
                      {selectedIndustry.stats.label}
                    </span>
                    <span className="text-xl font-black text-[#1B2A6B]">
                      {selectedIndustry.stats.value}
                    </span>
                  </div>
                </div>

                {/* Sector Narrative */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedIndustry.description}
                </p>

                {/* Grid of Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  {/* Key Engineering Challenges */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold font-mono uppercase text-slate-800 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Critical Project Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selectedIndustry.keyChallenges.map((ch, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineered Solutions */}
                  <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 space-y-3">
                    <h4 className="text-xs font-bold font-mono uppercase text-[#1B2A6B] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      Eurocon Engineered Solutions
                    </h4>
                    <ul className="space-y-2">
                      {selectedIndustry.solutionsProvided.map((sol, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommended Equipment & Quote Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 uppercase">
                      Recommended System Family:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedIndustry.recommendedProducts.map((p, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(`Industry Solution: ${selectedIndustry.name}`)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md shrink-0"
                  >
                    <span>Request Sector RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
