import { Wrench, ScanSearch, Gamepad2, AudioLines, Music4, Boxes, Plug, Search, Shirt, ImageUp } from 'lucide-react'

const ICONS = {
  augraphics: ScanSearch, 'max-autofix': Wrench, aucontrol: Gamepad2, tts: AudioLines, midi: Music4,
  'vlm-mcp': Plug, 'asset-search': Search, 'texture-gen': Shirt, 'image-service': ImageUp,
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
