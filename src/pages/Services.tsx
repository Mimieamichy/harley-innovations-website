import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <Features />
    </main>
    <Footer />
  </div>
);

export default Services;
