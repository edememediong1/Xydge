
import React from 'react';
import { ArrowLeft, CheckCircle2, Globe, TrendingUp, Users, DollarSign, Target, Sparkles, MessageSquare } from 'lucide-react';

interface CaseStudyDetailProps {
  caseId: string;
  onBack: () => void;
}

const mockData: Record<string, any> = {
  'kulture-market': {
    title: 'Kulture Market',
    tagline: 'Modernizing multi-vendor commerce for a global audience.',
    img: '/assets/component1.png',
    stats: [
      { label: 'Countries Reach', value: '2+', icon: <Globe size={18} /> },
      { label: 'Active Sellers', value: '2k+', icon: <Users size={18} /> },
      { label: 'Platform Growth', value: '340%', icon: <TrendingUp size={18} /> },
      { label: 'Total Sales Vol.', value: '$', icon: <DollarSign size={18} /> },
    ],
    mission: "The mission was clear: democratize global artisan trade. We set out to build a marketplace that abstracts away the complexities of international logistics, payments, and language barriers, allowing creators to focus solely on their craft.",
    origin: "It began as a local initiative in 2025. Xydge was commissioned to scale the product for a global launch. We reimagined the backend architecture from the ground up, moving from a monolithic structure to an event-driven microservices architecture to handle seasonal surges.",
    features: [
      { title: 'Real-time Escrow Engine', desc: 'Secure transaction handling that holds funds until delivery is verified globally.' },
      { title: 'AI Logistics Bridge', desc: 'Predictive routing system that selects the most efficient global carrier based on real-time data.' },
      { title: 'Unified Vendor Dash', desc: 'A complex data cockpit providing sellers with predictive inventory insights.' },
      { title: 'Instant Currency FX', desc: 'Settlement in 2 local currencies without legacy bank latency.' },
    ],
    usp: "The platform's real advantage is a fast, seamless trading experience with owner-first vendor dashboards and a purpose-built rental engine — users can list, trade, and run rentals with efficient rental logic while keeping full control of their dashboards."
  },
  'pulse-health': {
    title: 'Pulse Health',
    tagline: 'AI-driven patient monitoring for the future of care.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2400',
    stats: [
      { label: 'Hospitals Active', value: '120+', icon: <Target size={18} /> },
      { label: 'Patients Tracked', value: '1M+', icon: <Users size={18} /> },
      { label: 'Data Accuracy', value: '99.9%', icon: <Sparkles size={18} /> },
      { label: 'Saved Costs', value: '$2M/yr', icon: <DollarSign size={18} /> },
    ],
    mission: "To eliminate preventable hospital errors through predictive health signals. Pulse Health aims to give every patient a guardian angel in the form of high-fidelity AI monitoring.",
    origin: "Born in a med-tech lab in San Francisco. Xydge was tasked with building the secure, HIPAA-compliant streaming backend that processes 10,000 health signals per second per patient.",
    features: [
      { title: 'Predictive Alerting', desc: 'AI models that predict adverse events up to 4 hours before they occur.' },
      { title: 'Zero-Latency Stream', desc: 'Real-time telemetry using WebSockets for millisecond-accurate monitoring.' },
      { title: 'Auto-Reporting', desc: 'Integrated medical reporting for doctors, reducing paperwork by 60%.' },
    ],
    usp: "Pulse Health stands out with its 'Bio-Signature' encryption—a first-of-its-kind security layer that uses the patient's unique biological rhythm to authorize data access."
  }
};

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ caseId, onBack }) => {
  const data = mockData[caseId] || mockData['kulture-market'];

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-400 hover:text-white mb-12 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-tight">{data.title}</h1>
          <p className="md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">{data.tagline}</p>
        </div>

        {/* Hero Image */}
        <div className="rounded-[1rem] border border-white/5 mb-16 aspect-[21/14] shadow-2xl">
          <img src={data.img} className="w-full h-full object-cover rounded-[1rem]" alt={data.title} />
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {data.stats.map((stat: any, i: number) => (
            <div key={i} className="glass-card p-4 md:p-10 rounded-[1rem] border-white/5 text-center hover:border-blue-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-black mb-1">{stat.value}</p>
              <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & How it Began */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
          <div className="glass-card p-6 md:p-12 rounded-[2rem] border-blue-500/10">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 text-blue-500"><Target size={20} /></span>
              The Mission
            </h2>
            <p className="md:text-xl text-gray-400 leading-relaxed font-light">{data.mission}</p>
          </div>
          <div className="glass-card p-6 md:p-12 rounded-[2rem] border-purple-500/10">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4 text-purple-500"><Sparkles size={20} /></span>
              How it Began
            </h2>
            <p className="md:text-xl text-gray-400 leading-relaxed font-light">{data.origin}</p>
          </div>
        </div>

        {/* Standout Features */}
        <div className="mb-32">
          <h2 className="text-4xl font-extrabold mb-16 tracking-tight">Technical Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((f: any, i: number) => (
              <div key={i} className="glass-card p-10 rounded-[2rem] border-white/5 group hover:border-blue-500/20 transition-all">
                <div className="flex items-start space-x-6">
                  <div className="mt-1 flex-shrink-0 text-blue-500"><CheckCircle2 size={24} /></div>
                  <div><h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{f.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-light">{f.desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What makes it stand out */}
        <div className="glass-card p-12 lg:p-20 rounded-[2rem] border-blue-500/20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10"></div>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 uppercase tracking-widest">The Competitive Edge</h2>
            <p className="text-base md:text-xl lg:text-4xl text-gray-200 font-light leading-snug italic">"{data.usp}"</p>
          </div>
        </div>

        {/* Final CTA for conversion */}
        <section className="py-32 px-6 text-center border-t border-white/5 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none text-[15vw] font-black">LEGACY</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight">Build Something <br className="hidden md:block" /> Similar With Us</h2>
          <button className="px-4 md:px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black md:text-xl rounded-2xl transition-all shadow-2xl active:scale-95 flex items-center mx-auto">
            <MessageSquare className="mr-1" />Contact Engineering Team
          </button>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
