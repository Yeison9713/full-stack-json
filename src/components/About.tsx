const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-4xl">
        <p className="section-heading">Sobre mí</p>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Construyo soluciones que <span className="gradient-text">funcionan</span>
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            Soy desarrollador de software con una fuerte motivación por el <span className="text-foreground">aprendizaje continuo</span> y 
            la resolución de problemas reales. Mi camino en tecnología comenzó con una técnica en sistemas, 
            seguida de un técnico en ADSI, un diplomado en desarrollo full stack, y actualmente estoy 
            cursando el último semestre de Ingeniería de Software.
          </p>
          
          <p>
            Tengo experiencia tanto en <span className="text-foreground">frontend</span> (React, Vue) como en <span className="text-foreground">backend</span> (Node.js, Express, Prisma, Mongoose), 
            lo que me permite abordar proyectos desde una visión integral. He desarrollado APIs REST 
            y trabajado con diferentes ecosistemas y herramientas modernas.
          </p>
          
          <p>
            Me caracterizo por ser responsable, analítico y adaptable. Me involucro activamente 
            en los proyectos, buscando no solo cumplir con los requerimientos, sino también 
            <span className="text-foreground"> proponer mejoras técnicas</span> y optimizar procesos. 
            Disfruto enfrentar nuevos retos en entornos donde el aprendizaje constante es parte del día a día.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
