"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, Mail, ChevronRight } from "lucide-react";
import { COMPANY_INFO, CORE_EUROCON_NAV_PRODUCTS } from "@/data/euroconData";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  onOpenQuoteModal,
}: MobileMenuProps) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Eurocon", href: "/about" },
    { name: "Industries Served", href: "/industries" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Contact & Plant", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="relative w-full max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 overflow-hidden border-l border-slate-200 text-[#334155]"
          >
            {/* Header */}
            <div className="p-6 bg-slate-50 text-[#334155] flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 border border-slate-200">
                  <Image
                    src="/logo.png"
                    alt="Eurocon Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-extrabold text-base tracking-wide block text-[#334155]">
                    <span className="text-blue-600">EURO</span>CON
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                    SYSTEM LLP
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-200 text-[#334155] hover:bg-slate-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-5 overflow-y-auto flex-1 space-y-4 text-[#334155]">
              {/* Core Products Sub-menu */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between px-1.5 pb-1">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                    PRODUCTS & SOLUTIONS
                  </span>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5"
                  >
                    <span>All (8)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-1">
                  {CORE_EUROCON_NAV_PRODUCTS.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={prod.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-bold text-[#334155] hover:bg-white hover:text-blue-600 hover:shadow-xs transition-all border border-transparent hover:border-slate-200"
                    >
                      <span className="truncate">{prod.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Links */}
              <div className="space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl font-bold text-sm text-[#334155] hover:bg-slate-100 hover:text-blue-600 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-600 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{COMPANY_INFO.headquarters.phone.split("/")[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{COMPANY_INFO.headquarters.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
