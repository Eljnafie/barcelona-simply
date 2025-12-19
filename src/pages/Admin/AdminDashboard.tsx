
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
      
      // PASO 1: INVESTIGACIÓN Y REDACCIÓN
      setGenStep('🔍 Investigando en Google Search y redactando contenido real...');
      const writerResponse = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [{ parts: [{ text: `Escribe un artículo SEO de autoridad sobre "${aiTopic}" para Barcelona Simply. 
        REGLAS: 
        1. Usa la herramienta de búsqueda para validar leyes actuales de extranjería o servicios médicos en Barcelona.
        2. Genera versiones en: FR, AR, ES, EN.
        3. Mínimo 900 palabras.
        4. Incluye JSON-LD para Google (Schema Article).
        5. Crea un prompt artístico detallado para una imagen hero de este post.
        6. Tono: Concierge de lujo, fiable y experto.` }] }],
        config: {
          tools: [{ googleSearch: {} }],
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

      // PASO 2: GENERACIÓN DE IMAGEN ÚNICA
      setGenStep('🎨 Creando imagen fotorrealista personalizada...');
      const imgResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: `Photography, high-end travel style, Barcelona location, professional lighting: ${result.en.imagePrompt}` }] }],
        config: { imageConfig: { aspectRatio: "16:9", imageSize: "1K" } }
      });

      for (const part of imgResponse.candidates[0].content.parts) {
        if (part.inlineData) {
          setGeneratedImg(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }

      setGenStep('✅ ¡Listo! Revise y publique abajo.');
    } catch (e: any) {
      alert(`Error: ${e.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const publishArticle = () => {
    if (!previewArticle || !generatedImg) return;
    
    const updated = { ...translations };
    (['en', 'fr', 'ar', 'es'] as const).forEach(lang => {
      const v = previewArticle[lang];
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
          sections: [{ title: "Guía Premium", content: v.content }],
          conclusion: "Barcelona Simply: Su confianza es nuestra prioridad."
        }
      };
      updated[lang].blog.posts = [newPost, ...updated[lang].blog.posts];
    });

    updateTranslations(updated);
    alert('Publicado globalmente.');
    setPreviewArticle(null);
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Side Nav */}
      <div className="w-80 bg-navy-950 text-white flex flex-col shrink-0">
        <div className="p-10 border-b border-white/10">
          <h1 className="text-2xl font-black">BS <span className="text-gold-500">PRO</span></h1>
          <p className="text-[10px] text-slate-500 uppercase font-black mt-1">SEO Engine v3.0</p>
        </div>
        <nav className="p-6 space-y-2">
          {['content', 'seo', 'ai-writer'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`w-full text-left px-6 py-4 rounded-2xl font-bold capitalize transition-all ${activeTab === tab ? 'bg-gold-500 text-navy-900 shadow-xl scale-105' : 'text-slate-400 hover:bg-white/5'}`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-grow overflow-y-auto p-12">
        {activeTab === 'ai-writer' && (
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-200">
              <h2 className="text-4xl font-black text-navy-900 mb-2">Escritor SEO Inteligente</h2>
              <p className="text-slate-500 mb-10 text-lg">Investigación en tiempo real + Redacción multi-idioma + Arte IA.</p>
              
              <div className="space-y-6">
                <input 
                  type="text" 
                  value={aiTopic}
                  onChange={e => setAiTopic(e.target.value)}
                  placeholder="Ej: Requisitos de visado médico para ciudadanos de Kuwait 2025"
                  className="w-full px-8 py-6 rounded-3xl border-2 border-slate-100 text-xl focus:border-gold-500 outline-none transition-all shadow-inner"
                />
                
                <button 
                  onClick={generateFullSEOArticle}
                  disabled={isGenerating || !aiTopic}
                  className="w-full bg-navy-900 text-white py-6 rounded-3xl font-black text-2xl hover:bg-gold-500 transition-all flex items-center justify-center gap-4 shadow-2xl disabled:opacity-50"
                >
                  {isGenerating ? "Procesando..." : "Generar Contenido de Autoridad"}
                </button>
              </div>

              {isGenerating && (
                <div className="mt-8 flex items-center gap-4 p-6 bg-navy-50 rounded-2xl animate-pulse">
                  <div className="w-6 h-6 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-bold text-navy-900">{genStep}</span>
                </div>
              )}
            </div>

            {previewArticle && generatedImg && (
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-200 animate-fade-in-up space-y-10">
                <div className="flex justify-between items-end">
                   <div>
                     <span className="text-xs font-black text-gold-600 uppercase tracking-widest">Previsualización de Calidad</span>
                     <h3 className="text-3xl font-black text-navy-900 mt-2">¿Publicar ahora?</h3>
                   </div>
                   <button onClick={publishArticle} className="bg-green-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform">Sí, publicar en 4 idiomas</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <img src={generatedImg} className="w-full aspect-video object-cover rounded-3xl shadow-lg border-4 border-slate-100" alt="Generated" />
                    <p className="text-xs text-slate-400 italic">Imagen generada específicamente para: "{previewArticle.en.imagePrompt}"</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl space-y-4 max-h-[400px] overflow-y-auto">
                    <h4 className="font-black text-navy-900 text-xl">{previewArticle.es.title}</h4>
                    <div className="prose prose-sm prose-slate" dangerouslySetInnerHTML={{ __html: previewArticle.es.content.substring(0, 500) + '...' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'content' && (
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl">
            <h2 className="text-3xl font-black mb-8">Editor Manual</h2>
            <p className="text-slate-400">Seleccione idioma y edite textos estáticos.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
