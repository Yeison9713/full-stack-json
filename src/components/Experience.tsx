const Experience = () => {
  const experiences = [
    {
      role: "Desarrollador web Full-Stack",
      company: "Freelance",
      period: "marzo 2023 – presente",
      description:
        "Desarrollo e implementación de módulos clave para sistemas de salud. Responsable de despliegues en QA y Producción. Coordinación de reuniones técnicas para integraciones.",
    },
    {
      role: "Desarrollador web Full-Stack",
      company: "Titan Soluciones S.A.S",
      period: "junio 2021 – marzo 2024",
      description:
        "Desarrollo de aplicativos móviles para transporte y comercializadoras. Integración de APIs de facturación electrónica y nómina. Desarrollo de microservicios con Prisma ORM.",
    },
    {
      role: "Desarrollador web Full-Stack",
      company: "AYS Siged S.A.S",
      period: "abril 2022 – marzo 2024",
      description:
        "Mantenimiento de plataforma existente. Microservicio de extracción de texto con AWS Textract, Node.js y Java. Implementación de AWS SES y S3.",
    },
    {
      role: "Desarrollador de Software",
      company: "Sc Prosoft S.A.S",
      period: "octubre 2017 – marzo 2022",
      description:
        "Transición de desarrollo COBOL a web. Colaboración en migraciones de módulos y elaboración de nuevas plataformas. Supervisión de migraciones técnicas.",
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
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-8 group"
              >
                {/* Timeline dot */}
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
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
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
