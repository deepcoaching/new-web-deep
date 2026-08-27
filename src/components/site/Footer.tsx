import { Facebook, Instagram, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/19LNEnA8je/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/deep.coachingcentre2017?igsi=aWtrNjlvbnh4dDg1&utm_source=qr",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@deepcoaching-i2e?si=HOhN-qZf3vqS4b8e",
  },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8">
    <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={logoImg}
            alt="Deep Coaching Centre Logo"
            className="h-14 w-14 rounded-full object-contain bg-white p-1 shadow-md ring-2 ring-accent/50 shrink-0"
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
          />
          <div>
            <span className="font-bold text-lg leading-tight block text-primary-foreground">Deep Coaching Centre</span>
            <span className="text-xs text-accent font-medium">Lighten-Up Your Future</span>
          </div>
        </div>
        <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
          Helping students from Class 1 to 12 master every subject with experienced teachers, small batches and proven results.
        </p>
        <div className="flex gap-3 mt-5">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 grid place-items-center rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
              aria-label={`Deep Coaching Centre on ${s.name}`}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#classes" className="hover:text-accent">Classes</a></li>
          <li><a href="#subjects" className="hover:text-accent">Subjects</a></li>
          <li><a href="#faculty" className="hover:text-accent">Faculty</a></li>
          <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1zj1oX6QLZVABdMFqQci-5qrFqqgB2QX-?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Access Notes
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-base">Contact</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>+91 93548 86752 / +91 88608 86752</li>
          <li>deepcoaching.palam@gmail.com</li>
          <li>
            <a
              href="https://maps.app.goo.gl/Em73uo3HrCciyvpDA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              RZH - 718, Gali No 4, Near Chotu Ram Marg, Rajnagar - II, Palam - 110077
            </a>
          </li>
          <li>Mon–Sat: 8 AM – 8 PM</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-12 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
      © {new Date().getFullYear()} Deep Coaching Centre. All rights reserved.
    </div>
  </footer>
);

export default Footer;
