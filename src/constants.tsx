
  import { Translation, Language } from './types';
  import React from 'react';

  export const TRANSLATIONS: Record<Language, Translation> = {
    en: {
      nav: {
        home: "Home",
        services: "Our Services",
        about: "Who We Are",
        pricing: "Packages",
        contact: "Contact",
        blog: "Guide & Blog",
        appointment: "Book Appointment",
      },
      hero: {
        title: "Your Premium Gateway to Barcelona",
        subtitle: "Specialized medical escort, administrative assistance, and VIP concierge for GCC and Arabic-speaking visitors. Experience Barcelona with total peace of mind.",
        cta: "Book VIP Consultation",
        ctaSecondary: "View Services",
        trustBadge: "Trusted by 500+ Families from GCC",
      },
      servicesPage: {
        title: "Elite Assistance Services in Barcelona",
        subtitle: "From top-tier medical appointments to complex residency procedures, we handle the details so you don't have to.",
        buttons: {
          book: "Book via WhatsApp",
          more: "Service Details"
        }
      },
      services: {
        items: {
          medical: { 
            title: "Medical Concierge & Escort", 
            cardDesc: "Access Barcelona's top specialists with a personal medical interpreter.",
            heroImage: "https://picsum.photos/1200/600?image=10",
            summary: "Barcelona is a global hub for medical excellence. We bridge the gap between you and top hospitals (Teknon, Sant Joan de Déu, Barraquer). We manage appointments, provide medical translation, and ensure your comfort throughout the treatment journey.",
            whoFor: "Patients from GCC/Middle East seeking treatment, surgery, or check-ups.",
            benefits: ["Priority appointments with top doctors", "Accurate medical translation (Arabic/Spanish)", "Hospital admission management", "Post-treatment follow-up"],
            features: ["Scheduling with Top Specialists", "On-site Medical Interpretation", "Report Translation & Legalization", "Pharmacy Assistance"],
            processTitle: "Your Medical Journey",
            process: [
              { step: "Consultation", desc: "We understand your medical case and prefered specialty." },
              { step: "Coordination", desc: "We secure appointments with leading professors/doctors." },
              { step: "Accompaniment", desc: "Your personal assistant attends all visits for translation." }
            ],
            faq: [
              { q: "Which hospitals do you partner with?", a: "We work with Teknon, Quirón, Dexeus, and Barraquer among others." },
              { q: "Is medical translation accurate?", a: "Yes, our assistants are experienced in medical terminology." }
            ]
          },
          admin: { 
            title: "Legal & Administrative Assistance", 
            cardDesc: "Fast-track your NIE, TIE, and residency paperwork.",
            heroImage: "https://picsum.photos/1200/600?image=1068",
            summary: "Spanish bureaucracy is complex. We simplify it. Whether you need a NIE number, a Golden Visa, or simply to open a bank account, our local experts handle the appointments and paperwork on your behalf.",
            whoFor: "Investors, new residents, and property buyers.",
            benefits: ["No language barrier", "Correct document preparation", "Priority appointment strategies", "Stress-free processing"],
            features: ["NIE & TIE Applications", "Golden Visa Support", "Empadronamiento (Census)", "Bank Account Opening"],
            processTitle: "Administrative Process",
            process: [
              { step: "Document Review", desc: "We check your papers to ensure success." },
              { step: "Appointment", desc: "We secure the notoriously difficult 'Cita Previa'." },
              { step: "Execution", desc: "We accompany you to the police or foreign office." }
            ],
            faq: [
              { q: "How fast can I get a NIE?", a: "With our help, we aim for the earliest available slots, often weeks faster than standard." }
            ]
          },
          study: { 
            title: "Student Residency & University Support", 
            cardDesc: "Complete support for Arab students: Visas, Housing, & Enrollment.",
            heroImage: "https://picsum.photos/1200/600?image=101",
            summary: "Moving to Barcelona for studies? We help students from Saudi Arabia, Kuwait, Qatar, and beyond secure their student visas, find safe housing, and navigate university registration.",
            whoFor: "University students and their parents.",
            benefits: ["Secure legal status", "Safe accommodation findings", "University liaison", "Parental peace of mind"],
            features: ["Student Visa Renewal", "TIE Card Processing", "University Enrollment Help", "Safe Housing Search"],
            processTitle: "Student Settlement",
            process: [
              { step: "Visa Strategy", desc: "Reviewing requirements for your specific consulate." },
              { step: "Housing", desc: "Finding student-friendly apartments or residences." },
              { step: "Legalization", desc: "Obtaining the TIE card upon arrival." }
            ],
            faq: [
              { q: "Do you help with private universities?", a: "Yes, we assist with ESADE, IESE, UB, and more." }
            ]
          },
          vip: { 
            title: "VIP & Luxury Concierge", 
            cardDesc: "Exclusive lifestyle management for high-profile visitors.",
            heroImage: "https://picsum.photos/1200/600?image=1074",
            summary: "For our most discerning clients, we offer a full-service luxury experience. From private chauffeurs and security to exclusive shopping and property management, we ensure discretion and excellence.",
            whoFor: "VIP families, diplomats, and investors.",
            benefits: ["Absolute privacy (NDA)", "24/7 Dedicated Assistant", "Luxury Logistics", "Exclusive Access"],
            features: ["Private Chauffeur & Transport", "5-Star Hotel/Villa Booking", "Personal Shopping", "Property Management"],
            processTitle: "The VIP Standard",
            process: [
              { step: "Profiling", desc: "Understanding your specific lifestyle needs." },
              { step: "Itinerary", desc: "Crafting a minute-by-minute luxury plan." },
              { step: "24/7 Support", desc: "A dedicated manager is always one call away." }
            ],
            faq: [
              { q: "Is confidentiality guaranteed?", a: "Absolutely. We are accustomed to handling high-profile clients with NDAs." }
            ]
          },
          trans: { 
            title: "Business Interpretation", 
            cardDesc: "Professional Arabic-Spanish interpretation for meetings.",
            heroImage: "https://picsum.photos/1200/600?image=103",
            summary: "Do not let language be a barrier to your business success. Our interpreters bridge the gap in real estate negotiations, legal meetings, and corporate events.",
            whoFor: "Businessmen, investors, and corporate delegations.",
            benefits: ["Cultural nuance understanding", "Business terminology", "Confidentiality", "Professional representation"],
            features: ["Meeting Interpretation", "Real Estate Negotiation Support", "Legal Translation Coordination", "Trade Fair Assistance"],
            processTitle: "Booking",
            process: [
              { step: "Briefing", desc: "We review the context of your meeting." },
              { step: "Attendance", desc: "Our interpreter supports you on-site." },
              { step: "Follow-up", desc: "Assistance with post-meeting summary translation." }
            ],
            faq: [
              { q: "Is this sworn translation?", a: "We coordinate sworn translation for documents, but this service is for oral interpretation." }
            ]
          },
          family: {
            title: "Family Relocation",
            cardDesc: "Seamless relocation services for families moving to Spain.",
            heroImage: "https://picsum.photos/1200/600?image=1012",
            summary: "Moving your family to Barcelona involves many details. We handle school search, utility setup, neighborhood orientation, and domestic help recruitment.",
            whoFor: "Families relocating for work or lifestyle.",
            benefits: ["School admission guidance", "Family-friendly housing", "Utility setup", "Soft landing"],
            features: ["International School Search", "Utility Contracts", "Domestic Staff Recruitment", "Neighborhood Guide"],
            processTitle: "Relocation Steps",
            process: [
              { step: "Needs Analysis", desc: "School curriculum and lifestyle preferences." },
              { step: "Home Search", desc: "Viewing properties that fit family needs." },
              { step: "Settling In", desc: "Setting up internet, water, and bank accounts." }
            ],
            faq: [
              { q: "Can you help with British/American schools?", a: "Yes, we have relationships with all major international schools." }
            ]
          }
        },
      },
      howItWorks: {
        title: "A Seamless Experience",
        steps: [
          { title: "Consultation", desc: "Contact us via WhatsApp. We listen to your specific needs." },
          { title: "Proposal", desc: "We offer a clear plan and transparent pricing package." },
          { title: "Arrival", desc: "We meet you in Barcelona and handle all procedures." },
          { title: "Completion", desc: "We ensure every task is finished to your satisfaction." }
        ]
      },
      whyUs: {
        title: "Why GCC Clients Trust Us",
        subtitle: "We combine local Spanish expertise with deep understanding of Arab culture.",
        items: {
          trust: { title: "Trust & Transparency", desc: "Clear pricing, no hidden fees, and honest advice." },
          lang: { title: "Arabic & Spanish Native", desc: "We speak your language and the local language fluently." },
          exp: { title: "Local Credibility", desc: "Years of experience dealing with Catalan bureaucracy." },
          privacy: { title: "Privacy Focused", desc: "Discretion is our priority for VIP and medical clients." }
        }
      },
      testimonials: {
        title: "Client Stories",
        subtitle: "Real feedback from our valued clients.",
        items: [
          { name: "Mr. Al-Mansour", location: "Riyadh, KSA", text: "The medical accompaniment was exceptional. They handled the hospital translation perfectly.", type: "Medical Patient" },
          { name: "Sarah B.", location: "Dubai, UAE", text: "Getting my student residency was a nightmare until I found Barcelona Simply. Highly recommended.", type: "Student" },
          { name: "Khalid", location: "Doha, Qatar", text: "Professional, punctual, and very discrete. The VIP concierge service exceeded expectations.", type: "VIP Client" },
          { name: "Fatima", location: "Kuwait", text: "They helped my family settle, find a school, and get our papers sorted in record time.", type: "Family Relocation" },
        ]
      },
      homeAppointment: {
        title: "Book Your Service in Seconds",
        subtitle: "Don't wait for bureaucracy. Secure your assistance now.",
        steps: {
          step1: "Select Service",
          step2: "Choose Date",
          step3: "Confirm via WhatsApp",
        },
        cta: "Start Booking"
      },
      ctaSection: {
        title: "Planning Your Trip to Barcelona?",
        subtitle: "Ensure a hassle-free experience with our professional assistance.",
        buttonText: "Contact Us on WhatsApp",
      },
      pricing: {
        title: "Transparent Service Packages",
        subtitle: "Choose the level of support that fits your needs. No hidden costs.",
        cta: "Select Plan",
        bookWhatsapp: "Book via WhatsApp",
        categories: {
          medical: {
            title: "Medical Accompaniment",
            subtitle: "Professional support for your health journey.",
            tiers: [
              { name: "Basic Visit", price: "€150", desc: "Single Appointment", features: ["1 Medical Appointment", "2 Hours Accompaniment", "On-site Translation", "Pharmacy Assistance"] },
              { name: "Standard Care", price: "€400", desc: "Full Check-up Support", features: ["3 Medical Appointments", "Translation of Reports", "Test Coordination", "Follow-up Call"], highlight: true },
              { name: "VIP Medical", price: "€950", desc: "Comprehensive Care", features: ["Unlimited Appointments (1 Week)", "Hospital Admission Support", "24/7 On-Call Support", "Private Transport Coordination"] }
            ]
          },
          admin: {
            title: "Administrative & Legal",
            subtitle: "Fast-track your paperwork.",
            tiers: [
              { name: "Essential", price: "€150", desc: "Single Procedure", features: ["NIE Appointment Booking", "Form Filling", "1 Office Visit Accompaniment", "Tax Form Preparation"] },
              { name: "Residency Bundle", price: "€550", desc: "Complete Process", features: ["Visa Application Support", "TIE Card Processing", "Empadronamiento", "Bank Account Opening", "Legal Translation Coordination"], highlight: true }
            ]
          },
          student: {
            title: "Student Packages",
            subtitle: "Settle in for your studies.",
            tiers: [
              { name: "Settlement Pack", price: "€450", desc: "Arrival Support", features: ["TIE/Residency Card", "University Registration Help", "Housing Search Assistance", "Sim Card & Bank Setup"] }
            ]
          },
          vip: {
            title: "VIP Concierge",
            subtitle: "Exclusive lifestyle management.",
            tiers: [
              { name: "Daily Assistant", price: "€300", desc: "Per Day (8h)", features: ["Personal Assistant", "Shopping & Reservations", "Transport Management", "On-Demand Support"] },
              { name: "Weekly Platinum", price: "€1800", desc: "Full Week Support", features: ["Dedicated 24/7 Manager", "Full Itinerary Planning", "Priority Reservations", "Crisis Management"] }
            ]
          }
        },
        alaCarte: {
          title: "Individual Services",
          items: [
            { name: "Hourly Assistance", price: "€50/hr", desc: "Minimum 3 hours" },
            { name: "Airport Pickup Coordination", price: "€80", desc: "Luxury car arrangement" },
            { name: "Property Viewing", price: "€100", desc: "Per viewing with translation" }
          ]
        },
        faq: {
          title: "Frequently Asked Questions",
          items: [
            { q: "Do you handle the visa application directly?", a: "We assist with the entire file preparation and appointments, but the final submission is personal." },
            { q: "Can you assist with family medical trips?", a: "Yes, we specialize in family medical tourism, coordinating appointments for multiple family members." },
            { q: "Is payment required upfront?", a: "We usually require a 50% deposit to secure appointments and begin work." }
          ]
        },
        finalCta: {
          title: "Ready to Start?",
          subtitle: "Let us handle the details while you enjoy Barcelona.",
          button: "Chat on WhatsApp"
        }
      },
      contact: {
        title: "Get in Touch",
        subtitle: "We are ready to assist you. Contact us via WhatsApp for the fastest response.",
        whatsapp: "Chat on WhatsApp",
        formTitle: "Send us a Request"
      },
      appointmentWizard: {
        steps: {
          service: "Service",
          datetime: "Date",
          details: "Details"
        },
        labels: {
          selectService: "Select Service Type",
          selectDate: "Preferred Date",
          selectTime: "Time Preference",
          name: "Full Name",
          email: "Email",
          phone: "Phone (with country code)",
          message: "Additional Details"
        },
        buttons: {
          next: "Next",
          back: "Back",
          confirm: "Confirm Request",
          finish: "Done"
        },
        success: {
          title: "Request Sent!",
          message: "We will contact you shortly to confirm your appointment."
        }
      },
      blog: {
        title: "Barcelona Guides & Insights",
        subtitle: "Expert advice on residency, medical care, and luxury travel in Barcelona.",
        readMore: "Read Article",
        categories: {
          all: "All",
          medical: "Medical Tourism",
          admin: "Legal & Residency",
          study: "Study in Spain",
          vip: "VIP Lifestyle",
          tips: "Travel Tips",
        },
        posts: [
          {
            id: '1',
            slug: 'medical-tourism-barcelona-guide',
            title: 'Medical Tourism in Barcelona: A Guide for GCC Patients',
            excerpt: 'Why Barcelona is a top destination for medical treatment, covering top hospitals like Teknon and Quirón.',
            category: 'medical',
            image: 'https://picsum.photos/800/600?image=1059',
            date: 'Nov 15, 2023',
            author: 'Medical Team',
            seoTitle: 'Medical Tourism Barcelona: Guide for Arab Patients',
            metaDesc: 'Complete guide to medical treatment in Barcelona for GCC citizens. Best hospitals, visa requirements, and accompaniment services.',
            content: {
              intro: 'Barcelona is ranked among the top medical destinations globally. For patients from Saudi Arabia, UAE, and Qatar, it offers high-quality healthcare at competitive rates.',
              sections: [
                { title: 'Top Hospitals', content: 'Hospitals like Teknon Medical Center and Hospital Clínic are world-renowned for oncology, cardiology, and ophthalmology.' },
                { title: 'The Language Barrier', content: 'While doctors speak English, nursing staff often do not. Having a medical interpreter is crucial for comfort and accuracy.' },
                { title: 'Visa for Medical Treatment', content: 'We assist in gathering medical reports required for the Spanish Medical Visa application.' }
              ],
              conclusion: 'Ensure your health journey is smooth with our professional accompaniment services.'
            }
          },
          {
            id: '2',
            slug: 'nie-tie-residency-spain',
            title: 'NIE vs TIE: Everything You Need to Know',
            excerpt: 'Understanding the difference between NIE and TIE is the first step to residency in Spain.',
            category: 'admin',
            image: 'https://picsum.photos/800/600?image=1076',
            date: 'Nov 10, 2023',
            author: 'Legal Team',
            seoTitle: 'How to get NIE and TIE in Barcelona - Step by Step',
            metaDesc: 'Learn the difference between NIE and TIE and how to obtain them in Barcelona. Professional administrative assistance.',
            content: {
              intro: 'The NIE is a number, the TIE is the physical card. This distinction confuses many newcomers.',
              sections: [
                { title: 'What is the NIE?', content: 'The Foreigner Identity Number. You need it for taxes, buying property, or accepting an inheritance.' },
                { title: 'What is the TIE?', content: 'The Foreigner Identity Card. It proves your legal residence in Spain (Student, Work, Non-Lucrative).' },
                { title: 'How we help', content: 'We secure the appointment (Cita Previa), fill the forms (EX-15/EX-17), and pay the taxes (Modelo 790) for you.' }
              ],
              conclusion: 'Don\'t let bureaucracy stop you. Contact us for fast NIE processing.'
            }
          },
          {
            id: '3',
            slug: 'luxury-halal-tourism-barcelona',
            title: 'Luxury & Halal Tourism in Barcelona',
            excerpt: 'A VIP guide to halal dining, private shopping, and luxury stays in Catalonia.',
            category: 'vip',
            image: 'https://picsum.photos/800/600?image=1048',
            date: 'Oct 25, 2023',
            author: 'Concierge Team',
            seoTitle: 'Luxury Halal Tourism Barcelona - VIP Guide',
            metaDesc: 'Discover the best halal fine dining and luxury shopping experiences in Barcelona. Tailored for Gulf visitors.',
            content: {
              intro: 'Barcelona offers a blend of European luxury and accommodating services for Muslim travelers.',
              sections: [
                { title: 'Halal Fine Dining', content: 'We can reserve private dining rooms in top restaurants that cater to halal dietary requirements.' },
                { title: 'Private Shopping', content: 'Experience Passeig de Gràcia with a personal shopper and private viewings in boutiques like Chanel and Hermes.' },
                { title: 'Accommodation', content: 'We recommend 5-star hotels like the Mandarin Oriental or private luxury villas in Pedralbes.' }
              ],
              conclusion: 'Experience the best of Barcelona with our VIP concierge.'
            }
          }
        ],
        cta: {
          title: "Need personalized advice?",
          text: "Our experts are ready to answer your specific questions via WhatsApp.",
          button: "Contact Us Now"
        }
      },
      chat: {
        title: "Barcelona Support",
        placeholder: "Type your question...",
        send: "Send",
        welcome: "Welcome to Barcelona Simply. How can we assist with your visit today?",
        whatsapp: "Chat on WhatsApp",
        agent_unavailable: "Please contact us on WhatsApp for immediate assistance."
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À Propos",
        pricing: "Tarifs",
        contact: "Contact",
        blog: "Guides",
        appointment: "Rendez-vous",
      },
      hero: {
        title: "Votre Partenaire de Confiance à Barcelone",
        subtitle: "Assistance médicale, administrative et conciergerie VIP pour les visiteurs francophones et du Golfe.",
        cta: "Consultation Gratuite",
        ctaSecondary: "Voir les Services",
        trustBadge: "Confiance de +500 familles",
      },
      servicesPage: {
        title: "Services d'Assistance Premium",
        subtitle: "Nous facilitons vos démarches médicales, administratives et votre installation à Barcelone.",
        buttons: {
          book: "Réserver par WhatsApp",
          more: "Détails"
        }
      },
      services: {
        items: {
          medical: { 
            title: "Accompagnement Médical", 
            cardDesc: "Interprétariat médical et prise de rendez-vous.",
            heroImage: "https://picsum.photos/1200/600?image=10",
            summary: "Nous vous accompagnons dans les meilleurs hôpitaux de Barcelone. Nous gérons la prise de rendez-vous, la traduction médicale français-espagnol-arabe et le suivi post-opératoire.",
            whoFor: "Patients internationaux cherchant l'excellence médicale.",
            benefits: ["Rendez-vous prioritaires", "Traduction précise", "Gestion admission", "Suivi dossier"],
            features: ["Rendez-vous Spécialistes", "Interprète sur place", "Traduction Rapports", "Aide Pharmacie"],
            processTitle: "Votre Parcours Santé",
            process: [
              { step: "Consultation", desc: "Analyse de vos besoins médicaux." },
              { step: "Coordination", desc: "Réservation auprès des professeurs." },
              { step: "Accompagnement", desc: "Présence physique lors des visites." }
            ],
            faq: [
              { q: "Travaillez-vous avec le secteur privé ?", a: "Oui, principalement avec Teknon, Quirón et Dexeus." }
            ]
          },
          admin: { 
            title: "Assistance Administrative", 
            cardDesc: "Obtention NIE, TIE et Résidence simplifiée.",
            heroImage: "https://picsum.photos/1200/600?image=1068",
            summary: "Évitez les tracas administratifs. Nous gérons vos demandes de NIE, recensements (empadronamiento) et ouvertures de comptes bancaires.",
            whoFor: "Nouveaux résidents et investisseurs.",
            benefits: ["Gain de temps", "Dossiers conformes", "Rendez-vous rapides", "Sérénité"],
            features: ["Obtention NIE/TIE", "Visa Investisseur", "Recensement Mairie", "Compte Bancaire"],
            processTitle: "Processus Administratif",
            process: [
              { step: "Audit", desc: "Vérification des documents." },
              { step: "Rendez-vous", desc: "Prise de Cita Previa rapide." },
              { step: "Dépôt", desc: "Accompagnement au bureau des étrangers." }
            ],
            faq: [
              { q: "Garantissez-vous le NIE ?", a: "Nous garantissons la conformité du dossier et l'accompagnement." }
            ]
          },
          study: { 
            title: "Pack Étudiant & Université", 
            cardDesc: "Visa, Logement et Inscription universitaire.",
            heroImage: "https://picsum.photos/1200/600?image=101",
            summary: "Idéal pour les étudiants marocains et du Golfe. Nous gérons le renouvellement de visa, la carte TIE et la recherche de logement étudiant.",
            whoFor: "Étudiants internationaux.",
            benefits: ["Statut légal assuré", "Logement sécurisé", "Support inscription", "Tranquillité parents"],
            features: ["Renouvellement Visa", "Carte de Séjour TIE", "Inscription Fac", "Recherche Appartement"],
            processTitle: "Installation Étudiant",
            process: [
              { step: "Visa", desc: "Analyse des requis consulaires." },
              { step: "Logement", desc: "Visites d'appartements étudiants." },
              { step: "Légalisation", desc: "Obtention de la carte TIE." }
            ],
            faq: [
              { q: "Aidez-vous pour les universités privées ?", a: "Oui, nous assistons pour TBS, ESADE, etc." }
            ]
          },
          vip: { 
            title: "Conciergerie VIP", 
            cardDesc: "Services de luxe et discrétion absolue.",
            heroImage: "https://picsum.photos/1200/600?image=1074",
            summary: "Gestion lifestyle complète : chauffeurs privés, sécurité, shopping exclusif et gestion immobilière pour nos clients privilégiés.",
            whoFor: "VIP et investisseurs.",
            benefits: ["Confidentialité", "Assistant 24/7", "Logistique Luxe", "Accès Exclusif"],
            features: ["Chauffeur Privé", "Hôtels 5 Étoiles", "Personal Shopping", "Gestion Propriété"],
            processTitle: "Standard VIP",
            process: [
              { step: "Profilage", desc: "Analyse de vos besoins." },
              { step: "Itinéraire", desc: "Planification sur mesure." },
              { step: "Support 24/7", desc: "Disponible à tout moment." }
            ],
            faq: [
              { q: "Proposez-vous la sécurité ?", a: "Oui, nous pouvons organiser une sécurité rapprochée." }
            ]
          },
          trans: { 
            title: "Interprétariat Affaires", 
            cardDesc: "Traduction Arabe-Espagnol-Français pour réunions.",
            heroImage: "https://picsum.photos/1200/600?image=103",
            summary: "Facilitez vos affaires en Espagne avec nos interprètes professionnels pour vos négociations et réunions.",
            whoFor: "Hommes d'affaires et délégations.",
            benefits: ["Maîtrise culturelle", "Vocabulaire business", "Confidentialité", "Professionnalisme"],
            features: ["Interprétariat Réunion", "Négociation Immo", "Traduction Légale", "Salons Pro"],
            processTitle: "Réservation",
            process: [
              { step: "Briefing", desc: "Contexte de la réunion." },
              { step: "Présence", desc: "Support sur site." },
              { step: "Suivi", desc: "Résumé et traduction." }
            ],
            faq: [
              { q: "Est-ce une traduction jurée ?", a: "Non, c'est de l'interprétariat oral d'affaires." }
            ]
          },
          family: {
            title: "Relocalisation Famille",
            cardDesc: "Installation complète pour familles expatriées.",
            heroImage: "https://picsum.photos/1200/600?image=1012",
            summary: "Nous gérons l'inscription scolaire, les contrats d'eau/électricité et l'orientation pour une installation en douceur.",
            whoFor: "Familles s'installant à Barcelone.",
            benefits: ["Orientation scolaire", "Logement famille", "Installation services", "Douceur d'arrivée"],
            features: ["Recherche École", "Contrats Services", "Personnel Maison", "Guide Quartier"],
            processTitle: "Étapes",
            process: [
              { step: "Besoins", desc: "Analyse scolarité et vie." },
              { step: "Recherche", desc: "Visites ciblées." },
              { step: "Installation", desc: "Mise en service maison." }
            ],
            faq: [
              { q: "Aidez-vous avec le Lycée Français ?", a: "Oui, nous connaissons bien les écoles internationales." }
            ]
          }
        },
      },
      howItWorks: {
        title: "Comment Ça Marche",
        steps: [
          { title: "Contact", desc: "Écrivez-nous sur WhatsApp." },
          { title: "Proposition", desc: "Plan clair et devis transparent." },
          { title: "Arrivée", desc: "Accueil et gestion des démarches." },
          { title: "Finalisation", desc: "Suivi jusqu'à satisfaction." }
        ]
      },
      whyUs: {
        title: "Pourquoi Nous Choisir",
        subtitle: "Expertise locale et compréhension culturelle.",
        items: {
          trust: { title: "Confiance", desc: "Transparence totale et honnêteté." },
          lang: { title: "Polyglotte", desc: "Français, Arabe, Espagnol, Anglais." },
          exp: { title: "Expertise", desc: "Maîtrise de la bureaucratie locale." },
          privacy: { title: "Discrétion", desc: "Priorité absolue pour nos clients." }
        }
      },
      testimonials: {
        title: "Témoignages",
        subtitle: "Ce que nos clients disent de nous.",
        items: [
          { name: "Karim M.", location: "Casablanca, Maroc", text: "Service impeccable pour mon NIE et l'installation de mon entreprise.", type: "Entrepreneur" },
          { name: "Famille Benali", location: "Paris/Alger", text: "Ils ont trouvé l'école parfaite pour nos enfants. Merci !", type: "Relocalisation" },
        ]
      },
      homeAppointment: {
        title: "Réservez en 3 Clics",
        subtitle: "Ne perdez pas de temps avec l'administration.",
        steps: {
          step1: "Service",
          step2: "Date",
          step3: "Confirmation WhatsApp",
        },
        cta: "Réserver"
      },
      ctaSection: {
        title: "Besoin d'assistance immédiate ?",
        subtitle: "Notre équipe est disponible pour vous aider.",
        buttonText: "Contact WhatsApp",
      },
      pricing: {
        title: "Nos Forfaits",
        subtitle: "Des tarifs clairs pour un service premium.",
        cta: "Choisir",
        bookWhatsapp: "Réserver",
        categories: {
          medical: {
            title: "Médical",
            subtitle: "Santé & Sérénité",
            tiers: [
              { name: "Visite Simple", price: "€150", desc: "1 Rendez-vous", features: ["1 Rdv Médical", "2h Accompagnement", "Traduction sur place", "Aide Pharmacie"] },
              { name: "Pack Soins", price: "€400", desc: "Suivi Complet", features: ["3 Rdv Médicaux", "Traduction Rapports", "Coordination tests", "Suivi téléphonique"], highlight: true },
              { name: "VIP Santé", price: "€950", desc: "Prise en charge totale", features: ["Rdv Illimités (1 sem)", "Support Hospitalisation", "Astreinte 24/7", "Gestion Transport"] }
            ]
          },
          admin: {
            title: "Administratif",
            subtitle: "Papiers en règle",
            tiers: [
              { name: "Essentiel", price: "€150", desc: "Procédure unique", features: ["Rdv NIE", "Remplissage Formulaires", "Accompagnement Police", "Taxes"] },
              { name: "Pack Résidence", price: "€550", desc: "Installation", features: ["Support Visa", "Carte TIE", "Empadronamiento", "Banque", "Traduction Assermentée (coord)"], highlight: true }
            ]
          },
          student: {
            title: "Étudiant",
            subtitle: "Pack Installation",
            tiers: [
              { name: "Pack Étudiant", price: "€450", desc: "Arrivée sereine", features: ["Carte TIE", "Inscription Fac", "Aide Logement", "Sim & Banque"] }
            ]
          },
          vip: {
            title: "VIP",
            subtitle: "Sur Mesure",
            tiers: [
              { name: "Assistant Jour", price: "€300", desc: "Par Jour (8h)", features: ["Assistant Personnel", "Shopping & Réservations", "Transport", "Support immédiat"] },
              { name: "Semaine Platinum", price: "€1800", desc: "Support Semaine", features: ["Manager dédié 24/7", "Planning complet", "Accès Prioritaire", "Gestion Crise"] }
            ]
          }
        },
        alaCarte: {
          title: "À la Carte",
          items: [
            { name: "Assistance Horaire", price: "€50/h", desc: "Min 3 heures" },
            { name: "Accueil Aéroport", price: "€80", desc: "Voiture confort" },
            { name: "Visite Immobilière", price: "€100", desc: "Par visite + traduction" }
          ]
        },
        faq: {
          title: "FAQ",
          items: [
            { q: "Faites-vous les visas ?", a: "Nous préparons tout le dossier, le dépôt est personnel." },
            { q: "Paiement ?", a: "Acompte de 50% pour démarrer la mission." }
          ]
        },
        finalCta: {
          title: "On commence ?",
          subtitle: "Laissez-nous gérer les détails.",
          button: "Discuter sur WhatsApp"
        }
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Réponse rapide via WhatsApp.",
        whatsapp: "WhatsApp",
        formTitle: "Formulaire"
      },
      appointmentWizard: {
        steps: {
          service: "Service",
          datetime: "Date",
          details: "Détails"
        },
        labels: {
          selectService: "Type de Service",
          selectDate: "Date Souhaitée",
          selectTime: "Heure",
          name: "Nom",
          email: "Email",
          phone: "Téléphone",
          message: "Message"
        },
        buttons: {
          next: "Suivant",
          back: "Retour",
          confirm: "Confirmer",
          finish: "Fini"
        },
        success: {
          title: "Envoyé !",
          message: "Nous vous recontactons très vite."
        }
      },
      blog: {
        title: "Blog & Conseils",
        subtitle: "Guides pratiques pour Barcelone.",
        readMore: "Lire",
        categories: {
          all: "Tout",
          medical: "Médical",
          admin: "Administratif",
          study: "Études",
          vip: "VIP",
          tips: "Conseils",
        },
        posts: [
          {
            id: '1',
            slug: 'medical-tourism-barcelona-guide',
            title: 'Se soigner à Barcelone : Guide Complet',
            excerpt: 'Les meilleurs hôpitaux et comment s\'organiser.',
            category: 'medical',
            image: 'https://picsum.photos/800/600?image=1059',
            date: '15 Nov, 2023',
            author: 'Équipe Médicale',
            seoTitle: 'Tourisme Médical Barcelone : Guide Francophone',
            metaDesc: 'Tout savoir sur les soins médicaux à Barcelone. Hôpitaux, interprètes et démarches.',
            content: {
              intro: 'Barcelone est une destination phare pour la santé en Europe.',
              sections: [
                { title: 'Hôpitaux', content: 'Teknon, Clinique et Quirón sont au sommet.' },
                { title: 'Langue', content: 'Nos accompagnateurs francophones sont essentiels.' }
              ],
              conclusion: 'Contactez-nous pour organiser votre séjour médical.'
            }
          },
          {
            id: '2',
            slug: 'nie-tie-residency-spain',
            title: 'NIE et TIE : Quelle différence ?',
            excerpt: 'Comprendre les documents essentiels en Espagne.',
            category: 'admin',
            image: 'https://picsum.photos/800/600?image=1076',
            date: '10 Nov, 2023',
            author: 'Juridique',
            seoTitle: 'Obtenir NIE et TIE à Barcelone',
            metaDesc: 'Guide pratique pour obtenir son NIE et sa carte de séjour TIE à Barcelone.',
            content: {
              intro: 'Le NIE est un numéro, la TIE est la carte physique.',
              sections: [
                { title: 'Le NIE', content: 'Obligatoire pour tout acte économique.' },
                { title: 'La TIE', content: 'Preuve de résidence pour les non-européens.' }
              ],
              conclusion: 'Nous gérons les rendez-vous pour vous.'
            }
          }
        ],
        cta: {
          title: "Une question ?",
          text: "Écrivez-nous.",
          button: "Contact"
        }
      },
      chat: {
        title: "Support",
        placeholder: "Question...",
        send: "Envoyer",
        welcome: "Bonjour, comment pouvons-nous vous aider ?",
        whatsapp: "WhatsApp",
        agent_unavailable: "Contactez-nous sur WhatsApp."
      }
    },
    ar: {
      nav: {
        home: "الرئيسية",
        services: "خدماتنا",
        about: "من نحن",
        pricing: "الباقات",
        contact: "اتصل بنا",
        blog: "دليل برشلونة",
        appointment: "حجز موعد",
      },
      hero: {
        title: "رفيقك الموثوق في برشلونة",
        subtitle: "خدمات المرافقة الطبية، والإجراءات الإدارية، والكونسيرج الفاخر خصيصاً للزوار من دول الخليج. نضمن لك الراحة والخصوصية التامة.",
        cta: "استشارة VIP مجانية",
        ctaSecondary: "تصفح الخدمات",
        trustBadge: "ثقة أكثر من 500 عائلة خليجية",
      },
      servicesPage: {
        title: "خدمات النخبة في برشلونة",
        subtitle: "من المواعيد الطبية مع كبار الأطباء إلى إجراءات الإقامة المعقدة، نحن نهتم بكل التفاصيل لتستمتع برحلتك.",
        buttons: {
          book: "حجز عبر واتساب",
          more: "تفاصيل الخدمة"
        }
      },
      services: {
        items: {
          medical: { 
            title: "المرافقة الطبية والعلاجية", 
            cardDesc: "الوصول لأفضل الأطباء مع مترجم طبي خاص.",
            heroImage: "https://picsum.photos/1200/600?image=10",
            summary: "برشلونة وجهة عالمية للتميز الطبي. نحن نكون جسر التواصل بينك وبين أفضل المستشفيات (تيكنون، كيرون، باراكير). ندير المواعيد، نوفر الترجمة الطبية الفورية، ونضمن راحتك طوال رحلة العلاج.",
            whoFor: "المرضى من دول الخليج الباحثين عن العلاج أو الفحوصات.",
            benefits: ["مواعيد أولوية مع كبار الاستشاريين", "ترجمة طبية دقيقة (عربي/إسباني)", "إدارة إجراءات الدخول للمستشفى", "متابعة ما بعد العلاج"],
            features: ["حجز مواعيد مع البروفيسورات", "مترجم فوري في العيادة", "ترجمة وتصديق التقارير", "توفير الأدوية من الصيدلية"],
            processTitle: "رحلتك العلاجية",
            process: [
              { step: "الاستشارة", desc: "نفهم حالتك الطبية والتخصص المطلوب." },
              { step: "التنسيق", desc: "نؤكد المواعيد مع أفضل الأطباء." },
              { step: "المرافقة", desc: "مساعدك الشخصي يرافقك للترجمة والاهتمام." }
            ],
            faq: [
              { q: "ما هي المستشفيات التي تتعاملون معها؟", a: "نتعامل مع تيكنون، كيرون، ديكسيوس، وباراكير وغيرها." },
              { q: "هل الترجمة الطبية دقيقة؟", a: "نعم، مساعدونا ذوو خبرة في المصطلحات الطبية." }
            ]
          },
          admin: { 
            title: "الخدمات الإدارية والقانونية", 
            cardDesc: "تخليص معاملات NIE والإقامة والفيزا.",
            heroImage: "https://picsum.photos/1200/600?image=1068",
            summary: "البيروقراطية الإسبانية معقدة، لكننا نبسطها لك. سواء كنت تحتاج رقم NIE، أو الفيزا الذهبية، أو فتح حساب بنكي، خبراؤنا المحليون يديرون المواعيد والأوراق نيابة عنك.",
            whoFor: "المستثمرون، المقيمون الجدد، وملاك العقارات.",
            benefits: ["بدون حاجز لغة", "تجهيز صحيح للملفات", "استراتيجيات للحصول على مواعيد", "إجراءات خالية من التوتر"],
            features: ["طلبات NIE و TIE", "دعم الفيزا الذهبية", "تسجيل السكن (Empadronamiento)", "فتح الحسابات البنكية"],
            processTitle: "الإجراءات الإدارية",
            process: [
              { step: "مراجعة المستندات", desc: "ندقق أوراقك لضمان القبول." },
              { step: "الموعد", desc: "نحجز الموعد الحكومي (Cita Previa) الصعب." },
              { step: "التنفيذ", desc: "نرافقك للشرطة أو مكتب الأجانب." }
            ],
            faq: [
              { q: "كم يستغرق الحصول على NIE؟", a: "نحاول دائماً الحصول على أقرب المواعيد، غالباً أسرع بأسابيع من المعتاد." }
            ]
          },
          study: { 
            title: "دعم الطلاب والجامعات", 
            cardDesc: "دعم كامل للطلاب العرب: فيزا، سكن، وتسجيل.",
            heroImage: "https://picsum.photos/1200/600?image=101",
            summary: "هل تنتقل للدراسة في برشلونة؟ نساعد الطلاب من السعودية، الكويت، قطر، وغيرها في تأمين فيزا الطالب، العثور على سكن آمن، وإتمام التسجيل الجامعي.",
            whoFor: "طلاب الجامعات وأولياء أمورهم.",
            benefits: ["وضع قانوني سليم", "سكن آمن وموثوق", "تواصل مع الجامعة", "راحة بال للأهل"],
            features: ["تجديد فيزا الطالب", "اصدار بطاقة TIE", "المساعدة في القبول الجامعي", "البحث عن سكن طلابي"],
            processTitle: "استقرار الطالب",
            process: [
              { step: "استراتيجية الفيزا", desc: "مراجعة متطلبات القنصلية." },
              { step: "السكن", desc: "إيجاد شقق أو سكن طلابي مناسب." },
              { step: "الإقامة", desc: "استخراج بطاقة TIE بعد الوصول." }
            ],
            faq: [
              { q: "هل تساعدون في الجامعات الخاصة؟", a: "نعم، نساعد في ESADE, IESE, UB وغيرها." }
            ]
          },
          vip: { 
            title: "كونسيرج VIP فاخر", 
            cardDesc: "إدارة أسلوب حياة حصري لكبار الشخصيات.",
            heroImage: "https://picsum.photos/1200/600?image=1074",
            summary: "لعملائنا الأكثر تميزاً، نقدم تجربة فاخرة متكاملة. من السائقين الخاصين والحماية الشخصية إلى التسوق الحصري وإدارة الممتلكات، نضمن السرية والتميز.",
            whoFor: "العائلات VIP، الدبلوماسيون، والمستثمرون.",
            benefits: ["خصوصية تامة (عقود سرية)", "مساعد شخصي 24/7", "لوجستيات فاخرة", "وصول حصري"],
            features: ["سائق خاص ونقل", "حجوزات فنادق 5 نجوم", "تسوق شخصي", "إدارة العقارات"],
            processTitle: "معايير VIP",
            process: [
              { step: "فهم الاحتياجات", desc: "تحليل متطلبات أسلوب حياتك." },
              { step: "البرنامج", desc: "تصميم خطة فاخرة دقيقة." },
              { step: "دعم 24/7", desc: "مدير مخصص رهن إشارتك دائماً." }
            ],
            faq: [
              { q: "هل تضمنون السرية؟", a: "بكل تأكيد. نحن معتادون على التعامل مع كبار الشخصيات بعقود سرية." }
            ]
          },
          trans: { 
            title: "الترجمة التجارية للأعمال", 
            cardDesc: "ترجمة فورية احترافية للاجتماعات والمفاوضات.",
            heroImage: "https://picsum.photos/1200/600?image=103",
            summary: "لا تدع اللغة تكون عائقاً لنجاح أعمالك. مترجمونا يغطون الفجوة في المفاوضات العقارية، الاجتماعات القانونية، والفعاليات التجارية.",
            whoFor: "رجال الأعمال، المستثمرون، والوفود.",
            benefits: ["فهم الفروق الثقافية", "مصطلحات تجارية", "سرية", "تمثيل احترافي"],
            features: ["ترجمة الاجتماعات", "دعم المفاوضات العقارية", "تنسيق الترجمة القانونية", "مرافقة المعارض"],
            processTitle: "الحجز",
            process: [
              { step: "التحضير", desc: "مراجعة سياق اجتماعك." },
              { step: "الحضور", desc: "مترجمنا يدعمك في الموقع." },
              { step: "المتابعة", desc: "المساعدة في ترجمة ملخص الاجتماع." }
            ],
            faq: [
              { q: "هل هذه ترجمة محلفة؟", a: "نحن ننسق الترجمة المحلفة للأوراق، لكن هذه الخدمة للترجمة الفورية الشفهية." }
            ]
          },
          family: {
            title: "خدمات انتقال العائلات",
            cardDesc: "خدمات انتقال سلسة للعائلات القادمة إلى إسبانيا.",
            heroImage: "https://picsum.photos/1200/600?image=1012",
            summary: "نقل عائلتك لبرشلونة يتطلب الكثير من التفاصيل. نحن نتولى البحث عن المدارس، تركيب الخدمات، التوجيه في الأحياء، وتوظيف المساعدة المنزلية.",
            whoFor: "العائلات المنتقلة للعمل أو الإقامة.",
            benefits: ["توجيه للمدارس المناسبة", "سكن عائلي", "تركيب الخدمات", "استقرار سهل"],
            features: ["البحث عن مدارس دولية", "عقود الخدمات", "توظيف العمالة المنزلية", "دليل الأحياء"],
            processTitle: "خطوات الانتقال",
            process: [
              { step: "تحليل الاحتياجات", desc: "المناهج الدراسية ونمط الحياة." },
              { step: "البحث عن منزل", desc: "معاينة عقارات تناسب العائلة." },
              { step: "الاستقرار", desc: "تجهيز الإنترنت والماء والبنك." }
            ],
            faq: [
              { q: "هل تساعدون في المدارس الأمريكية/البريطانية؟", a: "نعم، لدينا علاقات مع جميع المدارس الدولية الكبرى." }
            ]
          }
        },
      },
      howItWorks: {
        title: "تجربة سلسة ومريحة",
        steps: [
          { title: "الاستشارة", desc: "تواصل عبر واتساب. نستمع لاحتياجاتك بدقة." },
          { title: "العرض", desc: "نقدم خطة واضحة وباقة أسعار شفافة." },
          { title: "الوصول", desc: "نستقبلك في برشلونة ونتولى كافة الإجراءات." },
          { title: "الإتمام", desc: "نضمن إنجاز كل مهمة لرضاك التام." }
        ]
      },
      whyUs: {
        title: "لماذا يثق بنا عملاء الخليج",
        subtitle: "نجمع بين الخبرة الإسبانية المحلية والفهم العميق للثقافة العربية.",
        items: {
          trust: { title: "ثقة وشفافية", desc: "أسعار واضحة، بدون رسوم خفية، ونصيحة أمينة." },
          lang: { title: "عربي وإسباني", desc: "نتحدث لغتك واللغة المحلية بطلاقة." },
          exp: { title: "مصداقية محلية", desc: "سنوات من الخبرة في التعامل مع البيروقراطية الكتالونية." },
          privacy: { title: "تركيز على الخصوصية", desc: "السرية هي أولويتنا لعملاء VIP والمرضى." }
        }
      },
      testimonials: {
        title: "قصص العملاء",
        subtitle: "آراء حقيقية من عملائنا الكرام.",
        items: [
          { name: "السيد المنصور", location: "الرياض، السعودية", text: "المرافقة الطبية كانت استثنائية. تعاملوا مع الترجمة في المستشفى باحترافية تامة.", type: "مريض" },
          { name: "سارة ب.", location: "دبي، الإمارات", text: "كان الحصول على إقامة الطالب كابوساً حتى وجدت Barcelona Simply. أنصح بهم بشدة.", type: "طالبة" },
          { name: "خالد", location: "الدوحة، قطر", text: "احترافية، التزام بالوقت، وسرية تامة. خدمة الكونسيرج فاقت التوقعات.", type: "عميل VIP" },
          { name: "فاطمة", location: "الكويت", text: "ساعدوا عائلتي في الاستقرار، إيجاد مدرسة، وتجهيز أوراقنا في وقت قياسي.", type: "عائلة" },
        ]
      },
      homeAppointment: {
        title: "احجز خدمتك في ثوانٍ",
        subtitle: "لا تنتظر البيروقراطية. احجز مساعدتك الآن.",
        steps: {
          step1: "اختر الخدمة",
          step2: "حدد التاريخ",
          step3: "أكد عبر واتساب",
        },
        cta: "ابدأ الحجز"
      },
      ctaSection: {
        title: "تخطط لزيارة برشلونة؟",
        subtitle: "اضمن تجربة خالية من المتاعب مع مساعدتنا الاحترافية.",
        buttonText: "تواصل معنا عبر واتساب",
      },
      pricing: {
        title: "باقات خدمات شفافة",
        subtitle: "اختر مستوى الدعم الذي يناسب احتياجاتك. بدون تكاليف خفية.",
        cta: "اختر الباقة",
        bookWhatsapp: "احجز عبر واتساب",
        categories: {
          medical: {
            title: "المرافقة الطبية",
            subtitle: "دعم احترافي لرحلة علاجك",
            tiers: [
              { name: "زيارة أساسية", price: "€150", desc: "موعد واحد", features: ["موعد طبي واحد", "ساعتان مرافقة", "ترجمة فورية", "مساعدة الصيدلية"] },
              { name: "باقة العناية", price: "€400", desc: "دعم شامل", features: ["3 مواعيد طبية", "ترجمة التقارير", "تنسيق الفحوصات", "مكالمة متابعة"], highlight: true },
              { name: "VIP طبي", price: "€950", desc: "عناية متكاملة", features: ["مواعيد غير محدودة (أسبوع)", "دعم دخول المستشفى", "دعم هاتفي 24/7", "تنسيق نقل خاص"] }
            ]
          },
          admin: {
            title: "إداري وقانوني",
            subtitle: "تخليص الأوراق بسرعة",
            tiers: [
              { name: "أساسي", price: "€150", desc: "إجراء واحد", features: ["حجز موعد NIE", "تعبئة النماذج", "مرافقة مكتب واحد", "تجهيز الضرائب"] },
              { name: "باقة الإقامة", price: "€550", desc: "العملية الكاملة", features: ["دعم طلب الفيزا", "استخراج بطاقة TIE", "تسجيل السكن", "فتح حساب بنكي", "تنسيق ترجمة قانونية"], highlight: true }
            ]
          },
          student: {
            title: "باقات الطلاب",
            subtitle: "استقر للدراسة",
            tiers: [
              { name: "باقة الاستقرار", price: "€450", desc: "دعم الوصول", features: ["بطاقة TIE/الإقامة", "مساعدة التسجيل الجامعي", "المساعدة في البحث عن سكن", "شريحة اتصال وبنك"] }
            ]
          },
          vip: {
            title: "VIP كونسيرج",
            subtitle: "إدارة أسلوب الحياة",
            tiers: [
              { name: "مساعد يومي", price: "€300", desc: "يوم كامل (8 ساعات)", features: ["مساعد شخصي", "تسوق وحجوزات", "إدارة التنقلات", "دعم عند الطلب"] },
              { name: "الأسبوع البلاتيني", price: "€1800", desc: "دعم أسبوعي", features: ["مدير مخصص 24/7", "تخطيط كامل للرحلة", "حجوزات أولوية", "إدارة الأزمات"] }
            ]
          }
        },
        alaCarte: {
          title: "خدمات فردية",
          items: [
            { name: "مساعدة بالساعة", price: "€50/ساعة", desc: "حد أدنى 3 ساعات" },
            { name: "تنسيق استقبال المطار", price: "€80", desc: "ترتيب سيارة فاخرة" },
            { name: "معاينة عقار", price: "€100", desc: "للزيارة الواحدة مع ترجمة" }
          ]
        },
        faq: {
          title: "أسئلة شائعة",
          items: [
            { q: "هل تقومون بتقديم الفيزا مباشرة؟", a: "نحن نساعد في تجهيز الملف بالكامل وحجز الموعد، التقديم النهائي شخصي." },
            { q: "هل تساعدون في الرحلات العلاجية العائلية؟", a: "نعم، نتخصص في السياحة العلاجية العائلية وننسق المواعيد لعدة أفراد." },
            { q: "هل الدفع مطلوب مقدماً؟", a: "عادة نطلب عربون 50% لتأكيد المواعيد وبدء العمل." }
          ]
        },
        finalCta: {
          title: "جاهز للبدء؟",
          subtitle: "دعنا نهتم بالتفاصيل بينما تستمتع ببرشلونة.",
          button: "تحدث معنا عبر واتساب"
        }
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "نحن جاهزون لمساعدتك. تواصل عبر واتساب لأسرع استجابة.",
        whatsapp: "واتساب",
        formTitle: "أرسل طلباً"
      },
      appointmentWizard: {
        steps: {
          service: "الخدمة",
          datetime: "التاريخ",
          details: "التفاصيل"
        },
        labels: {
          selectService: "نوع الخدمة",
          selectDate: "التاريخ المفضل",
          selectTime: "الوقت",
          name: "الاسم الكامل",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف (مع الرمز الدولي)",
          message: "تفاصيل إضافية"
        },
        buttons: {
          next: "التالي",
          back: "رجوع",
          confirm: "تأكيد الطلب",
          finish: "تم"
        },
        success: {
          title: "تم الإرسال!",
          message: "سنتواصل معك قريباً لتأكيد الموعد."
        }
      },
      blog: {
        title: "أدلة ورؤى برشلونة",
        subtitle: "نصائح الخبراء حول الإقامة، العلاج، والسياحة الفاخرة في برشلونة.",
        readMore: "اقرأ المقال",
        categories: {
          all: "الكل",
          medical: "سياحة علاجية",
          admin: "قانوني وإقامة",
          study: "الدراسة في إسبانيا",
          vip: "نصائح VIP",
          tips: "نصائح سفر",
        },
        posts: [
          {
            id: '1',
            slug: 'medical-tourism-barcelona-guide',
            title: 'السياحة العلاجية في برشلونة: دليل للمرضى الخليجيين',
            excerpt: 'لماذا تعتبر برشلونة وجهة علاجية رائدة؟ تعرف على أفضل المستشفيات مثل تيكنون وكيرون.',
            category: 'medical',
            image: 'https://picsum.photos/800/600?image=1059',
            date: '15 نوفمبر 2023',
            author: 'الفريق الطبي',
            seoTitle: 'السياحة العلاجية في برشلونة - دليل المرضى العرب',
            metaDesc: 'دليل كامل للعلاج في برشلونة لمواطني دول الخليج. أفضل المستشفيات، متطلبات الفيزا، وخدمات المرافقة.',
            content: {
              intro: 'تصنف برشلونة ضمن أفضل الوجهات الطبية عالمياً. بالنسبة للمرضى من السعودية والإمارات وقطر، فهي توفر رعاية صحية عالية الجودة.',
              sections: [
                { title: 'أفضل المستشفيات', content: 'مستشفيات مثل مركز تيكنون الطبي ومستشفى كلينيك مشهورة عالمياً في الأورام والقلب والعيون.' },
                { title: 'حاجز اللغة', content: 'بينما يتحدث الأطباء الإنجليزية، غالباً ما لا يتحدثها طاقم التمريض. وجود مترجم طبي أمر حاسم للراحة والدقة.' },
                { title: 'فيزا العلاج', content: 'نحن نساعد في جمع التقارير الطبية المطلوبة لطلب الفيزا الطبية الإسبانية.' }
              ],
              conclusion: 'تأكد من أن رحلتك العلاجية سلسة مع خدمات المرافقة المحترفة لدينا.'
            }
          },
          {
            id: '2',
            slug: 'nie-tie-residency-spain',
            title: 'NIE مقابل TIE: كل ما تحتاج لمعرفته',
            excerpt: 'فهم الفرق بين NIE و TIE هو الخطوة الأولى للإقامة في إسبانيا.',
            category: 'admin',
            image: 'https://picsum.photos/800/600?image=1076',
            date: '10 نوفمبر 2023',
            author: 'الفريق القانوني',
            seoTitle: 'كيفية الحصول على NIE و TIE في برشلونة',
            metaDesc: 'تعرف على الفرق بين NIE و TIE وكيفية الحصول عليهما في برشلونة. مساعدة إدارية احترافية.',
            content: {
              intro: 'الـ NIE هو رقم، والـ TIE هي البطاقة الفعلية. هذا التمييز يربك الكثير من القادمين الجدد.',
              sections: [
                { title: 'ما هو NIE؟', content: 'رقم هوية الأجانب. تحتاجه للضرائب، شراء العقارات، أو قبول الميراث.' },
                { title: 'ما هي TIE؟', content: 'بطاقة هوية الأجانب. تثبت إقامتك القانونية في إسبانيا (طالب، عمل، غير ربحية).' },
                { title: 'كيف نساعد', content: 'نحن نحجز الموعد (Cita Previa)، نملأ النماذج، وندفع الضرائب نيابة عنك.' }
              ],
              conclusion: 'لا تدع البيروقراطية توقفك. تواصل معنا لمعالجة سريعة للـ NIE.'
            }
          },
          {
            id: '3',
            slug: 'luxury-halal-tourism-barcelona',
            title: 'السياحة الفاخرة والحلال في برشلونة',
            excerpt: 'دليل VIP للمطاعم الحلال، التسوق الخاص، والإقامات الفاخرة في كتالونيا.',
            category: 'vip',
            image: 'https://picsum.photos/800/600?image=1048',
            date: '25 أكتوبر 2023',
            author: 'فريق الكونسيرج',
            seoTitle: 'سياحة فاخرة وحلال في برشلونة - دليل VIP',
            metaDesc: 'اكتشف أفضل المطاعم الحلال الراقية وتجارب التسوق الفاخرة في برشلونة. مخصص للزوار من الخليج.',
            content: {
              intro: 'تقدم برشلونة مزيجاً من الرفاهية الأوروبية والخدمات المتوافقة مع المسافرين المسلمين.',
              sections: [
                { title: 'مطاعم حلال فاخرة', content: 'يمكننا حجز غرف طعام خاصة في أفضل المطاعم التي تلبي المتطلبات الغذائية الحلال.' },
                { title: 'تسوق خاص', content: 'جرب باسيو دي غراسيا مع متسوق شخصي وعروض خاصة في متاجر مثل شانيل وهيرميس.' },
                { title: 'الإقامة', content: 'نوصي بفنادق 5 نجوم مثل ماندارين أورينتال أو فلل فاخرة خاصة في بيدرالبس.' }
              ],
              conclusion: 'جرب أفضل ما في برشلونة مع خدمة الكونسيرج VIP لدينا.'
            }
          }
        ],
        cta: {
          title: "تحتاج نصيحة شخصية؟",
          text: "خبراؤنا مستعدون للإجابة على أسئلتك المحددة عبر واتساب.",
          button: "تواصل معنا الآن"
        }
      },
      chat: {
        title: "دعم برشلونة",
        placeholder: "اكتب سؤالك...",
        send: "إرسال",
        welcome: "مرحباً بك في Barcelona Simply. كيف يمكننا مساعدتك في زيارتك اليوم؟",
        whatsapp: "واتساب",
        agent_unavailable: "يرجى التواصل معنا عبر واتساب للحصول على مساعدة فورية."
      }
    }
  };
