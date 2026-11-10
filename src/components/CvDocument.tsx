import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { experiences } from "@/components/Experience";
import { projects } from "@/components/Projects";
import { skillGroups } from "@/components/TechStack";

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

const education = [
  ["Ingeniería de Software", "Politécnico Grancolombiano, 2026"],
  ["Diplomado Full Stack", "Inandina, 2019"],
  ["Tecnólogo en Análisis y Desarrollo de Sistemas de Información", "SENA, 2017"],
];

const languages = [
  ["Español", "nativo"],
  ["Inglés", "A2 (básico)"],
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
        <Text style={styles.title}>PROFESIONAL EN INGENIERÍA DE SOFTWARE | FULL STACK TYPESCRIPT DEVELOPER</Text>
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
        {experiences.map((exp, i) => (
          <View key={exp.id} wrap={false} style={i ? styles.block : undefined}>
            <View style={styles.headerRow}>
              <Text>
                <Text style={styles.bold}>{exp.role}</Text> — {exp.company}
              </Text>
              <Text style={styles.meta}>{exp.period}</Text>
            </View>
            {exp.bullets.map((b) => (
              <Text key={b} style={[styles.bullet, styles.line]}>
                • {b}.
              </Text>
            ))}
            {exp.stack && (
              <Text style={[styles.bullet, styles.line, styles.meta]}>Stack: {exp.stack.join(" · ")}</Text>
            )}
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
            <Text style={[styles.bullet, styles.line, styles.meta]}>Stack: {p.techs.join(" · ")}</Text>
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
        {skillGroups.map(({ title, items }) => (
          <Labeled key={title} label={title} value={items.join(" · ")} />
        ))}
      </Section>

    </Page>
  </Document>
);
