'use client';

import { profile } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-20">
      <SectionLabel 
        index="06" 
        title={lang === 'th' ? 'ช่องทางการติดต่อ' : 'Contact'} 
      />

      {/* Main Glass Card */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 backdrop-blur-2xl p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:border-white/50 hover:shadow-2xl">
        {/* Ambient Glows & Refraction Layer */}
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-white/20 blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 opacity-60 pointer-events-none" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Header Text */}
          <div className="max-w-md">
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl drop-shadow-sm">
              {lang === 'th' ? 'สนใจร่วมงานกันไหม?' : 'Interested in working together?'}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {lang === 'th'
                ? 'ยินดีพูดคุยเรื่องโอกาสงานใหม่ สามารถติดต่อได้ดังช่องทางต่อไปนี้'
                : 'Open to discussing new job opportunities and can be contacted via the following channels.'}
            </p>
          </div>

          {/* Contact & Social Links */}
          <div className="flex w-full flex-col gap-3 font-mono text-sm sm:w-auto sm:min-w-[280px]">
            {/* Email Button */}
            <a
              href={`mailto:${profile.email}`}
              className="group/btn relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 dark:bg-white/10 backdrop-blur-xl px-6 py-3.5 text-center font-medium text-ink shadow-lg transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black hover:shadow-accent/25"
            >
              <span className="relative z-10">{profile.email}</span>
            </a>

            {/* LinkedIn & GitHub Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {profile.social?.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-white/25 dark:border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-md px-4 py-2.5 text-center text-xs text-ink-soft transition-all duration-300 hover:border-accent/60 hover:bg-white/20 hover:text-accent"
                >
                  <span className="relative z-10">LINKEDIN</span>
                  <span className="relative z-10 text-[10px] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                </a>
              )}
              {profile.social?.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-white/25 dark:border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-md px-4 py-2.5 text-center text-xs text-ink-soft transition-all duration-300 hover:border-accent/60 hover:bg-white/20 hover:text-accent"
                >
                  <span className="relative z-10">GITHUB</span>
                  <span className="relative z-10 text-[10px] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
                </a>
              )}
            </div>

            {/* Phone */}
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="mt-1 text-center font-mono text-xs text-ink-soft/80 transition-colors duration-300 hover:text-accent"
              >
                // {profile.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}