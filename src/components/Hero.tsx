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
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2">
          Yeisson Otalora
        </h1>
        
        <p className="text-lg lg:text-xl text-primary font-medium mb-4">
          Backend-focused Full Stack Developer
        </p>
        
        <p className="text-muted-foreground mb-2 max-w-2xl">
          Construyendo soluciones reales para negocio
        </p>
        
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          +6 años construyendo soluciones web escalables. Especializado en backend con Node.js y arquitecturas modernas. 
          Experiencia real en producción, integraciones y despliegues.
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
