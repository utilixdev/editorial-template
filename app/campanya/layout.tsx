import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  // TÍTULO Y DESCRIPCIÓN DE ALTO NIVEL
  title: "Ingeniería Visual y Autoridad de Marca | Transición de Redes Sociales a Activos Médicos de Alto Rendimiento",
  description: "Especialistas en el desarrollo de ecosistemas digitales para clínicas de medicina estética de élite. Transformamos la presencia volátil de Instagram en activos de autoridad de marca que eliminan la competencia y optimizan la captación de pacientes de alto valor adquisitivo.",
  
  // KEYWORDS
  keywords: [
    "consultoría autoridad de marca médica",
    "ingeniería visual clínicas estéticas",
    "captación pacientes alto valor Madrid",
    "estrategia digital sector lujo Barcelona",
    "branding médico exclusivo Marbella",
    "digitalización clínicas medicina estética Serrano",
    "auditoría de marca médica Turó Park",
    "desarrollo activos digitales de alta conversión",
    "diferenciación competitiva sector estético lujo",
    "UtiLiX Studio consultoría estratégica",
    "marketing clínica estética Serrano", "diseño web lujo Turó Park", 
    "branding médico La Zagaleta", "marketing estético Abando Bilbao", 
    "sustituir instagram por web médica", "autoridad digital médicos estética",
    "rediseño web clínica estética de lujo", "captar pacientes estética premium",
    "UtiLiX Studio", "Ingeniería Visual clínicas", "marketing médico Marbella",
    "diseño web medicina estética Pedralbes", "agencia marketing Calle Larios"
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
        alt: "UtiLiX Studio - Consultoría de Autoridad y Diseño Estratégico",
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

      {/* 2. VITAMINA DE RENDIMIENTO: Cambiamos afterInteractive por lazyOnload 
          Esto hace que el script espere a que la web esté totalmente ociosa */}
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
            "name": "UtiLiX Studio - Ingeniería Visual y Estrategia de Marca",
            "image": "https://www.utilixstudio.com/logo-premium.png", // URL absoluta para mejor SEO
            "priceRange": "€€€",
            "description": "Desarrollo de protocolos de autoridad de marca para el sector médico-estético. Especialistas en desmarcar clínicas de alto nivel frente a su competencia mediante ingeniería visual y sistemas avanzados de captación digital.",
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
              "name": "Servicios de Elevación de Marca y Captación",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transición de Perfiles Sociales a Ecosistemas de Autoridad" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auditoría de Diferenciación Competitiva Médica" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ingeniería Visual de Activos para Pacientes High-End" } }
              ]
            }
          }),
        }}
      />
      {children}
    </>
  );
}