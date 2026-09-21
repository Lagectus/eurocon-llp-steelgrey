"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import SectionHeading from "@/components/ui/SectionHeading";
import QualitySection from "@/components/sections/QualitySection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";

export default function QualityPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#7B8290] text-white flex flex-col justify-between">
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
        <section className="py-16 sm:py-20 bg-[#7B8290] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/15 border border-blue-500/30 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>TOTAL QUALITY MANAGEMENT (TQM)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                QUALITY IS ENGINEERED INTO EVERY DETAIL
              </h1>
              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                6-stage quality assurance protocol: From finite element CFD modeling and raw material metallurgy to ISO 1940 dual-plane dynamic balancing and 100% factory acceptance run testing (FAT).
              </p>
            </div>
          </div>
        </section>

        <QualitySection />

        <ManufacturingSection onOpenQuoteModal={() => setIsQuoteOpen(true)} />
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
