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
    product: initialProduct || "Air Handling Unit (AHU)",
    estimatedAirflow: "15,000 CFM",
    operatingEnvironment: "Standard HVAC",
    projectTimeline: "Immediate (1 - 3 Months)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [prevInitialProduct, setPrevInitialProduct] = useState(initialProduct);
  const [ticketId, setTicketId] = useState(849201);

  if (initialProduct && initialProduct !== prevInitialProduct) {
    setPrevInitialProduct(initialProduct);
    setFormData((prev) => ({ ...prev, product: initialProduct }));
  }

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
    setTicketId(Math.floor(100000 + Math.random() * 900000));

    // Simulate enterprise RFQ routing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#50A2FF", "#50A2FF", "#7BBFFF", "#64748B"],
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
            className="relative w-full max-w-2xl bg-white text-[#334155] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200 my-8"
          >
            {/* Header */}
            <div className="relative bg-slate-50 text-[#334155] p-6 sm:p-8 flex items-start justify-between border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono border border-blue-200">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    ENGINEERING ESTIMATION & RFQ
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#334155]">
                  Request Technical Quotation
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-lg font-normal">
                  Submit your engineering parameters. Our HVAC application engineers will review your aerodynamic specifications and respond within 24 hours.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#334155] transition-colors"
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
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#334155]">
                    RFQ Specification Submitted Successfully!
                  </h4>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto font-normal">
                    Thank you, <span className="font-semibold text-[#334155]">{formData.fullName}</span>. Your RFQ inquiry for <span className="font-semibold text-blue-600">{formData.product}</span> has been logged under reference ticket <span className="font-mono font-bold text-[#334155]">#EUR-{ticketId}</span>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#64748B] max-w-md mx-auto text-left space-y-1">
                    <p className="font-semibold text-[#334155]">What happens next?</p>
                    <p>• Senior application engineer assigned to verify CFM & static pressure.</p>
                    <p>• Comprehensive technical proposal & fan curve dispatched to {formData.email}.</p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-medium text-sm transition-colors"
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
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-600" /> Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikram Malhotra"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.fullName ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" /> Company / Organization *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Sterling Engineering Infra"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.companyName ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.companyName && <p className="text-red-500 text-[11px] mt-1">{errors.companyName}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-600" /> Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="v.malhotra@sterlinginfra.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.email ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-600" /> Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.phone ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Technical Spec Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5 flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" /> Product Solution Line
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      >
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name} className="bg-white text-[#334155]">
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5">
                        Target Industry / Application
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      >
                        {INDUSTRIES_DATA.map((ind) => (
                          <option key={ind.id} value={ind.name} className="bg-white text-[#334155]">
                            {ind.name}
                          </option>
                        ))}
                        <option value="Other Industrial" className="bg-white text-[#334155]">Other Specialized Facility</option>
                      </select>
                    </div>
                  </div>

                  {/* Airflow & Environment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5">
                        Estimated Airflow (CFM / CMH)
                      </label>
                      <select
                        value={formData.estimatedAirflow}
                        onChange={(e) => setFormData({ ...formData, estimatedAirflow: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      >
                        <option value="Under 5,000 CFM" className="bg-white text-[#334155]">Under 5,000 CFM (Small Ducted / Inline)</option>
                        <option value="5,000 - 20,000 CFM" className="bg-white text-[#334155]">5,000 - 20,000 CFM (Medium Plant)</option>
                        <option value="20,000 - 75,000 CFM" className="bg-white text-[#334155]">20,000 - 75,000 CFM (Large Industrial)</option>
                        <option value="75,000+ CFM" className="bg-white text-[#334155]">75,000+ CFM (Heavy Duty / Metro Tunnel)</option>
                        <option value="Custom Engineering" className="bg-white text-[#334155]">Need Engineering Calculation Assistance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5">
                        Operating Environment Rating
                      </label>
                      <select
                        value={formData.operatingEnvironment}
                        onChange={(e) => setFormData({ ...formData, operatingEnvironment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      >
                        <option value="Standard HVAC" className="bg-white text-[#334155]">Standard HVAC / Ambient Air</option>
                        <option value="300C / 400C Fire Smoke Rated" className="bg-white text-[#334155]">300°C / 400°C Emergency Fire Rated</option>
                        <option value="Corrosive Chemical / Acid Fumes" className="bg-white text-[#334155]">Corrosive Chemical / Acid Fumes (PP/SS)</option>
                        <option value="Spark-Proof ATEX" className="bg-white text-[#334155]">Spark-Proof / Hazardous Zone (AMCA Type A/B)</option>
                        <option value="High Humidity / Saturated" className="bg-white text-[#334155]">High Humidity / Wet Scrubber</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-slate-600 mb-1.5">
                      Project Notes / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify static pressure (Pa / in. wg), motor efficiency class (IE3/IE4), duct dimensions or project timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Confidential RFQ Evaluation</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-lg disabled:opacity-50"
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
