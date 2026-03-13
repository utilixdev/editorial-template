"use client";
import { useRouter } from 'next/navigation';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] relative overflow-hidden">
      {/* Detalle decorativo: Una 'U' gigante muy tenue al fondo */}
      <div className="absolute -top-20 -right-20 text-[40rem] font-serif italic text-[#1A1A1A]/[0.02] select-none pointer-events-none">
        U
      </div>

      <div className="absolute top-12 left-6 md:left-24 z-50">
        <button 
          onClick={() => router.back()} 
          className="text-[9px] uppercase tracking-[0.6em] text-[#B59E85] inline-block hover:text-[#1A1A1A] transition-all font-bold group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1 duration-500 mr-2">←</span> 
          Regresar al Estudio
        </button>
      </div>
      
      <div className="pt-32 md:pt-48 pb-20 px-6 md:px-24 relative z-10">
        <div className="max-w-4xl">
          {children} 
        </div>

        <div className="mt-40 pt-12 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row justify-between gap-6 opacity-40">
          <p className="text-[8px] uppercase tracking-[0.4em]">UtiLiX Studio — Documentación Oficial</p>
          <p className="text-[8px] uppercase tracking-[0.4em]">MMXXVI © Todos los derechos reservados</p>
        </div>
      </div>
    </main>
  );
}