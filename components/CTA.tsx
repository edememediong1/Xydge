
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Visual background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="text-[12vw] font-black tracking-tighter text-white">THE FUTURE</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-extrabold mb-10 leading-tight">
          Let's Build the Future Together.
        </h2>
        <a 
          href="https://wa.me/2347047258156" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-white text-gray-950 font-black text-lg rounded-2xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-[pulse_2s_ease-in-out_infinite]"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default CTA;
