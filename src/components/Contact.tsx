import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "yeison9713@gmail.com",
      href: "mailto:yeison9713@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jsonotalora",
      href: "https://linkedin.com/in/jsonotalora",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Yeison9713",
      href: "https://github.com/Yeison9713",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 (300) 421-4948",
      href: "tel:+573004214948",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl">
        <p className="section-heading">Contacto</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          ¿Tienes un proyecto en mente?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Disponible para nuevas oportunidades. Si crees que puedo aportar valor a tu equipo, contacta.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-muted">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
        
        <Button
          size="lg"
          className="glow-effect"
          asChild
        >
          <a href="mailto:yeison9713@gmail.com">
            Hablemos de tu proyecto · Disponible para oportunidades
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
