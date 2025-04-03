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

  return (
    <div className="min-h-screen bg-white relative overflow-hidden ">
      {showNavbar && <NavBar />}
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-200"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-9 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <motion.div 
            className="w-24 h-1 bg-[#27C3C5] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            className="bg-white rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status.message && (
              <div className={`mb-4 p-3 rounded ${
                status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
                { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
                { label: "Phone Number (WhatsApp)", name: "phone", type: "tel", placeholder: "(+91)" }
              ].map((field, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27C3C5] focus:ring-[#27C3C5]"
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
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Write down your message..." 
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#27C3C5] focus:ring-[#27C3C5]"
                  required
                />
              </motion.div>
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#27C3C5] text-white px-6 py-3 rounded-full font-semibold transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1fa9ab]'
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-[#27C3C5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email Us</h4>
                <p className="text-gray-600">brewyourexperiences@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-[#27C3C5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Call Us</h4>
                <p className="text-gray-600">(+91) 9920302249 / 9820201485</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                <InstagramIcon className="h-6 w-6 text-[#27C3C5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Follow us</h4>
                <ul>
                  <li style={{ color: '#27C3C5' }}>
                    <a target='_blank' href="https://www.instagram.com/brewyourexperiences/">@brewyourexperiences</a>
                  </li>
                  <li style={{ color: '#27C3C5' }}>
                    <a target='_blank' href="https://www.instagram.com/bbuzzz08/">@bbuzzz08</a>
                  </li>
                  <li style={{ color: '#27C3C5' }}>
                    <a target='_blank' href="https://www.instagram.com/theindianvacation/">@theindianvacation</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-[#27C3C5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Visit Us</h4>
                <p className="text-gray-600">--<br />--</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
