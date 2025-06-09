
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight } from 'lucide-react';

const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-prompter-600 to-prompter-800 text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          ✨ Sign Up Today
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
          Start building intelligent agents with structure, clarity, and confidence.
        </p>
        <div className="mb-8 animate-fade-in-delayed">
          <AgentCrafterButton 
            className="bg-white text-prompter-700 hover:bg-gray-100"
            size="lg"
            onClick={() => window.location.href = "/sign-up"}
          >
            Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
          </AgentCrafterButton>
        </div>
        <p className="text-sm opacity-75 animate-fade-in-delayed">
          No credit card needed • Explore the demo to see how it works
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
