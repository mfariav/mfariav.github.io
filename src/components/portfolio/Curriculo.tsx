import { Download, Linkedin } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Web Design / Front-End",
    org: "NTW Franquia Contábil",
    period: "04/2026 — Atual",
    bullets: [
      "Desenvolvimento de aplicação web para automação de design utilizando HTML, CSS, JavaScript e PHP.",
      "Desenvolvimento web com foco em conversão via Wordpress, Elementor, HTML5 e CSS3.",
      "Criação e integração de formulários de captura de leads no HubSpot (CRM).",
    ],
  },
  {
    role: "Design Gráfico",
    org: "NTW Franquia Contábil",
    period: "04/2023 — 03/2026",
    bullets: [
      "Criação de materiais gráficos digitais e impressos (Photoshop, Illustrator, InDesign) focados no suporte ao time de vendas e franqueados.",
    ],
  },
  {
    role: "Estágio em Design",
    org: "S&I Automação Comercial",
    period: "12/2019 — 11/2020",
    bullets: [
      "Criação de peças visuais, e-mail marketing (RD Station) e desenvolvimento de landing pages para campanhas digitais.",
    ],
  },
];

const EDUCATION = [
  { title: "Análise e Desenvolvimento de Sistemas", org: "PUC · cursando", period: "(previsão de término 2027)" },
  { title: "Design Gráfico", org: "UEMG", period: "conclusão em 2022" },
  { title: "Estatística (parcial)", org: "UFMG", period: "4 períodos concluídos" },
];

const SOFTWARE = ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Git", "GitHub", "Azure", "Figma", "Photoshop", "Illustrator", "InDesign", "WordPress", "Elementor", "HubSpot", "RD Station", "Framer"];

export function Curriculo() {
  return (
    <section id="curriculo" className="pt-24 pb-20 border-t border-border">
      <div className="container-page">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono text-primary tracking-widest uppercase">
              Trajetória
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold">Currículo</h2>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Web Design · Front-End · Análise e Desenvolvimento de Sistemas
            </p>
          </div>
          <div className="flex flex-wrap gap-2">

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition"
            >
              <Download className="h-4 w-4" /> Baixar PDF
            </a>

            <a
              href="https://linkedin.com/in/mfariav"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-primary transition"
            >
              <Linkedin className="h-4 w-4" /> Ver LinkedIn
            </a>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-6">Experiência profissional</h3>
            <ol className="relative border-l border-border pl-6 space-y-6">
              {EXPERIENCE.map((e) => (
                <li key={e.role}>
                  <span className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-glow)]" />
                  <p className="text-xs font-mono text-muted-foreground">{e.period}</p>
                  <p className="mt-1 font-semibold">{e.role}</p>
                  <p className="text-sm text-primary">{e.org}</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-4">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Formação</h3>
              <ul className="space-y-4">
                {EDUCATION.map((e) => (
                  <li key={e.title} className="flex justify-between gap-4">
                    <div>
                      <p className="font-medium">{e.title}</p>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground shrink-0">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Tecnologia & Ferramentas</h3>
              <div className="flex flex-wrap gap-2">
                {SOFTWARE.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}