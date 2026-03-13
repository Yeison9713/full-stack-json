const About = () => {
  const points = [
    // "Construyo soluciones que funcionan",
    "+6 años en desarrollo web",
    "Fuerte enfoque en backend (Node.js, TypeScript, APIs REST)",
    "Experiencia sólida en frontend (React, Vue, Next)",
    "Integraciones con AWS y servicios externos",
    "Experiencia desarrollando soluciones para sector salud: gestión de citas, historias clínicas e integraciones con servicios externos",
    "Trabajo coordinado con PM y equipos técnicos",
    "Graduado en Ingeniería de Software",
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl">
        <p className="section-heading">Sobre mí</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Perfil <span className="gradient-text">en un vistazo</span>
        </h2>
        
        <ul className="space-y-4 text-muted-foreground text-lg">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="text-primary shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
