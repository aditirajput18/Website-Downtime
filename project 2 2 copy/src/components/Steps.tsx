import React from 'react';
import { CheckCircle } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Simple Steps to <span className="italic">Effortless</span> Website Monitoring
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Down Time Watch makes website monitoring easy. We check your 
              site every five minutes. If downtime occurs, you'll get an instant 
              notification. Plus, receive AI-generated reports for detailed insights. 
              It's that simple!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Step 1:</span> Sign up for a Down Time Watch account.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Step 2:</span> Add your website to be monitored.
                </p>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Step 3:</span> Receive instant downtime notifications.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <img 
              src="https://images.pexels.com/photos/5483073/pexels-photo-5483073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Down Time Watch System" 
              className="rounded-lg shadow-lg w-full h-auto mb-8 hover:shadow-xl transition-shadow duration-300"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Activity Monitoring</h3>
              <p className="text-gray-700">
                Our system continuously monitors your website, checking for availability, 
                response time, and content changes, ensuring you're always the first to know 
                about any issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;