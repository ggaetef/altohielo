"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/whatsapp";

const items = [
  { href: "#productos", label: "Productos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/5 bg-snow/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="flex items-center gap-2" aria-label="Alto Hielo">
          <Image
            src="/logo.png"
            alt="Alto Hielo"
            width={200}
            height={64}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            className="btn-primary"
            href={waLink("Hola Alto Hielo, quiero pedir hielo.")}
            target="_blank"
            rel="noopener"
          >
            Pedir por WhatsApp
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-px w-5 bg-ink transition ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-snow md:hidden">
          <div className="container-x flex flex-col py-4">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink/80"
              >
                {i.label}
              </a>
            ))}
            <a
              className="btn-primary mt-3 self-start"
              href={waLink("Hola Alto Hielo, quiero pedir hielo.")}
              target="_blank"
              rel="noopener"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
