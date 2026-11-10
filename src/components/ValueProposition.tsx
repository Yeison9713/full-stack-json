import Section from "@/components/Section";

const points = [
  {
    title: "Entender el negocio",
    text: "Antes de escribir código, busco entender cómo funciona el proceso y qué problema hay que resolver.",
  },
  {
    title: "Traducir necesidades",
    text: "Convierto requerimientos en soluciones claras y trabajo de cerca con equipos técnicos y funcionales.",
  },
  {
    title: "Frontend y backend",
    text: "Construyo interfaces con React, Next.js o Vue y servicios con Node.js, TypeScript y PostgreSQL.",
  },
  {
    title: "Conectar sistemas",
    text: "Diseño APIs e integro servicios externos: pagos, dispositivos, notificaciones y webhooks.",
  },
  {
    title: "Mejorar lo existente",
    text: "Evoluciono aplicaciones en funcionamiento: optimización SQL, nuevas funcionalidades y mantenibilidad.",
  },
  {
    title: "Llevar a producción",
    text: "Revisión de código, pruebas y despliegues en QA y producción como parte del trabajo diario.",
  },
];

const ValueProposition = () => (
  <Section id="value" title="Cómo trabajo">
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 max-w-3xl">
      {points.map((item) => (
        <div key={item.title}>
          <h3 className="text-lg">{item.title}</h3>
          <p className="mt-2 font-serif text-foreground/80 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default ValueProposition;
