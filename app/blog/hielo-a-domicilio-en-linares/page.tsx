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

const SLUG = "hielo-a-domicilio-en-linares";
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
    q: "¿Cuánto se demora la entrega de hielo en Linares?",
    a: "Coordinamos entrega el mismo día si avisas con tiempo. Para pedidos grandes o eventos, recomendamos agendar con 24 horas de anticipación.",
  },
  {
    q: "¿Cuál es el mínimo de pedido a domicilio?",
    a: "Depende de la zona. Escríbenos por WhatsApp al +56 9 5000 8228 y te confirmamos el mínimo que aplica según tu dirección.",
  },
  {
    q: "¿Entregan a fuera de Linares ciudad?",
    a: "Atendemos Linares y alrededores. Para localidades cercanas evaluamos caso a caso — escríbenos con tu dirección y volumen.",
  },
  {
    q: "¿Tienen contratos fijos para bares y restaurantes?",
    a: "Sí. Coordinamos entregas recurrentes (diarias, semanales o por frecuencia acordada) para que nunca te quedes sin stock.",
  },
  {
    q: "¿Cómo pago el pedido?",
    a: "Confirmamos el medio de pago al cotizar. Trabajamos con transferencia y otros medios según el cliente.",
  },
];

export default function Page() {
  return (
    <main>
      <Nav />
      <Article
        post={post}
        tldr="Alto Hielo entrega hielo premium a domicilio en Linares. Coordinamos por WhatsApp al +56 9 5000 8228, ajustamos horarios y frecuencias según tu necesidad, y ofrecemos contratos fijos para negocios con demanda continua."
      >
        <p>
          El hielo a domicilio resuelve un problema simple: no tienes que
          salir a buscarlo, no tienes que cargar kilos en el maletero y,
          sobre todo, no dependes de la calidad que haya en el local más
          cercano. Llega lo que pides, en el formato que pediste, cuando
          lo necesitas.
        </p>

        <h2>Cómo funciona la entrega</h2>
        <p>
          Nuestro proceso para entregas en Linares tiene cuatro pasos:
        </p>
        <ol>
          <li>
            <strong>Pedido por WhatsApp.</strong> Escríbenos con formato,
            cantidad, dirección y fecha/hora ideal.
          </li>
          <li>
            <strong>Cotización y confirmación.</strong> Te damos precio y
            ventana de entrega en minutos.
          </li>
          <li>
            <strong>Entrega.</strong> Llevamos el pedido a tu puerta. Si
            eres negocio, descargamos en el punto que nos indiques.
          </li>
          <li>
            <strong>Pago y ticket.</strong> Confirmamos el medio de pago al
            cotizar.
          </li>
        </ol>

        <h2>Formatos disponibles a domicilio</h2>
        <ul>
          <li>
            <strong>Bolsa 1 kg (cubo 40 g):</strong> hogar y uso
            esporádico.
          </li>
          <li>
            <strong>Bolsa 2 kg (cubo 40 g):</strong> reuniones medianas y
            asados.
          </li>
          <li>
            <strong>Bolsa 10 kg (cubo 40 g):</strong> bares, restaurantes,
            banqueteras, almacenes y eventos.
          </li>
          <li>
            <strong>Bolsa 10 kg (frappé):</strong> coctelería de
            especialidad y presentaciones frozen.
          </li>
        </ul>

        <h2>Frecuencias: puntual o recurrente</h2>
        <p>
          Para el hogar lo habitual es comprar por evento. Para negocios
          recomendamos fijar frecuencia: saber qué día y a qué hora llega
          el hielo elimina un punto de fricción operacional y evita que el
          servicio se vea afectado por un quiebre de stock.
        </p>
        <p>
          Trabajamos con entregas diarias, interdiarias o semanales según
          el consumo. Ajustamos la frecuencia cada mes según datos reales
          del cliente.
        </p>

        <h2>Tiempos y cobertura</h2>
        <p>
          Cubrimos Linares ciudad y alrededores. Para pedidos urgentes
          coordinamos el mismo día cuando hay disponibilidad. Para eventos
          recomendamos avisar con 24 horas para asegurar el stock y la
          ventana de entrega que prefieras.
        </p>

        <h2>Quién compra con entrega a domicilio</h2>
        <ul>
          <li>Bares y discoteques con servicio continuo.</li>
          <li>Restaurantes y cafeterías.</li>
          <li>Banqueteras y organizadores de eventos.</li>
          <li>Almacenes y minimercados que revenden.</li>
          <li>Hogar: asados, cumpleaños, Año Nuevo, matrimonios.</li>
        </ul>

        <CTAContacto
          message="Hola Alto Hielo, quiero coordinar entrega de hielo en Linares."
          heading="Coordina tu entrega en Linares"
          body="Dinos formato, cantidad y dirección. Respondemos en minutos por WhatsApp."
        />

        <p className="mt-10 text-sm text-ink/60">
          Más contexto:{" "}
          <Link href="/blog/venta-de-hielo-en-linares">
            Venta de hielo en Linares
          </Link>{" "}
          ·{" "}
          <Link href="/blog/donde-comprar-hielo-premium-en-linares-maule">
            Dónde comprar hielo premium en Linares, Maule
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
