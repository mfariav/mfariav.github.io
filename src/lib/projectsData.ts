// Imports das Mídias - NTW Studio
import ntwBanner from '../assets/projeto-automacao/NTW-Studio-banner.webp';
import ntwLogin from '../assets/projeto-automacao/NTW-Studio-tela-login.jpg';
import ntwInicial from '../assets/projeto-automacao/NTW-Studio-tela-inicial.jpg';
import ntwForm from '../assets/projeto-automacao/NTW-Studio-tela-form.jpg';
import ntwFluxo from '../assets/projeto-automacao/NTW-Studio-fluxo.png';
import ntwEstrutura from '../assets/projeto-automacao/NTW-Studio-estrutura.webp';
import ntwResultados from '../assets/projeto-automacao/NTW-Studio-resultados.png';
import ntwSystemVideo from '../assets/projeto-automacao/NTW-Studio-system.mp4';
import ntwCodeVideo from '../assets/projeto-automacao/NTW-Studio-code.mp4';

// Imports das Mídias - ReVeste
import revesteBanner from '../assets/projeto-reveste/Reveste-banner.webp';
import revesteTelaInicial from '../assets/projeto-reveste/Reveste-tela-inicial.jpg';
import revesteExplorar from '../assets/projeto-reveste/Reveste-explorar.jpg';
import revesteFluxo from '../assets/projeto-reveste/Reveste-fluxo.webp';
import revesteEstrutura from '../assets/projeto-reveste/Reveste-estrutura.webp';
import revesteDiagramaClasses from '../assets/projeto-reveste/Reveste-diagrama-classes.png';
import revesteSystemVideo from '../assets/projeto-reveste/Reveste-system.mp4';
import revesteCodeVideo from '../assets/projeto-reveste/Reveste-code.mp4';
import revesteTelaMinha1 from '../assets/projeto-reveste/Reveste-tela-minha-1.jpg';
import revesteTelaMinha2 from '../assets/projeto-reveste/Reveste-tela-minha-2.jpg';
import revesteTelaMinha3 from '../assets/projeto-reveste/Reveste-tela-minha-3.jpg';
import revesteTelaMinha4 from '../assets/projeto-reveste/Reveste-tela-minha-4.jpg';

export interface ProjectLink {
  label: string;
  href: string;
  icon: string;
}

export interface SolutionStep {
  title: string;
  desc: string;
}

export interface TechnicalDetails {
  backend: string;
  frontend: string;
  algorithms: string;
  valuationAlgorithm?: string;
  artifacts?: string;
}

export interface CustomScreen {
  src: string;
  alt: string;
}

export interface ProjectMedia {
  heroBanner?: string;
  loginScreen?: string;
  homeScreen?: string;
  formScreen?: string;
  flowDiagram?: string;
  structureImage?: string;
  resultsDiagram?: string;
  vitrineVideo?: string;
  codeTourVideo?: string;
  myScreens?: { src: string; alt: string }[];
}

export interface Project {
  id: string;
  title: string;
  categories: string[];
  tags: string[];
  readTime: string;
  description: string;
  gradient: string;
  cover: string;
  featured: boolean;
  links: ProjectLink[];

  // Campos detalhados para a página de Case Study
  year?: string;
  period?: string;
  role?: string;
  team?: string;
  complianceNote?: string;
  challenge?: string;
  solutionIntro?: string;
  solutionSteps?: SolutionStep[];
  myContributions?: string[];
  technicalIntro?: string;
  technicalDetails?: TechnicalDetails;
  results?: string[];
  learnings?: string;
  nextSteps?: string;
  disclaimer?: string;
  media?: ProjectMedia;
  myScreens?: { src: string; alt: string }[];
}

