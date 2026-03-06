"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // 1. Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    web: ""
  });

  // 2. Función de envío directo a WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const miTelefono = "34711556444";
    const mensaje = 
      `⚜️ *SOLICITUD DESDE EL FOOTER*%0A` +
      `──────────────────────────%0A%0A` +
      `*DOCTOR/CENTRO:* ${formData.nombre}%0A` +
      `*EMAIL:* ${formData.email}%0A` +
      `*WEB:* ${formData.web || "No proporcionada"}%0A%0A` +
      `_Deseo iniciar el análisis de autoridad visual._`;

    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, "_blank");
  };

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
            "Definiendo el estándar visual para las clínicas que lideran el futuro del bienestar y la estética de vanguardia."
          </p>
          <div className="space-y-4 text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] font-bold">
            <p className="opacity-40 font-medium">Barcelona — Worldwide</p>
            <p className="text-[#B59E85] hover:text-[#1A1A1A] transition-colors duration-500">
              <a href="tel:+34711556444">+34 711 556 444</a>
            </p>
          </div>
        </motion.div>

        {/* FORMULARIO CONECTADO A WHATSAPP */}
        <motion.form 
          onSubmit={handleWhatsAppSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col gap-10 pt-4"
        >
          <div className="space-y-2">
            <label className="text-[8px] uppercase tracking-[0.4em] text-[#B59E85] font-bold">Identidad</label>
            <input 
              required 
              type="text" 
              placeholder="NOMBRE DEL DOCTOR O CENTRO" 
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#B59E85] text-[16px] md:text-base uppercase tracking-[0.2em] font-medium transition-all placeholder:text-[#1A1A1A]/20 placeholder:text-[10px]" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[8px] uppercase tracking-[0.4em] text-[#B59E85] font-bold">Contacto</label>
            <input 
              required 
              type="email" 
              placeholder="EMAIL PROFESIONAL" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#B59E85] text-[16px] md:text-base uppercase tracking-[0.2em] font-medium transition-all placeholder:text-[#1A1A1A]/20 placeholder:text-[10px]" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] uppercase tracking-[0.4em] text-[#B59E85] font-bold">Presencia Digital</label>
            <input 
              required 
              type="text" 
              placeholder="URL ACTUAL (WEB O INSTAGRAM)" 
              value={formData.web}
              onChange={(e) => setFormData({...formData, web: e.target.value})}
              className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#B59E85] text-[16px] md:text-base uppercase tracking-[0.2em] font-medium transition-all placeholder:text-[#1A1A1A]/20 placeholder:text-[10px]" 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full md:w-fit group flex items-center justify-center md:justify-start gap-6 text-[9px] uppercase tracking-[0.5em] font-extrabold mt-6 touch-manipulation relative z-10"
          >
            <span className="bg-[#1A1A1A] text-white px-12 py-6 group-hover:bg-[#B59E85] transition-all duration-700 shadow-xl group-hover:shadow-[#B59E85]/20 block">
              Solicitar Auditoría de Marca
            </span>
          </button>
        </motion.form>
      </div>

      {/* SECCIÓN CONTACTO RÁPIDO */}
      <div className="py-16 border-y border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24">
        <div className="max-w-md">
          <h4 className="text-[9px] uppercase tracking-[0.5em] font-extrabold mb-4 text-[#B59E85]">Consultoría de Élite</h4>
          <p className="text-2xl font-serif italic text-[#1A1A1A]/80 leading-snug">Proyectos con visión de lujo, diseñados para la distinción absoluta.</p>
        </div>
        <a href="mailto:info@utilix.es" className="text-3xl md:text-6xl font-serif text-[#1A1A1A] hover:text-[#B59E85] transition-all duration-700 tracking-tighter italic">info@utilix.es</a>
      </div>

      {/* FOOTER INFERIOR */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="space-y-6">
          <span className="font-serif italic text-4xl tracking-tighter block text-[#1A1A1A]">UtiLiX.</span>
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#1A1A1A]/40 leading-loose font-bold">
            La excelencia es nuestra única métrica. <br /> 
            <span className="text-[#B59E85]/60">Crafted for Excellence — MMXXVI</span>
          </p>
        </div>

        <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1A1A1A]/60">
          {['Instagram', 'LinkedIn', 'Behance'].map((link) => (
            <a key={link} href="#" className="hover:text-[#B59E85] transition-all duration-500 underline-offset-8 hover:underline decoration-[1px]">
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="pt-12 border-t border-[#1A1A1A]/5 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-8 text-[8px] uppercase tracking-[0.6em] text-[#1A1A1A]/30 font-bold">
          <a href="#" className="hover:text-[#B59E85] transition-colors">Privacidad</a>
          <a href="#" className="hover:text-[#B59E85] transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-[#B59E85] transition-colors">Cookies</a>
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