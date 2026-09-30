"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Building2, Phone, Mail, User, Package } from "lucide-react";
import confetti from "canvas-confetti";
import { PRODUCTS_DATA } from "@/data/euroconData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProduct = "" }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    product: initialProduct || "Air Handling Unit (AHU)",
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
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.fullName.trim()) errs.fullName = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid email required";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid mobile number required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTicketId(Math.floor(100000 + Math.random() * 900000));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#010A6D", "#010A6D", "#010645", "#64748B"],
      });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-lg bg-white text-[#334155] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200"
          >
            {/* Header */}
            <div className="relative bg-slate-50 text-[#334155] px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-slate-200">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#334155]">
                  Get a Quote
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in your details and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4 sm:px-6 sm:py-5 overflow-y-auto max-h-[75vh]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-3"
                >
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-[#334155]">
                    Thank You!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Your inquiry has been submitted successfully. We&apos;ll get back to you shortly.
                  </p>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto text-left space-y-1">
                    <p className="font-semibold text-black">Reference Details:</p>
                    <p>• Ticket: <span className="font-mono font-bold text-black">#{ticketId}</span></p>
                    <p>• Product: <span className="font-semibold text-blue-700">{formData.product}</span></p>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={onClose}
                      className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" /> Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your company name"
                      className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                        errors.companyName ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {errors.companyName && <p className="text-red-500 text-[11px] mt-0.5">{errors.companyName}</p>}
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-blue-600" /> Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your name"
                        className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.fullName ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-600" /> Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.email ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Mobile & Products/Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-blue-600" /> Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 transition-all ${
                          errors.phone ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-blue-600" /> Products / Services
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                      >
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name} className="bg-white text-[#334155]">
                            {p.name}
                          </option>
                        ))}
                        <option value="General Inquiry" className="bg-white text-[#334155]">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
