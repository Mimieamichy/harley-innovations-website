import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Ghost, Rocket } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md animate-fade-up">
        <div className="mb-8 flex justify-center gap-4 text-primary">
          <Ghost className="h-12 w-12 animate-bounce" />
          <Coffee className="h-12 w-12" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Whoops! <br />
          <span className="text-muted-foreground">We're fully loaded.</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Our team is currently so awesome that we literally don't have enough chairs (or coffee) 
          for anyone else right now. 
          <br /><br />
          We aren't hiring at the moment, but feel free to keep sharpening your skills! 
          Maybe check back when we've bought more desks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">Back to Safety</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/2347041305874" target="_blank" rel="noopener noreferrer">
              Still want to chat?
            </a>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
          <Rocket className="h-4 w-4" />
          Harley Innovation Hub
        </div>
      </div>
    </div>
  );
};

export default Careers;
