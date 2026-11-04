import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  certifications,
  education,
  experienceGroups,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  email: profile.email,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skillGroups.flatMap((group) => group.skills),
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />

      <main id="conteudo">
        <section className="hero page-width" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              {profile.availability}
            </p>
            <h1 id="hero-title">
              {profile.title}
              <span className="hero-period">.</span>
            </h1>
            <p className="hero-stackline">{profile.headline}</p>
            <p className="hero-description">{profile.summary}</p>

            <div className="hero-meta">
              <span><span aria-hidden="true">⌖</span> {profile.location}</span>
              <span>{profile.workModel}</span>
              <span>Inglês intermediário</span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos <span aria-hidden="true">↓</span>
              </a>
              <Link className="button button-secondary" href="/curriculo/">
                Currículo completo <span aria-hidden="true">↗</span>
              </Link>
              <a className="button button-text" href={"mailto:" + profile.email + "?subject=Oportunidade%20profissional"}>
                Entrar em contato
              </a>
            </div>

            <div className="hero-socials" aria-label="Perfis profissionais">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={"mailto:" + profile.email}>{profile.email}</a>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Resumo de competências">
            <div className="aside-top">
              <span>PERFIL PROFISSIONAL</span>
              <span>2026</span>
            </div>
            <div className="aside-main">
              <p className="aside-overline">Atuação</p>
              <h2>Do produto à produção.</h2>
              <p>
                Desenvolvimento de aplicações, integração de serviços e sustentação de
                sistemas usados no dia a dia das equipes.
              </p>
            </div>
            <div className="aside-stack">
              <span>Stack principal</span>
              <strong>Node.js · React · Python</strong>
              <strong>MySQL · MongoDB · APIs REST</strong>
            </div>
            <div className="aside-bottom">
              <span>Full Stack</span>
              <span>Backend</span>
              <span>Integrações</span>
            </div>
          </aside>
        </section>

        <div className="proof-strip page-width" aria-label="Resumo da trajetória">
          <div>
            <strong>2 anos e 9 meses</strong>
            <span>de trajetória na Aliança</span>
          </div>
          <div>
            <strong>Full Stack + Suporte</strong>
            <span>experiência em desenvolvimento e operação</span>
          </div>
          <div>
            <strong>Produção real</strong>
            <span>deploy, monitoramento e correção de bugs</span>
          </div>
          <div>
            <strong>Visão de negócio</strong>
            <span>contato com comercial, pedagógico e usuários</span>
          </div>
        </div>

        <section className="section page-width" id="projetos">
          <SectionHeading
            index="01"
            eyebrow="Projetos em destaque"
            title="Soluções que conectam produto, operação e tecnologia."
            description="Dois projetos profissionais desenvolvidos na Aliança e um projeto de formação. Cada descrição separa contexto, participação e entregas técnicas."
          />
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section className="section section-muted" id="experiencia">
          <div className="page-width">
            <SectionHeading
              index="02"
              eyebrow="Experiência profissional"
              title="Uma trajetória que começou no atendimento e chegou ao desenvolvimento full stack."
              description="A experiência com usuários e áreas de negócio veio antes e continuou junto do desenvolvimento. Os períodos abaixo refletem os cargos registrados no LinkedIn; algumas funções se sobrepuseram."
            />

            <div className="experience-list">
              {experienceGroups.map((group, groupIndex) => (
                <article className="experience-company" key={group.company}>
                  <div className="company-heading">
                    <div>
                      <span className="company-index">0{groupIndex + 1}</span>
                      <h3>{group.company}</h3>
                    </div>
                    <span className="company-period">{group.period}</span>
                  </div>

                  <div className="company-roles">
                    {group.roles.map((role) => (
                      <section className="role-entry" key={role.title}>
                        <div className="role-heading">
                          <div>
                            <h4>{role.title}</h4>
                            <span>{role.type}</span>
                            {role.location ? <span>{role.location}</span> : null}
                          </div>
                          <time>{role.period}</time>
                        </div>
                        <p className="role-summary">{role.summary}</p>
                        <ul className="role-highlights">
                          {role.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                        <div className="tag-list compact-tags">
                          {role.skills.map((skill) => (
                            <span className="tag" key={skill}>{skill}</span>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-width" id="competencias">
          <SectionHeading
            index="03"
            eyebrow="Competências técnicas"
            title="Tecnologias aplicadas em diferentes partes do ciclo de desenvolvimento."
            description="As competências estão agrupadas por contexto de uso. A ênfase está em backend, frontend, dados e operação de aplicações."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <p>{group.description}</p>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="additional-skills">
            <span>Outras competências</span>
            <p>
              Suporte técnico e Help Desk · análise e reprodução de bugs · testes de
              funcionalidades · Google Workspace · Adobe Photoshop · Adobe After Effects
              · Adobe Illustrator
            </p>
          </div>
        </section>

        <section className="section section-muted" id="formacao">
          <div className="page-width">
            <SectionHeading
              index="04"
              eyebrow="Formação e cursos"
              title="Base técnica em desenvolvimento e aprendizado contínuo."
              description="Formação acadêmica, curso técnico e certificações informadas no perfil profissional."
            />

            <div className="education-list">
              {education.map((item) => (
                <article className="education-entry" key={item.institution}>
                  <div className="education-period">{item.period}</div>
                  <div>
                    <h3>{item.course}</h3>
                    <p className="education-institution">{item.institution}</p>
                    <p className="education-status">{item.status} · {item.note}</p>
                    {item.highlights.length > 0 ? (
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="certification-block">
              <div className="certification-heading">
                <span className="case-label">Cursos e certificados</span>
                <span className="certification-provider">Fundação Bradesco · Escola Virtual</span>
              </div>
              <div className="certification-list">
                {certifications.map((certification) => (
                  <article key={certification.title}>
                    <div>
                      <h3>{certification.title}</h3>
                      <p>{certification.institution}</p>
                    </div>
                    <span>{certification.issued}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="language-row">
              {languages.map((language) => (
                <div key={language.name}>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section page-width" id="sobre">
          <div className="about-label">
            <span>05</span>
            <span>Sobre mim</span>
          </div>
          <div className="about-content">
            <h2>Experiência técnica com atenção a quem usa o sistema.</h2>
            <p>{profile.about}</p>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="page-width contact-inner">
            <div>
              <p className="eyebrow">Contato profissional</p>
              <h2>Está procurando alguém para desenvolver e evoluir suas aplicações?</h2>
              <p>
                Estou buscando oportunidades como Desenvolvedor Full Stack ou Backend
                em São Paulo, com preferência por modelos presencial ou híbrido.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={"mailto:" + profile.email + "?subject=Oportunidade%20profissional"}>
                Enviar e-mail <span aria-hidden="true">↗</span>
              </a>
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                Conversar pelo LinkedIn ↗
              </a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                Ver GitHub ↗
              </a>
              <span className="contact-email">{profile.email}</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
