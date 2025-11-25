import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AppointmentWizard from '../components/AppointmentWizard';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">{t.contact.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Step-by-Step Wizard */}
          <div className="w-full">
            <AppointmentWizard />
          </div>

          {/* Info & Map */}
          <div className="space-y-8 flex flex-col justify-start">
             <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 rounded-full opacity-10 -mr-16 -mt-16"></div>
               <h3 className="text-2xl font-bold mb-6 relative z-10">{t.contact.whatsapp}</h3>
               <p className="mb-6 opacity-90 relative z-10">
                 {language === 'ar' ? 'أسرع طريقة للتواصل معنا هي عبر واتساب. متاحون من 9 صباحاً - 8 مساءً.' : 
                  language === 'fr' ? 'Le moyen le plus rapide de nous joindre est via WhatsApp. Disponible de 9h à 20h.' :
                  'The fastest way to reach us is via WhatsApp. Available 9am - 8pm.'}
               </p>
               <a href="https://wa.me/34628876339" className="inline-flex items-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors relative z-10">
                 <svg className="w-6 h-6 mr-2 rtl:ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                 WhatsApp
               </a>
             </div>
             
             {/* Map Placeholder */}
             <div className="bg-slate-200 rounded-2xl h-64 w-full flex items-center justify-center overflow-hidden relative shadow-inner">
               <img src="https://picsum.photos/600/400?blur=5" className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-70 transition-opacity" alt="Map" />
               <span className="relative z-10 font-bold text-navy-900 bg-white/90 px-5 py-3 rounded-lg shadow-sm">Passeig de Gràcia, Barcelona</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;