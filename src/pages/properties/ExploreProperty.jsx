import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Search, MapPin, BedDouble, Bath, Home, Filter, Sliders, Calendar } from "lucide-react";
import NavBar from "../homepage/NavBar";
import PropertyCard from "../../components/PropertyCard";

const ExploreProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

 // Mock property data in case API fails
 const mockProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    price: "$1,200/night",
    beds: 5,
    baths: 4.5,
    sqft: "3,800",
    image: "/api/placeholder/400/300",
    type: "villa"
  },
  {
    id: 2,
    title: "Modern Mountain Cabin",
    location: "Aspen, Colorado",
    price: "$850/night",
    beds: 3,
    baths: 2,
    sqft: "2,200",
    image: "/api/placeholder/400/300",
    type: "cabin"
  },
  {
    id: 3,
    title: "Tropical Garden Bungalow",
    location: "Kauai, Hawaii",
    price: "$650/night",
    beds: 2,
    baths: 2,
    sqft: "1,500",
    image: "/api/placeholder/400/300",
    type: "bungalow"
  },
  {
    id: 4,
    title: "Contemporary Lakeside Cottage",
    location: "Lake Tahoe, Nevada",
    price: "$780/night",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    image: "/api/placeholder/400/300",
    type: "cottage"
  },
  {
    id: 5,
    title: "Historic Vineyard Estate",
    location: "Napa Valley, California",
    price: "$1,500/night",
    beds: 6,
    baths: 5,
    sqft: "4,500",
    image: "/api/placeholder/400/300",
    type: "villa"
  },
  {
    id: 6,
    title: "Secluded Forest Treehouse",
    location: "Portland, Oregon",
    price: "$550/night",
    beds: 1,
    baths: 1,
    sqft: "800",
    image: "/api/placeholder/400/300",
    type: "unique"
  }
];  

  // Gradient colors for the animated blobs
  const blobColors = [
    'radial-gradient(circle, rgba(167,255,235,0.3) 0%, rgba(0,212,255,0) 70%)',
    'radial-gradient(circle, rgba(255,203,167,0.3) 0%, rgba(255,107,0,0) 70%)',
    'radial-gradient(circle, rgba(211,167,255,0.3) 0%, rgba(170,0,255,0) 70%)'
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/properties/")
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        // Use mock data if API fails
        setProperties(mockProperties);
        setLoading(false);
      });
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Filter properties based on activeFilter
  const filteredProperties = activeFilter === "all" 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

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

      <NavBar />
      
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <motion.div 
            className="text-center max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find Your Perfect Staycation
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Luxurious villas, cozy bungalows, and unique getaways for your next escape
            </motion.p>
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-full shadow-xl p-2 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="flex items-center flex-grow px-3">
                  <Search className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Where would you like to stay?"
                    className="w-full py-2 focus:outline-none bg-transparent"
                  />
                </div>
                <div className="hidden md:flex items-center border-l border-gray-200 px-3">
                  <Calendar className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Check in - Check out"
                    className="w-full py-2 focus:outline-none bg-transparent"
                  />
                </div>
                <motion.button 
                  className="bg-[#27C3C5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1fa9ab] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Search
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <img 
          src="/api/placeholder/1600/800" 
          alt="Luxury staycation properties" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Main Content */}
      <motion.div
        className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Property Types Filters */}
        <motion.div 
          className="mb-12 backdrop-blur-sm bg-white/40 rounded-xl shadow-lg p-6 border border-white/20"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center mb-6">
            <motion.h2 
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Explore Staycations
            </motion.h2>
            <motion.button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-white/70 rounded-lg shadow-sm hover:bg-white transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sliders size={18} className="mr-2 text-[#27C3C5]" />
              <span>Filters</span>
            </motion.button>
          </div>
          
          {/* Property Type Filter Buttons */}
          <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
            {['all', 'villa', 'bungalow', 'cabin', 'cottage', 'unique'].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full whitespace-nowrap shadow-sm transition-colors ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
                    : "bg-white/70 text-gray-700 hover:bg-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                {filter === 'all' ? ' Properties' : 's'}
              </motion.button>
            ))}
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <motion.div 
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mt-4 border border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Price Range (per night)</h3>
                  <div className="flex items-center space-x-4">
                    <input 
                      type="range" 
                      min="0" 
                      max="2000" 
                      className="w-full accent-[#27C3C5]"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">$0</span>
                    <span className="text-sm text-gray-600">$2,000+</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Bedrooms</h3>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, '5+'].map((num) => (
                      <motion.button
                        key={num}
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#27C3C5] hover:text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {num}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['Pool', 'Hot Tub', 'WiFi', 'Kitchen', 'Ocean View', 'Pet Friendly'].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={amenity} 
                          className="mr-2 accent-[#27C3C5]"
                        />
                        <label htmlFor={amenity} className="text-sm">{amenity}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <motion.button 
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Filters
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-t-[#27C3C5] border-gray-200 rounded-full animate-spin"></div>
          </div>
        ) : (
          /* Property Grid */
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={containerVariants}
          >
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <motion.div key={property.id} variants={itemVariants}>
                  <PropertyCard 
                    id={property.id}
                    title={property.title}
                    location={property.location}
                    price={property.price}
                    beds={property.beds}
                    baths={property.baths}
                    sqft={property.sqft}
                    image={property.image}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 py-20 text-center backdrop-blur-sm bg-white/40 rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-medium text-gray-600">
                  No properties found matching your criteria
                </h3>
                <p className="text-gray-500 mt-2">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-gradient-to-r from-cyan-600 to-emerald-600 py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let us help you find the perfect staycation property. Our experts will curate a selection tailored to your needs.
          </motion.p>
          <motion.button
            className="bg-white text-[#27C3C5] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Concierge
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreProperty;