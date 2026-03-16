"use client";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import VisionConcepts from "@/components/VisionConcepts";
import Footer from "@/components/Footer";

// Sustituimos los dos antiguos por el nuevo componente fusionado
import ClinicTransformationAudit from "@/components/ClinicTransformationAudit";

export default function CampanyaPage() {
  
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[#FAF9F6] relative w-full overflow-hidden">

      <Hero 
        isLanding={true} 
        onOpenPopup={scrollToContacto} 
      />

      {/* SECCIÓN FUSIONADA: Diagnóstico + After Premium */}
      <ClinicTransformationAudit />

      <Methodology isLanding={true} />

      <VisionConcepts />

      <section className="py-24 flex flex-col items-center bg-[#1A1A1A] text-[#FAF9F6] relative">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22,1,0.36,1] }}
          className="text-center px-6 z-10"
        >

          <span className="text-[10px] uppercase tracking-[0.8em] mb-12 block text-[#B59E85] font-black">
            UtiLiX Studio — Protocolo de Exclusividad
          </span>

          <h2 className="font-serif text-6xl md:text-9xl mb-16 tracking-tighter leading-[0.8] italic">
            El estándar <br />
            <span className="opacity-40 not-italic">para la élite clínica.</span>
          </h2>

          <p className="max-w-2xl mx-auto mb-20 text-[11px] md:text-[13px] uppercase tracking-[0.35em] leading-[2.5] opacity-60 font-medium">
            No somos una agencia de plantillas; somos su departamento de ingeniería visual.
            Diseñamos activos que legitiman sus honorarios y filtran su audiencia
            hacia el segmento de alto valor.
          </p>

          <button 
            onClick={scrollToContacto}
            className="group relative px-20 py-8 bg-[#B59E85] text-white text-[10px] uppercase tracking-[0.6em] font-black transition-all duration-700 hover:bg-white hover:text-[#1A1A1A] shadow-2xl shadow-[#B59E85]/10"
          >
            Solicitar Evaluación Privada
          </button>

        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <span className="font-serif italic text-[30vw]">Prestige</span>
        </div>

      </section>

      <Footer />

    </main>
  );
}