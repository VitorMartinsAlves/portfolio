# Vitor Martins — Portfólio

Portfólio profissional e currículo online de Vitor Martins, desenvolvido com Next.js, React e TypeScript.

O conteúdo foi organizado para que recrutadores e equipes técnicas encontrem rapidamente:
- área de atuação e principais tecnologias;
- projetos com contexto, contribuição e limitações conhecidas;
- experiência profissional e formação;
- links de contato e uma versão de currículo pronta para impressão.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- CSS responsivo, sem biblioteca visual adicional

## Rodar localmente

Requer Node.js 22 (ou versão compatível a partir de 20.9).

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

O GitHub Actions executa essas três verificações em pushes e pull requests para a branch principal.

## Atualizar informações

As informações profissionais ficam centralizadas em `src/data/portfolio.ts`. Edite esse arquivo para atualizar:
- links e dados de contato;
- projetos, descrições e tecnologias;
- empresas, cargos e períodos;
- competências, formação e idiomas.

Os projetos são descritos sem métricas inventadas. O trabalho da Aliança é apresentado como experiência profissional porque seus repositórios e detalhes internos não são públicos. O FiveM on Linux está marcado como experimental, e a customização AeroTheme Plasma identifica os créditos do projeto original.

## Currículo em PDF

Acesse `/curriculo` e use **Salvar em PDF**. A página aplica estilos de impressão em A4 e pode ser salva como PDF pelo navegador.

## Publicação

O projeto pode ser publicado na Vercel ou em outro ambiente que execute Next.js.

Configure a variável de ambiente `NEXT_PUBLIC_SITE_URL` com a URL pública completa do site (sem barra no final). Ela é usada como base dos metadados e para gerar `robots.txt` e `sitemap.xml`.

O arquivo `.env.example` mostra o formato esperado. Não há domínio de produção fixado no código.

## Acessibilidade e experiência

- HTML semântico e navegação por âncoras;
- link para pular diretamente ao conteúdo;
- estados de foco visíveis para teclado;
- layout adaptável a telas menores;
- respeito à preferência por movimento reduzido;
- links externos identificados e abertos com `rel="noreferrer"`;
- currículo com layout específico para impressão.
