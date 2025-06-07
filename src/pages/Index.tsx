
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainVsEaseSection from '@/components/PainVsEaseSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhoItsForSection from '@/components/WhoItsForSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Agentcrafter | AI-Powered Agentic Prompt Engineering";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for header height
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PainVsEaseSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
