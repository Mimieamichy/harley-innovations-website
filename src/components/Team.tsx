import { Linkedin, Twitter } from "lucide-react";
import t1 from "@/assets/team-real-2.jpg";
import t2 from "@/assets/team-real-4.jpg";
import t3 from "@/assets/team-real-1.jpg";
import t4 from "@/assets/team-real-3.jpg";
import t5 from "@/assets/team-real-5.jpg";

const team = [
  { img: t1, name: "Team Member", role: "Role" },
  { img: t2, name: "Team Member", role: "Role" },
  { img: t3, name: "Team Member", role: "Role" },
  { img: t4, name: "Team Member", role: "Role" },
  { img: t5, name: "Team Member", role: "Role" },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our team</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Meet the people behind Harley.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A passionate team of builders, trainers and creators based in Lafia.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
                <div className="mt-3 flex gap-2">
                  <a href="#" aria-label={`${m.name} LinkedIn`} className="h-8 w-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a href="#" aria-label={`${m.name} Twitter`} className="h-8 w-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
