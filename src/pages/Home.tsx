import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white">
      {/* 1. Hero Cinematográfico */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1539109132314-34a9c6553876?auto=format&fit=crop&q=80&w=2000" 
            alt="Barcelona Luxury View" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 animate-fade-in shadow-xl">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
               </span>
               {t.hero.trustBadge}
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter animate-fade-in-up">
               Barcelona <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Simply.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="https://wa.me/34628876339" className="bg-gold-500 hover:bg-white text-navy-950 font-black py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3 text-lg group">
                {t.hero.cta}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4-4m4 4H3"/></svg>
              </a>
              <Link to="/services" className="bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-black py-5 px-12 rounded-2xl hover:bg-white hover:text-navy-950 transition-all text-center text-lg">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-30">
           <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* 2. Elite Partners Marquee */}
      <div className="bg-white py-16 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Instituciones de Élite Colaboradoras</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-3xl font-black text-navy-900 tracking-tighter">TEKNON</span>
               <span className="text-3xl font-black text-navy-900 tracking-tighter">QUIRÓN</span>
               <span className="text-3xl font-black text-navy-900 tracking-tighter">UAB</span>
               <span className="text-3xl font-black text-navy-900 tracking-tighter">CLÍNIC</span>
               <span className="text-3xl font-black text-navy-900 tracking-tighter">W HOTEL</span>
            </div>
         </div>
      </div>

      {/* 3. Narrative "Concierge" Section */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="animate-fade-in-up">
                 <h2 className="text-4xl md:text-7xl font-black text-navy-950 mb-10 leading-[0.9] tracking-tighter">
                   Un servicio <span className="text-gold-500">discreto</span> y de absoluta excelencia.
                 </h2>
                 <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                   Entendemos que su estancia en Barcelona requiere más que simple logística. Proporcionamos un puente cultural y administrativo de confianza para que su salud, estudios y negocios se gestionen con la máxima privacidad.
                 </p>
                 <div className="grid grid-cols-2 gap-12 mb-12">
                    <div className="space-y-2 border-l-4 border-gold-500 pl-6">
                       <p className="text-4xl font-black text-navy-900">500+</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Familias VIP</p>
                    </div>
                    <div className="space-y-2 border-l-4 border-gold-500 pl-6">
                       <p className="text-4xl font-black text-navy-900">24/7</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Atención Directa</p>
                    </div>
                 </div>
                 <Link to="/about" className="inline-flex items-center gap-2 text-navy-900 font-black border-b-4 border-gold-500 pb-1 hover:text-gold-600 transition-all text-lg">
                    Nuestra Filosofía de Servicio →
                 </Link>
              </div>
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.3)]">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Luxury Concierge Experience" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-navy-950 text-white p-12 rounded-[2.5rem] shadow-2xl max-w-sm hidden md:block border border-white/10">
                    <p className="text-xl font-bold italic mb-6 leading-relaxed">"Nuestra misión es que usted sea un invitado en su propio viaje, nosotros cuidamos los detalles."</p>
                    <p className="text-xs font-black uppercase text-gold-500 tracking-[0.3em]">Director de Operaciones</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Elegante Timeline de Proceso */}
      <section className="py-32 bg-white">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-5xl font-black text-navy-950 mb-4 tracking-tighter">Su Viaje con Nosotros</h2>
               <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-20">
               {t.howItWorks.steps.map((step, index) => (
                  <div key={index} className="flex gap-16 group">
                     <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-[2rem] bg-navy-50 text-navy-900 flex items-center justify-center font-black text-2xl group-hover:bg-gold-500 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm border border-navy-100">
                           0{index + 1}
                        </div>
                        {index < t.howItWorks.steps.length - 1 && <div className="w-px h-full bg-slate-100 mt-6"></div>}
                     </div>
                     <div className="pt-4">
                        <h3 className="text-3xl font-black text-navy-950 mb-4 tracking-tight">{step.title}</h3>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA Final Estilo "Maison" */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto bg-navy-950 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.6)] border border-white/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter relative z-10 leading-[0.85]">
              Vivan Barcelona <br/><span className="text-gold-500 font-serif italic font-normal">sin límites.</span>
            </h2>
            <p className="text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium relative z-10 leading-relaxed">
              Únase a nuestro círculo de clientes exclusivos y descubra la ciudad con la tranquilidad de estar en las mejores manos.
            </p>
            <div className="relative z-10">
               <a href="https://wa.me/34628876339" className="inline-flex items-center bg-gold-500 text-navy-950 font-black py-7 px-20 rounded-3xl hover:bg-white transition-all shadow-[0_20px_60px_rgba(245,158,11,0.4)] text-2xl transform hover:scale-105 active:scale-95">
                  Contactar vía WhatsApp VIP
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;