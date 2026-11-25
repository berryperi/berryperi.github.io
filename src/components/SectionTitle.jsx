import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionTitle({ eyebrow, title, desc }) {
  const ref = useScrollReveal()
  return (
    <div className="section-head reveal" ref={ref}>
      <p className="eyebrow title-line">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
      <div className="section-rule" />
    </div>
  )
}
