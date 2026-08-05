import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";
import { LanguageProvider } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import BackgroundGlow from "@/components/ฺBackgroundGlow";
import DimensionRuler from "@/components/DimensionRuler";
import BlueprintStatusBar from "@/components/BlueprintStatusBar";

const plexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-sans",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${profile.name.th} — ${profile.role.th}`,
  description: profile.summary.th,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${plexSansThai.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-paper text-ink overflow-x-hidden">
        {/* 🟢 เปลี่ยนเป็น <script> แท็กธรรมดา วางไว้ต้น <body> เพื่อรันก่อนหน้าเว็บแสดงผล */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* 💧 iOS Liquid Glass Overlays Layer */}
        <div className="glass-bg-container">
          <div className="glass-panel-1" />
          <div className="glass-panel-2" />
        </div>

        {/* 🎨 Client Component ดักพิกัดเมาส์สำหรับ Sync Blueprint Dot Grid */}
        <BackgroundGlow />

        {/* 🔘 ปุ่ม Theme Toggle มุมซ้ายล่าง */}
        <div className="fixed bottom-4 left-6 z-50">
          <ThemeToggle />
        </div>

        {/* 📏 Top Blueprint Dimension Ruler */}
        <div className="relative z-20">
          <DimensionRuler />
        </div>

        {/* 🚀 Main Content App */}
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <LanguageProvider>{children}</LanguageProvider>
        </div>

        {/* 🎯 Bottom Right Blueprint Status Bar */}
        <BlueprintStatusBar />
      </body>
    </html>
  );
}