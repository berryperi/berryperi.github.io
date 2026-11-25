import { Building2, CalendarDays } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { experiences } from '../data/experience'
import SectionTitle from './SectionTitle'
import { filled } from '../lib/filled'

function ExperienceCard({ exp }) {
  const ref = useScrollReveal()
  return (
    <article className="card exp-card reveal" ref={ref}>
      <div className="exp-head">
        <div>
          <h3 className="exp-company">{exp.company}</h3>
          <p className="exp-team">{exp.team}</p>
        </div>
        <div className="exp-meta">
          <span className="chip"><CalendarDays size={14} /> {exp.period}</span>
          <span className="chip"><Building2 size={14} /> {exp.type}</span>
        </div>
      </div>
      <p className="exp-desc">{exp.description}</p>
      <div className="exp-grid">
        <div className="sub-card">
          <p className="sub-label">주요 업무</p>
          <ul className="dot-list">{exp.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
        <div className="sub-card">
          <p className="sub-label">대표 성과</p>
          <ul className="dot-list">{filled(exp.achievements).map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <SectionTitle
        eyebrow="experience"
        title="Experience"
        desc="현업의 반복 작업을 찾아 직접 도구로 만들고 운영해 온 경험입니다."
      />
      <div className="stack">
        {experiences.map(exp => <ExperienceCard key={exp.company} exp={exp} />)}
      </div>
    </section>
  )
}
