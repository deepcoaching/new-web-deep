import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Please enter at least 2 characters" })
      .max(100, { message: "Name must be less than 100 characters" }),
    phone: z
      .string()
      .trim()
      .regex(/^[+\d][\d\s\-()]{7,19}$/, {
        message: "Enter a valid phone number (8–20 digits)",
      }),
    email: z
      .string()
      .trim()
      .max(255, { message: "Email must be less than 255 characters" })
      .email({ message: "Enter a valid email address" })
      .optional()
      .or(z.literal("")),
    grade: z
      .string()
      .trim()
      .min(1, { message: "Please enter a class / grade" })
      .max(50, { message: "Class must be less than 50 characters" }),
    message: z
      .string()
      .trim()
      .max(1000, { message: "Message must be less than 1000 characters" })
      .optional()
      .or(z.literal("")),
  });

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "grade" | "message", string>>;

const Contact = () => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    grade: string;
    waUrl: string;
  } | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      grade: String(data.get("grade") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});

    // Construct structured WhatsApp message for the owner
    const formattedDate = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const waLines = [
      `🎓 *New Demo Class Enquiry — Deep Coaching Centre*`,
      `────────────────────────────`,
      `👤 *Student/Parent Name:* ${values.name}`,
      `📞 *Contact Number:* ${values.phone}`,
      `📚 *Class / Grade:* ${values.grade}`,
      values.email ? `📧 *Email:* ${values.email}` : null,
      values.message ? `💬 *Requirement / Message:* ${values.message}` : null,
      `────────────────────────────`,
      `📅 *Date:* ${formattedDate}`,
      `_Sent via Deep Coaching Centre Website_`,
    ].filter(Boolean);

    const waText = waLines.join("\n");
    const waUrl = `https://wa.me/919354886752?text=${encodeURIComponent(waText)}`;

    // Set submitted state for persistent 1-tap confirmation
    setSubmittedData({
      name: values.name,
      phone: values.phone,
      grade: values.grade,
      waUrl,
    });

    toast.success("Enquiry formatted! Opening WhatsApp to connect with the faculty...", {
      duration: 5000,
    });

    // Create a real anchor element to reliably bypass strict browser popup blockers
    const link = document.createElement("a");
    link.href = waUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    form.reset();
  };

  const clearError = (field: keyof FieldErrors) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Book Your Free Demo Class</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Visit our centre or fill the form — our counsellor will reach out to schedule a free demo and discuss your child's learning plan.
          </p>
          <ul className="space-y-5">
            {[
              { icon: MapPin, label: "Address", value: "RZH - 718, Gali No 4, Near Chotu Ram Marg, Rajnagar - II, Palam - 110077" },
              { icon: Phone, label: "Phone", value: "+91 93548 86752 / +91 88608 86752" },
              { icon: Mail, label: "Email", value: "deepcoaching.palam@gmail.com" },
              { icon: Clock, label: "Open Hours", value: "Mon–Sat: 8:00 AM – 8:00 PM" },
            ].map((c) => (
              <li key={c.label} className="flex gap-4">
                <span className="h-11 w-11 grid place-items-center rounded-lg bg-gradient-accent text-accent-foreground shrink-0">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-primary">{c.value}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button asChild variant="hero" size="lg" className="flex-1">
              <a href="tel:+919354886752" aria-label="Call Deep Coaching Centre">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" className="flex-1 bg-[hsl(142_70%_40%)] text-white hover:bg-[hsl(142_70%_35%)]">
              <a href="https://wa.me/919354886752?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20coaching%20classes." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Deep Coaching Centre">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <a href="mailto:deepcoaching.palam@gmail.com" aria-label="Email Deep Coaching Centre">
                <Mail className="h-5 w-5" /> Email Us
              </a>
            </Button>
          </div>
        </div>
        {submittedData ? (
          <div className="bg-card border-2 border-accent/40 rounded-2xl p-8 shadow-card-soft text-center space-y-6 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
            <div className="h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-500 grid place-items-center animate-bounce">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 inline-block">
                Enquiry Generated
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">Details Ready for WhatsApp!</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-primary">{submittedData.name}</strong>! Your demo class enquiry for <strong className="text-primary">{submittedData.grade}</strong> is ready.
              </p>
            </div>

            <div className="w-full space-y-3 pt-2 max-w-md">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base py-6 shadow-md rounded-xl"
              >
                <a
                  href={submittedData.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Open in WhatsApp to Confirm
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmittedData(null)}
                className="w-full text-xs text-muted-foreground hover:text-primary rounded-lg border-border"
              >
                <RotateCcw className="h-3.5 w-3.5 mr-1.5" /> Submit Another Enquiry / Edit Details
              </Button>
            </div>

            <p className="text-[11px] text-muted-foreground">
              Direct Contact: <a href="tel:+919354886752" className="text-accent font-semibold hover:underline">+91 93548 86752</a>
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="bg-card border border-border rounded-2xl p-8 shadow-card-soft space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Parent / Student Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full name"
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearError("name")}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm font-medium text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  maxLength={20}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  onChange={() => clearError("phone")}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm font-medium text-destructive">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                maxLength={255}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={() => clearError("email")}
              />
              {errors.email && (
                <p id="email-error" className="text-sm font-medium text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Class / Grade</Label>
              <Input
                id="grade"
                name="grade"
                placeholder="e.g. Class 8"
                maxLength={50}
                aria-invalid={!!errors.grade}
                aria-describedby={errors.grade ? "grade-error" : undefined}
                onChange={() => clearError("grade")}
              />
              {errors.grade && (
                <p id="grade-error" className="text-sm font-medium text-destructive">{errors.grade}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Tell us about your child's needs"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={() => clearError("message")}
              />
              {errors.message && (
                <p id="message-error" className="text-sm font-medium text-destructive">{errors.message}</p>
              )}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full text-base font-bold shadow-gold py-6 flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Submit & Send to WhatsApp
            </Button>
            <p className="text-[11px] text-center text-muted-foreground mt-1">
              ⚡ Your enquiry details will be sent directly to our official WhatsApp for an instant response.
            </p>
          </form>
        )}
      </div>
      <div className="container mx-auto px-4 mt-12">
        <div className="rounded-2xl overflow-hidden shadow-card-soft border border-border">
          <iframe
            title="Deep Coaching Centre Location"
            src="https://www.google.com/maps?q=RZH+-+718,+Gali+No+4,+Near+Chotu+Ram+Marg,+Rajnagar+-+II,+Palam+-+110077&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
