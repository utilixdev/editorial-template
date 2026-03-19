import { Metadata } from "next";

export const metadata: Metadata = {
  // TÍTULO: Ataca el estatus y la autoridad
  title: "De Instagram a la Autoridad Médica | Protocolo de Ingeniería Visual",
  description: "Especialistas en elevar clínicas estéticas que dependen de Instagram o webs obsoletas. Rediseño de activos digitales para captar pacientes de alto valor en Serrano, Turó Park, Zagaleta y Abando.",
  
  keywords: [
    "marketing clínica estética Serrano", "diseño web lujo Turó Park", 
    "branding médico La Zagaleta", "marketing estético Abando Bilbao", 
    "sustituir instagram por web médica", "autoridad digital médicos estética",
    "rediseño web clínica estética de lujo", "captar pacientes estética premium",
    "UtiLiX Studio", "Ingeniería Visual clínicas", "marketing médico Marbella",
    "diseño web medicina estética Pedralbes", "agencia marketing Calle Larios"
  ],

  authors: [{ name: "UtiLiX Studio", url: "https://www.utilixstudio.com" }],
  
  other: {
    "geo.region": "ES",
    "geo.placename": "Madrid Serrano, Barcelona Turó Park, Marbella Zagaleta, Bilbao Abando, Málaga Larios, Valencia Colón",
    "geo.position": "40.4259;-3.6847",
    "ICBM": "40.4259, -3.6847",
  },

  openGraph: {
    title: "UtiLiX Studio | El Estándar Digital para la Élite Clínica",
    description: "Sustituimos la imagen 'pobre' de Instagram por activos de ingeniería visual. Exclusivo para clínicas de alto valor.",
    url: "https://www.utilixstudio.com/campanya", // URL Absoluta con WWW
    siteName: "UtiLiX Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://www.utilixstudio.com/og-image-luxury.jpg", // URL Absoluta para evitar pantalla en blanco
        width: 1200,
        height: 630,
        alt: "UtiLiX Studio - Ingeniería Visual Premium",
      },
    ],
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

export default function CampanyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UtiLiX Studio - Protocolo de Campaña",
            "image": "https://www.utilixstudio.com/logo-premium.png",
            "url": "https://www.utilixstudio.com/campanya",
            "priceRange": "€€€",
            "description": "Ingeniería Visual para elevar marcas médicas. Transformamos clínicas con imagen 'pobre' en Instagram en autoridades digitales de alto standing.",
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
              "name": "Protocolo de Transformación Clínica",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sustitución de Instagram por Activos de Autoridad" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ingeniería Visual para Marcas Médicas de Lujo" } }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}