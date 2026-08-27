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
  isDark = false,
}: ProductSchematicProps) {
  const strokeColor = isDark ? "#38BDF8" : "#0284C7";
  const dimStroke = isDark ? "#64748B" : "#94A3B8";
  const fillColor = isDark ? "rgba(14, 165, 233, 0.12)" : "rgba(2, 132, 199, 0.08)";
  const accentColor = "#0EA5E9";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

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
          <path d="M 150 110 Q 200 80, 275 60" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
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
          <line x1="20" y1="100" x2="280" y2="100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 4" className="animate-airflow-line" />
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
          <path d="M 100 95 Q 80 150, 40 170" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
          <path d="M 200 95 Q 220 150, 260 170" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" className="animate-airflow-line" />
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
          <path d="M 150 45 Q 160 55, 150 70 Q 140 55, 150 45 Z" fill="#EF4444" opacity="0.8" />
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
    </div>
  );
}
