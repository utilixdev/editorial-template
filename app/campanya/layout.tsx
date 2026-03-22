import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  // TÍTULO Y DESCRIPCIÓN DE ALTO NIVEL - Vitaminado con intención de búsqueda real
  title: "Diseño Web Clínicas Estéticas de Lujo | Ingeniería Visual y Autoridad Médica High-End",
  description: "Especialistas en el desarrollo de ecosistemas digitales para clínicas de medicina estética de élite. Transformamos la presencia volátil de Instagram en activos de autoridad de marca que eliminan la competencia y optimizan la captación de pacientes de alto valor adquisitivo.",
  
  // KEYWORDS - Inyección masiva + Contraataque a Grupo Stamina y Marketing Médico
  keywords: [
    // Intención Directa (Lo que buscan cuando necesitan una web)
    "diseño web medicina estética de lujo",
    "mejor agencia marketing médico estética",
    "crear página web para clínica estética",
    "especialistas en branding para médicos",
    "marketing para cirujanos plásticos madrid",
    "agencia diseño web premium para doctores",
    "desarrollo web sector estético barcelona",
    
    // El Lenguaje del Doctor (Problema/Solución)
    "cómo captar pacientes de alto valor estética",
    "posicionamiento seo para clínicas médicas",
    "exclusividad digital para médicos estética",
    "autoridad digital médicos estética",
    "sustituir instagram por web médica",
    "captar pacientes estética premium",
    "atraer pacientes medicina estética lujo",
    "diferenciación competitiva sector estético lujo",
    "auditoría de marca médica Turó Park",
    
    // Contraataque Estratégico (Infiltración en búsquedas de la competencia)
    "alternativa a conseguirpacientes.com",
    "branding médico de lujo vs marketing genérico",
    "agencia de marketing médico boutique españa",
    "ingeniería visual vs captación de pacientes masiva",
    "marketing sanitario para perfiles de alto standing",

    // Ubicaciones de Poder (Filtro por zona de alto nivel)
    "marketing clínica estética Serrano", 
    "diseño web lujo Turó Park", 
    "branding médico La Zagaleta", 
    "marketing estético Abando Bilbao", 
    "clínica estética Calle Larios autoridad",
    "estrategia digital sector lujo Barcelona",
    "branding médico exclusivo Marbella",
    "digitalización clínicas medicina estética Serrano",
    "marketing médico Marbella",
    "diseño web medicina estética Pedralbes",
    "agencia marketing Calle Larios",

    // Conceptos de Ingeniería Visual (Tu marca)
    "consultoría autoridad de marca médica",
    "ingeniería visual clínicas estéticas",
    "UtiLiX Studio consultoría estratégica",
    "UtiLiX Studio", 
    "Ingeniería Visual clínicas",
    "desarrollo activos digitales de alta conversión",
    "captación pacientes alto valor Madrid",
    "rediseño web clínica estética de lujo",
    "protocolo de autoridad médica digital",
    "marketing de resultados para clínicas élite"
  ],

  authors: [{ name: "UtiLiX Studio" }],  
  
  other: {
    "geo.region": "ES",
    "geo.placename": "Madrid Serrano, Barcelona Turó Park, Marbella Zagaleta, Bilbao Abando, Málaga Larios, Valencia Colón",
    "geo.position": "40.4259;-3.6847",
    "ICBM": "40.4259, -3.6847",
  },

  openGraph: {
    title: "Ingeniería Visual y Autoridad de Marca | Transición de Redes Sociales a Activos Médicos de Alto Rendimiento",
    description: "Sustituimos la dependencia social por arquitecturas digitales de alto impacto. Blindaje de marca y captación estratégica en zonas de alto valor.",
    siteName: "UtiLiX Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "UtiLiX Studio - Consultoría de Autoridad y Diseño Estratégico para Médicos",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CampanyaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 1. VITAMINA DE RENDIMIENTO: Pre-conexión a dominios de Google */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googleadservices.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />

      {/* 2. VITAMINA DE RENDIMIENTO: Script optimizado para 97+ score */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-942717987"
        strategy="lazyOnload"
      />
      <Script id="google-ads-tag" strategy="lazyOnload">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UtiLiX Studio - Ingeniería Visual y Estrategia de Marca Médica",
            "image": "https://www.utilixstudio.com/logo-premium.png",
            "priceRange": "€€€",
            "description": "Especialistas en diseño web y estrategias de autoridad para clínicas de medicina estética. Ayudamos a médicos de élite a captar pacientes premium mediante activos digitales de alto rendimiento.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Madrid",
              "addressRegion": "Madrid",
              "addressCountry": "ES"
            },
            "areaServed": [
              { "@type": "Place", "name": "5km Abando, Bilbao" },
              { "@type": "Place", "name": "5km Avenida de Europa, Pozuelo" },
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
              { "@type": "Place", "name": "3km La Zagaleta, Marbella" },
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
              "name": "Servicios de Elevación de Marca Médica",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño de Ecosistemas de Autoridad para Médicos" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auditoría de Diferenciación para Clínicas Estéticas" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Captación de Pacientes High-End para Medicina Estética" } }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}