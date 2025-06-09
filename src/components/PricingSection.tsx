
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
    <section className="section-padding bg-gradient-to-b from-blue-50/30 to-white" id="pricing">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Free Forever
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Start creating expert AI prompts completely free. No hidden costs, no subscriptions, no credit card required.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-blue-200 shadow-2xl animate-fade-in transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 relative z-10">
                <Sparkles className="w-4 h-4 inline mr-2" />
                ALWAYS FREE
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 relative z-10">Free Plan</h3>
              <div className="flex items-center justify-center relative z-10">
                <span className="text-5xl md:text-6xl font-bold">$0</span>
                <span className="text-xl ml-2">/forever</span>
              </div>
            </div>
            
            <div className="p-10">
              <ul className="space-y-5 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-5 h-5" />
                    </span>
                    <span className="text-lg text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <AgentCrafterButton 
                size="lg" 
                className="w-full py-4 text-xl font-bold shadow-xl" 
                onClick={() => window.location.href = "/sign-up"}
              >
                Start Building Agents Free <ArrowRight className="ml-3 h-6 w-6" />
              </AgentCrafterButton>
              
              <p className="text-center text-lg text-gray-500 mt-6">
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
