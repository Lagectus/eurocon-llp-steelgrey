"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHY_EUROCON_PILLARS } from "@/data/euroconData";
import SectionHeading from "../ui/SectionHeading";
import {
  Cpu,
  Flame,
  Factory,
  Volume2,
  Clock,
  Truck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function WhyEurocon() {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case "pillar-engineering":
        return <Cpu className="w-6 h-6 text-blue-500" />;
      case "pillar-safety":
        return <Flame className="w-6 h-6 text-blue-500" />;
      case "pillar-manufacturing":
        return <Factory className="w-6 h-6 text-slate-400" />;
      case "pillar-acoustics":
        return <Volume2 className="w-6 h-6 text-blue-500" />;
      case "pillar-lifecycle":
        return <Clock className="w-6 h-6 text-slate-400" />;
      case "pillar-support":
        return <Truck className="w-6 h-6 text-slate-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white text-[#334155] border-y border-slate-200 overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="THE EUROCON ADVANTAGE"
          title="WHY CHOOSE EUROCON SYSTEM LLP?"
          subtitle="Engineering rigor, precision manufacturing, certified life-safety compliance, and comprehensive on-site commissioning."
        />

        {/* Modern Asymmetric Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_EUROCON_PILLARS.map((pillar, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? "bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-blue-200 shadow-md"
                    : "bg-white border-slate-200 hover:border-blue-400 shadow-sm"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      {getPillarIcon(pillar.id)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#334155] group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric Stat Callout */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-2xl font-black text-[#334155] font-mono block">
                      {pillar.stat}
                    </span>
                    <span className="text-[11px] font-mono text-blue-600 uppercase font-semibold">
                      {pillar.statLabel}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
