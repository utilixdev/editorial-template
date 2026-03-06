"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ClinicaPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* HERO DE PÀGINA INTERNA */}
      <section className="pt-44 pb-20 px-6 md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl"
        >
          <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-8 block">Capítulo I</span>
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter text-[#1A1A1A] mb-16">
            El espacio donde el <br /> <span className="italic opacity-40">tiempo se detiene.</span>
          </h1>
        </motion.div>

        {/* Imatge Hero Asimètrica */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80"
              className="w-full aspect-[4/5] md:aspect-[16/10] object-cover grayscale"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-end pb-12">
            <p className="text-[#1A1A1A]/60 text-[14px] md:text-[16px] leading-[2] font-serif italic max-w-sm">
              "Fundamos Atelier con una premisa clara: la medicina no debe ser fría, debe ser una extensión del arte de vivir bien."
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓ STORYTELLING: EL MANIFEST */}
      <section className="py-32 md:py-60 px-6 md:px-24 border-t border-[#1A1A1A]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="sticky top-44 h-fit">
            <h2 className="text-[9px] uppercase tracking-[0.6em] text-[#B59E85] mb-6">Nuestro ADN</h2>
            <p className="font-serif text-3xl md:text-5xl tracking-tighter leading-tight text-[#1A1A1A]">
              Ciencia rigurosa en un entorno de calma absoluta.
            </p>
          </div>
          
          <div className="space-y-20 md:space-y-40">
            <div className="max-w-md">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">La Arquitectura del Bienestar</h3>
              <p className="text-[#1A1A1A]/50 text-[15px] leading-[1.8]">
                Cada rincón de nuestra clínica ha sido diseñado bajo los principios del minimalismo orgánico. Creemos que un entorno libre de ruido visual predispone al cuerpo a una mejor recuperación y una respuesta estética más armónica.
              </p>
            </div>
            
            <div className="max-w-md ml-auto">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Tecnología Invisible</h3>
              <p className="text-[#1A1A1A]/50 text-[15px] leading-[1.8]">
                Utilizamos la última tecnología de diagnóstico digital, pero la integramos de manera que nunca interfiera en la calidez de la atención humana. La precisión milimétrica es nuestro estándar, la discreción nuestra virtud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓ FINAL: INVITACIÓ */}
      <section className="py-40 bg-[#1A1A1A] text-[#FAF9F6] text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-12">¿Quieres conocer el espacio?</h2>
        <button className="text-[10px] uppercase tracking-[0.6em] border border-[#FAF9F6]/20 px-12 py-6 hover:bg-[#FAF9F6] hover:text-[#1A1A1A] transition-all">
          Reservar visita privada
        </button>
      </section>

      <Footer />
    </main>
  );
}