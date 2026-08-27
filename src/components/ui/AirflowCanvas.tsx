"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  thickness: number;
  angle: number;
}

export default function AirflowCanvas({
  className = "",
  particleCount = 35,
  color = "rgba(2, 132, 199, 0.4)",
  direction = "right",
}: {
  className?: string;
  particleCount?: number;
  color?: string;
  direction?: "right" | "left" | "vortex";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Initialize particles (aerodynamic streamlines)
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 80 + 30,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.15,
      thickness: Math.random() * 1.5 + 0.5,
      angle: direction === "vortex" ? Math.random() * Math.PI * 2 : (Math.random() - 0.5) * 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();
        const startX = p.x;
        const startY = p.y;
        
        // Calculate smooth curved tail
        const endX = startX - (direction === "left" ? -p.length : p.length);
        const endY = startY + Math.sin(p.x * 0.01) * 6;

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, color.replace("0.4", `${p.opacity}`));
        gradient.addColorStop(1, "rgba(2, 132, 199, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.thickness;
        ctx.lineCap = "round";

        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(
          (startX + endX) / 2,
          startY + Math.cos(p.x * 0.015) * 8,
          endX,
          endY
        );
        ctx.stroke();

        // Update position
        if (direction === "left") {
          p.x -= p.speed;
          if (p.x < -p.length) p.x = width + p.length;
        } else {
          p.x += p.speed;
          if (p.x > width + p.length) p.x = -p.length;
        }

        p.y += Math.sin(p.x * 0.008) * 0.3;
        if (p.y > height + 20) p.y = -20;
        if (p.y < -20) p.y = height + 20;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, color, direction]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}
