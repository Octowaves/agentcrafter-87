
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import PrompterButton from './PrompterButton';

const PricingSection = () => {
  const features = [
    "100 prompt generations/month",
    "Save prompt history",
    "Export to any LLM platform",
    "Email support",
    "Cancel anytime"
  ];

  return (
    <section className="section-padding" id="pricing">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Start creating expert AI prompts at our special early bird rate.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-prompter-100 shadow-lg animate-fade-in">
            <div className="bg-prompter-600 text-white py-6 px-8 text-center">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-2">
                LIMITED TIME OFFER
              </span>
              <h3 className="text-2xl font-bold mb-1">Early Bird Plan</h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-lg ml-1">/month</span>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <PrompterButton size="lg" className="w-full">
                Start for $10/month <ArrowRight className="ml-2 h-5 w-5" />
              </PrompterButton>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Limited-time early bird pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
