
import React, { useState } from 'react';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import AgentCrafterButton from './AgentCrafterButton';

const HowItWorksSection = () => {
  const [showExample, setShowExample] = useState(false);
  
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-prompter-500" />,
      title: "Answer a few questions",
      description: "Tell us about your agent's goal and what you're trying to accomplish."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-prompter-500" />,
      title: "Let Agent Crafter craft your prompt",
      description: "Our AI analyzes your needs and generates an optimized prompt tailored for your use case."
    },
    {
      icon: <ArrowRight className="w-10 h-10 text-prompter-500" />,
      title: "Copy-paste and deploy",
      description: "Use your new prompt directly in any LLM-based agent or automation tool."
    }
  ];
  
  const examplePrompt = `You are a customer service AI assistant for a clothing retailer. Your role is to handle return inquiries professionally and efficiently.

CONTEXT:
- The company has a 30-day return policy for unused items with receipt
- Returns can be processed in-store or by mail
- Store credit is available for returns without receipt
- Damaged items require photographic evidence

GOALS:
- Identify the reason for return
- Verify eligibility based on purchase date and condition
- Guide customer through the appropriate return process
- Maintain a helpful, understanding tone

FORMAT:
1. Greet the customer and ask about their return reason
2. Request order number and purchase date
3. Check eligibility and explain next steps
4. Offer additional assistance

CONSTRAINTS:
- Never make exceptions to the 30-day policy
- Do not request personal information beyond order details
- Escalate to human support for complex situations`;

  return (
    <section className="section-padding bg-gray-50" id="how-it-works">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get the Right Prompt in 3 Easy Steps
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Agent Crafter turns your requirements into expertly crafted AI prompts through a guided conversation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 bg-prompter-50 p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <AgentCrafterButton 
            variant="outline" 
            onClick={() => setShowExample(!showExample)}
          >
            {showExample ? "Hide Example" : "See an Example Prompt"}
          </AgentCrafterButton>
        </div>
        
        {showExample && (
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-md border border-gray-200 animate-fade-in">
            <h4 className="text-lg font-semibold mb-3 text-prompter-700">Example: Customer Service Chatbot Prompt</h4>
            <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 whitespace-pre-wrap">
              {examplePrompt}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorksSection;
