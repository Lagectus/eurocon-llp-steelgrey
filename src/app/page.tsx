"use client";

import React, { useState } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";

// The EXACT 6 Major Homepage Sections
import Hero from "@/components/sections/Hero";
import CompactAbout from "@/components/sections/CompactAbout";
import CompactProducts from "@/components/sections/CompactProducts";
import CompactIndustries from "@/components/sections/CompactIndustries";
import CompactEngineering from "@/components/sections/CompactEngineering";
import CompactCTA from "@/components/sections/CompactCTA";

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

      {/* 6 High-Impact Sections */}
      <main className="relative">
        {/* 01 — HERO */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal("Eurocon Industrial Airflow Consultation")} />

        {/* 02 — ABOUT / COMPANY INTRO */}
        <CompactAbout />

        {/* 03 — SOLUTIONS / PRODUCTS */}
        <CompactProducts onSelectProduct={handleSelectProduct} />

        {/* 04 — INDUSTRIES */}
        <CompactIndustries />

        {/* 05 — ENGINEERING + WHY EUROCON */}
        <CompactEngineering />

        {/* 06 — FINAL CTA */}
        <CompactCTA onOpenQuoteModal={() => handleOpenQuoteModal("Custom Airflow System Requirement")} />
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
