"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LegalAnimadoProps {
  children: ReactNode;
  desde?: "izquierda" | "derecha";
  delay?: number;
}

export default function LegalAnimado({ 
  children, 
  desde = "izquierda", 
  delay = 0 
}: LegalAnimadoProps) {
  // Definimos la dirección del movimiento
  const xInicial = desde === "izquierda" ? -30 : 30;

  return (
    <motion.div
      initial={{ opacity: 0, x: xInicial }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }} // amount: 0.3 significa que empieza cuando el 30% del elemento es visible
      transition={{ 
        duration: 0.9, // Duración suave
        delay: delay, // Retraso opcional para crear cascada
        ease: [0.215, 0.61, 0.355, 1], // Ease-out suave y elegante
      }}
    >
      {children}
    </motion.div>
  );
}