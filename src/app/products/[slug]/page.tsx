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
  Sparkles,
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
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
            <Wind className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black">Product Specification Not Found</h1>
          <p className="text-slate-400 max-w-lg mx-auto">
            The requested product model &quot;{slug}&quot; is not in our primary index. Please explore our complete engineering catalog.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all"
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
    { label: "Airflow Capacity", value: product.specs.airflowRange, icon: <Wind className="w-4 h-4 text-red-600" /> },
    { label: "Static Pressure Rating", value: product.specs.staticPressure, icon: <Gauge className="w-4 h-4 text-red-600" /> },
    { label: "Cooling / Thermal Duty", value: product.specs.coolingCapacity, icon: <Thermometer className="w-4 h-4 text-[#1B2A6B]" /> },
    { label: "Casing & Insulation", value: product.specs.casingConstruction, icon: <Layers className="w-4 h-4 text-[#1B2A6B]" /> },
    { label: "Filtration Matrix", value: product.specs.filtration, icon: <Filter className="w-4 h-4 text-emerald-600" /> },
    { label: "Coil Construction", value: product.specs.coilSpecs, icon: <Zap className="w-4 h-4 text-amber-600" /> },
    { label: "Drive & Motor System", value: product.specs.driveType, sub: product.specs.motorRating, icon: <Cpu className="w-4 h-4 text-indigo-600" /> },
    { label: "Impeller / Wheel Diameter", value: product.specs.impellerDiameter, icon: <Fan className="w-4 h-4 text-red-600" /> },
    { label: "Acoustic / Noise Envelope", value: product.specs.noiseLevel, icon: <Sliders className="w-4 h-4 text-purple-600" /> },
    { label: "Operating Temperature", value: product.specs.operatingTemp, icon: <Thermometer className="w-4 h-4 text-rose-600" /> },
  ].filter((item) => item.value !== undefined);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-red-500 selection:text-white">
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 via-blue-600 to-[#1B2A6B] origin-left z-50 shadow-sm"
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
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full px-3 py-1.5 shadow-xl hidden md:flex items-center gap-1.5"
          >
            <span className="text-[10px] font-mono font-bold text-slate-500 px-2 uppercase border-r border-slate-200">
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
                    ? "bg-red-600 text-white font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="ml-1 px-3.5 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs shadow-xs"
            >
              RFQ Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs font-mono text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-red-600 transition-colors">
              HOME
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/products" className="hover:text-red-600 transition-colors">
              PRODUCTS
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400 font-semibold">{product.category.toUpperCase()}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-red-600 font-bold truncate">{product.name.toUpperCase()}</span>
          </div>
        </div>

        {/* Section 1: Product Hero Section */}
        <section id="overview" className="py-12 sm:py-16 bg-linear-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
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
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200/80 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>{product.heroBadge}</span>
                  </span>

                  <span className="text-xs font-mono text-slate-500 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                    {product.subCategory || product.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                    {product.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-red-700 font-medium leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-red-300 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Airflow Range</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 block truncate">
                        {product.specs.airflowRange.split("(")[0]}
                      </span>
                    </motion.div>
                  )}
                  {product.specs.staticPressure && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-red-300 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Max Pressure</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 block truncate">
                        {product.specs.staticPressure}
                      </span>
                    </motion.div>
                  )}
                  {product.specs.coolingCapacity && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-red-300 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Capacity Range</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 block truncate">
                        {product.specs.coolingCapacity.split("(")[0]}
                      </span>
                    </motion.div>
                  )}
                  {!product.specs.coolingCapacity && product.specs.motorRating && (
                    <motion.div variants={fadeUpVariants} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-red-300 transition-colors">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Motor Efficiency</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 block truncate">
                        {product.specs.motorRating.split(",")[0]}
                      </span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Actions: Request Quote & Spec Sheet */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-red-600/25 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Request Engineering RFQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.headquarters.phone.split("/")[0].trim()}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>Talk to HVAC Engineer</span>
                  </a>
                </div>

                {/* Compliance Standards Badges */}
                {product.specs.standards && (
                  <div className="pt-2 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-400 mr-1">STANDARDS:</span>
                    {product.specs.standards.map((std, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-xs font-semibold"
                      >
                        <ShieldCheck className="w-3 h-3 text-red-600" />
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
                  <div className="p-3 bg-slate-100 text-slate-800 flex items-center justify-between border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs font-bold tracking-wider uppercase text-slate-700">
                        {activeTab === "photo" ? "INDUSTRIAL PLANT PHOTOGRAPHY" : "2D CAD / CFD BLUEPRINT"}
                      </span>
                    </div>

                    <div className="flex items-center bg-slate-200/80 rounded-lg p-0.5">
                      <button
                        onClick={() => setActiveTab("photo")}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                          activeTab === "photo"
                            ? "bg-red-600 text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Product Photo
                      </button>
                      <button
                        onClick={() => setActiveTab("schematic")}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-bold transition-colors ${
                          activeTab === "schematic"
                            ? "bg-red-600 text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        CAD Blueprint
                      </button>
                    </div>
                  </div>

                  {/* Visualizer Display Area */}
                  <div className="p-4 bg-slate-50 relative min-h-85 flex flex-col items-center justify-center overflow-hidden">
                    {/* Background Blueprint Grid */}
                    <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

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
                            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Floating Angle Badge */}
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-red-600 font-bold flex items-center gap-1.5 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span>
                              {product.heroBadge || product.name.toUpperCase()}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Multi-Photo Thumbnail Bar when in photo tab */}
                    {activeTab === "photo" && galleryImages.length > 1 && (
                      <div className="w-full pt-3 mt-2 border-t border-slate-200 relative z-10 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1">
                          <Eye className="w-3 h-3 text-red-600" />
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
                                    ? "border-red-500 ring-2 ring-red-500/30 shadow-xs"
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
                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>AMCA 210 / ISO 9001 VERIFIED</span>
                    </span>
                    <button
                      onClick={() => setIsQuoteOpen(true)}
                      className="text-red-600 font-bold hover:underline"
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
          <div className="p-8 sm:p-12 rounded-3xl bg-white text-slate-900 relative overflow-hidden border border-slate-200 shadow-xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Big Product Image Showcase */}
              <motion.div
                variants={scaleInVariants}
                className="lg:col-span-7"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-50">
                  {/* Subtle Tech Grid inside Showcase */}
                  <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />

                  {/* Header Badge Strip inside Showcase */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono text-slate-800 shadow-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>
                        {product.slug === "ahu" && AHU_ANGLE_METADATA[showcasePhotoIndex]
                          ? AHU_ANGLE_METADATA[showcasePhotoIndex].title
                          : product.slug === "airwashers"
                          ? "Industrial Airwasher Unit — High-Saturation Evaporative Cooling System"
                          : product.slug === "fcu"
                          ? "FCU (Fan Coil Unit) — Ultra-Slim Ceiling Concealed Chilled Water & DX Series"
                          : `${product.name} — Industrial Build Specification`}
                      </span>
                    </div>

                    <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono text-red-600 font-bold shadow-xs">
                      {product.slug === "ahu" && AHU_ANGLE_METADATA[showcasePhotoIndex]
                        ? AHU_ANGLE_METADATA[showcasePhotoIndex].badge
                        : product.slug === "airwashers"
                        ? "90% Saturation / Celdek 5090"
                        : product.slug === "fcu"
                        ? "Ultra-Slim 220mm / 28 dBA"
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
                        className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-700 group-hover:scale-105"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Bottom Image Control Strip */}
                  {galleryImages.length > 1 && (
                    <div className="p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-center justify-between z-20">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 font-semibold">
                        <Eye className="w-3.5 h-3.5 text-red-600" />
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
                                ? "bg-red-600 text-white shadow-xs"
                                : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
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
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>PLANT MANUFACTURING ASSURANCE</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  PRECISION MANUFACTURED FOR RIGOROUS INDUSTRIAL PROCESSES
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {product.slug === "ahu" && AHU_ANGLE_METADATA[showcasePhotoIndex]
                    ? AHU_ANGLE_METADATA[showcasePhotoIndex].description
                    : `Each ${product.name} is manufactured at Eurocon's state-of-the-art facility using CNC laser cutting, automated lock-forming, and multi-stage aerodynamic testing to ensure zero casing leakage and maximum lifecycle reliability.`}
                </p>

                <div className="space-y-2.5 pt-2 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Heavy-Gauge Anti-Corrosive Construction (IS 277 / SS304)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Tested Prior To Site Dispatch & Rigging</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>BMS Ready with 0-10V / Modbus / BACnet Modulation</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-md shadow-red-600/20 hover:scale-105"
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
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                      4-ANGLE ENGINEERING INSPECTION GALLERY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
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
                            ? "bg-white border-red-500 ring-2 ring-red-500/30 shadow-xl -translate-y-1"
                            : "bg-slate-50/80 border-slate-200 hover:border-red-300 hover:bg-white hover:shadow-md"
                        }`}
                      >
                        {/* Image Preview Box */}
                        <div className="relative h-36 w-full rounded-xl bg-white border border-slate-200/80 overflow-hidden flex items-center justify-center p-2 mb-3 shadow-2xs">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imgUrl}
                            alt={meta?.title || `Angle ${idx + 1}`}
                            className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className={`absolute top-2 left-2 text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs ${
                            isCurrent ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}>
                            {meta?.tag || `Angle 0${idx + 1}`}
                          </span>
                        </div>

                        {/* Text Details */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-xs font-bold transition-colors ${
                              isCurrent ? "text-red-600" : "text-slate-900 group-hover:text-red-600"
                            }`}>
                              {meta?.shortTitle || `Angle 0${idx + 1}`}
                            </h4>
                            {meta?.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                                {meta.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
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
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              ENGINEERING PARAMETERS & PERFORMANCE RATINGS
            </h2>
            <p className="text-sm text-slate-600">
              Factory tested according to international HVAC and aerodynamic testing codes (AMCA 210, EN 1886, AHRI 410, ISO 5801).
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="divide-y divide-slate-100"
            >
              {specRows.map((spec, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 hover:bg-red-50/40 transition-colors items-center gap-3"
                >
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
                      {spec.icon}
                    </div>
                    <span className="font-bold text-sm text-slate-900">{spec.label}</span>
                  </div>

                  <div className="md:col-span-8 flex flex-col">
                    <span className="text-sm font-semibold text-slate-800">{spec.value}</span>
                    {spec.sub && (
                      <span className="text-xs text-slate-500 font-mono mt-0.5">{spec.sub}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Section 4: Key Features & Aerodynamic Highlights (Scroll Reveal with CFD Simulation Image) */}
        <section id="features" className="py-16 bg-slate-100/70 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Key Features List */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUpVariants}
                className="lg:col-span-6 space-y-6"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>BUILT FOR PERFORMANCE</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    KEY ENGINEERING FEATURES
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Precision manufactured components engineered to withstand industrial thermal, mechanical, and aerodynamic loads.
                  </p>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="space-y-3.5"
                >
                  {product.keyFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUpVariants}
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5 hover:border-red-400 hover:shadow-md transition-all"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column: CFD Simulation Visual + Innovation Highlights */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUpVariants}
                className="lg:col-span-6 space-y-6"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>AERODYNAMIC ADVANTAGE</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    INNOVATION & CFD HIGHLIGHTS
                  </h2>
                </div>

                {/* Generated High-Tech CFD Aerodynamic Simulation Image Card */}
                {product.cfdImage && (
                  <motion.div
                    variants={scaleInVariants}
                    className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group relative"
                  >
                    {/* Header Strip */}
                    <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[11px] font-mono font-bold text-slate-800 uppercase tracking-wider">
                          3D CFD VELOCITY & THERMAL SIMULATION
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs font-semibold">
                        Laminar Flow Analysis
                      </span>
                    </div>

                    {/* CFD Simulation Image (Clean, No dark veils) */}
                    <div className="relative overflow-hidden bg-slate-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.cfdImage}
                        alt={`${product.name} CFD Simulation`}
                        className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="space-y-4"
                >
                  {product.aerodynamicHighlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      variants={scaleInVariants}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className="p-6 rounded-2xl bg-white text-slate-900 shadow-xs space-y-3 relative overflow-hidden border border-slate-200 hover:border-red-300 hover:shadow-md transition-all"
                    >
                      <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                        <Wind className="w-24 h-24 text-red-600" />
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-red-600 font-bold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>{highlight.title}</span>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </motion.div>
                  ))}

                  {/* Compliance Box */}
                  <motion.div
                    variants={fadeUpVariants}
                    className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                      <span>QUALITY ASSURANCE & TESTING PROTOCOLS</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every unit is statically and dynamically balanced to ISO 1940 Grade G2.5, undergoes electrical megger insulation testing, and aerodynamic flow pressure validation prior to dispatch.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

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
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>MODULAR FLEXIBILITY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                CUSTOM CONFIGURATION OPTIONS
              </h2>
              <p className="text-sm text-slate-600">
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
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-400 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-4 cursor-default"
                >
                  <div className="space-y-2.5">
                    {opt.badge && (
                      <span className="inline-block text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">
                        {opt.badge}
                      </span>
                    )}
                    <h3 className="font-extrabold text-base text-slate-900">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-red-600">
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
          className="py-16 bg-white border-t border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>APPLICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
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
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:bg-red-50/60 hover:border-red-300 transition-all shadow-2xs"
                >
                  <Building2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-slate-800">{app}</span>
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
          <div className="p-8 sm:p-12 rounded-3xl bg-white text-slate-900 relative overflow-hidden shadow-xl border border-slate-200">
            {/* Background elements */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>CUSTOM SPECIFICATION & SIZING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.15] text-slate-900">
                NEED CUSTOM CFM, STATIC PRESSURE, OR THERMAL SIZING FOR {product.name.toUpperCase()}?
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our application engineering team will run 3D aerodynamic simulations, select coil sizing, and calculate motor kW to deliver an optimized solution within 24 hours.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm tracking-wide transition-all shadow-md shadow-red-600/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  Request Technical Quotation (RFQ)
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-300 transition-colors"
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
            <h3 className="text-xl font-black text-slate-900">
              OTHER EUROCON ENGINEERED SYSTEMS
            </h3>
            <Link
              href="/products"
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
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
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-red-400 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-red-600">
                      <span>{p.category.toUpperCase()}</span>
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-extrabold text-base text-slate-900 group-hover:text-red-600 transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600 mt-4">
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
