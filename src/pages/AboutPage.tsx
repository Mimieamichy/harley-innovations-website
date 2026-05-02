import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { MapPin, Clock, ShieldCheck, Target, Eye, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <Navbar />
      <main className="pb-24">
        <div className="container-tight mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About Harley Innovation Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are Nasarawa's leading tech ecosystem, committed to empowering the next generation of digital leaders.
          </p>
        </div>
        
        <About />

        <div className="container-tight mt-24 space-y-24">
          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-primary text-primary-foreground shadow-elegant relative overflow-hidden group">
              <Target className="absolute -right-8 -bottom-8 h-40 w-40 opacity-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.
                </p>
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-card border border-border shadow-elegant relative overflow-hidden group">
              <Eye className="absolute -right-8 -bottom-8 h-40 w-40 opacity-5 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading technology innovation partner, shaping the future of digital experiences across industries worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-soft text-primary mb-6">
              <Heart className="h-8 w-8 fill-primary/20" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "Innovation, integrity, collaboration, and excellence — these values guide every decision we make and every solution we deliver."
            </p>
          </div>

          {/* Core Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all group">
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prime Location</h3>
              <p className="text-muted-foreground text-sm">Opposite Eco Bank, Jos Road, Lafia. The heart of the city's tech movement.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all group">
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable Access</h3>
              <p className="text-muted-foreground text-sm">Stable electricity and 24/7 security for our coworking community members.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all group">
              <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Led</h3>
              <p className="text-muted-foreground text-sm">All our programs and services are managed by industry professionals.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
