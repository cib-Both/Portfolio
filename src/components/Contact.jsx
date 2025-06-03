import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
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
  };

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
  };

  const formItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gray-600 dark:bg-gray-400 mx-auto transition-colors duration-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Contact Info */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 className="text-2xl font-semibold mb-6" variants={itemVariants}>
              Contact Information
            </motion.h3>
            <motion.p className="text-gray-600 dark:text-gray-300 mb-8" variants={itemVariants}>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </motion.p>

            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                { icon: FaMapMarkerAlt, label: 'Location', value: 'San Francisco, California' },
                { icon: FaPhone, label: 'Phone', value: '+1 234 567 890' },
                { icon: FaEnvelope, label: 'Email', value: 'john@example.com' }
              ].map(({ icon: Icon, label, value }, index) => (
                <motion.div key={index} className="flex items-start" variants={itemVariants}>
                  <div className="text-gray-600 dark:text-gray-400 mt-1 mr-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{label}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="mt-8" variants={itemVariants}>
              <h4 className="font-medium text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, link: 'https://github.com' },
                  { icon: FaLinkedin, link: 'https://linkedin.com' },
                  { icon: FaFacebook, link: 'https://twitter.com' }
                ].map(({ icon: Icon, link }, index) => (
                  <motion.a 
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 className="text-2xl font-semibold mb-6" variants={itemVariants}>
              Send a Message
            </motion.h3>
            <form className="space-y-6">
              <motion.div variants={formItemVariants}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400"
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400"
                  placeholder="you@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={formItemVariants}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea 
                  rows="5"
                  className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-400"
                  placeholder="Your message..."
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={formItemVariants}>
                <button 
                  type="submit"
                  className="px-6 py-3 font-medium bg-gray-800 hover:bg-gray-950 dark:bg-gray-300 dark:hover:bg-white text-white dark:text-black rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
