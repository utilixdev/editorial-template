import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Atelier | Clínica de Medicina i Estètica Avançada",
  description: "Boutique mèdica a Barcelona dedicada a l'excel·lència i la precisió estètica.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca" className={`${playfair.variable} ${geist.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF9F6] selection:bg-[#B59E85]/20">
        {/* El Navigation es podria posar aquí si vols que sigui persistent 
            sense carregar-se cada cop a les pàgines internes */}
        {children}
      </body>
    </html>
  );
}