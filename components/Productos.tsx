import Image from "next/image";
import { waLink } from "@/lib/whatsapp";

type Product = {
  name: string;
  type: "Cubo" | "Frappé";
  size: string;
  desc: string;
  image: string;
  tag?: string;
};

const products: Product[] = [
  {
    name: "Cubo 1 kg",
    type: "Cubo",
    size: "1 kg",
    desc: "Formato ideal para el hogar. Para una reunión, un asado o una noche de tragos.",
    image: "/img/agua.png",
  },
  {
    name: "Cubo 2 kg",
    type: "Cubo",
    size: "2 kg",
    desc: "Para eventos medianos y celebraciones. Siempre listo en el congelador.",
    image: "/img/hielo-bebidas.jpg",
    tag: "Más pedido",
  },
  {
    name: "Cubo 10 kg",
    type: "Cubo",
    size: "10 kg",
    desc: "Formato profesional. Bares, restaurantes, banqueteras y almacenes.",
    image: "/img/cristal.png",
  },
  {
    name: "Frappé 10 kg",
    type: "Frappé",
    size: "10 kg",
    desc: "Hielo molido premium para coctelería avanzada. Textura perfecta para tragos exclusivos.",
    image: "/img/cubos.png",
    tag: "Coctelería",
  },
];

export default function Productos() {
  return (
    <section id="productos" className="bg-snow py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Productos</p>
            <h2 className="mt-4 font-display text-display font-semibold tracking-tightest text-ink text-balance">
              Cuatro formatos.
              <br />
              Un estándar.
            </h2>
          </div>
          <p className="max-w-md text-ink/70">
            Cubos de 40 g que duran más y hielo frappé para coctelería.
            Separados dentro de la bolsa, listos para servir.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ice-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                {p.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[11px] uppercase tracking-widest text-snow">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {p.name}
                  </h3>
                  <span className="text-eyebrow uppercase text-ink/50">
                    {p.type}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink/70">{p.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-sm text-ink/50">Bolsa {p.size}</span>
                  <a
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink transition group-hover:gap-2"
                    href={waLink(
                      `Hola Alto Hielo, quiero cotizar ${p.name} (${p.type} · ${p.size}).`
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Consultar precio
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
