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
        const systemInstruction = `Eres el asistente VIP de Barcelona Simply. 
        Misión: Proporcionar información de lujo sobre servicios médicos, administrativos y estudiantiles en Barcelona. 
        Herramienta Crítica: Eres servicial y profesional. 
        Idioma: Responde siempre en ${language}. 
        Tono: De élite, respetuoso y sumamente eficiente.`;
        
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{ role: 'user', parts: [{ text: userMsg }] }],
          config: {
            systemInstruction,
          }
        });
        
        const text = response.text || "Lo siento, mi conexión ha fallado. Por favor, contacte vía WhatsApp.";
        setMessages(prev => [...prev, { role: 'model', text }]);

      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'model', text: t.chat.agent_unavailable }]);
        }, 1000);
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error de comunicación VIP. Use el botón de WhatsApp para asistencia directa." }]);
    } finally {
      setLoading(false);
    }
  };

  const startVoiceMode = () => {
    setIsVoiceActive(true);
    // Simulación de interacción de voz elegante
    setTimeout(() => {
      setIsVoiceActive(false);
      setMessages(prev => [...prev, { role: 'model', text: "Entendido. Procesando su solicitud de voz. ¿Desea que agende una llamada de vuelta?" }]);
    }, 4000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="glass-premium rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(2,6,23,0.7)] mb-6 w-80 sm:w-[420px] flex flex-col overflow-hidden transition-all duration-500 animate-fade-in-up" style={{height: '680px'}}>
           {/* Header Concierge */}
           <div className="p-8 pb-4 flex justify-between items-center text-white shrink-0 border-b border-white/5">
             <div className="flex items-center gap-5">
               <div className="relative">
                 <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 rounded-2xl flex items-center justify-center font-black text-xl shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                   BS
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-navy-950"></div>
               </div>
               <div>
                 <span className="font-black text-lg block tracking-tight">AI Concierge</span>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Priority Service</span>
                 </div>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-all p-3 bg-white/5 rounded-2xl">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
           </div>
           
           {/* Voice Interface Sim */}
           <div className={`mx-6 mt-4 rounded-[2rem] p-6 transition-all duration-500 flex flex-col items-center justify-center gap-4 ${isVoiceActive ? 'bg-gold-500 h-40' : 'bg-white/5 h-24'}`}>
              {!isVoiceActive ? (
                <div className="flex items-center justify-between w-full">
                  <div className="space-y-1">
                    <p className="text-white text-xs font-black uppercase tracking-widest">Asistencia de Voz</p>
                    <p className="text-slate-400 text-[10px] font-medium">Respuesta instantánea vía IA</p>
                  </div>
                  <button 
                    onClick={startVoiceMode}
                    className="bg-gold-500 text-navy-950 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 shadow-xl"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    Llamada VIP
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-end gap-1.5 h-12">
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <div 
                        key={i} 
                        className="w-2 bg-navy-950 rounded-full animate-wave" 
                        style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-navy-950 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Escuchando su solicitud...</span>
                </>
              )}
           </div>
           
           {/* Messages Area */}
           <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                 <div className={`max-w-[85%] rounded-[2rem] px-6 py-5 text-sm leading-relaxed shadow-xl ${
                   msg.role === 'user' 
                     ? 'bg-gold-500 text-navy-950 rounded-br-none font-bold' 
                     : 'bg-white/10 border border-white/10 text-slate-100 rounded-bl-none'
                 }`}>
                   {msg.text}
                 </div>
               </div>
             ))}
             {loading && (
               <div className="flex justify-start">
                 <div className="bg-white/5 border border-white/10 rounded-3xl px-8 py-5">
                   <div className="flex gap-2">
                     <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                   </div>
                 </div>
               </div>
             )}
             <div ref={messagesEndRef} />
           </div>

           {/* Input Moderno */}
           <div className="p-8 pt-4 bg-transparent shrink-0">
             <div className="flex gap-3 bg-white/5 p-3 rounded-[2rem] border border-white/10 focus-within:border-gold-500 focus-within:bg-white/10 transition-all shadow-inner">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Escriba aquí su consulta VIP..."
                 className="flex-1 bg-transparent border-none text-white px-5 py-3 text-sm focus:outline-none placeholder:text-slate-600 font-medium"
               />
               <button 
                 onClick={handleSend} 
                 disabled={loading || !input.trim()} 
                 className="bg-gold-500 text-navy-950 p-4 rounded-2xl hover:bg-white transition-all disabled:opacity-20 shadow-xl transform active:scale-90"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
               </button>
             </div>
           </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy-950 hover:bg-gold-500 text-white p-7 rounded-[2.5rem] shadow-[0_25px_60px_rgba(2,6,23,0.6)] transition-all transform hover:scale-110 flex items-center justify-center group relative border-4 border-white/10 active:scale-95"
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-7 w-7">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-7 w-7 bg-gold-500 text-[10px] font-black items-center justify-center text-navy-900 border-2 border-navy-950 shadow-lg">VIP</span>
          </span>
        )}
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-9 h-9 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;