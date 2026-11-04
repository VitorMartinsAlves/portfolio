export const profile = {
  name: "Vitor Martins",
  title: "Desenvolvedor Full Stack",
  headline: "Node.js · React · Python · APIs REST · MySQL · MongoDB",
  summary:
    "Desenvolvedor Full Stack com experiência na construção, manutenção e evolução de aplicações web em produção. Atuação do frontend ao backend, integração de APIs, bancos de dados relacionais e NoSQL, automação e infraestrutura. Experiência também em suporte técnico, análise de bugs, testes e validação de funcionalidades antes de deploy.",
  about:
    "Minha trajetória combina desenvolvimento de software com experiência direta no atendimento a usuários e áreas de negócio. Já trabalhei próximo dos times comercial, pedagógico, professores e equipes internas, entendendo suas rotinas e transformando demandas em melhorias de sistemas. No desenvolvimento, atuo entre interface, regras de negócio, APIs, dados, integrações e operação em produção.",
  location: "São Paulo, SP",
  workModel: "Presencial ou híbrido",
  availability: "Buscando oportunidades Full Stack ou Backend",
  email: "vitormartinsalves99@gmail.com",
  github: "https://github.com/VitorMartinsAlves",
  linkedin: "https://www.linkedin.com/in/vitormartinsalves/",
};

export type PortfolioProject = {
  number: string;
  name: string;
  category: string;
  period: string;
  summary: string;
  context: string;
  contribution: string;
  highlights: string[];
  stack: string[];
  note: string;
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    name: "Ecossistema de Landing Pages, Leads e Analytics",
    category: "Projeto profissional · Aliança",
    period: "2025 — 2026",
    summary:
      "Conjunto integrado de aplicações para campanhas digitais da Aliança: múltiplas landing pages em React, API para recebimento e encaminhamento de leads e dashboard administrativo para acompanhar captação, tráfego e operação comercial.",
    context:
      "O trabalho conecta dois repositórios que cumprem papéis complementares: o alianca-lps reúne as experiências de landing pages; o dash-monorepo concentra a API e o painel operacional, com serviços organizados em workspaces e execução via Docker Compose.",
    contribution:
      "Desenvolvimento e manutenção full stack das interfaces, serviços e integrações, participando do fluxo desde a captura de dados na página até sua validação, encaminhamento e acompanhamento pelo dashboard.",
    highlights: [
      "Consolidação de diferentes experiências de campanha — Premium, Principal, Copa, Institucional e Summer XP — em uma aplicação React/Vite com carregamento por rota e configuração compartilhada de tracking.",
      "Integração dos formulários com APIs para recebimento, normalização e encaminhamento de leads, incluindo atribuição de vendedores por página e domínio.",
      "Implementação de regras configuráveis de validação de e-mail e telefone, proteção contra duplicidade e fluxos de correção e reprocessamento de envios.",
      "Desenvolvimento de dashboard com autenticação, perfis de acesso, solicitação e ativação de usuários, gestão de contas e permissões administrativas.",
      "Painel operacional com filtros, indicadores, tendências, leads recentes, campanhas, origens, sellers e domínios.",
      "Acompanhamento de pageviews, conversões, visitantes ativos e atividade em tempo real, com visões geográficas de leads e visitantes.",
      "Configuração por página de seller responsável, Meta Pixel, Google Tag e regras de proteção dos formulários.",
      "API em Node.js/Express com MySQL, documentação Swagger/OpenAPI, health checks e integração com serviços externos, incluindo backup de dados em Google Sheets.",
      "Organização da API e do dashboard em monorepo, com scripts de desenvolvimento, build e execução de ambiente integrado com Docker Compose.",
    ],
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "JavaScript",
      "MySQL",
      "Docker",
      "REST APIs",
      "Swagger / OpenAPI",
      "Webhooks",
      "Google Sheets",
      "Meta Pixel",
      "Google Tag Manager",
      "Linux",
      "Nginx",
    ],
    note:
      "Case profissional da Aliança. alianca-lps e dash-monorepo são partes do mesmo fluxo de trabalho; os repositórios, integrações e ambientes são privados e não têm relação com projetos de outras marcas.",
  },
  {
    number: "02",
    name: "Projeto web para a Linx",
    category: "Projeto acadêmico · SENAI CodeXP",
    period: "Jul/2019 — Dez/2019",
    summary:
      "Projeto web desenvolvido em equipe multidisciplinar durante a formação Full Stack CodeXP, com participação de integrantes de produto, Scrum, design, frontend e backend.",
    context:
      "O trabalho percorreu etapas de levantamento de requisitos, prototipação e desenvolvimento, com organização por Scrum, Sprints, Trello e Kanban.",
    contribution:
      "Participação colaborativa no desenvolvimento da solução, aplicando fundamentos de frontend, orientação a objetos, arquitetura MVC, APIs e integração com banco de dados.",
    highlights: [
      "Colaboração entre Product Owner, Scrum Master, Design, Front-end e Back-end.",
      "Levantamento de requisitos, prototipação, brainstorming e definição de personas.",
      "Desenvolvimento com HTML5, CSS3, JavaScript e React.",
      "Aplicação de orientação a objetos, arquitetura MVC e integração com APIs e banco de dados.",
      "Organização do trabalho com Scrum, Sprints, Trello e Kanban.",
    ],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "MVC",
      "APIs",
      "SQL",
      "Scrum",
      "Trello",
      "Kanban",
    ],
    note:
      "Projeto realizado em contexto de formação no SENAI; não representa vínculo profissional direto com a Linx.",
  },
];

