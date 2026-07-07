import { Linkedin, Twitter, Github, ArrowRight, Facebook, Instagram, PenTool, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import t1 from "@/assets/team-real-2.jpg";
import t2 from "@/assets/team-real-4.jpg";
import t3 from "@/assets/team-real-1.jpg";
import t4 from "@/assets/team-real-3.jpg";
import t5 from "@/assets/team-real-5.jpg";
import t6 from "@/assets/team-real-6.png";
import t7 from "@/assets/team-real-7.jpeg";
import t8 from "@/assets/team-real-8.jpeg";
import t9 from "@/assets/team-real-9.jpeg";
import t10 from "@/assets/team-real-10.jpeg";

const team = [
  { 
    img: t2, name: "Asher Jocos", role: "CEO",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/asherjocos", icon: Linkedin },
      { name: "Github", url: "https://www.github.com/asherjocos", icon: Github },
      { name: "X", url: "https://www.x.com/asherjocos", icon: Twitter },
    ]
  },
  { 
    img: t3, name: "AmazingMercy Amaefule", role: "Hub Manager",
    socials: [
      { name: "X", url: "https://www.x.com/Amazing_mercy", icon: Twitter },
      { name: "Github", url: "https://www.github.com/Amazingmercy", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/amazingmercy", icon: Linkedin },
    ]
  },
  { 
    img: t7, name: "Blessed Nguveren", role: "Hub Secretary",
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/msugh.blessed", icon: Facebook },
      { name: "Instagram", url: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=rxncq83", icon: Instagram },
      { name: "X", url: "https://x.com/LuNa_De_First", icon: Twitter },
    ]
  },
  { 
    img: t1, name: "Aluko Oluwole Isaiah", role: "Lead Design",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/thewoleisaiah", icon: Linkedin },
      { name: "Behance", url: "https://behance.net/thewoleisaiah", icon: PenTool },
      { name: "Instagram", url: "https://instagram.com/thewoleisaiah", icon: Instagram },
    ]
  },
  { 
    img: t4, name: "Lawisah Ogabo", role: "Lead Digital Marketer",
    socials: [
      { name: "TikTok", url: "https://www.tiktok.com/@lojcommunication?_r=1&_t=ZS-96sLHE7nf1z", icon: Link2 },
      { name: "Facebook", url: "https://www.facebook.com/share/1BTt2TB9AF/", icon: Facebook },
      { name: "Instagram", url: "https://www.instagram.com/lojcommunication?utm_source=qr&igsh=MTRkcHJmZnlyd3VkMQ==", icon: Instagram },
    ]
  },
  { 
    img: t5, name: "Miracle Ezeh", role: "Lead Developer",
    socials: [
      { name: "Github", url: "https://github.com/Mimieamichy", icon: Github },
      { name: "X", url: "https://x.com/dev_amichy", icon: Twitter },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/miracle-ae-89202a370", icon: Linkedin },
    ]
  },
  { 
    img: t6, name: "Joseph John", role: "Lead Data Science",
    socials: [
      { name: "X", url: "https://x.com/iamkvngjay01?s=21", icon: Twitter },
      { name: "Github", url: "https://github.com/kvngjay1/", icon: Github },
    ]
  },
  { 
    img: t9, name: "Tosin Yekpogu", role: "Lead Data Analysis",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/oluwatosinyekpogu", icon: Linkedin },
      { name: "Facebook", url: "https://www.facebook.com/share/14fc6bMfzzF/", icon: Facebook },
    ]
  },
  { 
    img: t8, name: "Abigail Abeson", role: "Lead Operation",
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/share/1JJZAqK8Eh/?mibextid=wwXIfr", icon: Facebook },
    ]
  },
  { 
    img: t10, name: "Shatar Terna", role: "Lead Hardware",
    socials: []
  },
];

export const Team = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const displayTeam = isHomePage ? team.slice(0, 4) : team;

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
          {displayTeam.map((m, index) => (
            <div
              key={index}
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
                  {m.socials && m.socials.map((social, sIndex) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={sIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} ${social.name}`} 
                        className="h-8 w-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-12 text-center">
            <Link 
              to="/team" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Meet the whole team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
