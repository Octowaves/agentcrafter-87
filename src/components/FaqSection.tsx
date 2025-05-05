
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is a 'prompt generation'?",
      answer: "A prompt generation is the creation of one optimized AI prompt through our guided conversation flow. Each time you create and receive a new prompt, it counts as one generation from your monthly allocation."
    },
    {
      question: "What happens after 100 prompts?",
      answer: "Once you've used all 100 prompts in your monthly allocation, you'll need to wait until your next billing cycle for your allocation to reset. We'll soon be introducing higher-tier plans with more generations for power users."
    },
    {
      question: "Will Prompter work with my N8N setup?",
      answer: "Yes! Prompter generates prompts that work with any LLM-based system. You can use our prompts with N8N, Make.com, Zapier, OpenAI's API, HuggingFace models, or any other platform that accepts text prompts."
    },
    {
      question: "Can I upgrade later?",
      answer: "Absolutely. As we roll out additional plans with more features and higher prompt allocations, you'll have the option to upgrade your subscription at any time."
    },
    {
      question: "Is this beginner friendly?",
      answer: "Definitely! Prompter was designed specifically to help users who aren't prompt engineering experts. Our guided conversation approach makes it easy for beginners to create effective prompts without any specialized knowledge."
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="faq">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
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
