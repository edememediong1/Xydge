
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Headphones, Code, GraduationCap, HelpCircle } from 'lucide-react';

const channels = [
  { name: 'General Support', icon: <Headphones size={18} />, number: '2348000000001', color: 'text-blue-400' },
  { name: 'Software & Services', icon: <Code size={18} />, number: '2348000000002', color: 'text-purple-400' },
  { name: 'Training & Academy', icon: <GraduationCap size={18} />, number: '2348000000003', color: 'text-emerald-400' },
  { name: 'Help', icon: <HelpCircle size={18} />, number: '2348000000004', color: 'text-rose-400' },
];

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="glass-card mb-4 w-72 rounded-[2rem] overflow-hidden border-white/10 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h3 className="font-bold text-lg">Chat with Xydge</h3>
            <p className="text-xs text-blue-100 opacity-80">Select a channel to start a conversation</p>
          </div>
          
          <div className="p-2 space-y-1 bg-gray-950/40">
            {channels.map((channel, idx) => (
              <button
                key={idx}
                onClick={() => openWhatsApp(channel.number)}
                className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-xl bg-white/5 ${channel.color}`}>
                    {channel.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-200">{channel.name}</span>
                </div>
                <ChevronRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
              </button>
            ))}
          </div>
          
          <div className="p-4 text-center border-t border-white/5">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Typically replies in minutes</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-[#25D366]'
        }`}
      >
        {isOpen ? <X className="text-white" size={28} /> : <MessageCircle className="text-white" size={32} fill="white" />}
      </button>
    </div>
  );
};

export default WhatsAppChat;
