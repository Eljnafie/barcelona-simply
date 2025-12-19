
import { Translation, Language } from './types';
import React from 'react';

const EN_BASE = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About Us",
    pricing: "Pricing",
    contact: "Contact",
    blog: "Blog",
    appointment: "Book Appointment",
  },
  hero: {
    title: "Your Trusted Guide in Barcelona",
    subtitle: "Premium assistance, medical accompaniment, and VIP concierge tailored for visitors from the Gulf.",
    cta: "Book via WhatsApp",
    // Missing hero properties added
    trustBadge: "Verified Premium Service",
    ctaSecondary: "Explore Services",
  },
  servicesPage: {
    title: "Our Services for Visitors in Barcelona",
    subtitle: "We provide a range of services to make your visit to Barcelona seamless — medical appointments, administrative assistance, study registration, residency matters, and VIP services.",
    buttons: {
      book: "Book via WhatsApp",
      more: "More Information"
    }
  },
  services: {
    items: {
      medical: { 
        title: "Medical Accompaniment Service", 
        cardDesc: "Professional accompaniment to medical appointments and hospitals.",
        heroImage: "https://picsum.photos/1200/600?image=10",
        summary: "We prioritize your health and comfort. Our team schedules appointments with top specialists (Teknon, Quirón, etc.), accompanies you to the clinic, and ensures accurate translation of all medical information.",
        whoFor: "Patients traveling for treatment, check-ups, or surgery.",
        benefits: ["Access to top clinics", "Accurate medical translation", "Peace of mind", "Privacy assured"],
        features: ["Appointment scheduling with specialists", "In-person interpretation during consultations", "Medical report translation assistance", "Pharmacy and medication guidance"],
        processTitle: "Medical Process",
        process: [
          { step: "Consultation", desc: "Tell us your medical needs or preferred specialization." },
          { step: "Booking", desc: "We find the best doctor and schedule the appointment." },
          { step: "Accompaniment", desc: "We meet you at the clinic and translate everything." }
        ],
        faq: [
           { q: "Do you offer medical advice?", a: "No, we facilitate communication only. We are not doctors." },
           { q: "Which hospitals do you work with?", a: "We work with all major private and public hospitals in Barcelona." }
        ]
      },
      admin: { 
        title: "Administrative & Government Support", 
        cardDesc: "Simplifying Spanish bureaucracy for you.",
        heroImage: "https://picsum.photos/1200/600?image=1068",
        summary: "Spanish bureaucracy can be overwhelming. We handle the paperwork for NIE numbers, bank accounts, census registration, and other official procedures so you don't have to.",
        whoFor: "Newcomers, property buyers, and long-term residents.",
        benefits: ["Time-saving", "Error-free paperwork", "Fast appointments", "Legal compliance"],
        features: ["NIE & TIE application support", "Census registration (Empadronamiento)", "Bank account opening assistance", "Official document translation coordination"],
        processTitle: "Our Process",
        process: [
          { step: "Assessment", desc: "We review your current status and required documents." },
          { step: "Preparation", desc: "We prepare all forms and schedule appointments." },
          { step: "Submission", desc: "We accompany you to the government office." }
        ],
        faq: [
          { q: "Can you guarantee the NIE?", a: "We guarantee correct procedure, but final approval depends on the authorities." }
        ]
      },
      study: { 
        title: "Study & Residency Assistance", 
        cardDesc: "Supporting students and families with education and legal status.",
        heroImage: "https://picsum.photos/1200/600?image=101",
        summary: "We help students from the Gulf settle in Barcelona, assisting with university enrollment, student visas, TIE cards, and finding suitable accommodation.",
        whoFor: "University students and families moving for education.",
        benefits: ["University placement", "Visa renewal support", "Housing assistance", "Local orientation"],
        features: ["University enrollment assistance", "Student visa renewal support", "Health insurance arrangement", "Housing search for students"],
        processTitle: "Steps to Settle",
        process: [
          { step: "Planning", desc: "We identify your university and housing needs." },
          { step: "Paperwork", desc: "We compile all documents for the student visa." },
          { step: "Settlement", desc: "We help you get your TIE card upon arrival." }
        ],
        faq: [
           { q: "Do you help with finding accommodation?", a: "Yes, we have a network of trusted student housing providers." }
        ]
      },
      vip: { 
        title: "VIP Concierge Service (Gulf Edition)", 
        cardDesc: "Exclusive luxury services for high-profile clients.",
        heroImage: "https://picsum.photos/1200/600?image=1074",
        summary: "Designed for our most discerning clients. We manage luxury transport, 5-star accommodation, private shopping, and exclusive experiences with absolute discretion.",
        whoFor: "VIP visitors, diplomats, and business travelers.",
        benefits: ["24/7 Priority support", "Luxury fleet access", "NDA Privacy", "Exclusive access"],
        features: ["Luxury airport transfers", "Private chauffeur service", "Exclusive restaurant & club reservations", "Personal shopping assistant"],
        processTitle: "VIP Experience",
        process: [
          { step: "Request", desc: "Send us your dates and preferences." },
          { step: "Itinerary", desc: "We build a custom luxury itinerary for you." },
          { step: "Execution", desc: "Enjoy 24/7 support during your stay." }
        ],
        faq: [
          { q: "Is this service available 24/7?", a: "Yes, our VIP clients have access to round-the-clock support." }
        ]
      },
      trans: { 
        title: "Translation & Interpretation", 
        cardDesc: "Arabic-Spanish-English interpretation for meetings.",
        heroImage: "https://picsum.photos/1200/600?image=103",
        summary: "Bridging the language gap in business meetings, legal appointments, or daily life. Our native speakers ensure clear communication.",
        whoFor: "Business professionals and individuals needing language support.",
        benefits: ["Native fluency", "Cultural understanding", "On-site support", "Immediate availability"],
        features: ["In-person interpretation", "Business meeting support", "Property viewing assistance", "General daily life translation"],
        processTitle: "Booking",
        process: [
          { step: "Schedule", desc: "Tell us when and where you need us." },
          { step: "Meet", desc: "Our interpreter meets you at the location." },
          { step: "Support", desc: "We bridge the communication gap instantly." }
        ],
        faq: [
          { q: "Is this a sworn translation?", a: "No, this is for interpretation and non-official documents." }
        ]
      },
      family: {
        title: "Family Relocation & Setup Support",
        cardDesc: "Helping families move and settle in Barcelona comfortably.",
        heroImage: "https://picsum.photos/1200/600?image=1012",
        summary: "Moving your family to Barcelona? We help with school selection, housing, utility setup, and neighborhood orientation to ensure a smooth transition.",
        whoFor: "Families relocating for work or lifestyle.",
        benefits: ["School admission help", "Utility setup", "Family-friendly housing", "Neighborhood guide"],
        features: ["School search & visits", "Utility contracts (Internet/Water)", "Furniture shopping", "Nanny/Housekeeper search"],
        processTitle: "Relocation Steps",
        process: [
           { step: "Consult", desc: "Understanding your family needs." },
           { step: "Search", desc: "Finding schools and homes." },
           { step: "Setup", desc: "Getting everything ready before you arrive." }
        ],
        faq: [
           { q: "Do you help with schools?", a: "Yes, we help with international and local school enrollments." }
        ]
      }
    },
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      { title: "Contact Us", desc: "Reach out via WhatsApp or our contact form to discuss your needs." },
      { title: "Plan Your Visit", desc: "We create a tailored plan for your medical, study, or tourism trip." },
      { title: "Arrival & Support", desc: "We meet you upon arrival and accompany you to all appointments." },
      { title: "Relax & Enjoy", desc: "Focus on your goals while we handle the logistics and language." }
    ]
  },
  whyUs: {
    title: "Why Choose Barcelona Simply?",
    // Added missing whyUs subtitle
    subtitle: "The bridge between Barcelona and the Gulf region since 2018.",
    items: {
      trust: { title: "Arabic-Speaking Experts", desc: "Native Arabic speakers with deep experience in Gulf culture and needs." },
      lang: { title: "Privacy & Discretion", desc: "We guarantee full confidentiality for all our clients." },
      exp: { title: "Premium Solutions", desc: "Tailored assistance for hospitals, universities, and government offices." },
    }
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "Read what our clients have to say about their experience with us.",
    items: [
      { name: "A.K.", location: "Dubai", text: "Barcelona Simply made my first visit worry-free. Highly recommended!", type: "Medical Assistance" },
      { name: "M.S.", location: "Riyadh", text: "They helped me register at my university and manage my residency smoothly.", type: "Student Support" },
      { name: "F.H.", location: "Abu Dhabi", text: "Professional, friendly, and very reliable. I felt fully supported during all appointments.", type: "Admin Support" },
      { name: "L.T.", location: "Qatar", text: "Great VIP concierge service. Airport pickup and hotel arrangements were perfect.", type: "VIP Concierge" },
    ]
  },
  homeAppointment: {
    title: "Book in 3 Simple Steps",
    subtitle: "Schedule your consultation or service request online efficiently.",
    steps: {
      step1: "Choose Service",
      step2: "Select Time",
      step3: "Confirm",
    },
    cta: "Start Booking Now"
  },
  ctaSection: {
    title: "Ready for a Seamless Experience?",
    subtitle: "Join our happy clients and enjoy Barcelona without the stress.",
    buttonText: "Book Your Service via WhatsApp",
  },
  pricing: {
    title: "Premium Assistance Packages",
    subtitle: "Transparent, professional, and confidential services tailored for our Gulf clients.",
    cta: "Book This Package",
    bookWhatsapp: "Book via WhatsApp",
    // Added categories structure to fix Pricing page errors
    categories: {
      medical: {
        title: "Medical Assistance",
        subtitle: "Complete clinical and health support.",
        tiers: [
          { name: "Basic Visit", price: "€120", desc: "Single appointment support", features: ["Translation", "Paperwork help"] },
          { name: "Medical Pack", price: "€320", desc: "Multi-day clinic trip", features: ["2 Specialist visits", "Report translation", "VIP Privacy"], highlight: true }
        ]
      },
      admin: {
        title: "Admin & Residency",
        subtitle: "Governmental and legal bureaucracy.",
        tiers: [
          { name: "Single Procedure", price: "€100", desc: "One-off admin task", features: ["Forms preparation", "Meeting escort"] },
          { name: "Relocation Pack", price: "€450", desc: "Full residency guidance", features: ["NIE/TIE Application", "Bank setup", "Orientation"], highlight: true }
        ]
      },
      student: {
        title: "Student Support",
        subtitle: "Education and university registration.",
        tiers: [
          { name: "Consultation", price: "€80", desc: "Education advisory", features: ["University list", "Requirements guide"] },
          { name: "Student Pack", price: "€450", desc: "Full settlement", features: ["Enrollment help", "Housing search", "Visa paperwork"], highlight: true }
        ]
      },
      vip: {
        title: "VIP Concierge",
        subtitle: "Luxury lifestyle management.",
        tiers: [
          { name: "VIP Day", price: "€350", desc: "1 Day Assistant", features: ["Private driver", "Shopping guide", "Priority reservations"] },
          { name: "Gulf VIP Pack", price: "€650", desc: "Family Premium Support", features: ["Luxury airport pickup", "24/7 Priority", "Personalized PA"], highlight: true }
        ]
      }
    },
    packages: {
      vipGulf: {
        title: "VIP Gulf Pack",
        price: "€650",
        unit: "Family Assistance",
        desc: "For individuals or families needing premium accompaniment.",
        features: ["Airport coordination", "Full-day Assistant", "Medical Accompaniment", "Translation"]
      },
      medical: {
        title: "Premium Medical Pack",
        price: "€320",
        unit: "Medical Trip",
        desc: "For medical visits and examinations.",
        features: ["Top clinic booking", "Arabic accompaniment", "Medical translation", "Follow-up"]
      },
      luxury: {
        title: "Luxury Stay Pack",
        price: "€900",
        unit: "3 Days",
        desc: "For VIP short stays.",
        features: ["Full Assistance", "Private Driver", "Shopping Guide", "24/7 Support"]
      },
      study: {
         title: "Study & Residency Pack",
         price: "€450",
         unit: "Student Setup",
         desc: "For students and families.",
         features: ["Enrollment Support", "Visa Paperwork", "TIE Application", "Housing Search"]
      }
    },
    alaCarte: {
      title: "Individual Service Prices",
      subtitle: "Flexible options tailored to your specific needs.",
      items: [
        { name: "Medical Appointment", price: "€120", desc: "Per visit" },
        { name: "Admin Support", price: "€100", desc: "Per procedure" },
        { name: "Document Translation", price: "From €20", desc: "Per page" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Is it legal?", a: "Yes, we are a registered entity in Spain ensuring full compliance." },
        { q: "Do you have female staff?", a: "Yes, we provide female assistants for families upon request." }
      ]
    },
    finalCta: {
      title: "Plan Your Stay",
      subtitle: "Contact us today for a personalized itinerary.",
      button: "WhatsApp Now"
    }
  },
  contact: {
    title: "Book Your Appointment",
    subtitle: "Fast and easy booking in less than a minute.",
    whatsapp: "Chat on WhatsApp",
  },
  appointmentWizard: {
    steps: { service: "Service", datetime: "Time", details: "Details" },
    labels: { selectService: "Select service", selectDate: "Pick date", selectTime: "Pick time", name: "Name", email: "Email", phone: "Phone", message: "Message" },
    buttons: { next: "Next", back: "Back", confirm: "Confirm", finish: "Done" },
    success: { title: "Success!", message: "We'll contact you soon via WhatsApp." }
  },
  blog: {
    title: "Barcelona Insights",
    subtitle: "Expert advice and local tips for visitors.",
    readMore: "Read More",
    categories: { all: "All", medical: "Medical", admin: "Admin", study: "Study", vip: "VIP", tips: "Tips" },
    posts: [],
    cta: { title: "Help?", text: "Our team is here to help you immediately.", button: "WhatsApp" }
  },
  chat: { title: "Assistant", placeholder: "Ask...", send: "Send", welcome: "Hello! How can I help you navigate Barcelona today?", whatsapp: "WhatsApp", agent_unavailable: "All agents are busy." }
};

const ES_BASE = {
  ...EN_BASE,
  nav: { ...EN_BASE.nav, home: "Inicio", services: "Servicios", about: "Nosotros", pricing: "Precios", contact: "Contacto", blog: "Blog", appointment: "Cita" },
  hero: { ...EN_BASE.hero, title: "Su Guía en Barcelona", subtitle: "Asistencia premium y conserjería VIP para visitantes del Golfo.", cta: "WhatsApp", trustBadge: "Servicio Premium Verificado", ctaSecondary: "Ver Servicios" },
  whyUs: { ...EN_BASE.whyUs, subtitle: "La confianza de familias y profesionales del Golfo desde 2018." },
  blog: { ...EN_BASE.blog, readMore: "Leer más" }
};

const FR_BASE = { ...EN_BASE }; 
const AR_BASE = { ...EN_BASE };

export const TRANSLATIONS: Record<Language, Translation> = {
  en: EN_BASE as Translation,
  es: ES_BASE as Translation,
  fr: FR_BASE as Translation,
  ar: AR_BASE as Translation
};
