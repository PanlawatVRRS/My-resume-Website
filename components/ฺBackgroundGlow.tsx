'use client';

import { useEffect } from 'react';

export default function BackgroundGlow() {
  useEffect(() => {
    const targetPos = { x: -1000, y: -1000 };
    const currentPos = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      // 💡 ใช้ clientX/Y ร่วมกับ requestAnimationFrame
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
    };

    let animationFrameId: number;

    const render = () => {
      const ease = 0.15; // ปรับความไวขึ้นเล็กน้อย (0.1 -> 0.15) เพื่อลดอาการตามเมาส์ไม่ทัน

      currentPos.x += (targetPos.x - currentPos.x) * ease;
      currentPos.y += (targetPos.y - currentPos.y) * ease;

      // 📌 ส่งค่าเข้า CSS Variables
      document.documentElement.style.setProperty('--mouse-x', `${currentPos.x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${currentPos.y}px`);

      animationFrameId = requestAnimationFrame(render);
    };

    // ติดตั้ง Event ที่ window และรับฟังแม้เมาส์จะออกจากกึ่งกลางหน้าจอ
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
}