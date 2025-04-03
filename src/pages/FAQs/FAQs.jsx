import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import NavBar from '../homepage/NavBar';
// import bgImage from '../../media/teal-bg.jpg';  // Import the background image
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
        {showNavbar && <NavBar />}

        <div className="relative max-w-3xl mx-auto py-9 px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <motion.div 
                    className="w-24 h-1 bg-[#27C3C5] mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </motion.div>

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
                        className="border-b border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.1 }}
                    >
                        <motion.button
                            className="w-full py-6 flex justify-between items-center text-left"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-[#27C3C5]" />
                                ) : (
                                    <Plus className="h-5 w-5 text-[#27C3C5]" />
                                )}
                            </motion.div>
                        </motion.button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="pb-6">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
);
}

export default FAQs;
