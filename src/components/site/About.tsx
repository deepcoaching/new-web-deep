import { BookOpen, Target, Users } from "lucide-react";

const About = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">About Us</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">A Trusted Name in Quality Education</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Deep Coaching Centre is a premier learning institute committed to nurturing every child from primary school through senior secondary. We blend conceptual clarity, regular assessments, and personal mentorship so every student reaches their highest potential.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether your child is just starting their academic journey in Class 1 or preparing for the Class 12 board exams, our structured curriculum and dedicated faculty are here every step of the way.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { icon: BookOpen, title: "All Subjects", desc: "Maths, Science, English, SST, Hindi, Sanskrit and more — all under one roof." },
          { icon: Users, title: "Small Batches", desc: "Limited students per batch ensures personal attention for everyone." },
          { icon: Target, title: "Result Oriented", desc: "Regular tests, doubt sessions and personal mentoring drive results." },
          { icon: BookOpen, title: "All Boards", desc: "CBSE, ICSE and State boards — tailored study plans for each." },
        ].map((f) => (
          <div key={f.title} className="bg-card p-6 rounded-xl shadow-card-soft border border-border hover:shadow-elegant transition-smooth">
            <div className="h-11 w-11 grid place-items-center rounded-lg bg-gradient-accent text-accent-foreground mb-4">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-primary mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
