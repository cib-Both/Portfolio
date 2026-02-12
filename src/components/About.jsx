import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaCode, FaLaptopCode, FaRocket, FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import My_profile from "../assets/My_profile.jpg"


const About = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const stats = [
    { number: 'IT Engineer', label: 'Bachelor Degree', icon: FaGraduationCap },
    { number: 'Creative', label: 'Problem Solver', icon: FaLaptopCode },
    { number: '5+', label: 'Technologies', icon: FaCode },
    { number: '100%', label: 'Dedication', icon: FaRocket },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
            variants={itemVariants}
          >
            ABOUT ME
          </motion.span>
          <motion.h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            variants={itemVariants}
          >
            Get to Know <span className="text-blue-400">Me</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-500 mx-auto rounded-full"
            variants={itemVariants}
          />
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Left - Image & Stats */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Main image */}
              <div className={`relative z-10 rounded-xl overflow-hidden border ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                <img
                  src={My_profile}
                  alt="About Me"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Graduate badge - hidden on mobile */}
              <div className={`hidden sm:block absolute -bottom-4 -right-4 z-20 rounded-xl p-4 border ${darkMode ? 'bg-gray-900 border-blue-500/20' : 'bg-white border-gray-200 shadow-lg'}`}>
                <div className="text-3xl font-bold text-blue-400">2026</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Graduate</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`rounded-lg p-3 sm:p-4 border hover:border-blue-500/20 transition-colors ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
                  variants={itemVariants}
                >
                  <stat.icon className="w-5 h-5 text-blue-400 mb-2" />
                  <div className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.number}</div>
                  <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div variants={containerVariants}>
            <motion.h3 
              className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              variants={itemVariants}
            >
              Ready to <span className="text-blue-400">Make an Impact</span>
            </motion.h3>
            
            <motion.p 
              className={`mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              variants={itemVariants}
            >
              I'm a recent graduate in Information technology engineering with a strong passion for Software development. During my studies, 
              I've built various projects using JavaScript, React.js, Laravel, Tailwind CSS and Kotlin. 
              I'm eager to apply my knowledge and continue growing as a developer.
            </motion.p>
            
            <motion.p 
              className={`mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              variants={itemVariants}
            >
              Throughout my academic journey, I've developed a solid foundation in programming 
              and problem-solving. I'm a quick learner who thrives on challenges and is excited 
              to contribute to real-world projects while learning from experienced professionals.
            </motion.p>

            {/* Info Cards */}
            <motion.div className="space-y-3 mb-6 sm:mb-8" variants={containerVariants}>
              <motion.div 
                className={`rounded-lg p-4 border hover:border-blue-500/20 transition-colors ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
                variants={itemVariants}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                   <FaEnvelope className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" /> 
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Email</div>
                    <div className={`font-medium text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>bothchem698@gmail.com</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className={`rounded-lg p-4 border hover:border-blue-500/20 transition-colors ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
                variants={itemVariants}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <FaMapMarkerAlt className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Location</div>
                    <div className={`font-medium text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phnom Penh, Cambodia</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors"
              >
                <span>Let's Work Together</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About