import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const cols = [
  { title: "Services", links: [
    { label: "Green Hub (Coworking)", href: "/#features" },
    { label: "IT Consultation", href: "/#features" },
    { label: "Hardware & Software", href: "/#features" },
    { label: "IT Trainings", href: "/#features" },
    { label: "Kids Holiday Coding", href: "/#features" }
  ]},
  { title: "Hub", links: [
    { label: "School Competition", href: "/#features" },
    { label: "SIWES & NYSC", href: "/#features" },
    { label: "Our Products", href: "/products" },
    { label: "Tech Courses", href: "/courses" },
    { label: "Our Team", href: "/team" }
  ]},
  { title: "Company", links: [
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/#contact" }
  ]},
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40 pb-20 md:pb-0">
      <div className="container-tight py-16">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Harley Innovation Hub logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-foreground">Harley Innovation Hub</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Lafia's home for technology, training and innovation.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> Opposite Eco Bank, Jos Road, Lafia</li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" /> 
                <a href="https://wa.me/2347041305874" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +234 704 130 5874
                </a>
              </li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0" /> info@harley.com.ng</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>
                    ) : (
                      <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Harley Innovation Hub. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
};
