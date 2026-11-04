type ProjectCardProps = {
  project: {
    number: string;
    category: string;
    title: string;
    context: string;
    description: string;
    details: string[];
    stack: string[];
    href?: string;
    linkLabel?: string;
    note: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-main">
        <div className="project-heading">
          <div>
            <p className="project-context">{project.context}</p>
            <h3>{project.title}</h3>
          </div>
          {project.href ? (
            <a
              className="project-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        <p className="project-description">{project.description}</p>

        <ul className="project-details">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        <div className="tag-list" aria-label="Tecnologias utilizadas">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>

        <p className="project-note">{project.note}</p>

        {project.href && project.linkLabel ? (
          <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
            {project.linkLabel} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="private-label">Experiência profissional · detalhes internos</span>
        )}
      </div>
    </article>
  );
}
