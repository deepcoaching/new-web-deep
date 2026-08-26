import { useState } from "react";
import {
  Calculator,
  Atom,
  FlaskConical,
  Languages,
  Globe2,
  PenTool,
  TrendingUp,
  Briefcase,
  Code2,
  Dna,
  Compass,
  Brain,
  Scale,
  FileSpreadsheet,
  BookOpenCheck,
  Leaf,
  Sparkles,
  LucideIcon,
} from "lucide-react";

type SectionId = "all" | "primary" | "secondary" | "science" | "commerce" | "humanities";

interface SectionTab {
  id: SectionId;
  label: string;
  badge: string;
}

const sections: SectionTab[] = [
  { id: "all", label: "All 5 Sections", badge: "Class 1–12" },
  { id: "primary", label: "1st to 5th", badge: "Primary" },
  { id: "secondary", label: "6th to 10th", badge: "Middle & 10th" },
  { id: "science", label: "Science Stream", badge: "11th–12th" },
  { id: "commerce", label: "Commerce Stream", badge: "11th–12th" },
  { id: "humanities", label: "Humanities Stream", badge: "11th–12th" },
];

interface SectionTheme {
  name: string;
  badgeClass: string;
  iconBg: string;
  topBarGradient: string;
  hoverBorder: string;
  hoverGlow: string;
  pillClass: string;
  titleHover: string;
  tabActive: string;
  tabDot: string;
}

const sectionThemes: Record<"primary" | "secondary" | "science" | "commerce" | "humanities", SectionTheme> = {
  primary: {
    name: "1st to 5th",
    badgeClass: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-amber-500/25",
    topBarGradient: "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500",
    hoverBorder: "hover:border-amber-500/50",
    hoverGlow: "hover:shadow-amber-500/15",
    pillClass: "bg-amber-500/10 text-amber-900 dark:text-amber-200 group-hover:bg-amber-500/20 group-hover:text-amber-700 dark:group-hover:text-amber-300",
    titleHover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    tabActive: "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-500 shadow-md shadow-amber-500/25",
    tabDot: "bg-amber-500",
  },
  secondary: {
    name: "6th to 10th",
    badgeClass: "bg-blue-500/15 text-blue-800 dark:text-blue-300 border border-blue-500/30",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/25",
    topBarGradient: "bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600",
    hoverBorder: "hover:border-blue-500/50",
    hoverGlow: "hover:shadow-blue-500/15",
    pillClass: "bg-blue-500/10 text-blue-900 dark:text-blue-200 group-hover:bg-blue-500/20 group-hover:text-blue-700 dark:group-hover:text-blue-300",
    titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    tabActive: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-md shadow-blue-500/25",
    tabDot: "bg-blue-500",
  },
  science: {
    name: "Science Stream",
    badgeClass: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/25",
    topBarGradient: "bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600",
    hoverBorder: "hover:border-emerald-500/50",
    hoverGlow: "hover:shadow-emerald-500/15",
    pillClass: "bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 group-hover:bg-emerald-500/20 group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    tabActive: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md shadow-emerald-500/25",
    tabDot: "bg-emerald-500",
  },
  commerce: {
    name: "Commerce Stream",
    badgeClass: "bg-purple-500/15 text-purple-800 dark:text-purple-300 border border-purple-500/30",
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-purple-500/25",
    topBarGradient: "bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600",
    hoverBorder: "hover:border-purple-500/50",
    hoverGlow: "hover:shadow-purple-500/15",
    pillClass: "bg-purple-500/10 text-purple-900 dark:text-purple-200 group-hover:bg-purple-500/20 group-hover:text-purple-700 dark:group-hover:text-purple-300",
    titleHover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    tabActive: "bg-gradient-to-r from-purple-600 to-violet-600 text-white border-purple-600 shadow-md shadow-purple-500/25",
    tabDot: "bg-purple-500",
  },
  humanities: {
    name: "Humanities Stream",
    badgeClass: "bg-rose-500/15 text-rose-800 dark:text-rose-300 border border-rose-500/30",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-rose-500/25",
    topBarGradient: "bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600",
    hoverBorder: "hover:border-rose-500/50",
    hoverGlow: "hover:shadow-rose-500/15",
    pillClass: "bg-rose-500/10 text-rose-900 dark:text-rose-200 group-hover:bg-rose-500/20 group-hover:text-rose-700 dark:group-hover:text-rose-300",
    titleHover: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    tabActive: "bg-gradient-to-r from-rose-600 to-pink-600 text-white border-rose-600 shadow-md shadow-rose-500/25",
    tabDot: "bg-rose-500",
  },
};

