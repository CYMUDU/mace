import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Globe, Play, Folder, Share2, Smartphone } from 'lucide-react';

export const DesktopCommander: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-[#060B14] border border-[#12202D] border-l-2 border-l-[#FFB800] rounded-xl p-6 w-full"
    >
      <div className="mb-6">
        <h2 className="text-[#FFB800] font-bold tracking-widest uppercase text-sm mb-1">
          09 Desktop Commander Agent
        </h2>
        <p className="text-[#7FA8C7] text-xs">Complete desktop task automation</p>
      </div>

      {/* App Control Grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <button className="flex flex-col items-center justify-center gap-2 bg-[#0A111A] border border-[#12202D] hover:border-[#FFB800] text-[#7FA8C7] hover:text-[#E6F7FF] p-4 rounded-md transition-all">
          <Monitor className="w-5 h-5 text-[#00E5FF]" />
          <span className="text-[10px] uppercase tracking-wide mt-1">Open Apps</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 bg-[#0A111A] border border-[#12202D] hover:border-[#FFB800] text-[#7FA8C7] hover:text-[#E6F7FF] p-4 rounded-md transition-all">
          <Globe className="w-5 h-5 text-[#00E5FF]" />
          <span className="text-[10px] uppercase tracking-wide mt-1">Browse Web</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 bg-[#0A111A] border border-[#12202D] hover:border-[#FFB800] text-[#7FA8C7] hover:text-[#E6F7FF] p-4 rounded-md transition-all">
          <Play className="w-5 h-5 text-green-500" />
          <span className="text-[10px] uppercase tracking-wide mt-1">Play Media</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 bg-[#0A111A] border border-[#12202D] hover:border-[#FFB800] text-[#7FA8C7] hover:text-[#E6F7FF] p-4 rounded-md transition-all">
          <Folder className="w-5 h-5 text-[#FFB800]" />
          <span className="text-[10px] uppercase tracking-wide mt-1">Files</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 bg-[#0A111A] border border-[#12202D] hover:border-[#FFB800] text-[#7FA8C7] hover:text-[#E6F7FF] p-4 rounded-md transition-all">
          <Share2 className="w-5 h-5 text-[#00E5FF]" />
          <span className="text-[10px] uppercase tracking-wide mt-1">Share</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-2 bg-[#0A111A] border border-[#12202D] hover:border-[#FFB800] text-[#7FA8C7] hover:text-[#E6F7FF] p-4 rounded-md transition-all">
          <Smartphone className="w-5 h-5 text-[#00E5FF]" />
          <span className="text-[10px] uppercase tracking-wide mt-1">Mobile</span>
        </button>
      </div>

      {/* Launch Button Area */}
      <div className="flex flex-col items-center mt-auto">
        <button className="w-full bg-gradient-to-r from-[#00E5FF] to-[#0088FF] text-black font-extrabold tracking-[0.2em] uppercase py-4 rounded-md hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
          Launch Commander
        </button>
        <div className="flex items-center gap-2 mt-4 text-[10px] tracking-widest uppercase font-bold text-green-500">
          <span>Status: Active & Ready</span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
        </div>
      </div>
    </motion.div>
  );
};