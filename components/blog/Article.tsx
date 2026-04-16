import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { SITE_URL } from "@/lib/posts";
import Breadcrumbs from "./Breadcrumbs";

export default function Article({
  post,
  tldr,
  children,
}: {
  post: Post;
  tldr: string;
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Alto Hielo",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Alto Hielo",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
    inLanguage: "es-CL",
  };

  return (
    <article className="bg-snow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="container-x pt-32 md:pt-40">
        <Breadcrumbs
          items={[
            { href: "/", label: "Inicio" },
            { href: "/blog", label: "Blog" },
            { href: `/blog/${post.slug}`, label: post.title },
          ]}
        />
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink/50">
          <span className="inline-flex rounded-full bg-ice-100 px-3 py-1 text-ice-700">
            {post.category}
          </span>
          <span>·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{post.readMinutes} min de lectura</span>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tightest text-balance text-ink sm:text-5xl md:text-6xl">
          {post.title}
        </h1>

        <div className="mt-10 overflow-hidden rounded-[24px]">
          <Image
            src={post.image}
            alt={post.title}
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </header>

      <div className="container-x mt-12 grid gap-12 pb-20 md:grid-cols-12 md:pb-28">
        <aside className="hidden md:col-span-3 md:block">
          <div className="sticky top-28 space-y-4 text-sm text-ink/60">
            <p className="text-eyebrow uppercase text-ink/40">
              Alto Hielo · Linares
            </p>
            <p>
              Hielo premium para bares, restaurantes, banqueteras y hogar.
              Cubos de 40 g.
            </p>
            <Link
              href="/#productos"
              className="inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline"
            >
              Ver productos →
            </Link>
          </div>
        </aside>

        <div className="md:col-span-9">
          <div className="mb-10 rounded-[20px] bg-ice-50 p-6 ring-1 ring-ice-200">
            <p className="text-eyebrow uppercase text-ice-700">Resumen</p>
            <p className="mt-3 text-ink/80 text-balance">{tldr}</p>
          </div>

          <div className="prose-custom">{children}</div>
        </div>
      </div>
    </article>
  );
}
