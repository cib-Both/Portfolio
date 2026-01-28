import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaPaperPlane } from 'react-icons/fa'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Use environment variables from .env file
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const text = `
📬 New Contact Form Your Portfolio

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject}

💬 Message:
${formData.message}
    `

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'HTML'
          }),
        }
      )

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Phnom Penh, Cambodia' },
    { icon: FaEnvelope, label: 'Email', value: 'bothchem698@gmail.com' },
    { icon: FaTelegram, label: 'Telegram', value: '@Ciboth' }
  ]

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/cib-Both', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/chem-indraboth', label: 'LinkedIn' },
    { icon: FaTelegram, link: 'https://t.me/Ciboth', label: 'Telegram' }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
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
            GET IN TOUCH
          </motion.span>
          <motion.h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            variants={itemVariants}
          >
            Let's Work <span className="text-blue-400">Together</span>
          </motion.h2>
          <motion.p
            className={`max-w-2xl mx-auto text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            variants={itemVariants}
          >
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column: Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div 
              className={`rounded-xl p-5 sm:p-6 lg:p-8 border h-full ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
              variants={itemVariants}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {contactInfo.map(({ icon: Icon, label, value }, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{label}</p>
                      <p className={`font-medium text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`text-xs sm:text-sm font-medium mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>FOLLOW ME</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map(({ icon: Icon, link, label }, index) => (
                    <a 
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 sm:p-4 rounded-lg border hover:text-blue-400 hover:border-blue-500/30 transition-colors ${darkMode ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className={`mt-8 sm:mt-10 pt-6 sm:pt-8 border-t ${darkMode ? 'border-white/5' : 'border-gray-200'}`}>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Prefer email? Drop me a line at{' '}
                  <a href="mailto:bothchem698@gmail.com" className="text-blue-400 hover:underline">
                    bothchem698@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div 
              className={`rounded-xl p-5 sm:p-6 lg:p-8 border ${darkMode ? 'bg-gray-900/50 border-white/5' : 'bg-gray-50 border-gray-200'}`}
              variants={itemVariants}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <motion.div variants={itemVariants}>
                  <label className={`block mb-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors text-sm sm:text-base ${darkMode ? 'bg-white/5 text-white border-white/10 placeholder:text-gray-600' : 'bg-white text-gray-900 border-gray-300 placeholder:text-gray-400'}`}
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className={`block mb-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors text-sm sm:text-base ${darkMode ? 'bg-white/5 text-white border-white/10 placeholder:text-gray-600' : 'bg-white text-gray-900 border-gray-300 placeholder:text-gray-400'}`}
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className={`block mb-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors text-sm sm:text-base ${darkMode ? 'bg-white/5 text-white border-white/10 placeholder:text-gray-600' : 'bg-white text-gray-900 border-gray-300 placeholder:text-gray-400'}`}
                    placeholder="Project Inquiry"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className={`block mb-2 text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 sm:p-4 rounded-lg border focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-none text-sm sm:text-base ${darkMode ? 'bg-white/5 text-white border-white/10 placeholder:text-gray-600' : 'bg-white text-gray-900 border-gray-300 placeholder:text-gray-400'}`}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </motion.div>

                {status.message && (
                  <motion.div 
                    variants={itemVariants}
                    className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white py-3 sm:py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FaPaperPlane className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
