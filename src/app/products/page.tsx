"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import QuoteModal from "@/components/ui/QuoteModal";
import ProductDetailModal from "@/components/ui/ProductDetailModal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/sections/ProductCard";
import { PRODUCTS_DATA, CORE_EUROCON_NAV_PRODUCTS } from "@/data/euroconData";
import { Product } from "@/types";
import { ArrowRight, SlidersHorizontal, Download, Sparkles, ChevronRight, Layers, Droplets, Fan, Box, Wind } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS_DATA[0]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Air Handling Solutions",
    "Air Management Systems",
    "Smoke Exhaust Systems",
    "Air Distribution",
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleQuote = (productName?: string) => {
    setQuoteInitialProduct(productName || "");
    setIsQuoteOpen(true);
  };

  const coreIcons: Record<string, React.ReactNode> = {
    ahu: <Layers className="w-4 h-4 text-sky-500" />,
    airwashers: <Droplets className="w-4 h-4 text-cyan-500" />,
    "fan-section": <Fan className="w-4 h-4 text-blue-500" />,
    "cabinet-exhaust-unit": <Box className="w-4 h-4 text-amber-500" />,
    fcu: <Wind className="w-4 h-4 text-teal-500" />
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Navbar
        onOpenQuoteModal={() => handleQuote()}
        onOpenMobileMenu={() => setIsMobileOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuoteModal={() => handleQuote()}
      />

      <main className="pt-24 pb-24">
        {/* Header Hero */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-sky-600">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span>EUROCON TECHNICAL CATALOG</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  AIR MANAGEMENT & HVAC SOLUTIONS
                </h1>
                <p className="text-base sm:text-lg text-slate-600 font-light">
                  Engineered Double Skin AHUs, Industrial Airwashers, Plug Fan Sections, Acoustic Cabinet Exhaust Blowers, FCUs, High-Volume Axials, and Pre-Fabricated Duct Systems.
                </p>
              </div>

              <button
                onClick={() => handleQuote()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono transition-colors self-start md:self-end shadow-md"
              >
                <span>REQUEST SPEC QUOTE (RFQ)</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>

            {/* Featured Eurocon Core Products Quick Access Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  QUICK ACCESS: 5 CORE EUROCON PRODUCT LINES
                </span>
                <span className="text-[11px] font-mono text-sky-600">CLICK TO VIEW DEDICATED SPEC SHEET</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {CORE_EUROCON_NAV_PRODUCTS.map((prod) => (
                  <Link
                    key={prod.slug}
                    href={prod.href}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-sky-400 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-50 group-hover:bg-sky-50 flex items-center justify-center border border-slate-100 transition-colors">
                        {coreIcons[prod.slug] || <Wind className="w-4 h-4 text-sky-600" />}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">
                        {prod.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                        {prod.name}
                      </h4>
                      <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 block">
                        {prod.category}
                      </span>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-sky-600">
                      <span>View Page</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Catalog Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "All Solutions" : cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onSelect={handleSelectProduct}
                onQuote={handleQuote}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={quoteInitialProduct}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onOpenQuoteModal={handleQuote}
      />
    </div>
  );
}
