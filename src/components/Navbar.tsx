import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Cómo trabajo", href: "#value" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLink = (link: (typeof links)[number], className: string) => (
    <a
      key={link.href}
      href={link.href}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(link.href);
      }}
      className={className}
    >
      {link.label}
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="px-4 sm:px-6"><div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="font-semibold tracking-[-0.01em]"
          >
            Yeisson Otalora
          </a>

          <div className="flex items-center gap-7">
            <div className="hidden md:flex items-center gap-7">
              {links.map((link) =>
                navLink(link, "text-sm text-muted-foreground hover:text-foreground transition-colors"),
              )}
            </div>

            <div className="flex items-center gap-1 -mr-2">
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={isDark ? "Usar tema claro" : "Usar tema oscuro"}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground"
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div></div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col gap-6 px-4 pt-28">
            {links.map((link) => navLink(link, "text-3xl font-semibold tracking-[-0.02em]"))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
