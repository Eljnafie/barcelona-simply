
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translation, SEOConfig } from '../types';
import { TRANSLATIONS as INITIAL_TRANSLATIONS } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  translations: Record<Language, Translation>;
  updateTranslations: (newTranslations: Record<Language, Translation>) => void;
  seo: SEOConfig;
  updateSEO: (newSEO: SEOConfig) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const INITIAL_SEO: SEOConfig = {
  title: "Barcelona Simply | Premium Arabic Concierge",
  description: "Premium Arabic-speaking assistance in Barcelona for GCC visitors. Medical escort, hospital support, residency & NIE help.",
  keywords: "Arabic concierge Barcelona, GCC concierge Spain, medical escort Barcelona",
  ogImage: "https://barcelonasimply.com/og-image.jpg"
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('preferredLanguage') as Language) || 'en';
  });

  const [translations, setTranslations] = useState<Record<Language, Translation>>(() => {
    const saved = localStorage.getItem('site_translations');
    return saved ? JSON.parse(saved) : INITIAL_TRANSLATIONS;
  });

  const [seo, setSeo] = useState<SEOConfig>(() => {
    const saved = localStorage.getItem('site_seo');
    return saved ? JSON.parse(saved) : INITIAL_SEO;
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language];

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('preferredLanguage', language);
    
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [language, dir]);

  // Update document metadata when SEO changes
  useEffect(() => {
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);
  }, [seo]);

  const updateTranslations = (newTranslations: Record<Language, Translation>) => {
    setTranslations(newTranslations);
    localStorage.setItem('site_translations', JSON.stringify(newTranslations));
  };

  const updateSEO = (newSEO: SEOConfig) => {
    setSeo(newSEO);
    localStorage.setItem('site_seo', JSON.stringify(newSEO));
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      translations, 
      updateTranslations, 
      seo, 
      updateSEO, 
      dir 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
