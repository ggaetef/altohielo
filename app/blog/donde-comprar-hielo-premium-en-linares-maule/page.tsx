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

const SLUG = "donde-comprar-hielo-premium-en-linares-maule";
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
    q: "¿Qué es hielo premium?",
    a: "Hielo producido con agua filtrada, cubos de tamaño y densidad consistentes, transparente y separado en bolsa. A diferencia del hielo genérico, dura más y diluye menos la bebida.",
  },
  {
    q: "¿Es más caro el hielo premium que el de supermercado?",
    a: "La diferencia por kilo suele ser marginal, pero el rendimiento es mayor: los cubos duran más y necesitas menos para mantener la misma cantidad de bebidas frías.",
  },
  {
    q: "¿Dónde conviene comprar hielo premium en Linares?",
    a: "Con un proveedor especializado local como Alto Hielo. Aseguras calidad constante, formatos específicos para bar o eventos, y entrega coordinada en Linares.",
  },
  {
    q: "¿Qué debería mirar antes de comprar hielo?",
    a: "Transparencia del cubo, densidad, tamaño uniforme, que los cubos no vengan pegados en la bolsa, origen del agua y consistencia entre pedidos.",
  },
  {
    q: "¿Alto Hielo vende al detalle y al por mayor?",
    a: "Sí. Atendemos hogar con bolsas de 1 kg y 2 kg, y negocios con bolsas de 10 kg cubo y 10 kg frappé.",
  },
];

export default function Page() {
  return (
    <main>
      <Nav />
      <Article
        post={post}
        tldr="En Linares y el Maule tienes tres vías para comprar hielo: supermercado, almacén de barrio y proveedor especializado. Cada una tiene ventajas y límites. Si buscas calidad constante, formatos de 1–10 kg y entrega coordinada, el proveedor directo es la mejor opción."
      >
        <p>
          Buscar hielo premium en Linares suele resolverse con la primera
          opción que aparece, y ahí empieza el problema: no todo el hielo
          es igual, y la diferencia se nota en cómo enfría, cuánto dura y
          cómo se ve en el vaso. Esta guía resume las opciones disponibles
          en la Región del Maule y qué criterios mirar antes de decidir.
        </p>

        <h2>Las tres vías para comprar hielo en Linares</h2>

        <h3>1. Supermercado</h3>
        <p>
          La opción más accesible, pero también la menos predecible. Los
          supermercados suelen tener hielo en bolsas pequeñas, de origen
          variable, con cubos chicos y, a veces, pegados entre sí por el
          derretido parcial del transporte.
        </p>
        <p>
          Funciona para una emergencia puntual. No funciona si dependes del
          hielo como parte del servicio: bar, restaurante, banquetera o
          eventos.
        </p>

        <h3>2. Almacén de barrio</h3>
        <p>
          Más práctico para compras rápidas, pero la calidad depende
          directamente de quién abastece el almacén. En el mejor caso,
          coincide con el proveedor correcto; en el peor, es el mismo
          hielo del supermercado, con menor rotación.
        </p>

        <h3>3. Proveedor especializado</h3>
        <p>
          Un productor local con foco en calidad, formatos claros y
          entrega. Es la vía para negocios que necesitan consistencia:
          mismo tamaño de cubo, misma densidad, misma transparencia, cada
          pedido. Y para hogares que quieren dar un salto en calidad al
          recibir invitados.
        </p>

        <h2>Criterios que sí importan</h2>
        <p>Antes de comprar, mira estos cinco puntos:</p>
        <ul>
          <li>
            <strong>Transparencia del cubo:</strong> el hielo turbio indica
            agua con minerales o gases no eliminados. Afecta el sabor y la
            estética.
          </li>
          <li>
            <strong>Tamaño y densidad:</strong> un cubo denso de 40 g
            aguanta más que cuatro cubos pequeños sumando lo mismo. Menos
            superficie expuesta, menos dilución.
          </li>
          <li>
            <strong>Cubos separados en bolsa:</strong> si vienen pegados,
            el transporte o almacenamiento fue deficiente. Ya perdiste
            parte del rendimiento antes de servir.
          </li>
          <li>
            <strong>Agua de origen filtrada:</strong> pregunta qué agua
            usan. Nuestra agua pasa por varias etapas de filtrado antes de
            congelarse.
          </li>
          <li>
            <strong>Consistencia entre pedidos:</strong> lo que distingue a
            un proveedor serio es que el pedido 10 sea idéntico al pedido
            1. Sin sorpresas.
          </li>
        </ul>

        <h2>Comparación rápida</h2>
        <p>
          Si lo tuyo es uso esporádico y no te importa la calidad, el
          supermercado sirve. Si quieres que tus tragos o tu servicio
          mantengan un estándar, busca un proveedor directo.
        </p>

        <h2>Por qué Alto Hielo</h2>
        <p>
          Alto Hielo es un productor local basado en Linares que abastece
          al Maule con cubos premium de 40 g y hielo frappé para
          coctelería. Tres cosas que hacemos distinto:
        </p>
        <ul>
          <li>
            Agua filtrada en varias etapas antes de congelar. Cubos
            transparentes, sin sabor residual.
          </li>
          <li>
            Densidad y tamaño uniforme. Cada bolsa es igual a la anterior.
          </li>
          <li>
            Bolsas con cubos separados, listas para servir al abrir. Sin
            bloques pegados.
          </li>
        </ul>

        <CTAContacto
          message="Hola Alto Hielo, quiero probar su hielo premium en Linares."
          heading="Prueba hielo premium en Linares"
          body="Coordinamos una primera entrega para que veas la diferencia. Sin compromiso."
        />

        <p className="mt-10 text-sm text-ink/60">
          Relacionados:{" "}
          <Link href="/blog/venta-de-hielo-en-linares">
            Venta de hielo en Linares
          </Link>{" "}
          ·{" "}
          <Link href="/blog/hielo-a-domicilio-en-linares">
            Hielo a domicilio en Linares
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
