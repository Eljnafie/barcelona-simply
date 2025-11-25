import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";

const ChatWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: t.chat.welcome }]);
    }
  }, [isOpen, t.chat.welcome]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      if (process.env.API_KEY) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = `You are a helpful assistant for "Barcelona Simply", a service agency for Arabic-speaking visitors in Barcelona. Services: medical, admin, student, VIP. Language context: ${language}. Current supported languages are English, French, and Arabic. Keep answers short and professional. If the user asks for a human, prices, or complicated services, suggest they use the WhatsApp link or the Rendez-vous page.`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `System: ${systemInstruction}\nUser: ${userMsg}` }] }
          ]
        });
        
        const text = response.text || "I apologize, I cannot answer right now.";
        setMessages(prev => [...prev, { role: 'model', text }]);

      } else {
        // Fallback simulation for demo purposes
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'model', text: t.chat.agent_unavailable }]);
        }, 1000);
      }

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again or use WhatsApp." }]);
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
     window.open('https://wa.me/34628876339', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl mb-4 w-80 sm:w-96 flex flex-col border border-slate-100 overflow-hidden transition-all duration-200 ease-out animate-fade-in-up" style={{height: '500px'}}>
           {/* Header */}
           <div className="bg-navy-900 p-4 flex justify-between items-center text-white shrink-0">
             <div className="flex items-center">
               <div className="relative">
                 <div className="w-10 h-10 bg-white text-navy-900 rounded-full flex items-center justify-center font-bold text-sm mr-3 rtl:ml-3 rtl:mr-0 border-2 border-gold-500">
                   BS
                 </div>
                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-navy-900"></div>
               </div>
               <div>
                 <span className="font-bold text-sm block">{t.chat.title}</span>
                 <span className="text-xs text-slate-300">Online | AI Support</span>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors p-1">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
           </div>
           
           {/* WhatsApp Quick Link Bar */}
           <div className="bg-green-600 p-2 text-center">
              <button onClick={openWhatsApp} className="flex items-center justify-center w-full text-white text-xs font-bold hover:underline">
                 <svg className="w-4 h-4 mr-1 rtl:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                 {t.chat.whatsapp}
              </button>
           </div>
           
           {/* Messages */}
           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                   msg.role === 'user' 
                     ? 'bg-gold-500 text-white rounded-br-none' 
                     : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                 }`}>
                   {msg.text}
                 </div>
               </div>
             ))}
             {loading && (
               <div className="flex justify-start">
                 <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                   <div className="flex space-x-1">
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                   </div>
                 </div>
               </div>
             )}
             <div ref={messagesEndRef} />
           </div>

           {/* Input */}
           <div className="p-4 bg-white border-t border-slate-100 shrink-0">
             <div className="flex space-x-2 rtl:space-x-reverse">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder={t.chat.placeholder}
                 className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
               />
               <button 
                 onClick={handleSend} 
                 disabled={loading || !input.trim()} 
                 className="bg-navy-900 text-white p-2 rounded-full hover:bg-gold-500 transition-colors disabled:opacity-50 disabled:hover:bg-navy-900 flex items-center justify-center w-10 h-10"
               >
                 <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
               </button>
             </div>
           </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy-900 hover:bg-gold-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group relative border-2 border-white/20"
      >
         {/* Badge for attention */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;