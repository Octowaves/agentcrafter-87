
import React from 'react';
import { X, Check } from 'lucide-react';

const PainVsEaseSection = () => {
  const comparisonData = [
    {
      category: '🤯 Prompt Confusion',
      without: 'Trial-and-error chaos, poor results',
      with: 'Guided prompt generation that works',
    },
    {
      category: '🧩 Logic Mapping',
      without: 'Disconnected tools, fragile workflows',
      with: 'One seamless interface for building AI agents',
    },
    {
      category: '⏳ Dev Time',
      without: 'Hours spent rewriting prompts',
      with: 'Cut dev time in half with templates & automation',
    },
    {
      category: '💬 Unclear Output',
      without: 'Misaligned tone or task execution',
      with: 'Consistent, goal-aligned AI behavior',
    },
    {
      category: '🧪 Testing Agents',
      without: 'Manual, error-prone validation',
      with: 'Built-in testing & debugging (coming soon)',
    },
  ];

  return (
    <section className="section-padding bg-white" id="comparison">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ⚖️ With vs. Without Agent Crafter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
              <X className="w-5 h-5 text-red-500 mr-2" />
              Without Agent Crafter
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li 
                  key={`without-${index}`} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="font-medium text-gray-800 mb-1">{item.category}</div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 p-1 rounded-full mr-3 mt-0.5">
                      <X className="w-4 h-4" />
                    </span>
                    <span className="text-gray-700">{item.without}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-prompter-50 rounded-2xl p-6 border border-prompter-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-prompter-700 flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              With Agent Crafter
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li 
                  key={`with-${index}`} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="font-medium text-prompter-800 mb-1">{item.category}</div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="text-prompter-900">{item.with}</span>
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
