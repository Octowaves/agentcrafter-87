
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

      {/* Partnership Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Bot className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-gray-900">AI Agent & Automation</h3>
              <span className="px-3 py-1 text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full">
                EXCLUSIVE PARTNERSHIP
              </span>
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Take your AI agents to the next level with our exclusive partnership with ViaSocket. 
              Build powerful automations, connect multiple platforms, and deploy enterprise-grade AI workflows.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-700">1000+ Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-700">Advanced AI Workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-gray-700">Enterprise Ready</span>
              </div>
            </div>
            
            <Button 
              onClick={() => window.open('https://viasocket.com/', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Explore ViaSocket Integration
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
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
