
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-white/5 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center ">
             <img src="/assets/xydgecommercialbg.png" alt="Xydge Logo" className="h-14 w-auto" />
             <span className="text-2xl font-bold">Xydge</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © 2026 Xydge, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
