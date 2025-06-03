import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const About = () => {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gray-600 dark:bg-gray-400 mx-auto transition-colors duration-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
            variants={imageVariants}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-500 dark:border-gray-400 shadow-lg transition-colors duration-500">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 md:pl-12"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Who am I?
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300"
              variants={itemVariants}
            >
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications. I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express.js, MongoDB).
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300"
              variants={itemVariants}
            >
              My journey in web development started when I was in college, and since then I've worked with startups and established companies to build scalable, performant, and user-friendly applications.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Personal Info</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li><strong>Name:</strong> John Doe</li>
                  <li><strong>Email:</strong> john@example.com</li>
                  <li><strong>Phone:</strong> +1 234 567 890</li>
                  <li><strong>Location:</strong> San Francisco, CA</li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-300">Education</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li><strong>B.Sc Computer Science</strong></li>
                  <li>Stanford University, 2018</li>
                  <li><strong>M.Sc Software Engineering</strong></li>
                  <li>MIT, 2020</li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-block bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gray-400 cursor-pointer transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About