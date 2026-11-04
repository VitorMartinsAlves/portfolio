# Vitor Martins — Portfólio

Portfólio profissional e currículo online de Vitor Martins, desenvolvido com Next.js, React e TypeScript e publicado no GitHub Pages por meio de exportação estática.

**Site:** https://vitormartinsalves.github.io/portfolio/

## Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- CSS responsivo, sem biblioteca visual adicional
- GitHub Actions + GitHub Pages

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

As informações profissionais ficam centralizadas em `src/data/portfolio.ts`. Edite esse arquivo para atualizar:
- links e dados de contato;
- projetos, descrições e tecnologias;
- empresas, cargos e períodos;
- competências, formação e idiomas.

Os projetos são descritos sem métricas inventadas. O trabalho da Aliança é apresentado como experiência profissional porque seus repositórios e detalhes internos não são públicos. O FiveM on Linux está marcado como experimental, e a customização AeroTheme Plasma identifica os créditos do projeto original.

## Currículo em PDF

Acesse `/portfolio/curriculo/` e use **Salvar em PDF**. A página aplica estilos de impressão em A4 e pode ser salva como PDF pelo navegador.

## Publicação no GitHub Pages

O site é publicado automaticamente em:

`https://vitormartinsalves.github.io/portfolio/`

O workflow `.github/workflows/deploy.yml`:
1. instala as dependências;
2. executa ESLint e TypeScript;
3. gera o site estático com `output: "export"` e `basePath: "/portfolio"`;
4. envia a pasta `out` para o GitHub Pages.

Para habilitar a primeira publicação, confira em **Settings → Pages → Build and deployment → Source** se a opção **GitHub Actions** está selecionada. Depois disso, cada push na branch `main` publica uma nova versão.

O `basePath` só é aplicado no workflow de publicação. O servidor local continua disponível em `http://localhost:3000`.

## Limitações do GitHub Pages

O GitHub Pages hospeda apenas arquivos estáticos. Recursos do Next.js que exigem servidor Node.js (por exemplo, API Routes, Server Actions, SSR sob demanda e otimização de imagens no servidor) não estão disponíveis neste deploy. As páginas deste portfólio são pré-geradas no build.
