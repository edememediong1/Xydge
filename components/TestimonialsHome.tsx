
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Anne Usang",
    role: "Founder at Cloud with Anne Academy",
    text: "Xydge helped me turn a rough outline into a clear, teachable platform. They listened closely, simplified the flow, and the final build felt exactly like the vision in my head.",
    img: "https://ui-avatars.com/api/?name=Anne+Usang&background=0F172A&color=FFFFFF",
  },
  {
    name: "Esther Monday",
    role: "Project Manager at Ngage Media",
    text: "Communication was steady and honest. The team delivered each milestone on time and flagged risks early, which made stakeholder updates easy.",
    img: "https://ui-avatars.com/api/?name=Esther+Monday&background=0F172A&color=FFFFFF",
  },
  {
    name: "Sifon Thomas",
    role: "Founder of Vably",
    text: "We needed speed without cutting corners. Xydge shipped a clean MVP, then stayed to refine the details with real user feedback.",
    img: "https://ui-avatars.com/api/?name=Sifon+Thomas&background=0F172A&color=FFFFFF",
  },
  {
    name: "Mfon Emayak",
    role: "Design Lead at Dindel Designs",
    text: "Their engineers respected the design system and asked the right questions. The handoff was smooth and the UI polish was spot on.",
    img: "https://ui-avatars.com/api/?name=Mfon+Emayak&background=0F172A&color=FFFFFF",
  },
  {
    name: "Imaobong Danson",
    role: "Project Manager",
    text: "Dependable, practical, and calm under pressure. They made complex work feel manageable and kept the team aligned throughout.",
    img: "https://ui-avatars.com/api/?name=Imaobong+Danson&background=0F172A&color=FFFFFF",
  },
];

// Fix: Explicitly type as React.FC to allow standard React props like 'key' in JSX
const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => (
  <div className="glass-card p-6 rounded-[2rem] w-[350px] mx-4 flex-shrink-0 group hover:border-blue-500/30 transition-all">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400 mr-1" />)}
    </div>
    <p className="text-gray-300 text-sm italic font-light leading-relaxed mb-6">"{item.text}"</p>
    <div className="flex items-center space-x-3">
      <img src={item.img} className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all" alt={item.name} />
      <div>
        <h4 className="text-sm font-bold text-white">{item.name}</h4>
        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{item.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsHome: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Global Feedback</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">What Clients Say</h2>
      </div>

      <div className="relative space-y-10">
        {/* Row 1: Sliding Left */}
        <div className="flex w-[200%] animate-carousel-left">
          <div className="flex">
            {testimonials.map((t, i) => <TestimonialCard key={i} item={t} />)}
          </div>
          <div className="flex">
            {testimonials.map((t, i) => <TestimonialCard key={`dup1-${i}`} item={t} />)}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="flex w-[200%] animate-carousel-right">
          <div className="flex">
            {[...testimonials].reverse().map((t, i) => <TestimonialCard key={i} item={t} />)}
          </div>
          <div className="flex">
            {[...testimonials].reverse().map((t, i) => <TestimonialCard key={`dup2-${i}`} item={t} />)}
          </div>
        </div>
        
        {/* Overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TestimonialsHome;
