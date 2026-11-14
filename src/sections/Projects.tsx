import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section
      className="content-section projects-section"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Trabalho selecionado</p>
          <h2 id="projects-title">
            Projetos com foco em
            <br />
            <span>soluções bem construídas.</span>
          </h2>
          <p className="section-intro">
            Backend, regras de negócio e arquitetura aplicados a projetos
            acadêmicos, pessoais e da Empresa Júnior.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
