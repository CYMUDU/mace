import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { LeftSidebar } from '@components/layout/LeftSidebar'
import { TopSystemBar } from '@components/layout/TopSystemBar'
import { BottomDock } from '@components/layout/BottomDock'
import { VoiceCore } from '@components/voice/VoiceCore'
import { LiveTranscriptTerminal } from '@components/terminal/LiveTranscriptTerminal'
import { SystemControlPanel } from '@components/dashboard/SystemControlPanel'

import { MedicalResearchHub } from '@components/medical/MedicalResearchHub'
import { DeconstructData } from '@components/medical/DeconstructData'

const Dashboard: React.FC = () => {

const [activeView, setActiveView] = useState('voice');


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen bg-cyber-background text-cyber-text flex flex-col overflow-hidden"
    >
      {/* Top Bar (Fixed) */}
      <TopSystemBar />

      {/* Main Workspace */}
      <div className="flex-1 flex w-full overflow-hidden">
        
        {/* 1. Left Sidebar & Image Portal */}
        <div className="w-[15%] min-w-[200px] border-r border-[#12202D] flex flex-col justify-between overflow-y-auto custom-scroll pb-24 relative">
          
          <div className="flex-1">
            <LeftSidebar />
          </div>

          {/* --- HACKER IMAGE PORTAL --- */}
          <div className="mt-auto pt-6 px-4 pb-2 border-t border-[#12202D]/40">
            <Link
              to="/agents"
              className="group flex flex-col items-center justify-center p-3 rounded-xl border border-transparent hover:border-amber-500/30 hover:bg-black/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-500 cursor-pointer"
            >
              {/* Creative blending, grayscale to color, and scale effect */}
              <img 
                src="/image.png" 
                alt="Ghost Protocol Portal" 
                className="w-16 h-16 object-cover rounded-lg opacity-50 grayscale contrast-125 mix-blend-screen group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-all duration-500"
              />
              
              <span className="mt-3 text-[10px] tracking-[0.3em] text-white/30 group-hover:text-amber-400 font-bold uppercase transition-colors duration-500">
                Ghost_Net
              </span>
            </Link>
             
             <Link 
                to="/tactical-hub" 
                className="flex items-center justify-center p-2 rounded-md border border-transparent hover:border-[#00E5FF] hover:bg-[#0A111A] text-[#7FA8C7] hover:text-[#00E5FF] transition-all group"
                title="Tactical Hub"
>
              {/* You can change this SVG to any Lucide icon you want! */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              
                </svg>
              </Link>
          </div>

        </div>
        
        {/* 2. Main Voice Area */}
        <div className="flex-1 relative bg-[#04070D] border-r border-[#12202D] overflow-hidden">
          
          {/* --- 1. YOUR EXACT ORIGINAL CODE (Stays in the back at z-0) --- */}
          <div className="absolute inset-0 flex items-center justify-center w-full h-full z-0">
            <VoiceCore className="w-full h-full" />
          </div>

          {/* --- 2. HACKER MASK OVERLAY (Sits on top at z-10) --- */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {/* Removed all filters. Just pure opacity so the hat and mask remain visible. */}
            {/* Set to 10% opacity so it looks like a faint reflection on the screen. */}
            <img 
              src="/bhat.png" 
              alt="System Override Watermark" 
              className="w-[700px] h-[700px] object-contain opacity-25 pointer-events-none translate-y-20"
            />
          </div>
          
        </div>

        {/* 3. Right Panel - Transcript */}
        <div className="w-[20%] min-w-[250px] bg-cyber-panels z-10 border-r border-[#12202D] overflow-y-auto custom-scroll pb-24">
          <LiveTranscriptTerminal className="h-full" />
        </div>

        {/* 4. Far Right Panel - Combined Control & Medical Hub */}
        <div className="w-[22%] min-w-[300px] bg-cyber-background z-10 overflow-y-auto custom-scroll pb-24">
          <div className="p-4 flex flex-col gap-6">
            <SystemControlPanel />
            <MedicalResearchHub />
            <DeconstructData />
          </div>
        </div>

      </div>

      {/* Bottom Dock (Fixed) */}
      <BottomDock />
    </motion.div>
  )
}

export default Dashboard