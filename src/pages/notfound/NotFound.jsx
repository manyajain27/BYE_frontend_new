import React from 'react';
import { Home, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#27C3C5]/10 to-[#27C3C5]/20 flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8">
          <Construction className="h-24 w-24 mx-auto text-[#27C3C5] animate-bounce" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 text-lg mb-8">
          Oops! The page you're looking for might still be under construction or has moved to a new address.
        </p>
        
        <Link to={'/'}
          className="inline-flex items-center px-6 py-3 text-white bg-[#27C3C5] rounded-lg hover:bg-[#1ea7a9] transition-colors duration-200"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;