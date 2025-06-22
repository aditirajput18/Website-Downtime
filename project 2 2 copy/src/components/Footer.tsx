import React from 'react';
import { Activity, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-teal-400 mr-3" />
              <span className="text-2xl font-bold text-white">Down Time Watch</span>
            </div>
            <p className="mb-6">
              Providing reliable website monitoring services to ensure your online presence 
              is always available. Get instant notifications and detailed reports.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Status Page</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <span>123 Monitoring St, Suite 100<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <span>info@downtimewatch.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Down Time Watch. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;