export const projectsData: Record<string, Project> = {
  "automacao-ntw": {
    id: "automacao-ntw",
    title: "Sistema de Automação de Design",
    categories: ["Desenvolvimento Web", "UX/UI"],
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    readTime: "6 min de leitura",
    description:
      "Aplicação web desenvolvida para automatizar a geração de materiais gráficos corporativos, reduzindo etapas operacionais e escalando a capacidade de entrega do time de design.",
    gradient: "from-[#7c1d3b] via-[#3a0f1e] to-[#1a0710]",
    cover: "NTW Studio",
    featured: true,
    year: "2026",
    period: "Abr/2026 - Atual (Em Produção / Homologado)",
    role: "Front-End & UX/UI Developer",
    team: "NTW Franquia Contábil",
    complianceNote:
      "Por questões de propriedade intelectual e sigilo comercial da NTW Franquia Contábil, os códigos de lógica de negócio e os dados de clientes foram preservados. Abaixo são demonstrados os conceitos de engenharia de software e arquitetura do sistema através de dados fictícios.",
    challenge:
      "Na estrutura operacional de uma grande franqueadora, o time de design enfrentava um gargalo a cada abertura de unidade. O processo antigo exigia <strong>8 etapas manuais por kit</strong> (Figura 1). Com o crescimento da rede, o esforço manual consumia o tempo da equipe, limitava a escala e gerava atrasos. A missão foi transformar um processo manual em uma <strong>aplicação capaz de gerar automaticamente os materiais gráficos</strong> a partir do preenchimento de um formulário, com a possibilidade de extensão para outros materiais.",
    solutionIntro: "Unindo a bagagem em UI/UX ao desenvolvimento web, me responsabilizei por todo o projeto e criei um sistema de fluxo contínuo dividido em três etapas claras para o usuário:",
    solutionSteps: [
      {
        title: "Camada de Segurança",
        desc: "Tela de autenticação robusta para controle de acesso restrito e seguro.",
      },
      {
        title: "Painel Central (Dashboard)",
        desc: "Seleção intuitiva das verticais de kits (Enxoval, Boas-vindas, Eventos, etc).",
      },
      {
        title: "Fluxo de Geração Inteligente",
        desc: "Interface dividida com formulário dinâmico à esquerda e preview do template adaptável renderizado em tempo real à direita.",
      },
    ],
    technicalIntro:
      "A aplicação foi desenvolvida em uma arquitetura monolítica, priorizando organização modular, baixo acoplamento entre responsabilidades e facilidade de manutenção.",
    technicalDetails: {
      backend:
        "Implementação de sessão segura (auth.php), persistência de configurações de ambiente (config.php) e um sistema de proxy.php para tratar requisições externas com segurança.",
      frontend:
        "A lógica de injeção de dados e renderização de layouts foi modularizada por responsabilidade (kit-enxoval.js, kit-boasvindas.js, kit-tutoreanos.js), enquanto a manipulação de DOM e estados de interface foi centralizada na engine ui.js e api.js.",
      algorithms:
        "O grande desafio técnico superado foi a criação de algoritmos de prevenção de quebra de layout, prevendo variações no tamanho de textos de entrada (como nomes de franqueados ou cidades muito extensos) para ajustar automaticamente o espaçamento de forma dinâmica via código.",
    },
    results: [
      "Redução de 4 etapas manuais no fluxo de produção.",
      "Sistema em produção e homologado com o time operacional.",
      "Testes com geração de imagens com 100% de sucesso na fase inicial.",
    ],
    learnings:
      "Este projeto aprofundou a minha experiência em gerenciar o ciclo de vida completo de uma aplicação (da análise de viabilidade ao deploy e homologação com usuários reais). O sistema provou que a tecnologia e o design, quando trabalham juntos, reduzem o esforço operacional e aumentam a capacidade de entrega.",
    nextSteps:
      "Integração planejada via API para permitir que o próprio franqueado preencha os dados na ponta, além da extensão com demais materiais padronizados utilizados na empresa.",
    disclaimer:
      "Este projeto foi desenvolvido para uso interno da empresa. Por conter regras de negócio e materiais proprietários, o código-fonte não é disponibilizado publicamente.",
    media: {
      heroBanner: ntwBanner,
      loginScreen: ntwLogin,
      homeScreen: ntwInicial,
      formScreen: ntwForm,
      flowDiagram: ntwFluxo,
      structureImage: ntwEstrutura,
      resultsDiagram: ntwResultados,
      vitrineVideo: ntwSystemVideo,
      codeTourVideo: ntwCodeVideo,
    },
    links: [
      { label: "Ver Case Study", href: "#conteudo", icon: "doc" },
      { label: "Ver Documentação", href: "https://github.com/mfariav/design-automation-system", icon: "code" },
    ],
  },
  "reveste": {
    id: "reveste",
    title: "ReVeste – Plataforma de Moda Circular",
    categories: ["Desenvolvimento Web", "Full-Stack"],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
      "Azure"
    ],
    readTime: "5 min de leitura",
    description:
      "Plataforma Full-Stack voltada para consumo sustentável e troca de peças de vestuário via sistema de créditos internos, desenvolvida com stack completa .NET Core e deploy em nuvem na Azure.",
    gradient: "from-[#1b4332] via-[#2d6a4f] to-[#081c15]",
    cover: "ReVeste",
    featured: true,
    year: "2026",
    period: "Fev/2026 - Jun/2026 (Publicado / Homologado)",
    role: "Full-Stack Developer & Tech Lead Front-End",
    team: "Projeto Acadêmico em Equipe",
    challenge:
      "A indústria da moda enfrenta sérios desafios de sustentabilidade e alto volume de descarte têxtil. Apesar do crescimento de brechós e revendas, as plataformas existentes sofrem com processos pouco intuitivos, negociações demoradas e falta de incentivos reais à economia circular. A missão foi projetar e desenvolver uma plataforma digital baseada em créditos virtuais, permitindo a troca de roupas de forma simples, justa e segura.",
    solutionIntro:
      "O projeto foi desenvolvido em equipe utilizando metodologia ágil (Scrum), passando por todas as etapas do ciclo de desenvolvimento de software.<br/><br/><strong>Minha participação concentrou-se principalmente em:</strong>",
    solutionSteps: [
      {
        title: "Páginas Principais do Sistema",
        desc: "Desenvolvimento das telas de Login e Cadastro, Explorar, Detalhes da Peça, Histórico de Trocas, Edição de Perfil e Peças.",
      },
      {
        title: "Lógica de Back-End",
        desc: "Implementação da lógica do servidor para cadastro seguro de usuários e gerenciamento das peças.",
      },
      {
        title: "Documentação & Engenharia",
        desc: "Criação de documentação técnica, diagramas iniciais do projeto e registro estruturado dos planos de testes de software e usabilidade.",
      },
      {
        title: "Gestão Ágil (Scrum)",
        desc: "Controle de tarefas no método Scrum e liderança na organização geral das entregas do projeto.",
      },
    ],
    technicalIntro:
      "A plataforma foi construída utilizando o ecossistema .NET, adotando arquitetura MVC para separar responsabilidades entre interface, regras de negócio e acesso aos dados.",
    technicalDetails: {
      backend:
        "Separação estrita em Modelos, Visões e Controladores. Toda a lógica de computação e validações de negócios roda no back-end via Razor Pages.",
      frontend:
        "Modelagem relacional estruturada via Entity Framework, garantindo integridade referencial nas tabelas de usuários, roupas, transações e saldo de moedas do sistema.",
      algorithms:
        "Publicação e gerenciamento do ciclo de vida da aplicação em ambiente cloud real.",
      artifacts:
        "Durante o projeto também foram produzidos documentações do projeto, como personas, histórias de usuário, casos de uso, arquitetura da solução e diagrama de classes.",
      valuationAlgorithm:
        "O maior desafio técnico do desenvolvimento foi codificar o algoritmo de valoração de pontuação. Criou-se uma lógica parametrizada nas Controllers capaz de processar múltiplas variáveis de entrada (marca, tipo de peça e estado declarado) e converter o resultado em créditos em tempo real.",
    },
    results: [
      "Sistema 100% testado e validado em planos de testes de software e usabilidade, atingindo altos índices de satisfação em cenários reais.",
    ],
    learnings:
      "Este projeto marcou a consolidação do ciclo completo de desenvolvimento web com a stack .NET (do levantamento de requisitos ao deploy na nuvem). Reforçou na prática o funcionamento da arquitetura MVC, a persistência relacional com Entity Framework, a criação de algoritmos de valoração e a condução ágil no método Scrum.\n\nO ReVeste foi meu primeiro contato com o desenvolvimento completo de uma aplicação web utilizando o ecossistema .NET e com stack completa (front e back integrados em produção real). O maior aprendizado técnico foi entender o fluxo de ponta a ponta: como uma ação do usuário na interface se transforma em requisição HTTP, passa pelo controller, é processada com as regras de negócio, persiste no banco e volta como resposta para a tela.\n\nAlém da programação, o projeto ampliou minha compreensão sobre arquitetura de software, modelagem de banco de dados, documentação técnica, metodologias ágeis e trabalho colaborativo em equipe.\n\nParticipar de todas as etapas — da pesquisa com usuários ao deploy da aplicação — reforçou a importância de integrar desenvolvimento e experiência do usuário na construção de produtos digitais.",
    media: {
      heroBanner: revesteBanner,
      loginScreen: revesteTelaInicial,
      homeScreen: revesteExplorar,
      formScreen: revesteExplorar,
      flowDiagram: revesteFluxo,
      structureImage: revesteEstrutura,
      resultsDiagram: revesteDiagramaClasses,
      vitrineVideo: revesteSystemVideo,
      codeTourVideo: revesteCodeVideo,
      myScreens: [
        { src: revesteTelaMinha1, alt: "Tela desenvolvida por completo - 1" },
        { src: revesteTelaMinha2, alt: "Tela desenvolvida por completo - 2" },
        { src: revesteTelaMinha3, alt: "Tela desenvolvida por completo - 3" },
        { src: revesteTelaMinha4, alt: "Tela desenvolvida por completo - 4" },
      ],
    },
    links: [
      { label: "Ver Case Study", href: "#conteudo", icon: "doc" },
      { label: "Ver Repositório", href: "https://github.com/mfariav/reveste-web", icon: "code" },
    ],
  },
};