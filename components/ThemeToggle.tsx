"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // ☀️ เปลี่ยนเป็น Light Mode
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      // 🌙 เปลี่ยนเป็น Dark Mode
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // ป้องกัน Hydration mismatch
  if (!mounted) {
    return <div className="h-10 w-20" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="group relative flex h-10 w-20 cursor-pointer items-center rounded-full border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 p-1 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-white/50 hover:shadow-xl focus:outline-none"
    >
      {/* Refraction Ring Highlight */}
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />

      {/* Floating Glass Thumb Indicator */}
      <motion.div
        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        animate={{
          x: isDark ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Moon size={16} className="drop-shadow-sm" /> : <Sun size={16} className="drop-shadow-sm" />}
        </motion.div>
      </motion.div>
    </button>
  );
}