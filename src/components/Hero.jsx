import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-primary-600 dark:text-primary-400 transition-colors duration-300">IndraBoth</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-600 dark:text-gray-300 transition-colors duration-300"
              variants={itemVariants}
            >
              Software Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg transition-colors duration-300"
              variants={itemVariants}
            >
              I build exceptional digital experiences with modern technologies. Focused on creating clean, efficient, and user-friendly applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-primary-600 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gray-400 cursor-pointer transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow hover:shadow-md"
              >
                <FaFileDownload className="mr-2" />
                Download CV
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 bg-primary-100 dark:bg-primary-900 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg transition-colors duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <FaTwitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero