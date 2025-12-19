
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GoogleGenAI, Type } from "@google/genai";
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
    setGeneratedResult(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `Como redactor SEO profesional y experto jurídico/notarial para "Notaire Moad El Jayidi" en Tetuán, Marruecos, redacta un artículo informativo extenso (evergreen) sobre el tema: "${aiTopic}".
      
      REGLAS CRÍTICAS:
      - Crea 4 versiones independientes: Francés, Árabe estándar, Español e Inglés.
      - Cada versión debe tener un mínimo de 900 palabras.
      - Tono institucional, EEAT (Experiencia, Autoridad, Confianza).
      - Optimización local: Tetuán, تطوان, Tétouan.
      - Estructura: H1 (1 solo), H2 y H3 informativos.
      - Enlaces internos (intégralos): /services, /appointments, /contact, /blog.
      - Enlace externo sugerido a fuente oficial marroquí.
      - No usar keyword stuffing.
      - No menciones herramientas SEO ni procesos de IA.`;

      const versionSchema = {
        type: Type.OBJECT,
        properties: {
          seoTitle: { type: Type.STRING },
          metaDesc: { type: Type.STRING },
          slug: { type: Type.STRING },
          keyword: { type: Type.STRING },
          keywordsSecondary: { type: Type.ARRAY, items: { type: Type.STRING } },
          title: { type: Type.STRING },
          content: { type: Type.STRING, description: "Artículo completo en formato Markdown, mínimo 900 palabras" },
          imageAlt: { type: Type.STRING },
          externalLinkSuggestion: { type: Type.STRING }
        },
        required: ["seoTitle", "metaDesc", "slug", "keyword", "title", "content"]
      };

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [{ parts: [{ text: prompt }] }],
        config: { 
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              fr: versionSchema,
              ar: versionSchema,
              es: versionSchema,
              en: versionSchema
            },
            required: ["fr", "ar", "es", "en"]
          }
        }
      });

      const text = response.text;
      if (!text) throw new Error("Empty response from AI");
      
      const result = JSON.parse(text) as GeneratedArticle;
      setGeneratedResult(result);
      
      // Publicar automáticamente en el blog de la aplicación
      const updated = { ...translations };
      
      // Idiomas soportados en la App (en, fr, ar, es)
      (['en', 'fr', 'ar', 'es'] as const).forEach(lang => {
        const version = result[lang];
        if (version && updated[lang]) {
          const newPost: BlogPost = {
            id: 'ai_' + Date.now() + '_' + lang,
            slug: version.slug,
            title: version.title,
            excerpt: version.metaDesc,
            category: 'tips',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
            date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-MA' : 'es-ES'),
            author: 'Notaire Moad El Jayidi',
            seoTitle: version.seoTitle,
            metaDesc: version.metaDesc,
            content: {
              intro: version.content.substring(0, 300) + "...",
              sections: [{ title: "Contenido Detallado", content: version.content }],
              conclusion: "Para asesoramiento personalizado en Tetuán, contacte con nuestra notaría."
            }
          };
          if (!updated[lang].blog.posts) updated[lang].blog.posts = [];
          updated[lang].blog.posts = [newPost, ...updated[lang].blog.posts];
        }
      });

      updateTranslations(updated);
      alert('¡Éxito! Artículos generados y publicados en los 4 idiomas.');
    } catch (error) {
      console.error("AI Generation Error:", error);
      alert('Error técnico al generar el contenido. Asegúrese de que la conexión sea estable y la API Key válida.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-navy-950 text-white flex flex-col shrink-0">
        <div className="p-8 border-b border-navy-800">
          <h1 className="text-2xl font-bold tracking-tight">Notary<span className="text-gold-500">Admin</span></h1>
          <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Moad El Jayidi - Tetuán</p>
        </div>
        <nav className="flex-grow p-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'content' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            <span className="font-bold">Contenidos</span>
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'seo' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="font-bold">SEO Técnico</span>
          </button>
          <button 
            onClick={() => setActiveTab('ai-writer')}
            className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'ai-writer' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="font-bold">Redactor IA SEO</span>
          </button>
        </nav>
        <div className="p-6 border-t border-navy-800">
          <a href="/" className="flex items-center gap-2 text-xs text-gold-500 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Ir a la Web Pública
          </a>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-grow overflow-y-auto p-12 bg-slate-50">
        
        {activeTab === 'ai-writer' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <h2 className="text-4xl font-black mb-4">Motor de Redacción SEO Local</h2>
              <p className="text-slate-300 max-w-2xl leading-relaxed">
                Generación masiva de contenido jurídico para <span className="text-gold-500 font-bold">Tetuán</span>. 
                Optimizado para 4 idiomas (ES, EN, FR, AR) con estándares EEAT.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 space-y-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tema Jurídico / Notarial</label>
                <input 
                  type="text" 
                  placeholder="Ej: Trámites de herencia para marroquíes residentes en el extranjero" 
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none text-lg transition-all" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-200 border-dashed">
                <div className="space-y-4">
                  <h4 className="font-black text-navy-900 uppercase text-xs tracking-wider">Normas Estrictas</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">✅ +900 palabras por idioma</li>
                    <li className="flex items-center gap-2">✅ Keyword principal en H1 y Metadatos</li>
                    <li className="flex items-center gap-2">✅ Enlaces internos automáticos</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-navy-900 uppercase text-xs tracking-wider">Idiomas Activos</h4>
                  <div className="flex gap-2">
                    {['ES', 'EN', 'FR', 'AR'].map(l => (
                      <span key={l} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-navy-900">{l}</span>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={generateSEOArticle}
                disabled={isGenerating || !aiTopic}
                className="w-full bg-navy-900 text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-gold-500 transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    Redactando versiones multilingües (+3600 palabras en total)...
                  </>
                ) : (
                  "Generar Contenido SEO Cuadrilingüe"
                )}
              </button>

              {generatedResult && (
                <div className="mt-8 p-6 bg-green-50 text-green-800 rounded-2xl border border-green-100 flex items-center gap-4">
                   <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <div>
                     <p className="font-black">¡Artículos generados y publicados!</p>
                     <p className="text-sm opacity-80">Se han creado 4 entradas en el blog optimizadas para Tetuán.</p>
                   </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Other tabs simplified for brevity */}
        {activeTab === 'content' && (
           <div className="max-w-5xl mx-auto">
             <div className="bg-white p-12 rounded-3xl shadow-xl">
               <div className="flex justify-between items-center mb-10">
                 <h2 className="text-2xl font-black text-navy-900">Editor de Textos</h2>
                 <div className="flex bg-slate-100 p-1 rounded-xl">
                   {(['en', 'fr', 'ar', 'es'] as Language[]).map(l => (
                     <button key={l} onClick={() => setEditingLang(l)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase ${editingLang === l ? 'bg-navy-900 text-white shadow-md' : 'text-slate-400 hover:text-navy-900'}`}>{l}</button>
                   ))}
                 </div>
               </div>
               <div className="space-y-6">
                 <div>
                   <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">Título Hero ({editingLang})</label>
                   <input type="text" value={translations[editingLang].hero.title} onChange={e => {
                     const upd = {...translations}; upd[editingLang].hero.title = e.target.value; updateTranslations(upd);
                   }} className="w-full px-5 py-4 border rounded-xl" />
                 </div>
                 {/* ... More fields ... */}
               </div>
             </div>
           </div>
        )}

        {activeTab === 'seo' && (
           <div className="max-w-5xl mx-auto">
              <div className="bg-white p-12 rounded-3xl shadow-xl">
                <h2 className="text-2xl font-black text-navy-900 mb-8">SEO Global</h2>
                <form onSubmit={handleUpdateSEO} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">Meta Title Global</label>
                    <input name="title" defaultValue={seo.title} className="w-full px-5 py-4 border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-2">Meta Description Global</label>
                    <textarea name="description" defaultValue={seo.description} className="w-full px-5 py-4 border rounded-xl" rows={4} />
                  </div>
                  <button type="submit" className="bg-navy-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gold-500 transition-colors">Actualizar Configuración SEO</button>
                </form>
              </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
