"use client";

import React from "react";
import { Product } from "@/types";

interface ProductSchematicProps {
  type: Product["schematicSvgType"];
  className?: string;
  isDark?: boolean;
}

export default function ProductSchematic({
  type,
  className = "w-full h-48",
  isDark = true,
}: ProductSchematicProps) {
  const strokeColor = isDark ? "#3B82F6" : "#2563EB";
  const dimStroke = isDark ? "#64748B" : "#94A3B8";
  const fillColor = isDark ? "rgba(37, 99, 235, 0.12)" : "rgba(37, 99, 235, 0.08)";
  const accentColor = isDark ? "#60A5FA" : "#3B82F6";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35" />

      {type === "centrifugal" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Scroll Casing */}
          <path
            d="M 90 100 C 90 50, 160 30, 210 30 L 260 30 L 260 90 C 230 90, 210 160, 150 170 C 90 170, 70 130, 90 100 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Outlet Flange */}
          <rect x="250" y="25" width="16" height="70" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          <line x1="258" y1="20" x2="258" y2="100" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Impeller Center Hub */}
          <circle cx="150" cy="110" r="45" fill="none" stroke={dimStroke} strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="150" cy="110" r="16" fill={fillColor} stroke={accentColor} strokeWidth="2.5" />
          {/* Backward Curved Blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 150 + Math.cos(rad) * 16;
            const y1 = 110 + Math.sin(rad) * 16;
            const x2 = 150 + Math.cos(rad + 0.4) * 44;
            const y2 = 110 + Math.sin(rad + 0.4) * 44;
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} Q ${x1 + 10} ${y1 - 5}, ${x2} ${y2}`}
                fill="none"
                stroke={accentColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            );
          })}
          {/* Airflow Velocity Vectors */}
          <path d="M 150 110 Q 200 80, 275 60" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
          <text x="210" y="180" fill={dimStroke} fontSize="9" fontFamily="monospace">AMCA 210 SCROLL</text>
        </svg>
      )}

      {type === "axial" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Tubular Housing */}
          <rect x="50" y="40" width="200" height="120" rx="4" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          {/* Inlet & Outlet Flanges */}
          <rect x="42" y="32" width="10" height="136" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          <rect x="248" y="32" width="10" height="136" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          {/* Center Motor Pod & Shaft */}
          <rect x="115" y="75" width="70" height="50" rx="6" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          {/* Adjustable Aerofoil Blades */}
          <path d="M 150 75 L 150 44 Q 165 42, 160 75 Z" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          <path d="M 150 125 L 150 156 Q 165 158, 160 125 Z" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Airflow Straightening Guide Vanes */}
          <line x1="80" y1="55" x2="110" y2="75" stroke={dimStroke} strokeWidth="1.5" />
          <line x1="80" y1="145" x2="110" y2="125" stroke={dimStroke} strokeWidth="1.5" />
          {/* Through-flow Dynamic Lines */}
          <line x1="20" y1="100" x2="280" y2="100" stroke={strokeColor} strokeWidth="2" strokeDasharray="6 4" className="animate-airflow-line" />
          <text x="70" y="180" fill={dimStroke} fontSize="9" fontFamily="monospace">AEROFOIL DIE-CAST BLADES</text>
        </svg>
      )}

      {type === "jet" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Long Slim Body with Inlet Bellmouth and Outlet Nozzle */}
          <path
            d="M 30 75 Q 45 60, 70 60 L 230 60 Q 255 60, 270 70 L 270 130 Q 255 140, 230 140 L 70 140 Q 45 140, 30 125 Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
          {/* Integrated Silencer Liners */}
          <rect x="70" y="65" width="55" height="70" fill="none" stroke={dimStroke} strokeDasharray="3 3" />
          <rect x="175" y="65" width="55" height="70" fill="none" stroke={dimStroke} strokeDasharray="3 3" />
          {/* Central Motor & Impeller */}
          <rect x="130" y="80" width="40" height="40" rx="4" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Deflector Vanes */}
          <line x1="265" y1="80" x2="285" y2="70" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="265" y1="120" x2="285" y2="130" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          <text x="180" y="180" fill={dimStroke} fontSize="9" fontFamily="monospace">HIGH THRUST JET NOZZLE</text>
        </svg>
      )}

      {type === "inline" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Double-Skin Acoustic Cabinet */}
          <rect x="60" y="45" width="180" height="110" rx="6" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          <rect x="68" y="53" width="164" height="94" rx="4" fill="none" stroke={dimStroke} strokeDasharray="4 2" />
          {/* Duct Spigots */}
          <rect x="35" y="70" width="25" height="60" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          <rect x="240" y="70" width="25" height="60" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          {/* EC Backward Curved Impeller */}
          <circle cx="150" cy="100" r="32" fill="none" stroke={accentColor} strokeWidth="2" />
          <circle cx="150" cy="100" r="12" fill={strokeColor} />
          <text x="80" y="180" fill={dimStroke} fontSize="9" fontFamily="monospace">ACOUSTIC DOUBLE SKIN (25mm)</text>
        </svg>
      )}

      {type === "hvls" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Ceiling Drop Rod & PMSM Motor */}
          <rect x="145" y="20" width="10" height="40" fill={strokeColor} />
          <ellipse cx="150" cy="65" rx="28" ry="12" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          {/* Aerofoil Blades Spanning Out */}
          <path d="M 125 65 Q 40 70, 20 85 Q 50 80, 125 72 Z" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          <path d="M 175 65 Q 260 70, 280 85 Q 250 80, 175 72 Z" fill={accentColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Winglet tips */}
          <path d="M 20 85 L 18 70" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          <path d="M 280 85 L 282 70" stroke={accentColor} strokeWidth="3" strokeLinecap="round" />
          {/* Downward Destratification Airflow */}
          <path d="M 100 95 Q 80 150, 40 170" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
          <path d="M 200 95 Q 220 150, 260 170" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
          <text x="85" y="190" fill={dimStroke} fontSize="9" fontFamily="monospace">24 FT PMSM GEARLESS SPAN</text>
        </svg>
      )}

      {type === "smoke" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Vertical Discharge Roof Cowl / High Temp Casing */}
          <path d="M 70 150 L 70 80 L 50 80 L 150 30 L 250 80 L 230 80 L 230 150 Z" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          {/* Base Curb */}
          <rect x="55" y="150" width="190" height="20" rx="3" fill="none" stroke={strokeColor} strokeWidth="2" />
          {/* Class H Motor Isolation Box */}
          <rect x="125" y="90" width="50" height="45" rx="4" fill="none" stroke={accentColor} strokeWidth="2" />
          <circle cx="150" cy="112" r="10" fill={strokeColor} />
          {/* Flame / High Temp Emblem */}
          <path d="M 150 45 Q 160 55, 150 70 Q 140 55, 150 45 Z" fill={accentColor} opacity="0.8" />
          <text x="75" y="190" fill={dimStroke} fontSize="9" fontFamily="monospace">EN 12101-3 400°C / 2HR F400</text>
        </svg>
      )}

      {type === "duct" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Spiral Duct Cylinder & Rectangular SMACNA section */}
          <path d="M 40 60 L 160 60 L 160 140 L 40 140 Z" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          <ellipse cx="40" cy="100" rx="14" ry="40" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          {/* Spiral Reinforcing Ribs */}
          <line x1="70" y1="60" x2="85" y2="140" stroke={dimStroke} strokeWidth="2" />
          <line x1="105" y1="60" x2="120" y2="140" stroke={dimStroke} strokeWidth="2" />
          <line x1="140" y1="60" x2="155" y2="140" stroke={dimStroke} strokeWidth="2" />
          {/* Rectangular TDF Flange Transition */}
          <polygon points="160,60 250,45 250,155 160,140" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          <rect x="250" y="40" width="12" height="120" rx="2" fill="none" stroke={accentColor} strokeWidth="2" />
          <text x="75" y="180" fill={dimStroke} fontSize="9" fontFamily="monospace">SMACNA CLASS A CNC FORMED</text>
        </svg>
      )}

      {type === "scrubber" && (
        <svg viewBox="0 0 300 200" className="w-full h-full p-4 relative z-10">
          {/* Packed Bed Scrubber Vertical Tower */}
          <rect x="100" y="30" width="100" height="135" rx="6" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
          {/* Gas Inlet & Clean Air Exhaust */}
          <path d="M 45 130 L 100 130" stroke={strokeColor} strokeWidth="8" strokeLinecap="square" />
          <path d="M 150 30 L 150 15" stroke={strokeColor} strokeWidth="12" strokeLinecap="square" />
          {/* Spray Header & Nozzles */}
          <line x1="110" y1="65" x2="190" y2="65" stroke={accentColor} strokeWidth="2" />
          <circle cx="125" cy="72" r="3" fill={accentColor} />
          <circle cx="150" cy="72" r="3" fill={accentColor} />
          <circle cx="175" cy="72" r="3" fill={accentColor} />
          {/* Packed Media Bed Layer */}
          <rect x="110" y="85" width="80" height="35" rx="2" fill="none" stroke={dimStroke} strokeDasharray="3 2" />
          {/* Mist Eliminator Pad */}
          <line x1="110" y1="50" x2="190" y2="50" stroke={dimStroke} strokeWidth="3" strokeDasharray="4 2" />
          <text x="70" y="185" fill={dimStroke} fontSize="9" fontFamily="monospace">PP/FRP CHEMICAL ABSORPTION</text>
        </svg>
      )}

      {type === "ahu" && (
        <svg viewBox="0 0 320 200" className="w-full h-full p-3 relative z-10">
          {/* Outer Modular Thermal Break AHU Casing */}
          <rect x="25" y="35" width="270" height="125" rx="6" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          {/* Section Dividers */}
          <line x1="85" y1="35" x2="85" y2="160" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="145" y1="35" x2="145" y2="160" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="205" y1="35" x2="205" y2="160" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Section 1: Damper & Pre-Filters (EU4/EU7) */}
          <rect x="35" y="45" width="12" height="105" rx="2" fill="none" stroke={dimStroke} strokeWidth="1.5" />
          <line x1="58" y1="45" x2="72" y2="60" stroke={accentColor} strokeWidth="2" />
          <line x1="58" y1="65" x2="72" y2="80" stroke={accentColor} strokeWidth="2" />
          <line x1="58" y1="85" x2="72" y2="100" stroke={accentColor} strokeWidth="2" />
          <line x1="58" y1="105" x2="72" y2="120" stroke={accentColor} strokeWidth="2" />
          <line x1="58" y1="125" x2="72" y2="140" stroke={accentColor} strokeWidth="2" />
          {/* Section 2: Cooling & Heating Coil (Copper tubes + Al fins) */}
          <rect x="100" y="48" width="32" height="100" rx="3" fill="rgba(37, 99, 235, 0.2)" stroke={accentColor} strokeWidth="2" />
          <line x1="108" y1="52" x2="108" y2="144" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="116" y1="52" x2="116" y2="144" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="124" y1="52" x2="124" y2="144" stroke={strokeColor} strokeWidth="1.5" />
          {/* Drain Pan */}
          <path d="M 95 152 L 140 155 L 140 158 L 95 158 Z" fill={accentColor} />
          {/* Section 3: Droplet Eliminator / Mist Vane */}
          <line x1="160" y1="50" x2="168" y2="145" stroke={dimStroke} strokeWidth="2" strokeDasharray="4 2" />
          <line x1="180" y1="50" x2="188" y2="145" stroke={dimStroke} strokeWidth="2" strokeDasharray="4 2" />
          {/* Section 4: Plug Fan / Centrifugal Blower with Motor */}
          <circle cx="250" cy="95" r="30" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="250" cy="95" r="10" fill={accentColor} />
          <rect x="235" y="130" width="30" height="12" rx="2" fill={strokeColor} />
          {/* Airflow Velocity Streamline */}
          <path d="M 20 95 L 295 95" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="5 3" className="animate-airflow-line" />
          {/* Base Channel Skid */}
          <rect x="20" y="160" width="280" height="10" rx="2" fill={strokeColor} opacity="0.8" />
          <text x="35" y="186" fill={dimStroke} fontSize="8.5" fontFamily="monospace">DOUBLE SKIN PUF 50MM • PLUG FAN / EC MOTOR</text>
        </svg>
      )}

      {type === "airwasher" && (
        <svg viewBox="0 0 320 200" className="w-full h-full p-3 relative z-10">
          {/* Airwasher Main Casing */}
          <rect x="30" y="35" width="260" height="115" rx="4" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          {/* Heavy Gauge Water Sump Tank at Bottom */}
          <rect x="25" y="145" width="270" height="25" rx="3" fill="rgba(37, 99, 235, 0.25)" stroke={strokeColor} strokeWidth="2" />
          <text x="110" y="162" fill={dimStroke} fontSize="8" fontFamily="monospace">SS304 WATER SUMP TANK</text>
          {/* Fresh Air Inlet Louver / Pre-filter */}
          <rect x="38" y="45" width="14" height="95" rx="2" fill="none" stroke={dimStroke} strokeWidth="1.5" />
          {/* Celdek Evaporative Cellulose Pad Bank */}
          <rect x="75" y="45" width="45" height="95" rx="3" fill="rgba(37, 99, 235, 0.2)" stroke={accentColor} strokeWidth="2" />
          {/* Cross-flute pattern on Celdek */}
          <line x1="75" y1="55" x2="120" y2="85" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
          <line x1="75" y1="85" x2="120" y2="115" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
          <line x1="75" y1="115" x2="120" y2="140" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
          <line x1="75" y1="85" x2="120" y2="55" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
          <line x1="75" y1="115" x2="120" y2="85" stroke={accentColor} strokeWidth="1.5" opacity="0.6" />
          {/* Overhead Water Spray Header & High-Pressure Nozzles */}
          <line x1="140" y1="42" x2="140" y2="140" stroke={strokeColor} strokeWidth="3" />
          <circle cx="140" cy="60" r="4" fill={accentColor} />
          <circle cx="140" cy="85" r="4" fill={accentColor} />
          <circle cx="140" cy="110" r="4" fill={accentColor} />
          {/* Spray Droplet Cones */}
          <path d="M 136 60 L 115 50 M 136 60 L 115 70" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M 136 85 L 115 75 M 136 85 L 115 95" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M 136 110 L 115 100 M 136 110 L 115 120" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2 2" />
          {/* PVC / GI Mist Eliminator Vane Bank */}
          <rect x="165" y="45" width="22" height="95" rx="2" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="172" y1="48" x2="180" y2="137" stroke={dimStroke} strokeWidth="2" strokeDasharray="4 2" />
          {/* Supply Fan Section */}
          <circle cx="240" cy="90" r="28" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="240" cy="90" r="10" fill={accentColor} />
          {/* Flow vector */}
          <path d="M 20 90 L 290 90" fill="none" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
          <text x="50" y="188" fill={dimStroke} fontSize="8.5" fontFamily="monospace">CELDEK 5090 / 7090 PAD • 90% SATURATION EFFICIENCY</text>
        </svg>
      )}

      {type === "fansection" && (
        <svg viewBox="0 0 320 200" className="w-full h-full p-3 relative z-10">
          {/* Heavy-Duty Acoustic Fan Plenum Cabinet */}
          <rect x="40" y="30" width="240" height="135" rx="6" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          <rect x="48" y="38" width="224" height="119" rx="4" fill="none" stroke={dimStroke} strokeDasharray="4 2" />
          {/* Aerodynamic Bellmouth Inlet Cone */}
          <path d="M 40 60 C 70 60, 90 75, 105 75 L 105 125 C 90 125, 70 140, 40 140 Z" fill="rgba(37, 99, 235, 0.15)" stroke={accentColor} strokeWidth="2" />
          {/* Dynamic Plug Fan Wheel / Impeller */}
          <circle cx="165" cy="95" r="44" fill="none" stroke={strokeColor} strokeWidth="2.5" />
          <circle cx="165" cy="95" r="16" fill={fillColor} stroke={accentColor} strokeWidth="2" />
          {/* Backward Curved Blades */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 165 + Math.cos(rad) * 16;
            const y1 = 95 + Math.sin(rad) * 16;
            const x2 = 165 + Math.cos(rad + 0.4) * 42;
            const y2 = 95 + Math.sin(rad + 0.4) * 42;
            return (
              <path key={i} d={`M ${x1} ${y1} Q ${x1 + 8} ${y1 - 4}, ${x2} ${y2}`} stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
            );
          })}
          {/* Direct Drive Motor / Base */}
          <rect x="205" y="75" width="45" height="42" rx="4" fill={strokeColor} opacity="0.9" />
          {/* Spring Anti-Vibration Isolator Mounts */}
          <path d="M 120 145 L 125 152 L 115 157 L 125 162 L 120 168" stroke={accentColor} strokeWidth="2.5" fill="none" />
          <path d="M 230 145 L 235 152 L 225 157 L 235 162 L 230 168" stroke={accentColor} strokeWidth="2.5" fill="none" />
          {/* Discharge Flexible Canvas Sleeve */}
          <rect x="275" y="65" width="15" height="65" rx="2" fill="none" stroke={accentColor} strokeWidth="2" />
          <text x="60" y="185" fill={dimStroke} fontSize="8.5" fontFamily="monospace">ISO 1940 G2.5 BALANCED • SPRING AVM ISOLATION</text>
        </svg>
      )}

      {type === "cabinetexhaust" && (
        <svg viewBox="0 0 320 200" className="w-full h-full p-3 relative z-10">
          {/* Outer In-Line Double Skin Cabinet Enclosure */}
          <rect x="45" y="35" width="230" height="125" rx="6" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          {/* Internal Acoustic Insulation Lining */}
          <rect x="53" y="43" width="214" height="109" rx="4" fill="none" stroke={dimStroke} strokeDasharray="3 3" />
          {/* Suction Inlet Collar */}
          <rect x="25" y="65" width="20" height="65" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          {/* Discharge Outlet Collar */}
          <rect x="275" y="65" width="20" height="65" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          {/* Centrifugal DIDW Blower Wheel inside Cabinet */}
          <path
            d="M 100 95 C 100 65, 145 50, 185 50 L 225 50 L 225 95 C 205 95, 190 140, 145 145 C 105 145, 90 120, 100 95 Z"
            fill="rgba(37, 99, 235, 0.15)"
            stroke={accentColor}
            strokeWidth="2"
          />
          {/* Center Impeller Hub */}
          <circle cx="150" cy="98" r="28" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="150" cy="98" r="10" fill={accentColor} />
          {/* Service Access Door Latches */}
          <rect x="60" y="50" width="8" height="12" rx="1" fill={strokeColor} />
          <rect x="60" y="130" width="8" height="12" rx="1" fill={strokeColor} />
          {/* Through Flow Airflow Line */}
          <line x1="15" y1="98" x2="305" y2="98" stroke={strokeColor} strokeWidth="2" strokeDasharray="5 3" className="animate-airflow-line" />
          <text x="50" y="185" fill={dimStroke} fontSize="8.5" fontFamily="monospace">IN-LINE DOUBLE SKIN ACOUSTIC CABINET BLOWER</text>
        </svg>
      )}

      {type === "fcu" && (
        <svg viewBox="0 0 320 200" className="w-full h-full p-3 relative z-10">
          {/* Low-Profile Ceiling Concealed Chassis */}
          <rect x="35" y="45" width="250" height="105" rx="4" fill={fillColor} stroke={strokeColor} strokeWidth="2.5" />
          {/* Ceiling Suspension Brackets */}
          <rect x="30" y="38" width="16" height="8" rx="1" fill={strokeColor} />
          <rect x="274" y="38" width="16" height="8" rx="1" fill={strokeColor} />
          {/* Return Air Plenum & Washable Filter Track */}
          <line x1="48" y1="52" x2="48" y2="142" stroke={dimStroke} strokeWidth="3" />
          <line x1="56" y1="55" x2="56" y2="140" stroke={accentColor} strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Multi-Row Chilled Water Hydrophilic Fin Coil */}
          <rect x="80" y="52" width="38" height="90" rx="2" fill="rgba(37, 99, 235, 0.2)" stroke={accentColor} strokeWidth="2" />
          <line x1="88" y1="56" x2="88" y2="138" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="98" y1="56" x2="98" y2="138" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="108" y1="56" x2="108" y2="138" stroke={strokeColor} strokeWidth="1.5" />
          {/* Header Valve Connection & Air Vent */}
          <circle cx="112" cy="40" r="4" fill={accentColor} />
          <circle cx="112" cy="155" r="4" fill={accentColor} />
          {/* Extended Insulated Condensation Drain Tray */}
          <path d="M 70 145 L 140 148 L 140 153 L 70 153 Z" fill={accentColor} />
          {/* Dual In-line Centrifugal Blowers & 3-Speed/EC Motor */}
          <circle cx="180" cy="95" r="24" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="180" cy="95" r="8" fill={accentColor} />
          <circle cx="235" cy="95" r="24" fill="none" stroke={strokeColor} strokeWidth="2" />
          <circle cx="235" cy="95" r="8" fill={accentColor} />
          {/* Supply Air Discharge Collar */}
          <rect x="280" y="60" width="12" height="75" rx="2" fill="none" stroke={strokeColor} strokeWidth="2" />
          <text x="50" y="185" fill={dimStroke} fontSize="8.5" fontFamily="monospace">CEILING CONCEALED • CHILLED WATER & DX • 28-38 dBA</text>
        </svg>
      )}
    </div>
  );
}
