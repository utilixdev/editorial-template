"use client";
import { motion } from "framer-motion";

export default function Methodology({ isLanding = false }: { isLanding?: boolean }) {
  // REESCRITURA TIER 1: Textos de autoridad para el estudio vs precisión para la clínica
  const studioSteps = [
    {
      no: "01",
      title: "Auditoría de Autoridad",
      desc: "Analizamos el posicionamiento actual de su marca para identificar las brechas de prestigio entre su excelencia médica y su presencia digital."
    },
    {
      no: "02",
      title: "Despliegue de Activos",
      desc: "Ejecutamos la arquitectura visual bajo estándares de alta fidelidad, asegurando que cada interacción proyecte un estatus inalcanzable."
    },
    {
      no: "03",
      title: "Optimización de Conversión",
      desc: "Custodiamos el rendimiento del ecosistema digital, filtrando el tráfico para conectar exclusivamente con pacientes de alto valor."
    }
  ];

  const clinicSteps = [
    {
      no: "01",
      title: "Diagnóstico de Precisión",
      desc: "Evaluamos cada caso con tecnología de última generación para definir un plan de tratamiento absolutamente personalizado."
    },
    {
      no: "02",
      title: "Intervención Invisible",
      desc: "Aplicamos técnicas de mínima invasión para obtener resultados de una naturaleza sublime y una recuperación acelerada."
    },
    {
      no: "03",
      title: "Seguimiento Continuo",
      desc: "Acompañamos al paciente en todo el proceso post-tratamiento para asegurar la excelencia en los resultados a largo plazo."
    }
  ];

  const steps = isLanding ? studioSteps : clinicSteps;

  return (
    <section className="py-32 md:py-56 bg-[#1A1A1A] text-[#FAF9F6] overflow-hidden">
      <div className="px-6 md:px-24 max-w-7xl mx-auto">
        
        {/* Cabecera del método */}
        <div className="mb-24 md:mb-40 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#B59E85] text-[9px] uppercase tracking-[0.6em] mb-8 block font-medium"
          >
            {isLanding ? "El camino hacia la distinción" : "Nuestro método"}
          </motion.span>
          <h2 className="font-serif text-5xl md:text-8xl tracking-tighter leading-[0.85]">
            {isLanding ? (
              <>El rigor técnico <br /> <span className="italic opacity-40">detrás del arte.</span></>
            ) : (
              <>La ciencia de la <br /> <span className="italic opacity-40">precisión absoluta.</span></>
            )}
          </h2>
        </div>

        {/* Lista de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="relative"
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif italic text-4xl md:text-6xl text-[#B59E85]/20">{step.no}</span>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight">{step.title}</h3>
              </div>
              <p className="text-[12px] md:text-[14px] leading-[1.8] text-[#FAF9F6]/40 uppercase tracking-widest font-light">
                {step.desc}
              </p>
              
              {/* Línea decorativa de lujo: mantenemos tu animación original */}
              <div className="mt-12 h-[1px] w-full bg-[#FAF9F6]/10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-[#B59E85]/30 w-1/3"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}