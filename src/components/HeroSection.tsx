
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight, Bot, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-chakra-blue-50 to-chakra-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-chakra-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chakra-blue-300/15 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-chakra-blue-200 rounded-full px-6 py-3 mb-8 shadow-chakra-lg">
              <Bot className="w-5 h-5 text-chakra-blue-600" />
              <span className="text-lg font-semibold text-chakra-gray-800">Agent Crafter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-chakra-gray-900 mb-6 tracking-tight">
              The Ultimate Toolkit for{' '}
              <span className="bg-gradient-to-r from-chakra-blue-600 to-chakra-blue-500 bg-clip-text text-transparent block mt-2">
                AI Agent Developers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-chakra-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              Craft intelligent, reliable AI agents faster—with purpose-built tools made for developers like you.
            </p>
            
            <div className="text-lg md:text-xl text-chakra-gray-500 mb-12 max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-chakra-gray-200 shadow-chakra-md">
              "Stop wasting time on broken prompts and confusing logic. Start crafting agents that actually work."
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <AgentCrafterButton 
                size="lg" 
                onClick={() => window.location.href = "/sign-up"}
                className="px-8 py-4 text-lg font-semibold shadow-chakra-xl"
              >
                Create Free Account <ArrowRight className="ml-3 h-5 w-5" />
              </AgentCrafterButton>
              <div className="text-lg text-chakra-gray-500 font-medium">
                No credit card needed • Explore the demo
              </div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="mt-16 max-w-5xl mx-auto animate-slide-in-right">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-chakra-xl border border-white/60 p-8 mx-4">
              <div className="bg-gradient-to-br from-chakra-gray-50 to-white rounded-xl p-8 shadow-inner border border-chakra-gray-100">
                <div className="flex items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-lg font-semibold text-chakra-gray-700">Agent Crafter AI Assistant</div>
                </div>
                <div className="space-y-6 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-chakra-sm border border-chakra-gray-200">
                    <p className="text-chakra-gray-700 text-lg font-medium">What type of AI agent are you building?</p>
                  </div>
                  <div className="bg-gradient-to-r from-chakra-blue-50 to-chakra-blue-100 p-6 rounded-lg shadow-chakra-sm ml-12 border border-chakra-blue-200">
                    <p className="text-chakra-gray-800 text-lg">A customer service chatbot for e-commerce returns and refunds</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-chakra-sm border border-chakra-gray-200">
                    <p className="text-chakra-gray-700 text-lg font-medium">What platform will you use?</p>
                  </div>
                  <div className="bg-gradient-to-r from-chakra-blue-50 to-chakra-blue-100 p-6 rounded-lg shadow-chakra-sm ml-12 border border-chakra-blue-200">
                    <p className="text-chakra-gray-800 text-lg">Zapier with OpenAI GPT-4</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-chakra-blue-50 p-6 rounded-lg shadow-chakra-sm border border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-green-600" />
                      <p className="text-chakra-gray-700 text-lg font-medium">Generating your optimized prompt...</p>
                    </div>
                    <div className="h-2 bg-chakra-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-chakra-blue-500 to-green-500 rounded-full animate-pulse w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
