import { ArrowUp } from 'lucide-react'
import { goSection } from '../hooks/useRoute'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>© 2026 윤승원. All rights reserved.</p>
        <button className="footer-top" onClick={() => goSection('hero')}>
          <ArrowUp size={14} /> Top
        </button>
      </div>
    </footer>
  )
}
