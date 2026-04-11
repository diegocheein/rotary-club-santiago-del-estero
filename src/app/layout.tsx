import type { Metadata } from "next";
import { Open_Sans, Merriweather } from "next/font/google";
import "./globals.css";

const body = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

const heading = Merriweather({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rotarysde.org"),
  title: {
    default:
      "Rotary Club Santiago del Estero — Desde 1931 | Distrito 4851 | Rotary International",
    template: "%s | Rotary Club Santiago del Estero",
  },
  description:
    "Rotary Club Santiago del Estero, el primer club Rotary de la provincia fundado en 1931. Distrito 4851, Rotary International. Proyectos de educación, salud, desarrollo comunitario y medio ambiente. Reuniones: miércoles 21 hs en Hotel Savoy, Santiago del Estero, Argentina.",
  keywords: [
    "Rotary Club Santiago del Estero",
    "Rotary Santiago del Estero",
    "club rotary santiago del estero",
    "club rotario santiago del estero",
    "rotary SDE",
    "rotary distrito 4851",
    "rotary international argentina",
    "rotary argentina santiago del estero",
    "servicio comunitario santiago del estero",
    "club de servicio santiago del estero",
    "voluntariado santiago del estero",
    "rotary club argentina",
    "rotary club sde",
    "club rotario sde",
    "organizacion sin fines de lucro santiago del estero",
    "proyectos sociales santiago del estero",
    "educacion santiago del estero rotary",
    "salud comunitaria santiago del estero",
    "end polio rotary argentina",
  ],
  authors: [{ name: "Rotary Club Santiago del Estero" }],
  creator: "Rotary Club Santiago del Estero",
  publisher: "Rotary Club Santiago del Estero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rotary Club Santiago del Estero — Desde 1931 | Distrito 4851",
    description:
      "El primer club Rotary de Santiago del Estero. Más de 90 años al servicio de la comunidad a través de proyectos de educación, salud y desarrollo. Distrito 4851, Rotary International.",
    type: "website",
    locale: "es_AR",
    url: "https://rotarysde.org",
    siteName: "Rotary Club Santiago del Estero",
    images: [
      {
        url: "/images/rotary-logo.png",
        width: 1875,
        height: 1020,
        alt: "Logo Rotary Club Santiago del Estero — Desde 1931",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotary Club Santiago del Estero — Desde 1931",
    description:
      "El primer club Rotary de Santiago del Estero. Más de 90 años al servicio de la comunidad.",
    images: ["/images/rotary-logo.png"],
  },
  alternates: {
    canonical: "https://rotarysde.org",
    languages: {
      "es-AR": "https://rotarysde.org",
    },
  },
  category: "nonprofit",
  other: {
    "theme-color": "#18335a",
    "geo.region": "AR-G",
    "geo.placename": "Santiago del Estero",
    "geo.position": "-27.7834;-64.2643",
    ICBM: "-27.7834, -64.2643",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://rotarysde.org/#organization",
      name: "Rotary Club Santiago del Estero",
      alternateName: ["Rotary SDE", "Club Rotario Santiago del Estero"],
      description:
        "El primer club Rotary de la provincia de Santiago del Estero, fundado en 1931. Más de 90 años al servicio de la comunidad a través de proyectos de educación, salud, desarrollo comunitario y medio ambiente.",
      foundingDate: "1931-10-15",
      url: "https://rotarysde.org",
      logo: "https://rotarysde.org/images/rotary-logo.png",
      image: "https://rotarysde.org/images/rotary-logo.png",
      areaServed: {
        "@type": "City",
        name: "Santiago del Estero",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Provincia de Santiago del Estero",
          containedInPlace: {
            "@type": "Country",
            name: "Argentina",
          },
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Peatonal Tucumán 39, Hotel Savoy",
        addressLocality: "Santiago del Estero",
        addressRegion: "Santiago del Estero",
        postalCode: "4200",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -27.7834,
        longitude: -64.2643,
      },
      memberOf: {
        "@type": "Organization",
        name: "Rotary International",
        url: "https://www.rotary.org",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Rotary International Distrito 4851",
      },
      sameAs: [
        "https://www.facebook.com/rotaryclubsde",
        "https://www.linkedin.com/company/rotary-club-santiago-del-estero/",
        "https://my.rotary.org/es/domui/club/c07293c7-2d6b-4631-bf71-31a4fe0f57ec/details",
      ],
      knowsAbout: [
        "Servicio comunitario",
        "Educación",
        "Salud comunitaria",
        "Desarrollo comunitario",
        "Medio ambiente",
        "Erradicación de la polio",
        "Voluntariado",
        "Becas educativas",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Consultas generales",
        url: "https://rotarysde.org/contacto",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://rotarysde.org/#website",
      url: "https://rotarysde.org",
      name: "Rotary Club Santiago del Estero",
      publisher: { "@id": "https://rotarysde.org/#organization" },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": "https://rotarysde.org/#webpage",
      url: "https://rotarysde.org",
      name: "Rotary Club Santiago del Estero — Desde 1931",
      isPartOf: { "@id": "https://rotarysde.org/#website" },
      about: { "@id": "https://rotarysde.org/#organization" },
      inLanguage: "es-AR",
    },
    {
      "@type": "Event",
      name: "Reunión semanal — Rotary Club Santiago del Estero",
      description:
        "Reunión semanal abierta del Rotary Club Santiago del Estero. Todos están invitados a conocernos.",
      startDate: "2026-04-15T21:00:00-03:00",
      endDate: "2026-04-15T23:00:00-03:00",
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        byDay: "https://schema.org/Wednesday",
        startTime: "21:00:00-03:00",
        endTime: "23:00:00-03:00",
      },
      eventAttendanceMode:
        "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Hotel Savoy — Salón de Eventos",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Peatonal Tucumán 39",
          addressLocality: "Santiago del Estero",
          addressRegion: "Santiago del Estero",
          postalCode: "4200",
          addressCountry: "AR",
        },
      },
      organizer: { "@id": "https://rotarysde.org/#organization" },
      performer: {
        "@type": "Organization",
        name: "Rotary Club Santiago del Estero",
        url: "https://rotarysde.org",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "ARS",
        availability: "https://schema.org/InStock",
        url: "https://rotarysde.org/contacto",
      },
      image: "https://rotarysde.org/images/rotary-logo.png",
      isAccessibleForFree: true,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://rotarysde.org",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${body.variable} ${heading.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://rotarysde.org" />
      </head>
      <body className="min-h-full flex flex-col font-body overflow-x-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
