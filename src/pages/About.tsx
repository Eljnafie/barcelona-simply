import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-navy-900 mb-6">{t.nav.about}</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Barcelona Simply was founded with a singular mission: to make Barcelona feel like home for our Arabic-speaking guests. We understand that visiting a new country for medical treatment, education, or business can be daunting due to language barriers and bureaucratic complexities.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our team consists of local experts who are fluent in Arabic, Spanish, and English. We bridge the gap between cultures, ensuring that your requirements are met with precision, respect, and speed.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="border-l-4 border-gold-500 pl-4 rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                 <h4 className="text-2xl font-bold text-navy-900">5+</h4>
                 <p className="text-sm text-slate-500">Years Experience</p>
               </div>
               <div className="border-l-4 border-gold-500 pl-4 rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
                 <h4 className="text-2xl font-bold text-navy-900">500+</h4>
                 <p className="text-sm text-slate-500">Happy Clients</p>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/600/600" 
              alt="Our Team" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover" 
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy-100 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
