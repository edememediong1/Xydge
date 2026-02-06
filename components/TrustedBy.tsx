
import React from 'react';

const logos = [

  '/assets/logo.svg',
  '/assets/logo.svg',
  '/assets/logo.svg',
  '/assets/logo.svg',
  '/assets/logo.svg',
  '/assets/logo.svg',
  '/assets/logo.svg',
];

const TrustedBy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 overflow-hidden">
      <p className="text-center text-sm font-semibold text-gray-500 mb-12 uppercase tracking-widest">Trusted Partners</p>
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#030712] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-[#030712] after:after:to-transparent">
        <div className="flex w-[200%] animate-carousel-left">
          {/* First set of logos */}
          <div className="flex justify-around items-center w-full">
            {logos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="flex justify-center grayscale opacity-40 hover:opacity-100 transition-opacity px-8">
                <img src={logo} alt="Partner Logo" className="h-8 md:h-10 w-auto object-contain min-w-[80px]" />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex justify-around items-center w-full">
            {logos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="flex justify-center grayscale opacity-40 hover:opacity-100 transition-opacity px-8">
                <img src={logo} alt="Partner Logo" className="h-8 md:h-10 w-auto object-contain min-w-[80px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
