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
      // Parallax de alta fidelidad
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
      className="relative min-h-screen flex flex-col bg-[#FAF9F6] overflow-hidden"
    >
      {/* 1. FONDO CON PARALLAX PROFUNDO (Sin Blur, Nitidez Clínica) */}
      <motion.div 
        className="absolute inset-0 z-0 scale-150"
        style={{ x: springX, y: springY }}
      >
        <img 
          src="/bg.jpg" 
          alt="Background"
          className="w-full h-full object-cover grayscale-[0.5] opacity-60"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/20"></div>
      </motion.div>

      {/* 2. CONTENIDO TEXTUAL ASIMÉTRICO */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-24 select-none pointer-events-none">
        
        {/* Etiqueta Superior Desplazada */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-12 md:top-20 right-6 md:right-24 z-20"
        >
          <span className="text-[#B59E85] text-[8px] md:text-[10px] uppercase tracking-[1em] font-black opacity-40">
            The New Standard
          </span>
        </motion.div>

        <div className="max-w-7xl w-full">
          {/* H1 CON VIDA PROPIA Y COLORES INVERTIDOS */}
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[15vw] md:text-[11vw] leading-[0.82] tracking-[-0.05em] flex flex-col relative z-10"
          >
            <span className="text-[#B59E85] italic font-light">
              {isLanding ? "Autoridad" : "Elegancia"}
            </span>
            <motion.span 
              style={{ x: useTransform(springX, (v) => v * -1.5) }}
              className="text-[#1A1A1A] self-start md:ml-40 mt-2"
            >
              {isLanding ? "Visual." : "Clínica."}
            </motion.span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-start justify-between mt-24 md:mt-12 gap-16">
            {/* Bloque de Texto Refinado */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.4, duration: 2 }}
              className="max-w-[220px] md:max-w-xs border-l border-[#B59E85]/30 pl-6"
            >
              <p className="text-[#1A1A1A] text-[9px] md:text-[11px] leading-[2.2] uppercase tracking-[0.3em] font-bold">
                {isLanding 
                  ? "Elevamos el estándar digital de centros médicos que rechazan lo genérico. Creamos marcas de élite para clínicas que operan en el nivel superior."
                  : "Donde la precisión científica se encuentra con la armonía visual absoluta."
                }
              </p>
            </motion.div>

            {/* BOTÓN CIRCULAR: RECONFIGURACIÓN ASIMÉTRICA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1.8 }}
              className="pointer-events-auto z-50 self-start md:self-center md:mx-auto md:pr-40 pb-10"
            >
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isLanding && onOpenPopup) onOpenPopup();
                  else if (!isLanding) window.location.href = "/reserva";
                }}
                className="group relative flex flex-col items-center outline-none cursor-pointer"
              >
                {/* Círculo Minimalista: Pequeño en móvil (w-28), Presencial en desktop (w-52) */}
                <div className="w-28 h-28 md:w-52 md:h-52 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center relative overflow-hidden transition-all duration-[1500ms] ease-[0.22, 1, 0.36, 1] bg-white/40 group-hover:border-[#B59E85]/60 group-hover:bg-white/80">
                  
                  {/* Llenado sólido suave */}
                  <div className="absolute inset-0 bg-[#B59E85] translate-y-full group-hover:translate-y-0 transition-transform duration-[1000ms] ease-[0.22, 1, 0.36, 1]" />
                  
                  <span className="relative z-10 text-[7px] md:text-[10px] uppercase tracking-[0.4em] font-black text-[#1A1A1A] group-hover:text-white transition-colors duration-700 text-center leading-tight px-2">
                    {isLanding ? "Solicitar Auditoría" : "Agendar Consulta"}
                  </span>
                </div>
                
                <span className="text-[6px] md:text-[7px] uppercase tracking-[0.4em] mt-4 opacity-20 font-bold group-hover:opacity-60 transition-opacity duration-1000">
                  Admission Reserved
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marca de agua de fondo - Rigor de Autor */}
      <div className="absolute bottom-24 left-[-5%] font-serif italic text-[15vw] text-[#1A1A1A]/[0.02] pointer-events-none select-none z-0">
        Prestige
      </div>

      {/* Indicador de Scroll Minimalista */}
      <div className="absolute bottom-10 left-6 md:left-24 h-16 w-[1px] bg-[#1A1A1A]/10 overflow-hidden z-20">
        <motion.div 
          animate={{ y: [-64, 64] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-[#B59E85]/40"
        />
      </div>
    </section>
  );
}