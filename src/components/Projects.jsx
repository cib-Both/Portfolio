import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Fotbal from '../assets/Fotbal.png'

const projects = [
  {
    title: "Inventory Management System",
    description: "This is a fully-featured Inventory System Management application built with Laravel and Filament. It allows users to manage products, categories, suppliers, and stock levels also with role and permission management.",
    technologies: ["Laravel", "Filament", "JWT", "MySQL", "MVC"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/467/997/small_2x/warehouse-worker-checking-inventory-concept-of-inventory-control-system-flat-illustration-free-vector.jpg",
    github: "https://github.com/cib-Both/Inventory_Management",
    featured: true
  },
  {
    title: "Job Portal Website",
    description: "A job portal website connecting employers and job seekers with advanced search and application features.",
    technologies: ["Laravel","Filament", "MySQL", "Tailwind"," Alpine.js", "Flowbite", "Breeze", "Google OAuth"],
    image: "https://imgs.search.brave.com/bA0ZOhnFXGfBA_MH1ymswKP9asPooMJmHVCkrB8-m5w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvb25saW5l/LWpvYi1wb3J0YWwt/aWxsdXN0cmF0aW9u/LXN2Zy1kb3dubG9h/ZC1wbmctMTM1Nzgy/NzIucG5n",
    github: "https://github.com/cib-Both/Job-Portal",
    featured: true
  },
  {
    title: "Booking Football Match UI",
    description: "A front-end booking platform for football matches with an intuitive interface and seamless user experience.",
    technologies: ["React", "Vite", "Tailwind"],
    image: Fotbal,
    github: "https://github.com/cib-Both/Fotbal-booking-app",
  },
  {
    title: "Coffee order app",
    description: "A coffee ordering app with a user-friendly interface for ordering coffee and picking up orders.",
    technologies: ["Kotlin", "Firebase", "MVVM", "Jetpack Compose", "OAuth"],
    image: "https://imgs.search.brave.com/gqNIXd2qvy_zT6_KoA5bmmPsx3M88INHarcL2dRmid8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/MzcyNjU3OC9waG90/by9oaWdoLWFuZ2xl/LXZpZXctb2Ytd29t/YW4tb3JkZXJpbmct/Zm9vZC1kZWxpdmVy/eS1vbi1zbWFydHBo/b25lLXdoaWxlLWVu/am95aW5nLWNvZmZl/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eFNlRkREd0FV/NF9VLTBkdlB4Y0JD/ZDV3MjcxNjdnVnRY/bGVFN3lPZzJqVT0",
    github: "https://github.com/cib-Both/Coffee_order_app"
  },
  {
    title: "Recipe App",
    description: "A recipe app that allows users to browse, search, and save their favorite recipes with detailed instructions and ingredients.",
    technologies: ["Flutter", "Dart", "REST API", "Local Storage", "Provider"],
    image: "https://imgs.search.brave.com/_4DpP__qOa--MLguKOIqu4SJjz_wXNBf5i_AudoWFhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODkx/MzIyMDYwL3Bob3Rv/L3B1bXBraW4tc291/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Vi0wMnZ0UElh/eklFR21aYUVZS1ZK/ZzBhMmw1cmxpOXRX/TzNxZmNRR0F1dz0",
    github: "https://github.com/cib-Both/recipe-app-flutter"
  },
  {
    title: "Loan prediction ML Model",
    description: "A machine learning model that predicts loan approval based on applicant data.",
    technologies: ["Python", "Scikit-learn", "Jupyter Notebook", "Flask"],
    image: "https://t4.ftcdn.net/jpg/14/74/12/75/360_F_1474127540_9lWk4qrZlrF6ZEsezL4jFalFHhiFEqAL.jpg",
    github: "https://github.com/cib-Both/Loan-Prediction"
  },
]

const Projects = ({ darkMode }) => {
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

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
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
            MY WORK
          </motion.span>
          <motion.h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            variants={itemVariants}
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </motion.p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className={`rounded-xl overflow-hidden border hover:border-blue-500/20 transition-colors h-full ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}>
                {/* Image container */}
                <div className={`relative overflow-hidden ${project.featured ? 'h-48 sm:h-64 md:h-80' : 'h-40 sm:h-48 md:h-56'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 sm:p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                    >
                      <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                      Featured Project
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 line-clamp-2 text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${darkMode ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://github.com/cib-Both"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects