"use client";

import React from "react";
import Link from "next/link";
import { Wind, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-sky-500/20">
                <Wind className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-wider block">
                  EUROCON <span className="text-sky-400 font-light">SYSTEM LLP</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  HVAC & Industrial Air Solutions
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering high-efficiency centrifugal blowers, axial flow systems, emergency smoke extraction, and automated air distribution networks for critical industrial and infrastructure projects.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              AMCA 210/300 • EN 12101-3 F400 • ISO 9001:2015 • SMACNA
            </div>
          </div>

          {/* Col 2: Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-sky-400 transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-sky-400 transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products" className="hover:text-sky-400 transition-colors">
                  Centrifugal Fans
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-400 transition-colors">
                  Axial Fans
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-400 transition-colors">
                  Jet Fans
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-sky-400 transition-colors">
                  HVLS Fans
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
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.headquarters.phone.split("/")[0].trim()}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.headquarters.phone.split("/")[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
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
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
