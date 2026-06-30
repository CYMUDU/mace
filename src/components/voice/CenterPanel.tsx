import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { VoiceOrb } from './VoiceOrb'
import { VoiceAssistant } from './VoiceAssistant'
import './voice.css'

export const CenterPanel: React.FC = () => {
  // UI OVERRIDE: We are using local state to bypass appStore error temporarily.
  // This ensures the M.A.C.E. UI renders immediately.
  const [isListening, setIsListening] = useState(false)

  // Optional: A simple effect to toggle the state every 5 seconds so you can see the M.A.C.E. animations switch
  useEffect(() => {
    const interval = setInterval(() => {
      setIsListening(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex-1 relative flex flex-col items-center justify-between overflow-hidden min-h-screen bg-[#04070D] font-sans">
      
      {/* BACKGROUND CORE AURA */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(4, 7, 13, 0) 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* HUD TARGETING BRACKETS */}
      <div className="absolute inset-0 pointer-events-none z-0 p-10">
        {/* Top Left */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-[#12202D]">
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
        </div>
        {/* Top Right */}
        <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-[#12202D]">
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-[#12202D]">
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-[#12202D]">
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
        </div>

        {/* Subtle Horizontal Equator Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#12202D] to-transparent opacity-50 -translate-y-1/2" />
        {/* Subtle Vertical Prime Meridian Line */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#12202D] to-transparent opacity-50 -translate-x-1/2" />
      </div>

      {/* TOP SECTION: Voice Bar & OS Lockup */}
      <div className="relative w-full flex flex-col items-center pt-8 px-8 z-20">
        <div className="w-full max-w-4xl self-start mb-6 ">
          <VoiceAssistant isListening={isListening} />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-col items-center"
        >
          <h1 className="text-[#E6F7FF] text-2xl tracking-[0.4em] font-light mb-2 uppercase drop-shadow-[0_0_15px_rgba(230,247,255,0.3)]">
            M.A.C.E. OS
          </h1>
          <p className="text-[#7FA8C7] text-[10px] tracking-[0.3em] font-semibold uppercase">
            Sovereignty. Intelligence. Loyalty.
          </p>
        </motion.div>
      </div>

      {/* CENTER SECTION: The AI Core / Globe */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        className="relative flex-1 w-full flex items-center justify-center z-10 my-4"
      >
        <VoiceOrb />
      </motion.div>

      {/* BOTTOM SECTION: Active Status */}
      <div className="relative w-full flex flex-col items-center pb-16 z-20 min-h-[120px]">
        <motion.div
          animate={isListening ? { 
            opacity: [0.6, 1, 0.6], 
            textShadow: ["0 0 10px rgba(0,229,255,0)", "0 0 25px rgba(0,229,255,0.6)", "0 0 10px rgba(0,229,255,0)"] 
          } : { 
            opacity: 0.4,
            textShadow: "0 0 0px rgba(0,229,255,0)"
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`text-lg tracking-[0.25em] font-medium mb-3 uppercase ${isListening ? 'text-[#00E5FF]' : 'text-[#7FA8C7]'}`}
        >
          {isListening ? "Active Listening" : "System Standby"}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[#7FA8C7] text-sm tracking-widest font-light"
        >
          {isListening ? "Awaits your command, Boss." : "Core processes optimized."}
        </motion.p>
      </div>

    </div>
  )
}