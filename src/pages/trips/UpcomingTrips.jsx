import React from 'react';
import NavBar from '../homepage/NavBar';
import baliImg from '../../media/bali-sunset.png';
import japanImg from '../../media/japan.jpg';
import costaRicaImg from '../../media/costa-rica.jpeg';
import { motion } from 'framer-motion';

function UpcomingTrips({ showNavbar = true }) {
  const trips = [
    {
      title: "Bali Sunset Adventure",
      date: "June 15-25, 2024",
      price: "$2,499",
      spots: "6 spots left",
      image: baliImg
    },
    {
      title: "Japanese Culture Immersion",
      date: "July 1-12, 2024",
      price: "$3,299",
      spots: "4 spots left",
      image: japanImg
    },
    {
      title: "Costa Rica Eco Tour",
      date: "August 5-15, 2024",
      price: "$2,799",
      spots: "8 spots left",
      image: costaRicaImg
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {showNavbar && <NavBar />}

      <motion.div 
        className="relative max-w-7xl mx-auto py-9 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Trips</h2>
          <motion.div 
            className="w-24 h-1 bg-[#27C3C5] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our carefully curated trips designed to create unforgettable memories and authentic cultural experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {trips.map((trip, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="overflow-hidden"
                whileHover="hover"
              >
                <motion.img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                />
              </motion.div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">{trip.date}</p>
                  <p className="text-[#27C3C5] font-semibold">{trip.price}</p>
                  <p className="text-sm text-gray-500">{trip.spots}</p>
                </div>
                <motion.button 
                  className="w-full bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default UpcomingTrips;