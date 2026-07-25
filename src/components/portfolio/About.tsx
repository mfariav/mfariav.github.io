const TRAITS = ["Organização", "Agilidade", "Foco", "Disciplina", "Autodidata"];
import fotoMaira from "../../assets/foto-maira.png";

export function About() {
  return (
    <section id="sobre" className="py-24 border-t border-border">
      <div className="container-page grid gap-12 md:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <p className="text-xs font-mono text-primary tracking-widest uppercase">
            Sobre mim
          </p>

          <div className="mt-2 flex items-start gap-4">
            <img
              src={fotoMaira}
              alt="Foto da Maíra"
              className="w-12 h-12 md:w-33 md:h-33 rounded-xl object-cover mt-1"
            />
            <h2 className="text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight">
              Onde o design encontra o desenvolvimento.
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Formada em <strong className="text-foreground">Design Gráfico</strong> e graduanda em <strong className="text-foreground">Análise e Desenvolvimento de Sistemas</strong>.
              Meu diferencial é combinar a visão de design e experiência do usuário ao código,
              criando soluções que conciliam usabilidade, organização visual e implementação técnica.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {TRAITS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Localização
            </p>
            <p className="mt-1 font-medium">Belo Horizonte/MG · Remoto</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Foco atual
            </p>
            <p className="mt-1 font-medium">Web Design · Front-End · Back-End</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Idiomas
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Inglês (avançado), espanhol (intermediário), libras, francês, mandarim, coreano (básico).
            </p>
          </div>
          <div className="pt-4 border-t border-border grid grid-cols-3 gap-2 text-center">
            {[
              { k: "5", v: "anos em design" },
              { k: "2027", v: "conclusão ADS" },
              { k: "100%", v: "atenção ao detalhe" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-display font-bold text-primary">{s.k}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}