"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// 1. Añadimos la interfaz de Props para conectar con page.tsx
interface LeadPopupProps {
  forceOpen?: boolean;
  setForceOpen?: (open: boolean) => void;
}

export default function LeadPopup({ forceOpen, setForceOpen }: LeadPopupProps) {
  // 2. Sincronizamos el estado interno con la prop externa
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({ 
    email: "", 
    tel: "", 
    web: "", 
    tipo: "Clínica Boutique" 
  });

  // Control de apertura: Ya sea por tiempo o por orden externa
  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  useEffect(() => {
    // Auto-open a los 6 segundos (opcional, puedes quitarlo si solo quieres botones)
    const timer = setTimeout(() => setIsOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Función para cerrar que avisa a la página
  const handleClose = () => {
    setIsOpen(false);
    if (setForceOpen) setForceOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const miTelefono = "34711556444";
    
    const mensaje = 
      `⚜️ *SOLICITUD DE AUDITORÍA DE ALTA FIDELIDAD*%0A` +
      `──────────────────────────%0A%0A` +
      `*PERFIL:* ${formData.tipo}%0A` +
      `*CLIENTE:* ${formData.email}%0A` +
      `*WHATSAPP:* ${formData.tel}%0A` +
      `*WEB ACTUAL:* ${formData.web || "Sin presencia digital"}%0A%0A` +
      `_Solicito análisis de autoridad visual para mi marca médica._`;

    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, "_blank");
    handleClose();
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
          
          {/* Overlay oscuro con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-[4px] cursor-pointer"
          />

          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#FAF9F6] w-full max-w-[400px] p-8 md:p-10 rounded-2xl border border-[#B59E85]/30 shadow-[0_25px_80px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            <motion.button 
              onClick={handleClose} 
              className="absolute top-6 right-6 text-[#1A1A1A]/20 hover:text-[#B59E85] transition-colors z-20"
              whileHover={{ rotate: 180 }}
            >
              <X size={18} strokeWidth={1} />
            </motion.button>

            <div className="flex flex-col relative z-10">
              <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.5em] mb-3 block font-bold">Acceso Preferente</span>
              
              <h2 className="font-serif text-3xl mb-4 tracking-tighter italic text-[#1A1A1A]">
                Auditoría de Autoridad.
              </h2>
              
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/60 leading-relaxed mb-6">
                Identificamos las brechas de prestigio en su ecosistema digital para elevar su posicionamiento de mercado.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/30">Especialidad de la Clínica</label>
                  <select 
                    className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 focus:outline-none focus:border-[#B59E85] text-[10px] uppercase tracking-widest cursor-pointer font-medium"
                    onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                  >
                    <option value="Clínica Boutique">Medicina Estética Boutique</option>
                    <option value="Centro Integral">Centro de Alto Rendimiento</option>
                    <option value="Grupo Médico">Grupo Médico Especializado</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="h-[40px] border-b border-[#1A1A1A]/10 flex items-center">
                    <input 
                      type="email" 
                      placeholder="CORREO PROFESIONAL" 
                      required
                      style={inputStyle}
                      className="bg-transparent focus:outline-none text-[#1A1A1A] tracking-widest uppercase placeholder:text-[#1A1A1A]/40 font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="h-[40px] border-b border-[#1A1A1A]/10 flex items-center">
                    <input 
                      type="tel" 
                      placeholder="WHATSAPP PRIVADO" 
                      required
                      style={inputStyle}
                      className="bg-transparent focus:outline-none text-[#1A1A1A] tracking-widest uppercase placeholder:text-[#1A1A1A]/40 font-medium"
                      onChange={(e) => setFormData({...formData, tel: e.target.value})}
                    />
                  </div>
                  <div className="h-[40px] border-b border-[#1A1A1A]/10 flex items-center">
                    <input 
                      type="text" 
                      placeholder="URL ACTUAL (PARA ANÁLISIS)" 
                      style={inputStyle}
                      className="bg-transparent focus:outline-none text-[#1A1A1A] tracking-widest uppercase placeholder:text-[#1A1A1A]/40 font-medium"
                      onChange={(e) => setFormData({...formData, web: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="group relative w-full py-5 bg-[#B59E85] text-white border border-[#B59E85] rounded-lg overflow-hidden transition-all duration-500 hover:bg-[#1A1A1A] hover:border-[#1A1A1A] shadow-xl shadow-[#B59E85]/20"
                  >
                    <span className="relative text-[10px] uppercase tracking-[0.4em] font-extrabold transition-colors duration-500">
                      Solicitar Análisis de Autoridad
                    </span>
                  </button>
                  <p className="text-[7px] text-center mt-4 opacity-30 uppercase tracking-[0.3em] font-bold">
                    UtiLiX Studio — Barcelona 2026
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}