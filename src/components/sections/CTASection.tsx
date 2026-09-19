"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Sparkles, ShieldCheck } from "lucide-react";
import AirflowCanvas from "../ui/AirflowCanvas";
import MagneticButton from "../ui/MagneticButton";

interface CTASectionProps {
  onOpenQuoteModal: () => void;
}

export default function CTASection({ onOpenQuoteModal }: CTASectionProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-slate-200 text-[#334155] overflow-hidden">
      {/* Background Animated Airflow Canvas */}
      <AirflowCanvas particleCount={30} color="rgba(1, 10, 109, 0.25)" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT ENGINEERING CONSULTATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#334155]"
        >
          LET&apos;S ENGINEER YOUR NEXT{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#334155]">
            AIRFLOW SOLUTION.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto font-light leading-relaxed"
        >
          Tell us about your project requirements, static pressure targets, or CFM volume requirements. Our senior application engineers will configure the exact aerodynamic solution.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <MagneticButton>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#334155] font-bold text-sm tracking-wide border border-slate-300 transition-all hover:border-blue-400 shadow-xs"
            >
              <span>Contact Our Team</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>AMCA 210 & ISO 9001 Tested</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>EN 12101-3 400°C/2hr Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Response within 24 Business Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
