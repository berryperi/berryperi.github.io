import { ArrowLeft, CalendarDays, UserRound, Layers, Activity } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectBanner from '../components/ProjectBanner'
import { filled } from '../lib/filled'

function Block({ label, children }) {
  return (
    <section className="detail-block">
      <p className="eyebrow title-line">{label}</p>
      {children}
    </section>
  )
}

export default function ProjectDetail({ id }) {
  const p = projects.find(x => x.id === id)

  if (!p) {
    return (
      <div className="shell detail">
        <a className="back" href="#"><ArrowLeft size={16} /> Back to projects</a>
        <p className="detail-missing">프로젝트를 찾을 수 없습니다.</p>
      </div>
    )
  }

  const meta = [
    p.period && [CalendarDays, p.period],
    p.role && [UserRound, p.role],
    p.form && [Layers, p.form],
    p.status && [Activity, p.status],
  ].filter(Boolean)

  return (
    <article className="shell detail">
      <a className="back" href="#projects" onClick={e => { e.preventDefault(); window.location.hash = ''; setTimeout(() => document.getElementById('projects')?.scrollIntoView(), 60) }}>
        <ArrowLeft size={16} /> Back to projects
      </a>

      <header className="detail-head">
        <p className="mono-label">{p.category}{p.collab ? ' · 공동 개발' : ''}</p>
        <h1 className="detail-title">{p.name}</h1>
        <p className="detail-sub">{p.subtitle}</p>
        <p className="detail-overview">{p.overview}</p>
        <div className="tags">{p.skills.map(s => <span key={s} className="tag">{s}</span>)}</div>
        <div className="detail-meta">
          {meta.map(([Icon, text]) => (
            <span key={text} className="chip"><Icon size={14} /> {text}</span>
          ))}
        </div>
      </header>

      <ProjectBanner p={p} large />

      {filled(p.metrics).filter(m => m.value).length > 0 && (
        <div className="kpi-grid detail-kpi">
          {p.metrics.filter(m => m.value).map(m => (
            <div key={m.label} className="kpi">
              <span className="kpi-value">{m.value}</span>
              <span className="kpi-label">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <Block label="Background">
        <p className="detail-text">{p.background}</p>
      </Block>

      {p.knowledge?.length > 0 && (
        <Block label="Knowledge Structuring">
          <div className="decision-grid">
            {p.knowledge.map(k => (
              <div key={k.title} className="sub-card">
                <p className="decision-title">{k.title}</p>
                <p className="decision-desc">{k.desc}</p>
              </div>
            ))}
          </div>
        </Block>
      )}

      {p.architecture?.length > 0 && (
        <Block label="Architecture">
          <ol className="flow">
            {p.architecture.map((a, i) => (
              <li key={a.title} className="flow-step">
                <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="flow-title">{a.title}</p>
                  <p className="flow-desc">{a.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>
      )}

      <Block label="Core Features">
        <ul className="dot-list dot-list-lg">
          {p.coreFeatures.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </Block>

      {p.decisions?.length > 0 && (
        <Block label="Design Decisions">
          <div className="decision-grid">
            {p.decisions.map((d, i) => (
              <div key={d.title} className="sub-card">
                <p className="decision-title"><span className="decision-num">{i + 1}</span>{d.title}</p>
                <p className="decision-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </Block>
      )}

      {p.troubleshooting?.length > 0 && (
        <Block label="Troubleshooting">
          <div className="stack">
            {p.troubleshooting.map((t, i) => (
              <div key={i} className="card trouble">
                <p className="trouble-problem">{t.problem}</p>
                <p className="trouble-label">Solution</p>
                <p className="trouble-solution">{t.solution}</p>
              </div>
            ))}
          </div>
        </Block>
      )}

      {filled(p.achievements).length > 0 && (
        <Block label="Impact">
          <ul className="dot-list dot-list-lg">
            {filled(p.achievements).map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </Block>
      )}

      {p.next?.length > 0 && (
        <Block label="Next">
          <ul className="dot-list dot-list-lg dot-list-muted">
            {p.next.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </Block>
      )}
    </article>
  )
}
