import Image from "next/image";
import { INSTAGRAM_URL, waLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-snow py-14">
      <div className="container-x flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Image
            src="/logo.png"
            alt="Alto Hielo"
            width={240}
            height={80}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm text-ink/60">
            Hielo premium en Linares, Chile. Frío de altura para bares,
            restaurantes, banqueteras, almacenes y hogar.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-eyebrow uppercase text-ink/40">Productos</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><a href="#productos" className="hover:text-ink">Cubo 1 kg</a></li>
              <li><a href="#productos" className="hover:text-ink">Cubo 2 kg</a></li>
              <li><a href="#productos" className="hover:text-ink">Cubo 10 kg</a></li>
              <li><a href="#productos" className="hover:text-ink">Frappé 10 kg</a></li>
            </ul>
          </div>
          <div>
            <p className="text-eyebrow uppercase text-ink/40">Compañía</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><a href="#clientes" className="hover:text-ink">Clientes</a></li>
              <li><a href="#proceso" className="hover:text-ink">Proceso</a></li>
              <li><a href="#contacto" className="hover:text-ink">Contacto</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-eyebrow uppercase text-ink/40">Contacto</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>Linares, Chile</li>
              <li>
                <a className="hover:text-ink" href="tel:+56953662481">
                  +56 9 5366 2481
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                aria-label="WhatsApp Alto Hielo"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:border-ink/40 hover:bg-white"
                href={waLink("Hola Alto Hielo")}
                target="_blank"
                rel="noopener"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12 0C5.37 0 .01 5.37.01 12a11.9 11.9 0 0 0 1.64 6.05L0 24l6.09-1.6A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 21.82a9.77 9.77 0 0 1-4.98-1.36l-.36-.21-3.62.95.97-3.52-.23-.37A9.79 9.79 0 1 1 21.82 12c0 5.42-4.4 9.82-9.82 9.82Zm5.36-7.34c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14s-.77.95-.94 1.14c-.17.2-.35.22-.64.07-.29-.14-1.22-.45-2.32-1.44a8.67 8.67 0 0 1-1.6-1.99c-.17-.29-.02-.44.13-.59.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.86 1.21 3.06.14.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.56-.34Z" />
                </svg>
              </a>
              <a
                aria-label="Instagram Alto Hielo"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:border-ink/40 hover:bg-white"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Alto Hielo. Frío de altura.</p>
        <p>Linares · Chile</p>
      </div>
    </footer>
  );
}
