'use client';

import { use, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "@/components/Footer";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    } 
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = use(params);
  const { lang, setLang } = useLanguage();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentIndex = useMemo(() => {
    return projects.findIndex((p) => p.id === id);
  }, [id]);

  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const projectData = project as any;

  useEffect(() => {
    setCurrentImgIndex(0);
    setSelectedImage(null);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const prevProject = useMemo(() => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    return projects[prevIdx];
  }, [currentIndex]);

  const nextProject = useMemo(() => {
    const nextIdx = (currentIndex + 1) % projects.length;
    return projects[nextIdx];
  }, [currentIndex]);

  const sections = {
    overview: project.showSections?.overview ?? true,
    goals: project.showSections?.goals ?? true,
    role: projectData.showSections?.role ?? true,
    challenges: project.showSections?.challenges ?? true,
    results: project.showSections?.results ?? true,
    learnings: project.showSections?.learnings ?? true,
    futurePlans: project.showSections?.futurePlans ?? true,
  };

  const shouldShowSourceCode = Boolean(project.href && project.showSourceCode !== false);
  const currentPdfUrl = project.pdfUrl?.[lang] || project.pdfUrl?.['en'] || project.pdfUrl?.['th'];
  const shouldShowPDF = Boolean(project.showPDF && currentPdfUrl);

  const rawRole = projectData.role;
  const roleDescription: string = 
    typeof rawRole === 'string' 
      ? rawRole 
      : (rawRole?.[lang] || rawRole?.['en'] || '');

  const responsibilitiesList: string[] = 
    projectData.responsibilities?.[lang] || projectData.responsibilities?.['en'] || [];

  const challengesList: string[] = project.challenges?.[lang] || project.challenges?.['en'] || [];
  const resultsList: string[] = project.results?.[lang] || project.results?.['en'] || [];
  const learningsList: string[] = project.learnings?.[lang] || project.learnings?.['en'] || [];
  const futurePlansList: string[] = project.futurePlans?.[lang] || project.futurePlans?.['en'] || [];

  const imagesPerPage = 3;
  const totalImages = project.images?.length || 0;
  
  const visibleImages = useMemo(() => {
    if (!project.images) return [];
    return project.images.slice(currentImgIndex, currentImgIndex + imagesPerPage);
  }, [project.images, currentImgIndex]);

  const handlePrevImages = () => {
    setCurrentImgIndex((prev) => Math.max(0, prev - imagesPerPage));
  };

  const handleNextImages = () => {
    setCurrentImgIndex((prev) =>
      Math.min(totalImages - imagesPerPage, prev + imagesPerPage)
    );
  };

  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="mx-auto max-w-5xl px-6 py-16"
      >
        {/* Top Navigation Bar */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-between gap-4 border-b border-line/60 pb-6 font-mono text-xs">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-accent"
          >
            ← {lang === 'th' ? 'กลับไปหน้าหลัก' : 'Back to Home'}
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-ink-soft">
              <Link
                href={`/projects/${prevProject.id}`}
                className="transition-colors hover:text-accent"
                title={prevProject.name[lang] || prevProject.name['en']}
              >
                ← {lang === 'th' ? 'ก่อนหน้า' : 'Prev'}
              </Link>
              <span className="text-line-strong">/</span>
              <Link
                href={`/projects/${nextProject.id}`}
                className="transition-colors hover:text-accent"
                title={nextProject.name[lang] || nextProject.name['en']}
              >
                {lang === 'th' ? 'ถัดไป' : 'Next'} →
              </Link>
            </div>

            <div className="flex items-center rounded-lg border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md p-0.5">
              <button
                onClick={() => setLang('th')}
                className={`px-2 py-1 font-mono text-[11px] rounded-md transition-all ${
                  lang === 'th'
                    ? 'bg-accent text-white font-semibold shadow-sm'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                TH
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 font-mono text-[11px] rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-accent text-white font-semibold shadow-sm'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Header Spec Section */}
            <div className="mt-8 border-b border-dashed border-line pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  // PROJECT_SPEC :: {project.id}
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  {shouldShowPDF && currentPdfUrl && (
                    <a
                      href={currentPdfUrl}
                      download={`${project.id}-spec-${lang}.pdf`}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl px-4 py-2 font-mono text-xs text-ink shadow-lg shadow-black/5 transition-all hover:border-accent/50 hover:text-accent"
                    >
                      <span className="relative z-10">{lang === 'th' ? 'ดาวน์โหลด PDF' : 'Download Spec PDF'}</span>
                      <span className="relative z-10 text-accent">↓</span>
                    </a>
                  )}

                  {shouldShowSourceCode && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl px-4 py-2 font-mono text-xs text-ink shadow-lg shadow-black/5 transition-all hover:border-accent/50 hover:text-accent"
                    >
                      <span className="relative z-10">{lang === 'th' ? 'ดู Source Code' : 'View Source Code'}</span>
                      <span className="relative z-10 text-accent">↗</span>
                    </a>
                  )}
                </div>
              </div>

              <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
                {project.name[lang] || project.name['en']}
              </h1>

              <p className="mt-3 font-body text-base text-ink-soft">
                {project.description[lang] || project.description['en']}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-sm px-2.5 py-1 font-mono text-[11px] text-ink-soft shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview & Goals Grid */}
            {(sections.overview || sections.goals) && (
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {sections.overview && project.overview && (
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                    <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                      // {lang === 'th' ? 'ความสำคัญและภาพรวม' : 'Overview & Impact'}
                    </h2>
                    <p className="relative z-10 mt-3 font-body text-sm leading-relaxed text-ink-soft">
                      {project.overview[lang] || project.overview['en']}
                    </p>
                  </div>
                )}

                {sections.goals && project.goals && (
                  <div className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                    <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                      // {lang === 'th' ? 'เป้าหมายหลัก' : 'Key Objectives'}
                    </h2>
                    <p className="relative z-10 mt-3 font-body text-sm leading-relaxed text-ink-soft">
                      {project.goals[lang] || project.goals['en']}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Role & Responsibilities Section */}
            {sections.role && (roleDescription || responsibilitiesList.length > 0) && (
              <div className="mt-8 group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                  // {lang === 'th' ? 'บทบาทและหน้าที่ความรับผิดชอบ' : 'Role & Responsibilities'}
                </h2>
                
                {roleDescription && (
                  <p className="relative z-10 mt-3 font-body text-sm leading-relaxed text-ink-soft">
                    <span className="font-mono text-xs text-accent">
                      {lang === 'th' ? 'ตำแหน่ง/บทบาท: ' : 'Role: '}
                    </span>
                    {roleDescription}
                  </p>
                )}

                {responsibilitiesList.length > 0 && (
                  <ul className="relative z-10 mt-4 space-y-2.5">
                    {responsibilitiesList.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                        <span className="font-mono text-xs font-semibold text-accent">◈</span>
                        <span className="font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Challenges Section */}
            {sections.challenges && challengesList.length > 0 && (
              <div className="mt-8 group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                  // {lang === 'th' ? 'ความท้าทายและข้อจำกัดเชิงเทคนิค' : 'Challenges & Constraints'}
                </h2>
                <ul className="relative z-10 mt-4 space-y-2.5">
                  {challengesList.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-mono text-xs font-semibold text-accent">//</span>
                      <span className="font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results Section */}
            {sections.results && resultsList.length > 0 && (
              <div className="mt-8 group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                  // {lang === 'th' ? 'ผลลัพธ์และความสำเร็จ' : 'Key Results & Impact'}
                </h2>
                <ul className="relative z-10 mt-4 space-y-2.5">
                  {resultsList.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-mono text-xs font-semibold text-accent">✓</span>
                      <span className="font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Learnings Section */}
            {sections.learnings && learningsList.length > 0 && (
              <div className="mt-8 group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                  // {lang === 'th' ? 'สิ่งที่ได้เรียนรู้และทักษะที่ใช้' : 'Key Takeaways & Learnings'}
                </h2>
                <ul className="relative z-10 mt-4 space-y-2.5">
                  {learningsList.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-mono text-xs text-accent">0{idx + 1}.</span>
                      <span className="font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Roadmap Section */}
            {sections.futurePlans && futurePlansList.length > 0 && (
              <div className="mt-8 group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h2 className="relative z-10 font-mono text-sm font-bold uppercase tracking-wider text-ink">
                  // {lang === 'th' ? 'แผนการพัฒนาในอนาคต' : 'Future Roadmap & Next Steps'}
                </h2>
                <ul className="relative z-10 mt-4 space-y-2.5">
                  {futurePlansList.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-mono text-xs font-semibold text-accent">→</span>
                      <span className="font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mt-12">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-ink">
                    // {lang === 'th' ? 'ภาพประกอบโปรเจกต์' : 'Project Screenshots'}
                  </h2>

                  {totalImages > imagesPerPage && (
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <button
                        onClick={handlePrevImages}
                        disabled={currentImgIndex === 0}
                        className="rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md px-3 py-1 text-ink transition-all hover:border-accent hover:text-accent disabled:opacity-30"
                      >
                        ←
                      </button>
                      <span className="text-ink-soft">
                        {Math.floor(currentImgIndex / imagesPerPage) + 1} / {Math.ceil(totalImages / imagesPerPage)}
                      </span>
                      <button
                        onClick={handleNextImages}
                        disabled={currentImgIndex + imagesPerPage >= totalImages}
                        className="rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md px-3 py-1 text-ink transition-all hover:border-accent hover:text-accent disabled:opacity-30"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {visibleImages.map((imgSrc: string, index: number) => {
                      const actualIndex = currentImgIndex + index;
                      return (
                        <motion.div
                          key={`${imgSrc}-${actualIndex}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25 }}
                          onClick={() => setSelectedImage(imgSrc)}
                          className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-3 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/60"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />
                          <Image
                            src={imgSrc}
                            alt={`${project.name[lang] || project.name['en']} screenshot ${actualIndex + 1}`}
                            fill
                            className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-lg border border-white/30 bg-black/40 backdrop-blur-md font-mono text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                            🔍︎
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Project Pagination Footer Cards */}
        <motion.div variants={fadeInUp} className="mt-16 border-t border-dashed border-line pt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/projects/${prevProject.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
              <span className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-ink-soft group-hover:text-accent">
                ← {lang === 'th' ? 'โปรเจกต์ก่อนหน้า' : 'Previous Project'}
              </span>
              <h3 className="relative z-10 mt-2 font-display text-base font-semibold text-ink group-hover:text-accent">
                {prevProject.name[lang] || prevProject.name['en']}
              </h3>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl p-6 text-right shadow-xl shadow-black/5 transition-all duration-500 hover:border-accent/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-50 pointer-events-none" />
              <span className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-ink-soft group-hover:text-accent">
                {lang === 'th' ? 'โปรเจกต์ถัดไป' : 'Next Project'} →
              </span>
              <h3 className="relative z-10 mt-2 font-display text-base font-semibold text-ink group-hover:text-accent">
                {nextProject.name[lang] || nextProject.name['en']}
              </h3>
            </Link>
          </div>
        </motion.div>
      </motion.main>
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl p-4 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/40 font-mono text-sm text-white backdrop-blur-md transition-colors hover:border-accent hover:text-accent"
                title="Close"
              >
                ✕
              </button>
              <div className="relative h-[80vh] w-[85vw]">
                <Image
                  src={selectedImage}
                  alt="Full preview"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}