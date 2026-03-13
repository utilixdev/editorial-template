import LegalAnimado from "@/components/LegalAnimado";

export default function AvisoLegalPage() {
  const secciones = [
    {
      num: "01",
      title: "Propiedad del Estudio",
      content: "UtiLiX Studio es la identidad comercial bajo la cual opera Baruc Nsue. Este espacio es el nodo central de servicios de ingeniería visual y consultoría estratégica de alto nivel para el sector salud."
    },
    {
      num: "02",
      title: "Blindaje Intelectual",
      content: "Cada activo visual, estructura de código y concepto tipográfico en este dominio es propiedad exclusiva de UtiLiX Studio. La excelencia no se replica: cualquier uso no autorizado será gestionado bajo protocolos legales de propiedad intelectual."
    }
  ];

  return (
    <>
      <LegalAnimado desde="derecha">
        <header className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#B59E85] mb-4 block font-bold">Marco Identitario</span>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tighter italic leading-none">
            Aviso <span className="text-[#B59E85]/40">Legal.</span>
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