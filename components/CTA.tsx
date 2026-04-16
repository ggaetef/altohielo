import { waLink } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section id="contacto" className="bg-ice-100 py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-snow md:px-16 md:py-24">
          <p className="eyebrow text-ice-300">Pide hoy</p>
          <h2 className="mt-5 max-w-3xl font-display text-display font-semibold tracking-tightest text-balance">
            Cotiza por WhatsApp
            <br />
            y coordinamos entrega.
          </h2>
          <p className="mt-6 max-w-xl text-snow/70">
            Cuéntanos qué necesitas: formato, cantidad, frecuencia. Te damos
            precio y tiempo de entrega en minutos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="btn-light"
              href={waLink(
                "Hola Alto Hielo, quiero cotizar hielo. Necesito:"
              )}
              target="_blank"
              rel="noopener"
            >
              Escribir a WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm text-snow/70 underline-offset-4 hover:text-snow hover:underline"
              href="tel:+56950008228"
            >
              +56 9 5000 8228
            </a>
          </div>

          <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full bg-ice-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
