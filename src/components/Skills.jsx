import { motion } from 'framer-motion'
import { FaReact, FaLaravel, FaDocker, FaJava, FaDatabase, FaHtml5, FaJs, FaGithub, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiKotlin, SiFlutter, SiC } from 'react-icons/si'

const skills = [
  { name: 'HTML', level: 95, icon: FaHtml5 },
  { name: 'CSS/Tailwind', level: 90, icon: SiTailwindcss },
  { name: 'JavaScript', level: 70, icon: FaJs },
  { name: 'React', level: 70, icon: FaReact },
  { name: 'Laravel', level: 80, icon: FaLaravel },
  { name: 'MySQL', level: 75, icon: FaDatabase },
  { name: 'GitHub', level: 90, icon: FaGithub },
  { name: 'Java', level: 60, icon: FaJava },
  { name: 'Docker', level: 50, icon: FaDocker },
  { name: 'Kotlin', level: 60, icon: SiKotlin },
  { name: 'Flutter', level: 50, icon: SiFlutter },
  { name: 'Python', level: 50, icon: FaPython },
  { name: 'C/C++', level: 60, icon: SiC }
]

const Skills = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
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
            MY EXPERTISE
          </motion.span>
          <motion.h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            variants={itemVariants}
          >
            Skills & <span className="text-blue-400">Technologies</span>
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            variants={itemVariants}
          >
            I've worked with a variety of technologies in the Software development world. 
            From backend to frontend, always eager to learn new technologies.
          </motion.p>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className={`rounded-lg p-4 sm:p-5 border hover:border-blue-500/20 transition-colors h-full flex flex-col items-center text-center ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 border border-blue-500/20">
                  <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                </div>
                
                {/* Skill name */}
                <h4 className={`font-medium text-sm sm:text-base mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h4>
                
                {/* Progress bar */}
                <div className={`w-full h-1.5 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                  <motion.div
                    className="h-full rounded-full bg-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + index * 0.05 }}
                  />
                </div>
                
                {/* Level percentage */}
                <span className={`text-xs sm:text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div 
            className={`rounded-lg p-5 sm:p-6 border hover:border-blue-500/20 transition-colors text-center ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
            variants={itemVariants}
          >
            <div className="text-3xl sm:text-4xl mb-3">🎯</div>
            <h4 className={`text-lg sm:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Problem Solving</h4>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Analytical approach to break down complex problems into manageable solutions</p>
          </motion.div>

          <motion.div 
            className={`rounded-lg p-5 sm:p-6 border hover:border-blue-500/20 transition-colors text-center ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
            variants={itemVariants}
          >
            <div className="text-3xl sm:text-4xl mb-3">🤝</div>
            <h4 className={`text-lg sm:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Team Collaboration</h4>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Collaborative mindset for effective teamwork and knowledge sharing</p>
          </motion.div>

          <motion.div 
            className={`rounded-lg p-5 sm:p-6 border hover:border-blue-500/20 transition-colors text-center sm:col-span-2 md:col-span-1 ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
            variants={itemVariants}
          >
            <div className="text-3xl sm:text-4xl mb-3">⚡</div>
            <h4 className={`text-lg sm:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Fast Learner</h4>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quick to adapt and learn new technologies and frameworks</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills