import Image from "next/image";
import { waLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-snow pt-32 md:pt-40">
      <div className="container-x relative grid gap-10 pb-16 md:grid-cols-12 md:pb-24">
        <div className="md:col-span-7 lg:col-span-7">
          <p className="eyebrow animate-fade-up">Linares · Chile</p>
          <h1 className="mt-5 font-display text-hero font-semibold tracking-tightest text-balance text-ink animate-fade-up">
            Hielo que dura.
            <br />
            <span className="text-ice-600">Sabor que no se diluye.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70 text-balance animate-fade-up">
            Cubos premium de 40 gramos que enfrían más rápido y se derriten
            más lento. Para bares, restaurantes, banqueteras y tu casa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <a
              className="btn-primary"
              href={waLink("Hola Alto Hielo, quiero cotizar hielo.")}
              target="_blank"
              rel="noopener"
            >
              Pedir por WhatsApp
            </a>
            <a href="#productos" className="btn-ghost">
              Ver productos
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8 text-center">
            <div>
              <dt className="text-eyebrow uppercase text-ink/50">Calidad</dt>
              <dd className="mt-2 font-display text-xl text-ink sm:text-2xl">Máxima</dd>
            </div>
            <div>
              <dt className="text-eyebrow uppercase text-ink/50">Formatos</dt>
              <dd className="mt-2 font-display text-xl text-ink sm:text-2xl">4</dd>
            </div>
            <div>
              <dt className="text-eyebrow uppercase text-ink/50">Filtrado</dt>
              <dd className="mt-2 font-display text-xl text-ink sm:text-2xl">Triple</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ice-100 shadow-soft">
            <Image
              src="/img/frio-altura.png"
              alt="Balde de hielo Alto Hielo con bebidas frías"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-ice-100 blur-3xl opacity-50" />
    </section>
  );
}
