import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isTripsOpen, setIsTripsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-[1000]
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 w-full max-w-sm h-full bg-gray-900/90 backdrop-blur-md transform transition-transform duration-500 ease-out z-[1100]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Back Button and Brand Section */}
          <div className="relative p-8 border-b border-gray-800">
            <button
              onClick={onClose}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">BREW</span>
              <span className="text-sm text-gray-400">YOUR EXPERIENCES</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                onClick={onClose}
              >
                <span className="text-lg">Home</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Trips Dropdown in Mobile Menu */}
              <div className="relative">
                <button
                  className="w-full flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                  onClick={() => setIsTripsOpen(!isTripsOpen)}
                >
                  <span className="text-lg">Trips</span>
                  {isTripsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>

                {isTripsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      to="/trips/previous"
                      className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                      onClick={onClose}
                    >
                      <span className="text-lg">Previous Trips</span>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link
                      to="/trips/upcoming"
                      className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                      onClick={onClose}
                    >
                      <span className="text-lg">Upcoming Trips</span>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                onClick={onClose}
              >
                <span className="text-lg">About Us</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/faqs"
                className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                onClick={onClose}
              >
                <span className="text-lg">FAQs</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/blog"
                className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                onClick={onClose}
              >
                <span className="text-lg">Blog</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-between p-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors group"
                onClick={onClose}
              >
                <span className="text-lg">Contact</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

          </nav>

          {/* Bottom Action */}
          <div className="p-6 border-t border-gray-800">
            <Link to='/book-trip'>
            <button className="w-full bg-[#27C3C5] text-black px-6 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:bg-[#1fa9ab] flex items-center justify-center gap-2">
              Book Now
              <ArrowRight className="h-5 w-5" />
            </button>
            </Link>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
