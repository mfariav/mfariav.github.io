export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Maíra Vieira. Todos os direitos reservados.</p>
        <p className="font-mono">
          Construído com <span className="text-primary">React</span> ·{" "}
          <span className="text-primary">Tailwind CSS</span> · foco em performance, SEO e acessibilidade.
        </p>
      </div>
    </footer>
  );
}
