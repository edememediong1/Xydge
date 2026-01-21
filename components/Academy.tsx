
import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  BarChart3, 
  ShieldAlert, 
  Cloud, 
  Cpu, 
  CheckCircle2, 
  ArrowLeft,
  Calendar,
  Clock,
  Briefcase,
  Users,
  Award,
  Star,
  Quote,
  Palette,
  MessageCircle,
  ClipboardList,
  X,
  Zap,
  TrendingUp,
  Brain,
  Globe,
  ArrowRight
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
  duration: string;
  level: string;
  details: string;
  curriculum: { week: string; topics: string[] }[];
}

const coreCourses: Course[] = [
  {
    id: 'web-dev',
    title: 'Fullstack Web Development',
    icon: <Code />,
    color: 'emerald',
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    desc: 'Master the full stack from HTML/CSS to React and Node.js.',
    details: 'Our Web Development program is designed to take you from absolute zero to a industry-ready developer. You will build real-world applications and learn modern architectural patterns.',
    curriculum: [
      { week: 'Week 1: Foundations', topics: ['Semantic HTML5 Architecture', 'CSS Variables & BEM Methodology', 'Web Accessibility (ARIA)'] },
      { week: 'Week 2: Advanced Layouts', topics: ['CSS Flexbox & Grid Masterclass', 'Responsive Design Systems', 'Modern CSS Tooling (Sass/PostCSS)'] },
      { week: 'Week 3: JavaScript Core', topics: ['Execution Context & Closures', 'Prototypes & Classes', 'ES6+ Implementation'] },
      { week: 'Week 4-12: Frameworks & Scaling', topics: ['React Ecosystem', 'State Management', 'Fullstack Integration with Next.js'] },
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    icon: <Smartphone />,
    color: 'rose',
    duration: '10 Weeks',
    level: 'Intermediate',
    desc: 'Build native-like apps for iOS and Android using React Native.',
    details: 'Learn how to create high-performance mobile applications with a single codebase. Focus on performance, native bridge, and mobile UI/UX.',
    curriculum: [
      { week: 'Week 1: Ecosystem', topics: ['Expo vs CLI Setup', 'Native Modules Overview', 'JSX for Mobile'] },
      { week: 'Week 2-10: Native App Mastery', topics: ['Hardware APIs', 'Push Notifications', 'App Store Deployment'] },
    ]
  },
  {
    id: 'data-sci',
    title: 'Data Science',
    icon: <Cpu />,
    color: 'amber',
    duration: '14 Weeks',
    level: 'Advanced',
    desc: 'Dive into AI, Machine Learning, and predictive analytics.',
    details: 'Transform raw data into intelligence. This course covers everything from statistical analysis to deploying machine learning models.',
    curriculum: [
      { week: 'Week 1: Statistics', topics: ['Probability Theory', 'Inferential Statistics', 'Central Limit Theorem'] },
      { week: 'Week 2-14: ML & Deep Learning', topics: ['Neural Networks', 'Feature Engineering', 'Model Deployment'] },
    ]
  },
  {
    id: 'data-anal',
    title: 'Data Analysis',
    icon: <BarChart3 />,
    color: 'cyan',
    duration: '8 Weeks',
    level: 'Beginner',
    desc: 'Learn to extract actionable insights from complex datasets.',
    details: 'Ideal for business professionals wanting to make data-driven decisions. Learn Excel, SQL, and PowerBI/Tableau.',
    curriculum: [
      { week: 'Week 1: Wrangling', topics: ['Advanced Excel', 'SQL Query Optimization'] },
      { week: 'Week 2-8: Visualization', topics: ['Tableau Dashboarding', 'Business Intelligence Storytelling'] },
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI & UX Design',
    icon: <Palette />,
    color: 'purple',
    duration: '8 Weeks',
    level: 'Beginner',
    desc: 'Design beautiful, user-centric digital experiences.',
    details: 'Master the entire design process, from user research and wireframing to high-fidelity prototyping using Figma.',
    curriculum: [
      { week: 'Week 1: UX Principles', topics: ['User Research', 'Empathy Mapping', 'Information Architecture'] },
      { week: 'Week 2-8: Interface Design', topics: ['Visual Hierarchy', 'Typography & Color Systems', 'Prototyping in Figma'] },
    ]
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    icon: <ShieldAlert />,
    color: 'red',
    duration: '12 Weeks',
    level: 'Intermediate',
    desc: 'Protect digital assets and defend against cyber threats.',
    details: 'Practical ethical hacking and defensive security strategies. Get ready for industry-standard certifications.',
    curriculum: [
      { week: 'Week 1: Networking', topics: ['TCP/IP Fundamentals', 'Security Protocols'] },
      { week: 'Week 2-12: Penetration Testing', topics: ['Vulnerability Assessment', 'Ethical Hacking Labs', 'Incident Response'] },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    icon: <Cloud />,
    color: 'sky',
    duration: '10 Weeks',
    level: 'Advanced',
    desc: 'Architect and manage cloud infrastructure on AWS and Azure.',
    details: 'Master cloud computing. Focus on scalability, security, and cost-optimization in modern environments.',
    curriculum: [
      { week: 'Week 1: Core Cloud', topics: ['Virtualization', 'Identity & Access Management'] },
      { week: 'Week 2-10: Architecture', topics: ['Infrastructure as Code (Terraform)', 'Kubernetes Orchestration', 'Serverless Design'] },
    ]
  }
];

const capacityCourses: Course[] = [
  {
    id: 'ai-biz',
    title: 'AI Business Development',
    icon: <Brain />,
    color: 'emerald',
    duration: '8 Weeks',
    level: 'Executive',
    desc: 'Integrate AI into business workflows to maximize ROI and efficiency.',
    details: 'Strategic leadership program for executives and business owners. Learn how to identify AI opportunities and oversee technical implementation.',
    curriculum: [
      { week: 'Week 1: AI Landscape', topics: ['LLM Fundamentals for Business', 'Market Opportunity Assessment'] },
      { week: 'Week 2-8: Implementation', topics: ['ROI Modeling', 'AI Governance & Ethics', 'Automation Strategy'] },
    ]
  },
  {
    id: 'no-code',
    title: 'Low/No-Code Development',
    icon: <Zap />,
    color: 'blue',
    duration: '6 Weeks',
    level: 'Beginner',
    desc: 'Empower non-technical teams to build internal tools and MVPs rapidly.',
    details: 'Rapid prototyping for non-developers. Master tools like Bubble, FlutterFlow, and Zapier to build production-grade tools without code.',
    curriculum: [
      { week: 'Week 1: Fundamentals', topics: ['Database Design for No-Code', 'Logic & Workflow Thinking'] },
      { week: 'Week 2-6: Tooling', topics: ['Bubble.io Mastery', 'Automation with Make/Zapier', 'MVP Launch'] },
    ]
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding',
    icon: <TrendingUp />,
    color: 'purple',
    duration: '4 Weeks',
    level: 'All Levels',
    desc: 'The future of rapid prototyping using natural language and AI agents.',
    details: 'Learn the cutting-edge art of "Vibe Coding"—using cursor, bolt.new, and natural language prompts to build enterprise-scale products at 10x speed.',
    curriculum: [
      { week: 'Week 1: AI Prompting', topics: ['System Instructions for Builders', 'Decomposition of Features'] },
      { week: 'Week 2-4: Rapid Build', topics: ['Cursor IDE Mastery', 'Deployment with Vercel/Netlify', 'AI-Driven Debugging'] },
    ]
  }
];

const alumniLogos = [
  'https://cdn.worldvectorlogo.com/logos/google-1-1.svg',
  'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
  'https://cdn.worldvectorlogo.com/logos/meta-1.svg',
  'https://cdn.worldvectorlogo.com/logos/amazon-2.svg',
  'https://cdn.worldvectorlogo.com/logos/netflix-3.svg',
  'https://cdn.worldvectorlogo.com/logos/spotify-1.svg',
];

const SolarSystemBackground = () => {
  const stars = useMemo(() => Array.from({ length: 100 }).map((_, i) => ({
    id: i, size: Math.random() * 2 + 0.5, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, duration: `${Math.random() * 3 + 2}s`, delay: `${Math.random() * 5}s`
  })), []);

  const planets = [
    { radius: '250px', duration: '35s', color: 'bg-blue-500/10', blur: 'blur-[40px]', size: 'w-24 h-24' },
    { radius: '450px', duration: '55s', color: 'bg-indigo-500/5', blur: 'blur-[60px]', size: 'w-32 h-32' },
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

const AdmissionsFormModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="glass-card w-full max-w-xl rounded-[3rem] relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 border-white/10">
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="p-12">
          <h3 className="text-3xl font-extrabold mb-2 tracking-tight">Student Application</h3>
          <p className="text-gray-400 mb-10 font-light">Enter your details to begin your journey with Xydge Academy.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" placeholder="+234..." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Experience Level</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all text-gray-400">
                  <option>Beginner (Zero experience)</option>
                  <option>Intermediate (Some coding)</option>
                  <option>Professional (Industry working)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Course of Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all text-gray-400">
                <option>Fullstack Web Development</option>
                <option>Mobile Engineering</option>
                <option>Data Science & AI</option>
                <option>Product Management</option>
                <option>Cybersecurity</option>
              </select>
            </div>

            <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl shadow-blue-900/20 transition-all mt-6 active:scale-95">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const EnrollModal: React.FC<{ isOpen: boolean; onClose: () => void; onOpenForm: () => void }> = ({ isOpen, onClose, onOpenForm }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="glass-card w-full max-w-lg rounded-[2.5rem] relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="p-10">
          <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Begin Your Journey</h3>
          <p className="text-gray-400 mb-10 font-light">Choose how you'd like to proceed with your enrollment.</p>
          
          <div className="space-y-4">
            <button 
              onClick={() => window.open('https://wa.me/2348083323258', '_blank')}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all group shadow-xl shadow-blue-900/20"
            >
              <div className="flex items-center space-x-4">
                <MessageCircle size={24} className="text-white" />
                <div className="text-left">
                  <p className="font-bold text-white">Chat with Admissions</p>
                  <p className="text-xs text-blue-100">Get instant answers on WhatsApp</p>
                </div>
              </div>
              <ArrowRight className="text-white/50 group-hover:text-white transition-colors" size={20} />
            </button>

            <button 
              onClick={onOpenForm}
              className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <ClipboardList size={24} className="text-blue-400" />
                <div className="text-left">
                  <p className="font-bold text-white">Fill Admissions Form</p>
                  <p className="text-xs text-gray-500">Provide your details for a callback</p>
                </div>
              </div>
              <ArrowRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
            </button>
          </div>
          
          <p className="text-[10px] text-center text-gray-600 uppercase font-bold tracking-[0.2em] mt-8">Secure Enrollment Process</p>
        </div>
      </div>
    </div>
  );
};

const Academy: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isAdmissionsFormOpen, setIsAdmissionsFormOpen] = useState(false);

  const openForm = () => {
    setIsEnrollModalOpen(false);
    setIsAdmissionsFormOpen(true);
  };

  if (selectedCourse) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <EnrollModal isOpen={isEnrollModalOpen} onClose={() => setIsEnrollModalOpen(false)} onOpenForm={openForm} />
        <AdmissionsFormModal isOpen={isAdmissionsFormOpen} onClose={() => setIsAdmissionsFormOpen(false)} />
        <button 
          onClick={() => setSelectedCourse(null)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Courses</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">{selectedCourse.title}</h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">{selectedCourse.details}</p>

            <h2 className="text-2xl font-bold mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {selectedCourse.curriculum.map((item, idx) => (
                <div key={idx} className="glass-card rounded-2xl border-white/5 overflow-hidden group">
                  <div className="p-6 bg-white/[0.02] border-b border-white/5 flex justify-between items-center group-hover:bg-blue-600/5 transition-colors">
                    <h3 className="text-lg font-bold text-blue-400">{item.week}</h3>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Live Mentorship</div>
                  </div>
                  <div className="p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle2 size={16} className="text-emerald-500 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-[2rem] sticky top-32 border-blue-500/20 shadow-2xl shadow-blue-900/10">
              <h3 className="text-xl font-bold mb-6">Course Information</h3>
              <div className="space-y-6 mb-10">
                <div className="flex items-center text-gray-300">
                  <Clock className="mr-4 text-blue-400" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Duration</p>
                    <p className="font-semibold">{selectedCourse.duration}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-4 text-blue-400" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Level</p>
                    <p className="font-semibold">{selectedCourse.level}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="mr-4 text-blue-400" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Certificate</p>
                    <p className="font-semibold">Industry Recognized</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button 
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95 mb-4"
                >
                  Enroll Now
                </button>
                <p className="text-[10px] text-center text-gray-500 uppercase font-bold tracking-widest">Cohort starting soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <EnrollModal isOpen={isEnrollModalOpen} onClose={() => setIsEnrollModalOpen(false)} onOpenForm={openForm} />
      <AdmissionsFormModal isOpen={isAdmissionsFormOpen} onClose={() => setIsAdmissionsFormOpen(false)} />
      
      {/* 1. Starry Solar System Hero */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden flex flex-col items-center min-h-[85vh] justify-center text-center">
        <SolarSystemBackground />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase mb-8 block">The Future of Tech Education</span>
          <h1 className="text-6xl md:text-9xl font-extrabold mb-12 tracking-tighter leading-none text-white">Xydge Academy</h1>
          <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            High-performance engineering immersion designed to turn ambitious builders into industry-leading software experts.
          </p>
        </div>
      </section>

      {/* 2. Why Choose Our Academy */}
      <section className="py-24 px-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Why Choose Our Academy?</h2>
            <p className="text-gray-400 mt-6 text-xl font-light">The Xydge difference lies in our high-fidelity approach to learning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[3rem] border-white/5">
              <Zap className="text-blue-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Project-First Learning</h3>
              <p className="text-gray-500 font-light leading-relaxed">We don't just teach theory. You build production-ready applications that serve as your professional portfolio.</p>
            </div>
            <div className="glass-card p-10 rounded-[3rem] border-white/5">
              <Users className="text-purple-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Senior Mentorship</h3>
              <p className="text-gray-500 font-light leading-relaxed">Get direct code reviews and architectural advice from engineers who build world-class products daily.</p>
            </div>
            <div className="glass-card p-10 rounded-[3rem] border-white/5">
              <Globe className="text-emerald-500 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Global Network</h3>
              <p className="text-gray-500 font-light leading-relaxed">Graduate into an elite ecosystem of hiring partners ranging from fast-growth startups to Fortune 500s.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Core Training Programs */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Core Training Programs</h2>
            <p className="text-gray-400">Deep-dive cohorts designed for career growth. Select to explore the weekly roadmap.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCourses.map((course) => (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourse(course)}
                className="glass-card p-8 rounded-[3rem] border-white/5 hover:border-blue-500/40 transition-all cursor-pointer group flex flex-col justify-between h-[360px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[40px] -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-300 mb-8 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all group-hover:scale-110">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-light">{course.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{course.duration} • {course.level}</div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <ArrowRight className="text-gray-400 group-hover:text-white" size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capacity Development Training (Now uniform with core cards) */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Capacity Training for Businesses</h2>
            <p className="text-gray-400">Upskilling teams to leverage the latest in AI and low-code technologies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capacityCourses.map((course) => (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourse(course)}
                className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-emerald-500/20 transition-all group relative overflow-hidden flex flex-col justify-between h-[380px] cursor-pointer"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 blur-[60px] -z-10"></div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed line-clamp-3">{course.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{course.duration} • {course.level}</div>
                  <div className="text-emerald-400 font-bold text-sm flex items-center group/btn">
                    View Modules <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Where Our Students Work Marquee */}
      <section className="py-32 overflow-hidden border-y border-white/5">
        <p className="text-center text-sm font-black text-gray-500 uppercase tracking-[0.4em] mb-16">Where Our Students Work</p>
        <div className="flex w-[200%] animate-carousel-left marquee-mask opacity-40">
          <div className="flex items-center space-x-24 px-12">
            {['Google', 'Meta', 'Microsoft', 'Stripe', 'Amazon', 'Netflix', 'Airbnb', 'Spotify'].map((brand, i) => (
              <span key={i} className="text-4xl font-bold tracking-tighter text-white/50 hover:text-white transition-colors cursor-default">{brand}</span>
            ))}
          </div>
          <div className="flex items-center space-x-24 px-12">
            {['Google', 'Meta', 'Microsoft', 'Stripe', 'Amazon', 'Netflix', 'Airbnb', 'Spotify'].map((brand, i) => (
              <span key={`dup-${i}`} className="text-4xl font-bold tracking-tighter text-white/50 hover:text-white transition-colors cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Students Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Voices of Success</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">Hear from the engineers and analysts who launched their careers through Xydge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Frontend Engineer @ Google', text: 'Xydge Academy transformed my career path. The mentorship I received was unparalleled.', image: 'https://i.pravatar.cc/150?u=sarah' },
              { name: 'Michael Chen', role: 'Data Scientist @ Meta', text: 'The intensive Data Science program gave me practical skills my degree didn\'t.', image: 'https://i.pravatar.cc/150?u=michael' },
              { name: 'Amara Okafor', role: 'Cybersecurity Analyst', text: 'The focus on hands-on labs was a game changer. Xydge teaches you how to think.', image: 'https://i.pravatar.cc/150?u=amara' }
            ].map((t, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] border-white/5 relative flex flex-col justify-between h-full group hover:border-blue-500/20 transition-all">
                <Quote className="absolute top-8 right-8 text-blue-500/10" size={60} />
                <div>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400 mr-1" />)}
                  </div>
                  <p className="text-gray-300 italic mb-10 leading-relaxed font-light">"{t.text}"</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-blue-500/20" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase font-black tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Xydge Academy is the Best - Bullets with images */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2400" 
                alt="Xydge Learning Environment" 
                className="rounded-[4rem] shadow-2xl border border-white/10 opacity-70"
              />
              <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-3xl border-white/10 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white shadow-lg">100%</div>
                  <p className="text-xs font-black uppercase tracking-widest">Practical <br /> Immersion</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tight">The Best for a Reason</h2>
              <ul className="space-y-8">
                {[
                  { title: "Industry-Standard Stack", desc: "Learn with the same tools used by the top 1% of tech giants." },
                  { title: "Real-World Simulations", desc: "Experience the intensity of high-stakes product development cycles." },
                  { title: "Lifetime Career Support", desc: "Our commitment to your success doesn't end at graduation." },
                  { title: "Global Accreditation", desc: "Certificates that carry weight in international engineering markets." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-6">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-xl text-blue-500"><CheckCircle2 size={24} /></div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[120px] -z-10 rounded-full"></div>
          <h2 className="text-5xl md:text-8xl font-extrabold mb-12 tracking-tighter leading-tight">Your Digital Mastery <br /> Starts Here.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => setIsEnrollModalOpen(true)}
              className="px-14 py-7 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-2xl shadow-2xl active:scale-95 transition-all flex items-center justify-center"
            >
              Enroll for Cohort 2025 <ArrowRight className="ml-3" size={24} />
            </button>
            <button className="px-14 py-7 glass-card hover:bg-white/5 border-white/10 text-white font-bold text-xl rounded-2xl active:scale-95 transition-all flex items-center justify-center">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
