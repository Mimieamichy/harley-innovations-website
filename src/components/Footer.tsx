import { Github, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Customers", "Careers", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "Blog", "Support"] },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-tight py-16">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Harley logo" className="h-8 w-8" />
              <span className="font-bold text-lg">Harley</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The modern platform for teams that build with intention.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
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
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Harley. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
