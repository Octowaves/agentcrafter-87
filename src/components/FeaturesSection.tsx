
import React from 'react';
import { MessageSquareText, Sparkles, History, BookCopy, ArrowRightLeft, Zap, TestTube, Settings } from 'lucide-react';

const FeaturesSection = () => {
  const whyFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-prompter-600" />,
      title: "Purpose-built for AI workflows",
      description: "Designed specifically for developers building AI agents and automations."
    },
    {
      icon: <Settings className="w-6 h-6 text-prompter-600" />,
      title: "Simplifies complex agent design",
      description: "Turn complex agent requirements into clear, actionable prompts."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-prompter-600" />,
      title: "Boosts prompt quality and precision",
      description: "AI-powered optimization ensures your prompts follow best practices."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-prompter-600" />,
      title: "Integrates with existing tools",
      description: "Works with n8n, LangChain, Zapier, and more platforms you already use."
    },
    {
      icon: <BookCopy className="w-6 h-6 text-prompter-600" />,
      title: "Gives you clarity, confidence, and control",
      description: "Build agents with structure and predictable outcomes."
    }
  ];

  const tools = [
    {
      number: "1",
      title: "Agent Prompter",
      description: "Craft high-quality prompts for any agent type",
      features: ["Ready-made templates", "Dynamic field population", "Style, goal, tone alignment"],
      available: true
    },
    {
      number: "2", 
      title: "Blueprint Generator",
      description: "Auto-generate agent logic and workflows from goals",
      features: ["Workflow automation", "Logic mapping", "Goal-driven design"],
      available: false
    },
    {
      number: "3",
      title: "Evaluator", 
      description: "Test how well your agent meets its objectives with simulated runs",
      features: ["Simulated testing", "Performance metrics", "Objective validation"],
      available: false
    },
    {
      number: "4",
      title: "Integrations Hub",
      description: "Instantly plug into your agent stack (n8n, LangChain, Zapier, APIs)",
      features: ["One-click integrations", "API connections", "Platform compatibility"],
      available: false
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="container px-4 mx-auto">
        {/* Why Agent Crafter Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            🚀 Why Agent Crafter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mr-4 bg-prompter-50 p-2 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">🔹 {feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Inside Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            🛠 What You Get Inside Agent Crafter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-prompter-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    {tool.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      🔹 {tool.title}
                      {!tool.available && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <ul className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-prompter-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
