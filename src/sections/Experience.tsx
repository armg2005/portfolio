import { timelineEntries } from '../data/experiences'

function Experience() {
  return (
    <section
      className="content-section experience-section"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="section-container experience-layout">
        <div className="section-heading experience-intro">
          <p className="section-kicker">Trajetória</p>
          <h2 id="experience-title">
            Aprendizado que vira
            <br />
            <span>experiência prática.</span>
          </h2>
          <p className="section-intro">
            Minha formação em Sistemas de Informação e minha atuação na
            SIFSOFT Junior caminham juntas no desenvolvimento de soluções reais.
          </p>
          <div className="experience-marker">
            <span className="experience-marker-line" />
            <span>IFNMG · Campus Salinas</span>
          </div>
        </div>

        <div className="timeline">
          {timelineEntries.map((entry) => (
            <article
              className={`timeline-entry timeline-${entry.kind}`}
              key={entry.id}
            >
              <span className="timeline-point" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-card-top">
                  <span className="timeline-kind">
                    {entry.kind === 'education' ? 'Formação' : 'Experiência'}
                  </span>
                  <span className="timeline-period">{entry.period}</span>
                </div>
                <p className="timeline-organization">{entry.organization}</p>
                <h3>{entry.role}</h3>
                <p className="timeline-description">{entry.description}</p>
                {entry.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
