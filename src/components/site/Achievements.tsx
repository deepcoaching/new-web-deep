import { Users, Award, Star, Clock, CheckCircle2, Sparkles, Trophy, ShieldCheck } from "lucide-react";

const Achievements = () => (
  <section className="relative py-14 sm:py-20 bg-gradient-to-b from-background via-secondary/25 to-background overflow-hidden">
    <div className="container mx-auto px-4">
      {/* 4 Uniquely Shaped Architectural Stat Sculptures */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
        
        {/* CARD 1: The Archway Monument (Curved Vault) */}
        <div className="group relative rounded-t-[44px] rounded-b-2xl bg-card border-2 border-border hover:border-amber-400/70 p-6 sm:p-7 shadow-card-soft hover:shadow-[0_15px_35px_rgba(234,179,8,0.2)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between overflow-hidden">
          {/* Subtle Arch Glow Line */}
          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-amber-400/15 blur-2xl pointer-events-none group-hover:bg-amber-400/25 transition-all" />

          {/* Top: Circular Sunburst Icon */}
          <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 grid place-items-center shadow-md group-hover:rotate-12 transition-transform duration-300">
              <Users className="h-6 w-6 fill-current" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/25">
              ALUMNI BASE
            </span>
          </div>

          {/* Metric & Title */}
          <div className="space-y-1.5 my-2 relative z-10">
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-primary font-serif group-hover:text-amber-500 transition-colors">
              1,000+
            </div>
            <h3 className="text-base font-bold text-foreground">
              Students Mentored
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              Foundation to board success
            </p>
          </div>

          {/* Bottom Footprint */}
          <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-muted-foreground relative z-10">
            <span>Class 1st – 12th</span>
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          </div>
        </div>

        {/* CARD 2: The Precision Diagonal Leaf (Top-Right & Bottom-Left Curvature) */}
        <div className="group relative rounded-tr-[44px] rounded-bl-[44px] rounded-tl-2xl rounded-br-2xl bg-card border-2 border-border hover:border-emerald-500/70 p-6 sm:p-7 shadow-card-soft hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

          {/* Top: Mini Radial Precision Ring */}
          <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Award className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
              SUCCESS RATE
            </span>
          </div>

          {/* Metric & Title */}
          <div className="space-y-1.5 my-2 relative z-10">
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-primary font-serif group-hover:text-emerald-500 transition-colors">
              98%
            </div>
            <h3 className="text-base font-bold text-foreground">
              Board Pass Rate
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              High distinction benchmark
            </p>
          </div>

          {/* Bottom Footprint */}
          <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-muted-foreground relative z-10">
            <span>CBSE & ICSE Boards</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          </div>
        </div>

        {/* CARD 3: The Radiant Starburst Crest (Top-Left & Bottom-Right Curvature) */}
        <div className="group relative rounded-tl-[44px] rounded-br-[44px] rounded-tr-2xl rounded-bl-2xl bg-card border-2 border-border hover:border-blue-500/70 p-6 sm:p-7 shadow-card-soft hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />

          {/* Top: Starburst Cluster */}
          <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-md group-hover:rotate-6 transition-transform duration-300">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400" />
              ))}
            </div>
          </div>

          {/* Metric & Title */}
          <div className="space-y-1.5 my-2 relative z-10">
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-primary font-serif group-hover:text-blue-500 transition-colors">
              200+
            </div>
            <h3 className="text-base font-bold text-foreground">
              90%+ Scorers
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              Academic board toppers
            </p>
          </div>

          {/* Bottom Footprint */}
          <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-muted-foreground relative z-10">
            <span>Distinction Achievers</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
          </div>
        </div>

        {/* CARD 4: The Heritage Shield (Inverted Arch Base) */}
        <div className="group relative rounded-b-[44px] rounded-t-2xl bg-card border-2 border-border hover:border-purple-500/70 p-6 sm:p-7 shadow-card-soft hover:shadow-[0_15px_35px_rgba(168,85,247,0.2)] hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between overflow-hidden">
          {/* Subtle Bottom Glow Line */}
          <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full bg-purple-500/15 blur-2xl pointer-events-none group-hover:bg-purple-500/25 transition-all" />

          {/* Top: Heritage Seal */}
          <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white grid place-items-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/25">
              EST. 2014
            </span>
          </div>

          {/* Metric & Title */}
          <div className="space-y-1.5 my-2 relative z-10">
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-primary font-serif group-hover:text-purple-500 transition-colors">
              10+
            </div>
            <h3 className="text-base font-bold text-foreground">
              Years of Excellence
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              Decade of trusted pedagogy
            </p>
          </div>

          {/* Bottom Footprint */}
          <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-muted-foreground relative z-10">
            <span>Rajnagar-II, Palam</span>
            <ShieldCheck className="h-3.5 w-3.5 text-purple-500" />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Achievements;
