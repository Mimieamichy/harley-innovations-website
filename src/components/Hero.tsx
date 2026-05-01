import * as React from "react";
import { ArrowRight, MapPin } from "lucide-react";
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
import productCoworking from "@/assets/product-coworking.jpg";
import productSoftware from "@/assets/product-software.jpg";
import productTraining from "@/assets/product-training.jpg";

const carouselImages = [
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

export const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

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

        <div className="mt-20 relative max-w-5xl mx-auto px-4 sm:px-12 md:px-0">
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
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/9] rounded-2xl border border-border shadow-glow overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
          <div className="absolute -inset-x-8 -bottom-4 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};
