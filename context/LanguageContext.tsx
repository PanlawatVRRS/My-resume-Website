'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. กำหนด Type สำหรับภาษาที่รองรับ
export type Language = 'th' | 'en';

// 2. กำหนด Interface ของ Context
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

// 3. สร้าง Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 4. Provider Component
interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  defaultLanguage = 'th',
}) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('app_language') as Language;
      if (savedLang === 'th' || savedLang === 'en') {
        return savedLang;
      }
    }
    return defaultLanguage;
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_language', newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 5. Hook สำหรับเรียกใช้งาน
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage ต้องใช้งานภายใต้ <LanguageProvider>');
  }
  return context;
};