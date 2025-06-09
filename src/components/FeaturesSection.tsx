
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
    <section className="section-padding bg-gradient-to-b from-white to-gray-50/50" id="features">
      <div className="container px-4 mx-auto">
        {/* Why Agent Crafter Section */}
        <div className="mb-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900">
              Why Agent Crafter?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-medium">
              Built specifically for AI developers who demand quality and efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {whyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 shadow-xl border-2 border-blue-100/50 animate-fade-in hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-8 bg-blue-100 p-5 rounded-2xl w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-xl leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Inside Section */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900">
              What You Get Inside Agent Crafter
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto font-medium">
              A complete toolkit for every stage of AI agent development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 animate-fade-in hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-8">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-black text-2xl mr-8 mt-2">
                    {tool.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="text-blue-600">{tool.icon}</div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
                          {tool.title}
                          {!tool.available && (
                            <span className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-medium">
                              Coming Soon
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-8 text-xl leading-relaxed">{tool.description}</p>
                    <ul className="space-y-4">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xl text-gray-700">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mr-5"></div>
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
