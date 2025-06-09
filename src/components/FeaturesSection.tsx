
import React from 'react';
import { Zap, Settings, Sparkles, ArrowRightLeft, BookCopy, Wrench, GitBranch, TestTube, Link } from 'lucide-react';

const FeaturesSection = () => {
  const whyFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Purpose-built for AI workflows",
      description: "Designed specifically for developers building AI agents and automations."
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Simplifies complex agent design",
      description: "Turn complex agent requirements into clear, actionable prompts."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Boosts prompt quality and precision",
      description: "AI-powered optimization ensures your prompts follow best practices."
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8 text-blue-600" />,
      title: "Integrates with existing tools",
      description: "Works with n8n, LangChain, Zapier, and more platforms you already use."
    },
    {
      icon: <BookCopy className="w-8 h-8 text-blue-600" />,
      title: "Gives you clarity, confidence, and control",
      description: "Build agents with structure and predictable outcomes."
    }
  ];

  const tools = [
    {
      number: "1",
      title: "Prompter",
      description: "Craft high-quality prompts for any agent type",
      features: ["Ready-made templates", "Dynamic field population", "Style, goal, tone alignment"],
      available: true,
      icon: <Wrench className="w-8 h-8" />
    },
    {
      number: "2", 
      title: "Blueprint Generator",
      description: "Auto-generate agent logic and workflows from goals",
      features: ["Workflow automation", "Logic mapping", "Goal-driven design"],
      available: false,
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      number: "3",
      title: "Evaluator", 
      description: "Test how well your agent meets its objectives with simulated runs",
      features: ["Simulated testing", "Performance metrics", "Objective validation"],
      available: false,
      icon: <TestTube className="w-8 h-8" />
    },
    {
      number: "4",
      title: "Integrations Hub",
      description: "Instantly plug into your agent stack (n8n, LangChain, Zapier, APIs)",
      features: ["One-click integrations", "API connections", "Platform compatibility"],
      available: false,
      icon: <Link className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container px-4 mx-auto">
        {/* Why Agent Crafter Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              🚀 Why Agent Crafter?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for AI developers who demand quality and efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 animate-fade-in hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 bg-blue-100 p-4 rounded-xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">🔹 {feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Inside Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              🛠 What You Get Inside Agent Crafter
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              A complete toolkit for every stage of AI agent development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 animate-fade-in hover:shadow-2xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 mt-2">
                    {tool.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-600">{tool.icon}</div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                          🔹 {tool.title}
                          {!tool.available && (
                            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{tool.description}</p>
                    <ul className="space-y-3">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-lg text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
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
