import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import coworking from "@/assets/product-coworking.jpg";

const points = [
  "Stable electricity, fast WiFi and air conditioning",
  "Hands-on training in coding, digital marketing & CCTV",
  "Skill acquisition programs — including for children",
  "Networking events that connect Nasarawa's tech community",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Lafia's home for <br />
            <span className="text-muted-foreground">technology & innovation.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Located opposite Eco Bank on Jos Road, Harley Innovation Hub is a prominent
            tech hub serving Nasarawa State. We bring together consulting, software,
            training and coworking under one roof — equipping people and businesses
            with the digital skills they need to thrive.
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
          <div className="mt-10 flex gap-3">
            <Button variant="hero" size="lg" asChild><a href="#contact">Visit the hub</a></Button>
            <Button variant="outline" size="lg" asChild><a href="#products">Our products</a></Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img
              src={coworking}
              alt="Inside Harley Innovation Hub coworking space"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block p-5 rounded-xl bg-card border border-border shadow-glow max-w-[200px]">
            <div className="text-2xl font-bold text-gradient-primary">500+</div>
            <div className="text-xs text-muted-foreground mt-1">Students trained across our programs</div>
          </div>
        </div>
      </div>
    </section>
  );
};
