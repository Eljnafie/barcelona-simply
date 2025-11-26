
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'medical' | 'admin' | 'student' | 'vip'>('medical');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBook = (pkgName: string) => {
    const text = language === 'ar' 
      ? `مرحباً، أود حجز باقة: ${pkgName}`
      : `Hello, I would like to book package: ${pkgName}`;
    window.open(`https://wa.me/34628876339?text=${encodeURIComponent(text)}`, '_blank');
  };

  const categories = [
    { id: 'medical', label: t.pricing.categories.medical.title },
    { id: 'admin', label: t.pricing.categories.admin.title },
    { id: 'student', label: t.pricing.categories.student.title },
    { id: 'vip', label: t.pricing.categories.vip.title },
  ];

  // @ts-ignore
  const currentCategory = t.pricing.categories[activeTab];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Header Section */}
      <div className="bg-navy-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">{t.pricing.title}</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {t.pricing.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24 relative z-20">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all shadow-lg ${
                activeTab === cat.id 
                  ? 'bg-gold-500 text-white transform scale-105' 
                  : 'bg-white text-navy-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2. Pricing Tiers for Active Category */}
        <div className="mb-16">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-navy-900">{currentCategory.title}</h2>
             <p className="text-slate-500 mt-2">{currentCategory.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {currentCategory.tiers.map((pkg: any, idx: number) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 relative ${
                  pkg.highlight 
                    ? 'border-2 border-gold-500 transform md:-translate-y-4 z-10 ring-4 ring-gold-500/20' 
                    : 'border border-slate-100 hover:shadow-2xl'
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-gold-500 text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                     {language === 'ar' ? 'موصى به' : language === 'fr' ? 'Recommandé' : 'Recommended'}
                  </div>
                )}
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 font-medium uppercase tracking-wide">{pkg.desc}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-navy-900">{pkg.price}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${pkg.highlight ? 'bg-gold-100' : 'bg-green-50'}`}>
                           <svg className={`w-3 h-3 ${pkg.highlight ? 'text-gold-600' : 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="ml-3 rtl:mr-3 rtl:ml-0 text-slate-700 text-sm font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                   <button 
                    onClick={() => handleBook(`${currentCategory.title} - ${pkg.name}`)}
                    className={`w-full font-bold py-4 px-6 rounded-xl transition-all shadow-md transform hover:scale-105 text-sm flex justify-center items-center gap-2 ${
                      pkg.highlight 
                        ? 'bg-gold-500 text-white hover:bg-gold-600' 
                        : 'bg-navy-900 text-white hover:bg-navy-800'
                    }`}
                   >
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                     {t.pricing.cta}
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. A La Carte Services */}
        <div className="mt-24 max-w-4xl mx-auto">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">{t.pricing.alaCarte.title}</h2>
              <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
           </div>
           
           <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-slate-100">
                 {t.pricing.alaCarte.items.map((item, index) => (
                    <div key={index} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row justify-between items-center group">
                       <div className="mb-4 sm:mb-0 text-center sm:text-left rtl:sm:text-right">
                          <h4 className="font-bold text-navy-900 text-lg">{item.name}</h4>
                          <p className="text-slate-500 text-sm">{item.desc}</p>
                       </div>
                       <div className="flex items-center gap-6">
                          <span className="text-xl font-bold text-gold-600">{item.price}</span>
                          <button 
                             onClick={() => handleBook(item.name)}
                             className="bg-white border-2 border-navy-900 text-navy-900 text-xs font-bold py-2 px-6 rounded-full hover:bg-navy-900 hover:text-white transition-colors"
                          >
                             {language === 'ar' ? 'طلب' : language === 'fr' ? 'Commander' : 'Request'}
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* 4. FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900">{t.pricing.faq.title}</h2>
           </div>
           <div className="space-y-4">
              {t.pricing.faq.items.map((item, index) => (
                 <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <details className="group">
                       <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-navy-900 hover:bg-slate-50 transition-colors">
                          <span>{item.q}</span>
                          <span className="transition group-open:rotate-180">
                             <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                       </summary>
                       <div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed border-t border-slate-50">
                          <div className="pt-4">{item.a}</div>
                       </div>
                    </details>
                 </div>
              ))}
           </div>
        </div>

        {/* 5. Final CTA */}
        <div className="mt-24 bg-navy-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
           
           <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">{t.pricing.finalCta.title}</h2>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 relative z-10">
              {t.pricing.finalCta.subtitle}
           </p>
           <a 
              href="https://wa.me/34628876339"
              className="inline-flex items-center bg-white text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-gold-500 hover:text-white transition-all transform hover:scale-105 shadow-xl relative z-10"
           >
              <svg className="w-6 h-6 mr-2 rtl:ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              {t.pricing.finalCta.button}
           </a>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
