import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 text-slate-300 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Barcelona<span className="text-gold-500">Simply</span></h3>
            <p className="text-sm leading-relaxed mb-4">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">{t.services.items.medical.title}</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">{t.services.items.admin.title}</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">{t.services.items.study.title}</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">{t.services.items.vip.title}</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">{t.nav.contact}</h4>
             <ul className="space-y-2 text-sm">
               <li className="flex items-start">
                 <svg className="w-5 h-5 mr-2 rtl:ml-2 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 <span>barcelonasimply7@gmail.com</span>
               </li>
               <li className="flex items-start">
                 <svg className="w-5 h-5 mr-2 rtl:ml-2 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 <span style={{ direction: 'ltr' }}>+34 628 87 63 39</span>
               </li>
             </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Barcelona Simply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;