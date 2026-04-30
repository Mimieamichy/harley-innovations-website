import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="container-tight relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium mb-6 border border-primary/10">
            <Sparkles className="h-3.5 w-3.5" />
            New — built for modern teams
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Build with clarity.
            <br />
            <span className="text-gradient-primary">Ship with confidence.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Harley is the modern platform that helps you design, launch, and grow
            beautiful products — without the busywork.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="lg" className="group">
              Start free trial
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg">See how it works</Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Free 14-day trial · No credit card required
          </p>
        </div>

        <div className="mt-20 relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl bg-card border border-border shadow-glow overflow-hidden flex items-center justify-center">
            <img src={logo} alt="Harley product preview" className="w-32 h-32 opacity-90" />
          </div>
          <div className="absolute -inset-x-8 -bottom-4 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
