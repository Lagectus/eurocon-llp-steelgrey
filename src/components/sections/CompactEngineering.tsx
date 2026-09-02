"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Factory, ShieldCheck, Headphones, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CompactEngineering() {
  const capabilities = [
    {
      num: "01",
      title: "Precision Engineering",
      desc: "Aerodynamic design, 3D CFD boundary layer simulation and application-focused engineering.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "Advanced Manufacturing",
      desc: "Modern CNC fiber laser cutting (±0.05mm), automated roll-forming, and robotic seam welding.",
      icon: Factory,
    },
    {
      num: "03",
      title: "Quality Focus",
      desc: "ISO 1940 Grade G2.5 dynamic balancing, AMCA laboratory airflow rigs, and 100% FAT verification.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Project Support",
      desc: "Comprehensive engineering assistance from aerodynamic sizing through on-site commissioning.",
      icon: Headphones,
    },
  ];

  return (
    <section id="engineering" className="relative py-24 sm:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>THE EUROCON ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            PRECISION ENGINEERING.{" "}
            <br className="hidden sm:inline" />
            MEASURABLE PERFORMANCE.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Engineering Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group"
            >
              <div className="relative h-80 sm:h-[450px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Eurocon Precision Engineering and Manufacturing Quality"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-red-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AERODYNAMIC RIGOR</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200">
                    Validated under AMCA 210 / 300 & EN 12101-3 Fire Standards
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 4 Capabilities List (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-red-50 text-slate-700 group-hover:text-red-600 flex items-center justify-center font-mono font-black text-sm shrink-0 transition-colors border border-slate-200/80 group-hover:border-red-200">
                    {cap.num}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Link */}
            <div className="pt-4">
              <Link
                href="/engineering"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow-md"
              >
                <span>Explore Engineering & CFD Simulation</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
