import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { t, language, setLanguage, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-gold-500 font-semibold' : 'text-slate-200 hover:text-white';

  return (
    <nav className="bg-navy-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
               {/* Simple Logo Placeholder */}
               <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center text-navy-900 font-bold text-xl">
                 B
               </div>
               <span className="text-white text-xl font-bold tracking-wide">Barcelona<span className="text-gold-500">Simply</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/" className={isActive('/')}>{t.nav.home}</Link>
            <Link to="/services" className={isActive('/services')}>{t.nav.services}</Link>
            <Link to="/pricing" className={isActive('/pricing')}>{t.nav.pricing}</Link>
            <Link to="/blog" className={isActive('/blog')}>{t.nav.blog}</Link>
            <Link to="/about" className={isActive('/about')}>{t.nav.about}</Link>
            <Link to="/contact" className={isActive('/contact')}>{t.nav.contact}</Link>
            
            {/* Appointment Button */}
            <Link to="/contact" className="bg-gold-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-gold-600 transition-colors shadow-md">
              {t.nav.appointment}
            </Link>

            {/* Language Switcher */}
            <div className="relative group ml-2 rtl:mr-2">
              <button className="flex items-center text-slate-300 hover:text-white focus:outline-none">
                <span className="uppercase font-semibold">{language}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute right-0 rtl:left-0 mt-2 w-28 bg-white rounded-md shadow-lg py-1 hidden group-hover:block ring-1 ring-black ring-opacity-5">
                <button onClick={() => setLanguage('en')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                <button onClick={() => setLanguage('fr')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</button>
                <button onClick={() => setLanguage('ar')} className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-arabic">العربية</button>
              </div>
            </div>
          </div>

          {/* Mobile button */}
          <div className="flex items-center md:hidden">
             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 {isOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 )}
               </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">{t.nav.home}</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">{t.nav.services}</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">{t.nav.pricing}</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">{t.nav.blog}</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">{t.nav.about}</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">{t.nav.contact}</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gold-500 hover:bg-navy-700 border border-gold-500 mt-2 text-center">{t.nav.appointment}</Link>
            
            <div className="border-t border-navy-700 pt-4 pb-2 mt-2">
               <div className="flex justify-around">
                  <button onClick={() => setLanguage('en')} className={`text-sm font-medium ${language === 'en' ? 'text-gold-500' : 'text-slate-300'}`}>EN</button>
                  <button onClick={() => setLanguage('fr')} className={`text-sm font-medium ${language === 'fr' ? 'text-gold-500' : 'text-slate-300'}`}>FR</button>
                  <button onClick={() => setLanguage('ar')} className={`text-sm font-medium font-arabic ${language === 'ar' ? 'text-gold-500' : 'text-slate-300'}`}>العربية</button>
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;