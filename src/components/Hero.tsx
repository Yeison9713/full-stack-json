import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-6 lg:px-24"
    >
      <div className="max-w-4xl animate-slide-up">
        <p className="section-heading">Hola, soy</p>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
          Yeisson Otalora
        </h1>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6">
          Ingeniero de Software | <span className="gradient-text">Full Stack Developer</span>
        </h2>
        
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Ingeniero de software con más de <span className="text-foreground font-medium">6 años de experiencia</span> en desarrollo web, 
          con enfoque en <span className="text-foreground font-medium">backend</span> y experiencia sólida en frontend. 
          Especializado en construir soluciones escalables, APIs REST e integraciones con servicios en la nube.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Button
            variant="default"
            size="lg"
            className="group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver proyectos
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contactar
          </Button>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Yeison9713"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/jsonotalora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:yeison9713@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;
