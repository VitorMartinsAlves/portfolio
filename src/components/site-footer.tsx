import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-wordmark" href="#inicio">
        VM<span>.</span>
      </a>
      <p>Vitor Martins · Desenvolvedor Full Stack</p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={`mailto:${profile.email}`}>E-mail ↗</a>
      </div>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </footer>
  );
}
