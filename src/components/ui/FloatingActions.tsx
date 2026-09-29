"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowUp,
  MessageSquare,
  X,
  Send,
  CheckCircle2,
  Building2,
  User,
  SlidersHorizontal,
} from "lucide-react";
import { PRODUCTS_DATA, COMPANY_INFO } from "@/data/euroconData";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "Air Handling Unit (AHU)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone / WhatsApp number is required";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate instant lead dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Auto-open WhatsApp with prefilled message in a new tab if user chooses
      const waText = encodeURIComponent(
        `Hello Ashok ji / Eurocon Team,\n\nI have submitted an inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct Requirement: ${formData.product}\nMessage: ${formData.message || "Looking for quotation & technical specs."}`
      );
      const waUrl = `https://wa.me/919891221991?text=${waText}`;

      // Open WhatsApp inquiry
      window.open(waUrl, "_blank");
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "Air Handling Unit (AHU)",
      message: "",
    });
    setIsSubmitted(false);
    setIsFormOpen(false);
    setErrors({});
  };

  return (
    <div
      aria-label="Floating Contact & Inquiry Widget"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Floating Quick Contact Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[calc(100vw-32px)] max-w-[360px] sm:max-w-[390px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden mb-3 text-slate-800"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#010A6D] to-[#0A1647] p-4 text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EB0311] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-blue-200">
                    EUROCON SYSTEM LLP
                  </span>
                </div>
                <h3 className="font-bold text-base tracking-tight leading-tight mt-0.5">
                  Quick Inquiry & Quotation
                </h3>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                aria-label="Close form"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-5">
              {isSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our engineering team will review your specifications and contact you shortly.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href="https://wa.me/919891221991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline underline-offset-2 py-1 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border ${
                          errors.name ? "border-red-500 bg-red-50/30" : "border-slate-200"
                        } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[10px] text-red-600 mt-0.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone / WhatsApp Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border ${
                          errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-200"
                        } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[10px] text-red-600 mt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="rajesh@company.com"
                        className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border ${
                          errors.email ? "border-red-500 bg-red-50/30" : "border-slate-200"
                        } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] text-red-600 mt-0.5">{errors.email}</p>
                    )}
                  </div>

                  {/* Product Requirement */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Required System / Equipment
                    </label>
                    <div className="relative">
                      <SlidersHorizontal className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors appearance-none cursor-pointer"
                      >
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Custom Ventilation Requirement">Custom Ventilation Requirement</option>
                        <option value="General Technical Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Requirement / Specs (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="CFM requirement, static pressure, or project location..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-1 py-2.5 rounded-xl bg-[#010A6D] hover:bg-[#010645] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-900/20 hover:shadow-blue-900/35 active:scale-[0.99] cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Quick Inquiry</span>
                      </>
                    )}
                  </button>

                  {/* Quick Direct Links Inside Form */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span>Direct:</span>
                    <a
                      href="tel:+919891221991"
                      className="hover:text-[#010A6D] font-semibold flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#010A6D]" /> Call
                    </a>
                    <span>•</span>
                    <a
                      href="https://wa.me/919891221991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 font-semibold flex items-center gap-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" /> WhatsApp
                    </a>
                    <span>•</span>
                    <a
                      href="mailto:sales@eurocon.in"
                      className="hover:text-[#EB0311] font-semibold flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3 text-[#EB0311]" /> Email
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons Column */}
      <div className="flex flex-col items-end gap-2.5 sm:gap-3">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1e293b]/90 hover:bg-[#334155] text-white flex items-center justify-center shadow-lg border border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Quick Inquiry Form Trigger Button */}
        <button
          onClick={() => setIsFormOpen((prev) => !prev)}
          aria-label={isFormOpen ? "Close Inquiry Form" : "Open Quick Inquiry Form"}
          title={isFormOpen ? "Close Form" : "Quick Inquiry / Quote"}
          className={`group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${
            isFormOpen
              ? "bg-slate-900 text-white border border-white/20"
              : "bg-gradient-to-tr from-[#010A6D] to-[#0A1647] text-white border border-blue-400/50 shadow-blue-900/30"
          }`}
        >
          {isFormOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <>
              {/* Soft pulse notification ring */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#EB0311] border-2 border-white animate-pulse" />
              <MessageSquare className="w-5 h-5 text-white" />
            </>
          )}

          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {isFormOpen ? "Close Inquiry Form" : "Quick Inquiry Form"}
          </span>
        </button>

        {/* Direct Email Button */}
        <a
          href="mailto:sales@eurocon.in?subject=Eurocon%20Inquiry%20from%20Website&body=Hello%20Eurocon%20Team%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20HVAC%20and%20Airflow%20Solutions.%0A%0APlease%20get%20in%20touch%20with%20me.%0A%0AThank%20you."
          aria-label="Email Eurocon Sales"
          title="Email: sales@eurocon.in"
          className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#EB0311] hover:bg-[#c9020e] text-white flex items-center justify-center shadow-xl border border-red-300/40 transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Mail className="w-5 h-5 text-white" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Email: sales@eurocon.in
          </span>
        </a>

        {/* Direct Phone Call Button */}
        <a
          href="tel:+919891221991"
          aria-label="Call Ashok Dhull"
          title="Call Ashok Dhull: +91 98912 21991"
          className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#010A6D] hover:bg-blue-950 text-white flex items-center justify-center shadow-xl border border-blue-400/40 transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Call: +91 98912 21991
          </span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919891221991?text=Hello%20Ashok%20ji%20%2F%20Eurocon%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20HVAC%20and%20Airflow%20Solutions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Ashok Dhull on WhatsApp"
          title="Chat with Ashok Dhull on WhatsApp"
          className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none" />
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            WhatsApp: Ashok Dhull
          </span>
        </a>
      </div>
    </div>
  );
}

