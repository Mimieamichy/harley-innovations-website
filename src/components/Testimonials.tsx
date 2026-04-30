const items = [
  {
    quote: "Harley's coding bootcamp gave me real skills. I built my first web app in three months — life-changing.",
    name: "Ibrahim Musa",
    role: "Web Developer, Lafia",
  },
  {
    quote: "We hired Harley to build our company website and handle marketing. Professional, fast and reliable.",
    name: "Chika Eze",
    role: "Founder, Greenfield Agro",
  },
  {
    quote: "The coworking space is a gem in Nasarawa. Stable power, great WiFi and an inspiring community.",
    name: "Halima Yusuf",
    role: "Freelance Designer",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Trusted by our community.
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
