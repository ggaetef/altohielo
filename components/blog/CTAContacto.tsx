import { waLink } from "@/lib/whatsapp";

export default function CTAContacto({
  message = "Hola Alto Hielo, quiero cotizar hielo.",
  heading = "¿Listo para pedir?",
  body = "Te cotizamos y coordinamos entrega en minutos por WhatsApp.",
}: {
  message?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <div className="mt-12 rounded-[24px] bg-ink p-8 text-snow md:p-10">
      <h3 className="font-display text-2xl font-semibold tracking-tightest md:text-3xl">
        {heading}
      </h3>
      <p className="mt-3 max-w-xl text-snow/70">{body}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          className="btn-light"
          href={waLink(message)}
          target="_blank"
          rel="noopener"
        >
          Escribir a WhatsApp
        </a>
        <a
          href="tel:+56950008228"
          className="text-sm text-snow/70 underline-offset-4 hover:text-snow hover:underline"
        >
          +56 9 5000 8228
        </a>
      </div>
    </div>
  );
}
