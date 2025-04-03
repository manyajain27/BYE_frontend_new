import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, Loader, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const NewsletterForm = ({ email, setEmail, status, message, onSubmit, className = "" }) => (
  <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your email address"
      className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#27C3C5] transition-colors duration-200"
      disabled={status === 'loading'}
      required
    />
    <motion.button 
      type="submit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors flex items-center justify-center"
      disabled={status === 'loading'}
    >
      {status === 'loading' ? (
        <Loader className="animate-spin h-5 w-5" />
      ) : (
        'Subscribe to our Newsletter'
      )}
    </motion.button>
    {message && (
      <div className={`flex items-center space-x-2 ${
        status === 'error' 
          ? message.includes('already subscribed') 
            ? 'text-yellow-400'
            : 'text-red-400'
          : 'text-green-400'
      }`}>
        {status === 'error' ? (
          message.includes('already subscribed') ? (
            <AlertCircle className="h-4 w-4" />
          ) : (
            <XCircle className="h-4 w-4" />
          )
        ) : (
          <CheckCircle className="h-4 w-4" />
        )}
        <p className="text-sm">{message}</p>
      </div>
    )}
  </form>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconHover = {
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  // Social media links data
  const socialLinks = [
    {
      icon: Facebook,
      url: "/",
      target: "_blank"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/brewyourexperiences/",
      target: "_blank"
    },
    {
      icon: Twitter,
      url: "/",
      target: "_blank"
    }
  ];

  // Quick links data
  const quickLinks = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Upcoming Trips",
      url: "/trips/upcoming"
    },
    {
      name: "About Us",
      url: "/about"
    },
    {
      name: "Blog",
      url: "/blog"
    },
    {
      name: "Contact",
      url: "/contact"
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('http://localhost:8000/api/subscribe/', {
        email: email
      });
      setStatus('success');
      setMessage('Successfully subscribed!');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      
      if (error.response?.data?.error === 'This email is already subscribed.') {
        setMessage('You\'re already part of our newsletter family!');
      } else {
        setMessage(error.response?.data?.error || 'Subscription failed. Please try again.');
      }
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="md:hidden space-y-8">
          <motion.div 
            className="text-center space-y-4"
            variants={fadeIn}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">BREW</span>
              <span className="text-xs">YOUR EXPERIENCES</span>
            </div>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.target}
                  className="hover:text-[#27C3C5] transition-colors"
                  whileHover="hover"
                  variants={iconHover}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="space-y-3"
            variants={fadeIn}
          >
            <h3 className="text-base font-semibold text-white text-center pb-2">Stay Updated</h3>
            <NewsletterForm 
              email={email}
              setEmail={setEmail}
              status={status}
              message={message}
              onSubmit={handleSubscribe}
              className="space-y-3"
            />
          </motion.div>

          <motion.div 
            className="text-sm space-y-2"
            variants={fadeIn}
          >
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-[#27C3C5]" />
              <span>brewyourexperiences@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-[#27C3C5]" />
              <span>+91 9920302249/ 9820201485</span>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">BREW</span>
              <span className="text-sm">YOUR EXPERIENCES</span>
            </div>
            <p className="text-sm">
              Crafting unforgettable travel experiences that blend luxury, adventure, and authentic local culture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.target}
                  className="hover:text-[#27C3C5] transition-colors"
                  whileHover="hover"
                  variants={iconHover}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={link.url} className="hover:text-[#27C3C5] transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#27C3C5]" />
                <span>Charni Road<br />Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#27C3C5]" />
                <span>+91 9920302249/ 9820201485</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#27C3C5]" />
                <span>brewyourexperiences@gmail.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <NewsletterForm 
              email={email}
              setEmail={setEmail}
              status={status}
              message={message}
              onSubmit={handleSubscribe}
            />
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs md:text-sm">
            <div className="flex gap-3">
              © {currentYear} Brew Your Experiences . 
              <div>All rights reserved.</div>
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <motion.a 
                whileHover={{ x: 2 }}
                href="/privacy" 
                className="hover:text-[#27C3C5] transition-colors"
              >
                Privacy
              </motion.a>
              <motion.a 
                whileHover={{ x: 2 }}
                href="/terms" 
                className="hover:text-[#27C3C5] transition-colors"
              >
                Terms
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;