export type ExperienceRole = {
  title: string;
  period: string;
  type: string;
  location?: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

export type ExperienceGroup = {
  company: string;
  period: string;
  roles: ExperienceRole[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    company: "Aliança",
    period: "Jan/2024 — Set/2026 · 2 anos e 9 meses",
    roles: [
      {
        title: "Desenvolvedor Full Stack",
        period: "Jun/2025 — Set/2026",
        type: "Tempo integral",
        location: "Remoto",
        summary:
          "Desenvolvimento e manutenção de aplicações web em produção, atuando em frontend, backend, integrações e infraestrutura.",
        highlights: [
          "Desenvolvimento de aplicações com Vue.js, React, Node.js e APIs REST.",
          "Criação e evolução de landing pages responsivas e multilíngues, integradas a sistemas internos, formulários, webhooks e ferramentas de rastreamento como Meta Pixel e Google Tag Manager.",
          "Desenvolvimento de dashboards, automações e funcionalidades para gestão de leads, alunos, professores, contratos e aulas.",
          "Integração com bancos de dados MySQL/MariaDB e MongoDB, além de serviços externos e Google Calendar.",
          "Atuação em deploy, Docker, Linux, Nginx, Cloudflare, DNS, monitoramento, correção de bugs, otimização de performance e manutenção de ambientes em produção.",
          "Participação no ciclo completo das soluções: interface, regras de negócio, backend, banco de dados, integrações e publicação.",
        ],
        skills: [
          "Vue.js",
          "React",
          "Node.js",
          "APIs REST",
          "MySQL",
          "MariaDB",
          "MongoDB",
          "Docker",
          "Linux",
          "Nginx",
          "Cloudflare",
        ],
      },
      {
        title: "Analista de Suporte",
        period: "Abr/2025 — Out/2025",
        type: "Tempo integral",
        location: "Remoto",
        summary:
          "Suporte técnico a usuários, equipe comercial, professores e áreas internas, com diagnóstico de problemas e acompanhamento de correções nos sistemas da empresa.",
        highlights: [
          "Diagnóstico e resolução de problemas em sistemas e ferramentas internas.",
          "Identificação, registro e acompanhamento de bugs e comportamentos inesperados.",
          "Testes de novas funcionalidades e validação de correções antes da publicação em produção.",
          "Atualização e correção de dados, apoio no uso das plataformas e análise de solicitações para direcionamento ao desenvolvimento.",
          "Apoio técnico em integrações, acessos, configurações e resolução de incidentes.",
        ],
        skills: [
          "Suporte técnico",
          "Help Desk",
          "Testes de software",
          "Análise de bugs",
          "Atendimento",
        ],
      },
      {
        title: "Estagiário de TI",
        period: "Mai/2024 — Mai/2025",
        type: "Estágio",
        location: "Híbrido",
        summary:
          "Suporte aos setores comercial, pedagógico, treinamento de professores e docentes, contribuindo para a continuidade das operações e a melhoria das plataformas.",
        highlights: [
          "Atendimento às necessidades de diferentes áreas e apoio à utilização dos sistemas.",
          "Alterações e atualizações de dados conforme as solicitações dos setores.",
          "Identificação e reporte de bugs à equipe de desenvolvimento.",
          "Testes de sistema antes do lançamento de atualizações.",
          "Coleta de sugestões do setor comercial para melhoria dos sistemas e processos.",
        ],
        skills: [
          "Suporte de TI",
          "Testes de sistema",
          "Banco de dados",
          "Atendimento",
          "Melhoria de processos",
        ],
      },
      {
        title: "Assistente Comercial",
        period: "Jan/2024 — Mai/2024",
        type: "Tempo integral",
        location: "Remoto",
        summary:
          "Atuação em rotinas de apoio comercial, com utilização de ferramentas Google para organização de informações e documentos.",
        highlights: [
          "Utilização de Google Sheets e Google Docs no apoio às atividades e rotinas comerciais.",
        ],
        skills: ["Google Sheets", "Google Docs", "Rotinas comerciais"],
      },
    ],
  },
  {
    company: "Atuação autônoma",
    period: "Jan/2022 — Jan/2024",
    roles: [
      {
        title: "Designer Gráfico",
        period: "Jan/2022 — Jan/2024",
        type: "Autônomo",
        summary:
          "Atuação independente na criação e edição de materiais visuais, utilizando ferramentas da suíte Adobe.",
        highlights: [
          "Criação e edição de peças gráficas com Adobe Photoshop e After Effects.",
        ],
        skills: ["Adobe Photoshop", "Adobe After Effects"],
      },
    ],
  },
  {
    company: "maKing Advertising",
    period: "Set/2021 — Dez/2021",
    roles: [
      {
        title: "Designer Gráfico",
        period: "Set/2021 — Dez/2021",
        type: "Jovem Aprendiz",
        summary:
          "Experiência inicial em design gráfico em ambiente de agência.",
        highlights: [
          "Atuação com Adobe Photoshop e Adobe Illustrator na produção de materiais visuais.",
        ],
        skills: ["Adobe Photoshop", "Adobe Illustrator"],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Backend e integrações",
    description: "Construção de serviços, regras de negócio e comunicação entre sistemas.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "APIs REST",
      "Webhooks",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces web, aplicações administrativas e páginas responsivas.",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Angular",
      "WordPress",
    ],
  },
  {
    title: "Bancos de dados",
    description: "Persistência, consultas e integração com dados relacionais e NoSQL.",
    skills: ["MySQL", "MariaDB", "MongoDB", "SQL"],
  },
  {
    title: "Infraestrutura e operação",
    description: "Publicação, manutenção e acompanhamento de aplicações em produção.",
    skills: [
      "Docker",
      "Linux",
      "Nginx",
      "Cloudflare",
      "DNS",
      "Deploy",
      "Monitoramento",
    ],
  },
  {
    title: "Integrações e ferramentas",
    description: "Serviços externos, rastreamento de campanhas e colaboração.",
    skills: [
      "Google Calendar",
      "Google Sheets",
      "Meta Pixel",
      "Google Tag Manager",
      "Git",
      "GitHub",
    ],
  },
];

export const additionalSkills = [
  "Suporte técnico",
  "Help Desk",
  "Análise e reprodução de bugs",
  "Testes de funcionalidades",
  "Google Workspace",
  "Adobe Photoshop",
  "Adobe After Effects",
  "Adobe Illustrator",
];

export const education = [
  {
    institution: "Universidade Cruzeiro do Sul",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "Mar/2023 — Dez/2024",
    status: "Curso interrompido antes da conclusão",
    note: "Estudos pausados no último semestre.",
    highlights: [],
  },
  {
    institution: "SENAI São Caetano do Sul — Cyber e IA",
    course: "Full Stack — CodeXP / Programação de Computadores",
    period: "Jul/2019 — Dez/2019",
    status: "Formação concluída",
    note: "Formação com projeto web em equipe multidisciplinar e práticas de desenvolvimento ágil.",
    highlights: [
      "Projeto web para a Linx, da etapa de requisitos e prototipação à implementação.",
      "HTML5, CSS3, JavaScript, React, orientação a objetos, MVC, APIs e banco de dados.",
      "Organização de trabalho com Scrum, Sprints, Trello e Kanban.",
    ],
  },
];

export const certifications = [
  {
    title: "Desenvolvimento Orientado a Objetos utilizando a Linguagem Python",
    institution: "Fundação Bradesco — Escola Virtual",
    issued: "Mai/2023",
  },
  {
    title: "Fundamentos de Lógica de Programação",
    institution: "Fundação Bradesco — Escola Virtual",
    issued: "Mai/2023",
  },
];

export const languages = [{ name: "Inglês", level: "Intermediário" }];
