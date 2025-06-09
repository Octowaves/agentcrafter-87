
import React from 'react';
import { Zap, Settings, Sparkles, ArrowRightLeft, BookCopy, Wrench, GitBranch, TestTube, Link } from 'lucide-react';

const FeaturesSection = () => {
  const whyFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-chakra-blue-600" />,
      title: "Purpose-built for AI workflows",
      description: "Designed specifically for developers building AI agents and automations."
    },
    {
      icon: <Settings className="w-6 h-6 text-chakra-blue-600" />,
      title: "Simplifies complex agent design",
      description: "Turn complex agent requirements into clear, actionable prompts."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-chakra-blue-600" />,
      title: "Boosts prompt quality and precision",
      description: "AI-powered optimization ensures your prompts follow best practices."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-chakra-blue-600" />,
      title: "Integrates with existing tools",
      description: "Works with n8n, LangChain, Zapier, and more platforms you already use."
    },
    {
      icon: <BookCopy className="w-6 h-6 text-chakra-blue-600" />,
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
      icon: <Wrench className="w-6 h-6" />
    },
    {
      number: "2", 
      title: "Blueprint Generator",
      description: "Auto-generate agent logic and workflows from goals",
      features: ["Workflow automation", "Logic mapping", "Goal-driven design"],
      available: false,
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      number: "3",
      title: "Evaluator", 
      description: "Test how well your agent meets its objectives with simulated runs",
      features: ["Simulated testing", "Performance metrics", "Objective validation"],
      available: false,
      icon: <TestTube className="w-6 h-6" />
    },
    {
      number: "4",
      title: "Integrations Hub",
      description: "Instantly plug into your agent stack (n8n, LangChain, Zapier, APIs)",
      features: ["One-click integrations", "API connections", "Platform compatibility"],
      available: false,
      icon: <Link className="w-6 h-6" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-chakra-blue-25 to-chakra-gray-50" id="features">
      <div className="container px-4 mx-auto">
        {/* Why Agent Crafter Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-chakra-gray-900">
              Why Agent Crafter?
            </h2>
            <p className="text-base md:text-lg text-chakra-gray-600 max-w-3xl mx-auto">
              Built specifically for AI developers who demand quality and efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col bg-white rounded-xl p-6 shadow-chakra-md border border-chakra-gray-200 animate-fade-in hover:shadow-chakra-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 bg-chakra-blue-50 p-3 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-chakra-gray-800">{feature.title}</h3>
                <p className="text-chakra-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Inside Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-chakra-gray-900">
              What You Get Inside Agent Crafter
            </h2>
            <p className="text-base md:text-lg text-chakra-gray-600 max-w-3xl mx-auto">
              A complete toolkit for every stage of AI agent development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-chakra-md border border-chakra-gray-200 animate-fade-in hover:shadow-chakra-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-chakra-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 mt-1">
                    {tool.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-chakra-blue-600">{tool.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          {tool.title}
                          {!tool.available && (
                            <span className="text-xs bg-chakra-gray-100 text-chakra-gray-600 px-2 py-1 rounded-full font-medium">
                              Coming Soon
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>
                    <p className="text-chakra-gray-600 mb-4 text-sm leading-relaxed">{tool.description}</p>
                    <ul className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-chakra-gray-700">
                          <div className="w-1.5 h-1.5 bg-chakra-blue-600 rounded-full mr-3"></div>
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
