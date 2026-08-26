import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#subjects", label: "Subjects" },
  { href: "#faculty", label: "Faculty" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Results" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="Deep Coaching Centre Logo"
            className="h-11 w-11 rounded-full object-contain drop-shadow-sm transition-transform group-hover:scale-105"
            width={44}
            height={44}
            loading="eager"
            decoding="async"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-lg leading-tight text-primary">Deep Coaching</span>
            <span className="text-[10px] font-semibold text-accent tracking-wider uppercase">Centre • Palam</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Book Free Demo</a>
          </Button>
        </div>
        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-foreground/80">
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" asChild><a href="#contact">Book Free Demo</a></Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
