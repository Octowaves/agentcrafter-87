
import React from 'react';
import { Code, Zap, LayoutGrid, Users } from 'lucide-react';

const WhoItsForSection = () => {
  const audiences = [
    {
      icon: <LayoutGrid className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "No-code builders",
      description: "Using tools like N8N, Make.com, or Zapier to create AI-powered workflows."
    },
    {
      icon: <Code className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "Indie SaaS developers",
      description: "Integrating LLMs into your applications and needing reliable prompt engineering."
    },
    {
      icon: <Users className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "Marketers using AI tools",
      description: "Creating content, chatbots, and customer engagement systems with AI assistance."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "Automation enthusiasts",
      description: "Building personal or professional automation systems powered by language models."
    }
  ];

  return (
    <section className="section-padding" id="who-its-for">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Who It's For
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Prompter helps anyone who works with AI agents and needs reliable, effective prompts.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center">{audience.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
