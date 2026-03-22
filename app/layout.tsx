import type { Metadata, Viewport } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Ingeniería Visual | Más que Marketing para Clínicas Estéticas en Madrid y España",
    template: "%s | UtiLiX Studio"
  },
  
  description: "Transformamos perfiles de Instagram en autoridades médicas. Rediseño web clínica estética de lujo en Madrid (Serrano, Almagro, La Moraleja), Barcelona (Turó Park, Pedralbes), Marbella (La Zagaleta) y Bilbao (Abando). Especialistas en captación de pacientes de alto valor.",
  
  keywords: [
    "marketing clínica estética Madrid", 
    "diseño web clínica estética Serrano", 
    "página web medicina estética Bilbao", 
    "agencia marketing clínica estética Málaga",
    "rediseño web clínica de lujo",
    "mejorar web clínica estética",
    "web premium clínica estética Pozuelo",
    "digitalizar clínica estética",
    "vender tratamientos estética sin Instagram",
    "autoridad digital médicos estética",
    "UtiLiX Ingeniería Visual",
    "marketing médico La Moraleja",
    "marketing médico Turó Park Barcelona",
    "marketing médico Pedralbes",
    "marketing médico La Zagaleta Marbella",
    "marketing médico Puerto Banús",
    "marketing médico Paseo de la Concha San Sebastián",
    "marketing médico Abando Bilbao",
    "marketing médico Calle Larios Málaga",
    "marketing médico Barrio de Salamanca"
  ],

  authors: [{ name: "UtiLiX Studio", url: "https://utilixstudio.com" }],
  
  verification: {
    google: "pKRmjZlmuwjKeM2gPFx329zx1kFqddb8MQyfWavqA0g",
  },

  other: {
    "geo.region": "ES",
    "geo.placename": "Madrid, Barcelona, Marbella, Bilbao, Valencia, Málaga, San Sebastián",
    "geo.position": "40.4259;-3.6847",
    "ICBM": "40.4259, -3.6847",
  },

  openGraph: {
    title: "UtiLiX Studio | Del Instagram a la Autoridad Médica",
    description: "Diseño web y marketing de élite para clínicas en las zonas más exclusivas de España: Serrano, Turó Park, La Zagaleta y Abando.",
    url: "https://utilixstudio.com",
    siteName: "UtiLiX Studio",
    locale: "es_ES",
    type: "website",
    images: [{
      url: "https://utilixstudio.com/og-image-luxury.jpg",
      width: 1200,
      height: 630,
      alt: "UtiLiX Studio - Ingeniería Visual Premium"
    }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1A1A1A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${geist.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FAF9F6] text-[#1a1a1a] selection:bg-[#B59E85]/20">
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "UtiLiX Studio",
              "image": "https://utilixstudio.com/logo-premium.png",
              "url": "https://utilixstudio.com",
              "priceRange": "€€€",
              "description": "Especialistas en Ingeniería Visual y marketing de alta gama. Sustituimos perfiles de Instagram y webs obsoletas por activos de autoridad médica en zonas de máximo valor.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressRegion": "Madrid",
                "addressCountry": "ES"
              },
              "areaServed": [
                { "@type": "Place", "name": "5km Abando, Bilbao" },
                { "@type": "Place", "name": "5km Avenida de Europa, Pozuelo de Alarcón" },
                { "@type": "Place", "name": "5km Calle Almagro, Madrid" },
                { "@type": "Place", "name": "5km Calle Larios, Málaga" },
                { "@type": "Place", "name": "5km Calle Serrano, Madrid" },
                { "@type": "Place", "name": "5km Calle de Colón, Valencia" },
                { "@type": "Place", "name": "5km Carrer de l'Eixample, Valencia" },
                { "@type": "Place", "name": "5km Carrer de la Pau, València" },
                { "@type": "Place", "name": "5km L'illa Diagonal, Barcelona" },
                { "@type": "Place", "name": "5km El Limonar, Málaga" },
                { "@type": "Place", "name": "5km El Viso, Madrid" },
                { "@type": "Place", "name": "5km La Moraleja, Alcobendas" },
                { "@type": "Place", "name": "3km La Zagaleta, Benahavís" },
                { "@type": "Place", "name": "5km Nueva Andalucía, Marbella" },
                { "@type": "Place", "name": "5km Paseo de la Castellana, Madrid" },
                { "@type": "Place", "name": "5km Paseo de la Concha, San Sebastián" },
                { "@type": "Place", "name": "5km Passeig de Gràcia, Barcelona" },
                { "@type": "Place", "name": "5km Pedralbes, Barcelona" },
                { "@type": "Place", "name": "5km Puerto Banús, Marbella" },
                { "@type": "Place", "name": "5km Rambla Nova, Tarragona" },
                { "@type": "Place", "name": "5km S'Agaró, Girona" },
                { "@type": "Place", "name": "5km Sant Cugat del Vallès, Barcelona" },
                { "@type": "Place", "name": "5km Sarrià, Barcelona" },
                { "@type": "Place", "name": "5km Sierra Blanca, Marbella" },
                { "@type": "Place", "name": "5km Barrio de Salamanca (General Oráa), Madrid" },
                { "@type": "Place", "name": "5km Turó Park (Pau Casals), Barcelona" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Protocolos de Exclusividad Digital",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rediseño web clínica estética obsoleta" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migración de Instagram a Web Médica Premium" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing médico-estético en zonas de lujo" } }
                ]
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}