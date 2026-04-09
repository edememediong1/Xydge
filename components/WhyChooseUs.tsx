
import React from 'react';
import { ShieldCheck, Zap, Maximize, Palette, Globe } from 'lucide-react';

const cards = [
  { title: 'World-Class Engineering', icon: <ShieldCheck size={20} className="text-blue-400" />, description: 'We employ top-tier talent and strictly adhere to best practices for robust, maintainable software.' },
  { title: 'Fast Delivery', icon: <Zap size={20} className="text-blue-400" />, description: 'Agile methodologies and optimized workflows ensure your product reaches the market swiftly.' },
  { title: 'Scalable Architecture', icon: <Maximize size={20} className="text-blue-400" />, description: 'Future-proof solutions designed to grow seamlessly alongside your expanding business requirements.' },
  { title: 'Ui/Ux Excellence', icon: <Palette size={20} className="text-blue-400" />, description: 'Intuitive and engaging user interfaces that prioritize user experience and increase retention.' },
  { title: 'Global Standard Quality', icon: <Globe size={20} className="text-blue-400" />, description: 'Rigorous testing and assurance protocols to meet and exceed international software standards.' },
];

const FeatureCard = ({ card, index }: { card: typeof cards[0], index: number }) => {
  // Generate random deterministic animation delays based on card index to desynchronize lines
  const delay1 = (index * 1.5) % 4;
  const delay2 = (index * 1.2 + 1) % 5;
  const delay3 = (index * 2.1 + 0.5) % 6;
  const delay4 = (index * 1.8 + 2) % 4;

  return (
    <div className="group w-full h-[240px] [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
        {/* Front Side */}
        <div className="absolute inset-0 glass-card p-6 md:p-8 rounded-2xl [backface-visibility:hidden] flex flex-col justify-between overflow-hidden border border-white/5 border-b-blue-500/20 bg-[#010409]/60 backdrop-blur-md">
          
          {/* Traveling Lines (Train Intersections) Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-100">
            {/* Soft traveling gradients matching section background */}
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.2)_0%,transparent_40%)] animate-[spin_30s_linear_infinite]"></div>
            
            {/* Extremely Faint Moving Intersecting Lines */}
            <div className="absolute w-full h-[1px] top-[30%] -left-[100%] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" style={{ animation: `slide-right 5.5s linear infinite ${delay1}s` }}></div>
            <div className="absolute w-full h-[1px] top-[65%] -right-[100%] bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" style={{ animation: `slide-left 7.5s linear infinite ${delay2}s` }}></div>
            <div className="absolute h-full w-[1px] left-[35%] -top-[100%] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" style={{ animation: `slide-down 6.5s linear infinite ${delay3}s` }}></div>
            <div className="absolute h-full w-[1px] left-[75%] -bottom-[100%] bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" style={{ animation: `slide-up 8.5s linear infinite ${delay4}s` }}></div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#010409]/80"></div>
          </div>

        <div className="flex justify-end w-full relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            {React.cloneElement(card.icon as React.ReactElement, { size: 24 })}
          </div>
        </div>
        
        {/* Re-sized intuitively large text */}
        <h3 className="relative z-10 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 mt-auto pr-4 shadow-sm">
          {card.title}
        </h3>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-500/50 to-blue-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300"></div>
      </div>
      
      {/* Back Side */}
      <div className="absolute inset-0 rounded-2xl border border-blue-400/40 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        
        {/* Lighter animated background for Back side */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-800/90 backdrop-blur-2xl"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-[spin_15s_linear_infinite] opacity-60"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent_40%,rgba(255,255,255,0.05)_50%,transparent_60%)] animate-[pulse_3s_ease-in-out_infinite]"></div>

        <div className="relative z-10 w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center border border-blue-300/40 mb-5 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          {React.cloneElement(card.icon as React.ReactElement, { className: "text-white" })}
        </div>
        <h3 className="relative z-10 text-xl font-bold text-white mb-3 drop-shadow-md">{card.title}</h3>
        <p className="relative z-10 text-sm md:text-base text-blue-50 font-medium leading-relaxed drop-shadow-sm px-6">{card.description}</p>
      </div>
    </div>
  </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <style>{`
        @keyframes slide-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(200%); }
        }
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200%); }
        }
        @keyframes slide-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(200%); }
        }
        @keyframes slide-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-200%); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Xydge</h2>
          <p className="text-gray-400">Guaranteed excellent delivery; focusing on innovations <br className="hidden md:block" /> that directly boost your ROI.</p>
        </div>

        {/* Grid Layout inspired by the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {cards.slice(3, 5).map((card, i) => (
             <FeatureCard key={i+3} card={card} index={i+3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
