"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Building2, Phone, Mail, User, SlidersHorizontal } from "lucide-react";
import confetti from "canvas-confetti";
import { PRODUCTS_DATA, INDUSTRIES_DATA } from "@/data/euroconData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProduct = "" }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "Commercial & Corporate Towers",
    product: initialProduct || "Industrial Centrifugal Fans",
    estimatedAirflow: "15,000 CFM",
    operatingEnvironment: "Standard HVAC",
    projectTimeline: "Immediate (1 - 3 Months)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset state on close
      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid corporate email required";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid contact number required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate enterprise RFQ routing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#DC2626", "#EF4444", "#DC2626", "#10B981"],
      });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200 my-8"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-[#0F1932] text-white p-6 sm:p-8 flex items-start justify-between border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-mono border border-red-500/30">
                    <Sparkles className="w-3 h-3 text-red-400" />
                    ENGINEERING ESTIMATION & RFQ
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Request Technical Quotation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                  Submit your engineering parameters. Our HVAC application engineers will review your aerodynamic specifications and respond within 24 hours.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    RFQ Specification Submitted Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your RFQ inquiry for <span className="font-semibold text-red-600">{formData.product}</span> has been logged under reference ticket <span className="font-mono font-bold">#EUR-{Math.floor(100000 + Math.random() * 900000)}</span>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                    <p className="font-semibold text-slate-800">What happens next?</p>
                    <p>• Senior application engineer assigned to verify CFM & static pressure.</p>
                    <p>• Comprehensive technical proposal & fan curve dispatched to {formData.email}.</p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-red-600" /> Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikram Malhotra"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          errors.fullName ? "border-red-500 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-red-600" /> Company / Organization *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sterling Engineering Infra"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          errors.companyName ? "border-red-500 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
                        }`}
                      />
                      {errors.companyName && <p className="text-red-500 text-[11px] mt-1">{errors.companyName}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-red-600" /> Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="v.malhotra@sterlinginfra.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          errors.email ? "border-red-500 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-red-600" /> Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                          errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-300 bg-slate-50/50"
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Technical Spec Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-red-600" /> Product Solution Line
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5">
                        Target Industry / Application
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        {INDUSTRIES_DATA.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Other Industrial">Other Specialized Facility</option>
                      </select>
                    </div>
                  </div>

                  {/* Airflow & Environment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5">
                        Estimated Airflow (CFM / CMH)
                      </label>
                      <select
                        value={formData.estimatedAirflow}
                        onChange={(e) => setFormData({ ...formData, estimatedAirflow: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Under 5,000 CFM">Under 5,000 CFM (Small Ducted / Inline)</option>
                        <option value="5,000 - 20,000 CFM">5,000 - 20,000 CFM (Medium Plant)</option>
                        <option value="20,000 - 75,000 CFM">20,000 - 75,000 CFM (Large Industrial)</option>
                        <option value="75,000+ CFM">75,000+ CFM (Heavy Duty / Metro Tunnel)</option>
                        <option value="Custom Engineering">Need Engineering Calculation Assistance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5">
                        Operating Environment Rating
                      </label>
                      <select
                        value={formData.operatingEnvironment}
                        onChange={(e) => setFormData({ ...formData, operatingEnvironment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Standard HVAC">Standard HVAC / Ambient Air</option>
                        <option value="300C / 400C Fire Smoke Rated">300°C / 400°C Emergency Fire Rated</option>
                        <option value="Corrosive Chemical / Acid Fumes">Corrosive Chemical / Acid Fumes (PP/SS)</option>
                        <option value="Spark-Proof ATEX">Spark-Proof / Hazardous Zone (AMCA Type A/B)</option>
                        <option value="High Humidity / Saturated">High Humidity / Wet Scrubber</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-slate-700 mb-1.5">
                      Project Notes / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify static pressure (Pa / in. wg), motor efficiency class (IE3/IE4), duct dimensions or project timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Confidential RFQ Evaluation</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing RFQ...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Quotation Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
