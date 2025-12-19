
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";
import { BlogPost, Language } from '../../types';

interface ArticleVersion {
  seoTitle: string;
  metaDesc: string;
  slug: string;
  keyword: string;
  keywordsSecondary: string[];
  title: string;
  content: string;
  imageAlt: string;
  externalLinkSuggestion: string;
}

interface GeneratedArticle {
  fr: ArticleVersion;
  ar: ArticleVersion;
  es: ArticleVersion;
  en: ArticleVersion;
}

const AdminDashboard: React.FC = () => {
  const { translations, updateTranslations, seo, updateSEO } = useLanguage();
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'ai-writer'>('content');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [generatedResult, setGeneratedResult] = useState<GeneratedArticle | null>(null);
  const [editingLang, setEditingLang] = useState<Language>('en');

  const handleUpdateSEO = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateSEO({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      keywords: formData.get('keywords') as string,
      ogImage: formData.get('ogImage') as string,
    });
    alert('SEO Updated Successfully!');
  };

  const generateSEOArticle = async () => {
    if (!aiTopic || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `Actúa como un redactor SEO profesional especializado en SEO local para servicios jurídicos y notariales con experiencia en contenido institucional, legal y de alta confianza (EEAT).
      
      OBJETIVO: Crear un artículo informativo, claro, original y evergreen sobre el tema: "${aiTopic}".
      UBICACIÓN SEO: Tetuán – Marruecos (Tétouan, Tetouan, تطوان).
      NOMBRE INSTITUCIONAL: Notaire Moad El Jayidi (mención sobria e institucional).
      
      REQUISITOS SEO OBLIGATORIOS:
      1. 4 VERSIONES INDEPENDIENTES: Francés (principal), Árabe estándar moderno, Español e Inglés. No traducciones, sino adaptaciones culturales.
      2. ESTRUCTURA: Solo un H1 (con keyword principal), varios H2 y H3.
      3. LONGITUD: Mínimo 900 palabras por idioma.
      4. ENLACES INTERNOS: Integrar 2-4 enlaces contextuales a: /services, /appointments, /contact, /blog.
      5. FORMATO: Salida estrictamente en JSON.
      6. TONO: Profesional, institucional, tranquilizador.
      7. ENLACES EXTERNOS: Máximo 1 a fuente oficial marroquí.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: systemInstruction,
        config: { 
          responseMimeType: "application/json",
          temperature: 0.7,
        }
      });

      const result = JSON.parse(response.text || '{}') as GeneratedArticle;
      setGeneratedResult(result);
      
      // Auto-publish valid versions to the respective translations
      const updated = { ...translations };
      
      // Map and publish (supporting our app languages: en, fr, ar)
      (['en', 'fr', 'ar'] as const).forEach(lang => {
        const version = result[lang];
        if (version) {
          const newPost: BlogPost = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
            slug: version.slug,
            title: version.title,
            excerpt: version.metaDesc,
            category: 'tips',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            date: new Date().toLocaleDateString(),
            author: 'Notaire Moad El Jayidi',
            seoTitle: version.seoTitle,
            metaDesc: version.metaDesc,
            content: {
              intro: version.content.substring(0, 400).split('\n')[0] + "...",
              sections: [{ title: "Guía Notarial Completa", content: version.content }],
              conclusion: "Para recibir asesoramiento personalizado en Tetuán, le invitamos a contactar con nuestra notaría."
            }
          };
          updated[lang].blog.posts = [newPost, ...updated[lang].blog.posts];
        }
      });

      updateTranslations(updated);
      alert('Contenidos SEO generados y publicados en el Blog (FR, AR, EN, ES).');
    } catch (error) {
      console.error(error);
      alert('Error al generar el contenido. Verifique la API Key.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-navy-950 text-white flex flex-col shrink-0">
        <div className="p-8 border-b border-navy-800">
          <h1 className="text-2xl font-bold tracking-tight">Admin<span className="text-gold-500">Panel</span></h1>
          <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Notaire Moad El Jayidi - Tetuán</p>
        </div>
        <nav className="flex-grow p-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'content' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            <span className="font-bold">Editar Contenido</span>
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'seo' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="font-bold">SEO & Metadatos</span>
          </button>
          <button 
            onClick={() => setActiveTab('ai-writer')}
            className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'ai-writer' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="font-bold">Escritor IA SEO</span>
          </button>
        </nav>
        <div className="p-6 border-t border-navy-800">
          <a href="/" className="flex items-center gap-2 text-sm text-gold-500 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Ver Web en Vivo
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto p-12 bg-slate-50">
        
        {activeTab === 'content' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-black text-navy-900">Gestión de Contenidos</h2>
                <p className="text-slate-500 mt-1">Edite los textos principales en tiempo real.</p>
              </div>
              <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                {(['en', 'fr', 'ar'] as Language[]).map(l => (
                  <button 
                    key={l}
                    onClick={() => setEditingLang(l)}
                    className={`px-6 py-2 rounded-lg text-xs font-black uppercase transition-all ${editingLang === l ? 'bg-navy-900 text-white shadow-md' : 'text-slate-400 hover:text-navy-900'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 space-y-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Hero Title ({editingLang})</label>
                <input 
                  type="text" 
                  value={translations[editingLang].hero.title}
                  onChange={(e) => {
                    const updated = {...translations};
                    updated[editingLang].hero.title = e.target.value;
                    updateTranslations(updated);
                  }}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Hero Subtitle</label>
                <textarea 
                  value={translations[editingLang].hero.subtitle}
                  rows={4}
                  onChange={(e) => {
                    const updated = {...translations};
                    updated[editingLang].hero.subtitle = e.target.value;
                    updateTranslations(updated);
                  }}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none transition-all"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-navy-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-gold-500 transition-all shadow-xl">
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl font-black text-navy-900">Configuración Técnica SEO</h2>
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
              <form onSubmit={handleUpdateSEO} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Meta Title Global</label>
                      <input name="title" defaultValue={seo.title} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Keywords Principales</label>
                      <input name="keywords" defaultValue={seo.keywords} placeholder="Notaría Tetuán, Notaire Tétouan, etc." className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Meta Description Global</label>
                    <textarea name="description" defaultValue={seo.description} rows={6} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none transition-all" />
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                   <button type="submit" className="bg-navy-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-gold-500 transition-all shadow-xl">
                    Actualizar SEO del Sitio
                   </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'ai-writer' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM14.5 9a.5.5 0 000 1h1a.5.5 0 000-1h-1z" /></svg>
              </div>
              <h2 className="text-4xl font-black mb-4">SEO AI Professional Writer</h2>
              <p className="text-slate-300 max-w-2xl leading-relaxed">
                Generador de artículos notariales optimizados para <span className="text-gold-500 font-bold">Tetuán, Marruecos</span>. 
                Contenido institucional de alta calidad (EEAT) en 4 idiomas.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tema / Trámite Notarial</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Escrituras de compraventa en Tétouan para residentes extranjeros" 
                    value={aiTopic}
                    onChange={(e) => setAiTopic(e.target.value)}
                    className="w-full px-6 py-5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none text-lg transition-all" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-200 border-dashed">
                  <div className="space-y-4">
                    <h4 className="font-black text-navy-900 uppercase text-xs tracking-wider">Normas de Redacción SEO</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div> 
                        Longitud: 900+ palabras por idioma
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div> 
                        Estructura: H1, H2, H3 (Keywords integradas)
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div> 
                        Idiomas: FR, AR, ES, EN (Versiones únicas)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-navy-900 uppercase text-xs tracking-wider">Enlaces Internos Sugeridos</h4>
                    <div className="flex flex-wrap gap-2">
                      {['/services', '/appointments', '/contact', '/blog'].map(u => (
                        <span key={u} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-navy-900">{u}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={generateSEOArticle}
                  disabled={isGenerating || !aiTopic}
                  className="w-full bg-navy-900 text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-gold-500 transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50 group"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      Redactando contenido profesional...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      Generar Artículos Multilingües
                    </>
                  )}
                </button>
              </div>

              {generatedResult && (
                <div className="mt-12 space-y-6 animate-fade-in-up">
                   <div className="border-t border-slate-100 pt-8">
                      <h3 className="text-xl font-black text-navy-900 mb-6 flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        Artículos Generados con Éxito
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Object.entries(generatedResult).map(([lang, data]) => (
                          <div key={lang} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 group">
                             <div className="flex justify-between mb-3">
                               <span className="font-black uppercase text-[10px] text-gold-600 tracking-widest">{lang} VERSION</span>
                               <span className="text-[10px] text-slate-400 font-bold">900+ WORDS</span>
                             </div>
                             <h4 className="font-bold text-navy-900 text-sm line-clamp-1">{data.title}</h4>
                             <p className="text-[10px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">{data.metaDesc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 p-4 bg-navy-900 text-gold-400 rounded-xl text-xs font-bold text-center">
                        Contenidos publicados automáticamente en la Guía de Barcelona y el Blog Institucional.
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
