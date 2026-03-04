import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const core = ["Node.js", "TypeScript", "PostgreSQL", "React", "AWS"];
  const additional = ["Prisma", "MongoDB", "Express", "Vue", "Next.js", "Tailwind", "CI/CD", "Docker", "JWT", "Microservicios", "APIs REST"];

  const aiTools = [
    "Uso de Cursor, Claude Code y AWS Q para acelerar desarrollo y revisión de código",
    "Implementación de soluciones con IA para automatización y procesamiento de información",
    "Experiencia integrando flujos conversacionales y bots con servicios en la nube",
  ];

  const cloudIntegration = [
    "AWS (S3, SES, Textract, Connect, SDK)",
    "Zendesk",
    "ManyChat · Chat Builder",
    "Flujos de llamadas con AWS Connect",
    "Pasarelas de pago (ePayco) y suscripciones",
    "Integración de APIs de terceros",
  ];

  return (
    <section id="stack" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Stack tecnológico</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Core y <span className="gradient-text">experiencia adicional</span>
        </h2>
        
        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-primary/30 bg-card card-gradient">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Core
            </h3>
            <div className="flex flex-wrap gap-2">
              {core.map((tech) => (
                <Badge
                  key={tech}
                  className="px-3 py-1.5 text-sm font-mono bg-primary/20 text-primary border-primary/40 hover:bg-primary/30"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card card-gradient">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Integración y uso de IA en desarrollo
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {aiTools.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-mono">Cursor</Badge>
              <Badge variant="secondary" className="font-mono">Claude Code</Badge>
              <Badge variant="secondary" className="font-mono">AWS Q</Badge>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card card-gradient">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Cloud, automatización e integraciones
            </h3>
            <div className="flex flex-wrap gap-2">
              {cloudIntegration.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-mono bg-muted hover:bg-muted/80 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card card-gradient">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
              Experiencia adicional
            </h3>
            <div className="flex flex-wrap gap-2">
              {additional.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-mono bg-muted hover:bg-muted/80 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
