import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Clock, Code2, ShieldAlert, CheckCircle2, FileText, ArrowUpRight, Sparkles, Play, Layers } from 'lucide-react';
import { projectsData } from '../lib/projectsData';

export const Route = createFileRoute('/projeto/$id')({
  component: ProjetoDetalhes,
});

function ProjetoDetalhes() {
  const { id } = Route.useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <main className="container-page py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Projeto não encontrado</h2>
        <p className="mt-2 text-sm text-muted-foreground">O projeto que você procura não existe ou foi removido.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          ← Voltar para o início
        </Link>
      </main>
    );
  }

  return (
    <main id="conteudo" className="container-page pt-30 pb-24 min-h-screen">
      <article>
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col items-center justify-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">Case Study</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {project.readTime}
              </span>
            </div>

            {project.period && (
              <div className="text-muted-foreground/80">
                {project.period}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {project.title}
          </h1>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Banner / Cover */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border shadow-md mb-12 bg-card">
          {project.media?.heroBanner ? (
            <img
              src={project.media.heroBanner}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} grid place-items-center`}>
              <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white/95 drop-shadow-2xl">
                {project.cover}
              </span>
            </div>
          )}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="space-y-12">

            {/* 1. O Desafio */}
            {project.challenge && (
              <section className="space-y-6">
                {project.complianceNote && (
                  <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-start gap-3 text-xs md:text-sm text-accent dark:text-accent">
                    <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Nota de Compliance:</strong> {project.complianceNote}
                    </p>
                  </div>
                )}

                <h2 className="text-xl md:text-2xl font-bold tracking-tight">1. O Desafio</h2>

                <p
                  className="text-sm md:text-base text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.challenge }}
                />

                {/* Diagrama de Fluxo */}
                {project.media?.flowDiagram && (
                  <figure className="my-6 space-y-2">
                    <div className="overflow-hidden rounded-xl border border-border bg-card p-2">
                      <img
                        src={project.media.flowDiagram}
                        alt="Fluxo do Processo"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                    <figcaption className="text-center text-xs font-mono text-muted-foreground">
                      Figura 1 - Mapeamento de etapas do fluxo funcional.
                    </figcaption>
                  </figure>
                )}
              </section>
            )}

            {/* 2. A Solução */}
            {project.solutionSteps && (
              <>
                {project.id === "automacao-ntw" && (
                  <section className="space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">2. A Solução</h2>

                    {project.solutionIntro && (
                      <p
                        className="text-sm md:text-base text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: project.solutionIntro }}
                      />
                    )}

                    <div className="space-y-6">
                      {project.solutionSteps.map((step: { title: string; desc: string }, idx: number) => {
                        const stepImages = [
                          { src: project.media?.loginScreen, label: "1. Login & Autenticação" },
                          { src: project.media?.homeScreen, label: "2. Tela Inicial / Catálogo" },
                          { src: project.media?.formScreen, label: "3. Explorar & Filtros" }
                        ];

                        const currentImage = stepImages[idx];

                        return (
                          <div key={idx} className="space-y-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40">
                            <div>
                              <h3 className="font-semibold text-sm md:text-base text-foreground flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-mono">
                                  {idx + 1}
                                </span>
                                {step.title}
                              </h3>
                              <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                                {step.desc}
                              </p>
                            </div>

                            {/* Imagem do Step */}
                            {currentImage?.src && (
                              <div className="pt-2">
                                <div className="overflow-hidden rounded-lg border border-border/60 bg-muted/20 shadow-sm">
                                  <img
                                    src={currentImage.src}
                                    alt={step.title}
                                    className="w-full max-h-72 object-cover object-top hover:scale-[1.01] transition-transform duration-300"
                                    loading="lazy"
                                  />
                                </div>
                                <p className="mt-1.5 text-[11px] font-mono text-center text-muted-foreground/80">
                                  {currentImage.label}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Vídeo Demonstração */}
                    {project.media?.vitrineVideo && (
                      <div className="space-y-2 pt-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Play className="h-4 w-4 text-primary fill-primary" />
                          <span>Demonstração em Tempo Real (Sistema Vivo)</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-black/90 shadow-md">
                          <video
                            src={project.media.vitrineVideo}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto max-h-[450px] object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </section>
                )}

                {project.id !== "automacao-ntw" && (
                  <section className="space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">2. A Solução</h2>

                    {project.solutionIntro && (
                      <p
                        className="text-sm md:text-base text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: project.solutionIntro }}
                      />
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.solutionSteps.map((step: { title: string; desc: string }, idx: number) => (
                        <div key={idx} className="space-y-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40">
                          <h3 className="font-semibold text-sm md:text-base text-foreground flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-mono">
                              {idx + 1}
                            </span>
                            {step.title}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* 2. Galeria de Telas */}
                    {(() => {
                      const screens = (project as any)?.myScreens || (project.media as any)?.myScreens;

                      if (!screens || !Array.isArray(screens) || screens.length === 0) {
                        return null;
                      }

                      return (
                        <div className="space-y-4 pt-6">
                          <h3 className="font-semibold text-base md:text-lg text-foreground">
                            Telas Desenvolvidas
                          </h3>
                          <div className="grid grid-cols-1 gap-6">
                            {screens.map((screen: { src: string; alt: string }, idx: number) => (
                              <div key={idx} className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-md transition-all hover:border-primary/40">
                                {screen.src ? (
                                  <img
                                    src={screen.src}
                                    alt={screen.alt || `Tela ${idx + 1}`}
                                    className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="p-4 text-center text-xs text-red-400">Imagem sem src</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}

                    {/* 3. Vídeo Demonstração */}
                    {project.media?.vitrineVideo && (
                      <div className="space-y-2 pt-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Play className="h-4 w-4 text-primary fill-primary" />
                          <span>Demonstração em Tempo Real (Sistema Vivo)</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-black/90 shadow-md">
                          <video
                            src={project.media.vitrineVideo}
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto max-h-[450px] object-contain"
                          />
                        </div>
                      </div>
                    )}
                  </section>
                )}
              </>
            )}

            {/* 3. O Resultado Técnico */}
            {project.technicalDetails && (
              <section id="arquitetura" className="space-y-6">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">3. O Resultado Técnico</h2>

                {project.technicalIntro && (
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.technicalIntro}
                  </p>
                )}

                {/* ===== CASO 1: AUTOMAÇÃO NTW ===== */}
                {project.id === "automacao-ntw" && (
                  <>
                    <div className="space-y-3">
                      <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <Code2 className="h-4 w-4" /> Back-End (PHP)
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.backend}
                        </p>
                      </div>

                      <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <FileText className="h-4 w-4" /> Front-End Lógico (JavaScript)
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.frontend}
                        </p>
                      </div>

                      <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <Sparkles className="h-4 w-4" /> Tratamento de Variações de Dados
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.algorithms}
                        </p>
                      </div>
                    </div>

                    {/* Estrutura de Diretórios */}
                    {project.media?.structureImage && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Layers className="h-3.5 w-3.5 text-primary" />
                          <span>Estrutura de Diretórios & Organização Modular</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-card p-2">
                          <img
                            src={project.media.structureImage}
                            alt="Estrutura de Arquivos do Projeto"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}

                    {/* Code Tour Video */}
                    {project.media?.codeTourVideo && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Code2 className="h-4 w-4 text-primary" />
                          <span>Code Tour – Navegação pela Arquitetura do Sistema</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-black/90 shadow-md">
                          <video
                            src={project.media.codeTourVideo}
                            controls
                            muted
                            playsInline
                            className="w-full h-auto max-h-[450px] object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Impacto & Resultados */}
                    {project.results && (
                      <div className="pt-2">
                        <h3 className="text-base font-semibold mb-3">Impacto & Resultados</h3>
                        <ul className="grid gap-2.5">
                          {project.results.map((res: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Diagrama de Resultados da Automação (Posicionado logo após os tópicos) */}
                    {project.media?.resultsDiagram && (
                      <div className="space-y-2 pt-2">
                        <div className="overflow-hidden rounded-xl border border-border bg-card p-2">
                          <img
                            src={project.media.resultsDiagram}
                            alt="Diagrama de Resultados - Automação NTW"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}

                    {/* Disclaimer */}
                    {project.disclaimer && (
                      <blockquote className="border-l-2 border-primary/50 pl-3 py-1 text-xs text-muted-foreground italic">
                        "{project.disclaimer}"
                      </blockquote>
                    )}
                  </>
                )}

                {/* ===== REVESTE ===== */}
                {project.id === "reveste" && (
                  <>
                    {/* OS 4 TÓPICOS INICIAIS */}
                    <div className="space-y-3">
                      {/* Topico 1 */}
                      <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <Code2 className="h-4 w-4" /> Arquitetura MVC (.NET Core)
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.backend}
                        </p>
                      </div>

                      {/* Topico 2 */}
                      <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <FileText className="h-4 w-4" /> Camada de Dados & Persistência (SQL Server)
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.frontend}
                        </p>
                      </div>

                      {/* Topico 3 */}
                      <div className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <Sparkles className="h-4 w-4" /> Infraestrutura e Deploy (Microsoft Azure)
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.algorithms}
                        </p>
                      </div>

                      {/* Topico 4 */}
                      {project.technicalDetails.artifacts && (
                        <div className="rounded-xl border border-border bg-card p-4">
                          <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                            <Layers className="h-4 w-4" /> Artefatos
                          </h3>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {project.technicalDetails.artifacts}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Estrutura de Diretórios */}
                    {project.media?.structureImage && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Layers className="h-3.5 w-3.5 text-primary" />
                          <span>Estrutura de Diretórios & Organização Modular</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-card p-2">
                          <img
                            src={project.media.structureImage}
                            alt="Estrutura de Arquivos do Projeto"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}

                    {/* Diagrama de Classes ReVeste com Legenda */}
                    {project.media?.resultsDiagram && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                          <Layers className="h-3.5 w-3.5 text-primary" />
                          <span>Diagrama de Classes & Arquitetura do Banco de Dados</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-card p-2">
                          <img
                            src={project.media.resultsDiagram}
                            alt="Diagrama de Classes ReVeste"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}

                    {/* Code Tour Video */}
                    {project.media?.codeTourVideo && (
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Code2 className="h-4 w-4 text-primary" />
                          <span>Code Tour – Navegação pela Arquitetura do Sistema</span>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-border bg-black/90 shadow-md">
                          <video
                            src={project.media.codeTourVideo}
                            controls
                            muted
                            playsInline
                            className="w-full h-auto max-h-[450px] object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* O DESAFIO TÉCNICO SUPERADO*/}
                    {project.technicalDetails.valuationAlgorithm && (
                      <div className="rounded-xl border border-border bg-card p-4 pt-2">
                        <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-1.5">
                          <Sparkles className="h-4 w-4" /> O Desafio Técnico Superado: Algoritmo de Valoração de Créditos
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {project.technicalDetails.valuationAlgorithm}
                        </p>
                      </div>
                    )}

                    {/* RESULTADO OPERACIONAL */}
                    {project.results && (
                      <div className="pt-2">
                        <h3 className="text-base font-semibold mb-3">Resultado Operacional</h3>
                        <ul className="grid gap-2.5">
                          {project.results.map((res: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </section>
            )}

            {/* 4. Aprendizado & Evolução */}
            {(project.learnings || project.nextSteps) && (
              <section className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">4. Aprendizado & Evolução</h2>
                {project.learnings && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.learnings}
                  </p>
                )}
                {project.nextSteps && (
                  <div className="mt-3 rounded-xl border border-border bg-secondary/30 p-4">
                    <h4 className="text-[11px] font-mono text-primary uppercase tracking-wider mb-1 font-semibold">
                      Próximos Passos
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {project.nextSteps}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-3 pt-6">
              {project.links
                .filter((link) => link.href !== "#conteudo")
                .map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs md:text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}

              <Link
                to="/"
                hash="projetos"
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card px-5 py-2.5 text-xs md:text-sm font-medium text-foreground shadow-sm hover:border-primary hover:text-primary transition-colors"
              >
                Ver mais projetos
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

          </div>

          {/* Sidebar Metadados */}
          <aside className="space-y-5 rounded-2xl border border-primary/40 bg-card p-5 h-fit lg:sticky lg:top-24 shadow-sm hover:border-primary/60 transition-colors">
            <div>
              <p className="text-[10px] font-mono text-primary font-semibold uppercase tracking-widest">
                Projeto
              </p>
              <p className="mt-0.5 text-xs md:text-sm font-medium text-foreground">
                {project.title}
              </p>
            </div>

            {project.year && (
              <div>
                <p className="text-[10px] font-mono text-primary font-semibold uppercase tracking-widest">
                  Ano
                </p>
                <p className="mt-0.5 text-xs md:text-sm font-medium text-foreground">
                  {project.year}
                </p>
              </div>
            )}

            {project.period && (
              <div>
                <p className="text-[10px] font-mono text-primary font-semibold uppercase tracking-widest">
                  Status
                </p>
                <p className="mt-0.5 text-xs md:text-sm font-medium text-foreground">
                  {project.period}
                </p>
              </div>
            )}

            {project.role && (
              <div>
                <p className="text-[10px] font-mono text-primary font-semibold uppercase tracking-widest">
                  Papel
                </p>
                <p className="mt-0.5 text-xs md:text-sm font-medium text-foreground">
                  {project.role}
                </p>
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="pt-3 border-t border-border">
                <p className="text-[10px] font-mono text-primary font-semibold uppercase tracking-widest mb-2">
                  Tecnologias Usadas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </article>
    </main>
  );
}