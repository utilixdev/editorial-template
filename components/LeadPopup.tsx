"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

interface LeadPopupProps {
  forceOpen?: boolean;
  setForceOpen?: (open: boolean) => void;
}

export default function LeadPopup({ forceOpen, setForceOpen }: LeadPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
  const [formData, setFormData] = useState({ 
    clinica: "", 
    email: "", 
    tel: "", 
    web: "", 
    tipo: "Boutique (Diseño y Autor)",
    presupuesto: "2.500€ - 5.000€"
  });

  // BLOQUEO DE SCROLL REFORZADO (Líneas originales mantenidas 100%)
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => { if (forceOpen) setIsOpen(true); }, [forceOpen]);
  
  // COMENTADO PARA EVITAR QUE SALTE AUTOMÁTICAMENTE A LOS 6 SEGUNDOS
  /*
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);
  */

  const handleClose = () => {
    setIsOpen(false);
    if (setForceOpen) setForceOpen(false);
    // Resetear el estado después de cerrar para que si vuelve a abrir esté limpio
    setTimeout(() => setStatus('idle'), 500);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    setStatus('sending');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        // Cerramos automáticamente después de 4 segundos de éxito
        setTimeout(handleClose, 4000);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Error en el servidor. Por favor, contacta vía WhatsApp.");
      setStatus('idle');
    }
  };

  const handleWhatsApp = () => {
    if (!accepted || !formData.clinica || !formData.tel) {
        alert("Por favor, completa los datos y acepta la política de privacidad.");
        return;
    }
    const phone = "34711556444"; 
    
    // FORMATO MEJORADO: Sin las líneas "baratas", solo espaciado limpio
    const text = `*NUEVA SOLICITUD DE AUDITORÍA*%0A%0A` +
                 `*CLÍNICA:* ${formData.clinica.toUpperCase()}%0A` +
                 `*PERFIL:* ${formData.tipo.toUpperCase()}%0A` +
                 `*PRESUPUESTO:* ${formData.presupuesto}%0A` +
                 `*WEB/IG:* ${formData.web || "No indicada"}%0A%0A` +
                 `*CONTACTO DIRECTO*%0A` +
                 `EMAIL: ${formData.email}%0A` +
                 `WHATSAPP: ${formData.tel}%0A%0A` +
                 `_Enviado desde utilixstudio.com_`;

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const inputStyle = {
    fontSize: "16px",
    transform: "scale(0.625)",
    transformOrigin: "left center",
    width: "160%",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={handleClose} 
            className="absolute inset-0 bg-[#1A1A1A]/50 backdrop-blur-[6px] cursor-pointer" 
          />

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FAF9F6] w-full max-w-[400px] md:max-h-[95vh] p-8 md:p-10 md:py-7 rounded-2xl border border-[#B59E85]/30 shadow-[0_25px_80px_rgba(0,0,0,0.2)] overflow-y-auto"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="py-12 text-center flex flex-col items-center"
              >
                <CheckCircle2 size={50} className="text-[#B59E85] mb-4" strokeWidth={1} />
                <h2 className="font-serif text-3xl italic mb-2 text-[#1A1A1A]">Solicitud Recibida.</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 font-bold">
                  Analizaremos su caso en las próximas 24h.
                </p>
              </motion.div>
            ) : (
              <>
                <motion.button 
                  onClick={handleClose} 
                  className="absolute top-6 right-6 text-[#1A1A1A]/20 hover:text-[#B59E85] transition-colors z-20"
                  whileHover={{ rotate: 90 }}
                >
                  <X size={18} strokeWidth={1.5} />
                </motion.button>

                <div className="flex flex-col relative z-10">
                  <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.5em] mb-2 block font-bold">Cualificación de Proyecto</span>
                  <h2 className="font-serif text-3xl mb-3 tracking-tighter italic text-[#1A1A1A]">Evaluación Privada.</h2>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/60 leading-relaxed mb-6">
                    Analizamos su ecosistema digital para asegurar que su imagen proyecte el valor real de sus honorarios.
                  </p>
                  
                  <form onSubmit={handleSubmitEmail} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/30">Inversión</label>
                            <select 
                              required 
                              className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-1.5 focus:outline-none text-[10px] uppercase tracking-widest font-medium appearance-none" 
                              onChange={(e) => setFormData({...formData, presupuesto: e.target.value})}
                            >
                                <option value="2.500€ - 5.000€">2.5k — 5k</option>
                                <option value="5.000€ - 10.000€">5k — 10k</option>
                                <option value="10.000€+">+10k</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/30">Perfil</label>
                            <select 
                              className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-1.5 focus:outline-none text-[10px] uppercase tracking-widest font-medium appearance-none" 
                              onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                            >
                                <option value="Boutique (Diseño y Autor)">Boutique</option>
                                <option value="Lujo (Premium Integral)">Lujo</option>
                                <option value="Autor (Marca Personal)">Autor</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1">
                      {['clinica', 'web', 'email', 'tel'].map((field) => (
                        <div key={field} className="h-[35px] border-b border-[#1A1A1A]/10 flex items-center">
                          <input 
                            type={field === 'email' ? 'email' : field === 'tel' ? 'tel' : 'text'}
                            placeholder={field === 'clinica' ? 'NOMBRE DE LA CLÍNICA' : field === 'web' ? 'Página web (URL/IG)' : field === 'email' ? 'EMAIL' : 'TELÉFONO DE CONTACTO'}
                            required={field !== 'web'}
                            style={inputStyle}
                            className="bg-transparent focus:outline-none text-[#1A1A1A] tracking-widest uppercase placeholder:text-[#1A1A1A]/40 font-medium"
                            onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex items-start gap-3 py-2">
                        <input 
                            type="checkbox" required id="gdpr" checked={accepted} onChange={() => setAccepted(!accepted)}
                            className="mt-1 accent-[#B59E85] w-3 h-3 cursor-pointer"
                        />
                        <label htmlFor="gdpr" className="text-[8px] text-[#1A1A1A]/50 leading-tight uppercase tracking-tight">
                            Al enviar el formulario aceptas que utilicemos tus datos para preparar tu auditoría y enviarte la información relacionada con este proceso. <span className="underline cursor-pointer">Política de privacidad</span>.
                        </label>
                    </div>

                    <div className="pt-2 space-y-3">
                      <button 
                        type="submit"
                        disabled={!accepted || status === 'sending'}
                        className={`w-full py-4 border rounded-lg transition-all duration-500 text-[10px] uppercase tracking-[0.4em] font-extrabold shadow-xl flex justify-center items-center ${accepted ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#B59E85] hover:border-[#B59E85]' : 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed'}`}
                      >
                        {status === 'sending' ? <Loader2 className="animate-spin" size={16} /> : "Enviar por Email"}
                      </button>

                      <button 
                        type="button"
                        onClick={handleWhatsApp}
                        className="w-full py-4 border border-[#25D366]/30 text-[#25D366] rounded-lg text-[10px] uppercase tracking-[0.4em] font-extrabold flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all duration-300"
                      >
                        <MessageCircle size={14} fill="currentColor" /> Vía WhatsApp
                      </button>
                      
                      <p className="text-[7px] text-center mt-4 opacity-30 uppercase tracking-[0.3em] font-bold italic">
                        Admisión sujeta a disponibilidad y valoración de marca.
                      </p>
                    </div>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}