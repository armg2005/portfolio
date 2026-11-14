import type { ProjectVisualKind } from '../types/portfolio'

interface ProjectVisualProps {
  kind: ProjectVisualKind
}

function NorteErpVisual() {
  return (
    <div className="visual-erp" aria-hidden="true">
      <div className="erp-tenants">
        <div className="tenant-node tenant-one">
          <span className="visual-node-dot" />
          <span>Tenant A</span>
          <small>isolado</small>
        </div>
        <div className="tenant-node tenant-two">
          <span className="visual-node-dot" />
          <span>Tenant B</span>
          <small>isolado</small>
        </div>
        <div className="tenant-node tenant-three">
          <span className="visual-node-dot" />
          <span>Tenant C</span>
          <small>isolado</small>
        </div>
      </div>
      <div className="erp-connectors">
        <span />
        <span />
        <span />
      </div>
      <div className="erp-api-node">
        <span className="api-node-icon">API</span>
        <strong>Norte ERP</strong>
        <div className="api-version-list">
          <span>v1</span>
          <span>v2</span>
        </div>
      </div>
      <div className="visual-caption">isolamento por tenant</div>
    </div>
  )
}

function AuthenticationVisual() {
  return (
    <div className="visual-auth" aria-hidden="true">
      <div className="auth-flow-line" />
      <div className="auth-step auth-request">
        <span className="auth-method">POST</span>
        <code>/auth/login</code>
      </div>
      <div className="auth-step auth-token">
        <span className="auth-lock">◇</span>
        <code>Bearer JWT</code>
      </div>
      <div className="auth-step auth-response">
        <span className="auth-status-dot" />
        <code>200 OK</code>
      </div>
      <div className="auth-packet" />
      <div className="visual-caption">Spring Security · stateless</div>
    </div>
  )
}

const appointmentSlots = [
  { time: '09:00', state: 'available' },
  { time: '10:00', state: 'busy' },
  { time: '11:00', state: 'conflict' },
  { time: '13:00', state: 'available' },
  { time: '14:00', state: 'available' },
  { time: '15:00', state: 'busy' },
] as const

function SchedulerVisual() {
  return (
    <div className="visual-scheduler" aria-hidden="true">
      <div className="schedule-heading">
        <span>QUA, 18 JUN</span>
        <span className="schedule-timezone">GMT−3</span>
      </div>
      <div className="schedule-grid">
        {appointmentSlots.map((slot) => (
          <div
            className={`schedule-slot slot-${slot.state}`}
            key={slot.time}
          >
            <span>{slot.time}</span>
            <span className="slot-indicator">
              {slot.state === 'conflict'
                ? 'conflito'
                : slot.state === 'busy'
                  ? 'ocupado'
                  : 'livre'}
            </span>
          </div>
        ))}
      </div>
      <div className="schedule-scan" />
      <div className="visual-caption">validação de disponibilidade</div>
    </div>
  )
}

function FullStackVisual() {
  return (
    <div className="visual-fullstack" aria-hidden="true">
      <div className="rest-endpoints">
        <span className="endpoint endpoint-get">
          <b>GET</b> /api/projects
        </span>
        <span className="endpoint endpoint-post">
          <b>POST</b> /api/auth
        </span>
        <span className="endpoint endpoint-patch">
          <b>PATCH</b> /api/users/:id
        </span>
      </div>
      <div className="architecture-layers">
        <div className="architecture-layer layer-controller">
          <span>Controller</span>
          <i />
        </div>
        <div className="architecture-layer layer-service">
          <span>Service</span>
          <i />
        </div>
        <div className="architecture-layer layer-data">
          <span>Repository · ORM</span>
          <i />
        </div>
      </div>
      <div className="visual-caption">endpoints → camadas → dados</div>
    </div>
  )
}

function ProjectVisual({ kind }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual project-visual-${kind}`}
      role="img"
      aria-label={`Ilustração: ${kind.split('-').join(' ')}`}
    >
      {kind === 'norte-erp' && <NorteErpVisual />}
      {kind === 'authentication' && <AuthenticationVisual />}
      {kind === 'scheduler' && <SchedulerVisual />}
      {kind === 'fullstack' && <FullStackVisual />}
    </div>
  )
}

export default ProjectVisual
