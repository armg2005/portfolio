import SkillCard from '../components/SkillCard'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section
      className="content-section skills-section"
      id="habilidades"
      aria-labelledby="skills-title"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Caixa de ferramentas</p>
          <h2 id="skills-title">
            Habilidades técnicas
            <br />
            <span>organizadas por domínio.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
