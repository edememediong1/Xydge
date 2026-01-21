
import React from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  BarChart3, 
  ShieldAlert, 
  Cloud, 
  Cpu, 
  Globe,
  ArrowUpRight
} from 'lucide-react';

interface ServicesProps {
  onNavigateAcademy?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigateAcademy }) => {
  const trainingPrograms = [
    { name: 'Web Development', icon: <Code size={18} /> },
    { name: 'Mobile Development', icon: <Smartphone size={18} /> },
    { name: 'Data Science', icon: <Cpu size={18} /> },
    { name: 'Data Analysis', icon: <BarChart3 size={18} /> },
    { name: 'Cybersecurity', icon: <ShieldAlert size={18} /> },
    { name: 'Cloud Engineering', icon: <Cloud size={18} /> },
  ];

  return (
    <section className="py-32 px-6 relative" id="what-we-do">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.4em] mb-4 block">Our Mission</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tighter">What we Do</h2>
          <p className="max-w-4xl text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            We are committed to unlocking the full potential of our clients by delivering <span className="text-white font-medium">innovative, tailored IT solutions</span> and <span className="text-white font-medium">world-class training programs</span>. Our expertise spans across industries, enabling businesses to streamline operations, enhance efficiency, and gain a competitive edge through our people-first approach.
          </p>
        </div>

        {/* Dual Pillar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Tailored IT Solutions */}
          <div className="glass-card rounded-[3rem] p-10 md:p-14 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-10 group-hover:bg-blue-600/20 transition-colors"></div>
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 border border-blue-500/20">
                <Globe className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Tailored IT Solutions</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                We build custom enterprise software, advanced AI platforms, global marketplaces, and scalable SaaS products designed to transform your business operations and user experience.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Custom Web & Mobile Apps', 'AI & Machine Learning Integration', 'E-commerce & Fintech Platforms', 'Cloud Infrastructure Design'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="flex items-center space-x-2 text-blue-400 font-bold group-hover:text-blue-300 transition-colors mt-auto">
              <span>View Our Portfolio</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 2: World-Class Training */}
          <div className="glass-card rounded-[3rem] p-10 md:p-14 flex flex-col justify-between group hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] -z-10 group-hover:bg-purple-600/20 transition-colors"></div>
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-8 border border-purple-500/20">
                <Database className="text-purple-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-6">World-Class Training</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Empowering the next generation of tech leaders through intensive, hands-on training programs led by industry veterans and experts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {trainingPrograms.map((p, idx) => (
                  <div key={idx} className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-purple-400 mr-3">{p.icon}</div>
                    <span className="text-sm font-semibold text-gray-200">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onNavigateAcademy}
              className="flex items-center space-x-2 text-purple-400 font-bold group-hover:text-purple-300 transition-colors mt-auto"
            >
              <span>Enroll in Academy</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
