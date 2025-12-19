
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";
import { BlogPost, Language } from '../../types';

// --- COMPONENTE DE LOGIN ---
const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('admin_email') || 'admin@barcelonasimply.com';
    const storedPass = localStorage.getItem('admin_pass') || 'admin123';
    if (email === storedEmail && password === storedPass) {
      localStorage.setItem('admin_is_logged', 'true');
      onLogin();
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-6 font-sans">
      <div className="bg-white/10 backdrop-blur-xl w-full max-w-md rounded-[3rem] shadow-2xl p-12 border border-white/20 animate-fade-in-up">
        <div className="text-center mb-10">
           <div className="w-20 h-20 bg-gold-500 rounded-3xl flex items-center justify-center text-navy-950 font-black text-3xl mx-auto mb-6 shadow-2xl shadow-gold-500/20">B</div>
           <h1 className="text-2xl font-black text-white tracking-tight">Admin Console</h1>
           <p className="text-slate-400 text-sm mt-2 font-medium">Acceso exclusivo Barcelona Simply</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-gold-500 outline-none transition-all placeholder:text-slate-600" placeholder="Email" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-gold-500 outline-none transition-all placeholder:text-slate-600" placeholder="••••••••" />
          {error && <p className="text-red-400 text-xs font-bold text-center bg-red-400/10 py-3 rounded-xl">{error}</p>}
          <button type="submit" className="w-full bg-gold-500 text-navy-950 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl shadow-gold-500/10">Entrar al Panel</button>
        </form>
      </div>
    </div>
  );
};

