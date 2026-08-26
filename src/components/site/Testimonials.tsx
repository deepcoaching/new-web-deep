import { Star } from "lucide-react";

const items = [
  { name: "Aarav Sharma", role: "Class 10, CBSE — 96%", quote: "The teachers explain every concept patiently. My maths score jumped from 70 to 96 in just one year!" },
  { name: "Priya Verma", role: "Parent of Class 5 student", quote: "My daughter loves going to Deep Coaching. The teachers are kind and the small batch size really helps her focus." },
  { name: "Rohan Mehta", role: "Class 12, Science — 94%", quote: "Physics and Chemistry felt impossible. The mentors here made it simple, and I cleared my boards with distinction." },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gradient-soft">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Loved by Students &amp; Parents</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <figure key={t.name} className="bg-card p-7 rounded-2xl border border-border shadow-card-soft">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-foreground/80 italic mb-5">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
