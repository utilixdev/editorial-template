import { Metadata } from "next";

export const metadata: Metadata = {
  // Esto es lo que se verá en la pestaña del navegador (Adiós al catalán)
  title: "UtiLiX | Diseño Web de Alto Standing para Clínicas",
  description: "Transformamos su centro médico en una marca de élite. Arquitectura digital y diseño Tier 1 exclusivo para clínicas de medicina estética.",
  // Keywords para que Google sepa que vendes diseño, no botox
  keywords: ["diseño web clínicas lujo", "branding médico premium", "marketing estético de alto standing", "UtiLiX Studio"],
  
  // Esto es lo que aparece al compartir por WhatsApp/RRSS
  openGraph: {
    title: "UtiLiX Studio | El Estándar Digital para Clínicas de Élite",
    description: "Diseño de autor para marcas médicas que buscan distinción.",
    type: "website",
    images: [
      {
        url: "/og-image-utilix.jpg", // Asegúrate de tener una imagen elegante en /public
        width: 1200,
        height: 630,
        alt: "UtiLiX Digital Studio",
      },
    ],
  },
};

export default function CampanyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}