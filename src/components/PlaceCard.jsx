import React from 'react';
import { motion } from 'framer-motion';

const PlaceCard = ({ title, date, price, spots, image }) => {
  // Animation variants
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
    <motion.div 
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
          src={image} 
          alt={title} 
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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-gray-600">{date}</p>
          <p className="text-[#27C3C5] font-semibold">{price}</p>
          <p className="text-sm text-gray-500">{spots}</p>
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
  );
};

export default PlaceCard;