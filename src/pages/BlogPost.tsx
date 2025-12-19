
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = t.blog.posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
     return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-10">
         <h2 className="text-3xl font-black text-navy-950 mb-4">Artículo no encontrado</h2>
         <Link to="/blog" className="bg-gold-500 text-white px-8 py-3 rounded-full font-bold">Volver al Blog</Link>
       </div>
     );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
       {/* Hero Section con Imagen Real */}
       <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img 
             src={post.image || 'https://picsum.photos/1920/1080?grayscale'} 
             alt={post.title} 
             className="w-full h-full object-cover transition-transform duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-20">
             <Link to="/blog" className="text-gold-500 hover:text-white mb-6 inline-flex items-center font-black text-xs uppercase tracking-widest transition-all">
               <svg className="w-4 h-4 mr-2 rtl:ml-2 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
               {t.nav.blog}
             </Link>
             <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] animate-fade-in-up">
               {post.title}
             </h1>
             <div className="flex items-center gap-6 text-slate-300 text-xs font-bold uppercase tracking-widest">
                <span className="bg-gold-500 text-navy-950 px-3 py-1 rounded-sm">{post.category}</span>
                <span>{post.date}</span>
                <span className="hidden sm:inline opacity-50">•</span>
                <span className="hidden sm:inline">{post.author}</span>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
             
             {/* Main Content Renderizado como HTML */}
             <div className="lg:col-span-2">
                <article className="prose prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:text-navy-950 prose-a:text-gold-600 prose-img:rounded-[2rem] prose-img:shadow-2xl">
                   {/* Intro (si existe fuera del HTML principal) */}
                   {post.content.intro && (
                     <p className="text-2xl text-slate-800 font-medium mb-12 leading-relaxed border-l-8 border-gold-500 pl-8 rtl:pr-8 rtl:pl-0 rtl:border-r-8 rtl:border-l-0">
                        {post.content.intro}
                     </p>
                   )}

                   {/* Secciones del Post */}
                   {post.content.sections.map((section, idx) => (
                      <div key={idx} className="mb-12">
                         {section.title && <h2 className="text-3xl font-black mb-6">{section.title}</h2>}
                         {typeof section.content === 'string' ? (
                            <div 
                              className="article-body text-slate-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: section.content }} 
                            />
                         ) : Array.isArray(section.content) ? (
                            <ul className="list-disc pl-6 space-y-3">
                               {section.content.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                         ) : null}
                      </div>
                   ))}

                   {post.content.conclusion && (
                     <div className="bg-navy-50 p-10 rounded-[3rem] border border-navy-100 mt-16 shadow-inner">
                        <h3 className="text-xl font-black text-navy-900 mb-4 tracking-tight">Nota Editorial</h3>
                        <p className="text-slate-700 italic text-lg leading-relaxed">{post.content.conclusion}</p>
                     </div>
                   )}
                </article>
             </div>

             {/* Sidebar Premium */}
             <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-10">
                   <div className="bg-navy-900 border-b-8 border-gold-500 p-10 rounded-[2.5rem] shadow-2xl text-center text-white">
                      <h3 className="text-2xl font-black mb-4 tracking-tight">{t.blog.cta.title}</h3>
                      <p className="text-slate-400 mb-8 text-sm leading-relaxed">{t.blog.cta.text}</p>
                      <a 
                         href="https://wa.me/34628876339" 
                         target="_blank" 
                         rel="noreferrer"
                         className="bg-green-600 hover:bg-green-700 text-white font-black py-4 px-8 rounded-2xl w-full block transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                      >
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                         Contactar por WhatsApp
                      </a>
                   </div>
                   
                   <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                      <h4 className="font-black text-navy-950 mb-6 text-xl tracking-tight">Servicios Relacionados</h4>
                      <ul className="space-y-4">
                         <li><Link to="/services/medical" className="text-slate-600 hover:text-gold-600 text-sm font-bold flex items-center justify-between group">Acompañamiento Médico <span className="group-hover:translate-x-1 transition-transform">→</span></Link></li>
                         <li><Link to="/services/admin" className="text-slate-600 hover:text-gold-600 text-sm font-bold flex items-center justify-between group">Gestión NIE & Residencia <span className="group-hover:translate-x-1 transition-transform">→</span></Link></li>
                         <li><Link to="/services/vip" className="text-slate-600 hover:text-gold-600 text-sm font-bold flex items-center justify-between group">Conserjería VIP <span className="group-hover:translate-x-1 transition-transform">→</span></Link></li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default BlogPost;
