import { Navbar } from "@/components/Navbar";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const TeamPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <Team />
    </main>
    <Footer />
  </div>
);

export default TeamPage;
