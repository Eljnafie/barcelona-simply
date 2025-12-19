
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost, Language } from '../../types';

const AdminDashboard: React.FC = () => {
  const { translations, updateTranslations, seo, updateSEO } = useLanguage();
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'ai-writer'>('content');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [aiLanguage, setAiLanguage] = useState<Language>('en');

  // Content Editing State
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

  const generateAIArticle = async () => {
    if (!aiTopic || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Write a professional, SEO-optimized blog post for "Barcelona Simply" about: "${aiTopic}". 
      Target audience: GCC travelers (Saudi Arabia, UAE, Qatar) and Arabic visitors.
      Language: ${aiLanguage}.
      Respond STRICTLY in JSON format following this structure:
      {
        "title": "Post Title",
        "excerpt": "Brief summary",
        "category": "medical | admin | study | vip | tips",
        "seoTitle": "SEO Title",
        "metaDesc": "Meta Description",
        "content": {
          "intro": "Intro text",
          "sections": [{"title": "Section Title", "content": "Text body"}],
          "conclusion": "Conclusion"
        }
      }`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      const result = JSON.parse(response.text || '{}');
      
      const newPost: BlogPost = {
        ...result,
        id: Date.now().toString(),
        slug: result.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        image: 'https://picsum.photos/800/600?random=' + Math.random(),
        date: new Date().toLocaleDateString(),
        author: 'AI Content Manager'
      };

      const updated = { ...translations };
      updated[aiLanguage].blog.posts = [newPost, ...updated[aiLanguage].blog.posts];
      updateTranslations(updated);
      alert('AI Article Generated and Published!');
      setAiTopic('');
    } catch (error) {
      console.error(error);
      alert('Error generating article. Check API Key.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-navy-950 text-white flex flex-col">
        <div className="p-6 border-b border-navy-800">
          <h1 className="text-xl font-bold">Admin<span className="text-gold-500">Panel</span></h1>
          <p className="text-xs text-slate-400 mt-1">Barcelona Simply CMS</p>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === 'content' ? 'bg-gold-500 text-white' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            Edit Content
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === 'seo' ? 'bg-gold-500 text-white' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            SEO Settings
          </button>
          <button 
            onClick={() => setActiveTab('ai-writer')}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeTab === 'ai-writer' ? 'bg-gold-500 text-white' : 'hover:bg-navy-900 text-slate-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            AI Blog Writer
          </button>
        </nav>
        <div className="p-4 border-t border-navy-800">
          <a href="/" className="text-xs text-gold-500 hover:underline">Back to Live Site</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto p-10">
        
        {activeTab === 'content' && (
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-navy-900">Site Content Editor</h2>
              <div className="flex gap-2">
                {(['en', 'fr', 'ar'] as Language[]).map(l => (
                  <button 
                    key={l}
                    onClick={() => setEditingLang(l)}
                    className={`px-4 py-1 rounded-full text-xs font-bold uppercase transition-colors ${editingLang === l ? 'bg-navy-900 text-white' : 'bg-slate-100 text-slate-400'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Hero Title ({editingLang})</label>
                <input 
                  type="text" 
                  value={translations[editingLang].hero.title}
                  onChange={(e) => {
                    const updated = {...translations};
                    updated[editingLang].hero.title = e.target.value;
                    updateTranslations(updated);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Hero Subtitle ({editingLang})</label>
                <textarea 
                  value={translations[editingLang].hero.subtitle}
                  rows={3}
                  onChange={(e) => {
                    const updated = {...translations};
                    updated[editingLang].hero.subtitle = e.target.value;
                    updateTranslations(updated);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none"
                />
              </div>
              <div className="pt-6 border-t border-slate-100">
                <button className="bg-navy-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gold-500 transition-colors">
                  Save All Changes
                </button>
                <p className="text-xs text-slate-400 mt-2">Changes are synced to live site immediately.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Global SEO Management</h2>
            <form onSubmit={handleUpdateSEO} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Meta Title</label>
                <input name="title" defaultValue={seo.title} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Meta Description</label>
                <textarea name="description" defaultValue={seo.description} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Keywords (comma separated)</label>
                <input name="keywords" defaultValue={seo.keywords} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">OG Image URL</label>
                <input name="ogImage" defaultValue={seo.ogImage} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none" />
              </div>
              <button type="submit" className="bg-navy-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gold-500 transition-colors">
                Apply SEO Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === 'ai-writer' && (
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gold-100 text-gold-600 rounded-xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">AI Article Generator</h2>
                <p className="text-sm text-slate-500">Create high-ranking SEO content using Gemini AI</p>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Topic / Keywords</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Benefits of Laser Surgery in Barcelona for Gulf Patients" 
                    value={aiTopic}
                    onChange={(e) => setAiTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Target Language</label>
                  <select 
                    value={aiLanguage}
                    onChange={(e) => setAiLanguage(e.target.value as Language)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-gold-500 outline-none"
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 border-dashed">
                <p className="text-xs text-slate-500 mb-4 uppercase font-bold tracking-widest">SEO Engine Status</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Automatic Keyword Clustering Enabled
                  </li>
                  <li className="flex items-center gap-2 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Mobile-First Structure Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    GCC Cultural Tone Adaptation
                  </li>
                </ul>
              </div>

              <button 
                onClick={generateAIArticle}
                disabled={isGenerating || !aiTopic}
                className="w-full bg-navy-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gold-500 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Gemini is writing your post...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    Generate SEO Article
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
