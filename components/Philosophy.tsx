"use client";
import { motion } from "framer-motion";

export default function Philosophy({ isLanding = false }: { isLanding?: boolean }) {
  return (
<section className="bg-[#FAF9F6] pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-24 border-t border-[#1A1A1A]/5 overflow-hidden">      
      {/* Inicial de fondo: "U" para UtiLiX, "A" para Atelier/Anónimo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="font-serif text-[80vw] md:text-[50vw] text-[#1A1A1A]/[0.03] select-none leading-none">
          {isLanding ? "U" : "A"}
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[90%] md:max-w-5xl text-center">
        
        {/* Etiqueta superior */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 md:gap-6 mb-12 md:mb-20"
        >
          <div className="w-6 md:w-12 h-[0.5px] bg-[#B59E85]/30" />
          <span className="text-[#B59E85] text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold whitespace-nowrap">
            {isLanding ? "Manifiesto UtiLiX" : "Nuestro compromiso"}
          </span>
          <div className="w-6 md:w-12 h-[0.5px] bg-[#B59E85]/30" />
        </motion.div>

        {/* La Cita: REESCRITURA TIER 1 */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-serif text-[9vw] sm:text-[7vw] md:text-[4.2vw] leading-[1.2] md:leading-[1.1] text-[#1A1A1A] tracking-tight italic"
        >
          {isLanding ? (
    <>
      "Su prestigio no es <span className="text-[#B59E85] opacity-90">negociable </span>. <br className="hidden sm:block" />
      La autoridad se proyecta antes  de la consulta <br className="sm:hidden" /><br className="hidden sm:block" />
      o se pierde para <span className="not-italic opacity-30">siempre."</span>
    </>
  ) : (
    <>
      "La belleza no es un objetivo, <br className="hidden sm:block" />
      es el <span className="text-[#B59E85] opacity-90">resultado</span> de una salud <br className="sm:hidden" /> en armonía <br className="hidden sm:block" />
      y una precisión <span className="not-italic opacity-30">invisible."</span>
    </>
  )}
        </motion.h2>

        {/* Firma */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 flex flex-col items-center"
        >
          <div className="w-[0.5px] h-10 md:h-20 bg-[#B59E85]/20 mb-8" />
          
          <div className="flex flex-col items-center gap-1">
            <p className="text-[9px] md:text-[11px] uppercase tracking-[0.5em] text-[#1A1A1A] font-extrabold">
              {isLanding ? "UtiLiX Studio" : "Dr. Marc Rovira"}
            </p>
            <p className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 italic font-medium">
              {isLanding ? "Ingeniería de Estatus para la Élite Médica" : "Fundador & Director Médico"}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-6 md:right-10 bottom-10 hidden lg:block">
        <span className="text-[7px] uppercase tracking-[1em] text-[#1A1A1A]/20 origin-right -rotate-90 block font-bold">
          Barcelona — {isLanding ? "Identity Studio" : "41.3926° N"}
        </span>
      </div>
    </section>
  );
}