
import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
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

const HomePage: React.FC<{
  onNavigateAcademy: () => void;
  onNavigatePortfolio: () => void;
  onSelectCase: (id: string) => void;
}> = ({ onNavigateAcademy, onNavigatePortfolio, onSelectCase }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Hero onNavigateAcademy={onNavigateAcademy} />
    <TrustedBy />
    <Services onNavigateAcademy={onNavigateAcademy} />
    <WhyChooseUs />
    <FeaturedWork onNavigatePortfolio={onNavigatePortfolio} onSelectCase={onSelectCase} />
    <TestimonialsHome />
    <CTA />
  </div>
);

const CaseStudyRoute: React.FC = () => {
  const navigate = useNavigate();
  const { caseId } = useParams();

  if (!caseId) {
    return null;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CaseStudyDetail caseId={caseId} onBack={() => navigate('/portfolio')} />
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigateToCase = (id: string) => {
    navigate(`/case-study/${id}`);
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigateAcademy={() => navigate('/academy')}
                onNavigatePortfolio={() => navigate('/portfolio')}
                onSelectCase={handleNavigateToCase}
              />
            }
          />
          <Route
            path="/academy"
            element={
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Academy />
              </div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Portfolio onSelectCase={handleNavigateToCase} />
              </div>
            }
          />
          <Route
            path="/company"
            element={
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Company />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Contact />
              </div>
            }
          />
          <Route path="/case-study/:caseId" element={<CaseStudyRoute />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default App;