interface Subject {
  name: string;
  section: string;
  sectionId: "primary" | "secondary" | "science" | "commerce" | "humanities";
  icon: LucideIcon;
  desc: string;
  topics: string[];
}

const allSubjects: Subject[] = [
  // 1. Section: 1st to 5th (Primary Wing)
  {
    name: "Mathematics (Class 1–5)",
    section: "1st to 5th",
    sectionId: "primary",
    icon: Calculator,
    desc: "Mental math, arithmetic foundations, tables, fractions, 2D/3D shapes and basic problem solving.",
    topics: ["Mental Maths", "Basic Arithmetic", "Shapes", "Tables", "Word Problems"],
  },
  {
    name: "English & Phonics",
    section: "1st to 5th",
    sectionId: "primary",
    icon: Languages,
    desc: "Phonics, reading fluency, handwriting mastery, storytelling and early grammar basics.",
    topics: ["Phonics", "Handwriting", "Grammar Basics", "Vocabulary", "Story Reading"],
  },
  {
    name: "EVS & Environmental Science",
    section: "1st to 5th",
    sectionId: "primary",
    icon: Leaf,
    desc: "Plants, animals, human body systems, environment, safety habits and nature exploration.",
    topics: ["Plants & Animals", "Human Body", "Environment", "Safety & Hygiene"],
  },
  {
    name: "Hindi (Primary)",
    section: "1st to 5th",
    sectionId: "primary",
    icon: PenTool,
    desc: "Varnamala, Matra Gyan, vocabulary, handwriting improvement, poems and creative writing.",
    topics: ["Varnamala", "Matra Gyan", "Kavita & Kahani", "Shabd Rachna"],
  },
  {
    name: "General Knowledge & Puzzles",
    section: "1st to 5th",
    sectionId: "primary",
    icon: Sparkles,
    desc: "Everyday science wonders, logical puzzles, moral values, quiz basics and creative thinking.",
    topics: ["General Awareness", "Logical Puzzles", "Moral Values", "Everyday Science"],
  },

  // 2. Section: 6th to 10th (Middle & Secondary Wing)
  {
    name: "Mathematics (Class 6–10)",
    section: "6th to 10th",
    sectionId: "secondary",
    icon: Calculator,
    desc: "Complete CBSE/ICSE curriculum: Algebra, Triangles, Trigonometry, Coordinate Geometry & Statistics.",
    topics: ["Algebra", "Triangles", "Trigonometry", "Coordinate Geo", "NCERT Exemplar"],
  },
  {
    name: "Science (Physics, Chem, Bio)",
    section: "6th to 10th",
    sectionId: "secondary",
    icon: FlaskConical,
    desc: "Laws of motion, Electricity, Chemical reactions, Life processes, Periodic table & NCERT exemplars.",
    topics: ["Physics Laws", "Chemical Equations", "Life Processes", "Light & Electricity"],
  },
  {
    name: "Social Science (SST)",
    section: "6th to 10th",
    sectionId: "secondary",
    icon: Globe2,
    desc: "Comprehensive History, Geography resources, Democratic politics, Economics and map work practice.",
    topics: ["History", "Geography Resources", "Democratic Politics", "Economics", "Map Work"],
  },
  {
    name: "English Language & Literature",
    section: "6th to 10th",
    sectionId: "secondary",
    icon: Languages,
    desc: "Integrated formal grammar, analytical writing, formal letters, prose & poetry literary analysis.",
    topics: ["Integrated Grammar", "Prose & Poetry", "Formal Letters", "Comprehension"],
  },
  {
    name: "Hindi & Sanskrit",
    section: "6th to 10th",
    sectionId: "secondary",
    icon: PenTool,
    desc: "CBSE/State Board Vyakaran (Sandhi, Samas, Alankar), Sahitya appreciation and Sanskrit Dhatu Roop.",
    topics: ["Vyakaran & Alankar", "Sahitya Khand", "Sanskrit Dhatu", "Nibandh & Patra"],
  },
  {
    name: "Computer Science & IT (402)",
    section: "6th to 10th",
    sectionId: "secondary",
    icon: Code2,
    desc: "Digital documentation, spreadsheets, DBMS database queries, Python/HTML basics and cyber safety.",
    topics: ["Spreadsheets", "DBMS & SQL", "Python Basics", "Cyber Safety"],
  },

  // 3. Section: Science Stream (Class 11th & 12th)
  {
    name: "Physics (Class 11–12)",
    section: "Science Stream",
    sectionId: "science",
    icon: Atom,
    desc: "Mechanics, Thermodynamics, Electrodynamics, Ray/Wave Optics, Modern Physics and derivations.",
    topics: ["Mechanics", "Electrodynamics", "Optics", "Modern Physics", "Numericals"],
  },
  {
    name: "Chemistry (Class 11–12)",
    section: "Science Stream",
    sectionId: "science",
    icon: FlaskConical,
    desc: "Physical calculations, Organic mechanisms, Coordination compounds and NCERT line-by-line mastery.",
    topics: ["Physical Chem", "Organic Mechanisms", "Coordination", "NCERT Detailed"],
  },
  {
    name: "Mathematics (Class 11–12)",
    section: "Science Stream",
    sectionId: "science",
    icon: Calculator,
    desc: "Differential & Integral Calculus, Vectors, 3D Geometry, Matrices, Probability and Board prep.",
    topics: ["Calculus", "Vectors & 3D", "Matrices", "Probability", "Board + JEE Prep"],
  },
  {
    name: "Biology (Class 11–12)",
    section: "Science Stream",
    sectionId: "science",
    icon: Dna,
    desc: "Botany, Zoology, Genetics, Human Physiology, Biotechnology, Ecology and NEET foundations.",
    topics: ["Genetics", "Human Physiology", "Biotechnology", "Botany", "NEET Foundation"],
  },
  {
    name: "Computer Science & Python",
    section: "Science Stream",
    sectionId: "science",
    icon: Code2,
    desc: "Python 3 OOP, Pandas dataframes, SQL database queries, data structures and computer networks.",
    topics: ["Python 3 OOP", "Pandas DataFrames", "SQL Queries", "Networking"],
  },
  {
    name: "English Core (Science)",
    section: "Science Stream",
    sectionId: "science",
    icon: BookOpenCheck,
    desc: "Notice & report writing, formal letters, note-making and Flamingo/Vistas literature analysis.",
    topics: ["Report & Notice", "Flamingo & Vistas", "Note Making", "Official Letters"],
  },

  // 4. Section: Commerce Stream (Class 11th & 12th)
  {
    name: "Accountancy",
    section: "Commerce Stream",
    sectionId: "commerce",
    icon: FileSpreadsheet,
    desc: "Double entry, Partnership accounts, Company shares, Cash flow statements and financial analysis.",
    topics: ["Partnership Accounts", "Company Shares", "Cash Flow", "Financial Analysis"],
  },
  {
    name: "Business Studies",
    section: "Commerce Stream",
    sectionId: "commerce",
    icon: Briefcase,
    desc: "Management principles, Business finance, Financial markets, Marketing and case study frameworks.",
    topics: ["Management Principles", "Financial Markets", "Marketing", "Case Studies"],
  },
  {
    name: "Economics (Commerce)",
    section: "Commerce Stream",
    sectionId: "commerce",
    icon: TrendingUp,
    desc: "Microeconomics, Macroeconomics, National Income accounting, Indian Economy and statistics.",
    topics: ["Microeconomics", "Macroeconomics", "National Income", "Indian Economy"],
  },
  {
    name: "Applied Mathematics",
    section: "Commerce Stream",
    sectionId: "commerce",
    icon: Calculator,
    desc: "Financial math, annuities, loan modeling, linear programming, calculus for commerce and probability.",
    topics: ["Financial Maths", "Annuities & Loans", "Commerce Calculus", "Linear Prog."],
  },
  {
    name: "English Core (Commerce)",
    section: "Commerce Stream",
    sectionId: "commerce",
    icon: BookOpenCheck,
    desc: "Business correspondence, job applications, reports, invitations and literature analysis.",
    topics: ["Job Application", "Business Letters", "Invitations", "Literature"],
  },

  // 5. Section: Humanities / Arts Stream (Class 11th & 12th)
  {
    name: "History",
    section: "Humanities Stream",
    sectionId: "humanities",
    icon: BookOpenCheck,
    desc: "Themes in Indian History: Ancient civilizations, Mughal court, Freedom struggle & Constitution making.",
    topics: ["Ancient India", "Mughal Court", "Freedom Struggle", "Constitution"],
  },
  {
    name: "Political Science",
    section: "Humanities Stream",
    sectionId: "humanities",
    icon: Scale,
    desc: "Indian Constitution, Contemporary World Politics, Global organizations and long answer writing.",
    topics: ["Indian Constitution", "World Politics", "Global Orgs", "Answer Structuring"],
  },
  {
    name: "Geography",
    section: "Humanities Stream",
    sectionId: "humanities",
    icon: Compass,
    desc: "Physical geomorphology, climate, Human geography, India's resources, economy and cartography.",
    topics: ["Physical Geo", "Human Geo", "India Resources", "Map Work"],
  },
  {
    name: "Economics (Humanities)",
    section: "Humanities Stream",
    sectionId: "humanities",
    icon: TrendingUp,
    desc: "Macroeconomic theory, National Income, Government Budget, Rural development and economic reforms.",
    topics: ["Macroeconomics", "National Income", "Rural Dev", "Govt Budget"],
  },
  {
    name: "Psychology & Sociology",
    section: "Humanities Stream",
    sectionId: "humanities",
    icon: Brain,
    desc: "Cognitive processes, personality attributes, psychological disorders, social structures and change.",
    topics: ["Personality", "Psychology Disorders", "Social Institutions", "Social Change"],
  },
  {
    name: "English & Hindi Elective",
    section: "Humanities Stream",
    sectionId: "humanities",
    icon: Languages,
    desc: "Advanced literary analysis, creative writing, poetry appreciation, essays and critical commentary.",
    topics: ["Literary Analysis", "Advanced Vyakaran", "Essay Writing", "Poetry Analysis"],
  },
];

