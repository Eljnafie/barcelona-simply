
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";

const ChatWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
        const systemInstruction = `Eres el asistente de élite de Barcelona Simply. 
        Misión: Ayudar a visitantes arabófonos con servicios médicos, administrativos y VIP en Barcelona. 
        Herramienta Crítica: Usa Google Maps para encontrar direcciones reales si el usuario pregunta por clínicas u oficinas. 
        Idioma: Responde en ${language}. 
        Tono: Extremadamente servicial, profesional y confiable.`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{ role: 'user', parts: [{ text: userMsg }] }],
          config: {
            systemInstruction,
            tools: [{ googleMaps: {} }],
          }
        });
        
        const text = response.text || "Lo siento, no puedo responder en este momento.";
        setMessages(prev => [...prev, { role: 'model', text }]);

      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'model', text: t.chat.agent_unavailable }]);
        }, 1000);
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Hubo un error. Por favor use WhatsApp para asistencia inmediata." }]);
    } finally {
      setLoading(false);
    }
  };

  const startVoiceConcierge = () => {
    setIsVoiceActive(true);
    setMessages(prev => [...prev, { role: 'model', text: "Escuchando su solicitud de voz premium..." }]);
    setTimeout(() => {
      setIsVoiceActive(false);
      setMessages(prev => [...prev, { role: 'model', text: "¿Cómo puedo asistirle hoy con sus planes en Barcelona?" }]);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-navy-950 rounded-[2.5rem] shadow-[0_30px_60px_-12px_rgba(2,6,23,0.6)] mb-4 w-80 sm:w-[420px] flex flex-col border border-white/10 overflow-hidden transition-all duration-500 animate-fade-in-up" style={{height: '650px'}}>
           {/* Header Concierge */}
           <div className="p-8 pb-4 flex justify-between items-center text-white shrink-0">
             <div className="flex items-center gap-5">
               <div className="relative">
                 <div className="w-14 h-14 bg-gradient-to-br from-white to-slate-200 text-navy-950 rounded-2xl flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                   BS
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-navy-950"></div>
               </div>
               <div>
                 <span className="font-black text-lg block tracking-tight">VIP Assistant</span>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Conectado</span>
                 </div>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-all p-2 bg-white/5 rounded-xl">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
           </div>
           
           {/* Voice Visualization / Call Banner */}
           <div className={`mx-6 mt-2 rounded-2xl p-5 transition-all duration-500 flex flex-col items-center justify-center gap-4 ${isVoiceActive ? 'bg-gold-500 h-32' : 'bg-white/5 h-20'}`}>
              {!isVoiceActive ? (
                <div className="flex items-center justify-between w-full">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Asistencia por Voz</span>
                  <button 
                    onClick={startVoiceConcierge}
                    className="bg-gold-500 text-navy-950 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    Llamada VIP
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-1 h-8">
                    {[1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} className="w-1.5 bg-navy-950 rounded-full animate-[pulse_1s_infinite]" style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                  <span className="text-navy-950 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Analizando voz...</span>
                </>
              )}
           </div>
           
           {/* Messages Area */}
           <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                 <div className={`max-w-[85%] rounded-[1.8rem] px-6 py-4 text-sm leading-relaxed ${
                   msg.role === 'user' 
                     ? 'bg-gold-500 text-navy-950 rounded-br-none font-bold shadow-lg shadow-gold-500/20' 
                     : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-none'
                 }`}>
                   {msg.text}
                 </div>
               </div>
             ))}
             {loading && (
               <div className="flex justify-start">
                 <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                   <div className="flex gap-2">
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                   </div>
                 </div>
               </div>
             )}
             <div ref={messagesEndRef} />
           </div>

           {/* Input Moderno */}
           <div className="p-8 pt-4 bg-navy-950">
             <div className="flex gap-3 bg-white/5 p-2 rounded-3xl border border-white/10 focus-within:border-gold-500 transition-all">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Escriba su consulta VIP..."
                 className="flex-1 bg-transparent border-none text-white px-5 py-3 text-sm focus:outline-none placeholder:text-slate-600 font-medium"
               />
               <button 
                 onClick={handleSend} 
                 disabled={loading || !input.trim()} 
                 className="bg-gold-500 text-navy-950 p-4 rounded-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20 shadow-xl"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
               </button>
             </div>
           </div>
        </div>
      )}

      {/* Floating Button Premium */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy-950 hover:bg-gold-500 text-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(2,6,23,0.5)] transition-all transform hover:scale-110 flex items-center justify-center group relative border-4 border-white/10 active:scale-95"
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-gold-500 text-[10px] font-black items-center justify-center text-navy-900 border-2 border-navy-950">AI</span>
          </span>
        )}
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
