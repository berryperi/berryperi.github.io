import { Mail } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { profile } from '../data/profile'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" className="section shell">
      <SectionTitle
        eyebrow="contact"
        title="Contact"
        desc="AI 기술을 현업의 문제 해결로 연결하는 일에 관심이 많습니다."
      />
      <div className="card contact-card reveal" ref={ref}>
        <p className="contact-text">채용, 협업, 기술 관련 이야기는 언제든 메일로 연락해 주세요.</p>
        <a className="btn-primary" href={`mailto:${profile.email}`}>
          <Mail size={16} /> 메일로 바로 문의하기
        </a>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={14} /> {profile.email}</a>
        </div>
      </div>
    </section>
  )
}
