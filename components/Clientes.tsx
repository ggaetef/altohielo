import { Beer, UtensilsCrossed, Store, PartyPopper, Home, Martini } from "lucide-react";

const segments = [
  {
    icon: Beer,
    title: "Bares",
    desc: "Cubos firmes que aguantan el ritmo del servicio sin diluir el trago.",
  },
  {
    icon: Martini,
    title: "Discotheque",
    desc: "Volumen, velocidad y estética. Hielo que acompaña la noche.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    desc: "Cubos limpios y separados para un servicio impecable en mesa.",
  },
  {
    icon: PartyPopper,
    title: "Banqueteras",
    desc: "Stock confiable para eventos. Logística coordinada contigo.",
  },
  {
    icon: Store,
    title: "Almacenes",
    desc: "Formatos listos para la venta al detalle. Reposición continua.",
  },
  {
    icon: Home,
    title: "Hogar",
    desc: "El mismo hielo premium, en formato 1 kg, para tus reuniones.",
  },
];

export default function Clientes() {
  return (
    <section id="clientes" className="bg-snow-soft py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Para quién</p>
          <h2 className="mt-4 font-display text-display font-semibold tracking-tightest text-ink text-balance">
            Donde sirven en serio,
            <br />
            servimos nosotros.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[20px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-3 bg-snow p-8 transition hover:bg-white"
            >
              <Icon className="h-6 w-6 text-ice-600" strokeWidth={1.4} />
              <h3 className="font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
