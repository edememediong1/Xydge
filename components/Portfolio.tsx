
import React, { useState, useEffect, useMemo } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Maximize, Palette, Globe, Layers, Activity, Smartphone, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const cases = [
  { id: 'kulture-market', title: 'Kulture Market', sector: 'E-commerce', desc: 'A global multi-vendor platform connecting local artisans to worldwide markets with automated logistics and FX settlement.', img:'../components/assets/component1.png' },
];

const sectors = [
  { name: 'Fintech', icon: <Activity className="text-blue-400" />, desc: 'Building high-frequency trading platforms and secure gateways.' },
  { name: 'Healthtech', icon: <ShieldCheck className="text-emerald-400" />, desc: 'HIPAA compliant medical systems and telemedicine solutions.' },
  { name: 'E-commerce', icon: <Layers className="text-purple-400" />, desc: 'Scalable multi-vendor platforms and specialized marketplaces.' },
  { name: 'Mobile Apps', icon: <Smartphone className="text-rose-400" />, desc: 'Native and hybrid apps for billions of devices globally.' },
];

const clientReviews = [
  { name: "John Stevens", role: "CTO, Fintech Solutions", text: "Xydge built our infrastructure to handle 10k TPS. Flawless execution and world-class engineering standards.", img: "https://i.pravatar.cc/100?u=j1" },
  { name: "Maria Garcia", role: "Founder, HealthBridge", text: "The team understood our complex medical requirements instantly and delivered a life-saving AI platform.", img: "https://i.pravatar.cc/100?u=j2" },
  { name: "Liam Chen", role: "Product VP, GlobalCart", text: "Best multi-vendor logic we've ever implemented. Scalable, fast, and remarkably intuitive UI.", img: "https://i.pravatar.cc/100?u=j3" },
];

const SVGFlowLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Geometric Data Paths */}
    <path className="animate-draw" d="M0 200H400V600H800V100H1200V400H1440" stroke="url(#paint0_linear)" strokeWidth="0.5" />
    <path className="animate-draw" style={{ animationDelay: '-3s' }} d="M1440 600H1100V300H700V700H300V100H0" stroke="url(#paint1_linear)" strokeWidth="0.5" />
    <path className="animate-draw" style={{ animationDelay: '-6s' }} d="M200 0V300H600V500H1000V800" stroke="url(#paint2_linear)" strokeWidth="0.5" />
    <path className="animate-draw" style={{ animationDelay: '-1s' }} d="M1200 800V400H800V600H400V0" stroke="url(#paint0_linear)" strokeWidth="0.5" />
    
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="200" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#818CF8" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="1440" y1="600" x2="0" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="paint2_linear" x1="200" y1="0" x2="1000" y2="800" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

