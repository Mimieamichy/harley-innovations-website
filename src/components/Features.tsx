import { Zap, Shield, Layers, BarChart3, Globe2, Sparkles } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning fast", desc: "Optimized from the ground up for speed. Pages load in under a second, every time." },
  { icon: Shield, title: "Secure by default", desc: "Enterprise-grade security with end-to-end encryption and SOC 2 compliance." },
  { icon: Layers, title: "Composable", desc: "Mix and match modules to build exactly the workflow your team needs." },
  { icon: BarChart3, title: "Real-time insights", desc: "Beautiful dashboards that turn raw data into clear, actionable signals." },
  { icon: Globe2, title: "Global scale", desc: "Deploy to 30+ regions with automatic failover and edge caching included." },
  { icon: Sparkles, title: "Delightful UX", desc: "Crafted with care so your team actually enjoys using it every single day." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need, nothing you don't.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A focused toolkit designed to help small teams move like big ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-7 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary-soft text-primary mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
