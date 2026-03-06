"use client";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070",
    alt: "Espacios de consulta minimalistas",
    caption: "La armonía del espacio.",
    size: "md:col-span-8 aspect-[16/9]"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    alt: "Detalles de diseño",
    caption: "Precisión en los detalles.",
    size: "md:col-span-4 aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
    alt: "Tecnología avanzada",
    caption: "Innovación invisible.",
    size: "md:col-start-2 md:col-span-5 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
    alt: "Equipo médico",
    caption: "Excelencia humana.",
    size: "md:col-span-5 aspect-[4/3] md:translate-y-20"
  }
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-24 bg-[#FAF9F6] overflow-hidden w-full">
      
      {/* Cabecera de la Galería - Estilo Editorial */}
      <div className="mb-24 md:mb-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-6 block font-medium">
            Inmersión Visual
          </span>
          <h2 className="font-serif text-6xl md:text-8xl text-[#1A1A1A] tracking-tighter leading-[0.85]">
            El Atelier <br /> <span className="italic opacity-60">Visual.</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[280px] text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#1A1A1A]/40 leading-relaxed md:mb-4"
        >
          Una inmersión en nuestros espacios diseñados para su tranquilidad y seguridad.
        </motion.p>
      </div>

      {/* Rejilla Asimétrica - El 'core' del Tier 1 */}
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
            {/* Contenedor de la imagen con zoom suave */}
            <div className="w-full h-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale brightness-[1.02] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] ease-out shadow-2xl"
              />
            </div>

            {/* Overlay Editorial - Degradado de luz */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6 md:p-10 pointer-events-none">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-[#1A1A1A] text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-semibold">
                  {img.caption}
                </p>
                <div className="w-8 h-[1px] bg-[#B59E85] mt-3" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Espaciado final para balance visual */}
      <div className="h-48 md:h-72 hidden md:block" />
    </section>
  );
}