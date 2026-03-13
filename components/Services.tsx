"use client";
import { motion } from "framer-motion";

const studioServices = [
  { 
    title: "Ingeniería de Autoridad", 
    desc: "Desplegamos ecosistemas digitales bajo estándares de alta fidelidad. No erigimos sitios web; consolidamos activos de prestigio que eliminan de golpe cualquier comparación con su competencia.",
    tag: "Protocolo I",
    className: "md:w-[45%] md:self-start",
    direction: -40
  },
  { 
    title: "Dirección de Estatus", 
    desc: "Arquitectura de marca para clínicas que exigen el escalón superior. Rediseñamos su identidad para que su excelencia médica se refleje en su factura y en el perfil de sus pacientes.",
    tag: "Protocolo II",
    className: "md:w-[40%] md:self-end md:mt-[-150px]", 
    direction: 40
  },
  { 
    title: "Sistemas de Filtrado", 
    desc: "Algoritmos de captación selectiva. Diseñados para atraer exclusivamente a pacientes que buscan resultados excepcionales y no cuestionan el valor de su presupuesto.",
    tag: "Protocolo III",
    className: "md:w-[35%] md:self-center md:mt-12",
    direction: -40
  },
];

export default function Services({ 
  isLanding = false, 
  onOpenPopup 
}: { 
  isLanding?: boolean;
  onOpenPopup?: () => void; 
}) {
  const currentServices = isLanding ? studioServices : studioServices;

  return (
    // CAMBIO: pt-16 por pt-0 para eliminar el aire excesivo arriba
<section className="bg-[#FAF9F6] pt-12 md:pt-24 pb-12 md:pb-20 px-6 md:px-24 border-t border-[#1A1A1A]/5 overflow-hidden">      
      {/* Encabezado Asimétrico */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 md:mb-56 gap-12">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // CAMBIO: mb-6 para compactar el aire superior
            className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-6 block font-black"
          >
            {isLanding ? "Protocolos de Intervención de Élite" : "Servicios de Autor"}
          </motion.span>
          <h2 className="font-serif text-6xl md:text-9xl text-[#1A1A1A] tracking-[-0.05em] leading-[0.8]">
            {isLanding ? (
              <>Ingeniería <br /> <span className="italic opacity-30 font-light text-[12vw] md:text-[8vw]">de Prestigio.</span></>
            ) : (
              <>Experiencias <br /> <span className="italic opacity-30 text-[10vw] md:text-[6vw]">Transformadoras.</span></>
            )}
          </h2>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
          className="text-[11px] uppercase tracking-[0.4em] text-[#1A1A1A] max-w-[280px] leading-[2.2] font-bold border-l border-[#B59E85]/30 pl-8"
        >
          {isLanding 
            ? "Erradicamos lo genérico. Proyectamos la superioridad técnica de su clínica."
            : "Cada intervención es una obra de rigor donde la ciencia es el único estándar."
          }
        </motion.p>
      </div>

      <div className="flex flex-col relative min-h-[1000px]">
        {currentServices.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: s.direction, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 1.5, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className={`group relative flex flex-col mb-32 md:mb-0 ${s.className}`}
          >
            <div className="flex items-center justify-between mb-12 relative">
               <div className="absolute top-0 left-0 w-full h-[1px] bg-[#1A1A1A]/5 group-hover:bg-[#B59E85]/20 transition-colors duration-1000" />
               <div className="pt-8 flex justify-between w-full items-start">
                  <span className="text-[10px] font-black tracking-[0.6em] text-[#B59E85] uppercase">
                    {s.tag}
                  </span>
                  <span className="font-serif italic text-6xl opacity-5 group-hover:opacity-20 group-hover:text-[#B59E85] transition-all duration-1000 transform group-hover:-translate-y-2">
                    {i + 1}
                  </span>
               </div>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-10 tracking-tighter opacity-90 group-hover:pl-4 transition-all duration-700 ease-out">
              {s.title}
            </h3>
            
            <p className="text-[14px] md:text-[15px] leading-[2.1] text-[#1A1A1A]/60 mb-14 tracking-wide font-serif italic max-w-md">
              {s.desc}
            </p>

            <button 
              onClick={isLanding ? onOpenPopup : undefined} 
              className="mt-auto relative inline-block group/btn self-start overflow-hidden py-2"
            >
              <span className="text-[10px] uppercase tracking-[0.8em] text-[#1A1A1A] font-black block transition-transform duration-500 group-hover/btn:-translate-y-[120%]">
                {isLanding ? "Solicitar Auditoría" : "Explorar Servicio"}
              </span>
              <span className="absolute inset-0 text-[10px] uppercase tracking-[0.8em] text-[#B59E85] font-black block transition-transform duration-500 translate-y-[120%] group-hover/btn:translate-y-0">
                {isLanding ? "Solicitar Auditoría" : "Explorar Servicio"}
              </span>
              
              <div className="h-[1px] bg-[#B59E85] mt-4 w-full transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-700 origin-left" />
            </button>
          </motion.div>
        ))}

        <div className="absolute top-[20%] right-[-5%] font-serif italic text-[20vw] text-[#1A1A1A]/[0.02] pointer-events-none select-none rotate-12">
          Systems
        </div>
      </div>
    </section>
  );
}