
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'What We Do', id: 'what-we-do', route: '/', scrollId: 'what-we-do' },
    { name: 'Portfolio', id: 'portfolio', route: '/portfolio' },
    { name: 'Company', id: 'company', route: '/company' },
    { name: 'Academy', id: 'academy', route: '/academy' },
    { name: 'Contacts', id: 'contact', route: '/contact' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.scrollId) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.scrollId as string);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(item.scrollId as string);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.route) {
      navigate(item.route);
    }
    setIsMobileMenuOpen(false);
  };

  const pathname = location.pathname;
  const isPortfolioActive = pathname === '/portfolio' || pathname.startsWith('/case-study/');

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-1 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <img src="/assets/xydgecommercialbg.png" alt="Xydge Logo" className="h-14 w-auto transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight">XYDGE</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = item.route === '/portfolio'
              ? isPortfolioActive
              : pathname === item.route;

            return (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item)} 
                className={`text-sm font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-white/5 py-6 px-6 flex flex-col space-y-4">
          {navItems.map((item) => {
            const isActive = item.route === '/portfolio'
              ? isPortfolioActive
              : pathname === item.route;

            return (
              <button 
                key={item.id} 
                className={`text-lg font-medium text-left ${isActive ? 'text-blue-400' : 'text-gray-300'}`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
