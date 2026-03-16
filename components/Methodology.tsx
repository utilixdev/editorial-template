"use client";
import { motion } from "framer-motion";

export default function Methodology({ isLanding = false }: { isLanding?: boolean }) {
  // REESCRITURA TIER 1: Ingeniería de Estatus para el estudio vs precisión para la clínica
  const studioSteps = [
    {
      no: "01",
      title: "¿Qué hacemos exactamente?",
      desc: "Diseñamos y desarrollamos presencias digitales de alto nivel para clínicas médicas y estéticas que quieren transmitir autoridad real. Analizamos su web actual, detectamos puntos de fricción y construimos una estructura visual y estratégica que eleva la percepción de su clínica desde el primer segundo."
    },
    {
      no: "02",
      title: "¿Para quién es este sistema?",
      desc: "Para clínicas privadas, centros médicos premium y especialistas que desean atraer pacientes de mayor valor. Profesionales que saben que su nivel clínico merece una presencia digital que refleje ese mismo estándar."
    },
    {
      no: "03",
      title: "¿Qué resultado se obtiene?",
      desc: "Una presencia digital diseñada para generar confianza inmediata, reforzar su posicionamiento profesional y atraer pacientes más cualificados. Su web deja de ser un simple escaparate y se convierte en una herramienta estratégica para su crecimiento."
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
      <section className="bg-[#1A1A1A] text-[#FAF9F6] pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-24 border-t border-[#1A1A1A]/5 overflow-hidden">
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
          <h2 className="font-serif text-6xl md:text-8xl tracking-tighter leading-[0.85]">
            {isLanding ? (
              <>El rigor técnico <br /> <span className="italic opacity-40">detrás del sistema.</span></>
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
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-[#B59E85]/40"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}