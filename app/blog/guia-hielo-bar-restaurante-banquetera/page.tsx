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

const SLUG = "guia-hielo-bar-restaurante-banquetera";
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
    q: "¿Qué tipo de hielo es mejor para un bar?",
    a: "Cubos densos y uniformes de 30-40 g para tragos con hielo a la vista (gin tonic, whisky, aperitivos) y hielo frappé o pellet para coctelería coctelera. Lo peor para un bar es el cubo pequeño irregular: diluye el trago en minutos.",
  },
  {
    q: "¿Cuánto hielo se consume por persona en un evento?",
    a: "Un buen estimado es 0,5 a 1 kg por persona para un evento de 3-4 horas con bar abierto. Si el clima es caluroso o hay muchas bebidas frías (cerveza, vino blanco, espumantes) súbelo a 1-1,5 kg.",
  },
  {
    q: "¿Cómo se almacena correctamente el hielo?",
    a: "En congelador dedicado a -15 °C o más frío, en bolsas cerradas para evitar absorción de olores. Rota stock: primero entra, primero sale. No abras la bolsa hasta el momento de usar para evitar que los cubos se peguen.",
  },
  {
    q: "¿El hielo caduca?",
    a: "No caduca, pero absorbe olores y pierde calidad si el congelador tiene otros alimentos fuertes. Recomendamos no mezclar hielo con carnes, pescados o productos aromáticos en el mismo espacio.",
  },
  {
    q: "¿Cuál es la diferencia entre cubo y frappé?",
    a: "El cubo mantiene la bebida fría con dilución lenta: ideal para servir directo en vaso. El frappé es hielo molido fino, usado para coctelería (mojito, caipirinha, frozen) y para enfriar bebidas rápidamente.",
  },
  {
    q: "¿Vale la pena invertir en hielo premium para un restaurante?",
    a: "Sí, y la inversión suele ser marginal. Un cubo denso rinde más (necesitas menos), diluye menos (el sabor se mantiene), y se ve mejor en el vaso. Los comensales lo notan, aunque no siempre sepan decir por qué.",
  },
];

