import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      name: "Movilcell BM",
      url: "https://www.movilcell.shop",
      description:
        "Plataforma web para gestión comercial y venta de productos. Sistema completo de inventario, ventas y reportes con arquitectura escalable.",
      techs: ["Full Stack", "Node.js", "React", "PostgreSQL", "AWS"],
    },
    {
      name: "Vokox",
      url: "https://vokox.app",
      description:
        "Aplicación web orientada a servicios digitales, con arquitectura moderna y enfoque en experiencia de usuario. Integración de pagos y gestión de usuarios.",
      techs: ["Next.js", "TypeScript", "Tailwind", "APIs REST"],
    },
    {
      name: "Qusoft CRM",
      url: "https://tickety-flow.lovable.app",
      description:
        "CRM para gestión de tickets y procesos internos. Enfoque en estructuración de flujos de trabajo, backend robusto y frontend intuitivo.",
      techs: ["React", "Node.js", "Prisma", "PostgreSQL"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl">
        <p className="section-heading">Proyectos destacados</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Trabajo en <span className="gradient-text">producción</span>
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 lg:p-8 rounded-lg border border-border bg-card card-gradient hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  0{index + 1}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 text-xs font-mono border-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
