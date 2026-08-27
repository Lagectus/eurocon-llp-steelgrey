"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestView = target.closest("[data-cursor='view']");
      const closestDrag = target.closest("[data-cursor='drag']");
      const closestButton = target.closest("button, a, input, select, textarea, [role='button']");

      if (closestView) {
        setCursorType("view");
      } else if (closestDrag) {
        setCursorType("drag");
      } else if (closestButton) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousemove", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center font-semibold text-[10px] tracking-wider text-white"
        animate={{
          x: mousePosition.x - (cursorType === "view" ? 32 : cursorType === "pointer" ? 22 : 16),
          y: mousePosition.y - (cursorType === "view" ? 32 : cursorType === "pointer" ? 22 : 16),
          width: cursorType === "view" ? 64 : cursorType === "pointer" ? 44 : 32,
          height: cursorType === "view" ? 64 : cursorType === "pointer" ? 44 : 32,
          backgroundColor:
            cursorType === "view"
              ? "rgba(2, 132, 199, 0.9)"
              : cursorType === "pointer"
              ? "rgba(14, 165, 233, 0.2)"
              : "rgba(0, 0, 0, 0)",
          borderColor:
            cursorType === "view"
              ? "rgba(0, 0, 0, 0)"
              : cursorType === "pointer"
              ? "rgba(2, 132, 199, 0.6)"
              : "rgba(15, 23, 42, 0.35)",
          borderWidth: cursorType === "view" ? 0 : 1.5,
          scale: 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
        style={{
          borderRadius: "50%",
        }}
      >
        {cursorType === "view" && <span>VIEW</span>}
        {cursorType === "drag" && <span>DRAG</span>}
      </motion.div>

      {/* Center Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-sky-600"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorType === "view" ? 0 : 1,
          scale: cursorType === "pointer" ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 600,
        }}
      />
    </>
  );
}
