import LegalAnimado from "@/components/LegalAnimado";

export default function CookiesPage() {
  const secciones = [
    {
      num: "01",
      title: "Esencia Tecnológica",
      content: "Utilizamos cookies técnicas de mínima intrusión para garantizar que la experiencia de navegación mantenga los estándares de fluidez y elegancia que definen a UtiLiX. Estas piezas de código son esenciales para la arquitectura operativa del sitio."
    },
    {
      num: "02",
      title: "Métricas de Autoridad",
      content: "Implementamos herramientas de análisis avanzado para comprender cómo los líderes del sector interactúan con nuestro ecosistema. Este proceso es estrictamente anonimizado, priorizando su identidad por encima de cualquier estadística."
    }
  ];

  return (
    <>
      <LegalAnimado desde="izquierda">
        <header className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#B59E85] mb-4 block font-bold">Arquitectura Digital</span>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tighter italic leading-none">
            Protocolo <span className="text-[#B59E85]/40">Cookies.</span>
          </h1>
          <div className="h-[1px] w-20 bg-[#B59E85] mt-12"></div>
        </header>
      </LegalAnimado>

      <div className="max-w-2xl space-y-24">
        {secciones.map((item, index) => (
          <section key={item.num} className="group">
            <LegalAnimado 
              desde={index % 2 === 0 ? "izquierda" : "derecha"} 
              delay={index * 0.1}
            >
              <div className="flex gap-8 items-start">
                <span className="font-serif italic text-2xl text-[#B59E85]/40 group-hover:text-[#B59E85] transition-colors duration-700">
                  {item.num}.
                </span>
                <div>
                  <h2 className="text-[11px] uppercase tracking-[0.5em] font-black mb-6 text-[#1A1A1A]">
                    {item.title}
                  </h2>
                  <p className="font-serif text-[17px] leading-[1.9] text-[#1A1A1A]/70 italic border-l border-[#1A1A1A]/5 pl-8">
                    {item.content}
                  </p>
                </div>
              </div>
            </LegalAnimado>
          </section>
        ))}
      </div>
    </>
  );
}