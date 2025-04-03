import React from 'react';
import NavBar from '../homepage/NavBar';
import baliImg from '../../media/bali-sunset.png';
import japanImg from '../../media/japan.jpg';
import costaRicaImg from '../../media/costa-rica.jpeg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function UpcomingTrips({ showNavbar = true, showContact = true }) {
  const trips = [
    {
      title: "Bali Sunset Adventure",
      date: "June 15-25, 2024",
      price: "$2,499",
      spots: "6 spots left",
      image: baliImg,
      highlights: ["Beachfront villas", "Sunset yoga", "Waterfall tours", "Local cuisine"]
    },
    {
      title: "Japanese Culture Immersion",
      date: "July 1-12, 2024",
      price: "$3,299",
      spots: "4 spots left",
      image: japanImg,
      highlights: ["Tea ceremonies", "Tokyo nightlife", "Kyoto temples", "Onsen experience"]
    },
    {
      title: "Costa Rica Eco Tour",
      date: "August 5-15, 2024",
      price: "$2,799",
      spots: "8 spots left",
      image: costaRicaImg,
      highlights: ["Rainforest hikes", "Wildlife spotting", "Beach relaxation", "Coffee plantation"]
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

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
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
            Your Next Adventure Awaits
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
            Join our carefully curated trips designed to create unforgettable memories and authentic cultural experiences.
          </motion.p>
        </motion.div>

        {/* Trips grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {trips.map((trip, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
              }}
            >
              <div className="relative overflow-hidden h-64">
                <motion.img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{trip.title}</h3>
                    <p className="text-white/90">{trip.date}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {trip.spots}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">{trip.price}</span>
                  <motion.button 
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Trip Highlights</h4>
                  <ul className="space-y-2">
                    {trip.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                      >
                        <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Group size: 12-18</span>
                </div>
              </div>
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
          {showContact && (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready for your next adventure?</h3>
              <Link to={"/contact"}>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Travel Experts
                </motion.button>
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default UpcomingTrips;