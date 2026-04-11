import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Rotary Club Santiago del Estero",
  description:
    "Contactá al Rotary Club Santiago del Estero. Formulario de contacto directo. Reuniones: miércoles 21:00 hs en Hotel Savoy, Peatonal Tucumán 39, Santiago del Estero. El primer club Rotary de la provincia, Distrito 4851.",
  openGraph: {
    title: "Contacto — Rotary Club Santiago del Estero",
    description:
      "Contactá al Rotary Club Santiago del Estero. Reuniones: miércoles 21:00 hs en Hotel Savoy, Santiago del Estero.",
    url: "https://rotarysde.org/contacto",
  },
  alternates: {
    canonical: "https://rotarysde.org/contacto",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contacto — Rotary Club Santiago del Estero",
      url: "https://rotarysde.org/contacto",
      mainEntity: {
        "@type": "Organization",
        name: "Rotary Club Santiago del Estero",
        url: "https://rotarysde.org",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Consultas generales",
          url: "https://rotarysde.org/contacto",
          availableLanguage: "Spanish",
          areaServed: "Santiago del Estero, Argentina",
        },
      },
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Contacto",
          item: "https://rotarysde.org/contacto",
        },
      ],
    },
  ],
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}
