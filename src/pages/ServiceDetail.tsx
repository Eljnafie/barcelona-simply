
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // @ts-ignore
  const service = t.services.items[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
         <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Service Not Found</h2>
            <Link to="/services" className="text-gold-500 hover:underline">Back to Services</Link>
         </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
       {/* Hero Section */}
       <div className="relative h-[50vh] min-h-[400px]">
          <img 
             src={service.heroImage} 
             alt={service.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
             <Link to="/services" className="text-gold-500 hover:text-white mb-6 inline-flex items-center font-semibold text-sm uppercase tracking-wider">
               <svg className="w-4 h-4 mr-2 rtl:ml-2 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
               {t.nav.services}
             </Link>
             <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">{service.title}</h1>
             <div className="flex gap-4">
                <a 
                   href={`https://wa.me/34628876339?text=${encodeURIComponent(`I am interested in: ${service.title}`)}`} 
                   target="_blank" rel="noreferrer" 
                   className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center"
                >
                   <svg className="w-5 h-5 mr-2 rtl:ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                   {t.servicesPage.buttons.book}
                </a>
             </div>
          </div>
       </div>

       {/* Detailed Content */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             
             {/* Main Info */}
             <div className="lg:col-span-2 space-y-12">
                
                {/* Summary */}
                <section>
                   <h2 className="text-2xl font-bold text-navy-900 mb-4 border-b-4 border-gold-500 inline-block pb-2">Overview</h2>
                   <p className="text-lg text-slate-700 leading-relaxed">{service.summary}</p>
                </section>
                
                {/* Who is it for (New Section) */}
                <section className="bg-navy-50 p-6 rounded-xl border-l-4 border-gold-500">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">Ideal For</h3>
                    <p className="text-slate-700">{service.whoFor}</p>
                </section>

                {/* Benefits (New Section) */}
                <section>
                    <h3 className="text-xl font-bold text-navy-900 mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit: string, idx: number) => (
                            <div key={idx} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 rtl:ml-3">
                                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="font-medium text-navy-900">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features (What We Include) */}
                <section>
                   <h3 className="text-xl font-bold text-navy-900 mb-6">What We Include</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature: string, idx: number) => (
                         <div key={idx} className="flex items-start bg-slate-50 p-4 rounded-lg">
                            <svg className="w-6 h-6 text-gold-500 mr-3 rtl:ml-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="font-medium text-slate-800">{feature}</span>
                         </div>
                      ))}
                   </div>
                </section>

                {/* Process */}
                <section>
                   <h3 className="text-xl font-bold text-navy-900 mb-8">{service.processTitle}</h3>
                   <div className="relative border-l-2 border-slate-200 ml-4 rtl:mr-4 rtl:ml-0 rtl:border-r-2 rtl:border-l-0 space-y-8">
                      {service.process.map((step: any, idx: number) => (
                         <div key={idx} className="relative pl-8 rtl:pr-8 rtl:pl-0">
                            <div className="absolute top-0 left-0 rtl:right-0 rtl:left-auto -ml-1.5 rtl:-mr-1.5 w-3 h-3 bg-gold-500 rounded-full border-2 border-white ring-2 ring-slate-100"></div>
                            <h4 className="text-lg font-bold text-navy-900 mb-1">{idx + 1}. {step.step}</h4>
                            <p className="text-slate-600">{step.desc}</p>
                         </div>
                      ))}
                   </div>
                </section>

                {/* FAQ */}
                <section className="bg-slate-50 p-8 rounded-2xl">
                   <h3 className="text-xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h3>
                   <div className="space-y-6">
                      {service.faq.map((faq: any, idx: number) => (
                         <div key={idx}>
                            <h5 className="font-bold text-navy-800 mb-2">{faq.q}</h5>
                            <p className="text-slate-600 text-sm">{faq.a}</p>
                         </div>
                      ))}
                   </div>
                </section>

             </div>

             {/* Sidebar CTA */}
             <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                   <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-xl">
                      <h3 className="text-2xl font-bold mb-4">Book This Service</h3>
                      <p className="mb-6 text-slate-300">Ready to proceed? Contact us immediately to schedule your {service.title}.</p>
                      <a 
                         href={`https://wa.me/34628876339?text=${encodeURIComponent(`I would like to book: ${service.title}`)}`}
                         target="_blank" rel="noreferrer" 
                         className="block w-full text-center bg-gold-500 text-white font-bold py-3 rounded-lg hover:bg-gold-600 transition-colors mb-4 shadow-lg"
                      >
                         Book via WhatsApp
                      </a>
                      <Link 
                         to="/contact"
                         className="block w-full text-center bg-transparent border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white hover:text-navy-900 transition-colors"
                      >
                         Request Quote via Email
                      </Link>
                   </div>
                   
                   <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-navy-900 mb-2">Need a Custom Plan?</h4>
                      <p className="text-sm text-slate-600 mb-4">We offer tailored packages for students, families, and VIPs.</p>
                      <Link to="/pricing" className="text-gold-600 font-bold hover:underline text-sm">View Packages &rarr;</Link>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};

export default ServiceDetail;
