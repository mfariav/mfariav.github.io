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

// Imports das Mídias - Landing Pages & UI
import lpBanner from '../assets/projeto-paginas/LP-banner.webp';
import lpPage01 from '../assets/projeto-paginas/page-01.webp';
import lpPage02 from '../assets/projeto-paginas/page-02.webp';
import lpPage03 from '../assets/projeto-paginas/page-03.webp';
import lpPage04 from '../assets/projeto-paginas/page-04.webp';
import lpPage05 from '../assets/projeto-paginas/page-05.webp';
import lpPage06 from '../assets/projeto-paginas/page-06.webp';
import lpPage07 from '../assets/projeto-paginas/page-07.webp';
import lpPage08 from '../assets/projeto-paginas/page-08.webp';

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

export interface ShowcaseItem {
  title: string;
  type: string;
  techBadge: string;
  summary: string;
  challenge: string;
  results: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  tags?: string[];
}

export interface Project {
  id: string;
  type: 'case-study' | 'landing-page';
  title: string;
  categories: string[];
  tags: string[];
  readTime: string;
  description: string;
  gradient: string;
  cover: string;
  featured: boolean;
  links: ProjectLink[];

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

  showcases?: ShowcaseItem[];
}

export const projectsData: Record<string, Project> = {
  "automacao-ntw": {
    id: "automacao-ntw",
    type: "case-study",
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
    type: "case-study",
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
        "O maior desafio técnico do desenvolvimento foi codificar o algoritmo de valoração de pontuação. Criou-se uma lógica parametrizada nas Controllers capaz de processar múltiplas variáveis de entrada (marca, tipo de peça e estado declared) e converter o resultado em créditos em tempo real.",
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
  "landing-pages": {
    id: "landing-pages",
    type: "landing-page",
    title: "Hub de Landing Pages & Páginas Institucionais",
    categories: ["UX/UI", "Front-End"],
    tags: ["HTML5", "CSS3", "JavaScript", "WordPress", "Elementor Pro", "Responsive Design"],
    readTime: "3 min de leitura",
    description: "Desenvolvimento de interfaces comerciais focadas em conversão, performance e fidelidade ao design.",
    gradient: "from-[#1e1b4b] via-[#312e81] to-[#0f172a]",
    cover: "Landing Pages",
    featured: false,
    showcases: [
      {
        title: "Experience Teresópolis — Imersão & Evento Fechado",
        type: "Landing Page do Evento",
        techBadge: "Código Customizado (HTML/CSS/JS) / Elementor Pro / WordPress",
        summary: "Página guia e institucional com a programação completa do evento exclusivo promovido pela franqueadora para os seus franqueados em Teresópolis.",
        challenge: "Transmitir sofisticação, organização e modernidade, reunindo horários, palestrantes e orientações logísticas em uma interface fluida e de fácil consulta rápida pelo celular durante o evento.",
        results: "Experiência de navegação leve e intuitiva para o franqueado participante, reforçando a autoridade e o padrão corporativo da marca NTW.",
        image: lpPage01,
        liveUrl: "https://page.ntwfranquiacontabil.com.br/experience-teresopolis/",
        tags: ["Eventos", "Mobile-First", "WordPress"]
      },
      {
        title: "NTW Digital + CBMF — Parceria Fitness",
        type: "Landing Page de Co-marketing & Captura de Leads",
        techBadge: "Código Customizado (HTML/CSS/JS) / Elementor Pro / WordPress / Integração de Forms",
        summary: "Página focada na conversão de profissionais do ecossistema fitness (da Confederação Brasileira de Musculação e Fisiculturismo) para os serviços de contabilidade digital da NTW.",
        challenge: "Criar uma comunicação visual e linguagem que conversasse diretamente com o público da CBMF (educadores físicos, personal trainers e proprietários de academias), conectando a relevância da gestão contábil com as dores específicas do mercado fitness.",
        results: "Landing page com apelo dinâmico e esportivo, estruturada para otimizar conversões e viabilizar o rastreamento de comissões para o franqueado parceiro da campanha.",
        image: lpPage02,
        liveUrl: "https://lp.ntwcontabilidade.com.br/ntw-digital-cbmf/",
        tags: ["Co-marketing", "Fitness", "Lead Capture"]
      },
      {
        title: "NTW Digital + OnCourt Pro — Parceria Esporte",
        type: "Landing Page de Co-marketing & Captura de Leads",
        techBadge: "Código Customizado (HTML/CSS/JS) / Elementor Pro / WordPress / Integração de Forms",
        summary: "Página de captura voltada para a oferta de serviços contábeis especializados para treinadores, gestores e arenas de tênis, beach tennis e padel usuários da OnCourt Pro.",
        challenge: "Construir uma navegação moderna e objetiva alinhada à estética da plataforma OnCourt Pro, demonstrando como a contabilidade simplificada libera mais tempo para a gestão das aulas e arenas.",
        results: "Fluxo contínuo de apresentação de benefícios com foco em conversão rápida, mobile-first e captura eficiente de contatos comerciais.",
        image: lpPage03,
        liveUrl: "https://lp.ntwcontabilidade.com.br/ntw-digital-oncourt-pro/",
        tags: ["SaaS Partnership", "Sports", "Conversion"]
      },
      {
        title: "Tutoreanos — Página Comercial da Unidade",
        type: "Template Comercial / Página Regional",
        techBadge: "Código Customizado (HTML/CSS/JS) / Elementor Pro / WordPress / Componentes Reutilizáveis com Pods",
        summary: "Modelo de página comercial padrão desenvolvido para ser replicado entre franqueados da marca Tutoreanos na captação de clientes locais.",
        challenge: "Projetar um layout modular e escalável que mantivesse a consistência visual da marca corporativa, permitindo personalizações locais (como contatos, endereço e foto do consultor da unidade).",
        results: "Padronização comercial para a rede de franquias, agilizando o lançamento de novas páginas de unidades com máxima eficiência.",
        image: lpPage04,
        liveUrl: "https://tutoreanos.com.br/unidade/tutoreanos-sao-jose-dos-campos/",
        tags: ["Template Scalability", "Pods Framework", "Franchise"]
      },
      {
        title: "Novo Mapa Tributário — Evento & Palestra",
        type: "Landing Page de Captura / Inscrição de Evento",
        techBadge: "Código Customizado (HTML/CSS/JS) / Elementor Pro / WordPress / Integração de Forms",
        summary: "Página de alta conversão desenvolvida para promover a palestra/aula presencial sobre os impactos da Reforma Tributária no setor empresarial.",
        challenge: "Traduzir um tema técnico e denso (reforma tributária) em uma proposta de valor direta e urgente para empresários, estimulando a inscrição imediata no evento.",
        results: "Seções claras com apresentação de especialistas e gatilhos mentais que aumentaram a taxa de conversão do formulário.",
        image: lpPage05,
        liveUrl: "https://lp.ntwcontabilidade.com.br/novo-mapa-tributario/",
        tags: ["Reforma Tributária", "Inscrição", "B2B"]
      },
      {
        title: "Equity Contábil — M&A e Aquisição de Escritórios",
        type: "Site Institucional & Geração de Leads Qualificados",
        techBadge: "Código Customizado (HTML/CSS/JS) / Elementor Pro / WordPress",
        summary: "Website corporativo para a Equity Contábil, focado em atrair donos de escritórios de contabilidade interessados em vender ou realizar fusões com a rede.",
        challenge: "Criar uma identidade sólida, sóbria e altamente profissional que transmitisse extrema confidencialidade, segurança financeira e autoridade para negociações de fusões e aquisições (M&A).",
        results: "Posicionamento de marca transparente, com formulários estratégicos para qualificação imediata de proprietários interessados em valuation e venda.",
        image: lpPage06,
        liveUrl: "https://equitycontabil.com/",
        tags: ["M&A", "Corporate", "Leads Qualificados"]
      },
      {
        title: "Tutoreanos — Bio Links Social (São José dos Campos)",
        type: "Página Bio Link",
        techBadge: "Elementor Pro / WordPress / CSS Customizado / Componentes Reutilizáveis com Pods",
        summary: "Hub centralizador de links otimizado para navegação mobile via biografia do Instagram da unidade.",
        challenge: "Substituir ferramentas genéricas de agrupamento de links por uma solução própria da marca, leve, com carregamento instantâneo no celular e sem rastreadores desnecessários que atrasem o clique do usuário.",
        results: "100% de controle sobre a estética da marca, zero dependência de plataformas de terceiros e otimização da taxa de cliques para o WhatsApp comercial da unidade.",
        image: lpPage07,
        liveUrl: "https://tutoreanos.com.br/links/tutoreanos-sao-jose-dos-campos/",
        tags: ["Bio Links", "Mobile Optimization", "Social Media"]
      },
      {
        title: "NTW Prime Club — Clube VIP de Franqueados",
        type: "Landing Page Institucional",
        techBadge: "Elementor Pro / WordPress / CSS Customizado",
        summary: "Landing page em formato de documento institucional explicativo sobre o clube VIP da franqueadora, desenvolvida para atrair e qualificar franqueados elegíveis da rede.",
        challenge: "Traduzir a sensação de exclusividade e alto valor do \"Prime Club\" sem facilitar cadastros indesejados. O design precisava ser sóbrio e informativo, seguindo a sua identidade visual, contendo apenas uma chamada estratégica para ação (botão de acesso), evitando abordagens comerciais invasivas.",
        results: "Apresentação clara das vantagens do clube, valorização do senso de comunidade entre franqueados e direcionamento qualificado para o canal de atendimento interno.",
        image: lpPage08,
        liveUrl: "https://page.ntwfranquiacontabil.com.br/ntw-prime-club/",
        tags: ["Exclusivo", "Franqueados VIP", "Institucional"]
      }
    ],
    links: [
      { label: "Ver Projetos", href: "#conteudo", icon: "doc" }
    ]
  }
};