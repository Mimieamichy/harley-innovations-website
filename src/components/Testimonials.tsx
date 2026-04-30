const items = [
  {
    quote: "Harley replaced four tools and made our team 2x faster. The design alone is worth it.",
    name: "Amelia Chen",
    role: "Head of Product, Northwind",
  },
  {
    quote: "The most thoughtful product I've used in years. Every detail just feels right.",
    name: "Marcus Reid",
    role: "Engineering Lead, Lumen",
  },
  {
    quote: "Beautiful, fast, and reliable. Our whole org switched within a month.",
    name: "Priya Natarajan",
    role: "COO, Fieldwork",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Loved by modern teams.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-xl bg-card border border-border hover:shadow-elegant transition-shadow"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
