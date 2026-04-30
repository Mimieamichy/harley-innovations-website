import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-workspace.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="container-tight relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium mb-6 border border-primary/10">
            <MapPin className="h-3.5 w-3.5" />
            Lafia, Nasarawa State · Nigeria
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Where ideas become
            <br />
            <span className="text-gradient-primary">digital products.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Harley Innovation Hub is the home for IT consulting, software development,
            digital skills training, and a vibrant coworking community in the heart of Lafia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="#products">
                See our products
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#team">Meet the team</a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Opposite Eco Bank, Jos Road · Stable power · Fast WiFi · A/C
          </p>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl border border-border shadow-glow overflow-hidden">
            <img
              src={heroImg}
              alt="Harley Innovation Hub coworking space"
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-x-8 -bottom-4 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
