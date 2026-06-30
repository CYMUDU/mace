import React from 'react'
import { motion } from 'framer-motion'

interface VoiceAssistantProps {
  isListening?: boolean
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ isListening = true }) => {
  // PERFORMANCE OPTIMIZATION: Reduce from 128 to 64 bars.
  // Design accurate: Center has high variance, edges taper off into dots.
  const barCount = 64;
  
  return (
    <div className="flex flex-row items-center justify-center gap-6 w-full py-2">
      
      {/* HUD Telemetry: Voice-Link Status */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-2 -translate-y-3 pl-4"
      >
        <span className="text-[#00E5FF] text-[9px] tracking-widest uppercase font-bold">
        Voice-Link: Active
        </span>
        <motion.div 
          animate={isListening ? { opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] } : { opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e] animate-pulse"
        />
      </motion.div>

      {/* Horizontal Waveform SVG */}
      <motion.svg
        className="w-full max-w-xs h-6 voice-waveform  mx-auto -translate-x-20"
        viewBox="0 0 512 48"
        preserveAspectRatio="xMidYMid meet"
        initial={{ opacity: 0 }}
        animate={{ opacity: isListening ? 1 : 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
            <stop offset="30%" stopColor="#00E5FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E6F7FF" stopOpacity="1" />
            <stop offset="70%" stopColor="#00E5FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
          </linearGradient>
          <filter id="wave-glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle Center Axis Line */}
        <line x1="0" y1="24" x2="512" y2="24" stroke="#00E5FF" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 4" />

        {/* Optimized Animated Waveform (Single centered rect per bar) */}
        {[...Array(barCount)].map((_, i) => {
          // Calculate distance from center (0 to 1)
          const centerDist = Math.abs((i - barCount / 2) / (barCount / 2));
          
          // Edges are small dots (height 2-4), center is highly variable
          const isEdge = centerDist > 0.7;
          
          // Base height formula creating an envelope shape
          const envelope = Math.max(0.1, 1 - Math.pow(centerDist, 2));
          const baseHeight = isEdge ? 2 : (10 + Math.sin((i / 8) * Math.PI) * 15) * envelope;
          
          const x = (i / barCount) * 512;
          const width = 512 / barCount - 2; // -2 for gap

          return (
            <motion.rect
              key={`wave-${i}`}
              x={x + 1} // +1 to center within gap
              y={24} // Start exactly at vertical center
              width={width}
              height={baseHeight}
              fill="url(#wave-gradient)"
              filter="url(#wave-glow)"
              rx={1}
              animate={isListening ? {
                height: [
                  baseHeight * 0.4, 
                  baseHeight * (1 + Math.random() * 0.5), 
                  baseHeight * 0.4
                ],
                y: [
                  24 - (baseHeight * 0.4) / 2, 
                  24 - (baseHeight * (1 + Math.random() * 0.5)) / 2, 
                  24 - (baseHeight * 0.4) / 2
                ],
              } : {
                height: isEdge ? 2 : baseHeight * 0.2,
                y: 24 - (isEdge ? 2 : baseHeight * 0.2) / 2,
              }}
              transition={{
                duration: 0.4 + Math.random() * 0.3,
                delay: isEdge ? 0 : (i % 8) * 0.05,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          )
        })}
      </motion.svg>
    </div>
  )
}