"use client";

import React, { useState, use, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent, Variants } from "framer-motion";
import {
  Wind,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sliders,
  ChevronRight,
  Layers,
  Fan,
  Cpu,
  Phone,
  Zap,
  Gauge,
  Thermometer,
  Filter,
  Check,
  Building2,
  Eye
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import ProductSchematic from "@/components/ui/ProductSchematic";
import QuoteModal from "@/components/ui/QuoteModal";
import { getProductBySlug, PRODUCTS_DATA, COMPANY_INFO } from "@/data/euroconData";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Framer Motion Animation Variants for Scroll Reveals
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const AHU_ANGLE_METADATA = [
  {
    title: "AHU (DX Type System) — Modular Double-Skin Construction",
    shortTitle: "DX System Isometric View",
    tag: "DX Type System",
    badge: "DX Coil & TB2",
    highlight: "Double-Skin PUF & DX Coil Stubs",
    description: "Modular thermal-break extruded aluminum profiles with 25mm / 50mm high-density injected PUF (40 kg/m³) panels, factory-fitted Direct Expansion (DX) cooling coil connections, multi-stage EU4 to HEPA filtration tracks, and high-efficiency fan section."
  }
];

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product = getProductBySlug(slug);

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"schematic" | "photo">("photo");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showcasePhotoIndex, setShowcasePhotoIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [showStickyNav, setShowStickyNav] = useState(false);

  const galleryImages = product?.gallery && product.gallery.length > 0 ? product.gallery : [product?.image || ""];

  // Scroll Progress Tracker
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowStickyNav(latest > 450);
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["overview", "showcase", "matrix", "features", "options", "applications", "rfq"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between">
        <Navbar
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
          onOpenMobileMenu={() => setIsMobileOpen(true)}
        />
        <div className="max-w-3xl mx-auto px-4 py-32 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
            <Wind className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black">Product Specification Not Found</h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            The requested product model &quot;{slug}&quot; is not in our primary index. Please explore our complete engineering catalog.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
            >
              Browse Full Catalog
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm transition-all"
            >
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Related products excluding current
  const relatedProducts = PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(0, 3);

  const specRows = [
    { label: "Airflow Capacity", value: product.specs.airflowRange, icon: <Wind className="w-4 h-4 text-blue-600" /> },
    { label: "Static Pressure Rating", value: product.specs.staticPressure, icon: <Gauge className="w-4 h-4 text-blue-600" /> },
    { label: "Cooling / Thermal Duty", value: product.specs.coolingCapacity, icon: <Thermometer className="w-4 h-4 text-slate-700" /> },
    { label: "Casing & Insulation", value: product.specs.casingConstruction, icon: <Layers className="w-4 h-4 text-slate-700" /> },
    { label: "Filtration Matrix", value: product.specs.filtration, icon: <Filter className="w-4 h-4 text-emerald-600" /> },
    { label: "Coil Construction", value: product.specs.coilSpecs, icon: <Zap className="w-4 h-4 text-amber-600" /> },
    { label: "Drive & Motor System", value: product.specs.driveType, sub: product.specs.motorRating, icon: <Cpu className="w-4 h-4 text-indigo-600" /> },
    { label: "Impeller / Wheel Diameter", value: product.specs.impellerDiameter, icon: <Fan className="w-4 h-4 text-blue-600" /> },
    { label: "Acoustic / Noise Envelope", value: product.specs.noiseLevel, icon: <Sliders className="w-4 h-4 text-purple-600" /> },
    { label: "Operating Temperature", value: product.specs.operatingTemp, icon: <Thermometer className="w-4 h-4 text-slate-600" /> },
  ].filter((item) => item.value !== undefined);

  return (
    <div className="min-h-screen bg-white text-[#334155] flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-blue-500 to-slate-800 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      {/* Global Navbar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
        onOpenMobileMenu={() => setIsMobileOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
      />

      {/* Floating Quick Navigation Anchor Bar */}
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md border border-slate-200 rounded-full px-3 py-1.5 shadow-xl hidden md:flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono font-bold text-[#64748B] px-2 uppercase border-r border-slate-200">
              {product.name.split("(")[0].trim()}
            </span>
            {[
              { id: "overview", label: "Overview" },
              { id: "showcase", label: "Plant Cutaway" },
              { id: "matrix", label: "Spec Matrix" },
              { id: "features", label: "CFD & Features" },
              { id: "options", label: "Modular Options" },
              { id: "applications", label: "Applications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  activeSection === tab.id
                    ? "bg-blue-600 text-white font-bold shadow-xs"
                    : "text-[#64748B] hover:text-[#334155] hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="ml-1 px-3.5 py-1 rounded-full bg-blue-600 hover:bg-blue-800 text-white font-mono font-bold text-xs shadow-xs"
            >
              RFQ Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs font-mono text-[#64748B] overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/products" className="hover:text-blue-600 transition-colors">
              PRODUCTS
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#64748B] font-semibold">{product.category.toUpperCase()}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-blue-600 font-bold truncate">{product.name.toUpperCase()}</span>
          </div>
        </div>

        {/* Section 1: Product Hero Section */}
        <section id="overview" className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Product Info & CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  {product.heroBadge && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      <span>{product.heroBadge}</span>
                    </span>
                  )}

                  <span className="text-xs font-mono text-[#64748B] px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200">
                    {product.subCategory || product.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#334155] tracking-tight leading-[1.1]">
                    {product.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-600 font-medium leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
                  {product.fullDescription}
                </p>

                {/* Quick Spec Highlights Strip */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
                >
                  {product.specs.airflowRange && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">Airflow Range</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#334155] mt-0.5 block truncate">
                        {product.specs.airflowRange.split("(")[0]}
                      </span>
                    </motion.div>
                  )}
                  {product.specs.staticPressure && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">Max Pressure</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#334155] mt-0.5 block truncate">
                        {product.specs.staticPressure}
                      </span>
                    </motion.div>
                  )}
                  {product.specs.coolingCapacity && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">Capacity Range</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#334155] mt-0.5 block truncate">
                        {product.specs.coolingCapacity.split("(")[0]}
                      </span>
                    </motion.div>
                  )}
                  {!product.specs.coolingCapacity && product.specs.motorRating && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-500 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">Motor Efficiency</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#334155] mt-0.5 block truncate" title={product.specs.motorRating}>
                        {product.specs.motorRating}
                      </span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Available In Configurations (AHU: DX AHU & Chilled Water AHU) */}
                {product.slug === "ahu" && (
                  <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="pt-2 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-blue-700 uppercase">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      <span>AVAILABLE IN:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Box 1: DX AHU */}
                      <div className="p-3.5 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/20 border border-blue-500 flex items-center justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-white/20 text-white font-mono text-xs font-black flex items-center justify-center shrink-0">
                            1
                          </span>
                          <div>
                            <span className="text-sm font-black tracking-wide block">DX AHU</span>
                            <span className="text-[11px] text-blue-100 font-medium block">Direct Expansion System</span>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0" />
                      </div>

                      {/* Box 2: CHILLED WATER AHU */}
                      <div className="p-3.5 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/20 border border-blue-500 flex items-center justify-between group hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-white/20 text-white font-mono text-xs font-black flex items-center justify-center shrink-0">
                            2
                          </span>
                          <div>
                            <span className="text-sm font-black tracking-wide block">CHILLED WATER AHU</span>
                            <span className="text-[11px] text-blue-100 font-medium block">Chilled Water System</span>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Actions: Request Quote & Spec Sheet */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Request Engineering RFQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.headquarters.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#334155] font-bold text-sm border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Talk to HVAC Engineer</span>
                  </a>
                </div>

                {/* Compliance Standards Badges */}
                {product.specs.standards && (
                  <div className="pt-2 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-[#64748B] mr-1">STANDARDS:</span>
                    {product.specs.standards.map((std, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[#64748B] shadow-xs font-semibold"
                      >
                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                        {std}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Right Column: Interactive Blueprint Schematic / Photo Visualizer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                  {/* Visualizer Header Tabs */}
                  <div className="p-3 bg-slate-50 text-[#334155] flex items-center justify-between border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#334155]">
                        {activeTab === "photo" ? "INDUSTRIAL PLANT PHOTOGRAPHY" : "2D CAD / CFD BLUEPRINT"}
                      </span>
                    </div>

                    <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                      <button
                        onClick={() => setActiveTab("photo")}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                          activeTab === "photo"
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-[#64748B] hover:text-[#334155]"
                        }`}
                      >
                        Product Photo
                      </button>
                      <button
                        onClick={() => setActiveTab("schematic")}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                          activeTab === "schematic"
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-[#64748B] hover:text-[#334155]"
                        }`}
                      >
                        CAD Blueprint
                      </button>
                    </div>
                  </div>

                  {/* Visualizer Display Area */}
                  <div className="p-4 bg-slate-50/50 relative min-h-85 flex flex-col items-center justify-center overflow-hidden">
                    {/* Background Blueprint Grid */}
                    <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

                    <AnimatePresence mode="wait">
                      {activeTab === "schematic" ? (
                        <motion.div
                          key="schematic"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="w-full flex items-center justify-center relative z-10"
                        >
                          <ProductSchematic type={product.schematicSvgType} isDark={false} className="w-full h-72" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`photo-${selectedPhotoIndex}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-72 rounded-xl overflow-hidden relative z-10 border border-slate-200 bg-white p-3 flex items-center justify-center shadow-xs group"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={galleryImages[selectedPhotoIndex] || product.image}
                            alt={`${product.name} - View ${selectedPhotoIndex + 1}`}
                            className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Floating Angle Badge */}
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-blue-700 font-bold flex items-center gap-1.5 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            <span>
                              {product.heroBadge || product.subCategory || product.name.toUpperCase()}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Multi-Photo Thumbnail Bar when in photo tab */}
                    {activeTab === "photo" && galleryImages.length > 1 && (
                      <div className="w-full pt-3 mt-2 border-t border-slate-200 relative z-10 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] flex items-center gap-1">
                          <Eye className="w-3 h-3 text-blue-600" />
                          <span>{galleryImages.length} VIEWS AVAILABLE:</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          {galleryImages.map((imgUrl, idx) => {
                            const isSelected = selectedPhotoIndex === idx;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedPhotoIndex(idx)}
                                className={`relative w-12 h-9 rounded-lg overflow-hidden border transition-all p-0.5 bg-white ${
                                  isSelected
                                    ? "border-blue-600 ring-2 ring-blue-500/30 shadow-xs"
                                    : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400"
                                }`}
                                title={
                                  product.slug === "ahu" && AHU_ANGLE_METADATA[idx]
                                    ? AHU_ANGLE_METADATA[idx].shortTitle
                                    : `View ${idx + 1}`
                                }
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={imgUrl}
                                  alt={`Thumbnail ${idx + 1}`}
                                  className="w-full h-full object-contain"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visualizer Footer Details */}
                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-[#64748B]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>FACTORY TESTED & VERIFIED</span>
                    </span>
                    <button
                      onClick={() => setIsQuoteOpen(true)}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Request CAD (.DWG) File
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Full-Width Industrial Product Showcase & Multi-Angle Inspection (Scroll Reveal) */}
        <motion.section
          id="showcase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 text-[#334155] relative overflow-hidden border border-slate-200 shadow-xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Big Product Image Showcase */}
              <motion.div
                variants={scaleInVariants}
                className="lg:col-span-7"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
                  {/* Subtle Tech Grid inside Showcase */}
                  <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

                  {/* Header Badge Strip inside Showcase */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono text-[#334155] shadow-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      <span>
                        {product.slug === "ahu" && AHU_ANGLE_METADATA[showcasePhotoIndex]
                          ? AHU_ANGLE_METADATA[showcasePhotoIndex].title
                          : product.slug === "airwashers"
                          ? "Industrial Airwasher Unit — High-Saturation Evaporative Cooling System"
                          : product.slug === "fcu"
                          ? "FCU (Fan Coil Unit) — Ultra-Slim Ceiling Concealed Chilled Water & DX Series"
                          : product.slug === "tfa"
                          ? "TFA (Treated Fresh Air Unit) — 100% Fresh Air & Energy Recovery DOAS"
                          : `${product.name} — Industrial Build Specification`}
                      </span>
                    </div>

                    <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-blue-700 font-bold shadow-xs">
                      {product.slug === "ahu" && AHU_ANGLE_METADATA[showcasePhotoIndex]
                        ? AHU_ANGLE_METADATA[showcasePhotoIndex].badge
                        : product.slug === "airwashers"
                        ? "90% Saturation / Celdek 5090"
                        : product.slug === "fcu"
                        ? "Ultra-Slim 220mm / 28 dBA"
                        : product.slug === "tfa"
                        ? "100% Fresh Air / Enthalpy Wheel"
                        : product.heroBadge || "EUROCON OEM"}
                    </span>
                  </div>

                  {/* Main Showcase Image Display */}
                  <div className="relative h-80 sm:h-100 w-full p-6 sm:p-8 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={showcasePhotoIndex}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        src={galleryImages[showcasePhotoIndex] || product.image}
                        alt={`${product.name} Industrial Showcase Angle ${showcasePhotoIndex + 1}`}
                        className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-700 group-hover:scale-105"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Bottom Image Control Strip */}
                  {galleryImages.length > 1 && (
                    <div className="p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center justify-between z-20">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B] font-semibold">
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-[11px]">SELECT ANGLE:</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {galleryImages.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setShowcasePhotoIndex(idx);
                              setSelectedPhotoIndex(idx);
                            }}
                            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                              showcasePhotoIndex === idx
                                ? "bg-blue-600 text-white shadow-xs"
                                : "bg-slate-100 text-[#64748B] hover:text-[#334155] hover:bg-slate-200"
                            }`}
                          >
                            Angle {idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Engineering Details Callout */}
              <motion.div
                variants={fadeUpVariants}
                className="lg:col-span-5 space-y-5"
              >
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>PLANT MANUFACTURING ASSURANCE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#334155] tracking-tight leading-tight">
                  PRECISION MANUFACTURED FOR RIGOROUS INDUSTRIAL PROCESSES
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                  {product.slug === "ahu" && AHU_ANGLE_METADATA[showcasePhotoIndex]
                    ? AHU_ANGLE_METADATA[showcasePhotoIndex].description
                    : `Each ${product.name} is manufactured at Eurocon's state-of-the-art facility using CNC laser cutting, automated lock-forming, and multi-stage aerodynamic testing to ensure zero casing leakage and maximum lifecycle reliability.`}
                </p>

                <div className="space-y-2.5 pt-2 text-xs font-mono text-[#64748B]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Heavy-Gauge Anti-Corrosive Construction (Optional)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Tested Prior To Site Dispatch & Rigging</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Constructed in Single or Double Skin Casing</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-md shadow-blue-600/20 hover:scale-105"
                  >
                    <span>Request Custom Dimensional Drawing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* 4-Angle Interactive Gallery Grid */}
            {galleryImages.length > 1 && (
              <div className="pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#334155]">
                      4-ANGLE ENGINEERING INSPECTION GALLERY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#64748B]">
                    CLICK ANY ANGLE TO INSPECT IN DETAIL
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryImages.map((imgUrl, idx) => {
                    const isCurrent = showcasePhotoIndex === idx;
                    const meta = product.slug === "ahu" && AHU_ANGLE_METADATA[idx] ? AHU_ANGLE_METADATA[idx] : null;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setShowcasePhotoIndex(idx);
                          setSelectedPhotoIndex(idx);
                        }}
                        className={`text-left p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                          isCurrent
                            ? "bg-white border-blue-600 ring-2 ring-blue-500/30 shadow-md -translate-y-1"
                            : "bg-white border-slate-200 hover:border-blue-400 hover:bg-slate-50 hover:shadow-xs"
                        }`}
                      >
                        {/* Image Preview Box */}
                        <div className="relative h-36 w-full rounded-xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-2 mb-3 shadow-2xs">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imgUrl}
                            alt={meta?.title || `Angle ${idx + 1}`}
                            className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className={`absolute top-2 left-2 text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs ${
                            isCurrent ? "bg-blue-600 text-white" : "bg-white text-[#64748B] border border-slate-200"
                          }`}>
                            {meta?.tag || `Angle 0${idx + 1}`}
                          </span>
                        </div>

                        {/* Text Details */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-xs font-bold transition-colors ${
                              isCurrent ? "text-blue-600" : "text-[#334155] group-hover:text-blue-600"
                            }`}>
                              {meta?.shortTitle || `Angle 0${idx + 1}`}
                            </h4>
                            {meta?.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#64748B] border border-slate-200">
                                {meta.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                            {meta?.description || `High-resolution factory shot of the ${product.name}.`}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Section 3: Comprehensive Engineering Specifications Table (Scroll Reveal Stagger) */}
        <motion.section
          id="matrix"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#334155] tracking-tight">
              ENGINEERING PARAMETERS & PERFORMANCE RATINGS
            </h2>
            <p className="text-sm text-[#64748B]">
              Factory tested according to international HVAC engineering and performance testing codes.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="divide-y divide-slate-200"
            >
              {specRows.map((spec, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 hover:bg-slate-50 transition-colors items-center gap-3"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 shadow-2xs">
                      {spec.icon}
                    </div>
                    <span className="font-bold text-sm text-[#334155]">{spec.label}</span>
                  </div>

                  <div className="md:col-span-8 flex flex-col">
                    <span className="text-sm font-semibold text-[#334155]">{spec.value}</span>
                    {spec.sub && (
                      <span className="text-xs text-[#64748B] font-mono mt-0.5">{spec.sub}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Section 5: Modular Options / Custom Configurations (Scroll Reveal Stagger) */}
        {product.customOptions && product.customOptions.length > 0 && (
          <motion.section
            id="options"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpVariants}
            className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>MODULAR FLEXIBILITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#334155] tracking-tight">
                CUSTOM CONFIGURATION OPTIONS
              </h2>
              <p className="text-sm text-[#64748B]">
                Tailor casing thickness, motor classes, coil rows, and filtration banks to meet exact MEP specifications.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {product.customOptions.map((opt, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 cursor-default"
                >
                  <div className="space-y-2.5">
                    {opt.badge && (
                      <span className="inline-block text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {opt.badge}
                      </span>
                    )}
                    <h3 className="font-extrabold text-base text-[#334155]">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center gap-1 text-xs font-bold text-blue-600">
                    <Check className="w-3.5 h-3.5" />
                    <span>Configurable in RFQ</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Section 6: Applications & Suitable Industries (Scroll Reveal Stagger) */}
        <motion.section
          id="applications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="py-16 bg-slate-50 border-t border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>APPLICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#334155] tracking-tight">
                PRIMARY INDUSTRIAL & COMMERCIAL ENVIRONMENTS
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {product.applications.map((app, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                  className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 hover:bg-blue-50/50 hover:border-blue-500 transition-all shadow-2xs"
                >
                  <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-[#334155]">{app}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Section 7: Direct Engineering RFQ & Sizing Banner (Scroll Reveal) */}
        <motion.section
          id="rfq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-[#334155] relative overflow-hidden shadow-xl border border-slate-200">
            {/* Background elements */}
            <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-blue-600">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>CUSTOM SPECIFICATION & SIZING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.15] text-[#334155]">
                NEED CUSTOM CFM, STATIC PRESSURE, OR THERMAL SIZING FOR {product.name.toUpperCase()}?
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
                Our application engineering team will run 3D aerodynamic simulations, select coil sizing, and calculate motor kW to deliver an optimized solution within 24 hours.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  Request Technical Quotation (RFQ)
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#334155] font-bold text-sm border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-colors shadow-xs"
                >
                  Consult Engineering Team
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 8: Related Products & Full Catalog Cross-link */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-[#334155]">
              OTHER EUROCON ENGINEERED SYSTEMS
            </h3>
            <Link
              href="/products"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {relatedProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUpVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/products/${p.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-blue-600">
                      <span>{p.category.toUpperCase()}</span>
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-extrabold text-base text-[#334155] group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-600 mt-4">
                    <span>Explore Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={product.name}
      />
    </div>
  );
}
