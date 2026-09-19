"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  User,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO, INDUSTRIES_DATA, PRODUCTS_DATA } from "@/data/euroconData";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "Commercial & Corporate Towers",
    productInterest: "Air Handling Unit (AHU)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name";
    if (!formData.companyName.trim()) errs.companyName = "Please enter your company";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please include a short message or CFM specification";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#010A6D", "#010A6D", "#010645", "#64748B"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white text-[#334155] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH WITH APPLICATION ENGINEERS"
          title="HAVE A PROJECT IN MIND?"
          subtitle="Whether you require custom fan curve selections, high-temperature smoke exhaust compliance, or on-site duct air balancing, our engineering team is ready to assist."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Plant & Office Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-[#334155]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#334155]">
                    Eurocon Engineering & Manufacturing Hub
                  </h4>
                  <span className="text-xs font-mono text-slate-500">
                    {COMPANY_INFO.cin}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#64748B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#334155]">{COMPANY_INFO.headquarters.address}</p>
                    <p>{COMPANY_INFO.headquarters.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <a
                      href={`tel:${COMPANY_INFO.headquarters.phone.split("/")[0].trim()}`}
                      className="font-semibold text-[#334155] hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_INFO.headquarters.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <a
                      href={`mailto:${COMPANY_INFO.headquarters.email}`}
                      className="font-semibold text-[#334155] hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_INFO.headquarters.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{COMPANY_INFO.headquarters.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Regional Network Note */}
            <div className="p-6 rounded-2xl bg-white text-[#334155] border border-slate-200 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600">
                <ShieldCheck className="w-4 h-4" />
                <span>PAN-INDIA DISTRIBUTION & SERVICE</span>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#334155]">
                {COMPANY_INFO.panIndiaPresence}
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed font-light">
                Dedicated application engineers stationed across Delhi NCR, Mumbai, Pune, Chennai, Bengaluru, Hyderabad, and Kolkata for rapid technical commissioning and site inspections.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 text-[#334155]">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#334155]">
                  Thank You For Reaching Out!
                </h3>
                <p className="text-sm text-[#64748B] max-w-md mx-auto">
                  Your project enquiry has been assigned to our Technical Support Team. An HVAC engineer will contact you shortly at <span className="font-semibold text-[#334155]">{formData.email}</span>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-800 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-2">
                  <span className="text-xs font-bold font-mono uppercase text-slate-500 tracking-wider">
                    DIRECT PROJECT ENQUIRY FORM
                  </span>
                  <span className="text-[11px] font-mono text-blue-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> FAST RESPONSE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 ${
                        errors.fullName ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Infra Projects"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 ${
                        errors.companyName ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {errors.companyName && <p className="text-red-500 text-[11px] mt-1">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="r.chandra@acmeinfra.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 ${
                        errors.email ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98111 22334"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#334155] placeholder:text-slate-400 ${
                        errors.phone ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                      Project Industry
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    >
                      {INDUSTRIES_DATA.map((ind) => (
                        <option key={ind.id} value={ind.name} className="bg-white text-[#334155]">
                          {ind.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                      Product of Interest
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-[#334155] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    >
                      {PRODUCTS_DATA.map((prod) => (
                        <option key={prod.id} value={prod.name} className="bg-white text-[#334155]">
                          {prod.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase font-mono text-[#334155] mb-1">
                    Project Message / Specifications *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about airflow requirements, static pressure targets, fire safety ratings, or delivery schedule..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-[#334155] placeholder:text-slate-400 ${
                      errors.message ? "border-red-500 bg-red-50" : "border-slate-200 bg-slate-50 focus:bg-white"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-mono">
                    Protected by enterprise NDA standards.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND ENQUIRY
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
