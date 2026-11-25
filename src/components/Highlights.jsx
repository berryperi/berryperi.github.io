import { useScrollReveal } from '../hooks/useScrollReveal'
import { profile } from '../data/profile'

export default function Highlights() {
  const ref = useScrollReveal()
  return (
    <section className="highlights">
      <div className="shell">
        <div className="kpi-grid reveal" ref={ref}>
          {profile.highlights.map(h => (
            <div key={h.label} className="kpi">
              <span className="kpi-value">{h.value}</span>
              <span className="kpi-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
