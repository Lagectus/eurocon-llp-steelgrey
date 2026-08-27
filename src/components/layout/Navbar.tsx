"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Wind,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PRODUCTS_DATA, COMPANY_INFO } from "@/data/euroconData";
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
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Engineering", href: "/engineering" },
    { name: "Quality", href: "/quality" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    {
      title: "Air Management",
      desc: "Centrifugal & high-volume axial flow systems",
      link: "/products",
    },
    {
      title: "Smoke Exhaust",
      desc: "High-temperature 400°C/2h life safety ventilation",
      link: "/products",
    },
    {
      title: "Air Distribution",
      desc: "SMACNA Class A sealed ducts & acoustic inline fans",
      link: "/products",
    },
    {
      title: "HVAC Solutions",
      desc: "HVLS industrial fans, air handling & scrubbers",
      link: "/products",
    },
  ];

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
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-[1.5px] shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center">
              <Wind className="w-5 h-5 text-sky-400" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg tracking-wider text-slate-900">
                EUROCON
              </span>
              <span className="text-sky-600 font-bold text-xs tracking-widest uppercase">
                SYSTEM
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
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/about"
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            }`}
          >
            About
          </Link>

          {/* Solutions Dropdown Trigger with Safe Hover-Bridge */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterProducts}
            onMouseLeave={handleMouseLeaveProducts}
          >
            <Link
              href="/products"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/products" || isProductsMenuOpen
                  ? "text-sky-600 bg-sky-50/80"
                  : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProductsMenuOpen ? "rotate-180 text-sky-600" : "text-slate-400"
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
                  className="absolute top-full -left-12 w-[440px] mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 z-50"
                >
                  <div className="space-y-1">
                    {categories.map((cat, i) => (
                      <Link
                        key={i}
                        href={cat.link}
                        onClick={() => setIsProductsMenuOpen(false)}
                        className="p-3 rounded-xl hover:bg-slate-50 flex items-start justify-between group transition-colors"
                      >
                        <div>
                          <span className="font-bold text-sm text-slate-900 group-hover:text-sky-600 transition-colors block">
                            {cat.title}
                          </span>
                          <span className="text-xs text-slate-500 mt-0.5 block">
                            {cat.desc}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 transform group-hover:translate-x-1 transition-all mt-1" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      AMCA 210 & ISO 9001 TESTED
                    </span>
                    <Link
                      href="/products"
                      onClick={() => setIsProductsMenuOpen(false)}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                    >
                      <span>Full Catalog</span>
                      <ArrowRight className="w-3 h-3" />
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
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/engineering"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/engineering"
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            }`}
          >
            Engineering
          </Link>

          <Link
            href="/quality"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/quality"
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            }`}
          >
            Quality
          </Link>

          <Link
            href="/projects"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/projects"
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
            }`}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              pathname === "/contact"
                ? "text-sky-600 bg-sky-50/80"
                : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-sky-600/20 hover:shadow-lg hover:-translate-y-0.5"
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
