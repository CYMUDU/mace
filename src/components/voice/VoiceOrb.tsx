import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './voice.css'

interface Point {
  x: number
  y: number
  z: number
}

export const VoiceOrb: React.FC = () => {
  const [neuralPoints, setNeuralPoints] = useState<Point[]>([])
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Generate precise points for the inner neural core
    const points: Point[] = []
    for (let i = 0; i < 16; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const x = Math.sin(phi) * Math.cos(theta)
      const y = Math.sin(phi) * Math.sin(theta)
      const z = Math.cos(phi)
      points.push({ x, y, z })
    }
    setNeuralPoints(points)
  }, [])

  // Dynamic Theme Colors based on Interaction State
  const theme = isExpanded 
    ? { primary: '#FF0055', secondary: '#9D00FF', bg: '#1A000A', glow: 'rgba(255, 0, 85, 0.4)' } // Overdrive Pink
    : { primary: '#00E5FF', secondary: '#00A3FF', bg: '#04070D', glow: 'rgba(0, 229, 255, 0.2)' } // M.A.C.E. Cyan

  return (
    // 1. The Anchor Wrapper: This takes up the exact remaining space below your text and centers the orb.
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      
      {/* 2. The Scaling Container: Animates physical width/height so it never breaks the layout flow */}
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          width: isExpanded ? '900px' : '320px',
          height: isExpanded ? '900px' : '320px',
        }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.15 }}
        className="absolute z-0 flex items-center justify-center cursor-pointer"
      >
        
        {/* Outer Telemetry Ring */}
        <motion.div
          animate={{ rotate: isExpanded ? 720 : 360 }}
          transition={{ duration: isExpanded ? 15 : 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-[1px] border-dashed border-[#12202D] rounded-full opacity-60"
        />

        {/* Outer Energy Ring 1 - Uses percentage inset so it scales perfectly */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[6%] border rounded-full transition-colors duration-700"
          style={{ borderColor: `${theme.primary}33`, boxShadow: `0 0 40px ${theme.primary}1A` }}
        >
          <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full transition-colors duration-700" style={{ backgroundColor: theme.primary, boxShadow: `0 0 10px ${theme.primary}` }} />
          <div className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full transition-colors duration-700" style={{ backgroundColor: theme.primary, boxShadow: `0 0 10px ${theme.primary}` }} />
        </motion.div>

        {/* Inner Energy Ring 2 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[14%] border rounded-full transition-colors duration-700"
          style={{ borderColor: `${theme.secondary}4D` }}
        />

        {/* Wireframe Globe Base */}
        <div className="absolute inset-[18%] rounded-full overflow-hidden border transition-colors duration-700"
             style={{ borderColor: `${theme.primary}4D`, boxShadow: `inset 0 0 60px ${theme.glow}` }}>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: isExpanded ? 20 : 60, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full"
          >
            <svg className="w-full h-full opacity-40 transition-colors duration-700" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="49" fill="none" stroke={theme.primary} strokeWidth="0.5" />
               <ellipse cx="50" cy="50" rx="20" ry="49" fill="none" stroke={theme.primary} strokeWidth="0.5" />
               <ellipse cx="50" cy="50" rx="49" ry="20" fill="none" stroke={theme.primary} strokeWidth="0.5" />
               <line x1="50" y1="1" x2="50" y2="99" stroke={theme.primary} strokeWidth="0.5" />
               <line x1="1" y1="50" x2="99" y2="50" stroke={theme.primary} strokeWidth="0.5" />
            </svg>
          </motion.div>
        </div>

        {/* Neural Network Inner Core */}
        <svg className="absolute inset-[18%] w-[64%] h-[64%]" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="neural-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={theme.primary} stopOpacity="0.8" />
              <stop offset="50%" stopColor={theme.secondary} stopOpacity="0.2" />
              <stop offset="100%" stopColor={theme.primary} stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Neural connections */}
          {neuralPoints.map((point, i) => {
            const nextPoint = neuralPoints[(i + 1) % neuralPoints.length]
            const scale = 110; 
            const x1 = 150 + point.x * scale; const y1 = 150 + point.y * scale
            const x2 = 150 + nextPoint.x * scale; const y2 = 150 + nextPoint.y * scale

            return (
              <motion.line
                key={`neural-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="url(#neural-line)" strokeWidth="1"
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )
          })}

          {/* Neural nodes */}
          {neuralPoints.map((point, i) => (
            <motion.circle
              key={`node-${i}`} cx={150 + point.x * 110} cy={150 + point.y * 110} r="3"
              fill={theme.primary}
              className="transition-colors duration-700"
              animate={{
                r: [2, 3.5, 2],
                opacity: [0.4, 1, 0.4],
                filter: [`drop-shadow(0 0 2px ${theme.primary})`, `drop-shadow(0 0 8px ${theme.primary})`, `drop-shadow(0 0 2px ${theme.primary})`]
              }}
              transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
            />
          ))}
        </svg>

        {/* Central Core Base Layer */}
        <motion.div
          animate={{ scale: [0.98, 1.05, 0.98] }}
          transition={{ duration: isExpanded ? 1.5 : 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute z-10 w-[35%] h-[35%] max-w-[160px] max-h-[160px] rounded-full backdrop-blur-md border transition-colors duration-700 flex items-center justify-center"
          style={{ 
            backgroundColor: `${theme.bg}CC`, 
            borderColor: `${theme.primary}66`,
            boxShadow: `0 0 50px ${theme.glow}, inset 0 0 30px ${theme.glow}` 
          }}
        >
          {/* Animated Scanner Radar inside core */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: isExpanded ? 1.5 : 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full transition-colors duration-700"
            style={{ background: `conic-gradient(from 0deg, transparent 70%, ${theme.primary}4D 100%)` }}
          />

          {/* The Command Microphone Hardware */}
          <div className="relative z-20 w-16 h-16 rounded-full flex items-center justify-center">
            {/* Pulse Rings */}
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
              transition={{ duration: isExpanded ? 1 : 2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border transition-colors duration-700"
              style={{ borderColor: theme.primary, boxShadow: `0 0 20px ${theme.primary}` }}
            />

            {/* Outer Dark Ring Hardware */}
            <div className="absolute inset-1 rounded-full border border-[#12202D] bg-[#0B111A] transition-colors duration-700" 
                 style={{ boxShadow: `0 0 15px ${theme.glow}` }} />

            {/* Center Mic Button */}
            <div className="relative z-30 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-700"
                 style={{ backgroundColor: theme.bg, borderColor: `${theme.primary}99`, boxShadow: `0 0 15px ${theme.primary}` }}>
              <svg className="w-4 h-4 transition-colors duration-700" style={{ color: theme.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Ambient Data Particles */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          return (
            <motion.div
              key={`data-particle-${i}`}
              animate={{
                x: [0, Math.cos(angle) * (isExpanded ? 120 : 40), 0],
                y: [0, Math.sin(angle) * (isExpanded ? 120 : 40), 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut', delay: (i / 12) * 2 }}
              className="absolute w-1 h-1 rounded-full transition-colors duration-700"
              style={{
                backgroundColor: theme.primary,
                left: '50%', top: '50%',
                marginLeft: `${Math.cos(angle) * 35}%`, 
                marginTop: `${Math.sin(angle) * 35}%`,
                boxShadow: `0 0 8px ${theme.primary}`
              }}
            />
          )
        })}
      </motion.div>
    </div>
  )
}