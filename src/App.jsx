import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Simple grid background
const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-30" />
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedPreference = localStorage.getItem('darkMode')
    if (savedPreference !== null) {
      return JSON.parse(savedPreference)
    }
    // Otherwise, check system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true // Default to dark
  })

  useEffect(() => {
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0f] text-white' : 'bg-white text-gray-900'}`}>
      {darkMode && <GridBackground />}

      {/* Main content */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App