import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t.blog.categories.all },
    { id: 'medical', label: t.blog.categories.medical },
    { id: 'admin', label: t.blog.categories.admin },
    { id: 'study', label: t.blog.categories.study },
    { id: 'vip', label: t.blog.categories.vip },
  ];

  const filteredPosts = activeCategory === 'all' 
    ? t.blog.posts 
    : t.blog.posts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">{t.blog.title}</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">{t.blog.subtitle}</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id 
                  ? 'bg-gold-500 text-white shadow-md' 
                  : 'bg-white text-navy-900 border border-slate-200 hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                   />
                   <div className="absolute top-4 left-4 bg-navy-900/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                     {post.category}
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <div className="text-xs text-gold-500 font-bold mb-2 uppercase tracking-wide">{post.date}</div>
                   <h3 className="text-xl font-bold text-navy-900 mb-3 leading-tight hover:text-gold-600 transition-colors">{post.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                   <span className="text-navy-900 font-bold text-sm inline-flex items-center mt-auto group">
                      {t.blog.readMore}
                      <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                   </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
             <p className="text-lg">No articles found in this category yet.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;