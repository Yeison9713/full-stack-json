const About = () => {
  const facts = [
    "Ingeniería de Software · Politécnico Grancolombiano, 2026",
    "Español nativo · Inglés A2",
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl">
        <p className="section-heading">Sobre mí</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Software útil, <span className="gradient-text">mantenible y bien pensado</span>
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Me gusta construir productos web que resuelvan problemas reales: entender cómo funciona
          el negocio, traducir sus necesidades en soluciones claras y llevarlas hasta producción.
          Trabajo principalmente con TypeScript, tanto en backend con Node.js como en frontend con
          React, Next.js y Vue. También disfruto conectar sistemas, diseñar APIs y mejorar
          aplicaciones que ya están en funcionamiento. Mi experiencia en distintos proyectos me ha
          permitido moverme entre desarrollo, integraciones y trabajo con equipos.
        </p>

        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {facts.map((fact) => (
            <li key={fact} className="flex items-start gap-2">
              <span className="text-primary shrink-0">▸</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
