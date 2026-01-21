
import React from 'react';
import { ShieldCheck, Zap, Maximize, Palette, Globe } from 'lucide-react';

const cards = [
  { title: 'World-Class Engineering', icon: <ShieldCheck size={20} className="text-blue-400" /> },
  { title: 'Fast Delivery', icon: <Zap size={20} className="text-blue-400" /> },
  { title: 'Scalable Architecture', icon: <Maximize size={20} className="text-blue-400" /> },
  { title: 'Ui/Ux Excellence', icon: <Palette size={20} className="text-blue-400" /> },
  { title: 'Global Standard Quality', icon: <Globe size={20} className="text-blue-400" /> },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Xydge</h2>
          <p className="text-gray-400">Guaranteed excellent delivery; focusing on innovations <br className="hidden md:block" /> that directly boost your ROI.</p>
        </div>

        {/* Grid Layout inspired by the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((card, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold w-1/2">{card.title}</h3>
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  {card.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {cards.slice(3, 5).map((card, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold w-1/2">{card.title}</h3>
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  {card.icon}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
