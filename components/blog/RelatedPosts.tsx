import Image from "next/image";
import Link from "next/link";
import { relatedPosts } from "@/lib/posts";

export default function RelatedPosts({ slug }: { slug: string }) {
  const items = relatedPosts(slug, 2);
  if (!items.length) return null;

  return (
    <section className="border-t border-ink/10 bg-snow-soft py-20">
      <div className="container-x">
        <p className="eyebrow">Seguir leyendo</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((p) => (
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
                  {p.category}
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
  );
}
