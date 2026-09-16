"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";
import AirflowCanvas from "../ui/AirflowCanvas";
import MagneticButton from "../ui/MagneticButton";

interface CompactCTAProps {
  onOpenQuoteModal: () => void;
}

export default function CompactCTA({ onOpenQuoteModal }: CompactCTAProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0F1932] text-white overflow-hidden">
      {/* Background Animated Streamlines */}
      <AirflowCanvas particleCount={25} color="rgba(220, 38, 38, 0.3)" />
      <div className="absolute inset-0 bg-tech-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono font-bold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT APPLICATION ENGINEERING</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
        >
          LET&apos;S ENGINEER YOUR NEXT{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-[#1B2A6B]">
            AIRFLOW SOLUTION.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-light leading-relaxed"
        >
          Have a project, airflow requirement or HVAC challenge? Talk to our engineering team for sizing, static pressure curves and custom fabrication.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-3"
        >
          <MagneticButton>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-500 hover:bg-red-400 text-slate-950 font-extrabold text-sm tracking-wide transition-all shadow-xl shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm tracking-wide border border-slate-700 transition-all hover:border-red-500/50"
            >
              <span>Contact Us</span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Trust Note */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>AMCA 210 / 300 & EN 12101-3 F400 Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Response within 24 Business Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
