"use client";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fullServices = [
  { 
    id: "01",
    cat: "Medicina Facial", 
    title: "La Arquitectura del Rostro", 
    desc: "No se trata de rellenar, sino de reposicionar. Utilizamos inductores de colágeno y ácido hialurónico de alta gama para restaurar los volúmenes perdidos siguiendo la proporción áurea de cada paciente.",
    details: ["Bio-remodelación", "Rinomodelación no quirúrgica", "Tratamiento de ojeras", "Lifting líquido"]
  },
  { 
    id: "02",
    cat: "Odontología", 
    title: "Sonrisas de Autor", 
    desc: "Diseño digital de sonrisas (DSD). Carillas de porcelana de un grosor mínimo que respetan el esmalte natural, logrando una estética blanca pero orgánica.",
    details: ["Carillas de cerámica", "Ortodoncia invisible", "Blanqueamiento láser", "Implantes de zirconio"]
  },
  { 
    id: "03",
    cat: "Wellness", 
    title: "Regeneración Celular", 
    desc: "Abordamos el envejecimiento desde el interior. Terapias de suplementación intravenosa y planes nutricionales basados en tu genética para optimizar la energía y la luminosidad de la piel.",
    details: ["Suplementación IV", "Nutrición funcional", "Gestión del estrés cortisol", "Longevidad activa"]
  }
];

export default function ServeisPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      <Navigation />
      <section className="pt-44 pb-32 px-6 md:px-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-8 block">Capítulo II</span>
          <h1 className="font-serif text-[10vw] md:text-[7vw] leading-[0.9] tracking-tighter mb-24">Especialidades <br /><span className="italic opacity-40">de autor.</span></h1>
        </motion.div>

        <div className="space-y-40 md:space-y-64">
          {fullServices.map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#1A1A1A]/5 pt-16">
              <div className="md:col-span-4">
                <span className="text-[11px] font-bold text-[#B59E85] uppercase tracking-[0.4em] mb-4 block">{s.cat}</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">{s.title}</h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-[#1A1A1A]/60 text-[16px] leading-[1.8] mb-10">{s.desc}</p>
                <ul className="space-y-4">
                  {s.details.map((d, idx) => (
                    <li key={idx} className="text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 text-[#1A1A1A]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B59E85]" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 text-right">
                <span className="font-serif text-8xl opacity-5 text-[#1A1A1A]">{s.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}