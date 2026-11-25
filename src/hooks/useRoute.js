import { useEffect, useState } from 'react'

// GitHub Pages 에서 새로고침해도 깨지지 않도록 해시 주소를 쓴다: #/projects/<id>
function parse() {
  const m = window.location.hash.match(/^#\/projects\/([\w-]+)/)
  return m ? { page: 'project', id: m[1] } : { page: 'home' }
}

export function useRoute() {
  const [route, setRoute] = useState(parse)
  useEffect(() => {
    const on = () => setRoute(parse())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

// 홈의 섹션으로 이동(상세 페이지에 있으면 홈으로 돌아간 뒤 이동)
export function goSection(id) {
  const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (window.location.hash.startsWith('#/projects/')) {
    window.location.hash = ''
    setTimeout(scroll, 60)
  } else scroll()
}
