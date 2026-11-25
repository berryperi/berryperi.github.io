import { Mail, ArrowRight } from 'lucide-react'
import { goSection } from '../hooks/useRoute'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-inner">
        <p className="eyebrow eyebrow-wide">{profile.eyebrow}</p>
        <h1 className="hero-name"><span className="grad-text">{profile.name}</span></h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => goSection('projects')}>
            프로젝트 보기 <ArrowRight size={16} />
          </button>
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="이메일">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