const Portfolio: React.FC<{ onSelectCase: (id: string) => void }> = ({ onSelectCase }) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const StarField = () => {
    const stars = useMemo(() => Array.from({ length: 120 }).map((_, i) => ({ 
      id: i, size: Math.random() * 2 + 0.5, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, duration: `${Math.random() * 4 + 3}s` 
    })), []);
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {stars.map(s => <div key={s.id} className="star" style={{ width: s.size, height: s.size, left: s.left, top: s.top, '--duration': s.duration } as any} />)}
      </div>
    );
  };

  // Automated Carousel (5s)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCaseIdx((prev) => (prev + 1) % cases.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCaseIdx((prev) => (prev - 1 + cases.length) % cases.length);
      setIsAnimating(false);
    }, 400);
  };

  const currentCase = cases[activeCaseIdx];

  return (
    <div className="pt-40 pb-20 relative bg-[#030712]">
      {/* Portfolio Minimalist Hero */}
      <section className="px-6 mb-32 mx-auto text-center relative z-10 min-h-[60vh] flex flex-col items-center justify-center">
        <StarField />
        <SVGFlowLines />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] galaxy-center pointer-events-none -z-10 opacity-40"></div>
        
        <div className="relative z-20 space-y-12">
          <div className="inline-block">
            <span className="text-[6px] font-black tracking-[0.5em] text-blue-500 uppercase px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
              Portfolio & Impact
            </span>
          </div>
          
          <h1 className="text-4xl md:text-[10rem] font-extrabold tracking-tighter leading-[0.85] text-white">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">Masterpieces</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
            A curated selection of high-performance software engineered to define the next era of industry standards.
          </p>
        </div>
      </section>

      {/* Interactive Case Study Carousel */}
      <section className="px-6 mb-32 max-w-7xl mx-auto">
        <div className="relative glass-card rounded-[4rem] overflow-hidden border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
          <div className={`flex flex-col lg:flex-row h-full transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em]">{currentCase.sector}</span>
                <div className="h-[1px] w-12 bg-blue-500/30"></div>
              </div>
              <h3 className="text-4xl lg:text-7xl font-extrabold mb-8 tracking-tight">{currentCase.title}</h3>
              <p className="text-gray-400 text-lg lg:text-2xl font-light leading-relaxed mb-12">{currentCase.desc}</p>
              <div className="flex flex-wrap gap-6">
                <button onClick={() => onSelectCase(currentCase.id)} className="px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/20 active:scale-95 flex items-center transition-all">
                  <span>Explore Build</span> <ArrowUpRight className="ml-3" size={20} />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden">
              <img src={currentCase.img} className="w-full h-full object-cover" alt={currentCase.title} />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 lg:from-gray-950/90 to-transparent"></div>
              {/* Overlay graphics */}
              <div className="absolute top-10 right-10 p-6 glass-card rounded-2xl border-white/10 hidden lg:block backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Build Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-white uppercase tracking-tighter">Operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-10 left-12 lg:left-24 flex items-center space-x-8">
            <div className="flex space-x-2">
              {cases.map((_, i) => (
                <button key={i} onClick={() => setActiveCaseIdx(i)} className={`h-1.5 rounded-full transition-all duration-500 ${activeCaseIdx === i ? 'w-12 bg-blue-500' : 'w-3 bg-white/10 hover:bg-white/20'}`} />
              ))}
            </div>
            <div className="flex space-x-4">
              <button onClick={handlePrev} className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"><ChevronLeft size={24} /></button>
              <button onClick={handleNext} className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors / Verticals */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Industries of Impact</h2>
            <p className="text-gray-400 font-light">Specialized expertise in the verticals defining the modern economy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, i) => (
              <div key={i} className="glass-card p-12 rounded-[3.5rem] border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">{sector.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{sector.name}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback "The Train" Carousel */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">What Clients Say</h2>
          <p className="text-gray-400 mt-6 font-light text-xl">Testimonials from our global ecosystem of partners.</p>
        </div>
        <div className="flex w-[200%] animate-carousel-left marquee-mask">
          <div className="flex">
            {clientReviews.concat(clientReviews).map((r, i) => (
              <div key={i} className="glass-card p-8 md:p-12 rounded-[3.5rem] border-white/5 w-[300px] mx-6 flex-shrink-0 flex flex-col justify-between hover:border-blue-500/20 transition-all">
                <div>
                  <div className="flex mb-6">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400 mr-1" />)}</div>
                  <p className="text-gray-200 italic mb-10 font-light text-lg md:text-xl leading-relaxed">"{r.text}"</p>
                </div>
                <div className="flex items-center space-x-5">
                  <img src={r.img} className="w-14 h-14 rounded-full border-2 border-blue-500/20 object-cover" alt={r.name} />
                  <div>
                    <h4 className="font-bold text-white text-md text-base md:text-lg">{r.name}</h4>
                    <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] -z-10 rounded-full"></div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-12 tracking-tight leading-tight">Build Your Product <br className="hidden md:block" /> with the Best.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="px-14 py-7 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-2xl shadow-2xl active:scale-95 transition-all">Start Project</button>
          <button className="px-14 py-7 glass-card hover:bg-white/5 border-white/10 text-white font-bold text-xl rounded-2xl active:scale-95 transition-all">Talk to Engineering</button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
