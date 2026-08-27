"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PRODUCTS_DATA } from "@/data/euroconData";
import { Product } from "@/types";
import SectionHeading from "../ui/SectionHeading";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Wind, Sliders } from "lucide-react";
import ProductSchematic from "../ui/ProductSchematic";

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProductShowcase({
  onSelectProduct,
  onOpenQuoteModal,
}: ProductShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden">
      {/* Background Radial Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(2,132,199,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Row with Carousel Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            theme="dark"
            eyebrow="ENGINEERED FOR EVERY AIRFLOW CHALLENGE"
            title="AERODYNAMIC SHOWCASE"
            subtitle="Explore our flagship air handling assemblies, built with high-efficiency impellers and heavy-gauge construction for mission-critical installations."
          />

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-md shadow-sky-600/30"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding Strip */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {PRODUCTS_DATA.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="snap-start shrink-0 w-[320px] sm:w-[400px] lg:w-[460px] bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-sky-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span className="text-sky-400 font-bold">
                    0{idx + 1} // {product.category.toUpperCase()}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                    {product.heroBadge}
                  </span>
                </div>

                {/* Schematic / Visual Preview */}
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 mb-5 group-hover:border-sky-500/30 transition-colors">
                  <ProductSchematic type={product.schematicSvgType} isDark={true} className="h-44" />
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-sky-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Technical Highlights Box */}
                <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1 text-xs font-mono text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Airflow:</span>
                    <span className="text-sky-400">{product.specs.airflowRange?.split("(")[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Static Pres:</span>
                    <span className="text-slate-200">{product.specs.staticPressure}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  <span>Open Engineering Datasheet</span>
                  <ArrowRight className="w-4 h-4" />
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuoteModal(product.name);
                  }}
                  className="px-3 py-1 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-mono border border-sky-500/30 transition-colors"
                >
                  RFQ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
