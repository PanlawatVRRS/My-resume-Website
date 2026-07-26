'use client';

import { useRef } from "react";
import { profile } from "@/data/resume";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const { lang } = useLanguage();

  // Motion Variables สำหรับเอฟเฟกต์ 3D Tilt ตามทิศทางเมาส์
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24">
      {/* Top Meta Indicator */}
      <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-3">
        <span className="font-mono text-xs tracking-widest uppercase text-accent">
          // Portfolio / Résumé
        </span>
        <span className="shrink-0 font-mono text-xs text-ink-soft">
          {profile.revision}
        </span>
      </div>

      {/* ส่วนหัวหลัก */}
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          {/* Status Badge Glass Capsule */}
          <div className="reveal mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/25 dark:border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {profile.availability[lang]}
            </span>
          </div>

          <h1 className="reveal font-display text-4xl font-bold tracking-tight leading-tight text-ink sm:text-6xl drop-shadow-sm">
            {profile.name[lang]}
          </h1>
          <p
            className="reveal mt-3 font-mono text-sm uppercase tracking-[0.2em] text-accent sm:text-base font-semibold"
            style={{ animationDelay: "0.08s" }}
          >
            {profile.role[lang]}
          </p>
        </div>

        {/* 3D Interactive Profile Avatar (Circular Liquid Glass with Subtle RGB Glow) */}
        <div 
          className="reveal relative flex-shrink-0 flex items-center justify-center [perspective:1000px]"
          style={{ animationDelay: "0.15s" }}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative cursor-pointer group flex items-center justify-center p-2"
          >
            {/* Subtle RGB Ambient Glow Effect (ปรับขยายแสงเวลา Hover ให้กว้างขึ้น) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500/20 via-indigo-500/20 to-cyan-400/20 blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none" />

            {/* Circular Liquid Glass Frame (~180px) */}
            <div className="relative h-[180px] w-[180px] flex items-center justify-center rounded-full border border-white/40 dark:border-white/20 bg-white/20 dark:bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] overflow-hidden [transform:translateZ(0px)] transition-all duration-500 hover:border-white/60 hover:shadow-2xl">
              
              {/* Refraction Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/15 opacity-80 pointer-events-none" />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30 pointer-events-none" />

              {/* Avatar Image with 3D Depth */}
              <motion.div 
                className="relative h-full w-full flex items-center justify-center p-3 z-0"
                style={{ transform: "translateZ(30px)" }}
              >
                <Image 
                  src="/Pan1.png" 
                  alt={profile.name[lang]} 
                  fill
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glass Bar Matrix (Title Cells) */}
      <div
        className="reveal mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] sm:grid-cols-4"
        style={{ animationDelay: "0.24s" }}
      >
        <TitleCell label="Location" value={profile.location[lang]} />
        <TitleCell label="Availability" value={profile.availability[lang]} accent />
        <TitleCell label="Contact" value={profile.email} isEmail />
        <TitleCell label="Experience" value="1+" />
      </div>

      {/* Social Links Glass Pills */}
      <div
        className="reveal mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest"
        style={{ animationDelay: "0.3s" }}
      >
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl border border-white/25 dark:border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-md px-4 py-2 text-ink-soft transition-all duration-300 hover:border-accent/60 hover:bg-white/20 hover:text-accent hover:shadow-accent/20"
          >
            <span>{s.label}</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function TitleCell({
  label,
  value,
  accent,
  isEmail,
}: {
  label: string;
  value: string;
  accent?: boolean;
  isEmail?: boolean;
}) {
  return (
    <div className="flex flex-col justify-between space-y-1">
      <p className="font-mono text-[0.65rem] uppercase tracking-widest text-accent font-semibold">
        // {label}
      </p>
      {isEmail ? (
        <a 
          href={`mailto:${value}`}
          className="truncate font-mono text-xs font-medium text-ink hover:text-accent transition-colors"
          title={value}
        >
          {value}
        </a>
      ) : (
        <p
          className={`truncate text-sm font-medium ${
            accent ? "text-emerald-500 dark:text-emerald-400 font-semibold" : "text-ink"
          }`}
        >
          {value}
        </p>
      )}
    </div>
  );
}