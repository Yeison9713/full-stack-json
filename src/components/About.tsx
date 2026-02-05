const About = () => {
  const highlights = [
    "Experiencia sólida en backend con Node.js, TypeScript y APIs REST",
    "Desarrollo frontend con React, Vue y Next.js",
    "Implementación en AWS (S3, SES, Textract) y arquitectura de microservicios",
    "Integración de servicios externos y APIs de terceros",
    "Coordinación efectiva con project managers y equipos técnicos",
    "Ingeniero de software graduado con formación continua",
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl">
        <p className="section-heading">Sobre mí</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Construyo soluciones que <span className="gradient-text">funcionan</span>
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            Soy desarrollador de software con más de 6 años de experiencia en el desarrollo web. 
            Mi fuerte es el <span className="text-foreground">desarrollo BackEnd</span>, aunque me desenvuelvo 
            muy bien también en el frontend.
          </p>
          
          <p>
            A lo largo de mi carrera he trabajado en proyectos empresariales y freelance, 
            desarrollando desde plataformas de gestión hasta aplicaciones móviles. 
            Me especializo en transformar requerimientos del cliente en soluciones técnicas 
            escalables y mantenibles.
          </p>
          
          <ul className="grid gap-3 mt-8">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
