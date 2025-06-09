
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const FinalCtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-chakra-blue-900 via-purple-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-chakra-blue-400/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-base font-semibold">Ready to build better agents?</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">
            Sign Up Today
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Start building intelligent agents with structure, clarity, and confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-delayed">
            <AgentCrafterButton 
              className="bg-white text-chakra-gray-900 hover:bg-chakra-gray-100 shadow-chakra-xl hover:shadow-chakra-xl transform hover:scale-105 transition-all duration-300 border-0"
              size="lg"
              onClick={() => window.location.href = "/sign-up"}
            >
              <Zap className="mr-2 h-4 w-4" />
              Create Free Account 
              <ArrowRight className="ml-2 h-4 w-4" />
            </AgentCrafterButton>
            <div className="text-sm opacity-75 font-medium">
              Or explore the demo to see how it works
            </div>
          </div>
          
          <p className="text-sm opacity-75 animate-fade-in-delayed">
            No credit card needed • Start building in seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
