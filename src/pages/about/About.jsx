import React from 'react';
import NavBar from '../homepage/NavBar';
import { motion } from 'framer-motion';
import img1 from '../../media/pic-1.jpg';
import img2 from '../../media/pic-2.jpg';
import img3 from '../../media/pic-3.jpg';
import img4 from '../../media/pic-4.jpg';

function About({ showNavbar = true }) {
    const images = [img1, img2, img3, img4]; // Array of image imports

    return (
        <div className="min-h-screen md:h-auto bg-gray-200 overflow-hidden">
            {showNavbar && <NavBar />}

            <div className="max-w-7xl mx-auto py-9 px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
                    <motion.div 
                        className="w-24 h-1 bg-[#27C3C5] mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-900">Crafting Unforgettable Adventures</h3>
                        <p className="text-gray-600">
                            At Brew Your Experiences, we believe travel should be more than just visiting places – it should be about creating
                            lasting memories and meaningful connections. We curate unique travel experiences that blend luxury with authenticity,
                            ensuring every journey tells a story worth sharing.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Personalized Itineraries",
                                    desc: "Tailored travel experiences designed around your interests and preferences."
                                },
                                {
                                    title: "Local Expertise",
                                    desc: "Connect with local guides and discover hidden gems off the beaten path."
                                },
                                {
                                    title: "Sustainable Travel",
                                    desc: "Eco-friendly adventures that respect and preserve local communities and environments."
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#27C3C5]/10 flex items-center justify-center">
                                        <span className="text-[#27C3C5] text-xl">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                className={`h-64 bg-gray-300 rounded-lg ${index % 2 === 0 ? 'mt-8' : ''}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img 
                                    src={img}
                                    alt={`pic-${index}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
