import { 
  Building2, 
  Lightbulb, 
  Cpu, 
  GraduationCap, 
  Baby, 
  Trophy, 
  Briefcase,
  
} from "lucide-react";

const features = [
  { icon: Building2, title: "Green Hub", desc: "Our premium coworking space with stable power, fast WiFi and air conditioning — the perfect place to focus." },
  { icon: Lightbulb, title: "IT Consultation", desc: "Expert strategy and infrastructure advice tailored for businesses and startups." },
  { icon: Cpu, title: "Hardware & Software", desc: "Professional hardware solutions and custom software development for diverse clients." },
  { icon: GraduationCap, title: "IT Trainings", desc: "Specialized training programs in modern tech stacks and digital literacy." },
  { icon: Baby, title: "Kids Holiday Coding", desc: "Engaging coding and robotics programs designed specifically for children during holidays." },
  { icon: Trophy, title: "Inter School Competition", desc: "Organizing the Lafia inter-school tech competition to foster innovation and talent." },
  { icon: Briefcase, title: "SIWES", desc: "Hands-on internship programs for students and graduates to gain real-world experience." },
  { icon: Lightbulb, title: "NYSC", desc: "Service placement for corp members to gain real-world experience." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 scroll-mt-20">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            One hub. Every digital need.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From our Green Hub coworking space to professional IT consultation, trainings, and community competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-7 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-primary-soft text-primary mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
