import Link from "next/link";

export default function NotFound() {
  return (
    <main className="resume-page">
      <div className="resume-document">
        <p className="resume-kicker">404 · Página não encontrada</p>
        <h1>Esse endereço não existe.</h1>
        <p className="resume-summary">Volte ao portfólio para conhecer os projetos e a experiência profissional.</p>
        <Link className="button button-primary" href="/">Voltar ao início</Link>
      </div>
    </main>
  );
}
