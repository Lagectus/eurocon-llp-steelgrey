"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Factory,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { COMPANY_INFO } from "@/data/euroconData";

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export default function AboutSection({ onOpenQuoteModal }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<"engineering" | "manufacturing" | "compliance">("engineering");

  const tabContent = {
    engineering: {
      title: "Aerodynamic Simulation & Custom Design",
      desc: "Our engineering design bureau employs high-order Computational Fluid Dynamics (CFD) and FEA structural vibration modeling to develop custom impeller aerodynamics tailored to unique project static pressures and acoustic limits.",
      points: [
        "Computational Fluid Dynamics (CFD) boundary layer optimization",
        "Custom acoustic attenuation modeling for sensitive architectural envelopes",
        "CAD/CAM parametric integration with client BIM & Revit models",
      ],
    },
    manufacturing: {
      title: "Automated CNC Manufacturing & Precision Balancing",
      desc: "Fabricated in state-of-the-art manufacturing facilities equipped with automated fiber laser cutters, CNC press brakes, robot-assisted seam welding, and digital dual-plane dynamic balancing rigs.",
      points: [
        "Fiber laser cutting up to 16mm plate thickness with 0.05mm precision",
        "Automated precision TDF/TDC lock-forming coil lines",
        "Dual-plane computerized dynamic precision balancing",
      ],
    },
    compliance: {
      title: "Quality Standards & Life-Safety Engineering",
      desc: "Every component is manufactured under stringent quality management procedures according to aerodynamic performance standards, high-temp fire smoke ratings, and casing air leakage norms.",
      points: [
        "High-temperature emergency smoke spill fans (300°C & 400°C / 2 hrs)",
        "Aerodynamic air performance and acoustic attenuation modeling",
        "Pre-dispatch quality inspection and precision vibration balancing",
      ],
    },
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white border-b border-slate-200 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Parallax Engineering Visual (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto"
            >
              {/* Decorative Framing Accent */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent blur-md pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden group">
                  <img
                    src="/aboutus.png"
                    alt="Eurocon Engineering and Manufacturing Facility in Rohad, Bahadurgarh"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Engineering Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
                    <Factory className="w-4 h-4 text-blue-600" />
                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase">PLANT CAPABILITY</span>
                      <span className="text-xs font-bold text-[#334155]">Modern CNC Infrastructure</span>
                    </div>
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#334155] flex items-center justify-between shadow-lg">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-blue-600 uppercase font-bold">QUALITY ASSURANCE</span>
                      <p className="text-xs font-semibold text-[#334155]">Quality Engineered & Precision Built</p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Company Story & Interactive Tabs (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="ABOUT EUROCON SYSTEM LLP"
              title="PRECISION AIRFLOW & HVAC ENGINEERING EXCELLENCE"
              subtitle="We engineer and manufacture high-performance industrial fans, smoke exhaust systems, and air management infrastructure built for mission-critical reliability."
            />

            {/* Interactive Capability Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-slate-200 gap-2 sm:gap-4">
                <button
                  onClick={() => setActiveTab("engineering")}
                  className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === "engineering"
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-[#334155]"
                  }`}
                >
                  01. Engineering Design
                  {activeTab === "engineering" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("manufacturing")}
                  className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === "manufacturing"
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-[#334155]"
                  }`}
                >
                  02. CNC Plant
                  {activeTab === "manufacturing" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("compliance")}
                  className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === "compliance"
                      ? "text-blue-600"
                      : "text-slate-500 hover:text-[#334155]"
                  }`}
                >
                  03. Quality & Reliability
                  {activeTab === "compliance" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full"
                    />
                  )}
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="pt-5 space-y-4">
                <h4 className="text-base font-bold text-[#334155]">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {tabContent[activeTab].desc}
                </p>
                <ul className="space-y-2.5 pt-1">
                  {tabContent[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#64748B]">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-blue-600/20"
              >
                <span>Discover Eurocon Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#334155] text-xs sm:text-sm font-bold border border-slate-300 hover:border-blue-400 transition-colors shadow-xs cursor-pointer"
              >
                Request Plant Tour / RFQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
