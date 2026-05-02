import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <Navbar />
      <main className="pb-24">
        <div className="container-tight mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our community members and students have to say about their experience.
          </p>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
