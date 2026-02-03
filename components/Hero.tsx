
import React, { useMemo, useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

const SolarSystemBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  const planets = [
    { radius: '300px', duration: '40s', color: 'bg-blue-500/10', blur: 'blur-[60px]', size: 'w-32 h-32' },
    { radius: '500px', duration: '65s', color: 'bg-indigo-500/5', blur: 'blur-[80px]', size: 'w-58 h-58' },
    { radius: '750px', duration: '90s', color: 'bg-purple-500/5', blur: 'blur-[70px]', size: 'w-104 h-104' },
    { radius: '200px', duration: '30s', color: 'bg-cyan-500/10', blur: 'blur-[40px]', size: 'w-24 h-24' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layered Nebulous Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-full h-full bg-blue-900/10 blur-[150px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-full h-full bg-purple-900/10 blur-[150px] opacity-30 rounded-full"></div>

      {/* Star Layer 1 - Slow Spin */}
      <div className="absolute inset-[-50%] animate-spin-slow opacity-40">
        {stars.slice(0, 75).map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
              '--duration': star.duration,
              animationDelay: star.delay,
            } as any}
          />
        ))}
      </div>

      {/* Star Layer 2 - Faster Reverse Spin */}
      <div className="absolute inset-[-50%] animate-spin-reverse-slow opacity-30">
        {stars.slice(75, 150).map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size * 1.2}px`,
              height: `${star.size * 1.2}px`,
              left: star.left,
              top: star.top,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
              '--duration': star.duration,
              animationDelay: star.delay,
            } as any}
          />
        ))}
      </div>

      {/* Orbiting Planetary Bodies */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {planets.map((planet, i) => (
          <div
            key={i}
            className="absolute orbiting-body flex items-center justify-center"
            style={{
              '--orbit-radius': planet.radius,
              '--orbit-duration': planet.duration,
            } as any}
          >
            <div className={`${planet.size} ${planet.color} ${planet.blur} rounded-full`}></div>
          </div>
        ))}
      </div>

      {/* Central Pulsing Sun / Galaxy Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] galaxy-center pointer-events-none opacity-60"></div>
    </div>
  );
};

const TypewriterHeader = () => {
  const words = ['Talents', 'Solutions', 'Infrastructure', 'Businesses'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 min-w-[200px] inline-block">
      {words[index].substring(0, subIndex)}
      <span className="text-white cursor-blink ml-1">|</span>
    </span>
  );
};

const FloatingChip = ({ text, color, className, animationClass }: { text: string, color: string, className: string, animationClass: string }) => {
  const colorMap: Record<string, string> = {
    purple: 'bg-purple-600/20 border-purple-500/50 text-purple-300 shadow-purple-500/30',
    blue: 'bg-blue-600/20 border-blue-500/50 text-blue-300 shadow-blue-500/30',
    indigo: 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300 shadow-indigo-500/30',
    emerald: 'bg-emerald-600/20 border-emerald-500/50 text-emerald-300 shadow-emerald-500/30',
    amber: 'bg-amber-600/20 border-amber-500/50 text-amber-300 shadow-amber-500/30',
    cyan: 'bg-cyan-600/20 border-cyan-500/50 text-cyan-300 shadow-cyan-500/30',
    rose: 'bg-rose-600/20 border-rose-500/50 text-rose-300 shadow-rose-500/30',
  };

  return (
    <div className={`absolute hidden lg:block ${animationClass} ${className}`}>
      <div className={`px-5 py-2.5 border rounded-2xl backdrop-blur-xl text-[10px] font-extrabold tracking-[0.15em] uppercase shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 cursor-default ${colorMap[color] || colorMap.blue}`}>
        {text}
      </div>
    </div>
  );
};

interface HeroProps {
  onNavigateAcademy?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateAcademy }) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.85);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return;
      const rect = videoContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOfViewport = viewportHeight / 2;
      const centerOfElement = rect.top + rect.height / 2;

      const distanceFromCenter = Math.abs(centerOfElement - centerOfViewport);
      const threshold = viewportHeight * 0.7;

      let newScale = 1.05 - (distanceFromCenter / threshold) * 0.2;
      newScale = Math.min(1.05, Math.max(0.85, newScale));
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      <SolarSystemBackground />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-12 py-1 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">Innovating the Digital Frontier</span>
        </div>

        {/* Main Title with Typewriter */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 tracking-tighter leading-[0.9] text-white">
          Building World-Class <br className="hidden md:block" />
          <TypewriterHeader /> <br className="hidden md:block" />
          for the Future
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-400 mb-16 leading-relaxed font-light">
          We engineer high-performance applications, AI-driven solutions, world-class digital products and provide training that empower global brands to lead their industries.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8 mb-32">
          <button className="w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[1.5rem] font-bold text-lg transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] transform hover:-translate-y-2 active:scale-95">
            Start a Project
          </button>
          <button
            onClick={onNavigateAcademy}
            className="w-full sm:w-auto px-12 py-6 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-[1.5rem] font-bold text-lg transition-all backdrop-blur-xl transform hover:-translate-y-1.5 active:scale-95"
          >
            Our Programs
          </button>
        </div>

        {/* Massive Collection of Floating Chips */}
        <FloatingChip text="Web Dev" color="purple" className="top-[-3%] left-[3%]" animationClass="animate-float" />
        <FloatingChip text="Mobile" color="rose" className="top-10 left-[10%]" animationClass="animate-float-delayed" />
        <FloatingChip text="AI/ML" color="cyan" className="top-[3%] right-[8%]" animationClass="animate-float-slow" />
        <FloatingChip text="Cloud Ops" color="indigo" className="top-[-70px] left-[50%]" animationClass="animate-float-slow" />


        {/* Video Preview Frame */}
        <div
          ref={videoContainerRef}
          className="relative max-w-6xl mx-auto mt-20 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_80px_150px_-30px_rgba(0,0,0,0.9)]">
            <div className="aspect-video rounded-[2.5rem] bg-gray-900 flex items-center justify-center overflow-hidden relative group">
              {isPlaying ? (
                <div className="w-full h-full relative">
                  <iframe
                    src="../components/assets/animation.mp4"
                    title="Xydge Story Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                    aria-label="Close Video"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src="../components/assets/rodeo.jpg"
                    alt="Xydge Core Product Story"
                    className="w-full h-full object-cover opacity-60 transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/20 to-transparent"></div>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 md:w-28 md:h-28 bg-blue-600/90 backdrop-blur-2xl rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_50px_rgba(37,99,235,0.5)] group/play relative"
                      aria-label="Play Story Video"
                    >
                      <Play className="text-white ml-2 fill-white transition-transform group-hover/play:scale-110" size={40} />
                      <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping opacity-30"></div>
                    </button>
                    <span className="mt-6 text-white font-bold tracking-[0.2em] text-sm uppercase opacity-80 group-hover:opacity-100 transition-opacity">Watch our story</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Light Reflection Pool */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-32 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