// --- PANEL PRINCIPAL ---
const AdminDashboard: React.FC = () => {
  const { translations, updateTranslations, seo, updateSEO } = useLanguage();
  const [isLogged, setIsLogged] = useState(false);
  const [view, setView] = useState<'dashboard' | 'editor' | 'leads' | 'settings'>('dashboard');
  
  // Estado del Formulario del Editor
  const [formData, setFormData] = useState({
    title: '', slug: '', lang: 'es' as Language, category: 'tips', content: '',
    imageUrl: '', imageAlt: '', keyword: '', metaTitle: '', metaDesc: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  // Estado de Configuración Global
  const [globalSEO, setGlobalSEO] = useState(seo);

  useEffect(() => {
    if (localStorage.getItem('admin_is_logged') === 'true') setIsLogged(true);
  }, []);

  // --- LÓGICA DE ANÁLISIS SEO ---
  const seoAnalysis = useMemo(() => {
    const rules = [
      { id: 'key_title', label: 'Keyword en Título', passed: formData.title.toLowerCase().includes(formData.keyword.toLowerCase()) && formData.keyword !== '' },
      { id: 'key_desc', label: 'Keyword en Descripción', passed: formData.metaDesc.toLowerCase().includes(formData.keyword.toLowerCase()) && formData.keyword !== '' },
      { id: 'length', label: '+300 Palabras', passed: formData.content.split(' ').length > 300 },
      { id: 'h2', label: 'Usa Subtítulos (H2)', passed: formData.content.includes('<h2') },
      { id: 'alt', label: 'Texto ALT Imagen', passed: formData.imageAlt.length > 5 }
    ];
    const score = Math.round((rules.filter(r => r.passed).length / rules.length) * 100);
    return { score, rules };
  }, [formData]);

  const handleLogout = () => {
    localStorage.removeItem('admin_is_logged');
    setIsLogged(false);
  };

  // --- ACCIONES DE IA (GEMINI) ---
  const generateIAContent = async () => {
    if (!formData.title) return alert('Primero escribe un título.');
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: `Escribe un artículo SEO de lujo en HTML para: ${formData.title}. Usa etiquetas <h2>, <p> y <ul>. El contenido debe ser en ${formData.lang === 'es' ? 'español' : formData.lang === 'ar' ? 'árabe' : formData.lang === 'fr' ? 'francés' : 'inglés'}. Tono: Concierge premium para clientes del Golfo.` }] }]
      });
      setFormData(prev => ({ ...prev, content: response.text || '' }));
    } catch (e) { alert('Error con Gemini API'); }
    finally { setIsGenerating(false); }
  };

  const generateIAImage = async () => {
    if (!formData.title) return alert('Escribe un título para el prompt de imagen.');
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ parts: [{ text: `Professional luxury travel photography of Barcelona, high resolution, cinematic lighting, related to: ${formData.title}` }] }],
        config: { imageConfig: { aspectRatio: "16:9", imageSize: "1K" } }
      });
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setFormData(prev => ({ ...prev, imageUrl: `data:image/png;base64,${part.inlineData.data}` }));
          break;
        }
      }
    } catch (e) { alert('Error generando imagen.'); }
    finally { setIsGenerating(false); }
  };

  const saveArticle = () => {
    const updated = { ...translations };
    const newPost: BlogPost = {
      id: `ai_${Date.now()}`,
      slug: formData.slug || formData.title.toLowerCase().replace(/ /g, '-'),
      title: formData.title,
      excerpt: formData.metaDesc,
      category: formData.category,
      image: formData.imageUrl,
      date: new Date().toLocaleDateString(formData.lang === 'ar' ? 'ar-EG' : 'es-ES'),
      author: 'Barcelona Simply Editorial',
      content: { intro: '', sections: [{ title: '', content: formData.content }], conclusion: '' }
    };
    
    // Asegurar que existe el array de posts para ese idioma
    if (!updated[formData.lang].blog.posts) updated[formData.lang].blog.posts = [];
    
    updated[formData.lang].blog.posts = [newPost, ...updated[formData.lang].blog.posts];
    updateTranslations(updated);
    alert('¡Publicado con éxito!');
    setView('dashboard');
  };

  if (!isLogged) return <AdminLogin onLogin={() => setIsLogged(true)} />;

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans">
      
      {/* SIDEBAR DE LUJO */}
      <aside className="w-80 bg-navy-950 text-white flex flex-col fixed inset-y-0 shadow-2xl z-50">
         <div className="p-10 mb-6 text-center">
            <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center text-navy-950 font-black text-2xl mx-auto mb-4 shadow-xl shadow-gold-500/20">B</div>
            <h2 className="text-xl font-black tracking-tighter">BS <span className="text-gold-500">Concierge</span></h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Management Suite</p>
         </div>
         
         <nav className="flex-1 px-6 space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { id: 'leads', label: 'Leads & Clientes', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { id: 'settings', label: 'Configuración Web', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => setView(item.id as any)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all ${view === item.id ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/10' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} /></svg>
                {item.label}
              </button>
            ))}
         </nav>
         
         <div className="p-8 border-t border-white/5">
            <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-red-400 font-bold transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
               Cerrar Sesión
            </button>
         </div>
      </aside>

      {/* ÁREA DE CONTENIDO */}
      <main className="ml-80 flex-1 p-12 overflow-x-hidden">
         
         {/* CABECERA DINÁMICA */}
         <div className="flex justify-between items-center mb-12">
            <div>
               <h1 className="text-4xl font-black text-navy-950 tracking-tight">
                  {view === 'dashboard' && 'Visión General'}
                  {view === 'leads' && 'Gestión de Leads'}
                  {view === 'editor' && 'Redactor de Contenidos'}
                  {view === 'settings' && 'Configuración de Marca'}
               </h1>
               <p className="text-slate-500 font-medium mt-1">
                  {view === 'editor' ? 'Creación de artículos optimizados para SEO.' : 'Control de operaciones en tiempo real.'}
               </p>
            </div>
            {view === 'dashboard' && (
              <button onClick={() => setView('editor')} className="bg-navy-950 text-white px-10 py-5 rounded-2xl font-black shadow-xl hover:bg-gold-500 hover:text-navy-950 transition-all">+ Nuevo Artículo</button>
            )}
            {view === 'editor' && (
              <div className="flex items-center gap-4">
                <button onClick={() => setView('dashboard')} className="text-slate-500 font-bold hover:text-navy-950 transition-colors">Descartar</button>
                <button onClick={saveArticle} className="bg-navy-950 text-white px-10 py-5 rounded-2xl font-black shadow-xl hover:bg-gold-500 hover:text-navy-950 transition-all">Publicar Artículo</button>
              </div>
            )}
         </div>

         {/* VISTA DASHBOARD */}
         {view === 'dashboard' && (
            <div className="space-y-12 animate-fade-in-up">
               {/* Stats */}
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Visitas Hoy', val: '2.4k', color: 'text-blue-600' },
                    { label: 'Leads Mes', val: '48', color: 'text-gold-600' },
                    { label: 'Artículos', val: translations.en.blog.posts.length.toString(), color: 'text-navy-900' },
                    { label: 'Estado Web', val: '● ONLINE', color: 'text-green-600' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200/60">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                       <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
                    </div>
                  ))}
               </div>

               {/* Lista de Artículos */}
               <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                  <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                     <h3 className="text-xl font-black text-navy-900">Historial de Publicaciones</h3>
                     <span className="text-xs font-bold text-slate-400 bg-white border border-slate-100 px-4 py-1.5 rounded-full">{translations.en.blog.posts.length} Posts</span>
                  </div>
                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="bg-slate-50/20">
                              <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest">Contenido</th>
                              <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Estado</th>
                              <th className="px-10 py-6 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Acciones</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                           {translations.es.blog.posts.map(p => (
                             <tr key={p.slug} className="hover:bg-slate-50 transition-colors">
                                <td className="px-10 py-8">
                                   <div className="flex items-center gap-4">
                                      <img src={p.image} className="w-16 h-12 object-cover rounded-xl shadow-sm border border-slate-100" alt="" />
                                      <div>
                                         <p className="font-black text-navy-900 leading-tight">{p.title}</p>
                                         <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">{p.category} | {p.date}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-10 py-8 text-center">
                                   <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider">Publicado</span>
                                </td>
                                <td className="px-10 py-8 text-right">
                                   <button className="text-slate-300 hover:text-red-500 transition-all p-2 rounded-lg hover:bg-red-50">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                   </button>
                                </td>
                             </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         )}

         {/* VISTA EDITOR (REDISEÑADA SEGÚN CAPTURA) */}
         {view === 'editor' && (
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in-up">
              
              {/* Columna Izquierda: Formulario Principal */}
              <div className="lg:col-span-2 space-y-8">
                 <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60 space-y-6">
                    <input 
                      type="text" 
                      placeholder="Título de la Guía (H1)..." 
                      value={formData.title} 
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      className="w-full text-4xl font-black text-navy-950 placeholder:text-slate-200 outline-none" 
                    />
                    
                    <div className="flex gap-4">
                       <select value={formData.lang} onChange={e => setFormData({...formData, lang: e.target.value as any})} className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl text-sm font-black text-slate-600 outline-none">
                          <option value="es">ES - Español</option>
                          <option value="en">EN - English</option>
                          <option value="ar">AR - العربية</option>
                          <option value="fr">FR - Français</option>
                       </select>
                       <input 
                          type="text" 
                          placeholder="url-slug-optimo" 
                          value={formData.slug} 
                          onChange={e => setFormData({...formData, slug: e.target.value})} 
                          className="flex-1 bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl text-sm font-bold text-slate-500 outline-none" 
                       />
                       <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-2xl text-sm font-black text-slate-600 outline-none">
                          <option value="tips">General</option>
                          <option value="medical">Médico</option>
                          <option value="study">Estudios</option>
                          <option value="vip">VIP</option>
                       </select>
                    </div>

                    {/* Toolbar & Editor de Texto */}
                    <div className="border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
                       <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between">
                          <div className="flex gap-2">
                             {['H2', 'H3', 'P', 'UL'].map(t => (
                               <button key={t} className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[10px] font-black text-slate-500 hover:bg-navy-950 hover:text-white transition-all">{t}</button>
                             ))}
                          </div>
                          <button 
                            onClick={generateIAContent} 
                            disabled={isGenerating}
                            className="bg-navy-950 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gold-500 hover:text-navy-950 disabled:opacity-30 transition-all"
                          >
                             <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6H22l-6.4 4.8L18 22l-6-4.8L6 22l2.4-7.6L2 9.6h7.6L12 2z"/></svg>
                             Generar con IA {isGenerating && '...'}
                          </button>
                       </div>
                       <textarea 
                          value={formData.content} 
                          onChange={e => setFormData({...formData, content: e.target.value})}
                          placeholder="Escribe el contenido HTML aquí..." 
                          className="w-full h-[600px] p-10 outline-none text-slate-700 font-mono text-base leading-relaxed resize-none"
                       ></textarea>
                    </div>
                 </div>

                 {/* Sección Multimedia */}
                 <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60">
                    <div className="flex justify-between items-center mb-8">
                       <h3 className="text-2xl font-black text-navy-950 flex items-center gap-3">
                          <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Multimedia
                       </h3>
                       <button onClick={generateIAImage} disabled={isGenerating} className="bg-navy-900 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-all">Crear con IA</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <input type="text" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} placeholder="URL de la Imagen..." className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm outline-none font-medium focus:border-navy-900" />
                          <input type="text" value={formData.imageAlt} onChange={e => setFormData({...formData, imageAlt: e.target.value})} placeholder="Texto Alternativo (ALT)..." className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl text-sm outline-none font-medium focus:border-navy-900" />
                       </div>
                       <div className="relative group rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 h-40 flex items-center justify-center">
                          {formData.imageUrl ? (
                            <img src={formData.imageUrl} className="w-full h-full object-cover" alt="Preview" />
                          ) : (
                            <span className="text-slate-400 font-bold text-sm">Vista previa de imagen</span>
                          )}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Columna Derecha: Sidebar SEO */}
              <div className="space-y-8">
                 {/* Análisis SEO Card */}
                 <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60">
                    <div className="flex items-center gap-5 mb-8">
                       <div className={`w-14 h-14 rounded-full border-4 ${seoAnalysis.score > 70 ? 'border-green-500 text-green-600' : 'border-gold-500 text-gold-600'} flex items-center justify-center font-black text-lg bg-white shadow-inner`}>
                          {seoAnalysis.score}%
                       </div>
                       <h3 className="text-xl font-black text-navy-950">Análisis SEO</h3>
                    </div>
                    <div className="space-y-5">
                       {seoAnalysis.rules.map(rule => (
                          <div key={rule.id} className="flex items-center gap-4 text-sm font-bold">
                             <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${rule.passed ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-300'}`}>
                                {rule.passed ? '✓' : '×'}
                             </div>
                             <span className={rule.passed ? 'text-slate-700' : 'text-slate-400 font-medium'}>{rule.label}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 {/* Google Search Preview */}
                 <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60">
                    <h3 className="text-xl font-black text-navy-950 mb-6 flex items-center gap-2">
                       <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                       Google Preview
                    </h3>
                    <div className="space-y-1.5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                       <p className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer line-clamp-1">{formData.metaTitle || formData.title || 'Título de búsqueda...'}</p>
                       <p className="text-[#006621] text-sm leading-none flex items-center gap-1">barcelonasimply.com › blog › <span className="text-[#6a6a6a]">{formData.slug || 'url-del-post'}</span></p>
                       <p className="text-[#545454] text-sm line-clamp-2">{formData.metaDesc || 'Escriba una descripción para ver cómo aparecerá en los resultados de Google...'}</p>
                    </div>
                 </div>

                 {/* Metadatos SEO Editor */}
                 <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60 space-y-6">
                    <h3 className="text-xl font-black text-navy-950">Configuración SEO</h3>
                    <div className="space-y-4">
                       <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Keyword Principal</label>
                          <input type="text" value={formData.keyword} onChange={e => setFormData({...formData, keyword: e.target.value})} className="w-full bg-slate-50 p-4 rounded-2xl text-sm border border-slate-100 outline-none focus:border-navy-900 font-bold" />
                       </div>
                       <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Meta Título</label>
                          <input type="text" value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} className="w-full bg-slate-50 p-4 rounded-2xl text-sm border border-slate-100 outline-none focus:border-navy-900 font-bold" />
                       </div>
                       <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-widest">Meta Descripción</label>
                          <textarea value={formData.metaDesc} onChange={e => setFormData({...formData, metaDesc: e.target.value})} rows={3} className="w-full bg-slate-50 p-4 rounded-2xl text-sm border border-slate-100 outline-none focus:border-navy-900 font-medium resize-none"></textarea>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         )}

         {/* VISTA LEADS */}
         {view === 'leads' && (
            <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-12 space-y-10 animate-fade-in-up">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-navy-950">Solicitudes de Clientes</h3>
                  <div className="flex gap-4">
                     <span className="px-6 py-2 bg-gold-50 text-gold-600 rounded-2xl text-xs font-black shadow-sm">2 Pendientes</span>
                     <span className="px-6 py-2 bg-slate-100 text-slate-500 rounded-2xl text-xs font-black">15 Completados</span>
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { name: 'Khaled Bin Faisal', country: 'Riyadh, KSA', msg: 'Interesado en tratamiento médico especializado en Hospital Teknon para agosto.', date: 'Hace 40 min', status: 'NUEVO' },
                    { name: 'Mariam Al-Maktoum', country: 'Dubai, UAE', msg: 'Solicito información para registro de estudiante universitario.', date: 'Ayer', status: 'En Proceso' }
                  ].map((lead, i) => (
                    <div key={i} className="group flex items-center justify-between p-10 rounded-[2.5rem] border border-slate-50 bg-slate-50/20 hover:bg-white hover:shadow-2xl transition-all duration-300">
                       <div className="flex items-center gap-8">
                          <div className="w-16 h-16 bg-navy-950 text-gold-500 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
                             {lead.name.charAt(0)}
                          </div>
                          <div>
                             <p className="font-black text-navy-900 text-lg flex items-center gap-3">
                                {lead.name} 
                                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">{lead.country}</span>
                             </p>
                             <p className="text-sm text-slate-500 mt-2 line-clamp-1 italic">{lead.msg}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-xs font-black text-slate-300 mb-3 uppercase tracking-widest">{lead.date}</p>
                          <span className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider ${lead.status === 'NUEVO' ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20' : 'bg-slate-200 text-slate-500'}`}>
                             {lead.status}
                          </span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         )}

         {/* VISTA CONFIGURACIÓN */}
         {view === 'settings' && (
            <div className="max-w-4xl space-y-12 animate-fade-in-up">
               <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-black text-navy-950 mb-10 border-b border-slate-50 pb-6 flex items-center gap-4">
                    <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                    Meta Tags del Sitio (Home SEO)
                  </h3>
                  <div className="space-y-8">
                     <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase ml-3 tracking-widest">Título Global del Sitio</label>
                        <input type="text" value={globalSEO.title} onChange={e => setGlobalSEO({...globalSEO, title: e.target.value})} className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-navy-950 outline-none transition-all font-bold text-navy-900" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase ml-3 tracking-widest">Descripción Global (Google Search)</label>
                        <textarea value={globalSEO.description} onChange={e => setGlobalSEO({...globalSEO, description: e.target.value})} rows={4} className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-navy-950 outline-none transition-all font-medium resize-none text-slate-700"></textarea>
                     </div>
                     <button onClick={() => { updateSEO(globalSEO); alert('Configuración SEO actualizada.'); }} className="w-full bg-navy-950 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-gold-500 hover:text-navy-950 transition-all shadow-2xl">Guardar Cambios Maestros</button>
                  </div>
               </div>

               <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100">
                  <h3 className="text-2xl font-black text-navy-950 mb-4">Seguridad y Credenciales</h3>
                  <p className="text-slate-500 text-sm mb-10 font-medium">Actualice su email de acceso y contraseña para mayor seguridad.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <input type="email" placeholder="Nuevo Email de Administrador" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-sm" />
                     <input type="password" placeholder="Nueva Contraseña Maestra" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 outline-none font-bold text-sm" />
                  </div>
                  <button className="w-full mt-8 border-4 border-navy-900 text-navy-900 font-black py-5 rounded-2xl hover:bg-navy-900 hover:text-white transition-all text-lg">Actualizar Seguridad</button>
               </div>
            </div>
         )}

      </main>
    </div>
  );
};

export default AdminDashboard;
