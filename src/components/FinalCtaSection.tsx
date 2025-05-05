
import React from 'react';
import PrompterButton from './PrompterButton';
import { ArrowRight } from 'lucide-react';

const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-prompter-600 to-prompter-800 text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Ready to Save Hours and Get Better Results from Your AI?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
          Join hundreds of developers, marketers and automation experts who are creating perfect prompts in minutes.
        </p>
        <div className="mb-8 animate-fade-in-delayed">
          <PrompterButton 
            className="bg-white text-prompter-700 hover:bg-gray-100"
            size="lg"
            onClick={() => window.location.href = "#pricing"}
          >
            Start for $10/month <ArrowRight className="ml-2 h-5 w-5" />
          </PrompterButton>
        </div>
        <p className="text-sm opacity-75 animate-fade-in-delayed">
          Built for builders. Powered by AI.
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
