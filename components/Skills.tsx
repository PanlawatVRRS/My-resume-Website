'use client';

import React from "react";
import { skills } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import SectionLabel from "./SectionLabel";

// Import Icons จาก react-icons/di (Devicons)
import {
  DiReact,
  DiJavascript1,
  DiPython,
  DiJava,
  DiDocker,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiGit,
  DiMysql,
  DiMongodb,
  DiRedis,
  DiLinux,
} from "react-icons/di";

// Import Icons จาก react-icons/si (Simple Icons)
import {
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiJenkins,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

// Map สกิลเข้ากับ Icon Component + Color Class
const TECH_ICONS: Record<string, { icon: React.ElementType; colorClass: string }> = {
  "Next.js": { icon: SiNextdotjs, colorClass: "text-slate-900 dark:text-white" },
  "React": { icon: DiReact, colorClass: "text-sky-600 dark:text-[#61DAFB]" },
  "Vue.js": { icon: SiVuedotjs, colorClass: "text-emerald-600 dark:text-[#4FC08D]" },
  "Vue": { icon: SiVuedotjs, colorClass: "text-emerald-600 dark:text-[#4FC08D]" },
  "TypeScript": { icon: SiTypescript, colorClass: "text-blue-700 dark:text-[#3178C6]" },
  "JavaScript": { icon: DiJavascript1, colorClass: "text-amber-600 dark:text-[#F7DF1E]" },
  "Python": { icon: DiPython, colorClass: "text-sky-700 dark:text-[#3776AB]" },
  "Java": { icon: DiJava, colorClass: "text-red-600 dark:text-[#EA2D2E]" },
  "Docker": { icon: DiDocker, colorClass: "text-sky-600 dark:text-[#2496ED]" },
  "PostgreSQL": { icon: DiPostgresql, colorClass: "text-blue-700 dark:text-[#4169E1]" },
  "Node.js": { icon: SiNodedotjs, colorClass: "text-emerald-700 dark:text-[#5FA04E]" },
  "Express": { icon: SiExpress, colorClass: "text-slate-900 dark:text-white" },
  "Express.js": { icon: SiExpress, colorClass: "text-slate-900 dark:text-white" },
  "Jenkins": { icon: SiJenkins, colorClass: "text-red-600 dark:text-[#D24939]" },
  "Linux": { icon: DiLinux, colorClass: "text-amber-600 dark:text-[#FCC624]" },
  "Tailwind CSS": { icon: SiTailwindcss, colorClass: "text-cyan-600 dark:text-[#06B6D4]" },
  "HTML5": { icon: DiHtml5, colorClass: "text-orange-600 dark:text-[#E34F26]" },
  "CSS3": { icon: DiCss3, colorClass: "text-blue-600 dark:text-[#1572B6]" },
  "CSS": { icon: DiCss3, colorClass: "text-blue-600 dark:text-[#1572B6]" },
  "Git": { icon: DiGit, colorClass: "text-orange-600 dark:text-[#F05032]" },
  "GitHub": { icon: SiGithub, colorClass: "text-slate-900 dark:text-white" },
  "MySQL": { icon: DiMysql, colorClass: "text-sky-700 dark:text-[#4479A1]" },
  "MongoDB": { icon: DiMongodb, colorClass: "text-emerald-600 dark:text-[#47A248]" },
  "Redis": { icon: DiRedis, colorClass: "text-red-600 dark:text-[#FF4438]" },
};

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="02" title={lang === 'th' ? 'ทักษะ' : 'Skills'} />
      
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group, idx) => {
          const groupTitle = typeof group.group === 'object' 
            ? group.group[lang] || group.group['en'] 
            : group.group;

          const isOtherCategory = 
            groupTitle?.toLowerCase().includes('other') || 
            groupTitle?.includes('อื่น') || 
            idx === skills.length - 1;

          return (
            <div 
              key={groupTitle || idx} 
              className="relative overflow-hidden rounded-3xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 p-6 sm:p-7 shadow-md dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]"
            >
              {/* Category Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-200 dark:border-black/15 pb-3.5">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-accent">
                  // {groupTitle}
                </p>
                <span className="font-mono text-xs font-bold text-slate-950 dark:text-white">
              0{idx + 1}
            </span>
              </div>

              {/* Content Grid */}
              <div className="relative z-10 mt-6">
                {isOtherCategory ? (
                  /* 💥 UPDATED: บังคับตัวอักษรสีดำสนิท (text-slate-950) บนพื้นหลังสีเทาอ่อนขอบเข้ม
                     อ่านง่าย คมชัด 100% ไม่มี Hover Effect */
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-xl border border-slate-400 dark:border-black/20 bg-slate-200/90 dark:bg-black/10 px-3.5 py-2 font-mono text-xs font-bold text-slate-950 dark:text-slate-100 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  /* STATIC TECH ICONS: แสดงผลด้วย Icons แบบไม่มี Hover */
                  <div className="flex flex-wrap gap-3.5 items-center">
                    {group.items.map((item) => {
                      const iconData = TECH_ICONS[item];

                      return (
                        <div
                          key={item}
                          title={item}
                          className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300 dark:border-black/15 bg-slate-100 dark:bg-white/5 shadow-2xs p-3.5"
                        >
                          <div className="relative h-full w-full flex items-center justify-center">
                            {iconData ? (
                              <iconData.icon className={`h-9 w-9 ${iconData.colorClass}`} />
                            ) : (
                              <span className="font-mono text-xs font-bold uppercase text-slate-900 dark:text-accent">
                                {item.slice(0, 2)}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}