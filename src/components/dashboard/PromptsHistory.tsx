
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Clock, Clipboard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';

interface Prompt {
  id: string;
  title: string | null;
  prompt_text: string;
  generated_result: string;
  created_at: string;
}

const PromptsHistory = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const fetchPrompts = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('prompts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPrompts(data || []);
      } catch (error) {
        console.error('Error fetching prompts:', error);
        toast({
          title: 'Failed to load prompts',
          description: 'There was an error loading your prompt history.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrompts();
  }, [user, toast]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard',
      description: 'The prompt has been copied to your clipboard.',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="h-8 w-8 animate-spin text-prompter-600" />
      </div>
    );
  }

  if (prompts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Prompt History</CardTitle>
          <CardDescription>You haven't created any prompts yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8">
            <p className="text-muted-foreground mb-4">
              Create your first prompt to see it appear here.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Prompt History</CardTitle>
        <CardDescription>Review and reuse your previous prompts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="p-4 border rounded-lg hover:border-prompter-200 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">
                  {prompt.title || 'Untitled Prompt'}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {formatDistanceToNow(new Date(prompt.created_at), { addSuffix: true })}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {prompt.prompt_text}
              </p>
              <div className="bg-muted p-3 rounded-md mb-3 text-sm">
                <p className="line-clamp-3">{prompt.generated_result}</p>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(prompt.generated_result)}
                >
                  <Clipboard className="h-4 w-4 mr-2" />
                  Copy Result
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptsHistory;
