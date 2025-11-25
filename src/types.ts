
import React from 'react';

export type Language = 'en' | 'fr' | 'ar';

export interface ServiceDetail {
  title: string;
  cardDesc: string;
  heroImage: string;
  summary: string;
  whoFor: string; // New field
  benefits: string[]; // New field
  features: string[]; // New field
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
      family: ServiceDetail; // New service
    };
  };
  howItWorks: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  whyUs: {
    title: string;
    items: {
      trust: { title: string; desc: string };
      lang: { title: string; desc: string };
      exp: { title: string; desc: string };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { name: string; location: string; text: string }[];
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
    packages: {
      vipGulf: { title: string; price: string; unit: string; desc: string; features: string[] };
      medical: { title: string; price: string; unit: string; desc: string; features: string[] };
      luxury: { title: string; price: string; unit: string; desc: string; features: string[] };
      study: { title: string; price: string; unit: string; desc: string; features: string[] }; // Added Study pack
    };
    alaCarte: {
      title: string;
      subtitle: string;
      items: { name: string; price: string; desc: string }[];
    };
    faq: {
      title: string;
      items: { q: string; a: string }[];
    };
    finalCta: {
      title: string;
      subtitle: string;
      button: string;
    }
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
  };
  appointmentWizard: {
    steps: {
      service: string;
      datetime: string;
      details: string;
    };
    labels: {
      selectService: string;
      selectDate: string;
      selectTime: string;
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    buttons: {
      next: string;
      back: string;
      confirm: string;
      finish: string;
    };
    success: {
      title: string;
      message: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    categories: {
      all: string;
      medical: string;
      admin: string;
      study: string;
      vip: string;
      tips: string;
    };
    posts: BlogPost[];
    cta: {
      title: string;
      text: string;
      button: string;
    }
  };
  chat: {
    placeholder: string;
    title: string;
    send: string;
    welcome: string;
    whatsapp: string;
    agent_unavailable: string;
  }
}

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  titleKey: keyof Translation['services']['items'];
}