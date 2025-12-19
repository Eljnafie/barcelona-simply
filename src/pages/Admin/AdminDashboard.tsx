
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
    alert('SEO Global actualizado correctamente.');
  };

  const generateSEOArticle = async () => {
    if (!aiTopic || isGenerating) return;

    // Validación robusta de la API KEY
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === 'undefined' || apiKey.length < 10) {
      alert('Error: La API Key no está configurada correctamente en Vercel. Por favor, añádala en Settings > Environment Variables y haga un "Redeploy" de su proyecto.');
      return;
    }

    setIsGenerating(true);
    setGeneratedResult(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const systemPrompt = `Eres el redactor jefe de "Barcelona Simply", una agencia premium de asistencia para visitantes de habla árabe en Barcelona.
      Tu objetivo es escribir un artículo SEO profundo, útil y empático sobre: "${aiTopic}".
      
      CONTEXTO DEL NEGOCIO:
      - Servicios: Acompañamiento médico (Teknon, Quirón, Dexeus), apoyo administrativo (NIE, TIE, empadronamiento), registro de estudios y conserjería VIP.
      - Público: Ciudadanos de países árabes (especialmente el Golfo) que visitan Barcelona.
      - Tono: Profesional, experto y hospitalario.
      
      REQUISITOS DEL ARTÍCULO:
      1. Genera 4 versiones independientes: Árabe, Francés, Español e Inglés.
      2. Longitud: Mínimo 900 palabras por cada idioma.
      3. Estructura: 1 H1, varios H2 y H3 con keywords locales de Barcelona.
      4. Formato: Responde estrictamente en JSON.`;

      const versionSchema = {
        type: Type.OBJECT,
        properties: {
          seoTitle: { type: Type.STRING },
          metaDesc: { type: Type.STRING },
          slug: { type: Type.STRING },
          keyword: { type: Type.STRING },
          keywordsSecondary: { type: Type.ARRAY, items: { type: Type.STRING } },
          title: { type: Type.STRING },
          content: { type: Type.STRING, description: "Artículo completo en Markdown" },
          imageAlt: { type: Type.STRING }
        },
        required: ["seoTitle", "metaDesc", "slug", "title", "content"]
      };

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: systemPrompt }] }],
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
      if (!text) throw new Error("La IA devolvió una respuesta vacía.");
      
      const result = JSON.parse(text) as GeneratedArticle;
      setGeneratedResult(result);
      
      const updated = { ...translations };
      
      (['en', 'fr', 'ar', 'es'] as const).forEach(lang => {
        const version = result[lang];
        if (version && updated[lang]) {
          const newPost: BlogPost = {
            id: `ai_${Date.now()}_${lang}`,
            slug: version.slug,
            title: version.title,
            excerpt: version.metaDesc,
            category: 'tips',
            image: 'https://images.unsplash.com/photo-1543783232-f99690139d92?auto=format&fit=crop&q=80&w=800',
            date: new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'es-ES'),
            author: 'Barcelona Simply Team',
            content: {
              intro: version.content.substring(0, 300) + "...",
              sections: [{ title: "Guía Detallada", content: version.content }],
              conclusion: "Contacte con Barcelona Simply para asistencia personalizada."
            }
          };
          if (!updated[lang].blog.posts) updated[lang].blog.posts = [];
          updated[lang].blog.posts = [newPost, ...updated[lang].blog.posts];
        }
      });

      updateTranslations(updated);
      alert('Contenidos generados y publicados exitosamente.');
    } catch (error: any) {
      console.error("Error de IA:", error);
      alert(`Error al generar el contenido: ${error.message || 'Verifique la API Key y su conexión.'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-navy-900 text-white flex flex-col shrink-0">
        <div className="p-8 border-b border-navy-800">
          <h1 className="text-xl font-bold tracking-tight">Barcelona<span className="text-gold-500">Simply</span> Admin</h1>
          <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest font-bold">Gestión de Contenidos</p>
        </div>
        <nav className="flex-grow p-4 space-y-1 mt-4">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-5 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'content' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-800 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            <span className="font-bold text-sm">Contenidos</span>
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full text-left px-5 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'seo' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-800 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="font-bold text-sm">SEO Global</span>
          </button>
          <button 
            onClick={() => setActiveTab('ai-writer')}
            className={`w-full text-left px-5 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'ai-writer' ? 'bg-gold-500 text-white shadow-lg' : 'hover:bg-navy-800 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="font-bold text-sm">Escritor IA</span>
          </button>
        </nav>
        <div className="p-6 border-t border-navy-800">
          <a href="/" className="flex items-center gap-2 text-xs text-gold-500 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver a la Web
          </a>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-grow overflow-y-auto p-12 bg-slate-50">
        {activeTab === 'ai-writer' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <div className="bg-navy-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-4">Generador de Guías SEO</h2>
                <p className="text-slate-300 max-w-2xl leading-relaxed text-lg">
                  Escribe el tema de interés para tus clientes (ej: "Trámites de NIE" o "Hospitales en Barcelona"). La IA creará contenido experto en 4 idiomas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-100 space-y-8">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Tema del Artículo</label>
                <input 
                  type="text" 
                  placeholder="Ej: Acompañamiento médico premium en Barcelona" 
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 outline-none text-lg transition-all" 
                />
              </div>

              <button 
                onClick={generateSEOArticle}
                disabled={isGenerating || !aiTopic}
                className="w-full bg-navy-900 text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-gold-500 transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {isGenerating ? "Generando..." : "Generar y Publicar en Blog"}
              </button>

              {generatedResult && (
                <div className="mt-8 p-6 bg-green-50 text-green-800 rounded-2xl border border-green-100 animate-fade-in-up">
                   <p className="font-black">¡Hecho! Artículos publicados en el Blog.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Editor simple de contenidos */}
        {activeTab === 'content' && (
          <div className="max-w-5xl mx-auto space-y-8">
             <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
               <div className="flex justify-between items-center mb-10">
                 <h2 className="text-2xl font-black text-navy-900">Editor de Textos</h2>
                 <div className="flex bg-slate-100 p-1 rounded-xl">
                   {(['en', 'fr', 'ar', 'es'] as Language[]).map(l => (
                     <button 
                        key={l} 
                        onClick={() => setEditingLang(l)} 
                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase ${editingLang === l ? 'bg-navy-900 text-white' : 'text-slate-400'}`}
                     >
                        {l}
                     </button>
                   ))}
                 </div>
               </div>
               
               {translations[editingLang] && (
                 <div className="space-y-8">
                   <div>
                     <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Título Hero</label>
                     <input 
                        type="text" 
                        value={translations[editingLang].hero.title} 
                        onChange={e => {
                          const upd = {...translations}; 
                          upd[editingLang].hero.title = e.target.value; 
                          updateTranslations(upd);
                        }} 
                        className="w-full px-5 py-4 border border-slate-200 rounded-xl" 
                     />
                   </div>
                   <p className="text-xs text-slate-400 italic">Los cambios se guardan automáticamente en este navegador.</p>
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
