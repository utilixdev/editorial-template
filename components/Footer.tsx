"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    clinica: "",
    email: "",
    web: "",
    tel: "",
    tipo: "Consolidación de Autoridad",
    presupuesto: "Auditoría Previa" // Mantenemos el campo interno para compatibilidad con el API
  });

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tel) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Error en el protocolo.");
      setStatus('idle');
    }
  };

  const handleWhatsAppDirect = () => {
    if (!formData.clinica || !formData.tel) return;
    const miTelefono = "34711556444";
    const mensaje = [
      `⚜️ *SOLICITUD DE AUDITORÍA PRIORITARIA*`,
      `_______________________________`,
      `*ENTIDAD:* ${formData.clinica.toUpperCase()}`,
      `*OBJETIVO:* ${formData.tipo.toUpperCase()}`,
      `*CONTACTO:* ${formData.tel}`,
      `_______________________________`,
      `_Deseo agendar la sesión estratégica gratuita para analizar el potencial de marca de la clínica._`
    ].join('%0A');
    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, "_blank");
  };

  const inputClassName = "w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#B59E85] text-[16px] uppercase tracking-[0.1em] transition-all placeholder:text-[#1A1A1A]/20 placeholder:text-[10px]";

  return (
    <footer id="contacto" className="bg-[#FAF9F6] pt-32 pb-12 px-6 md:px-24 border-t border-[#1A1A1A]/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-10 block font-bold">UtiLiX Studio</span>
          <h2 className="font-serif text-7xl md:text-9xl text-[#1A1A1A] tracking-tighter leading-[0.8] mb-12">
            Hablemos<span className="italic opacity-40">.</span>
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-sm mb-12 text-[14px] leading-[1.8] font-serif italic border-l border-[#B59E85]/30 pl-6">
            "Definiendo el estándar visual para las clínicas que lideran el futuro del bienestar."
          </p>
          
          {/* Micro-copy de Autoridad y Confianza */}
          <div className="mt-12 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 flex items-center gap-3">
              <span className="w-1 h-1 bg-[#B59E85] rounded-full"></span>
              Fase 01: Auditoría de activos sin coste.
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 flex items-center gap-3">
              <span className="w-1 h-1 bg-[#B59E85] rounded-full"></span>
              Fase 02: Propuesta de intervención estratégica.
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 flex items-center gap-3 font-bold">
              <span className="w-1 h-1 bg-[#B59E85] rounded-full"></span>
              Sin potencial real, recibirá recomendaciones directas.
            </p>
          </div>
        </motion.div>

        <div className="relative min-h-[580px] md:min-h-[600px]">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF9F6]/50 rounded-2xl border border-[#B59E85]/10"
              >
                <CheckCircle2 size={50} className="text-[#B59E85] mb-6" strokeWidth={1} />
                <h3 className="font-serif text-3xl italic mb-4 text-[#1A1A1A]">Protocolo Iniciado.</h3>
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 text-center">Analizando perfil de autoridad...</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmitEmail}
                className="flex flex-col gap-6 w-full"
              >
                <div className="mb-6">
                  <label className="text-[9px] uppercase tracking-[0.5em] text-[#B59E85] font-black mb-6 block">Objetivo del Protocolo</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "CONSOLIDACIÓN", r: "Auditoría Estratégica" },
                      { l: "DOMINIO DE MERCADO", r: "Auditoría Prioritaria" }
                    ].map((item) => (
                      <label key={item.l} className="group cursor-pointer">
                        <input 
                          type="radio" name="budget" value={item.r} 
                          checked={formData.tipo === item.l}
                          onChange={() => setFormData({...formData, presupuesto: item.r, tipo: item.l})}
                          className="peer hidden" 
                        />
                        <div className="border border-[#1A1A1A]/10 p-5 transition-all duration-500 peer-checked:border-[#B59E85] peer-checked:bg-[#B59E85]/5 group-hover:border-[#B59E85]/30 bg-white/10">
                          <span className="text-[9px] font-bold tracking-widest text-[#B59E85] mb-2 block">{item.r}</span>
                          <span className="font-serif text-[12px] uppercase tracking-tighter opacity-70">{item.l}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <input required type="text" placeholder="NOMBRE DE LA CLÍNICA *" value={formData.clinica}
                  onChange={(e) => setFormData({...formData, clinica: e.target.value})} className={inputClassName} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required type="email" placeholder="EMAIL PROFESIONAL *" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputClassName} />
                  <input required type="tel" placeholder="TELÉFONO DIRECTO *" value={formData.tel}
                    onChange={(e) => setFormData({...formData, tel: e.target.value})} className={inputClassName} />
                </div>
                <input type="text" placeholder="URL (WEB / INSTAGRAM)" value={formData.web}
                  onChange={(e) => setFormData({...formData, web: e.target.value})} className={inputClassName} />
                
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button type="submit" disabled={status === 'sending'}
                    className="flex-[2] bg-[#1A1A1A] text-white px-8 py-6 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#B59E85] transition-all duration-700 shadow-2xl active:scale-95"
                  >
                    {status === 'sending' ? <Loader2 className="animate-spin" size={16} /> : "Solicitar Auditoría Privada"}
                  </button>
                  <button type="button" onClick={handleWhatsAppDirect}
                    className="flex-1 px-8 py-6 border border-[#1A1A1A]/20 text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-700 text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-white active:scale-95"
                  >
                    WhatsApp
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="py-16 border-y border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24">
        <div className="max-w-md">
          <h4 className="text-[9px] uppercase tracking-[0.5em] font-extrabold mb-4 text-[#B59E85]">Consultoría de Élite</h4>
          <p className="text-2xl font-serif italic text-[#1A1A1A]/80 leading-snug">Proyectos con visión de lujo, diseñados para la distinción absoluta.</p>
        </div>
        <a href="mailto:info@utilix.es" className="text-3xl md:text-6xl font-serif text-[#1A1A1A] hover:text-[#B59E85] transition-all duration-700 tracking-tighter italic">info@utilix.es</a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="space-y-6">
          <span className="font-serif italic text-4xl tracking-tighter block text-[#1A1A1A]">UtiLiX.</span>
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#1A1A1A]/40 leading-loose font-bold">
            La excelencia es nuestra única métrica. <br />
            <span className="text-[#B59E85]/60">Crafted for Excellence — MMXXVI</span>
          </p>
        </div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1A1A1A]/60">
          <a href="https://www.instagram.com/utilix.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B59E85] transition-all duration-500">Instagram</a>
          <a href="https://www.linkedin.com/in/barucnsue/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B59E85] transition-all duration-500">LinkedIn</a>
        </div>
      </div>

      <div className="pt-12 border-t border-[#1A1A1A]/5 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 text-[8px] uppercase tracking-[0.6em] text-[#1A1A1A]/30 font-bold">
          <Link href="/legal/privacidad" className="hover:text-[#B59E85] transition-colors">Privacidad</Link>
          <Link href="/legal/aviso-legal" className="hover:text-[#B59E85] transition-colors">Aviso Legal</Link>
          <Link href="/legal/cookies" className="hover:text-[#B59E85] transition-colors">Cookies</Link>
        </div>
        <p className="text-[8px] uppercase tracking-[0.4em] text-[#1A1A1A]/40 flex items-center flex-wrap justify-center gap-2">
          <span>Elaborado con excelencia por</span>
          <a href="https://utilix.es" target="_blank" className="text-[#1A1A1A] hover:text-[#B59E85] transition-all duration-700 font-extrabold tracking-[0.6em] border-b border-[#1A1A1A]/10 pb-0.5 ml-1">
            UtiLiX STUDIO
          </a>
        </p>
      </div>
    </footer>
  );
}