"use client"

import { motion } from "framer-motion"

export default function ClinicTransformationAudit() {
  const problems = [
    "Invisibilidad en búsquedas locales y nacionales",
    "Falta de legitimación para honorarios altos",
    "Estructura de conversión obsoleta",
    "Fuga de pacientes hacia la competencia",
    "Dependencia crítica de redes sociales volátiles"
  ]

  return (
    <section id="auditoria" className="relative py-24 px-6 md:px-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 text-[18vw] font-serif italic text-[#1A1A1A]">
          Authority
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BLOQUE PROBLEMA */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start mb-24">
          <div className="md:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-[#B59E85] font-bold"
            >
              Diagnóstico Estratégico
            </motion.span>

            <h2 className="font-serif text-5xl md:text-8xl tracking-tighter leading-[0.85] text-[#1A1A1A] mt-6">
              ¿Por qué su clínica <br/>
              <span className="italic opacity-40 text-[0.9em]">NO es el referente?</span>
            </h2>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 border-b border-[#1A1A1A]/10 pb-4 group hover:border-[#B59E85]/40 transition-colors"
                >
                  <span className="text-[#B59E85] font-serif text-[20px] opacity-40 group-hover:opacity-100">
                    0{index + 1}
                  </span>
                  <p className="uppercase tracking-[0.25em] text-[10px] font-semibold text-[#1A1A1A]/70">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-10 p-6 bg-white/40 border border-[#1A1A1A]/5 backdrop-blur-sm"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] leading-[2] text-[#1A1A1A]/60 font-medium">
                CUANDO UNA CLÍNICA PROYECTA UNA PRESENCIA DIGITAL GENÉRICA, PIERDE EL CONTROL DE SUS PRECIOS. LA AUTORIDAD DIGITAL ES EL ÚNICO CAMINO HACIA LA RENTABILIDAD HIGH-END.
              </p>
            </motion.div>
          </div>
        </div>

        {/* BLOQUE SOLUCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 text-center w-full">
            <span className="text-[9px] uppercase tracking-[0.5em] text-[#B59E85] mb-4 block font-black">
              Protocolo de Autoridad Nacional
            </span>
            <h3 className="font-serif text-[28px] md:text-[48px] leading-[1.1] text-[#1A1A1A] italic max-w-3xl mx-auto">
              Convertimos su rigor médico en un activo digital de alta conversión que domina el mercado.
            </h3>
          </div>

          {/* CONTENEDOR DE IMAGEN */}
          <div className="relative group w-full max-w-5xl mx-auto">
            <div className="relative bg-[#1A1A1A] rounded-xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-white/10">
              <img 
                src="/after.jpg?v=4" 
                alt="UtiLiX Studio - Activo de Autoridad Médica"
                className="w-full h-auto block opacity-95 transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-30 pointer-events-none" />
            </div>

            {/* DETALLES DE AUTORÍA */}
            <div className="mt-6 flex justify-between items-center px-2">
                <div className="flex gap-12 md:gap-12">
                  <div className="flex flex-col">
                    <span className="text-[4px] md:text-[6px] uppercase tracking-[0.3em] text-[#1A1A1A]/40">Intervención</span>
                    <span className="text-[6px] md:text-[8px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]">Arquitectura de Autoridad</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[5px] md:text-[6px] uppercase tracking-[0.3em] text-[#1A1A1A]/40">Estado</span>
                    <span className="text-[6px] md:text-[8px] uppercase tracking-[0.2em] font-bold text-[#B59E85]">Liderazgo Consolidado</span>
                  </div>
                </div>
                <p className="text-[8px] md:text-[10px] font-serif italic text-[#B59E85] text-base md:text-xl opacity-80">UtiLiX Studio — Spain</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}