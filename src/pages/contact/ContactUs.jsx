import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram as InstagramIcon } from 'lucide-react';
import NavBar from '../homepage/NavBar';
import { motion } from 'framer-motion';

function ContactUs({ showNavbar = true }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://brew08.pythonanywhere.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gradient colors for the animated blobs
  const blobColors = [
    'radial-gradient(circle, rgba(167,255,235,0.3) 0%, rgba(0,212,255,0) 70%)',
    'radial-gradient(circle, rgba(255,203,167,0.3) 0%, rgba(255,107,0,0) 70%)',
    'radial-gradient(circle, rgba(211,167,255,0.3) 0%, rgba(170,0,255,0) 70%)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 relative overflow-hidden flex flex-col">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Floating gradient blobs */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-[300px] h-[300px] pointer-events-none"
            style={{
              background: blobColors[i],
              top: `${20 + i * 20}%`,
              left: `${i * 30}%`
            }}
            animate={{
              x: [0, i % 2 === 0 ? 100 : -100, 0],
              y: [0, i % 2 === 0 ? 50 : -50, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-cyan-200/30 pointer-events-none"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {showNavbar && <NavBar />}

      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 z-10">
          {/* Hero section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Connect
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
            />
            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Have questions or ready to book your next adventure? Reach out to us—we'd love to hear from you!
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Contact Form - Centered properly */}
            <motion.div 
              className="w-full lg:w-1/2 backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {status.message && (
                <motion.div 
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Your Name", name: "name", type: "text", placeholder: "Enter your full name" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "your.email@example.com" },
                  { label: "Phone (WhatsApp)", name: "phone", type: "tel", placeholder: "+91 1234567890" }
                ].map((field, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="mt-1 p-3 block w-full rounded-lg shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-white/70"
                      required={field.name !== 'phone'}
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Tell us about your travel dreams..." 
                    className="mt-1 p-3 block w-full rounded-lg shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-white/70"
                    required
                  />
                </motion.div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information - Centered properly */}
            <div className="w-full lg:w-1/2 space-y-6">
              <motion.div 
                className="backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl p-6 border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center text-cyan-600 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h4>
                    <a href="mailto:brewyourexperiences@gmail.com" className="text-cyan-600 hover:text-cyan-700 transition-colors text-sm">
                      brewyourexperiences@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl p-6 border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center text-cyan-600 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h4>
                    <div className="space-y-1">
                      <a href="tel:+919920302249" className="block text-cyan-600 hover:text-cyan-700 transition-colors text-sm">(+91) 9920302249</a>
                      <a href="tel:+919820201485" className="block text-cyan-600 hover:text-cyan-700 transition-colors text-sm">(+91) 9820201485</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl p-6 border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center text-cyan-600 shadow-sm">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h4>
                    <div className="space-y-1">
                      {[
                        { handle: "@brewyourexperiences", url: "https://www.instagram.com/brewyourexperiences/" },
                        { handle: "@bbuzzz08", url: "https://www.instagram.com/bbuzzz08/" },
                        { handle: "@theindianvacation", url: "https://www.instagram.com/theindianvacation/" }
                      ].map((account, i) => (
                        <motion.a
                          key={i}
                          href={account.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-cyan-600 hover:text-cyan-700 transition-colors text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          {account.handle}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl p-6 border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center text-cyan-600 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h4>
                    <p className="text-gray-600 text-sm">--<br />--</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;