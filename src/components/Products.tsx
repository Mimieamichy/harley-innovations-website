import { ArrowUpRight } from "lucide-react";
import training from "@/assets/product-training.jpg";
import software from "@/assets/product-software.jpg";
import cctv from "@/assets/product-cctv.jpg";
import marketing from "@/assets/product-marketing.jpg";
import coworking from "@/assets/product-coworking.jpg";
import consulting from "@/assets/product-consulting.jpg";

const products = [
  { img: training, tag: "Training", title: "Coding Bootcamps", desc: "Beginner to advanced classes in web, mobile and software development." },
  { img: software, tag: "Build", title: "Custom Software", desc: "Tailored web and mobile applications for startups and enterprises." },
  { img: cctv, tag: "Security", title: "CCTV Installation", desc: "Professional camera systems for homes, offices and retail spaces." },
  { img: marketing, tag: "Growth", title: "Digital Marketing", desc: "Campaigns, content and analytics that turn clicks into customers." },
  { img: coworking, tag: "Workspace", title: "Coworking Hub", desc: "Daily and monthly desks with power, WiFi and air conditioning." },
  { img: consulting, tag: "Advisory", title: "IT Consulting", desc: "Strategic guidance to digitize and scale your operations." },
];

export const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our products</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            All our products in one place.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the full range of services and offerings from Harley Innovation Hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary-soft px-2 py-1 rounded">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold flex items-center justify-between">
                  {p.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
