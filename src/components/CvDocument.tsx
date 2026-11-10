import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const LINE = 1.35;

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 50,
    paddingBottom: 56,
    fontSize: 10.5,
    lineHeight: LINE,
    fontFamily: "Times-Roman",
  },
  name: {
    fontSize: 40,
    fontFamily: "Times-Bold",
    letterSpacing: 7,
    lineHeight: 1,
    marginBottom: 17,
  },
  title: {
    fontSize: 12.5,
    letterSpacing: 1.2,
    lineHeight: 1,
    marginBottom: 17,
  },
  rule: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginVertical: 8,
  },
  contactItem: {
    flexGrow: 1,
    textAlign: "center",
    color: "#000000",
    textDecoration: "none",
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Times-Bold",
    lineHeight: 1,
    marginBottom: 8,
  },
  bold: {
    fontFamily: "Times-Bold",
  },
  block: {
    marginTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  meta: {
    fontSize: 10,
  },
  bullet: {
    marginLeft: 12,
  },
  line: {
    marginBottom: 2,
  },
  link: {
    fontSize: 10,
    color: "#000000",
    textDecoration: "none",
  },
  footer: {
    position: "absolute",
    top: 800,
    left: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#999999",
    paddingTop: 6,
    fontSize: 9,
    color: "#666666",
  },
});

const contact = [
  { label: "+57 (300) 421-4948 – CO" },
  { label: "yeison9713@gmail.com", href: "mailto:yeison9713@gmail.com" },
  { label: "github.com/Yeison9713", href: "https://github.com/Yeison9713" },
  { label: "linkedin.com/in/jsonotalora", href: "https://www.linkedin.com/in/jsonotalora" },
];

const experience = [
  {
    role: "Desarrollador web Full Stack (Freelance)",
    company: "Multisalud",
    period: "Marzo 2023 – Actualidad",
    bullets: [
      "Desarrollo y evoluciono funcionalidades para una plataforma web del sector salud, participando en la construcción de interfaces, lógica de negocio y servicios backend.",
      "Construyo soluciones para procesos de agendamiento, digiturno, administración de la plataforma, control de permisos y configuración de formularios dinámicos.",
      "Desarrollo e integro APIs y servicios externos para conectar la plataforma con herramientas y dispositivos de terceros, incluyendo pasarelas de pago y torniquetes Hikvision.",
      "Implemento flujos de comunicación y notificaciones mediante WhatsApp, llamadas telefónicas, SMS y correo electrónico, apoyados en webhooks y servicios de integración.",
      "Analizo y optimizo consultas SQL, además de mejorar procesos internos para favorecer el rendimiento y la mantenibilidad de la aplicación.",
      "Impulso mejoras en el flujo de desarrollo mediante revisión de código asistida por Claude Code y CodeRabbit, y apoyo la creación de agentes para pruebas automatizadas y unitarias.",
      "Participo en la preparación y ejecución de despliegues en ambientes QA y producción, y brindo acompañamiento técnico al equipo de desarrollo.",
    ],
  },
  {
    role: "Desarrollador web Full Stack (Freelance)",
    company: "Titan Soluciones S.A.S.",
    period: "Junio 2021 – Marzo 2024",
    bullets: [
      "Desarrollé aplicaciones para digitalizar procesos de transporte intermunicipal y gestión de pedidos para empresas comercializadoras.",
      "Integré servicios de facturación electrónica y nómina electrónica para conectar las aplicaciones con plataformas externas y facilitar procesos administrativos.",
      "Construí microservicios para consultar, transformar y consumir información mediante Node.js y Prisma.",
    ],
  },
  {
    role: "Desarrollador web Full Stack",
    company: "AYS Siged S.A.S.",
    period: "Abril 2022 – Marzo 2024",
    bullets: [
      "Realicé mantenimiento y evolución de una plataforma existente, incorporando nuevas funcionalidades, herramientas y microservicios.",
      "Desarrollé un servicio de extracción de texto desde documentos PDF utilizando AWS Textract, Node.js y Java.",
      "Implementé servicios de AWS SES y S3 para gestionar el envío de notificaciones y el almacenamiento de archivos.",
    ],
  },
  {
    role: "Desarrollador de software",
    company: "SC Prosoft S.A.S.",
    period: "Octubre 2017 – Marzo 2022",
    bullets: [
      "Comencé mi trayectoria en desarrollo con COBOL y posteriormente asumí proyectos de desarrollo web, adaptándome a diferentes tecnologías y entornos.",
      "Participé en la modernización de sistemas existentes mediante la migración de módulos legacy a plataformas web y apoyé la supervisión de estas migraciones.",
    ],
  },
];

const projects = [
  {
    name: "VOKOX",
    kind: "Tienda online · marca de streetwear",
    domain: "vokox.app",
    url: "https://vokox.app",
    description: "Proyecto web para una marca de streetwear: catálogo de productos y presencia digital de la marca.",
    stack: "React · TypeScript · Tailwind CSS · Supabase · Vercel",
  },
  {
    name: "Movilcell",
    kind: "Desarrollo web para cliente",
    domain: "movilcell.shop",
    url: "https://www.movilcell.shop",
    description: "Desarrollo web realizado para un tercero, enfocado en la presencia digital y oferta comercial de su negocio.",
    stack: "React · TypeScript · Tailwind CSS · Supabase · Vercel",
  },
];

