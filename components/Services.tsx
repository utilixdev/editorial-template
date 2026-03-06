"use client";
import { motion } from "framer-motion";

const studioServices = [
  { 
    title: "Ingeniería de Autoridad", 
    desc: "Desplegamos ecosistemas digitales en Next.js bajo estándares de alta fidelidad. No erigimos sitios web; consolidamos activos de prestigio que anulan la percepción de competencia.",
    tag: "Protocolo I"
  },
  { 
    title: "Dirección de Estatus", 
    desc: "Arquitectura de marca diseñada para clínicas que exigen el escalón superior. Transformamos su identidad en un referente de lujo que legitima el incremento de sus honorarios.",
    tag: "Protocolo II"
  },
  { 
    title: "Sistemas de Filtrado", 
    desc: "Algoritmos de captación de alto valor. Diseñados para atraer exclusivamente al paciente que no cuestiona el coste, sino que busca la maestría clínica absoluta.",
    tag: "Protocolo III"
  },
];

// Añadimos onOpenPopup a las props
export default function Services({ 
  isLanding = false, 
  onOpenPopup 
}: { 
  isLanding?: boolean;
  onOpenPopup?: () => void; 
}) {
  const currentServices = isLanding ? studioServices : studioServices; // Aquí irían tus servicios de clínica si no es landing

  return (
    <section id="servicios" className="py-24 md:py-48 px-6 md:px-24 bg-[#FAF9F6]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-40 gap-8">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-8 block font-bold"
          >
            {isLanding ? "Protocolos de Intervención de Élite" : "Servicios de Autor"}
          </motion.span>
          <h2 className="font-serif text-5xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-[0.85]">
            {isLanding ? (
              <>Ingeniería <br /> <span className="italic opacity-40">de Prestigio.</span></>
            ) : (
              <>Experiencias <br /> <span className="italic opacity-40 text-[10vw] md:text-[6vw]">Transformadoras.</span></>
            )}
          </h2>
        </div>
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 max-w-[300px] leading-loose font-bold">
          {isLanding 
            ? "Erradicamos lo genérico. Proyectamos la superioridad técnica de su clínica."
            : "Cada intervención es una obra de rigor donde la ciencia es el único estándar."
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-16 lg:gap-x-24">
        {currentServices.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              delay: i * 0.2, 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="group relative flex flex-col"
          >
            <div className="flex items-center justify-between mb-12 border-b border-[#1A1A1A]/5 pb-6">
              <span className="text-[9px] font-bold tracking-[0.5em] text-[#B59E85] uppercase">
                {s.tag}
              </span>
              <span className="font-serif italic text-2xl opacity-10 group-hover:opacity-100 group-hover:text-[#B59E85] transition-all duration-1000">
                /0{i + 1}
              </span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-8 tracking-tighter group-hover:pl-2 transition-all duration-700">
              {s.title}
            </h3>
            
            <p className="text-[13px] md:text-[14px] leading-[2] text-[#1A1A1A]/60 mb-12 min-h-[100px] tracking-wide font-medium">
              {s.desc}
            </p>

            {/* BOTÓN REEVALUADO: Ahora dispara el Popup si es landing */}
            <button 
              onClick={isLanding ? onOpenPopup : undefined} 
              className="mt-auto relative inline-block group/btn self-start text-left"
            >
              <span className="text-[9px] uppercase tracking-[0.6em] text-[#1A1A1A] font-black transition-colors duration-500 group-hover/btn:text-[#B59E85]">
                {isLanding ? "Solicitar Auditoría" : "Explorar Servicio"}
              </span>
              
              <motion.div 
                className="h-[1px] bg-[#B59E85] mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + (i * 0.2), duration: 1 }}
                style={{ originX: 0 }}
              />
            </button>

            <div className="absolute -inset-8 bg-white/50 opacity-0 group-hover:opacity-100 -z-10 transition-all duration-1000 rounded-xl blur-2xl hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}