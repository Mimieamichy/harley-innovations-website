import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Briefcase, 
  Package, 
  MessageSquare, 
  Info, 
  Phone, 
  Megaphone,
  Users,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "/#features", label: "Services", icon: Briefcase },
  { href: "/products", label: "Products", icon: Package },
  { href: "/courses", label: "Courses", icon: GraduationCap },
  { href: "/about", label: "About", icon: Info },
  { href: "/team", label: "Team", icon: Users },
  { href: "/testimonials", label: "Reviews", icon: MessageSquare },
  { href: "/#contact", label: "Contact", icon: Phone },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    // Scroll to top or to hash on route change
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
          scrolled || location.pathname !== "/"
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        style={{ top: 'var(--banner-height, 36px)' }}
      >
        <nav className="container-tight flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-center gap-1.5">
            <img src={logo} alt="Harley Innovation Hub logo" className="h-8 w-8 md:h-12 md:w-12 object-contain" />
            <span className="font-bold text-base md:text-xl tracking-tight text-foreground">Harley Innovation Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === l.href 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="md:hidden">
            <Link 
              to="/#contact" 
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="text-[10px] font-bold bg-primary text-primary-foreground px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background/95 backdrop-blur-md border-t border-border z-50 pb-2">
        <ul className="flex items-center justify-around h-14">
          <li>
            <Link 
              to="/" 
              className={`flex flex-col items-center gap-1 px-2 transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="text-[9px] font-bold uppercase tracking-tighter">Home</span>
            </Link>
          </li>
          {links.filter(l => ["Services", "Products", "Courses", "Reviews"].includes(l.label)).map((l) => (
            <li key={l.href}>
              <Link 
                to={l.href} 
                onClick={(e) => handleNavClick(e, l.href)}
                className={`flex flex-col items-center gap-1 px-2 transition-colors ${
                  location.pathname === l.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <l.icon className="h-4 w-4" />
                <span className="text-[9px] font-bold uppercase tracking-tighter">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
