"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function GaleriaPage() {
  const allImages = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f"
  ];

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <Navigation />
      <section className="pt-44 px-6 md:px-24">
        <span className="text-[#B59E85] text-[10px] uppercase tracking-[0.8em] mb-8 block">Capítulo V</span>
        <h1 className="font-serif text-[10vw] md:text-[7vw] leading-[0.85] tracking-tighter mb-24">El universo <br /><span className="italic opacity-40">estético.</span></h1>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 pb-40">
          {allImages.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              className="relative overflow-hidden group cursor-crosshair"
            >
              <img src={`${src}?q=80&w=1000`} className="w-full grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" alt="Atelier" />
              <div className="absolute inset-0 bg-[#B59E85]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}