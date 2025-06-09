
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-12">
            <Sparkles className="w-7 h-7" />
            <span className="text-2xl font-bold">Ready to build better agents?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 animate-fade-in">
            Sign Up Today
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl opacity-90 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed font-medium">
            Start building intelligent agents with structure, clarity, and confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-fade-in-delayed">
            <AgentCrafterButton 
              className="bg-white text-slate-900 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
              size="lg"
              onClick={() => window.location.href = "/sign-up"}
            >
              <Zap className="mr-4 h-7 w-7" />
              Create Free Account 
              <ArrowRight className="ml-4 h-7 w-7" />
            </AgentCrafterButton>
            <div className="text-xl opacity-75 font-medium">
              Or explore the demo to see how it works
            </div>
          </div>
          
          <p className="text-xl opacity-75 animate-fade-in-delayed">
            No credit card needed • Start building in seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
