import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTelegram, FaHeart, FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = ({ darkMode }) => {
  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/cib-Both', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/chem-indraboth', label: 'LinkedIn' },
    { icon: FaTelegram, link: 'https://t.me/Ciboth', label: 'Telegram' }
  ]

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <footer className="relative pt-16 sm:pt-20 pb-6 sm:pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Back to top button */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <button
              className="p-3 sm:p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>

        {/* Main footer content */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Logo */}
          <motion.div 
            className="inline-block mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xl sm:text-2xl font-bold text-blue-400">CHEM INDRABOTH</span>
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className={`hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 sm:p-3 rounded-lg border hover:text-blue-400 hover:border-blue-500/30 transition-colors ${darkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-6 sm:pt-8 border-t ${darkMode ? 'border-white/5' : 'border-gray-200'}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className={`text-xs sm:text-sm flex items-center gap-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © {new Date().getFullYear()} Chem Indraboth. Built with{' '}
              <FaHeart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" /> and passion.
            </p>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Designed & Developed by Chem Indraboth
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
