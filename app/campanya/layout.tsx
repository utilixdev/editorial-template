import { Metadata } from "next";

export const metadata: Metadata = {
  // TÍTULO PLUTONIO: Ataca el problema (Instagram) y da la solución (Ingeniería)
  title: "Protocolo de Ingeniería Visual | De Instagram a la Autoridad Médica",
  description: "Exclusivo para clínicas en Serrano, Turó Park, Zagaleta y Abando. Sustituimos la mediocridad digital por activos de ingeniería visual que legitiman sus honorarios y atraen pacientes de alto valor.",
  
  // KEYWORDS SOBREALIMENTADAS: Coincidencia exacta con tus radios de Ads
  keywords: [
    "marketing clínica estética Serrano", "diseño web lujo Turó Park", 
    "branding médico La Zagaleta", "marketing estético Abando Bilbao", 
    "UtiLiX Studio", "Ingeniería Visual clínicas", "marketing médico Marbella",
    "diseño web medicina estética Pedralbes", "agencia marketing Calle Larios",
    "web premium Pozuelo Avenida Europa", "marketing médico Almagro",
    "autoridad digital médicos estética", "vender tratamientos sin instagram",
    "rediseño web clínica estética de lujo", "marketing estético Sant Cugat",
    "branding médico Paseo de la Concha", "marketing estético Valencia Colón"
  ],

  authors: [{ name: "UtiLiX Studio", url: "https://utilixstudio.com" }],
  
  // GEOTARGETING ESPECÍFICO DE CAMPAÑA
  other: {
    "geo.region": "ES",
    "geo.placename": "Madrid Serrano, Barcelona Turó Park, Marbella Zagaleta, Bilbao Abando, Málaga Larios, Valencia Colón",
    "geo.position": "40.4259;-3.6847",
    "ICBM": "40.4259, -3.6847",
  },

  openGraph: {
    title: "UtiLiX Studio | El Estándar Digital para la Élite Clínica",
    description: "Diseño de activos que legitiman sus honorarios en Serrano, Pedralbes y La Zagaleta. Auditoría de transformación disponible.",
    url: "https://utilixstudio.com/campanya",
    siteName: "UtiLiX Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image-luxury.jpg", // La recepción escultural
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
      {/* JSON-LD PLUTONIO: EL MOTOR DE BÚSQUEDA NIVEL 10/10 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UtiLiX Studio - Protocolo de Campaña",
            "image": "https://utilixstudio.com/logo-premium.png",
            "url": "https://utilixstudio.com/campanya",
            "priceRange": "€€€",
            "description": "Ingeniería Visual y rediseño de autoridad para clínicas estéticas. Especialistas en convertir perfiles de Instagram en plataformas de alta conversión para pacientes VIP.",
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
              "name": "Catálogo de Ingeniería Visual",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sustitución de Instagram por Web de Autoridad" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño Web para Clínicas en Zonas de Élite" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Filtro de Audiencia de Alto Valor" } }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}