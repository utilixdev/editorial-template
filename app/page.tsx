"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// IMPORTACIÓN DE TODA LA FLOTA DE COMPONENTES DE UTILIX
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClinicTransformationAudit from "@/components/ClinicTransformationAudit";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import VisionConcepts from "@/components/VisionConcepts";
import Gallery from "@/components/Gallery";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LeadPopup from "@/components/LeadPopup";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <main className="bg-[#FAF9F6] relative w-full overflow-hidden">
      
      {/* BLOQUE SEO INVISIBLE: Relevancia para Madrid, Barcelona y Marbella */}
      <h1 className="sr-only">
        UtiLiX Studio | Ingeniería Visual y Activos Digitales de Alta Fidelidad para Clínicas Estéticas de Lujo. Especialistas en Rediseño Web Médico en Serrano, Turó Park y La Zagaleta.
      </h1>

      {/* 1. NAVEGACIÓN: isLanding={false} activa el menú completo de la agencia */}
      <Navigation isLanding={false} />

      {/* 2. HERO: Enfoque de Estudio / Boutique */}
      <Hero 
        isLanding={false} 
        onOpenPopup={togglePopup} 
      />

      {/* 4. AUDITORÍA: El bloque visual de transformación (Antes/Después) */}
      <ClinicTransformationAudit />

      {/* 5. SERVICIOS: Protocolos de Ingeniería de Autoridad */}
      <Services isLanding={false} onOpenPopup={togglePopup} />

      {/* 6. METODOLOGÍA: El proceso estratégico del estudio */}
      <Methodology isLanding={false} />

      {/* 7. VISIÓN: Minimalismo, iOS y Conversión de Prestigio */}
      <VisionConcepts />

      {/* 8. GALERÍA: Portfolio editorial de alto impacto */}
      <Gallery />

      {/* 9. FILOSOFÍA: El manifiesto de marca UtiLiX */}
      <Philosophy isLanding={false} />

      {/* 10. CIERRE DE ALTA CONVERSIÓN FUSIONADO */}
      <section className="py-24 flex flex-col items-center bg-[#1A1A1A] text-[#FAF9F6] relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22,1,0.36,1] }}
          className="text-center px-6 z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.8em] mb-12 block text-[#B59E85] font-black">
            UtiLiX Studio — Protocolo de Autoridad
          </span>
          <h2 className="font-serif text-6xl md:text-9xl mb-16 tracking-tighter leading-[0.8] italic">
            El estándar <br />
            <span className="opacity-40 not-italic">para la élite.</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-20 text-[11px] md:text-[13px] uppercase tracking-[0.35em] leading-[2.5] opacity-60 font-medium px-4">
            No somos una agencia de plantillas; somos su departamento de ingeniería visual. 
            Diseñamos activos que legitiman sus honorarios y atraen al segmento de alto valor.
          </p>
          <button 
            onClick={togglePopup}
            className="group relative px-20 py-8 bg-[#B59E85] text-white text-[10px] uppercase tracking-[0.6em] font-black transition-all duration-700 hover:bg-white hover:text-[#1A1A1A] shadow-2xl shadow-[#B59E85]/10"
          >
            Iniciar Evaluación Privada
          </button>
        </motion.div>

        {/* Marca de agua de fondo decorativa */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <span className="font-serif italic text-[30vw]">Prestige</span>
        </div>
      </section>

      {/* 11. PIE DE PÁGINA SEO LOCAL (Listado de 26 puntos clave) */}
      <div className="bg-[#FAF9F6] py-12 text-center px-6 border-t border-[#1A1A1A]/5">
        <p className="max-w-5xl mx-auto text-[7.5px] uppercase tracking-[0.15em] opacity-30 leading-relaxed">
          Ingeniería Visual activa en: Madrid (Serrano, Almagro, El Viso, Castellana, La Moraleja) — 
          Barcelona (Turó Park, Pedralbes, Passeig de Gràcia) — Marbella (La Zagaleta, Puerto Banús) — 
          Bilbao (Abando) — San Sebastián (Concha) — Valencia (Colón) — Málaga (Larios).
        </p>
      </div>

      <Footer />
      <WhatsAppFloat />

      {/* POPUP DE CAPTACIÓN (Auditoría) */}
      <LeadPopup forceOpen={isPopupOpen} setForceOpen={setIsPopupOpen} />

    </main>
  );
}