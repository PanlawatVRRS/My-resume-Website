'use client';

import { useState, useEffect } from 'react';

export default function DimensionRuler() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const handleScrollAndResize = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      
      setScrollPercent(Math.min(100, Math.max(0, progress)));
      setViewportWidth(window.innerWidth);
    };

    handleScrollAndResize();
    window.addEventListener('scroll', handleScrollAndResize, { passive: true });
    window.addEventListener('resize', handleScrollAndResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full overflow-hidden border-b border-white/20 dark:border-white/10 bg-white/15 dark:bg-white/5 py-1.5 font-mono text-[9px] text-ink-soft select-none backdrop-blur-2xl shadow-[0_4px_24px_0_rgba(0,0,0,0.08)]">
      {/* Refraction Top Highlight Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

      {/* 📐 Background Micro Hash Marks */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 8px), repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 32px)`,
          backgroundSize: '100% 5px',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat-x'
        }}
      />

      {/* 📏 Active Measurement Line with Glowing Pulse */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-accent shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-75 ease-out z-10"
        style={{ width: `${scrollPercent}%` }}
      >
        {/* Diamond Node Marker */}
        <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rotate-45 border border-white bg-accent shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 z-20">
        <span className="flex items-center gap-1 font-semibold text-accent drop-shadow-sm">
          <span>├</span> 00.0mm [ORIGIN]
        </span>

        <span className="hidden items-center gap-1 sm:inline-flex text-ink-soft/70">
          ├─ 25.0mm
        </span>

        {/* Displacement Glass Pill Badge */}
        <span className="hidden items-center gap-2 rounded-full border border-white/30 dark:border-white/15 bg-white/20 dark:bg-white/10 px-2.5 py-0.5 text-ink backdrop-blur-md shadow-sm md:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
          </span>
          DISPLACEMENT: <strong className="text-accent font-semibold">{scrollPercent.toFixed(1).padStart(5, '0')}%</strong>
        </span>

        <span className="hidden items-center gap-1 sm:inline-flex text-ink-soft/70">
          ├─ 75.0mm
        </span>

        <span className="flex items-center gap-1 font-semibold text-accent drop-shadow-sm">
          {viewportWidth > 0 ? `${viewportWidth}PX` : '100.0mm'} [BOUNDS] <span>┤</span>
        </span>
      </div>
    </div>
  );
}