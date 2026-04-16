export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  category: "Local" | "Guía B2B" | "Guía B2C";
  image: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    slug: "venta-de-hielo-en-linares",
    title: "Venta de hielo en Linares: formatos, pedidos y cobertura",
    description:
      "Venta de hielo premium en Linares. Cubos de 40 g y hielo frappé en bolsas de 1 kg, 2 kg y 10 kg. Pedido por WhatsApp y entrega coordinada.",
    date: "2026-04-16",
    readMinutes: 4,
    category: "Local",
    image: "/img/brindis.jpg",
    excerpt:
      "Todo lo que necesitas saber para comprar hielo Alto Hielo en Linares: formatos, pedido y cobertura.",
  },
  {
    slug: "donde-comprar-hielo-premium-en-linares-maule",
    title: "Dónde comprar hielo premium en Linares, Región del Maule",
    description:
      "Guía para elegir hielo premium en Linares. Diferencias entre supermercado, almacén y proveedor especializado. Criterios de calidad que importan.",
    date: "2026-04-16",
    readMinutes: 5,
    category: "Local",
    image: "/img/cristal.png",
    excerpt:
      "Supermercado, almacén o proveedor directo: dónde conviene comprar hielo premium en Linares y qué mirar antes de elegir.",
  },
  {
    slug: "hielo-a-domicilio-en-linares",
    title: "Hielo a domicilio en Linares: cómo funciona la entrega",
    description:
      "Entrega de hielo a domicilio en Linares. Formatos de 1 kg, 2 kg y 10 kg. Coordinación por WhatsApp, horarios y frecuencias para bares, restaurantes y hogar.",
    date: "2026-04-16",
    readMinutes: 4,
    category: "Local",
    image: "/img/servir.png",
    excerpt:
      "Pedido, tiempos y logística de la entrega de hielo Alto Hielo en Linares para hogar, eventos y negocios.",
  },
  {
    slug: "guia-hielo-bar-restaurante-banquetera",
    title:
      "Cómo elegir hielo para bar, restaurante o banquetera: guía completa",
    description:
      "Guía profesional para elegir hielo en bares, restaurantes y banqueteras: tipos, tamaño, agua, consumo, almacenamiento, transporte y errores comunes.",
    date: "2026-04-16",
    readMinutes: 14,
    category: "Guía B2B",
    image: "/img/aperol.jpg",
    excerpt:
      "Tipos de hielo, tamaño ideal, cálculo de consumo por evento, almacenamiento y errores que afectan tu servicio.",
  },
  {
    slug: "guia-completa-del-hielo",
    title:
      "Guía completa del hielo: tipos, duración, conservación y usos",
    description:
      "Guía completa sobre el hielo: tipos, cuánto dura, cómo conservarlo, qué formato elegir según la ocasión y su rol en los tragos.",
    date: "2026-04-16",
    readMinutes: 12,
    category: "Guía B2C",
    image: "/img/amigos.png",
    excerpt:
      "Tipos, duración, conservación y usos del hielo. Todo lo que necesitas saber para elegir bien.",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, n = 2): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, n);
}

export const SITE_URL = "https://altohielo.vercel.app";
