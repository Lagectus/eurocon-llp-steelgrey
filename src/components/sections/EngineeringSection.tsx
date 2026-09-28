"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import {
  Cpu,
  Gauge,
  Volume2,
  Zap,
  Activity,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Sliders,
  Wind,
} from "lucide-react";

export default function EngineeringSection() {
  const [selectedConcept, setSelectedConcept] = useState<number>(0);

  // Interactive Airflow Simulator State
  const [inputCfm, setInputCfm] = useState<number>(25000);
  const [inputPressure, setInputPressure] = useState<number>(750); // in Pa

  // Dynamic Calculated Metrics
  const estimatedPowerKw = ((inputCfm * 0.000471947 * inputPressure) / (0.82 * 1000)).toFixed(2);
  const estimatedEfficiency = "86.4%";
  const acousticLevel = (52 + Math.log10(inputCfm) * 3 + (inputPressure / 1000) * 2).toFixed(1);

  const engineeringConcepts = [
    {
      title: "Computational Fluid Dynamics (CFD)",
      icon: Cpu,
      summary: "3D Navier-Stokes numerical airflow simulations eliminate recirculation vortices and boundary layer detachment before physical prototyping.",
      details: "Using ANSYS Fluent solver rigs, our aerodynamics team optimizes blade entry angles, trailing edge curvature, and scroll expansion ratios for peak mechanical efficiency.",
      metric: "Up to 88% Mechanical Efficiency",
    },
    {
      title: "Acoustic Attenuation & Sound Engineering",
      icon: Volume2,
      summary: "Low-frequency sound suppression through aerofoil blade profiles and double-wall acoustic dampening insulation.",
      details: "Acoustically engineered and laboratory tested to ensure compliance with strict hospital, commercial tower, and auditorium NC-35 acoustic noise criteria.",
      metric: "< 62 dBA Noise Envelope",
    },
    {
      title: "Dual-Plane Digital Dynamic Balancing",
      icon: Activity,
      summary: "Impellers undergo computer-guided balancing on dual-plane dynamic balancing rigs for ultra-low vibration.",
      details: "Eliminates parasitic shaft vibration, protects motor bearings from radial stress, and extends operational lifecycle to over 100,000 continuous runtime hours.",
      metric: "Computer Dynamic Balanced",
    },
    {
      title: "High-Efficiency IE3 / IE4 & EC Drives",
      icon: Zap,
      summary: "Direct-drive permanent magnet synchronous motors (PMSM) and electronically commutated (EC) fans deliver steep energy savings.",
      details: "Integrated 0-10V / Modbus BMS control algorithms enable variable speed modulation, lowering kilowatt consumption during non-peak operating hours.",
      metric: "Up to 32% Electrical Power Savings",
    },
  ];

  return (
    <section id="engineering" className="relative py-24 sm:py-32 bg-white border-b border-slate-200 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PRECISION ENGINEERING. MEASURABLE PERFORMANCE."
          title="AERODYNAMIC SCIENCE & NUMERICAL MODELING"
          subtitle="We combine computational fluid dynamics, dynamic vibration analysis, and certified laboratory testing to produce the industry's most efficient air management systems."
        />

        {/* 4 Core Engineering Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringConcepts.map((concept, index) => {
            const Icon = concept.icon;
            const isSelected = selectedConcept === index;
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedConcept(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-500 shadow-xl -translate-y-1"
                    : "bg-white text-[#334155] border-slate-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-blue-50 text-blue-600 border border-blue-200 shadow-xs"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className={`font-bold text-base sm:text-lg mb-2 ${isSelected ? "text-white" : "text-[#334155]"}`}>
                    {concept.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? "text-blue-100" : "text-[#64748B]"
                    }`}
                  >
                    {concept.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <span
                    className={`text-xs font-mono font-bold block ${
                      isSelected ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {concept.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Aerodynamic Engineering Calculator & CFD Simulator */}
        <div className="mt-12 bg-white text-[#334155] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Sliders Control (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>INTERACTIVE PERFORMANCE ESTIMATOR</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#334155]">
                  Estimate Fan Power & Aerodynamic Efficiency
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Adjust airflow (CFM) and system static pressure (Pa) to calculate estimated operating shaft power and sound envelope.
                </p>
              </div>

              {/* Slider 1: CFM */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#334155]">Required Airflow (CFM):</span>
                  <span className="text-blue-600 font-bold text-sm">
                    {inputCfm.toLocaleString()} CFM ({(inputCfm * 1.699).toFixed(0)} m³/h)
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="120000"
                  step="1000"
                  value={inputCfm}
                  onChange={(e) => setInputCfm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 border border-slate-300"
                />
              </div>

              {/* Slider 2: Static Pressure */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#334155]">System Static Resistance (Pa):</span>
                  <span className="text-blue-600 font-bold text-sm">
                    {inputPressure} Pa ({(inputPressure / 249.08).toFixed(2)} in. wg)
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3500"
                  step="50"
                  value={inputPressure}
                  onChange={(e) => setInputPressure(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 border border-slate-300"
                />
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Calculations derived using standard aerodynamic air density equations.</span>
              </div>
            </div>

            {/* Right Telemetry Readout (6 Cols) */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-3 flex justify-between">
                <span>SIMULATED FAN METRICS</span>
                <span className="text-blue-600 font-bold">EUROCON CFD MATRIX</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="block text-[11px] font-mono text-slate-500">ESTIMATED MOTOR POWER</span>
                  <span className="text-xl sm:text-2xl font-black text-blue-600">{estimatedPowerKw} kW</span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">IE4 Super-Premium Efficiency</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="block text-[11px] font-mono text-slate-500">TOTAL MECHANICAL EFF</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-600">{estimatedEfficiency}</span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">Aerodynamic Peak Zone</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="block text-[11px] font-mono text-slate-500">ACOUSTIC RATING @ 3M</span>
                  <span className="text-xl sm:text-2xl font-black text-[#334155]">{acousticLevel} dBA</span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">With standard acoustic casing</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="block text-[11px] font-mono text-slate-500">DYNAMIC BALANCE GRADE</span>
                  <span className="text-xl sm:text-2xl font-black text-[#334155]">G 2.5</span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">Computer Balanced & Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
