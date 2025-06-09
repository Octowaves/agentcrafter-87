
import React from 'react';
import AgentCrafterButton from './AgentCrafterButton';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">🧠 Agent Crafter</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-8 animate-fade-in">
              The Ultimate Toolkit for{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                AI Agent Developers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              Craft intelligent, reliable AI agents faster—with purpose-built tools made for developers like you.
            </p>
            
            <div className="text-lg text-gray-700 mb-12 font-medium animate-fade-in-delayed">
              "Stop wasting time on broken prompts and confusing logic. Start crafting agents that actually work."
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
              <AgentCrafterButton 
                size="lg" 
                onClick={() => window.location.href = "/sign-up"}
                className="px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </AgentCrafterButton>
              <div className="text-sm text-gray-500">
                No credit card needed • Explore the demo
              </div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="mt-16 max-w-5xl mx-auto animate-slide-in-right">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 mx-4">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-inner">
                <div className="flex items-center mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-sm font-medium text-gray-500">Agent Crafter AI Assistant</div>
                </div>
                <div className="space-y-4 text-left">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-sm font-medium">What type of AI agent are you building?</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl shadow-sm ml-8 border border-blue-100">
                    <p className="text-gray-800 text-sm">A customer service chatbot for e-commerce returns and refunds</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-sm font-medium">What platform will you use?</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl shadow-sm ml-8 border border-blue-100">
                    <p className="text-gray-800 text-sm">Zapier with OpenAI GPT-4</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl shadow-sm border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      <p className="text-gray-700 text-sm font-medium">Generating your optimized prompt...</p>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
