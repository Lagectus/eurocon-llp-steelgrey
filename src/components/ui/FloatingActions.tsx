"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowUp,
  X,
  Send,
  CheckCircle2,
  Building2,
  User,
  SlidersHorizontal,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PRODUCTS_DATA, COMPANY_INFO } from "@/data/euroconData";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeModal, setActiveModal] = useState<"whatsapp" | "email" | null>(null);

  // 5a. WhatsApp Form State
  const [waData, setWaData] = useState({
    name: "",
    mobile: "",
  });
  const [waErrors, setWaErrors] = useState<Record<string, string>>({});
  const [waSubmitting, setWaSubmitting] = useState(false);
  const [waSubmitted, setWaSubmitted] = useState(false);

  // 5b. Email Form State
  const [emailData, setEmailData] = useState({
    companyName: "",
    name: "",
    email: "",
    mobile: "",
    product: "Air Handling Unit (AHU)",
    message: "",
  });
  const [emailErrors, setEmailErrors] = useState<Record<string, string>>({});
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when a modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // 5a. WhatsApp Form Submit
  const handleWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!waData.name.trim()) errors.name = "Please enter your name";
    if (!waData.mobile.trim() || waData.mobile.trim().length < 8) {
      errors.mobile = "Please enter a valid mobile number";
    }

    if (Object.keys(errors).length > 0) {
      setWaErrors(errors);
      return;
    }

    setWaSubmitting(true);

    setTimeout(() => {
      setWaSubmitting(false);
      setWaSubmitted(true);

      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#25D366", "#010A6D", "#EB0311"],
      });

      const messageText = encodeURIComponent(
        `Hello Ashok ji / Eurocon Team,\n\nName: ${waData.name}\nMobile: ${waData.mobile}\n\nI want to inquire about Eurocon HVAC & ventilation systems.`
      );
      const waUrl = `https://wa.me/919891221991?text=${messageText}`;
      window.open(waUrl, "_blank");
    }, 500);
  };

  // 5b. Email Form Submit
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!emailData.companyName.trim()) errors.companyName = "Please enter your company name";
    if (!emailData.name.trim()) errors.name = "Please enter your name";
    if (!emailData.email.trim() || !/^\S+@\S+\.\S+$/.test(emailData.email)) {
      errors.email = "Please enter a valid work email";
    }
    if (!emailData.mobile.trim() || emailData.mobile.trim().length < 8) {
      errors.mobile = "Please enter a valid mobile number";
    }
    if (!emailData.message.trim()) {
      errors.message = "Please enter your message or specifications";
    }

    if (Object.keys(errors).length > 0) {
      setEmailErrors(errors);
      return;
    }

    setEmailSubmitting(true);

    setTimeout(() => {
      setEmailSubmitting(false);
      setEmailSubmitted(true);

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#EB0311", "#010A6D", "#0A1647"],
      });
    }, 600);
  };

  return (
    <>
      {/* ========================================================
          RIGHT-SIDE FIXED / STICKY CONTACT ICONS
          Matches media_1790681039184:
          - Scroll to top (Dark slate)
          - Mail (Eurocon Red)
          - Phone (Eurocon Navy)
          - WhatsApp (Vibrant green with halo glow)
          ======================================================== */}
      <div
        aria-label="Right-Side Contact Options"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3 pointer-events-auto select-none"
      >
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              title="Scroll to top"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mail / Email Icon -> Opens 5b Email Form UI Modal (Centered) */}
        <button
          onClick={() => {
            setEmailSubmitted(false);
            setActiveModal("email");
          }}
          aria-label="Send Email Inquiry"
          title="Email Form Inquiry"
          className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#EB0311] hover:bg-[#c9020e] text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Email Inquiry
          </span>
        </button>

        {/* Phone Call Icon -> Direct tel:+919891221991 */}
        <a
          href="tel:+919891221991"
          aria-label="Call Eurocon: +91 98912 21991"
          title="Call: +91 98912 21991"
          className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#010A6D] hover:bg-[#010645] text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Call: +91 98912 21991
          </span>
        </a>

        {/* WhatsApp Icon -> Opens 5a WhatsApp Form UI Modal (Centered) with halo glow */}
        <div className="relative flex items-center justify-center">
          {/* Soft circular aura/halo background as seen in user reference image */}
          <span className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-[#25D366]/25 animate-pulse pointer-events-none" />

          <button
            onClick={() => {
              setWaSubmitted(false);
              setActiveModal("whatsapp");
            }}
            aria-label="WhatsApp Inquiry Form"
            title="WhatsApp Inquiry Form"
            className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer z-10"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white shadow-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              WhatsApp Inquiry
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================
          5a. WHATSAPP FORM UI (APPEARS IN MIDDLE/CENTER OF PAGE)
          Fields: Name, Mobile Number, Submit Button
          Success Message:
          Thank You!
          Your form has been submitted successfully. We’ll get back to you shortly.
          ======================================================== */}
      <AnimatePresence>
        {activeModal === "whatsapp" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Centered Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 text-slate-800 my-auto"
            >
              {/* Header */}
              <div className="bg-[#25D366] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white leading-tight">
                      WhatsApp Quick Inquiry
                    </h3>
                    <p className="text-xs text-white/90">
                      Eurocon System LLP • Instant Response
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {waSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Thank You!
                    </h4>
                    <p className="text-base text-slate-700 max-w-sm mx-auto font-medium leading-relaxed">
                      Your form has been submitted successfully. We’ll get back to you shortly.
                    </p>
                    <div className="pt-4 flex flex-col gap-2.5">
                      <a
                        href={`https://wa.me/919891221991?text=${encodeURIComponent(
                          `Hello Ashok ji / Eurocon Team, Name: ${waData.name}, Mobile: ${waData.mobile}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                      >
                        <span>Open WhatsApp Chat Again</span>
                      </a>
                      <button
                        onClick={closeModal}
                        className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleWaSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#25D366]" /> Name *
                      </label>
                      <input
                        type="text"
                        value={waData.name}
                        onChange={(e) => {
                          setWaData({ ...waData, name: e.target.value });
                          if (waErrors.name) setWaErrors({ ...waErrors, name: "" });
                        }}
                        placeholder="Enter your name"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border ${
                          waErrors.name ? "border-red-500 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:border-[#25D366] text-slate-900 transition-colors`}
                      />
                      {waErrors.name && (
                        <p className="text-xs text-red-600 mt-1">{waErrors.name}</p>
                      )}
                    </div>

                    {/* Mobile Number Field */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#25D366]" /> Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={waData.mobile}
                        onChange={(e) => {
                          setWaData({ ...waData, mobile: e.target.value });
                          if (waErrors.mobile) setWaErrors({ ...waErrors, mobile: "" });
                        }}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border ${
                          waErrors.mobile ? "border-red-500 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:border-[#25D366] text-slate-900 transition-colors`}
                      />
                      {waErrors.mobile && (
                        <p className="text-xs text-red-600 mt-1">{waErrors.mobile}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={waSubmitting}
                      className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.99] cursor-pointer disabled:opacity-70 mt-2"
                    >
                      {waSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit & Connect on WhatsApp</span>
                        </>
                      )}
                    </button>

                    <div className="pt-2 text-center">
                      <a
                        href="https://wa.me/919891221991?text=Hello%20Ashok%20ji%2C%20Eurocon%20Inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-500 hover:text-[#25D366] font-medium underline underline-offset-2 transition-colors"
                      >
                        Or directly chat on WhatsApp without form
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          5b. EMAIL FORM UI (APPEARS IN MIDDLE/CENTER OF PAGE)
          Fields: Company Name, Name, Email, Mobile, Products/Services, Message, Send Message button
          Success Message:
          Thank You!
          Your form has been submitted successfully. We’ll get back to you shortly.
          ======================================================== */}
      <AnimatePresence>
        {activeModal === "email" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Centered Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 text-slate-800 my-auto max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#010A6D] via-[#010A6D] to-[#EB0311] text-white p-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white leading-tight">
                      Email Enquiry Form
                    </h3>
                    <p className="text-xs text-blue-100">
                      Eurocon Technical Sales & Engineering Team
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 overflow-y-auto">
                {emailSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Thank You!
                    </h4>
                    <p className="text-base text-slate-700 max-w-sm mx-auto font-medium leading-relaxed">
                      Your form has been submitted successfully. We’ll get back to you shortly.
                    </p>
                    <div className="pt-4 flex flex-col gap-2.5">
                      <button
                        onClick={() => {
                          setEmailSubmitted(false);
                          setEmailData({
                            companyName: "",
                            name: "",
                            email: "",
                            mobile: "",
                            product: "Air Handling Unit (AHU)",
                            message: "",
                          });
                        }}
                        className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                      <button
                        onClick={closeModal}
                        className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-3.5">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#010A6D]" /> Company Name *
                      </label>
                      <input
                        type="text"
                        value={emailData.companyName}
                        onChange={(e) => {
                          setEmailData({ ...emailData, companyName: e.target.value });
                          if (emailErrors.companyName) setEmailErrors({ ...emailErrors, companyName: "" });
                        }}
                        placeholder="e.g. Acme Infra Tech"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border ${
                          emailErrors.companyName ? "border-red-500 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                      />
                      {emailErrors.companyName && (
                        <p className="text-xs text-red-600 mt-0.5">{emailErrors.companyName}</p>
                      )}
                    </div>

                    {/* Name & Mobile Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#010A6D]" /> Name *
                        </label>
                        <input
                          type="text"
                          value={emailData.name}
                          onChange={(e) => {
                            setEmailData({ ...emailData, name: e.target.value });
                            if (emailErrors.name) setEmailErrors({ ...emailErrors, name: "" });
                          }}
                          placeholder="Your full name"
                          className={`w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border ${
                            emailErrors.name ? "border-red-500 bg-red-50" : "border-slate-200"
                          } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                        />
                        {emailErrors.name && (
                          <p className="text-xs text-red-600 mt-0.5">{emailErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#010A6D]" /> Mobile *
                        </label>
                        <input
                          type="tel"
                          value={emailData.mobile}
                          onChange={(e) => {
                            setEmailData({ ...emailData, mobile: e.target.value });
                            if (emailErrors.mobile) setEmailErrors({ ...emailErrors, mobile: "" });
                          }}
                          placeholder="+91 98765 43210"
                          className={`w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border ${
                            emailErrors.mobile ? "border-red-500 bg-red-50" : "border-slate-200"
                          } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                        />
                        {emailErrors.mobile && (
                          <p className="text-xs text-red-600 mt-0.5">{emailErrors.mobile}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#010A6D]" /> Email *
                      </label>
                      <input
                        type="email"
                        value={emailData.email}
                        onChange={(e) => {
                          setEmailData({ ...emailData, email: e.target.value });
                          if (emailErrors.email) setEmailErrors({ ...emailErrors, email: "" });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border ${
                          emailErrors.email ? "border-red-500 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors`}
                      />
                      {emailErrors.email && (
                        <p className="text-xs text-red-600 mt-0.5">{emailErrors.email}</p>
                      )}
                    </div>

                    {/* Products/Services Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-[#010A6D]" /> Products / Services *
                      </label>
                      <select
                        value={emailData.product}
                        onChange={(e) => setEmailData({ ...emailData, product: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors cursor-pointer"
                      >
                        {PRODUCTS_DATA.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Custom Ventilation Engineering">Custom Ventilation Engineering</option>
                        <option value="Industrial Turnkey Airflow Solution">Industrial Turnkey Airflow Solution</option>
                        <option value="General HVAC Project Consultation">General HVAC Project Consultation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#010A6D]" /> Message *
                      </label>
                      <textarea
                        rows={3}
                        value={emailData.message}
                        onChange={(e) => {
                          setEmailData({ ...emailData, message: e.target.value });
                          if (emailErrors.message) setEmailErrors({ ...emailErrors, message: "" });
                        }}
                        placeholder="CFM requirement, static pressure, application details or project location..."
                        className={`w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border ${
                          emailErrors.message ? "border-red-500 bg-red-50" : "border-slate-200"
                        } focus:outline-none focus:border-[#010A6D] text-slate-900 transition-colors resize-none`}
                      />
                      {emailErrors.message && (
                        <p className="text-xs text-red-600 mt-0.5">{emailErrors.message}</p>
                      )}
                    </div>

                    {/* Send Message Button */}
                    <button
                      type="submit"
                      disabled={emailSubmitting}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#010A6D] to-[#0A1647] hover:from-[#010645] hover:to-[#010A6D] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/25 active:scale-[0.99] cursor-pointer disabled:opacity-70 mt-1"
                    >
                      {emailSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Direct Contact Links */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Direct:</span>
                      <a href="tel:+919891221991" className="hover:text-[#010A6D] font-semibold flex items-center gap-1">
                        <Phone className="w-3 h-3 text-[#010A6D]" /> +91 98912 21991
                      </a>
                      <span>•</span>
                      <a href="mailto:sales@eurocon.in" className="hover:text-[#EB0311] font-semibold flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#EB0311]" /> sales@eurocon.in
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
