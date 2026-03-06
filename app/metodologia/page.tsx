"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MetodologiaPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navigation />
      <section className="pt-44 px-6 md:px-24">
        <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-8 block">Capítulo III</span>
        <h1 className="font-serif text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter mb-32">El método <br /><span className="italic opacity-40">Atelier.</span></h1>
        
        <div className="relative border-l border-[#1A1A1A]/10 ml-4 md:ml-12 space-y-40 pb-40">
          {[
            { t: "La Consulta Inicial", d: "Analizamos tu estructura ósea y calidad de tejidos mediante fotografía médica de alta resolución. No buscamos el cambio, buscamos tu mejor versión." },
            { t: "Escaneo y Prototipado", d: "En odontología y medicina facial, creamos un 'mock-up' digital. Podrás ver el resultado final antes de comenzar cualquier procedimiento." },
            { t: "Intervención Mínima", d: "Preferimos múltiples sesiones sutiles que una agresiva. Nuestra filosofía se basa en la mínima invasión para una recuperación inmediata." },
            { t: "Cuidado Continuado", d: "El tratamiento no termina en la clínica. El seguimiento post-procedimiento es lo que garantiza la longevidad del resultado estético." }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-24 group"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#B59E85] border-4 border-[#FAF9F6]" />
              <h3 className="text-[11px] uppercase tracking-[0.5em] font-bold mb-6 text-[#1A1A1A]/40 group-hover:text-[#B59E85] transition-colors">Fase 0{i+1}</h3>
              <h2 className="font-serif text-3xl md:text-5xl mb-8 tracking-tighter">{step.t}</h2>
              <p className="max-w-xl text-[#1A1A1A]/60 text-[15px] leading-relaxed">{step.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}