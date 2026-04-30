import { Navbar } from "@/components/Navbar";
import { Products as ProductsSection } from "@/components/Products";
import { Footer } from "@/components/Footer";

const ProductsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <ProductsSection />
    </main>
    <Footer />
  </div>
);

export default ProductsPage;
