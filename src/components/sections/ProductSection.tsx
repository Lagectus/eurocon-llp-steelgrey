"use client";

import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "./ProductCard";
import { PRODUCTS_DATA } from "@/data/euroconData";
import { Product } from "@/types";
import { ArrowRight, SlidersHorizontal, Download } from "lucide-react";

interface ProductSectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProductSection({
  onSelectProduct,
  onOpenQuoteModal,
}: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);

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

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OUR AIR MANAGEMENT SOLUTIONS"
            title="ENGINEERED PRODUCT PORTFOLIO"
            subtitle="Industrial ventilation equipment, precision-engineered impellers, and life-safety smoke exhaust units designed for optimal airflow and high static efficiency."
          />

          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs font-mono border border-blue-200 hover:bg-blue-100 transition-colors self-start md:self-end cursor-pointer"
          >
            <span>DOWNLOAD CATALOG (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-slate-50 text-[#64748B] border border-slate-200 hover:border-blue-400 hover:text-[#334155]"
              }`}
            >
              {cat === "All" ? "All Solutions" : cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={onSelectProduct}
              onQuote={onOpenQuoteModal}
            />
          ))}
        </div>

        {/* Expand / View All Solutions Button */}
        {filteredProducts.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#334155] font-bold text-sm transition-colors border border-slate-200 hover:border-blue-400 shadow-xs cursor-pointer"
            >
              <span>{showAll ? "Show Fewer Products" : `View All ${filteredProducts.length} Solutions`}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "-rotate-90" : "rotate-90"}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
