import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const categories = [
    {
      title: "Backend",
      techs: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "MongoDB", "Python", "Socket.IO"],
    },
    {
      title: "Frontend",
      techs: ["React", "Vue", "Next.js", "Nuxt", "Tailwind CSS", "Redux", "Vuex"],
    },
    {
      title: "Cloud & DevOps",
      techs: ["AWS S3", "AWS SES", "AWS Textract", "CI/CD", "Git", "Docker"],
    },
    {
      title: "Otros",
      techs: ["APIs REST", "Microservicios", "JWT", "Swagger", "Postman"],
    },
  ];

  return (
    <section id="stack" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Stack tecnológico</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Herramientas que uso <span className="gradient-text">a diario</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-border bg-card card-gradient"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
