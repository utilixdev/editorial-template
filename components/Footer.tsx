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
    tipo: "Liderazgo y Autoridad",
    presupuesto: "Auditoría de Mercado" 
  });

  const trackGoogleConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-942717987',
        'value': 1.0,
        'currency': 'EUR'
      });
    }
  };

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
        trackGoogleConversion(); 
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Error en el protocolo de envío.");
      setStatus('idle');
    }
  };

  const handleWhatsAppDirect = () => {
    if (!formData.clinica || !formData.tel) return;
    
    trackGoogleConversion(); 

    const miTelefono = "34711556444";
    const mensaje = [
      `⚜️ *SOLICITUD DE ACCESO PRIORITARIO*`,
      `_______________________________`,
      `*CLÍNICA:* ${formData.clinica.toUpperCase()}`,
      `*OBJETIVO:* ${formData.tipo.toUpperCase()}`,
      `*TELÉFONO:* ${formData.tel}`,
      `_______________________________`,
      `_Solicito sesión de diagnóstico estratégico para evaluar el potencial de autoridad de la marca._`
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
          <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-10 block font-bold">UtiLiX Studio Spain</span>
          <h2 className="font-serif text-7xl md:text-9xl text-[#1A1A1A] tracking-tighter leading-[0.8] mb-12">
            Inicie el<br /><span className="italic opacity-40">Cambio.</span>
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-sm mb-12 text-[14px] leading-[1.8] font-serif italic border-l border-[#B59E85]/30 pl-6">
            "Consolidamos el dominio digital de las clínicas que definen el nuevo estándar de la medicina privada."
          </p>
          
          <div className="mt-12 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 flex items-center gap-3">
              <span className="w-1 h-1 bg-[#B59E85] rounded-full"></span>
              Fase 01: Análisis de Activos y Autoridad.
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 flex items-center gap-3">
              <span className="w-1 h-1 bg-[#B59E85] rounded-full"></span>
              Fase 02: Hoja de Ruta de Ingeniería Visual.
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 flex items-center gap-3 font-bold">
              <span className="w-1 h-1 bg-[#B59E85] rounded-full"></span>
              Solo aceptamos proyectos con visión de liderazgo.
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
                <h3 className="font-serif text-3xl italic mb-4 text-[#1A1A1A]">Protocolo Activado.</h3>
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 text-center">Iniciando análisis de mercado nacional...</p>
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
                  <label className="text-[9px] uppercase tracking-[0.5em] text-[#B59E85] font-black mb-6 block">Nivel de Intervención</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "AUTORIDAD", r: "Diagnóstico de Marca" },
                      { l: "DOMINIO NACIONAL", r: "Estrategia de Captación" }
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
                <input required type="text" placeholder="NOMBRE DE LA CLÍNICA / DOCTOR *" value={formData.clinica}
                  onChange={(e) => setFormData({...formData, clinica: e.target.value})} className={inputClassName} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required type="email" placeholder="CORREO CORPORATIVO *" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} className={inputClassName} />
                  <input required type="tel" placeholder="TELÉFONO DE CONTACTO *" value={formData.tel}
                    onChange={(e) => setFormData({...formData, tel: e.target.value})} className={inputClassName} />
                </div>
                <input type="text" placeholder="URL ACTUAL (SI APLICA)" value={formData.web}
                  onChange={(e) => setFormData({...formData, web: e.target.value})} className={inputClassName} />
                
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button type="submit" disabled={status === 'sending'}
                    className="flex-[2] bg-[#1A1A1A] text-white px-8 py-6 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#B59E85] transition-all duration-700 shadow-2xl active:scale-95"
                  >
                    {status === 'sending' ? <Loader2 className="animate-spin" size={16} /> : "Agendar Auditoría Estratégica"}
                  </button>
                  <button type="button" onClick={handleWhatsAppDirect}
                    className="flex-1 px-8 py-6 border border-[#1A1A1A]/20 text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-700 text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-white active:scale-95"
                  >
                    Urgente
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="py-16 border-y border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24">
        <div className="max-w-md">
          <h4 className="text-[9px] uppercase tracking-[0.5em] font-extrabold mb-4 text-[#B59E85]">Consultoría de Liderazgo</h4>
          <p className="text-2xl font-serif italic text-[#1A1A1A]/80 leading-snug">Ingeniería digital diseñada para las clínicas que lideran el mercado nacional.</p>
        </div>
        <a href="mailto:info@utilix.es" className="text-3xl md:text-6xl font-serif text-[#1A1A1A] hover:text-[#B59E85] transition-all duration-700 tracking-tighter italic">info@utilix.es</a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="space-y-6">
          <span className="font-serif italic text-4xl tracking-tighter block text-[#1A1A1A]">UtiLiX.</span>
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#1A1A1A]/40 leading-loose font-bold">
            Ingeniería de Autoridad para el Sector Médico. <br />
            <span className="text-[#B59E85]/60">Developing National Leaders — MMXXVI</span>
          </p>
        </div>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1A1A1A]/60">
          <a href="https://www.instagram.com/utilix.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B59E85] transition-all duration-500">Instagram</a>
          <a href="https://www.linkedin.com/in/barucnsue/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B59E85] transition-all duration-500">LinkedIn</a>
        </div>
      </div>

     {/* BLOQUE DE AUTORIDAD GEOGRÁFICA AJUSTADO: Enfoque en Negocio y Resultados */}
