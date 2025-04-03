import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import { 
  MapPin, 
  BedDouble, 
  Bath, 
  Home, 
  Calendar, 
  DollarSign, 
  Check, 
  Heart, 
  Share,
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import NavBar from "../homepage/NavBar";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extended property model suggestion
  const mockAdditionalData = {
    description: "This stunning modern property offers luxurious living in a prime location. Featuring an open floor plan, high ceilings, and premium finishes throughout. The gourmet kitchen includes stainless steel appliances and a large island perfect for entertaining. The primary suite boasts a spa-like bathroom and walk-in closet.",
    yearBuilt: 2022,
    propertyType: "Single Family Home",
    parkingSpaces: 2,
    amenities: ["Swimming Pool", "Garden", "Smart Home System", "Security System", "Fireplace", "Central Air Conditioning"],
    nearbyPlaces: ["Schools", "Parks", "Shopping Centers", "Restaurants", "Public Transportation"],
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500"
    ],
    agent: {
      name: "Jane Smith",
      phone: "(555) 123-4567",
      email: "jane.smith@realestate.com",
      image: "/api/placeholder/80/80"
    }
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/properties/${id}/`);
        // Merge API data with mock additional data
        setProperty({ ...response.data, ...mockAdditionalData });
      } catch (error) {
        console.error("Error fetching property details:", error);
        // For demo purposes, use mock data if API fails
        setProperty({
          title: "Luxury Waterfront Villa",
          location: "123 Oceanview Drive, Miami, FL",
          price: "$2,850,000",
          beds: 4,
          baths: 3.5,
          sqft: "3,200",
          image: "/api/placeholder/800/500",
          ...mockAdditionalData
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-[#27C3C5] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl font-bold text-white text-center max-w-4xl px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {property.title}
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img 
            src={property.images[currentImageIndex] || property.image} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Image Navigation */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
          onClick={prevImage}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
          onClick={nextImage}
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {property.images.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Property Quick Info */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8 -mt-20 relative z-20"
          variants={fadeInUp}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={18} className="mr-2 text-[#27C3C5]" />
                <span>{property.location}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{property.price}</h2>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <BedDouble size={24} className="mr-2 text-[#27C3C5]" />
                <div>
                  <p className="text-lg font-semibold">{property.beds}</p>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Bath size={24} className="mr-2 text-[#27C3C5]" />
                <div>
                  <p className="text-lg font-semibold">{property.baths}</p>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Home size={24} className="mr-2 text-[#27C3C5]" />
                <div>
                  <p className="text-lg font-semibold">{property.sqft}</p>
                  <p className="text-sm text-gray-500">Square Feet</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar size={24} className="mr-2 text-[#27C3C5]" />
                <div>
                  <p className="text-lg font-semibold">{property.yearBuilt}</p>
                  <p className="text-sm text-gray-500">Year Built</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-gray-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart size={20} className="text-gray-600" />
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-gray-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share size={20} className="text-gray-600" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Tabs Navigation */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden"
          variants={fadeInUp}
        >
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {["overview", "features", "location", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-lg font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? "text-[#27C3C5] border-b-2 border-[#27C3C5]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">Property Overview</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {property.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Property Details</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Property Type:</span>
                        <span className="font-medium">{property.propertyType}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Year Built:</span>
                        <span className="font-medium">{property.yearBuilt}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Square Footage:</span>
                        <span className="font-medium">{property.sqft} sqft</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Bedrooms:</span>
                        <span className="font-medium">{property.beds}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Bathrooms:</span>
                        <span className="font-medium">{property.baths}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Parking:</span>
                        <span className="font-medium">{property.parkingSpaces} spaces</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Financial Details</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Listing Price:</span>
                        <span className="font-medium">{property.price}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Price per sqft:</span>
                        <span className="font-medium">
                          ${(parseFloat(property.price.replace(/[^0-9.]/g, '')) / parseFloat(property.sqft.replace(/[^0-9.]/g, ''))).toFixed(2)}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">Property Tax:</span>
                        <span className="font-medium">$12,500/year (est.)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-40 text-gray-500">HOA Fee:</span>
                        <span className="font-medium">$350/month</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Features Tab */}
            {activeTab === "features" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Property Features</h3>
                
                <h4 className="text-xl font-semibold mb-4">Amenities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {property.amenities.map((amenity, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check size={20} className="mr-2 text-[#27C3C5]" />
                      <span>{amenity}</span>
                    </motion.div>
                  ))}
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Nearby Places</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {property.nearbyPlaces.map((place, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <MapPin size={20} className="mr-2 text-[#27C3C5]" />
                      <span>{place}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Location Tab */}
            {activeTab === "location" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Property Location</h3>
                <div className="bg-gray-200 rounded-lg w-full h-96 mb-6 overflow-hidden">
                  {/* Map placeholder - would be integrated with real map API */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <span className="text-gray-500 font-medium">Interactive Map Would Appear Here</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4">Address</h4>
                  <p className="text-gray-700">{property.location}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Neighborhood</h4>
                  <p className="text-gray-700 mb-4">
                    This property is located in an upscale neighborhood known for its tree-lined streets,
                    excellent schools, and proximity to parks and recreation areas. The area offers a perfect
                    blend of suburban tranquility and urban convenience.
                  </p>
                  
                  <h5 className="font-semibold mb-2">Walk Score: 85/100</h5>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-[#27C3C5] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  
                  <h5 className="font-semibold mb-2">Transit Score: 72/100</h5>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-[#27C3C5] h-2.5 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                  
                  <h5 className="font-semibold mb-2">Bike Score: 65/100</h5>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-[#27C3C5] h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Contact Tab */}
            {activeTab === "contact" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-6">Contact Agent</h3>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <img 
                        src={property.agent.image} 
                        alt={property.agent.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{property.agent.name}</h4>
                        <p className="text-gray-500">Real Estate Agent</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <p className="flex items-center">
                        <span className="w-6 mr-2 text-[#27C3C5]">📞</span>
                        <span>{property.agent.phone}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="w-6 mr-2 text-[#27C3C5]">✉️</span>
                        <span>{property.agent.email}</span>
                      </p>
                    </div>
                    
                    <motion.button
                      className="w-full bg-[#27C3C5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1fa9ab] transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule a Tour
                    </motion.button>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C3C5]"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C3C5]"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C3C5]"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Phone</label>
                        <input 
                          type="tel" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C3C5]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Your Message</label>
                      <textarea 
                        rows="4" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27C3C5]"
                        placeholder="I'm interested in this property and would like to schedule a viewing..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="mr-2 h-4 w-4 text-[#27C3C5]"
                      />
                      <label htmlFor="consent" className="text-gray-700">
                        I consent to receive email updates about similar properties
                      </label>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-[#27C3C5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1fa9ab] transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        
        {/* Similar Properties */}
        <motion.div 
          variants={fadeInUp}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">Similar Properties</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="overflow-hidden relative">
                  <img src="/api/placeholder/400/240" alt="Similar property" className="w-full h-56 object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-gray-900 font-semibold">${(Math.random() * 1000000 + 500000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Modern {item === 1 ? 'Condo' : item === 2 ? 'Villa' : 'Apartment'}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">123 Example St, City</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <div className="flex items-center">
                      <BedDouble size={16} className="mr-1" />
                      <span className="text-sm text-gray-600">{item + 1} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span className="text-sm text-gray-600">{item} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Home size={16} className="mr-1" />
                      <span className="text-sm text-gray-600">{(item * 500 + 1000)} sqft</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-[#27C3C5] py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make This Property Your Home?</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            Don't miss out on this opportunity. Schedule a viewing today and take the first step towards owning your dream home.
          </p>
          <motion.button
            className="bg-white text-[#27C3C5] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Tour
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyDetails;