import Section from "@/components/Section";

const links = [
  { label: "LinkedIn", value: "linkedin.com/in/jsonotalora", href: "https://linkedin.com/in/jsonotalora" },
  { label: "GitHub", value: "github.com/Yeison9713", href: "https://github.com/Yeison9713" },
  { label: "Teléfono", value: "+57 300 421 4948", href: "tel:+573004214948" },
];

const Contact = () => (
  <Section id="contact" title="Contacto">
    <p className="max-w-[38rem] font-serif text-[1.3125rem] leading-relaxed">
      Estoy disponible para nuevas oportunidades. Si crees que puedo aportar a tu equipo, escríbeme.
    </p>

    <a
      href="mailto:yeison9713@gmail.com"
      className="mt-8 inline-block break-all text-[1.75rem] sm:text-[2.625rem] font-semibold tracking-[-0.02em] text-primary underline decoration-primary/25 decoration-2 underline-offset-[0.2em] hover:decoration-primary transition-colors"
    >
      yeison9713@gmail.com
    </a>

    <dl className="mt-12 grid gap-6 sm:grid-cols-3 text-sm">
      {links.map((link) => (
        <div key={link.label}>
          <dt className="text-muted-foreground">{link.label}</dt>
          <dd className="mt-1">
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-medium hover:text-primary transition-colors"
            >
              {link.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Contact;
