"use client";
import { motion } from "framer-motion";

// REESCRITURA TIER 1: Conceptos de diseño y autoridad visual
const images = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070",
    alt: "Estructuras digitales de alta gama",
    caption: "Arquitectura de Información.",
    size: "md:col-span-8 aspect-[16/9]"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    alt: "Detalles de diseño editorial",
    caption: "Tipografía y Legado.",
    size: "md:col-span-4 aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
    alt: "Interfaces puras",
    caption: "Interacción Invisible.",
    size: "md:col-start-2 md:col-span-5 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
    alt: "Identidad visual premium",
    caption: "Simbología de Estatus.",
    size: "md:col-span-5 aspect-[4/3] md:translate-y-20"
  }
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-24 bg-[#FAF9F6] overflow-hidden w-full">
      
      {/* Cabecera Editorial */}
      <div className="mb-24 md:mb-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-6 block font-bold">
            Curaduría de Proyectos
          </span>
          <h2 className="font-serif text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-[0.85]">
            El Atelier <br /> <span className="italic opacity-60">Digital.</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[320px] text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 leading-loose md:mb-4 font-medium"
        >
          Una muestra de cómo el diseño de alta fidelidad puede redefinir la percepción de una clínica de vanguardia.
        </motion.p>
      </div>

      {/* Rejilla Asimétrica */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            className={`${img.size} group relative overflow-hidden bg-[#E5E5E1]`}
          >
            <div className="w-full h-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale brightness-[1.05] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.2s] ease-out"
              />
            </div>

            {/* Overlay Editorial */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6 md:p-10 pointer-events-none">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-[#1A1A1A] text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold">
                  {img.caption}
                </p>
                <div className="w-10 h-[1px] bg-[#B59E85] mt-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-48 md:h-72 hidden md:block" />
    </section>
  );
}