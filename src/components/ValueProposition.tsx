import { Code2, MessageSquare, Server, Layers, Cpu, Heart } from "lucide-react";

const ValueProposition = () => {
  const points = [
    {
      icon: Code2,
      title: "Código mantenible y bien estructurado",
    },
    {
      icon: MessageSquare,
      title: "Comunicación clara con equipos técnicos y funcionales",
    },
    {
      icon: Server,
      title: "Experiencia real en entornos productivos",
    },
    {
      icon: Layers,
      title: "Enfoque en soluciones escalables",
    },
    {
      icon: Cpu,
      title: "Arquitectura y lógica compleja: validaciones dinámicas (Yup), condiciones anidadas, SQL complejo, Prisma, transacciones",
    },
    {
      icon: Heart,
      title: "Experiencia en sistemas de salud: EPS, facturación electrónica, historias clínicas, agendamiento médico, confirmación de citas con AWS Connect",
    },
  ];

  return (
    <section id="value" className="py-24 px-6 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <p className="section-heading">Qué puedo aportar</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          ¿Qué puedes esperar al trabajar conmigo?
        </h2>
        
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Perfil semi-senior: backend fuerte, full stack sólido, experiencia en producción, integraciones complejas, uso práctico de IA en desarrollo, pasarelas de pago y AWS más allá de lo básico.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {points.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-foreground font-medium pt-1 text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
