import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch { /* 저장 못 해도 화면은 정상 */ }
  }, [theme])

  return { theme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) }
}
