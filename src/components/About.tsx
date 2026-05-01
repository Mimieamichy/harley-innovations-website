import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import coworking from "@/assets/product-coworking.jpg";
import productSoftware from "@/assets/product-software.jpg";
import productTraining from "@/assets/product-training.jpg";
import heroImg from "@/assets/hero-workspace.jpg";

const points = [
  "Stable electricity, fast WiFi and air conditioning",
  "Hands-on training in coding, digital marketing & CCTV",
  "Skill acquisition programs — including for children",
  "Networking events that connect Nasarawa's tech community",
];

const aboutImages = [
  {
    src: coworking,
    alt: "Inside Harley Innovation Hub coworking space",
  },
  {
    src: heroImg,
    alt: "Vibrant workspace environment",
  },
  {
    src: productSoftware,
    alt: "Our software development team",
  },
  {
    src: productTraining,
    alt: "Training session in progress",
  },
];

export const About = () => {
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
