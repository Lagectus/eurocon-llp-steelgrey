"use client";

import React from "react";
import { motion } from "framer-motion";
import { QUALITY_STEPS } from "@/data/euroconData";
import SectionHeading from "../ui/SectionHeading";
import {
  Cpu,
  ShieldCheck,
  Settings,
  Activity,
  Sliders,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

export default function QualitySection() {
  const getQualityIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "Settings":
        return <Settings className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "Sliders":
        return <Sliders className="w-5 h-5" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <FileCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="quality" className="relative py-24 sm:py-32 bg-white text-[#334155] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TOTAL QUALITY ASSURANCE"
          title="QUALITY IS ENGINEERED INTO EVERY DETAIL."
          subtitle="From initial finite-element aerodynamic analysis to digital dual-plane balancing and automated multi-nozzle chamber testing, our 6-stage lifecycle guarantees zero defects."
        />

        {/* 6-Step Staggered Quality Process Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {QUALITY_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors border border-blue-200">
                    {getQualityIcon(step.iconName)}
                  </div>
                </div>

                <div className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider mb-1">
                  {"// "}{step.code}
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-[#334155] leading-snug group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Methodology & Standards Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 space-y-1.5 text-[11px] font-mono">
                <div className="text-slate-500">
                  <span className="text-slate-500">Method: </span>
                  <span className="text-[#334155] font-medium">{step.methodology}</span>
                </div>
                <div className="text-blue-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{step.complianceStandard}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
