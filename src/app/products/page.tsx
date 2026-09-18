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
import { ArrowRight, SlidersHorizontal, Download, Sparkles, ChevronRight, Layers, Droplets, Fan, Box, Wind, Filter } from "lucide-react";
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
    "Ventilation & Exhaust Systems",
    "Pollution Control Systems",
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
    "fan-section": <Fan className="w-4 h-4 text-blue-400" />,
    airwashers: <Droplets className="w-4 h-4 text-blue-400" />,
    ahu: <Layers className="w-4 h-4 text-blue-400" />,
    fcu: <Wind className="w-4 h-4 text-teal-400" />,
    tfa: <Wind className="w-4 h-4 text-emerald-400" />,
    "cabinet-exhaust-unit": <Box className="w-4 h-4 text-amber-400" />,
    "scrubber-systems": <Filter className="w-4 h-4 text-purple-400" />,
    "cabinet-inline-unit": <Box className="w-4 h-4 text-cyan-400" />
  };

  return (
    <div className="min-h-screen bg-white text-[#334155] flex flex-col justify-between">
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
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>EUROCON TECHNICAL CATALOG</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#334155] tracking-tight leading-[1.1]">
                  AIR MANAGEMENT & HVAC SOLUTIONS
                </h1>
                <p className="text-base sm:text-lg text-[#64748B] font-normal">
                  Engineered Double Skin AHUs, Industrial Airwashers, Modular Fan Sections, Fan Coil Units (FCU), Treated Fresh Air Units (TFA), Acoustic Cabinet Exhaust Units, Wet & Dry Scrubbers, and Cabinet Inline Units.
                </p>
              </div>

              <button
                onClick={() => handleQuote()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-xs font-mono transition-colors self-start md:self-end shadow-md shadow-blue-600/25"
              >
                <span>REQUEST SPEC QUOTE (RFQ)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Featured Eurocon Core Products Quick Access Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider">
                  QUICK ACCESS: 8 CORE EUROCON PRODUCT LINES
                </span>
                <span className="text-[11px] font-mono text-blue-600">CLICK TO VIEW DEDICATED SPEC SHEET</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-2.5 sm:gap-3">
                {CORE_EUROCON_NAV_PRODUCTS.map((prod) => (
                  <Link
                    key={prod.slug}
                    href={prod.href}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center border border-slate-200 transition-colors">
                        {coreIcons[prod.slug] || <Wind className="w-4 h-4 text-blue-600" />}
                      </div>
                      <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                        {prod.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-xs text-[#334155] group-hover:text-blue-600 transition-colors truncate">
                        {prod.name}
                      </h4>
                      <span className="text-[10px] text-[#64748B] line-clamp-1 mt-0.5 block">
                        {prod.category}
                      </span>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-bold text-blue-600">
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
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-white text-[#64748B] border border-slate-200 hover:border-blue-500 hover:text-blue-600"
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
