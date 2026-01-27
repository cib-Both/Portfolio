import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaFileDownload, FaTelegram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

// Typewriter effect component
const TypeWriter = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <span className="typewriter-cursor" />
    </span>
  )
}

const Hero = ({ darkMode }) => {
  const roles = ['Software Developer', 'Full Stack Developer', 'Problem Solver']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/cib-Both', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chem-indraboth', label: 'LinkedIn' },
    { icon: FaTelegram, href: 'https://t.me/Ciboth', label: 'Telegram' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Open to opportunities</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
              <span className="text-blue-500">Indraboth</span>
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl font-medium mb-6 h-8"
              variants={itemVariants}
            >
              <TypeWriter 
                words={roles} 
                className="text-blue-400"
              />
            </motion.div>
            
            <motion.p 
              className={`text-base mb-8 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              variants={itemVariants}
            >
              I craft exceptional digital experiences with modern technologies. 
              Focused on creating clean, efficient, and user-friendly applications.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="btn-primary px-6 py-3 rounded-lg font-medium cursor-pointer text-center"
              >
                Let's Talk
              </Link>
              
              <a
                href="/Chem_indraboth_CV.pdf"
                download
                className="btn-cyber flex items-center justify-center gap-2 px-6 py-3"
              >
                <FaFileDownload className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-3 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border transition-all duration-300 hover:text-blue-400 hover:border-blue-500/50 ${darkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-blue-500/30">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech badges - hidden on mobile */}
              <div className={`hidden sm:block absolute -top-2 -right-2 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>React</span>
              </div>

              <div className={`hidden sm:block absolute -top-1 -left-2 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Kotlin</span>
              </div>
              
              <div className={`hidden sm:block absolute top-1/2 -left-14 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Laravel</span>
              </div>
              
              <div className={`hidden sm:block absolute -bottom-2 right-6 px-3 py-1.5 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tailwind</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero