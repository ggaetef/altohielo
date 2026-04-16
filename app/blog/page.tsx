import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Guías y recursos sobre hielo premium",
  description:
    "Guías sobre hielo premium en Linares: formatos, cómo elegir, conservación y usos para bares, restaurantes, banqueteras y hogar.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <main>
      <Nav />
      <section className="bg-snow pt-32 md:pt-40">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/blog", label: "Blog" },
            ]}
          />
          <p className="eyebrow mt-6">Blog</p>
          <h1 className="mt-4 max-w-3xl font-display text-display font-semibold tracking-tightest text-balance text-ink">
            Guías y recursos
            <br />
            sobre hielo premium.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/70">
            Todo lo que necesitas saber para elegir, pedir, conservar y servir
            hielo — desde el hogar hasta el bar más exigente.
          </p>
        </div>
      </section>

      <section className="bg-snow py-20 md:py-24">
        <div className="container-x">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-8 overflow-hidden rounded-[24px] bg-white ring-1 ring-ink/5 transition hover:shadow-soft md:grid-cols-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <span className="text-eyebrow uppercase text-ink/40">
                {featured.category} · {featured.readMinutes} min
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink md:text-4xl">
                {featured.title}
              </h2>
              <p className="text-ink/70">{featured.excerpt}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-ink">
                Leer →
              </span>
            </div>
          </Link>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-eyebrow uppercase text-ink/40">
                    {p.category} · {p.readMinutes} min
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink/60">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
