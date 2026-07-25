import { Mail, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";

const ITEMS = [
  { icon: Mail, label: "Email", value: "mfariav@gmail.com", href: "mailto:mfariav@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "(31) 99274-4975", href: "https://wa.me/5531992744975" },
  { icon: Linkedin, label: "LinkedIn", value: "/mfariav", href: "https://linkedin.com/in/mfariav" },
];

export function Contato() {
  return (
    <section id="contato" className="py-24 border-t border-border">
      <div className="container-page">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
          <div className="relative">
            <p className="text-xs font-mono text-primary tracking-widest uppercase">
              Contato
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold max-w-2xl">
              Vamos construir algo <span className="text-gradient">memorável</span>?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Estou disponível para oportunidades full-time, contratos e colaborações.
              Responderei em até 24h.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {ITEMS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="glow-border group rounded-2xl border border-primary/50 bg-card p-5 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary" />
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
