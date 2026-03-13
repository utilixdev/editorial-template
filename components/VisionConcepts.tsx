"use client";
import { motion } from "framer-motion";

const concepts = [
  {
    id: "01",
    title: "Minimalismo Clínico",
    description: "La ausencia de ruido visual genera una respuesta de confianza inmediata. Arquitectura digital basada en el espacio en blanco y la jerarquía tipográfica.",
    tag: "ESTÉTICA EDITORIAL",
    direction: -50, // Entra desde la izquierda
    align: "start"
  },
  {
    id: "02",
    title: "Fricción Cero (iOS)",
    description: "Ingeniería aplicada para el hardware más exigente. Eliminamos zooms intrusivos y errores de interfaz para una navegación fluida en dispositivos Pro.",
    tag: "INGENIERÍA UX",
    direction: 50, // Entra desde la derecha
    align: "end"
  },
  {
    id: "03",
    title: "Conversión de Prestigio",
    description: "Sustituimos los formularios genéricos por flujos de contacto directo. El paciente de alto valor no espera; busca acceso preferente.",
    tag: "ESTRATEGIA",
    direction: -50, // Entra desde la izquierda
    align: "start"
  }
];

export default function VisionConcepts() {
  return (
<section className="bg-[#FAF9F6] pt-24 pb-0 px-6 md:px-24 border-t border-[#1A1A1A]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con desplazamiento lateral */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 md:ml-20"
        >
          <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-8 block font-black">
            The Standards
          </span>
          <h2 className="font-serif text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-none italic">
            Conceptos de <span className="opacity-30 not-italic">Visión.</span>
          </h2>
        </motion.div>

        {/* Layout de Rejilla Rota */}
        <div className="space-y-40 md:space-y-12 relative">
          {concepts.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: item.direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className={`flex w-full ${item.align === "end" ? "justify-end" : "justify-start"}`}
            >
              <div className="group w-full md:w-5/12 relative">
                {/* ID Flotante - Toque de alta costura */}
                <span className="absolute -top-12 -left-8 font-serif italic text-8xl text-[#1A1A1A]/5 group-hover:text-[#B59E85]/10 transition-colors duration-1000 select-none">
                  {item.id}
                </span>

                <div className="border-t border-[#1A1A1A]/10 pt-10 relative z-10">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[9px] uppercase tracking-[0.6em] text-[#B59E85] font-black">
                      {item.tag}
                    </span>
                    <div className="w-12 h-[1px] bg-[#1A1A1A]/10 origin-right group-hover:scale-x-150 transition-transform duration-1000 bg-[#B59E85]/40" />
                  </div>
                  
                  <h3 className="font-serif text-4xl text-[#1A1A1A] mb-8 tracking-tight group-hover:italic transition-all duration-700">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#1A1A1A]/70 text-[14px] md:text-[15px] leading-[2] font-serif italic max-w-md">
                    {item.description}
                  </p>

                  {/* Micro-interacción: Línea de carga premium */}
                  <div className="mt-12 h-[1px] w-full bg-[#1A1A1A]/5 relative overflow-hidden">
                    <motion.div 
                      whileInView={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#B59E85]/30 to-transparent"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Elemento decorativo de fondo - Rigor Técnico */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-[#1A1A1A]/5 hidden md:block" />
        </div>
      </div>
    </section>
  );
}