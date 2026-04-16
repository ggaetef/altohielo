type QA = { q: string; a: string };

export default function FAQ({ items, title = "Preguntas frecuentes" }: { items: QA[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section className="mt-16 border-t border-ink/10 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="font-display text-3xl font-semibold tracking-tightest text-ink">
        {title}
      </h2>
      <dl className="mt-8 divide-y divide-ink/10">
        {items.map((i) => (
          <div key={i.q} className="py-6">
            <dt className="font-display text-lg font-semibold text-ink">
              {i.q}
            </dt>
            <dd className="mt-2 text-ink/70">{i.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
