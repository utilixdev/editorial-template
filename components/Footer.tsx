"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#FAF9F6] pt-32 pb-12 px-6 md:px-24 border-t border-[#1A1A1A]/5 overflow-hidden">
      
      {/* SECCIÓN SUPERIOR: TU CONTACTO PROFESIONAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-10 block font-medium">Utilix</span>
          <h2 className="font-serif text-7xl md:text-9xl text-[#1A1A1A] tracking-tighter leading-[0.8] mb-12">
            Hablemos<span className="italic opacity-40">.</span>
          </h2>
          <p className="text-[#1A1A1A]/50 max-w-sm mb-12 text-[13px] leading-[1.8] font-serif italic">
            "Diseñando el estándar visual para las clínicas que definen el futuro del bienestar y la estética."
          </p>
          <div className="space-y-4 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]">
            <p className="opacity-60">UtiLiX — Barcelona</p>
            <p className="text-[#B59E85] font-semibold hover:opacity-70 transition-opacity">
              <a href="tel:+34711556444">+34 711 556 444</a>
            </p>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col gap-10 pt-4"
        >
          <input type="text" placeholder="NOMBRE DEL CENTRO O DOCTOR" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#B59E85] text-lg uppercase font-light transition-all placeholder:text-[#1A1A1A]/20" />
          <input type="email" placeholder="EMAIL DE CONTACTO" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-4 focus:outline-none focus:border-[#B59E85] text-lg uppercase font-light transition-all placeholder:text-[#1A1A1A]/20" />
          <button className="w-fit group flex items-center gap-6 text-[9px] uppercase tracking-[0.5em] font-bold mt-4">
            <span className="border border-[#1A1A1A]/20 px-10 py-5 group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-500">Solicitar Propuesta</span>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-[#B59E85]">→</span>
          </button>
        </motion.form>
      </div>

      {/* SECCIÓN CONTACTO RÁPIDO */}
      <div className="py-12 border-y border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24">
        <div className="max-w-md">
          <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold mb-4 text-[#B59E85]">Consultoría Directa</h4>
          <p className="text-xl font-serif italic text-[#1A1A1A]/70 leading-snug">Proyectos a medida con visión de lujo y minimalismo.</p>
        </div>
        <a href="mailto:info@utilix.es" className="text-3xl md:text-5xl font-serif text-[#1A1A1A] hover:text-[#B59E85] transition-colors tracking-tighter italic">info@utilix.es</a>
      </div>

      {/* FOOTER INFERIOR: MARCA */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <div className="space-y-4">
          <span className="font-serif italic text-3xl tracking-tighter block text-[#1A1A1A]">UtiLiX.</span>
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A]/30 leading-relaxed">
            La excelencia es nuestra única métrica. <br /> Crafted for Excellence — MMXXVI
          </p>
        </div>

        <div className="flex gap-10 text-[11px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/80">
          {['Instagram', 'LinkedIn', 'Vimeo'].map((link) => (
            <a key={link} href="#" className="hover:text-[#B59E85] transition-all duration-500 underline-offset-8 hover:underline decoration-[0.5px]">
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* BLOQUE FINAL: LEGALES + FIRMA */}
      <div className="pt-12 border-t border-[#1A1A1A]/5 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-8 text-[8px] uppercase tracking-[0.5em] text-[#1A1A1A]/20">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Aviso Legal</a>
          <span className="opacity-40">/</span>
        </div>

        <p className="text-[7px] uppercase tracking-[0.8em] text-[#1A1A1A]/10 mt-2">
          Elaborado con excelencia por{" "}
          <a 
            href="https://utilix.es" 
            target="_blank" 
            className="text-[#1A1A1A]/30 hover:text-[#B59E85] transition-all duration-700 font-bold tracking-[1.2em] ml-2"
          >
            UtiLiX
          </a>
        </p>
      </div>
    </footer>
  );
}