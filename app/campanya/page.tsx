"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Methodology from "@/components/Methodology";
import VisionConcepts from "@/components/VisionConcepts"; // 1. Importamos el nuevo componente
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LeadPopup from "@/components/LeadPopup"; 
import { motion } from "framer-motion";

export default function CampanyaPage() {
  const [showPopup, setShowPopup] = useState(false);

  // Función de control mejorada para asegurar la ejecución
  const handleOpenPopup = () => {
    console.log("Protocolo de apertura iniciado");
    setShowPopup(true);
  };

  return (
    <main className="bg-[#FAF9F6] relative w-full overflow-hidden">
      <Navigation isLanding={true} />
      
      {/* 1. CONEXIÓN DEL HERO: Pasamos la función handleOpenPopup */}
      <Hero 
        isLanding={true} 
        onOpenPopup={handleOpenPopup} 
      />
      
      <Philosophy isLanding={true} />
      
      <Methodology isLanding={true} />

      {/* 2. INSERTAMOS CONCEPTOS DE VISIÓN AQUÍ */}
      {/* Esto actúa como tu "Portfolio de Autoridad" antes de vender servicios */}
      <VisionConcepts />
      
      {/* 3. CONEXIÓN DE SERVICES: También deben poder abrir el popup */}
      <Services 
        isLanding={true} 
        onOpenPopup={handleOpenPopup} 
      />

      <section id="contacto" className="py-48 flex flex-col items-center bg-[#1A1A1A] text-[#FAF9F6] relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-6 z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.8em] mb-12 block text-[#B59E85] font-black">
            UtiLiX Studio — High Fidelity Assets
          </span>
          
          <h2 className="font-serif text-6xl md:text-9xl mb-16 tracking-tighter leading-[0.8] italic">
            El estándar <br /> 
            <span className="opacity-40 not-italic">para la élite.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto mb-20 text-[11px] md:text-[13px] uppercase tracking-[0.35em] leading-[2.5] opacity-60 font-medium">
            No diseñamos sitios web; construimos activos de autoridad que <br className="hidden md:block"/> 
            filtran su audiencia y consolidan su prestigio digital. <br className="hidden md:block"/>
            Rigor técnico para resultados de excepción.
          </p>
          
          <div className="flex flex-col items-center gap-10">
            {/* Este botón ahora usa la función centralizada */}
            <button 
              onClick={handleOpenPopup}
              className="group relative px-20 py-8 bg-[#B59E85] text-white text-[10px] uppercase tracking-[0.6em] font-black transition-all duration-700 hover:bg-white hover:text-[#1A1A1A] shadow-2xl shadow-[#B59E85]/10"
            >
              Iniciar Auditoría de Marca
            </button>
            
            <div className="flex flex-col items-center gap-2">
               <p className="text-[9px] uppercase tracking-[0.5em] opacity-40 font-bold">
                 Disponibilidad sujeta a valoración de proyecto
               </p>
               <div className="w-12 h-[1px] bg-[#B59E85]/40"></div>
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <span className="font-serif italic text-[30vw]">Elite</span>
        </div>
      </section>
      
      <Footer />
      <WhatsAppFloat />

      {/* 4. EL POPUP: Asegúrate de que LeadPopup use forceOpen y setForceOpen */}
      <LeadPopup forceOpen={showPopup} setForceOpen={setShowPopup} />
    </main>
  );
}