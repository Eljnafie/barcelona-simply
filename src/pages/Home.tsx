
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Luxury Barcelona Concierge" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-block px-4 py-1 rounded-full bg-gold-500/20 border border-gold-500 text-gold-400 text-sm font-bold uppercase tracking-wider animate-fade-in-up">
             {t.hero.trustBadge}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://wa.me/34628876339" target="_blank" rel="noopener noreferrer" className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>{t.hero.cta}</span>
            </a>
            <Link to="/services" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-navy-900 transition-all text-center text-lg">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats / Trust Bar */}
      <div className="bg-navy-800 py-8 border-b border-navy-700">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around text-center gap-6 text-slate-300">
            <div>
               <div className="text-3xl font-bold text-gold-500">500+</div>
               <div className="text-sm uppercase tracking-wide">Families Assisted</div>
            </div>
            <div>
               <div className="text-3xl font-bold text-gold-500">100%</div>
               <div className="text-sm uppercase tracking-wide">Privacy Guaranteed</div>
            </div>
            <div>
               <div className="text-3xl font-bold text-gold-500">24/7</div>
               <div className="text-sm uppercase tracking-wide">Support Available</div>
            </div>
         </div>
      </div>

      {/* NEW: Quick Appointment Booking Section */}
      <section className="bg-white py-16 relative overflow-hidden shadow-sm z-20 -mt-4 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-navy-900 md:w-2/3 text-center md:text-left rtl:md:text-right">
              <h2 className="text-3xl font-bold mb-3">{t.homeAppointment.title}</h2>
              <p className="text-slate-600 text-lg">{t.homeAppointment.subtitle}</p>
              
              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                 {[t.homeAppointment.steps.step1, t.homeAppointment.steps.step2, t.homeAppointment.steps.step3].map((step, i) => (
                    <div key={i} className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                       <div className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center mr-2 rtl:ml-2">
                          {i + 1}
                       </div>
                       <span className="font-semibold text-sm text-navy-800">{step}</span>
                    </div>
                 ))}
              </div>
           </div>
           <div className="md:w-1/3 text-center">
              <Link to="/contact" className="bg-navy-900 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gold-500 transition-all transform hover:scale-105 inline-block w-full md:w-auto">
                 {t.homeAppointment.cta}
              </Link>
           </div>
        </div>
      </section>

      {/* 2. Key Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">{t.servicesPage.title}</h2>
             <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">{t.servicesPage.subtitle}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.keys(t.services.items).map((key, index) => {
                 // @ts-ignore
                 const item = t.services.items[key];
                 const icons = [
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                 ];
                 return (
                    <div key={key} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col group">
                       <div className="w-14 h-14 bg-navy-50 text-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             {icons[index]}
                          </svg>
                       </div>
                       <h3 className="text-2xl font-bold text-navy-900 mb-3">{item.title}</h3>
                       <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{item.cardDesc}</p>
                       <Link to={`/services/${key}`} className="text-gold-600 font-bold hover:text-navy-900 flex items-center uppercase text-sm tracking-wider">
                          {language === 'ar' ? 'تفاصيل الخدمة' : 'View Details'} 
                          <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                       </Link>
                    </div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Trust) - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">{t.whyUs.title}</h2>
            <p className="text-xl text-slate-600">{t.whyUs.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(t.whyUs.items).map((item: any, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                 <div className="w-16 h-16 bg-white text-gold-500 rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                   <span className="text-2xl font-bold">{index + 1}</span>
                 </div>
                 <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials - Redesigned */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.testimonials.title}</h2>
               <p className="text-slate-300 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {t.testimonials.items.map((review, index) => (
                  <div key={index} className="bg-navy-800/50 p-8 rounded-2xl border border-navy-700 backdrop-blur-sm hover:bg-navy-800 transition-colors">
                     <div className="flex items-start mb-6">
                        <div className="text-gold-500 text-5xl leading-none font-serif opacity-50">"</div>
                     </div>
                     <p className="text-lg text-slate-200 mb-6 italic leading-relaxed">{review.text}</p>
                     <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                           {review.name.charAt(0)}
                        </div>
                        <div className="ml-4 rtl:ml-0 rtl:mr-4">
                           <p className="font-bold text-white">{review.name}</p>
                           <div className="flex items-center text-xs text-gold-500 gap-2">
                              <span>{review.location}</span>
                              <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                              <span className="text-slate-400">{review.type}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Featured Blog Posts */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">{t.blog.title}</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">{t.blog.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {t.blog.posts.slice(0, 3).map((post) => (
                  <Link 
                    to={`/blog/${post.slug}`} 
                    key={post.id}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className="h-56 overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                           {post.category}
                        </div>
                     </div>
                     <div className="p-8 flex-1 flex flex-col">
                        <div className="text-xs text-gold-600 font-bold mb-3 uppercase tracking-wide">{post.date}</div>
                        <h3 className="text-xl font-bold text-navy-900 mb-4 leading-tight group-hover:text-gold-600 transition-colors">
                           {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                           {post.excerpt}
                        </p>
                        <span className="text-navy-900 font-bold text-sm inline-flex items-center mt-auto border-b border-transparent group-hover:border-navy-900 pb-0.5 transition-all w-max">
                           {t.blog.readMore}
                           <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </span>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 text-center bg-navy-900 rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">{t.ctaSection.title}</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10 font-light">{t.ctaSection.subtitle}</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
               <a href="https://wa.me/34628876339" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2 rtl:ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  {t.ctaSection.buttonText}
               </a>
               <Link to="/contact" className="bg-white border-2 border-white text-navy-900 font-bold py-4 px-10 rounded-full hover:bg-navy-50 transition-colors flex items-center justify-center">
                  {t.nav.contact}
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
