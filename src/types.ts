
import React from 'react';

export type Language = 'en' | 'fr' | 'ar' | 'es';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export interface ServiceDetail {
  title: string;
  cardDesc: string;
  heroImage: string;
  summary: string;
  whoFor: string;
  benefits: string[];
  features: string[];
  processTitle: string;
  process: { step: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  seoTitle?: string;
  metaDesc?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  imageAlt?: string;
  externalLink?: string;
  jsonLd?: string; // Para Schema.org
  content: {
    intro: string;
    sections: { title: string; content: string | string[] }[];
    conclusion: string;
  };
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    about: string;
    pricing: string;
    contact: string;
    blog: string;
    appointment: string; 
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    trustBadge: string;
    ctaSecondary: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    buttons: {
      book: string;
      more: string;
    };
  };
  services: {
    items: {
      medical: ServiceDetail;
      admin: ServiceDetail;
      study: ServiceDetail;
      vip: ServiceDetail;
      trans: ServiceDetail;
      family: ServiceDetail;
    };
  };
  howItWorks: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: {
      trust: { title: string; desc: string };
      lang: { title: string; desc: string };
      exp: { title: string; desc: string };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { name: string; location: string; text: string; type?: string }[];
  };
  homeAppointment: {
    title: string;
    subtitle: string;
    steps: {
      step1: string;
      step2: string;
      step3: string;
    };
    cta: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    cta: string;
    bookWhatsapp: string;
    categories: Record<string, any>;
    packages: Record<string, any>;
    alaCarte: any;
    faq: any;
    finalCta: any;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
  };
  appointmentWizard: any;
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    categories: any;
    posts: BlogPost[];
    cta: any;
  };
  chat: any;
}
