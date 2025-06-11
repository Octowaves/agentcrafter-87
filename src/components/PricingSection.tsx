
import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import AgentCrafterButton from './AgentCrafterButton';

const PricingSection = () => {
  const features = [
    "Access to Agent Prompter tool",
    "Ready-made templates for common agent types", 
    "Export prompts to any LLM platform",
    "Save and organize your prompt library",
    "Priority customer support",
    "Regular updates and new features"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-chakra-blue-50 via-purple-50 to-chakra-gray-50" id="pricing">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-chakra-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-chakra-gray-600 max-w-3xl mx-auto">
            Get access to all Agent Crafter features for one low monthly price. No hidden costs, no complicated tiers.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border-2 border-chakra-blue-200 shadow-chakra-xl animate-fade-in transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-chakra-blue-600 to-chakra-blue-500 text-white py-8 px-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-3 relative z-10">
                <Star className="w-4 h-4 inline mr-1" />
                PRO PLAN
              </span>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Pro Plan</h3>
              <div className="flex items-center justify-center relative z-10">
                <span className="text-4xl font-bold">$5.99</span>
                <span className="text-base ml-2">/month</span>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1.5 rounded-full mr-3 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm text-chakra-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <AgentCrafterButton 
                size="lg" 
                className="w-full py-3 text-base font-semibold shadow-chakra-lg" 
                onClick={() => window.location.href = "/sign-up"}
              >
                Start Building for $5.99/month <ArrowRight className="ml-2 h-4 w-4" />
              </AgentCrafterButton>
              
              <p className="text-center text-sm text-chakra-gray-500 mt-4">
                Cancel anytime • Secure payment via Razorpay
                <br />
                <a href="/terms" className="text-chakra-blue-600 hover:underline">Terms of Service</a> • <a href="/privacy" className="text-chakra-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
