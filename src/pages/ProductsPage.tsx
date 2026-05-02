import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Products } from "@/components/Products";
import { ArrowRight } from "lucide-react";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <Navbar />
      <main className="pb-24">
        <Products />
        <div className="container-tight mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in any of our products?</h2>
          <p className="text-muted-foreground mb-8">Contact our sales team to get started or request a demo.</p>
          <a href="https://wa.me/2347041305874" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:shadow-glow transition-all">
            Inquire Now <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
