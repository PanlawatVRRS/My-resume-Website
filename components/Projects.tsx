'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { useLanguage } from "@/context/LanguageContext";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <SectionLabel
          index="04"
          title={lang === 'th' ? 'โปรเจกต์ — ผลงานที่เคยทำ' : 'Featured Projects'}
        />

        {/* ปุ่มควบคุมการเลื่อน ซ้าย - ขวา */}
        <div className="flex items-center gap-2 font-mono">
          <button
            onClick={handlePrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md text-ink transition-all hover:border-accent hover:text-accent cursor-pointer"
            aria-label="Previous Projects"
          >
            ←
          </button>
          <span className="text-xs text-ink-soft px-2">
            {currentIndex + 1} / {maxIndex + 1}
          </span>
          <button
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md text-ink transition-all hover:border-accent hover:text-accent cursor-pointer"
            aria-label="Next Projects"
          >
            →
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ display: 'flex', width: `${(projects.length / itemsPerPage) * 100}%` }}
        >
          {projects.map((project) => {
            const canShowSource = Boolean(project.href && project.showSourceCode !== false);

            return (
              <div 
                key={project.id} 
                style={{ width: `${100 / projects.length}%` }}
                className="box-border px-3"
              >
                <motion.div
                  whileHover="hover"
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -6 }
                  }}
                  transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50 hover:shadow-accent/10"
                >
                  {/* 💧 Liquid Fluid Ambient Glow */}
                  <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-accent/30 pointer-events-none" />
                  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl transition-all duration-700 group-hover:scale-150 pointer-events-none" />

                  {/* 📐 Liquid Glass Reflective Highlight Line */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* 📐 Blueprint Crosshairs Animations */}
                  <div className="absolute top-2 left-2 z-20 pointer-events-none">
                    <motion.span
                      variants={{
                        initial: { rotate: 0, opacity: 0.3, color: "var(--ink-soft)" },
                        hover: { rotate: 90, opacity: 1, color: "var(--accent)" }
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-[10px] font-bold"
                    >
                      +
                    </motion.span>
                  </div>
                  <div className="absolute top-2 right-2 z-20 pointer-events-none">
                    <motion.span
                      variants={{
                        initial: { rotate: 0, opacity: 0.3, color: "var(--ink-soft)" },
                        hover: { rotate: -90, opacity: 1, color: "var(--accent)" }
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-[10px] font-bold"
                    >
                      +
                    </motion.span>
                  </div>

                  {/* 📝 Header & Main Content */}
                  <div className="relative z-10 flex-1">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-ink/80 bg-white/20 dark:bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
                        {project.tags[0] || 'PROJECT'}
                      </span>
                      <span className="font-mono text-[10px] text-ink-soft/60">
                        [{project.id}]
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                      {project.name[lang] || project.name['en']}
                    </h3>

                    <p className="mt-3 font-body text-xs leading-relaxed text-ink-soft">
                      {project.description[lang] || project.description['en']}
                    </p>
                  </div>

                  {/* 🏷️ Footer & Action Links */}
                  <div className="relative z-10 mt-6">
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] text-ink-soft transition-colors duration-200 group-hover:border-accent/30 group-hover:text-ink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/20 dark:border-white/10 pt-3 font-mono text-xs">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-accent font-medium transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <span>{lang === 'th' ? 'รายละเอียด' : 'Details'}</span>
                        <span>→</span>
                      </Link>

                      {canShowSource ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-ink-soft/80 transition-colors duration-200 hover:text-accent"
                        >
                          <span>Code</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <span className="text-[10px] text-ink-soft/40 uppercase tracking-wider font-mono">
                          // PRIVATE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 📐 Blueprint Dashed Outer Border Effect */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.98 },
                      hover: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute -inset-[2px] rounded-2xl border border-accent/40 border-dashed"
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}