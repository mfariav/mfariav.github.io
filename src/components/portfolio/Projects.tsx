import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Imports das imagens
import ntwBanner2 from "@/assets/projeto-automacao/NTW-Studio-banner2.webp";
import revesteBanner from "@/assets/projeto-reveste/Reveste-banner.webp";
import thumbExhibitly from "@/assets/projetos/Thumb_01.png";
import thumbCompilado from "@/assets/projetos/Thumb_02.png";
import thumbORG from "@/assets/projetos/Thumb_03.png";
import thumb9M from "@/assets/projetos/Thumb_04.png";

type Category = "Todos" | "Desenvolvimento Web" | "UX/UI" | "Design Gráfico";

interface Project {
  id: string;
  title: string;
  categories: Exclude<Category, "Todos">[];
  tags: string[];
  readTime: string;
  description: string;
  gradient: string;
  cover: string; 
  links: { label: string; href: string; icon: "case" | "code" | "doc" }[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "automacao-ntw",
    title: "Sistema de Automação de Design",
    categories: ["Desenvolvimento Web", "UX/UI"],
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    readTime: "6 min de leitura",
    description:
      "Aplicação web desenvolvida para automatizar a geração de materiais gráficos corporativos, reduzindo etapas operacionais e escalando a capacidade de entrega do time.",
    gradient: "from-[#7c1d3b] via-[#3a0f1e] to-[#1a0710]",
    cover: ntwBanner2,
    featured: true,
    links: [
      { label: "Ver Case Study", href: "/projeto/automacao-ntw", icon: "case" },
      { label: "Ver Documentação", href: "https://github.com/mfariav/design-automation-system", icon: "doc" },
    ],
  },
  {
    id: "reveste",
    title: "ReVeste – Plataforma de Moda Circular",
    categories: ["Desenvolvimento Web"],
    tags: ["C#", "ASP.NET Core", "SQL Server", "HTML", "CSS"],
    readTime: "5 min de leitura",
    description:
      "Plataforma de economia circular e consumo inteligente baseada em um sistema interno de créditos e trocas cooperativas de vestuário.",
    gradient: "from-[#1e3a2f] via-[#0f2419] to-[#08150e]",
    cover: revesteBanner,
    featured: true,
    links: [
      { label: "Ver Case Study", href: "/projeto/reveste", icon: "case" },
      { label: "Ver Repositório", href: "https://github.com/mfariav/reveste-web", icon: "code" },
    ],
  },
  {
    id: "app-museu",
    title: "App Museu (Exhibitly)",
    categories: ["UX/UI"],
    tags: ["Figma", "App", "UX Design"],
    readTime: "8 min de leitura",
    description:
      "Design de aplicativo focado na guiação multimídia e interativa de visitantes dentro de espaços culturais e acervos históricos.",
    gradient: "from-[#f4c542] via-[#c48f10] to-[#3a2a02]",
    cover: thumbExhibitly,
    links: [
      { label: "Ver Projeto", href: "https://www.behance.net/gallery/227781685/App-Museu-Case-Design-UX", icon: "case" },
    ],
  },
  {
    id: "org",
    title: "Sistema de Aprendizagem ORG",
    categories: ["UX/UI"],
    tags: ["Figma", "UX/UI"],
    readTime: "5 min de leitura",
    description:
      "Plataforma de gerenciamento e gamificação educacional focada na experiência de estudantes autônomos de idiomas.",
    gradient: "from-[#2a2f45] via-[#141827] to-[#080a12]",
    cover: thumbORG,
    links: [
      { label: "Ver Projeto", href: "https://www.behance.net/gallery/142359899/LOrg-Language-learning-organization-system", icon: "case" },
    ],
  },
  {
    id: "compilado-2024",
    title: "Compilado 2024",
    categories: ["Design Gráfico"],
    tags: ["Photoshop", "InDesign", "Branding"],
    readTime: "5 min de leitura",
    description:
      "Curadoria de trabalhos de comunicação visual, diagramações de e-books e identidades gráficas desenhadas sob medida para marcas estratégicas.",
    gradient: "from-[#8b3a3a] via-[#4a1a1a] to-[#1a0808]",
    cover: thumbCompilado,
    links: [
      { label: "Ver Projeto", href: "https://www.behance.net/gallery/217063991/Compilado-2024", icon: "case" },
    ],
  },
  {
    id: "9m",
    title: "Identidade Visual 9M Design",
    categories: ["Design Gráfico"],
    tags: ["Illustrator", "Branding"],
    readTime: "3 min de leitura",
    description:
      "Projeto de branding estratégico unindo design contemporâneo e linguagem fluida para reposicionamento de marca.",
    gradient: "from-[#e8c547] via-[#a08422] to-[#2a2001]",
    cover: thumb9M,
    links: [
      { label: "Ver Projeto", href: "https://www.behance.net/gallery/187800973/Identidade-Visual-9M-Design", icon: "case" },
    ],
  },
];

const TABS: Category[] = ["Todos", "Desenvolvimento Web", "UX/UI", "Design Gráfico"];

function CoverArt({
  cover,
  title,
  gradient,
  readTime,
}: {
  cover: string;
  title: string;
  gradient: string;
  readTime: string;
}) {
  const isImage = /\.(png|jpe?g|svg|webp|gif)$/i.test(cover) || cover.startsWith("data:") || cover.startsWith("/");

  return (
    <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <span className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md text-[10px] text-white font-bold uppercase px-2.5 py-1 rounded-md tracking-wider">
        {readTime}
      </span>

      {isImage ? (
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <span className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white/95 drop-shadow-lg">
          {cover}
        </span>
      )}
    </div>
  );
}

export function Projects() {
  const [tab, setTab] = useState<Category>("Todos");

  const filtered = useMemo(
    () =>
      tab === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(tab as never)),
    [tab]
  );

  return (
    <section id="projetos" className="py-20 border-t border-border">
      <div className="container-page">
        <header className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-mono text-primary tracking-widest uppercase">
            Portfólio
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Filtre por segmento técnico e explore as soluções visuais e de software construídas.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Filtrar projetos por categoria"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm border transition-all ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-glow)]"
                    : "bg-surface border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/60"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="glow-border group rounded-2xl overflow-hidden border border-primary/30 bg-card flex flex-col"
            >
              <CoverArt
                cover={p.cover}
                title={p.title}
                gradient={p.gradient}
                readTime={p.readTime}
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-secondary/50 border border-primary/30 text-muted-foreground shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 border-t border-border pt-4 mt-auto">
                  {p.links.map((l, index) => {
                    const Icon =
                      l.icon === "code"
                        ? Code2
                        : l.icon === "doc"
                          ? FileText
                          : ArrowUpRight;

                    const isFirst = index === 0;
                    const buttonStyles = `cursor-pointer inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      isFirst
                        ? "bg-primary text-primary-foreground border border-primary hover:bg-primary/90 shadow-[var(--shadow-glow)]"
                        : "bg-surface border border-primary/50 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                    }`;

                    const isInternal = l.href.startsWith("/");

                    if (isInternal) {
                      return (
                        <Link
                          key={l.label}
                          to={l.href}
                          className={buttonStyles}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {l.label}
                        </Link>
                      );
                    }

                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={buttonStyles}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {l.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}