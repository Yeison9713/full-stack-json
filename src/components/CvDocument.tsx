import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 50,
    paddingBottom: 40,
    fontSize: 11,
    fontFamily: "Times-Roman", // Georgia-like serif; podemos registrar Georgia si se añade la fuente
  },
  header: {
    // marginBottom: 12,
  },
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
    width: "100%", // toda la fila útil
  },
  contactItem: {
    flexGrow: 1,
    textAlign: "center",
    color: "#000000",
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Times-Bold",
    letterSpacing: 1,
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 4,
    lineHeight: 0.8,
    // letterSpacing: 0.2,
  },
  expHeaderRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  expRole: {
    fontFamily: "Times-Bold",
  },
  expMeta: {
    fontSize: 10,
  },
  bulletItem: {
    marginLeft: 12,
    marginBottom: 2,
  },
  bulletText: {
    fontSize: 10,
  },
  skillsColumns: {
    display: "flex",
    flexDirection: "row",
    marginTop: 6,
  },
  skillsColumn: {
    flexGrow: 1,
  },
  skillsColumnTitle: {
    fontFamily: "Times-Bold",
    marginBottom: 4,
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
          Desarrollador de software con 6 años de experiencia en el desarrollo
          web. Mi fuerte es el desarrollo BackEnd sin embargo, se me da bastante
          bien el desarrollo FrontEnd. Mis mejores habilidades son la
          iniciativa, la resolución de problemas, la comunicación y el
          aprendizaje continuo.
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

        <View style={{ marginTop: 10 }}>
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
              • Integración de API de facturación electrónica, nomina
              electrónica, entre otros documentos.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Añadido a la API se desarrollaron microservicios para el consumo
              de información, usando ORM como Prisma.
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expRole}>Desarrollador web Full-Stack</Text>
            <Text style={styles.expMeta}>abril 2022 – marzo 2024</Text>
          </View>
          <Text style={styles.expMeta}>AYS Siged S.A.S - 312 4094149</Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Mantenimiento de la plataforma ya existente, integración de
              nuevas herramientas y microservicios.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>
              • Microservicio para extraer texto de documentos como PDF’s usando
              AWS Textract, Node JS y JAVA.
            </Text>
          </Text>
          <Text style={styles.bulletItem}>
            <Text style={styles.bulletText}>• Implementación AWS SES, S3.</Text>
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expRole}>Desarrollador de software</Text>
            <Text style={styles.expMeta}>
              octubre 2017 – 31 de marzo 2022
            </Text>
          </View>
          <Text style={styles.expMeta}>Sc Prosoft S.A.S - 300 4653314</Text>
          <Text style={styles.paragraph}>
            Inicialmente fui desarrollador en cobol, y gradualmente fui pasando
            al desarrollo web donde fui demostrando diferentes habilidades
            individualmente y en grupo. Colabore con las migraciones de
            diferentes módulos al entorno web y elaboración de nuevas
            plataformas que funcionaban como extensiones. También tuve la
            oportunidad de supervisar mucha de las migraciones que se llevaron a
            cabo durante mi tiempo laboral en la empresa.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCACIÓN</Text>
        <Text style={styles.paragraph}>
          Enero 2022 – presente{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>
            Homologación de Ing. Software,
          </Text>{" "}
          Politécnico gran colombiano
        </Text>
        <Text style={styles.paragraph}>
          Agosto 2019 – septiembre 2019{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>Diplomado Full-Stack,</Text>{" "}
          Inandina
        </Text>
        <Text style={styles.paragraph}>
          Septiembre 2015 – septiembre 2017{" "}
          <Text style={{ fontFamily: "Times-Bold" }}>
            Tecnólogo en análisis y desarrollo de sistemas de información,
          </Text>{" "}
          SENA
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>APTITUDES</Text>
        <View style={styles.skillsColumns}>
          <View style={styles.skillsColumn}>
            <Text style={styles.paragraph}>Iniciativa</Text>
            <Text style={styles.paragraph}>Resolución de problemas</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.paragraph}>Comunicación</Text>
            <Text style={styles.paragraph}>Trabajo en equipo</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.paragraph}>Organización</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.skillsColumns}>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Backend</Text>
            <Text style={styles.paragraph}>Cobol</Text>
            <Text style={styles.paragraph}>Joi</Text>
            <Text style={styles.paragraph}>TypeScript</Text>
            <Text style={styles.paragraph}>Swagger</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Backend</Text>
            <Text style={styles.paragraph}>Node Js(ts)</Text>
            <Text style={styles.paragraph}>PostgreSQL</Text>
            <Text style={styles.paragraph}>Jsonwebtoken</Text>
            <Text style={styles.paragraph}>Python</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Backend</Text>
            <Text style={styles.paragraph}>Express</Text>
            <Text style={styles.paragraph}>Prisma</Text>
            <Text style={styles.paragraph}>Scoket IO</Text>
            <Text style={styles.paragraph}>Aws (SDK)</Text>
          </View>
        </View>

        <View style={styles.skillsColumns}>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Frontend</Text>
            <Text style={styles.paragraph}>Vue(ts)</Text>
            <Text style={styles.paragraph}>Redux</Text>
            <Text style={styles.paragraph}>Tailwind</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Frontend</Text>
            <Text style={styles.paragraph}>React(ts)</Text>
            <Text style={styles.paragraph}>Nuxt</Text>
            <Text style={styles.paragraph}>Yup</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Frontend</Text>
            <Text style={styles.paragraph}>Vuex</Text>
            <Text style={styles.paragraph}>Next 13</Text>
            <Text style={styles.paragraph}>Formik</Text>
          </View>
        </View>

        <View style={styles.skillsColumns}>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Herramientas</Text>
            <Text style={styles.paragraph}>Git</Text>
            <Text style={styles.paragraph}>VS Code</Text>
            <Text style={styles.paragraph}>AWS</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Herramientas</Text>
            <Text style={styles.paragraph}>NPM</Text>
            <Text style={styles.paragraph}>Putty</Text>
            <Text style={styles.paragraph}>Notion</Text>
          </View>
          <View style={styles.skillsColumn}>
            <Text style={styles.skillsColumnTitle}>Herramientas</Text>
            <Text style={styles.paragraph}>Postman</Text>
            <Text style={styles.paragraph}>WinSCP</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

