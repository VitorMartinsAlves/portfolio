# Vitor Martins — Portfólio

Portfólio profissional e currículo online de Vitor Martins, desenvolvido com Next.js, React e TypeScript e publicado no GitHub Pages por meio de exportação estática.

**Site:** https://vitormartinsalves.github.io/portfolio/

## Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- CSS responsivo, sem biblioteca visual adicional
- GitHub Actions + GitHub Pages

## Conteúdo

O portfólio destaca:

- Experiência Full Stack na Aliança, com desenvolvimento de aplicações em produção, integrações e infraestrutura.
- Case integrado de landing pages, API de leads e dashboard de analytics da Aliança. O projeto reúne os repositórios privados `alianca-lps` e `dash-monorepo`, que fazem parte do mesmo fluxo técnico.
- Experiência anterior em suporte de TI e atendimento comercial.
- Formação em Análise e Desenvolvimento de Sistemas e curso Full Stack CodeXP do SENAI.
- Projeto acadêmico desenvolvido em equipe para a Linx durante a formação CodeXP.

As descrições não incluem métricas ou resultados que não foram informados. Repositórios e ambientes profissionais privados são apresentados como experiência/case, sem links que exijam acesso interno.

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

O workflow de CI executa essas verificações em pull requests. O workflow de publicação repete as verificações antes de gerar e publicar os arquivos estáticos.

## Atualizar informações

As informações profissionais ficam centralizadas em `src/data/portfolio.ts`. Edite esse arquivo para atualizar links, contato, projetos, cargos, períodos, competências, formação e idiomas.

## Currículo em PDF

Acesse `/portfolio/curriculo/` e use **Salvar em PDF**. A página aplica um layout de uma coluna, títulos de seção convencionais e estilos de impressão em A4; o navegador pode salvar o documento como PDF.

## Publicação no GitHub Pages

O site é publicado automaticamente em:

`https://vitormartinsalves.github.io/portfolio/`

O workflow `.github/workflows/deploy.yml`:
1. instala as dependências;
2. executa ESLint e TypeScript;
3. gera o site estático com `output: "export"` e `basePath: "/portfolio"`;
4. envia a pasta `out` para o GitHub Pages.

Em **Settings → Pages → Build and deployment → Source**, a opção **GitHub Actions** deve estar selecionada. Depois disso, cada push na branch `main` publica uma nova versão.

O `basePath` só é aplicado no workflow de publicação. O servidor local continua disponível em `http://localhost:3000`.

## Limitações do GitHub Pages

O GitHub Pages hospeda apenas arquivos estáticos. Recursos do Next.js que exigem servidor Node.js (por exemplo, API Routes, Server Actions, SSR sob demanda e otimização de imagens no servidor) não estão disponíveis neste deploy. As páginas deste portfólio são pré-geradas no build.
