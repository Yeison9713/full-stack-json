import { Monitor, Rocket, Wrench, Plug } from "lucide-react";

const ProductionExperience = () => {
  const items = [
    {
      icon: Monitor,
      text: "Sistemas en funcionamiento con usuarios reales",
    },
    {
      icon: Rocket,
      text: "Despliegues en QA y producción",
    },
    {
      icon: Wrench,
      text: "Soporte y mantenimiento continuo",
    },
    {
      icon: Plug,
      text: "Integraciones críticas (pagos, llamadas, facturación electrónica)",
    },
  ];

  return (
    <section id="production" className="py-16 px-6 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <p className="section-heading">Experiencia en producción</p>
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Sistemas reales, <span className="gradient-text">no solo demos</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionExperience;
