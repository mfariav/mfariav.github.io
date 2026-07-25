import { useEffect, useState } from "react";
import { ArrowDown, Code2, Palette, BriefcaseBusiness } from "lucide-react";

const ROLES = [
  "Desenvolvimento de Sistemas",
  "Front-End",
  "Web Design",
  "UI/UX",
];

const SKILLS = [
  "HTML5", "CSS3", "JavaScript", ".NET", "SQL Server", "Git", "GitHub",
  "WordPress", "Elementor", "HubSpot", "Figma", "Photoshop",
  "Illustrator", "InDesign", "Design Responsivo",
];

function useTyping(words: string[], typeSpeed = 80, deleteSpeed = 40, hold = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () => {
        setText((cur) =>
          deleting ? cur.slice(0, -1) : word.slice(0, cur.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, hold]);

  return text;
}

export function Hero() {
  const role = useTyping(ROLES);

  return (
    <section
      className="relative overflow-hidden pt-32 pb-24"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/20 blur-[100px] mix-blend-screen animate-float-glow" />

        <div className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[450px] max-h-[450px] rounded-full bg-primary/15 blur-[110px] mix-blend-screen animate-float-glow-reverse" />      </div>

      <div className="container-page relative z-10">
        <div className="flex flex-col items-center text-center mx-auto mt-8">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">
            &lt;portfolio /&gt;
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Maíra Vieira
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-display text-gradient max-w-2xl">
            Interfaces inteligentes, <br /> do design ao código.
          </p>

          <div className="mt-8 flex items-center gap-2 text-lg md:text-xl text-muted-foreground font-mono">
            <span className="text-primary">$</span>
            <span aria-live="polite" className="text-foreground">{role}</span>
            <span className="caret h-6" aria-hidden />
          </div>

          <div className="mt-15 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition-all shadow-[var(--shadow-glow)]"
            >
              Ver projetos <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#curriculo"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-surface px-6 py-3 text-sm font-medium hover:border-primary transition-colors"
            >
              Currículo
            </a>
          </div>
        </div>

        <div className="mt-25 -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 marquee-track w-max hover:[animation-play-state:paused] cursor-default">
            {[...SKILLS, ...SKILLS].map((s, idx) => (
              <span
                key={idx}
                className="shrink-0 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-mono text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-26 flex flex-col items-center text-center gap-4 mb-8">
          <p className="text-xs font-mono text-primary tracking-widest uppercase flex items-center gap-2">
            O que você encontrará aqui
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3" id="destaques">
          {[
            {
              t: "Desenvolvimento Web",
              d: "Aplicações com HTML, CSS, JavaScript, PHP e .NET.",
              icon: Code2,
              k: "dev-web",
            },
            {
              t: "Design & UX",
              d: "Interfaces centradas no usuário e design visual.",
              icon: Palette,
              k: "design-ux",
            },
            {
              t: "Experiência Profissional",
              d: "Projetos desenvolvidos profissionalmente e trabalhos autorais.",
              icon: BriefcaseBusiness,
              k: "exp-prof",
            },
          ].map((c) => {
            const IconComponent = c.icon;

            return (
              <article
                key={c.k}
                className="glow-border rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-md p-6"
              >
                <div className="text-primary">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}