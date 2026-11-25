import { ScanSearch, Gamepad2, AudioLines, Music4, BarChart3, Boxes, Radio, Globe, Bus } from 'lucide-react'

const ICONS = {
  augraphics: ScanSearch, aucontrol: Gamepad2, tts: AudioLines, midi: Music4,
  'golf-analysis': BarChart3, 'object-detection': Boxes, 'music-genre': Radio,
  webcrawling: Globe, 'shuttle-monitor': Bus,
}

export default function ProjectBanner({ p, large = false }) {
  const Icon = ICONS[p.id] || Boxes
  return (
    <div className={`banner accent-${p.accent || 'cyan'} ${large ? 'banner-lg' : ''}`}>
      <div className="banner-grid" aria-hidden="true" />
      <Icon className="banner-icon" size={large ? 44 : 34} strokeWidth={1.5} />
      <span className="banner-name">{p.name}</span>
    </div>
  )
}
