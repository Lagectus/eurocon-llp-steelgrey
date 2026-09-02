"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_CASE_STUDIES } from "@/data/euroconData";
import { ProjectCaseStudy } from "@/types";
import SectionHeading from "../ui/SectionHeading";
import {
  MapPin,
  Wind,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ProjectsSectionProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

export default function ProjectsSection({ onOpenQuoteModal }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    "All",
    "Metro & Rail",
    "Automotive & Heavy Mfg",
    "Commercial & IT Parks",
    "Data Centers",
    "Pharma & Cleanroom",
  ];

  const filteredProjects = PROJECT_CASE_STUDIES.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SELECTED PROJECT CASE STUDIES"
            title="ENGINEERED INSTALLATIONS & PROVEN PERFORMANCE"
            subtitle="Representative case studies highlighting large-scale ventilation, smoke extraction, and industrial cleanroom HVAC execution."
          />

          <button
            onClick={() => onOpenQuoteModal("Custom Project Requirement")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs transition-colors self-start md:self-end hover:bg-slate-800"
          >
            <span>Consult On Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-red-400 border border-slate-700">
                    {project.category}
                  </div>

                  {/* Airflow capacity badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 font-mono text-[11px] text-red-300">
                      <Wind className="w-3.5 h-3.5" />
                      {project.airflowCapacity.split("Combined")[0]}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.scope}
                  </p>

                  {/* Results Highlights */}
                  <div className="pt-2 space-y-1.5">
                    {project.resultsAchieved.slice(0, 1).map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-red-50/80 p-2.5 rounded-lg border border-red-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(`Similar project to: ${project.title}`)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-red-50 text-slate-800 hover:text-red-700 text-xs font-bold font-mono border border-slate-200 hover:border-red-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Similar Spec Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
