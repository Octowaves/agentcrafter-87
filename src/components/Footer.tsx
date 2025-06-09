
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="lg:max-w-md">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-2xl font-bold">Agentcrafter</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your AI sidekick that crafts perfect prompts for your agents in minutes — no guesswork, just results.
            </p>
            <div className="text-sm text-gray-400">
              Designed and developed by{' '}
              <a 
                href="https://www.linkedin.com/in/deekshithkr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 underline decoration-blue-400/30 hover:decoration-blue-300"
              >
                Deekshith
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@agentcrafter.ai" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    hello@agentcrafter.ai
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Agentcrafter AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
