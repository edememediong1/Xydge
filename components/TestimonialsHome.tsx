
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: "John Doe", role: "CEO at FintechX", text: "Xydge delivered beyond our expectations. Their technical prowess is unmatched.", img: "https://i.pravatar.cc/100?u=1" },
  { name: "Alice Smith", role: "Product Lead at HealthCo", text: "The team at Xydge helped us scale our MVP to 100k users in record time.", img: "https://i.pravatar.cc/100?u=2" },
  { name: "Robert Brown", role: "Founder of ShopSync", text: "Reliable, fast, and high-quality engineering. Highly recommended for complex builds.", img: "https://i.pravatar.cc/100?u=3" },
  { name: "Jessica Lee", role: "CTO at EduFlow", text: "The academy students they place are top-tier. Their internal training is elite.", img: "https://i.pravatar.cc/100?u=4" },
  { name: "Michael Gray", role: "Venture Partner", text: "Xydge doesn't just write code; they build businesses. Truly strategic partners.", img: "https://i.pravatar.cc/100?u=5" },
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
