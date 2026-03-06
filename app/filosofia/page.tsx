"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function FilosofiaPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navigation />
      <section className="pt-44 px-6 md:px-24 pb-40 text-center">
        <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-12 block text-center">Capítulo IV</span>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif text-[7vw] md:text-[5vw] leading-tight italic max-w-4xl mx-auto mb-32"
        >
          "Entendemos la estética como una forma de <span className="not-italic opacity-40">salud mental y emocional.</span>"
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          {[
            { t: "Pureza", d: "Eliminamos el artificio. Cada intervención debe ser indetectable al ojo ajeno." },
            { t: "Ética", d: "Decimos que no a tratamientos innecesarios que rompen la armonía natural." },
            { t: "Tiempo", d: "El lujo es el tiempo. Dedicamos el doble de horas por paciente que la media del sector." }
          ].map((v, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-[#1A1A1A]/10 pb-4">{v.t}</h3>
              <p className="text-[#1A1A1A]/50 text-[14px] leading-relaxed italic font-serif">"{v.d}"</p>
            </div>
          ))}
        </div>
        
        {/* Espacio para un retrato del doctor o imagen abstracta */}
        <div className="mt-40 w-full h-[60vh] bg-stone-200 overflow-hidden grayscale">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000" 
              className="w-full h-full object-cover opacity-80" 
              alt="Filosofía" 
            />
        </div>
      </section>
      <Footer />
    </main>
  );
}