
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
  jsonLd: string;
  imagePrompt: string;
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
  const [genStep, setGenStep] = useState('');
  const [aiTopic, setAiTopic] = useState('');
  const [previewArticle, setPreviewArticle] = useState<GeneratedArticle | null>(null);
  const [generatedImg, setGeneratedImg] = useState<string>('');

  const generateFullSEOArticle = async () => {
    if (!aiTopic || isGenerating) return;

    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === 'undefined') {
      alert('Configure su API_KEY en Vercel.');
      return;
    }

    setIsGenerating(true);
    setPreviewArticle(null);
    setGeneratedImg('');

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      setGenStep('🔍 Realizando investigación profunda con Google Search y Maps...');
      
      const writerResponse = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [{ parts: [{ text: `Escribe un artículo SEO de máxima autoridad sobre "${aiTopic}" para Barcelona Simply. 
        INSTRUCCIONES CRÍTICAS: 
        1. Usa Google Search para validar leyes y servicios actuales en 2025.
        2. Usa Google Maps para identificar al menos 3 ubicaciones reales (hospitales, notarías o escuelas) y añade sus enlaces de Google Maps en el contenido.
        3. Genera versiones perfectas en: FR, AR, ES, EN.
        4. Longitud: 900+ palabras por idioma con estructura H1, H2, H3.
        5. Incluye JSON-LD Schema.org completo.
        6. Define un prompt artístico de alta gama para la imagen del post.
        7. El tono debe ser de extrema confianza y hospitalidad árabe.` }] }],
        config: {
          tools: [{ googleSearch: {} }, { googleMaps: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              fr: { type: Type.OBJECT, properties: { seoTitle: {type:Type.STRING}, metaDesc: {type:Type.STRING}, slug: {type:Type.STRING}, title: {type:Type.STRING}, content: {type:Type.STRING}, keyword: {type:Type.STRING}, jsonLd: {type:Type.STRING}, imagePrompt: {type:Type.STRING} } },
              ar: { type: Type.OBJECT, properties: { seoTitle: {type:Type.STRING}, metaDesc: {type:Type.STRING}, slug: {type:Type.STRING}, title: {type:Type.STRING}, content: {type:Type.STRING}, keyword: {type:Type.STRING}, jsonLd: {type:Type.STRING}, imagePrompt: {type:Type.STRING} } },
              es: { type: Type.OBJECT, properties: { seoTitle: {type:Type.STRING}, metaDesc: {type:Type.STRING}, slug: {type:Type.STRING}, title: {type:Type.STRING}, content: {type:Type.STRING}, keyword: {type:Type.STRING}, jsonLd: {type:Type.STRING}, imagePrompt: {type:Type.STRING} } },
              en: { type: Type.OBJECT, properties: { seoTitle: {type:Type.STRING}, metaDesc: {type:Type.STRING}, slug: {type:Type.STRING}, title: {type:Type.STRING}, content: {type:Type.STRING}, keyword: {type:Type.STRING}, jsonLd: {type:Type.STRING}, imagePrompt: {type:Type.STRING} } }
            }
          }
        }
      });

      const result = JSON.parse(writerResponse.text) as GeneratedArticle;
      setPreviewArticle(result);

      setGenStep('🎨 Generando arte editorial único...');
      const imgResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: `Professional commercial photography, high-end travel and lifestyle, Barcelona architecture background, warm elegant tones: ${result.en.imagePrompt}` }] }],
        config: { imageConfig: { aspectRatio: "16:9", imageSize: "1K" } }
      });

      for (const part of imgResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          setGeneratedImg(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }

      setGenStep('✅ Guía generada con éxito.');
    } catch (e: any) {
      console.error(e);
      alert(`Error en generación: ${e.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const publishArticle = () => {
    if (!previewArticle || !generatedImg) return;
    
    const updated = { ...translations };
    (['en', 'fr', 'ar', 'es'] as const).forEach(lang => {
      const v = previewArticle[lang];
      if (updated[lang]) {
        const newPost: BlogPost = {
          id: `ai_${Date.now()}_${lang}`,
          slug: v.slug,
          title: v.title,
          excerpt: v.metaDesc,
          category: 'tips',
          image: generatedImg,
          date: new Date().toLocaleDateString(),
          author: 'Barcelona Simply Editorial',
          jsonLd: v.jsonLd,
          content: {
            intro: v.content.split('\n')[0],
            sections: [{ title: "Guía de Experto", content: v.content }],
            conclusion: "Barcelona Simply: Su tranquilidad, nuestra misión."
          }
        };
        if (!updated[lang].blog.posts) updated[lang].blog.posts = [];
        updated[lang].blog.posts = [newPost, ...updated[lang].blog.posts];
      }
    });

    updateTranslations(updated);
    alert('Publicado globalmente en todos los idiomas.');
    setPreviewArticle(null);
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Sidebar de Gestión Pro */}
      <div className="w-80 bg-navy-950 text-white flex flex-col shrink-0 shadow-2xl">
        <div className="p-10 border-b border-white/5">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-gold-500 rounded flex items-center justify-center text-navy-950 font-black">B</div>
             <h1 className="text-xl font-black tracking-tight">BS <span className="text-gold-500 uppercase">Pro</span></h1>
          </div>
          <p className="text-[9px] text-slate-500 uppercase font-black mt-2 tracking-widest">Global SEO Management</p>
        </div>
        <nav className="p-6 space-y-2 flex-grow">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all ${activeTab === 'content' ? 'bg-white/10 text-gold-500' : 'text-slate-400 hover:bg-white/5'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            Textos Estáticos
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all ${activeTab === 'seo' ? 'bg-white/10 text-gold-500' : 'text-slate-400 hover:bg-white/5'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            SEO Global
          </button>
          <button 
            onClick={() => setActiveTab('ai-writer')}
            className={`w-full text-left px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all ${activeTab === 'ai-writer' ? 'bg-gold-500 text-navy-950 shadow-xl shadow-gold-500/20' : 'text-slate-400 hover:bg-white/5'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            Escritor IA Pro
          </button>
        </nav>
        <div className="p-8 border-t border-white/5">
          <a href="/" className="text-xs font-bold text-slate-500 hover:text-white flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Cerrar Sesión
          </a>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-grow overflow-y-auto p-12 bg-slate-100">
        {activeTab === 'ai-writer' && (
          <div className="max-w-6xl mx-auto space-y-10 animate-fade-in-up">
            <div className="bg-navy-900 rounded-[3rem] p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10">
                <span className="bg-gold-500 text-navy-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Enterprise AI</span>
                <h2 className="text-5xl font-black mb-4 tracking-tighter leading-tight">Generación de Contenido <br/> con Grounding de Ubicación</h2>
                <p className="text-slate-400 max-w-2xl leading-relaxed text-xl font-light">
                  Nuestra IA ahora integra Google Maps para validar puntos de interés y mejorar el SEO local de cada artículo.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] shadow-2xl p-12 border border-slate-200 space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">¿Sobre qué quieres que escriba?</label>
                <input 
                  type="text" 
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  placeholder="Ej: Acompañamiento en Hospital Teknon para pacientes de los Emiratos"
                  className="w-full px-8 py-7 rounded-3xl border-2 border-slate-50 bg-slate-50 text-xl focus:border-gold-500 focus:bg-white outline-none transition-all shadow-inner font-medium placeholder:text-slate-300"
                />
              </div>
              
              <button 
                onClick={generateFullSEOArticle}
                disabled={isGenerating || !aiTopic}
                className="w-full bg-navy-950 text-white py-7 rounded-3xl font-black text-2xl hover:bg-gold-500 hover:text-navy-950 transition-all flex items-center justify-center gap-4 shadow-2xl disabled:opacity-50 group"
              >
                {isGenerating ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-7 w-7" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Generando Guía Global...
                  </span>
                ) : (
                  <>
                    <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z" /></svg>
                    Generar y Publicar con IA
                  </>
                )}
              </button>

              {isGenerating && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                   <div className="bg-navy-50 p-6 rounded-2xl border border-navy-100 flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full animate-ping"></div>
                      <span className="text-xs font-bold text-navy-900">{genStep}</span>
                   </div>
                </div>
              )}
            </div>

            {previewArticle && generatedImg && (
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-200 animate-fade-in-up space-y-10">
                <div className="flex justify-between items-center">
                   <div>
                     <h3 className="text-3xl font-black text-navy-900">Previsualización de Publicación</h3>
                     <p className="text-slate-500">Revisa cómo quedará el post en 4 idiomas.</p>
                   </div>
                   <button onClick={publishArticle} className="bg-green-600 text-white px-12 py-5 rounded-2xl font-black shadow-xl hover:scale-105 hover:bg-green-700 transition-all">Aprobar y Publicar Todo</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                       <img src={generatedImg} className="w-full h-full object-cover" alt="IA Generated" />
                       <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                       <div className="absolute bottom-6 left-6 right-6">
                          <span className="bg-gold-500 text-navy-900 text-[10px] font-black px-3 py-1 rounded mb-2 inline-block">PREMIUM COVER</span>
                          <h4 className="text-white font-bold text-xl">{previewArticle.es.title}</h4>
                       </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 max-h-[500px] overflow-y-auto prose prose-slate">
                    <div dangerouslySetInnerHTML={{ __html: previewArticle.es.content.replace(/\n/g, '<br/>') }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
