import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'
import SectionTitle from './SectionTitle'
import ProjectBanner from './ProjectBanner'

const FILTERS = [
  ['all', '전체'],
  ['Work', '실무'],
  ['Side', '개인·학업'],
]

function ProjectCard({ p }) {
  const ref = useScrollReveal()
  return (
    <a className="card project-card reveal" ref={ref} href={`#/projects/${p.id}`}>
      <ProjectBanner p={p} />
      <div className="project-body">
        <div className="project-top">
          <span className="mono-label">{p.tag === 'Work' ? 'work' : 'side'}{p.period ? ` · ${p.period}` : ''}</span>
          <ArrowUpRight size={16} className="project-arrow" />
        </div>
        <h3 className="project-title">{p.name}</h3>
        <p className="project-sub">{p.subtitle}</p>
        <p className="project-desc">{p.overview}</p>
        <div className="tags">
          {p.skills.slice(0, 5).map(s => <span key={s} className="tag">{s}</span>)}
        </div>
      </div>
      <span className="sr-only">{p.name} 상세 페이지로 이동</span>
    </a>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const list = projects.filter(p => filter === 'all' || p.tag === filter)

  return (
    <section id="projects" className="section shell">
      <SectionTitle
        eyebrow="projects"
        title="Projects"
        desc="실제로 만들고 현업에서 운영하며 다듬어 온 프로젝트입니다."
      />
      <div className="filters">
        {FILTERS.map(([key, label]) => (
          <button
            key={key}
            className={`filter ${filter === key ? 'filter-on' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {list.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
