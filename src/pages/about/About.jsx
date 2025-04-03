import React from 'react';
import NavBar from '../homepage/NavBar';
import { motion } from 'framer-motion';
import img1 from '../../media/pic-1.jpg';
import img2 from '../../media/pic-2.jpg';
import img3 from '../../media/pic-3.jpg';
import img4 from '../../media/pic-4.jpg';
import { Link } from 'react-router-dom';

function About({ showNavbar = true, showContact = true }) {
    const images = [img1, img2, img3, img4];
    
    // Gradient colors for the animated blobs
    const blobColors = [
        'radial-gradient(circle, rgba(167,255,235,0.3) 0%, rgba(0,212,255,0) 70%)',
        'radial-gradient(circle, rgba(255,203,167,0.3) 0%, rgba(255,107,0,0) 70%)',
        'radial-gradient(circle, rgba(211,167,255,0.3) 0%, rgba(170,0,255,0) 70%)'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 overflow-hidden relative">
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

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero section */}
                <motion.div 
                    className="text-center mb-20"
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
                        Crafting Extraordinary Journeys
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
                        Where every trip becomes a masterpiece of memories, carefully designed around your dreams.
                    </motion.p>
                </motion.div>

                {/* Content section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div 
                        className="space-y-8 backdrop-blur-md bg-white/40 p-10 rounded-2xl shadow-xl border border-white/20 relative overflow-hidden"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Decorative element */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-xl"></div>
                        
                        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600">
                            Our Philosophy
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Brew Your Experiences, we don't just plan trips—we design transformative adventures that 
                            resonate with your soul. Our approach blends meticulous planning with spontaneous discovery, 
                            creating journeys that feel both perfectly orchestrated and wonderfully organic.
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Tailored Experiences",
                                    desc: "Every itinerary is a custom masterpiece, reflecting your unique travel style and aspirations.",
                                    icon: "✧"
                                },
                                {
                                    title: "Local Immersion",
                                    desc: "We connect you with authentic experiences that reveal the true heartbeat of each destination.",
                                    icon: "♡"
                                },
                                {
                                    title: "Sustainable Luxury",
                                    desc: "Enjoy premium experiences that honor and support local communities and ecosystems.",
                                    icon: "☘"
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/30 transition-all"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.1, delay: index * 0.1 }}
                                    whileHover={{ 
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center text-2xl text-cyan-600 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-5 relative">
                        {/* Decorative element */}
                        <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-emerald-400/10 blur-xl z-0"></div>
                        
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                className={`relative h-80 rounded-2xl shadow-xl overflow-hidden z-10 ${
                                    index === 0 ? 'rotate-[-3deg]' : 
                                    index === 1 ? 'rotate-[2deg]' : 
                                    index === 2 ? 'rotate-[4deg]' : 'rotate-[-2deg]'
                                }`}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.15,
                                    ease: "backOut"
                                }}
                                whileHover={{ 
                                    zIndex: 20,
                                    scale: 1.05,
                                    rotate: 0,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <img 
                                    src={img}
                                    alt={`Travel experience ${index}`}
                                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                                />
                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-6">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        className="text-white"
                                    >
                                        <h4 className="font-medium text-lg">Adventure #{index + 1}</h4>
                                        <p className="text-sm opacity-90">Discover the extraordinary</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats section */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-8 mb-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {[
                        { number: "500+", label: "Curated Experiences" },
                        { number: "98%", label: "Client Satisfaction" },
                        { number: "40+", label: "Destinations Worldwide" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/30 text-center"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-emerald-600 mb-3">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 text-lg">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {showContact && (
                        <>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin Your Journey?</h3>
                            <Link to={"/contact"}>
                                <motion.button
                                    className="cursor-pointer px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Craft My Adventure
                                </motion.button>
                            </Link>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default About;