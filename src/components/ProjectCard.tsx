import type { PortfolioProject } from '../types/portfolio'
import ProjectVisual from './ProjectVisual'
import TiltCard3D from './TiltCard3D'

interface ProjectCardProps {
  project: PortfolioProject
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <TiltCard3D className="project-card-tilt" intensity={3.5}>
      <article className="project-card">
        <ProjectVisual kind={project.visual} />
        <div className="project-card-content">
          <div className="project-card-heading">
            <div>
              <span className="project-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="project-category">{project.category}</p>
            </div>
            {project.githubUrl ? (
              <a
                className="project-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ${project.title} no GitHub`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>
            ) : (
              <span className="project-private-label">Projeto interno</span>
            )}
          </div>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-stack" aria-label="Tecnologias utilizadas">
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </article>
    </TiltCard3D>
  )
}

export default ProjectCard
