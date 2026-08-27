import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import img01 from "@/assets/image01.jpeg";
import img02 from "@/assets/image02.jpeg";
import img03 from "@/assets/image03.jpeg";
import img04 from "@/assets/image04.jpeg";
import img05 from "@/assets/image05.jpeg";

const heroImages = [
  {
    src: img01,
    alt: "Deep Coaching Centre faculty and students group photo",
    caption: "Deep Coaching Centre Batch & Faculty",
  },
  {
    src: img02,
    alt: "Deep Coaching Centre high school students in classroom",
    caption: "Interactive & Engaging Classrooms",
  },
  {
    src: img03,
    alt: "Dedicated teacher conducting concept clarity session at whiteboard",
    caption: "Expert Subject Specialists",
  },
  {
    src: img04,
    alt: "Students enjoying learning milestones at Deep Coaching Centre",
    caption: "Personal Attention & Small Batches",
  },
  {
    src: img05,
    alt: "Maths and Science conceptual classroom teaching at Deep Coaching Centre",
    caption: "Concept Clarity & Core Fundamentals",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 second transition gap

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-soft">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <Sparkles className="h-4 w-4" /> Admissions Open
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight text-balance">
            Empowering Young Minds from <span className="text-accent">Class 1 to 12</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            At Deep Coaching Centre, we deliver personalised tuition across all subjects with experienced teachers, small batches, and a proven track record of board-exam excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Book a Free Demo Class <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#classes">Explore Classes</a>
            </Button>
          </div>
          <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-border max-w-md">
            <div>
              <dt className="text-2xl font-bold text-primary">10+</dt>
              <dd className="text-xs text-muted-foreground">Years Experience</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-primary">1,000+</dt>
              <dd className="text-xs text-muted-foreground">Students Taught</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-primary">98%</dt>
              <dd className="text-xs text-muted-foreground">Result Rate</dd>
            </div>
          </dl>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-2xl pointer-events-none" />
          
          <div className="relative rounded-2xl shadow-elegant border border-border/50 overflow-hidden bg-card aspect-[4/3] sm:aspect-[16/11] md:aspect-[4/3] lg:aspect-[16/11]">
            {heroImages.map((img, idx) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-16 text-white z-10">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/40 hover:bg-black/70 text-white grid place-items-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-black/40 hover:bg-black/70 text-white grid place-items-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Slide Dots */}
            <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-5 bg-accent"
                      : "w-2 bg-white/50 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
