"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import SectionHeading from "@/components/ui/SectionHeading";
import EngineeringSection from "@/components/sections/EngineeringSection";
import WhyEurocon from "@/components/sections/WhyEurocon";

export default function EngineeringPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
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
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-sky-600">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>AERODYNAMIC SCIENCE & MODELING</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                PRECISION ENGINEERING. <br />
                <span className="text-sky-600">MEASURABLE PERFORMANCE.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Combining 3D Computational Fluid Dynamics (CFD), reverberant room acoustic analysis, and ISO 1940 Grade G2.5 dynamic balancing for peak mechanical efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Engineering Showcase & Interactive Calculator */}
        <EngineeringSection />

        {/* 6 Pillars of Why Eurocon */}
        <WhyEurocon />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct="Custom Engineering & CFD Consultation"
      />
    </div>
  );
}
