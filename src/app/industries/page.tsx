"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import SectionHeading from "@/components/ui/SectionHeading";
import IndustriesSection from "@/components/sections/IndustriesSection";

export default function IndustriesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitial, setQuoteInitial] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleOpenQuote = (product?: string) => {
    setQuoteInitial(product || "");
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Navbar
        onOpenQuoteModal={() => handleOpenQuote()}
        onOpenMobileMenu={() => setIsMobileOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      <main className="pt-24 pb-20">
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-sky-600">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>SECTORS & INDUSTRIAL APPLICATIONS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                SOLUTIONS FOR CRITICAL ENVIRONMENTS
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Custom ventilation engineering, cleanroom positive pressure cascade control, tunnel smoke extract, and heavy industrial heat clearance across 8 specialized sectors.
              </p>
            </div>
          </div>
        </section>

        <IndustriesSection onOpenQuoteModal={handleOpenQuote} />
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={quoteInitial}
      />
    </div>
  );
}
