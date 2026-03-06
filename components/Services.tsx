"use client";
import { motion } from "framer-motion";

// Contenido para la Web de la Clínica (Servicios Médicos)
const clinicServices = [
  { 
    title: "Armonía Facial", 
    desc: "Procedimientos de alta precisión diseñados para restaurar los volúmenes y la luz del rostro mediante técnicas de bioestimulación imperceptibles.",
    tag: "Maestría"
  },
  { 
    title: "Escultura Dental", 
    desc: "Diseño de sonrisas de autor con porcelana artesanal y tecnología 3D, priorizando la mínima invasión y una naturalidad absoluta.",
    tag: "Artesanía"
  },
  { 
    title: "Longevidad Avanzada", 
    desc: "Protocolos regenerativos y nutrición de precisión que equilibran el organismo desde el interior para un bienestar que se refleja en el exterior.",
    tag: "Ciencia"
  },
];

// Contenido para la Campaña/Landing (Servicios del Estudio para Clínicas)
const studioServices = [
  { 
    title: "Arquitectura Web Médica", 
    desc: "Desarrollamos ecosistemas digitales en Next.js con una pureza visual que proyecta el mismo rigor y pulcritud que su propia clínica.",
    tag: "Digital"
  },
  { 
    title: "Branding de Alta Gama", 
    desc: "Dirección de arte enfocada a elevar la percepción de su centro, transformando su nombre en un referente de exclusividad y confianza.",
    tag: "Identidad"
  },
  { 
    title: "Captación Premium", 
    desc: "Estrategias de conversión diseñadas para atraer al paciente que valora la excelencia y los resultados por encima del precio.",
    tag: "Estrategia"
  },
];

export default function Services({ isLanding = false }: { isLanding?: boolean }) {
  const currentServices = isLanding ? studioServices : clinicServices;

  return (
    <section className="py-24 md:py-48 px-6 md:px-24 bg-[#FAF9F6]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
        <div className="max-w-xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-6 block font-medium"
          >
            {isLanding ? "Expertise para el sector estético" : "Servicios de autor"}
          </motion.span>
          <h2 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] tracking-tighter leading-[0.9]">
            {isLanding ? (
              <>Autoridad <br /> <span className="italic opacity-60 text-[10vw] md:text-[6vw]">Digital Estética.</span></>
            ) : (
              <>Experiencias <br /> <span className="italic opacity-60 text-[10vw] md:text-[6vw]">Transformadoras.</span></>
            )}
          </h2>
        </div>
        <p className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-[#1A1A1A]/40 max-w-[200px] leading-relaxed">
          {isLanding 
            ? "Elevamos la presencia de su clínica al nivel de su maestría médica."
            : "Cada tratamiento es una obra de arte donde la ciencia es el pincel."
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 lg:gap-x-20">
        {currentServices.map((s, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col cursor-pointer"
          >
            <div className="flex items-center justify-between mb-10 border-b border-[#1A1A1A]/10 pb-4">
              <span className="text-[10px] font-medium tracking-[0.3em] text-[#B59E85]">
                {s.tag}
              </span>
              <span className="font-serif italic text-xl opacity-20 group-hover:opacity-100 group-hover:text-[#B59E85] transition-all duration-700">
                0{i + 1}
              </span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-6 group-hover:italic transition-all duration-500">
              {s.title}
            </h3>
            
            <p className="text-[13px] md:text-[14px] leading-[1.8] text-[#1A1A1A]/50 mb-10 min-h-[80px]">
              {s.desc}
            </p>

            <div className="mt-auto relative overflow-hidden inline-block group/btn">
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A] font-semibold">
                {isLanding ? "Consultar propuesta" : "Explorar servicio"}
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-[#B59E85] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-700 origin-left" />
            </div>

            <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-700 rounded-sm shadow-[0_40px_100px_-20px_rgba(181,158,133,0.1)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}