
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AgentCrafterButton from './AgentCrafterButton';
import { Link } from 'react-router-dom';
import AuthNav from './AuthNav';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                A
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Agent Crafter
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium text-lg transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            {user ? (
              <Link to="/dashboard">
                <AgentCrafterButton className="shadow-lg text-lg px-6 py-3">
                  Dashboard
                </AgentCrafterButton>
              </Link>
            ) : (
              <AuthNav />
            )}
          </div>
          
          <button 
            className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-100">
          <div className="container px-4 mx-auto py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 text-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {user ? (
                <Link 
                  to="/dashboard" 
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <AgentCrafterButton className="w-full text-lg py-3">
                    Dashboard
                  </AgentCrafterButton>
                </Link>
              ) : (
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Link 
                    to="/sign-in" 
                    className="w-full" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <AgentCrafterButton variant="outline" className="w-full text-lg py-3">Sign In</AgentCrafterButton>
                  </Link>
                  <Link 
                    to="/sign-up" 
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <AgentCrafterButton className="w-full text-lg py-3">Start Building - $5.99/month</AgentCrafterButton>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
