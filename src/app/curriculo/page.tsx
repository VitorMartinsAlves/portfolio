import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import {
  certifications,
  education,
  experienceGroups,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Currículo | Vitor Martins",
  description:
    "Currículo de Vitor Martins, Desenvolvedor Full Stack com experiência em Node.js, React, Python, APIs e bancos de dados.",
  alternates: {
    canonical: "https://vitormartinsalves.github.io/portfolio/curriculo/",
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
          <h1>{profile.name}</h1>
          <p className="resume-title">{profile.title} | Backend Developer</p>
          <p className="resume-location">
            {profile.location} · {profile.workModel}
          </p>
          <p className="resume-contact-line">
            E-mail: {profile.email} | LinkedIn: linkedin.com/in/vitormartinsalves
            | GitHub: github.com/VitorMartinsAlves
          </p>
          <p className="resume-summary">{profile.summary}</p>
        </header>

        <section className="resume-section">
          <h2>Competências técnicas</h2>
          {skillGroups.map((group) => (
            <p className="resume-skill-line" key={group.title}>
              <strong>{group.title}:</strong> {group.skills.join(", ")}.
            </p>
          ))}
          <p className="resume-skill-line">
            <strong>Outras competências:</strong> Suporte técnico, Help Desk,
            diagnóstico e reprodução de bugs, testes de funcionalidades, Google
            Workspace, Adobe Photoshop, Adobe After Effects e Adobe Illustrator.
          </p>
        </section>

        <section className="resume-section">
          <h2>Experiência profissional</h2>
          {experienceGroups.map((group) => (
            <div className="resume-company" key={group.company}>
              <div className="resume-company-heading">
                <h3>{group.company}</h3>
                <span>{group.period}</span>
              </div>

              {group.roles.map((role) => (
                <div className="resume-role" key={role.title}>
                  <div className="resume-role-heading">
                    <h4>{role.title}</h4>
                    <span>{role.period} · {role.type}</span>
                  </div>
                  <p>{role.summary}</p>
                  <ul>
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Projetos selecionados</h2>
          {projects.map((project) => (
            <article className="resume-project" key={project.number}>
              <div className="resume-company-heading">
                <h3>{project.name}</h3>
                <span>{project.period}</span>
              </div>
              <p>{project.summary}</p>
              <p><strong>Participação:</strong> {project.contribution}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p><strong>Tecnologias:</strong> {project.stack.join(", ")}.</p>
            </article>
          ))}
        </section>

        <section className="resume-section">
          <h2>Formação acadêmica</h2>
          {education.map((item) => (
            <article className="resume-education" key={item.institution}>
              <div className="resume-company-heading">
                <h3>{item.course}</h3>
                <span>{item.period}</span>
              </div>
              <p>{item.institution} · {item.status}</p>
              <p>{item.note}</p>
              {item.highlights.length > 0 ? (
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className="resume-section">
          <h2>Cursos e certificados</h2>
          {certifications.map((certification) => (
            <p className="resume-certification" key={certification.title}>
              <strong>{certification.title}</strong> — {certification.institution},
              {" " + certification.issued}.
            </p>
          ))}
        </section>

        <section className="resume-section">
          <h2>Idiomas</h2>
          {languages.map((language) => (
            <p key={language.name}>{language.name}: {language.level}.</p>
          ))}
        </section>
      </article>
    </main>
  );
}
