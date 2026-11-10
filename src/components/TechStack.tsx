import Section from "@/components/Section";

export const skillGroups = [
  { title: "Backend", items: ["Node.js", "TypeScript", "Express", "Prisma", "APIs REST", "Microservicios", "Socket.IO", "JWT"] },
  { title: "Frontend", items: ["React", "Next.js", "Vue", "Nuxt", "Tailwind CSS", "Redux", "Vuex", "Formik", "Yup", "React Hook Form", "Zod"] },
  { title: "Móvil", items: ["Capacitor", "Framework7"] },
  { title: "Bases de datos", items: ["PostgreSQL", "SQL", "MongoDB", "Supabase"] },
  { title: "Cloud e infraestructura", items: ["AWS S3", "SES", "SQS", "Connect", "Textract", "ECS/ECR", "Lambda", "Docker", "Vercel", "CI/CD"] },
  { title: "Integraciones y calidad", items: ["ePayco", "Hikvision", "Webhooks", "Jest", "Sentry", "CodeRabbit", "Postman", "Swagger"] },
  { title: "Herramientas", items: ["Git", "Claude Code", "Cursor", "VS Code", "NPM"] },
  { title: "También", items: ["COBOL", "Java", "Python"] },
];

const TechStack = () => (
  <Section id="stack" title="Stack">
    <p className="max-w-[38rem] text-[1.3125rem] leading-relaxed font-serif">
      Hoy trabajo con <strong className="font-semibold">TypeScript, Node.js, React, Next.js y PostgreSQL</strong>, y antes con Vue.
      Esto es lo demás que he usado en proyectos reales:
    </p>

    <dl className="mt-10 divide-y divide-border border-y border-border">
      {skillGroups.map((group) => (
        <div key={group.title} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
          <dt className="text-sm font-medium text-muted-foreground sm:pt-0.5">{group.title}</dt>
          <dd className="font-serif text-foreground/85 leading-relaxed">{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default TechStack;
