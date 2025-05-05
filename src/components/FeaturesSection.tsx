
import React from 'react';
import { MessageSquareText, Sparkles, History, BookCopy, ArrowRightLeft } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageSquareText className="w-6 h-6 text-prompter-600" />,
      title: "Smart, guided conversation",
      description: "Answer simple questions about your needs, and let Prompter handle the rest."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-prompter-600" />,
      title: "AI-powered optimization",
      description: "Advanced algorithms ensure your prompts follow best practices for reliable results."
    },
    {
      icon: <BookCopy className="w-6 h-6 text-prompter-600" />,
      title: "100 prompts per month",
      description: "Generate up to 100 custom prompts monthly on the early bird plan."
    },
    {
      icon: <History className="w-6 h-6 text-prompter-600" />,
      title: "Save & reuse history",
      description: "Store your prompt history for future reference and quick reuse."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-prompter-600" />,
      title: "Compatible everywhere",
      description: "Works with ChatGPT, Claude, Zapier AI, N8N, Make.com and most LLM platforms."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Core Features
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to create perfect prompts for your AI applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mr-4 bg-prompter-50 p-2 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
