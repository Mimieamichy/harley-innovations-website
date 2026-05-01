import { useEffect, useRef, useState } from "react";
import { 
  Home, 
  Briefcase, 
  Package, 
  MessageSquare, 
  Info, 
  Phone, 
  Megaphone,
  Users,
  ExternalLink
} from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#features", label: "Services", icon: Briefcase },
  { href: "#products", label: "Products", icon: Package },
  { href: "#about", label: "About", icon: Info },
  { href: "#team", label: "Team", icon: Users },
  { href: "#testimonials", label: "Reviews", icon: MessageSquare },
  { href: "#contact", label: "Contact", icon: Phone },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const updateBannerHeight = () => {
      if (bannerRef.current) {
        document.documentElement.style.setProperty(
          "--banner-height",
          `${bannerRef.current.offsetHeight}px`
        );
      }
    };

    updateBannerHeight();
    window.addEventListener("resize", updateBannerHeight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);

  return (
    <>
      {/* Advert/Announcement Banner */}
      <div 
        ref={bannerRef}
        className="fixed top-0 inset-x-0 bg-primary text-primary-foreground py-2 px-4 text-center z-[60] min-h-9 flex items-center justify-center"
      >
        <div className="container-tight flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <div className="flex items-center gap-2">
            <Megaphone className="h-3 w-3 md:h-4 md:w-4 animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium">
              Now enrolling: SIWES & Internship Programs 2026!
            </span>
          </div>
          <a 
            href="https://wa.me/2347041305874" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] sm:text-xs md:text-sm font-bold underline flex items-center gap-1 hover:text-white transition-colors shrink-0"
          >
            Apply Now! <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        style={{ top: 'var(--banner-height, 36px)' }}
      >
        <nav className="container-tight flex items-center justify-between h-14 md:h-16">
          <a href="#top" className="flex items-center gap-1.5">
            <img src={logo} alt="Harley Innovation Hub logo" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
            <span className="font-bold text-base md:text-xl tracking-tight">Harley Innovation Hub</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="md:hidden">
            <a 
              href="#contact" 
              className="text-[10px] font-bold bg-primary text-primary-foreground px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background/95 backdrop-blur-md border-t border-border z-50 pb-2">
        <ul className="flex items-center justify-around h-14">
          <li>
            <a href="#top" className="flex flex-col items-center gap-1 px-2 text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span className="text-[9px] font-bold uppercase tracking-tighter">Home</span>
            </a>
          </li>
          {links.filter(l => ["Services", "Products", "Reviews", "About"].includes(l.label)).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="flex flex-col items-center gap-1 px-2 text-muted-foreground hover:text-primary transition-colors">
                <l.icon className="h-4 w-4" />
                <span className="text-[9px] font-bold uppercase tracking-tighter">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
