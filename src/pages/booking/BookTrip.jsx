import React, { useEffect, useState } from 'react';
import { Mail, Calendar, Users, Clock, Camera, Coffee, Utensils, Heart, ArrowRight, ArrowLeft, Check, X, ChevronDown, ChevronUp, Plane, Hotel, MapPin, Utensils as Food, Wifi, Car } from 'lucide-react';
import NavBar from '../homepage/NavBar';
import axios from 'axios';
import { motion } from 'framer-motion';

const BookTrip = () => {
  const [step, setStep] = useState(1);
  const [selectedTripDetails, setSelectedTripDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    selectedTrip: null,
    extras: [],
    notes: ''
  });

  useEffect(() => {
    if ([2, 3, 4].includes(step)) {
      window.scrollTo({ top: 320, behavior: 'smooth' });
    }
  }, [step]);

  const trips = [
    {
      id: 1,
      title: "Bali Sunset Adventure",
      date: "June 15-25, 2024",
      price: "₹2,49,999",
      duration: "10 days",
      highlight: "Most Popular",
      description: "Experience the magic of Bali with this carefully curated adventure package.",
      included: [
        { icon: Plane, text: "Return flights from major Indian cities" },
        { icon: Hotel, text: "4-star beach resort accommodation" },
        { icon: Food, text: "Daily breakfast and 4 special dinners" },
        { icon: Car, text: "Airport transfers and tour transportation" },
        { icon: MapPin, text: "Guided tours to temples and cultural sites" },
        { icon: Wifi, text: "Hotel WiFi and local SIM card" }
      ],
      notIncluded: [
        "Travel insurance",
        "Optional activities",
        "Personal expenses",
        "Visa fees",
        "Lunch and other meals not specified"
      ],
      highlights: [
        "Sunset at Tanah Lot Temple",
        "Ubud Rice Terraces",
        "Traditional Dance Performance",
        "Mount Batur Sunrise Trek",
        "Nusa Penida Island Tour"
      ]
    },
    {
      id: 2,
      title: "Japanese Culture Immersion",
      date: "July 1-12, 2024",
      price: "₹3,29,999",
      duration: "12 days",
      highlight: "Best Value",
      description: "Dive deep into Japanese culture with this comprehensive tour package.",
      included: [
        { icon: Plane, text: "Return flights with premium carrier" },
        { icon: Hotel, text: "Mix of modern hotels and traditional ryokans" },
        { icon: Food, text: "Daily breakfast and 6 authentic dinners" },
        { icon: Car, text: "Bullet train passes and local transport" },
        { icon: MapPin, text: "Professional guides and entrance fees" },
        { icon: Wifi, text: "Portable WiFi device" }
      ],
      notIncluded: [
        "Travel insurance",
        "Optional activities",
        "Personal expenses",
        "Some local transport fares",
        "Meals not mentioned in itinerary"
      ],
      highlights: [
        "Tokyo Sky Tree Visit",
        "Mount Fuji Viewing",
        "Kyoto Temple Tour",
        "Tea Ceremony Experience",
        "Osaka Food Tour"
      ]
    },
    {
      id: 3,
      title: "Costa Rica Eco Tour",
      date: "August 5-15, 2024",
      price: "₹2,79,999",
      duration: "11 days",
      highlight: "Eco-friendly",
      description: "Explore the natural wonders of Costa Rica in this eco-conscious adventure.",
      included: [
        { icon: Plane, text: "Return flights with eco-conscious routing" },
        { icon: Hotel, text: "Eco-lodge accommodations" },
        { icon: Food, text: "All meals with organic local produce" },
        { icon: Car, text: "Hybrid vehicle transfers" },
        { icon: MapPin, text: "National park fees and guided tours" },
        { icon: Wifi, text: "Limited WiFi at lodges" }
      ],
      notIncluded: [
        "Travel insurance",
        "Optional adventures",
        "Personal expenses",
        "Carbon offset contribution (optional)",
        "Special equipment rental"
      ],
      highlights: [
        "Arenal Volcano Hike",
        "Manuel Antonio National Park",
        "Sloth Sanctuary Visit",
        "Rainforest Canopy Tour",
        "Tortuguero Canals"
      ]
    }
  ];

  const tripExtras = [
    { id: 1, icon: Camera, title: "Photography Package", price: "₹4,999", description: "Professional photoshoots at key locations" },
    { id: 2, icon: Coffee, title: "Cultural Workshops", price: "₹7,999", description: "Traditional art and craft sessions" },
    { id: 3, icon: Utensils, title: "Culinary Experiences", price: "₹6,999", description: "Local cooking classes and food tours" },
  ];

  // Gradient colors for the animated blobs
  const blobColors = [
    'radial-gradient(circle, rgba(167,255,235,0.3) 0%, rgba(0,212,255,0) 70%)',
    'radial-gradient(circle, rgba(255,203,167,0.3) 0%, rgba(255,107,0,0) 70%)',
    'radial-gradient(circle, rgba(211,167,255,0.3) 0%, rgba(170,0,255,0) 70%)'
  ];

  const TripDetailsModal = ({ trip, onClose }) => {
    if (!trip) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">{trip.title}</h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">What's Included</h5>
                <ul className="space-y-3">
                  {trip.included.map((item, index) => (
                    <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                      <item.icon className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-4">What's Not Included</h5>
                <ul className="space-y-3">
                  {trip.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                      <X className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-gray-900 mb-4">Trip Highlights</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {trip.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-gray-600 text-sm">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t p-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTripSelect = (tripId) => {
    setFormData({ ...formData, selectedTrip: tripId });
  };

  const handleExtraToggle = (extraId) => {
    const newExtras = formData.extras.includes(extraId)
      ? formData.extras.filter(id => id !== extraId)
      : [...formData.extras, extraId];
    setFormData({ ...formData, extras: newExtras });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('https://brew08.pythonanywhere.com/api/booking/', formData);
      
      if (response.status === 200) {
        setStep(4); // Show success message
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('There was an error processing your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch(step) {
      case 1:
        return formData.name && formData.email && formData.phone && formData.travelers;
      case 2:
        return formData.selectedTrip !== null;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {['Personal Info', 'Select Trip', 'Customize'].map((label, index) => (
          <div key={label} className="flex flex-col items-center w-1/3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step > index + 1 ? 'bg-green-500 text-white' :
              step === index + 1 ? 'bg-[#27C3C5] text-white' :
              'bg-gray-200 text-gray-600'
            }`}>
              {step > index + 1 ? <Check className="w-5 h-5" /> : index + 1}
            </div>
            <span className="text-sm mt-1 text-gray-600">{label}</span>
          </div>
        ))}
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div 
          className="absolute h-full bg-[#27C3C5] rounded-full transition-all duration-300"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );

   const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleInputChange}
            min="1"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Number of travelers"
            required
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="grid gap-4">
        {trips.map((trip) => (
          <div key={trip.id} className="relative">
            <label className="relative block cursor-pointer transform transition-transform hover:scale-[1.01]">
              <input
                type="radio"
                name="trip"
                className="sr-only"
                checked={formData.selectedTrip === trip.id}
                onChange={() => handleTripSelect(trip.id)}
              />
              <div className={`p-4 sm:p-6 rounded-lg border-2 ${
                formData.selectedTrip === trip.id
                  ? 'border-[#27C3C5] bg-[#27C3C5]/5'
                  : 'border-gray-200 hover:border-[#27C3C5]'
              }`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h4 className="font-semibold text-base sm:text-lg text-gray-900">{trip.title}</h4>
                      {trip.highlight && (
                        <span className="inline-block px-2 py-1 bg-[#27C3C5]/10 text-[#27C3C5] text-xs rounded-full w-fit">
                          {trip.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">{trip.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {trip.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {trip.duration}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl font-semibold text-[#27C3C5] mt-2 sm:mt-0">
                    {trip.price}
                  </span>
                </div>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTripDetails(trip);
                  }}
                  className="mt-3 sm:mt-4 text-[#27C3C5] hover:text-[#1fa9ab] flex items-center text-sm font-medium"
                >
                  <ChevronDown className="w-4 h-4 mr-1" />
                  View Details
                </button>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tripExtras.map((extra) => (
          <label 
            key={extra.id}
            className="relative block cursor-pointer transform transition-transform hover:scale-[1.02]"
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.extras.includes(extra.id)}
              onChange={() => handleExtraToggle(extra.id)}
            />
            <div className={`p-6 rounded-lg border-2 ${
              formData.extras.includes(extra.id)
                ? 'border-[#27C3C5] bg-[#27C3C5]/5'
                : 'border-gray-200 hover:border-[#27C3C5]'
            }`}>
              <extra.icon className="w-6 h-6 text-[#27C3C5] mb-3" />
              <h4 className="font-medium text-gray-900">{extra.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{extra.description}</p>
              <p className="text-[#27C3C5] font-medium mt-2">{extra.price}</p>
            </div>
          </label>
        ))}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#27C3C5]"
          placeholder="Any special requirements or questions?"
        />
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-8 px-4 sm:px-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
        Booking Request Received!
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4">
        Thank you for choosing to travel with us. We'll reach out to you on both
        WhatsApp and email within 24 hours to discuss your trip details.
      </p>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 text-sm text-gray-600">
        <div className="flex items-center justify-center mb-2 sm:mb-0">
          <Mail className="w-4 h-4 mr-1" />
          {formData.email}
        </div>
        <div className="flex items-center justify-center">
          <Users className="w-4 h-4 mr-1" />
          {formData.travelers} travelers
        </div>
      </div>
    </div>
  );

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

      <div className="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book Your Adventure
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
            Let us help you plan your perfect getaway.
          </motion.p>
        </motion.div>

        <div className="backdrop-blur-sm bg-white/40 rounded-2xl shadow-xl p-8 border border-white/20">
          {step < 4 && renderProgressBar()}
          
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderSuccess()}

            {step < 4 && (
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-900"
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </motion.button>
                )}
                <motion.button
                  type="button"
                  onClick={() => step === 3 ? handleSubmit(new Event('submit')) : setStep(step + 1)}
                  disabled={!isStepValid() || (step === 3 && isSubmitting)}
                  className={`ml-auto flex items-center px-6 py-3 rounded-full font-semibold shadow-lg ${
                    isStepValid() && !isSubmitting
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-xl'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={isStepValid() && !isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={isStepValid() && !isSubmitting ? { scale: 0.98 } : {}}
                >
                  {step === 3 ? (
                    <>
                      {isSubmitting ? (
                        <>
                          Submitting...
                          <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </>
                      ) : (
                        <>
                          Book Now
                          <Heart className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      Next Step
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </form>
        </div>
      </div>

      <TripDetailsModal 
        trip={selectedTripDetails} 
        onClose={() => setSelectedTripDetails(null)} 
      />
    </div>
  );
};

export default BookTrip;