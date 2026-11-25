import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Printer } from 'lucide-react'
import { goSection } from '../hooks/useRoute'

const LINKS = [
  ['hero', 'Home'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const go = id => { setOpen(false); goSection(id) }

  const tools = (
    <div className="nav-tools">
      <button className="nav-icon" onClick={() => window.print()} title="인쇄 / PDF로 저장" aria-label="인쇄 또는 PDF로 저장">
        <Printer size={16} />
      </button>
      <button className="nav-icon" onClick={onToggleTheme} title="테마 전환" aria-label="라이트·다크 테마 전환">
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  )

  return (
    <header className={`navbar ${scrolled || open ? 'navbar-solid' : ''}`}>
      <div className="shell nav-inner">
        <button className="nav-logo" onClick={() => go('hero')}>
          <span className="nav-dot" />
          seungwon.dev
        </button>
        <div className="nav-right">
          <nav className="nav-links">
            {LINKS.map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>
          {tools}
          <button className="nav-menu" onClick={() => setOpen(o => !o)} aria-label="메뉴">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="nav-mobile shell">
          {LINKS.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
        </nav>
      )}
    </header>
  )
}
