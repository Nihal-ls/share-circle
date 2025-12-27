import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#FFF8F1]  pt-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Simple Horizontal Divider */}
        
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Logo & Brand */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">ShareCircle</h2>
            <p className="text-gray-500 max-w-sm text-sm italic">
              "Pass on what you don't need, help someone in want."
            </p>
          </div>

          {/* Simple Link Bar */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Safety Guide</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          {/* Copyright & Socials */}
          <div className="pt-8 w-full border-t border-orange-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© 2025 ShareCircle. All rights reserved.</p>
            
            <div className="flex gap-4">
               {/* Simple Circle Social Icons */}
               {[1, 2, 3].map((i) => (
                 <motion.div 
                  key={i}
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 rounded-full bg-white border border-orange-100 flex items-center justify-center cursor-pointer hover:border-orange-400 transition-colors"
                 >
                   <div className="w-4 h-4 bg-orange-200 rounded-sm"></div>
                 </motion.div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;