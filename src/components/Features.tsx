import { Code2, Megaphone, Network, GraduationCap, Building2, Lightbulb } from "lucide-react";

const features = [
  { icon: Code2, title: "Software Development", desc: "Custom websites, web apps, and mobile solutions built for businesses across Nigeria." },
  { icon: Lightbulb, title: "IT Consulting", desc: "Strategy, systems and infrastructure advice from a team that's shipped real products." },
  { icon: GraduationCap, title: "Skills Training", desc: "Hands-on coding, digital marketing, networking and CCTV installation programs." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Grow your reach with social, SEO and paid campaigns crafted for African audiences." },
  { icon: Network, title: "Networking & CCTV", desc: "Professional setup of computer networks and security camera systems." },
  { icon: Building2, title: "Coworking Space", desc: "Stable power, fast WiFi and air conditioning — a place to focus and connect." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What we do</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            One hub. Every digital need.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From learning your first line of code to launching a national brand — we're here for it.
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
