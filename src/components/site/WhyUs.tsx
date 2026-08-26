import { Award, Clock, HeartHandshake, LineChart, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Award, title: "Experienced Faculty", desc: "Highly qualified teachers with 10+ years of board-prep experience." },
  { icon: LineChart, title: "Regular Assessments", desc: "Weekly tests and monthly performance reports for every student." },
  { icon: HeartHandshake, title: "Personal Mentoring", desc: "One-on-one doubt sessions and parent-teacher meetings." },
  { icon: Clock, title: "Flexible Timings", desc: "Morning and evening batches to fit your child's schedule." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "Disciplined, focused and friendly classroom culture." },
  { icon: Sparkles, title: "Modern Teaching", desc: "Smart classes, study material and digital resources included." },
];

const WhyUs = () => (
  <section id="why" className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Why Choose Us</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">The Deep Coaching Difference</h2>
        <p className="text-primary-foreground/70">A learning experience designed to make every student succeed.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-smooth">
            <it.icon className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2">{it.title}</h3>
            <p className="text-sm text-primary-foreground/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
