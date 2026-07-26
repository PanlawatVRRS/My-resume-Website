"use client";

import React from "react";
import { profile } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-white/20 dark:border-white/10 bg-white/15 dark:bg-white/5 px-6 py-8 backdrop-blur-2xl shadow-[0_-4px_24px_0_rgba(0,0,0,0.06)]">
      {/* Refraction Top Highlight Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-slate-600 dark:text-slate-400">
        
        {/* Left: Copyright & Stack Info */}
        <div className="flex flex-col gap-1">
          <span className="drop-shadow-sm">
            © {new Date().getFullYear()} {profile.name[lang]} <span className="text-accent font-semibold">// All Rights Reserved</span>
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-500">
            Built with Next.js, React & Tailwind CSS
          </span>
        </div>

        {/* Right: Powered By + Back to Top */}
        <div className="flex items-center justify-between sm:justify-end gap-6">
          <div className="flex items-center gap-2.5">
            <span className="opacity-70">Powered by</span>
            <Image 
              src="/Next.js_logo.png" 
              alt="Next.js Logo" 
              width={70} 
              height={15} 
              className="object-contain invert dark:invert-0 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:text-accent hover:-translate-y-1"
          >
            <HiArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}