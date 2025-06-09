
import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import AgentCrafterButton from './AgentCrafterButton';

const PricingSection = () => {
  const features = [
    "Access to Agent Prompter tool",
    "Ready-made templates for common agent types", 
    "Export prompts to any LLM platform",
    "Save and organize your prompt library",
    "Community support and resources",
    "Regular updates and new features"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-purple-50/30 to-blue-50/30" id="pricing">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900">
            Free Forever
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-medium">
            Start creating expert AI prompts completely free. No hidden costs, no subscriptions, no credit card required.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-blue-200 shadow-2xl animate-fade-in transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-lg font-bold mb-6 relative z-10">
                <Sparkles className="w-5 h-5 inline mr-3" />
                ALWAYS FREE
              </span>
              <h3 className="text-4xl md:text-5xl font-black mb-4 relative z-10">Free Plan</h3>
              <div className="flex items-center justify-center relative z-10">
                <span className="text-6xl md:text-7xl font-black">$0</span>
                <span className="text-2xl ml-3">/forever</span>
              </div>
            </div>
            
            <div className="p-12">
              <ul className="space-y-6 mb-12">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-3 rounded-full mr-6 mt-1">
                      <Check className="w-6 h-6" />
                    </span>
                    <span className="text-xl text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <AgentCrafterButton 
                size="lg" 
                className="w-full py-6 text-2xl font-bold shadow-xl" 
                onClick={() => window.location.href = "/sign-up"}
              >
                Start Building Agents Free <ArrowRight className="ml-4 h-7 w-7" />
              </AgentCrafterButton>
              
              <p className="text-center text-xl text-gray-500 mt-8">
                No credit card required • Start in seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
