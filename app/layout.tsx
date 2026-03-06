import type { Metadata, Viewport } from "next"; // Importamos Viewport
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist", // Corregido el nombre de la variable
});

export const metadata: Metadata = {
  title: "Atelier | Clínica de Medicina Estética de Alta Gama",
  description: "Boutique médica dedicada a la excelencia, la precisión estética y el bienestar exclusivo.",
  keywords: ["medicina estética lujo", "clínica boutique", "estética avanzada", "Atelier"],
  authors: [{ name: "Atelier" }],
  openGraph: {
    title: "Atelier | Medicina Estética de Alta Gama",
    description: "Espacio boutique dedicado a la excelencia y la precisión estética.",
    type: "website",
    locale: "es_ES",
  },
};

// BLOQUE CRÍTICO: Evita que el iPhone haga zoom al clicar inputs
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${geist.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF9F6] text-[#1a1a1a] selection:bg-[#B59E85]/20">
        {children}
      </body>
    </html>
  );
}