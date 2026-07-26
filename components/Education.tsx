'use client';

import { education } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import SectionLabel from "./SectionLabel";

export default function Education() {
  const { lang } = useLanguage();

  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-20">
      <SectionLabel 
        index="05" 
        title={lang === 'th' ? 'ประวัติการศึกษา' : 'Education'} 
      />

      <div className="space-y-6">
        {education.map((e, index) => {
          // ใช้ fallback ป้องกันกรณีไม่มีแปลภาษาบางจุด
          const schoolName = e.school[lang] || e.school['en'];
          const degreeName = e.degree[lang] || e.degree['en'];
          const detailText = e.detail?.[lang] || e.detail?.['en'];
          const periodText = e.period[lang] || e.period['en'];

          return (
            <div
              key={e.school['en'] || index}
              className="group relative overflow-hidden rounded-3xl border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-white/50 hover:shadow-2xl hover:-translate-y-0.5"
            >
              {/* Liquid Refraction Layer */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-60 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-ink drop-shadow-sm transition-colors duration-300 group-hover:text-accent">
                    {schoolName}
                  </h3>
                  <p className="font-body text-sm font-medium text-ink-soft">
                    {degreeName}
                  </p>
                  
                  {detailText && (
                    <div className="pt-2">
                      <span className="inline-block rounded-lg border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent backdrop-blur-md">
                        // {detailText}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-sm" />
                  <span className="font-mono text-xs font-medium text-accent/90 sm:text-right">
                    {periodText}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}