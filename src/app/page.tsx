import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.intro,
  email: profile.email,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skillGroups.flatMap((group) => group.skills),
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />

      <main id="conteudo">
        <section className="hero page-width" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Portfólio profissional
            </p>
            <h1 id="hero-title">
              Desenvolvedor
              <br />
              <span>Full Stack.</span>
            </h1>
            <p className="hero-lead">{profile.headline}</p>
            <p className="hero-description">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Conhecer projetos <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}?subject=Oportunidade%20profissional`}>
                Entrar em contato <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-socials" aria-label="Perfis profissionais">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="/curriculo">Currículo para impressão ↗</a>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Resumo profissional">
            <div className="aside-top">
              <span>PERFIL</span>
              <span>01 / 04</span>
            </div>
            <div className="monogram" aria-hidden="true">
              VM<span>.</span>
            </div>
            <p className="aside-label">Áreas de atuação</p>
            <ul className="focus-list">
              <li>Desenvolvimento de aplicações web</li>
              <li>APIs e integração entre sistemas</li>
              <li>Automação de processos</li>
            </ul>
            <div className="aside-bottom">
              <span>React · Node.js · MySQL</span>
              <span>Brasil</span>
            </div>
          </aside>
        </section>

        <div className="ticker page-width" aria-label="Principais tecnologias">
          <span>TECNOLOGIAS</span>
          <p>React <i>·</i> JavaScript <i>·</i> TypeScript <i>·</i> Node.js <i>·</i> MySQL <i>·</i> WordPress <i>·</i> Linux</p>
        </div>

        <section className="section page-width" id="projetos">
          <SectionHeading
            index="01"
            eyebrow="Trabalho selecionado"
            title="Projetos com contexto, não só uma lista de tecnologias."
            description="O que foi construído, qual foi minha participação e quais decisões técnicas fizeram parte do trabalho."
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
              eyebrow="Trajetória profissional"
              title="Experiência construída na prática."
              description="Minha atuação em tecnologia passou por suporte, desenvolvimento de interfaces e integração de sistemas."
            />
            <div className="experience-list">
              {experiences.map((experience) => (
                <article className="experience-entry" key={experience.company}>
                  <div className="experience-company">
                    <h3>{experience.company}</h3>
                    <span>{experience.period}</span>
                  </div>
                  <div className="experience-content">
                    <p className="experience-summary">{experience.summary}</p>
                    <div className="role-list">
                      {experience.roles.map((role) => (
                        <div className="role-entry" key={role.title}>
                          <div className="role-heading">
                            <h4>{role.title}</h4>
                            <span>{role.period}</span>
                          </div>
                          <p>{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-width" id="sobre">
          <SectionHeading
            index="03"
            eyebrow="Sobre e competências"
            title="Entender o fluxo inteiro faz parte do trabalho."
            description="Gosto de entender como a interface, os dados e os processos se conectam antes de escolher a solução."
          />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Minha experiência reúne desenvolvimento web e suporte de TI. Isso me
                aproximou tanto de quem usa os sistemas quanto de quem precisa manter
                as ferramentas funcionando.
              </p>
              <p>
                No desenvolvimento, tenho trabalhado principalmente com aplicações
                JavaScript, páginas de campanha, APIs, bancos relacionais e integrações.
                Também mantenho projetos pessoais voltados a Linux e automação.
              </p>
              <div className="education-card">
                <span className="small-label">FORMAÇÃO</span>
                <h3>{education.course}</h3>
                <p>{education.institution} · {education.status}</p>
                <span className="education-note">{education.note}</span>
                <div className="education-language">
                  <span>Inglês</span>
                  <strong>{education.english.replace("Inglês ", "")}</strong>
                </div>
              </div>
            </div>

            <div className="skills-panel">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.title}>
                  <div className="skill-heading">
                    <span>0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span className="tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="page-width contact-inner">
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h2>Vamos conversar sobre o que sua equipe precisa construir.</h2>
              <p>
                Para oportunidades, projetos ou uma conversa técnica, o melhor caminho
                é me chamar por e-mail ou pelo LinkedIn.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${profile.email}?subject=Oportunidade%20profissional`}>
                Enviar e-mail <span aria-hidden="true">↗</span>
              </a>
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                Falar pelo LinkedIn ↗
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
