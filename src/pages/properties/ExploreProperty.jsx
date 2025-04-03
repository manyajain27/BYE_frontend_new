import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Search, MapPin, BedDouble, Bath, Home } from "lucide-react";
import NavBar from "../homepage/NavBar";

const PropertyCard = ({ title, location, price, beds, baths, sqft, image }) => {
  return (
    <motion.div className="bg-white rounded-lg overflow-hidden shadow-lg" whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <div className="overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
          <span className="text-gray-900 font-semibold">{price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <div className="flex items-center">
            <BedDouble size={16} className="mr-1" />
            <span className="text-sm text-gray-600">{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span className="text-sm text-gray-600">{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Home size={16} className="mr-1" />
            <span className="text-sm text-gray-600">{sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExploreProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/properties/")
      .then((response) => setProperties(response.data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <motion.div
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Properties</h2>
          <motion.div
            className="w-24 h-1 bg-[#27C3C5] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover your perfect home from our carefully curated selection of premium properties.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-md p-2 mb-12">
              <Search className="ml-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, property type, or features..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="bg-[#27C3C5] text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExploreProperty;
