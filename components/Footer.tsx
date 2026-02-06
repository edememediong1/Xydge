
import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
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