export default function Page() {
  return (
    <main>
      <Nav />
      <Article
        post={post}
        tldr="El hielo no es un commodity. En bares, restaurantes y banqueteras define la experiencia del cliente y la economía de tu servicio. Esta guía cubre tipos, tamaño ideal, calidad del agua, cálculo de consumo, almacenamiento, proveedores y errores comunes — todo lo que necesitas para elegir bien y no volver a pensarlo."
      >
        <p>
          Pocos insumos tan invisibles tienen tanto impacto como el hielo.
          No aparece en la carta, no forma parte del marketing, y sin
          embargo está en el 80% de lo que sirves: cocteles, gaseosas,
          agua, cerveza en balde, vino blanco enfriado, espumantes. Si el
          hielo falla, falla todo.
        </p>
        <p>
          Esta guía está pensada para bartenders, dueños de restaurantes,
          jefes de servicio y responsables de banqueteras que quieren
          dejar de pensar en el hielo como un problema logístico y
          empezar a usarlo como una ventaja operativa y de experiencia.
        </p>

        <h2>1. Por qué el hielo importa más de lo que parece</h2>
        <p>
          El hielo hace tres cosas: enfría la bebida, la mantiene fría, y
          la diluye. Las tres pasan al mismo tiempo. La clave es
          controlarlas.
        </p>
        <ul>
          <li>
            <strong>Enfriar rápido:</strong> requiere mucha superficie de
            hielo en contacto con el líquido. Aquí gana el hielo fragmentado
            o frappé.
          </li>
          <li>
            <strong>Mantener frío sin diluir:</strong> requiere cubos
            densos, grandes y de baja superficie relativa. Aquí gana el
            cubo de 40 g o el formato "big cube" para whisky.
          </li>
          <li>
            <strong>Estética:</strong> cubo transparente, uniforme,
            separado en la bolsa. El hielo se ve.
          </li>
        </ul>
        <p>
          Tu decisión de qué tipo de hielo comprar debe responder a qué
          tragos sirves más, no al revés.
        </p>

        <h2>2. Tipos de hielo y cuándo usar cada uno</h2>

        <h3>Cubo estándar (30-40 g)</h3>
        <p>
          El caballo de batalla. Sirve para prácticamente todo: gin tonic,
          highballs, aperitivos, gaseosas, jugos. Si tu bar solo puede
          tener un tipo de hielo, que sea este. Alto Hielo produce cubos
          de 40 g premium: densos, uniformes, separados en bolsa.
        </p>

        <h3>Hielo frappé / molido</h3>
        <p>
          Hielo triturado fino. Úsalo para:
        </p>
        <ul>
          <li>
            Cocteles en coctelera que piden textura helada (mojitos,
            caipirinhas, daiquiris frozen).
          </li>
          <li>
            Enfriar espumantes rápidamente cuando el tiempo apura.
          </li>
          <li>
            Presentaciones con capa de hielo picado (ostras, ceviche, tiki
            cocktails).
          </li>
        </ul>

        <h3>Big cube o esfera (para whisky)</h3>
        <p>
          Cubo grande (150-300 g) o esfera, que se derrite muy despacio.
          Ideal para destilados de alta gama donde el cliente bebe a
          sorbos. No es un producto de alto volumen: funciona como
          diferenciador.
        </p>

        <h3>Hielo seco</h3>
        <p>
          Dióxido de carbono congelado. Usado puntualmente para efectos
          visuales (niebla) o transporte de productos perecibles. No se
          consume. Requiere manipulación con guantes.
        </p>

        <h2>3. Tamaño y densidad: por qué 40 g</h2>
        <p>
          La relación entre volumen y superficie expuesta define cuán
          rápido se derrite el hielo. A mayor tamaño y densidad, menor
          superficie relativa, menor velocidad de derretido.
        </p>
        <p>
          Un cubo de 40 g con densidad correcta ofrece el equilibrio ideal
          para el vaso estándar: llena el vaso con 3-4 cubos, aguanta toda
          la bebida sin diluir en exceso, y se ve proporcionado. Cubos más
          pequeños (10-20 g) desaparecen rápido; cubos más grandes no
          caben bien en vasos estándar.
        </p>

        <h2>4. La calidad del agua importa más que el tamaño</h2>
        <p>
          Un cubo grande de agua turbia sigue siendo mal hielo. Antes de
          congelar, el agua debería pasar por filtros de sedimentos,
          carbón activado y, en lo posible, reducir TDS (sólidos disueltos
          totales).
        </p>
        <p>
          Nuestro hielo se produce con agua filtrada en varias etapas. El
          resultado: cubos transparentes, sin sabor residual, sin
          sedimentos flotando. Cuando sirves un gin tonic o un aperitivo,
          el hielo no pelea con el sabor del trago.
        </p>

        <h2>5. Cálculo de consumo por evento</h2>
        <p>Una fórmula práctica que funciona en la mayoría de casos:</p>
        <blockquote>
          Kilos de hielo = (personas) × (duración en horas) × 0,3
        </blockquote>
        <p>
          Con mínimos y ajustes por clima:
        </p>
        <ul>
          <li>
            <strong>Piso:</strong> 0,5 kg por persona en eventos de hasta
            4 horas.
          </li>
          <li>
            <strong>Verano o alto consumo de cerveza/espumante:</strong>{" "}
            sumar 30-50% al cálculo.
          </li>
          <li>
            <strong>Eventos con bar abierto:</strong> redondear hacia
            arriba y pedir 10-15% de reserva.
          </li>
        </ul>
        <p>Ejemplos prácticos:</p>
        <ul>
          <li>
            50 personas × 4 horas × 0,3 = 60 kg. Pedir 70 kg de seguro.
          </li>
          <li>
            100 personas × 5 horas × 0,3 = 150 kg. Pedir 170-180 kg.
          </li>
          <li>
            200 personas × 6 horas en verano = 200 × 6 × 0,3 × 1,4 = 504
            kg. Pedir 550 kg.
          </li>
        </ul>

        <h2>6. Cálculo de consumo diario (bar/restaurante)</h2>
        <p>
          Para operaciones continuas, el consumo diario se estabiliza
          después de 2-3 semanas de funcionamiento. Como punto de partida:
        </p>
        <ul>
          <li>
            <strong>Restaurante de 40 cubiertos:</strong> 15-25 kg de
            hielo por día.
          </li>
          <li>
            <strong>Bar de cocteles (50 asientos):</strong> 40-80 kg por
            noche, depende de la coctelería (más frappé = más consumo).
          </li>
          <li>
            <strong>Discoteque:</strong> 100-300 kg por noche según
            afluencia y tipo de servicio.
          </li>
        </ul>
        <p>
          Lleva un registro simple: kilos recibidos semanales vs. cuentas
          emitidas. En 30 días tienes tu ratio real y puedes optimizar.
        </p>

        <h2>7. Almacenamiento correcto</h2>
        <p>
          El hielo premium mal almacenado deja de ser premium. Reglas
          básicas:
        </p>
        <ul>
          <li>
            <strong>Temperatura:</strong> congelador a -15 °C o más frío.
            Si está a -5 °C, los cubos se humedecen y se pegan.
          </li>
          <li>
            <strong>Aislamiento:</strong> congelador dedicado a hielo. Nada
            de compartirlo con carnes, pescados o frutas aromáticas.
          </li>
          <li>
            <strong>Rotación:</strong> FIFO. Primer bolsa que entra,
            primera que sale. Evita bolsas antiguas olvidadas al fondo.
          </li>
          <li>
            <strong>Bolsas cerradas:</strong> no dejes la bolsa abierta.
            El hielo absorbe humedad y se pega.
          </li>
          <li>
            <strong>Abrir al momento:</strong> el cubo recién sacado del
            congelador está en su mejor punto.
          </li>
        </ul>

        <h2>8. Transporte y recepción de pedidos</h2>
        <p>
          Cuando recibes un pedido, revisa tres cosas antes de guardarlo:
        </p>
        <ol>
          <li>
            <strong>Temperatura:</strong> la bolsa debe llegar fría al
            tacto, sin agua acumulada. Si hay agua, parte del hielo ya se
            derritió.
          </li>
          <li>
            <strong>Cubos sueltos:</strong> abre una bolsa al azar, los
            cubos no deben estar pegados en bloque.
          </li>
          <li>
            <strong>Sellado:</strong> bolsa cerrada, sin roturas.
          </li>
        </ol>
        <p>
          Un proveedor serio acepta devolución si algo no cumple. Con
          Alto Hielo, si algo llega mal, lo reemplazamos sin discusión.
        </p>

        <h2>9. Cómo elegir un buen proveedor</h2>
        <ul>
          <li>
            <strong>Calidad consistente:</strong> cada pedido igual al
            anterior. Ni mejor ni peor.
          </li>
          <li>
            <strong>Capacidad:</strong> ¿puede cubrir tus peaks de consumo?
            Pregunta por sus puntos de quiebre históricos.
          </li>
          <li>
            <strong>Logística:</strong> entrega puntual, flexibilidad de
            horario.
          </li>
          <li>
            <strong>Respuesta:</strong> canal de comunicación directo y
            rápido (WhatsApp funciona mucho mejor que mail).
          </li>
          <li>
            <strong>Precio total, no solo por kilo:</strong> suma calidad,
            entrega, constancia. A veces pagar un poco más por kilo
            compensa en cero quiebres de stock.
          </li>
        </ul>

        <h2>10. Errores comunes que afectan tu servicio</h2>
        <ul>
          <li>
            <strong>Comprar hielo barato para "ahorrar":</strong> terminas
            usando el doble de volumen para el mismo efecto, y tus tragos
            se diluyen.
          </li>
          <li>
            <strong>Un solo proveedor sin plan B:</strong> si te falla en
            fin de semana largo, te quedas sin servicio.
          </li>
          <li>
            <strong>Congelador compartido con alimentos:</strong> el hielo
            toma olores. El cliente lo nota.
          </li>
          <li>
            <strong>Usar cubos pequeños para gin tonic:</strong> en 5
            minutos es un trago aguado.
          </li>
          <li>
            <strong>No ajustar pedido a la estacionalidad:</strong> verano,
            año nuevo, partidos deportivos: el consumo se triplica.
          </li>
          <li>
            <strong>Cortar gastos en hielo y subir en licor premium:</strong>{" "}
            arruina la inversión en buen destilado con un cubo que aguacha
            el trago.
          </li>
        </ul>

        <h2>11. Checklist para bares, restaurantes y banqueteras</h2>
        <p>Antes de cada semana/evento:</p>
        <ul>
          <li>¿Tengo stock calculado + 15% de seguro?</li>
          <li>¿Congelador a -15 °C y solo con hielo?</li>
          <li>¿FIFO aplicado en las bolsas?</li>
          <li>¿Proveedor confirmado, con horario de entrega acordado?</li>
          <li>¿Plan B si algo falla (segundo contacto)?</li>
          <li>¿Equipo de servicio sabe cuánto hielo usar por trago?</li>
        </ul>

        <CTAContacto
          message="Hola Alto Hielo, soy un negocio en Linares y quiero cotizar hielo para mi servicio."
          heading="¿Bar, restaurante o banquetera en Linares?"
          body="Cotizamos según tu consumo real y coordinamos entrega fija. Escríbenos con tu volumen aproximado."
        />

        <p className="mt-10 text-sm text-ink/60">
          Relacionados:{" "}
          <Link href="/blog/guia-completa-del-hielo">
            Guía completa del hielo (hogar y eventos)
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
