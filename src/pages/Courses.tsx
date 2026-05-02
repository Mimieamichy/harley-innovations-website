import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Code, 
  Database, 
  Layout, 
  Smartphone, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  Clock, 
  Tag, 
  Palette, 
  Settings, 
  CheckCircle, 
  Share2, 
  BookOpen 
} from "lucide-react";

const courseList = [
  {
    title: "Frontend Development",
    category: "Development",
    icon: Layout,
    desc: "HTML, CSS, JavaScript and React. Build pixel-perfect, responsive websites — the foundation of every great digital product.",
    duration: "12 Weeks",
    price: "₦80,000",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React & Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    category: "Development",
    icon: Code,
    desc: "Node.js, databases (SQL/NoSQL) and REST APIs. Engineer the server-side logic that powers web applications at scale.",
    duration: "12 Weeks",
    price: "₦80,000",
    skills: ["Node.js & Express", "Python & Django", "PostgreSQL & MongoDB", "REST APIs"]
  },
  {
    title: "Full Stack Development",
    category: "Development · Flagship",
    icon: Code,
    isFlagship: true,
    desc: "Our flagship programme — master both frontend and backend. Architect, build and deploy complete, production-ready web applications.",
    duration: "24 Weeks",
    price: "₦150,000",
    skills: ["MERN Stack", "System Architecture", "Deployment", "Full Stack Projects"]
  },
  {
    title: "Mobile Development",
    category: "Development",
    icon: Smartphone,
    desc: "React Native for iOS & Android. From concept to app store — build cross-platform mobile apps for Nigeria's smartphone-first generation.",
    duration: "12 Weeks",
    price: "₦80,000",
    skills: ["React Native", "Expo", "Mobile UI/UX", "App Store Deployment"]
  },
  {
    title: "Data Analysis",
    category: "Data & Design",
    icon: BarChart3,
    desc: "Master Excel, SQL and Power BI to transform raw data into business insights. Drive strategy and decisions through data.",
    duration: "12 Weeks",
    price: "₦50,000",
    skills: ["Advanced Excel", "SQL", "Power BI / Tableau", "Data Storytelling"]
  },
  {
    title: "Product Design (UI/UX)",
    category: "Data & Design",
    icon: Smartphone,
    desc: "UI/UX research, wireframing, Figma prototyping and design systems. Craft beautiful, user-centred digital experiences.",
    duration: "12 Weeks",
    price: "₦80,000",
    skills: ["User Research", "Figma Prototyping", "Wireframing", "Design Systems"]
  },
  {
    title: "Cybersecurity",
    category: "Security",
    icon: Shield,
    desc: "Ethical hacking, penetration testing, network defence and digital forensics. Safeguard systems in an increasingly vulnerable world.",
    duration: "12 Weeks",
    price: "₦120,000",
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Digital Forensics"]
  },
  {
    title: "Graphics Design",
    category: "Creative",
    icon: Palette,
    desc: "Master visual communication, typography, and color theory using industry-standard tools like Photoshop and Illustrator.",
    duration: "12 Weeks",
    price: "₦50,000",
    skills: ["Photoshop", "Illustrator", "Brand Identity", "Visual Design"]
  },
  {
    title: "Product Management",
    category: "Business",
    icon: Settings,
    desc: "Learn to lead product teams, define roadmaps, and bridge the gap between business goals and technical execution.",
    duration: "12 Weeks",
    price: "₦50,000",
    skills: ["Agile Methodologies", "Roadmapping", "Market Research", "Product Strategy"]
  },
  {
    title: "Quality Assurance & Procurement",
    category: "Operations",
    icon: CheckCircle,
    desc: "Master software testing, quality control processes, and strategic procurement management for tech environments.",
    duration: "12 Weeks",
    price: "₦80,000",
    skills: ["Software Testing", "Quality Control", "Procurement Strategy", "Supply Chain"]
  },
  {
    title: "Media Management",
    category: "Marketing",
    icon: Share2,
    desc: "Develop strategies for digital media, content creation, and platform management to build and engage audiences.",
    duration: "12 Weeks",
    price: "₦50,000",
    skills: ["Content Strategy", "Social Media", "Public Relations", "Digital Media"]
  },
  {
    title: "Digital Literacy",
    category: "Foundational",
    icon: BookOpen,
    desc: "Essential computer skills and internet proficiency for beginners looking to thrive in the modern digital age.",
    duration: "12 Weeks",
    price: "₦30,000",
    skills: ["Computer Basics", "Internet Safety", "Office Productivity", "Digital Tools"]
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <Navbar />
      <main className="pb-24">
        <div className="container-tight mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Tech Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on training designed to take you from beginner to professional in high-demand tech fields.
          </p>
        </div>

        <div className="container-tight grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course) => (
            <div key={course.title} className={`p-8 rounded-2xl border transition-all group relative flex flex-col ${
              course.isFlagship 
              ? "border-primary/40 bg-primary-soft shadow-elegant" 
              : "border-border bg-card hover:border-primary/40 hover:shadow-elegant"
            }`}>
              {course.isFlagship && (
                <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-glow">
                  Flagship Program
                </div>
              )}
              
              <div className="flex justify-between items-start mb-6">
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                  <course.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-foreground font-bold justify-end">
                    <Tag className="h-3.5 w-3.5 text-primary" />
                    {course.price}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">{course.desc}</p>
              
              <div className="flex items-center gap-4 mb-8 text-xs font-semibold text-foreground bg-muted/50 p-3 rounded-lg">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {course.duration}
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5 text-success">
                  Enrollment Open
                </div>
              </div>

              <a href="https://wa.me/2347041305874" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground w-full py-4 rounded-xl font-bold hover:shadow-glow transition-all">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="container-tight mt-24">
          <div className="bg-gradient-primary p-12 rounded-3xl text-primary-foreground text-center shadow-elegant">
            <h2 className="text-3xl font-bold mb-4">Not sure which path to choose?</h2>
            <p className="opacity-90 mb-8 max-w-xl mx-auto">Book a free career counseling session with our expert trainers to find the right track for you.</p>
            <a href="https://wa.me/2347041305874" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-glow transition-all">
              Book a Session
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
