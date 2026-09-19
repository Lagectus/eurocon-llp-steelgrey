"use client";

import React, { useState } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

// Cinematic Redesigned Homepage Sections
import CinematicHero from "@/components/sections/CinematicHero";
import MetricsMarquee from "@/components/sections/MetricsMarquee";
import AboutStorytelling from "@/components/sections/AboutStorytelling";
import HorizontalProducts from "@/components/sections/HorizontalProducts";
import PinnedIndustries from "@/components/sections/PinnedIndustries";
import EngineeringShowcase from "@/components/sections/EngineeringShowcase";
import CinematicCTA from "@/components/sections/CinematicCTA";

// Interactive Modals
import QuoteModal from "@/components/ui/QuoteModal";
import ProductDetailModal from "@/components/ui/ProductDetailModal";
import { Product } from "@/types";
import { PRODUCTS_DATA } from "@/data/euroconData";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<string>("");

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS_DATA[0]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenQuoteModal = (productName?: string) => {
    setQuoteInitialProduct(productName || "");
    setIsQuoteModalOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  return (
    <SmoothScroll>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Global Sticky Navigation */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal("General Technical Inquiry")}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenQuoteModal={() => handleOpenQuoteModal("General Technical Inquiry")}
      />

      {/* 7 Cinematic Homepage Sections */}
      <main className="relative bg-[#6B7280] text-white">
        {/* 01 — CINEMATIC HERO */}
        <CinematicHero onOpenQuoteModal={() => handleOpenQuoteModal("Eurocon Industrial Airflow Consultation")} />

        {/* 02 — METRICS MARQUEE */}
        <MetricsMarquee />

        {/* 03 — ABOUT STORYTELLING */}
        <AboutStorytelling />

        {/* 04 — HORIZONTAL PRODUCTS SCROLL */}
        <HorizontalProducts />

        {/* 05 — PINNED INDUSTRIES SHOWCASE */}
        <PinnedIndustries />

        {/* 06 — ENGINEERING CAPABILITIES */}
        <EngineeringShowcase />

        {/* 07 — CINEMATIC CTA */}
        <CinematicCTA onOpenQuoteModal={() => handleOpenQuoteModal("Custom Airflow System Requirement")} />
      </main>

      {/* Compact Clean Footer */}
      <Footer />

      {/* Global Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteInitialProduct}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </SmoothScroll>
  );
}