<div className="py-12 border-t border-[#1A1A1A]/5 text-center px-4">
  <div className="max-w-6xl mx-auto">
    <span className="text-[8px] uppercase tracking-[0.6em] text-[#B59E85] mb-6 block font-black opacity-60">Proyección y Alcance Nacional</span>
    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 leading-[2.5] font-medium max-w-4xl mx-auto">
      Especialistas en Estrategia Digital y Diseño Web para Clínicas con operativa en: 
      <span className="text-[#1A1A1A]/70"> Madrid</span> · 
      <span className="text-[#1A1A1A]/70"> Barcelona</span> · 
      <span className="text-[#1A1A1A]/70"> Valencia</span> · 
      <span className="text-[#1A1A1A]/70"> Marbella</span> · 
      <span className="text-[#1A1A1A]/70"> Sevilla</span> · 
      <span className="text-[#1A1A1A]/70"> Bilbao</span> · 
      <span className="text-[#1A1A1A]/70"> Málaga</span> · 
      <span className="text-[#1A1A1A]/70"> Zaragoza</span> · 
      <span className="text-[#1A1A1A]/70"> San Sebastián</span> · 
      <span className="text-[#1A1A1A]/70"> Murcia</span> · 
      <span className="text-[#1A1A1A]/70"> Alicante</span> · 
      <span className="text-[#1A1A1A]/70"> Palma de Mallorca</span> · 
      <span className="text-[#1A1A1A]/70"> Valladolid</span> · 
      <span className="text-[#1A1A1A]/70"> A Coruña</span> · 
      <span className="text-[#1A1A1A]/70"> Las Palmas</span>.
    </p>
  </div>
</div>

      <div className="pt-12 border-t border-[#1A1A1A]/5 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 text-[8px] uppercase tracking-[0.6em] text-[#1A1A1A]/30 font-bold">
          <Link href="/legal/privacidad" className="hover:text-[#B59E85] transition-colors">Privacidad</Link>
          <Link href="/legal/aviso-legal" className="hover:text-[#B59E85] transition-colors">Aviso Legal</Link>
          <Link href="/legal/cookies" className="hover:text-[#B59E85] transition-colors">Cookies</Link>
        </div>
        <p className="text-[8px] uppercase tracking-[0.4em] text-[#1A1A1A]/40 flex items-center flex-wrap justify-center gap-2">
          <span>Activo Digital Desarrollado por</span>
          <a href="https://utilix.es" target="_blank" className="text-[#1A1A1A] hover:text-[#B59E85] transition-all duration-700 font-extrabold tracking-[0.6em] border-b border-[#1A1A1A]/10 pb-0.5 ml-1">
            UtiLiX STUDIO
          </a>
        </p>
      </div>
    </footer>
  );
}