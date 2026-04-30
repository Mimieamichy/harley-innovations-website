import { Navbar } from "@/components/Navbar";
import { About as AboutSection } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <AboutSection />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
