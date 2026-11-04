import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { education, experiences, profile, projects, skillGroups } from "@/data/portfolio";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Currículo | Vitor Martins",
  description: "Currículo profissional de Vitor Martins, Desenvolvedor Full Stack.",
  alternates: {
    canonical: `${siteUrl}/curriculo/`,
  },
  robots: { index: true, follow: true },
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar no-print">
        <Link href="/" className="back-link">← Voltar ao portfólio</Link>
        <PrintButton />
      </div>

      <article className="resume-document">
        <header className="resume-header">
          <div>
            <p className="resume-kicker">Currículo profissional</p>
            <h1>{profile.name}</h1>
            <p className="resume-role">{profile.role}</p>
            <p className="resume-summary">{profile.intro}</p>
          </div>
          <div className="resume-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin}>{profile.linkedin.replace("https://", "")}</a>
            <a href={profile.github}>{profile.github.replace("https://", "")}</a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Experiência profissional</h2>
          {experiences.map((experience) => (
            <div className="resume-experience" key={experience.company}>
              <div className="resume-company-line">
                <h3>{experience.company}</h3>
                <span>{experience.period}</span>
              </div>
              <p>{experience.summary}</p>
              {experience.roles.map((role) => (
                <div className="resume-role-entry" key={role.title}>
                  <div className="resume-company-line">
                    <h4>{role.title}</h4>
                    <span>{role.period}</span>
                  </div>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Projetos selecionados</h2>
          {projects.slice(1).map((project) => (
            <div className="resume-project" key={project.number}>
              <div className="resume-company-line">
                <h3>{project.title}</h3>
                {project.href ? <a href={project.href}>Repositório ↗</a> : null}
              </div>
              <p>{project.description}</p>
            </div>
          ))}
          <div className="resume-project">
            <h3>{projects[0].title}</h3>
            <p>{projects[0].description}</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Competências</h2>
          <div className="resume-skills">
            {skillGroups.map((group) => (
              <p key={group.title}>
                <strong>{group.title}:</strong> {group.skills.join(" · ")}
              </p>
            ))}
          </div>
        </section>

        <section className="resume-section resume-education">
          <h2>Formação</h2>
          <div className="resume-company-line">
            <h3>{education.course}</h3>
            <span>{education.institution}</span>
          </div>
          <p>{education.status} — {education.note}</p>
          <p>{education.english}</p>
        </section>
      </article>
    </main>
  );
}
