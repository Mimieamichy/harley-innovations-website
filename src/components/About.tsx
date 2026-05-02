import * as React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImg1 from "@/assets/JAY_0001.jpg";
import heroImg2 from "@/assets/JAY_0010.jpg";
import heroImg3 from "@/assets/JAY_0032.jpg";
import heroImg4 from "@/assets/JAY_9772.jpg";
import heroImg5 from "@/assets/JAY_9760.jpg";
import heroImg7 from "@/assets/JAY_9788 (1).jpg";
import heroImg8 from "@/assets/JAY_9916.jpg";
import heroImg9 from "@/assets/JAY_9917.jpg";
import heroImg10 from "@/assets/JAY_9997.jpg";
import heroImg11 from "@/assets/JAY_9998.jpg";

const points = [
  "Green Hub (Co-working space) with power & WiFi",
  "IT Consultation for businesses and startups",
  "Hardware & Software solutions for clients",
  "IT Trainings & Career tracks in modern tech",
];

const aboutImages = [
  {
    src: heroImg1,
    alt: "Harley Innovation Hub coworking space",
  },
  {
    src: heroImg2,
    alt: "Collaborative workspace at Harley Hub",
  },
  {
    src: heroImg3,
    alt: "Software development team in action",
  },
  {
    src: heroImg4,
    alt: "Digital skills training session",
  },
  {
    src: heroImg5,
    alt: "Harley Innovation Hub coworking space",
  },
  {
    src: heroImg7,
    alt: "Collaborative workspace at Harley Hub",
  },
  {
    src: heroImg8,
    alt: "Software development team in action",
  },
  {
    src: heroImg9,
    alt: "Digital skills training session",
  },
  {
    src: heroImg10,
    alt: "Harley Innovation Hub coworking space",
  },
  {
    src: heroImg11,
    alt: "Collaborative workspace at Harley Hub",
  },
];

export const About = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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
            training and coworking under one roof.
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
          
          {isHomePage ? (
            <div className="mt-10">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Read more about our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="mt-10 flex gap-3">
              <Button variant="hero" size="lg" asChild><Link to="/#contact">Visit the hub</Link></Button>
              <Button variant="outline" size="lg" asChild><Link to="/products">Our products</Link></Button>
            </div>
          )}
        </div>

        <div className="relative px-4 sm:px-10 lg:px-0">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {aboutImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-elegant">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-10" />
              <CarouselNext className="-right-10" />
            </div>
          </Carousel>
          
          <div className="absolute -bottom-6 -left-6 hidden md:block p-5 rounded-xl bg-card border border-border shadow-glow max-w-[200px] z-10">
            <div className="text-2xl font-bold text-gradient-primary">500+</div>
            <div className="text-xs text-muted-foreground mt-1">Students trained across our programs</div>
          </div>
        </div>
      </div>
    </section>
  );
};
