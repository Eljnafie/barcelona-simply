import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = t.blog.posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
     return <div className="min-h-screen flex items-center justify-center">Article not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
       {/* Hero Section */}
       <div className="relative h-[400px]">
          <img 
             src={post.image} 
             alt={post.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/70"></div>
          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-16">
             <Link to="/blog" className="text-gold-500 hover:text-white mb-4 inline-flex items-center font-bold text-sm uppercase tracking-wider">
               <svg className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
               {t.nav.blog}
             </Link>
             <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
             <div className="flex items-center text-slate-300 text-sm">
                <span className="bg-gold-500 text-white px-2 py-1 rounded mr-4 rtl:ml-4 rtl:mr-0 uppercase text-xs font-bold">{post.category}</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             
             {/* Main Content */}
             <div className="lg:col-span-2">
                <article className="prose prose-lg prose-slate max-w-none">
                   <p className="text-xl text-slate-700 font-medium mb-8 leading-relaxed border-l-4 border-gold-500 pl-4 rtl:pr-4 rtl:pl-0 rtl:border-r-4 rtl:border-l-0">
                      {post.content.intro}
                   </p>

                   {post.content.sections.map((section, idx) => (
                      <div key={idx} className="mb-10">
                         <h2 className="text-2xl font-bold text-navy-900 mb-4">{section.title}</h2>
                         {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-5 rtl:pr-5 rtl:pl-0 space-y-2 text-slate-600">
                               {section.content.map((item, i) => (
                                  <li key={i}>{item}</li>
                               ))}
                            </ul>
                         ) : (
                            <p className="text-slate-600 leading-relaxed">{section.content}</p>
                         )}
                      </div>
                   ))}

                   <div className="bg-navy-50 p-6 rounded-xl border border-navy-100 mt-8">
                      <h3 className="text-lg font-bold text-navy-900 mb-2">Conclusion</h3>
                      <p className="text-slate-700 italic">{post.content.conclusion}</p>
                   </div>
                </article>
             </div>

             {/* Sidebar */}
             <div className="lg:col-span-1">
                <div className="sticky top-24">
                   <div className="bg-white border-2 border-gold-500 p-8 rounded-2xl shadow-xl text-center">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{t.blog.cta.title}</h3>
                      <p className="text-slate-600 mb-6 text-sm">{t.blog.cta.text}</p>
                      <a 
                         href="https://wa.me/34628876339" 
                         target="_blank" 
                         rel="noreferrer"
                         className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full w-full block transition-transform transform hover:scale-105 shadow-md flex items-center justify-center"
                      >
                         <svg className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                         {t.blog.cta.button}
                      </a>
                   </div>
                   
                   <div className="mt-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-navy-900 mb-4">Related Services</h4>
                      <ul className="space-y-3">
                         <li><Link to="/services/medical" className="text-slate-600 hover:text-gold-600 text-sm block border-b border-slate-200 pb-2">Medical Accompaniment &rarr;</Link></li>
                         <li><Link to="/services/admin" className="text-slate-600 hover:text-gold-600 text-sm block border-b border-slate-200 pb-2">NIE & Residency Support &rarr;</Link></li>
                         <li><Link to="/services/vip" className="text-slate-600 hover:text-gold-600 text-sm block">VIP Concierge &rarr;</Link></li>
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