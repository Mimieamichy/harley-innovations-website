import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import houserentImg from "@/assets/houserent.png";
import harleyPosImg from "@/assets/harley-pos.png";
import software from "@/assets/product-software.jpg";
import cctv from "@/assets/product-cctv.jpg";

const products = [
  { 
    img: houserentImg, 
    tag: "Real Estate", 
    title: "Houserent", 
    href: "https://www.houserent.com.ng",
    desc: "Houserent is the #1 platform to find your next Apartment, House, Office or even Shop for Industrial use." 
  },
  { 
    img: harleyPosImg, 
    tag: "Retail", 
    title: "Harley POS", 
    href: "https://www.pos.harley.com.ng/",
    desc: "Robust point-of-sale solution built for Nigerian retail and service environments." 
  },
  { 
    img: software, 
    tag: "Hospitality", 
    title: "Hotel Management", 
    href: "http://hotelmanagement.harley.com.ng/",
    desc: "Comprehensive hospitality platform managing bookings, billing, and day-to-day hotel operations." 
  },
  { 
    img: cctv, 
    tag: "Security", 
    title: "SEDSS", 
    href: "http://sedss.harley.com.ng/",
    desc: "Smart Early Detection Security System - AI-powered threat detection for schools and institutions." 
  },
];

export const Products = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const displayProducts = isHomePage ? products.slice(0, 3) : products;

  return (
    <section id="products" className="py-24 md:py-32 bg-gradient-soft scroll-mt-20">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Products</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Digital solutions by Harley.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our range of platforms built to solve real-world problems in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary-soft px-2 py-1 rounded w-fit">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold flex items-center justify-between">
                  {p.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              See all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
