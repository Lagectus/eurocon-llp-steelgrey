"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CompactAbout() {
  const highlights = [
    {
      title: "Engineering Excellence",
      desc: "Focuses on maximizing energy efficiency, achieving maximum indoor air quality and thermal comfort while minimizing energy consumption and noise.",
    },
    {
      title: "Reliable Performance",
      desc: "Delivers steady airflow, exact temperature control, and clean indoor air with minimal breakdowns and low energy use.",
    },
    {
      title: "Customer-Focused Solutions",
      desc: "Combine smart automation, energy efficiency, and tailored indoor air quality (IAQ) management to meet specific residential, commercial, or industrial needs.",
    },
  ];

  return (
    <section id="about-preview" className="relative py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Heading & Short Paragraph (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-700"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>THE EUROCON PHILOSOPHY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#334155] tracking-tight leading-[1.12]"
            >
              ENGINEERING AIRFLOW.{" "}
              <br />
              <span className="text-blue-600">CREATING COMFORT.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-[#64748B] text-base sm:text-lg leading-relaxed"
            >
              <p>
                <strong className="text-[#334155] font-bold">EUROCON SYSTEM LLP</strong> delivers advanced air management, ventilation and industrial HVAC engineering solutions designed for demanding environmental, thermal and life-safety applications.
              </p>
              <p className="text-sm sm:text-base text-[#64748B]">
                From subterranean metro transit smoke routing and sterile cleanrooms to expansive manufacturing shopfloors, our systems guarantee aerodynamic precision, acoustic comfort, and lifelong durability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2 flex flex-wrap gap-4 items-center"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 group"
              >
                <span>Discover Eurocon</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Engineering Facility Image (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group"
            >
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20 flex items-center justify-center p-6 border border-slate-200">
                {/* Tech grid background */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/products/fan-section.png"
                  alt="Eurocon High-Precision Modular Fan Section"
                  className="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#334155] flex items-center justify-between shadow-xl z-20">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-blue-600 uppercase font-bold">
                      PRECISION AIR MANAGEMENT
                    </span>
                    <p className="text-xs font-semibold text-[#334155]">
                      Modular Fan Section & Dynamic Balancing
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3 Compact Highlights Below */}
        <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <h3 className="font-bold text-sm text-[#334155]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed pl-6.5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
