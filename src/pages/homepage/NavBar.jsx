import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// TripsDropdown Component for Desktop Navigation
const TripsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 nav-links text-gray-300 transition-colors px-3 py-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>Trips</span>
        {isDropdownOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isDropdownOpen && (
        <div
          className="absolute left-0 mt-2 w-48 opacity-70  border-2 rounded-md shadow-lg  backdrop-blur-sm ring-1 ring-black ring-opacity-5"
          style={{ zIndex: 100 }}
        >
          <div className="py-1">
            <Link
              to="/trips/previous"
              className="block  px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Previous Trips
            </Link>
            <Link
              to="/trips/upcoming"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Upcoming Trips
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`nav-bar-full w-full z-50 transition-all ${
          scrolled
            ? "transform -translate-y-[120px]"
            : "transform translate-y-0"
        }`}
        style={{ position: "relative", zIndex: 50 }} // Ensure navbar is on top
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="nav-bar flex items-center justify-between h-[120px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div
                    className="title text-gray-200"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontFamily: "Lato",
                    }}
                  >
                    <span className="brew text-5xl font-bold relative">
                      BREW
                    </span>
                    <span className="text-1xl relative">YOUR EXPERIENCES</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6 text-[1.2rem]">
                <Link
                  to="/"
                  className="nav-links text-gray-300 transition-colors px-3 py-2"
                >
                  Home
                </Link>
                <TripsDropdown />
                <Link
                  to="/about"
                  className="nav-links text-gray-300 transition-colors px-3 py-2"
                >
                  About Us
                </Link>
                <Link
                 to="/faqs"
                  className="nav-links text-gray-300 transition-colors px-3 py-2"
                >
                  FAQs
                </Link>
                {/* <Link
                  to="/blog"
                  className="nav-links text-gray-300 transition-colors px-3 py-2"
                >
                  Blog
                </Link> */}
                <Link
                  to="/contact"
                  className="nav-links text-gray-300 transition-colors px-3 py-2"
                >
                  Contact
                </Link>
                <Link to="/book-trip">
                  <button className="book-now text-black px-6 py-2 rounded-full font-semibold transition-colors">
                    <span>Book Now</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-10 w-10" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
