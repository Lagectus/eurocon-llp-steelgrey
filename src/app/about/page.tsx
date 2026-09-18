"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ShieldCheck, Factory, Cpu, Award, CheckCircle2, ArrowRight, Wind } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO, METRIC_HIGHLIGHTS } from "@/data/euroconData";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#334155] flex flex-col justify-between">
      <Navbar
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
        onOpenMobileMenu={() => setIsMobileOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
      />

      <main className="pt-24 pb-20">
        {/* Page Hero */}
        <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>ABOUT EUROCON SYSTEM LLP</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#334155] tracking-tight leading-[1.1]">
                ENGINEERED AIRFLOW. <br />
                <span className="text-blue-600">BUILT FOR PERFORMANCE.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
                EUROCON SYSTEM LLP is an advanced industrial air management, ventilation, and HVAC engineering solutions provider dedicated to high aerodynamic efficiency, life-safety compliance, and multi-decade mechanical dependability.
              </p>
            </div>
          </div>
        </section>

        {/* Corporate Profile & Philosophy */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-[#64748B] leading-relaxed font-normal">
              <SectionHeading
                eyebrow="CORPORATE PROFILE"
                title="HERITAGE OF AERODYNAMIC PRECISION"
              />
              <p>
                Operating across the national industrial corridors, Eurocon manufactures customized heavy-duty centrifugal blowers, adjustable-pitch axial flow fans, emergency smoke exhaust units, SMACNA pre-fabricated ducts, and industrial wet scrubber systems.
              </p>
              <p>
                Our equipment is designed and tested in strict accordance with global benchmarks including AMCA 210, EN 12101-3 high-temperature fire smoke ratings, and ISO 1940 Grade G2.5 dynamic balancing norms.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                {METRIC_HIGHLIGHTS.slice(0, 2).map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="text-2xl sm:text-3xl font-black text-[#334155] font-mono block">{m.value}</span>
                    <span className="text-xs font-bold text-[#64748B] mt-1 block">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Eurocon Engineering Facility"
                className="w-full h-96 object-cover object-center filter brightness-95"
              />
            </div>
          </div>
        </section>

        {/* Certifications Matrix */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="QUALITY & ACCREDITATIONS"
              title="GLOBAL COMPLIANCE STANDARDS"
              subtitle="Tested and certified to ensure flawless performance under continuous industrial operation and emergency fire scenarios."
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-[#334155]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Banner */}
        <section className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200 text-[#334155] space-y-6 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black text-[#334155]">
              Ready to Discuss Your Airflow Specification?
            </h3>
            <p className="text-[#64748B] text-sm max-w-xl mx-auto font-normal">
              Our application engineering team is available to assist with fan curve selections, static resistance calculations, and customized fabrication drawings.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Request a Quote
              </button>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#334155] font-bold text-sm transition-colors border border-slate-300 hover:border-blue-600 hover:text-blue-600 shadow-xs"
              >
                Contact Application Engineers
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
