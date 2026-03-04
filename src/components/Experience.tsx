const Experience = () => {
  const experiences = [
    {
      role: "Desarrollador Full-Stack",
      company: "Freelance",
      period: "2023 – Presente",
      bullets: [
        "Desarrollo de módulos para sistemas de salud",
        "Integraciones y despliegues en QA/Producción",
        "Soporte y mejoras continuas",
      ],
    },
    {
      role: "Desarrollador Full-Stack",
      company: "Titan Soluciones S.A.S",
      period: "2021 – 2024",
      bullets: [
        "Aplicativos para transporte y comercializadoras",
        "Integración de APIs (facturación electrónica, nómina)",
        "Microservicios con Prisma ORM",
      ],
    },
    {
      role: "Desarrollador Full-Stack",
      company: "AYS Siged S.A.S",
      period: "2022 – 2024",
      bullets: [
        "Microservicio extracción de texto (AWS Textract, Node.js, Java)",
        "AWS SES y S3 para plataforma documental",
        "Mantenimiento y evolución de sistema en producción",
      ],
    },
    {
      role: "Desarrollador de Software",
      company: "Sc Prosoft S.A.S",
      period: "2017 – 2022",
      bullets: [
        "Transición COBOL → desarrollo web",
        "Migración de módulos legacy",
        "Supervisión de procesos de migración",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Experiencia profesional</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Trayectoria de <span className="gradient-text">+6 años</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-8 group"
              >
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary hidden md:block group-hover:scale-150 transition-transform" />
                
                <div className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="text-primary shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
