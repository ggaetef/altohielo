import Image from "next/image";

const shots = [
  { src: "/img/servir.png", alt: "Servicio de trago con hielo Alto Hielo", span: "md:col-span-2 md:row-span-2" },
  { src: "/img/aperol.jpg", alt: "Preparando Aperol Spritz" },
  { src: "/img/amigos.png", alt: "Amigos disfrutando con Alto Hielo" },
  { src: "/img/agua.png", alt: "Vaso con cubos de hielo" },
  { src: "/img/cristal.png", alt: "Hielo cristalino en coctelería" },
];

export default function Galeria() {
  return (
    <section className="bg-snow py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">En acción</p>
          <h2 className="mt-4 font-display text-display font-semibold tracking-tightest text-ink text-balance">
            Se ve. Se siente.
            <br />
            Se nota en el trago.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {shots.map((s, i) => (
            <div
              key={s.src}
              className={`relative overflow-hidden rounded-[16px] bg-ice-100 ${
                s.span ?? "aspect-square"
              } ${i === 0 ? "aspect-auto" : ""}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
