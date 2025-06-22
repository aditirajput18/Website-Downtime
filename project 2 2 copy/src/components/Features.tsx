import React from 'react';
import { Bell, BarChart2, LayoutDashboard, Shield } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  bgImage?: string;
}> = ({ icon, title, description, bgImage }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Background Image with Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300"></div>
        </div>
      )}
      
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col items-center text-center">
        <div className="text-teal-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard 
            icon={<Bell className="h-10 w-10" />}
            title="Instant Downtime Notifications"
            description="Receive immediate alerts on your desktop or mobile device the moment your website experiences downtime, allowing for swift action."
            bgImage="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <FeatureCard 
            icon={<BarChart2 className="h-10 w-10" />}
            title="AI-Generated Performance Reports"
            description="Get comprehensive, AI-driven reports delivered directly to your email, providing insights into uptime, downtime causes, and performance trends."
            bgImage="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <FeatureCard 
            icon={<LayoutDashboard className="h-10 w-10" />}
            title="Easy-to-Use Dashboard"
            description="Our intuitive dashboard provides a clear overview of your website's uptime, performance metrics, and notification history, all in one place."
            bgImage="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <FeatureCard 
            icon={<Shield className="h-10 w-10" />}
            title="Secure Sign-In/Sign-Out"
            description="Enjoy hassle-free access to your monitoring data with our secure and straightforward sign-in and sign-out features, ensuring your data is protected."
            bgImage="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;