import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--__font-geist-sans",
});

export const metadata: Metadata = {
  title: "Atelier | Clínica de Medicina Estética de Alta Gama",
  description: "Boutique médica dedicada a la excelencia, la precisión estética y el bienestar exclusivo.",
  keywords: ["medicina estética lujo", "clínica boutique", "estética avanzada", "Atelier"],
  authors: [{ name: "Atelier" }],
  // Això farà que es vegi bé en xarxes socials
  openGraph: {
    title: "Atelier | Medicina Estética de Alta Gama",
    description: "Espacio boutique dedicado a la excelencia y la precisión estética.",
    type: "website",
    locale: "es_ES",
  },
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