
import React from 'react';
import { X, Check, Clock, Brain, Cog, MessageSquareText, TestTube } from 'lucide-react';

const PainVsEaseSection = () => {
  const comparisonData = [
    {
      category: '🤯 Prompt Confusion',
      icon: <Brain className="w-6 h-6" />,
      without: 'Trial-and-error chaos, poor results',
      with: 'Guided prompt generation that works',
    },
    {
      category: '🧩 Logic Mapping',
      icon: <Cog className="w-6 h-6" />,
      without: 'Disconnected tools, fragile workflows',
      with: 'One seamless interface for building AI agents',
    },
    {
      category: '⏳ Dev Time',
      icon: <Clock className="w-6 h-6" />,
      without: 'Hours spent rewriting prompts',
      with: 'Cut dev time in half with templates & automation',
    },
    {
      category: '💬 Unclear Output',
      icon: <MessageSquareText className="w-6 h-6" />,
      without: 'Misaligned tone or task execution',
      with: 'Consistent, goal-aligned AI behavior',
    },
    {
      category: '🧪 Testing Agents',
      icon: <TestTube className="w-6 h-6" />,
      without: 'Manual, error-prone validation',
      with: 'Built-in testing & debugging (coming soon)',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white" id="comparison">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ⚖️ With vs. Without Agent Crafter
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference in your AI development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-700 flex items-center">
              <X className="w-8 h-8 text-red-500 mr-3" />
              Without Agent Crafter
            </h3>
            <ul className="space-y-6">
              {comparisonData.map((item, index) => (
                <li 
                  key={`without-${index}`} 
                  className="animate-fade-in bg-white rounded-xl p-6 shadow-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <div className="text-red-500 mr-3">{item.icon}</div>
                    <div className="font-semibold text-lg text-gray-800">{item.category}</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-2 rounded-full mr-4 mt-1">
                      <X className="w-5 h-5" />
                    </span>
                    <span className="text-gray-700 text-lg">{item.without}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-green-700 flex items-center">
              <Check className="w-8 h-8 text-green-500 mr-3" />
              With Agent Crafter
            </h3>
            <ul className="space-y-6">
              {comparisonData.map((item, index) => (
                <li 
                  key={`with-${index}`} 
                  className="animate-fade-in bg-white rounded-xl p-6 shadow-sm"
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <div className="text-green-500 mr-3">{item.icon}</div>
                    <div className="font-semibold text-lg text-gray-800">{item.category}</div>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-5 h-5" />
                    </span>
                    <span className="text-gray-700 text-lg">{item.with}</span>
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
