"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone, Mail, Wind } from "lucide-react";
import { COMPANY_INFO } from "@/data/euroconData";

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
    { name: "Solutions & Products", href: "/products" },
    { name: "Industries Served", href: "/industries" },
    { name: "Engineering & CFD", href: "/engineering" },
    { name: "Quality Assurance", href: "/quality" },
    { name: "Selected Projects", href: "/projects" },
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
            className="relative w-full max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-slate-950 font-black">
                  <Wind className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-base tracking-wide block">
                    EUROCON
                  </span>
                  <span className="text-[10px] text-sky-400 font-mono tracking-widest uppercase">
                    SYSTEM LLP
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 overflow-y-auto flex-1 space-y-1 text-slate-800">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-3 rounded-xl font-bold text-base text-slate-800 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-slate-600 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>{COMPANY_INFO.headquarters.phone.split("/")[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
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
