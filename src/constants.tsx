import { Translation, Language } from './types';
import React from 'react';

const EN_BASE = {
  nav: {
    home: "Home",
    services: "Services",
    about: "The Vision",
    pricing: "Memberships",
    contact: "Private Concierge",
    blog: "Journal",
    appointment: "Request Access",
  },
  hero: {
    title: "The Ultimate Guide to Barcelona Excellence",
    subtitle: "Bespoke assistance, medical accompaniment, and elite concierge services curated for our visitors from the Gulf region.",
    cta: "Connect via WhatsApp VIP",
    trustBadge: "Verified Premium Service Since 2018",
    ctaSecondary: "Explore the Collection",
  },
  servicesPage: {
    title: "Curated Services for the Discerning Visitor",
    subtitle: "Our ecosystem ensures your stay in Barcelona is defined by comfort, discretion, and absolute efficiency across medical, legal, and lifestyle needs.",
    buttons: {
      book: "Inquire via WhatsApp",
      more: "Full Portfolio"
    }
  },
  services: {
    items: {
      medical: { 
        title: "Medical Escort & Clinic Support", 
        cardDesc: "Discrete professional accompaniment to world-class medical appointments.",
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
        summary: "Your health is our priority. We coordinate with elite specialists at Teknon and Quirón, providing translation and logistical support with total confidentiality.",
        whoFor: "VVIP Patients seeking specialized European treatment.",
        benefits: ["Priority access to top clinics", "Expert medical translation", "Absolute privacy protocols"],
        features: ["Specialist scheduling", "On-site Arabic interpretation", "Medication & post-care logistics"],
        processTitle: "The Medical Journey",
        process: [
          { step: "Consultation", desc: "Define your clinical needs with our experts." },
          { step: "Selection", desc: "We identify and book the leading specialist." },
          { step: "Accompaniment", desc: "Private escort and real-time translation." }
        ],
        faq: [
           { q: "Is confidentiality guaranteed?", a: "Yes, we sign NDAs for all our high-profile clients." }
        ]
      },
      admin: { 
        title: "Administrative & Legal Counsel", 
        cardDesc: "Navigating Spanish bureaucracy with precision and ease.",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
        summary: "From property investments to residency permits, we handle the complexities of Spanish administration so you don't have to.",
        whoFor: "Investors, expats, and high-net-worth individuals.",
        benefits: ["Zero-error documentation", "Expedited government appointments", "Legal compliance guaranteed"],
        features: ["NIE & TIE expedited support", "Golden Visa consulting", "Banking & Wealth setup"],
        processTitle: "The Workflow",
        process: [
          { step: "Briefing", desc: "Review of legal and admin requirements." },
          { step: "Execution", desc: "We handle the filings and government fees." },
          { step: "Completion", desc: "Legal delivery of your permits or accounts." }
        ],
        faq: [
          { q: "How fast can I get a NIE?", a: "With our priority booking, usually within 5-10 business days." }
        ]
      },
      study: { 
        title: "Academic Enrollment & Student Life", 
        cardDesc: "Elite support for GCC students in Barcelona's top institutions.",
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
        summary: "We manage university applications, student visas, and premium housing to ensure academic success in Spain.",
        whoFor: "GCC students and families moving for higher education.",
        benefits: ["University placement", "Visa success rate 99%", "Elite housing network"],
        features: ["Enrollment assistance", "Student TIE management", "Luxury student housing"],
        processTitle: "Steps to Success",
        process: [
          { step: "Orientation", desc: "Selection of best universities and degrees." },
          { step: "Application", desc: "Full document preparation and filing." },
          { step: "Relocation", desc: "Arrival support and housing handover." }
        ],
        faq: [
             { q: "Do you help with housing?", a: "Yes, we have access to luxury student residences in Eixample and Les Corts." }
        ]
      },
      vip: { 
        title: "Luxury Concierge & Lifestyle", 
        cardDesc: "Bespoke experiences and management for the elite traveller.",
        heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        summary: "Private jets, chauffeurs, and exclusive shopping sessions. We curate the impossible for our VIP guests.",
        whoFor: "Diplomats, royalty, and VIP visitors.",
        benefits: ["24/7 dedicated PA", "Luxury fleet access", "Priority reservations"],
        features: ["Private shopping sessions", "Michelin-star booking", "Luxury chauffeur service"],
        processTitle: "The VIP Protocol",
        process: [
          { step: "Request", desc: "Tell us your wildest plans." },
          { step: "Curation", desc: "We build your bespoke itinerary." },
          { step: "Experience", desc: "Enjoy Barcelona with zero friction." }
        ],
        faq: [
          { q: "Is this available 24/7?", a: "Our VIP concierge line is always open for members." }
        ]
      },
      trans: { 
        title: "Elite Interpretation Services", 
        cardDesc: "Bilingual support for business, legal, and personal meetings.",
        heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
        summary: "Arabic-Spanish-English interpretation that respects cultural nuances and ensures business success.",
        whoFor: "Business delegations and high-profile individuals.",
        benefits: ["Native fluency", "Cultural etiquette experts", "On-site availability"],
        features: ["Business meeting support", "Legal interpretation", "Personal assistant support"],
        processTitle: "Booking",
        process: [
          { step: "Schedule", desc: "Notify us 24h in advance." },
          { step: "Briefing", desc: "Context review for the meeting." },
          { step: "Deployment", desc: "Interpreter arrives on-site." }
        ],
        faq: [
          { q: "Are they native speakers?", a: "Yes, our team is 100% native in Arabic and Spanish." }
        ]
      },
      family: {
        title: "Relocation & Estate Concierge",
        cardDesc: "Seamless transition for families moving to Barcelona.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
        summary: "School selection, housing setup, and utility management for families seeking a premium lifestyle in Spain.",
        whoFor: "Families relocating for work or investment.",
        benefits: ["Best school placement", "Ready-to-move housing", "Full neighborhood orientation"],
        features: ["Private school visits", "Utility setup", "Nanny & Housekeeper vetting"],
        processTitle: "The Settling Plan",
        process: [
           { step: "Consult", desc: "Identify family needs." },
           { step: "Execute", desc: "School and home selection." },
           { step: "Handover", desc: "Moving in with everything ready." }
        ],
        faq: [
           { q: "Can you find English-speaking schools?", a: "We work with the top American and British schools in the city." }
        ]
      }
    },
  },
  howItWorks: {
    title: "Our Process",
    steps: [
      { title: "Personal Inquiry", desc: "Reach out via our VIP WhatsApp line for an immediate consultation." },
      { title: "Bespoke Planning", desc: "We design a tailored roadmap for your health, studies, or stay." },
      { title: "Elite Execution", desc: "Our team manages every detail, from arrivals to final appointments." },
      { title: "Continuous Support", desc: "Enjoy Barcelona with 24/7 assistance at your fingertips." }
    ]
  },
  whyUs: {
    title: "Why Barcelona Simply?",
    subtitle: "The trusted partner for GCC excellence in Spain.",
    items: {
      trust: { title: "Cultural Heritage", desc: "Native experts who understand the values and expectations of the Gulf." },
      lang: { title: "Total Discretion", desc: "Privacy is our foundation. We manage every case with absolute confidentiality." },
      exp: { title: "Unrivaled Network", desc: "Direct access to the best hospitals, legal firms, and luxury providers." },
    }
  },
  testimonials: {
    title: "Reflections of Excellence",
    subtitle: "What our distinguished clients say about their journey.",
    items: [
      { name: "S. Al-Thani", location: "Qatar", text: "Barcelona Simply transformed our medical visit into a stress-free experience. Truly professional.", type: "Medical Concierge" },
      { name: "K. Rashid", location: "Dubai", text: "The only team I trust for my property investments and residency in Spain.", type: "Admin Support" },
      { name: "F. Mohammed", location: "Riyadh", text: "Exceptional student relocation service. They handled my daughter's university enrollment perfectly.", type: "Education VIP" },
      { name: "L. Jaber", location: "Abu Dhabi", text: "The interpretation and chauffeur services were impeccable. A must-have for GCC visitors.", type: "VIP Concierge" },
    ]
  },
  homeAppointment: {
    title: "Reserve Your Private Assistant",
    subtitle: "Secure elite support for your next visit in three steps.",
    steps: {
      step1: "Select Service",
      step2: "Define Timing",
      step3: "Confirm",
    },
    cta: "Initiate Request"
  },
  ctaSection: {
    title: "Ready for an Unparalleled Experience?",
    subtitle: "Join our elite circle of clients and rediscover Barcelona.",
    buttonText: "Request Private Consultation",
  },
  pricing: {
    title: "Elite Support Programs",
    subtitle: "Transparent, premium solutions designed for families and high-profile individuals.",
    cta: "Inquire Now",
    bookWhatsapp: "Connect with Concierge",
    categories: {
      medical: {
        title: "Medical Portfolios",
        subtitle: "Complete clinical governance.",
        tiers: [
          { name: "VIP Escort", price: "€150", desc: "Single elite appointment", features: ["Arabic Escort", "Report Translation"] },
          { name: "Clinic Pack", price: "€350", desc: "The standard for health visitors", features: ["2 Days Escort", "Priority Booking", "VIP Privacy"], highlight: true }
        ]
      },
      admin: {
        title: "Administrative Suite",
        subtitle: "Precision legal management.",
        tiers: [
          { name: "Core Task", price: "€120", desc: "One-off filing", features: ["Forms Prep", "Meeting Escort"] },
          { name: "Relocation Suite", price: "€500", desc: "Complete residency setup", features: ["NIE/TIE Fast-track", "Bank Wealth Setup", "Relocation Escort"], highlight: true }
        ]
      },
      student: {
        title: "Academic Path",
        subtitle: "Education management.",
        tiers: [
          { name: "Inquiry", price: "€100", desc: "University selection", features: ["Institution list", "Requirements"] },
          { name: "Elite Student Pack", price: "€500", desc: "Full academic settlement", features: ["University Filing", "Visa Management", "Luxury Housing Search"], highlight: true }
        ]
      },
      vip: {
        title: "Lifestyle Memberships",
        subtitle: "Luxury beyond limits.",
        tiers: [
          { name: "VIP Day", price: "€400", desc: "Personal Concierge Day", features: ["Chauffeur", "Shopping Guide", "Priority Dining"] },
          { name: "Gulf Elite Pack", price: "€750", desc: "Family Premium Week", features: ["Airport Pick-up", "24/7 Dedicated PA", "Total Lifestyle Management"], highlight: true }
        ]
      }
    },
    packages: {
      vipGulf: {
        title: "Gulf Elite Membership",
        price: "€750",
        unit: "Family",
        desc: "The gold standard for GCC families.",
        features: ["Luxury Airport Logistics", "24/7 Personal Assistant", "Medical/Admin support", "Translation"]
      },
      medical: {
        title: "Platinum Health Pack",
        price: "€350",
        unit: "Stay",
        desc: "Dedicated medical management.",
        features: ["Clinic Coordination", "Native Arabic Escort", "Clinical Follow-up", "VIP Privacy"]
      }
    },
    alaCarte: {
      title: "Individual Excellence Services",
      subtitle: "Bespoke options for specific requirements.",
      items: [
        { name: "VIP Medical Escort", price: "€150", desc: "Per session" },
        { name: "Priority Admin Filing", price: "€120", desc: "Per procedure" },
        { name: "Document Translation", price: "From €25", desc: "Certified page" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Is the service legal?", a: "We are a fully registered Spanish consultancy operating with the highest ethical standards." },
        { q: "Do you have female staff?", a: "Yes, we provide female personal assistants to ensure the comfort of GCC families." }
      ]
    },
    finalCta: {
      title: "Elevate Your Barcelona Stay",
      subtitle: "Contact our VIP concierge team today.",
      button: "WhatsApp Messenger"
    }
  },
  contact: {
    title: "Secure Your Request",
    subtitle: "Our team responds to VIP inquiries within 15 minutes.",
    whatsapp: "WhatsApp Priority Line",
  },
  appointmentWizard: {
    steps: { service: "Selection", datetime: "Schedule", details: "Privacy Brief" },
    labels: { selectService: "Choose your path", selectDate: "Pick your arrival", selectTime: "Preferred slot", name: "Full Name", email: "Email", phone: "WhatsApp Number", message: "Special Requirements" },
    buttons: { next: "Continue", back: "Return", confirm: "Submit VIP Request", finish: "Complete" },
    success: { title: "Inquiry Received", message: "A senior concierge will contact you via WhatsApp shortly." }
  },
  blog: {
    title: "The Barcelona Journal",
    subtitle: "Insights on luxury living, health, and education in the Mediterranean.",
    readMore: "Explore Article",
    categories: { all: "All", medical: "Health", admin: "Legal", study: "Education", vip: "Lifestyle", tips: "Insights" },
    posts: [],
    cta: { title: "Need Assistance?", text: "Our editorial team and experts are ready to guide you.", button: "Connect via WhatsApp" }
  },
  chat: { title: "VIP Concierge", placeholder: "How may I assist you today?", send: "Send", welcome: "Welcome to Barcelona Simply. I am your personal AI assistant. How can I curate your experience today?", whatsapp: "WhatsApp VIP", agent_unavailable: "Human agents are currently on private assignments. I am here to help." }
};

const ES_BASE = {
  ...EN_BASE,
  nav: { ...EN_BASE.nav, home: "Inicio", services: "Servicios", about: "La Visión", pricing: "Membresías", contact: "Conserjería Privada", blog: "Diario", appointment: "Solicitar Acceso" },
  hero: { ...EN_BASE.hero, title: "La Guía Suprema de la Excelencia en Barcelona", subtitle: "Asistencia a medida, acompañamiento médico y servicios de conserjería de élite para visitantes del Golfo.", cta: "WhatsApp VIP", trustBadge: "Servicio Premium Verificado desde 2018", ctaSecondary: "Ver Colección" },
  whyUs: { ...EN_BASE.whyUs, subtitle: "El socio de confianza para la excelencia del CCG en España." },
  blog: { ...EN_BASE.blog, readMore: "Explorar Artículo" }
};

const AR_BASE = {
  ...EN_BASE,
  nav: {
    home: "الرئيسية",
    services: "خدماتنا",
    about: "رؤيتنا",
    pricing: "العضويات",
    contact: "كونسيرج خاص",
    blog: "المجلة",
    appointment: "طلب الوصول",
  },
  hero: {
    title: "دليلك الأمثل للتميز في برشلونة",
    subtitle: "مساعدة مخصصة، مرافقة طبية، وخدمات كونسيرج راقية مخصصة لزوارنا من دول الخليج.",
    cta: "تواصل عبر واتساب VIP",
    trustBadge: "خدمة ممتازة معتمدة منذ 2018",
    ctaSecondary: "استكشف الخدمات",
  },
  chat: { title: "الكونسيرج الشخصي", placeholder: "كيف يمكنني مساعدتك اليوم؟", send: "إرسال", welcome: "مرحباً بكم في برشلونة سيمبلي. أنا مساعدكم الشخصي الذكي. كيف يمكنني تنظيم تجربتكم اليوم؟", whatsapp: "واتساب VIP", agent_unavailable: "الوكلاء مشغولون حالياً في مهام خاصة. أنا هنا للمساعدة." }
};

const FR_BASE = { ...EN_BASE }; 

export const TRANSLATIONS: Record<Language, Translation> = {
  en: EN_BASE as Translation,
  es: ES_BASE as Translation,
  fr: FR_BASE as Translation,
  ar: AR_BASE as Translation
};