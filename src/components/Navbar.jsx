import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: 'home' },
    { name: 'ABOUT', href: 'about' },
    { name: 'SKILLS', href: 'skills' },
    { name: 'PROJECTS', href: 'projects' },
    { name: 'CONTACT', href: 'contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'
  }

  return (
    <motion.header 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 
                  w-[95%] max-w-5xl z-50 rounded-xl 
                  transition-all duration-300 
                  ${scrolled 
                    ? darkMode 
                      ? 'bg-black/80 backdrop-blur-md'
                      : 'bg-white/80 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <div className="px-3 py-1 rounded-lg bg-blue-600">
              <span className="text-base font-bold text-white">CHEM INDRABOTH.</span> 
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                className={`px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200
                  ${activeSection === item.href 
                    ? 'text-blue-500' 
                    : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-2 p-2 rounded-lg border transition-colors ${darkMode ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white' : 'bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className={`md:hidden rounded-lg mt-2 overflow-hidden border ${darkMode ? 'bg-black/90' : 'bg-white/90'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className={`block px-4 py-3 text-sm font-medium cursor-pointer transition-colors
                    ${activeSection === item.href 
                      ? 'text-blue-500 bg-blue-500/10' 
                      : darkMode ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar