import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 50,
    paddingBottom: 40,
    fontSize: 11,
    fontFamily: "Times-Roman",
  },
  header: {},
  name: {
    fontSize: 40,
    fontFamily: "Times-Bold",
    letterSpacing: 7,
    marginBottom: 17,
  },
  title: {
    fontSize: 14,
    marginBottom: 17,
    letterSpacing: 1.5,
    fontWeight: "bold",
  },
  rule: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    marginTop: 8,
    marginBottom: 8,
    width: "100%",
  },
  contactItem: {
    flexGrow: 1,
    textAlign: "center",
    color: "#000000",
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Times-Bold",
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1,
  },
  expHeaderRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  expRole: {
    fontFamily: "Times-Bold",
  },
  expMeta: {
    fontSize: 10,
    marginBottom: 5,
  },
  bulletItem: {
    marginLeft: 12,
    marginBottom: 3,
  },
  bulletText: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  sectionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    width: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  skillsColumns: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
  },
  skillsColumn: {
    flexGrow: 1,
  },
  skillsColumnTitle: {
    fontFamily: "Times-Bold",
    marginBottom: 5,
  },
});

export const CvDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Yeisson Otalora</Text>
        <Text style={styles.title}>FULL-STACK WEB DEVELOPER</Text>
        <View style={styles.rule} />
        <View style={styles.contact}>
          <Text style={styles.contactItem}>+57 (300) 421-4948 – CO</Text>
          <Text style={styles.contactItem}>yeison9713@gmail.com</Text>
          <Link
            style={styles.contactItem}
            src="https://github.com/Yeison9713"
          >
            github.com/Yeison9713
          </Link>
          <Link
            style={styles.contactItem}
            src="https://www.linkedin.com/in/jsonotalora"
          >
            linkedin.com/in/jsonotalora
          </Link>
        </View>
        <View style={styles.rule} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SOBRE MI</Text>
        <Text style={styles.paragraph}>
          Ingeniero de Software con más de 6 años de experiencia construyendo
          soluciones web en producción. Especializado en backend con Node.js y
          TypeScript, con experiencia sólida en frontend (React, Vue) e
          integraciones cloud (AWS). He trabajado en sistemas para el
          sector salud, el comercio y la logística, coordinando equipos técnicos
          y siendo responsable de despliegues en producción. Incorporo
          herramientas de IA como Cursor y Claude Code en mi flujo de trabajo
          diario para desarrollar con mayor velocidad y calidad.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCIA LABORAL</Text>

        <View style={styles.expHeaderRow}>
          <Text style={styles.expRole}>
            Desarrollador web Full-Stack, Freelance
          </Text>
          <Text style={styles.expMeta}>marzo 2023 – presente</Text>
        </View>
        <Text style={styles.expMeta}>Multi salud 311 8780580</Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            • Desarrollo e implementación de módulos clave: Agendamiento de
            citas, Historias clínicas, Administrador, entre otros.
          </Text>
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            • Implementación de subdominios y segmentación de datos por empresa.
          </Text>
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            • Soporte técnico al equipo de desarrollo.
          </Text>
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            • Responsable de despliegues en entornos QA y Producción.
          </Text>
        </Text>
        <Text style={styles.bulletItem}>
          <Text style={styles.bulletText}>
            • Coordinación de reuniones técnicas para nuevas integraciones y
            mejoras del sistema.
          </Text>
        </Text>

        <View style={{ marginTop: 12 }}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expRole}>
              Desarrollador web Full-Stack, Freelance
            </Text>
            <Text style={styles.expMeta}>junio 2021 – marzo 2024</Text>
          </View>
          <Text style={styles.expMeta}>
            Titan Soluciones S.A.S - 304 1689955
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Desarrollo de aplicativo móvil para registro de tiquetes de
              transporte intermunicipal.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Desarrollo de aplicativo móvil para registro de pedidos de
              comercializadoras.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Integración de API de facturación electrónica, nómina
              electrónica, entre otros documentos.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Desarrollo de microservicios para consumo de información usando
              ORM Prisma.
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: 12 }}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expRole}>Desarrollador web Full-Stack</Text>
            <Text style={styles.expMeta}>abril 2022 – marzo 2024</Text>
          </View>
          <Text style={styles.expMeta}>AYS Siged S.A.S - 312 4094149</Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Mantenimiento de la plataforma existente e integración de nuevas
              herramientas y microservicios.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Microservicio de extracción de texto desde PDF usando AWS
              Textract, Node.js y Java.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Implementación de AWS SES y S3 para notificaciones y
              almacenamiento de archivos.
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: 12 }}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expRole}>Desarrollador de software</Text>
            <Text style={styles.expMeta}>
              octubre 2017 – marzo 2022
            </Text>
          </View>
          <Text style={styles.expMeta}>Sc Prosoft S.A.S - 300 4653314</Text>
          <Text style={styles.paragraph}>
            Inicié como desarrollador Cobol y migré progresivamente al desarrollo
            web, demostrando capacidad de adaptación individual y en equipo.
            Participé en la migración de módulos legacy al entorno web y en la
            construcción de nuevas plataformas. Supervisé parte de las
            migraciones realizadas durante mi estadía en la empresa.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        {/* <View style={styles.sectionDivider} /> */}
        <Text style={styles.sectionTitle}>EDUCACIÓN</Text>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.expMeta}>Enero 2022 – 2026</Text>
          <Text>
            <Text style={{ fontFamily: "Times-Bold" }}>Ingeniería de Software,</Text>
            {" "}Politécnico Gran Colombiano
          </Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.expMeta}>Agosto 2019 – septiembre 2019</Text>
          <Text>
            <Text style={{ fontFamily: "Times-Bold" }}>Diplomado Full-Stack,</Text>
            {" "}Inandina
          </Text>
        </View>
        <View style={{ marginBottom: 6 }}>
          <Text style={styles.expMeta}>Septiembre 2015 – septiembre 2017</Text>
          <Text>
            <Text style={{ fontFamily: "Times-Bold" }}>Tecnólogo en análisis y desarrollo de sistemas de información,</Text>
            {" "}SENA
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        {/* <View style={styles.sectionDivider} /> */}
        <Text style={styles.sectionTitle}>APTITUDES</Text>
        <View style={styles.skillsColumns}>
          <View style={styles.skillsColumn}>
            <Text style={styles.paragraph}>Iniciativa</Text>
            <Text style={styles.paragraph}>Resolución de problemas</Text>
            <Text style={styles.paragraph}>Adaptabilidad</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.paragraph}>Comunicación efectiva</Text>
            <Text style={styles.paragraph}>Trabajo en equipo</Text>
            <Text style={styles.paragraph}>Liderazgo técnico</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.paragraph}>Organización</Text>
            <Text style={styles.paragraph}>Aprendizaje continuo</Text>
            <Text style={styles.paragraph}>Mentalidad de mejora</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        {/* <View style={styles.sectionDivider} /> */}
        <Text style={styles.sectionTitle}>SKILLS</Text>

        <View style={{ marginTop: 6 }}>
          <Text style={styles.skillsColumnTitle}>Backend</Text>
          <View style={styles.skillsColumns}>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Node.js (TS)</Text>
              <Text style={styles.paragraph}>TypeScript</Text>
              <Text style={styles.paragraph}>Express</Text>
              <Text style={styles.paragraph}>Prisma</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>PostgreSQL</Text>
              <Text style={styles.paragraph}>MongoDB</Text>
              <Text style={styles.paragraph}>Socket.IO</Text>
              <Text style={styles.paragraph}>JWT</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Python</Text>
              <Text style={styles.paragraph}>Swagger</Text>
              <Text style={styles.paragraph}>Microservicios</Text>
              <Text style={styles.paragraph}>Cobol</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.skillsColumnTitle}>Frontend</Text>
          <View style={styles.skillsColumns}>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>React (TS)</Text>
              <Text style={styles.paragraph}>Vue (TS)</Text>
              <Text style={styles.paragraph}>Next.js</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Nuxt</Text>
              <Text style={styles.paragraph}>Tailwind</Text>
              <Text style={styles.paragraph}>Redux / Vuex</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Formik / Yup</Text>
              <Text style={styles.paragraph}>React Hook Form</Text>
              <Text style={styles.paragraph}>Zod</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.skillsColumnTitle}>Cloud & Integraciones</Text>
          <View style={styles.skillsColumns}>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>AWS S3, SES</Text>
              <Text style={styles.paragraph}>AWS Textract</Text>
              <Text style={styles.paragraph}>AWS Connect</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Zendesk</Text>
              <Text style={styles.paragraph}>ManyChat</Text>
              <Text style={styles.paragraph}>ePayco</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>APIs REST</Text>
              <Text style={styles.paragraph}>CI/CD</Text>
              <Text style={styles.paragraph}>Docker</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.skillsColumnTitle}>IA & Herramientas</Text>
          <View style={styles.skillsColumns}>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Cursor</Text>
              <Text style={styles.paragraph}>Claude Code</Text>
              <Text style={styles.paragraph}>AWS Q</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>Git</Text>
              <Text style={styles.paragraph}>VS Code</Text>
              <Text style={styles.paragraph}>Postman</Text>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.paragraph}>NPM</Text>
              <Text style={styles.paragraph}>Notion</Text>
              <Text style={styles.paragraph}>WinSCP</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
