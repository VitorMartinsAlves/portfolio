import { profile } from "@/data/portfolio";

const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Sobre", href: "#sobre" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Vitor Martins, início">
        <span className="wordmark-mark">VM</span>
        <span>Vitor Martins</span>
      </a>

      <nav className="main-nav" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <a href="/curriculo">Currículo</a>
      </nav>

      <a className="header-contact" href={`mailto:${profile.email}?subject=Oportunidade%20profissional`}>
        Vamos conversar <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
