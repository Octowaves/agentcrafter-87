
import React from 'react';
import { X, Check, Clock, Brain, Cog, MessageSquareText, TestTube } from 'lucide-react';

const PainVsEaseSection = () => {
  const comparisonData = [
    {
      category: 'Prompt Confusion',
      icon: <Brain className="w-5 h-5" />,
      without: 'Trial-and-error chaos, poor results',
      with: 'Guided prompt generation that works',
    },
    {
      category: 'Logic Mapping',
      icon: <Cog className="w-5 h-5" />,
      without: 'Disconnected tools, fragile workflows',
      with: 'One seamless interface for building AI agents',
    },
    {
      category: 'Dev Time',
      icon: <Clock className="w-5 h-5" />,
      without: 'Hours spent rewriting prompts',
      with: 'Cut dev time in half with templates & automation',
    },
    {
      category: 'Unclear Output',
      icon: <MessageSquareText className="w-5 h-5" />,
      without: 'Misaligned tone or task execution',
      with: 'Consistent, goal-aligned AI behavior',
    },
    {
      category: 'Testing Agents',
      icon: <TestTube className="w-5 h-5" />,
      without: 'Manual, error-prone validation',
      with: 'Built-in testing & debugging (coming soon)',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 via-white to-green-50" id="comparison">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-chakra-gray-900">
            With vs. Without Agent Crafter
          </h2>
          <p className="text-base md:text-lg text-chakra-gray-600 max-w-4xl mx-auto">
            See the dramatic difference in your AI development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200 shadow-chakra-xl">
            <h3 className="text-xl font-bold mb-6 text-red-700 flex items-center">
              <X className="w-6 h-6 text-red-500 mr-3" />
              Without Agent Crafter
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li 
                  key={`without-${index}`} 
                  className="animate-fade-in bg-white rounded-xl p-4 shadow-chakra-lg"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <div className="text-red-500 mr-3">{item.icon}</div>
                    <div className="font-semibold text-sm text-chakra-gray-800">{item.category}</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-1.5 rounded-full mr-3 mt-0.5">
                      <X className="w-3 h-3" />
                    </span>
                    <span className="text-chakra-gray-700 text-sm leading-relaxed">{item.without}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 shadow-chakra-xl">
            <h3 className="text-xl font-bold mb-6 text-green-700 flex items-center">
              <Check className="w-6 h-6 text-green-500 mr-3" />
              With Agent Crafter
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li 
                  key={`with-${index}`} 
                  className="animate-fade-in bg-white rounded-xl p-4 shadow-chakra-lg"
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="flex items-center mb-2">
                    <div className="text-green-500 mr-3">{item.icon}</div>
                    <div className="font-semibold text-sm text-chakra-gray-800">{item.category}</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1.5 rounded-full mr-3 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-chakra-gray-700 text-sm leading-relaxed">{item.with}</span>
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
