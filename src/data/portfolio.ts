export const profile = {
  name: "Vitor Martins",
  role: "Desenvolvedor Full Stack",
  headline: "Aplicações web, APIs e integrações.",
  intro:
    "Atuo entre frontend e backend: desenvolvo interfaces, conecto sistemas e automatizo etapas de processos que fazem parte da operação.",
  email: "vitormartinsalves99@gmail.com",
  github: "https://github.com/VitorMartinsAlves",
  linkedin: "https://linkedin.com/in/vitormartinsalves/",
};

export const projects = [
  {
    number: "01",
    category: "Experiência profissional",
    title: "Plataforma comercial e gestão de leads",
    context: "Aliança · 2025–2026",
    description:
      "Desenvolvimento de páginas de campanha e ferramentas internas para acompanhar a captação, a validação e a origem dos leads encaminhados ao time comercial.",
    details: [
      "Criação e manutenção de landing pages com React, WordPress e Vite.",
      "Desenvolvimento de dashboard para acompanhar telefones, pixels e configurações do Google Tag.",
      "Integração de fluxos com Node.js, MySQL, UTMs e webhooks, incluindo validações e reprocessamento de leads.",
      "Testes locais e ajustes antes de publicar as alterações.",
    ],
    stack: ["React", "WordPress", "Vite", "Node.js", "MySQL", "Webhooks"],
    note: "Projeto desenvolvido em ambiente profissional. Repositórios e detalhes internos não são públicos.",
  },
  {
    number: "02",
    category: "Projeto pessoal · Python",
    title: "FiveM on Linux",
    context: "Ferramenta desktop para Linux",
    description:
      "Aplicativo visual para preparar o FiveM for GTA V Enhanced reaproveitando a instalação do jogo e o prefixo Wine já configurado no Lutris.",
    details: [
      "Interface em Python para selecionar e validar os caminhos do jogo, do prefixo e do executável Wine.",
      "Preparação do ambiente com backups antes de alterar registros e arquivos do prefixo.",
      "Rotinas de instalação e desinstalação com opção de rollback para restaurar a configuração anterior.",
      "Documentação de limitações conhecidas para não prometer compatibilidade que ainda não foi comprovada.",
    ],
    stack: ["Python", "Tkinter", "Bash", "Wine", "Lutris", "Linux"],
    href: "https://github.com/VitorMartinsAlves/FiveM-on-Linux",
    linkLabel: "Ver código e documentação",
    note: "Experimental. O README descreve as limitações atuais de conexão a servidores públicos; o projeto não oferece essa funcionalidade como garantida.",
  },
  {
    number: "03",
    category: "Projeto pessoal · Linux",
    title: "Two Clicks AeroTheme Plasma",
    context: "Automação e personalização do KDE Plasma",
    description:
      "Fork e customização do AeroThemePlasma para reduzir etapas manuais de instalação e configuração em distribuições Arch e CachyOS.",
    details: [
      "Reescrita do instalador com tratamento de erros e validações mais defensivas.",
      "Detecção de terminal em sandbox Flatpak e tentativa de reexecução no host.",
      "Instalação de dependências, compilação de componentes e geração de manifestos para facilitar diagnóstico e remoção.",
      "Scripts opcionais para configurar Konsole, fontes e atalhos de terminal.",
    ],
    stack: ["Bash", "CMake", "KDE Plasma", "Flatpak", "Arch Linux"],
    href: "https://github.com/VitorMartinsAlves/Two-Clicks-AeroThemePlasma",
    linkLabel: "Ver código e documentação",
    note: "É uma customização de um projeto existente. O tema, os componentes principais e seus créditos permanecem com o projeto AeroThemePlasma original.",
  },
];

export const experiences = [
  {
    company: "Aliança",
    period: "Mai/2024 — Ago/2026",
    summary:
      "Atuação em tecnologia em diferentes frentes. As funções de suporte e desenvolvimento se sobrepuseram durante parte do período, combinando atendimento interno e construção de soluções web para campanhas e a operação comercial.",
    roles: [
      {
        title: "Desenvolvedor Full Stack",
        period: "Abr/2025 — Ago/2026",
        description:
          "Desenvolvimento e manutenção de landing pages, dashboards e integrações usadas no acompanhamento e encaminhamento de leads.",
      },
      {
        title: "Analista de Suporte",
        period: "Abr/2025 — Out/2025",
        description:
          "Atendimento de demandas internas de TI, suporte aos usuários e investigação de problemas relacionados a sistemas e ferramentas de trabalho.",
      },
      {
        title: "Estagiário de TI",
        period: "Mai/2024 — Mai/2025",
        description:
          "Apoio às rotinas de tecnologia, atendimento e suporte ao ambiente interno.",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Vite", "Next.js"],
  },
  {
    title: "Backend e dados",
    skills: ["Node.js", "Express", "APIs REST", "MySQL", "Webhooks", "UTM tracking"],
  },
  {
    title: "Plataformas e ferramentas",
    skills: ["WordPress", "Git", "GitHub", "Linux", "Bash", "Python"],
  },
];

export const education = {
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "Cruzeiro do Sul",
  status: "Curso em pausa",
  note: "Formação interrompida no último semestre.",
  english: "Inglês intermediário",
};
