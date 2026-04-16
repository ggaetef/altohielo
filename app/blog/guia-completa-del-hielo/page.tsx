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

const SLUG = "guia-completa-del-hielo";
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
    q: "¿Cuál es la diferencia entre hielo en cubo y hielo frappé?",
    a: "El hielo en cubo es firme y se usa directo en el vaso: enfría la bebida sin diluirla rápido. El hielo frappé es molido fino y se usa para coctelería (mojito, caipirinha, frozen) y para enfriar botellas o bebidas al momento.",
  },
  {
    q: "¿Cuánto hielo comprar para un asado?",
    a: "Entre 0,5 y 1 kg de hielo por persona para 3-4 horas, asumiendo consumo normal de cerveza, bebidas frías y algún trago. Si hay mucho espumante o el día está muy caluroso, calcula 1,5 kg por persona.",
  },
  {
    q: "¿Cuánto dura el hielo en un cooler?",
    a: "Depende del cooler y el clima. En un cooler de buena calidad, cerrado, con hielo premium de cubo grande y sombra, puede durar 24 a 48 horas. En un cooler básico al sol, 4 a 8 horas.",
  },
  {
    q: "¿Por qué unos cubos duran más que otros?",
    a: "Por tamaño, densidad y temperatura del congelador de origen. Un cubo denso y grande tiene menos superficie expuesta por kilo, así que se derrite más lento. Cubos pequeños o porosos se derriten en minutos.",
  },
  {
    q: "¿El hielo se puede volver a congelar?",
    a: "Técnicamente sí, pero pierde calidad: se vuelve turbio, con burbujas y se rompe con facilidad. Para uso en bebidas, mejor hielo fresco. Para cooler o enfriar botellas, el re-congelado sirve.",
  },
  {
    q: "¿Por qué el hielo del supermercado a veces sabe raro?",
    a: "Porque absorbe olores de otros productos del congelador y porque el agua de origen puede no estar filtrada. El hielo premium se produce con agua filtrada y se almacena aislado para preservar el sabor neutro.",
  },
];

