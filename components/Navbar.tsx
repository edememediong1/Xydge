
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'What We Do', id: 'what-we-do' },
    { name: 'Portfolio', id: 'portfolio', action: () => onNavigate('portfolio') },
    { name: 'Company', id: 'company', action: () => onNavigate('company') },
    { name: 'Academy', id: 'academy', action: () => onNavigate('academy') },
    { name: 'Contacts', id: 'contact', action: () => onNavigate('contact') }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      item.action();
    } else if (currentPage === 'home') {
      const element = document.getElementById(item.id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('home');
      setTimeout(() => {
         const element = document.getElementById(item.id);
         element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white transition-transform group-hover:rotate-12">X</div>
          <span className="text-xl font-bold tracking-tight">XYDGE</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNavClick(item)} 
              className={`text-sm font-medium transition-colors ${currentPage === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-white/5 py-6 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              className={`text-lg font-medium text-left ${currentPage === item.id ? 'text-blue-400' : 'text-gray-300'}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
