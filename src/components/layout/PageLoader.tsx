"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Quick, high-precision loading timer (approx 800ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + 15;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F1932] text-white select-none pointer-events-auto"
        >
          {/* Subtle background tech grid */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Airflow Logo Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-20 h-20 mb-6"
            >
              <Image
                src="/logo.png"
                alt="Eurocon Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-1"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
                <span className="text-[#EB0311]">EURO</span><span className="text-[#010A6D]">CON</span> <span className="text-slate-400 font-light">SYSTEM LLP</span>
              </h1>
              <p className="text-xs tracking-[0.25em] text-slate-400 uppercase">
                Engineered Airflow Solutions
              </p>
            </motion.div>

            {/* Progress Meter */}
            <div className="w-48 sm:w-64 mt-8 space-y-2">
              <div className="h-[2px] w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-slate-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>SYSTEM INIT</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
