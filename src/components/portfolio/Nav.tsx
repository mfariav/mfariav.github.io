import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { FaBehance } from "react-icons/fa6";
import { ThemeToggle } from "../ui/themetoggle";

const links = [
  { to: "/", hash: undefined, label: "Início" },
  { to: "/", hash: "projetos", label: "Projetos" },
  { to: "/", hash: "sobre", label: "Sobre" },
  { to: "/", hash: "curriculo", label: "Currículo" },
  { to: "/", hash: "contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-background/95 md:bg-background/70 md:backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Principal"
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between h-16"
      >
        {/* Esquerda: Status */}
        <a
          href="https://wa.me/5531992744975"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/80 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500/20 transition"
          aria-label="Disponível para trabalho — falar no WhatsApp"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Disponível
        </a>

        {/* Centro: Links de Navegação (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8 lg:gap-10 text-sm text-muted-foreground absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Direita: Redes Sociais + ThemeToggle (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-5 text-muted-foreground">
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/mfariav"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary transition-colors flex items-center"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/mfariav"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary transition-colors flex items-center"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            aria-label="Behance"
            href="https://behance.net/mairavieira"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary transition-colors flex items-center"
          >
            <FaBehance className="h-4.5 w-4.5" />
          </a>

          <ThemeToggle />
        </div>

        {/* Controles Mobile */}
        <div className="flex items-center gap-3 lg:hidden relative z-[1000]">
          <ThemeToggle />

          <button
            type="button"
            className="text-foreground p-2 rounded-md hover:bg-accent/50 cursor-pointer transition-colors border border-border/40 bg-background/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Dropdown */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background shadow-2xl relative z-[999]">
          <ul className="w-full max-w-[1200px] mx-auto px-4 py-4 flex flex-col items-end gap-3 text-sm text-right">
            {links.map((l) => (
              <li key={l.label} className="w-full">
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-foreground font-medium transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            <li className="w-full flex justify-end gap-5 pt-3 mt-1 border-t border-border text-muted-foreground">
              <a
                href="https://linkedin.com/in/mfariav"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-primary transition-colors p-1 flex items-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/mfariav"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-primary transition-colors p-1 flex items-center"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://behance.net/mairavieira"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-primary transition-colors p-1 flex items-center"
                aria-label="Behance"
              >
                <FaBehance className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}