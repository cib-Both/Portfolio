import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS/Tailwind', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Git', level: 85 },
  { name: 'Python', level: 70 },
  { name: 'Docker', level: 65 },
]

const professionalSkills = [
  {
    title: 'Problem Solving',
    description: 'Analytical approach to break down complex problems',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    )
  },
  {
    title: 'Teamwork',
    description: 'Collaborative mindset for effective teamwork',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    )
  },
  {
    title: 'Time Management',
    description: 'Efficient project planning and deadline adherence',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    )
  },
  {
    title: 'Communication',
    description: 'Clear technical and non-technical communication',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    )
  }
]

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto transition-colors duration-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300"
              variants={itemVariants}
            >
              I've worked with a variety of technologies in the web development world. From backend to frontend, I'm always eager to learn new technologies and frameworks.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  custom={skill.level}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white transition-colors duration-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 transition-colors duration-500">
                    <motion.div 
                      className="bg-blue-400 dark:bg-blue-600 h-2.5 rounded-full transition-colors duration-500" 
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Professional Skills
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300"
              variants={itemVariants}
            >
              Beyond technical expertise, I bring strong problem-solving abilities, effective communication, and a collaborative approach to every project.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {professionalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-3 transition-colors duration-500">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {skill.icon}
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white transition-colors duration-300">{skill.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills