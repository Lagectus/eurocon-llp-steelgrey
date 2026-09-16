"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sliders, ShieldCheck, ArrowRight, FileText, Wind, Layers } from "lucide-react";
import { Product } from "@/types";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (productName?: string) => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onOpenQuoteModal,
}: ProductDetailModalProps) {
  const [prevProductId, setPrevProductId] = useState(product?.id);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  if (product?.id !== prevProductId) {
    setPrevProductId(product?.id);
    setSelectedPhotoIndex(0);
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200"
          >
            {/* Header */}
            <div className="relative bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-800">
              <div className="pr-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-mono border border-red-500/30">
                    {product.category}
                  </span>
                  {product.subCategory && (
                    <span className="text-xs text-slate-400 font-mono">
                      {"// "}{product.subCategory}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  {product.tagline}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-100">
              {/* Top Overview & Schematic */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 space-y-4">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-red-600 flex items-center gap-2">
                    <Wind className="w-4 h-4" /> Technical Overview
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.fullDescription}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {product.heroBadge}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-6 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group p-3 flex flex-col items-center justify-center">
                  <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={(product.gallery && product.gallery[selectedPhotoIndex]) || product.image}
                      alt={product.name}
                      className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {product.gallery && product.gallery.length > 1 && (
                    <div className="flex items-center gap-1.5 pt-2 mt-1 border-t border-slate-200 w-full justify-center">
                      {product.gallery.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedPhotoIndex(idx)}
                          className={`w-11 h-8 rounded-lg overflow-hidden border p-0.5 bg-white transition-all ${
                            selectedPhotoIndex === idx
                              ? "border-red-500 ring-2 ring-red-500/40"
                              : "border-slate-200 opacity-60 hover:opacity-100"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imgUrl}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Engineering Specifications Matrix */}
              <div className="pt-6">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-4">
                  <Sliders className="w-4 h-4 text-red-600" /> Engineering Specifications & Range
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.specs.airflowRange && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Airflow Range</span>
                      <span className="text-sm font-bold text-slate-900">{product.specs.airflowRange}</span>
                    </div>
                  )}
                  {product.specs.staticPressure && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Static Pressure</span>
                      <span className="text-sm font-bold text-slate-900">{product.specs.staticPressure}</span>
                    </div>
                  )}
                  {product.specs.impellerDiameter && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Impeller / Size Range</span>
                      <span className="text-sm font-bold text-slate-900">{product.specs.impellerDiameter}</span>
                    </div>
                  )}
                  {product.specs.driveType && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Drive Configuration</span>
                      <span className="text-sm font-bold text-slate-900">{product.specs.driveType}</span>
                    </div>
                  )}
                  {product.specs.motorRating && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Motor Rating & Class</span>
                      <span className="text-sm font-bold text-slate-900">{product.specs.motorRating}</span>
                    </div>
                  )}
                  {product.specs.operatingTemp && (
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 uppercase block">Thermal Rating</span>
                      <span className="text-sm font-bold text-slate-900">{product.specs.operatingTemp}</span>
                    </div>
                  )}
                </div>

                {product.specs.standards && (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Certified Benchmarks:</span>
                    {product.specs.standards.map((std, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                        {std}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Design Features & Applications */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-red-600" /> Key Features & Construction
                  </h4>
                  <ul className="space-y-2">
                    {product.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-red-600" /> Recommended Applications
                  </h4>
                  <ul className="space-y-2">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-mono">
                Model: EUROCON-{product.slug.toUpperCase()}{" // Spec Rev 2026.1"}
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuoteModal(product.name);
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30"
                >
                  Request Technical Quotation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
