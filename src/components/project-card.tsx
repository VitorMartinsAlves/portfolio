import type { PortfolioProject } from "@/data/portfolio";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-index">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <div>
            <p className="project-period">{project.period}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-kind">{project.category.includes("acadêmico") ? "Acadêmico" : "Profissional"}</span>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="case-grid">
          <div className="case-block">
            <span className="case-label">Contexto</span>
            <p>{project.context}</p>
          </div>
          <div className="case-block">
            <span className="case-label">Minha participação</span>
            <p>{project.contribution}</p>
          </div>
        </div>

        <div className="project-highlights">
          <span className="case-label">O que foi desenvolvido</span>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tag-list" aria-label="Tecnologias e práticas utilizadas">
          {project.stack.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>

        <p className="project-note">{project.note}</p>
      </div>
    </article>
  );
}
