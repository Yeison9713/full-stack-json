import { Briefcase, MessageSquare, Layers, Plug, Wrench, Rocket } from "lucide-react";

const ValueProposition = () => {
  const points = [
    {
      icon: Briefcase,
      title: "Entender el negocio",
      text: "Antes de escribir código, busco entender cómo funciona el proceso y qué problema hay que resolver.",
    },
    {
      icon: MessageSquare,
      title: "Traducir necesidades",
      text: "Convierto requerimientos en soluciones claras y trabajo de cerca con equipos técnicos y funcionales.",
    },
    {
      icon: Layers,
      title: "Frontend y backend",
      text: "Construyo interfaces con React, Next.js o Vue y servicios con Node.js, TypeScript y PostgreSQL.",
    },
    {
      icon: Plug,
      title: "Conectar sistemas",
      text: "Diseño APIs e integro servicios externos: pagos, dispositivos, notificaciones y webhooks.",
    },
    {
      icon: Wrench,
      title: "Mejorar lo existente",
      text: "Evoluciono aplicaciones en funcionamiento: optimización SQL, nuevas funcionalidades y mantenibilidad.",
    },
    {
      icon: Rocket,
      title: "Llevar a producción",
      text: "Revisión de código, pruebas y despliegues en QA y producción como parte del trabajo diario.",
    },
  ];

  return (
    <section id="value" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Cómo trabajo</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          De la necesidad <span className="gradient-text">a producción</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
