import { SITE_URL } from "@/lib/posts";

export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Alto Hielo",
    alternateName: "Alto Hielo — Frío de altura",
    description:
      "Productor de hielo premium en Linares, Región del Maule, Chile. Cubos de 40 g y hielo frappé para bares, restaurantes, banqueteras, almacenes y hogar.",
    url: SITE_URL,
    telephone: "+56950008228",
    priceRange: "$$",
    image: `${SITE_URL}/img/frio-altura.png`,
    logo: `${SITE_URL}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Linares",
      addressRegion: "Región del Maule",
      addressCountry: "CL",
    },
    areaServed: [
      { "@type": "City", name: "Linares" },
      { "@type": "AdministrativeArea", name: "Región del Maule" },
    ],
    sameAs: ["https://www.instagram.com/altohielochile"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cubo 1 kg",
          description: "Bolsa de hielo cubo premium 1 kg, cubos de 40 g.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cubo 2 kg",
          description: "Bolsa de hielo cubo premium 2 kg, cubos de 40 g.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cubo 10 kg",
          description:
            "Bolsa de hielo cubo premium 10 kg, formato profesional para bares, restaurantes y banqueteras.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Frappé 10 kg",
          description: "Bolsa de hielo frappé 10 kg para coctelería de especialidad.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
