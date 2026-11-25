import { projects } from '../data/projects'
import { filled } from '../lib/filled'

// 화면에는 안 보이고 인쇄(PDF 저장)할 때만 나오는 프로젝트 상세 목록
function PrintProject({ p }) {
  return (
    <div className="print-project">
      <div className="print-project-name">{p.name} — {p.subtitle}</div>
      <div className="print-project-meta">
        {[p.period, p.category, p.role].filter(Boolean).join(' · ')}
      </div>
      <p className="print-text">{p.overview}</p>

      {filled(p.metrics).filter(m => m.value).length > 0 && (
        <div className="print-metrics">
          {p.metrics.filter(m => m.value).map(m => <span key={m.label}><b>{m.value}</b> {m.label}</span>)}
        </div>
      )}

      {p.knowledge?.length > 0 && (
        <>
          <div className="print-label">Knowledge Structuring</div>
          <ul className="print-list">{p.knowledge.map(k => <li key={k.title}><b>{k.title}</b> — {k.desc}</li>)}</ul>
        </>
      )}

      <div className="print-label">Core Features</div>
      <ul className="print-list">{p.coreFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul>

      {p.troubleshooting?.length > 0 && (
        <>
          <div className="print-label">Troubleshooting</div>
          {p.troubleshooting.map((t, i) => (
            <div key={i} className="print-trouble">
              <p><span className="print-badge">Problem</span>{t.problem}</p>
              <p><span className="print-badge print-badge-s">Solution</span>{t.solution}</p>
            </div>
          ))}
        </>
      )}

      {filled(p.achievements).length > 0 && (
        <>
          <div className="print-label">Impact</div>
          <ul className="print-list">{filled(p.achievements).map((a, i) => <li key={i}>{a}</li>)}</ul>
        </>
      )}

      <div className="print-tags">{p.skills.map(s => <span key={s}>{s}</span>)}</div>
    </div>
  )
}

export default function PrintProjects() {
  return (
    <section className="print-only shell">
      <h2 className="print-heading">Projects</h2>
      {projects.map(p => <PrintProject key={p.id} p={p} />)}
    </section>
  )
}
