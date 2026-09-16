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
  ShieldCheck,
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
    "fan-section": <Fan className="w-5 h-5 text-red-600" />,
    airwashers: <Droplets className="w-5 h-5 text-[#1B2A6B]" />,
    ahu: <Layers className="w-5 h-5 text-red-500" />,
    fcu: <Wind className="w-5 h-5 text-teal-600" />,
    tfa: <Wind className="w-5 h-5 text-emerald-600" />,
    "cabinet-exhaust-unit": <Box className="w-5 h-5 text-amber-500" />,
    "scrubber-systems": <Filter className="w-5 h-5 text-purple-600" />,
    "cabinet-inline-unit": <Sliders className="w-5 h-5 text-cyan-600" />
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="Eurocon Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-0.5">
              <span className="font-black text-lg tracking-wider text-red-600">
                EURO
              </span>
              <span className="font-black text-lg tracking-wider text-[#1B2A6B]">
                CON
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-slate-500">
              HVAC & AIR SOLUTIONS LLP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/"
                ? "text-red-600 bg-red-50/80"
                : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/about"
                ? "text-red-600 bg-red-50/80"
                : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
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
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isProductsActive || isProductsMenuOpen
                  ? "text-red-600 bg-red-50/80"
                  : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProductsMenuOpen ? "rotate-180 text-red-600" : "text-slate-400"
                }`}
              />
            </Link>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-3 -mt-1" />

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isProductsMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-20 w-[520px] mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 z-50"
                >
                  <div className="px-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400">
                      EUROCON ENGINEERED PRODUCT LINES
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold border border-red-100">
                      8 CORE SERIES
                    </span>
                  </div>

                  <div className="space-y-1">
                    {CORE_EUROCON_NAV_PRODUCTS.map((prod) => (
                      <Link
                        key={prod.slug}
                        href={prod.href}
                        onClick={() => setIsProductsMenuOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-slate-50/90 flex items-start gap-3.5 group transition-all border border-transparent hover:border-slate-200/60"
                      >
                        <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center shrink-0 mt-0.5 border border-slate-200/60 group-hover:border-red-200 transition-colors">
                          {productIcons[prod.slug] || <Wind className="w-5 h-5 text-red-600" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="font-bold text-sm text-slate-900 group-hover:text-red-600 transition-colors block truncate">
                            {prod.name}
                          </span>
                          <span className="text-xs text-slate-500 line-clamp-1 mt-0.5 block">
                            {prod.desc}
                          </span>
                        </div>

                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all mt-2.5 shrink-0" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      AHRI • EN 1886 • AMCA 210 • ISO 9001
                    </span>
                    <Link
                      href="/products"
                      onClick={() => setIsProductsMenuOpen(false)}
                      className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <span>All Products Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/industries"
                ? "text-red-600 bg-red-50/80"
                : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
            }`}
          >
            Industries
          </Link>


          <Link
            href="/quality"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/quality"
                ? "text-red-600 bg-red-50/80"
                : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
            }`}
          >
            Quality
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/contact"
                ? "text-red-600 bg-red-50/80"
                : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <MagneticButton>
            <button
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-red-600/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </MagneticButton>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="p-2.5 rounded-xl lg:hidden bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
