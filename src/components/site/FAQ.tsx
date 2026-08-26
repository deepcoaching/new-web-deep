import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which classes and boards do you cover?",
    a: "We coach students from Class 1 to Class 12 across CBSE, ICSE and State boards in all major subjects.",
  },
  {
    q: "How big are your batches?",
    a: "Our batches are intentionally small (typically 10–15 students) so every child gets personal attention from the teacher.",
  },
  {
    q: "Do you offer a free demo class?",
    a: "Yes. You can book a free demo class by filling the contact form, calling us, or messaging us on WhatsApp at +91 93548 86752 / +91 88608 86752.",
  },
  {
    q: "What are the timings of classes?",
    a: "We run morning and evening batches, Monday to Saturday between 8:00 AM and 8:00 PM, so parents can choose what suits their child.",
  },
  {
    q: "Do you provide study material and tests?",
    a: "Yes. Printed notes, worksheets, weekly tests and monthly performance reports are included in the program at no extra cost.",
  },
  {
    q: "How are fees structured?",
    a: "Fees depend on the class and number of subjects. Please contact us for the latest fee structure — we keep it affordable and transparent.",
  },
  {
    q: "How frequently do we conduct Parent-Teacher Meetings (PTMs)?",
    a: "We conduct monthly Parent-Teacher Meetings (PTMs) to provide regular feedback to parents and ensure consistent monitoring and tracking of each student’s progress and overall development.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Everything parents usually ask before joining Deep Coaching Centre.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
