"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductSchematic from "../ui/ProductSchematic";
import { Product } from "@/types";

interface CompactProductsProps {
  onSelectProduct?: (product: Product) => void;
}

export default function CompactProducts({}: CompactProductsProps = {}) {
  const products = [
    {
      id: "prod-fan-section",
      num: "01",
      name: "Fan Section",
      tagline: "A fan section is a modular component in heating, ventilation, and air conditioning (HVAC) systems that houses a centrifugal or axial blower to circulate air through ducts.",
      schematicType: "fansection" as const,
      badge: "ISO 1940 G2.5",
      href: "/products/fan-section",
      image: "/images/products/fan-section1.png",
    },
    {
      id: "prod-airwashers",
      num: "02",
      name: "Air Washer",
      tagline: "An air washer is a climate-control device that simultaneously cleans, humidifies, and cools air by bringing it into direct contact with water.",
      schematicType: "airwasher" as const,
      badge: "90% Saturation",
      href: "/products/airwashers",
      image: "/images/products/industrial-airwashers.png",
    },
    {
      id: "prod-ahu",
      num: "03",
      name: "Air Handling Unit (AHU)",
      tagline: "An Air Handling Unit (AHU) is a major device used in HVAC systems to regulate and circulate clean air throughout large buildings.",
      schematicType: "ahu" as const,
      badge: "AHRI 410 / TB2",
      href: "/products/ahu",
      image: "/images/products/AHU.png",
    },
    {
      id: "prod-fcu",
      num: "04",
      name: "FCU (Fan Coil Unit)",
      tagline: "A fan coil unit (FCU) is a compact HVAC device that heats or cools indoor spaces by circulating air over a water or refrigerant coil using a built-in blower fan.",
      schematicType: "fcu" as const,
      badge: "Ultra-Slim 220mm",
      href: "/products/fcu",
      image: "/images/products/FCU-(fancoilunit).png",
    },
    {
      id: "prod-tfa",
      num: "05",
      name: "TFA (Treated Fresh Air Unit)",
      tagline: "Designed exclusively to intake, process, and supply fresh outside air rather than recirculating indoor air, ensuring compliance with ventilation standards.",
      schematicType: "ahu" as const,
      badge: "100% Fresh Air",
      href: "/products/tfa",
      image: "/images/products/tfa-unit.png",
    },
    {
      id: "prod-cabinet-exhaust",
      num: "06",
      name: "Cabinet Exhaust Unit",
      tagline: "Cabinet exhaust units are enclosed, high-performance ventilation systems designed to extract heat, fumes, and contaminated air from commercial and industrial spaces.",
      schematicType: "cabinetexhaust" as const,
      badge: "Acoustic Box",
      href: "/products/cabinet-exhaust-unit",
      image: "/images/products/cabinet-exhaust.png",
    },
    {
      id: "prod-scrubber-systems",
      num: "07",
      name: "Scrubber Dry & Wet",
      tagline: "Dry and wet air scrubbers use different mechanisms to remove smoke, soot, and particulate matter from industrial or commercial exhaust streams.",
      schematicType: "scrubber" as const,
      badge: "99.5% Neutralization",
      href: "/products/scrubber-systems",
      image: "/images/products/wet-scrubber.png",
    },
    {
      id: "prod-cabinet-inline-unit",
      num: "08",
      name: "Cabinet Inline Unit",
      tagline: "Cabinet inline units are high-performance ventilation systems enclosed in insulated or non-insulated casings for quiet, efficient air movement in HVAC ducts.",
      schematicType: "inline" as const,
      badge: "Compact In-Line",
      href: "/products/cabinet-inline-unit",
      image: "/images/products/cabinet-inline-unit.png",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>OUR SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#334155] tracking-tight leading-[1.12]">
              AIR MANAGEMENT, ENGINEERED FOR EVERY CHALLENGE.
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#64748B] hover:text-blue-600 group transition-colors self-start md:self-end whitespace-nowrap"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
            >
              {/* Top Diagram Preview */}
              <div className="relative bg-slate-50 p-5 border-b border-slate-200 overflow-hidden">
                {/* Subtle industrial grid */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="font-mono text-xs font-black text-blue-600 group-hover:translate-x-1 transition-transform">
                    {product.num}
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
                    <ProductSchematic type={product.schematicType} isDark={false} className="h-52 w-full" />
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#334155] group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Expanding Bottom Line */}
              <div className="h-0.75 w-full bg-slate-200 relative">
                <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
