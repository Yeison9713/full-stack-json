const Experience = () => {
  const experiences = [
    {
      role: "Desarrollador web Full Stack (Freelance)",
      company: "Multisalud",
      period: "Mar 2023 – Actualidad",
      bullets: [
        "Desarrollo y evoluciono funcionalidades para una plataforma web del sector salud: interfaces, lógica de negocio y servicios backend",
        "Construyo soluciones de agendamiento de citas, digiturno, historias clínicas, superadministración, control de permisos y un diseñador de formularios dinámicos",
        "Integro APIs y servicios externos: pasarela de pagos ePayco, torniquetes Hikvision y webhooks",
        "Implemento notificaciones por WhatsApp, llamadas telefónicas, SMS y correo electrónico",
        "Analizo y optimizo consultas SQL para mejorar el rendimiento y la mantenibilidad",
        "Impulso revisión de código con Claude Code y CodeRabbit, y apoyo la creación de agentes para pruebas automatizadas y unitarias",
        "Preparo despliegues en QA y producción, y brindo acompañamiento técnico al equipo",
      ],
    },
    {
      role: "Desarrollador web Full Stack (Freelance)",
      company: "Titan Soluciones S.A.S.",
      period: "Jun 2021 – Mar 2024",
      bullets: [
        "Desarrollé aplicaciones para digitalizar el registro de tiquetes de transporte intermunicipal y la gestión de pedidos de comercializadoras",
        "Integré servicios de facturación electrónica y nómina electrónica con plataformas externas",
        "Construí microservicios para consultar, transformar y consumir información con Node.js y Prisma",
      ],
    },
    {
      role: "Desarrollador web Full Stack",
      company: "AYS Siged S.A.S.",
      period: "Abr 2022 – Mar 2024",
      bullets: [
        "Mantuve y evolucioné una plataforma existente, incorporando funcionalidades, herramientas y microservicios",
        "Desarrollé un servicio de extracción de texto desde PDF con AWS Textract, Node.js y Java",
        "Implementé AWS SES y S3 para notificaciones y almacenamiento de archivos",
      ],
    },
    {
      role: "Desarrollador de software",
      company: "SC Prosoft S.A.S.",
      period: "Oct 2017 – Mar 2022",
      bullets: [
        "Comencé como desarrollador COBOL y luego asumí proyectos de desarrollo web",
        "Participé en la migración de módulos legacy a plataformas web y en la construcción de nuevas plataformas",
        "Apoyé la supervisión de parte de esas migraciones",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Experiencia profesional</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Trayectoria <span className="gradient-text">profesional</span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
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
