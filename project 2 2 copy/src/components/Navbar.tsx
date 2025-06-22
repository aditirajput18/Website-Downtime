import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-2xl font-bold">
            <Activity className={`h-8 w-8 mr-2 ${isScrolled ? 'text-teal-500' : 'text-white'}`} />
            <span className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}>Down Time Watch</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>About Us</Link>
            <Link to="/" className={`transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>How It Works</Link>
            <Link to="/" className={`transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Pricing</Link>
            <Link to="/" className={`transition-colors duration-200 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Contact Us</Link>
            <div className="ml-4 space-x-4">
              <Link to="/signin" className={`px-5 py-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}>
                Get Started
              </Link>
              <Link to="/signup" className={`px-5 py-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-teal-500 text-white hover:bg-teal-600'
              }`}>
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link to="/" className="block py-2 px-4 text-white hover:bg-white/10 rounded-md">About Us</Link>
            <Link to="/" className="block py-2 px-4 text-white hover:bg-white/10 rounded-md">How It Works</Link>
            <Link to="/" className="block py-2 px-4 text-white hover:bg-white/10 rounded-md">Pricing</Link>
            <Link to="/" className="block py-2 px-4 text-white hover:bg-white/10 rounded-md">Contact Us</Link>
            <div className="mt-4 space-y-2 px-4">
              <Link to="/signin" className="block w-full px-5 py-2 text-center rounded-md bg-white/20 text-white hover:bg-white/30">
                Get Started
              </Link>
              <Link to="/signup" className="block w-full px-5 py-2 text-center rounded-md bg-teal-500 text-white hover:bg-teal-600">
                Learn More
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;