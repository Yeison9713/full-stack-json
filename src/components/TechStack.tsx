import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const core = ["TypeScript", "Node.js", "React", "Next.js", "Vue", "PostgreSQL"];

  const groups = [
    {
      title: "Backend",
      items: ["Node.js", "TypeScript", "Express", "Prisma", "APIs REST", "Microservicios", "Socket.IO", "JWT"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Vue", "Nuxt", "Tailwind CSS", "Redux", "Vuex", "Formik", "Yup", "React Hook Form", "Zod"],
    },
    { title: "Bases de datos", items: ["PostgreSQL", "SQL", "MongoDB"] },
    {
      title: "Cloud e infraestructura",
      note: "experiencia práctica",
      items: ["AWS S3", "SES", "SQS", "Connect", "Textract", "ECS/ECR", "Lambda", "Docker", "CI/CD"],
    },
    {
      title: "Integraciones y calidad",
      items: ["ePayco", "Hikvision", "Webhooks", "Sentry", "CodeRabbit", "Postman", "Swagger"],
    },
    { title: "Herramientas", items: ["Git", "Claude Code", "Cursor", "VS Code", "NPM"] },
    { title: "Otros conocimientos", items: ["COBOL", "Python"] },
  ];

  return (
    <section id="stack" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Stack tecnológico</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Full Stack con <span className="gradient-text">TypeScript</span>
        </h2>

        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-primary/30 bg-card card-gradient">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Stack central</h3>
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

          <div className="grid sm:grid-cols-2 gap-4">
            {groups.map((group) => (
              <div key={group.title} className="p-6 rounded-lg border border-border bg-card card-gradient">
                <h3 className="text-base font-semibold mb-3 text-foreground">
                  {group.title}
                  {group.note && (
                    <span className="ml-2 text-xs font-normal text-muted-foreground">· {group.note}</span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-mono bg-muted hover:bg-muted/80 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
