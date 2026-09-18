"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/euroconData";
import SectionHeading from "../ui/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-white text-[#334155] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          alignment="center"
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="TECHNICAL & COMMERCIAL CLARIFICATIONS"
          subtitle="Answers to common questions regarding AMCA compliance, custom materials, lead times, and life-safety certifications."
        />

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20" : "bg-white border-slate-200 hover:border-blue-400 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#334155] text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-blue-600">
                      0{idx + 1}
                    </span>
                    <span className="text-[#334155]">{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-slate-100 pt-3 font-light"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
