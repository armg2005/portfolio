import { useState } from 'react'
import HeroScene3D from '../components/HeroScene3D'
import TiltCard3D from '../components/TiltCard3D'

function Hero() {
  const [profileUnavailable, setProfileUnavailable] = useState(false)

  return (
    <section className="hero-section" id="inicio">
      <HeroScene3D />
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" />
            Olá, eu sou Alisson
          </p>
          <h1>
            Desenvolvedor
            <br />
            <span>Backend &amp; Full Stack</span>
          </h1>
          <p className="hero-description">
            Estudante de Sistemas de Informação no IFNMG e desenvolvedor
            interessado em criar APIs seguras, sistemas bem estruturados e
            soluções que simplificam o dia a dia.
          </p>
          <p className="hero-study">
            Bacharelado em Sistemas de Informação <span>·</span> 5º período
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary"
              href="/documents/curriculo.pdf"
              download="curriculo-alisson-guimaraes.pdf"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="download-icon"
              >
                <path
                  d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13.5v3h13v-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Baixar currículo
            </a>
          </div>

          <div className="stack-list" aria-label="Principais tecnologias">
            <span className="stack-label">Stack principal</span>
            <span className="stack-divider" />
            <span className="stack-badge">Java</span>
            <span className="stack-badge">C# / .NET</span>
            <span className="stack-badge">TypeScript</span>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />
          <TiltCard3D className="profile-card" intensity={7}>
            <div className="profile-card-inner">
              {profileUnavailable ? (
                <div className="profile-fallback" role="img" aria-label="AG">
                  <span>AG</span>
                  <small>Alisson Guimarães</small>
                </div>
              ) : (
                <img
                  className="profile-image"
                  src="/images/profile.jpg"
                  alt="Alisson Guimarães"
                  onError={() => setProfileUnavailable(true)}
                />
              )}
              <div className="profile-caption">
                <span>Desenvolvedor</span>
                <strong>Backend &amp; Full Stack</strong>
              </div>
            </div>
          </TiltCard3D>
          <div className="availability-badge">
            <span className="availability-dot" />
            Disponível
          </div>
          <div className="portrait-coordinate" aria-hidden="true">
            <span>16°10&apos; S</span>
            <span>42°17&apos; W</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#sobre">
        <span className="scroll-line" />
        Role para explorar
      </a>
    </section>
  )
}

export default Hero