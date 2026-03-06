"use client";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";

export default function CampanyaPage() {
  return (
    <main className="bg-[#FAF9F6] relative w-full overflow-hidden">
      {/* 1. Navegación: Identidad visual de UtiLiX */}
      <Navigation />
      
      {/* 2. Hero: Imagen/Vídeo con estética de clínica Tier 1 */}
      <Hero isLanding={true} />
      
      {/* 3. Filosofía: Cita sobre diseño y confianza con la "U" de fondo */}
      <Philosophy isLanding={true} />
      
      {/* 4. Metodología: Proceso de trabajo del estudio */}
      <Methodology isLanding={true} />
      
      {/* 5. Servicios: Catálogo de soluciones digitales */}
      <Services isLanding={true} />

      {/* 6. SECCIÓN DE CIERRE (CTA): El punto de conversión directa */}
      <section id="contacte" className="py-40 flex flex-col items-center bg-[#1A1A1A] text-[#FAF9F6]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <span className="text-[10px] uppercase tracking-[0.8em] mb-8 block opacity-40">
            Digital Studio — Barcelona
          </span>
          
          <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tighter leading-[0.9]">
            El estándar digital <br /> 
            <span className="italic opacity-50">para clínicas de élite.</span>
          </h2>
          
          <p className="max-w-xl mx-auto mb-16 text-[11px] uppercase tracking-[0.3em] leading-loose opacity-60">
            Diseñamos experiencias de lujo que transforman la percepción de su marca médica. 
            Menos ruido, más distinción y una conversión superior.
          </p>
          
          <a 
            href="https://wa.me/34711556444" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-6 border border-[#FAF9F6]/20 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#FAF9F6] hover:text-[#1A1A1A] transition-all duration-700 ease-in-out"
          >
            Solicitar Propuesta Personalizada
          </a>
        </motion.div>
      </section>
      
      {/* 7. Footer: Datos de contacto */}
      <Footer />

      {/* 8. Botón de WhatsApp: Contacto directo */}
      <WhatsAppFloat />
    </main>
  );
}