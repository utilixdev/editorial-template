import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  // TÍTULO Y DESCRIPCIÓN: Ingeniería de estatus y conversión directa
  title: "Diseño Web Clínicas Estéticas | Estrategia de Autoridad y Captación High-End España",
  description: "Especialistas en el desarrollo de activos digitales de alto rendimiento para clínicas de medicina estética y cirugía plástica. Transformamos sitios web en herramientas de autoridad que legitiman sus honorarios y optimizan la captación de pacientes de alto valor adquisitivo en toda España.",
  
  // KEYWORDS: Matriz de 3 niveles (Intención, Ubicación de Poder y Competencia)
  keywords: [
    // Nivel 1: Intención de Negocio y Autoridad
    "diseño web medicina estética españa",
    "mejor agencia marketing médico estética",
    "crear página web para clínica estética",
    "marketing para cirujanos plásticos españa",
    "agencia diseño web premium para doctores",
    "especialistas en branding para médicos",
    "consultoría de conversión para clínicas",
    "diseño web médico alto rendimiento",
    
    // Nivel 2: Problema/Solución (Pain Points del Director Médico)
    "cómo captar pacientes de alto valor estética",
    "posicionamiento seo clínicas estéticas españa",
    "autoridad digital médicos estética",
    "sustituir instagram por web médica",
    "captar pacientes estética premium",
    "aumentar rentabilidad clínica estética",
    "diferenciación competitiva sector médico",
    "protocolo de autoridad médica digital",
    "marketing de resultados para clínicas",
    "auditoría de activos digitales médicos",
    "legitimar honorarios médicos online",
    
    // Nivel 3: Blindaje Geográfico (Zonas de Alta Renta)
    "marketing clínica estética Madrid", 
    "diseño web médico Barcelona", 
    "marketing médico Valencia", 
    "branding clínico Sevilla",
    "marketing médico Bilbao",
    "marketing clínica estética Málaga",
    "diseño web clínicas Zaragoza",
    "marketing médico Marbella",
    "agencia marketing médico San Sebastián",
    "branding médico exclusivo Madrid Serrano",
    "estrategia digital clínicas Barcelona Pedralbes",
    "marketing médico Pozuelo de Alarcón",
    "diseño web clínico Sant Cugat del Vallès",
    "marketing médico Milla de Oro Marbella",
    "posicionamiento seo médicos Palma de Mallorca",

    // Nivel 4: Contraataque de Marca y Términos de Nicho
    "alternativa a conseguirpacientes.com",
    "branding médico de autoridad vs marketing genérico",
    "agencia de marketing médico boutique españa",
    "ingeniería visual vs captación masiva",
    "UtiLiX Studio", 
    "Ingeniería Visual clínicas",
    "rediseño web clínica estética de autoridad",
    "estándar de excelencia digital médica"
  ],

  authors: [{ name: "UtiLiX Studio" }],  
  
  other: {
    "geo.region": "ES",
    "geo.placename": "España, Madrid, Barcelona, Valencia, Sevilla, Bilbao, Málaga, Zaragoza, Marbella, San Sebastián, Palma",
    "geo.position": "40.4168;-3.7038",
    "ICBM": "40.4168, -3.7038",
  },

  openGraph: {
    title: "Estrategia de Autoridad y Activos Digitales | UtiLiX Studio España",
    description: "Sustituimos la dependencia de redes sociales por infraestructuras de autoridad que blindan su marca y atraen pacientes de alto valor adquisitivo.",
    siteName: "UtiLiX Studio",
    url: "https://utilix.es",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "UtiLiX Studio - Ingeniería de Autoridad para Clínicas de Alto Rendimiento",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      {/* RENDIMIENTO Y CONEXIONES PRIORITARIAS */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googleadservices.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      {/* CONFIGURACIÓN GOOGLE ADS & ANALYTICS */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-942717987"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-942717987', {
            'send_page_view': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* SCHEMA.ORG: Datos Estructurados de Autoridad Nacional */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UtiLiX Studio - Ingeniería de Autoridad y Activos Médicos",
            "image": "https://www.utilixstudio.com/logo-premium.png",
            "url": "https://utilix.es",
            "priceRange": "€€€",
            "description": "Consultoría de alto nivel especializada en el diseño de activos digitales de autoridad para clínicas estéticas de lujo y centros médicos premium en España.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Madrid",
              "addressRegion": "Comunidad de Madrid",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.4168,
              "longitude": -3.7038
            },
            "areaServed": [
              { "@type": "City", "name": "Madrid" },
              { "@type": "City", "name": "Barcelona" },
              { "@type": "City", "name": "Valencia" },
              { "@type": "City", "name": "Sevilla" },
              { "@type": "City", "name": "Bilbao" },
              { "@type": "City", "name": "Málaga" },
              { "@type": "City", "name": "Zaragoza" },
              { "@type": "City", "name": "Marbella" },
              { "@type": "City", "name": "San Sebastián" },
              { "@type": "City", "name": "Palma de Mallorca" },
              { "@type": "City", "name": "Pozuelo de Alarcón" },
              { "@type": "City", "name": "Sant Cugat del Vallès" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Ingeniería Digital Médica",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño de Activos de Autoridad Digital" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auditoría de Conversión Estratégica" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estrategia de Captación de Pacientes High-End" } }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}