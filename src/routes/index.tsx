import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Curriculo } from "@/components/portfolio/Curriculo";
import { Contato } from "@/components/portfolio/Contato";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#projetos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-1.5 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Curriculo />
        <Contato />
      </main>
    </div>
  );
}
