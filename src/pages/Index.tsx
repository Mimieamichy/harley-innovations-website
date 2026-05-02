import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { SupportedBy } from "@/components/SupportedBy";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products isHomePage={true} />
        <About isHomePage={true} />
        <Team isHomePage={true} />
        <Testimonials isHomePage={true} />
        <CTA />
        <SupportedBy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
