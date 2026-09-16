"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ProductSchematic from "../ui/ProductSchematic";
import { Product } from "@/types";

interface CompactProductsProps {
  onSelectProduct?: (product: Product) => void;
}

export default function CompactProducts({}: CompactProductsProps = {}) {
  const products = [
    {
      id: "prod-ahu",
      num: "01",
      name: "AHU (DX Type System)",
      tagline: "Thermal-break double-skin modular AHUs with Direct Expansion (DX) coils and plug fan efficiency.",
      schematicType: "ahu" as const,
      badge: "DX Type System",
      href: "/products/ahu",
      image: "/images/products/AHU.png",
    },
    {
      id: "prod-airwashers",
      num: "02",
      name: "Industrial Airwashers",
      tagline: "High-saturation Celdek 5090 evaporative cooling units with heavy-duty SS304 sump.",
      schematicType: "airwasher" as const,
      badge: "90% Saturation",
      href: "/products/airwashers",
      image: "/images/products/industrial-airwashers.png",
    },
    {
      id: "prod-fan-section",
      num: "03",
      name: "Plug & Fan Section",
      tagline: "Direct-drive plug fans and DIDW blower plenums dynamically balanced to ISO G2.5.",
      schematicType: "fansection" as const,
      badge: "ISO 1940 G2.5",
      href: "/products/fan-section",
      image: "/images/products/fan-sections.png",
    },
    {
      id: "prod-cabinet-exhaust",
      num: "04",
      name: "Cabinet Exhaust Unit",
      tagline: "Whisper-quiet double-skin insulated in-line box fans for kitchen and fume exhaust.",
      schematicType: "cabinetexhaust" as const,
      badge: "Acoustic Box",
      href: "/products/cabinet-exhaust-unit",
      image: "/images/products/cabinet-exhaust.png",
    },
    {
      id: "prod-fcu",
      num: "05",
      name: "FCU (Fan Coil Unit)",
      tagline: "Ultra-slim 220mm ceiling concealed chilled water & DX fan coils with 28 dBA acoustics.",
      schematicType: "fcu" as const,
      badge: "Ultra-Slim 220mm",
      href: "/products/fcu",
      image: "/images/products/FCU-(fancoilunit).png",
    },
    {
      id: "prod-centrifugal",
      num: "06",
      name: "Industrial Centrifugal Fans",
      tagline: "High static pressure backward curved & aerofoil impellers for heavy-duty process exhaust.",
      schematicType: "centrifugal" as const,
      badge: "AMCA 210",
      href: "/products/centrifugal-fans",
      image: "/images/products/centrifugal-fan.png",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              AIR MANAGEMENT, ENGINEERED FOR EVERY CHALLENGE.
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-red-600 group transition-colors self-start md:self-end whitespace-nowrap"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 text-red-600 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-red-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
            >
              {/* Top Diagram Preview */}
              <div className="relative bg-white p-5 border-b border-slate-100 overflow-hidden">
                {/* Subtle industrial grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[14px_14px] opacity-60 pointer-events-none" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="font-mono text-xs font-black text-red-600 group-hover:translate-x-1 transition-transform">
                    {product.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 shadow-xs">
                    <ShieldCheck className="w-3 h-3 text-red-600" />
                    {product.badge}
                  </span>
                </div>

                <div className="h-56 sm:h-64 flex items-center justify-center relative z-10 p-2">
                  {"image" in product && product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain filter drop-shadow-md transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <ProductSchematic type={product.schematicType} className="h-52 w-full" />
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-red-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Expanding Bottom Line */}
              <div className="h-0.75 w-full bg-slate-100 relative">
                <div className="h-full bg-linear-to-r from-red-500 to-[#1B2A6B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
            <ArrowRight className="w-4 h-4 text-red-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
