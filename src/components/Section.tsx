import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="px-4 sm:px-6 py-16 md:py-24 border-t border-border">
    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[12rem_1fr] md:gap-12">
      <h2 className="text-2xl md:text-[1.3125rem] md:pt-1 md:sticky md:top-24 md:self-start">{title}</h2>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export default Section;
