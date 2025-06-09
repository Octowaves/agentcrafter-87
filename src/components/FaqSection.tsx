
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What exactly is Agent Crafter?",
      answer: "Agent Crafter is a specialized toolkit designed to help developers create high-quality AI agents faster and more reliably. Our main tool, the Agent Prompter, guides you through creating optimized prompts for any type of AI agent through a conversational interface."
    },
    {
      question: "How does the Agent Prompter work?",
      answer: "The Agent Prompter uses a guided conversation approach to understand your agent's goals, context, and requirements. It then generates a professionally structured prompt that follows best practices for prompt engineering, saving you hours of trial and error."
    },
    {
      question: "Will Agent Crafter work with my existing setup?",
      answer: "Absolutely! Agent Crafter generates prompts that work with any LLM-based system including n8n, Make.com, Zapier, LangChain, OpenAI's API, HuggingFace models, or any other platform that accepts text prompts. The output is platform-agnostic."
    },
    {
      question: "Is this really free forever?",
      answer: "Yes! Our core Agent Prompter tool will always be free to use. We believe in making AI development accessible to everyone. As we add more advanced tools like the Blueprint Generator and Evaluator, we may introduce premium tiers, but the essential prompt creation will remain free."
    },
    {
      question: "Do I need prompt engineering experience?",
      answer: "Not at all! Agent Crafter was specifically designed for developers who aren't prompt engineering experts. Our guided approach makes it easy for anyone to create effective prompts without specialized knowledge of prompt engineering techniques."
    },
    {
      question: "What's coming next?",
      answer: "We're working on exciting new tools including the Blueprint Generator for automated workflow creation, an Evaluator for testing agent performance, and an Integrations Hub for seamless platform connections. All designed to make AI agent development even easier."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white" id="faq">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Agent Crafter
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-xl md:text-2xl font-semibold text-left hover:no-underline text-gray-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
