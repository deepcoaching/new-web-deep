import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import FreeDemoBanner from "@/components/site/FreeDemoBanner";
import Achievements from "@/components/site/Achievements";
import About from "@/components/site/About";
import Classes from "@/components/site/Classes";
import Subjects from "@/components/site/Subjects";
import Faculty from "@/components/site/Faculty";
import WhyUs from "@/components/site/WhyUs";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <FreeDemoBanner />
      <Achievements />
      <About />
      <Classes />
      <Subjects />
      <Faculty />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
    <FloatingActions />
  </div>
);

export default Index;
