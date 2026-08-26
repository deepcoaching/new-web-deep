import { Award, Users, Star, BookOpenCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Students Mentored" },
  { icon: Award, value: "98%", label: "Board Pass Rate" },
  { icon: Star, value: "200+", label: "90%+ Scorers" },
  { icon: BookOpenCheck, value: "15+", label: "Years of Excellence" },
];

const Achievements = () => (
  <section className="py-14 bg-gradient-hero text-primary-foreground">
    <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <s.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
          <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
          <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;
