
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
            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&q=80&w=2070" 
            alt="Barcelona Luxury" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
               </span>
               {t.hero.trustBadge}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up">
               Barcelona <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Simply.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="https://wa.me/34628876339" className="bg-gold-500 hover:bg-white text-navy-950 font-black py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 text-lg group">
                {t.hero.cta}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4-4m4 4H3"/></svg>
              </a>
              <Link to="/services" className="bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-black py-5 px-12 rounded-2xl hover:bg-white hover:text-navy-950 transition-all text-center text-lg">
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
      <div className="bg-white py-12 border-b border-slate-100 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">Colaboramos con las mejores instituciones</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <span className="text-2xl font-black text-navy-900 tracking-tighter">TEKNON</span>
               <span className="text-2xl font-black text-navy-900 tracking-tighter">QUIRÓN</span>
               <span className="text-2xl font-black text-navy-900 tracking-tighter">UAB</span>
               <span className="text-2xl font-black text-navy-900 tracking-tighter">BARCELONA GHS</span>
               <span className="text-2xl font-black text-navy-900 tracking-tighter">W BARCELONA</span>
            </div>
         </div>
      </div>

      {/* 3. Narrative Service Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-navy-950 mb-8 leading-tight tracking-tighter">
                   Un servicio <span className="text-gold-500">discreto</span>, personal y de absoluta excelencia.
                 </h2>
                 <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                   Entendemos las necesidades de nuestros clientes del Golfo. No somos solo traductores; somos su puente de confianza en Europa, gestionando cada detalle de su salud, educación y estilo de vida con total confidencialidad.
                 </p>
                 <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="space-y-2">
                       <p className="text-3xl font-black text-navy-900">500+</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Familias VIP</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-3xl font-black text-navy-900">24/7</p>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Disponibilidad</p>
                    </div>
                 </div>
                 <Link to="/about" className="inline-block text-navy-900 font-black border-b-4 border-gold-500 pb-1 hover:text-gold-600 transition-all">
                    Conocer nuestra filosofía →
                 </Link>
              </div>
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Luxury Concierge" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-navy-950 text-white p-10 rounded-[2rem] shadow-2xl max-w-xs hidden md:block">
                    <p className="text-lg font-bold italic mb-4">"Nuestra prioridad es que usted solo se preocupe de disfrutar, nosotros nos encargamos del resto."</p>
                    <p className="text-xs font-black uppercase text-gold-500 tracking-widest">Director de Operaciones</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Elegante Timeline de Proceso */}
      <section className="py-32 bg-white">
         <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-4 tracking-tighter">Cómo cuidamos de usted</h2>
               <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            </div>
            
            <div className="space-y-16">
               {t.howItWorks.steps.map((step, index) => (
                  <div key={index} className="flex gap-12 group">
                     <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-3xl bg-navy-50 text-navy-900 flex items-center justify-center font-black text-xl group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                           {index + 1}
                        </div>
                        {index < 3 && <div className="w-px h-full bg-slate-100 mt-4"></div>}
                     </div>
                     <div className="pt-2">
                        <h3 className="text-2xl font-black text-navy-950 mb-3 tracking-tight">{step.title}</h3>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA Final Estilo Newsletter de Lujo */}
      <section className="py-24 px-6">
         <div className="max-w-7xl mx-auto bg-navy-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.5)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter relative z-10 leading-[0.9]">
              ¿Preparado para una estancia <span className="text-gold-500">perfecta</span>?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Únase a nuestros clientes satisfechos y disfrute de Barcelona con la tranquilidad de tener a los mejores expertos a su lado.
            </p>
            <div className="relative z-10">
               <a href="https://wa.me/34628876339" className="inline-flex items-center bg-gold-500 text-navy-950 font-black py-6 px-16 rounded-2xl hover:bg-white transition-all shadow-2xl text-xl">
                  {t.ctaSection.buttonText}
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
