"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  alignment?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  badge,
  alignment = "left",
  theme = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    alignment === "center"
      ? "text-center items-center mx-auto"
      : alignment === "right"
      ? "text-right items-end ml-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {/* Eyebrow & Badge */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase font-mono text-blue-400">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {badge && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-blue-50 border-blue-200 text-blue-700"
          >
            <Sparkles className="w-3 h-3 text-blue-600" />
            {badge}
          </motion.span>
        )}
      </div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#334155]"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg leading-relaxed text-[#64748B]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
