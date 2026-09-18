"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/euroconData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-50 text-[#64748B] text-sm overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-slate-200">
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-xs bg-white p-0.5 border border-slate-200">
                <Image
                  src="/logo.png"
                  alt="Eurocon Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-[#334155] tracking-wider block">
                  <span className="text-blue-600">EURO</span><span className="text-[#334155]">CON</span> <span className="text-[#64748B] font-light">SYSTEM LLP</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#64748B] uppercase">
                  HVAC & Industrial Air Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm font-normal">
              Engineering high-efficiency air handling units (AHU), industrial air washers, treated fresh air units (TFA), modular fan sections, acoustic cabinet exhaust, scrubbers, and inline ventilation units.
            </p>

            <div className="text-[11px] font-mono text-[#64748B]">
              AMCA 210/300 • EN 1886 • AHRI 410 • ISO 9001:2015
            </div>
          </div>

          {/* Col 2: Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155]">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155]">
              Core Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/fan-section" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Fan Section
                </Link>
              </li>
              <li>
                <Link href="/products/airwashers" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Air Washer
                </Link>
              </li>
              <li>
                <Link href="/products/ahu" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Air Handling Unit (AHU)
                </Link>
              </li>
              <li>
                <Link href="/products/fcu" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Fan Coil Unit (FCU)
                </Link>
              </li>
              <li>
                <Link href="/products/tfa" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  TFA (Treated Fresh Air)
                </Link>
              </li>
              <li>
                <Link href="/products/cabinet-exhaust-unit" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Cabinet Exhaust Unit
                </Link>
              </li>
              <li>
                <Link href="/products/scrubber-systems" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Scrubber Dry & Wet
                </Link>
              </li>
              <li>
                <Link href="/products/cabinet-inline-unit" className="text-[#64748B] hover:text-blue-600 transition-colors">
                  Cabinet Inline Unit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155]">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-[#64748B]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.headquarters.phone.split("/")[0].trim()}`} className="hover:text-blue-600 transition-colors">
                  {COMPANY_INFO.headquarters.phone.split("/")[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="hover:text-blue-600 transition-colors">
                  {COMPANY_INFO.headquarters.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-mono">
          <div>
            © 2026 Eurocon System LLP. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#64748B] hover:text-blue-600 transition-colors"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
