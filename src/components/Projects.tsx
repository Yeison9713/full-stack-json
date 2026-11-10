import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";

export const projects = [
  {
    name: "VOKOX",
    kind: "Tienda online · marca de streetwear",
    url: "https://vokox.app",
    domain: "vokox.app",
    image: "projects/vokox.png",
    description: "Proyecto web para una marca de streetwear: catálogo de productos y presencia digital de la marca.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
  {
    name: "Movilcell",
    kind: "Desarrollo web para cliente",
    url: "https://www.movilcell.shop",
    domain: "movilcell.shop",
    image: "projects/movilcell.png",
    description: "Una tienda de celulares necesitaba mostrar su catálogo en línea y facilitar la venta a crédito: el sitio presenta sus productos y lleva al cliente a solicitar el crédito o escribir por WhatsApp.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
];

const Projects = () => (
  <Section id="projects" title="Proyectos">
    <ul className="grid gap-12 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.name}>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={`Captura de ${project.domain}`}
              loading="lazy"
              width={1440}
              height={900}
              className="mb-5 aspect-[16/10] w-full rounded-md border border-border object-cover object-top transition-opacity group-hover:opacity-90"
            />
            <span className="inline-flex items-baseline gap-1.5">
              <h3 className="text-[1.75rem] leading-tight group-hover:text-primary transition-colors">{project.name}</h3>
              <ArrowUpRight className="h-5 w-5 self-center text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
            </span>
          </a>
          <p className="text-sm text-muted-foreground">
            {project.kind} · {project.domain}
          </p>
          <p className="mt-4 font-serif text-foreground/85 leading-relaxed">{project.description}</p>
          <p className="mt-3 text-sm text-muted-foreground">{project.techs.join(", ")}</p>
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
