import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-center shadow-glow">
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground">
              Ready to build something great?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Join thousands of teams already shipping faster with Harley.
            </p>

            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                className="bg-background/95 border-0 h-11"
                aria-label="Email address"
              />
              <Button type="submit" variant="secondary" size="lg" className="group">
                Get started
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
