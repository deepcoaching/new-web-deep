import { Baby, BookOpen, GraduationCap, Trophy } from "lucide-react";

const groups = [
  {
    icon: Baby,
    title: "Primary (Class 1–5)",
    desc: "Foundation building with playful, activity-based learning in all core subjects.",
    subjects: ["English", "Maths", "EVS", "Hindi", "GK"],
  },
  {
    icon: BookOpen,
    title: "Middle School (Class 6–8)",
    desc: "Concept clarity in Maths, Science and Languages with regular assessments.",
    subjects: ["Maths", "Science", "English", "SST", "Sanskrit / Hindi"],
  },
  {
    icon: GraduationCap,
    title: "Secondary (Class 9–10)",
    desc: "Board-focused training for CBSE / ICSE / State Boards with mock tests.",
    subjects: ["Maths", "Science", "English", "SST", "Hindi"],
  },
  {
    icon: Trophy,
    title: "Senior Secondary (Class 11–12)",
    desc: "Deep subject mastery for board exams and competitive entrance preparation.",
    subjects: ["Physics", "Chemistry", "Maths", "Biology", "Accounts", "Economics", "English"],
  },
];

const Classes = () => (
  <section id="classes" className="py-20 bg-gradient-soft">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Programs</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Classes We Teach</h2>
        <p className="text-muted-foreground">Comprehensive coaching from Class 1 through Class 12 — every grade, every board.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g) => (
          <article key={g.title} className="bg-card rounded-2xl p-6 shadow-card-soft border border-border hover:-translate-y-1 hover:shadow-elegant transition-smooth">
            <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-hero text-primary-foreground mb-4">
              <g.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{g.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{g.desc}</p>
            <ul className="flex flex-wrap gap-2">
              {g.subjects.map((s) => (
                <li key={s} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Classes;
