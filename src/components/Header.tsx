
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import PrompterButton from './PrompterButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-prompter-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="text-xl font-bold text-gray-900">Prompter</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-prompter-600 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <PrompterButton 
              onClick={() => window.location.href = "#pricing"}
            >
              Start for $10/month
            </PrompterButton>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-prompter-600 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <PrompterButton 
                onClick={() => {
                  window.location.href = "#pricing";
                  setMobileMenuOpen(false);
                }}
              >
                Start for $10/month
              </PrompterButton>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