export default function Page() {
  return (
    <main>
      <Nav />
      <Article
        post={post}
        tldr="Todo lo que necesitas saber sobre el hielo para usarlo bien en casa: tipos, cuánto comprar según la ocasión, cómo conservarlo, por qué unos cubos duran más que otros y qué rol cumple en tus tragos. Una guía práctica para anfitriones y amantes del detalle."
      >
        <p>
          El hielo es uno de esos insumos invisibles. Lo compras sin
          pensar, lo echas en el vaso y sigues con tu vida. Y sin embargo,
          define más de lo que parece: si tu trago aguanta el verano, si
          tu vino blanco se enfría a tiempo, si tu asado sigue siendo
          asado a las 6 de la tarde cuando el hielera ya se convirtió en
          una poza.
        </p>
        <p>
          Esta guía está pensada para el uso en casa: entender qué tipos
          hay, cómo elegir, cuánto comprar y cómo hacer que rinda. Sin
          tecnicismos, con ejemplos prácticos.
        </p>

        <h2>1. Por qué el hielo correcto cambia todo</h2>
        <p>
          El hielo tiene tres funciones: enfriar, mantener frío y, casi
          siempre, diluir. Un cubo pequeño enfría rápido pero dura poco y
          diluye mucho. Un cubo grande y denso enfría un poco más lento,
          pero dura mucho más y casi no diluye. La elección depende de qué
          quieres del trago o de la bebida.
        </p>
        <p>
          Cuando sirves una cerveza en un balde con hielo de supermercado,
          en 20 minutos tienes una sopa tibia. Con cubos densos y
          uniformes, la cerveza sigue fría 2 horas después. La diferencia
          no es estética: es funcional.
        </p>

        <h2>2. Tipos de hielo y cuándo usar cada uno</h2>

        <h3>Cubo estándar (30-40 g)</h3>
        <p>
          El hielo de uso diario: para gin tonics, aperitivos, agua con
          gas, gaseosas, jugos. Si solo tuvieras que tener un tipo de
          hielo en casa, sería este. Los cubos de 40 g de Alto Hielo están
          pensados para este uso: firmes, transparentes y duraderos.
        </p>

        <h3>Hielo frappé / molido</h3>
        <p>
          Para tragos en coctelera, frozens, mojitos, granizados. También
          sirve para enfriar una botella rápido en un balde o para
          presentar ostras, ceviche o mariscos sobre una cama de hielo
          picado.
        </p>

        <h3>Hielo grande (big cube)</h3>
        <p>
          Cubo de 100-300 g. Ideal para whisky, gin neat, bebidas de alta
          gama donde no quieres diluir. Se derrite muy lento y da
          presencia en el vaso.
        </p>

        <h3>Hielo decorativo</h3>
        <p>
          Cubos con flores, fruta o hierbas dentro. Se hace en casa con
          hieleras de silicona. No sustituye al hielo funcional: es
          estética.
        </p>

        <h2>3. Cuánto hielo comprar según la ocasión</h2>
        <p>Una tabla rápida:</p>
        <ul>
          <li>
            <strong>Trago esporádico en casa (2-3 personas):</strong> 1
            kg alcanza para varias veces.
          </li>
          <li>
            <strong>Cena para 6 personas:</strong> 2 kg.
          </li>
          <li>
            <strong>Asado de 10 personas (3-4 horas):</strong> 5-8 kg.
          </li>
          <li>
            <strong>Cumpleaños de 20 personas:</strong> 15-20 kg.
          </li>
          <li>
            <strong>Año Nuevo de 30 personas:</strong> 25-30 kg más hielo
            adicional para balde de espumantes.
          </li>
        </ul>
        <p>
          Regla de anfitrión: siempre pide 20% más. Es mejor que sobre un
          kilo a que te falte en el peor momento.
        </p>

        <h2>4. Por qué unos cubos duran más que otros</h2>
        <p>
          Todo se reduce a superficie expuesta. Un cubo denso de 40 g
          tiene menos superficie por kilo que cuatro cubos pequeños de 10
          g. Menos superficie = menos contacto con el aire y el líquido =
          menos derretido.
        </p>
        <p>También cuenta:</p>
        <ul>
          <li>
            <strong>Temperatura inicial:</strong> un cubo que viene de un
            congelador a -15 °C aguanta mucho más que uno a -5 °C.
          </li>
          <li>
            <strong>Agua de origen:</strong> agua pura congelada se
            derrite de forma uniforme. Agua con minerales crea puntos
            débiles y rompe antes.
          </li>
          <li>
            <strong>Cubos separados:</strong> si vienen pegados, parte ya
            se derritió durante el transporte.
          </li>
        </ul>

        <h2>5. Cómo conservar bien el hielo en casa</h2>
        <ul>
          <li>
            <strong>Congelador a fondo:</strong> la parte más fría está
            atrás o abajo. Ahí guarda el hielo.
          </li>
          <li>
            <strong>No lo mezcles con olores:</strong> el hielo absorbe
            todo. Nada de carnes, pescados o queso en la misma bandeja.
          </li>
          <li>
            <strong>Bolsa cerrada:</strong> si abres y cierras, los cubos
            se van humedeciendo y terminan pegados.
          </li>
          <li>
            <strong>Saca lo justo:</strong> lo que saques y no uses, no
            vuelve a estar igual de bien.
          </li>
        </ul>

        <h2>6. Cómo alargar el hielo en un cooler para un día en la playa</h2>
        <ol>
          <li>
            <strong>Enfría el cooler antes:</strong> media hora con hielo
            viejo adentro o en la sombra. Si lo llenas con el cooler
            caliente, pierdes el 40% del hielo en la primera hora.
          </li>
          <li>
            <strong>Usa cubos grandes:</strong> duran más que los
            pequeños. Si tienes ambos, grandes abajo, pequeños arriba.
          </li>
          <li>
            <strong>Llena al menos 2/3:</strong> los coolers funcionan
            mejor llenos. Menos aire = menos derretido.
          </li>
          <li>
            <strong>No abras todo el tiempo:</strong> cada apertura pierde
            frío. Decide qué vas a sacar y sácalo de una vez.
          </li>
          <li>
            <strong>Mantén en sombra:</strong> el sol directo triplica el
            derretido.
          </li>
          <li>
            <strong>Agua fría es tu amiga:</strong> no drenes el agua que
            se acumula. El agua fría mantiene las bebidas frías tan bien
            como el hielo.
          </li>
        </ol>

        <h2>7. El hielo en los tragos: decisiones que importan</h2>
        <p>
          Un buen hielo puede salvar un trago regular; uno malo arruina
          uno bueno. Algunas reglas prácticas:
        </p>
        <ul>
          <li>
            <strong>Gin tonic:</strong> vaso balón o copa, 4-5 cubos
            grandes de 40 g. Nunca pocos cubos — parece contraintuitivo,
            pero más hielo = menos derretido total.
          </li>
          <li>
            <strong>Whisky:</strong> uno o dos cubos grandes. Si solo
            tienes cubos pequeños, mejor bebe puro o con una gota de agua.
          </li>
          <li>
            <strong>Aperol Spritz:</strong> copa de vino llena de hielo.
            El frío estabiliza la espuma del espumante y baja el dulzor.
          </li>
          <li>
            <strong>Mojito:</strong> hielo frappé o cubos machacados. Da
            textura y enfría rápido la menta.
          </li>
          <li>
            <strong>Vodka tonic, ron con cola:</strong> cubos densos.
          </li>
          <li>
            <strong>Café helado:</strong> cubos de café congelado si
            quieres evitar dilución. Si no, cubos grandes de agua filtrada.
          </li>
        </ul>

        <h2>8. Mitos comunes sobre el hielo</h2>
        <ul>
          <li>
            <strong>"El hielo hervido queda transparente":</strong> falso.
            El hielo transparente se consigue con agua filtrada y
            congelado lento y direccional, no con agua hervida.
          </li>
          <li>
            <strong>"Menos hielo en el vaso = trago más fuerte":</strong>
            {" "}
            falso. Menos hielo significa que los pocos cubos se derriten
            rápido y diluyen más rápido.
          </li>
          <li>
            <strong>"El hielo no caduca":</strong> no caduca, pero pierde
            calidad en semanas si está expuesto a olores o humedad.
          </li>
          <li>
            <strong>"Es lo mismo cualquier hielo":</strong> falso. Ya
            sabes por qué.
          </li>
        </ul>

        <h2>9. Checklist para anfitriones</h2>
        <ul>
          <li>¿Calculé 1 kg por persona + 20% de reserva?</li>
          <li>¿Tengo cubos para tragos y algo de frappé si hago cocteles?</li>
          <li>¿El congelador está limpio y frío de verdad?</li>
          <li>¿Mi cooler está en sombra y pre-enfriado?</li>
          <li>¿Tengo un balde separado para cerveza/vino?</li>
          <li>¿Sé a quién llamar si me quedo sin stock el mismo día?</li>
        </ul>

        <CTAContacto
          message="Hola Alto Hielo, quiero pedir hielo para una ocasión en Linares."
          heading="Pide hielo premium para tu próxima ocasión"
          body="Cubos de 40 g en bolsas de 1 kg, 2 kg o 10 kg. Cotizamos y coordinamos entrega en minutos."
        />

        <p className="mt-10 text-sm text-ink/60">
          Para negocios:{" "}
          <Link href="/blog/guia-hielo-bar-restaurante-banquetera">
            Cómo elegir hielo para bar, restaurante o banquetera
          </Link>
          . Para pedido local:{" "}
          <Link href="/blog/venta-de-hielo-en-linares">
            Venta de hielo en Linares
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
