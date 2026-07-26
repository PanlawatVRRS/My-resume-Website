"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { profile, navLinks, contactBtnLabel } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const links = navLinks[lang] || [];
  const [activeSection, setActiveSection] = useState<string>("#top");

  const updateActiveSection = useCallback(() => {
    if (!links.length) return;
    const sectionElements = links
      .map((l) => document.querySelector(l.href))
      .filter((s): s is Element => s !== null);

    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

    let currentActive = links[0]?.href || "#top";
    for (const section of sectionElements) {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;

      if (scrollPosition >= top && scrollPosition <= bottom) {
        currentActive = `#${section.id}`;
        break;
      }
    }
    setActiveSection(currentActive);
  }, [links]);

  useEffect(() => {
    updateActiveSection();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((s): s is Element => s !== null);

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, [lang, links, updateActiveSection]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
  };

  return (
    <header className="fixed top-[29px] left-0 right-0 z-40 border-b border-white/20 dark:border-white/10 bg-white/15 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300">
      {/* Specular Edge Glow Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3.5">
        {/* Logo */}
        <motion.a
          href="#top"
          onClick={(e) => handleScroll(e, "#top")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="font-mono text-sm font-semibold tracking-wide text-ink transition-colors duration-300 hover:text-accent drop-shadow-sm"
        >
          {profile.navTitle || "Resume"}
          <span className="text-accent font-bold">.</span>
        </motion.a>

        {/* เมนูหลัก Section */}
        <nav className="hidden gap-2 font-mono text-xs uppercase tracking-widest sm:flex">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className={`relative flex items-center justify-center px-3.5 py-1.5 transition-colors duration-200 ${
                  isActive ? "text-accent font-semibold" : "text-ink-soft/80 hover:text-ink font-normal"
                }`}
              >
                {isActive && (
                  <motion.div
                    key={`nav-pill-${lang}-${l.href}`}
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full border border-white/30 dark:border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-md shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 600,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 block text-center">
                  {l.label}
                </span>
              </motion.a>
            );
          })}
        </nav>

        {/* สวิตช์ภาษา & ปุ่ม Contact */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Switcher Pill */}
          <div className="relative flex items-center gap-0.5 rounded-full border border-white/25 dark:border-white/15 bg-white/10 dark:bg-white/5 p-1 font-mono text-xs uppercase tracking-wider backdrop-blur-md shadow-inner">
            {/* ปุ่ม TH */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLang("th")}
              className={`relative z-10 px-2.5 py-0.5 transition-colors duration-200 ${
                lang === "th" ? "text-accent font-semibold" : "text-ink-soft/70 hover:text-ink"
              }`}
            >
              {lang === "th" && (
                <motion.div
                  key="lang-pill-th"
                  layoutId="activeLang"
                  className="absolute inset-0 rounded-full border border-white/30 bg-white/25 dark:bg-white/15 shadow-xs"
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                />
              )}
              TH
            </motion.button>

            <span className="text-white/20 text-[10px] select-none">/</span>

            {/* ปุ่ม EN */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLang("en")}
              className={`relative z-10 px-2.5 py-0.5 transition-colors duration-200 ${
                lang === "en" ? "text-accent font-semibold" : "text-ink-soft/70 hover:text-ink"
              }`}
            >
              {lang === "en" && (
                <motion.div
                  key="lang-pill-en"
                  layoutId="activeLang"
                  className="absolute inset-0 rounded-full border border-white/30 bg-white/25 dark:bg-white/15 shadow-xs"
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                />
              )}
              EN
            </motion.button>
          </div>

          {/* ปุ่ม Contact Glass Pill */}
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.92 }}
            className={`relative overflow-hidden rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-accent hover:shadow-accent/20 ${
              activeSection === "#contact"
                ? "border-accent text-accent bg-accent/15 shadow-accent/10"
                : "border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 text-ink hover:text-accent"
            }`}
          >
            <span className="relative z-10 block">
              {contactBtnLabel[lang]}
            </span>
          </motion.a>
        </div>
      </div>
    </header>
  );
}