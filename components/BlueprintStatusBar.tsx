'use client';

import { useState, useEffect } from 'react';

export default function BlueprintStatusBar() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <aside
      aria-label="System status"
      className="fixed bottom-4 right-5 z-40 hidden items-center gap-3.5 rounded-full border border-white/30 dark:border-white/15 bg-white/15 dark:bg-white/5 px-4 py-2 font-mono text-[11px] text-ink-soft backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-white/50 hover:shadow-xl md:flex pointer-events-auto"
    >
      {/* Specular Edge Line */}
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />

      {/* System Status Node */}
      <span className="relative z-10 flex items-center gap-2 font-semibold text-emerald-500 dark:text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </span>
        SYS.READY
      </span>

      <span className="relative z-10 text-white/20">|</span>

      {/* Mouse Coordinates */}
      <div className="relative z-10 flex items-center gap-2">
        <span>
          X: <strong className="font-semibold text-ink">{coords.x.toString().padStart(4, '0')}</strong>
        </span>
        <span>
          Y: <strong className="font-semibold text-ink">{coords.y.toString().padStart(4, '0')}</strong>
        </span>
      </div>

      <span className="relative z-10 text-white/20">|</span>

      {/* Live Time Indicator */}
      <span className="relative z-10 tracking-wider text-ink/90">
        {time || '00:00:00'} <span className="text-[9px] text-accent font-semibold">ICT</span>
      </span>

      <span className="relative z-10 text-white/20">|</span>

      {/* Scale Tag */}
      <span className="relative z-10 font-bold uppercase tracking-widest text-accent drop-shadow-sm">
        SCALE 1:1
      </span>
    </aside>
  );
}