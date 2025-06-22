import React from 'react';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Instant notifications for quick response to downtime",
    "Comprehensive reports for performance optimization",
    "24/7 monitoring for peace of mind",
    "Time-saving automated checks every 5 minutes",
    "User-friendly dashboard for easy monitoring",
    "Historical data for trend analysis"
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enjoy <span className="italic">Peace of Mind</span> with Down Time Watch Monitoring
            </h2>
            
            <p className="text-lg text-white/80 mb-8">
              Down Time Watch offers unparalleled benefits, ensuring your website's continuous 
              operation. From instant downtime notifications to detailed AI-generated reports, 
              we provide the tools you need to maintain optimal performance and quickly address 
              any issues. Discover how our proactive monitoring can save you time and resources.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-teal-500 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/90">{benefit}</p>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition-colors duration-200">
              Learn More About Benefits
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Monitoring on laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/20"></div>
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg transform md:translate-y-8 hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Performance data" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-600/20"></div>
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg transform md:-translate-y-8 hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dashboard visualization" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-600/20"></div>
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/3994827/pexels-photo-3994827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Remote monitoring" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;