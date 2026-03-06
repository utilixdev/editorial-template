"use client";
import { motion } from "framer-motion";

// Definición de props para el componente Hero
interface HeroProps {
  isLanding?: boolean;
  onOpenPopup?: () => void;
}

export default function Hero({ 
  isLanding = false, 
  onOpenPopup 
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#FAF9F6] overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO - z-0 y sin eventos para no estorbar */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/bg.jpg" 
          alt="Background"
          className="w-full h-full object-cover grayscale-[0.2] brightness-[1.02]"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/60 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. CONTENIDO TEXTUAL - Usamos pointer-events-none en el contenedor 
          y pointer-events-auto en los elementos interactivos */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-24 pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-7xl">
          
          {/* Bloque de Texto */}
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
                <span className="px-5 py-2 border border-[#B59E85]/40 text-[#B59E85] text-[8px] md:text-[9px] uppercase tracking-[0.5em] rounded-full inline-block bg-[#FAF9F6]/80 shadow-sm font-bold">
                  Consultoría de Identidad • High-End Clinics
                </span>
              </motion.div>
            )}

            <span className="text-[#B59E85] text-[10px] md:text-[11px] uppercase tracking-[0.6em] mb-4 md:mb-6 block font-bold">
              {isLanding ? "UtiLiX • Digital Studio" : "Excelencia • Rigor • Estética"}
            </span>
            
            <h1 className="font-serif text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter text-[#1A1A1A] mb-10">
              {isLanding ? (
                <>Autoridad <br /> <span className="italic text-[#B59E85]">Visual.</span></>
              ) : (
                <>Elegancia <br /> <span className="italic text-[#B59E85]">Clínica.</span></>
              )}
            </h1>
            
            <div className="max-w-xs md:max-w-md">
              <p className="text-[#1A1A1A] text-[10px] md:text-[12px] leading-relaxed uppercase tracking-[0.2em] md:tracking-[0.25em] font-semibold opacity-70">
                {isLanding 
                  ? "Elevamos el estándar digital de centros médicos que rechazan lo genérico. Creamos marcas de élite para clínicas que operan en el nivel superior."
                  : "Donde la precisión científica se encuentra con la armonía visual absoluta."
                }
              </p>
            </div>
          </motion.div>

          {/* 3. BLOQUE DEL BOTÓN - Forzamos pointer-events-auto y un z-index superior */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-14 md:mt-0 md:mb-6 relative z-50 pointer-events-auto"
          >
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); // Evita que el evento suba a otros divs
                console.log("Botón Hero clickeado"); // Debug en consola
                if (isLanding && onOpenPopup) {
                  onOpenPopup();
                } else if (!isLanding) {
                  window.location.href = "/reserva";
                }
              }}
              className="group relative inline-flex items-center justify-center px-12 py-7 overflow-hidden border border-[#1A1A1A] transition-all duration-700 rounded-sm bg-transparent cursor-pointer"
              style={{ pointerEvents: 'auto' }} // Refuerzo de estilo en línea
            >
              {/* Fondo del botón */}
              <div className="absolute inset-0 bg-[#1A1A1A] transition-all duration-700 ease-in-out group-hover:bg-[#B59E85]" />
              
              <span className="relative z-10 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-extrabold text-white transition-colors duration-500">
                {isLanding ? "Solicitar Auditoría de Marca" : "Agendar Consulta"}
              </span>

              {/* Efecto de barrido de luz premium */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
            </button>

            {isLanding && (
              <p className="text-[7px] uppercase tracking-[0.4em] mt-4 opacity-40 text-center md:text-right font-bold">
                Admisión bajo criterios de idoneidad
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Línea de Scroll - z-20 pero sin eventos */}
      <div className="absolute bottom-10 left-6 md:left-24 h-24 w-[1px] bg-[#1A1A1A]/10 overflow-hidden z-20 pointer-events-none">
        <motion.div 
          animate={{ y: [-96, 96] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
          animation: shine 0.9s forwards;
        }
      `}</style>
    </section>
  );
}