import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team working on monitoring solutions" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Discover Our Commitment to Uptime
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              At Down Time Watch, our mission is to ensure that every website 
              remains operational and accessible. We provide reliable monitoring 
              services that keep you informed with instant notifications and 
              detailed reports.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-4xl font-bold text-teal-500 mb-4">100%</h3>
                <p className="text-gray-700">
                  Our monitoring system checks your website every five minutes, ensuring 
                  maximum uptime and performance.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">1000+</h3>
                <p className="text-gray-700">
                  We pride ourselves on our commitment to customer satisfaction and 
                  transparency in all our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;