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
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-t border-slate-200 text-[#334155] overflow-hidden">
      {/* Background Animated Streamlines */}
      <AirflowCanvas particleCount={25} color="rgba(80, 162, 255, 0.25)" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>DIRECT APPLICATION ENGINEERING</span>
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
          className="text-base sm:text-lg text-[#64748B] max-w-xl mx-auto font-light leading-relaxed"
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#334155] font-bold text-sm tracking-wide border border-slate-300 transition-all hover:border-blue-400 shadow-xs"
            >
              <span>Contact Us</span>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Trust Note */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>AMCA 210 / 300 & EN 12101-3 F400 Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Response within 24 Business Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
