import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Article from "@/components/blog/Article";
import FAQ from "@/components/blog/FAQ";
import CTAContacto from "@/components/blog/CTAContacto";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { getPost } from "@/lib/posts";

const SLUG = "venta-de-hielo-en-linares";
const post = getPost(SLUG)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `/blog/${SLUG}`,
    type: "article",
    images: [{ url: post.image }],
  },
};

const faqs = [
  {
    q: "¿Dónde se vende el hielo Alto Hielo en Linares?",
    a: "Alto Hielo vende directamente al público y a negocios en Linares. Coordinamos pedido y entrega por WhatsApp al +56 9 5000 8228.",
  },
  {
    q: "¿Qué formatos de hielo están disponibles?",
    a: "Cubos premium de 40 gramos en bolsas de 1 kg, 2 kg y 10 kg, y hielo frappé en bolsas de 10 kg para coctelería.",
  },
  {
    q: "¿Hacen entrega a domicilio?",
    a: "Sí. Coordinamos entrega en Linares para hogar, bares, restaurantes, banqueteras y almacenes. Ajustamos horarios según tu servicio.",
  },
  {
    q: "¿Cuánto cuesta el hielo?",
    a: "El precio depende del formato y la frecuencia de pedido. Cotizamos por WhatsApp en minutos, sin compromiso.",
  },
  {
    q: "¿Se puede pedir hielo para eventos puntuales?",
    a: "Sí. Trabajamos con banqueteras y organizadores para eventos privados y corporativos. Recomendamos avisar con al menos 24 horas de anticipación.",
  },
];

export default function Page() {
  return (
    <main>
      <Nav />
      <Article
        post={post}
        tldr="Alto Hielo vende hielo premium en Linares: cubos de 40 g en bolsas de 1 kg, 2 kg y 10 kg, y hielo frappé de 10 kg. Pedido por WhatsApp (+56 9 5000 8228) y entrega coordinada para hogar, bares, restaurantes, banqueteras y almacenes."
      >
        <p>
          La venta de hielo en Linares tiene una particularidad: la mayoría
          del hielo disponible en supermercados y almacenes viene en bolsas
          de cubos pequeños, irregulares, con agua de calidad variable y
          poca continuidad de stock. Alto Hielo nació para cambiar eso en la
          Región del Maule, produciendo hielo premium con un estándar
          consistente: cubos firmes de 40 gramos, agua filtrada y bolsas
          pensadas para que los cubos no se peguen entre sí.
        </p>

        <h2>Qué vendemos</h2>
        <p>
          Producimos dos tipos de hielo para distintos usos:
        </p>
        <ul>
          <li>
            <strong>Cubos de 40 g</strong>, ideales para bebidas frías,
            tragos, jugos, café helado y eventos. Duran más en el vaso y
            diluyen menos el sabor. Disponibles en bolsas de 1 kg, 2 kg y 10 kg.
          </li>
          <li>
            <strong>Hielo frappé</strong>, molido y de textura consistente.
            Pensado para coctelería avanzada, frozen, granizados y
            presentaciones de bar. Bolsa de 10 kg.
          </li>
        </ul>

        <h2>Formatos y para quién</h2>
        <p>
          Cada formato está pensado para una necesidad específica. Elegir
          bien simplifica la logística y evita quiebres de stock.
        </p>
        <ul>
          <li>
            <strong>Bolsa 1 kg:</strong> hogar, reuniones pequeñas, uso
            esporádico. Cabe en cualquier congelador.
          </li>
          <li>
            <strong>Bolsa 2 kg:</strong> eventos medianos, asados y
            celebraciones. Formato más pedido en el canal familiar.
          </li>
          <li>
            <strong>Bolsa 10 kg (cubo):</strong> bares, restaurantes,
            banqueteras, almacenes, discoteques y eventos corporativos.
          </li>
          <li>
            <strong>Bolsa 10 kg (frappé):</strong> coctelería especializada,
            barras de hoteles y cafeterías que ofrecen bebidas frozen.
          </li>
        </ul>

        <h2>Cómo pedir</h2>
        <p>
          Nuestro proceso es simple y sin carro de compras:
        </p>
        <ol>
          <li>Escríbenos por WhatsApp al +56 9 5000 8228.</li>
          <li>Cuéntanos formato, cantidad y fecha de entrega.</li>
          <li>
            Confirmamos precio y coordinamos la entrega en Linares, o el
            retiro si prefieres.
          </li>
        </ol>
        <p>
          Para negocios con demanda continua recomendamos fijar una
          frecuencia semanal: te aseguramos stock y evitas llamadas de
          último minuto.
        </p>

        <h2>Por qué importa el hielo</h2>
        <p>
          El hielo no es un insumo neutro. Un cubo pequeño se derrite en
          minutos y diluye el trago: el sabor baja, la bebida se aguacha y
          la experiencia pierde consistencia. Un cubo denso y más grande
          mantiene la temperatura por más tiempo, con una dilución
          controlada. Por eso estandarizamos nuestros cubos en 40 gramos:
          rinden más, enfrían mejor y se ven prolijos en el vaso.
        </p>

        <p>
          El agua también cuenta. Usamos agua filtrada antes de congelar
          para que el hielo sea transparente, sin sabor y sin sedimentos.
          Esto es especialmente importante en bebidas donde el hielo se
          consume junto con el líquido, como gin tonics, aperitivos o agua
          mineral.
        </p>

        <h2>Cobertura en Linares</h2>
        <p>
          Entregamos en Linares ciudad y alrededores. Para eventos o
          pedidos grandes podemos coordinar rutas especiales. Si tu negocio
          está fuera del radio habitual, escríbenos — evaluamos y te
          confirmamos sin vueltas.
        </p>

        <CTAContacto
          message="Hola Alto Hielo, quiero cotizar hielo para Linares."
          heading="Consulta precios y entrega"
          body="Escríbenos por WhatsApp con el formato y cantidad que necesitas. Respondemos en minutos."
        />

        <p className="mt-10 text-sm text-ink/60">
          ¿Buscas más información?{" "}
          <Link href="/blog/donde-comprar-hielo-premium-en-linares-maule">
            Dónde comprar hielo premium en Linares, Maule
          </Link>{" "}
          o{" "}
          <Link href="/blog/hielo-a-domicilio-en-linares">
            cómo funciona el hielo a domicilio
          </Link>
          .
        </p>

        <FAQ items={faqs} />
      </Article>

      <RelatedPosts slug={SLUG} />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
