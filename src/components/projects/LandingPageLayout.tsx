import { ArrowLeft, ExternalLink, Globe, Code } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { type Project } from '../../lib/projectsData';

export function LandingPageLayout({ project }: { project: Project }) {
  return (
    <main id="conteudo" className="container-page pt-30 pb-24 min-h-screen">
      {/* Header */}
      <header className="mb-12 text-center max-w-3xl mx-auto space-y-6">
        <div className="text-xs font-mono text-primary font-semibold uppercase tracking-widest">
          Galeria de Projetos Visual & Front-End
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          {project.title}
        </h1>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {project.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Hero Cover (se existir) */}
      {project.media?.heroBanner && (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border shadow-md mb-16 bg-card max-w-5xl mx-auto">
          <img
            src={project.media.heroBanner}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Grid de Showcases/Landing Pages */}
      <section className="space-y-16 max-w-5xl mx-auto">
        {project.showcases?.map((item, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:border-primary/40"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted border-b border-border/50">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/60 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                    {item.type}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mt-1">{item.title}</h2>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    {item.techBadge}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground px-3.5 py-2 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      Ver Online
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-medium border border-border bg-secondary/30 text-muted-foreground px-3.5 py-2 rounded-full cursor-not-allowed opacity-80"
                    title="Código proprietário sob termo de privacidade"
                  >
                    <Code className="h-3.5 w-3.5" />
                    Código em breve
                  </span>
                </div>
              </div>

              <div className="grid gap-4 text-xs md:text-sm">
                <div>
                  <strong className="text-foreground block mb-1">Resumo:</strong>
                  <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                </div>

                <div>
                  <strong className="text-foreground block mb-1">O Desafio:</strong>
                  <p className="text-muted-foreground leading-relaxed">{item.challenge}</p>
                </div>

                <div>
                  <strong className="text-foreground block mb-1">Resultados & Entrega:</strong>
                  <p className="text-muted-foreground leading-relaxed">{item.results}</p>
                </div>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-secondary px-2.5 py-1 rounded-md text-muted-foreground">
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Navegação Inferior */}
      <div className="mt-16 text-center">
        <Link
          to="/"
          hash="projetos"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs md:text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para todos os projetos
        </Link>
      </div>
    </main>
  );
}