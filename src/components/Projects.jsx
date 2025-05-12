import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout process.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Dnd Kit"],
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    link: "#",
    github: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with 5-day forecast, location search, and interactive maps.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
    link: "#",
    github: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization and export functionality.",
    technologies: ["React", "D3.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    link: "#",
    github: "https://github.com/cib-Both/CRUD-inventory-system"
  },
]

const Projects = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
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
            My Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto transition-colors duration-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <motion.div 
                className="h-48 overflow-hidden"
                variants={hoverVariants}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium transition-colors duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-300 hover:underline font-medium transition-colors duration-300"
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/cib-Both"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gray-400 cursor-pointer transform hover:-translate-y-1"
          >
            View My Github
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects