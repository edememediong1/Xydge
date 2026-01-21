
import React, { useMemo } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Headphones } from 'lucide-react';

const SolarSystemBackground = () => {
  const stars = useMemo(() => Array.from({ length: 80 }).map((_, i) => ({
    id: i, size: Math.random() * 2 + 0.5, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, duration: `${Math.random() * 3 + 2}s`, delay: `${Math.random() * 5}s`
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-[-50%] animate-spin-slow opacity-20">
        {stars.map((star) => (
          <div key={star.id} className="star" style={{ width: star.size, height: star.size, left: star.left, top: star.top, '--duration': star.duration, animationDelay: star.delay } as any} />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] galaxy-center pointer-events-none opacity-30"></div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden flex flex-col items-center min-h-[60vh] justify-center text-center">
        <SolarSystemBackground />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase mb-8 block">Connect With Us</span>
          <h1 className="text-6xl md:text-9xl font-extrabold mb-12 tracking-tighter leading-none text-white">Let's Build</h1>
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Have a project in mind or a question for our team? We're here to help you scale.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Info Panel */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Reach Out</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  Our engineering and admissions teams are available across multiple timezones to ensure seamless communication.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <Mail className="text-blue-400" />, label: "Email", value: "hello@xydge.com", sub: "Typically replies within 4 hours" },
                  { icon: <Phone className="text-emerald-400" />, label: "Phone", value: "+234 808 332 3258", sub: "Mon-Fri from 9am to 6pm" },
                  { icon: <MapPin className="text-rose-400" />, label: "Address", value: "Digital Square, Victoria Island", sub: "Lagos, Nigeria" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-white mb-1">{item.value}</p>
                      <p className="text-sm text-gray-500 font-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-8 rounded-3xl border-white/5 flex items-center space-x-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Global Availability</h4>
                  <p className="text-sm text-gray-500 font-light">Supporting partners in 15+ countries.</p>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="glass-card p-10 md:p-14 rounded-[3.5rem] border-white/5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10"></div>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-white" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-gray-400">
                    <option>General Inquiry</option>
                    <option>New Project Proposal</option>
                    <option>Academy Enrollment</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-white resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-2xl shadow-2xl shadow-blue-900/20 transition-all flex items-center justify-center space-x-3 active:scale-95">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
