
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg font-semibold">Ready to build better agents?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in">
            ✨ Sign Up Today
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Start building intelligent agents with structure, clarity, and confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-delayed">
            <AgentCrafterButton 
              className="bg-white text-blue-700 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              size="lg"
              onClick={() => window.location.href = "/sign-up"}
            >
              <Zap className="mr-3 h-6 w-6" />
              Create Free Account 
              <ArrowRight className="ml-3 h-6 w-6" />
            </AgentCrafterButton>
            <div className="text-lg opacity-75">
              Or explore the demo to see how it works
            </div>
          </div>
          
          <p className="text-lg opacity-75 animate-fade-in-delayed">
            No credit card needed • Start building in seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
