import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import NavBar from '../homepage/NavBar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function FAQs({ showNavbar = true }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is food included in the trip cost?",
      answer: "We do not provide food as part of the trip. However, our team can guide you to find amazing local options, and we’re happy to suggest Jain-friendly restaurants upon request, as the founders themselves follow Jain dietary preferences."
    },
    {
      question: "Can I customize my trip?",
      answer: "Absolutely! While our group trips are pre-planned for maximum fun and adventure, we can work with you to customize itineraries for private or exclusive group bookings."
    },
    {
      question: "What is the age group for your trips?",
      answer: "Our trips are designed for 18-35 year olds—young travelers looking for adventure, fun, and great company."
    },
    {
      question: "What is your cancellation policy?",
      answer: "• Cancellation 60 days prior: 50% refund\n• Cancellation 15 days prior: 15% refund\n• Cancellation less than 15 days prior: No refund"
    },
    {
      question: "Are these trips suitable for solo travelers?",
      answer: "Definitely! Our trips are perfect for solo adventure junkies. You’ll meet like-minded travelers and create lasting memories with new friends."
    },
    {
      question: "What kind of activities can I expect?",
      answer: "Our itineraries include a mix of water sports, cultural experiences, local tours, and epic parties! Each trip is curated to balance fun, exploration, and relaxation."
    },
    {
      question: "Are international trips included?",
      answer: "Yes, we offer both domestic and international group trips. Check our upcoming destinations to see what’s next on our travel calendar."
    },
    {
      question: "How big are the groups?",
      answer: "Our groups typically consist of 20-25 travelers to ensure a fun yet intimate experience where everyone can connect."
    },
    {
      question: "What’s included in the trip cost?",
      answer: "Trip costs typically include: \n• Accommodation\n• Activities and experiences\n• Local transportation\n• Tour guidance (Flight costs and meals are generally not included but can be arranged upon request.)"
    },
    {
      question: "How do I book a trip?",
      answer: "Booking is simple! Head over to our Book Now page, select your trip, and follow the steps. Or, feel free to contact us for assistance."
    },
    {
      question: "Is travel insurance provided?",
      answer: "Travel insurance is not included in the trip cost, but we strongly recommend it for all our travelers."
    },
    {
      question: "Do I need prior experience for activities?",
      answer: "No prior experience is required. All our activities are beginner-friendly, and we ensure all safety precautions are in place."
    },
    {
      question: "Can couples join the trips?",
      answer: "Of course! While our trips are solo-traveler friendly, they’re also perfect for couples looking to explore together."
    }
  ];

  // Gradient colors for the animated blobs
  const blobColors = [
    'radial-gradient(circle, rgba(167,255,235,0.3) 0%, rgba(0,212,255,0) 70%)',
    'radial-gradient(circle, rgba(255,203,167,0.3) 0%, rgba(255,107,0,0) 70%)',
    'radial-gradient(circle, rgba(211,167,255,0.3) 0%, rgba(170,0,255,0) 70%)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
          />
          <motion.p
            className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Everything you need to know about our adventures. Can't find what you're looking for? Contact us directly.
          </motion.p>
        </motion.div>

        {/* FAQ section */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="backdrop-blur-sm bg-white/40 rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.button
                className="cursor-pointer w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ 
                  backgroundColor: 'rgba(255,255,255,0.6)',
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-cyan-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-cyan-600" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Still have questions?</h3>
          <Link to="/contact">
            <motion.button
              className="cursor-pointer px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQs;