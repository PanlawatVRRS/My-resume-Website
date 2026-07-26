'use client';

import { experience } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-20">
      <SectionLabel 
        index="03" 
        title={lang === 'th' ? 'ประสบการณ์ — ประวัติ' : 'Experience — Revision Log'} 
      />

      {/* Timeline Container */}
      <ol className="relative space-y-8 border-l border-white/20 dark:border-white/10 ml-3 sm:ml-4 pl-6 sm:pl-8">
        {experience.map((job, idx) => (
          <li key={job.version} className="group relative">
            {/* Glowing Timeline Node */}
            <span className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-6 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-transform duration-300 group-hover:scale-125" />
            
            {/* Liquid Glass Card Item */}
            <div className="relative overflow-hidden rounded-3xl border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-white/50 hover:shadow-2xl">
              {/* Liquid Refraction Layer */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-60 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-white/15 pb-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    // {job.version}
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink drop-shadow-sm">
                    {job.role[lang]}
                  </h3>
                  <span className="text-sm font-medium text-ink-soft">
                    — {job.company[lang]}
                  </span>
                </div>

                <span className="font-mono text-xs text-accent/90">
                  {job.period[lang]}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="relative z-10 mt-4 space-y-2.5">
                {job.points[lang].map((p, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80 shadow-sm" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}