const education = [
  ["Ingeniería de Software", "Politécnico Grancolombiano, 2026"],
  ["Diplomado Full Stack", "Inandina, 2019"],
  ["Tecnólogo en Análisis y Desarrollo de Sistemas de Información", "SENA, 2017"],
];

const languages = [
  ["Español", "nativo"],
  ["Inglés", "A2 (básico)"],
];

const skills = [
  ["Backend", "Node.js · TypeScript · Express · Prisma · APIs REST · Microservicios · Socket.IO · JWT"],
  ["Frontend", "React · Next.js · Vue · Nuxt · Tailwind CSS · Redux · Vuex · Formik · Yup · React Hook Form · Zod"],
  ["Bases de datos", "PostgreSQL · SQL · MongoDB"],
  ["Cloud e infraestructura", "AWS S3 · SES · SQS · Connect · Textract · ECS/ECR · Lambda · Docker · CI/CD"],
  ["Integraciones y calidad", "ePayco · Hikvision · Webhooks · Sentry · CodeRabbit · Postman · Swagger"],
  ["Herramientas", "Git · Claude Code · Cursor · VS Code · NPM"],
  ["Otros conocimientos", "COBOL · Python"],
];

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={40}>
      {title}
    </Text>
    {children}
  </View>
);

const Labeled: React.FC<{ label: string; value: string; sep?: string }> = ({ label, value, sep = ": " }) => (
  <Text style={styles.line}>
    <Text style={styles.bold}>{label}</Text>
    {sep}
    {value}
  </Text>
);

export const CvDocument: React.FC = () => (
  <Document title="Yeisson Otalora - CV" author="Yeisson Otalora">
    <Page size="A4" style={styles.page}>
      <View style={styles.footer} fixed>
        <Text>
          Portafolio:{" "}
          <Link style={{ color: "#666666", textDecoration: "none" }} src="https://yeison9713.github.io/full-stack-json/">
            yeison9713.github.io/full-stack-json
          </Link>
        </Text>
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </View>
      <View>
        <Text style={styles.name}>Yeisson Otalora</Text>
        <Text style={styles.title}>INGENIERO DE SOFTWARE | FULL STACK TYPESCRIPT DEVELOPER</Text>
        <View style={styles.rule} />
        <View style={styles.contact}>
          {contact.map((c) =>
            c.href ? (
              <Link key={c.label} style={styles.contactItem} src={c.href}>
                {c.label}
              </Link>
            ) : (
              <Text key={c.label} style={styles.contactItem}>
                {c.label}
              </Text>
            ),
          )}
        </View>
        <View style={styles.rule} />
      </View>

      <Section title="PERFIL PROFESIONAL">
        <Text>
          Me gusta construir productos web que resuelvan problemas reales: entender cómo
          funciona el negocio, traducir sus necesidades en soluciones claras y llevarlas hasta
          producción. Trabajo principalmente con TypeScript, tanto en backend con Node.js como en
          frontend con React, Next.js y Vue. También disfruto conectar sistemas, diseñar APIs y
          mejorar aplicaciones que ya están en funcionamiento. Mi experiencia en distintos
          proyectos me ha permitido moverme entre desarrollo, integraciones y trabajo con
          equipos, manteniendo el foco en crear software útil, mantenible y bien pensado.
        </Text>
      </Section>

      <Section title="EXPERIENCIA PROFESIONAL">
        {experience.map((exp, i) => (
          <View key={exp.company} wrap={false} style={i ? styles.block : undefined}>
            <View style={styles.headerRow}>
              <Text>
                <Text style={styles.bold}>{exp.role}</Text> — {exp.company}
              </Text>
              <Text style={styles.meta}>{exp.period}</Text>
            </View>
            {exp.bullets.map((b) => (
              <Text key={b} style={[styles.bullet, styles.line]}>
                • {b}
              </Text>
            ))}
          </View>
        ))}
      </Section>

      <Section title="PROYECTOS DESTACADOS">
        {projects.map((p, i) => (
          <View key={p.name} wrap={false} style={i ? styles.block : undefined}>
            <View style={styles.headerRow}>
              <Text>
                <Text style={styles.bold}>{p.name}</Text> — {p.kind}
              </Text>
              <Link style={styles.link} src={p.url}>
                {p.domain}
              </Link>
            </View>
            <Text style={[styles.bullet, styles.line]}>{p.description}</Text>
            <Text style={[styles.bullet, styles.line, styles.meta]}>Stack: {p.stack}</Text>
          </View>
        ))}
      </Section>

      <Section title="FORMACIÓN ACADÉMICA">
        {education.map(([degree, place]) => (
          <Labeled key={degree} label={degree} value={place} sep=" — " />
        ))}
      </Section>

      <Section title="IDIOMAS">
        {languages.map(([lang, level]) => (
          <Labeled key={lang} label={lang} value={level} />
        ))}
      </Section>

      <Section title="COMPETENCIAS TÉCNICAS">
        {skills.map(([label, items]) => (
          <Labeled key={label} label={label} value={items} />
        ))}
      </Section>

    </Page>
  </Document>
);
