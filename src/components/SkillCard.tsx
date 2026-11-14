import type { SkillGroup } from '../types/portfolio'

interface SkillCardProps {
  group: SkillGroup
  index: number
}

function SkillCard({ group, index }: SkillCardProps) {
  return (
    <article
      className={`skill-card${group.emphasis ? ' skill-card-emphasis' : ''}`}
    >
      <div className="skill-card-heading">
        <span className="skill-card-index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="skill-card-spark" aria-hidden="true">
          +
        </span>
      </div>
      <h3>{group.title}</h3>
      <ul className="skill-tags">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}

export default SkillCard
