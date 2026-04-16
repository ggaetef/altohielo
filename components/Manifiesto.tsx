import Image from "next/image";

export default function Manifiesto() {
  return (
    <section className="bg-ink py-24 text-snow md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-square overflow-hidden rounded-[24px]">
            <Image
              src="/img/brindis.jpg"
              alt="Brindis con tragos refrescados con hielo Alto Hielo"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow text-ice-300">Manifiesto</p>
          <h2 className="mt-5 font-display text-display font-semibold tracking-tightest text-balance">
            El hielo no es un detalle.
            <br />
            Es el primer sorbo.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-snow/70 text-balance">
            Creamos Alto Hielo porque un trago merece más que hielo cualquiera.
            Cubos firmes, transparentes y separados, listos para servir. Que
            enfríen rápido y se derritan lento. Que respeten el sabor en vez de
            diluirlo.
          </p>
        </div>
      </div>
    </section>
  );
}
