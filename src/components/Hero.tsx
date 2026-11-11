import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { CvDocument } from "@/components/CvDocument";
import { experiences } from "@/components/Experience";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FIRST_YEAR = 2017;
const now = new Date();
const LAST_YEAR = now.getFullYear() + 1;
const years = Array.from({ length: LAST_YEAR - FIRST_YEAR }, (_, i) => FIRST_YEAR + i);

const pos = ([year, month]: [number, number]) =>
  ((year + (month - 1) / 12 - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR)) * 100;

const CareerTimeline = () => {
  const jobs = [...experiences].sort((a, b) => pos(a.start) - pos(b.start));

  return (
    <figure className="mt-16 md:mt-20">
      <div className="relative">
        <div className="absolute inset-0 flex pointer-events-none" aria-hidden="true">
          {years.map((year) => (
            <div key={year} className="flex-1 border-l border-border" />
          ))}
        </div>

        <ol className="relative space-y-5 py-2">
          {jobs.map((job, i) => {
            const left = pos(job.start);
            const right = pos(job.end ?? [now.getFullYear(), now.getMonth() + 1]);
            const current = !job.end;
            return (
              <li key={job.id} className="relative h-11">
                <a
                  href={`#${job.id}`}
                  className="group absolute inset-y-0 block"
                  style={{ left: `${left}%`, width: `${right - left}%` }}
                  aria-label={`${job.company}, ${job.period}`}
                >
                  <span
                    className={`block whitespace-nowrap text-sm font-medium pl-2 transition-colors group-hover:text-primary ${
                      current ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {job.company}
                  </span>
                  <span
                    className={`timeline-bar mt-1.5 block h-2 rounded-sm ${
                      current ? "bg-primary" : "bg-foreground/25 group-hover:bg-foreground/45"
                    }`}
                    style={{ animationDelay: `${150 + i * 140}ms` }}
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex text-xs text-muted-foreground tabular-nums" aria-hidden="true">
        {years.map((year, i) => (
          <span key={year} className={`flex-1 pl-1 pt-2 ${i % 2 ? "hidden sm:block" : ""}`}>
            {year}
          </span>
        ))}
      </div>

      <figcaption className="mt-6 max-w-xl font-serif text-muted-foreground leading-relaxed">
        Empecé en 2017 con COBOL y migraciones de sistemas legacy. Hoy construyo plataformas web,
        APIs e integraciones.
      </figcaption>
    </figure>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="px-4 sm:px-6 pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[5.25rem] font-bold leading-[0.95] tracking-[-0.035em]">
          Yeisson Otalora
        </h1>

        <p className="mt-6 text-xl sm:text-2xl leading-snug text-foreground/90">
          Profesional en Ingeniería de Software{" "}
          <span className="hidden sm:inline text-border" aria-hidden="true">| </span>
          <br className="sm:hidden" />
          Full Stack TypeScript Developer
        </p>

        <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
          Construyo aplicaciones web, APIs e integraciones con TypeScript. Me interesa entender
          cómo funciona el negocio y convertir sus necesidades en soluciones útiles, mantenibles
          y listas para producción.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2 px-6">
                <FileText />
                Ver CV
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-full">
              <DialogHeader>
                <DialogTitle>Currículum</DialogTitle>
              </DialogHeader>
              <div className="h-[70vh] border rounded-md overflow-hidden">
                <PDFViewer width="100%" height="100%">
                  <CvDocument />
                </PDFViewer>
              </div>
              <DialogFooter className="mt-4">
                <PDFDownloadLink document={<CvDocument />} fileName="Yeisson-Otalora-CV.pdf">
                  {({ loading }) => (
                    <Button className="gap-2" disabled={loading}>
                      <FileText />
                      {loading ? "Generando PDF..." : "Descargar PDF"}
                    </Button>
                  )}
                </PDFDownloadLink>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="lg" className="gap-2 px-6 bg-transparent" asChild>
            <a href="mailto:yeison9713@gmail.com">
              <Mail />
              Escribirme
            </a>
          </Button>

          <div className="flex items-center gap-1 ml-1">
            <a
              href="https://github.com/Yeison9713"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/jsonotalora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <CareerTimeline />
      </div>
    </section>
  );
};

export default Hero;
