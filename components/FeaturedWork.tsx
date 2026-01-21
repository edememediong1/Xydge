
import React from 'react';

interface FeaturedWorkProps {
  onNavigatePortfolio: () => void;
  onSelectCase: (id: string) => void;
}

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onNavigatePortfolio, onSelectCase }) => {
  return (
    <section className="py-24 px-6" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Curated Work</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Featured Case Studies</h2>
          <p className="text-gray-400 text-sm">Compilation of some of our best works</p>
        </div>

        <div 
          onClick={() => onSelectCase('kulture-market')}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 shadow-2xl cursor-pointer group"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-10 lg:p-20 order-2 lg:order-1">
              <span className="text-blue-300 text-sm font-semibold mb-4 block">Kulture Market | 2025</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">
                Modernized Multi-Vendor E-commerce for Kulture Market
              </h3>
              <p className="text-blue-100/70 mb-10 text-lg max-w-md font-light leading-relaxed">
                A multi-vendor solution connecting diverse cultures globally. Shop and sell worldwide, effortlessly.
              </p>
              <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl transition-transform hover:scale-105 active:scale-95">
                Explore Product
              </button>
            </div>

            <div className="flex-1 order-1 lg:order-2 p-6 lg:p-0 flex items-center justify-center">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 transform rotate-[-2deg] lg:rotate-[-5deg] lg:translate-x-10 transition-transform group-hover:rotate-0">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200" 
                  alt="Kulture Market Showcase" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onNavigatePortfolio}
            className="text-gray-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-transparent hover:border-white pb-1"
          >
            Explore Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
