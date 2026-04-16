import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Agua filtrada",
    desc: "Pasa por varias etapas de filtrado antes de congelarse. Sin impurezas, sin sabor.",
  },
  {
    n: "02",
    title: "Cubos de 40 g",
    desc: "Un tamaño pensado para durar más tiempo en el vaso y mantener el trago frío sin aguarlo.",
  },
  {
    n: "03",
    title: "Separados en bolsa",
    desc: "No se pegan entre sí. Abres la bolsa y sirves. Experiencia limpia, rápida, prolija.",
  },
  {
    n: "04",
    title: "Frappé coctelería",
    desc: "Textura fina y consistente para tragos exclusivos y presentaciones de alto nivel.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink py-24 text-snow md:py-32">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-ice-300">Proceso</p>
          <h2 className="mt-4 font-display text-display font-semibold tracking-tightest text-balance">
            Cada cubo, cuidado.
          </h2>
          <p className="mt-6 text-snow/70">
            Producimos con un estándar simple: que cada bolsa que sale de Alto
            Hielo rinda, luzca y respete el sabor de la bebida.
          </p>

          <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[24px]">
            <Image
              src="/img/cubos.png"
              alt="Cubos de hielo premium Alto Hielo"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="md:col-span-7 md:pt-10">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`grid grid-cols-[auto_1fr] gap-6 py-8 ${
                i < steps.length - 1 ? "border-b border-snow/10" : ""
              }`}
            >
              <span className="font-display text-3xl font-semibold text-ice-300">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-snow/70">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
