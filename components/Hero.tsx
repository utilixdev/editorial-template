"use client";
import { motion } from "framer-motion";

export default function Hero({ isLanding = false }: { isLanding?: boolean }) {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#FAF9F6] overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg.jpg" 
          alt="Background"
          className="w-full h-full object-cover grayscale-[0.1] brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/55 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. CONTENIDO TEXTUAL */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-7xl">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mt-20"
          >
            {/* Etiqueta Superior */}
            {isLanding && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <span className="px-5 py-2 border border-[#B59E85]/60 text-[#B59E85] text-[8px] md:text-[9px] uppercase tracking-[0.5em] rounded-full inline-block bg-[#FAF9F6] shadow-sm font-bold">
                  Diseño exclusivo para clínicas de lujo
                </span>
              </motion.div>
            )}

            <span className="text-[#B59E85] text-[10px] md:text-[11px] uppercase tracking-[0.6em] mb-4 md:mb-6 block font-bold">
              {isLanding ? "UtiLiX • Digital Studio" : "Médica • Estética • Bienestar"}
            </span>
            
            <h1 className="font-serif text-[15vw] md:text-[11vw] leading-[0.85] tracking-tighter text-[#1A1A1A] mb-8">
              {isLanding ? (
                <>Elegancia <br /> <span className="italic text-[#B59E85]">Clínica.</span></>
              ) : (
                <>Elegancia <br /> <span className="italic text-[#B59E85]">Clínica.</span></>
              )}
            </h1>
            
            <div className="max-w-xs md:max-w-md">
              <p className="text-[#1A1A1A] text-[10px] md:text-[12px] leading-relaxed uppercase tracking-[0.2em] md:tracking-widest font-semibold opacity-80">
                {isLanding 
                  ? "Diseñamos la identidad visual de las mejores clínicas. Un estándar de lujo creado para transformar su centro en una marca de élite."
                  : "La excelencia en medicina estética ahora tiene un espacio donde la ciencia se encuentra con la calma absoluta."
                }
              </p>
            </div>
          </motion.div>

          {/* BOTÓN TIER 1 A LA DERECHA Y MÁS VISIBLE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-12 md:mt-0 md:mb-4"
          >
            <a 
              href={isLanding ? "/contacto" : "/reservar"} 
              className="group relative inline-flex items-center justify-center px-14 py-6 overflow-hidden border-2 border-[#1A1A1A] transition-all duration-500"
            >
              {/* Fondo que ya tiene un poco de color inicial o es negro para máximo contraste */}
              <div className="absolute inset-0 bg-[#1A1A1A] transition-all duration-500 ease-out group-hover:bg-[#B59E85]" />
              
              {/* Texto del Botón en Blanco para que destaque al máximo */}
              <span className="relative text-[11px] md:text-[12px] uppercase tracking-[0.6em] font-bold text-white transition-colors duration-500">
                {isLanding ? "Quiero mi web" : "Reservar cita"}
              </span>

              {/* Brillo sutil de lujo */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Línea de Scroll Minimalista */}
      <div className="absolute bottom-10 left-6 md:left-24 h-20 w-[1px] bg-[#1A1A1A]/20 overflow-hidden z-20">
        <motion.div 
          animate={{ y: [-80, 80] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-[#B59E85]"
        />
      </div>

      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 0.8s;
        }
      `}</style>
    </section>
  );
}