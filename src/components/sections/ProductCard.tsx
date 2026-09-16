"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect?: (product: Product) => void;
  onQuote: (productName: string) => void;
}

export default function ProductCard({
  product,
  index,
  onQuote,
}: ProductCardProps) {
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
        <div className="relative bg-white border-b border-slate-100 h-56 sm:h-60 overflow-hidden group/img flex items-center justify-center p-4">
          {/* Subtle industrial grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[14px_14px] opacity-60 pointer-events-none" />

          {/* Real High-Resolution Industrial Product Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-md relative z-1"
          />
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
      <div className="h-0.75 w-full bg-slate-100 relative">
        <div className="h-full bg-linear-to-r from-red-500 to-[#1B2A6B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
}

