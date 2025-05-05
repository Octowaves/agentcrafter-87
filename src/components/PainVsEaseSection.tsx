
import React from 'react';
import { X, Check } from 'lucide-react';

const PainVsEaseSection = () => {
  const comparisonData = [
    {
      without: 'Hours wasted writing and testing prompts',
      with: 'Done in minutes with AI guidance',
    },
    {
      without: 'Vague results and failed agent actions',
      with: 'Optimized prompts that just work',
    },
    {
      without: 'Googling "how to write prompts" all day',
      with: 'Simply answer and deploy',
    },
    {
      without: 'No reuse — you start from scratch',
      with: 'Templates and history saved',
    },
  ];

  return (
    <section className="section-padding bg-white" id="comparison">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          With vs Without Prompter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center">
              <X className="w-5 h-5 text-red-500 mr-2" />
              Without Prompter
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li 
                  key={`without-${index}`} 
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="bg-red-100 text-red-600 p-1 rounded-full mr-3 mt-0.5">
                    <X className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700">{item.without}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-prompter-50 rounded-2xl p-6 border border-prompter-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-prompter-700 flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              With Prompter
            </h3>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li 
                  key={`with-${index}`} 
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-prompter-900">{item.with}</span>
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
