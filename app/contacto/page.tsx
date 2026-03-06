"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navigation />
      
      {/* SECCIÓN PRINCIPAL */}
      <section className="pt-44 pb-20 px-6 md:px-24 flex-grow">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-8 block">Disponibilidad</span>
          <h1 className="font-serif text-[12vw] md:text-[10vw] leading-[0.8] tracking-tighter text-[#1A1A1A]">
            Comienza <br /> <span className="italic opacity-40">tu cambio.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Datos Directos */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <h2 className="text-[9px] uppercase tracking-[0.4em] text-[#B59E85] font-bold">Contacto Directo</h2>
              <div className="space-y-2">
                <a href="tel:+34932000000" className="block font-serif text-4xl md:text-5xl text-[#1A1A1A] hover:text-[#B59E85] transition-colors tracking-tighter">
                  711 55 64 44
                </a>
                <a href="mailto:hola@atelierclinica.com" className="block text-[14px] uppercase tracking-widest text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors">
                  info@utilix.es
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-[9px] uppercase tracking-[0.4em] text-[#B59E85] font-bold">Experiencia Premium Exclusiva</h2>
              <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-tight max-w-xs">
                UtiLiX — Barcelona
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 leading-loose">
                Lunes — Viernes <br /> 09:00 — 20:00
              </p>
            </div>
          </div>

          {/* Formulario Limpio */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/5 pt-16 lg:pt-0 lg:pl-20">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <input type="text" placeholder="NOMBRE COMPLETO" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-6 focus:outline-none focus:border-[#B59E85] transition-all text-[11px] tracking-widest uppercase" />
                <input type="email" placeholder="CORREO ELECTRÓNICO" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-6 focus:outline-none focus:border-[#B59E85] transition-all text-[11px] tracking-widest uppercase" />
              </div>
              <textarea rows={3} placeholder="¿CÓMO PODEMOS AYUDARTE?" className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-6 focus:outline-none focus:border-[#B59E85] transition-all text-[11px] tracking-widest uppercase resize-none" />
              
              <button className="group flex items-center gap-8 py-4">
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#1A1A1A] group-hover:text-[#B59E85] transition-colors">Enviar Solicitud</span>
                <div className="w-12 h-[1px] bg-[#1A1A1A]/20 group-hover:w-20 group-hover:bg-[#B59E85] transition-all duration-700" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER ESPECÍFICO PARA CONTACTO */}
      <footer className="px-6 md:px-24 py-12 border-t border-[#1A1A1A]/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40">
            <a href="#" className="hover:text-[#B59E85] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#B59E85] transition-colors">LinkedIn</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[8px] uppercase tracking-[0.5em] text-[#1A1A1A]/20">
            <span>© 2026 UtiLiX</span>
            <Link href="/privacidad" className="hover:text-[#1A1A1A]">Privacidad</Link>
            <Link href="/legal" className="hover:text-[#1A1A1A]">Aviso Legal</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}