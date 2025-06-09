
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight, Bot, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-8 py-4 mb-12 shadow-lg">
              <Bot className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Agent Crafter</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-gray-900 mb-12 tracking-tight">
              The Ultimate Toolkit for{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block mt-4">
                AI Agent Developers
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
              Craft intelligent, reliable AI agents faster—with purpose-built tools made for developers like you.
            </p>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-16 font-medium max-w-4xl mx-auto bg-gray-50/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
              "Stop wasting time on broken prompts and confusing logic. Start crafting agents that actually work."
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <AgentCrafterButton 
                size="lg" 
                onClick={() => window.location.href = "/sign-up"}
                className="px-12 py-6 text-2xl font-bold shadow-2xl"
              >
                Create Free Account <ArrowRight className="ml-4 h-7 w-7" />
              </AgentCrafterButton>
              <div className="text-lg text-gray-500 font-medium">
                No credit card needed • Explore the demo
              </div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="mt-24 max-w-6xl mx-auto animate-slide-in-right">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/60 p-12 mx-4">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-inner">
                <div className="flex items-center mb-10">
                  <div className="flex gap-3">
                    <div className="w-5 h-5 bg-red-400 rounded-full"></div>
                    <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-xl font-bold text-gray-700">Agent Crafter AI Assistant</div>
                </div>
                <div className="space-y-8 text-left">
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <p className="text-gray-700 text-xl font-semibold">What type of AI agent are you building?</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-md ml-16 border border-blue-100">
                    <p className="text-gray-800 text-xl font-medium">A customer service chatbot for e-commerce returns and refunds</p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <p className="text-gray-700 text-xl font-semibold">What platform will you use?</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-md ml-16 border border-blue-100">
                    <p className="text-gray-800 text-xl font-medium">Zapier with OpenAI GPT-4</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-md border border-green-100">
                    <div className="flex items-center gap-4 mb-4">
                      <Zap className="w-7 h-7 text-green-600" />
                      <p className="text-gray-700 text-xl font-semibold">Generating your optimized prompt...</p>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse w-4/5"></div>
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
