import LegalAnimado from "@/components/LegalAnimado"; // Ajusta la ruta de importación

export default function PrivacidadPage() {
  const secciones = [
    {
      num: "I",
      title: "Ética de Datos",
      content: "En UtiLiX Studio, la discreción no es una opción, es nuestro pilar fundamental. Los datos de su clínica no son tratados como simple información, sino como activos de propiedad intelectual protegidos bajo estándares de alta seguridad."
    },
    {
      num: "II",
      title: "Captación de Activos",
      content: "Recogemos únicamente los datos necesarios para iniciar el protocolo de autoridad: nombre de la entidad, activos digitales (Web/Instagram) y contacto directo. Esta información es el combustible para nuestra ingeniería visual personalizada."
    },
    {
      num: "III",
      title: "Derechos de Control",
      content: "Como titular de la clínica, usted mantiene el control soberano. En cualquier momento puede solicitar la auditoría o eliminación de su historial escribiendo a nuestra línea directa: info@utilix.es."
    }
  ];

  return (
    <>
      {/* Animación para el Header */}
      <LegalAnimado desde="izquierda">
        <header className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.8em] text-[#B59E85] mb-4 block font-bold">Protocolo de Confidencialidad</span>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tighter italic leading-none">
            Privacidad <span className="text-[#B59E85]/40">&</span> Datos.
          </h1>
          <div className="h-[1px] w-20 bg-[#B59E85] mt-12"></div>
        </header>
      </LegalAnimado>

      <div className="max-w-2xl space-y-24">
        {secciones.map((item, index) => (
          <section key={item.num} className="group">
            {/* Animación para cada sección en cascada */}
            <LegalAnimado 
              desde={index % 2 === 0 ? "izquierda" : "derecha"} // Alterna la dirección (izquierda, derecha, izquierda...)
              delay={index * 0.1} // Pequeño retraso para que aparezcan uno tras otro si están cerca
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