
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AppointmentWizard: React.FC = () => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (serviceKey: string) => {
    setFormData({ ...formData, service: serviceKey });
    handleNext();
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, time });
  };

  const handleSubmit = () => {
    // 1. Format the message for WhatsApp
    const intro = language === 'ar' ? "طلب حجز جديد 📅" : "New Appointment Request 📅";
    
    const msg = `*${intro}*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🛠 *Service:* ${formData.service}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `⏰ *Time:* ${formData.time}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📝 *Note:* ${formData.message}`;

    // 2. Create the WhatsApp Link
    const whatsappUrl = `https://wa.me/34628876339?text=${encodeURIComponent(msg)}`;
    
    // 3. Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // 4. Show success screen on the website
    setSubmitted(true);
  };

  const services = [
    { key: 'medical', icon: '🏥' },
    { key: 'admin', icon: '📝' },
    { key: 'study', icon: '🎓' },
    { key: 'vip', icon: '✨' },
    { key: 'trans', icon: '🗣️' },
  ];

  const timeSlots = [
    "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"
  ];

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-4">{t.appointmentWizard.success.title}</h3>
        <p className="text-slate-600 mb-8">{t.appointmentWizard.success.message}</p>
        <button onClick={() => window.location.href = '/'} className="bg-navy-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gold-500 transition-colors">
          {t.appointmentWizard.buttons.finish}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-navy-50 px-8 py-6 border-b border-slate-100">
        <div className="flex items-center justify-between relative">
           <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 -z-0"></div>
           <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-gold-500 -z-0 transition-all duration-300 ${
             step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'
           }`}></div>
           
           {[1, 2, 3].map((s) => (
             <div key={s} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
               step >= s ? 'bg-gold-500 text-white' : 'bg-slate-200 text-slate-500'
             }`}>
               {s}
             </div>
           ))}
        </div>
        <div className="flex justify-between mt-2 text-xs font-semibold text-slate-500">
           <span>{t.appointmentWizard.steps.service}</span>
           <span>{t.appointmentWizard.steps.datetime}</span>
           <span>{t.appointmentWizard.steps.details}</span>
        </div>
      </div>

      <div className="p-8">
        {/* Step 1: Services */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">{t.appointmentWizard.labels.selectService}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((svc) => (
                <button
                  key={svc.key}
                  // @ts-ignore
                  onClick={() => handleServiceSelect(t.services.items[svc.key].title)}
                  className={`p-4 rounded-xl border-2 text-center hover:border-gold-500 hover:bg-gold-50 transition-all ${
                    // @ts-ignore
                    formData.service === t.services.items[svc.key].title ? 'border-gold-500 bg-gold-50' : 'border-slate-100 bg-white'
                  }`}
                >
                  <div className="text-3xl mb-2">{svc.icon}</div>
                  {/* @ts-ignore */}
                  <div className="text-sm font-bold text-navy-900">{t.services.items[svc.key].title}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">{t.appointmentWizard.labels.selectDate}</h3>
            <div className="max-w-md mx-auto space-y-6">
              <div>
                 <input 
                   type="date" 
                   name="date"
                   value={formData.date}
                   onChange={handleChange}
                   className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 outline-none"
                 />
              </div>
              <div>
                 <p className="text-sm font-semibold text-slate-700 mb-3">{t.appointmentWizard.labels.selectTime}</p>
                 <div className="grid grid-cols-2 gap-3">
                   {timeSlots.map(time => (
                     <button
                       key={time}
                       onClick={() => handleTimeSelect(time)}
                       className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                         formData.time === time 
                           ? 'bg-navy-900 text-white' 
                           : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                       }`}
                     >
                       {time}
                     </button>
                   ))}
                 </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
               <button onClick={handleBack} className="text-slate-500 hover:text-navy-900 font-medium px-4 py-2">
                 {t.appointmentWizard.buttons.back}
               </button>
               <button 
                 onClick={handleNext} 
                 disabled={!formData.date || !formData.time}
                 className="bg-gold-500 text-white font-bold py-2 px-6 rounded-full hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {t.appointmentWizard.buttons.next}
               </button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">{t.appointmentWizard.labels.name}</h3>
            <div className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input 
                   type="text" 
                   name="name" 
                   placeholder={t.appointmentWizard.labels.name}
                   value={formData.name}
                   onChange={handleChange}
                   className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 outline-none"
                 />
                 <input 
                   type="email" 
                   name="email" 
                   placeholder={t.appointmentWizard.labels.email}
                   value={formData.email}
                   onChange={handleChange}
                   className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 outline-none"
                 />
               </div>
               <input 
                 type="tel" 
                 name="phone" 
                 placeholder={t.appointmentWizard.labels.phone}
                 value={formData.phone}
                 onChange={handleChange}
                 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 outline-none"
               />
               <textarea 
                 name="message" 
                 placeholder={t.appointmentWizard.labels.message}
                 rows={3}
                 value={formData.message}
                 onChange={handleChange}
                 className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gold-500 outline-none"
               ></textarea>
               
               <div className="bg-slate-50 p-4 rounded-lg mt-4 text-sm text-slate-600">
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>When:</strong> {formData.date} at {formData.time}</p>
               </div>
            </div>
            <div className="mt-8 flex justify-between">
               <button onClick={handleBack} className="text-slate-500 hover:text-navy-900 font-medium px-4 py-2">
                 {t.appointmentWizard.buttons.back}
               </button>
               <button 
                 onClick={handleSubmit} 
                 disabled={!formData.name || !formData.email || !formData.phone}
                 className="bg-navy-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gold-500 transition-colors disabled:opacity-50"
               >
                 {t.appointmentWizard.buttons.confirm}
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentWizard;
