import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <Navbar />
      <main className="pb-24">
        <div className="container-tight mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the talented individuals who make Harley Innovation Hub a center for excellence and creativity.
          </p>
        </div>
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
