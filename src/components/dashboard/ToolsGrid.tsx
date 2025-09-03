
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Clock, ArrowRight, Bot, Zap, ExternalLink } from 'lucide-react';

interface ToolsGridProps {
  onSelectTool: (toolId: string) => void;
}

const ToolsGrid = ({ onSelectTool }: ToolsGridProps) => {
  const tools = [
    {
      id: 'agent-prompter',
      title: 'Agent Prompter',
      description: 'Your go-to tool for writing better, faster prompts for AI agents and agent teams.',
      icon: Sparkles,
      status: 'live',
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Turn rough ideas into polished prompts',
        'No formatting headaches',
        'Ready for action in seconds'
      ]
    },
    {
      id: 'coming-soon',
      title: 'Agent Builder',
      description: 'Advanced agent configuration and deployment tool.',
      icon: Clock,
      status: 'coming-soon',
      gradient: 'from-gray-400 to-gray-500',
      features: [
        'Visual agent builder',
        'Team collaboration',
        'One-click deployment'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Build Powerful AI Agents
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your ideas into intelligent agents with our comprehensive toolkit. 
          Start with Agent Prompter to craft perfect prompts, then scale with advanced tools.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <Card 
              key={tool.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                tool.status === 'coming-soon' ? 'opacity-75' : ''
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-5`} />
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.gradient} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  {tool.status === 'live' && (
                    <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      LIVE
                    </span>
                  )}
                  {tool.status === 'coming-soon' && (
                    <span className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                      COMING SOON
                    </span>
                  )}
                </div>
                <CardTitle className="text-2xl font-bold">{tool.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {tool.status === 'live' ? (
                  <Button 
                    onClick={() => onSelectTool(tool.id)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    Launch Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    disabled 
                    className="w-full bg-gray-200 text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed"
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Partnership Section - Bigger and More Prominent */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-12 border border-emerald-200 shadow-lg">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">AI Agent & Automation Platform</h2>
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 text-sm font-semibold text-emerald-800 bg-emerald-100 rounded-full">
                  EXCLUSIVE PARTNERSHIP
                </span>
                <span className="text-emerald-600 font-semibold">Powered by ViaSocket</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your AI agents into powerful automation workflows with our exclusive ViaSocket integration. 
            Connect 1000+ platforms, build enterprise-grade automations, and deploy AI that actually works in your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-100">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">1000+ Integrations</h4>
            <p className="text-sm text-gray-600">Connect with all your favorite tools and platforms</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-100">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">AI-Powered Workflows</h4>
            <p className="text-sm text-gray-600">Build intelligent automations that learn and adapt</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-100">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Enterprise Ready</h4>
            <p className="text-sm text-gray-600">Scale securely with enterprise-grade infrastructure</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-100">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">No-Code Setup</h4>
            <p className="text-sm text-gray-600">Drag-and-drop interface for rapid deployment</p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 border border-emerald-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">What You Can Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Customer Support Automation</h4>
              <p className="text-sm text-gray-600">AI agents that handle support tickets, route inquiries, and provide instant responses</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Sales & Marketing Workflows</h4>
              <p className="text-sm text-gray-600">Automate lead scoring, email campaigns, and CRM updates with intelligent agents</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Data Processing Pipelines</h4>
              <p className="text-sm text-gray-600">AI-powered data extraction, transformation, and analysis across multiple platforms</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={() => window.open('https://viasocket.com/', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-12 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Explore ViaSocket Integration
            <ExternalLink className="ml-3 h-6 w-6" />
          </Button>
          <p className="text-sm text-gray-600 mt-4">Start building powerful AI automations today</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Join thousands of developers building the next generation of AI agents.
        </p>
        <Button 
          onClick={() => onSelectTool('agent-prompter')}
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg"
        >
          Start with Agent Prompter
          <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ToolsGrid;
