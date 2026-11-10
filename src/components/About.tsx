import Section from "@/components/Section";

const About = () => (
  <Section id="about" title="Sobre mí">
    <div className="prose-body max-w-[38rem] space-y-5">
      <p className="text-[1.3125rem] leading-relaxed text-foreground">
        Me gusta construir productos web que resuelvan problemas reales: entender cómo funciona el
        negocio, traducir sus necesidades en soluciones claras y llevarlas hasta producción.
      </p>
      <p>
        Trabajo principalmente con TypeScript, tanto en backend con Node.js como en frontend con
        React, Next.js y Vue. También disfruto conectar sistemas, diseñar APIs y mejorar
        aplicaciones que ya están en funcionamiento. Mi experiencia en distintos proyectos me ha
        permitido moverme entre desarrollo, integraciones y trabajo con equipos.
      </p>
    </div>

    <dl className="mt-10 grid gap-6 sm:grid-cols-2 max-w-[38rem] text-sm">
      <div>
        <dt className="text-muted-foreground">Formación</dt>
        <dd className="mt-1 font-medium">Ingeniería de Software, Politécnico Grancolombiano, 2026</dd>
      </div>
      <div>
        <dt className="text-muted-foreground">Idiomas</dt>
        <dd className="mt-1 font-medium">Español nativo, inglés A2</dd>
      </div>
    </dl>
  </Section>
);

export default About;
