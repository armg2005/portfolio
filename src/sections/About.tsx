function About() {
  return (
    <section
      className="content-section about-section"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="section-container about-layout">
        <div className="section-heading">
          <p className="section-kicker">Um pouco sobre mim</p>
          <h2 id="about-title">
            Tecnologia com
            <br />
            <span>intenção e contexto.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p className="about-lead">
            Sou Alisson Ricady Morais Guimarães, estudante de Sistemas de
            Informação no IFNMG — Campus Salinas e desenvolvedor backend e full
            stack em formação.
          </p>
          <p>
            Na SIFSOFT Junior, participo do desenvolvimento de sistemas com
            arquitetura multitenant e monolito modular, modelagem de bancos
            relacionais e versionamento de APIs. Também desenvolvo APIs REST
            com Java e Spring Boot e exploro o ecossistema TypeScript e Node.js.
          </p>
          <div className="about-facts">
            <div>
              <span className="about-fact-label">Formação</span>
              <strong>Sistemas de Informação</strong>
              <small>IFNMG · previsão Dez. 2027</small>
            </div>
            <div>
              <span className="about-fact-label">Localização</span>
              <strong>Minas Gerais, Brasil</strong>
              <small>Salinas / Padre Carvalho</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
