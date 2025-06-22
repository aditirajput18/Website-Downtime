import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/signup', { state: { email } });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="block">Real-Time Website</span>
            <span className="relative inline-block">
              <span className="text-teal-400">Uptime</span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-400"></div>
            </span>
            <span className="block mt-2">Monitoring</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Down Time Watch ensures your website is always up and running. Get instant 
            desktop notifications and AI-generated reports when downtime occurs. Sign up 
            today and experience peace of mind with our reliable monitoring service.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-5 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
            />
            <button 
              type="submit"
              className="sm:flex-shrink-0 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
            >
              Sign up
            </button>
          </form>
          
          <div className="flex justify-center">
            <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-white/20 shadow-lg rounded-full flex items-center justify-center mt-8">
              <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;