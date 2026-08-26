import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Flame, Sparkles, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/FloatingActions";

const FreeDemoBanner = () => {
  return (
    <section className="relative -mt-4 sm:-mt-6 mb-10 z-20">
      <div className="container mx-auto px-4">
        {/* Glowing Gradient Border Wrap */}
        <div className="relative group p-[1.5px] rounded-3xl bg-gradient-to-r from-accent via-amber-300 via-primary-glow to-accent shadow-gold hover:shadow-2xl transition-all duration-500">
          
          {/* Main Card Container */}
          <div className="relative overflow-hidden rounded-[23px] bg-gradient-to-br from-primary via-[#0a1b38] to-primary p-5 sm:p-7 md:p-8 text-primary-foreground">
            
            {/* Ambient Radial Glows */}
            <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-accent/20 blur-3xl pointer-events-none group-hover:bg-accent/30 transition-all duration-700" />
            <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

            {/* Shimmer Light Reflection Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Left Column: Visual 07-Day Tile + Offer Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left max-w-2xl">
                
                {/* 3D Glowing 07 Badge */}
                <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-amber-500 opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-20 w-20 sm:h-22 sm:w-22 rounded-2xl bg-gradient-to-b from-amber-300 via-accent to-amber-600 p-[1px] shadow-lg flex flex-col items-center justify-center text-slate-950">
                    <div className="w-full h-full rounded-[15px] bg-gradient-to-b from-amber-200 via-accent to-amber-500 flex flex-col items-center justify-center p-1">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-slate-950 drop-shadow-sm">
                        07
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-900 leading-none mt-0.5">
                        DAYS FREE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Offer Copy */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs uppercase tracking-wider shadow-sm">
                    <Flame className="h-3.5 w-3.5 text-accent animate-bounce" />
                    <span>Admissions 2026 • 100% Risk-Free Trial</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-200 to-accent underline decoration-accent/40 decoration-wavy decoration-2">07 Days Free Demo</span> Class!
                  </h2>

                  <p className="text-xs sm:text-sm text-primary-foreground/80 leading-relaxed max-w-xl">
                    Attend 7 live classroom sessions with expert mentors for any grade (Class 1–12). Experience our concept-first teaching before you decide — no advance payment needed.
                  </p>

                  {/* Core Benefits Pills */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 pt-1 text-xs text-primary-foreground/90 font-medium">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      7 Days Classroom Tuition
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      Free Study Notes
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      1-on-1 Doubt Solving
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: High-Conversion Action Hub */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto shrink-0 items-center">
                
                {/* Social Proof Star Badge */}
                <div className="flex items-center gap-1 text-[11px] font-semibold text-accent mb-0.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-white text-[11px] ml-1">4.9/5 (500+ Students)</span>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="font-bold text-sm sm:text-base shadow-gold hover:scale-[1.03] active:scale-[0.98] transition-all px-7 py-5 sm:py-6 rounded-xl border border-accent/40 w-full sm:w-auto group/btn relative overflow-hidden"
                  asChild
                >
                  <a href="#contact" className="flex items-center justify-center">
                    <Sparkles className="h-4 w-4 mr-2 text-accent-foreground group-hover/btn:rotate-12 transition-transform" />
                    Join Now — Claim 7-Day Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-2 w-full">
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-lg shadow-sm flex-1 sm:flex-initial px-3.5 py-2 h-9"
                  >
                    <a
                      href="https://wa.me/919354886752?text=Hi%2C%20I%20want%20to%20claim%20the%2007%20Days%20Free%20Demo%20Class%20at%20Deep%20Coaching%20Centre."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-white"
                    >
                      <WhatsAppIcon className="h-4 w-4 mr-1.5 fill-white" /> WhatsApp Us
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    size="sm"
                    className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm rounded-lg shadow-md border-2 border-accent flex-1 sm:flex-initial px-3.5 py-2 h-9"
                  >
                    <a href="tel:+919354886752" className="flex items-center justify-center text-slate-900 font-extrabold">
                      <Phone className="h-4 w-4 mr-1.5 text-accent fill-accent shrink-0" />
                      <span>+91 93548 86752</span>
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeDemoBanner;
