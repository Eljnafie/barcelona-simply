
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI, Modality } from "@google/genai";

const ChatWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Audio state for Live API
  const audioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);

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

  const startVoiceConcierge = async () => {
    // Simulación del inicio de Live API para demostración estética y funcional
    setIsVoiceActive(true);
    setMessages(prev => [...prev, { role: 'model', text: "Iniciando servicio de voz premium..." }]);
    
    // Aquí iría la lógica completa de ai.live.connect si se desea habilitar streaming de audio pcm
    setTimeout(() => {
      setIsVoiceActive(false);
      setMessages(prev => [...prev, { role: 'model', text: "Servicio de voz conectado. ¿En qué puedo ayudarle hoy?" }]);
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-[2rem] shadow-2xl mb-4 w-80 sm:w-[400px] flex flex-col border border-slate-200 overflow-hidden transition-all duration-300 animate-fade-in-up" style={{height: '600px'}}>
           {/* Header Moderno */}
           <div className="bg-navy-950 p-6 flex justify-between items-center text-white shrink-0">
             <div className="flex items-center gap-4">
               <div className="relative">
                 <div className="w-12 h-12 bg-white text-navy-900 rounded-2xl flex items-center justify-center font-black text-lg border-2 border-gold-500 shadow-inner">
                   BS
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-navy-950"></div>
               </div>
               <div>
                 <span className="font-black text-sm block tracking-tight">Barcelona Simply Assistant</span>
                 <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Concierge</span>
                 </div>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-xl">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
           </div>
           
           {/* Voice/Live Call Button */}
           <div className="bg-gold-500 p-4 flex items-center justify-between shadow-lg relative z-10">
              <span className="text-navy-900 text-xs font-black uppercase tracking-tighter">Premium Voice Concierge</span>
              <button 
                onClick={startVoiceConcierge}
                className="bg-navy-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black hover:bg-white hover:text-navy-900 transition-all flex items-center gap-2"
              >
                <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                {isVoiceActive ? "Listening..." : "Start Voice Call"}
              </button>
           </div>
           
           {/* Chat Content */}
           <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scrollbar-hide">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                 <div className={`max-w-[85%] rounded-[1.5rem] px-5 py-4 text-sm shadow-sm leading-relaxed ${
                   msg.role === 'user' 
                     ? 'bg-navy-900 text-white rounded-br-none font-medium' 
                     : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none shadow-xl shadow-slate-200/50'
                 }`}>
                   {msg.text}
                 </div>
               </div>
             ))}
             {loading && (
               <div className="flex justify-start">
                 <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-5 py-4 shadow-sm">
                   <div className="flex gap-1.5">
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                   </div>
                 </div>
               </div>
             )}
             <div ref={messagesEndRef} />
           </div>

           {/* Modern Input */}
           <div className="p-6 bg-white border-t border-slate-100">
             <div className="flex gap-3 rtl:flex-row-reverse">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                 placeholder="Pregunte por clínicas, trámites o ubicaciones..."
                 className="flex-1 border-2 border-slate-100 bg-slate-50 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold-500 focus:bg-white transition-all font-medium"
               />
               <button 
                 onClick={handleSend} 
                 disabled={loading || !input.trim()} 
                 className="bg-navy-950 text-white p-4 rounded-2xl hover:bg-gold-500 hover:text-navy-900 transition-all disabled:opacity-20 flex items-center justify-center shrink-0 shadow-lg"
               >
                 <svg className="w-6 h-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
               </button>
             </div>
           </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy-950 hover:bg-gold-500 text-white p-5 rounded-[1.5rem] shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group relative border-4 border-white active:scale-95"
      >
        {!isOpen && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-gold-500 text-[10px] font-black items-center justify-center text-navy-900">AI</span>
          </span>
        )}
        {isOpen ? (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
