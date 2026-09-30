"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
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

  // Prevent multiple popups once auto-opened in session
  const hasAutoOpenedRef = useRef(false);

  const handleOpenQuoteModal = useCallback((productName?: string) => {
    setQuoteInitialProduct(productName || "");
    setIsQuoteModalOpen(true);
  }, []);

  const triggerScrollModal = useCallback(() => {
    if (hasAutoOpenedRef.current) return;
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("eurocon_quote_auto_opened") === "true") {
        hasAutoOpenedRef.current = true;
        return;
      }
      sessionStorage.setItem("eurocon_quote_auto_opened", "true");
    } catch {
      // Ignore storage errors
    }
    hasAutoOpenedRef.current = true;
    handleOpenQuoteModal("Eurocon Industrial Airflow Consultation");
  }, [handleOpenQuoteModal]);

  // Framer Motion useScroll hook (tracks scroll progress 0 -> 1)
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.2 && !hasAutoOpenedRef.current) {
      triggerScrollModal();
    }
  });

  // Secondary native scroll listener fallback (for Lenis & direct browser scrolling)
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem("eurocon_quote_auto_opened") === "true") {
        hasAutoOpenedRef.current = true;
        return;
      }
    } catch {
      // Ignore storage errors
    }

    const handleScroll = () => {
      if (hasAutoOpenedRef.current) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0 && scrollTop / scrollHeight >= 0.2) {
        triggerScrollModal();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerScrollModal]);

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
      <main className="relative bg-[#7B8290] text-white">
        {/* 01 — CINEMATIC HERO */}
        <CinematicHero onOpenQuoteModal={() => handleOpenQuoteModal("Eurocon Industrial Airflow Consultation")} />

        {/* 02 — METRICS MARQUEE */}
        <MetricsMarquee />

        {/* 03 — ABOUT STORYTELLING */}
        <AboutStorytelling />

        {/* 04 — HORIZONTAL PRODUCTS SCROLL */}
        <HorizontalProducts />

        {/* 05 — ENGINEERING CAPABILITIES */}
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
