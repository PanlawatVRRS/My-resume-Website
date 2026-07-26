'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { profile, certifications } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import SectionLabel from "./SectionLabel";

export default function About() {
  const { lang } = useLanguage();

  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    href?: string;
  } | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  // Liquid Glass Modal Preview
  const modalContent = selectedCert ? (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xl transition-all duration-300 animate-in fade-in"
      onClick={() => setSelectedCert(null)}
    >
      <div 
        className="group relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/30 dark:border-white/15 bg-white/20 dark:bg-white/10 p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Specular Liquid Highlights */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 opacity-70 pointer-events-none" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30 pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              // [ CERTIFICATE_LIQUID_VIEW ]
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedCert(null)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Certificate Title */}
        <h3 className="relative z-10 mt-5 font-display text-xl font-bold tracking-wide text-ink drop-shadow-sm">
          {selectedCert.title}
        </h3>

        {/* Content Display */}
        <div className="relative z-10 mt-5">
          {selectedCert.href ? (
            <div className="space-y-5">
              <div className="relative flex max-h-[60vh] min-h-[260px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-black/30 backdrop-blur-md p-3 shadow-inner">
                <img
                  src={selectedCert.href}
                  alt={selectedCert.title}
                  className="max-h-[55vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[11px] font-medium tracking-wider text-accent/90">
                  ● SYSTEM_VERIFIED
                </span>
                <a
                  href={selectedCert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/30 bg-white/15 dark:bg-white/10 backdrop-blur-xl px-5 py-2 font-mono text-xs text-ink shadow-lg transition-all duration-300 hover:bg-accent hover:text-black hover:border-accent hover:shadow-accent/25"
                >
                  <span>{lang === 'th' ? 'เปิดไฟล์ขนาดจริง' : 'Open Full Size'}</span>
                  <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/30 bg-white/5 py-14 text-center font-mono text-sm text-ink-soft backdrop-blur-md">
              <p>{lang === 'th' ? '— ไม่มีตัวอย่างไฟล์ใบรับรอง —' : '— NO PREVIEW AVAILABLE —'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="01" title={lang === 'th' ? 'เกี่ยวกับ' : 'About'} />
      
      <div className="grid gap-8 sm:grid-cols-3">
        {/* Main Bio Glass Card */}
        <div className="group relative sm:col-span-2 overflow-hidden rounded-3xl border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 backdrop-blur-2xl p-7 sm:p-9 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-white/50 hover:shadow-2xl">
          {/* Liquid Refraction Layer */}
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-60 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />

          <p className="relative z-10 font-body text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.summary[lang]}
            {lang === 'th' 
              ? ' เชื่อว่าประสบการณ์การใช้งานที่ดีเริ่มจาก โค้ดที่ตอบโจทย์การใช้งานของผู้ใช้ การทำงานให้ความสำคัญกับการสื่อสารภายในทีมและทีมฝั่งธุรกิจพอๆ กับคุณภาพของโค้ด' 
              : ' Believes that good code should be clean, maintainable, and pragmatic. Values strong team communication and business alignment as much as code quality.'}
          </p>
        </div>

        {/* Certifications Glass Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 backdrop-blur-2xl p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-white/50 hover:shadow-2xl">
          {/* Liquid Refraction Layer */}
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-60 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />

          <p className="relative z-10 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
            // {lang === 'th' ? 'ใบรับรอง / Certifications' : 'Certifications'}
          </p>

          <ul className="relative z-10 mt-5 space-y-3.5">
            {certifications.map((item: any, index: number) => {
              const isObject = typeof item === 'object' && item !== null;
              
              let displayTitle = '';
              if (isObject) {
                if (typeof item.title === 'object' && item.title !== null) {
                  displayTitle = item.title[lang] || item.title['en'] || '';
                } else {
                  displayTitle = item.title || '';
                }
              } else {
                displayTitle = item;
              }

              const href = isObject ? item.href : undefined;

              return (
                <li key={index} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  
                  <button
                    type="button"
                    onClick={() => setSelectedCert({ title: displayTitle, href })}
                    className="group/btn inline-flex items-center gap-2 text-left transition-all hover:text-accent focus:outline-none"
                  >
                    <span className="font-body transition-colors group-hover/btn:underline decoration-accent/50 underline-offset-4">
                      {displayTitle}
                    </span>
                    {href && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 font-mono text-[10px] text-accent backdrop-blur-md transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:border-accent">
                        🔍︎
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {mounted && modalContent && createPortal(modalContent, document.body)}
    </section>
  );
}