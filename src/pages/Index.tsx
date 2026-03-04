import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ProductionExperience from "@/components/ProductionExperience";
import ValueProposition from "@/components/ValueProposition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <ProductionExperience />
        <ValueProposition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
