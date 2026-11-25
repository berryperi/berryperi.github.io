import { useEffect } from 'react'
import { useRoute } from './hooks/useRoute'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import PrintProjects from './components/PrintProjects'

export default function App() {
  const route = useRoute()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    if (route.page === 'project') window.scrollTo(0, 0)
  }, [route.page, route.id])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        {route.page === 'project' ? (
          <ProjectDetail id={route.id} />
        ) : (
          <>
            <Hero />
            <Highlights />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <PrintProjects />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
