import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-[#FAF9F6] relative w-full overflow-hidden">
      <Navigation />
      
      {/* Portada original de la clínica */}
      <Hero isLanding={false} />
      
      {/* Propòsit mèdic i benestar */}
      <Philosophy isLanding={false} />
      
      {/* Com treballem a la clínica */}
      <Methodology />
      
      {/* Catàleg de serveis mèdics */}
      <Services />
      
      {/* Visió de l'espai i instal·lacions */}
      <Gallery />
      
      {/* Contacte i Footer */}
      <Footer />
    </main>
  );
}