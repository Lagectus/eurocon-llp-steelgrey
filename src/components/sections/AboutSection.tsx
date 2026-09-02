"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Award,
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
        "Automated SMACNA compliant TDF/TDC lock-forming coil lines",
        "Dual-plane ISO 1940 Grade G2.5 computer-guided balancing",
      ],
    },
    compliance: {
      title: "Global Standards & Life-Safety Certifications",
      desc: "Every component is manufactured under stringent ISO 9001:2015 quality management procedures and tested according to AMCA 210/300, EN 12101-3 high-temp fire smoke ratings, and SMACNA leakage norms.",
      points: [
        "EN 12101-3 certified emergency smoke spill fans (300°C & 400°C / 2 hrs)",
        "AMCA 210 air performance and AMCA 300 sound reverberant test protocols",
        "100% factory acceptance run-testing (FAT) with vibration FFT records",
      ],
    },
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

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
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-red-500/20 to-transparent blur-md pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                    alt="Eurocon Engineering and Manufacturing Facility"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Floating Engineering Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
                    <Factory className="w-4 h-4 text-red-600" />
                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase">PLANT CAPABILITY</span>
                      <span className="text-xs font-bold text-slate-900">Modern CNC Infrastructure</span>
                    </div>
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-red-400 uppercase">QUALITY ASSURANCE</span>
                      <p className="text-xs font-semibold text-slate-200">ISO 9001:2015 & AMCA 210 Lab Certified</p>
                    </div>
                    <ShieldCheck className="w-6 h-6 text-red-400 shrink-0" />
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
                      ? "text-red-600"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  01. Engineering Design
                  {activeTab === "engineering" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-red-600 rounded-full"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("manufacturing")}
                  className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === "manufacturing"
                      ? "text-red-600"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  02. CNC Plant
                  {activeTab === "manufacturing" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-red-600 rounded-full"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("compliance")}
                  className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === "compliance"
                      ? "text-red-600"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  03. Compliance
                  {activeTab === "compliance" && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-red-600 rounded-full"
                    />
                  )}
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="pt-5 space-y-4">
                <h4 className="text-base font-bold text-slate-900">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tabContent[activeTab].desc}
                </p>
                <ul className="space-y-2.5 pt-1">
                  {tabContent[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md"
              >
                <span>Discover Eurocon Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-colors"
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
