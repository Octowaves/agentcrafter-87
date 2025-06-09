
import React from 'react';
import { X, Check, Clock, Brain, Cog, MessageSquareText, TestTube } from 'lucide-react';

const PainVsEaseSection = () => {
  const comparisonData = [
    {
      category: 'Prompt Confusion',
      icon: <Brain className="w-6 h-6" />,
      without: 'Trial-and-error chaos, poor results',
      with: 'Guided prompt generation that works',
    },
    {
      category: 'Logic Mapping',
      icon: <Cog className="w-6 h-6" />,
      without: 'Disconnected tools, fragile workflows',
      with: 'One seamless interface for building AI agents',
    },
    {
      category: 'Dev Time',
      icon: <Clock className="w-6 h-6" />,
      without: 'Hours spent rewriting prompts',
      with: 'Cut dev time in half with templates & automation',
    },
    {
      category: 'Unclear Output',
      icon: <MessageSquareText className="w-6 h-6" />,
      without: 'Misaligned tone or task execution',
      with: 'Consistent, goal-aligned AI behavior',
    },
    {
      category: 'Testing Agents',
      icon: <TestTube className="w-6 h-6" />,
      without: 'Manual, error-prone validation',
      with: 'Built-in testing & debugging (coming soon)',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50/30 to-purple-50/20" id="comparison">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900">
            With vs. Without Agent Crafter
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-medium">
            See the dramatic difference in your AI development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-red-50 rounded-3xl p-10 border-2 border-red-100 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black mb-10 text-red-700 flex items-center">
              <X className="w-10 h-10 text-red-500 mr-4" />
              Without Agent Crafter
            </h3>
            <ul className="space-y-8">
              {comparisonData.map((item, index) => (
                <li 
                  key={`without-${index}`} 
                  className="animate-fade-in bg-white rounded-xl p-8 shadow-lg"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-red-500 mr-4">{item.icon}</div>
                    <div className="font-bold text-xl text-gray-800">{item.category}</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-3 rounded-full mr-5 mt-1">
                      <X className="w-5 h-5" />
                    </span>
                    <span className="text-gray-700 text-lg leading-relaxed">{item.without}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-3xl p-10 border-2 border-green-100 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black mb-10 text-green-700 flex items-center">
              <Check className="w-10 h-10 text-green-500 mr-4" />
              With Agent Crafter
            </h3>
            <ul className="space-y-8">
              {comparisonData.map((item, index) => (
                <li 
                  key={`with-${index}`} 
                  className="animate-fade-in bg-white rounded-xl p-8 shadow-lg"
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-green-500 mr-4">{item.icon}</div>
                    <div className="font-bold text-xl text-gray-800">{item.category}</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-3 rounded-full mr-5 mt-1">
                      <Check className="w-5 h-5" />
                    </span>
                    <span className="text-gray-700 text-lg leading-relaxed">{item.with}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainVsEaseSection;
