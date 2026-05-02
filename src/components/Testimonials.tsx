import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    quote:
      "I'm thoroughly impressed with the Harley Innovation Hub! The cutting-edge facilities, expert mentorship, and collaborative community have taken my startup to the next level. The resources and support available are top-notch, and the networking opportunities have been invaluable. Whether you're a seasoned entrepreneur or just starting out, Harley Innovation Hub is the perfect place to turn your ideas into reality.",
    name: "Gospel Baby",
    role: "Google Review",
  },
  {
    quote:
      "Harley Innovation Hub is indeed a place of learning and training. The environment is conducive and the staff are good and welcoming. The services here are great — varying from cybersecurity, data analyst, backend and frontend development, product design, and data science. I believe I'm at the right place and I'm excited to be here.",
    name: "Edwin Benard",
    role: "Google Review",
  },
  {
    quote:
      "In Harley Innovation Hub, we were briefly taught the history of how it all started. We were also given directives on how to fill our log books and the different skills you can learn to further your experience. Harley Innovation provides the best facilities you can ever think of.",
    name: "Taye Adebesin",
    role: "Google Review",
  },
  {
    quote:
      "The environment is conducive and the staff are friendly. I like how poised and strict the management sound. The orientation was well structured — detailed explanations on the career paths for the SIWES program ranging from Data Analysis, Data Science, Cyber Security, Product Design, Frontend and Backend Development. I enjoyed my first day here.",
    name: "Adejo Gideon",
    role: "Google Review",
  },
  {
    quote:
      "Harley Innovation is actually the best place to do IT within Lafia. I'm an IT student currently doing my IT here. Harley Innovation has the best career paths to choose when doing your IT — it has the best path for you. It's actually cool.",
    name: "Obande Shalon Oyije",
    role: "Google Review",
  },
  {
    quote:
      "This is a great workspace, one of the first in Lafia, Nasarawa State. It is very conducive and comfortable — a place where one can also network with like-minded individuals.",
    name: "John Joseph",
    role: "Google Review",
  },
];

export const Testimonials = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const displayItems = isHomePage ? items.slice(0, 3) : items;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Trusted by our community.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real reviews from clients, students and members on Google.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-xl bg-card border border-border hover:shadow-elegant transition-shadow flex flex-col"
            >
              <div className="flex gap-0.5 mb-4" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-foreground flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-12 text-center">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Read more reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
