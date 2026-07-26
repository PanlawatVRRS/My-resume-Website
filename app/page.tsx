'use client';

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 0.99 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 0.8,
      staggerChildren: 0.1,
    },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
    containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="relative min-h-screen"
    >
      <Nav />

      {/* 
        ✨ ปรับการสลับภาษาให้ค่อยๆ Fade อย่างนุ่มนวล:
        - เพิ่ม duration เป็น 0.65s (จากเดิม 0.25s)
        - เปลี่ยนจุดเริ่มจาก opacity: 0.2 ช้าๆ ขึ้นมาที่ 1
        - ใช้ ease: [0.25, 0.1, 0.25, 1.0] (Cubic Bezier ชนิดค่อยๆ คลายตัว)
      */}
      <motion.main
        key={lang}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.65,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
        className="flex-1 pt-20 sm:pt-24"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="will-change-transform"
        >
          <Hero />
        </motion.div>

        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Skills /></AnimatedSection>
        <AnimatedSection><Experience /></AnimatedSection>
        <AnimatedSection><Projects /></AnimatedSection>
        <AnimatedSection><Education /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </motion.main>

      <Footer />
    </motion.div>
  );
}