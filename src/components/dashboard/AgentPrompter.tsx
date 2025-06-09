import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, ArrowLeft, Sparkles, Copy, Download, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AgentPrompterProps {
  onBack: () => void;
}

const AgentPrompter = ({ onBack }: AgentPrompterProps) => {
  const [formData, setFormData] = useState({
    agentName: '',
    agentType: '',
    industry: '',
    primaryGoal: '',
    targetAudience: '',
    keyFunctions: '',
    toneStyle: '',
    constraints: '',
    examples: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [lastError, setLastError] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePrompt = async () => {
    // Check if required fields are filled
    const requiredFields = ['agentName', 'agentType', 'primaryGoal'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in Agent Name, Agent Type, and Primary Goal.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setLastError(null);

    const payload = {
      user_account_id: user?.id,
      agent_name: formData.agentName,
      agent_type: formData.agentType,
      industry: formData.industry,
      primary_goal: formData.primaryGoal,
      target_audience: formData.targetAudience,
      key_functions: formData.keyFunctions,
      tone_style: formData.toneStyle,
      constraints: formData.constraints,
      examples: formData.examples
    };

    console.log('Sending request to webhook with payload:', payload);

    try {
      const response = await fetch('https://flow.sokt.io/func/scriJNusLMve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const result = await response.text();
      console.log('Success response:', result);
      
      setGeneratedPrompt(result);
      setLastError(null);

      toast({
        title: 'Prompt generated successfully!',
        description: 'Your AI agent prompt is ready to use.',
      });
    } catch (error) {
      console.error('Error generating prompt:', error);
      
      let errorMessage = 'There was an error generating your prompt.';
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage = 'Unable to connect to the prompt generation service. The service might be temporarily unavailable.';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setLastError(errorMessage);
      
      toast({
        title: 'Generation failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast({
      title: 'Copied to clipboard',
      description: 'The generated prompt has been copied to your clipboard.',
    });
  };

  const downloadPrompt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedPrompt], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.agentName || 'agent'}-prompt.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: 'Download started',
      description: 'Your prompt file is being downloaded.',
    });
  };

  const formatMarkdownText = (text: string) => {
    return text
      // Convert headers
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-3 border-b border-gray-200 pb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-blue-200 pb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h1>')
      
      // Convert bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      
      // Convert bullet points
      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2 text-gray-700">$1</li>')
      
      // Convert line breaks
      .replace(/\\n\\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
      .replace(/\\n/g, '<br />')
      
      // Wrap in paragraphs if not already wrapped
      .replace(/^(?!<[h|l|p])(.*$)/gim, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={onBack} className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tools
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agent Prompter</h1>
          <p className="text-gray-600">Transform your rough ideas into polished, effective prompts</p>
        </div>
      </div>

      {/* Error Alert */}
      {lastError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {lastError}
            <br />
            <span className="text-sm opacity-75 mt-1 block">
              If this persists, the webhook service may be down. Please try again later.
            </span>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
              Agent Configuration
            </CardTitle>
            <CardDescription>
              Keep your input short and simple — Agent Prompter will take it from there.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="agentName">Agent Name *</Label>
                <Input
                  id="agentName"
                  placeholder="e.g., Marketing Assistant"
                  value={formData.agentName}
                  onChange={(e) => handleInputChange('agentName', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="agentType">Agent Type *</Label>
                <Select value={formData.agentType} onValueChange={(value) => handleInputChange('agentType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="assistant">Assistant</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="creator">Creator</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="advisor">Advisor</SelectItem>
                    <SelectItem value="moderator">Moderator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry/Domain</Label>
              <Input
                id="industry"
                placeholder="e.g., E-commerce, Healthcare, Finance"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryGoal">Primary Goal *</Label>
              <Textarea
                id="primaryGoal"
                placeholder="What should this agent accomplish?"
                value={formData.primaryGoal}
                onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Input
                id="targetAudience"
                placeholder="Who will interact with this agent?"
                value={formData.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keyFunctions">Key Functions</Label>
              <Textarea
                id="keyFunctions"
                placeholder="What specific tasks should the agent perform?"
                value={formData.keyFunctions}
                onChange={(e) => handleInputChange('keyFunctions', e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="toneStyle">Tone & Style</Label>
              <Input
                id="toneStyle"
                placeholder="e.g., Professional, Friendly, Technical"
                value={formData.toneStyle}
                onChange={(e) => handleInputChange('toneStyle', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="constraints">Constraints & Guidelines</Label>
              <Textarea
                id="constraints"
                placeholder="Any limitations or specific guidelines?"
                value={formData.constraints}
                onChange={(e) => handleInputChange('constraints', e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="examples">Examples (Optional)</Label>
              <Textarea
                id="examples"
                placeholder="Provide examples of desired interactions"
                value={formData.examples}
                onChange={(e) => handleInputChange('examples', e.target.value)}
                rows={3}
              />
            </div>

            <Button 
              onClick={generatePrompt} 
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Prompt
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Generated Prompt</CardTitle>
            <CardDescription>
              Your polished, ready-to-use AI agent prompt
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedPrompt ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 max-h-96 overflow-y-auto shadow-inner">
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: formatMarkdownText(generatedPrompt) 
                    }}
                  />
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={copyToClipboard} className="flex-1 hover:bg-blue-50 hover:border-blue-300">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button variant="outline" onClick={downloadPrompt} className="flex-1 hover:bg-green-50 hover:border-green-300">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>Fill in the form and click "Generate Prompt" to see your polished prompt here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentPrompter;
