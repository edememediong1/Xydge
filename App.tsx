
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedWork from './components/FeaturedWork';
import TestimonialsHome from './components/TestimonialsHome';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Academy from './components/Academy';
import Portfolio from './components/Portfolio';
import Company from './components/Company';
import Contact from './components/Contact';
import CaseStudyDetail from './components/CaseStudyDetail';
import WhatsAppChat from './components/WhatsAppChat';

export type PageType = 'home' | 'academy' | 'portfolio' | 'case-study' | 'company' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedCaseId]);

  const handleNavigateToCase = (id: string) => {
    setSelectedCaseId(id);
    setCurrentPage('case-study');
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar onNavigate={(page) => setCurrentPage(page)} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Hero onNavigateAcademy={() => setCurrentPage('academy')} />
            <TrustedBy />
            <Services onNavigateAcademy={() => setCurrentPage('academy')} />
            <WhyChooseUs />
            <FeaturedWork onNavigatePortfolio={() => setCurrentPage('portfolio')} onSelectCase={handleNavigateToCase} />
            <TestimonialsHome />
            <CTA />
          </div>
        )}
        
        {currentPage === 'academy' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Academy />
          </div>
        )}

        {currentPage === 'portfolio' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Portfolio onSelectCase={handleNavigateToCase} />
          </div>
        )}

        {currentPage === 'company' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Company />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Contact />
          </div>
        )}

        {currentPage === 'case-study' && selectedCaseId && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CaseStudyDetail 
              caseId={selectedCaseId} 
              onBack={() => setCurrentPage('portfolio')} 
            />
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default App;
