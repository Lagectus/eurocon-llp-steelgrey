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
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white overflow-hidden">
      {/* Background Animated Airflow Canvas */}
      <AirflowCanvas particleCount={30} color="rgba(56, 189, 248, 0.35)" />
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-mono"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT ENGINEERING CONSULTATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
        >
          LET'S ENGINEER YOUR NEXT{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
            AIRFLOW SOLUTION.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
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
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm tracking-wide transition-all shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm tracking-wide border border-slate-700 transition-all hover:border-sky-500/50"
            >
              <span>Contact Our Team</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>AMCA 210 & ISO 9001 Tested</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Response within 24 Business Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
