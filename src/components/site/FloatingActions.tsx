import { MessageCircle, Phone } from "lucide-react";

const FloatingActions = () => (
  <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
    <a
      href="https://wa.me/919354886752?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20coaching%20classes."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="h-14 w-14 grid place-items-center rounded-full bg-[hsl(142_70%_40%)] text-white shadow-elegant hover:scale-105 transition-smooth"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <a
      href="tel:+919354886752"
      aria-label="Call Deep Coaching Centre"
      className="h-14 w-14 grid place-items-center rounded-full bg-gradient-accent text-accent-foreground shadow-gold hover:scale-105 transition-smooth"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingActions;
