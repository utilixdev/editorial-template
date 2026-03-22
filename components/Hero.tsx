"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
  isLanding?: boolean;
  onOpenPopup?: () => void;
}

export default function Hero({ 
  isLanding = false, 
  onOpenPopup 
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 100;
      const moveY = (clientY - window.innerHeight / 2) / 100;
      setMousePos({ x: moveX, y: moveY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 45, stiffness: 180 };
  const springX = useSpring(mousePos.x, springConfig);
  const springY = useSpring(mousePos.y, springConfig);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen min-h-[650px] flex flex-col bg-[#FAF9F6] overflow-hidden"
    >

      {/* FONDO VITAMINADO: Carga prioritaria para mejorar el LCP */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ x: springX, y: springY }}
      >
        <img 
          src="/bg.jpg" 
          alt="Atmósfera de lujo y autoridad visual - UtiLiX Studio"
          {...({ fetchPriority: "high" } as any)} 
          className="w-full h-full object-cover object-[70%_center] grayscale-[0.5] opacity-60"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/20"></div>
      </motion.div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-24 select-none pointer-events-none">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-8 md:top-14 right-6 md:right-24 z-20"
        >
          <span className="text-[#B59E85] text-[8px] md:text-[10px] uppercase tracking-[1.2em] font-black opacity-30 text-right block">
            The New Standard
          </span>
        </motion.div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10 -mt-30 md:mt-0">
          
          {/* Bloque de Título */}
          <div className="flex flex-col relative z-10">
            {isLanding && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="mb-4 md:mb-6"
              >
                <h2 className="text-[9px] md:text-[11px] uppercase tracking-[0.35em] text-[#B59E85] font-black leading-relaxed max-w-md">
                  Ingeniería visual para clínicas que deciden atraer pacientes de alto valor, no volumen.
                </h2>
              </motion.div>
            )}

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[13vw] md:text-[7vw] leading-[0.85] tracking-[-0.05em] flex flex-col"
            >
              <span className="text-[#B59E85] italic font-light">
                {isLanding ? "Prestigio Clínico" : "Elegancia"}
              </span>

              <motion.span 
                style={{ x: useTransform(springX, (v) => v * -1.5) }}
                className="text-[#1A1A1A] self-start mt-2"
              >
                {isLanding ? "Autoridad Digital." : "Clínica."}
              </motion.span>
            </motion.h1>
          </div>

          {/* DESCRIPCIÓN */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.4, duration: 2 }}
            className="max-w-[280px] md:max-w-sm border-l md:border-l-0 md:border-r border-[#B59E85]/30 pl-8 md:pl-0 md:pr-8 md:justify-self-end md:text-right"
          >
            <p className="text-[#1A1A1A] text-[9px] md:text-[11px] leading-[2.4] uppercase tracking-[0.35em] font-bold">
              {isLanding 
                ? "Si su clínica es premium, su presencia digital también debe serlo. Diseñamos ecosistemas de autoridad que proyectan distinción y atraen al paciente más cualificado del mercado."
                : "Donde la precisión científica se encuentra con la armonía visual absoluta."
              }
            </p>
          </motion.div>
        </div>

        {/* BOTÓN VITAMINADO: Con Aria-Label para subir Accesibilidad al 100 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="pointer-events-auto z-50 absolute bottom-[8%] md:bottom-[10%] left-1/2 -translate-x-1/2"
        >
          <button 
            type="button"
            aria-label={isLanding ? "Solicitar Auditoría de Autoridad" : "Agendar Consulta Directa"}
            onClick={(e) => {
              e.stopPropagation();
              if (isLanding && onOpenPopup) onOpenPopup();
              else if (!isLanding) window.location.href = "/reserva";
            }}
            className="group relative flex flex-col items-center outline-none cursor-pointer"
          >
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center relative overflow-hidden transition-all duration-[1500ms] ease-[0.22,1,0.36,1] bg-white/40 group-hover:border-[#B59E85]/60 group-hover:bg-white/80">
              
              <div className="absolute inset-0 bg-[#B59E85] translate-y-full group-hover:translate-y-0 transition-transform duration-[1000ms] ease-[0.22,1,0.36,1]" />
              
              <span className="relative z-10 text-[7px] md:text-[10px] uppercase tracking-[0.5em] font-black text-[#1A1A1A] group-hover:text-white transition-colors duration-700 text-center leading-tight px-4">
                {isLanding ? "Solicitar Auditoría Privada" : "Agendar Consulta"}
              </span>
            </div>

            <span className="text-[6px] md:text-[7px] uppercase tracking-[0.5em] mt-5 opacity-20 font-bold group-hover:opacity-60 transition-opacity duration-1000">
              Admission Reserved
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-16 left-[-5%] font-serif italic text-[14vw] text-[#1A1A1A]/[0.02] pointer-events-none select-none z-0">
        Prestige
      </div>

      <div className="absolute bottom-6 left-6 md:left-24 h-12 w-[1px] bg-[#1A1A1A]/10 overflow-hidden z-20">
        <motion.div 
          animate={{ y: [-48, 48] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-[#B59E85]/40"
        />
      </div>

    </section>
  );
}