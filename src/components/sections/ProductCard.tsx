"use client";

import React from "react";
import Link from "next/link";
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
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-red-400/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
    >
      <Link href={`/products/${product.slug}`} className="flex-1 flex flex-col justify-between">
        {/* Top Graphic / Image Area */}
        <div className="relative bg-slate-900 border-b border-slate-100 h-52 overflow-hidden group/img">
          {/* Real High-Resolution Industrial Product Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              product.slug === "ahu" ? "object-contain p-3" : "object-cover"
            }`}
          />

          {/* Top Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="font-mono text-[10px] font-black text-white px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs border border-white/10 tracking-wider shadow-xs">
              {formattedIndex} // {product.category.toUpperCase()}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs border border-white/10 text-red-400 shadow-xs">
              <ShieldCheck className="w-3 h-3 text-red-400" />
              {product.specs.standards ? product.specs.standards[0] : "AMCA"}
            </span>
          </div>

          {/* Floating Airflow Tag */}
          {product.specs.airflowRange && (
            <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-200 border border-slate-700/80 shadow-xs flex items-center gap-1.5 z-10">
              <Wind className="w-3 h-3 text-red-400" />
              <span>{product.specs.airflowRange.split("(")[0]}</span>
            </div>
          )}

          {/* Floating Hero Badge */}
          {product.heroBadge && (
            <div className="absolute bottom-3 right-3 bg-red-600/90 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-mono font-bold text-white shadow-xs z-10">
              {product.heroBadge.split("&")[0]}
            </div>
          )}
        </div>

        {/* Card Body Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
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
            {product.specs.coolingCapacity && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Capacity:</span>
                <span className="font-semibold text-slate-800">{product.specs.coolingCapacity.split("(")[0]}</span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Card Footer Actions */}
      <div className="px-6 pb-5 pt-2 flex items-center justify-between">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-bold text-red-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
        >
          <span>Explore Specifications</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuote(product.name);
          }}
          className="text-[11px] font-semibold text-slate-500 hover:text-red-600 underline underline-offset-4 cursor-pointer"
        >
          Quick RFQ
        </button>
      </div>

      {/* Expanding Accent Line at Bottom */}
      <div className="h-[3px] w-full bg-slate-100 relative">
        <div className="h-full bg-gradient-to-r from-red-500 to-[#1B2A6B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
}

