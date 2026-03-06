"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Añadimos la prop isLanding
export default function Navigation({ isLanding = false }: { isLanding?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // REESCRITURA TIER 1: Si es landing, solo permitimos navegación interna (Anclas)
  const links = isLanding ? [
    { name: "Servicios", href: "#servicios" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Filosofía", href: "#filosofia" },
    { name: "Contacto", href: "#contacto" },
  ] : [
    { name: "Inicio", href: "/" },
    { name: "La Clínica", href: "/clinica" },
    { name: "Servicios", href: "/servicios" },
    { name: "Metodología", href: "/metodologia" },
    { name: "Filosofía", href: "/filosofia" },
    { name: "Galería", href: "/galeria" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] flex justify-between items-center p-6 md:p-10 transition-all duration-700 ${isOpen ? 'mix-blend-normal' : 'mix-blend-difference'}`}>
        
        <Link href={isLanding ? "#" : "/"} onClick={() => setIsOpen(false)}>
          <span className="font-serif italic text-2xl tracking-tighter uppercase text-white">UtiLiX.</span>
        </Link>
        
        {/* En la landing, podemos elegir ocultar el menú hamburguesa o dejarlo solo con las anclas */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 group outline-none"
          >
            <div className="overflow-hidden hidden md:block">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white block transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out font-bold">
                {isLanding ? "Menú" : "Explorar"}
              </span>
            </div>
            
            <div className="flex flex-col gap-1.5 items-end">
              <div className="w-8 h-[1px] bg-white group-hover:w-10 transition-all duration-500"></div>
              <div className="w-5 h-[1px] bg-white group-hover:w-10 transition-all duration-500 delay-75"></div>
            </div>
          </button>
        )}
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0A0A0A] z-[110] flex flex-col justify-center items-center h-screen w-screen"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 group p-4 outline-none"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute w-8 h-[1px] bg-white/60 rotate-45 group-hover:rotate-[135deg] group-hover:bg-white transition-all duration-700"></div>
                <div className="absolute w-8 h-[1px] bg-white/60 -rotate-45 group-hover:-rotate-[45deg] group-hover:bg-white transition-all duration-700"></div>
              </div>
            </button>

            <ul className="flex flex-col items-center gap-3 md:gap-4 mb-12">
              {links.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.2, duration: 0.8 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`relative font-serif text-3xl md:text-5xl transition-all duration-500 group inline-block ${pathname === link.href ? 'text-white italic' : 'text-white/30 hover:text-white'}`}
                  >
                    <span className="relative z-10 group-hover:italic transition-all inline-block group-hover:-translate-y-1 transform duration-500">
                      {link.name}
                    </span>
                    <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[0.5px] bg-[#C5A47E] transition-all duration-500 ease-in-out ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link 
                href={isLanding ? "#contacto" : "/reserva"}
                onClick={() => setIsOpen(false)}
                className="px-10 py-4 border border-[#B59E85] text-[#B59E85] text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-[#B59E85] hover:text-white transition-all duration-700 shadow-lg shadow-[#B59E85]/10"
              >
                {isLanding ? "Iniciar Auditoría" : "Reservar Cita"}
              </Link>
            </motion.div>

            {/* Footer del Menú: Simplificado para landing */}
            <div className="absolute bottom-12 w-full max-w-6xl px-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-white/20 text-[8px] uppercase tracking-[0.4em]">{isLanding ? "UtiLiX Studio" : "Barcelona"}</span>
                  <p className="text-white/60 text-[9px] uppercase tracking-[0.2em] text-center md:text-left">
                    {isLanding ? "Identity & High Fidelity Digital Assets" : "Passeig de Gràcia, 92"}
                  </p>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
                      <a href="#" className="hover:text-[#B59E85] transition-colors">Instagram</a>
                      <a href="#" className="hover:text-[#B59E85] transition-colors">LinkedIn</a>
                    </div>
                    <span className="text-white/10 text-[8px] uppercase tracking-[0.8em]">MMXXVI</span>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}