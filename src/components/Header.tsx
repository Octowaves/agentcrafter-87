
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import PrompterButton from './PrompterButton';
import { Link } from 'react-router-dom';
import AuthNav from './AuthNav';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

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
    { name: 'How It Works', href: '#how-it-works' },
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-prompter-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
              <span className="text-xl font-bold text-gray-900">Agentcrafter</span>
            </Link>
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
            {user ? (
              <Link to="/dashboard">
                <PrompterButton>
                  Dashboard
                </PrompterButton>
              </Link>
            ) : (
              <AuthNav />
            )}
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
              {user ? (
                <Link 
                  to="/dashboard" 
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PrompterButton>
                    Dashboard
                  </PrompterButton>
                </Link>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link 
                    to="/sign-in" 
                    className="w-full" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link 
                    to="/sign-up" 
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="w-full">Get Started Free</Button>
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
