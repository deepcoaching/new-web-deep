import { Sparkles, Users, Atom, FlaskConical, Dna, PenTool, Code2 } from "lucide-react";

interface FacultyMember {
  name: string;
  role: string;
  isFounder?: boolean;
  subjects: string;
  desc: string;
}

const faculty: FacultyMember[] = [
  {
    name: "Vikas Deep",
    role: "Founder",
    isFounder: true,
    subjects: "English & Pol. Sci.",
    desc: "Visionary educator providing mentorship in English and Political Science with proven board results.",
  },
  {
    name: "Sandeep Thakur",
    role: "Commerce Faculty",
    subjects: "Accountancy, B.St & Economics",
    desc: "Commerce specialist guiding senior secondary students in conceptual accounting and business case studies.",
  },
  {
    name: "Ayush Jha",
    role: "Maths Faculty",
    subjects: "Mathematics (Class 6th–12th)",
    desc: "Mathematics expert building core fundamentals, arithmetic speed, calculus mastery and analytical clarity.",
  },
  {
    name: "Prashant Kumar",
    role: "English & SST Faculty",
    subjects: "English & Social Science (SST)",
    desc: "Dedicated faculty simplifying History, Geography, Civics, Economics, and English language comprehension.",
  },
];

const specialistTeams = [
  { icon: Atom, label: "Physics & NEET", count: "3+ Mentors", color: "from-blue-500 to-indigo-600" },
  { icon: FlaskConical, label: "Chemistry Lead", count: "2+ Mentors", color: "from-emerald-500 to-teal-600" },
  { icon: Dna, label: "Biology & Botany", count: "2+ Mentors", color: "from-teal-500 to-green-600" },
  { icon: Code2, label: "CS & Python", count: "2+ Trainers", color: "from-purple-500 to-violet-600" },
  { icon: PenTool, label: "Hindi & Sanskrit", count: "3+ Scholars", color: "from-amber-500 to-orange-500" },
  { icon: Users, label: "Primary Wing", count: "4+ Educators", color: "from-rose-500 to-pink-600" },
];

const Faculty = () => (
  <section id="faculty" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Our Mentors</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Meet the Faculty</h2>
        <p className="text-muted-foreground">
          Dedicated, experienced educators passionate about student success, concept clarity, and top board performance.
        </p>
      </div>

      {/* Core Faculty Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((t) => (
          <article
            key={t.name}
            className={`group relative bg-card border rounded-2xl p-6 text-center shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
              t.isFounder ? "border-accent/50 ring-1 ring-accent/20" : "border-border hover:border-accent/40"
            }`}
          >
            {t.isFounder && (
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                <Sparkles className="h-3 w-3" /> Founder
              </div>
            )}

            <div className="pt-2">
              <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-smooth mb-1">
                {t.name}
              </h3>
              <p className="text-sm text-accent font-semibold mb-3">{t.role}</p>

              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
                {t.subjects}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                {t.desc}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-border/60">
              <span className="text-[11px] font-medium text-muted-foreground">
                Deep Coaching Centre
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Visual Effect: Extended Faculty & Specialist Panel */}
      <div className="mt-10 rounded-2xl border border-border/80 bg-gradient-to-b from-card via-secondary/20 to-card p-6 md:p-8 shadow-card-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-44 w-44 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs uppercase tracking-wider">
              <Users className="h-3.5 w-3.5" /> Extended Teaching Panel
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              Supported by <span className="text-accent">15+ Subject Specialists</span> & Mentors
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Backed by experienced visiting professors, doubt-clearing tutors, laboratory guides, and primary educators for comprehensive 360° academic support.
            </p>
          </div>

          {/* Overlapping Floating Faculty Bubbles Effect */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex -space-x-3 overflow-hidden p-1">
              <div className="inline-grid place-items-center h-11 w-11 rounded-full ring-2 ring-background bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-[11px] font-bold shadow-sm">
                Phy
              </div>
              <div className="inline-grid place-items-center h-11 w-11 rounded-full ring-2 ring-background bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-[11px] font-bold shadow-sm">
                Chem
              </div>
              <div className="inline-grid place-items-center h-11 w-11 rounded-full ring-2 ring-background bg-gradient-to-br from-purple-500 to-violet-600 text-white text-[11px] font-bold shadow-sm">
                Bio
              </div>
              <div className="inline-grid place-items-center h-11 w-11 rounded-full ring-2 ring-background bg-gradient-to-br from-amber-500 to-orange-500 text-white text-[11px] font-bold shadow-sm">
                Lang
              </div>
              <div className="inline-grid place-items-center h-11 w-11 rounded-full ring-2 ring-background bg-gradient-accent text-accent-foreground text-xs font-extrabold shadow-gold animate-pulse">
                +12
              </div>
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-primary">Dedicated Team</p>
              <p className="text-[11px] text-muted-foreground">Every Subject & Class</p>
            </div>
          </div>
        </div>

        {/* Specialist Teams Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6 pt-6 border-t border-border/60">
          {specialistTeams.map((team) => (
            <div
              key={team.label}
              className="group p-3 rounded-xl bg-card/90 border border-border/70 hover:border-accent/50 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-200 text-center flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br ${team.color} text-white shadow-sm group-hover:scale-110 transition-smooth`}
              >
                <team.icon className="h-4 w-4" />
              </span>
              <p className="text-xs font-bold text-primary group-hover:text-accent transition-smooth line-clamp-1">
                {team.label}
              </p>
              <span className="text-[10px] font-semibold text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-full">
                {team.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Faculty;
