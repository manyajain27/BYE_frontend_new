import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, Home, Heart } from "lucide-react";

const PropertyCard = ({ id, title, location, price, beds, baths, sqft, image }) => {
  // Default placeholder image if none provided
  const propertyImage = image || "/api/placeholder/400/300";

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/properties/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={propertyImage} 
            alt={title} 
            className="w-full h-64 object-cover transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-md">
            <span className="text-gray-900 font-semibold">{price}</span>
          </div>
          <button className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-pink-50 transition-colors">
            <Heart size={20} className="text-gray-600 hover:text-pink-500" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex items-center text-white/90">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center">
            <BedDouble size={20} className="mr-2 text-[#27C3C5]" />
            <span className="text-gray-600">{beds} {beds === 1 ? 'bed' : 'beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={20} className="mr-2 text-[#27C3C5]" />
            <span className="text-gray-600">{baths} {baths === 1 ? 'bath' : 'baths'}</span>
          </div>
          <div className="flex items-center">
            <Home size={20} className="mr-2 text-[#27C3C5]" />
            <span className="text-gray-600">{sqft} sqft</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Link to={`/properties/${id}`}>
            <motion.button
              className="w-full bg-[#27C3C5] text-white py-3 rounded-lg font-medium hover:bg-[#1fa9ab] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;