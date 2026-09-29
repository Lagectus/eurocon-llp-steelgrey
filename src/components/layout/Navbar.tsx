"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Wind,
  Sparkles,
  Layers,
  Fan,
  Box,
  Droplets,
  Sliders,
  Filter,
  Cpu
} from "lucide-react";
import { PRODUCTS_DATA, COMPANY_INFO, CORE_EUROCON_NAV_PRODUCTS } from "@/data/euroconData";
import MagneticButton from "../ui/MagneticButton";

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenMobileMenu: () => void;
}

export default function Navbar({
  onOpenQuoteModal,
  onOpenMobileMenu,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterProducts = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProductsMenuOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 250);
  };

  const isProductsActive = pathname?.startsWith("/products");

  const productIcons: Record<string, React.ReactNode> = {
    "fan-section": <Fan className="w-4 h-4 text-white" />,
    airwashers: <Droplets className="w-4 h-4 text-white" />,
    ahu: <Layers className="w-4 h-4 text-white" />,
    fcu: <Wind className="w-4 h-4 text-white" />,
    tfa: <Wind className="w-4 h-4 text-white" />,
    "cabinet-exhaust-unit": <Box className="w-4 h-4 text-white" />,
    "scrubber-systems": <Filter className="w-4 h-4 text-white" />,
    "cabinet-inline-unit": <Sliders className="w-4 h-4 text-white" />,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#4B5563]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-[#4B5563]/90 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform bg-white p-0.5 border border-white/20 shrink-0">
            <Image
              src="/logo.png"
              alt="Eurocon Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="flex flex-col shrink-0 select-none">
            <div className="flex items-center text-lg sm:text-xl font-black tracking-wider leading-none">
              <span className="text-[#EB0311]">EUR</span>
              <span className="text-[#010A6D]">OCON</span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-white/90 font-bold mt-1">
              HVAC & AIR SOLUTIONS LLP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              pathname === "/"
                ? "text-white bg-blue-600 font-bold shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              pathname === "/about"
                ? "text-white bg-blue-600 font-bold shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            About
          </Link>

          {/* Products Dropdown Trigger with Safe Hover-Bridge */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterProducts}
            onMouseLeave={handleMouseLeaveProducts}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                isProductsActive || isProductsMenuOpen
                  ? "text-white bg-blue-600 font-bold shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProductsMenuOpen ? "rotate-180 text-white" : "text-white/80"
                }`}
              />
            </Link>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-3" />

            {/* Dropdown Menu (2 Columns for modern clean aesthetics) */}
            <AnimatePresence>
              {isProductsMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full -left-28 w-[580px] mt-2 bg-[#374151] rounded-2xl shadow-xl border border-white/15 p-4 z-50 text-white"
                >
                  <div className="px-2 pb-2.5 mb-2.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white">
                      EUROCON ENGINEERED PRODUCT LINES
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white font-bold border border-white/20">
                      8 CORE SERIES
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {CORE_EUROCON_NAV_PRODUCTS.map((prod) => (
                      <Link
                        key={prod.slug}
                        href={prod.href}
                        onClick={() => setIsProductsMenuOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/8 flex items-start gap-3 group transition-all border border-transparent hover:border-white/15"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 mt-0.5 border border-white/15 group-hover:border-white/30 transition-colors text-white">
                          {productIcons[prod.slug] || <Wind className="w-4 h-4 text-white" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-300 transition-colors block truncate">
                            {prod.name}
                          </span>
                          <span className="text-[11px] text-white/90 line-clamp-1 mt-0.5 block">
                            {prod.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                    <span className="text-[10px] font-mono text-white/80">
                      Industrial Grade • Aerodynamic Precision • High Efficiency
                    </span>
                    <Link
                      href="/products"
                      onClick={() => setIsProductsMenuOpen(false)}
                      className="text-xs font-bold text-white hover:text-blue-300 flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span>All Products Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              pathname === "/industries"
                ? "text-white bg-blue-600 font-bold shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              pathname === "/contact"
                ? "text-white bg-blue-600 font-bold shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <MagneticButton>
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticButton>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="p-2.5 rounded-xl lg:hidden bg-white/10 text-white hover:text-blue-400 hover:bg-white/15 border border-white/15 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
