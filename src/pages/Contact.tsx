import { Navbar } from "@/components/Navbar";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <CTA />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
