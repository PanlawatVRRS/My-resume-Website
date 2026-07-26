export type Language = "th" | "en";

export const profile = {
  name: {
    th: "พัลวัฒน์ วีระรังสรรค์",
    en: "Panlawat Veerarangsan",
  },
  navTitle: "Panlawat",
  role: {
    th: "Full-Stack Developer",
    en: "Full-Stack Developer",
  },
  location: {
    th: "กรุงเทพฯ, ประเทศไทย",
    en: "Bangkok, Thailand",
  },
  summary: {
    th: "นักพัฒนาซอฟต์แวร์สาย Full-Stack ที่มุ่งเน้นการสร้างสรรค์ผลิตภัณฑ์ที่ใช้งานได้จริง",
    en: "Full-Stack Developer focused on building practical products that deliver real value.",
  },
  email: "Panlawat.vrrs@gmail.com",
  phone: "+66 82 415 9415",
  social: {
    linkedin: "https://www.linkedin.com/in/panlawat-veerarangsan-pan",
    github: "https://github.com/PanlawatVRRS",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/PanlawatVRRS" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/panlawat-veerarangsan-pan" },
  ],
  availability: {
    th: "ว่างรับงานใหม่ / Open to work",
    en: "Open to work",
  },
  
  revision: "REV. 2026",
  
};

export const skills = [
  {
    group: {
      th: "Frontend",
      en: "Frontend",
    },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    group: {
      th: "Backend",
      en: "Backend",
    },
    items: ["Python", "Node.js", "Express", "PostgreSQL"],
  },
  {
    group: {
      th: "Infra & Tools",
      en: "Infra & Tools",
    },
    items: ["Docker", "Jenkins", "Git", "GitHub", "Linux"],
  },
  {
    group: {
      th: "อื่น ๆ",
      en: "Others",
    },
    items: ["Canva", "Adobe Photoshop", "Adobe After Effects", "Adobe Premiere Pro", "Excel", "Word", "PowerPoint"],
  },
];