const Subjects = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("all");

  const filteredSubjects =
    activeSection === "all"
      ? allSubjects
      : allSubjects.filter((s) => s.sectionId === activeSection);

  return (
    <section id="subjects" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-accent font-semibold uppercase tracking-wider text-xs md:text-sm mb-2">5 Dedicated Sections</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3">Complete Subject Coverage</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Structured learning across 5 academic sections: 1st to 5th Primary, 6th to 10th Middle & Secondary, plus Science, Commerce, and Humanities streams.
          </p>
        </div>

        {/* 5 Section Filter Tabs with Color Coding */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {sections.map((sec) => {
            const count =
              sec.id === "all"
                ? allSubjects.length
                : allSubjects.filter((s) => s.sectionId === sec.id).length;
            const isActive = activeSection === sec.id;
            const theme = sec.id !== "all" ? sectionThemes[sec.id] : null;

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setActiveSection(sec.id)}
                className={`px-3.5 py-2 rounded-full text-xs md:text-sm font-medium transition-smooth flex items-center gap-2 border ${
                  isActive
                    ? sec.id === "all"
                      ? "bg-gradient-hero text-primary-foreground border-primary shadow-elegant"
                      : theme?.tabActive
                    : "bg-card text-foreground/80 border-border hover:border-accent hover:text-primary"
                }`}
              >
                {theme && (
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-white" : theme.tabDot
                    }`}
                  />
                )}
                <span>{sec.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact & Color-Themed Subjects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSubjects.map((s) => {
            const theme = sectionThemes[s.sectionId];

            return (
              <article
                key={`${s.sectionId}-${s.name}`}
                className={`relative group p-4 sm:p-5 rounded-xl border border-border/80 bg-card ${theme.hoverBorder} ${theme.hoverGlow} hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden`}
              >
                {/* Distinct Section Top Gradient Highlight Bar on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 ${theme.topBarGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>
                  {/* Header Row: Styled Themed Icon + Section Badge */}
                  <div className="flex items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`h-9 w-9 grid place-items-center rounded-lg ${theme.iconBg} shrink-0 shadow-sm group-hover:scale-105 transition-smooth`}
                      >
                        <s.icon className="h-4 w-4" />
                      </span>
                      <h3
                        className={`font-bold text-sm sm:text-base text-primary ${theme.titleHover} transition-smooth truncate`}
                      >
                        {s.name}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full shrink-0 ${theme.badgeClass}`}
                    >
                      {s.section}
                    </span>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {s.desc}
                  </p>
                </div>

                {/* Themed Topic Pills */}
                <div className="pt-2.5 border-t border-border/60">
                  <div className="flex flex-wrap gap-1">
                    {s.topics.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-md transition-colors ${theme.pillClass}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
