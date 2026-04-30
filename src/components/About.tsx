import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Built by a team that's shipped products to millions",
  "Transparent pricing — no hidden fees, ever",
  "World-class support, available when you need it",
  "Open APIs and integrations with the tools you love",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Crafted with intention. <br />
            <span className="text-muted-foreground">Designed for impact.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We believe great software should feel effortless. That's why every detail in
            Harley — from the smallest interaction to the broadest workflow — is shaped
            around how teams actually work.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground flex-shrink-0">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button variant="hero" size="lg">Learn more about us</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "10k+", v: "Active teams" },
            { k: "99.99%", v: "Uptime SLA" },
            { k: "30+", v: "Global regions" },
            { k: "4.9/5", v: "Customer rating" },
          ].map((s) => (
            <div key={s.v} className="p-8 rounded-xl bg-card border border-border shadow-elegant">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
