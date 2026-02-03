
import React, { useMemo } from 'react';
import { Target, Eye, Award, History, Users, Globe, ShieldCheck } from 'lucide-react';

const SolarSystemBackground = () => {
  const stars = useMemo(() => Array.from({ length: 100 }).map((_, i) => ({
    id: i, size: Math.random() * 2 + 0.5, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, duration: `${Math.random() * 3 + 2}s`, delay: `${Math.random() * 5}s`
  })), []);

  const planets = [
    { radius: '300px', duration: '45s', color: 'bg-blue-500/10', blur: 'blur-[40px]', size: 'w-24 h-24' },
    { radius: '500px', duration: '75s', color: 'bg-indigo-500/5', blur: 'blur-[60px]', size: 'w-32 h-32' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-[-50%] animate-spin-slow opacity-30">
        {stars.map((star) => (
          <div key={star.id} className="star" style={{ width: star.size, height: star.size, left: star.left, top: star.top, '--duration': star.duration, animationDelay: star.delay } as any} />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {planets.map((planet, i) => (
          <div key={i} className="absolute orbiting-body flex items-center justify-center" style={{ '--orbit-radius': planet.radius, '--orbit-duration': planet.duration } as any}>
            <div className={`${planet.size} ${planet.color} ${planet.blur} rounded-full`}></div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] galaxy-center pointer-events-none opacity-40"></div>
    </div>
  );
};

const Company: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden flex flex-col items-center min-h-[70vh] justify-center text-center">
        <SolarSystemBackground />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase mb-8 block">Global Engineering Excellence</span>
          <h1 className="text-6xl md:text-9xl font-extrabold mb-12 tracking-tighter leading-none text-white">Our Company</h1>
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Building the infrastructure for the digital future, one breakthrough at a time.
          </p>
        </div>
      </section>

      {/* 2. Mission and Vision */}
      <section className="py-24 px-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-12 rounded-[1rem] border-white/5 relative overflow-hidden group hover:border-blue-500/20 transition-all">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 blur-[60px] -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              To empower innovators and enterprises by delivering high-performance software solutions that drive growth, efficiency, and market leadership in an increasingly digital world.
            </p>
          </div>
          <div className="glass-card p-12 rounded-[1rem] border-white/5 relative overflow-hidden group hover:border-purple-500/20 transition-all">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[60px] -z-10 group-hover:bg-purple-500/10 transition-colors"></div>
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              To be the world's most trusted partner for digital transformation, recognized for engineering excellence and our commitment to training the next generation of tech titans.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Partners */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-4xl md:text-6xl font-extrabold tracking-tight">Ecosystem Partners</p>
          <p className="text-gray-400 mt-6 text-xl mb-12">We work with infrastructure and services by leading technology providers to deliver world-class software solutions.</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-10 md:h-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe" className="h-8 md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src="https://cdn.worldvectorlogo.com/logos/paystack-2.svg" alt="Paystack" className="h-8 md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt="Google Cloud" className="h-8 md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="h-8 md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src="https://cdn.worldvectorlogo.com/logos/docker-4.svg" alt="Docker" className="h-10 md:h-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
            <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind CSS" className="h-6 md:h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* 4. Licenses & Certifications */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Accreditations</h2>
            <p className="text-gray-400 mt-6 text-xl font-light">Our team members hold industry-recognized licenses and certifications that guarantee world-class quality.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <img src="https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" alt="AWS Certified AI Practitioner" className="h-24 md:h-32 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="AWS Certified Cloud Practitioner" className="h-24 md:h-32 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png" alt="AWS Certified Data Engineer" className="h-24 md:h-32 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png" alt="AWS Certified DevOps Engineer" className="h-24 md:h-32 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="https://images.credly.com/size/340x340/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png" alt="AWS Certified Machine Learning Engineer" className="h-24 md:h-32 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <img src="https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png" alt="AWS Certified Security Specialty" className="h-24 md:h-32 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* 5. History
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-6 mb-16">
            <div className="p-4 rounded-2xl bg-white/5 text-gray-400"><History size={32} /></div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our Journey</h2>
          </div>
          <div className="space-y-12">
            {[
              { year: "2021", event: "Xydge founded with a vision to bridge the gap between emerging markets and global tech standards." },
              { year: "2022", event: "Launched Xydge Academy, enrolling our first cohort of 100+ aspiring software engineers." },
              { year: "2023", event: "Expanded into enterprise solutions, delivering our first cross-continental multi-vendor platform." },
              { year: "2024", event: "Reached a milestone of 500+ successful graduates and established a presence in 3 global markets." },
              { year: "2025", event: "Pioneering AI-first development workflows and scaling our capacity training for global brands." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start relative pb-12 last:pb-0">
                {i < 4 && <div className="absolute left-[3.5rem] top-20 w-[1px] h-[calc(100%-20px)] bg-white/10 hidden md:block"></div>}
                <div className="text-4xl font-black text-blue-500 md:w-32 flex-shrink-0">{item.year}</div>
                <div className="glass-card p-8 rounded-3xl border-white/5 flex-grow">
                  <p className="text-lg text-gray-300 font-light leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Company;
