import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/skills'
import SectionTitle from './SectionTitle'

export default function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills" className="section shell">
      <SectionTitle eyebrow="skills" title="Skills" desc="프로젝트에서 직접 써 온 기술입니다." />
      <div className="skill-grid reveal" ref={ref}>
        {skills.map(row => (
          <div key={row.category} className="card skill-card">
            <p className="mono-label">{row.category}</p>
            <div className="tags">
              {row.items.map(item => <span key={item} className="tag">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
