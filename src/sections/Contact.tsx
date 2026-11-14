import { useEffect, useRef, useState } from 'react'

type CopyState = 'idle' | 'copied' | 'error'

const email = 'alisson.ricady.mg@gmail.com'

function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const feedbackTimer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (feedbackTimer.current !== null) {
        window.clearTimeout(feedbackTimer.current)
      }
    },
    [],
  )

  async function copyEmail() {
    if (feedbackTimer.current !== null) {
      window.clearTimeout(feedbackTimer.current)
    }

    if (!navigator.clipboard) {
      setCopyState('error')
    } else {
      try {
        await navigator.clipboard.writeText(email)
        setCopyState('copied')
      } catch {
        setCopyState('error')
      }
    }

    feedbackTimer.current = window.setTimeout(() => {
      setCopyState('idle')
    }, 2400)
  }

  const feedbackMessage =
    copyState === 'copied'
      ? 'E-mail copiado para a área de transferência.'
      : copyState === 'error'
        ? 'Não foi possível copiar. Selecione o e-mail para copiá-lo.'
        : ''

  return (
    <section
      className="content-section contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="section-container contact-panel">
        <div className="contact-copy">
          <p className="section-kicker">Vamos conversar</p>
          <h2 id="contact-title">
            Tem um projeto
            <br />
            <span>em mente?</span>
          </h2>
          <p>
            Estou aberto a oportunidades de estágio e desenvolvimento júnior,
            além de conversas sobre tecnologia e projetos.
          </p>
          <div className="contact-email-row">
            <a href={`mailto:${email}`}>{email}</a>
            <button
              className={`copy-email-button${copyState === 'copied' ? ' is-copied' : ''}`}
              type="button"
              onClick={copyEmail}
              aria-label="Copiar e-mail"
            >
              {copyState === 'copied' ? (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="m4 10 4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect
                    x="7"
                    y="7"
                    width="9"
                    height="10"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M13 7V5.5A1.5 1.5 0 0 0 11.5 4h-6A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14H7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="copy-feedback" aria-live="polite">
            {feedbackMessage}
          </p>
        </div>

        <div className="contact-links">
          <a
            className="contact-link"
            href="https://wa.me/5538998661610"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon" aria-hidden="true">
              WA
            </span>
            <span>
              <small>WhatsApp</small>
              <strong>(38) 99866-1610</strong>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            className="contact-link"
            href="https://github.com/armg2005"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon" aria-hidden="true">
              GH
            </span>
            <span>
              <small>GitHub</small>
              <strong>armg2005</strong>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/alisson-guimar%C3%A3es-7a46b5269/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon" aria-hidden="true">
              in
            </span>
            <span>
              <small>LinkedIn</small>
              <strong>Alisson Guimarães</strong>
            </span>
            <span className="contact-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a
            className="contact-resume-link"
            href="/documents/curriculo.pdf"
            download="curriculo-alisson-guimaraes.pdf"
          >
            Baixar currículo <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
