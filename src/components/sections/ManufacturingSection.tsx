"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Factory, Activity, Cpu, Sparkles } from "lucide-react";

interface ManufacturingSectionProps {
  onOpenQuoteModal: () => void;
}

export default function ManufacturingSection({ onOpenQuoteModal }: ManufacturingSectionProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-white border-y border-slate-200 text-[#334155] overflow-hidden">
      {/* Cinematic Background Image with Light Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
          alt="Eurocon High-Precision Manufacturing Plant"
          className="w-full h-full object-cover object-center filter brightness-95 opacity-25 transform scale-105 hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold"
          >
            <Factory className="w-3.5 h-3.5 text-blue-600" />
            <span>ADVANCED MANUFACTURING INFRASTRUCTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#334155]"
          >
            BUILT WITH PRECISION.{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#334155]">
              DELIVERED WITH CONFIDENCE.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg text-[#64748B] font-light leading-relaxed max-w-2xl"
          >
            Our dedicated fabrication facility integrates high-precision CNC fiber lasers, automated SMACNA lock-forming coil lines, certified robotic welding, and automated multi-nozzle aerodynamic test rigs.
          </motion.p>

          {/* Plant Capability Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
              <span className="block text-xl sm:text-2xl font-black text-blue-600">±0.05 mm</span>
              <span className="block text-xs text-[#64748B] font-mono mt-1">Laser Cutting Precision</span>
            </div>
            <div className="p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
              <span className="block text-xl sm:text-2xl font-black text-[#334155]">100% FAT</span>
              <span className="block text-xs text-[#64748B] font-mono mt-1">Vibration FFT Verified</span>
            </div>
            <div className="p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
              <span className="block text-xl sm:text-2xl font-black text-blue-600">ISO 9001</span>
              <span className="block text-xs text-[#64748B] font-mono mt-1">QMS Certified Plant</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
