
import React from 'react';
import PrompterButton from './PrompterButton';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 mx-auto">
        <div className="pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6 animate-fade-in">
              Struggling to Write Agentic AI Prompts? Let Agentcrafter Do It for You.
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delayed">
              Agentcrafter is your AI sidekick that crafts perfect prompts for your agents in minutes — no guesswork, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <PrompterButton 
                size="lg" 
                onClick={() => window.location.href = "/sign-up"}
              >
                Start Free <ArrowRight className="ml-2 h-5 w-5" />
              </PrompterButton>
              <div className="text-sm text-gray-500 mt-2 sm:mt-4">
                Completely free · No credit card required · Start crafting now
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="mx-auto text-sm text-gray-400">Agentcrafter AI Assistant</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600 text-sm">What are you trying to build with AI?</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg shadow-sm ml-8">
                    <p className="text-gray-800 text-sm">I need to create a customer service chatbot that can handle returns.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600 text-sm">What platform are you using for this automation?</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg shadow-sm ml-8">
                    <p className="text-gray-800 text-sm">I'm using Zapier with OpenAI integration.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600 text-sm">Generating your optimized prompt...</p>
                    <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-prompter-500 rounded-full animate-pulse w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-prompter-200 rounded-full opacity-70 blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-70 blur-3xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
