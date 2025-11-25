
import { Translation, Language } from './types';
import React from 'react';

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
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
        { name: "A.K.", location: "Dubai", text: "Barcelona Simply made my first visit worry-free. Highly recommended!" },
        { name: "M.S.", location: "Riyadh", text: "They helped me register at my university and manage my residency smoothly." },
        { name: "F.H.", location: "Abu Dhabi", text: "Professional, friendly, and very reliable. I felt fully supported during all appointments." },
        { name: "L.T.", location: "Qatar", text: "Great VIP concierge service. Airport pickup and hotel arrangements were perfect." },
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
      subtitle: "Transparent, professional, and confidential services tailored for our Gulf clients. We speak your language and understand your needs.",
      cta: "Book This Package",
      bookWhatsapp: "Book via WhatsApp",
      packages: {
        vipGulf: {
          title: "VIP Gulf Pack",
          price: "€650",
          unit: "Family Assistance",
          desc: "For individuals or families needing premium accompaniment.",
          features: [
            "Airport coordination & luxury pickup",
            "Full-day Personal Assistant (Male/Female)",
            "Medical Accompaniment (2 Visits)",
            "Administrative Support",
            "Translation (up to 10 pages)",
            "School/University Visits",
            "Luxury Apartment Viewing",
            "Priority WhatsApp Support",
            "Full Confidentiality"
          ]
        },
        medical: {
          title: "Premium Medical Pack",
          price: "€320",
          unit: "Medical Trip",
          desc: "For medical visits, examinations, and clinic accompaniment.",
          features: [
            "Booking in top clinics (Teknon, Quirón...)",
            "Arabic-speaking accompaniment",
            "Medical translation",
            "Follow-up and reports",
            "Support for 2 appointment days",
            "VIP Privacy Protocol"
          ]
        },
        luxury: {
          title: "Luxury Stay Pack",
          price: "€900",
          unit: "3 Days",
          desc: "For VIP short stays requiring full management.",
          features: [
            "3 Full Days of Personal Assistance",
            "Hotel & Apartment Coordination",
            "Private Driver Coordination",
            "Premium Shopping Assistance",
            "Clinic Support",
            "Tourism & Lifestyle Guidance",
            "Arabic Support",
            "24/7 Priority Communication"
          ]
        },
        study: {
           title: "Study & Residency Pack",
           price: "€450",
           unit: "Student Setup",
           desc: "For students and families needing school/university & residency setup.",
           features: [
              "University Enrollment Support",
              "Student Visa Paperwork",
              "TIE Card Application",
              "Housing Search Assistance",
              "Bank Account Setup",
              "Local Orientation"
           ]
        }
      },
      alaCarte: {
        title: "Individual Service Prices (À La Carte)",
        subtitle: "Flexible options tailored to your specific needs.",
        items: [
          { name: "Medical Appointment Accompaniment", price: "€120", desc: "Per visit" },
          { name: "Administrative Procedures Support", price: "€100", desc: "Per procedure" },
          { name: "Residency / NIE Guidance", price: "€80", desc: "Consultation" },
          { name: "University or School Visit Assistance", price: "€150", desc: "Per visit" },
          { name: "Document Translation (Arabic–Spanish)", price: "From €20", desc: "Per page" },
          { name: "Hourly Personal Assistant", price: "€40/hr", desc: "Min. 2 hours" },
          { name: "VIP Shopping Assistance", price: "€60/hr", desc: "Luxury guide" },
          { name: "Document Preparation & Consulting", price: "From €50", desc: "Per file" }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Is the service legal?", a: "Yes, we are a registered entity in Spain ensuring full legal compliance and confidentiality." },
          { q: "What is included in accompaniment?", a: "It includes physical presence, translation, form filling, and guidance during appointments." },
          { q: "Are female assistants available?", a: "Yes, we can provide female assistants upon request to ensure comfort and privacy for families." },
          { q: "Can you coordinate private drivers?", a: "Absolutely. We work with trusted luxury transport providers for your convenience." },
          { q: "How does payment work?", a: "We accept credit cards, bank transfers, and cash. A deposit may be required for large packages." },
          { q: "Privacy policy for Gulf clients?", a: "Privacy is our core value. We sign non-disclosure agreements (NDAs) for VIP clients." }
        ]
      },
      finalCta: {
        title: "Plan Your Stay With Experts",
        subtitle: "Contact our Arabic-speaking team now — We'll plan every step of your stay in Barcelona.",
        button: "Contact via WhatsApp"
      }
    },
    contact: {
      title: "Book Your Appointment",
      subtitle: "Follow the steps below to schedule your service. It only takes a minute.",
      whatsapp: "Chat on WhatsApp",
    },
    appointmentWizard: {
      steps: {
        service: "Service",
        datetime: "Date & Time",
        details: "Details"
      },
      labels: {
        selectService: "Select the service you need",
        selectDate: "Pick a preferred date",
        selectTime: "Preferred time slot",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number (with country code)",
        message: "Any specific requirements?"
      },
      buttons: {
        next: "Next Step",
        back: "Back",
        confirm: "Confirm Appointment",
        finish: "Done"
      },
      success: {
        title: "Request Received!",
        message: "We have received your appointment request. Our team will contact you via WhatsApp or Email shortly to confirm."
      }
    },
    blog: {
      title: "Barcelona Insights & Guides",
      subtitle: "Expert advice, tips, and guides for Arabic visitors, students, and patients in Barcelona.",
      readMore: "Read Article",
      categories: {
        all: "All",
        medical: "Medical",
        admin: "Administrative",
        study: "Study",
        vip: "VIP & Travel",
        tips: "Tips",
      },
      posts: [
        {
          id: '1',
          slug: 'how-to-book-medical-appointment-barcelona',
          title: 'How to Book a Specialist Medical Appointment in Barcelona',
          excerpt: 'A comprehensive guide for international patients on navigating the Spanish healthcare system and seeing a specialist.',
          category: 'medical',
          image: 'https://picsum.photos/800/600?image=1059',
          date: 'Oct 15, 2023',
          author: 'Barcelona Simply Team',
          content: {
            intro: 'Barcelona is home to some of the best medical facilities in Europe. However, for non-Spanish speakers, booking an appointment can be a challenge. This guide breaks down the process.',
            sections: [
              { title: 'Why Choose Barcelona for Medical Care?', content: 'Barcelona offers world-class hospitals like Teknon, Quirón, and Hospital Clínic. The quality of care is high, and costs are often lower than in the US or UK.' },
              { title: 'Step 1: Choose Public vs. Private', content: 'For international visitors, private healthcare is the standard route. It offers faster access to specialists and often has multilingual staff. We recommend private clinics for speed and comfort.' },
              { title: 'Step 2: Finding the Right Specialist', content: 'Research is key. Look for doctors who specialize in your specific condition. Our team maintains a database of Arabic-speaking or English-speaking specialists.' },
              { title: 'Step 3: Documents You Need', content: ['Passport or ID', 'Travel Insurance or Private Health Insurance policy', 'Previous medical records (translated if possible)'] }
            ],
            conclusion: 'Booking an appointment doesn’t have to be stressful. Barcelona Simply can handle the booking, translation, and accompaniment for you.'
          }
        },
        {
          id: '2',
          slug: 'getting-nie-number-spain',
          title: 'The Ultimate Guide to Getting Your NIE Number',
          excerpt: 'Understanding the NIE application process is crucial for anyone planning to stay in Spain for study or residency.',
          category: 'admin',
          image: 'https://picsum.photos/800/600?image=1076',
          date: 'Sep 28, 2023',
          author: 'Legal Desk',
          content: {
            intro: 'The NIE (Número de Identidad de Extranjero) is your identification number in Spain. You need it for almost everything: opening a bank account, signing a lease, or setting up internet.',
            sections: [
              { title: 'Who Needs a NIE?', content: 'Anyone who has economic, professional, or social interests in Spain. This includes students, property buyers, and long-term residents.' },
              { title: 'Step 1: The Appointment (Cita Previa)', content: 'Getting an appointment at the immigration office is notoriously difficult. Appointments are released at specific times and vanish quickly. Persistence is key.' },
              { title: 'Step 2: The Paperwork (Modelo EX-15)', content: 'You must fill out form EX-15 correctly in Spanish. You also need to pay the tax (Modelo 790 Code 012) at a bank before your meeting.' },
              { title: 'Common Mistakes to Avoid', content: ['Showing up without a printed appointment confirmation', 'Forgetting copies of all passport pages', 'Not having the tax paid in advance'] }
            ],
            conclusion: 'Navigating Spanish bureaucracy takes patience. If you are struggling to get an appointment, our administrative team can assist you.'
          }
        },
        {
          id: '3',
          slug: 'luxury-shopping-guide-barcelona',
          title: 'VIP Guide: Luxury Shopping on Passeig de Gràcia',
          excerpt: 'Discover the best luxury boutiques and hidden gems in Barcelona’s most exclusive shopping district.',
          category: 'vip',
          image: 'https://picsum.photos/800/600?image=1060',
          date: 'Nov 02, 2023',
          author: 'Concierge Team',
          content: {
             intro: 'Passeig de Gràcia is not just a street; it is the heartbeat of luxury in Barcelona. From Chanel to Gucci, here is your guide to shopping in style.',
             sections: [
                { title: 'The Golden Mile', content: 'The stretch between Plaça Catalunya and Diagonal is known as the Golden Mile. It hosts flagship stores of major luxury brands.' },
                { title: 'Tax-Free Shopping', content: 'As a non-EU resident, you are entitled to a VAT refund (TAX FREE). Don’t forget to ask for the tax-free form at checkout. You can claim up to 21% back at the airport.' },
                { title: 'Private Shoppers', content: 'For a more exclusive experience, many boutiques offer private viewing rooms. Our VIP concierge can arrange private sessions where the store is closed for you.' }
             ],
             conclusion: 'Enjoy the finest fashion Barcelona has to offer. Contact us to arrange a private chauffeur for your shopping day.'
          }
        }
      ],
      cta: {
        title: "Need help with this topic?",
        text: "Our team is ready to assist you immediately.",
        button: "Contact via WhatsApp"
      }
    },
    chat: {
      title: "Barcelona Assistant",
      placeholder: "Ask about Barcelona or our services...",
      send: "Send",
      welcome: "Hello! I am your Barcelona Simply AI assistant. How can I help you today?",
      whatsapp: "Chat on WhatsApp",
      agent_unavailable: "Agents are currently busy. Connect via WhatsApp for immediate help."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      pricing: "Tarifs",
      contact: "Contact",
      blog: "Blog",
      appointment: "Prendre Rendez-vous",
    },
    hero: {
      title: "Votre Guide de Confiance à Barcelone",
      subtitle: "Assistance premium, accompagnement médical et conciergerie VIP pour les visiteurs du Golfe.",
      cta: "Réserver par WhatsApp",
    },
    servicesPage: {
      title: "Nos services pour les visiteurs à Barcelone",
      subtitle: "Nous proposons une gamme de services pour faciliter votre visite à Barcelone : rendez-vous médicaux, assistance administrative, inscription universitaire, statut de résidence et services VIP.",
      buttons: {
        book: "Réservez via WhatsApp",
        more: "Plus d’informations"
      }
    },
    services: {
      items: {
        medical: { 
          title: "Accompagnement Médical", 
          cardDesc: "Accompagnement professionnel aux rendez-vous médicaux.",
          heroImage: "https://picsum.photos/1200/600?image=10",
          summary: "Nous priorisons votre santé et votre confort. Notre équipe fixe des rendez-vous avec les meilleurs spécialistes (Teknon, Quirón, etc.), vous accompagne à la clinique et assure une traduction précise.",
          whoFor: "Patients voyageant pour des soins ou des examens.",
          benefits: ["Accès aux meilleures cliniques", "Traduction médicale précise", "Tranquillité d'esprit", "Confidentialité assurée"],
          features: ["Prise de rendez-vous avec des spécialistes", "Interprétation en personne", "Aide à la traduction de rapports médicaux", "Conseils pharmacie et médicaments"],
          processTitle: "Processus Médical",
          process: [
            { step: "Consultation", desc: "Dites-nous vos besoins médicaux." },
            { step: "Réservation", desc: "Nous trouvons le meilleur médecin et fixons le rendez-vous." },
            { step: "Accompagnement", desc: "Nous vous rejoignons à la clinique pour tout traduire." }
          ],
          faq: [
             { q: "Donnez-vous des conseils médicaux ?", a: "Non, nous facilitons uniquement la communication." },
             { q: "Avec quels hôpitaux travaillez-vous ?", a: "Nous travaillons avec tous les hôpitaux privés et publics majeurs." }
          ]
        },
        admin: { 
          title: "Support Administratif et Gouvernemental", 
          cardDesc: "Simplifier la bureaucratie espagnole pour vous.",
          heroImage: "https://picsum.photos/1200/600?image=1068",
          summary: "La bureaucratie espagnole peut être écrasante. Nous gérons la paperasse pour les numéros NIE, comptes bancaires, recensement, et autres procédures officielles.",
          whoFor: "Nouveaux arrivants, acheteurs immobiliers et résidents.",
          benefits: ["Gain de temps", "Zéro erreur", "Rendez-vous rapides", "Conformité légale"],
          features: ["Support demande NIE & TIE", "Enregistrement au recensement", "Ouverture de compte bancaire", "Coordination traduction documents"],
          processTitle: "Notre Processus",
          process: [
            { step: "Évaluation", desc: "Nous examinons votre statut et vos documents." },
            { step: "Préparation", desc: "Nous préparons tous les formulaires." },
            { step: "Soumission", desc: "Nous vous accompagnons au bureau gouvernemental." }
          ],
          faq: [
            { q: "Pouvez-vous garantir le NIE ?", a: "Nous garantissons la procédure correcte, mais l'approbation dépend des autorités." }
          ]
        },
        study: { 
          title: "Assistance Études et Résidence", 
          cardDesc: "Soutien aux étudiants et familles pour l'éducation et le statut légal.",
          heroImage: "https://picsum.photos/1200/600?image=101",
          summary: "Nous aidons les étudiants du Golfe à s'installer à Barcelone, en assistant à l'inscription universitaire, aux visas étudiants, cartes TIE et à la recherche de logement.",
          whoFor: "Étudiants universitaires et familles.",
          benefits: ["Placement universitaire", "Support visa", "Aide au logement", "Orientation locale"],
          features: ["Aide à l'inscription universitaire", "Renouvellement visa étudiant", "Arrangement assurance santé", "Recherche de logement étudiant"],
          processTitle: "Étapes d'installation",
          process: [
            { step: "Planification", desc: "Nous identifions vos besoins universitaires." },
            { step: "Papiers", desc: "Nous compilons les documents pour le visa." },
            { step: "Installation", desc: "Nous vous aidons à obtenir votre carte TIE." }
          ],
          faq: [
             { q: "Aidez-vous à trouver un logement ?", a: "Oui, nous avons un réseau de partenaires de confiance." }
          ]
        },
        vip: { 
          title: "Conciergerie VIP (Édition Golfe)", 
          cardDesc: "Services de luxe exclusifs pour clients de haut niveau.",
          heroImage: "https://picsum.photos/1200/600?image=1074",
          summary: "Conçu pour nos clients les plus exigeants. Nous gérons le transport de luxe, l'hébergement 5 étoiles, le shopping privé et les expériences exclusives avec une discrétion absolue.",
          whoFor: "Visiteurs VIP, diplomates et voyageurs d'affaires.",
          benefits: ["Support prioritaire 24/7", "Accès flotte luxe", "Confidentialité NDA", "Accès exclusif"],
          features: ["Transferts aéroport de luxe", "Service chauffeur privé", "Réservations restaurants exclusifs", "Assistant shopping personnel"],
          processTitle: "Expérience VIP",
          process: [
            { step: "Demande", desc: "Envoyez-nous vos dates et préférences." },
            { step: "Itinéraire", desc: "Nous créons un itinéraire de luxe sur mesure." },
            { step: "Exécution", desc: "Profitez d'un support 24/7." }
          ],
          faq: [
            { q: "Le service est-il disponible 24/7 ?", a: "Oui, nos clients VIP ont un accès prioritaire." }
          ]
        },
        trans: { 
          title: "Traduction et Interprétation", 
          cardDesc: "Interprétation Arabe-Espagnol-Anglais pour réunions.",
          heroImage: "https://picsum.photos/1200/600?image=103",
          summary: "Combler le fossé linguistique dans les réunions d'affaires, rendez-vous légaux ou vie quotidienne. Nos locuteurs natifs assurent une communication claire.",
          whoFor: "Professionnels et particuliers nécessitant un support linguistique.",
          benefits: ["Fluidité native", "Compréhension culturelle", "Support sur place", "Disponibilité immédiate"],
          features: ["Interprétation en personne", "Support réunion affaires", "Visite immobilière", "Traduction vie quotidienne"],
          processTitle: "Réservation",
          process: [
            { step: "Planifier", desc: "Dites-nous quand et où." },
            { step: "Rencontre", desc: "Notre interprète vous rejoint." },
            { step: "Support", desc: "Nous facilitons la communication." }
          ],
          faq: [
            { q: "Est-ce une traduction jurée ?", a: "Non, c'est pour l'interprétation et les documents non officiels." }
          ]
        },
        family: {
          title: "Relocalisation Familiale",
          cardDesc: "Aider les familles à déménager et s'installer confortablement.",
          heroImage: "https://picsum.photos/1200/600?image=1012",
          summary: "Vous déménagez en famille à Barcelone ? Nous aidons au choix de l'école, au logement, à l'installation des services publics et à l'orientation dans le quartier.",
          whoFor: "Familles déménageant pour le travail ou le mode de vie.",
          benefits: ["Aide admission école", "Installation services", "Logement familial", "Guide quartier"],
          features: ["Recherche école", "Contrats services (Internet/Eau)", "Achat meubles", "Recherche nounou"],
          processTitle: "Étapes Relocalisation",
          process: [
             { step: "Consultation", desc: "Comprendre vos besoins familiaux." },
             { step: "Recherche", desc: "Trouver écoles et maisons." },
             { step: "Installation", desc: "Tout préparer avant votre arrivée." }
          ],
          faq: [
             { q: "Aidez-vous avec les écoles ?", a: "Oui, nous aidons aux inscriptions écoles internationales et locales." }
          ]
        }
      },
    },
    howItWorks: {
      title: "Comment Ça Marche",
      steps: [
        { title: "Contactez-nous", desc: "Écrivez-nous via WhatsApp ou le formulaire pour discuter de vos besoins." },
        { title: "Planifiez votre Visite", desc: "Nous créons un plan sur mesure pour votre voyage médical, d'études ou touristique." },
        { title: "Arrivée et Soutien", desc: "Nous vous accueillons à votre arrivée et vous accompagnons à tous vos rendez-vous." },
        { title: "Détendez-vous", desc: "Concentrez-vous sur vos objectifs pendant que nous gérons la logistique et la langue." }
      ]
    },
    whyUs: {
      title: "Pourquoi Choisir Barcelona Simply ?",
      items: {
        trust: { title: "Experts Arabophones", desc: "Locuteurs natifs arabes avec une profonde expérience de la culture du Golfe." },
        lang: { title: "Confidentialité & Discrétion", desc: "Nous garantissons une confidentialité totale pour tous nos clients." },
        exp: { title: "Solutions Premium", desc: "Assistance sur mesure pour hôpitaux, universités et bureaux gouvernementaux." },
      }
    },
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "Découvrez ce que nos clients disent de leur expérience avec nous.",
      items: [
        { name: "A.K.", location: "Dubaï", text: "Barcelona Simply a rendu ma première visite sans souci. Hautement recommandé !" },
        { name: "M.S.", location: "Riyad", text: "Ils m'ont aidé à m'inscrire à l'université et à gérer ma résidence sans problème." },
        { name: "F.H.", location: "Abou Dabi", text: "Professionnels, amicaux et très fiables. Je me suis senti pleinement soutenu lors de tous les rendez-vous." },
        { name: "L.T.", location: "Qatar", text: "Super service de conciergerie VIP. La prise en charge à l'aéroport et les arrangements hôteliers étaient parfaits." },
      ]
    },
    homeAppointment: {
      title: "Réservez en 3 Étapes Simples",
      subtitle: "Planifiez votre consultation ou demande de service en ligne efficacement.",
      steps: {
        step1: "Choisir le Service",
        step2: "Sélectionner l'Heure",
        step3: "Confirmer",
      },
      cta: "Commencer la Réservation"
    },
    ctaSection: {
      title: "Prêt pour une expérience sans tracas ?",
      subtitle: "Rejoignez nos clients satisfaits et profitez de Barcelone sans stress.",
      buttonText: "Réservez votre service via WhatsApp",
    },
    pricing: {
      title: "Forfaits d'Assistance Premium",
      subtitle: "Services transparents, professionnels et confidentiels, adaptés à nos clients du Golfe. Nous parlons votre langue et comprenons vos besoins.",
      cta: "Réserver ce forfait",
      bookWhatsapp: "Réserver via WhatsApp",
      packages: {
        vipGulf: {
          title: "Pack VIP Golfe",
          price: "€650",
          unit: "Assistance Famille",
          desc: "Pour individus ou familles nécessitant un accompagnement premium.",
          features: [
            "Coordination aéroport & accueil de luxe",
            "Assistant Personnel (Homme/Femme) journée complète",
            "Accompagnement Médical (2 visites)",
            "Support Administratif",
            "Traduction (jusqu'à 10 pages)",
            "Visites Écoles/Universités",
            "Recherche Appartement de Luxe",
            "Support WhatsApp Prioritaire",
            "Confidentialité Totale"
          ]
        },
        medical: {
          title: "Pack Médical Premium",
          price: "€320",
          unit: "Voyage Médical",
          desc: "Pour visites médicales, examens et accompagnement clinique.",
          features: [
            "Réservation cliniques top (Teknon, Quirón...)",
            "Accompagnement médical en arabe",
            "Traduction médicale",
            "Suivi et rapports",
            "Support pour 2 jours de rendez-vous",
            "Protocole de confidentialité VIP"
          ]
        },
        luxury: {
          title: "Pack Séjour Luxe",
          price: "€900",
          unit: "3 Jours",
          desc: "Pour courts séjours VIP nécessitant une gestion totale.",
          features: [
            "3 Jours Complets d'Assistance Personnelle",
            "Coordination Hôtel & Appartement",
            "Coordination Chauffeur Privé",
            "Assistance Shopping Premium",
            "Support Clinique",
            "Guide Tourisme & Lifestyle",
            "Support Arabe",
            "Communication Prioritaire 24/7"
          ]
        },
        study: {
           title: "Pack Études & Résidence",
           price: "€450",
           unit: "Installation Étudiant",
           desc: "Pour étudiants et familles nécessitant école/université & installation résidence.",
           features: [
              "Support Inscription Université",
              "Papiers Visa Étudiant",
              "Demande Carte TIE",
              "Aide Recherche Logement",
              "Ouverture Compte Bancaire",
              "Orientation Locale"
           ]
        }
      },
      alaCarte: {
        title: "Prix Services Individuels (À La Carte)",
        subtitle: "Options flexibles adaptées à vos besoins spécifiques.",
        items: [
          { name: "Accompagnement Rendez-vous Médical", price: "€120", desc: "Par visite" },
          { name: "Support Procédures Administratives", price: "€100", desc: "Par procédure" },
          { name: "Conseil Résidence / NIE", price: "€80", desc: "Consultation" },
          { name: "Assistance Visite Université/École", price: "€150", desc: "Par visite" },
          { name: "Traduction Documents (Arabe-Espagnol)", price: "Dès €20", desc: "Par page" },
          { name: "Assistant Personnel (Horaire)", price: "€40/h", desc: "Min. 2 heures" },
          { name: "Assistance Shopping VIP", price: "€60/h", desc: "Guide luxe" },
          { name: "Préparation Documents & Conseil", price: "Dès €50", desc: "Par dossier" }
        ]
      },
      faq: {
        title: "Questions Fréquentes",
        items: [
          { q: "Le service est-il légal ?", a: "Oui, nous sommes une entité enregistrée en Espagne garantissant conformité légale et confidentialité." },
          { q: "Que comprend l'accompagnement ?", a: "Il inclut la présence physique, la traduction, le remplissage de formulaires et l'orientation." },
          { q: "Des assistantes femmes sont-elles disponibles ?", a: "Oui, nous pouvons fournir des assistantes sur demande pour le confort des familles." },
          { q: "Pouvez-vous coordonner des chauffeurs privés ?", a: "Absolument. Nous travaillons avec des fournisseurs de transport de luxe de confiance." },
          { q: "Comment fonctionne le paiement ?", a: "Nous acceptons cartes, virements et espèces. Un acompte peut être requis." },
          { q: "Politique de confidentialité pour clients du Golfe ?", a: "La confidentialité est notre valeur clé. Nous signons des accords de non-divulgation (NDA)." }
        ]
      },
      finalCta: {
        title: "Planifiez votre séjour avec des experts",
        subtitle: "Contactez notre équipe arabophone dès maintenant. Nous planifierons chaque étape de votre séjour à Barcelone.",
        button: "Contacter via WhatsApp"
      }
    },
    contact: {
      title: "Prendre Rendez-vous",
      subtitle: "Suivez les étapes ci-dessous pour planifier votre service. Cela ne prend qu'une minute.",
      whatsapp: "Discuter sur WhatsApp",
    },
    appointmentWizard: {
      steps: {
        service: "Service",
        datetime: "Date & Heure",
        details: "Détails"
      },
      labels: {
        selectService: "Sélectionnez le service dont vous avez besoin",
        selectDate: "Choisissez une date préférée",
        selectTime: "Créneau horaire préféré",
        name: "Nom Complet",
        email: "Adresse E-mail",
        phone: "Numéro de Téléphone (avec code pays)",
        message: "Exigences spécifiques ?"
      },
      buttons: {
        next: "Étape Suivante",
        back: "Retour",
        confirm: "Confirmer le Rendez-vous",
        finish: "Terminé"
      },
      success: {
        title: "Demande Reçue !",
        message: "Nous avons bien reçu votre demande de rendez-vous. Notre équipe vous contactera via WhatsApp ou E-mail sous peu pour confirmer."
      }
    },
    blog: {
      title: "Conseils et Guides Barcelone",
      subtitle: "Conseils d'experts, astuces et guides pour les visiteurs, étudiants et patients à Barcelone.",
      readMore: "Lire l'article",
      categories: {
        all: "Tout",
        medical: "Médical",
        admin: "Administratif",
        study: "Études",
        vip: "VIP & Voyage",
        tips: "Conseils",
      },
      posts: [
        {
          id: '1',
          slug: 'how-to-book-medical-appointment-barcelona',
          title: 'Comment prendre un rendez-vous médical spécialisé à Barcelone',
          excerpt: 'Un guide complet pour les patients internationaux sur la navigation dans le système de santé espagnol.',
          category: 'medical',
          image: 'https://picsum.photos/800/600?image=1059',
          date: '15 Oct, 2023',
          author: 'Équipe Barcelona Simply',
          content: {
            intro: 'Barcelone abrite certaines des meilleures installations médicales d\'Europe. Cependant, pour les non-hispanophones, prendre un rendez-vous peut être un défi.',
            sections: [
              { title: 'Pourquoi choisir Barcelone ?', content: 'Barcelone dispose d\'hôpitaux de classe mondiale comme Teknon et Hospital Clínic.' },
              { title: 'Étape 1 : Public vs Privé', content: 'Pour les visiteurs internationaux, le privé offre un accès plus rapide aux spécialistes et un personnel multilingue.' },
              { title: 'Étape 2 : Documents nécessaires', content: ['Passeport', 'Assurance voyage ou santé privée', 'Dossiers médicaux antérieurs'] }
            ],
            conclusion: 'Prendre rendez-vous ne doit pas être stressant. Nous pouvons gérer la réservation et la traduction pour vous.'
          }
        },
        {
          id: '2',
          slug: 'getting-nie-number-spain',
          title: 'Le guide ultime pour obtenir votre numéro NIE',
          excerpt: 'Comprendre le processus de demande de NIE est crucial pour quiconque prévoit de rester en Espagne.',
          category: 'admin',
          image: 'https://picsum.photos/800/600?image=1076',
          date: '28 Sep, 2023',
          author: 'Bureau Juridique',
          content: {
            intro: 'Le NIE (Número de Identidad de Extranjero) est votre numéro d\'identification en Espagne. Vous en avez besoin pour presque tout.',
            sections: [
              { title: 'Qui a besoin d\'un NIE ?', content: 'Toute personne ayant des intérêts économiques, professionnels ou sociaux en Espagne.' },
              { title: 'Le défi du rendez-vous', content: 'Obtenir un rendez-vous (Cita Previa) est notoirement difficile. La persévérance est la clé.' }
            ],
            conclusion: 'Naviguer dans la bureaucratie espagnole demande de la patience. Notre équipe peut vous aider si vous rencontrez des difficultés.'
          }
        },
        {
          id: '4',
          slug: 'student-housing-barcelona',
          title: 'Trouver un logement étudiant à Barcelone',
          excerpt: 'Conseils essentiels pour les étudiants internationaux cherchant un appartement ou une colocation.',
          category: 'study',
          image: 'https://picsum.photos/800/600?image=1015',
          date: '10 Nov, 2023',
          author: 'Équipe Étudiante',
          content: {
            intro: 'Le marché immobilier à Barcelone bouge très vite. Voici comment sécuriser votre logement étudiant.',
            sections: [
              { title: 'Quartiers étudiants', content: 'Gràcia et Les Corts sont très populaires parmi les étudiants pour leur ambiance et la proximité des universités.' },
              { title: 'Attention aux arnaques', content: 'Ne payez jamais sans avoir visité ou vérifié l\'agence. Nous pouvons effectuer des visites pour vous.' }
            ],
            conclusion: 'Contactez-nous pour une liste de résidences étudiantes de confiance.'
          }
        }
      ],
      cta: {
        title: "Besoin d'aide sur ce sujet ?",
        text: "Notre équipe est prête à vous aider immédiatement.",
        button: "Contactez via WhatsApp"
      }
    },
    chat: {
      title: "Assistant Barcelone",
      placeholder: "Posez une question...",
      send: "Envoyer",
      welcome: "Bonjour ! Je suis l'assistant IA de Barcelona Simply. Comment puis-je vous aider aujourd'hui ?",
      whatsapp: "Discuter sur WhatsApp",
      agent_unavailable: "Les agents sont occupés. Connectez-vous via WhatsApp pour une aide immédiate."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      about: "من نحن",
      pricing: "الأسعار",
      contact: "تواصل معنا",
      blog: "المدونة",
      appointment: "حجز موعد",
    },
    hero: {
      title: "دليلك الموثوق في برشلونة",
      subtitle: "مساعدة شخصية، مرافقة طبية، وخدمات كونسيرج VIP مخصصة للزوار من دول الخليج.",
      cta: "احجز الآن عبر WhatsApp",
    },
    servicesPage: {
      title: "خدماتنا للمرافقة والمساعدة في برشلونة",
      subtitle: "نقدم مجموعة من الخدمات لتسهيل زيارتك إلى برشلونة، سواء لمواعيد طبية، معاملات إدارية، تسجيل دراسي، وضع إقامة، أو خدمات VIP.",
      buttons: {
        book: "احجز الآن عبر WhatsApp",
        more: "مزيد من المعلومات"
      }
    },
    services: {
      items: {
        medical: { 
          title: "خدمة المرافقة الطبية", 
          cardDesc: "مرافقة احترافية للمواعيد الطبية والمستشفيات.",
          heroImage: "https://picsum.photos/1200/600?image=10",
          summary: "نحن نضع صحتك وراحتك في المقام الأول. يقوم فريقنا بجدولة المواعيد مع أفضل المتخصصين (تيكنون، كيرون، إلخ)، ومرافقتك إلى العيادة، وضمان ترجمة دقيقة لجميع المعلومات الطبية.",
          whoFor: "المرضى القادمون للعلاج أو الفحوصات أو الجراحة.",
          benefits: ["الوصول لأفضل العيادات", "ترجمة طبية دقيقة", "راحة البال", "ضمان الخصوصية"],
          features: ["جدولة المواعيد مع المتخصصين", "الترجمة الفورية أثناء الاستشارات", "المساعدة في ترجمة التقارير الطبية", "إرشاد الصيدليات والأدوية"],
          processTitle: "الإجراءات الطبية",
          process: [
            { step: "الاستشارة", desc: "أخبرنا باحتياجاتك الطبية أو التخصص المطلوب." },
            { step: "الحجز", desc: "نجد أفضل طبيب ونحدد الموعد." },
            { step: "المرافقة", desc: "نقابلك في العيادة ونترجم كل شيء." }
          ],
          faq: [
             { q: "هل تقدمون نصائح طبية؟", a: "لا، نحن نسهل التواصل فقط. نحن لسنا أطباء." },
             { q: "ما هي المستشفيات التي تتعاملون معها؟", a: "نتعامل مع جميع المستشفيات الخاصة والعامة الكبرى في برشلونة." }
          ]
        },
        admin: { 
          title: "الدعم الإداري والحكومي", 
          cardDesc: "تبسيط البيروقراطية الإسبانية لأجلك.",
          heroImage: "https://picsum.photos/1200/600?image=1068",
          summary: "يمكن أن تكون البيروقراطية الإسبانية معقدة. نحن نتولى الأوراق الخاصة بأرقام NIE، والحسابات المصرفية، وتسجيل السكان، وغيرها من الإجراءات الرسمية حتى لا تضطر لذلك.",
          whoFor: "القادمون الجدد، مشترو العقارات، والمقيمون.",
          benefits: ["توفير الوقت", "أوراق خالية من الأخطاء", "مواعيد سريعة", "الامتثال القانوني"],
          features: ["دعم طلبات NIE و TIE", "تسجيل السكن (Empadronamiento)", "المساعدة في فتح حساب بنكي", "تنسيق ترجمة المستندات الرسمية"],
          processTitle: "إجراءاتنا",
          process: [
            { step: "التقييم", desc: "نراجع وضعك الحالي والمستندات المطلوبة." },
            { step: "التحضير", desc: "نقوم بإعداد جميع النماذج وتحديد المواعيد." },
            { step: "التقديم", desc: "نرافقك إلى المكتب الحكومي." }
          ],
          faq: [
            { q: "هل تضمنون الحصول على NIE؟", a: "نحن نضمن صحة الإجراءات، لكن الموافقة النهائية تعتمد على السلطات." }
          ]
        },
        study: { 
          title: "المساعدة في الدراسة والإقامة", 
          cardDesc: "دعم الطلاب والعائلات في التعليم والوضع القانوني.",
          heroImage: "https://picsum.photos/1200/600?image=101",
          summary: "نساعد الطلاب من دول الخليج على الاستقرار في برشلونة، والمساعدة في التسجيل الجامعي، وتأشيرات الطلاب، وبطاقات TIE، وإيجاد سكن مناسب.",
          whoFor: "طلاب الجامعات والعائلات المنتقلة من أجل التعليم.",
          benefits: ["القبول الجامعي", "دعم تجديد التأشيرة", "المساعدة في السكن", "التوجيه المحلي"],
          features: ["المساعدة في القبول الجامعي", "دعم تجديد تأشيرة الطالب", "ترتيب التأمين الصحي", "البحث عن سكن للطلاب"],
          processTitle: "خطوات الاستقرار",
          process: [
            { step: "التخطيط", desc: "نحدد احتياجاتك الجامعية والسكنية." },
            { step: "الأوراق", desc: "نجمع جميع المستندات لتأشيرة الطالب." },
            { step: "الاستقرار", desc: "نساعدك في الحصول على بطاقة TIE عند الوصول." }
          ],
          faq: [
             { q: "هل تساعدون في العثور على سكن؟", a: "نعم، لدينا شبكة من موفري سكن الطلاب الموثوقين." }
          ]
        },
        vip: { 
          title: "خدمة كونسيرج VIP (إصدار الخليج)", 
          cardDesc: "خدمات فاخرة وحصرية لكبار الشخصيات.",
          heroImage: "https://picsum.photos/1200/600?image=1074",
          summary: "مصممة لعملائنا الأكثر تميزاً. نحن ندير النقل الفاخر، والإقامة في فنادق 5 نجوم، والتسوق الخاص، والتجارب الحصرية بسرية تامة.",
          whoFor: "زوار VIP، الدبلوماسيون، ورجال الأعمال.",
          benefits: ["دعم ذو أولوية 24/7", "الوصول لأسطول فاخر", "خصوصية تامة (NDA)", "وصول حصري"],
          features: ["توصيلات مطار فاخرة", "خدمة سائق خاص", "حجوزات مطاعم حصرية", "مساعد تسوق شخصي"],
          processTitle: "تجربة VIP",
          process: [
            { step: "الطلب", desc: "أرسل لنا تواريخك وتفضيلاتك." },
            { step: "البرنامج", desc: "نصمم برنامجاً فاخراً مخصصاً لك." },
            { step: "التنفيذ", desc: "استمتع بدعم على مدار الساعة طوال إقامتك." }
          ],
          faq: [
            { q: "هل الخدمة متاحة 24/7؟", a: "نعم، يتمتع عملاء VIP لدينا بدعم على مدار الساعة." }
          ]
        },
        trans: { 
          title: "الترجمة والترجمة الفورية", 
          cardDesc: "ترجمة فورية عربي-إسباني-إنجليزي للاجتماعات.",
          heroImage: "https://picsum.photos/1200/600?image=103",
          summary: "سد الفجوة اللغوية في اجتماعات العمل، والمواعيد القانونية، أو الحياة اليومية. يضمن متحدثونا الأصليون تواصلاً واضحاً.",
          whoFor: "محترفو الأعمال والأفراد الذين يحتاجون إلى دعم لغوي.",
          benefits: ["طلاقة أصلية", "فهم ثقافي", "دعم في الموقع", "توافر فوري"],
          features: ["ترجمة فورية شخصية", "دعم اجتماعات العمل", "المساعدة في معاينة العقارات", "ترجمة الحياة اليومية العامة"],
          processTitle: "الحجز",
          process: [
            { step: "الجدولة", desc: "أخبرنا متى وأين تحتاجنا." },
            { step: "المقابلة", desc: "يقابلك المترجم في الموقع." },
            { step: "الدعم", desc: "نسهل التواصل فوراً." }
          ],
          faq: [
            { q: "هل هذه ترجمة محلفة؟", a: "لا، هذه للترجمة الفورية والمستندات غير الرسمية." }
          ]
        },
        family: {
          title: "دعم انتقال العائلات والاستقرار",
          cardDesc: "مساعدة العائلات على الانتقال والاستقرار في برشلونة براحة.",
          heroImage: "https://picsum.photos/1200/600?image=1012",
          summary: "تنتقل مع عائلتك إلى برشلونة؟ نساعدك في اختيار المدارس، والسكن، وتركيب الخدمات، والتعرف على الحي لضمان انتقال سلس.",
          whoFor: "العائلات المنتقلة للعمل أو نمط الحياة.",
          benefits: ["المساعدة في قبول المدارس", "تركيب الخدمات", "سكن مناسب للعائلة", "دليل الأحياء"],
          features: ["البحث عن المدارس وزيارتها", "عقود الخدمات (إنترنت/مياه)", "شراء الأثاث", "البحث عن مربية/مدبرة منزل"],
          processTitle: "خطوات الانتقال",
          process: [
             { step: "الاستشارة", desc: "فهم احتياجات عائلتك." },
             { step: "البحث", desc: "إيجاد المدارس والمنازل." },
             { step: "الاستقرار", desc: "تجهيز كل شيء قبل وصولك." }
          ],
          faq: [
             { q: "هل تساعدون في المدارس؟", a: "نعم، نساعد في التسجيل في المدارس الدولية والمحلية." }
          ]
        }
      },
    },
    howItWorks: {
      title: "كيف نعمل",
      steps: [
        { title: "تواصل معنا", desc: "تواصل عبر واتساب أو نموذج الاتصال لمناقشة احتياجاتك." },
        { title: "خطط لزيارتك", desc: "نقوم بإنشاء خطة مخصصة لرحلتك العلاجية أو الدراسية أو السياحية." },
        { title: "الوصول والدعم", desc: "نستقبلك عند الوصول ونرافقك في جميع المواعيد." },
        { title: "استرخ واستمتع", desc: "ركز على أهدافك بينما نتولى نحن الأمور اللوجستية واللغة." }
      ]
    },
    whyUs: {
      title: "لماذا تختار Barcelona Simply؟",
      items: {
        trust: { title: "خبراء ناطقون بالعربية", desc: "متحدثون أصليون بالعربية مع خبرة عميقة في ثقافة الخليج واحتياجاته." },
        lang: { title: "الخصوصية والسرية", desc: "نحن نضمن السرية التامة لجميع عملائنا." },
        exp: { title: "حلول متميزة", desc: "مساعدة مخصصة للمستشفيات والجامعات والمكاتب الحكومية." },
      }
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "اقرأ ما يقوله عملاؤنا عن تجربتهم معنا.",
      items: [
        { name: "A.K.", location: "دبي", text: "جعلت Barcelona Simply زيارتي الأولى خالية من القلق. أنصح بهم بشدة!" },
        { name: "M.S.", location: "الرياض", text: "ساعدوني في التسجيل بالجامعة وإدارة إقامتي بسلاسة." },
        { name: "F.H.", location: "أبو ظبي", text: "محترفون، ودودون، وموثوقون للغاية. شعرت بالدعم الكامل خلال جميع المواعيد." },
        { name: "L.T.", location: "قطر", text: "خدمة كونسيرج VIP رائعة. كان الاستقبال في المطار وترتيبات الفندق مثالية." },
      ]
    },
    homeAppointment: {
      title: "احجز في 3 خطوات بسيطة",
      subtitle: "قم بجدولة استشارتك أو طلب الخدمة عبر الإنترنت بكفاءة.",
      steps: {
        step1: "اختر الخدمة",
        step2: "حدد الوقت",
        step3: "تأكيد الحجز",
      },
      cta: "ابدأ الحجز الآن"
    },
    ctaSection: {
      title: "جاهز لتجربة سلسة؟",
      subtitle: "انضم إلى عملائنا السعداء واستمتع ببرشلونة دون عناء.",
      buttonText: "احجز خدمتك عبر واتساب",
    },
    pricing: {
      title: "باقات المرافقة الفاخرة",
      subtitle: "خدمات شفافة، احترافية، وسرية مخصصة لعملائنا من دول الخليج. نحن نتحدث لغتكم ونفهم احتياجاتكم.",
      cta: "حجز هذه الباقة",
      bookWhatsapp: "احجز عبر واتساب",
      packages: {
        vipGulf: {
          title: "باقة VIP الخليج",
          price: "€650",
          unit: "مساعدة العائلة",
          desc: "للأفراد أو العائلات الذين يحتاجون إلى مرافقة متميزة.",
          features: [
            "تنسيق المطار واستقبال فاخر",
            "مساعد شخصي (رجل/امرأة) ليوم كامل",
            "مرافقة طبية (زيارتان)",
            "دعم إداري شامل",
            "ترجمة (حتى 10 صفحات)",
            "زيارات المدارس/الجامعات",
            "معاينة شقق فاخرة",
            "دعم واتساب ذو أولوية قصوى",
            "سرية تامة"
          ]
        },
        medical: {
          title: "الباقة الطبية المميزة",
          price: "€320",
          unit: "رحلة طبية",
          desc: "للزيارات الطبية والفحوصات ومرافقة العيادة.",
          features: [
            "الحجز في أرقى العيادات (تيكنون، كيرون...)",
            "مرافقة طبية ناطقة بالعربية",
            "ترجمة طبية احترافية",
            "ترجمة التقارير والمتابعة",
            "دعم لمدة يومين من المواعيد",
            "بروتوكول خصوصية VIP"
          ]
        },
        luxury: {
          title: "باقة الإقامة الفاخرة",
          price: "€900",
          unit: "3 أيام",
          desc: "للإقامات القصيرة VIP التي تتطلب إدارة كاملة.",
          features: [
            "3 أيام كاملة من المساعدة الشخصية",
            "تنسيق الفنادق والشقق الفندقية",
            "تنسيق السائق الخاص",
            "مساعدة تسوق فاخرة",
            "دعم العيادات",
            "إرشاد سياحي وأسلوب حياة",
            "دعم عربي",
            "تواصل ذو أولوية 24/7"
          ]
        },
        study: {
           title: "باقة الدراسة والإقامة",
           price: "€450",
           unit: "تجهيز الطالب",
           desc: "للطلاب والعائلات الذين يحتاجون إلى تجهيز المدرسة/الجامعة والإقامة.",
           features: [
              "دعم التسجيل الجامعي",
              "أوراق تأشيرة الطالب",
              "طلب بطاقة TIE",
              "المساعدة في البحث عن سكن",
              "فتح حساب بنكي",
              "التوجيه المحلي"
           ]
        }
      },
      alaCarte: {
        title: "أسعار الخدمات الفردية (حسب الطلب)",
        subtitle: "خيارات مرنة مصممة خصيصاً لاحتياجاتك المحددة.",
        items: [
          { name: "مرافقة موعد طبي", price: "€120", desc: "للزيارة الواحدة" },
          { name: "دعم الإجراءات الإدارية", price: "€100", desc: "للإجراء الواحد" },
          { name: "إرشاد الإقامة / NIE", price: "€80", desc: "استشارة" },
          { name: "مساعدة زيارة جامعة أو مدرسة", price: "€150", desc: "للزيارة الواحدة" },
          { name: "ترجمة المستندات (عربي-إسباني)", price: "من €20", desc: "للصفحة" },
          { name: "مساعد شخصي (بالساعة)", price: "€40/ساعة", desc: "حد أدنى ساعتين" },
          { name: "مساعدة تسوق VIP", price: "€60/ساعة", desc: "دليل فاخر" },
          { name: "إعداد المستندات والاستشارات", price: "من €50", desc: "للملف" }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          { q: "هل الخدمة قانونية؟", a: "نعم، نحن كيان مسجل في إسبانيا نضمن الامتثال القانوني الكامل والسرية." },
          { q: "ماذا تشمل المرافقة؟", a: "تشمل الحضور الشخصي، الترجمة، تعبئة النماذج، والتوجيه خلال المواعيد." },
          { q: "هل تتوفر مساعدات إناث؟", a: "نعم، يمكننا توفير مساعدات إناث عند الطلب لضمان راحة وخصوصية العائلات." },
          { q: "هل يمكنكم تنسيق سائقين خاصين؟", a: "بالتأكيد. نتعامل مع موفري خدمات نقل فاخرة موثوقين لراحتكم." },
          { q: "كيف يتم الدفع؟", a: "نقبل البطاقات الائتمانية، التحويلات البنكية، والنقد. قد يلزم دفع عربون للباقات الكبيرة." },
          { q: "سياسة الخصوصية لعملاء الخليج؟", a: "الخصوصية هي قيمتنا الأساسية. نوقع اتفاقيات عدم إفشاء (NDA) لعملاء VIP." }
        ]
      },
      finalCta: {
        title: "خطط لإقامتك مع الخبراء",
        subtitle: "تواصل مع فريقنا الناطق بالعربية الآن — سنخطط لكل خطوة من إقامتك في برشلونة.",
        button: "تواصل عبر واتساب"
      }
    },
    contact: {
      title: "احجز موعدك",
      subtitle: "اتبع الخطوات أدناه لجدولة خدمتك. لا يستغرق الأمر سوى دقيقة واحدة.",
      whatsapp: "تواصل عبر واتساب",
    },
    appointmentWizard: {
      steps: {
        service: "الخدمة",
        datetime: "الوقت والتاريخ",
        details: "التفاصيل"
      },
      labels: {
        selectService: "اختر الخدمة التي تحتاجها",
        selectDate: "اختر التاريخ المفضل",
        selectTime: "الوقت المفضل",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف (مع مفتاح الدولة)",
        message: "أي متطلبات خاصة؟"
      },
      buttons: {
        next: "الخطوة التالية",
        back: "رجوع",
        confirm: "تأكيد الموعد",
        finish: "تم"
      },
      success: {
        title: "تم استلام الطلب!",
        message: "لقد استلمنا طلب موعدك. سيقوم فريقنا بالتواصل معك عبر الواتساب أو البريد الإلكتروني قريباً للتأكيد."
      }
    },
    blog: {
      title: "رؤى وأدلة برشلونة",
      subtitle: "نصائح وإرشادات من الخبراء للزوار والطلاب والمرضى العرب في برشلونة.",
      readMore: "اقرأ المقال",
      categories: {
        all: "الكل",
        medical: "طبي",
        admin: "إداري",
        study: "دراسة",
        vip: "سياحة VIP",
        tips: "نصائح",
      },
      posts: [
        {
          id: '1',
          slug: 'how-to-book-medical-appointment-barcelona',
          title: 'كيف تحجز موعداً طبياً في برشلونة (دليل شامل)',
          excerpt: 'دليل كامل للمرضى الدوليين حول كيفية التنقل في نظام الرعاية الصحية الإسباني ومقابلة المتخصصين.',
          category: 'medical',
          image: 'https://picsum.photos/800/600?image=1059',
          date: '15 أكتوبر 2023',
          author: 'فريق برشلونة سيمبلي',
          content: {
            intro: 'تضم برشلونة بعضاً من أفضل المرافق الطبية في أوروبا. ومع ذلك، بالنسبة لغير الناطقين بالإسبانية، قد يكون حجز موعد تحدياً.',
            sections: [
              { title: 'لماذا تختار العلاج في برشلونة؟', content: 'جودة الرعاية عالية جداً، والتكاليف غالباً ما تكون أقل من دول أخرى. المستشفيات مثل تيكنون وكيرون مشهورة عالمياً.' },
              { title: 'الخطوة 1: اختيار القطاع الخاص', content: 'بالنسبة للزوار الدوليين، الطريق الأسرع والأكثر راحة هو القطاع الخاص.' },
              { title: 'الخطوة 2: المستندات المطلوبة', content: ['جواز السفر', 'تأمين السفر أو التأمين الصحي الخاص', 'السجلات الطبية السابقة (مترجمة)'] }
            ],
            conclusion: 'لا داعي للقلق بشأن اللغة. نحن نتولى الحجز والمرافقة والترجمة بالكامل.'
          }
        },
        {
          id: '2',
          slug: 'getting-nie-number-spain',
          title: 'الدليل الكامل للحصول على رقم NIE في إسبانيا',
          excerpt: 'فهم عملية التقديم للحصول على NIE أمر بالغ الأهمية لأي شخص يخطط للإقامة في إسبانيا للدراسة أو العمل.',
          category: 'admin',
          image: 'https://picsum.photos/800/600?image=1076',
          date: '28 سبتمبر 2023',
          author: 'المكتب القانوني',
          content: {
            intro: 'رقم NIE (رقم تعريف الأجانب) هو هويتك في إسبانيا. تحتاجه لفتح حساب بنكي، توقيع عقد إيجار، أو حتى الاشتراك في الإنترنت.',
            sections: [
              { title: 'من يحتاج إلى NIE؟', content: 'أي شخص لديه مصالح اقتصادية أو مهنية أو اجتماعية في إسبانيا.' },
              { title: 'تحدي المواعيد', content: 'الحصول على موعد (Cita Previa) أمر صعب للغاية. نحن نساعدك في تخطي هذه العقبة.' }
            ],
            conclusion: 'البيروقراطية الإسبانية تتطلب الصبر. فريقنا الإداري جاهز لمساعدتك في كل خطوة.'
          }
        },
        {
          id: '5',
          slug: 'arab-families-barcelona-guide',
          title: 'نصائح السفر للعائلات العربية في برشلونة',
          excerpt: 'أفضل الأماكن للإقامة، التسوق، والطعام الحلال للعائلات العربية.',
          category: 'tips',
          image: 'https://picsum.photos/800/600?image=1011',
          date: '20 نوفمبر 2023',
          author: 'فريق السياحة',
          content: {
             intro: 'برشلونة مدينة صديقة جداً للعائلات، لكن معرفة المكان المناسب للإقامة وتناول الطعام يحدث فرقاً كبيراً.',
             sections: [
                { title: 'السكن', content: 'ننصح بمنطقة Eixample لقربها من كل شيء وأمانها العالي.' },
                { title: 'الطعام الحلال', content: 'توجد العديد من المطاعم اللبنانية والمغربية والتركية الرائعة في المدينة.' }
             ],
             conclusion: 'استمتع برحلتك ودعنا نهتم بالتفاصيل.'
          }
        }
      ],
      cta: {
        title: "هل تحتاج مساعدة في هذا الموضوع؟",
        text: "فريقنا جاهز لمساعدتك فوراً.",
        button: "تواصل عبر واتساب"
      }
    },
    chat: {
      title: "مساعد برشلونة",
      placeholder: "اسأل عن برشلونة أو خدماتنا...",
      send: "إرسال",
      welcome: "مرحباً! أنا مساعدك الذكي من Barcelona Simply. كيف يمكنني مساعدتك اليوم؟",
      whatsapp: "تواصل عبر واتساب",
      agent_unavailable: "الوكلاء مشغولون حاليًا. تواصل عبر واتساب للحصول على مساعدة فورية."
    }
  }
};
