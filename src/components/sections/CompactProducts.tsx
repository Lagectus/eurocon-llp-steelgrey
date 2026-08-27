"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ProductSchematic from "../ui/ProductSchematic";
import { Product } from "@/types";

interface CompactProductsProps {
  onSelectProduct?: (product: Product) => void;
}

export default function CompactProducts({ onSelectProduct }: CompactProductsProps) {
  const products = [
    {
      id: "prod-centrifugal",
      num: "01",
      name: "Industrial Centrifugal Fans",
      tagline: "High-efficiency backward curved & aerofoil impellers for high static pressure.",
      schematicType: "centrifugal" as const,
      badge: "AMCA 210",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prod-axial",
      num: "02",
      name: "High-Volume Axial Fans",
      tagline: "Adjustable pitch aerofoil blades for massive volume ventilation and shafts.",
      schematicType: "axial" as const,
      badge: "ISO 5801",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prod-jet-smoke",
      num: "03",
      name: "Jet & Smoke Exhaust Fans",
      tagline: "Ductless high-velocity thrust systems and 400°C/2hr certified fire extractors.",
      schematicType: "jet" as const,
      badge: "EN 12101-3 F400",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prod-inline",
      num: "04",
      name: "Inline & Acoustic Fans",
      tagline: "Whisper-quiet double-skin insulated cabinet units for false ceiling duct runs.",
      schematicType: "inline" as const,
      badge: "AMCA 300 Noise",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prod-hvls",
      num: "05",
      name: "HVLS Industrial Fans",
      tagline: "Massive 24ft PMSM gearless destratification for high-bay warehouses and factories.",
      schematicType: "hvls" as const,
      badge: "PMSM Direct Drive",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "prod-air-dist",
      num: "06",
      name: "Air Distribution & HVAC Systems",
      tagline: "CNC pre-fabricated SMACNA Class A sealed ducts, scrubbers, and sound attenuators.",
      schematicType: "duct" as const,
      badge: "SMACNA Class A",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-sky-600">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              AIR MANAGEMENT, ENGINEERED FOR EVERY CHALLENGE.
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-600 group transition-colors self-start md:self-end whitespace-nowrap"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 text-sky-600 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, idx) => (
            <Link
              key={product.id}
              href="/products"
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
            >
              {/* Top Diagram Preview */}
              <div className="relative bg-slate-100/60 p-5 border-b border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-black text-sky-600 group-hover:translate-x-1 transition-transform">
                    {product.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                    <ShieldCheck className="w-3 h-3 text-sky-600" />
                    {product.badge}
                  </span>
                </div>

                <div className="py-2 transform group-hover:scale-105 transition-transform duration-500">
                  <ProductSchematic type={product.schematicType} className="h-36" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Expanding Bottom Line */}
              <div className="h-[3px] w-full bg-slate-100 relative">
                <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Centered CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg"
          >
            <span>View All Solutions & Technical Catalog</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
