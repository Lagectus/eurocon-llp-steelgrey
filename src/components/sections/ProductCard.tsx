"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Wind, Sliders } from "lucide-react";
import { Product } from "@/types";
import ProductSchematic from "../ui/ProductSchematic";

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
  onQuote: (productName: string) => void;
}

export default function ProductCard({
  product,
  index,
  onSelect,
  onQuote,
}: ProductCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={() => onSelect(product)}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-sky-400/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-2"
    >
      {/* Top Graphic / Schematic Area */}
      <div className="relative bg-slate-50 border-b border-slate-100 p-5 overflow-hidden">
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-2 relative z-10">
          <span className="font-mono text-xs font-black text-sky-600 tracking-wider group-hover:translate-x-1 transition-transform">
            {formattedIndex} // {product.category.toUpperCase()}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-xs">
            <ShieldCheck className="w-3 h-3 text-sky-600" />
            {product.specs.standards ? product.specs.standards[0] : "AMCA"}
          </span>
        </div>

        {/* Vector Schematic Diagram Preview */}
        <div className="py-2 transform group-hover:scale-105 transition-transform duration-500">
          <ProductSchematic type={product.schematicSvgType} className="h-40" />
        </div>

        {/* Floating Airflow Tag */}
        {product.specs.airflowRange && (
          <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-700 border border-slate-200 shadow-xs flex items-center gap-1.5">
            <Wind className="w-3 h-3 text-sky-500" />
            <span>{product.specs.airflowRange.split("(")[0]}</span>
          </div>
        )}
      </div>

      {/* Card Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Quick Specs Pills */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-600">
          {product.specs.staticPressure && (
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Max Pressure:</span>
              <span className="font-semibold text-slate-800">{product.specs.staticPressure}</span>
            </div>
          )}
          {product.specs.motorRating && (
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Motor Class:</span>
              <span className="font-semibold text-slate-800">{product.specs.motorRating.split(",")[0]}</span>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-sky-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            <span>Explore Engineering Specs</span>
            <ArrowRight className="w-4 h-4" />
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuote(product.name);
            }}
            className="text-[11px] font-semibold text-slate-500 hover:text-sky-600 underline underline-offset-4"
          >
            Quick RFQ
          </button>
        </div>
      </div>

      {/* Expanding Accent Line at Bottom */}
      <div className="h-[3px] w-full bg-slate-100 relative">
        <div className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
}
