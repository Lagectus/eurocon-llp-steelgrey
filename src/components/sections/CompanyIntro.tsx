"use client";

import React from "react";
import { motion } from "framer-motion";
import { METRIC_HIGHLIGHTS, COMPANY_INFO } from "@/data/euroconData";
import { ArrowUpRight, ShieldAlert, Award, Compass, Wind } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section id="intro" className="relative py-20 sm:py-28 bg-white overflow-hidden border-b border-slate-200">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Big Statement (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>THE EUROCON PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#334155] tracking-tight leading-[1.12]">
              ENGINEERING AIRFLOW.{" "}
              <span className="text-blue-600">CREATING COMFORT.</span>
            </h2>

            <div className="pt-2">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
            </div>
          </div>

          {/* Right Column: Narrative & Pillars (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 text-[#64748B] text-base sm:text-lg leading-relaxed font-normal">
            <p>
              <strong className="text-[#334155] font-bold">EUROCON SYSTEM LLP</strong> delivers advanced air management, ventilation systems, and industrial HVAC engineering solutions built to satisfy the most demanding environmental, thermal, and life-safety criteria.
            </p>
            <p className="text-[#64748B]">
              From subterranean metro transit smoke routing and high-containment cleanrooms to sprawling automated distribution centers, our equipment is designed from the ground up for maximum static efficiency, low acoustic signatures, and multi-decade mechanical dependability.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
              >
                <span>Read Full Engineering Capabilities</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Metrics Bar */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {METRIC_HIGHLIGHTS.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#334155] tracking-tight flex items-baseline">
                  <span>{metric.value}</span>
                </div>
                <div className="mt-2 font-bold text-sm text-[#334155]">
                  {metric.label}
                </div>
                <p className="mt-1 text-xs text-[#64748B] leading-snug">
                  {metric.description}
                </p>

                {/* Subtle top accent bar on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              * Representative engineering metrics subject to specific project configurations and laboratory aerodynamic testing data.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
