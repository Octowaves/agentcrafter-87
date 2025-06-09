
import React from 'react';
import { Code, Zap, LayoutGrid, Users, Briefcase, Heart } from 'lucide-react';

const WhoItsForSection = () => {
  const audiences = [
    {
      icon: <Code className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "AI Developers",
      description: "Build sophisticated AI agents with structured prompts and reliable workflows."
    },
    {
      icon: <LayoutGrid className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "No-code Builders", 
      description: "Create powerful AI automations without complex prompt engineering knowledge."
    },
    {
      icon: <Zap className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "Founders prototyping AI products",
      description: "Quickly validate AI product ideas with well-structured agent prototypes."
    },
    {
      icon: <Briefcase className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "Agencies delivering client-facing bots",
      description: "Deliver professional AI solutions with consistent quality and performance."
    },
    {
      icon: <Heart className="w-10 h-10 mb-4 text-prompter-600" />,
      title: "Hobbyists building useful AI tools",
      description: "Turn your AI ideas into reality with guided prompt creation and templates."
    }
  ];

  const useCases = [
    {
      icon: "🛒",
      title: "AI Sales Assistants",
      description: "Write persuasive, product-aware prompts"
    },
    {
      icon: "💬", 
      title: "Support Bots",
      description: "Ensure accurate, polite, policy-aligned replies"
    },
    {
      icon: "📄",
      title: "Research Agents", 
      description: "Build agents that dig deep and summarize accurately"
    },
    {
      icon: "📣",
      title: "Marketing Agents",
      description: "Create engaging, on-brand outputs automatically"
    }
  ];

  return (
    <section className="section-padding" id="who-its-for">
      <div className="container px-4 mx-auto">
        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            💡 Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-2xl mb-3">{useCase.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Use Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            🎯 Who Should Use Agent Crafter?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            If you're crafting AI agents with LLMs, this platform is for you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center">{audience.icon}</div>
                <h3 className="text-xl font-semibold mb-2">🔹 {audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>

          {/* Built for Speed Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">📈 Built for Speed, Scale & Simplicity</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["✅ No-code friendly", "✅ Developer-grade customization", "✅ Modular & extensible", "✅ Fast onboarding — just sign up and start building"].map((feature, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <span className="text-green-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">❤️ What Developers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 mb-4 italic">"Agent Crafter cut our prompt dev time by 60%. The templates are pure gold."</p>
                <p className="text-sm font-medium text-gray-600">— Ravi K., AI Engineer, Bengaluru</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 mb-4 italic">"Before this, prompt engineering felt like guesswork. Now it's a process."</p>
                <p className="text-sm font-medium text-gray-600">— Jessica L., Product Manager, London</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
