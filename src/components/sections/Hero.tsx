"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Wind, Sparkles } from "lucide-react";
import Link from "next/link";
import AirflowCanvas from "../ui/AirflowCanvas";
import MagneticButton from "../ui/MagneticButton";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white text-[#334155] border-b border-slate-200"
    >
      {/* Background Engineering Grid & Radial Light Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Vector Airflow Streamlines */}
      <AirflowCanvas particleCount={30} color="rgba(80, 162, 255, 0.25)" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Heading, Paragraph, CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>PRECISION HVAC & INDUSTRIAL VENTILATION</span>
            </motion.div>

            {/* Main Heading Reveal */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.08] text-[#334155]"
              >
                ENGINEERED{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#334155]">
                  AIRFLOW.
                </span>
                <br />
                BUILT FOR{" "}
                <span className="relative inline-block text-[#334155]">
                  PERFORMANCE.
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                    className="absolute -bottom-1.5 left-0 h-[3px] bg-blue-600 rounded-full"
                  />
                </span>
              </motion.h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#64748B] max-w-xl font-normal leading-relaxed"
            >
              Advanced air management, ventilation and industrial HVAC solutions engineered for efficiency, reliability and total environmental comfort.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#334155] font-bold text-sm tracking-wide border border-slate-300 transition-all hover:border-blue-400 shadow-xs cursor-pointer"
                >
                  <span>Talk to Our Experts</span>
                </button>
              </MagneticButton>
            </motion.div>

            {/* Bottom Subtle Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#64748B] font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>AMCA 210 Lab Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>EN 12101-3 400°C/2h Fire Rated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-blue-600" />
                <span>ISO 1940 G2.5 Dynamic Balancing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Industrial HVAC Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg"
            >
              {/* Outer Decorative Accent */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-slate-200/50 blur-xl pointer-events-none" />

              {/* Main Product Visual Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Eurocon High Precision Industrial Air Handling & Fan Systems"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Airflow Overlay Streamline */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                    <path
                      d="M 20 100 Q 180 50, 340 140 T 480 110"
                      fill="none"
                      stroke="#50A2FF"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="animate-airflow-line"
                    />
                  </svg>

                  {/* Top Right Telemetry Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] font-mono text-blue-600 flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>88% PEAK EFFICIENCY</span>
                  </div>

                  {/* Bottom Technical Spec Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#334155] flex items-center justify-between shadow-xl">
                    <div>
                      <span className="block text-[10px] font-mono text-blue-600 uppercase font-bold">
                        CENTRIFUGAL SERIES // AMCA 210
                      </span>
                      <p className="text-xs font-semibold text-[#334155]">
                        Backward-curved aerofoil impeller for high static pressure
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#about-preview"
            className="group inline-flex flex-col items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold">
              SCROLL TO EXPLORE
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-blue-500 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-blue-600"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
