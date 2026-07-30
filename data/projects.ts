export interface ProjectSectionsToggle {
  overview?: boolean;
  role?: boolean; 
  goals?: boolean;
  challenges?: boolean;
  results?: boolean;
  learnings?: boolean;
  futurePlans?: boolean;
}

export interface Project {
  id: string;
  name: { th: string; en: string };
  description: { th: string; en: string };
  overview?: { th: string; en: string };
  role?: { th: string[]; en: string[] };
  goals?: { th: string; en: string };
  challenges?: { th: string[]; en: string[] };
  results?: { th: string[]; en: string[] };
  learnings?: { th: string[]; en: string[] };
  futurePlans?: { th: string[]; en: string[] };
  pdfUrl?: { th?: string; en?: string };
  showSections?: ProjectSectionsToggle;
  images?: string[];
  tags: string[];
  href?: string;
  showSourceCode?: boolean;
  showPDF?: boolean;
}

export const projects: Project[] = [
  {
    id: "Data-Entry-ITMX-Portal",
    name: {
      th: "โปรแกรมการต่อเส้นเงินสำหรับระบบ ITMX-Portal (CFR)",
      en: "ITMX-Portal (CFR) Operations Support Utility",
    },
    description: {
      th: "โปรแกรม Desktop Application ที่พัฒนาด้วย Python และ PySide6 เพื่อช่วยเจ้าหน้าที่ในการจัดการข้อมูล, ตรวจสอบข้อผิดพลาด และเพิ่มความรวดเร็วในการดำเนินการนำส่งข้อมูลเส้นเงินบน ITMX (CFR) โดยเน้นการลดขั้นตอนการทำงานแบบ Manual และลด Human Error",
      en: "A Desktop Application built with Python and PySide6 designed to assist operators in data management, error validation, and accelerating workflows on the ITMX (CFR) web portal. The utility focuses on automating manual steps and reducing human errors.",
    },
    overview: {
      th: "ระบบนี้พัฒนาขึ้นเพื่อแก้ปัญหาจำนวนเคสที่มากขึ้นของเส้นเงินบนระบบ ITMX-Portal (CFR) โดยจุดประสงค์หลักคือการเพิ่มประสิทธิภาพและลดขั้นตอนการต่อเส้นเงินและลดเวลาของการดำเนินการลง โดยมีขอบเขตและข้อจำกัดในการพัฒนา",
      en: "This system was developed to address the increasing caseload of financial transaction matching on the ITMX-Portal (CFR). The primary objective is to enhance efficiency, streamline the transaction linking process, and reduce operational time within defined development scopes and constraints.",
    },
    role: {
      th: [
        "Full Stack Developer and Workflow Analysis",
      ],
      en: [
        "Full Stack Developer and Workflow Analysis",
      ]
    },
    goals: {
      th: "มุ่งเน้นการลดขั้นตอนการทำซ้ำและเพิ่มประสิทธิภาพในการต่อเส้นเงิน พร้อมทั้งลดความผิดพลาดของ Human error และสามารถติดตามผลลัพธ์ได้",
      en: "Focused on reducing repetitive tasks, increasing efficiency in financial transaction linking, minimizing human data-entry errors, and enabling result tracking.",
    },
    challenges: {
      th: [
        "ข้อจำกัดด้านการขอการเข้าถึง และเชื่อมต่อ database ของทางสำนักงานใหญ่ที่ประเทศฮ่องกง",
        "การควบคุมความผิดพลาดในการกรอกข้อมูล (Human Error) ของเจ้าหน้าที่ให้เหลือน้อยที่สุด",
        "ข้อมูลที่ input และ output ต้องมีความถูกต้อง 100%",
        "ข้อมูลผู้ใช้งานในระบบที่มากกว่า 2 แสนผู้ใช้งาน ให้สามารถดึงที่จำเป็นไปใช้กับโปรแกรมได้",
      ],
      en: [
        "Handling restricted database access and connectivity with headquarters in Hong Kong",
        "Minimizing human data-entry errors down to near-zero tolerance",
        "Ensuring 100% accuracy for all input and output transaction data",
        "Filtering and pulling relevant metrics from a user database exceeding 200,000 active records",
      ],
    },
    results: {
      th: [
        "ลดระยะเวลาในกระบวนการนำส่งเส้นเงินลงมากกว่า 200% เมื่อเทียบกับขั้นตอนรูปแบบปกติ",
        "ลดข้อผิดพลาดจากผู้ใช้งาน (Human Error) ในการกรอกข้อมูลลงได้เกือบ 70%",
        "สามารถใช้ excel import ข้อมูลของผู้ต้องสงสัยนำขึ้นเป็น JSON เพื่อนำมาใช้ในการต่อเส้นเงินได้แทนการเชื่อมต่อ API",
        "มีการจัดเก็บประวัติการนำส่งข้อมูลเส้นเงิน พร้อมแสดงผลข้อมูลได้และ สามารถนำข้อมูลมาแสดงบน Dashboard เพื่อแสดงผลลัพธ์สถิติต่างๆ ได้",
      ],
      en: [
        "Reduced transaction processing time by over 200% compared to standard workflows",
        "Decreased human data-entry errors by nearly 70%",
        "Successfully implemented Excel-to-JSON parsing workflow bypassing restricted direct API connections",
        "Established full audit trail logging and analytical dashboard reporting for historical transaction records",
      ],
    },
    learnings: {
      th: [
        "การใช้หลักการ Minimal Viable Product (MVP) มาประยุกต์เพื่อพัฒนาโปรแกรมทำให้ได้โปรแกรมตรงตาม requirements ที่ต้องการของผู้ใช้งาน",
        "การนำ Excel มาประยุกต์ใช้เก็บข้อมูลและ import ขึ้น JSON ของโปรแกรมทำให้มี database ที่ไม่ต้องเชื่อมต่อ API",
        "การออกแบบ UI/UX เพื่อเพิ่มประสิทธิภาพในการใช้งานให้ดียิ่งขึ้น",
      ],
      en: [
        "Applying Minimal Viable Product (MVP) principles to rapidly deploy user-centric features",
        "Leveraging local Excel data structures and JSON conversion as a reliable fallback data pipeline without direct API connections",
        "Designing intuitive UI/UX patterns to optimize operator workflow efficiency",
      ],
    },
    futurePlans: {
      th: [
        "พัฒนาการเชื่อมต่อระบบนำส่งข้อมูลจากรูปแบบ Manual บน Web-portal เป็นการส่งผ่าน API โดยตรง",
        "ปรับเปลี่ยนรูปแบบการจัดเก็บข้อมูลผู้ใช้งานจาก Local File เป็น Relational Database (เช่น PostgreSQL) เพื่อรองรับข้อมูลผู้ใช้งานที่เพิ่มขึ้นและเพิ่มความปลอดภัยของข้อมูล",
        "เพิ่มการลองรับภาษาอื่นๆเพิ่มเติม",
        "เพิ่มการลองรับสำหรับ MacOS,IOS version ",
      ],
      en: [
        "Develop direct API integration to replace manual data submission on the web portal",
        "Migrate user data storage from local files to a Relational Database (e.g., PostgreSQL) to handle growing user data and enhance security",
        "Add support for additional languages",
        "Add support for macOS and iOS versions",
      ],
    },
    pdfUrl: {
      th: "/docs/itmx-portal-spec-th.pdf",
      en: "/docs/itmx-portal-spec-en.pdf",
    },
    showSections: {
      overview: true,
      role: true,
      goals: true,
      challenges: true,
      results: true,
      learnings: true,
      futurePlans: true,
    },
    images: [
      "/projects/CFR/image1.png",
      "/projects/CFR/image2.png",
      "/projects/CFR/image3.png",
      "/projects/CFR/image4.png",
      "/projects/CFR/image5.png",
      "/projects/CFR/image6.png",
    ],
    tags: ["Python", "PySide6"],
    href: "https://github.com/yourname/not_public",
    showSourceCode: false,
    showPDF: false,
  },
  {
    id: "New_ACU_PAY_Thailand_website",
    name: {
      th: "เว็บไซต์ใหม่ของ ACU PAY Thailand",
      en: "The New ACU PAY Thailand Website",
    },
    description: {
      th: "เว็บไซต์ใหม่ของ ACU PAY Thailand ที่จะมาแทนเว็บไซต์เก่าที่ใช้ WordPress โดยการเปลี่ยนไปใช้ Next.js แทนและเพิ่มฟีเจอร์ใหม่เพื่อรองรับการพัฒนาของบริษัทในอนาคต",
      en: "The new ACU PAY Thailand website replacing the legacy WordPress stack with Next.js, featuring new capabilities to support future company growth.",
    },
    overview: {
      th: "เพิ่มประสิทธิภาพของเว็บไซต์ให้สามารถโหลดหน้าได้เร็วขึ้นพร้อมปรับปรุง UI ให้ทันสมัยมากยิ่งขึ้นและเพิ่มฟีเจอร์ใหม่ในเว็บไซต์ อาทิเช่น แชทซัพพอร์ตอัตโนมัติ การรองรับ SEO ในอนาคต",
      en: "Boosted website loading speed, modernized the UI/UX, and introduced new features such as automated support chat and technical SEO readiness.",
    },
    role: {
      th: [
        "Lead Project, Product Owner and Frontend developer",
      ],
      en: [
        "Lead Project, Product Owner, and Frontend Developer",
      ]
    },
    goals: {
      th: "ประสิทธิภาพความเร็วและความลื่นไหลดียิ่งขึ้น และมีฟีเจอร์ซัพพอร์ตการใช้งานของผู้เข้าชมเว็บไซต์อาทิ แชทซัพพอร์ตอัตโนมัติ และ UI ที่สร้างประสบการณ์ใช้งานที่ลื่นไหล พร้อมฟีเจอร์การทำ SEO ที่ดียิ่งขึ้น",
      en: "Achieved superior speed and smoothness, integrated user support features like automated chat, delivered a seamless UI/UX, and optimized SEO capabilities.",
    },
    challenges: {
      th: [
        "เปลี่ยนจาก CMS เดิม (WordPress) มาเป็น Next.js โดยที่ต้องรักษาหรือปรับปรุงประสิทธิภาพ SEO ให้ดียิ่งขึ้นจากของเก่า",
        "การควบหลายบทบาทในตำแหน่ง Lead Project, Product Owner ทำให้มี Workload ในการทำงานสูง",
        "การลองรับ resolution ที่หลากหลาย อาทิเช่น Mobile Phone, PC และ Tablet",
      ],
      en: [
        "Migrated from the legacy CMS (WordPress) to Next.js while maintaining or improving SEO performance",
        "Managed a high workload due to wearing multiple hats as Lead Project and Product Owner",
        "Supported a wide range of resolutions including Mobile Phones, PCs, and Tablets",
      ],
    },
    results: {
      th: [
        "ลดเวลาในการโหลดหน้า page ของเว็บไซค์ จากการทดสอบสามารถโหลดได้เร็วขึ้นมากกว่า 3 เท่า",
        "การใช้งานมีความลื่นไหลและทันสมัยมากขึ้น",
      ],
      en: [
        "Reduced page load time by over 3x based on performance testing",
        "Delivered a much smoother and modern user experience",
      ],
    },
    learnings: {
      th: [
        "การพัฒนาโปรแกรมด้วย Next.js",
        "การเปลี่ยนจาก CSS มาใช้เป็น Tailwind CSS",
        "ทักษะการกำหนดแนวทาง การจัดการตารางเวลาและ ประสานงานกับนักพัฒนาในทีม",
      ],
      en: [
        "Developing applications with Next.js",
        "Transitioning from vanilla CSS to Tailwind CSS",
        "Refining project management, scheduling, and team coordination skills",
      ],
    },
    futurePlans: {
      th: [
        "เปลี่ยน CMS แบบเดิมเป็น Server Side Rendering (SSR)",
        "ปรับปรุงระบบจัดการหลังบ้านเพื่อสามารถดูแลและจัดการ website ได้ดียิ่งขึ้น",
      ],
      en: [
        "Migrate legacy CMS elements to Server-Side Rendering (SSR)",
        "Improve the backend management system for better website administration and content control",
      ],
    },
    pdfUrl: {
      th: "/docs/itmx-portal-spec-th.pdf",
      en: "/docs/itmx-portal-spec-en.pdf",
    },
    showSections: {
      overview: true,
      role: true,
      goals: true,
      challenges: true,
      results: true,
      learnings: true,
      futurePlans: true,
    },
    images: [],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/yourname/project-two",
    showSourceCode: false,
    showPDF: false,
  },
  {
    id: "Every-sence",
    name: {
      th: "เว็บไซต์ขายเสื้อผ้า Every.sence",
      en: "ITMX-Portal (CFR) Operations Support Utility",
    },
    description: {
      th: "เว็บไซต์ขายเสื้อผ้าแนว Street fashion ที่เน้นการผสมผสานความเรียบหรูและลูกเล่นแนวสตรีทเข้าด้วยกันพร้อมระบบจัดการตะกร้าและจ่ายเงินด้วย QR code หรือ credit card",
      en: "A Desktop Application built with Python and PySide6 designed to assist operators in data management, error validation, and accelerating workflows on the ITMX (CFR) web portal. The utility focuses on automating manual steps and reducing human errors.",
    },
    overview: {
      th: "เว็บไซต์นี้ถูกสร้างมาเพื่อจำลองการทำเว็บไซต์ขายของที่มีการจัด section ต่างๆ พร้อม UI ที่ลื่นไหลและการดึงข้อมูลจาก JSON มาแสดงผลพร้อมฟังก์ชั่นการค้นหา และการจ่ายเงินด้วย QR code โดยใช้ promptpay QR",
      en: "This system was developed to address the increasing caseload of financial transaction matching on the ITMX-Portal (CFR). The primary objective is to enhance efficiency, streamline the transaction linking process, and reduce operational time within defined development scopes and constraints.",
    },
    role: {
      th: [
        "Full Stack Developer",
      ],
      en: [
        "Full Stack Developer",
      ]
    },
    goals: {
      th: "การลงมือพัฒนาการจัดการ section และฝึกการจัดวางและออกแบบ UI สำหรับร้านค้าพร้อม ทดลองใช้งานการจ่ายด้วย Qr code promptpay",
      en: "Focused on reducing repetitive tasks, increasing efficiency in financial transaction linking, minimizing human data-entry errors, and enabling result tracking.",
    },
    challenges: {
      th: [
        "การใช้งาน QR code promptpay service ในการพัฒนาการจ่ายด้วย QR code ครั้งแรก",
        "การจัดการกับข้อมูล JSON ให้สามารถแสดงผลได้",
        "ควบคุมการเพิ่ม ลด และจัดการตะกร้าสินค้า",
      ],
      en: [
        "Handling restricted database access and connectivity with headquarters in Hong Kong",
        "Minimizing human data-entry errors down to near-zero tolerance",
        "Ensuring 100% accuracy for all input and output transaction data",
        "Filtering and pulling relevant metrics from a user database exceeding 200,000 active records",
      ],
    },
    results: {
      th: [
        "สามารถนำ JSON ไฟล์มาแสดงผลได้จริงเป็นรูปแบบของ Collections ต่างๆ",
        "สามารถใช้ QR code promptpay service ในการชำระเงินได้จริง",
      ],
      en: [
        "Reduced transaction processing time by over 200% compared to standard workflows",
        "Decreased human data-entry errors by nearly 70%",
        "Successfully implemented Excel-to-JSON parsing workflow bypassing restricted direct API connections",
        "Established full audit trail logging and analytical dashboard reporting for historical transaction records",
      ],
    },
    learnings: {
      th: [
        "การ import generatePayload จาก promptpay-qr",
        "การนำ JSON มาแสดงบนจอ UI ในรูปแบบ Collection ต่างๆ",
        "การออกแบบ UI/UX เพื่อเพิ่มประสบการณ์ในการใช้งานที่ลื่นไหลและดียิ่งขึ้น",
      ],
      en: [
        "Applying Minimal Viable Product (MVP) principles to rapidly deploy user-centric features",
        "Leveraging local Excel data structures and JSON conversion as a reliable fallback data pipeline without direct API connections",
        "Designing intuitive UI/UX patterns to optimize operator workflow efficiency",
      ],
    },
    futurePlans: {
      th: [
        "เพิ่มการเชื่อมต่อ API กับธนาคาร เพื่อชำระผ่านบัตรเครดิต (จะมีค่า MDR เพิ่มเติม)",
        "ปรับเปลี่ยนรูปแบบการจัดเก็บข้อมูลโดยเก็บภาพไว้ที่ Cloud และข้อมูลสินค้านำไปเก็บไว้ที่ Database",
        "เพิ่มการลองรับภาษาอื่นๆเพิ่มเติม",
      ],
      en: [
        "Develop direct API integration to replace manual data submission on the web portal",
        "Migrate user data storage from local files to a Relational Database (e.g., PostgreSQL) to handle growing user data and enhance security",
        "Add support for additional languages",
        "Add support for macOS and iOS versions",
      ],
    },
    pdfUrl: {
      th: "/docs/itmx-portal-spec-th.pdf",
      en: "/docs/itmx-portal-spec-en.pdf",
    },
    showSections: {
      overview: true,
      role: true,
      goals: true,
      challenges: true,
      results: true,
      learnings: true,
      futurePlans: true,
    },
    images: [
      "/projects/every-sense/im1.png",
      "/projects/every-sense/im2.png",
      "/projects/every-sense/im3.png",
      "/projects/every-sense/im4.png",
      "/projects/every-sense/im5.png",
    ],
    tags: ["Python", "PySide6"],
    href: "https://every-sense.vercel.app",
    showSourceCode: true,
    showPDF: false,
  },
  {
    id: "Stroop_test",
    name: {
      th: "การทดสอบ Stroop พร้อมอุปกรณ์สำหรับตอบคำถาม",
      en: "Stroop Test with Dedicated Answer Device",
    },
    description: {
      th: "เปลี่ยนการทำ Stroop test จากในกระดาษสู่รูปแบบของ Digital ที่อยู่ในรูปแบบของเกม พร้อมทั้งออกแบบเครื่องตอบคำถามเพื่อใช้สำหรับฝึกกล้ามเนื้อในผู้สูงอายุ",
      en: "Digitalized the traditional paper-based Stroop test into an interactive game format, paired with a custom hardware answer device designed for elderly muscle training.",
    },
    overview: {
      th: "การเปลี่ยนแบบทดสอบ Stroop ให้อยู่ในรูปแบบ Digital รูปแบบเกมและสามารถฝึกการใช้กล้ามเนื้อของผู้สูงอายุควบคู่กัน",
      en: "Transforming the Stroop test into a digital game format while simultaneously supporting muscle rehabilitation and coordination training for the elderly.",
    },
    role: {
      th: [
        "Fullstack Developer"
      ],
      en: [
        "Fullstack Developer"
      ]
    },
    goals: {
      th: "สามารถแปลง Stroop test จากรูปแบบ manual ในกระดาษเป็น Digital ในรูปแบบเกมได้และ สามารถพัฒนาตัวเครื่องสำหรับตอบคำถามได้",
      en: "Successfully convert the manual paper Stroop test into a digital game and develop a functional companion answer device hardware.",
    },
    challenges: {
      th: [
        "ต้องมีการเชื่อมต่อและส่งข้อมูลไปมาระหว่าง Hardware ที่ใช้ในการแสดงผล และ Device สำหรับรับและส่งคำตอบ",
        "การออกแบบ Workflow การทำงานของระบบทั้งหมด",
        "Hardware จะต้องรับและส่งข้อมูลกันแบบ Real-time และไม่มีปัญหาในการเชื่อมต่อกัน",
        "ตัว Answer device จะต้องไม่มีสายเชื่อมต่อกับตัว Hardware แสดงผล",
      ],
      en: [
        "Establishing reliable bidirectional communication between the display hardware and the answer input device",
        "Designing the end-to-end system workflow",
        "Ensuring real-time data transmission and stable connectivity between hardware components",
        "Designing a completely wireless answer device independent of display hardware cables",
      ],
    },
    results: {
      th: [
        "สามารถรับและส่งข้อมูลกันได้ผ่านการใช้ Bluetooth 5.0 โดยไม่ต้องเชื่อมต่อสายใดๆ กับตัว Hardware ที่ใช้แสดงผล",
        "เปลี่ยนการทดสอบ Stroop จากกระดาษให้สามารถแสดงผลบนหน้าจอได้",
        "ตัว Answer Device สามารถแสดงสีที่ปุ่มคำตอบได้และไม่มี Delay ในการรับและส่งคำตอบ",
      ],
      en: [
        "Enabled seamless data transmission via Bluetooth 5.0 without physical cables connected to the display hardware",
        "Successfully digitized the traditional paper Stroop test onto a screen interface",
        "The answer device successfully illuminates response button colors with zero perceivable input latency",
      ],
    },
    learnings: {
      th: [
        "การใช้งาน Linux OS บน Raspberry Pi",
        "การนำ Arduino มาประยุกต์ใช้ในการรับและส่งข้อมูล",
        "การใช้ Pygame เพื่อพัฒนา Stroop test",
      ],
      en: [
        "Working with Linux OS on Raspberry Pi",
        "Applying Arduino microcontrollers for hardware data collection and transmission",
        "Utilizing Pygame to build the Stroop test application",
      ],
    },
    futurePlans: {
      th: [
        "เพิ่มหน้าแสดงสถิติของคะแนนเพื่อเพิ่มความท้าทายในการทำแบบทดสอบ",
        "เพิ่มโหมด P2 (Player2) ขึ้น เพื่อให้สามารถแข่งกันระหว่างผู้ทดสอบได้ถึง 2 คน",
        "เปลี่ยนตัว Answer device จากการต่อสายจ่ายไฟ เป็นรูปแบบของ battery จ่ายไฟ",
      ],
      en: [
        "Add a score statistics leaderboard screen to increase test engagement and challenge",
        "Implement a Player 2 (P2) competitive mode for head-to-head testing",
        "Transition the answer device power source from wired connections to internal rechargeable batteries",
      ],
    },
    showSections: {
      overview: true,
      role: true,
      goals: true,
      challenges: true,
      results: true,
      learnings: true,
      futurePlans: true,
    },
    images: [],
    tags: ["Python", "Pygame", "Arduino", "Raspberry Pi"],
    href: "https://github.com/PanlawatVRRS/Project_Stroop_test",
    showSourceCode: true,
    showPDF: false,
  },
];