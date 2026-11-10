import Section from "@/components/Section";

export interface Job {
  id: string;
  role: string;
  company: string;
  start: [number, number];
  end: [number, number] | null;
  period: string;
  bullets: string[];
  stack?: string[];
}

export const experiences: Job[] = [
  {
    id: "multisalud",
    role: "Desarrollador web Full Stack (Freelance)",
    company: "Multisalud",
    start: [2024, 4],
    end: null,
    period: "Abr 2024 – Actualidad",
    bullets: [
      "Desarrollo y evoluciono una plataforma web multiempresa del sector salud, con subdominios y datos segmentados por empresa: interfaces, lógica de negocio y servicios backend",
      "Construyo soluciones de agendamiento de citas, digiturno, historias clínicas, superadministración, control de permisos y un diseñador de formularios dinámicos",
      "Integro APIs y servicios externos: pasarela de pagos ePayco, torniquetes Hikvision y webhooks",
      "Implemento notificaciones por WhatsApp, llamadas telefónicas (AWS Connect), SMS y correo electrónico",
      "Analizo y optimizo consultas SQL para mejorar el rendimiento y la mantenibilidad",
      "Escribo pruebas unitarias con Jest e impulso la revisión de código con Claude Code y CodeRabbit",
      "Preparo despliegues en QA y producción, y brindo acompañamiento técnico al equipo",
    ],
    stack: ["TypeScript", "Node.js", "React", "Next.js", "Redux", "React Hook Form", "Zod", "PostgreSQL", "Prisma", "Socket.IO", "JWT", "Jest", "Sentry", "Docker", "AWS (S3, SES, SQS, Connect, Lambda, ECS/ECR)"],
  },
  {
    id: "titan",
    role: "Proyectos freelance · Desarrollador Full Stack",
    company: "Titan Soluciones S.A.S.",
    start: [2021, 6],
    end: [2024, 3],
    period: "Jun 2021 – Mar 2024",
    bullets: [
      "Desarrollé apps móviles híbridas para el registro de tiquetes de transporte intermunicipal y la gestión de pedidos de comercializadoras",
      "Integré servicios de facturación electrónica y nómina electrónica con plataformas externas",
      "Construí microservicios para consultar, transformar y consumir información con Node.js y Prisma",
    ],
    stack: ["Vue", "Vuex", "Nuxt", "Framework7", "Capacitor", "Node.js", "Prisma"],
  },
  {
    id: "ays-siged",
    role: "Desarrollador web Full Stack",
    company: "AYS Siged S.A.S.",
    start: [2022, 4],
    end: [2024, 3],
    period: "Abr 2022 – Mar 2024",
    bullets: [
      "Mantuve y evolucioné una plataforma existente, incorporando funcionalidades, herramientas y microservicios",
      "Desarrollé un servicio de extracción de texto desde PDF con AWS Textract, Node.js y Java",
      "Implementé AWS SES y S3 para notificaciones y almacenamiento de archivos",
    ],
    stack: ["Vue", "Node.js", "MongoDB", "Java", "AWS (Textract, SES, S3)"],
  },
  {
    id: "sc-prosoft",
    role: "Desarrollador de software",
    company: "SC Prosoft S.A.S.",
    start: [2017, 10],
    end: [2022, 3],
    period: "Oct 2017 – Mar 2022",
    bullets: [
      "Comencé como desarrollador COBOL y luego asumí proyectos de desarrollo web",
      "Participé en la migración de módulos legacy a plataformas web y en la construcción de nuevas plataformas",
      "Apoyé la supervisión de parte de esas migraciones",
    ],
  },
];

const Experience = () => (
  <Section id="experience" title="Experiencia">
    <ol className="space-y-14">
      {experiences.map((job) => (
        <li key={job.id} id={job.id} className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
          <p className="text-sm text-muted-foreground tabular-nums sm:pt-1.5">{job.period}</p>
          <div>
            <h3 className="text-[1.3125rem] leading-snug">
              {job.company}
              {!job.end && (
                <span className="ml-3 align-middle inline-block rounded-sm bg-accent px-1.5 py-0.5 text-xs font-medium text-accent-foreground">
                  Actual
                </span>
              )}
            </h3>
            <p className="text-muted-foreground mb-4">{job.role}</p>
            <ul className="prose-body max-w-[38rem] space-y-2 list-disc pl-5 marker:text-border">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {job.stack && (
              <p className="mt-3 max-w-[38rem] text-sm text-muted-foreground">{job.stack.join(", ")}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
