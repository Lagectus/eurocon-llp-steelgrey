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
    <footer className="relative bg-slate-950 text-slate-400 text-sm overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-red-500/20">
                <Image
                  src="/logo.png"
                  alt="Eurocon Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-wider block">
                  <span className="text-red-500">EURO</span><span className="text-white">CON</span> <span className="text-slate-400 font-light">SYSTEM LLP</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  HVAC & Industrial Air Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering high-efficiency air handling units (AHU), industrial air washers, treated fresh air units (TFA), modular fan sections, acoustic cabinet exhaust, scrubbers, and inline ventilation units.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              AMCA 210/300 • EN 1886 • AHRI 410 • ISO 9001:2015
            </div>
          </div>

          {/* Col 2: Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-red-400 transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Core Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/fan-section" className="hover:text-red-400 transition-colors">
                  Fan Section
                </Link>
              </li>
              <li>
                <Link href="/products/airwashers" className="hover:text-red-400 transition-colors">
                  Air Washer
                </Link>
              </li>
              <li>
                <Link href="/products/ahu" className="hover:text-red-400 transition-colors">
                  Air Handling Unit (AHU)
                </Link>
              </li>
              <li>
                <Link href="/products/fcu" className="hover:text-red-400 transition-colors">
                  Fan Coil Unit (FCU)
                </Link>
              </li>
              <li>
                <Link href="/products/tfa" className="hover:text-red-400 transition-colors">
                  TFA (Treated Fresh Air)
                </Link>
              </li>
              <li>
                <Link href="/products/cabinet-exhaust-unit" className="hover:text-red-400 transition-colors">
                  Cabinet Exhaust Unit
                </Link>
              </li>
              <li>
                <Link href="/products/scrubber-systems" className="hover:text-red-400 transition-colors">
                  Scrubber Dry & Wet
                </Link>
              </li>
              <li>
                <Link href="/products/cabinet-inline-unit" className="hover:text-red-400 transition-colors">
                  Cabinet Inline Unit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.headquarters.phone.split("/")[0].trim()}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.headquarters.phone.split("/")[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.headquarters.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Eurocon System LLP. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-red-400 transition-colors"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
