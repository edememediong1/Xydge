
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
        <button className="px-10 py-5 bg-white text-gray-950 font-black text-lg rounded-2xl transition-all hover:bg-blue-50 hover:scale-105 active:scale-95 shadow-xl">
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default CTA;
