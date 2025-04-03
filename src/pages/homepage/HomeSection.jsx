import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../../media/bali-bg.jpg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <div>
      {/* Background Image */}
      <div
        // Use Tailwind's responsive classes for conditional height
        className="relative min-h-screen md:h-auto overflow-hidden" // md applies to iPad-size screens
      >
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Navigation Bar */}
        <NavBar />

        {/* Content Section */}
        <div
          // Apply padding only for iPads and smaller screens
          className="z-0 main-container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10"
        >
          <div className="container1  max-w-3xl  flex flex-col gap-4 ">
            {/* Typing Animation for Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 flex flex-col gap-2">
              <span>Craft Your Perfect</span>{" "}
              <span style={{ color: "#27C3C5" }}>
                <TypeAnimation
                  sequence={[
                    "Adventure.",
                    2000,
                    "Journey.",
                    2000,
                    "Experience.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover handcrafted travel experiences that blend luxury,
              adventure, and authentic local culture.
            </p>

            {/* Buttons */}
<div className="button-group flex flex-col gap-8">
  <div className="flex gap-6">
    <Link to="/explore-properties">
      <button className="w-36 flex items-center justify-center gap-3 text-gray-100 px-4 py-3 bg-black/30 rounded-full font-semibold hover:bg-black/40 transition-colors text-sm shadow-md shadow-white/20 hover:shadow-white/30">
        Properties <ArrowRight className="h-5 w-5" />
      </button>
    </Link>
    <Link to="/trips/upcoming">
      <button className="w-36 flex items-center justify-center gap-3 text-gray-100 px-4 py-3 bg-black/30 rounded-full font-semibold hover:bg-black/40 transition-colors text-sm text-nowrap shadow-md shadow-white/20 hover:shadow-white/30">
        Explore Trips <ArrowRight className="h-5 w-5" />
      </button>
    </Link>
  </div>

  <Link to="/book-trip">
    <button className="book-now-button bg-[#27C3C5]/70 text-black px-8 py-4 rounded-full font-semibold hover:bg-[#27C3C5]/80 transition-colors shadow-md shadow-black/20 hover:shadow-black/30 ">
      Book Now
    </button>
  </Link>
</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll absolute flex flex-col items-center ">
        <span className="scroll-text text-gray-300">Scroll Below</span>
        <ArrowDown className="down-arrow h-8 w-8 text-gray-300" />
      </div>
    </div>
  );
}

export default HomeSection;