export const experience = [
  {
    version: "V 2.0",
    company: {
      th: "บริษัท เอซียู เพย์ (ไทยแลนด์) จํากัด",
      en: "ACU PAY (THAILAND) Co., Ltd.",
    },
    role: {
      th: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    period: {
      th: "02/09/2025 — ปัจจุบัน",
      en: "02/09/2025 — Present",
    },
    points: {
      th: [
        "Lead Coordinate API Integration: ผู้ดูแลหลักในการเชื่อมต่อ API สำหรับลูกค้ารายใหญ่อาทิเช่น (SF Cinema, Major Cineplex, PTG Energy) และรายย่อยตั้งแต่การส่งมอบ API Specification, รับ Requirements ร่วมกับผู้บริหาร, ประสานงานทีมภายในที่เกี่ยวข้อง จนถึงการ Support หลัง Go-live พร้อมเข้าพบลูกค้าเพื่อเสนอโซลูชันและเก็บ Requirement โดยตรง",
        "Workflow Optimization (CFR : ITMX-Portal): พัฒนาโปรแกรมจัดการฟอร์มส่งข้อมูลเส้นเงินสำหรับระบบ Central Fraud Registry (CFR) เพื่อจัดการและติดตามเส้นทางเงินของบัญชีม้า ตัดขั้นตอนที่ซ้ำซ้อน ช่วยเพิ่มประสิทธิภาพการสำเร็จเคสรายวันขึ้น 3–4 เท่า พร้อมสร้างระบบกรอกข้อมูลอัตโนมัติพร้อมระบบ Tracking ประวัติและ Dashboard แสดงผลแบบ Real-time",
        "Product Owner & Project Lead (New Company Website): นำทีมพัฒนาที่มีสมาชิก 5 คน พัฒนาเว็บไซต์ใหม่ของบริษัท ดำเนินงานแบบ Agile พร้อมลงมือทำจริงในกาพัฒนาส่วนของ Frontend ทำให้ประสิทธิภาพในการแสดงผลเร็วขึ้น 2.5-3 เท่า (เทียบกับ WordPress เดิม), ดูแล Cloud/Database และ เพิ่มเติมฟังก์ชั่นสำหรับ SEO เพื่ออนาคต",
        "Operations Management: นำทีมติดตามเส้นทางการเงินและระงับบัญชีที่ต้องสงสัย บริหารการจัดสรรกำลังคนและโครงสร้างงาน จัดทำเอกสารขั้นตอนการทำงาน และคู่มือระบบ พร้อมสอนงานพนักงานใหม่เพื่อยกระดับประสิทธิภาพทีม"
      ],
      en: [
        "Lead Coordinate API Integration: Main coordinator for API integrations with key enterprise clients (such as SF Cinema, Major Cineplex, PTG Energy) and SMBs—managing end-to-end processes from delivering API specifications, gathering requirements with executives, and coordinating internal teams, to post go-live support and direct client consultations.",
        "Workflow Optimization (CFR : ITMX-Portal): Developed a fund-flow data submission management program for the Central Fraud Registry (CFR) system to track and manage suspicious account cash flows, eliminating redundant steps and boosting daily case resolution efficiency by 3–4x while building an automated data entry system with historical tracking and a real-time analytics dashboard.",
        "Product Owner & Project Lead (New Company Website): Led a 5-member development team in building the company's new website using an Agile framework while hands-on developing the frontend—achieving a 2.5x–3x performance increase compared to the legacy WordPress site, managing Cloud/Database architecture, and implementing SEO-ready capabilities.",
        "Operations Management: Guided a team tracking financial trails and suspending suspicious accounts, overseeing workforce allocation and workflow structuring, authoring operational manuals, and onboarding new staff to elevate team performance."
      ],
    },
  },
  {
    version: "V 1.1",
    company: {
      th: "บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน)",
      en: "National Telecom Public Company Limited (NT)",
    },
    role: {
      th: "Research and Development (Intern)",
      en: "Research and Development (Intern)",
    },
    period: {
      th: "01/06/2023 — 31/07/2023",
      en: "01/06/2023 — 31/07/2023",
    },
    points: {
      th: [
        "ออกแบบและพัฒนาระบบบริหารจัดการวิดีโอจราจรและวิเคราะห์ข้อมูลด้วย YOLOv8 AI models โดยครอบคลุมการพัฒนาเว็บแอปพลิเคชันสำหรับการอัปโหลดข้อมูลวิดีโอ พร้อมรองรับการเชื่อมต่อกับระบบฐานข้อมูล โดยโครงสร้างหลักของระบบใช้ (AMD) Vitis Video Analytics SDK ในการประมวลผลโมเดล AI เพื่อตรวจจับรถยนต์และรถจักรยานยนต์แบบ Real-time นอกจากนี้ ยังมีเครื่องมือสร้างรายงานอัตโนมัติที่สามารถส่งออก (Export) ข้อมูลการวิเคราะห์ออกมาในรูปแบบ CSV ซึ่งบันทึกตัวแปรจราจรและดัชนีชี้วัดที่สำคัญ เช่น ประเภทของยานพาหนะ, สี, และเวลา (Timestamp)",
        "ออกแบบและพัฒนาระบบป้ายดิจิทัลอัจฉริยะ (Digital Signage) โดยใช้ Anthias สำหรับงานประชาสัมพันธ์แบบครบวงจร",
      ],
      en: [
        "Designed and developed a traffic video management and analytics system powered by YOLOv8 AI models, including a web application for video uploading and database integration, leveraging the (AMD) Vitis Video Analytics SDK for real-time vehicle and motorcycle detection, alongside an automated reporting tool exporting analysis data in CSV format recording key traffic variables like vehicle type, color, and timestamp.",
        "Designed and implemented an intelligent digital signage system utilizing Anthias for comprehensive organizational public relations.",
      ],
    },
  },
];

export const education = [
  {
    school: {
      th: "มหาวิทยาลัยกรุงเทพ",
      en: "Bangkok University",
    },
    degree: {
      th: "ป.ตรี วิศวกรรมศาสตร์สาขาคอมพิวเตอร์และหุ่นยนต์",
      en: "Bachelor of Engineering in Computer and Robotics Engineering",
    },
    period: {
      th: "2020 — 2024",
      en: "2020 — 2024",
    },
    detail: {
      th: "GPAX : 3.68 เกียรตินิยมอันดับ 1",
      en: "GPAX : 3.68 First Class Honors",
    },
  },
];

export type CertificationItem = 
  | string 
  | {
      title: string | { th: string; en: string };
      href?: string;
    };

export const certifications: CertificationItem[] = [
  {
    title: {
      th: "ใบรับรองการป้องกันและปราบปรามการฟอกเงิน (AMLO)",
      en: "Anti-Money Laundering (AMLO) Compliance Certificate",
    },
    href: "/certifications/amlo-certificate.png",
  },
];

export const navLinks = {
  th: [
    { label: "เกี่ยวกับ", href: "#about" },
    { label: "ทักษะ", href: "#skills" },
    { label: "ประสบการณ์", href: "#experience" },
    { label: "ผลงาน", href: "#projects" },
    { label: "การศึกษา", href: "#education" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ],
};

export const contactBtnLabel = {
  th: "ติดต่อ",
  en: "Contact",
};